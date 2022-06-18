import React, { useState, useEffect } from 'react';
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button as MuiButton,
  styled,
  TextField as MuiTextField,
  InputAdornment,
  Icon as MuiIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@iconify/react';
import AuthModal from './AuthModal';
import useAuth from '../hooks/useAuth';
import { LOGIN, REGISTER } from '../utils/constants';
import WalletModal from './WalletModal';
import useWallet from '../hooks/useWallet';
import useAccount from '../hooks/useAccount';
import useAffiliate from '../hooks/useAffiliate';
import AffiliateModal from './AffiliateModal';
import AccountModal from './AccountModal';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from '../redux/store';
/* ---------------------------------------------------------------------------------------------------- */

const pages = ['Products', 'Pricing', 'Blog'];

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: '#1c2127',
  backgroundImage: 'none'
}));

const LoginButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#f8bf60',
  boxShadow: '0 6px 0 #997a49',
  color: '#000000',
  padding: 0,
  minWidth: 84,
  '&:hover': {
    backgroundColor: '#ab884d',
    boxShadow: '0 6px 0 #725c38'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

const RegisterButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0 6px 0 #a0a2a5',
  color: '#000000',
  padding: 0,
  minWidth: 114,
  '&:hover': {
    backgroundColor: '#c3c0c0',
    boxShadow: '0 6px 0 #76787a'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

const WalletButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#f8bf60',
  boxShadow: '0 6px 0 #997a49',
  color: '#000000',
  padding: 0,
  minWidth: 84,
  borderRadius: '0px 8px 8px 0px',
  '&:hover': {
    backgroundColor: '#ab884d',
    boxShadow: '0 6px 0 #725c38'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  background: '#2c3137',
  boxShadow: '0 6px 0 #171c22',
  borderRadius: '8px 0px 0px 8px',
  '& .MuiOutlinedInput-input': {
    padding: '8px 8px',
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'right'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none'
  }
}));

/* ---------------------------------------------------------------------------------------------------- */

export default function TopBar(props) {
  const { openAuthModal, currentUser, signout } = useAuth();
  const { openWalletModal } = useWallet();
  const { openAccountModal } = useAccount();
  const { openAffiliateModal } = useAffiliate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.game);
  console.log("balance", balance);
  const [ userBalance, setUserBalance ] = useState(currentUser?.balance);
  console.log("userBalance", userBalance);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAccountModal = () => {
    openAccountModal();
    handleClose();
  };

  const handleAffiliateModal = () => {
    openAffiliateModal();
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log('# useEffect balance => ', balance);
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
    <AppBar position="static">
      <Box maxWidth="2xl" mx={1}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" width="100%">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Box component="img" alt="logo" src="/assets/images/logo.png" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Box component="img" alt="logo" src="/assets/images/logo.png" />
            </Typography>

            {
              currentUser && (
                <Stack sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                  <Box>
                    <Stack direction="row">
                      {/* Please input the select here */}
                      <TextField
                        value={ currentUser ? userBalance : 0}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">
                            <Stack direction="row" alignItems="center" spacingnpm={1}>
                              <MuiIcon className="text-yellow" sx={{ fontSize: 25 }}><Icon icon="ic:baseline-diamond" /></MuiIcon>
                              <MuiIcon sx={{ fontSize: 25 }}><Icon icon="iwwa:arrow-down" /></MuiIcon>
                            </Stack>
                          </InputAdornment>
                        }}
                      />
                      <WalletButton onClick={openWalletModal}> Wallet</WalletButton>
                    </Stack>
                  </Box>
                </Stack>
              )
            }

            {
              currentUser ? (
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
                  <LoginButton onClick={signout}>Logout</LoginButton>
                </Stack>
              ) : (
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
                  <LoginButton onClick={() => openAuthModal(LOGIN)}>Login</LoginButton>
                  <RegisterButton onClick={() => openAuthModal(REGISTER)}>Register</RegisterButton>
                </Stack>
              )
            }
          </Stack>
          <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Box ml={2} mr={3} sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleClick} sx={{ p: 0, fontSize: 30 }}>
                <Icon icon="mdi:account" />
              </IconButton>
              <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleAccountModal}>Account</MenuItem>
                    <MenuItem onClick={handleAffiliateModal}>Affiliate</MenuItem>
                  </Menu>
            </Box>
            {
              props.chat ?
                ''
                :
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton sx={{ p: 0, fontSize: 25, color: 'gray' }}>
                    <Icon onClick={() => props.setChat(true)} icon="dashicons:arrow-right-alt2" />
                  </IconButton>
                  
                </Box>
            }
          </Stack>
        </Toolbar>
      </Box >
      <AuthModal />
      <WalletModal />
      <AccountModal />
      <AffiliateModal />
    </AppBar >
  );
};