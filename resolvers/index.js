const { newsResolvers, newsOutsideResolvers } = require("./news");
const { liveStreamResolvers } = require("./liveStream");

const resolvers = {
	Query: {
		...newsResolvers,
		...liveStreamResolvers
	},
	...newsOutsideResolvers
};

module.exports = { resolvers };
