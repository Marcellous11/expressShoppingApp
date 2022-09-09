const express = require('express');
const items = require('./fakeDb');
const router = new express.Router();

router.get('/', function listAllItems(req, res, next) {
	res.json({ items: items });
});
router.post('/', function postNewItems(req, res, next) {
	console.log(req);
	items.push(req.body);
	res.json({ items: items });
});
router.get('/:name', function getSingleItem(req, res, next) {
	const item = items.find((item) => item.name === req.params.name);
	res.json({ item });
});
router.patch('/:name', function changeSingleItem(req, res, next) {
	let item = items.find((item) => item.name === req.params.name);
	item.name = req.body.name;
	item.price = req.body.price;
	res.json({});
});
router.delete('/:name', function deleteItem(req, res, next) {
	let item = items.find((item) => item.name === req.params.name);
	console.log(itemIndex);
	console.log('hello ');
	items.splice(itemIndex, 1);
	res.json({ items });
});

module.exports = router;
