import { rngUuid } from '@helpers/rng';
import type { GameEntityId, GameEntityPlayer, HeroContent } from '@interfaces';

export function creatorPlayerHeroToGameEntityPlayer(
  hero: HeroContent,
): GameEntityPlayer {
  return {
    id: rngUuid() as GameEntityId,
    heroId: hero.id,
    type: 'Player',
    name: hero.name,
    currentHP: hero.baseStats.Health,
    currentStats: hero.baseStats,
    currentXP: 0,
    currentLevel: 1,
    levelupStats: hero.statsPerLevel,
  };
}
