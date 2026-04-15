"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BranchMapEmbedProps = {
  city: string;
  mapEmbed: string;
  mapLink: string;
};

const LOAD_TIMEOUT_MS = 9000;

const BranchMapEmbed = ({ city, mapEmbed, mapLink }: BranchMapEmbedProps) => {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (!loaded) {
        setTimedOut(true);
      }
    }, LOAD_TIMEOUT_MS);

    return () => window.clearTimeout(timeout);
  }, [loaded, retryKey]);

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-[#efd8c2] bg-[#fff8f1] shadow-md md:h-[380px]">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex animate-pulse items-center justify-center bg-[#fff8f1] text-sm font-medium text-[#7a4c31]">
          Loading {city} map...
        </div>
      )}

      {timedOut && !loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[#fff8f1]/95 p-4 text-center">
          <p className="text-sm font-medium text-[#6d4732]">
            Map is taking longer than expected.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                setLoaded(false);
                setTimedOut(false);
                setRetryKey((prev) => prev + 1);
              }}
              className="rounded-full bg-[#8f5734] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#754328]"
            >
              Retry Map
            </button>
            <Link
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d9aa84] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a4c31] transition-colors duration-300 hover:bg-[#7a4c31] hover:text-white"
            >
              Open Directions
            </Link>
          </div>
        </div>
      )}

      <iframe
        key={retryKey}
        src={mapEmbed}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        title={`${city.toLowerCase()}-branch-map`}
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => {
          setLoaded(true);
          setTimedOut(false);
        }}
      />
    </div>
  );
};

export default BranchMapEmbed;
