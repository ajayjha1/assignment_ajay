import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { EditUser } from './EditUser';
export const UsersData = (item) => {
    var dataArray = [...item.props];
   const [usersData, setUserData] = React.useState(dataArray);
   const [usersDataCopy, setUserDataCopy] = React.useState(dataArray);

   const handleDelete = (email) => {
    setUserData(usersData?.filter((item) => item?.email !== email));
  };

  const handleDataUpdate = (updatedData) => {
    setUserData(updatedData);
  };

  return (
    <div>
        <Table bordered striped>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>UID</th>
                <th>Phone No.</th>
                <th>Description</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    dataArray?.map((usersData, index)=>{
                        return(
                    <tr key={index}>
                        <td>{usersData?.name}</td>
                        <td>{usersData?.email}</td>
                        <td>{usersData?.uid}</td>
                        <td>{usersData?.phoneNum}</td>
                        <td>{usersData?.description}</td>
                        <td><EditUser i = {index}  userData={usersData} AllData={usersDataCopy} onDataUpdate={handleDataUpdate}/></td>
                        <td><Button onClick={() => handleDelete(usersData?.email)}>Delete</Button></td>
                    </tr>
                    )
                    })
                    
                }
            </tbody>
            
        </Table>
        
    </div>
  )
}
