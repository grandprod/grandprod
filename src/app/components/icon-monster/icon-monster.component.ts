import { Component, input } from '@angular/core';
import { AtlasAnimationComponent } from '@components/atlas-animation/atlas-animation.component';
import type { MonsterContent } from '@interfaces';

@Component({
  selector: 'app-icon-monster',
  imports: [AtlasAnimationComponent],
  templateUrl: './icon-monster.component.html',
  styleUrl: './icon-monster.component.scss',
})
export class IconMonsterComponent {
  public monster = input.required<MonsterContent>();
}
