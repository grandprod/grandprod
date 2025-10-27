import { rngUuid } from '@helpers/rng';
import type {
  GameEntityId,
  GameEntityMonster,
  MonsterContent,
} from '@interfaces';

export function creatorMonsterContentToGameEntityMonster(
  content: MonsterContent,
): GameEntityMonster {
  return {
    id: rngUuid() as GameEntityId,
    name: content.name,
    type: 'Monster',
    currentHP: content.baseStats.Health,
    currentStats: content.baseStats,
    distanceFromPlayer: 10,
  };
}
