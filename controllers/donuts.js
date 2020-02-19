let express = require('express')
let donutRouter = express.Router()

//= =====================
// REQUIREMENTS
//= =====================
// require the Donut model
const Donut = require('../models/Donut');
const Coffee = require('../models/Coffee')

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that sends all Donuts to donuts/index.hbs view
donutRouter.get('/', (req, res) => {
    Donut.find().then(donuts => {
        console.log(donuts);
        res.render('donuts/index', { donuts });
    });
});

//get a random donut
donutRouter.get('/random', (req, res) => {
    //get all donuts as array
    Donut.find().then(donuts => {
    //get a random donut out of the arrayusing Math.random
    let i = Math.floor(Math.random() * donuts.length);
    let donut = donuts[i];
    //render show page
    res.render('donuts/show', { donut });
    });
});

//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that renders the new.hbs form
donutRouter.get('/new', (req, res) => {
    res.render('donuts/new');
});

//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that renders a single Donut's show page
donutRouter.get('/:id', (req,res) => {
    Donut.findById(req.params.id).then(donut => {
        console.log(donut);
        res.render('donuts/show', { donut });
    });
});

//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that creates a new Donut
// and upon success redirects back to the index page "/"
donutRouter.post('/',(req, res) => {
    Donut.create(req.body).then(() => {
        res.redirect('/');
    });
});

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that a Donut's data to it
donutRouter.get('/:id/edit', (req, res) => {
    let editedDonut = null;
    Donut.findById(req.params.id).then(donut => {
        editedDonut = donut;
        return Coffee.find();
    }).then(coffees => {
        res.render('donuts/edit', { editedDonut, coffees });
    })
});

//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that updates the Donut and
// redirects back to the SHOW PAGE (not index)
donutRouter.put('/:id', (req, res) => {
    Donut.findByIdAndUpdate(req.params.id, req.body).then(donut => {
        res.redirect('/' + donut.id);
    });
});

//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that deletes the Donut and
// redirects back to index page "/"
donutRouter.delete('/:id', (req, res) => {
    Donut.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/');
    });
});

donutRouter.put('/:id/buy', (req, res) => {
    Donut.findById(req.params.id).then(donut => {
        donut.quantity -= 1;
        return donut.save()
    }).then(donut =>{
    res.redirect('/', + donut.id);
    });
});
//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = donutRouter;