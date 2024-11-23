import BadgeContainer from "./BadgeContainer";
const CardBottom = (nameBadge) => {
  return (
    <div className="bottom">
      <div className="desc">
        <p>
          Hello, I'm Hafizh. I am interested for learning FE/BE. I'm also
          learning FE Expert Developer, React Basic, and Basic Back End
          Developer at Dicoding Indonesia Scholarship. Just right now, i am
          working for 'Yummy-YUM' project applied PWAs application, responsive
          mobile-first design, and accessibility-approved features. Also, i'm taking a Fullstack Developer from Coursera x Prakerja, and React Basic from CODEPOLITAN
        </p>
      </div>

      <BadgeContainer nameBadge={nameBadge} />
    </div>
  );
};

export default CardBottom;
