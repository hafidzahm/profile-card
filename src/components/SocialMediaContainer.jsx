import SocialMediaButton from "./SocialMediaButton";
import ProjectButton from "./ProjectButton";
import socialMedia from "./socialMedia";
import project from "./project";
const SocialMediaContainer = ({ icon }) => {


  return (
    <>
      <div className="social-buttons">
        {project.map((data, index) => (
          <ProjectButton icon={data.icon} key={index} link={data.href} />
        ))}
      </div>

      <div className="social-buttons right">
        {socialMedia.map((data, index) => (
          <SocialMediaButton icon={data.icon} key={index} link={data.href} />
        ))}
      </div>
    </>
  );
};

export default SocialMediaContainer;
