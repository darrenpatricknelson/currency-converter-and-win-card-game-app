function Rands(props) {
  let dollars = props.dollars;

  let rands = dollars * 14.64;
  let randsRounded = rands.toFixed(2);
  return (
    <>
      <p>SA rands = R {randsRounded}</p>
    </>
  );
}

export default Rands;
