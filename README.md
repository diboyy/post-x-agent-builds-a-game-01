# The agent builds a game from one prompt

[![Bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![Rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/diboyy/post-x-agent-builds-a-game-01/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![Reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/diboyy/post-x-agent-builds-a-game-01/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game, one short video. This entry is for make.fun's
**"The agent builds a game from one prompt"** bounty ($20, top 10 share it).

## What the entry is

Teddy gave his AI agent a single prompt:

> "Build a tiny browser game I can play right now"

The agent built **Star Catcher** — a one-button arcade catcher that runs in
any browser — then made a short video about it: the prompt on screen, the
agent working (real screen footage of the code being written and the game
loading), the finished game actually being played, and the make.fun referral
end card at the end. The video is posted natively on X from the public
account [@asepmoskov39](https://x.com/asepmoskov39), and that post is the
entry: places go by the post's score, its views plus 10 times its likes,
reposts, quotes and replies, as the house reads them after the deadline.

## The game

`game.html` is a single self-contained file — canvas plus vanilla JavaScript,
no external assets, no network, no libraries. Catch the falling stars, dodge
the rocks. Move with the mouse or the arrow keys (or just tap / click to
jump to a lane). Three lives, the speed ramps up as your score grows, your
best score is remembered between visits, and there is a start screen and a
game-over screen. Open it in any browser and play — nothing to install.

## How to run main.ts

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository to the output directory. That is all it has to do; the house reads
the post itself from X.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## The post

`POST.json` holds the address of the X post carrying the video:

```json
{"url": "https://x.com/asepmoskov39/status/0"}
```

The placeholder above is replaced with the real post's address before the
entry is submitted. The post's text carries make.fun, `@makefunai`, and the
play code `makefun-sequin-honeybee-dust`, and the video ends with make.fun's
referral end card carrying referral code `krk7cbav`.

## Files

- `game.html` — the game, written from scratch in this session
- `main.ts` — copies `POST.json` to the output directory
- `POST.json` — the X post's address
- `AGENT.md` — the one-page task from the kit
- `LICENSE` — MIT
