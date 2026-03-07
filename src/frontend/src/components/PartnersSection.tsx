import { Shield } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import { SiAmazon, SiGoogle } from "react-icons/si";

// Microsoft logo as a custom SVG component
function MicrosoftIcon({
  size = 28,
  style,
}: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      style={style}
      role="img"
      aria-label="Microsoft"
    >
      <title>Microsoft</title>
      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
    </svg>
  );
}

type PartnerEntry = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any> | null;
  customIcon?: React.ReactNode;
  color: string;
  badge: string;
  products: string[];
  description: string;
};

const partners: PartnerEntry[] = [
  {
    name: "Google",
    icon: SiGoogle,
    color: "#4285F4",
    badge: "Google Cloud Partner",
    products: [
      "Google Workspace (Gmail, Meet, Drive)",
      "Google Cloud Platform",
      "ChromeOS Enterprise",
    ],
    description:
      "Authorized Google Workspace & Cloud partner delivering seamless collaboration and cloud infrastructure for Indian MSMEs.",
  },
  {
    name: "Microsoft",
    icon: null,
    customIcon: <MicrosoftIcon size={28} />,
    color: "#00A4EF",
    badge: "Microsoft Silver Partner",
    products: [
      "Microsoft 365 (Office, Teams, SharePoint)",
      "Azure Cloud Services",
      "Dynamics 365 ERP",
    ],
    description:
      "Microsoft Silver Partner providing complete M365 deployments, Azure migrations, and Dynamics ERP implementations.",
  },
  {
    name: "SonicWALL",
    icon: Shield,
    color: "#e85d04",
    badge: "SonicWALL MSSP",
    products: [
      "Next-Gen Firewall (NGFW)",
      "Secure Remote Access",
      "Advanced Threat Protection",
    ],
    description:
      "Certified SonicWALL Managed Security Service Provider specializing in network perimeter defense for business networks.",
  },
  {
    name: "Amazon Web Services",
    icon: SiAmazon,
    color: "#FF9900",
    badge: "AWS Select Partner",
    products: [
      "EC2 Compute & S3 Storage",
      "RDS & Database Services",
      "AWS Security Hub",
    ],
    description:
      "AWS Select Tier Partner with certified architects delivering cloud migrations, cost optimization, and DevOps transformation.",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-background">
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
            OEM Partnerships
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy-deep mb-4">
            Trusted OEM Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            We partner with the world's leading technology vendors to bring you
            certified, best-in-class solutions backed by official support and
            training.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border/60 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${partner.color}18` }}
                >
                  {partner.customIcon ? (
                    partner.customIcon
                  ) : Icon ? (
                    <Icon size={28} style={{ color: partner.color }} />
                  ) : null}
                </div>

                <div
                  className="inline-block px-2.5 py-1 rounded-full text-xs font-ui font-semibold mb-3"
                  style={{
                    backgroundColor: `${partner.color}18`,
                    color: partner.color,
                  }}
                >
                  {partner.badge}
                </div>

                <h3 className="font-display text-base font-bold text-brand-navy-deep mb-2">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground font-body text-xs mb-4 leading-relaxed flex-1">
                  {partner.description}
                </p>

                <ul className="space-y-1.5">
                  {partner.products.map((product) => (
                    <li
                      key={product}
                      className="flex items-start gap-2 text-xs font-body text-foreground/70"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: partner.color }}
                      />
                      {product}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-body text-sm">
            All partnerships are certified and maintained with active OEM
            training and compliance requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
