const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({}).then(results => {
    res.json(results)
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    res.json(results)
  })
});

router.post('/', (req, res) => {
  Tag.create({
    where: {
      id: req.params.id,
      tag_name: req.params.tag_name
    }
  })
  .then(results => {
    res.json(results)
  })
});

router.put('/:id', (req, res) => {
  Tag.create({
    where: {
      id: req.params.id,
      tag_name: req.params.tag_name
    }
  })
  .then(results => {
    res.json(results)
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
});

module.exports = router;
