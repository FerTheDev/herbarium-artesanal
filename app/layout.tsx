import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Herbarium | Produtos Artesanais",
  description:
    "Sabonetes artesanais, velas aromáticas e escalda-pés feitos à mão em Curitiba.",
  icons: {
    icon: "/images/logo-da-marca.jpeg",
    shortcut: "/images/logo-da-marca.jpeg",
  },
  openGraph: {
    title: "Herbarium | Produtos Artesanais",
    description:
      "Natureza, cuidado e pequenos rituais em produtos artesanais feitos à mão.",
    type: "website",
    images: ["/images/kit-sabonetes-vela.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
