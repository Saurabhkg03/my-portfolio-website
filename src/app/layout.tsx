import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const siteUrl = "https://saurabhgaikwad.in";
const defaultTitle = "Saurabh Gaikwad | Full-Stack AI Engineer";
const defaultDescription =
  "Portfolio of Saurabh Gaikwad, a Full-Stack AI Engineer specializing in Deep Learning, Generative AI, LLMs, and scalable web applications. Based in Maharashtra, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Saurabh Gaikwad",
  },
  description: defaultDescription,
  keywords: [
    "Saurabh Gaikwad",
    "Full-Stack AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "React",
    "Next.js",
    "Developer Portfolio",
    "AI Developer India",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Saurabh Gaikwad",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saurabh Gaikwad portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saurabh Khushal Gaikwad",
    jobTitle: "Full-Stack AI Engineer",
    url: siteUrl,
    sameAs: [
      "https://github.com/Saurabhkg03",
      "https://linkedin.com/in/saurabh-gaikwad-605a70228",
    ],
    alumniOf: "Shri Sant Gajanan Maharaj College of Engineering",
  };

  return (
    <html
      lang="en"
      className="dark h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
