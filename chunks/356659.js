"use strict";
n.d(t, {
  A5: function() {
    return k
  },
  B2: function() {
    return m
  },
  Bg: function() {
    return f
  },
  D5: function() {
    return _
  },
  D_: function() {
    return E
  },
  EF: function() {
    return h
  },
  G$: function() {
    return I
  },
  HW: function() {
    return R
  },
  Hp: function() {
    return O
  },
  JO: function() {
    return M
  },
  Kw: function() {
    return y
  },
  MG: function() {
    return g
  },
  OT: function() {
    return a
  },
  Qr: function() {
    return v
  },
  Ut: function() {
    return C
  },
  WM: function() {
    return S
  },
  X9: function() {
    return u
  },
  XH: function() {
    return p
  },
  _U: function() {
    return B
  },
  dJ: function() {
    return l
  },
  f_: function() {
    return L
  },
  i$: function() {
    return G
  },
  jF: function() {
    return T
  },
  ji: function() {
    return b
  },
  jp: function() {
    return U
  },
  mg: function() {
    return N
  },
  nU: function() {
    return A
  },
  wD: function() {
    return D
  },
  xd: function() {
    return x
  },
  xx: function() {
    return w
  },
  yl: function() {
    return P
  }
});
var i, r, s, o, a, l, u, _, c = n(710845),
  d = n(70956);
(i = a || (a = {}))[i.SECONDS_30 = 30 * d.Z.Millis.SECOND] = "SECONDS_30", i[i.MINUTES_1 = d.Z.Millis.MINUTE] = "MINUTES_1", i[i.MINUTES_2 = 2 * d.Z.Millis.MINUTE] = "MINUTES_2", (r = l || (l = {}))[r.ALL = 0] = "ALL", r[r.FRIENDS = 1] = "FRIENDS", (s = u || (u = {})).DECOUPLED = "decoupled", s.VIEWER = "viewer", s.STREAMER = "streamer", (o = _ || (_ = {}))[o.Error = 0] = "Error", o[o.Disabled = 1] = "Disabled", o[o.Enabled = 2] = "Enabled";
let E = "alt+c",
  I = 6 * d.Z.Millis.SECOND,
  T = new c.Z("Clips"),
  h = e => "Discord_Clip_".concat(e, ".mp4"),
  f = 3,
  S = 1,
  A = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  N = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
  m = /(Apple M[12].*)/,
  O = .1,
  R = 25,
  p = 0,
  g = 200,
  C = "clips-edit",
  v = "clips-gallery",
  L = 640,
  D = 360,
  M = 100,
  P = e => "Clip - ".concat(new Date(e).toLocaleString()),
  y = 15,
  U = 3e4,
  b = 30,
  G = 10,
  w = 14 * d.Z.Millis.DAY,
  B = 5,
  x = 5,
  k = 1