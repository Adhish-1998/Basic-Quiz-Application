const user = require('../Models/user')


const signup = async (req, res) => {
    try {
        let userData = await user.create(req.body)
        return res.status(201).send({ status: true, data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const login = async (req, res) => {

    try {
        let userData = await user.findOne({ user: req.body.email, password: req.body.password })
        return res.send({ data: userData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

module.exports = {
    signup,
    login
}