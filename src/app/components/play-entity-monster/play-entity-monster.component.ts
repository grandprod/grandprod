import { Component, computed, input } from '@angular/core';
import { IconMonsterComponent } from '@components/icon-monster/icon-monster.component';
import { getEntry } from '@helpers';
import type {
  GameEntity,
  GameEntityMonster,
  MonsterContent,
} from '@interfaces';

@Component({
  selector: 'app-play-entity-monster',
  imports: [IconMonsterComponent],
  templateUrl: './play-entity-monster.component.html',
  styleUrl: './play-entity-monster.component.scss',
})
export class PlayEntityMonsterComponent {
  public entity = input.required<GameEntity>();

  public monster = computed(() => this.entity() as GameEntityMonster);
  public monsterRef = computed(
    () => getEntry<MonsterContent>(this.monster().monsterId)!,
  );
}
