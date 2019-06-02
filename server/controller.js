module.exports = {
   getInventory: (req, res) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_inventory()
         .then(response => {
            res.status(200).json(response);
      })
         .catch(err => console.log(err));
   }
}