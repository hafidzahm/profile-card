import SocialMediaButton from "./SocialMediaButton";
import socialMedia from "./socialMedia";
const SocialMediaContainer = ({ icon }) => {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeftPosition = socialMedia.slice(0, middleIndex);
  const socialRightPosition = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeftPosition.map((data, index) => (
          <SocialMediaButton icon={data.icon} key={index} link={data.href} />
        ))}
      </div>

      <div className="social-buttons right">
        {socialRightPosition.map((data, index) => (
          <SocialMediaButton icon={data.icon} key={index} link={data.href} />
        ))}
      </div>
    </>
  );
};

export default SocialMediaContainer;
