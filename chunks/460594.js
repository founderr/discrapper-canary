"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("834779"),
  a = n("559610"),
  o = n("63173"),
  i = n("567703"),
  u = n("475319");

function s(e, t) {
  (0, a.default)(1, arguments);
  var n, s, l, c, f, d, p, h, m = (0, u.getDefaultOptions)(),
    _ = (0, i.default)(null !== (n = null !== (s = null !== (l = null !== (c = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== c ? c : null == t ? void 0 : null === (f = t.locale) || void 0 === f ? void 0 : null === (d = f.options) || void 0 === d ? void 0 : d.firstWeekContainsDate) && void 0 !== l ? l : m.firstWeekContainsDate) && void 0 !== s ? s : null === (p = m.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.firstWeekContainsDate) && void 0 !== n ? n : 1),
    y = (0, r.default)(e, t),
    g = new Date(0);
  return g.setUTCFullYear(y, 0, _), g.setUTCHours(0, 0, 0, 0), (0, o.default)(g, t)
}