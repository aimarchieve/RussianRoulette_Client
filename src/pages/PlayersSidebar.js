import React from 'react';
import { Box, Grid, Stack, Typography, styled, IconButton, Icon as MuiIcon } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import CloseIcon from '@mui/icons-material/Close';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { Icon } from '@iconify/react';

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 10px;
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
  min-width: 120px;
  background-color: #1c2127;
  box-shadow: 0 4px 0 #22272d;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function PlayerSidebar(props) {
  return (
    <Stack spacing={0.5} sx={{ display:{xs:'none', md:'flex'}, height: '82vh' }} >
      {/* Title */}
      <Box className="bg-dark" borderRadius={1} p={2}>
        <Typography textTransform="uppercase" align="center" color="white" fontWeight={800}>
          Players
        </Typography>
      </Box>

      <Stack sx={{ height: 586, overflow: 'auto' }} spacing={0.5}>
        {/* Highest bet */}
        <Stack spacing={0.5}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              Highest bet
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            <Grid container spacing={0.5} columns={3} alignItems="center">
              <Grid item xs={3} md={2}>
                <Box p={1.75} className="bg-black" borderRadius={1}>
                  <Typography
                    className="text-pink"
                    fontWeight={800}
                    fontSize={12}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <StarIcon sx={{ fontSize: 16 }} /> 1 FooBar
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={3} md={1}>
                <Stack p={0.5} className="bg-black" direction="row" justifyContent="end" borderRadius={1}>
                  <Stack>
                    <Typography
                      align="right"
                      color="white"
                      fontWeight={800}
                      fontSize={12}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      0 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                    </Typography>
                    <Typography
                      align="right"
                      color="white"
                      fontWeight={800}
                      fontSize={12}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      0 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>

        {/* Your bets */}
        <Stack spacing={0.5}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              Your bets
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            <Grid container columns={3} spacing={0.5}>
              {
                [0, 1, 2, 3, 4, 5].map(itemIndex => (
                  <Grid key={itemIndex} item xs={3} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1.78 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Grid container columns={4} spacing={0.5} mt={0.1}>
              {
                [0, 1, 2, 3, 4, 5, 6, 7].map(itemIndex => (
                  <Grid key={itemIndex} item xs={4} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1.78 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Grid container columns={2} spacing={0.5} mt={0.1}>
              {
                [0, 1].map(itemIndex => (
                  <Grid key={itemIndex} item xs={2} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1.78 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1} mt={0.5}>
              <Stack>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={800}
                  fontSize={12}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  1.78 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                </Typography>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={800}
                  fontSize={12}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  1000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Your bet list */}
        <Stack spacing={0.5}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              Your bet list
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            <Grid container columns={3} spacing={0.5}>
              {
                [0, 1, 2].map(itemIndex => (
                  <Grid key={itemIndex} item xs={3} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1.78 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Grid container columns={2} spacing={0.5} mt={0.1}>
              {
                [0, 1].map(itemIndex => (
                  <Grid key={itemIndex} item xs={2} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1.78 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          1000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1} mt={0.5}>
              <Stack>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={800}
                  fontSize={12}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  1.78 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                </Typography>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={800}
                  fontSize={12}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  1000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* All bets */}
        <Stack spacing={0.5} pb={1}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              All bets
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            {
              [0, 1, 2, 3, 4, 5, 6].map(itemIndex => (
                <Grid key={itemIndex} container spacing={0.5} columns={5} alignItems="center" mt={0.05}>
                  <Grid item xs={5} md={4}>
                    <Box p={1.75} className="bg-black" borderRadius={1}>
                      <Typography
                        color="white"
                        fontWeight={800}
                        fontSize={12}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <StarIcon sx={{ fontSize: 20 }} /> 1 FooBar
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={5} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="end" borderRadius={1}>
                      <Stack>
                        <Typography
                          align="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          8.42 <CloseIcon className="text-yellow" sx={{ fontSize: 18 }} />
                        </Typography>
                        <Typography
                          align="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          5000 <DiamondIcon className="text-yellow" sx={{ fontSize: 16 }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              ))
            }

          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <IconButton sx={{ p: 0, fontSize: 20, position: 'absolute', bottom: '-5px' }}>
              <Icon icon="codicon:triangle-down" />
            </IconButton>
          </Box>      
        </Stack>
      </Stack>
      <Box borderRadius={1} className="bg-dark">
        <Typography
          align="right"
          color="white"
          fontWeight={800}
          fontSize={14}
          fontFamily="Montserrat"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textTransform: 'uppercase', padding: '10px' }}
        >
          type
        </Typography>
        <Box
          width="85%"
          margin="auto"
          mb={3.5}
          mt={1}
        >
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }} onClick={() => props.setGameType("normal")} >normal</Tab>
              <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase', padding: '5px' }} onClick={() => props.setGameType("bonus")} >bonus-only</Tab>
            </TabsList>
          </TabsUnstyled>
        </Box>
      </Box>
    </Stack>
  );
}