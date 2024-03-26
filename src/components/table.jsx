import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TextField, IconButton, Select, MenuItem, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CustomButton from './button'

const TableCustom = () => {
  const [products, setProducts] = useState([])
  const [quantities, setQuantities] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()

        const initialQuantities = {}
        data.forEach((product) => {
          initialQuantities[product.id] = 0
        })
        setQuantities(initialQuantities)
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleQuantityChange = (productId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }))
  }

  const indexOfLastProduct = currentPage * pageSize
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - pageSize)
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )
  const totalPages = Math.ceil(products.length / pageSize)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value))
    setCurrentPage(1)
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label="simple table"
          >
            <TableHead sx={{ backgroundColor: '#76453B' }}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Product Image</TableCell>
                <TableCell sx={{ color: 'white' }} align="left">
                  Name
                </TableCell>
                <TableCell sx={{ color: 'white' }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ color: 'white' }} align="left">
                  Quantity
                </TableCell>
                <TableCell sx={{ color: 'white' }} align="left">
                  Total
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentProducts.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: '100px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {product.title}
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="quantity">
                    <IconButton
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          quantities[product.id] - 1,
                        )
                      }
                      disabled={quantities[product.id] <= 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      id="outlined-number"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={quantities[product.id]}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value),
                        )
                      }
                      sx={{ maxWidth: '60px', textAlign: 'center' }}
                    />
                    <IconButton
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          quantities[product.id] + 1,
                        )
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    Rp. {product.price * quantities[product.id]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#76453B',
            }}
          >
            <CustomButton
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              variant="contained"
              sx={{ backgroundColor: '#43766C' }}
            >
              Previous
            </CustomButton>
            <Select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="select"
              sx={{ backgroundColor: 'white', color: 'black' }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
            <CustomButton
              disabled={
                indexOfFirstProduct >= products.length ||
                currentPage === totalPages
              }
              onClick={() => handlePageChange(currentPage + 1)}
              variant="contained"
              sx={{ backgroundColor: '#43766C' }}
            >
              Next
            </CustomButton>
          </Box>
        </TableContainer>
      )}
    </>
  )
}

export default TableCustom
