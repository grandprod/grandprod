import { gamestate } from '@helpers/state-game';
import type { GameEntityMonster } from '@interfaces';

export function allMonsters(state = gamestate()): GameEntityMonster[] {
  return state.world.entities.filter(
    (e) => e.type === 'Monster',
  ) as GameEntityMonster[];
}
