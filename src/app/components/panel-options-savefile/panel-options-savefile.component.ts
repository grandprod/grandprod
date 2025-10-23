import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSavefileExportComponent } from '@components/button-savefile-export/button-savefile-export.component';
import { ButtonSavefileImportComponent } from '@components/button-savefile-import/button-savefile-import.component';
import { AnalyticsClickDirective } from '@directives/analytics-click.directive';
import { SFXDirective } from '@directives/sfx.directive';
import { gameReset, gamestate, timerTicksElapsed } from '@helpers';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-panel-options-savefile',
  imports: [
    SweetAlert2Module,
    DatePipe,
    DecimalPipe,
    ButtonSavefileExportComponent,
    ButtonSavefileImportComponent,
    AnalyticsClickDirective,
    SFXDirective,
  ],
  templateUrl: './panel-options-savefile.component.html',
  styleUrl: './panel-options-savefile.component.scss',
})
export class PanelOptionsSavefileComponent {
  private router = inject(Router);

  public startedAt = computed(() => gamestate().meta.createdAt);
  public numTicks = computed(() => timerTicksElapsed());

  async deleteSavefile() {
    await this.router.navigate(['/']);

    gameReset();
  }
}
