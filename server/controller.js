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
   addInventory: (req, res) => {
      const {name, price, image} = req.body;
      const dbInstance = req.app.get('db');

      dbInstance.create_product(name, price, image)
         .then(() => {
            res.sendStatus(200);
         })
         .catch(err => console.log(err));
   }
}