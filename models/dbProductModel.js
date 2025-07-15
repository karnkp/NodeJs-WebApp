const db = require('./dbconfig');

const Product = {
    showAllProducts: (callback) => {
        //console.log(db);
        db.query('select pid, name, price from product', callback);
    },
    showProductByID: (id, callback) => {
        //console.log(id);
        db.query('select pid, name, price, weight' + ' from product where pid = ?', [id], callback);
    }
}

module.exports = Product;