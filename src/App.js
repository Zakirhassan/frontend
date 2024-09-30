import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';
import Main from '../src/components/Main';
import Comments from '../src/components/Comments'

const App = () => {
  return (
    <div>
      {/* Top Bar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DetectiveAI
          </Typography>
          <Button color="primary" variant="outlined">
            Create Free Account
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {/* Left Side - Random Comments */}
          <Grid item xs={12} md={5}>
            <Comments />
          </Grid>

          {/* Right Side - Input Section */}
          <Grid item xs={12} md={7}>
            <Main />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
