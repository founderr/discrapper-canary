"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("37983");
n("884691");
var i = n("833395"),
  a = e => {
    let {
      profileEffectConfig: t,
      onReady: n
    } = e, {
      pendingRef: a,
      setPending: s
    } = (0, i.default)(t.effects, n);
    return (0, l.jsx)("div", {
      children: t.effects.map(e => (0, l.jsx)("img", {
        src: e.src,
        alt: "Preload Profile Effect Asset",
        "aria-hidden": !0,
        style: {
          opacity: 0,
          position: "absolute"
        },
        onLoad: () => {
          s(a.current - 1), a.current = a.current - 1
        }
      }, e.src))
    })
  }