import React from 'react';
import { Stack, Box as MuiBox, Typography, Grid, Slider as MuiSlider, styled, TextField as MuiTextField } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import TextField from '@mui/material/TextField';

const Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: '#1c2127',
  boxShadow: '0 4px 0 #22272d',
  borderRadius: '4px'
}));
const Slider = styled(MuiSlider)(({ theme }) => ({
  width: '90%',
  '& .MuiSlider-rail': {
    color: '#1b2026',
    boxShadow: '0 5px 0 #21262c',
    height: '6px',
  },
  '& .MuiSlider-track': {
    height: '4px',
    color: '#f8bf60',
    boxShadow: '0 4px 0 #a6824a',
  },
  '& .MuiSlider-thumbColorPrimary': {
    border: 'none',
    outline: 'none',
    background: '#f8bf60',
    borderRadius: '2px',
    width: '30px',
    height: '10px',
    boxShadow: '0 4px 0 #a6824a'
  },
  '& .MuiSlider-mark': {
    border: 'none',
    outline: 'none',
    background: '#1b2026',
    borderRadius: '2px',
    width: '5%',
    height: '8px',
    boxShadow: '0 4px 0 #22272d',
    borderLeft: '2px solid #2c3137',
    borderRight: '2px solid #2c3137',
  },
  '& .MuiSlider-markActive': {
    border: 'none',
    outline: 'none',
    width: '5%',
    height: '8px',
    background: '#f8bf60',
    boxShadow: '0 4px 0 #a6824a',
    borderLeft: '2px solid #a6824a',
    borderRight: '2px solid #a6824a'
  }
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  background: '#2c3137',
  fontFamily: 'Montserrat',
  borderRadius: '5px',
  '& .MuiOutlinedInput-input': {
    padding: '1px 1px',
    fontSize: 14,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none'
  }
}));

export default function LeftSlider({ wagered, setWagered }) {

  return (
    <Stack className="bg-dark" px={0.25} py={0.5} borderRadius={1} spacing={1}>
      <Box bgcolor="black" borderRadius={1}>
        <Typography
          className="text-yellow"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          fontSize={12}
          fontWeight={900}
          fontFamily="Montserrat"
          textTransform="uppercase"
        >
          <DiamondIcon sx={{ fontSize: 12 }} /> 5.00 Profile on win
        </Typography>
      </Box>

      <Box width="100%">
        <Grid container columns={9} spacing={0.5}>
          <Grid item xs={9} md={7}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                  color="white"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  fontSize={12}
                  fontWeight={800}
                  fontFamily="Montserrat"
                >Bet <ArrowDropDownIcon sx={{ fontSize: 16 }} /></Typography>
                <TextField
                  type="number"
                  value={wagered}
                  onChange={(e) => setWagered(e.target.value)}
                />
                <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={9} md={1}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontSize={16}
                  fontWeight={800}
                  textAlign="center"
                  fontFamily="Montserrat"
                >
                  <Typography variant="span" fontSize={14}>
                    1/2
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={9} md={1}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontSize={16}
                  fontWeight={800}
                  textAlign="center"
                >
                  <Typography variant="span" fontSize={14} fontFamily="Montserrat">
                    x2
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Stack direction="row" justifyContent="center">
        <Slider
          defaultValue={0}
          valueLabelDisplay="auto"
          step={25}
          marks
          min={0}
          max={100}
        />
      </Stack>
    </Stack>
  );
}