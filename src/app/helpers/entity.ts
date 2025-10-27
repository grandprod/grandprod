import type { GameEntityCharacter, GameStat } from '@interfaces';

export function characterGetStat(
  entity: GameEntityCharacter,
  stat: GameStat,
): number {
  return entity.currentStats[stat] ?? 0;
}
