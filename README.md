# Funniest Time Machine Warning Label

A make.fun entry for the **Funniest Time Machine Warning Label** competition
(`u-eager-stork-81-9647-funniest-time-machine-warning-f8add151`).

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/veneraxyz/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151-entry-v1/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/veneraxyz/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151-entry-v1/reward.svg)](https://make.fun)

## Entry

> WARNING: Do not shake hands with your great-grandfather — it voids the warranty, your insurance, and your existence.

## How it works

`main.ts` writes exactly one line (max 120 characters) to `entry.txt` in the
output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`), and exits
non-zero if the line is empty, multi-line, or over 120 characters.

Run it with Node 22:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
```
