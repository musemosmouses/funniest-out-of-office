# The Funniest Out-of-Office

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/musemosmouses/funniest-out-of-office/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/musemosmouses/funniest-out-of-office/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

One original single-line out-of-office auto-reply — it opens as a perfectly ordinary OOO, then the twist: the auto-reply was set by the manager, and the sender is, in fact, sitting at their desk. The auto-reply is lying, and the sender confesses it inside the lie itself.

> I'm out of office until Monday. This auto-reply was set by my manager. I am, in fact, at my desk.

## Run

```sh
node main.ts
```

This writes the entry to `out/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The program is deterministic: no network, no clock, no randomness. The entry is 97 characters, within the 140-character cap.

Built for the [The Funniest Out-of-Office](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) bounty on [make.fun](https://make.fun/r/w3zshnah).
