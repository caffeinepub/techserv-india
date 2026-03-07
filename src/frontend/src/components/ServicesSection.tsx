import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, Monitor, Shield } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: "managed_it",
    ocid: "services.managed_it.card",
    icon: Monitor,
    title: "Managed IT Services",
    description:
      "End-to-end IT infrastructure management so your team can focus on core business — not IT issues.",
    points: [
      "24/7 network monitoring & management",
      "IT helpdesk & remote support (L1–L3)",
      "Server management & virtualization",
      "Patch management & asset tracking",
      "IT strategy consulting & procurement",
    ],
    color: "from-blue-600/15 to-blue-600/5",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-600/10 text-blue-700",
  },
  {
    id: "cyber_security",
    ocid: "services.cyber_security.card",
    icon: Shield,
    title: "Cyber Security",
    description:
      "Protect your business from evolving threats with enterprise-grade security powered by SonicWALL and leading SIEM platforms.",
    points: [
      "Firewall deployment & management (SonicWALL)",
      "Vulnerability Assessment & Penetration Testing",
      "Endpoint security & EDR solutions",
      "SIEM & threat detection/response",
      "Security audits & compliance consulting",
    ],
    color: "from-red-600/15 to-red-600/5",
    iconColor: "text-red-600",
    badgeColor: "bg-red-600/10 text-red-700",
  },
  {
    id: "erp",
    ocid: "services.erp.card",
    icon: Database,
    title: "ERP Implementation",
    description:
      "Streamline your operations with best-fit ERP solutions — open-source or licensed — tailored for Indian MSMEs.",
    points: [
      "SAP Business One & Odoo implementation",
      "Oracle NetSuite deployment & migration",
      "Tally ERP customization & integration",
      "Process mapping & change management",
      "Post-implementation support & training",
    ],
    color: "from-green-600/15 to-green-600/5",
    iconColor: "text-green-700",
    badgeColor: "bg-green-600/10 text-green-700",
  },
  {
    id: "cloud",
    ocid: "services.cloud.card",
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Migrate, manage, and optimize your workloads on AWS, Google Cloud, and Microsoft Azure with certified cloud architects.",
    points: [
      "Cloud migration strategy & execution",
      "AWS, GCP & Azure architecture design",
      "Google Workspace & Microsoft 365 rollout",
      "Cost optimization & FinOps management",
      "Disaster recovery & backup solutions",
    ],
    color: "from-amber-500/15 to-amber-500/5",
    iconColor: "text-amber-600",
    badgeColor: "bg-amber-500/10 text-amber-700",
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-slate-50 section-pattern"
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
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/8 text-brand-navy font-ui font-semibold text-sm tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy-deep mb-4">
            Comprehensive IT Services
            <br className="hidden sm:block" />
            <span className="text-brand-navy/70">for Growing Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            From network management to ERP transformation — we handle your
            entire technology stack so you can grow with confidence.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                data-ocid={service.ocid}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/60 group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${service.badgeColor} flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} className={service.iconColor} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-brand-navy-deep mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm font-body text-foreground/80"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${service.iconColor.replace("text-", "bg-")}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToContact}
                    className={`${service.iconColor} hover:bg-transparent p-0 h-auto font-ui font-semibold group/btn`}
                  >
                    Learn More
                    <ArrowRight
                      size={15}
                      className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
