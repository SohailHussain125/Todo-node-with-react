const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const Joi = require('joi');
var todoRouter = express.Router();
var Item = require('../modal/todoSchema');
var app = express()









todoRouter.route("/").get((req, res) => {
    res.send("Hellow World")
})


todoRouter.route("/todoArr").get((req, res) => {
    Item.find((err, item) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(item)
        }

    })
})

todoRouter.route("/todoArr/:id").get((req, res) => {
    const course = Item.find(c => c.id === parseInt(req.params.id));

    (!course ? res.status(404).send(`this id has not Given in data ${course}`) : res.send(course))
})




todoRouter.route("/addTodo").post((req, res) => {
    const { error } = validatedFunction(req.body)
    var item = new Item();

    if (error) {
        res.status(400).send(result.error.details[0].message)
        alert(result.error.details[0].message)
    }
    else {

        item.name = req.body.name;
        item.save()
            .then(item => {
                res.send('Item added successfully==>>===');
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    }
})

todoRouter.route('/api/updateTodo/:id').put((req, res) => {
    // validate
    // if invalid, return 400 - bad request

    const { error } = validatedFunction(req.body)
    if (error) {
        res.status(400).send(result.error.details[0].message)
        return;
    }

    const doc = {name:req.body.name }

    Item.update({ _id: req.params.id }, doc, (err, result) => {
        if (err)
            res.send(err);
        res.send('Expense successfully updated!');
    });
})






todoRouter.route('/api/deleteTodo/:id').delete((req, res) => {

    Item.find({ _id: req.params.id }).remove().exec(function (err, expense) {
        {
            (err) ?
            res.send(err) :
            res.json('Todo successfully deleted!')
        }
    })
})






function validatedFunction(todo) {
    schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(todo, schema);
}

module.exports = todoRouter;
