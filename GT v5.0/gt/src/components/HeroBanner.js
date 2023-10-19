import React from 'react'
import { Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'}, ml: { sm: '50px'}       
    }} position="relative" p="20px">
      
      <Typography color="#FF2625" fontWeight="600" fontSize="30px">
        GymTech
      </Typography>
     
      <Typography color="#1f1f1f" fontWeight={700} sx={{fontSize: {lg: '44px', xs:'40px'}}} mb="20px" mt="3px">
      Tenha liberdade <br /> 
      para montar <br /> seus treinos!
      </Typography>
      
      <Typography color="#1f1f1f" fontSize="22px" lineHeight="35px" mb={4}>
        Diversos exercícios para você melhorar seu treino.
      </Typography>
      
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#ff2625', padding: '10px'}}>Comece já!</Button>
      
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.2,
          display: { lg: 'block', xs: 'none'},
        }}
        fontSize="200px"
      >
        GymTech
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
     </Box>

  )
}

export default HeroBanner