import { useEffect, useRef } from "react";
import { IoIosPaw } from "react-icons/io";

const isTouch = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const INTERACTIVE = [
  "a",
  "button",
  "[role='button']",
  "[onclick]",
  ".btn",
  ".cursor-pointer",
  "[style*='cursor:pointer']",
  "input[type='checkbox']",
  "input[type='radio']",
].join(",");

const NATIVE = ["input", "textarea", "select", "[contenteditable='true']"].join(",");

export default function CustomCursor() {
  const el = useRef<HTMLDivElement>(null);
  const icon = useRef<HTMLElement>(null);
  const pos = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (isTouch()) return;
    const c = el.current!, i = icon.current!;
    const s = document.createElement("style");
    s.textContent = "*{cursor:none!important}";
    document.head.appendChild(s);
    Object.assign(c.style, {
      position: "fixed",
      left: "0",
      top: "0",
      zIndex: "9999",
      pointerEvents: "none",
      transform: "translate3d(-9999px,-9999px,0)",
      opacity: "0",
      transition: "opacity .08s linear",
    });
    Object.assign(i.style, {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform .1s, color .1s, width .1s, height .1s",
    });
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      c.style.opacity = "1";
      if (!raf.current) raf.current = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest(NATIVE)) {
        s.textContent = "*{cursor:auto!important}";
        c.style.opacity = "0";
        return;
      }
      s.textContent = "*{cursor:none!important}";
      if (t.closest(INTERACTIVE)) {
        Object.assign(i.style, {
          color: "#0CB39C",
          transform: "scale(1.25)",
          width: "48px",
          height: "48px",
        });
      } else {
        Object.assign(i.style, {
          color: "var(--highlight)",
          transform: "scale(1)",
          width: "40px",
          height: "40px",
        });
      }
    };
    const out = () =>
      Object.assign(i.style, {
        color: "var(--highlight)",
        transform: "scale(1)",
        width: "40px",
        height: "40px",
      });
    const leave = () => (c.style.opacity = "0");
    const loop = () => {
      const { x, y } = pos.current;
      const r = i.getBoundingClientRect();
      c.style.transform = `translate3d(${x - r.width / 2}px,${y - r.height / 2}px,0)`;
      raf.current = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
      if (raf.current) cancelAnimationFrame(raf.current);
      s.remove();
    };
  }, []);

  if (typeof window !== "undefined" && isTouch()) return null;

  return (
    <div ref={el} aria-hidden="true">
      <div
        ref={icon as any}
        style={{
          width: 40,
          height: 40,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--highlight)",
          pointerEvents: "none",
        }}
      >
        <IoIosPaw size={26} />
      </div>
    </div>
  );
}