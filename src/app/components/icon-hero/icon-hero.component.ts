import { Component, input } from '@angular/core';
import { AtlasAnimationComponent } from '@components/atlas-animation/atlas-animation.component';
import type { HeroContent } from '@interfaces';

@Component({
  selector: 'app-icon-hero',
  imports: [AtlasAnimationComponent],
  templateUrl: './icon-hero.component.html',
  styleUrl: './icon-hero.component.scss',
})
export class IconHeroComponent {
  public hero = input.required<HeroContent>();
}
