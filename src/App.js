import "./index.css";
import Table from "./components/Table/Table";
import Counter from "./components/Counter/Counter";
import Card from "./components/UI/Card";
import Form from "./components/Form/Form";

export default function App() {
  return (
    <Card>
      <Form />
      <Table />
      <Counter />
    </Card>
  );
}
