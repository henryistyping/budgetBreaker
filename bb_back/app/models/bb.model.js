const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const budgetBreaker = sequelize.define("budgetBreaker", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return budgetBreaker;
}

/* 
So what's happening here?

After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

- create a new Tutorial: create(object)
- find a Tutorial by id: findByPk(id)
- get all Tutorials: findAll()
- update a Tutorial by id: update(data, where: { id: id })
- remove a Tutorial: destroy(where: { id: id })
- remove all Tutorials: destroy(where: {})
- find all Tutorials by title: findAll({ where: { title: ... } })

We'll use all of these in Controller function
*/