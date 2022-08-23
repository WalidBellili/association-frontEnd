import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetMsg = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const request = await fetch(
      `http://localhost:5000/associations/konexio/msg`
    );
    const response = await request.json();
    setTest(response);
  };
  console.log(test);

  if (!test) {
    return <p>Loading</p>;
  }

  return (
    <>
      <section>
        <article>
          {test.map((te) => {
            return <p>{te.contenu}</p>;
          })}
        </article>
      </section>
    </>
  );
};

export default GetMsg;
