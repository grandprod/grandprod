import { Component, computed } from '@angular/core';
import { PlayEntityMonsterComponent } from '@components/play-entity-monster/play-entity-monster.component';
import { gamestate } from '@helpers';

@Component({
  selector: 'app-play-monsters',
  imports: [PlayEntityMonsterComponent],
  templateUrl: './play-monsters.component.html',
  styleUrl: './play-monsters.component.scss',
})
export class PlayMonstersComponent {
  public allEntities = computed(() => gamestate().world.entities);
}
