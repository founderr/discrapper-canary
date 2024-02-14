"use strict";
E.r(_), E.d(_, {
  default: function() {
    return N
  }
}), E("222007");
var t = E("689988"),
  o = E("709681");
let n = (0, o.createSound)("vibing_wumpus", "vibing_wumpus", 0),
  a = 0,
  r = 0,
  i = null;

function I() {
  let e = .2 * (r - a);
  e > 0 && a >= r || e < 0 && a <= r ? (clearInterval(i), 0 === r && n.stop()) : (a += e, n.volume = a)
}

function T() {
  r = 0, i = setInterval(I, 100)
}

function s() {
  n.loop(), r = .5, i = setInterval(I, 100)
}
class S extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      VIBING_WUMPUS_PLAY_MUSIC: s,
      VIBING_WUMPUS_STOP_MUSIC: T
    }
  }
}
var N = new S