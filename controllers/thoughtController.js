const { Thought } = require("../models");
module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get one thought
    async getThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId)
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' })
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, {
                new: true,
                runValidators: true
            })
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' })
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' })
            }
            res.json({ message: 'Thought deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a reaction
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { new: true, runValidators: true }
            )
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' })
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete Reaction
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            )
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' })
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    }

}