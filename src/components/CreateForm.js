import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { UsersData } from './UsersData';


export const CreateForm = (item) => {

  
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        // const filterData = (email) => {
        //   setUserData(usersData?.filter((item) => item?.email !== email));
        // };

        
        const [name, setName] = React.useState();
        const [email, setEmail] = React.useState();
        const [uid, setUID] = React.useState();
        const [phoneNum, setPhoneNum] = React.useState();
        const [description, setDescription] = React.useState();
        const [category, setCategory] = React.useState();
        const [formFields, setFormFields] = React.useState([]);

        // const handleDelete = (email) => {
        //   setUserData(usersData?.filter((item) => item?.email !== email));
        // };

        const handleSubmit = (e) =>{
          
          const newFormData = {name, email, uid, phoneNum, description, category}
          setFormFields([...formFields, newFormData]);
          setName('');
          setEmail('');
          setUID('');
          setPhoneNum('');
          setDescription('');
          setCategory('');
          handleClose();
        }


  return (
    <div>
        <Button className='add-category-button' variant="primary" onClick={handleShow}>
            Add Form
        </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='Name' onChange={(e)=>setName(e.target.value)} type="text" placeholder="Category Name" />
                </Form.Group>
                <Form.Group onChange={(e) => setEmail(e.target.value)} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='Description' type="email" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UID</Form.Label>
                    <Form.Control name='uid' onChange={(e) => setUID(e.target.value)} type="text" placeholder="UID" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name='phoneNum' onChange={(e) => setPhoneNum(e.target.value)} type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name='category' onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Description" />
                </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
        <UsersData props = {formFields}/>
    </div>
  )
}
