import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [associations, setAssociations] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(`http://localhost:5000/associations`);
    const response = await request.json();
    setAssociations(response);
  };
  console.log(associations);
  return (
    <div>
      {associations.map((association) => {
        return (
          <section className="container">
            <img src={association.image} alt={association.name} />
            <Link to={`/associations/${association.slug}`}>
              <article className="card">
                <h2>{association.name}</h2>
                <p>{association.description}</p>
              </article>
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default Home;
