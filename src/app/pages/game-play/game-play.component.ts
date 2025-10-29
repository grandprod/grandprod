import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OptionsBaseComponent } from '@components/panel-options/option-base-page.component';
import { PlayMonstersComponent } from '@components/play-monsters/play-monsters.component';
import { PlayStatsComponent } from '@components/play-stats/play-stats.component';
import { getOption } from '@helpers';

@Component({
  selector: 'app-game-play',
  imports: [RouterModule, PlayMonstersComponent, PlayStatsComponent],
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.scss',
})
export class GamePlayComponent extends OptionsBaseComponent {
  public isPaused = computed(() => getOption('gameloopPaused'));
}
