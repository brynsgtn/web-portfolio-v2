import { useThemeStore } from "@/store/themeStore";

const StarBorder = ({
  as: Component = "div",
  className = "",
  speed = "6s",
  thickness = 2,
  glowIntensity = 0.6,
  children,
  ...rest
}) => {
  const { theme } = useThemeStore();

  // Theme-based glow colors
  const glowColor = theme === "light" ? "#007bff" : "#06b6d4"; // purple-500 or cyan-500
  const bgColor = theme === "light" ? "bg-white" : "bg-neutral-900/95";

  return (
    <Component
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      {/* Animated border gradient background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}20, transparent)`,
          animation: `border-spin ${speed} linear infinite`,
        }}
      />

      {/* Bottom orbiting glow */}
      <div
        className="pointer-events-none absolute w-[200%] h-[200%] -bottom-1/2 -right-1/2"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}${Math.round(glowIntensity * 255).toString(16).padStart(2, '0')}, transparent 50%)`,
          animation: `orbit-bottom ${speed} linear infinite`,
        }}
      />

      {/* Top orbiting glow */}
      <div
        className="pointer-events-none absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}${Math.round(glowIntensity * 255).toString(16).padStart(2, '0')}, transparent 50%)`,
          animation: `orbit-top ${speed} linear infinite`,
        }}
      />

      {/* Content container */}
      <div className={`relative z-10 rounded-[calc(1.25rem-${thickness}px)] backdrop-blur-sm ${bgColor}`}>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;