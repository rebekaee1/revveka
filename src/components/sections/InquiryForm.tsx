'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Dictionary } from '@/data/dictionaries';
import type { Locale } from '@/lib/i18n';

interface InquiryFormProps {
  dictionary: Dictionary;
  locale: Locale;
  standalone?: boolean; // If true, renders without section wrapper
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  details: string;
  consent: boolean;
}

function InquiryFormContent({ 
  dictionary, 
  locale,
  showHeader = true,
}: { 
  dictionary: Dictionary; 
  locale: Locale;
  showHeader?: boolean;
}) {
  const t = dictionary.inquiry;
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: '',
    details: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: form.email,
          phone: form.phone,
          name: form.name,
          company: form.company,
          topic: form.topic,
          details: form.details,
          lang: locale,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          topic: '',
          details: '',
          consent: false,
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === 'error' || status === 'success') {
      setStatus('idle');
    }
  };

  return (
    <div>
      {showHeader && (
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
              {t.form.name} *
            </label>
            <input
              type="text"
              id="name"
              required
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
              {t.form.company}
            </label>
            <input
              type="text"
              id="company"
              value={form.company}
              onChange={(e) => updateField('company', e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              {t.form.email} *
            </label>
            <input
              type="email"
              id="email"
              required
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              {t.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>

          {/* Topic */}
          <div className="sm:col-span-2">
            <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-1.5">
              {t.form.topic}
            </label>
            <input
              type="text"
              id="topic"
              value={form.topic}
              onChange={(e) => updateField('topic', e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>

          {/* Details */}
          <div className="sm:col-span-2">
            <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1.5">
              {t.form.details}
            </label>
            <textarea
              id="details"
              rows={4}
              value={form.details}
              onChange={(e) => updateField('details', e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
            />
          </div>

          {/* Consent */}
          <div className="sm:col-span-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => updateField('consent', e.target.checked)}
                className="mt-1 w-4 h-4 border-slate-300 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                {t.form.consent} *
              </span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6">
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t.form.sending : t.form.submit}
          </Button>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800 font-medium">
              {t.form.success}
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800 font-medium">
              {t.form.error}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export function InquiryForm({ dictionary, locale, standalone = false }: InquiryFormProps) {
  if (standalone) {
    return <InquiryFormContent dictionary={dictionary} locale={locale} showHeader={false} />;
  }

  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <InquiryFormContent dictionary={dictionary} locale={locale} showHeader={true} />
        </div>
      </Container>
    </section>
  );
}
