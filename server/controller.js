module.exports = {
   getInventory: (req, res) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory()
         .then(response => {
            res.status(200).json(response);
      })
         .catch(err => {
            res.sendStatus(500);
            console.log(err)
            });
   },
   getProduct: (req, res) => {
      console.log(req.params)
   },
   addProduct: (req, res) => {
      const {name, price, image} = req.body;
      const dbInstance = req.app.get('db');

      console.log(typeof price)

      dbInstance.create_product(name, price, image)
         .then(() => res.sendStatus(200))
         .catch(err => {
            res.sendStatus(500);
            console.log(err);
         });
   },
   editProduct: (req, res) => {
      const {id} = req.params;
      const {name, price, image} = req.body;
      const dbInstance = req.app.get('db');

      dbInstance.edit_product(id, name, price, image)
         .then(() => res.sendStatus(200))
         .catch(err => {
            res.sendStatus(500);
            console.log(err);
         });
   },
   deleteProduct: (req, res) => {
      const {id} = req.params;
      const dbInstance = req.app.get('db');

      dbInstance.delete_product(id)
         .then(() => res.sendStatus(200))
         .catch(err => {
            res.sendStatus(500);
            console.log(err);
         })
   }
}