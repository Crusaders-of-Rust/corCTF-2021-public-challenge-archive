const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const config = require('./config');
const crypto = require('crypto');
const flag = require('fs').readFileSync('flag.txt', 'utf-8');

let users = new Map();

users.set('admin', {
	token: config.token,
	username: 'admin'
});

const schema = buildSchema(`
type Query {
	users: [User]!
	flag(token: String!): String!
}

type Mutation {
	createUser(email: String!): User
}

type User {
	token: String!
	username: String!
}`)


const root = {
	users: () => {
		return Array.from(users).map(([name, value]) => value);
	},
	flag: ({ token }) => {
		if (token !== config.token) {
			throw new Error('Invalid token!');
		}

		return flag;
	},
	createUser: email => {
		let username = crypto.randomBytes(32).toString('hex');
		let token = crypto.randomBytes(32).toString('hex');
		let user = { username, token };

		users.set(username, user);

		return user;
	}
}

const app = express();

app.use(express.static('static'));

app.use('/graphql', graphqlHTTP({
	schema,
	rootValue: root,
	graphiql: false
}));

app.listen(8000);