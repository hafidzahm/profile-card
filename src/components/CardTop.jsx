import SocialMediaContainer from "./SocialMediaContainer";
const CardTop = ({ icon }) => {
  return (
    <div className="top">
      <SocialMediaContainer icon={icon} />

      <div className="text">
        <div className="name-wrapper">
          <div className="name">Black Cat</div>
        </div>
        <div className="title">Meowengineer</div>
      </div>
    </div>
  );
};

export default CardTop;
