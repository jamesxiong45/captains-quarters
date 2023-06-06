const db = require('../config/connection');
const { User, Powers, Background, FirstMate, CrewChoice, Captain } = require('../models');
const userSeeds = require('./userSeeds.json');
const powerSeeds = require('./powerSeeds.json');
const backgroundSeeds = require('./backgroundSeeds.json');
const firstmateSeeds = require('./firstmateSeeds.json');
const crewSeeds = require('./crewSeeds.json');
const captainSeeds = require('./captainSeeds.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Powers.deleteMany({});
    await Background.deleteMany({});
    await FirstMate.deleteMany({});
    await CrewChoice.deleteMany({});
    await Captain.deleteMany({});

    await User.create(userSeeds);
    await Powers.create(powerSeeds);
    await Background.create(backgroundSeeds);
    await FirstMate.create(firstmateSeeds);
    await CrewChoice.create(crewSeeds);
    await Captain.create(captainSeeds);

    console.log('all done!');
    process.exit(0);
    } catch (err) {
        throw err;
    }
});