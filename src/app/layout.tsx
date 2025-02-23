import Providers from "@/components/Providers";
import "./globals.css";

// Done after the video and optional: add page metadata
export const metadata = {
  title: "DX Team chat",
  description: "Welcome to the DX Team playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
