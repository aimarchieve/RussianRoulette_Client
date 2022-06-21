import React, { useState, useEffect } from 'react';
import {
  Stack,
  Box as MuiBox,
  Typography,
  Grid,
  Slider as MuiSlider,
  styled,
  InputAdornment,
  Icon as MuiIcon,
  TextField as MuiTextField
} from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from '../../redux/store';
import useAuth from '../../hooks/useAuth';




// import TextField from '@mui/material/TextField';

const Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: '#1c2127',
  borderRadius: '4px'
}));
const Slider = styled(MuiSlider)(({ theme }) => ({
  width: '90%',
  marginRight: '10px',
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
  fontFamily: 'Montserrat',
  borderRadius: '5px',
  '& .MuiOutlinedInput-input': {
    padding: '1px 1px',
    fontSize: 18,
    textAlign: 'right',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none'
  }
}));

export default function LeftSlider({ wagered, setWagered }) {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.game);
  const [ userBalance, setUserBalance ] = useState(currentUser?.balance ||1);
  useEffect(() => {
    if(balance){
      setUserBalance(balance);
    }
  }, [balance]);

  useEffect(() => {
    if(currentUser){
      setUserBalance(currentUser.balance);
    }
  }, [currentUser?.balance]);

  return (
    <Stack className="bg-dark" px={0.25} py={0.5} borderRadius={1} spacing={0.5}>
      <Box bgcolor="black" borderRadius={1}>
        <Typography
          className="text-yellow"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:{lg:14, md:12, sm:10, xs:8} }}
          fontWeight={700}
          fontFamily="Montserrat"
          textTransform="uppercase"
        >
          <DiamondIcon sx={{ fontSize: {lg:14, md:12, sm:10, xs:10} }} /> 5.00 Profile on win
        </Typography>
      </Box>

      <Box width="100%">
        <Grid container columns={9} spacing={0.5}>
          <Grid item xs={7} md={7}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                  color="white"
                  sx={{ display: 'flex', alignItems: 'center', fontSize: {lg:14, md:12, sm:10, xs:10} }}
                  fontWeight={700}
                  fontFamily="Montserrat"
                  pl={1}
                >Bet <ArrowDropDownIcon sx={{ fontSize: 16 }} /></Typography>
                <TextField
                  type="number"
                  sx={{ backgroundColor: '#1c2127' }}
                  value={wagered}
                  onChange={(e) => setWagered(e.target.value)}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <Stack direction="row" alignItems="center" spacingnpm={1}>
                        <MuiIcon className="text-yellow" sx={{ fontSize: {lg:20, md:18, sm:16, xs:14} }}><Icon icon="ic:baseline-diamond" /></MuiIcon>
                      </Stack>
                    </InputAdornment>
                  }}
                />
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={1} md={1} sx={{ borderLeft: '2px solid #2c3137' }}>
            <Box bgcolor="black" borderRadius={1} pt={1} pb={1}>
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontWeight={800}
                  textAlign="center"
                >
                  <Typography variant="span" sx={{ fontSize: {lg:14, md:12, sm:10, xs:10} }} fontFamily="Montserrat">
                    1/2
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={1} md={1} sx={{ borderLeft: '2px solid #2c3137' }}>
            <Box bgcolor="black" borderRadius={1} pt={1} pb={1}>
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontWeight={800}
                  textAlign="center"
                >
                  <Typography variant="span" sx={{ fontSize:{ lg:14, md:12, sm:10, xs:10 } }} fontFamily="Montserrat">
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
          value={wagered}
          valueLabelDisplay="auto"
          step={userBalance / 4}
          marks
          min={0}
          max={userBalance}
          onChange={(e) => setWagered(e.target.value)}
        />
      </Stack>
    </Stack>
  );
}