const { gql } = require("apollo-server");
const { newsSchema } = require("./news")
const { liveStreamSchema } = require("./liveStream")

const typeDefs = gql`
	type Query
	${newsSchema}
	${liveStreamSchema}
`;

module.exports = { typeDefs };
