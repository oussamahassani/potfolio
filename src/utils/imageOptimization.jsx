// Image Optimization Component & Utilities

import React, { useState, useRef, useEffect } from "react";

/**
 * OptimizedImage Component
 * Lazy loads images with placeholder and error handling
 */
export const OptimizedImage = ({
  src,
  alt,
  placeholder,
  width,
  height,
  className = "",
  loading = "lazy",
  quality = 80,
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const loadImage = () => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };
    img.src = src;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`w-full h-full object-cover transition-opacity ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

/**
 * Picture Component for Responsive Images
 * Serves WebP to modern browsers, JPG/PNG fallback
 */
export const PictureImage = ({
  webpSrc,
  jpgSrc,
  alt,
  width,
  height,
  className = "",
  sizes = "100vw",
  loading = "lazy",
}) => {
  return (
    <picture className={className}>
      <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
      <source srcSet={jpgSrc} type="image/jpeg" sizes={sizes} />
      <img
        src={jpgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className="w-full h-auto"
      />
    </picture>
  );
};

/**
 * Image Optimization Utilities
 */

/**
 * Generate responsive image srcset
 */
export const generateSrcSet = (imagePath, sizes = [320, 640, 1024, 1536]) => {
  return sizes
    .map((size) => {
      // Assuming image is named like 'image.jpg' and variants are 'image-320.jpg', etc.
      const fileName = imagePath.split("/").pop();
      const dirPath = imagePath.substring(0, imagePath.lastIndexOf("/"));
      const withoutExt = fileName.split(".")[0];
      const ext = fileName.split(".").pop();
      const optimizedName = `${withoutExt}-${size}.${ext}`;
      return `${dirPath}/${optimizedName} ${size}w`;
    })
    .join(", ");
};

/**
 * Calculate aspect ratio for image
 */
export const calculateAspectRatio = (width, height) => {
  return `${(height / width) * 100}%`;
};

/**
 * Image Optimization Recommendation
 */
export const imageOptimizationTips = {
  formats: [
    {
      format: "WebP",
      browser: "Modern browsers (Chrome, Firefox, Edge)",
      size: "25-35% smaller than JPEG",
      recommended: true,
    },
    {
      format: "AVIF",
      browser: "Latest browsers",
      size: "20-40% smaller than WebP",
      recommended: true,
    },
    {
      format: "JPEG",
      browser: "All browsers",
      size: "Fallback format",
      recommended: false,
    },
    {
      format: "PNG",
      browser: "All browsers",
      size: "For images with transparency",
      recommended: false,
    },
  ],
  tools: [
    {
      name: "ImageOptim",
      type: "Mac app",
      description: "Lossless image optimization",
    },
    {
      name: "FileOptimizer",
      type: "Windows app",
      description: "Batch image optimization",
    },
    {
      name: "Tinify / TinyPNG",
      type: "Online",
      description: "Convert to WebP with Tinify API",
    },
    {
      name: "Sharp",
      type: "Node.js library",
      description: "Programmatic image processing",
    },
  ],
  bestPractices: [
    "Use appropriate dimensions for each breakpoint",
    "Compress images before serving",
    "Use srcset for responsive images",
    "Lazy load images below the fold",
    "Use modern formats (WebP/AVIF)",
    "Add width/height attributes to avoid layout shift",
    "Use picture element for art direction",
    "Serve images from CDN",
  ],
};

/**
 * Background Image Optimization
 */
export const OptimizedBackground = ({
  imageUrl,
  placeholder = "linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
  children,
  className = "",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div
      className={className}
      style={{
        backgroundImage: imageLoaded ? `url(${imageUrl})` : placeholder,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

/**
 * Avatar Image Component (Profile Pictures)
 */
export const AvatarImage = ({
  src,
  alt,
  size = "md",
  className = "",
  initials = "",
}) => {
  const [hasError, setHasError] = useState(false);
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full
        overflow-hidden
        bg-gradient-to-br
        from-blue-400
        to-purple-500
        flex
        items-center
        justify-center
        text-white
        font-bold
        ${className}
      `}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{initials || "?"}</span>
      )}
    </div>
  );
};
