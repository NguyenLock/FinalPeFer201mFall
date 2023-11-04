import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


export default function Detail(){
    const students = useParams();

    const [APIData, setAPIData] = useState([])
    const getStudentsUrl = `https://65375e4bbb226bb85dd320ac.mockapi.io/studentManagement/${students.id}`;
    useEffect(()=>{
        fetch(getStudentsUrl, {method: 'GET'}).then(
          response =>{
            if(!response.ok){
              throw new Error(`HTTP status: ${response.status}`);
            }
            return response.json()
          }
        )
        .then(data=>{setAPIData(data)})
        .catch(error=>console.log(error.message))
      },[getStudentsUrl])
    return (
        <div>
        <h1>Detail</h1>
        <Grid container rowSpacing={2}>
          <Grid className='parent' item xs={12} style={{marginLeft: '488px'}}>
            <Card className='child'sx={{maxWidth: 545}}>
              <CardMedia sx={{height: 440}}
              component="img"
              image={APIData.image}
              title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    ID: {APIData.id}
                </Typography>
                <Typography gutterBottom variant='h5' component="div">
                 Name: {APIData.name}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                 Date Of Birth: {APIData.dateofbirth}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                  Class: {APIData.class}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                  FeedBack: {APIData.feedback}
                </Typography>
                <CardActions>
                  <Link to={"/"}>
                    <Button size='small'>Home</Button>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  
}
