import { creatorMonsterContentToGameEntityMonster } from '@helpers/creator-monster';
import { entityCount } from '@helpers/entity';
import { rngChoice, rngSucceedsChance } from '@helpers/rng';
import { stageCurrentSpawnableMonsters } from '@helpers/stage';
import { updateGamestate } from '@helpers/state-game';
import { timerTicksElapsed } from '@helpers/timer';
import type { GameEntity } from '@interfaces';
import { sortBy } from 'es-toolkit/compat';

export function gameloopSpawnMonsters(): void {
  const count = entityCount('Monster');
  if (count >= 100) return;

  // monster spawn chance increases the fewer monsters there are
  let monsterSpawnChance = 1;
  if (count < 20) monsterSpawnChance = 10;
  if (count < 5) monsterSpawnChance = 25;

  // limit monster spawns if we have more than 10 of them so they don't pop in too frequently
  if (count > 10 && timerTicksElapsed() % 10 !== 0) return;

  if (rngSucceedsChance(monsterSpawnChance)) {
    // monster spawn count goes up with RNG
    let monsterSpawnCount = 1;
    if (rngSucceedsChance(50)) monsterSpawnCount = 3;
    if (rngSucceedsChance(25)) monsterSpawnCount = 5;
    if (rngSucceedsChance(10)) monsterSpawnCount = 10;
    if (rngSucceedsChance(5)) monsterSpawnCount = 20;
    if (rngSucceedsChance(1)) monsterSpawnCount = 50;

    const monsters = stageCurrentSpawnableMonsters();
    const chosenMonsterType = rngChoice(monsters);
    if (!chosenMonsterType) return;

    // spawn new monsters
    const newMonsters: GameEntity[] = [];

    for (let i = 0; i < monsterSpawnCount; i++) {
      const monster =
        creatorMonsterContentToGameEntityMonster(chosenMonsterType);
      monster.distanceFromPlayer = rngChoice([5, 6, 7, 8, 9, 10]);
      newMonsters.push(monster);
    }

    updateGamestate((state) => {
      state.world.entities = sortBy(
        [...state.world.entities, ...newMonsters],
        (e) => e.distanceFromPlayer,
      );
      return state;
    });
  }
}
