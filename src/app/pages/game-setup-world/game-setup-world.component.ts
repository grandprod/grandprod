import type { OnInit } from '@angular/core';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentNameComponent } from '@components/content-name/content-name.component';
import { IconHeroComponent } from '@components/icon-hero/icon-hero.component';
import { IconWeaponComponent } from '@components/icon-weapon/icon-weapon.component';
import { SFXDirective } from '@directives/sfx.directive';
import {
  discordSetStatus,
  gameReset,
  getEntriesByType,
  getEntry,
  setWorldSeed,
} from '@helpers';
import type { GameStat, WeaponContent } from '@interfaces';
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
  ],
  templateUrl: './game-setup-world.component.html',
  styleUrl: './game-setup-world.component.scss',
})
export class GameSetupWorldComponent implements OnInit {
  private router = inject(Router);

  public worldSeed = signal<string | undefined>(undefined);

  public chosenHero = signal<HeroContent | undefined>(undefined);

  public allHeroes = computed(() => getEntriesByType<HeroContent>('hero'));
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

  public async createWorld() {
    gameReset();
    setWorldSeed(this.worldSeed());

    await this.router.navigate(['/setup', 'generate']);
  }
}
