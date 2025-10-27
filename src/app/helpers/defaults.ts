import { rngUuid } from '@helpers/rng';
import type {
  GameEntityId,
  GameId,
  GameState,
  HeroId,
  StatBlock,
} from '@interfaces';

export function defaultGameState(): GameState {
  return {
    meta: {
      version: 1,
      isSetup: false,
      isPaused: false,
      createdAt: Date.now(),
    },
    gameId: rngUuid() as GameId,
    clock: {
      numTicks: 0,
      lastSaveTick: 0,
    },
    world: {
      entities: [],
      currentStage: 1,
    },
    player: {
      id: '' as GameEntityId,
      heroId: '' as HeroId,
      name: 'Player',
      type: 'Player',
      currentHP: 100,
      currentStats: defaultStats(),
      currentXP: 0,
      currentLevel: 1,
      levelupStats: defaultStats(),
    },
  };
}

export function defaultStats(): StatBlock {
  return {
    Damage: 0,
    Defense: 0,
    Health: 0,
    Regen: 0,
    Shield: 0,
    Evasion: 0,
    Lifesteal: 0,
    Thorns: 0,
    CritChance: 0,
    CritDamage: 0,
    AttackSpeed: 0,
    AttackRange: 0,
    ProjectileCount: 0,
    ProjectileSpeed: 0,
    ProjectileBounces: 0,
    Duration: 0,
    Knockback: 0,
    MovementSpeed: 0,
    Luck: 0,
    Difficulty: 0,
    ExpGain: 0,
    GoldGain: 0,
    FavorGain: 0,
    FreezeChance: 0,
    PoisonChance: 0,
    ChillChance: 0,
    BurnChance: 0,
    BleedChance: 0,
    CurseChance: 0,
  };
}
