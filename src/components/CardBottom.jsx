import BadgeContainer from "./BadgeContainer";
const CardBottom = (nameBadge) => {
  return (
    <div className="bottom">
      <div className="desc">
        <p>
          Hello, I'm Hafizh. I am interested for learning FE/BE. I'm finished
          learning FE Expert Developer from DBS Foundation Coding Camp, a
          collaboration bootcamp with Dicoding Indonesia. Beside that, i also
          learn Basic React from iDCamp x Dicoding and CODEPOLITAN, and Basic BE
          with AWS X Dicoding Indonesia too. Just right now, i'm part of an
          awardee on Fullstack Developer from Zakatloop x Hacktiv8. Click the
          file icon on upper left-in case you're curious on my CV.
        </p>
      </div>

      <BadgeContainer nameBadge={nameBadge} />
    </div>
  );
};

export default CardBottom;
