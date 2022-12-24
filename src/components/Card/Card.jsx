import * as React from 'react';
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'
import axios from 'axios'

import { minHeight } from '@mui/system';




export default function BasicCard() {
    let [card, setCard] = useState([]);
    useEffect(()=>{
        axios.get('https://northwind.vercel.app/api/products').then((res=>setCard(res.data)))
    }, [])
    console.log(card);
    return (


      <div className="card-container">
        {card.map((kart)=>{
            return(
                <Card class="cardd" sx={{ minWidth: 350, minHeight:350 }}>
          <CardContent>
           
            <Typography variant="h6" component="div">
             { kart.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
            {`${kart.unitPrice} ${"$"}  `}
            </Typography>
            <Typography variant="body2">
              <br />
              <br/>
              {`${"Quantity:"} ${kart.unitsInStock}   `}
            </Typography>
          </CardContent>
          
        </Card>
            )
  })}


    



</div>
   
  );
}