import BadgeItem from "./BadgeItem";
const BadgeContainer = ({ nameBadge }) => {
  return (
    <div className="buttons">
      <BadgeItem nameBadge={"PhD"} />
      <BadgeItem nameBadge={"Meowengineer"} />
      <BadgeItem nameBadge={"3DGeeek"} />
    </div>
  );
};
export default BadgeContainer;
