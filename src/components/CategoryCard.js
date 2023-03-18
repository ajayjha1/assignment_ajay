import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

export const CategoryCard = (item) => {
  const formData = item.category;
    const navigate = useNavigate();

  const navigateToCreateForm = () =>{
    navigate('/CreateForm');
  }

  return (
    <div>
    {formData.map((formData)=>(
    <div className='category-card'>
    <Card style={{ width: '100%' }}>
      <Card.Img style={{ width: '20px', height: '20px'}} variant="top" src={"'"+formData.categoryIcon+"'"} />
      <Card.Body>
        <Card.Title>{formData.categoryName}</Card.Title>
        <Card.Text>
          {formData.categoryDescription}
        </Card.Text>
        <Button onClick={navigateToCreateForm} variant="primary">Open</Button>
      </Card.Body>
    </Card>
    </div>
    
  ))
    }
    </div>
  )
}
