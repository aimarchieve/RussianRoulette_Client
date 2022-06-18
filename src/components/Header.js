import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function Header() {
  return (
    <Stack mx={4}>
      {/* Upper row */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2 }}>
        <Typography
          align="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontWeight: 600,
            width: '7%',
            fontFamily: 'Montserrat'
          }}
          className="text-red"
        >
          Level 74 <StarIcon />
        </Typography>

        <Grid container columns={10} sx={{ height: '35px', flexGrow: 1, pr: 2, width: '80%' }}>
          {
            [0, 1, 2, 3, 4, 5, 6, 7].map(itemIndex => (
              <Grid key={itemIndex} item md={1} sx={{ px: 1 }}>
                <div className="bar-segment filled">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))
          }
          {
            [0, 1].map(itemIndex => (
              <Grid key={itemIndex} item md={1} sx={{ px: 1 }}>
                <div className="bar-segment">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))
          }
        </Grid>

        <Typography
          align="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            textTransform: 'uppercase',
            fontWeight: 600,
            width: '7%',
            fontFamily: 'Montserrat'
          }}
          className="text-yellow"
        >
          <StarIcon /> Level 75
        </Typography>
      </Stack>

      {/* Sub row */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pb: 1 }}>
        <Stack sx={{ color: 'white', width: '5%' }}>
          <Typography align="center" fontWeight={600} fontSize={18} fontFamily="Montserrat" sx={{ lineHeight: 0.5 }}>200%</Typography>
          <Typography align="center" textTransform="uppercase" fontWeight={600} fontSize={12} fontFamily="Montserrat">
            Current XP
          </Typography>
        </Stack>

        <Grid container columns={10} sx={{ height: '15px', pr: 0.5, width: '40%' }}>
          {
            [0, 1, 2, 3, 4, 5].map(itemIndex => (
              <Grid key={itemIndex} item md={1} sx={{ px: 0.5 }}>
                <div className="bar-segment filled">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))
          }
          {
            [0, 1, 2, 3].map(itemIndex => (
              <Grid key={itemIndex} item md={1} sx={{ px: 0.5 }}>
                <div className="bar-segment">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))
          }
        </Grid>

        <Stack sx={{ color: 'white', width: '10%' }}>
          <Typography align="center" fontWeight={600} fontSize={18} fontFamily="Montserrat" sx={{ lineHeight: 0.5 }}>
            250%
          </Typography>
          <Typography align="center" textTransform="uppercase" fontWeight={600} fontSize={12} fontFamily="Montserrat">
            Bonus XP
          </Typography>
        </Stack>

        <Grid container columns={5} sx={{ height: '15px', pr: 0.5, width: '40%' }}>
          {
            [0, 1, 2].map(itemIndex => (
              <Grid key={itemIndex} item md={1} sx={{ px: 0.5 }}>
                <div className="bar-segment filled rounded">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))
          }
          {
            [0, 1].map(itemIndex => (
              <Grid key={itemIndex} item md={1} sx={{ px: 0.5 }}>
                <div className="bar-segment rounded">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))
          }
        </Grid>

        <Stack sx={{ color: 'white', width: '5%' }}>
          <Typography align="center" fontWeight={600} fontSize={18} fontFamily="Montserrat" sx={{ lineHeight: 0.5 }}>5</Typography>
          <Typography align="center" textTransform="uppercase" fontWeight={600} fontSize={12} fontFamily="Montserrat">Streak</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}