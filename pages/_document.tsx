import { Html, Head, Main, NextScript } from "next/document";

const title = "Dharmik Wear";
const desc =
  "Elevate your everyday look with the grace of Hindu gods on your chest.";
const keywords = "Tshirt, hindu, sanaatan, dharmik, wear, fashion";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

        <meta content={desc} name="description" key="description" />
        <meta content={keywords} name="keywords" key="keywords" />

        <meta content="follow, index" name="robots" />
        <meta content="#282828" name="theme-color" />
        <meta content="#282828" name="msapplication-TileColor" />

        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/favicons/site.webmanifest" rel="manifest" />

        <meta property="og:url" content="https://haru-fashion.vercel.app" />
        <link rel="canonical" href="https://haru-fashion.vercel.app" />
        <meta property="og:site_name" content="Dharmik Wear" />
        <meta property="og:description" content={desc} key="og_description" />
        <meta property="og:title" content={title} key="og_title" />
        <meta
          property="og:image"
          content="https://haru-fashion.vercel.app/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dharmikwear" />
        <meta name="twitter:title" content={title} key="twitter_title" />
        <meta
          name="twitter:description"
          content={desc}
          key="twitter_description"
        />
        <meta
          name="twitter:image"
          content="https://haru-fashion.vercel.app/og.png"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <a rel="noreferrer" href="https://wa.me/918433839379?text=I%27m%20interested%20in%20knowing%20more%20about%20dharmik%20wear" target="_blank" className="h-14 w-14 fixed bottom-4 right-4 z-50"><img src="/whatsapp.png" alt="whatsapp"  /></a>
        
      </body>
    </Html>
  );
}
