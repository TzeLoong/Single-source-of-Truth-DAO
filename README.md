# Single-source of Truth DAO

## Table of Contents
- [Problem](#problem)
- [Solution](#solution)
- [Reliability of Information](#reliability-of-information)
- [Verifiability of Information](#verifiability-of-information)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Problem

Users want to find past information about crypto/NFT projects or protocols but there is no way to look for this info that is aggregated in 1 source. And no assurance that the info is **reliable and verifiable.** Should also be sorted according to project.
Information like hacks, “scandals”, suspicious on-chain activity, or (trustworthy) FUD. Could also extend to screenshot of Discord messages or tweets that protocol team members delete to hide tracks.
As an institution, I need to be able to look at the past events of a project for me to decide on the reputability of the project.
Only way to find out more is word-of-mouth or sifting through unstructured tweets on Twitter. News articles are a viable source but information is scattered and the trustworthiness of the news source might be questioned.

## Solution

A DAO that has timelines and a history of key events of protocols. The DAO uses protocol/own tokens to vote on events to be placed on the information timeline of the protocol. Information placed on the protocol’s timeline will be placed on-chain, possibly in the form of a token or any other way.

## Reliability of Information

- Proposal to erect new piece onto project history can be set by anyone (or we could elect trustable sources if need be)
- Stake to propose a proposal (as per usual)
- We can use Conviction Voting for this since there might be a temporal element to it.
- Tokens to vote on proposal can be either the protocol’s own tokens (eg; CRV tokens for Curve news) or our own tokens or both.
  - Using protocols’ tokens means higher costs for the proposer & possible malicious attackers.
  - Using our own tokens pumps our bags but easily manipulated
  - Using a mixture of both means we can play with the ratios or allocations of tokens dynamically for votes. Because the protocol’s token holders would obviously not want to harm the reputation of their bag.
- Tokens can also be delegated to “trustworthy” parties similar to dYdX.
  - Parties have to be relevant to the topic at hand.
  - eg; FUD on an L1 would mean delegating to CZ, Vitalik etc.
  - eg; FUD on an NFT project would mean delegating to Franklin or other high profile individuals or other project founders
  - Their visibility would mean that they would want to act responsibly for their public image.

## Verifiability of Information

- Onus is on the proposer to provide the relevant information & proof for the piece of information.
- The proof would ideally be stored on-chain as well along with the news.
- Our purpose as a protocol isn’t to determine what is the truth or not, but rather to let the users have the platform to decide collectively if the piece of information is trustworthy enough to be put on-chain.

## Installation

To use this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your/repo.git`
2. Install the required dependencies: `npm install`

## Usage

To run the project, execute the following command:

npm run start

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push the changes to your branch: `git push origin feature/your-feature`
5. Submit a pull request.
