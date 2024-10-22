import { forwardRef } from "react";

const Input = ({ type, placeholder }, ref) => {
  return <input ref={ref} type={type} placeholder={placeholder} />;
};

const forwaredInput = forwardRef(Input);

export default forwaredInput;
