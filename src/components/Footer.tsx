import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: XIcon, href: "https://twitter.com", label: "X" },
    { icon: Mail, href: "mailto:hello@alexchen.dev", label: "Email" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-xl font-bold text-foreground mb-4 inline-block">
              Portfolio
            </a>
            <p className="text-muted-foreground max-w-sm">
              Building beautiful, performant web experiences with modern technologies.
              Let&apos;s create something amazing together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted-foreground/20 transition-colors text-muted-foreground hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Alex Chen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TailwindCSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
