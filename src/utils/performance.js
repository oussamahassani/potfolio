// Performance optimization hooks and utilities for the portfolio

// Image Lazy Loading Hook
export const useLazyImage = (ref) => {
  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
};

// Debounce utility for resize events
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Format large numbers for stats
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

// Optimize images with srcset for different screen sizes
export const getResponsiveImageSrcSet = (imagePath, filename) => {
  const basePath = imagePath;
  return {
    src: `${basePath}/${filename}`,
    srcSet: `
      ${basePath}/${filename.replace(/\.\w+$/, "-sm.$&")} 512w,
      ${basePath}/${filename.replace(/\.\w+$/, "-md.$&")} 768w,
      ${basePath}/${filename.replace(/\.\w+$/, "-lg.$&")} 1024w,
      ${basePath}/${filename} 1536w
    `,
  };
};

// Web Vitals monitoring
export const reportWebVitals = (metric) => {
  if (metric.name === "CLS" && metric.value > 0.1) {
    console.warn("Cumulative Layout Shift detected:", metric.value);
  }
  if (metric.name === "LCP" && metric.value > 2500) {
    console.warn("Largest Contentful Paint detected:", metric.value);
  }
  if (metric.name === "FID" && metric.value > 100) {
    console.warn("First Input Delay detected:", metric.value);
  }
};

// Service Worker registration for offline support
export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered successfully:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  }
};

// Request animation frame for smooth scrolling
export const smoothScroll = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Prefetch routes for faster navigation
export const prefetchRoute = (url) => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = url;
  document.head.appendChild(link);
};
