export default `

    type Team {
        owner: User!
        channels: [Channel!]!
        members: [User!]!
    }

    type Channel {
        id: Int!
        name: String!
        public: Boolean!
        messages: [Message!]!
    }

    type Message {
        id: Int!
        text: String!
        user: User!
        channel: Channel!
    }

    type User {
        id: Int!
        username: String!
        email: String!
        messages: Message!
        teams: [Team!]!
    }

    type Query {
        hi: String
    }
`;
