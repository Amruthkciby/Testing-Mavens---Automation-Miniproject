import test from 'node:test';
import assert from 'node:assert/strict';
import { getAuctionResult, selectTeams } from '../utils/playerSelector.js';

test('load auction data in the requested structure', () => {
  const data = selectTeams();

  assert.equal(data.teams.length, 2);
  assert.equal(data.players.length, 10);
  assert.equal(data.teams[0].name, 'CSK');
  assert.equal(data.players[0].role, 'Batsman');
});

test('assign players to teams in the expected batches', () => {
  const result = getAuctionResult();

  assert.equal(result.players[0].soldTo, 'Chennai Super Kings');
  assert.equal(result.players[5].soldTo, 'Mumbai Indians');
  assert.equal(result.players[4].id, 5);
  assert.equal(result.players[9].id, 10);
});
