import { characterGetStat } from '@helpers/entity';
import { allMonsters } from '@helpers/monster';
import { updateGamestate } from '@helpers/state-game';

export function gameloopMoveMonsters(): void {
  updateGamestate((state) => {
    const monsters = allMonsters(state);
    monsters.forEach((monster) => {
      if (monster.distanceFromPlayer <= 0) return;
      const speed = characterGetStat(monster, 'MovementSpeed');
      monster.distanceFromPlayer = Math.max(
        0,
        monster.distanceFromPlayer - speed,
      );
    });

    return state;
  });
}
