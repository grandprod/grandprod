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

export function playerStatIncrease(stat: GameStat, amount: number): void {
  updateGamestate((state) => {
    const player = state.player;
    const currentValue = characterGetStat(player, stat);
    player.currentStats[stat] = currentValue + amount;
    return state;
  });
}
