"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("70102");
var r = n("475319"),
  a = n("386242"),
  o = n("567703"),
  i = n("559610");

function u(e, t) {
  (0, i.default)(1, arguments);
  var n, u, s, l, c, f, d, p, h = (0, r.getDefaultOptions)(),
    m = (0, o.default)(null !== (n = null !== (u = null !== (s = null !== (l = null == t ? void 0 : t.weekStartsOn) && void 0 !== l ? l : null == t ? void 0 : null === (c = t.locale) || void 0 === c ? void 0 : null === (f = c.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== s ? s : h.weekStartsOn) && void 0 !== u ? u : null === (d = h.locale) || void 0 === d ? void 0 : null === (p = d.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== n ? n : 0);
  if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var _ = (0, a.default)(e),
    y = _.getDay();
  return _.setDate(_.getDate() + ((y < m ? -7 : 0) + 6 - (y - m))), _.setHours(23, 59, 59, 999), _
}