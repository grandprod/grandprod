import { Component, input } from '@angular/core';
import type { StageContent } from '@interfaces';

@Component({
  selector: 'app-icon-stage',
  imports: [],
  templateUrl: './icon-stage.component.html',
  styleUrl: './icon-stage.component.scss',
})
export class IconStageComponent {
  public stage = input.required<StageContent>();
}
