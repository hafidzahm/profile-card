import BadgeContainer from "./BadgeContainer";
const CardBottom = (nameBadge) => {
  return (
    <div className="bottom">
      <div className="desc">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea non earum
          nisi perspiciatis hic temporibus nemo ratione? Possimus, modi nostrum
          culpa recusandae, atque ut molestias ducimus architecto repellendus
          rem facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea non earum
          nisi perspiciatis hic temporibus nemo ratione? Possimus, modi nostrum
          culpa recusandae, atque ut molestias ducimus architecto repellendus
          rem facere.
        </p>
      </div>

      <BadgeContainer nameBadge={nameBadge} />
    </div>
  );
};

export default CardBottom;
