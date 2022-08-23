import { useEffect, useState } from "react";

const GetMsg = () => {
  const [test, setTest] = useState([]);

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

  const filteredArray = () => {
    const filtered = test.filter((konexio) => {
      return konexio.name;
    });
    console.log(filtered);
  };
  console.log(test);
  return (
    <div>
      <button onClick={filteredArray}>ttest</button>
    </div>
  );
};

export default GetMsg;
