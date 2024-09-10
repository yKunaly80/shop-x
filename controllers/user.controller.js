// const express = require('express')

exports.crateUser = async (req, res) => {
    console.log('req data ==>', req.body)
    res.send('test')
}

exports.getAllUsers = async (req, res, next) => {
    console.log('call==>');
    res.send({
        name: 'Kunal Bera',
        age: 22
    })
    // Promise.resolve()
}
