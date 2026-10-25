import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "CodeSec — Repository Security Scanner", description: "Read-only GitHub repository security and secret scanning." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}<footer className="site-footer"><span>CODESEC · REPOSITORY SECURITY SCANNER</span><div>Owned &amp; Developed by <strong>GRANDHI ASHAKIRAN</strong></div></footer></body></html>;
}
