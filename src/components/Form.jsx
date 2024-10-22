import { useRef } from "react";
import { useEffect } from "react";
import Input from "./Input";

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>
        <Input ref={inputRef} type={"text"} placeholder={"enter something"} />
      </p>
    </div>
  );
};

export default Form;
