import React from 'react';
import {
  Button as MuiButton,
  Stack,
  TextField as MuiTextField,
  styled,
  Typography,
  Link,
} from '@mui/material';
import { Icon } from '@iconify/react';
import * as yup from 'yup';
import { useFormik } from "formik";
import useAuth from '../../hooks/useAuth';
import { width } from '@mui/system';

/* ---------------------------------------------------------------------------------------- */

const TextField = styled(MuiTextField)(({ theme }) => ({
  '& .css-14t01uy-MuiInputBase-root-MuiOutlinedInput-root': {
    fontSize: '12px',
    fontFamily: 'Montserrat'
  },
  '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '15px 15px'
  },
  '& .css-1yl10x9-MuiFormLabel-root-MuiInputLabel-root': {
    fontSize: '12px',
    lineHeight: 2
  },
  '& .css-rb5gc9-MuiFormLabel-root-MuiInputLabel-root': {
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: 'Montserrat'
  },
  '&, .css-1yl10x9-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
    color: '#f8bf60'
  },
  '& .css-14t01uy-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#f8bf60',
    borderWidth: '1px'
  },
  '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 100px #191e24 inset'
  },
  '& .css-xzkq1u-MuiFormHelperText-root': {
    marginLeft: 0,
    marginRight: 0
  }
}));

const LoginButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#a3a09b',
  boxShadow: '0 6px 0 #6a6a6a',
  color: '#000000',
  minWidth: 114,
  '&:hover': {
    backgroundColor: '#777674',
    boxShadow: '0 6px 0 #424040'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

const SocialButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0 6px 0 #a0a2a5',
  color: '#000000',
  paddingTop: 0,
  paddingBottom: 0,
  minWidth: 114,
  '&:hover': {
    backgroundColor: '#c3c0c0',
    boxShadow: '0 6px 0 #76787a'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

const validSchema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.')
});

/* ---------------------------------------------------------------------------------------- */

export default function LoginTabPanel() {
  const { signin } = useAuth();

  const handleSubmit = (values) => {
    signin(values);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      return handleSubmit(values);
    }
  });
  return (
    <Stack spacing={2}>
      <TextField
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={
          formik.touched.username && formik.errors.username ? (
            <Typography component="span" fontFamily="Montserrat" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
              <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
              {formik.touched.username && formik.errors.username}
            </Typography>) : (<></>)
        }
        fullWidth
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={
          formik.touched.password && formik.errors.password ? (
            <Typography component="span" fontFamily="Montserrat" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
              <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
              {formik.touched.password && formik.errors.password}
            </Typography>) : (<></>)
        }
        fullWidth
      />

      <LoginButton onClick={formik.handleSubmit}>
        PLAY NOW
      </LoginButton>

      <Typography fontFamily="Montserrat" textAlign="center" fontSize={14} fontWeight={700}>OR</Typography>

      <Stack direction="row" spacing={0.5} justifyContent="space-between">
        {/* <SocialButton sx={{ fontSize: 42, width: '33%' }}>
          <Icon icon="foundation:social-steam" />
        </SocialButton> */}
        <SocialButton sx={{ fontSize: 24, width: '50%' }}>
          <Icon icon="brandico:facebook" />
        </SocialButton>
        <SocialButton sx={{ fontSize: 28, width: '50%' }}>
          <Icon icon="akar-icons:google-fill" />
        </SocialButton>
      </Stack>

      <Stack
        sx={{
          flexFlow: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: "24px!important"
        }}
      >
        <Typography fontFamily="Montserrat" textAlign="center" color="#f8bf60" fontSize={14} fontWeight={700}>
          Forgot Password?
        </Typography>
        <Typography fontFamily="Montserrat" textAlign="center" color="#f8bf60" fontSize={14} fontWeight={700}>
          Create an Account?
        </Typography>
      </Stack>

      {/* <Typography fontFamily="Montserrat" textAlign="center" fontSize={14} fontWeight={700}>
        Forgot your password?&nbsp;
        <Link sx={{ color: '#f8bf60', cursor: 'pointer' }}>
          Reset Password
        </Link>
      </Typography>
      <Typography fontFamily="Montserrat" textAlign="center" fontSize={14} fontWeight={700}>
        Don't have an account?&nbsp;
        <Link sx={{ color: '#f8bf60', cursor: 'pointer' }}>
          Register here
        </Link>
      </Typography> */}
    </Stack>
  );
}