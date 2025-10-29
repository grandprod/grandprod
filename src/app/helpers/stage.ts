import { getEntry } from '@helpers/content';
import { playerStatGet } from '@helpers/player';
import { gamestate, updateGamestate } from '@helpers/state-game';
import type { MonsterContent, StageContent } from '@interfaces';

export function setStage(newStage: StageContent): void {
  updateGamestate((state) => {
    state.stageId = newStage.id;
    return state;
  });
}

export function stageCurrent(): StageContent | undefined {
  const state = gamestate();
  return getEntry<StageContent>(state.stageId);
}

export function stageCurrentSpawnableMonsters(): MonsterContent[] {
  const stage = stageCurrent();
  if (!stage) return [];

  const difficulty = playerStatGet('Difficulty');
  return stage.spawnableMonsters
    .filter((m) => m.difficulty <= difficulty)
    .map((m) => getEntry<MonsterContent>(m.monsterId))
    .filter((m): m is MonsterContent => !!m);
}

export function stageCurrentSpawnableMinibosses(): MonsterContent[] {
  const stage = stageCurrent();
  if (!stage) return [];

  const difficulty = playerStatGet('Difficulty');
  return stage.minibossMonsters
    .filter((m) => m.difficulty <= difficulty)
    .map((m) => getEntry<MonsterContent>(m.monsterId))
    .filter((m): m is MonsterContent => !!m);
}

export function stageCurrentSpawnableBosses(): MonsterContent[] {
  const stage = stageCurrent();
  if (!stage) return [];

  const difficulty = playerStatGet('Difficulty');
  return stage.bossMonsters
    .filter((m) => m.difficulty <= difficulty)
    .map((m) => getEntry<MonsterContent>(m.monsterId))
    .filter((m): m is MonsterContent => !!m);
}
