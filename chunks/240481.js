"use strict";
n.r(t), n.d(t, {
  shortenAndLocalizeNumber: function() {
    return i
  },
  parseInteger: function() {
    return o
  },
  formatPercent: function() {
    return l
  }
});
var r = n("782340");

function i(e) {
  if (e < 1e6) return r.default.Messages.NUMBER_ABBREVIATION_FULL.format({
    value: e
  });
  let t = (e / 1e6).toFixed(1);
  return r.default.Messages.NUMBER_ABBREVIATION_MILLIONS.format({
    value: t
  })
}

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
  if (null == e) return t;
  let n = parseInt(e);
  return Number.isNaN(n) ? t : n
}

function l(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return Intl.NumberFormat(e, {
    style: "percent",
    minimumFractionDigits: 0,
    ...n
  }).format(t)
}