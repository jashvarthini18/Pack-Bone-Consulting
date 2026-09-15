function Marquee() {
  const text =
    "PACKAGING DEVELOPMENT • VALUE ENGINEERING • NPD • VALIDATION • AUTOMATION • SUPPLIER DEVELOPMENT • ";

  return (
    <div className="marquee">

      <div className="marquee-track">

        <span>{text}</span>
        <span>{text}</span>

      </div>

    </div>
  );
}

export default Marquee;