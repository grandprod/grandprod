import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlayMonstersComponent } from '@/app/play-monsters/play-monsters.component';
import { PlayStatsComponent } from '@/app/play-stats/play-stats.component';
import { OptionsBaseComponent } from '@components/panel-options/option-base-page.component';
import { TeleportOutletDirective } from '@directives/teleport.outlet.directive';
import { getOption } from '@helpers';

@Component({
  selector: 'app-game-play',
  imports: [
    RouterModule,
    TeleportOutletDirective,
    PlayMonstersComponent,
    PlayStatsComponent,
  ],
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.scss',
})
export class GamePlayComponent extends OptionsBaseComponent {
  public isPaused = computed(() => getOption('gameloopPaused'));
}
