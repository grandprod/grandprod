import { characterGetStat } from '@helpers/entity';
import { gamestate, updateGamestate } from '@helpers/state-game';
import type { GameEntityPlayer, GameStat } from '@interfaces';

export function setPlayer(newPlayer: GameEntityPlayer): void {
  updateGamestate((state) => {
    state.player = newPlayer;
    return state;
  });
}

export function playerStatGet(stat: GameStat): number {
  return characterGetStat(gamestate().player, stat);
}
