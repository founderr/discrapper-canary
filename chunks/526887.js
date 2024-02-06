"use strict";
n.r(t), n.d(t, {
  ConfettiCannonContext: function() {
    return c
  },
  ConfettiCannonContextProvider: function() {
    return d
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("516555"),
  o = n("65597"),
  a = n("206230"),
  s = n("49111");
let u = {
    confettiCanvas: null,
    cannon: null,
    createConfetti: () => void 0,
    createConfettiAt: () => void 0,
    createMultipleConfetti: () => [],
    createMultipleConfettiAt: () => [],
    addClickListener: () => s.NOOP,
    removeClickListener: s.NOOP
  },
  c = l.createContext(u);

function d(e) {
  let {
    children: t,
    confettiCanvas: n,
    spriteCanvas: s,
    baseConfig: d,
    addClickListener: f,
    removeClickListener: E
  } = e, p = (0, r.useConfettiCannon)(n, s), h = (0, o.default)([a.default], () => a.default.useReducedMotion), _ = l.useMemo(() => h ? u : {
    confettiCanvas: n,
    cannon: p,
    createConfetti: (e, t) => p.createConfetti({
      ...d,
      ...e
    }, t),
    createConfettiAt: (e, t, n, i) => p.createConfetti({
      ...d,
      position: {
        type: "static",
        value: {
          x: e,
          y: t
        }
      },
      ...n
    }, i),
    createMultipleConfetti: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 ? arguments[2] : void 0;
      return p.createMultipleConfetti({
        ...d,
        ...e
      }, t, n)
    },
    createMultipleConfettiAt: function(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
        l = arguments.length > 4 ? arguments[4] : void 0;
      return p.createMultipleConfetti({
        ...d,
        position: {
          type: "static",
          value: {
            x: e,
            y: t
          }
        },
        ...n
      }, i, l)
    },
    addClickListener: f,
    removeClickListener: E
  }, [f, d, p, n, h, E]);
  return (0, i.jsx)(c.Provider, {
    value: _,
    children: t
  })
}