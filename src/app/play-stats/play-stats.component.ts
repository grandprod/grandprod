import { Component, computed } from '@angular/core';
import { gamestate } from '@helpers';
import type { GameStat } from '@interfaces';

@Component({
  selector: 'app-play-stats',
  imports: [],
  templateUrl: './play-stats.component.html',
  styleUrl: './play-stats.component.scss',
})
export class PlayStatsComponent {
  public allStats = computed(() => {
    const stats = gamestate().player.currentStats;
    return Object.keys(stats).map((key) => ({
      name: key,
      value: stats[key as GameStat],
    }));
  });
}
