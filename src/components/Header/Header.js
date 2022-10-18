import Card from "../UI/Card";
import Context from "../../storage/Context";
import { useContext } from "react";

const Header = () => {
  const counterContext = useContext(Context);
  return (
    <Card>
      <header>
        <h1>Counter</h1>
        {counterContext.counter}
      </header>
    </Card>
  );
};

export default Header;
