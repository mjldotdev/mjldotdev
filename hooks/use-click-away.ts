import React from "react";

// Define the type for the callback function
// It receives either a MouseEvent (desktop) or TouchEvent (mobile)
type ClickAwayHandler = (event: MouseEvent | TouchEvent) => void;

export function useClickAway<T extends HTMLElement>(
  cb: ClickAwayHandler
): React.RefObject<T | null> {
  // Create a ref that will be attached to your container element
  // T is a generic type that can be any HTML element (div, button, section, etc.)
  const ref = React.useRef<T>(null);

  // Store the callback in a ref instead of using it directly
  // This is crucial: it prevents the effect from re-running when the callback changes
  // The ref always points to the latest callback without triggering dependency updates
  const refCb = React.useRef<ClickAwayHandler>(cb);

  // Update the ref whenever the callback changes
  // This ensures the handler always calls the most recent callback
  React.useEffect(() => {
    refCb.current = cb;
  }, [cb]);

  // Set up the click-away listener
  React.useEffect(() => {
    // Handler function that checks if the click was outside the element
    const handler = (e: MouseEvent | TouchEvent) => {
      const element = ref.current;

      // Check if the element exists AND the click target is NOT inside it
      // If both conditions are true, call the callback
      if (element && !element.contains(e.target as Node)) {
        refCb.current(e);
      }
    };

    // Listen to mousedown (desktop clicks)
    document.addEventListener("mousedown", handler);

    // Listen to touchstart (mobile/tablet touches)
    document.addEventListener("touchstart", handler);

    // Cleanup: remove both listeners when component unmounts
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []); // Empty dependency array: listeners are attached once and removed once

  return ref;
}
