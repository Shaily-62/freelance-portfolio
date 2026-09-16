import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "../constants/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Business Website",
    description: "",
    budget: "₹10,000–₹25,000",
    timeline: "2–4 Weeks",
    hasDesign: "No",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const projectTypes = [
    "Business Website",
    "React Application",
    "Full-Stack Application",
    "Dashboard",
    "AI Application",
    "AI Integration",
    "E-commerce",
    "Other",
  ];

  const budgets = [
    "Under ₹5,000",
    "₹5,000–₹10,000",
    "₹10,000–₹25,000",
    "₹25,000+",
    "Let's Discuss",
  ];

  const timelines = [
    "ASAP",
    "1–2 Weeks",
    "2–4 Weeks",
    "1–2 Months",
    "Flexible",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove old status when user edits the form
    setSubmitStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("");

    const data = new FormData();

    // Web3Forms Access Key
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    // Form details
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("company", formData.company || "N/A");
    data.append("project_type", formData.projectType);
    data.append("budget", formData.budget);
    data.append("timeline", formData.timeline);
    data.append("has_design", formData.hasDesign);
    data.append("message", formData.description);

    // Email subject
    data.append("subject", `New Project Inquiry — ${formData.projectType}`);

    // Sender name shown in email
    data.append("from_name", "Portfolio Contact Form");

    // Honeypot spam protection
    data.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");

        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "Business Website",
          description: "",
          budget: "₹10,000–₹25,000",
          timeline: "2–4 Weeks",
          hasDesign: "No",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-bgMain border-t border-borderMuted"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold text-terracotta uppercase tracking-widest block mb-2">
            Start A Project
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-primaryDark tracking-tight mb-4">
            Have an idea worth building?
          </h2>

          <p className="text-base text-textMain/75">
            Tell me what you're working on and let's figure out the best way to
            build it.
          </p>

          <div className="mt-6">
            <a
              href={PORTFOLIO_DATA.profile.socials.emailMailto}
              className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-primaryDark transition-colors"
            >
              <Mail className="w-4 h-4" />
              EMAIL ME DIRECTLY ({PORTFOLIO_DATA.profile.email})
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-bgSoft border border-borderMuted p-6 sm:p-10 rounded-2xl space-y-6"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Your Name *
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Your Email *
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Phone / WhatsApp
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX-XXXXX"
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          {/* Company + Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Company / Brand
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Studio"
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Project Type
              </label>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget + Timeline + Design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Estimated Budget
              </label>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              >
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Timeline
              </label>

              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              >
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
                Do you have a design?
              </label>

              <select
                name="hasDesign"
                value={formData.hasDesign}
                onChange={handleChange}
                className="w-full bg-bgMain border border-borderMuted rounded-lg px-4 py-3 text-sm text-textMain focus:outline-none focus:border-terracotta"
              >
                <option value="Yes (Figma/Wireframes)">
                  Yes (Figma/Wireframes)
                </option>

                <option value="No (Need UI/UX)">No (Need UI/UX)</option>

                <option value="Partial">Partial Design</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-primaryDark uppercase tracking-wider mb-2">
              Project Description *
            </label>

            <textarea
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell me about your product goals, key features, and any technical constraints..."
              className="w-full bg-bgMain border border-borderMuted rounded-lg p-4 text-sm text-textMain focus:outline-none focus:border-terracotta resize-y"
            />
          </div>

          {/* Status Message */}
          {submitStatus === "success" && (
            <div className="rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">
              ✓ Your inquiry has been sent successfully. I'll get back to you
              soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-primaryDark text-bgSoft text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-terracotta transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SENDING INQUIRY..." : "SEND INQUIRY"}

            {!isSubmitting && <Send className="w-4 h-4" />}
          </button>

          <p className="text-[11px] text-textMain/50 text-center italic">
            Your message will be securely delivered to my inbox.
          </p>
        </form>
      </div>
    </section>
  );
}
