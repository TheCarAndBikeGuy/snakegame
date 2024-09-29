import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Snake Game",
  description: "A Fun, Old School Snake Game",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <h1 className="homeHeader">Snake</h1>
          </header>
          <nav>
            <Link className="home" title="Home" tabIndex={0} href="/">
              Home
            </Link>
            <Link className="about" title="About" tabIndex={0} href="/About">
              About
            </Link>
            <SignedIn>
            <Link className="User" title="User" tabIndex={0} href="/User">
              User
            </Link>
            <Link className="custom" title="Custom" tabIndex={0} href="/Custom">
              Custom
            </Link>
            <Link className="play" title="Play" tabIndex={0} href="/Play">
              Play
            </Link>
            <Link className="lb" title="Leader Board" tabIndex={0} href="/LB">
              LB
            </Link>
            </SignedIn>
          </nav>
          {children}
          <footer className="footer">
            <Footer />
            <SignedOut>
              <SignInButton title="Sign In" />
            </SignedOut>
            <UserButton />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
