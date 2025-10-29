import type { HeroId } from '@interfaces/content-hero';
import type { MonsterId } from '@interfaces/content-monster';
import type { Branded } from '@interfaces/identifiable';
import type { StatBlock } from '@interfaces/stat';

export type GameEntityId = Branded<string, 'GameEntityId'>;

export type GameEntityType = 'Player' | 'Monster' | 'Interactable';

export interface GameEntity {
  id: GameEntityId;

  name: string;

  type: GameEntityType;

  distanceFromPlayer: number;
}

export type GameEntityCharacter = GameEntity & {
  currentHP: number;
  currentStats: StatBlock;
};

export type GameEntityMonster = GameEntityCharacter & {
  type: 'Monster';

  monsterId: MonsterId;
};

export type GameEntityPlayer = GameEntityCharacter & {
  type: 'Player';

  heroId: HeroId;
  currentXP: number;
  currentLevel: number;

  levelupStats: StatBlock;
};
