"use strict";
var i, r, s, a, o, l, u, d;
n.r(t), n.d(t, {
  CommonTriggerPoints: function() {
    return a
  },
  ExperimentBuckets: function() {
    return i
  },
  ExperimentTypes: function() {
    return r
  },
  ExposureTypes: function() {
    return s
  },
  TriggerDebuggingAAExperiments: function() {
    return E
  },
  guildTriggerExperimentId: function() {
    return c
  },
  userTriggerExperimentId: function() {
    return _
  }
}), (o = i || (i = {}))[o.NOT_ELIGIBLE = -1] = "NOT_ELIGIBLE", o[o.CONTROL = 0] = "CONTROL", o[o.TREATMENT_1 = 1] = "TREATMENT_1", o[o.TREATMENT_2 = 2] = "TREATMENT_2", o[o.TREATMENT_3 = 3] = "TREATMENT_3", o[o.TREATMENT_4 = 4] = "TREATMENT_4", o[o.TREATMENT_5 = 5] = "TREATMENT_5", o[o.TREATMENT_6 = 6] = "TREATMENT_6", o[o.TREATMENT_7 = 7] = "TREATMENT_7", o[o.TREATMENT_8 = 8] = "TREATMENT_8", o[o.TREATMENT_9 = 9] = "TREATMENT_9", o[o.TREATMENT_10 = 10] = "TREATMENT_10", o[o.TREATMENT_11 = 11] = "TREATMENT_11", o[o.TREATMENT_12 = 12] = "TREATMENT_12", o[o.TREATMENT_13 = 13] = "TREATMENT_13", o[o.TREATMENT_14 = 14] = "TREATMENT_14", o[o.TREATMENT_15 = 15] = "TREATMENT_15", o[o.TREATMENT_16 = 16] = "TREATMENT_16", o[o.TREATMENT_17 = 17] = "TREATMENT_17", o[o.TREATMENT_18 = 18] = "TREATMENT_18", o[o.TREATMENT_19 = 19] = "TREATMENT_19", o[o.TREATMENT_20 = 20] = "TREATMENT_20", o[o.TREATMENT_21 = 21] = "TREATMENT_21", o[o.TREATMENT_22 = 22] = "TREATMENT_22", o[o.TREATMENT_23 = 23] = "TREATMENT_23", o[o.TREATMENT_24 = 24] = "TREATMENT_24", o[o.TREATMENT_25 = 25] = "TREATMENT_25", (l = r || (r = {})).NONE_LEGACY = "none", l.GUILD = "guild", l.USER = "user", (u = s || (s = {})).MANUAL = "manual", u.AUTO = "auto", u.AUTO_FALLBACK = "auto_fallback";
let _ = "2023-10_triggerdebuggingaa",
  c = "2023-10_guildaa",
  E = [_, c];
(d = a || (a = {}))[d.NONE = 0] = "NONE", d[d.POST_CONNECTION_OPEN = 1] = "POST_CONNECTION_OPEN"