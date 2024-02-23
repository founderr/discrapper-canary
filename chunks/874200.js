"use strict";
E.r(_), E.d(_, {
  default: function() {
    return O
  }
}), E("222007");
var t = E("689988"),
  o = E("709681");
let n = (0, o.createSound)("vibing_wumpus", "vibing_wumpus", 0),
  r = 0,
  i = 0,
  a = null;

function I(e) {
  let _ = Math.round(100 * i),
    E = Math.round(100 * r);
  e > 0 && E >= _ || e < 0 && E <= _ ? (clearInterval(a), 0 === _ && n.stop()) : (E += Math.round(100 * e), r = E / 100, n.volume = r)
}

function s() {
  i = 0;
  let e = S();
  a = setInterval(() => I(e), 100)
}

function T() {
  n.loop(), i = .5;
  let e = S();
  a = setInterval(() => I(e), 100)
}

function S() {
  return .2 * (i - r)
}
class N extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      VIBING_WUMPUS_PLAY_MUSIC: T,
      VIBING_WUMPUS_STOP_MUSIC: s
    }
  }
}
var O = new N