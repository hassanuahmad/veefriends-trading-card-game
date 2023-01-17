export const schema = gql`
  type Card {
    id: Int!
    name: String!
    pageName: String!
    image: String!
    score: Int!
    aura: Int!
    skill: Int!
    stamina: Int!
  }

  type Query {
    cards: [Card!]! @skipAuth
    card(id: Int!): Card @skipAuth
    cardonScore(score: Int!): [Card!] @skipAuth
    cardonAlphabet(nameAlphabet: String!): [Card!] @skipAuth
    allCardsDeckBuilder: [Card!]! @requireAuth
  }

  input CreateCardInput {
    name: String!
    pageName: String!
    image: String!
    score: Int!
    aura: Int!
    skill: Int!
    stamina: Int!
  }

  input UpdateCardInput {
    name: String
    pageName: String
    image: String
    score: Int
    aura: Int
    skill: Int
    stamina: Int
  }

  type Mutation {
    createCard(input: CreateCardInput!): Card! @requireAuth
    updateCard(id: Int!, input: UpdateCardInput!): Card! @requireAuth
    deleteCard(id: Int!): Card! @requireAuth
  }
`
