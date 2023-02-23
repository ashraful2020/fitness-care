import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { bannerImage } from '../assets';

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '220px', xs: '70px' }, ml: { sm: '50px' } }}
            p={20} position='relative'>
            <Stack />
            <Typography fontSize={26} fontWeight={600} color='#FF2625'>Fitness care </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: 40 } }}>sweat smile and repeat  </Typography>
            <Typography> Check out the most effective exercise</Typography>
            <img src={bannerImage} alt="" srcset="" />
        </Box>
    );
};

export default HeroBanner;