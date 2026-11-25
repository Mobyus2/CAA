"use client";

import { useState } from "react";
import { API_URL, BOOKING_URL, CONTACT_EMAIL } from "./site";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setError(`L'envoi a échoué. Écrivez-nous directement à ${CONTACT_EMAIL}.`);
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <p className="kicker">Contact</p>
          <h2>Parlons de votre projet.</h2>
          <p className="lead">
            Réservez un créneau avec notre équipe ou laissez-nous un message ;
            nous revenons vers vous rapidement.
          </p>
          <a className="button button--gold" href={BOOKING_URL}>
            Prendre rendez-vous
          </a>
          <p className="contact__mail">
            Ou par e-mail : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>

        <form className="panel" onSubmit={onSubmit}>
          <label>
            Nom
            <input name="nom" required minLength={2} maxLength={100} autoComplete="name" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" required minLength={10} maxLength={5000} rows={5} />
          </label>
          <button className="button button--primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Envoi…" : "Envoyer"}
          </button>
          {status === "sent" && (
            <p className="result result--ok" role="status">
              Merci, votre message a bien été envoyé.
            </p>
          )}
          {status === "error" && (
            <p className="result result--ko" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
