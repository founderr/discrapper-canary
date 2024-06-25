"use strict";
n.d(t, {
  x: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(803997),
  o = n.n(s),
  a = n(696689),
  l = n.n(a),
  u = n(692547),
  _ = n(951200),
  c = n(487204);
let d = Object.fromEntries(Object.keys(u.Z.colors).map(e => [l()(e), e])),
  E = r.forwardRef(function(e, t) {
    let n, {
        variant: r,
        tag: s = "div",
        selectable: a = !1,
        className: l,
        lineClamp: E,
        color: I,
        tabularNumbers: T = !1,
        scaleFontToUserSetting: h = !1,
        ...f
      } = e,
      S = "",
      A = {};
    if (null != E && (1 === E ? S = _.lineClamp1 : (S = _.lineClamp2Plus, A = {
        lineClamp: E,
        WebkitLineClamp: E
      })), void 0 !== I) switch (I) {
      case "currentColor":
        n = "currentColor";
        break;
      case "none":
        n = void 0;
        break;
      case "always-white":
        n = "white";
        break;
      default:
        var N;
        n = null === (N = u.Z.colors[d[I]]) || void 0 === N ? void 0 : N.css
    }
    let m = {
      color: n,
      ...A,
      ...f.style
    };
    return (0, i.jsx)(s, {
      ref: t,
      className: o()({
        [_.defaultColor]: void 0 === I,
        [_.selectable]: a,
        [_.tabularNumbers]: T,
        [c.fontScaling]: h
      }, S, c[r], l),
      ...f,
      style: Object.values(m).filter(Boolean).length > 0 ? m : void 0,
      "data-text-variant": r
    })
  })