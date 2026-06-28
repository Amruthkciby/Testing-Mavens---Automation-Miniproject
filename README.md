# Cricket Auction Manager

A simple Node.js project that reads cricket auction data from a JSON file and displays the eligible players and the auction result for two teams.

## Run the project

Requires Node.js 18+.

```bash
npm run start
```

## Project structure
- `app.js` — main entry point that prints the eligible players and auction result
- `testdata.json` — auction data containing teams and players with base and sold prices
- `utils/playerSelector.js` — reads the JSON data and prepares the player lists for the teams
- `models/` — player and team model classes, including `Player`, `Batter`, `Bowler`, `Allrounder`, and `Team`

## Sample output
The application prints:
- a main title: `Cricket Auction Manager`
- a list of eligible players with ID, name, age, player type, and base price
- an auction result section for `CSK` and `RCB`

## CI
A GitHub Actions workflow is included to install dependencies, run tests, and start the app on push and pull requests.
