// Send a GA4 custom event. gtag only exists on CI (production) builds, and ad
// blockers can stop it loading, so this is a silent no-op when it's missing.
// GA4 attaches page_location/page_title automatically.
export function trackEvent(name: string, params: Record<string, unknown>): void {
  try {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", name, params);
    }
  } catch {}
}
