import { Link } from "react-router-dom";
import Button from "./Button";

const AssociationCard = ({ association }) => {
  console.log(association);
  return (
    <section className="card">
      <h3>{association.name}</h3>

      <hr />
      <div className="handleImg">
        <img src={association.image} alt={association.name} />
      </div>

      <article className="description">
        <p className="parapgrapheDescription">{association.description}</p>
      </article>
      <Link to={`/${association.slug}`}>
        <Button type="button" text="More" />
      </Link>
    </section>
  );
};

export default AssociationCard;
