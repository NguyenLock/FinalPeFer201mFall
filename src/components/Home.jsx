import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css'

function Home(){
    const [APIData, setAPIData] = useState([])
    const getStudentsUrl = 'https://65375e4bbb226bb85dd320ac.mockapi.io/studentManagement';

    useEffect(()=>{
        axios.get(getStudentsUrl).then(
            response =>{
                return response.data;
            }
        )
        .then(data => {setAPIData(data.sort((a, b)=> {return b.name - a.name})) })
        .catch(error => console.log(error.message))
    },[])

    return (
      <div className='content' style={{marginLeft: '68px'}}>
         <>
        <h1 className='font-page'>Home</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {APIData.map((student) => (

            <Card style={{padding: '30px'}} sx={{ maxWidth: 400}}>
              <CardMedia
                component="img"
                height="260"
                image={student.image}
              />
              <div className='card-content'>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link to={`detail/${student.id}`}>
                      Id: <a> {student.id}</a>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link style={{textDecoration: 'none', color: 'red'}} to={`detail/${student.id}`}>
                      Name: <a> {student.name}</a>
                    </Link>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    Date Of Birth {student.dateofbirth}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    class: {student.class}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    Gender: {student.gender === true ? 'Male' : 'Female'}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    feedback: {student.feedback}
                  </Typography>

                </CardContent>
              </div>
              <CardActions style={{display: 'contents'}}>
                <Link to={`detail/${student.id}`}>
                <Button size="small">Detail</Button>
                </Link>
              </CardActions>
            </Card>
          ))};
        </Grid>
      </>
      </div>
    )
  
}
export default Home
