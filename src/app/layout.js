import { Providers } from "./providers";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

export const metadata = {
  title: "Deep Prajapati ",
  description: "Versatile and detail oriented software engineer",
};
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
