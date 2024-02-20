"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("195548"),
  a = n("794230"),
  o = n("774728"),
  i = n("697309");

function u(e) {
  var t, n = e.reference,
    u = e.element,
    s = e.placement,
    l = s ? (0, r.default)(s) : null,
    c = s ? (0, a.default)(s) : null,
    f = n.x + n.width / 2 - u.width / 2,
    d = n.y + n.height / 2 - u.height / 2;
  switch (l) {
    case i.top:
      t = {
        x: f,
        y: n.y - u.height
      };
      break;
    case i.bottom:
      t = {
        x: f,
        y: n.y + n.height
      };
      break;
    case i.right:
      t = {
        x: n.x + n.width,
        y: d
      };
      break;
    case i.left:
      t = {
        x: n.x - u.width,
        y: d
      };
      break;
    default:
      t = {
        x: n.x,
        y: n.y
      }
  }
  var p = l ? (0, o.default)(l) : null;
  if (null != p) {
    var h = "y" === p ? "height" : "width";
    switch (c) {
      case i.start:
        t[p] = t[p] - (n[h] / 2 - u[h] / 2);
        break;
      case i.end:
        t[p] = t[p] + (n[h] / 2 - u[h] / 2)
    }
  }
  return t
}