t.r(n), t.d(n, {
  INVITE_OPTIONS_100_TIMES: function() {
    return E
  },
  INVITE_OPTIONS_10_TIMES: function() {
    return a
  },
  INVITE_OPTIONS_12_HOURS: function() {
    return T
  },
  INVITE_OPTIONS_1_DAY: function() {
    return S
  },
  INVITE_OPTIONS_1_HOUR: function() {
    return N
  },
  INVITE_OPTIONS_25_TIMES: function() {
    return I
  },
  INVITE_OPTIONS_30_MINUTES: function() {
    return _
  },
  INVITE_OPTIONS_50_TIMES: function() {
    return o
  },
  INVITE_OPTIONS_5_TIMES: function() {
    return u
  },
  INVITE_OPTIONS_6_HOURS: function() {
    return d
  },
  INVITE_OPTIONS_7_DAYS: function() {
    return O
  },
  INVITE_OPTIONS_FOREVER: function() {
    return f
  },
  INVITE_OPTIONS_ONCE: function() {
    return r
  },
  INVITE_OPTIONS_UNLIMITED: function() {
    return s
  },
  MAX_AGE_OPTIONS: function() {
    return h
  },
  MAX_USES_OPTIONS: function() {
    return c
  }
});
var l = t(689938);

function i(e, n) {
  return {
    value: e,
    get label() {
      return n()
    }
  }
}
let s = i(0, () => l.Z.Messages.MAX_USES.format({
    maxUses: 0
  })),
  r = i(1, () => l.Z.Messages.MAX_USES.format({
    maxUses: 1
  })),
  u = i(5, () => l.Z.Messages.MAX_USES.format({
    maxUses: 5
  })),
  a = i(10, () => l.Z.Messages.MAX_USES.format({
    maxUses: 10
  })),
  I = i(25, () => l.Z.Messages.MAX_USES.format({
    maxUses: 25
  })),
  o = i(50, () => l.Z.Messages.MAX_USES.format({
    maxUses: 50
  })),
  E = i(100, () => l.Z.Messages.MAX_USES.format({
    maxUses: 100
  })),
  c = [s, r, u, a, I, o, E],
  _ = i(1800, () => l.Z.Messages.DURATION_MINUTES.format({
    minutes: 30
  })),
  N = i(3600, () => l.Z.Messages.DURATION_HOURS.format({
    hours: 1
  })),
  d = i(21600, () => l.Z.Messages.DURATION_HOURS.format({
    hours: 6
  })),
  T = i(43200, () => l.Z.Messages.DURATION_HOURS.format({
    hours: 12
  })),
  S = i(86400, () => l.Z.Messages.DURATION_DAYS.format({
    days: 1
  })),
  O = i(604800, () => l.Z.Messages.DURATION_DAYS.format({
    days: 7
  })),
  f = i(0, () => l.Z.Messages.MAX_AGE_NEVER),
  h = [_, N, d, T, S, O, f]