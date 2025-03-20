import { useRef, useEffect, useState } from "react";

export default function CompositionTooltip({ composition }) {
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxLines = 3;
      const maxHeight = lineHeight * maxLines;
      setIsOverflowing(el.scrollHeight > maxHeight);
    }
  }, [composition]);

  return (
    <div
      className="relative max-w-[180px]"
      onMouseEnter={() => isOverflowing && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        ref={textRef}
        className="text-green-800 px-2 py-0.5 rounded-md break-words line-clamp-3"
        style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
      >
        {composition}
      </span>

      {isOverflowing && isHovered && (
        <div className="absolute z-10 bg-gray-800 right-0 text-white text-sm rounded-md px-2 py-1 mt-1 w-64">
          {composition}
        </div>
      )}
    </div>
  );
}