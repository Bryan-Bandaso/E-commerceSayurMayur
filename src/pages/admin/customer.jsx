import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NavDrawer from '../../components/NavDrawer';
import Box from '@mui/material/Box';

// Ganti kode data produk dengan data pelanggan
const data = [
  {
    _id: 1,
    username: 'john_doe',
    nama_customer: 'John Doe',
    nomor_telepon: '123456789',
  },
  {
    _id: 2,
    username: 'jane_doe',
    nama_customer: 'Jane Doe',
    nomor_telepon: '987654321',
  },
];

const Product = () => {
  const [open, setOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({
    _id: -1,
    name: '',
    price: '',
    quantity: '',
    description: '',
  });

  const handleAddProduct = () => {
    setInitialValues({
      _id: -1,
      name: '',
      price: '',
      quantity: '',
      description: '',
    });
    setOpen(true);
  };

  const handleProductEdit = (product) => {
    setInitialValues(product);
    setOpen(true);
  };

  const handleDeleteProduct = (product) => {
    console.log('delete', product);
  };

  const handleSubmit = (values) => {
    values._id = Math.random() * 1000;
    data.push(values);
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
          <Typography sx={{ mb: 1 }} variant="h4">
            Customer
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Nama Customer</TableCell>
                  <TableCell>Nomor Telepon</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((p) => (
                  <TableRow key={p._id}>
                    <TableCell>{p.username}</TableCell>
                    <TableCell>{p.nama_customer}</TableCell>
                    <TableCell>{p.nomor_telepon}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Dialog component for adding/editing product */}
          <Dialog open={open} fullWidth maxWidth="lg">
            <DialogTitle>{'Add Product'}</DialogTitle>
            <DialogContent>
              {/* Form for adding/editing product */}
              {/* Implement your form here */}
            </DialogContent>
            <DialogActions>
              {/* Implement your form actions here */}
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};

export default Product;
