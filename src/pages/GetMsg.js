import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetMsg = () => {
  const [test, setTest] = useState([]);
  const [association, setAssociation] = useState([]);

  useEffect(() => {
    fetchDataParams();
    fetchdata();
  }, []);

  const { slug } = useParams();

  const fetchDataParams = async () => {
    const request = await fetch(`http://localhost:5000/associations/${slug}`);
    const response = await request.json();
    setAssociation(response);
    const filtered = test.filter((konexio) => {
      return konexio.slug === slug;
    });
    console.log(filtered);
  };

  const fetchdata = async () => {
    const request = await fetch(
      `http://localhost:5000/associations/konexio/msg`
    );
    const response = await request.json();
    setTest(response);

    console.log(test);
  };

  return <div></div>;
};

export default GetMsg;
