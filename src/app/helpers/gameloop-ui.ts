import { stageCurrent } from '@helpers/stage';
import { gamestate } from '@helpers/state-game';
import { statusText } from '@helpers/ui';

export function gameloopUIAlwaysRun(): void {
  const state = gamestate();

  const stage = stageCurrent();
  if (stage) {
    statusText.set(
      `${stage.name} - Stage Lv. ${state.world.currentStageLevel}`,
    );
  }
}

export function gameloopUI(): void {}
