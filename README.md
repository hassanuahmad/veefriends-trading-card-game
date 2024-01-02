
# Veefriends Trading Card Game

This is a web application that displays all the Veefriends cards and enables users to filter them by score and by the first letter of the alphabet.

## Tech Stack

* RedwoodJS
* TailwindCSS
* Prisma

## Development Setup

### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- Yarn: [Download and Install Yarn](https://yarnpkg.com)

### Installation

1. Clone this repository:

```bash
git clone git@github.com:hassanuahmad/veefriends-trading-card-game.git
```

2. Install project dependencies:

```bash
yarn install
```

3. Run the migrations using Prisma:

```bash
yarn rw prisma migrate dev
```

### Development

Start the development server:

```bash
yarn redwood dev
```

Your development environment is now set up and running. Access the site at [http://localhost:8910](http://localhost:8910).
