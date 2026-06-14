"use client";

import { useCallback, useState, type FormEvent, type ReactNode } from "react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
const formAction = formId ? `https://formspree.io/f/${formId}` : null;

type SubmitState = "idle" | "submitting" | "success" | "error" | "not_configured";

const inputClass =
  "w-full border border-white/15 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#d7a762]/80 focus:ring-1 focus:ring-[#d7a762]/40";

const labelClass =
  "mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const isConfigured = Boolean(formAction);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!formAction) {
        setState("not_configured");
        return;
      }

      const form = event.currentTarget;
      const data = new FormData(form);

      setState("submitting");
      try {
        const response = await fetch(formAction, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          setState("success");
          form.reset();
        } else {
          setState("error");
        }
      } catch {
        setState("error");
      }
    },
    [],
  );

  return (
    <>
      {!isConfigured && (
        <p className="mb-4 rounded-sm border border-amber-500/30 bg-amber-500/10 p-3 text-xs leading-relaxed text-amber-100/90">
          Formspree henüz bağlı değil. Proje kökünde{" "}
          <code className="rounded bg-black/40 px-1">.env.local</code> dosyasına{" "}
          <code className="rounded bg-black/40 px-1">
            NEXT_PUBLIC_FORMSPREE_FORM_ID
          </code>{" "}
          ekleyin (ücretsiz:{" "}
          <a
            href="https://formspree.io"
            className="underline hover:text-amber-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            formspree.io
          </a>
          ).
        </p>
      )}

      <form onSubmit={onSubmit} className="relative flex flex-col gap-4">
        <input
          type="hidden"
          name="_subject"
          value="Serhat Kuzu — İletişim formu"
        />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <FormField id="contact-name" label="Ad Soyad">
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Adınız ve soyadınız"
          />
        </FormField>

        <FormField id="contact-email" label="E-posta">
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="ornek@email.com"
          />
        </FormField>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Telefon{" "}
            <span className="font-normal text-white/35">(isteğe bağlı)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+90 …"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Mesaj
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={inputClass}
            placeholder="Projeniz veya talebiniz hakkında yazın…"
          />
        </div>

        <button
          type="submit"
          disabled={!isConfigured || state === "submitting"}
          className="inline-flex h-12 items-center justify-center border border-[#d7a762] bg-[#d7a762] px-6 text-xs font-bold uppercase tracking-[0.22em] text-[#090705] transition hover:bg-transparent hover:text-[#d7a762] disabled:cursor-not-allowed disabled:border-white/20 disabled:bg-white/10 disabled:text-white/40"
        >
          {state === "submitting" ? "Gönderiliyor…" : "Gönder"}
        </button>

        {state === "success" && (
          <p className="text-sm text-emerald-400/95" role="status">
            Mesajınız alındı. En kısa sürede dönüş yapılacaktır.
          </p>
        )}
        {state === "error" && (
          <p className="text-sm text-red-300/95" role="alert">
            Gönderim başarısız. Lütfen tekrar deneyin veya doğrudan e-posta ile
            yazın.
          </p>
        )}
        {state === "not_configured" && (
          <p className="text-sm text-amber-200/90" role="alert">
            Form henüz yapılandırılmadı (Formspree ID eksik).
          </p>
        )}
      </form>
    </>
  );
}

function FormField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}
