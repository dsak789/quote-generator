import React, { useState } from 'react'
import './QuoteGenerator.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios';


const QuoteGenerator = () => {
    const [show,setShow]=useState(false);
    const [quotedata,setQuotedata]= useState("")
      const Generate = async () =>{
        try {
            const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
            headers:{
                'X-Api-Key':'MtlV61EQ51315I0ySN47bg==OQT3EbNKPTP6CtX2'
            }})
            if (response){
                console.log("----->",response.data[0])
                setQuotedata(response.data[0])
                console.log("+++++>",quotedata)

            }
            else{
                console.log("error")
            }
        } catch (error) {
            console.log(error)
        }
      }

      console.log("======>",quotedata)
  return (
    <div>
        <div>
            <div className='top-bar'>
                <h1>Quote Generator</h1>
            </div>
            <div className='quote-space'>
            { 
                
                show?

                <Card sx={{ maxWidth: 700,  }}>
                <CardActionArea sx={{color:"black"}}>
                    {/* <CardMedia
                    component="img"
                    height="500"
                    width="700"
                    image="https://randommeme-five.vercel.app"
                    alt="Meme Mama"
                    /> */}
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <span>Category: </span>{quotedata.category}
                    </Typography>
                    <Typography variant="h5" color="text.primary">
                        {quotedata.quote}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <br/>
                    <Typography gutterBottom variant="h5" component="div">
                       <span>Author:</span> {quotedata.author}
                    </Typography>
                    
                </CardActions><br/>
                <Button size="larger" color="primary" onClick={(e)=>{setShow(false)}}>
                ReGenerate
                </Button>
                </Card>
                :
                <Button size="larger" color="primary" onClick={(e)=>{setShow(true); Generate()}}>
                Generate Quote
                </Button>
            }
            </div>  
        </div>
    </div>
  )
}

export default QuoteGenerator