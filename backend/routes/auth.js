const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const requireLogin = require('../middlewares/requireLogin')

// sign up
router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: 'Please Add the Fields!' })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User Already Exits With This Email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email,
                        password: hashedPassword,
                        name
                    })

                    user.save()
                        .then(user => {
                            res.json({ message: 'Saved Successfully' })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
        })
        .catch(err => {
            console.log(err);
        })
})

//sign in
router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "Plase Add Email or Password" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or Password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        //res.json({ message: "Successfully signed in" })
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        const { _id, name, email, pic } = savedUser
                        res.json({ token, user: { _id, name, email, pic } })
                    } else {
                        return res.status(422).json({ error: "Invalid Email or Password" })
                    }
                })
        })
        .catch(err => {
            console.log(err);
        })
})

router.get('/protected', requireLogin, (req, res) => {
    res.send("helloooo")
})

module.exports = router;
