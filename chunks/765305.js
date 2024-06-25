"use strict";
n.d(t, {
  $I: function() {
    return R
  },
  Fc: function() {
    return D
  },
  Ku: function() {
    return p
  },
  VF: function() {
    return M
  },
  WX: function() {
    return r
  },
  X_: function() {
    return l
  },
  _U: function() {
    return C
  },
  fL: function() {
    return a
  },
  gG: function() {
    return m
  },
  gv: function() {
    return u
  },
  j8: function() {
    return o
  },
  nz: function() {
    return g
  },
  p: function() {
    return A
  },
  p1: function() {
    return i
  },
  pg: function() {
    return v
  },
  rC: function() {
    return L
  },
  sy: function() {
    return s
  },
  wm: function() {
    return N
  },
  zV: function() {
    return P
  },
  zw: function() {
    return O
  }
}), n(47120);
var i, r, s, o, a, l, u, _, c, d, E, I, T, h, f = n(70956),
  S = n(981631);
let A = 100,
  N = 1e3,
  m = 100,
  O = "Guild Events Modal",
  p = "-1";
(_ = i || (i = {}))[_.SCHEDULED = 1] = "SCHEDULED", _[_.ACTIVE = 2] = "ACTIVE", _[_.COMPLETED = 3] = "COMPLETED", _[_.CANCELED = 4] = "CANCELED";
let R = new Set([3, 4]);
(c = r || (r = {}))[c.NONE = 0] = "NONE", c[c.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", c[c.VOICE = 2] = "VOICE", c[c.EXTERNAL = 3] = "EXTERNAL", c[c.PRIME_TIME = 4] = "PRIME_TIME", (d = s || (s = {}))[d.EVENT_START = 1] = "EVENT_START", (E = o || (o = {}))[E.PUBLIC = 1] = "PUBLIC", E[E.GUILD_ONLY = 2] = "GUILD_ONLY";
let g = {
    1: S.d4z.GUILD_STAGE_VOICE,
    2: S.d4z.GUILD_VOICE
  },
  C = new Set([3]),
  v = new Set([1, 2]);
(I = a || (a = {}))[I.EVENT_INFO = 0] = "EVENT_INFO", I[I.RSVP_LIST = 1] = "RSVP_LIST";
let L = 100,
  D = 2 * f.Z.Millis.DAY,
  M = 12 * f.Z.Millis.HOUR,
  P = 4;
(T = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", T.EVENT_STARTING_SOON = "Event Starting Soon Notice", (h = u || (u = {}))[h.UNINTERESTED = 0] = "UNINTERESTED", h[h.INTERESTED = 1] = "INTERESTED"