import { Providers } from "./providers";

export const metadata = {
  title: "Deep Prajapati's website ",
  description: "Versatile and detail oriented software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
