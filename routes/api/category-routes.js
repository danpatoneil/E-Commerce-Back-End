const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryList = await Category.findAll({
        include: Product,
    }).catch((err) => {
        return res.status(500).json(err);
      });
      return res.status(200).json(categoryList);
  }catch(error){
    return res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id, {
        include: Product,
    });
    if(!categoryData) return res.status(404).json({ message: 'No category with that id found'});
    return res.status(200).json(categoryData)
  } catch(error) {
    return res.status(400).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    return res.status(200).json(categoryData);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
        where: {
            id: req.params.id,
        },
    });
    if(!categoryData) return res.status(404).json('No category under that ID was found');
    return res.status(200).json(categoryData);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
        where: {
            id: req.params.id,
        },
    });
    if(!categoryData) return res.status(404).json('No category under that ID was found');
    return res.status(200).json(categoryData);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
