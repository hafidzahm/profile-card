import BadgeItem from "./BadgeItem";
const BadgeContainer = ({ nameBadge }) => {
  return (
    <div className="buttons">
      <BadgeItem nameBadge={"Front End Developer"} />
      <BadgeItem nameBadge={"React js"} />
    </div>
  );
};
export default BadgeContainer;
