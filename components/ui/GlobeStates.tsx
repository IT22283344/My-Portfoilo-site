import React from "react";

/** Shown while the three.js bundle is still being fetched. */
export const GlobeSkeleton = () => (
  <div
    className="flex h-full w-full items-center justify-center"
    role="status"
    aria-label="Loading interactive globe"
  >
    <div className="skeleton h-56 w-56 rounded-full md:h-72 md:w-72" />
    <span className="sr-only">Loading interactive globe…</span>
  </div>
);

/** Shown when WebGL is unavailable or the globe throws while rendering. */
export const GlobeError = ({ retry }: { retry: () => void }) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
    <div
      aria-hidden="true"
      className="grid h-12 w-12 place-items-center rounded-full border border-line bg-surface-2 text-lg"
    >
      🌐
    </div>
    <p className="text-sm font-medium text-ink">Something went wrong</p>
    <p className="max-w-[34ch] text-xs leading-relaxed text-ink-muted">
      Unable to load the interactive globe. This usually means WebGL is
      disabled or unsupported on this device.
    </p>
    <button
      type="button"
      onClick={retry}
      className="rounded-lg border border-line bg-surface-2 px-3.5 py-2 text-xs text-ink transition-colors duration-200 hover:border-line-strong"
    >
      Try again
    </button>
  </div>
);
