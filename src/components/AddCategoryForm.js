import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { CategoryCard } from './CategoryCard';
import { useNavigate } from 'react-router-dom'


export const AddCategory = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [category, setCategory] = React.useState({Name:'', Description:'', Icon: ''});
  const [categoryName, setCategoryName] = React.useState('')
  const [categoryDescription, setCategoryDescription] = React.useState('')
  const [categoryIcon, setCategoryIcon] = React.useState('');
  const [categoryNameError, setCategoryNameError] = React.useState('');
  const [categoryDescriptionError, setCategoryDescriptionError] = React.useState('');
  const [categoryIconError, setCategoryIconError] = React.useState('');

  const [categoryData, setCategoryData]  = React.useState([]);

  const validationCheck = (e) =>{
    const FormCreate = {categoryName, categoryDescription, categoryIcon};
    let formCategoryName = FormCreate.categoryName
    let formCategoryDescription = FormCreate.categoryDescription
    let formCategoryIcon = FormCreate.categoryIcon
    let boolValue = true;
    
      setCategoryNameError('')
      setCategoryDescriptionError('')
      setCategoryIconError('')
   
    if(formCategoryName?.length <= 0){
      setCategoryNameError('Enter a valid category name')
      boolValue=false;
    }
    if(formCategoryDescription?.length<= 10){
      setCategoryDescriptionError('Enter description of more than 10 words');
      boolValue = false;
    }
    if(formCategoryIcon?.length <= 0){
      setCategoryIconError('Enter a valid icon link');
      boolValue=false;
    }
    if(boolValue == true){
      handleSubmit(e)
    }
  }

  const handleSubmit = (e) =>{
    const newCategory = {categoryName, categoryDescription, categoryIcon};
    setCategoryData([...categoryData, newCategory]);
    setCategoryName('');
    setCategoryDescription('');
    setCategoryIcon('');
    handleClose();
  }

    // const navigate = useNavigate();
    // const navigateToCreateForm = () =>{
    //   navigate('/CreateForm');
    // }

  return (
    <div>

        <Button className='add-category-button' variant="primary" onClick={handleShow}>
            Add Category
        </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Category Name</Form.Label>
                    <Form.Control name='categoryName' onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
                   {categoryNameError?.length > 0 ? <p style={{color: 'red'}}>{categoryNameError}</p>: ""}
                </Form.Group>
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Description</Form.Label>
                    <Form.Control name='categoryDescription' onChange={(e) => setCategoryDescription(e.target.value)}  type="email" placeholder="Description" />
                    {categoryDescriptionError?.length>0 ? <p style={{color: 'red'}}>{categoryDescriptionError}</p> : ""}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control name='categoryIcon' onChange={(e) => setCategoryIcon(e.target.value)} type="text" placeholder="image url" />
                    {categoryIconError?.length>0 ? <p style={{color: 'red'}}>{categoryIconError}</p> : ''}
                </Form.Group>
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
      <CategoryCard category={categoryData}/>
    </div>
  )
}
