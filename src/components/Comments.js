import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Comments = () => {
  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Random Comments
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          "This tool is really helpful for detecting AI-generated content!"
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          "I used this on my research papers and it was incredibly accurate."
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          "DetectiveAI made it so easy to check if content was AI-generated."
        </Typography>
      </Box>
    </Paper>
  );
};

export default Comments;
