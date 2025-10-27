import type { GameEntity, GameEntityPlayer } from '@interfaces/game-entity';
import type { Branded } from '@interfaces/identifiable';

export type GameId = Branded<string, 'GameId'>;

export interface GameStateWorld {
  entities: GameEntity[];
  currentStage: number;
}

export interface GameStateClock {
  numTicks: number;
  lastSaveTick: number;
}

export interface GameStateMeta {
  version: number;
  isSetup: boolean;
  isPaused: boolean;
  createdAt: number;
}

export interface GameState {
  meta: GameStateMeta;
  gameId: GameId;
  clock: GameStateClock;
  world: GameStateWorld;
  player: GameEntityPlayer;
}
