'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'error') {
    return (
      <div className="border border-red-200 p-10 text-center">
        <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Something went wrong.</h3>
        <p className="font-sans text-sm text-stone leading-relaxed max-w-sm mx-auto mb-6">
          Your message could not be sent. Please try again or write us directly at{' '}
          <a href="mailto:info@vthinvest.ch" className="text-bronze hover:underline">info@vthinvest.ch</a>.
        </p>
        <button onClick={() => setState('idle')} className="btn-link">Try again</button>
      </div>
    )
  }

  if (state === 'success') {
    return (
      <div className="border border-stone-light/40 p-10 text-center">
        <div className="w-12 h-12 bg-bronze/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-bronze text-2xl">✓</span>
        </div>
        <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Message received.</h3>
        <p className="font-sans text-sm text-stone leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We review all enquiries personally and will be in touch if there is alignment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="section-label text-stone-dark block mb-3">
            Full Name <span className="text-bronze">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full bg-transparent border-b border-stone-light/60 pb-3 font-sans text-sm text-charcoal placeholder-stone/50 focus:outline-none focus:border-bronze transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="section-label text-stone-dark block mb-3">
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full bg-transparent border-b border-stone-light/60 pb-3 font-sans text-sm text-charcoal placeholder-stone/50 focus:outline-none focus:border-bronze transition-colors duration-200"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="section-label text-stone-dark block mb-3">
            Email Address <span className="text-bronze">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full bg-transparent border-b border-stone-light/60 pb-3 font-sans text-sm text-charcoal placeholder-stone/50 focus:outline-none focus:border-bronze transition-colors duration-200"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="section-label text-stone-dark block mb-3">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full bg-transparent border-b border-stone-light/60 pb-3 font-sans text-sm text-charcoal placeholder-stone/50 focus:outline-none focus:border-bronze transition-colors duration-200"
            placeholder="+41 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="section-label text-stone-dark block mb-3">
          Nature of Enquiry <span className="text-bronze">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full bg-transparent border-b border-stone-light/60 pb-3 font-sans text-sm text-charcoal focus:outline-none focus:border-bronze transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="" disabled selected>Select a topic</option>
          <option value="investment">Investment opportunity</option>
          <option value="partnership">Partnership or co-investment</option>
          <option value="co-investment">Co-investment enquiries</option>
          <option value="career">Career introduction</option>
          <option value="general">General enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="section-label text-stone-dark block mb-3">
          Your Message <span className="text-bronze">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-stone-light/60 pb-3 font-sans text-sm text-charcoal placeholder-stone/50 focus:outline-none focus:border-bronze transition-colors duration-200 resize-none"
          placeholder="Tell us briefly about your enquiry and what you are hoping to explore."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 border-stone-light/60 accent-bronze cursor-pointer"
        />
        <label htmlFor="privacy" className="font-sans text-xs text-stone leading-relaxed">
          I have read and accept the{' '}
          <a href="/legal/privacy" className="text-bronze hover:underline">Privacy Policy</a>.
          VTH Group will use your information only to respond to this enquiry.
        </label>
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? 'Sending...' : 'Send Message'}
        {state !== 'submitting' && <ArrowUpRight size={14} />}
      </button>
    </form>
  )
}
