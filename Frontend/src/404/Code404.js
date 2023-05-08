import {React} from 'react'
import './Code404.scss'
import Box from '@mui/material/Box';

export const NotFound = () => {
    return (
    <section class="page_404">
        <Box
            sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>           
                 <h1>404</h1>
        </Box>
        
        <div class="four_zero_four_bg"/>
            <div class="contant_box_404">
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
            <h3 class="h2">
            Look like you're lost
            </h3>
            
            <p>the page you are looking for not avaible!</p>
            
            <a href="/" class="link_404">Go to Home</a>
            </Box>
        </div>
    </section>
    );
  }