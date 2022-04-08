function Euros(props) {
  let dollars = props.dollars;

  let Euros = dollars * 0.92;
  let eurosRounded = Euros.toFixed(2);

  return (
    <>
      <p>Euros = € {eurosRounded}</p>
    </>
  );
}

export default Euros;
