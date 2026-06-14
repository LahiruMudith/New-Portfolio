"use client"

import React, { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { AnimatedSection } from "@/components/animated-section"
import { contactInfo, socialLinks } from "@/data/portfolio"

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

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
          "service_6dja5i8",
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
      <section id="contact" className="py-6 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0} direction="up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Let's work together to bring your ideas to life
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <AnimatedSection delay={0.2} direction="left" className="space-y-6">
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
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.4} direction="right" className="h-full">
              <Card className="p-6 h-full">
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
              </AnimatedSection>
            </div>

            {/* Footer */}
            <AnimatedSection delay={0.6} direction="up" className="mt-16 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Lahiru Mudith — Designed with 💡 and coded with ❤️. All rights reserved.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
  );
}