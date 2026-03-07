import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ServiceInterest, useSubmitInquiry } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const serviceOptions = [
  { value: ServiceInterest.managed_it, label: "Managed IT Services" },
  { value: ServiceInterest.cyber_security, label: "Cyber Security" },
  { value: ServiceInterest.erp_implementation, label: "ERP Implementation" },
  { value: ServiceInterest.cloud_services, label: "Cloud Services" },
  { value: ServiceInterest.other, label: "Other / General Inquiry" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    detail:
      "International Trade Center, D-518/519\nMajura Gate, Ring Road\nSurat 395001, Gujarat, India",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "(+91) 261-4862793\n(+91) 261-4862795",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "sales@matrixsurat.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon – Sat: 9:00 AM – 7:00 PM\n24/7 for Managed Services clients",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  serviceInterest: ServiceInterest | "";
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  serviceInterest: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const {
    mutate: submitInquiry,
    isPending,
    isError,
    error,
  } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.serviceInterest) return;

    submitInquiry(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        organization: form.organization,
        serviceInterest: form.serviceInterest as ServiceInterest,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
        },
      },
    );
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
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
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy-deep mb-4">
            Let's Talk About Your IT Needs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">
            Free consultation for your business. Our experts will assess your
            current setup and recommend the best path forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-brand-navy rounded-2xl p-8 text-white h-full">
              <h3 className="font-display text-xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-9 h-9 rounded-lg bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-brand-gold" />
                      </div>
                      <div>
                        <div className="font-ui font-semibold text-white text-sm mb-0.5">
                          {item.title}
                        </div>
                        <div className="text-white/60 font-body text-sm whitespace-pre-line leading-relaxed">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CIN / Registration */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs font-body">
                  Matrix Networks and Solutions
                  <br />
                  International Trade Center, D-518/519
                  <br />
                  Majura Gate, Surat 395001, Gujarat
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                data-ocid="contact.success_state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
              >
                <CheckCircle size={48} className="text-green-600 mb-4" />
                <h3 className="font-display text-xl font-bold text-green-900 mb-2">
                  Inquiry Submitted!
                </h3>
                <p className="text-green-700 font-body mb-6 max-w-sm">
                  Thank you for reaching out. Our team will contact you within 1
                  business day to discuss your requirements.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="border-green-300 text-green-700 hover:bg-green-100"
                >
                  Submit Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error state */}
                {isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <div className="text-sm font-body">
                      {error?.message ||
                        "Something went wrong. Please try again."}
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="font-ui text-sm font-medium text-brand-navy-deep"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name.input"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      required
                      placeholder="Rajesh Kumar"
                      className="h-11 font-body"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="font-ui text-sm font-medium text-brand-navy-deep"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      data-ocid="contact.email.input"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      required
                      placeholder="rajesh@yourcompany.com"
                      className="h-11 font-body"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-phone"
                      className="font-ui text-sm font-medium text-brand-navy-deep"
                    >
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      data-ocid="contact.phone.input"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      required
                      placeholder="+91 98765 43210"
                      className="h-11 font-body"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-org"
                      className="font-ui text-sm font-medium text-brand-navy-deep"
                    >
                      Organization <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-org"
                      data-ocid="contact.org.input"
                      value={form.organization}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, organization: e.target.value }))
                      }
                      required
                      placeholder="Your Company Pvt. Ltd."
                      className="h-11 font-body"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="font-ui text-sm font-medium text-brand-navy-deep">
                    Service Interest <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.serviceInterest}
                    onValueChange={(v) =>
                      setForm((f) => ({
                        ...f,
                        serviceInterest: v as ServiceInterest,
                      }))
                    }
                    required
                  >
                    <SelectTrigger
                      data-ocid="contact.service.select"
                      className="h-11 font-body"
                    >
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="font-body"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="font-ui text-sm font-medium text-brand-navy-deep"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message.textarea"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                    placeholder="Tell us about your current IT setup and what you're looking to achieve..."
                    rows={5}
                    className="font-body resize-none"
                  />
                </div>

                {/* Loading indicator */}
                {isPending && (
                  <div
                    data-ocid="contact.loading_state"
                    className="flex items-center gap-2 text-muted-foreground text-sm font-body"
                  >
                    <Loader2 size={15} className="animate-spin" />
                    Submitting your inquiry...
                  </div>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit.button"
                  disabled={isPending}
                  className="w-full sm:w-auto h-12 px-10 bg-brand-navy hover:bg-brand-navy-deep text-white font-ui font-semibold text-base rounded-md transition-all duration-200"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>

                <p className="text-muted-foreground text-xs font-body">
                  By submitting, you agree to be contacted by our team regarding
                  your inquiry. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
