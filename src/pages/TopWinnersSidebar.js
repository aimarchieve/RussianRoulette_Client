import React from 'react';
import { Box, Stack, Table, TableBody, TableCell, TableContainer, IconButton, TableRow, Typography, styled, Icon as MuiIcon } from '@mui/material';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import DiamondIcon from '@mui/icons-material/Diamond';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { Icon } from '@iconify/react';
import useUserStats from '../hooks/useUserStats';
import UserStatsModal from '../components/UserStats';

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 15px;
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

const tableData = [
  { id: 1, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 2, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 3, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 4, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 5, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 6, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 7, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 8, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 9, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 10, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 11, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 12, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 13, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 14, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 15, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 16, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 17, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 18, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 19, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 20, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 21, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 22, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 23, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 24, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 25, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 26, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 27, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 28, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 29, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 30, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 31, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 32, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },
  { id: 33, name: '100 LongUsername', lose: 6, win: 500, color: '#2995bd' },
  { id: 34, name: '9999 WWWWWW', lose: 999999.99, win: 1.05, color: '#8d52c6' },
  { id: 35, name: '1 small', lose: 5000000, win: 9999999, color: '#f8bf60' },

];

export default function TopWinnersSidebar(props) {
  const { openUserStatsModal } = useUserStats();

  return (
    <Stack spacing={0.5}>
      <Box p={1} borderRadius={1} className="bg-dark">
        <Typography
          color="white"
          fontSize={16}
          fontWeight={700}
          fontFamily="Montserrat"
          textTransform="uppercase"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          Top winners(24h)
          <ArrowDropDownIcon sx={{ fontSize: 38 }} />
        </Typography>
      </Box>

      <Box p={1} borderRadius={1} className="bg-dark">
        <TableContainer sx={{ height: 576, overflow: 'auto' }}>
          <Table>
            <TableBody>
              {
                tableData.map(dataItem => (
                  <TableRow key={dataItem.id}>
                    <TableCell
                      sx={{
                        color: '#f8bf60',
                        borderRadius: 1,
                        border: 1,
                        borderColor: '#2c3137',
                        p: 1,
                        width: '10%',
                        fontWeight: 700,
                        fontFamily: 'Montserrat',
                        textAlign: 'center'
                      }}
                      className="bg-black text-yellow"
                    >{dataItem.id}</TableCell>

                    <TableCell
                      onClick={openUserStatsModal}
                      sx={{
                        borderRadius: 1,
                        border: 1,
                        borderColor: '#2c3137',
                        p: 1,
                        width: '55%',
                        color: dataItem.color,
                        fontFamily: 'Montserrat',
                        fontWeight: 800,
                        fontSize: 12
                      }}
                      className="bg-black"
                    >
                      <Typography component="span" sx={{ display: 'flex', alignItems: 'center', fontSize: 'inherit', fontWeight: 'inherit', fontFamily: 'inherit' }}>
                        <StarIcon sx={{ color: dataItem.color, fontSize: 'inherit' }} />
                        {dataItem.name.length > 9 ? `${dataItem.name.slice(0, 9)}...` : dataItem.name}
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{ borderRadius: 1, border: 1, borderColor: '#2c3137', px: 1, py: 0.5, width: '35%' }}
                      className="bg-black"
                    >
                      <Stack direction="row" justifyContent="end">
                        <Stack>
                          <Typography
                            align="right"
                            color="white"
                            fontWeight={800}
                            fontSize={12}
                            fontFamily="Montserrat"
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                          >
                            {dataItem.lose} <CloseIcon sx={{ fontSize: 13 }} className="text-yellow" />
                          </Typography>
                          <Typography
                            align="right"
                            color="white"
                            fontWeight={800}
                            fontSize={12}
                            fontFamily="Montserrat"
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                          >
                            {dataItem.win} <DiamondIcon sx={{ fontSize: 13 }} className="text-yellow" />
                          </Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              }
              {
                [36, 37, 38, 39, 40].map(itemIndex => (
                  <TableRow key={itemIndex}>
                    <TableCell
                      sx={{
                        color: '#f8bf60',
                        borderRadius: 1,
                        border: 1,
                        borderColor: '#2c3137',
                        p: 1,
                        width: '10%',
                        fontWeight: 700,
                        textAlign: 'center'
                      }}
                      className="bg-black"
                    >{itemIndex}</TableCell>

                    <TableCell
                      sx={{
                        borderRadius: 1,
                        border: 1,
                        borderColor: '#2c3137',
                        p: 1,
                        width: '55%',
                        fontWeight: 800,
                        fontSize: 12
                      }}
                      className="bg-black"
                    ></TableCell>

                    <TableCell
                      sx={{ borderRadius: 1, border: 1, borderColor: '#2c3137', px: 1, py: 0.5, width: '35%' }}
                      className="bg-black"
                    ></TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <IconButton sx={{ p: 0, fontSize: 20, position: 'absolute', bottom: '-10px' }}>
            <Icon icon="codicon:triangle-down" />
          </IconButton>
        </Box>
      </Box>
      <Box p={1} borderRadius={1} className="bg-dark">
        <Typography
          align="right"
          color="white"
          fontWeight={800}
          fontSize={14}
          fontFamily="Montserrat"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textTransform: 'uppercase', padding: '10px' }}
        >
          mode
        </Typography>
        <Box sx={{ marginBottom: '10px' }}>
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }} onClick={() => props.setGameMode("group")}>group</Tab>
              <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }} onClick={() => props.setGameMode("solo")} >solo</Tab>
            </TabsList>
          </TabsUnstyled>
        </Box>
      </Box>
      <UserStatsModal />
    </Stack>
  );
}