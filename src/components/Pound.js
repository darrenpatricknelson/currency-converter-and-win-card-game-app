function Pounds(props) {
  let dollars = props.dollars;

  let Pounds = dollars * 0.76;
  let poundsRounded = Pounds.toFixed(2);

  return (
    <>
      <p>Pounds = £ {poundsRounded}</p>
    </>
  );
}

export default Pounds;
