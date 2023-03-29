import Toast from "react-bootstrap/Toast";

const Welcome = (props) => {
  return (
    <Toast className="mt-5" bg="dark">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{props.Brand}</strong>
        <small>{props.Slogan}</small>
      </Toast.Header>
      <Toast.Body>{props.Message}</Toast.Body>
    </Toast>
  );
};

export default Welcome;
