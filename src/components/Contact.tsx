import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          // Reset form
          if (formRef.current) {
            formRef.current.reset();
          }
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nealterence731@gmail.com",
      href: "mailto:nealterence731@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+63 9975731573",
      href: "tel:+639975731573",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jasaan, Misamis Oriental, Philippines",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">
                    Send me a message
                  </h3>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="from_name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="from_email"
                          type="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Input name="subject" placeholder="Subject" required />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Let's connect!</h4>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'd love to hear from you. I typically
                  respond within 24 hours.
                </p>

                <div className="p-6 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start justify-center gap-2">
                    <Lightbulb className="w-8 h-8 text-yellow-500" />
                    <strong>Quick tip:</strong> The more details you provide
                    about your project, the better I can understand how to help
                    you achieve your goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
