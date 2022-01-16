const { expect } = require('@jest/globals');
const Team = require( '../lib/Team' );

test('Creates a Team object', () => {
    const team = new Team();

    expect( team.staff ).toStrictEqual([]);
});

