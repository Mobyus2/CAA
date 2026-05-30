type LogoProps = {
  compact?: boolean;
};

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div className="brand-mark" aria-label="CapAccess Advisory">
      <span className="brand-symbol">CAA</span>
      {!compact && (
        <span className="brand-copy">
          <strong>CapAccess</strong>
          <span>Advisory</span>
        </span>
      )}
    </div>
  );
}
