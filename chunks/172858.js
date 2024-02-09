"use strict";
r.r(t), r.d(t, {
  DUCK_CONFETTI_SPRITE: function() {
    return n
  },
  COMMON_CONFETTI_COLORS: function() {
    return i
  },
  COMMON_CONFETTI_SPRITES: function() {
    return l
  },
  COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
    return u
  },
  COMMON_CONFETTI_BASE_CONFIG: function() {
    return o
  },
  COMMON_CONFETTI_ENVIRONMENT: function() {
    return c
  }
});
var a = r("516555"),
  s = r("839491");
let n = s,
  i = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
  l = [r("606863"), n, r("164654"), r("540346"), r("526094"), r("367469"), r("23933"), {
    src: r("283397"),
    colorize: !1
  }],
  u = 28,
  o = {
    velocity: {
      type: "static-random",
      minValue: {
        x: 30,
        y: -80
      },
      maxValue: {
        x: -30,
        y: -180
      }
    },
    rotation: {
      type: "linear-random",
      minValue: 0,
      maxValue: 360,
      minAddValue: -25,
      maxAddValue: 25
    },
    size: {
      type: "static-random",
      minValue: 14,
      maxValue: u
    }
  },
  c = new a.Environment