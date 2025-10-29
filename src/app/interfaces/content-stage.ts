import type { MonsterId } from '@interfaces/content-monster';
import type { Branded, IsContentItem } from '@interfaces/identifiable';
import type { HasDescription } from '@interfaces/traits';

export type StageId = Branded<string, 'StageId'>;

export type StageSpawnableMonster = {
  difficulty: number;
  monsterId: MonsterId;
};

export type StageContent = IsContentItem &
  HasDescription & {
    id: StageId;

    spawnableMonsters: StageSpawnableMonster[];
    minibossMonsters: StageSpawnableMonster[];
    bossMonsters: StageSpawnableMonster[];
  };
