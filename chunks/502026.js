"use strict";
n.r(t), n.d(t, {
  Text: function() {
    return Text
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("773179"),
  o = n.n(a),
  l = n("669491"),
  u = n("619974"),
  c = n("323805");
let d = Object.fromEntries(Object.keys(l.default.colors).map(e => [o.kebabCase(e), e])),
  Text = e => {
    let t, {
        variant: n,
        tag: r = "div",
        selectable: a = !1,
        className: o,
        lineClamp: p,
        color: h,
        tabularNumbers: f = !1,
        scaleFontToUserSetting: E = !1,
        ..._
      } = e,
      m = "",
      S = {};
    if (null != p && (1 === p ? m = u.lineClamp1 : (m = u.lineClamp2Plus, S = {
        lineClamp: p,
        WebkitLineClamp: p
      })), void 0 !== h) switch (h) {
      case "none":
        t = void 0;
        break;
      case "always-white":
        t = "white";
        break;
      default:
        var g;
        t = null === (g = l.default.colors[d[h]]) || void 0 === g ? void 0 : g.css
    }
    let T = {
      color: t,
      ...S,
      ..._.style
    };
    return (0, i.jsx)(r, {
      className: s({
        [u.defaultColor]: void 0 === h,
        [u.selectable]: a,
        [u.tabularNumbers]: f,
        [c.fontScaling]: E
      }, m, c[n], o),
      ..._,
      style: Object.values(T).filter(Boolean).length > 0 ? T : void 0,
      "data-text-variant": n
    })
  }