'use client';

import { useEffect } from 'react';

export default function ChatbotWidget() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.VG_CONFIG = {
        ID: "zn47XOtDZyCNJ078oFf4",
        region: 'na',
        render: 'bottom-right',
        stylesheets: [
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        ],
      };

      const script = document.createElement("script");
      script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER">
      {/* Here is where CONVOCORE renders the widget. */}
    </div>
  );
}
