import { useEffect, useState } from "react";
import H2 from "../components/H2";
import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";

const NewMessage = () => {
  const [message, setMessage] = useState("");
  // const [text, setText] = useState([]);
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
  const handleTextArea = (e) => {
    // setText(e.target.value);
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

  return (
    <>
      <form>
        <H2>New Message</H2>
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
        <TextArea
          onChange={handleTextArea}
          value={message}
          type="text"
          label="Object"
          placeholder="Object"
        />
      </form>
    </>
  );
};

export default NewMessage;
