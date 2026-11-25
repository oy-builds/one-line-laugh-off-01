[![make.fun · u-zkhiel-one-line-laugh-off-714618ae](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)
[![rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/oy-builds/one-line-laugh-off-01/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)
[![reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/oy-builds/one-line-laugh-off-01/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae?utm_source=github&utm_medium=readme&utm_campaign=u-zkhiel-one-line-laugh-off-714618ae)
# One-Line Laugh-Off — The Cloud's Customer Survey

Entry for the [One-Line Laugh-Off](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae) on make.fun: a single joke about software behaving like a passive-aggressive coworker — the cloud loses your file, then politely asks you to rate the experience.

`main.ts` (Node 22, standard library only) writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validates it against the competition gate (UTF-8, 1–200 characters, single line, no leading/trailing whitespace, no control characters), then reads the file back and verifies it matches byte for byte.

## The joke

> The cloud ate my file, then sent me a survey asking how my experience was.

74 characters, one line, deterministic — two runs produce byte-identical output.

## Run

```sh
node main.ts
```
