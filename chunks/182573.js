"use strict";
n.r(t), n("47120");
var i = n("147913"),
  r = n("710845"),
  s = n("880027");
let a = new r.default("LeagueOfLegendsLifecycleManager");
class o extends i.default {
  handleRunningGameChange(e) {
    let {
      added: t,
      removed: n
    } = e;

    function i(e) {
      return e.some(e => "League of Legends" === e.name)
    }(0, s.isEligibleForLeaderboard)("LeagueOfLegendsLifecycleManager") && (i(t) && a.info("League of Legends Match Started", {
      added: t
    }), i(n) && a.info("League of Legends Match Ended", {
      removed: n
    }))
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      RUNNING_GAMES_CHANGE: this.handleRunningGameChange
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = new o