import { CheckCircle, Eye, Target } from "lucide-react";
import { motion } from "motion/react";

const milestones = [
  {
    year: "1995",
    event: "Founded",
    detail: "Established in Surat as a networking & IT services firm",
  },
  {
    year: "2000",
    event: "ERP Division",
    detail: "Launched dedicated ERP implementation practice",
  },
  {
    year: "2010",
    event: "Cloud Services",
    detail: "Partnered with AWS & Google Cloud platforms",
  },
  {
    year: "2015",
    event: "Cyber Security",
    detail: "SonicWALL & VAPT security practice established",
  },
  {
    year: "2020",
    event: "Digital Transformation",
    detail: "Scaled digital transformation for 200+ MSMEs",
  },
];

const highlights = [
  "ISO-certified processes and ISMS compliance",
  "Certified professionals: CISSP, CISA, AWS, Azure, GCP",
  "Serving Manufacturing, Retail, Healthcare & Finance",
  "Pan-India presence with offices in Mumbai and Delhi",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/8 text-brand-navy font-ui font-semibold text-sm tracking-wide uppercase">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy-deep mb-4">
            Three Decades of IT Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Since 1995, Matrix Networks and Solutions has been the trusted
            technology backbone for India's MSME sector.
          </p>
        </motion.div>

        {/* Main content: Image + Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="TechCraft Solutions Team"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Decorative frame */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-brand-navy rounded-xl p-4 sm:p-5 shadow-navy-glow text-white"
            >
              <div className="font-display text-3xl font-bold text-brand-gold">
                30+
              </div>
              <div className="text-xs text-white/70 font-ui mt-0.5">
                Years of Trust
              </div>
            </motion.div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-navy-deep mb-4">
              Your Long-Term IT Partner for Growth
            </h3>
            <p className="text-muted-foreground font-body mb-4 leading-relaxed">
              Founded in 1995 in Mumbai, TechCraft Solutions began as a small
              network integration firm with a clear mission — make
              enterprise-grade IT accessible to India's small and medium
              businesses. Over three decades, we have grown into a full-spectrum
              managed services provider trusted by 500+ MSME organizations
              across the country.
            </p>
            <p className="text-muted-foreground font-body mb-6 leading-relaxed">
              We bring together open-source innovation and licensed OEM
              platforms — Google Workspace, Microsoft 365 & Azure, SonicWALL
              security appliances, and AWS cloud infrastructure — to deliver
              customized, cost-effective solutions that drive measurable
              business outcomes for growing enterprises.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-brand-gold mt-0.5 shrink-0"
                  />
                  <span className="text-foreground font-body text-sm">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-xl font-bold text-brand-navy-deep text-center mb-10">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/30 via-brand-gold/60 to-brand-gold/30 hidden lg:block" />

            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Dot */}
                  <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center mb-3 shadow-navy-glow z-10">
                    <span className="text-brand-gold font-display font-bold text-xs">
                      {m.year}
                    </span>
                  </div>
                  <div className="font-display font-bold text-brand-navy-deep text-sm mb-1">
                    {m.event}
                  </div>
                  <p className="text-muted-foreground text-xs font-body leading-relaxed">
                    {m.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-navy rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-gold/10 -translate-y-1/2 translate-x-1/2" />
            <Target size={28} className="text-brand-gold mb-4" />
            <h4 className="font-display text-xl font-bold mb-3">Our Mission</h4>
            <p className="text-white/75 font-body text-sm leading-relaxed">
              To democratize enterprise-grade IT infrastructure for India's MSME
              sector by delivering reliable, secure, and cost-effective managed
              technology solutions that enable businesses to focus on what they
              do best — growing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-border/70 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-gold/8 -translate-y-1/2 translate-x-1/2" />
            <Eye size={28} className="text-brand-navy mb-4" />
            <h4 className="font-display text-xl font-bold text-brand-navy-deep mb-3">
              Our Vision
            </h4>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              To be India's most trusted technology partner for the MSME segment
              — known for our integrity, expertise, and unwavering commitment to
              customer success across every industry and region we serve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
