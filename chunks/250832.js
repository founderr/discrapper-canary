"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("476263"),
  r = n("328413"),
  o = n("550473"),
  u = function(e) {
    let {
      guild: t,
      children: n
    } = e, a = null != t ? (0, l.jsx)(i.default, {
      guild: t,
      size: i.default.Sizes.MEDIUM,
      className: s(o.icon, null == t.icon ? o.textIcon : o.imageIcon),
      active: !0
    }) : null;
    return (0, l.jsxs)("span", {
      children: [(0, l.jsx)(r.default, {
        children: a
      }), (0, l.jsx)("span", {
        className: o.name,
        children: n
      })]
    })
  }