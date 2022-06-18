import React from 'react';
import { Stack, Box as MuiBox, Grid, Typography, Slider as MuiSlider, styled, Tooltip, TextField as MuiTextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 3px;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: center;

  &:focus {
    color: #black;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #f8bf60;
    box-shadow: 0 4px 0 #997a49;
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #1c2127;
  box-shadow: 0 4px 0 #22272d;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
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

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function RightSlider({ payout, setPayout }) {
  return (
    <Stack px={0.25} py={0.5} borderRadius={1} spacing={1} className="bg-dark">
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Base</Tab>
          <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>Bonus</Tab>
        </TabsList>
      </TabsUnstyled>

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
                >
                  Payout <ArrowDropDownIcon sx={{ fontSize: 16 }} />
                  </Typography>

                <TextField
                  type="number"
                  value={payout}
                  onChange={(e) => setPayout(e.target.value)}
                />
 
                <Typography
                  color="white"
                  fontSize={14}
                  fontWeight={700}
                  fontFamily="Montserrat"
                >X</Typography>
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
                  fontFamily="Montserrat"
                  textAlign="center"
                ><Typography variant="span" fontSize={12}>1/2</Typography></Typography>
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
                  fontFamily="Montserrat"
                  textAlign="center"
                >
                  <Typography variant="span" fontSize={12}>
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
          valueLabelDisplay="auto"
          components={{
            ValueLabel: ValueLabelComponent,
          }}
          aria-label="custom thumb label"
          defaultValue={20}
        />
      </Stack>
    </Stack>
  );
}