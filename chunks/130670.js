"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("753671"),
  a = n("757367"),
  o = n("320959"),
  i = n("383143");

function u(e, t, n) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  var u = e.getBoundingClientRect(),
    s = 1,
    l = 1;
  t && (0, r.isHTMLElement)(e) && (s = e.offsetWidth > 0 && (0, a.round)(u.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && (0, a.round)(u.height) / e.offsetHeight || 1);
  var c = ((0, r.isElement)(e) ? (0, o.default)(e) : window).visualViewport,
    f = !(0, i.default)() && n,
    d = (u.left + (f && c ? c.offsetLeft : 0)) / s,
    p = (u.top + (f && c ? c.offsetTop : 0)) / l,
    h = u.width / s,
    m = u.height / l;
  return {
    width: h,
    height: m,
    top: p,
    right: d + h,
    bottom: p + m,
    left: d,
    x: d,
    y: p
  }
}