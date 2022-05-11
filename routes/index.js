const express = require('express');
const router = express.Router();

const { Employee } = require('../models/employee');

router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
       if(!err){
           res.send(data);
       } else {
           console.log(err);
       }
    });
});

// save employee
router.post('/api/employees/add', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });
    emp.save((err, data) => {
        res.status(200).json({ code: 200, message: 'Employee added successfully',
        addEmployee: data})
     });
});

//get employee by id
router.get('/api/employees/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if(!err){
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//update employee
router.put('/api/employees/edit/:id', (req, res) => {
    const emp = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err){
            res.status(200).json({ code: 200, message: 'Employee updated successfully', 
            updateEmployee: data})
        } else {
            console.log(err);
        }
    });
});

//delete employee
router.delete('/api/employees/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err){
            res.status(200).json({ code: 200, message: 'Employee deleted successfully',
            deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
});

module.exports = router;