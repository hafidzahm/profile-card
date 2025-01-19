import BadgeContainer from "./BadgeContainer";
const CardBottom = (nameBadge) => {
  return (
    <div className="bottom">
      <div className="desc">
        <p>
          Hello, I'm Hafizh. I am interested for learning FE/BE. I'm also
          learning FE Expert Developer, React Basic, and Basic Back End
          Developer at Dicoding Indonesia Scholarship. Just right now, i'm part
          of an awardee on Fullstack Developer from Zakatloop x Hacktiv8.
        </p>
      </div>

      <BadgeContainer nameBadge={nameBadge} />
    </div>
  );
};

export default CardBottom;
