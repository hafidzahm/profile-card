const SocialMediaButton = ({ icon, link }) => {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa-brands fa-${icon}`}></i>
    </button>
  );
};

export default SocialMediaButton;
