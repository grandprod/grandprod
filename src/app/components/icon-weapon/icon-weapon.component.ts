import { Component, input } from '@angular/core';
import { AtlasImageComponent } from '@components/atlas-image/atlas-image.component';
import type { WeaponContent } from '@interfaces';

@Component({
  selector: 'app-icon-weapon',
  imports: [AtlasImageComponent],
  templateUrl: './icon-weapon.component.html',
  styleUrl: './icon-weapon.component.scss',
})
export class IconWeaponComponent {
  public weapon = input.required<WeaponContent>();
}
