"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("866227"),
  l = n.n(a),
  r = n("599110"),
  o = n("49111");

function s(e, t) {
  r.default.track(o.AnalyticEvents.AGE_GATE_SUBMITTED, {
    dob: 18 > l().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
    dob_day: e.date(),
    dob_month: e.month() + 1,
    dob_year: e.year(),
    source: {
      section: t
    }
  })
}