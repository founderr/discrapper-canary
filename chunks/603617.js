"use strict";
n.r(t), n.d(t, {
  INVITE_OPTIONS_100_TIMES: function() {
    return d
  },
  INVITE_OPTIONS_10_TIMES: function() {
    return i
  },
  INVITE_OPTIONS_12_HOURS: function() {
    return c
  },
  INVITE_OPTIONS_1_DAY: function() {
    return N
  },
  INVITE_OPTIONS_1_HOUR: function() {
    return E
  },
  INVITE_OPTIONS_25_TIMES: function() {
    return I
  },
  INVITE_OPTIONS_30_MINUTES: function() {
    return T
  },
  INVITE_OPTIONS_50_TIMES: function() {
    return o
  },
  INVITE_OPTIONS_5_TIMES: function() {
    return r
  },
  INVITE_OPTIONS_6_HOURS: function() {
    return f
  },
  INVITE_OPTIONS_7_DAYS: function() {
    return S
  },
  INVITE_OPTIONS_FOREVER: function() {
    return O
  },
  INVITE_OPTIONS_ONCE: function() {
    return a
  },
  INVITE_OPTIONS_UNLIMITED: function() {
    return s
  },
  MAX_AGE_OPTIONS: function() {
    return m
  },
  MAX_USES_OPTIONS: function() {
    return _
  }
});
var l = n("689938");

function u(e, t) {
  return {
    value: e,
    get label() {
      return t()
    }
  }
}
let s = u(0, () => l.default.Messages.MAX_USES.format({
    maxUses: 0
  })),
  a = u(1, () => l.default.Messages.MAX_USES.format({
    maxUses: 1
  })),
  r = u(5, () => l.default.Messages.MAX_USES.format({
    maxUses: 5
  })),
  i = u(10, () => l.default.Messages.MAX_USES.format({
    maxUses: 10
  })),
  I = u(25, () => l.default.Messages.MAX_USES.format({
    maxUses: 25
  })),
  o = u(50, () => l.default.Messages.MAX_USES.format({
    maxUses: 50
  })),
  d = u(100, () => l.default.Messages.MAX_USES.format({
    maxUses: 100
  })),
  _ = [s, a, r, i, I, o, d],
  T = u(1800, () => l.default.Messages.DURATION_MINUTES.format({
    minutes: 30
  })),
  E = u(3600, () => l.default.Messages.DURATION_HOURS.format({
    hours: 1
  })),
  f = u(21600, () => l.default.Messages.DURATION_HOURS.format({
    hours: 6
  })),
  c = u(43200, () => l.default.Messages.DURATION_HOURS.format({
    hours: 12
  })),
  N = u(86400, () => l.default.Messages.DURATION_DAYS.format({
    days: 1
  })),
  S = u(604800, () => l.default.Messages.DURATION_DAYS.format({
    days: 7
  })),
  O = u(0, () => l.default.Messages.MAX_AGE_NEVER),
  m = [T, E, f, c, N, S, O]