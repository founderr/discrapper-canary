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
  e > 0 && r >= i || e < 0 && r <= i ? (clearInterval(a), 0 === i && n.stop()) : (r += e, n.volume = r)
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