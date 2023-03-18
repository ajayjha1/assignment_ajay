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
  const [category, setCategory] = React.useState({Name:'', Description:'', Icon: ''});
  const [categoryName, setCategoryName] = React.useState('')
  const [categoryDescription, setCategoryDescription] = React.useState('')
  const [categoryIcon, setCategoryIcon] = React.useState()

  const [categoryData, setCategoryData]  = React.useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newCategory = {categoryName, categoryDescription, categoryIcon};
    setCategoryData([...categoryData, newCategory]);
    setCategoryName('');
    setCategoryDescription('');
    setCategoryIcon('');
    handleClose();
  }

    const navigate = useNavigate();
    const navigateToCreateForm = () =>{
      navigate('/CreateForm');
    }

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
                </Form.Group>
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Description</Form.Label>
                    <Form.Control name='categoryDescription' onChange={(e) => setCategoryDescription(e.target.value)}  type="email" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control name='categoryIcon' onChange={(e) => setCategoryIcon(e.target.value)} type="text" placeholder="image url" />
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
      <CategoryCard category={categoryData}/>
    </div>
  )
}
