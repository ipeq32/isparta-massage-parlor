declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function reportConversion(url?: string) {
  const callback = () => {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-11516061259/vs5ACKnAi5saEMvMpPMq",
      value: 1.0,
      currency: "TRY",
      event_callback: callback,
    });
  } else {
    // gtag yoksa doğrudan telefon linkine gider
    callback();
  }

  return false;
}
