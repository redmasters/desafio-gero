const db = require('../db/hospedes')

module.exports = {
    list(req, res) {
        const hospedes = db[0]
        console.log(hospedes)

        res.render("hospede", {hospedes: hospedes})
    },

}
