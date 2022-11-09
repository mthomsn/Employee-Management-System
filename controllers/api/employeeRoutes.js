const router = require('express').Router();
const { Employee, Leave, Roles } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/add', withAuth, async (req, res) => {
  try {
    const addEmployee = await Employee.create({  
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        start_date: req.body.start_date,
        salary: req.body.salary,
        role_id: req.body.role_id,
        title: req.body.title,
        currently_employed: true,
      });
      res.status(200).json(addEmployee);
    }
    catch(err) {
      res.status(400).json(err);
    }
  }); 

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
