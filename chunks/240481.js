"use strict";
n.r(t), n.d(t, {
  shortenAndLocalizeNumber: function() {
    return r
  },
  parseInteger: function() {
    return s
  }
});
var i = n("782340");

function r(e) {
  if (e < 1e6) return i.default.Messages.NUMBER_ABBREVIATION_FULL.format({
    value: e
  });
  let t = (e / 1e6).toFixed(1);
  return i.default.Messages.NUMBER_ABBREVIATION_MILLIONS.format({
    value: t
  })
}

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
  if (null == e) return t;
  let n = parseInt(e);
  return Number.isNaN(n) ? t : n
}