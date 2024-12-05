export const Spinner = () => {
  const style = ".spinner_9Mto{animation:spinner_5GqJ 1.6s linear infinite;animation-delay:-1.6s}.spinner_bb12{animation - delay:-1s}@keyframes spinner_5GqJ{12.5 % { x: 13px; y: 1px }25%{x:13px;y:1px}37.5%{x:13px;y:13px}50%{x:13px;y:13px}62.5%{x:1px;y:13px}75%{x:1px;y:13px}87.5%{x:1px;y:1px}}";
  const svgAdditionalStyles = { display: 'block', margin: '10px auto' };

  return (
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={svgAdditionalStyles}>
      <style>{style}</style>
      <rect className="spinner_9Mto"
        style={{ fill: 'white' }}
        x="1" y="1" rx="1" width="10" height="10"
      />
      <rect
        style={{ fill: 'white' }}
        className="spinner_9Mto spinner_bb12"
        x="1" y="1" rx="1" width="10" height="10"
      />
    </svg>
  );
}
