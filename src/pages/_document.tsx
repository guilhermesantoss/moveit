import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content="Move.it" />
          <meta name="description" content="Aplicação feita em Next.js para você que usa muito o computador se exercitar durante a sua rotina." />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://moveit-guilhermesantoss.vercel.app/" />
          <meta property="og:title" content="Move.it" />
          <meta property="og:description" content="Aplicação feita em Next.js para você que usa muito o computador se exercitar durante a sua rotina." />
          <meta property="og:image" content="" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://moveit-guilhermesantoss.vercel.app/" />
          <meta property="twitter:title" content="Move.it" />
          <meta property="twitter:description" content="Aplicação feita em Next.js para você que usa muito o computador se exercitar durante a sua rotina." />
          <meta property="twitter:image" content="" />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
