import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title:
    "Arda Sahin | Ph.D. Candidate | UCLA",
  description:
    "Arda Sahin | Ph.D. Candidate | Geotechnical Earthquake Engineering Researcher at UCLA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  font-sans`}>{children}</body>
    </html>
  );
}
