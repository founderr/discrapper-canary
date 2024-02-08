"use strict";
n.r(t), n.d(t, {
  INVITE_OPTIONS_UNLIMITED: function() {
    return s
  },
  INVITE_OPTIONS_ONCE: function() {
    return l
  },
  INVITE_OPTIONS_5_TIMES: function() {
    return i
  },
  INVITE_OPTIONS_10_TIMES: function() {
    return a
  },
  INVITE_OPTIONS_25_TIMES: function() {
    return r
  },
  INVITE_OPTIONS_50_TIMES: function() {
    return _
  },
  INVITE_OPTIONS_100_TIMES: function() {
    return E
  },
  MAX_USES_OPTIONS: function() {
    return S
  },
  INVITE_OPTIONS_30_MINUTES: function() {
    return T
  },
  INVITE_OPTIONS_1_HOUR: function() {
    return f
  },
  INVITE_OPTIONS_6_HOURS: function() {
    return N
  },
  INVITE_OPTIONS_12_HOURS: function() {
    return O
  },
  INVITE_OPTIONS_1_DAY: function() {
    return d
  },
  INVITE_OPTIONS_7_DAYS: function() {
    return o
  },
  INVITE_OPTIONS_FOREVER: function() {
    return g
  },
  MAX_AGE_OPTIONS: function() {
    return M
  }
});
var u = n("782340");

function I(e, t) {
  return {
    value: e,
    get label() {
      return t()
    }
  }
}
let s = I(0, () => u.default.Messages.MAX_USES.format({
    maxUses: 0
  })),
  l = I(1, () => u.default.Messages.MAX_USES.format({
    maxUses: 1
  })),
  i = I(5, () => u.default.Messages.MAX_USES.format({
    maxUses: 5
  })),
  a = I(10, () => u.default.Messages.MAX_USES.format({
    maxUses: 10
  })),
  r = I(25, () => u.default.Messages.MAX_USES.format({
    maxUses: 25
  })),
  _ = I(50, () => u.default.Messages.MAX_USES.format({
    maxUses: 50
  })),
  E = I(100, () => u.default.Messages.MAX_USES.format({
    maxUses: 100
  })),
  S = [s, l, i, a, r, _, E],
  T = I(1800, () => u.default.Messages.DURATION_MINUTES.format({
    minutes: 30
  })),
  f = I(3600, () => u.default.Messages.DURATION_HOURS.format({
    hours: 1
  })),
  N = I(21600, () => u.default.Messages.DURATION_HOURS.format({
    hours: 6
  })),
  O = I(43200, () => u.default.Messages.DURATION_HOURS.format({
    hours: 12
  })),
  d = I(86400, () => u.default.Messages.DURATION_DAYS.format({
    days: 1
  })),
  o = I(604800, () => u.default.Messages.DURATION_DAYS.format({
    days: 7
  })),
  g = I(0, () => u.default.Messages.MAX_AGE_NEVER),
  M = [T, f, N, O, d, o, g]