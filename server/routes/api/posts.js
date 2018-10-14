const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const posts = mongoose.model('Post');

router.get('/', async (req, res) => {
	res.send(await posts.find({}).exec());
});

router.post('/', async (req, res) => {

	await posts.create({
		text: req.body.text
	}, (err, result) => {
		if (err) {
			res.status(500);
			return false;
		}
		res.status(201).send(result);
	});

});

router.delete('/:id', async (req, res) => {
	await posts.deleteOne({
		_id: req.params.id
	}, (err, result) => {
		if (err) {
			res.status(500);
			return false;
		}
		res.status(200).send(result);
	});

});

module.exports = router;