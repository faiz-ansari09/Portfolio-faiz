import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Oops! Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-start mx-9">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:ansarifaiz0905@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ansarifaiz0905@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+919838492234"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9838492234
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Gonda, Uttar Pradesh, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <h4 className="font-medium mb-4 text-primary flex justify-center">
                Connect With Me
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/faiz-ansari09"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <GrLinkedin size={25} />
                </a>
                <a
                  href="https://x.com/faiz_ans09"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <BsTwitterX size={24} />
                </a>
                <a
                  href="https://www.instagram.com/faiz_ans06"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <GrInstagram size={25} />
                </a>
                <a
                  href="https://wa.me/+919838492234"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <BsWhatsapp size={26} />
                </a>
                <a
                  href="https://github.com/faiz-ansari09"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <GrGithub size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write Your Message..."
                  required
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {formStatus.message && (
                <div
                  className={`form-status ${
                    formStatus.success ? "success" : "error"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
