import {
  Award,
  BadgeCheck,
  Clock,
  Factory,
  GraduationCap,
  Headphones,
  Heart,
  IndianRupee,
  Landmark,
  MapPin,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Clock,
    title: "30+ Years Experience",
    description:
      "Three decades of delivering reliable IT solutions gives us unmatched institutional knowledge across Indian industry sectors.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "CISSP, CISA, AWS, Azure, Google, and SonicWALL certified engineers ensuring best-in-class delivery.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and support with guaranteed SLAs — 99.9% uptime for your critical systems.",
  },
  {
    icon: IndianRupee,
    title: "MSME-Friendly Pricing",
    description:
      "Flexible subscription-based pricing designed for India's growing businesses — no hidden costs, full transparency.",
  },
  {
    icon: BadgeCheck,
    title: "OEM Certified Partner",
    description:
      "Official certified partner for Google, Microsoft, SonicWALL, and AWS — direct access to vendor support and pricing.",
  },
  {
    icon: MapPin,
    title: "Pan-India Presence",
    description:
      "Offices in Mumbai & Delhi with field engineers across major cities — we're always close to where you need us.",
  },
];

const sectors = [
  { icon: Factory, label: "Manufacturing", count: "150+" },
  { icon: ShoppingCart, label: "Retail & FMCG", count: "80+" },
  { icon: Heart, label: "Healthcare", count: "60+" },
  { icon: GraduationCap, label: "Education", count: "70+" },
  { icon: Landmark, label: "Finance & NBFC", count: "90+" },
  { icon: Truck, label: "Logistics", count: "50+" },
];

export function WhyUsSection() {
  return (
    <section
      id="whyus"
      className="py-20 lg:py-28 gradient-navy text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold font-ui font-semibold text-sm tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why 500+ MSMEs Trust Us
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto font-body text-lg">
            We don't just provide IT services — we become your strategic
            technology partner, invested in your long-term growth.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 group hover:bg-white/12 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-4 group-hover:bg-brand-gold/25 transition-colors">
                  <Icon size={20} className="text-brand-gold" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Sectors We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Industries We Serve
          </h3>
          <p className="text-white/50 font-body text-sm mb-10">
            Deep domain expertise across India's core MSME sectors
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="glass-card rounded-xl p-4 text-center group hover:bg-white/12 transition-colors"
                >
                  <Icon
                    size={22}
                    className="mx-auto mb-2 text-brand-gold/80 group-hover:text-brand-gold transition-colors"
                  />
                  <div className="font-display text-lg font-bold text-white">
                    {sector.count}
                  </div>
                  <div className="text-white/55 text-xs font-ui mt-0.5">
                    {sector.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
