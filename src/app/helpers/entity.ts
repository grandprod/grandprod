import { gamestate } from '@helpers/state-game';
import type {
  GameEntity,
  GameEntityCharacter,
  GameEntityType,
  GameStat,
} from '@interfaces';

export function entitiesAll(filter?: GameEntityType): GameEntity[] {
  return gamestate().world.entities.filter(
    (entity) => !filter || entity.type === filter,
  );
}

export function entityCount(filter?: GameEntityType): number {
  return entitiesAll(filter).length;
}

export function characterGetStat(
  entity: GameEntityCharacter,
  stat: GameStat,
): number {
  return entity.currentStats[stat] ?? 0;
}
