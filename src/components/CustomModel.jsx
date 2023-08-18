import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function CustomModel(props) {
    const totoalUsers = useSelector((state) => state.app.users);

    const singleUser = totoalUsers.filter((element) => element.id === props.id);

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Full User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>ID: {singleUser[0].id}</h5>
                <h4>Name: {singleUser[0].name}</h4>
                <h6>Email: {singleUser[0].email} </h6>
                <p>Age: {singleUser[0].age}</p>
                <p>Gender:{singleUser[0].gender} </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModel;
