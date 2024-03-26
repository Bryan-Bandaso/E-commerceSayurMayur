import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import NavDrawer from '../../components/NavDrawer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import * as Yup from 'yup'
import Box from '@mui/material/Box'

const data = [
  {
    _id: 1234,
    name: 'Durian',
    price: 'Rp.100.000',
    quantity: 5,
    description: 'dari bangkok',
  },
]

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  price: Yup.number().required('Price is required'),
  quantity: Yup.number().required('Quantity required'),
  description: Yup.string().required('Description required'),
})

const Product = () => {
  const [open, setOpen] = useState(false)
  const [initialValues, setInitialValues] = useState({
    _id: -1,
    name: '',
    price: '',
    quantity: '',
    description: '',
  })
  const handleAddProduct = () => {
    setInitialValues({
      _id: -1,
      name: '',
      price: '',
      quantity: '',
      description: '',
    })
    setOpen(true)
  }

  const handleProductEdit = (product) => {
    setInitialValues(product)
    setOpen(true)
  }

  const handleDeleteProduct = (product) => {
    console.log('delete', product)
  }

  const handleSubmit = (values) => {
    values._id = Math.random() * 1000
    data.push(values)
    setOpen(false)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
          <Typography sx={{ mb: 1 }} variant="h4">
            Products
          </Typography>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={handleAddProduct}
            sx={{ backgroundColor: '#43766C' }}
          >
            Add Product
          </Button>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((p) => (
                  <TableRow key={p._id}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.price}</TableCell>
                    <TableCell>{p.quantity}</TableCell>
                    <TableCell>{p.description}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleProductEdit(p)}>
                        <EditIcon></EditIcon>
                      </IconButton>
                      <IconButton onClick={() => handleDeleteProduct(p)}>
                        <DeleteIcon sx={{ color: 'red' }}></DeleteIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog open={open} fullWidth maxWidth="lg">
            <DialogTitle>{'Add Product'}</DialogTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ dirty, isValid, getFieldProps }) => (
                <Form>
                  <DialogContent>
                    <Grid container spacing={2}>
                      <Grid xs={12}>
                        <Field
                          as={TextField}
                          name="name"
                          label="Name"
                          required
                          fullWidth
                        />
                        <ErrorMessage name="name">
                          {(message) => (
                            <Typography color={'red'}>{message}</Typography>
                          )}
                        </ErrorMessage>
                      </Grid>
                      <Grid xs={12}>
                        <Field
                          as={TextField}
                          name="price"
                          label="Price"
                          required
                          fullWidth
                        />
                        <ErrorMessage name="price">
                          {(message) => (
                            <Typography color={'red'}>{message}</Typography>
                          )}
                        </ErrorMessage>
                      </Grid>
                      <Grid xs={12}>
                        <Field
                          as={TextField}
                          name="quantity"
                          label="Quantity"
                          required
                          fullWidth
                        />
                        <ErrorMessage name="quantity">
                          {(message) => (
                            <Typography color={'red'}>{message}</Typography>
                          )}
                        </ErrorMessage>
                      </Grid>
                      <Grid xs={12}>
                        <Field
                          as={TextField}
                          name="description"
                          label="Description"
                          required
                          fullWidth
                        />
                        <ErrorMessage name="description">
                          {(message) => (
                            <Typography color={'red'}>{message}</Typography>
                          )}
                        </ErrorMessage>
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    {getFieldProps('_id').value !== -1 ? (
                      <Button
                        disabled={!dirty || !isValid}
                        type="submit"
                        variant="contained"
                      >
                        Save Edit
                      </Button>
                    ) : (
                      <Button
                        disabled={!dirty || !isValid}
                        type="submit"
                        variant="contained"
                      >
                        Save
                      </Button>
                    )}
                    <Button autoFocus onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </Dialog>
        </Box>
      </Box>
    </>
  )
}

export default Product
