"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("846822"),
  s = n("827622"),
  u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  };
t.default = (0, o.handleFocus)(function(e) {
  var t = e.color,
    n = e.style,
    r = e.onClick,
    o = void 0 === r ? function() {} : r,
    c = e.onHover,
    l = e.title,
    d = void 0 === l ? t : l,
    f = e.children,
    p = e.focus,
    h = e.focusStyle,
    m = "transparent" === t,
    g = (0, a.default)({
      default: {
        swatch: u({
          background: t,
          height: "100%",
          width: "100%",
          cursor: "pointer",
          position: "relative",
          outline: "none"
        }, n, p ? void 0 === h ? {} : h : {})
      }
    }),
    _ = {};
  return c && (_.onMouseOver = function(e) {
    return c(t, e)
  }), i().createElement("div", u({
    style: g.swatch,
    onClick: function(e) {
      return o(t, e)
    },
    title: d,
    tabIndex: 0,
    onKeyDown: function(e) {
      return 13 === e.keyCode && o(t, e)
    }
  }, _), f, m && i().createElement(s.default, {
    borderRadius: g.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
})