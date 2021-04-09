module.exports = (app)=> {

    const add = (request, response) => {
        const a = parseInt(request.params['paramA']);
        const b = parseInt(request.params['paramB']);
        const c = a + b
        response.send(c + '')
    }

    const subtract = (req, res) => {
        const aa = req.query['x'];
        const bb = req.query['y'];
        res.send(`${aa - bb}`)
    }

    app.get('/subtract', subtract);

    app.get('/add/:paramA/:paramB', add);

    app.get('/', (req, res) =>
        res.send('hello world'));
}