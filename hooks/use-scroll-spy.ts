"use client";

import { useEffect, useState } from "react";

/**
 * useScrollSpy Hook
 *
 * Tracks which section is currently in view and returns its ID.
 * Used for highlighting active navigation items as user scrolls.
 *
 * @param sectionIds - Array of section IDs to track (e.g., ["hero", "features", "pricing"])
 * @param offset - Pixel distance from top of viewport where a section is considered "active" (default: 100px)
 * @returns The ID of the currently active section
 */
export function useScrollSpy(sectionIds: string[], offset = 100) {
  // Stores the ID of the currently active section
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Guard: Exit early if no section IDs provided
    if (!sectionIds.length) {
      return;
    }

    // Get DOM elements for all provided section IDs, filtering out any that don't exist
    const elements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean) as HTMLElement[];

    // Guard: Exit early if no valid elements found in DOM
    if (!elements.length) {
      return;
    }

    // Flag to prevent multiple requestAnimationFrame calls stacking up
    // This throttles scroll events for better performance
    let ticking = false;

    /**
     * Calculates which section is closest to the "activation line" (offset from top)
     * and updates the active section state
     */
    const update = () => {
      let closestId = "";
      let minDistance = Number.POSITIVE_INFINITY;

      // Phase 1: Find the section closest to the offset line that is ABOVE it
      // This ensures we highlight the section the user is currently viewing
      for (const el of elements) {
        const rect = el.getBoundingClientRect();

        // Calculate distance from the section's top edge to the activation line
        const distance = Math.abs(rect.top - offset);

        // Only consider sections that are above the offset line
        // Update closestId if this section is closer than the previous closest
        if (rect.top <= offset && distance < minDistance) {
          minDistance = distance;
          closestId = el.id;
        }
      }

      // Phase 2: Fallback mechanism
      // If no sections are above the offset line (e.g., user scrolled to the very top),
      // pick the section nearest to the offset line overall
      if (!closestId) {
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - offset);

          if (distance < minDistance) {
            minDistance = distance;
            closestId = el.id;
          }
        }
      }

      // Update state with the closest section ID
      setActiveId(closestId);
      // Reset ticking flag so next scroll event can schedule another update
      ticking = false;
    };

    /**
     * Scroll event handler
     * Uses requestAnimationFrame to throttle updates and improve performance
     * Only schedules an update if one isn't already pending
     */
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Attach event listeners for scroll and resize
    // Resize is included because navbar height or layout changes might affect calculations
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    // Run once on mount to set initial active section
    update();

    // Cleanup: Remove event listeners when component unmounts or dependencies change
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
