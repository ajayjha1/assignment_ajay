import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { EditCategory } from './EditCategory';

export const CategoryCard = (item) => {
  var formData = item.category;
  const formDataCopy = item.category;
  const [forceRender, setForceRender] = React.useState(0);

    const navigate = useNavigate();

  const navigateToCreateForm = () =>{
    navigate('/CreateForm');
  }

  const handleDelete = (index) =>{
    let newFormData = [...formData]
    newFormData.splice(index, 1)
    formData = [...newFormData]
    item.dataUpdated(formData);
  }

  const handleDataUpdate = (updatedData, index) => {
    let newData = [...formData];
    newData[index] = updatedData;
    formData = [...newData];
    
    item?.dataUpdated(newData);
    setForceRender(1)
  };

  return (
    <div>
    {formData.map((formData, index)=>(
    <div className='category-card'>
    <Card style={{ width: '100%' }}>
      <Card.Img style={{ width: '50px', height: '50px'}} variant="top" src={formData.categoryIcon} />
      <Card.Body>
        <Card.Title>{formData.categoryName}</Card.Title>
        <Card.Text>
          {formData.categoryDescription}
        </Card.Text>
        <div style={{display: 'flex'}}>
        <Button onClick={navigateToCreateForm} variant="primary">Open</Button>
        <div>&nbsp;</div>
        <EditCategory i={index} formData={formData} AllData={formDataCopy} onDataUpdate={handleDataUpdate}/>
        <div>&nbsp;</div>
        <Button onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
    
  ))
    }
    </div>
  )
}
