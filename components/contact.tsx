"use client"

import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Facebook, Instagram, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "@/hooks/use-scroll-animation"


export function Contact() {
  const form = useRef<HTMLFormElement>(null);

    const { ref, isVisible } = useScrollAnimation(0.2)


    const contactInfo = [
    {
      icon: Phone,
      label: "076 129 8256",
      href: "tel:+94761298256",
    },
    {
      icon: MapPin,
      label: "Moronthuduwa, Sri Lanka",
      href: "https://maps.app.goo.gl/AJB9jjKbvKn6xQPq8",
    },
    {
      icon: Mail,
      label: "lahimudith@gmail.com",
      href: "mailto:lahimudith@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/LahiruMudith", label: "GitHub" },
    { icon: Facebook, href: "https://www.facebook.com/share/1DKxM5JE3y/?mibextid=wwXIfr", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/lahiru_mudith_madushan?igsh=a2k3cGUyem9jaWg5&utm_source=qr",
      label: "Instagram",
    },
    { icon: Linkedin, href: "https://www.linkedin.com/in/lahiru-mudith-1226b7298/", label: "LinkedIn" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.sendForm(
          "service_5xj1jha",
          "template_wsijj9s",
          form.current!,
          "gk8PqCkZ5sK6eL22o"
      );
      setSuccess("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 30 seconds (30000 ms)
      setTimeout(() => {
        setSuccess("");
      }, 30000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again.");

      // Clear error message after 30 seconds
      setTimeout(() => {
        setError("");
      }, 30000);
    } finally {
      setLoading(false);
    }
  };

  return (
      <section id="contact" ref={ref} className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Let's work together to bring your ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                      <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-foreground">{item.label}</span>
                      </a>
                  ))}
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social, index) => (
                        <Button
                            key={index}
                            asChild
                            variant="outline"
                            size="icon"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon className="h-5 w-5" />
                          </a>
                        </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className={`p-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                  </div>
                  <div>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                  </div>
                  <div>
                    <Textarea
                        className={'h-40'}
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  {success && <div className="text-green-600">{success}</div>}
                  {error && <div className="text-red-600">{error}</div>}
                </form>
              </Card>
            </div>

            {/* Footer */}
            <div className={`mt-16 pt-8 border-t border-border text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <p className="text-sm text-muted-foreground">
                © 2025 Lahiru Mudith — Designed with 💡 and coded with ❤️. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}