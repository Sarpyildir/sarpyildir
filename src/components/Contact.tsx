import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'

interface FormState {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200 font-sans'

  return (
    <section id="contact" className="py-24 bg-bg-base relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="// get in touch"
          title="Let's Work Together"
          description="Open to full-time roles, freelance contracts, or interesting conversations about complex systems."
          centered
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Left — quick links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 space-y-3"
          >
            <p className="text-xs font-mono text-ink-tertiary uppercase tracking-widest mb-5">Reach me directly</p>
            {[
              { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Github, label: 'github.com/sarpyildir', href: personalInfo.github },
              { icon: Linkedin, label: 'linkedin.com/in/sarp-y%C4%B1ld%C4%B1r%C4%B1m-9625a01b3/', href: personalInfo.linkedin },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-bg-card hover:border-accent/30 hover:bg-bg-elevated transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-md bg-bg-elevated border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors">
                  <Icon size={14} className="text-ink-secondary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-mono text-ink-secondary group-hover:text-ink-primary transition-colors truncate">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bg-card rounded-xl border border-border p-8 text-center card-glow"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-muted border border-emerald/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={22} className="text-emerald" />
                </div>
                <h3 className="text-lg font-semibold text-ink-primary mb-2">Message sent!</h3>
                <p className="text-sm text-ink-secondary">
                  Thanks for reaching out — I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-bg-card rounded-xl border border-border p-6 card-glow space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-ink-tertiary mb-1.5">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-tertiary mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-ink-tertiary mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
