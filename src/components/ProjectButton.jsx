const ProjectButton = ({ icon, link }) => {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa-solid fa-${icon}`}></i>
    </button>
  );
};

export default ProjectButton;
