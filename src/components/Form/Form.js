import { useRef } from "react";
import Card from "../UI/Card";

const Form = () => {
  const nameRef = useRef();
  const userRef = useRef();

  const submitHabdler = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value, userRef.current.value);
  };
  return (
    <Card>
      <form onSubmit={submitHabdler}>
        <label htmlFor="name">Nom</label>{" "}
        <input ref={nameRef} type="text" id="name" />
        <label htmlFor="username">UserName</label>{" "}
        <input ref={userRef} type="text" id="username" />
        <br />
        <button>Submit</button>
      </form>
    </Card>
  );
};

export default Form;
