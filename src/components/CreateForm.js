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

        
        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [uid, setUID] = React.useState('');
        const [phoneNum, setPhoneNum] = React.useState('');
        const [description, setDescription] = React.useState('');
        const [category, setCategory] = React.useState('');
        const [formFields, setFormFields] = React.useState([]);

        const [nameError, setNameError] = React.useState('');
        const [emailError, setEmailError] = React.useState('');
        const [uidError, setUIDError] = React.useState('');
        const [phoneNumError, setPhoneNumError] = React.useState('');
        const [descriptionError, setDescriptionError] = React.useState('');
        const [categoryError, setCategoryError] = React.useState('');


        // const handlefilter = (email) => {
        //   setUserData(usersData?.filter((item) => item?.email !== email));
        // };

        const validationCheck = (e) =>{
          let boolValue2 = true;
          setNameError('')
          setEmailError('')
          setUIDError('')
          setDescriptionError('')
          setPhoneNumError('')
          if(name?.length<=0){
            setNameError('Name is mandatory');
            boolValue2 = false;
          }
          if(email?.length<=0){
            setEmailError('Email is mandatory');
            boolValue2 = false;
          }
          if(uid?.length <= 0){
            setUIDError('UID is mandatory');
            boolValue2 = false;
          }
          if(description?.length>0 && description?.length<10){
            setDescriptionError('Enter description greater than 10')
            boolValue2 = false;
          }
          if(phoneNum?.length>0 && phoneNum?.length<10){
            setPhoneNumError('Enter a 10 digit contact number');
            boolValue2 = false;
          }
          if(boolValue2 == true){
            handleSubmit(e);
          }
        }

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

        const updateDataFunction = (newData) =>{
          setFormFields(newData);
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
                    <Form.Control name='Name' onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
                    {nameError.length > 0 ? <p style={{color: 'red'}}>{nameError}</p> : ""}
                </Form.Group>
                <Form.Group onChange={(e) => setEmail(e.target.value)} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='Description' type="email" placeholder="Description" />
                    {emailError.length > 0 ? <p style={{color: 'red'}}>{emailError}</p> : ""}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UID</Form.Label>
                    <Form.Control name='uid' onChange={(e) => setUID(e.target.value)} type="text" placeholder="UID" />
                    {uidError.length > 0 ? <p style={{color: 'red'}}>{uidError}</p> : ""}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name='phoneNum' onChange={(e) => {if (e.target.value.length > 10) { e.target.value = e.target.value.slice(0, 10);} setPhoneNum(e.target.value);}} type="number" placeholder="Phone Number" />
                    {phoneNumError.length > 0 ? <p style={{color: 'red'}}>{phoneNumError}</p> : ""}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='description' onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                    {descriptionError.length > 0 ? <p style={{color: 'red'}}>{descriptionError}</p> : ""}
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name='category' onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Category" />
                </Form.Group> */}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={validationCheck}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
        <UsersData props = {formFields} dataUpdated={updateDataFunction}/>
    </div>
  )
}
