const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
} = require('../../controllers/thoughtControllers');

// api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

// api/thought/:thoughtsId
router.route('/:thoughtsId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/:thoughtId/reaction
router.route('/:thoughtsId/reaction')
.post(addReaction);

module.exports = router;