const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  }).then(results => {
    res.json(results)
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(results => {
    res.json(results)
  })
});

router.post('/', (req, res) => {
  Tag.create({
      tag_name: req.body.tag_name
  })
  .then(results => {
    res.json(results)
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
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
