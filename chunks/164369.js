"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var r = n("991656"),
  i = n("70597"),
  a = n("991998"),
  o = n("896662"),
  s = n("573347"),
  u = n("536403"),
  c = n("188650"),
  l = n("291750"),
  d = n("528734"),
  f = n("951516");

function p(e) {
  (0, f.default)(1, arguments);
  var t = (0, d.default)(e.start),
    n = (0, d.default)(e.end);
  if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
  if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
  var p = {};
  p.years = Math.abs((0, l.default)(n, t));
  var h = (0, r.default)(n, t),
    m = (0, i.default)(t, {
      years: h * p.years
    });
  p.months = Math.abs((0, u.default)(n, m));
  var g = (0, i.default)(m, {
    months: h * p.months
  });
  p.days = Math.abs((0, a.default)(n, g));
  var _ = (0, i.default)(g, {
    days: h * p.days
  });
  p.hours = Math.abs((0, o.default)(n, _));
  var b = (0, i.default)(_, {
    hours: h * p.hours
  });
  p.minutes = Math.abs((0, s.default)(n, b));
  var v = (0, i.default)(b, {
    minutes: h * p.minutes
  });
  return p.seconds = Math.abs((0, c.default)(n, v)), p
}