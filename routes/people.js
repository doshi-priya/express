const express = require('express')
const router = express.Router()


// app.use(express.static('./methods-public'))
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router