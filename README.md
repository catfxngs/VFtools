# VFTools

<img src="https://remywiki.com/images/9/99/SDVX_EXCEED_GEAR.png" height=100px>

> [!NOTE]
> This is a work-in-progress.

VFTools is a simple web app created with NodeJS and React, originally by [Hoshikara](https://github.com/Hoshikara), with several utilities to calculate **VOLFORCE** (VF) targets.

*VOLFORCE* is a score representing player skill in Sound Voltex, based on their **Top 50** plays. While the algorithm used has some minor complexity, the tools provided should simplify the calculations. 

Currently, you can find score requirements needed to reach a desired target VF. A calculator for specific plays, among other features, will be available shortly.

You can read more about VF and how it's calculated at [BEMANIWiki 2nd](https://bemaniwiki.com/index.php?SOUND+VOLTEX+EXCEED+GEAR/VOLFORCE)!

## Local development

You will need [Node.JS](https://nodejs.org) installed.

CD to the project's directory.

`npm install`

`npm start`

A development server will start at [localhost:3000](localhost:3000).

> [!WARNING]
> Due to a [false positive](https://overreacted.io/npm-audit-broken-by-design/) in **react-scripts**, `npm audit` will display vulnerabilities. Run `npm audit --omit=dev` to hide this. 

## Credits

[Hoshikara](https://github.com/Hoshikara) for creating the original project.

[BEMANIWiki 2nd](https://bemaniwiki.com/index.php?SOUND+VOLTEX+EXCEED+GEAR/VOLFORCE) for breaking down and detailing the VF system.

[SOUND VOLTEX](https://p.eagate.573.jp/game/sdvx) is owned by Konami.
