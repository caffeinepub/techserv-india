import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Phone,
  Server,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "30+", label: "Years of Excellence", icon: TrendingUp },
  { value: "100+", label: "MSME Clients", icon: Server },
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
  { value: "24/7", label: "Support", icon: Phone },
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-skyscrapers-golden-hour.dim_1920x1080.jpg"
          alt="City skyline at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-deep/60 via-brand-navy/50 to-brand-navy-deep/55" />
        {/* Decorative circuit pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, oklch(0.85 0.12 72) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold text-sm font-ui font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            Trusted IT Partner Since 1995 · Pan-India Presence
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            30+ Years of{" "}
            <span className="text-brand-gold relative">
              Trusted IT Excellence
              <svg
                className="absolute -bottom-2 left-0 right-0 w-full"
                height="6"
                viewBox="0 0 300 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 3 Q75 0 150 3 Q225 6 300 3"
                  stroke="oklch(0.72 0.16 68 / 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg sm:text-xl text-white/75 font-body max-w-2xl mx-auto mb-10"
          >
            Managed IT Services · Cyber Security · ERP Implementation
            <br className="hidden sm:block" />
            <span className="text-white/90 font-medium">
              for MSMEs across India
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              data-ocid="hero.consultation.primary_button"
              onClick={() => scrollTo("contact")}
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy-deep font-ui font-semibold px-8 h-12 text-base rounded-md shadow-gold-glow hover:shadow-xl transition-all duration-200 group"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              data-ocid="hero.services.secondary_button"
              onClick={() => scrollTo("services")}
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 font-ui font-semibold px-8 h-12 text-base rounded-md transition-all duration-200"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                  className="glass-card rounded-xl px-4 py-5 text-center group"
                >
                  <Icon
                    size={20}
                    className="mx-auto mb-2 text-brand-gold opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 font-ui">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
