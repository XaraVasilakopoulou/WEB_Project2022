import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material';
import {Link} from 'react-router-dom'
import SanitizerIcon from '@mui/icons-material/Sanitizer';

export const UserNavBar = (props) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <SanitizerIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          Quarantine
        </Typography>
        {(props.auth)?<Stack direction='row' spacing={2}>
          <Button color='inherit' component={Link} to='/'>Home</Button>
          <Button color='inherit' component={Link} to='/search-interest-points'>Interest Points</Button>
          <Button color='inherit' component={Link} to='/register-visit'>Register Visit</Button>
          <Button color='inherit' component={Link} to='/case-report'>Case Report</Button>
          <Button color='inherit' component={Link} to='/contact-case'>Contact Case</Button>
          <Button color='inherit' component={Link} to='/profile'>Profile</Button>
        </Stack>
        :<Stack direction='row' spacing={2}>
        <Button color='inherit' component={Link} to='/sign-up'>Sing up</Button>
        <Button color='inherit' component={Link} to='/sign-in'>Sign in</Button>
      </Stack>}
      </Toolbar>
    </AppBar>
  );
}

