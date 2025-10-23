export type BaseStat =
  | 'Damage'
  | 'Defense'
  | 'Health'
  | 'Regen'
  | 'Shield'
  | 'Evasion'
  | 'Lifesteal'
  | 'Thorns'
  | 'CritChance'
  | 'CritDamage'
  | 'AttackSpeed'
  | 'ProjectileCount'
  | 'ProjectileSpeed'
  | 'ProjectileBounces'
  | 'Duration'
  | 'Knockback'
  | 'MovementSpeed'
  | 'Luck'
  | 'Difficulty'
  | 'ExpGain'
  | 'GoldGain'
  | 'FavorGain';

export type ConditionStat =
  | 'FreezeChance'
  | 'PoisonChance'
  | 'ChillChance'
  | 'BurnChance'
  | 'BleedChance'
  | 'CurseChance';

export type GameStat = BaseStat | ConditionStat;

export type StatBlock = Record<GameStat, number>;
