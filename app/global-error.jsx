"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Sentry.captureException(error); // Removed Sentry
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
