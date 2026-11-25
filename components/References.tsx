// TODO : remplacer par les PME pilotes (nom, secteur, pays, logo) dès accord de leur part.
const pilots = [1, 2, 3];

export default function References() {
  return (
    <section className="section" id="references">
      <div className="container">
        <div className="heading">
          <p className="kicker">Références</p>
          <h2>Nos trois PME pilotes.</h2>
          <p className="lead">
            Nous accompagnons actuellement trois PME pilotes. Leurs références
            seront présentées ici dès leur accord.
          </p>
        </div>
        <div className="grid grid--3">
          {pilots.map((n) => (
            <article className="card card--placeholder" key={n}>
              <p className="kicker">PME pilote {n}</p>
              <h3>Référence à venir</h3>
              <p>Secteur · Pays · Nature de l&apos;opération</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
