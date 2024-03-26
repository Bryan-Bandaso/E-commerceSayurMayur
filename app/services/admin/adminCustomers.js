const db = require('../../../config/database')
const path = require('path')

const getViewCustomers = async (req, res) => {
  try {
    const customers = await db('user').select('*')
    res.render('admin/customers', { customers })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers data', error })
  }
}

module.exports = { getViewCustomers }
