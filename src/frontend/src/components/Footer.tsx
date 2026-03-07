import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

const currentYear = new Date().getFullYear();

const serviceLinks = [
  "Managed IT Services",
  "Cyber Security",
  "ERP Implementation",
  "Cloud Services",
  "IT Consulting",
  "Network Infrastructure",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "OEM Partners", href: "#partners" },
  { label: "Why Choose Us", href: "#whyus" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const scrollTo = (href: string) => {
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/assets/generated/logo-transparent.dim_200x80.png"
              alt="Matrix Networks and Solutions"
              className="h-10 w-auto object-contain mb-5"
            />
            <p className="text-white/55 font-body text-sm leading-relaxed mb-6">
              Surat's trusted managed IT services partner for MSMEs since 1995.
              Delivering technology excellence across Managed IT, Cyber
              Security, ERP, and Cloud Services.
            </p>

            {/* Contact quick */}
            <div className="space-y-2.5">
              <a
                href="tel:+912614862793"
                className="flex items-center gap-2.5 text-white/55 hover:text-brand-gold transition-colors text-sm font-body"
              >
                <Phone size={14} />
                (+91) 261-4862793/95
              </a>
              <a
                href="mailto:sales@matrixsurat.com"
                className="flex items-center gap-2.5 text-white/55 hover:text-brand-gold transition-colors text-sm font-body"
              >
                <Mail size={14} />
                sales@matrixsurat.com
              </a>
              <div className="flex items-start gap-2.5 text-white/55 text-sm font-body">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Majura Gate, Ring Road, Surat · Gujarat, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-white/55 hover:text-brand-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    className="text-white/55 hover:text-brand-gold transition-colors text-sm font-body text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* OEM Partners + Social */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-5 tracking-wide uppercase">
              OEM Partners
            </h4>
            <div className="space-y-2 mb-8">
              {[
                "Google Cloud & Workspace",
                "Microsoft 365 & Azure",
                "SonicWALL Network Security",
                "Amazon Web Services",
              ].map((p) => (
                <div
                  key={p}
                  className="text-white/55 text-sm font-body flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-gold/60" />
                  {p}
                </div>
              ))}
            </div>

            <h4 className="font-display font-bold text-white text-sm mb-4 tracking-wide uppercase">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: SiLinkedin, label: "LinkedIn" },
                { Icon: SiX, label: "Twitter/X" },
                { Icon: SiFacebook, label: "Facebook" },
                { Icon: SiYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-brand-gold/20 hover:text-brand-gold text-white/55 transition-all duration-200 flex items-center justify-center"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body text-center sm:text-left">
            © 1995–{currentYear} Matrix Networks and Solutions. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs font-body text-center">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold/60 hover:text-brand-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
