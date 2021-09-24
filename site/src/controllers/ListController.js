const db = require('../db/hospedes')

module.exports = {
    list(req, res) {
        const hospedes = db

        res.render("hospede", {hospedes: hospedes})
    },

}
