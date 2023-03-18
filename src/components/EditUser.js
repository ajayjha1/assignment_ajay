import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const EditUser = (item) => {

    
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [completeData, setCompleteData] = React.useState(item.AllData)
    const [name, setName] = React.useState(item.userData.name);
    const [email, setEmail] = React.useState(item.userData.email);
    const [uid, setUID] = React.useState(item.userData.uid);
    const [phoneNum, setPhoneNum] = React.useState(item.userData.phoneNum);
    const [description, setDescription] = React.useState(item.userData.description);
    const [category, setCategory] = React.useState(item.userData.category);
    const [formFields, setFormFields] = React.useState([]);
    const [index, setIndex] = React.useState(item.i);
    const [editedData, setEditedData] = React.useState()

    const handleSubmit = (e) =>{
       
        const newFormData = {name, email, uid, phoneNum, description, category}
        setFormFields([...formFields, newFormData]);
        setName('');
        setEmail('');
        setUID('');
        setPhoneNum('');
        setDescription('');
        handleClose();
      }

    const SaveDataUpdate = (e) =>{
        handleSubmit(e.target.value);
        const newData = [...item.AllData];
        newData[index] = editedData;
        item.onDataUpdate(newData);
    }

    

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue={name} name='name' onChange={(e)=>setName(e.target.value)} type="text" placeholder="Category Name" />
                </Form.Group>
                <Form.Group onChange={(e) => setEmail(e.target.value)} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control defaultValue={name} name='Description' type="email" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UID</Form.Label>
                    <Form.Control defaultValue={uid} name='uid' onChange={(e) => setUID(e.target.value)} type="text" placeholder="UID" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control defaultValue={phoneNum} name='phoneNum' onChange={(e) => setPhoneNum(e.target.value)} type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control defaultValue={description} name='description' onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control defaultValue={description} name='category' onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Description" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={SaveDataUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
