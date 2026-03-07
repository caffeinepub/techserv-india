import { useGetAllTestimonials } from "@/hooks/useQueries";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Testimonial } from "../backend";

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: BigInt(1),
    clientName: "Rajesh Mehta",
    designation: "Managing Director",
    company: "Mehta Precision Parts Pvt. Ltd.",
    testimonialText:
      "TechCraft transformed our manufacturing operations with their SAP Business One implementation. The team's expertise and post-go-live support were exceptional. Our inventory accuracy improved by 40% within three months.",
    rating: BigInt(5),
  },
  {
    id: BigInt(2),
    clientName: "Priya Krishnamurthy",
    designation: "Director of Operations",
    company: "SunRise Retail Chains",
    testimonialText:
      "We struggled with cyber threats until TechCraft deployed SonicWALL across all our 12 store locations. The centralized visibility and zero-day threat prevention has been a game-changer. Zero breaches in 2 years.",
    rating: BigInt(5),
  },
  {
    id: BigInt(3),
    clientName: "Anil Chaudhary",
    designation: "CEO",
    company: "Chaudhary Healthcare Diagnostics",
    testimonialText:
      "The migration to Google Workspace and AWS was seamless. TechCraft's team handled everything — planning, execution, training — with zero business downtime. Our team productivity went up significantly.",
    rating: BigInt(5),
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={
            star <= rating
              ? "text-brand-gold fill-brand-gold"
              : "text-muted-foreground/30"
          }
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { data: backendTestimonials, isLoading } = useGetAllTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials
      : FALLBACK_TESTIMONIALS;

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);

  // Show 3 at a time on desktop
  const visibleCount = Math.min(3, testimonials.length);
  const visibleIndices = Array.from(
    { length: visibleCount },
    (_, i) => (currentIndex + i) % testimonials.length,
  );

  const ocids = [
    "testimonials.item.1",
    "testimonials.item.2",
    "testimonials.item.3",
  ] as const;

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-slate-50 section-pattern overflow-hidden"
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
            Client Success
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy-deep mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
            Real feedback from real businesses we've served across India.
          </p>
        </motion.div>

        {/* Loading state */}
        {isLoading && (
          <div
            data-ocid="testimonials.loading_state"
            className="flex justify-center py-12"
          >
            <div className="w-8 h-8 border-3 border-brand-navy border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Testimonial Cards */}
        {!isLoading && (
          <div data-ocid="testimonials.list">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <AnimatePresence mode="wait">
                {visibleIndices.map((testimonialIdx, displayIdx) => {
                  const t = testimonials[testimonialIdx];
                  return (
                    <motion.div
                      key={`${t.id}-${currentIndex}`}
                      data-ocid={ocids[displayIdx]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: displayIdx * 0.08 }}
                      className="bg-card rounded-2xl p-7 shadow-card border border-border/60 relative flex flex-col"
                    >
                      {/* Quote icon */}
                      <Quote
                        size={32}
                        className="text-brand-gold/20 absolute top-6 right-6"
                        aria-hidden
                      />

                      <StarRating rating={Number(t.rating)} />

                      <blockquote className="mt-4 mb-6 text-foreground/80 font-body text-sm leading-relaxed flex-1 italic">
                        "{t.testimonialText}"
                      </blockquote>

                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
                          <span className="text-brand-gold font-display font-bold text-sm">
                            {t.clientName.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-ui font-semibold text-brand-navy-deep text-sm">
                            {t.clientName}
                          </div>
                          <div className="text-muted-foreground text-xs font-body">
                            {t.designation} · {t.company}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {testimonials.length > 3 && (
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border hover:border-brand-navy bg-card hover:bg-brand-navy hover:text-white text-brand-navy transition-all duration-200 flex items-center justify-center shadow-xs"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={String(t.id)}
                      type="button"
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        i === currentIndex
                          ? "bg-brand-navy w-6"
                          : "bg-border hover:bg-brand-navy/40"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border hover:border-brand-navy bg-card hover:bg-brand-navy hover:text-white text-brand-navy transition-all duration-200 flex items-center justify-center shadow-xs"
                  aria-label="Next testimonials"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
