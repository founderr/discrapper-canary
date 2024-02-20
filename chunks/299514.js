"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("70102");
var r = n("386242"),
  a = n("559610"),
  o = n("567703"),
  i = n("475319");

function u(e, t, n) {
  (0, a.default)(2, arguments);
  var u, s, l, c, f, d, p, h, m = (0, i.getDefaultOptions)(),
    _ = (0, o.default)(null !== (u = null !== (s = null !== (l = null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c ? c : null == n ? void 0 : null === (f = n.locale) || void 0 === f ? void 0 : null === (d = f.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== l ? l : m.weekStartsOn) && void 0 !== s ? s : null === (p = m.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.weekStartsOn) && void 0 !== u ? u : 0);
  if (!(_ >= 0 && _ <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = (0, r.default)(e),
    g = (0, o.default)(t),
    v = y.getUTCDay();
  return y.setUTCDate(y.getUTCDate() + (((g % 7 + 7) % 7 < _ ? 7 : 0) + g - v)), y
}