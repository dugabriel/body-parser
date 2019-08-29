const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send(`
    <form method="POST" action="/">
    
        <table id="tableid" name="tableid">
            <thead>
                <tr>
                <th>Month</th>
                <th>Savings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" name="teste1" id="teste1"/></td>
                    <td><input type="text" name="teste2" id="teste2"/></td>
                </tr>
                <tr>
                    <td><input type="text" name="teste1" id="teste1"/></td>
                    <td><input type="text" name="teste2" id="teste2"/></td>
                </tr>
            </tbody>
        </table>
    <br>
    <input type="submit"/>
    </form>
    `)
})

router.post('/', function(req, res, next) {
    for(let i in req.body.teste1) {
        console.log(req.body.teste1[i])
        console.log(req.body.teste2[i])
    }
})


module.exports = router;