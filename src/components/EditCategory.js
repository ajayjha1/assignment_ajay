import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export const EditCategory = (item) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [completeData, setCompleteData] = React.useState(item.AllData)
  const [categoryName, setCategoryName] = React.useState(item.formData.categoryName)
  const [categoryIcon, setCategoryIcon] = React.useState(item.formData.categoryIcon)
  const [index, setIndex] = React.useState(item.i)
  const [categoryDescription, setCategoryDescription] = React.useState(item.formData.categoryDescription)
  const [categoryNameError, setCategoryNameError] = React.useState('')
  const [categoryDescriptionError, setCategoryDescriptionError] = React.useState('')
  const [categoryIconError, setCategoryIconError] = React.useState('')

  const SaveDataUpdate = () => {
    const newData = { categoryName, categoryDescription,categoryIcon };
    item.onDataUpdate(newData, index);
    handleClose();
  };

  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Edit Category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Category Name</Form.Label>
                    <Form.Control defaultValue={categoryName} name='categoryName' onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
                   {categoryNameError?.length > 0 ? <p style={{color: 'red'}}>{categoryNameError}</p>: ""}
                </Form.Group>
                <Form.Group  className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Description</Form.Label>
                    <Form.Control defaultValue={categoryDescription} name='categoryDescription' onChange={(e) => setCategoryDescription(e.target.value)}  type="email" placeholder="Description" />
                    {categoryDescriptionError?.length>0 ? <p style={{color: 'red'}}>{categoryDescriptionError}</p> : ""}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control defaultValue={categoryIcon} name='categoryIcon' onChange={(e) => setCategoryIcon(e.target.value)} type="text" placeholder="image url" />
                    {categoryIconError?.length>0 ? <p style={{color: 'red'}}>{categoryIconError}</p> : ''}
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
    </div>
  )
}
