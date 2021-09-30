import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [newsp, setNewsp] = useState([])
  useEffect(() => {
      fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e6946d588f4e461a9c46c43c105c0dd3')
      .then(res => res.json())
      .then(data => setNewsp(data.articles))
  },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {newsp.map(newsPa =>
            <Grid item xs={2} sm={4} md={3} >
                <News articles={newsPa} key={newsPa.key}></News>
            </Grid>
        )}
        </Grid>
      </Box>
    );
};

export default Newspaper;
