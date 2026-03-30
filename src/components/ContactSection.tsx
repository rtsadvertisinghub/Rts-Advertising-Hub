import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser"; // EmailJS import kiya

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Office No. 1, First Floor", "Iqbal Plaza, Chakri Road", "Rawalpindi, Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["0300-5382657", "0301-5499024"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["rts.advertisinghub@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export function ContactSection() {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null); // Form ke liye ref
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS logic - Yahan apni IDs paste karein
    emailjs
      .sendForm(
        "service_s3mtbok",   // Yahan Service ID dalein
        "template_bjausjr",  // Yahan Template ID dalein
        formRef.current!,    // Form ka reference
        "Dg99_YVYCi75R7Bzc"    // Yahan Public Key dalein
      )
      .then(
        () => {
          toast({
            title: "Message Sent! ✅",
            description: "Shukriya! Aapka message humein mil gaya hai.",
          });
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            variant: "destructive",
            title: "Sending Failed!",
            description: "Kuch masla hua hai. Dobara koshish karein.",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Let's Start Your{" "}
            <span className="text-gradient-accent">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to elevate your brand visibility? Contact us today for a free 
            consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              {/* Form ref add kiya */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      name="from_name" // Template variable
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="user_phone" // Template variable
                      placeholder="0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    name="user_email" // Template variable
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    name="message" // Template variable
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  <Send className={`w-5 h-5 mr-2 ${isSubmitting ? 'animate-spin' : ''}`} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex gap-5 p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-hover transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Google Map Section */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.786576856453!2d73.0483!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzU0LjQiTiA3M8KwMDInNTMuOSJF!5e0!3m2!1sen!2spk!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RTS Advertising Hub Location"
              />
              <div className="bg-gradient-primary p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-primary-foreground">Visit Our Office</h4>
                  <p className="text-primary-foreground/80 text-sm">Iqbal Plaza, Chakri Road, Rawalpindi</p>
                </div>
                <Button variant="accent" size="sm" asChild>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Directions
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}