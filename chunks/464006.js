"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("837052"),
  a = n("593882"),
  o = n("209026"),
  i = n("516925"),
  u = n("757367");

function s(e) {
  var t, n = (0, r.default)(e),
    s = (0, i.default)(e),
    l = null == (t = e.ownerDocument) ? void 0 : t.body,
    c = (0, u.max)(n.scrollWidth, n.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0),
    f = (0, u.max)(n.scrollHeight, n.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0),
    d = -s.scrollLeft + (0, o.default)(e),
    p = -s.scrollTop;
  return "rtl" === (0, a.default)(l || n).direction && (d += (0, u.max)(n.clientWidth, l ? l.clientWidth : 0) - c), {
    width: c,
    height: f,
    x: d,
    y: p
  }
}