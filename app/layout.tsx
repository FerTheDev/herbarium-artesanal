import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Herbarium | Produtos Artesanais",
  description:
    "Produtos artesanais em Curitiba: sabonetes, velas aromáticas, escalda-pés e kits para presente feitos à mão pela Herbarium.",
  icons: {
    icon: "/images/logo-da-marca.webp",
    shortcut: "/images/logo-da-marca.webp",
  },
  openGraph: {
    title: "Herbarium | Produtos Artesanais",
    description:
      "Sabonetes, velas aromáticas, escalda-pés e kits artesanais para autocuidado e presentes.",
    type: "website",
    images: ["/images/kit-sabonetes-vela.webp"],
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
