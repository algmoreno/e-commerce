const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  Category.findAll({}).then(results => {
    res.json(results)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    res.json(results)
  })
});

router.post('/', (req, res) => {
  Category.create({
    id: req.params.id,
    category_name: req.params.category_name
  })
  .then(results => {
    res.json(results)
  })
});

router.put('/:id', (req, res) => {
  Category.update({
    where: {
      id: req.params.id,
      category_name: req.params.category_name
    }
  })
  .then(results => {
    res.json(results)
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    res.json(results)
  })
});

module.exports = router;
