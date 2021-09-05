const crypto = require('crypto');
const mqtt = require('mqtt');
const express = require('express');

const flag = require('fs').readFileSync('flag.txt', 'utf-8');
const host = 'ws://localhost:8001';

const app = express();

app.use(express.static('static'));

app.post('/admin', (req, res) => {
	const id = crypto.randomBytes(32).toString('hex');
	const client = mqtt.connect(host, { clientId: id });

	client.on('connect', () => {
		client.subscribe('messages/' + id + '/subscribe_to_this_for_flag');
	});

	const autopublish = setInterval(() => {
		client.publish('messages/' + id + '/subscribe_to_this_for_flag', flag);
	}, 1000);

	setTimeout(() => {
		clearInterval(autopublish);
		client.end();
	}, 30000);

	res.send('done');
});

app.listen(8000);