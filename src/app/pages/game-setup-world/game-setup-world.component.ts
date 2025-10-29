import type { OnInit } from '@angular/core';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentNameComponent } from '@components/content-name/content-name.component';
import { IconHeroComponent } from '@components/icon-hero/icon-hero.component';
import { IconStageComponent } from '@components/icon-stage/icon-stage.component';
import { IconWeaponComponent } from '@components/icon-weapon/icon-weapon.component';
import { SFXDirective } from '@directives/sfx.directive';
import {
  creatorPlayerHeroToGameEntityPlayer,
  discordSetStatus,
  gameReset,
  getEntriesByType,
  getEntry,
  setPlayer,
  setStage,
  setWorldSeed,
} from '@helpers';
import type { GameStat, StageContent, WeaponContent } from '@interfaces';
import { type HeroContent } from '@interfaces';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-game-setup-world',
  imports: [
    SweetAlert2Module,
    SFXDirective,
    FormsModule,
    IconHeroComponent,
    ContentNameComponent,
    IconWeaponComponent,
    IconStageComponent,
  ],
  templateUrl: './game-setup-world.component.html',
  styleUrl: './game-setup-world.component.scss',
})
export class GameSetupWorldComponent implements OnInit {
  private router = inject(Router);

  public worldSeed = signal<string | undefined>(undefined);

  public chosenHero = signal<HeroContent | undefined>(undefined);
  public chosenStage = signal<StageContent | undefined>(undefined);

  public allHeroes = computed(() => getEntriesByType<HeroContent>('hero'));
  public allStages = computed(() => getEntriesByType<StageContent>('stage'));

  public heroWeapons = computed(
    () =>
      (this.chosenHero()?.startingWeaponIds ?? []).map((weaponId) =>
        getEntry<WeaponContent>(weaponId),
      ) as WeaponContent[],
  );
  public heroLevelupStats = computed(
    () =>
      Object.keys(this.chosenHero()?.statsPerLevel ?? {})
        .filter(
          (s) => (this.chosenHero()?.statsPerLevel?.[s as GameStat] ?? 0) > 0,
        )
        .sort() as GameStat[],
  );

  ngOnInit() {
    discordSetStatus({
      state: 'Starting a new game...',
    });
  }

  public chooseHero(hero: HeroContent) {
    this.chosenHero.set(hero);
  }

  public chooseStage(stage: StageContent) {
    this.chosenStage.set(stage);
  }

  public async createWorld() {
    const hero = this.chosenHero();
    const stage = this.chosenStage();
    if (!hero || !stage) return;

    gameReset();
    setWorldSeed(this.worldSeed());

    const createdHero = creatorPlayerHeroToGameEntityPlayer(hero);
    setPlayer(createdHero);

    setStage(stage);

    await this.router.navigate(['/setup', 'generate']);
  }
}
