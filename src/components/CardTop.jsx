import SocialMediaContainer from "./SocialMediaContainer";
const CardTop = ({ icon }) => {
  return (
    <div className="top">
      <SocialMediaContainer icon={icon} />

      <div className="text">
        <div className="name-wrapper">
          <div className="name">Abdul Hafizh Mahfudin</div>
        </div>
        <div className="title">Front End Developer</div>
      </div>
    </div>
  );
};

export default CardTop;
