import type { HeroId } from '@interfaces/content-hero';
import type { Branded } from '@interfaces/identifiable';
import type { StatBlock } from '@interfaces/stat';

export type GameEntityId = Branded<string, 'GameEntityId'>;

export type GameEntityType = 'Player' | 'Monster' | 'Interactable';

export interface GameEntity {
  id: GameEntityId;

  name: string;

  type: GameEntityType;
}

export type GameEntityCharacter = GameEntity & {
  currentHP: number;
  currentStats: StatBlock;
};

export type GameEntityMonster = GameEntityCharacter & {
  type: 'Monster';

  distanceFromPlayer: number;
};

export type GameEntityPlayer = GameEntityCharacter & {
  type: 'Player';

  heroId: HeroId;
  currentXP: number;
  currentLevel: number;

  levelupStats: StatBlock;
};
