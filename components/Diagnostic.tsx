"use client";

import { useState } from "react";

// TODO : valider ces critères d'éligibilité avec le cabinet.
const criteria = [
  { id: "legal", label: "Votre entreprise est une PME formellement enregistrée en Afrique." },
  { id: "age", label: "Elle a au moins 2 ans d'activité." },
  { id: "accounts", label: "Elle dispose d'états financiers sur les 2 derniers exercices." },
  { id: "revenue", label: "Son chiffre d'affaires annuel dépasse 100 millions de FCFA (environ 150 000 €)." },
  { id: "growth", label: "Elle a un projet de croissance nécessitant un financement en fonds propres." },
  { id: "open", label: "Le dirigeant est prêt à ouvrir le capital à un investisseur minoritaire." },
] as const;

type Answers = Partial<Record<(typeof criteria)[number]["id"], boolean>>;

export default function Diagnostic() {
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const complete = criteria.every((c) => answers[c.id] !== undefined);
  const missing = criteria.filter((c) => answers[c.id] === false);
  const eligible = done && missing.length === 0;

  return (
    <section className="section section--tint" id="diagnostic">
      <div className="container diagnostic">
        <div>
          <p className="kicker">Diagnostic d&apos;éligibilité</p>
          <h2>Votre PME est-elle prête pour une levée de fonds propres ?</h2>
          <p className="lead">
            Nous accompagnons les PME africaines qui remplissent les critères
            ci-contre. Répondez en deux minutes pour savoir où vous en êtes.
          </p>
        </div>

        <form
          className="panel"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          {criteria.map((c) => (
            <fieldset key={c.id} className="question">
              <legend>{c.label}</legend>
              {[true, false].map((value) => (
                <label key={String(value)}>
                  <input
                    type="radio"
                    name={c.id}
                    required
                    checked={answers[c.id] === value}
                    onChange={() => {
                      setDone(false);
                      setAnswers((a) => ({ ...a, [c.id]: value }));
                    }}
                  />
                  {value ? "Oui" : "Non"}
                </label>
              ))}
            </fieldset>
          ))}
          <button className="button button--primary" type="submit" disabled={!complete}>
            Obtenir mon résultat
          </button>

          {done && (
            <div className={`result ${eligible ? "result--ok" : "result--ko"}`} role="status">
              {eligible ? (
                <>
                  <strong>Votre PME semble éligible à notre accompagnement.</strong>
                  <p>Prenons rendez-vous pour un échange approfondi.</p>
                  <a className="button button--gold" href="#contact">
                    Prendre rendez-vous
                  </a>
                </>
              ) : (
                <>
                  <strong>Votre PME ne remplit pas encore tous les critères.</strong>
                  <ul>
                    {missing.map((c) => (
                      <li key={c.id}>{c.label}</li>
                    ))}
                  </ul>
                  <p>Contactez-nous : certaines situations peuvent être étudiées au cas par cas.</p>
                  <a className="button button--primary" href="#contact">
                    Nous contacter
                  </a>
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
