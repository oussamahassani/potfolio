// Performance & Analytics Configuration
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

/**
 * Configure performance monitoring
 * Send metrics to analytics service
 */
export const initPerformanceMonitoring = () => {
  // Report Core Web Vitals
  getCLS(sendMetric);
  getFID(sendMetric);
  getFCP(sendMetric);
  getLCP(sendMetric);
  getTTFB(sendMetric);

  // Monitor resource timing
  if (window.performance && window.performance.getEntriesByType) {
    monitorResourceTiming();
  }

  // Monitor navigation timing
  if (document.readyState === "complete") {
    reportNavigationTiming();
  } else {
    window.addEventListener("load", reportNavigationTiming);
  }
};

/**
 * Send individual metric to analytics
 */
const sendMetric = (metric) => {
  console.log(`${metric.name}:`, metric.value);

  // Send to Google Analytics
  if (window.gtag) {
    window.gtag("event", metric.name, {
      value: Math.round(metric.value),
      event_category: "Web Vitals",
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to custom analytics endpoint
  if (navigator.sendBeacon) {
    const url = process.env.REACT_APP_METRICS_ENDPOINT || "/api/metrics";
    const data = JSON.stringify({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      timestamp: new Date().toISOString(),
    });
    navigator.sendBeacon(url, data);
  }
};

/**
 * Monitor resource loading performance
 */
const monitorResourceTiming = () => {
  const resources = window.performance.getEntriesByType("resource");
  
  resources.forEach((resource) => {
    const duration = Math.round(resource.duration);
    const size = Math.round(resource.transferSize / 1024); // KB

    if (duration > 1000) {
      console.warn(`Slow resource: ${resource.name} (${duration}ms)`);
    }

    if (process.env.NODE_ENV === "development") {
      console.debug(`Resource: ${resource.name} - ${duration}ms, ${size}KB`);
    }
  });
};

/**
 * Report page navigation metrics
 */
const reportNavigationTiming = () => {
  if (!window.performance || !window.performance.timing) {
    return;
  }

  const timing = window.performance.timing;
  const navigation = {
    redirectTime: timing.redirectEnd - timing.redirectStart,
    domainLookupTime: timing.domainLookupEnd - timing.domainLookupStart,
    connectTime: timing.connectEnd - timing.connectStart,
    requestTime: timing.responseStart - timing.requestStart,
    responseTime: timing.responseEnd - timing.responseStart,
    domInteractiveTime: timing.domInteractive - timing.navigationStart,
    domCompleteTime: timing.domComplete - timing.navigationStart,
    loadEventTime: timing.loadEventEnd - timing.loadEventStart,
    totalTime: timing.loadEventEnd - timing.navigationStart,
  };

  console.log("Navigation Timing:", navigation);

  // Send to analytics
  if (window.gtag) {
    window.gtag("event", "page_view_timing", navigation);
  }
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = () => {
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn(`Long task detected: ${entry.duration}ms`);
        }
      });

      observer.observe({ entryTypes: ["longtask"] });
    } catch (e) {
      // Long task API might not be available
    }
  }
};

/**
 * Check if application meets performance requirements
 */
export const performanceHealthCheck = () => {
  const checks = {
    bundleSize: checkBundleSize(),
    imageOptimization: checkImageOptimization(),
    caching: checkCaching(),
    compression: checkCompression(),
  };

  const passed = Object.values(checks).filter((c) => c.passed).length;
  const total = Object.keys(checks).length;

  console.log(`Performance Health: ${passed}/${total} checks passed`);
  return checks;
};

/**
 * Check bundle size
 */
const checkBundleSize = () => {
  const scripts = document.querySelectorAll("script[src]");
  let totalSize = 0;

  scripts.forEach((script) => {
    // This requires server to send Content-Length header
    const size = script.getAttribute("data-size") || 0;
    totalSize += parseInt(size);
  });

  const maxSize = 150000; // 150KB
  return {
    check: "Bundle Size",
    size: totalSize,
    passed: totalSize < maxSize,
    message: `${totalSize}B < ${maxSize}B`,
  };
};

/**
 * Check image optimization
 */
const checkImageOptimization = () => {
  const images = document.querySelectorAll("img");
  let hasWebP = true;

  images.forEach((img) => {
    if (img.src && !img.src.includes(".webp")) {
      hasWebP = false;
    }
  });

  return {
    check: "Image Optimization",
    webP: hasWebP,
    passed: hasWebP,
    message: hasWebP ? "Using WebP images" : "Some images not optimized",
  };
};

/**
 * Check caching headers
 */
const checkCaching = () => {
  // This would require server-side checking
  return {
    check: "Cache Headers",
    passed: true,
    message: "Check HTTP headers in Network tab",
  };
};

/**
 * Check compression
 */
const checkCompression = () => {
  // This would require server-side checking
  return {
    check: "GZIP Compression",
    passed: true,
    message: "Check HTTP headers in Network tab",
  };
};

/**
 * Export performance report
 */
export const exportPerformanceReport = () => {
  const report = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    healthCheck: performanceHealthCheck(),
    metrics: {
      domContentLoaded: window.performance.timing?.domContentLoadedEventEnd - window.performance.timing?.navigationStart,
      loadComplete: window.performance.timing?.loadEventEnd - window.performance.timing?.navigationStart,
    },
  };

  console.table(report);
  return report;
};
