import React, {Component} from 'react';
import { Card, Box, Avatar, Stack, 
        Typography, IconButton, 
        Divider, Chip, Switch } from '@mui/material';

import LocationOn from '@mui/material/Icon'
import Edit from '@mui/material/Icon'
import { grey } from '@mui/material/colors';

 class Card1 extends Component {
     render(){
  return (
    <Card>
      <Box sx={{ p: 2, display: 'flex' }}>
        <Avatar variant="rounded" src="avatar1.jpg" />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>Michael Scott</Typography>
          <Typography variant="body2" color="text.secondary">
          <LocationOn sx={{color: grey[500]}} /> Scranton, PA
          </Typography>
        </Stack>
        <IconButton>
          <Edit sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
      >
        <Chip>Active account</Chip>
        <Switch />
      </Stack>
    </Card>
  );
    }
}

export default Card1;
