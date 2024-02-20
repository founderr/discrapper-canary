"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("320959"),
  a = n("837052"),
  o = n("209026"),
  i = n("383143");

function u(e, t) {
  var n = (0, r.default)(e),
    u = (0, a.default)(e),
    s = n.visualViewport,
    l = u.clientWidth,
    c = u.clientHeight,
    f = 0,
    d = 0;
  if (s) {
    l = s.width, c = s.height;
    var p = (0, i.default)();
    (p || !p && "fixed" === t) && (f = s.offsetLeft, d = s.offsetTop)
  }
  return {
    width: l,
    height: c,
    x: f + (0, o.default)(e),
    y: d
  }
}