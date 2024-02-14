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
  i = 0,
  r = null;

function I() {
  let e = .2 * (i - a);
  e > 0 && a >= i || e < 0 && a <= i ? (clearInterval(r), 0 === i && n.stop()) : (a += e, n.volume = a)
}

function T() {
  i = 0, r = setInterval(I, 100)
}

function s() {
  n.loop(), i = .5, r = setInterval(I, 100)
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