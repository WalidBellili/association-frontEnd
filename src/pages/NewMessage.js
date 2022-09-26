import { useState } from "react";
import H2 from "../components/H2";
import Input from "../components/Input";

const NewMessage = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(message);

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
      </form>
    </>
  );
};

export default NewMessage;
