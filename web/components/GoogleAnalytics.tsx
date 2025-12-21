import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Log for debugging
          console.log('Google Analytics initialized:', '${measurementId}');
          
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            debug_mode: ${process.env.NODE_ENV === 'development'}
          });
        `}
      </Script>
    </>
  );
}
