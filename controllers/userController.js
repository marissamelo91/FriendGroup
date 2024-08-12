
const { User } = require("./models");

module.exports = {
    async getUser(req, res) {
        try {
            const user = await User.find()
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Get single user
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Create User
    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Update User
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
                new: true,
                runValidators: true
            })
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' })
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Delete User
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId })
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' })
            }
            res.json({ message: 'User deleted!' })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Add Friend 
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true, runValidators: true }
            )
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' })
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Delete Friend
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            )
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' })
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },


}