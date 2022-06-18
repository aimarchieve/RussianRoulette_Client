import React from 'react';
import {
    Stack,
    Box,
    Dialog as MuiDialog,
    DialogContent,
    DialogTitle as MuiDialogTitle,
    useMediaQuery,
    styled,
    IconButton,
    Typography,
    Slider as MuiSlider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TabContext, TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import useBetList from '../../hooks/useBetList';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        background: '#2c3137'
    }
}));

const Slider = styled(MuiSlider)(({ theme }) => ({
    width: '94%',
    marginRight: '25px',
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


const DialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
        <MuiDialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

/* ---------------------------------------------------------------------------------------- */

export default function BetListModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { modalIsOpened, currentTab, closeBetListModal, handleCurrentTab } = useBetList();

    return (
        <Dialog
            fullScreen={fullScreen}
            open={modalIsOpened}
            onClose={closeBetListModal}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth="sm"
            backgroundColor="#2c3137"
        >
            <DialogTitle id="responsive-dialog-title" onClose={closeBetListModal}>
                <Typography fontSize={18} fontWeight={700} fontFamily="Montserrat" textTransform="uppercase">
                    betlist
                </Typography>
            </DialogTitle>

            <DialogContent>
                <Stack>
                    <Box
                        borderTop="1px solid #1c2127"
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', pb: 3, pt: 3 }}
                    >
                        <Box
                            width="60%"
                            className='bg-black'
                            borderRadius="10px 0px 0px 10px"
                            sx={{ display: 'flex', flexDirection: 'row', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Typography
                                fontSize={16}
                                fontWeight={700}
                                fontFamily="Montserrat"
                                padding={2}
                                pl={4}
                                sx={{ display: 'flex', flexDirection: 'row', direction: 'row', alignItems: 'center' }}
                            >
                                My Betlist (5.00 <DiamondIcon sx={{ fontSize: 20 }} className="text-yellow" /> )
                            </Typography>
                            <ArrowDropDownIcon
                                sx={{ fontSize: 30, paddingRight: 3 }}
                            />
                        </Box>
                        <Box
                            widht="20%"
                            className='bg-black'
                        >
                            <Typography
                                fontSize={16}
                                padding={2}
                                textTransform="uppercase"
                                fontFamily="Montserrat"
                                fontWeight={700}
                            >
                                import
                            </Typography>
                        </Box>
                        <Box
                            widht="20%"
                            className='bg-black'
                            borderRadius="0px 10px 10px 0px"
                        >
                            <Typography
                                fontSize={16}
                                padding={2}
                                textTransform="uppercase"
                                fontFamily="Montserrat"
                                fontWeight={700}
                            >
                                export
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        borderTop="1px solid #1c2127"
                        width="100%"
                        sx={{ pt: 3, pb: 3 }}
                    >
                        <Typography
                            fontSize={16}
                            textTransform="uppercase"
                            fontWeight={700}
                            borderRadius="5px"
                            padding={0.5}
                            className="bg-black"
                            sx={{ display: 'flex', flexDirection: 'row', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            total bet : <span className='text-yellow' style={{ fontWeight: 600 }} > $ </span> 100.00 <CreateOutlinedIcon />
                        </Typography>
                        <Box
                            mt={3}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 10,000.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 10.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 30.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 9,000.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 500.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 25.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 500.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 100.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 50.00 </span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            mt={0.5}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 4.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 100.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 3.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 150.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 2.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 50.00 </span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            mt={0.5}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 1.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 5.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 25.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 3.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow'> 2.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 25.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 2.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow' > 1.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 25.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> 1.00 | <CloseIcon sx={{ fontSize: 16 }} className="text-yellow" /> <span className='text-yellow' > 7.00 </span>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        borderTop="1px solid #1c2127"
                        pt={3}
                        pb={3}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}
                    >
                        <Typography
                            fontSize={16}
                            fontWeight={600}
                        >
                            Add New Bet
                        </Typography>
                    </Box>
                    <Box
                        mb={1}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                    >
                        <Box
                            width="65%"
                            fontSize={16}
                            fontWeight={700}
                            className='bg-black'
                            borderRadius="5px 0px 0px 5px"
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                padding={2}
                                width="60%"
                            >
                                Bet
                            </Typography>
                            <Typography
                                width="40%"
                            >
                                <span className='text-yellow' > $ </span> 0.10
                            </Typography>
                        </Box>

                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                        >
                            <Typography>
                                1/2
                            </Typography>
                        </Box>
                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            borderRadius="0px 5px 5px 0px"
                        >
                            <Typography>
                                x2
                            </Typography>
                        </Box>
                    </Box>
                    <Stack direction="row" justifyContent="center" mb={1}>
                        <Slider
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25}
                            marks
                            min={0}
                            max={100}
                        />
                    </Stack>
                    <Box
                        mb={1}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                    >
                        <Box
                            width="65%"
                            fontSize={16}
                            fontWeight={700}
                            className='bg-black'
                            borderRadius="5px 0px 0px 5px"
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                padding={2}
                                width="60%"
                            >
                                Payout (<span className='text-yellow' >Bonus</span>)
                            </Typography>
                            <Typography
                                width="40%"
                            >
                                <span className='text-yellow' > x 30.00 </span>
                            </Typography>
                        </Box>

                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                        >
                            <Typography>
                                1/2
                            </Typography>
                        </Box>
                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            borderRadius="0px 5px 5px 0px"
                        >
                            <Typography>
                                x2
                            </Typography>
                        </Box>
                    </Box>
                    <Stack direction="row" justifyContent="center" mb={1}>
                        <Slider
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25}
                            marks
                            min={0}
                            max={100}
                        />
                    </Stack>
                    <Box
                        mb={1}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                    >
                        <Box
                            width="65%"
                            fontSize={16}
                            fontWeight={700}
                            className='bg-black'
                            borderRadius="5px 0px 0px 5px"
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                padding={2}
                                width="60%"
                            >
                                Payout (Base)
                            </Typography>
                            <Typography
                                width="40%"
                            >
                                <span className='text-yellow' > x </span> 1.50
                            </Typography>
                        </Box>

                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                        >
                            <Typography>
                                1/2
                            </Typography>
                        </Box>
                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            borderRadius="0px 5px 5px 0px"
                        >
                            <Typography>
                                x2
                            </Typography>
                        </Box>
                    </Box>
                    <Stack direction="row" justifyContent="center" mb={2}>
                        <Slider
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25}
                            marks
                            min={0}
                            max={100}
                        />
                    </Stack>
                    <Box>
                        <TabsUnstyled defaultValue={1}>
                            <TabsList>
                                <Tab sx={{ fontFamily: 'Montserrat', fontSize: 16 }}> Clear Betlist </Tab>
                                <Tab sx={{ fontFamily: 'Montserrat', fontSize: 16 }}> Add to Betlist </Tab>
                            </TabsList>
                        </TabsUnstyled>
                    </Box>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}