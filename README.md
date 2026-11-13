# Ash Chronicles

An unofficial, noncommercial, interactive fan archive of Ash Ketchum's major anime journey. Original generated pixel scenes, translucent glass interfaces, chapter exploration, heroic moments, a champion-team explorer, and a small electric-charge game.

**Live:** https://nx9161.github.io/ash-chronicles/

## Run locally

No build or dependency installation required. From this directory:

```sh
python3 -m http.server 4173
```

Open http://localhost:4173. The site uses relative asset paths and works under the GitHub Pages repository subpath.

## Publishing

GitHub Pages publishes the root of `feat/ash-chronicles`. The initial implementation is offered as a pull request against `main`; it has not been merged by the agent. A push to the publishing branch updates the live site. After owner review and merge, the Pages source may be switched to `main`.

```sh
gh api --method PUT repos/nx9161/ash-chronicles/pages -f 'source[branch]=feat/ash-chronicles' -f 'source[path]=/'
```

## Content and artwork

This is a curated overview of all major Ash anime arcs, not an episode-by-episode encyclopedia. Journeys spans regions; Battle Frontier takes Ash back to Kanto. Becoming World Champion does not end his open-ended dream of being a Pokémon Master.

- [Official World Champion announcement](https://press.pokemon.com/en-NZ/ASH-KETCHUM-BECOMES-WORLD-CHAMPION)
- [Official farewell summary](https://www.pokemon.com/uk/news/watch-the-final-episodes-of-pokemon-ultimate-journeys-the-series-on-pop-uk)
- [Pokémon Journeys](https://www.pokemon.com/uk/animation/seasons/23)
- [League placements reference](https://bulbapedia.bulbagarden.net/wiki/Ash_Ketchum#Achievements)

The three scenes were generated with the built-in image-generation tool for this project. They are artistic interpretations, not official episode frames. Prompts are documented in [ARTWORK.md](ARTWORK.md). Optimized JPEGs are used on the site; PNG originals are retained in `assets/`.

Unofficial, noncommercial fan project; not affiliated with or endorsed by Pokémon, Nintendo, Creatures, or GAME FREAK. Pokémon characters and names belong to their respective rights holders. No rights to those characters are granted by this repository.

## Privacy and accessibility

No backend, accounts, analytics, third-party scripts, or runtime AI. Chapter progress is stored only in the visitor's browser when storage is available. Sound requires an explicit opt-in. The interface supports keyboard navigation, visible focus, reduced motion, and responsive layouts.
