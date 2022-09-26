import { useEffect, useState } from "react";
import H2 from "../components/H2";
import Input from "../components/Input";
import Select from "../components/Select";

const NewMessage = () => {
  const [message, setMessage] = useState("");

  const [options, setOptions] = useState([]);
  const [associationSlug, setAssociationSlug] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    selectOption();
  }, []);
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleAssociationSlug = (e) => {
    setAssociationSlug(e.target.value);
  };

  const selectOption = async () => {
    const request = await fetch(
      `${process.env.REACT_APP_API_URL}${"associations"}`
    );
    const response = await request.json();

    const mapForOptions = response.map((association) => {
      return {
        value: association.slug,
        text: association.name,
      };
    });
    setOptions(mapForOptions);
  };
  // const options = [
  //   {
  //     value: "",
  //     text: "Select an option",
  //   },
  //   {
  //     value: "les-restos-du-coeurs",
  //     text: "Les restos du coeur",
  //   },
  //   {
  //     value: "unicef",
  //     text: "Unicef",
  //   },
  //   {
  //     value: "konexio",
  //     text: "Konexio",
  //   },
  // ];

  return (
    <>
      <H2>New Message</H2>
      <form>
        <Input
          onChange={handleMessage}
          value={message}
          type="text"
          label="Object"
          placeholder="Object"
        />
        <Select
          onChange={handleAssociationSlug}
          options={options}
          value={associationSlug}
        />
      </form>
    </>
  );
};

export default NewMessage;
