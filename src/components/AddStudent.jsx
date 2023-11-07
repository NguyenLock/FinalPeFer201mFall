import { useFormik } from "formik";
import * as Yup from 'yup';
import { TextField, Button } from "@mui/material";
import * as React from 'react';
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DialogActions from "@mui/material/DialogActions";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddStudent() {
  const [Open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const postStaffUrl = `https://65375e4bbb226bb85dd320ac.mockapi.io/studentManagement`;
  

  const formik = useFormik({
    initialValues: {
      name: "",
      dateofbirth: "",
      Gender: "",
      Class: "",
      Image: "",
    },
    onSubmit: (values) => {
      values.createAt = new Date(values.createAt);
      axios.post(postStaffUrl, values)
        .then(
          response => { return response.data }
        )
        .then(data => setOpen(true))
        .catch(error => console.log(error.message))
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Require").min(3, "Must be more Than 2 Character"),
      dateofbirth: Yup.date().required('Date Of Birth is required'),
      Class: Yup.string().required("Require"),
      Gender:Yup.bool().required('Gender is required'),
      Image: Yup.string().url().required("Require").typeError("Avatar must be a valid Url"),
    }),
  });



  return (
    <div>
      <h1 className="font-pages">Add new Student</h1>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
          <TextField
            label="Date Of Birth"
            name="Date Of Birth"
            value={formik.values.dateofbirth}
            onChange={formik.handleChange}
          />
          {formik.errors.dateofbirth && (<Typography variant="caption" color="red">{formik.errors.dateofbirth}</Typography>)}
          
          <TextField 
          label="class"
          name="class"
          value={formik.values.Class}
          />
          {formik.errors.Class && (<Typography variant="caption" color="red">{formik.errors.Class}</Typography>)}

          <TextField
            label="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          />
          {formik.errors.Gender && (<Typography variant="caption" color="red">{formik.errors.Gender}</Typography>)}

          <TextField
            label="Image"
            name="Image"
            value={formik.values.Image}
            onChange={formik.handleChange}
          />
          {formik.errors.Image && (<Typography variant="caption" color="red">{formik.errors.Image}</Typography>)}





        </Stack>

        <Button variant="contained" size="small"
          type='submit'>
          Save
        </Button>

      </form>

      <Dialog
        open={Open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Congraturation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success">
              <AlertTitle>Adding successful!</AlertTitle>
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}


