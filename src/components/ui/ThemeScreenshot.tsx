import Image from "next/image";

type ThemeScreenshotProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function ThemeScreenshot({
  lightSrc,
  darkSrc,
  alt,
  className = "",
  priority = false,
}: ThemeScreenshotProps) {
  return (
    <div className={`theme-screenshot ${className}`.trim()}>
      <Image
        className="theme-screenshot-image theme-screenshot-dark"
        src={darkSrc}
        alt={alt}
        width={1920}
        height={1080}
        priority={priority}
        sizes="(max-width: 900px) 94vw, 1200px"
      />

      <Image
        className="theme-screenshot-image theme-screenshot-light"
        src={lightSrc}
        alt={alt}
        width={1920}
        height={1080}
        priority={priority}
        sizes="(max-width: 900px) 94vw, 1200px"
      />
    </div>
  );
}
