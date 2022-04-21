const User = require("../models/user")
const bcrypt = require("bcrypt")
const { Session } = require("../lib/sequelize")
const nanoid = require("nanoid")
const moment = require("moment")

const authControllers = {
loginUser: async(req, res) => {
    try {
    const { username, password } = req.body

    const findUser = await User.findOne({
        where: {
            username
        }
    })
    
    const isPasswordCorrect = bcrypt.compareSync(password, findUser.password)
    if (!findUser || !isPasswordCorrect) {
        return res.status(400).json({
            message: "Wrong username or password"
        })
    }

    delete findUser.dataValues.password

    await Session.update({
        is_valid: false
    }, {
        where: {
            is_valid: true,
            user_id: findUser.id
        }
    })

    const sessionToken = nanoid(21)

    await Session.create({
        token: sessionToken,
        is_valid: true,
        valid_until: moment().add(1, "day"),
        user_id: findUser.id
    })

    return res.status(200).json({
        message: "Login Success",
        result: {
            user: findUser,
            token: sessionToken
        }
    })


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Can't Reach Server"
        })
    }
    
}
}

module.exports = authControllers