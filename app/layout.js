"use client";
import "@/public/assets/styles/styles.scss";
import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./not-found";
export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ErrorBoundary fallback={<NotFound />}>
         {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}