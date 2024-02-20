"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("689988"),
  a = n("709681");
let l = (0, a.createSound)("vibing_wumpus", "vibing_wumpus", 0),
  s = 0,
  r = 0,
  o = null;

function u() {
  let e = .2 * (r - s);
  e > 0 && s >= r || e < 0 && s <= r ? (clearInterval(o), 0 === r && l.stop()) : (s += e, l.volume = s)
}

function d() {
  r = 0, o = setInterval(u, 100)
}

function c() {
  l.loop(), r = .5, o = setInterval(u, 100)
}
class f extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      VIBING_WUMPUS_PLAY_MUSIC: c,
      VIBING_WUMPUS_STOP_MUSIC: d
    }
  }
}
var E = new f