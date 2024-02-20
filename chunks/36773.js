"use strict";
n.r(t), n.d(t, {
  CommonConfettiCannonContextProvider: function() {
    return u
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("516555"),
  s = n("526887"),
  r = n("172858"),
  o = n("879342");

function u(e) {
  let {
    children: t
  } = e, [n, u] = a.useState(null), [d, c] = a.useState(null), f = a.useRef(new Set), [E, h] = a.useState(!1), _ = a.useCallback(e => {
    f.current.delete(e), h(f.current.size > 0)
  }, []), C = a.useCallback(e => (f.current.add(e), h(!0), () => _(e)), [_]), S = a.useCallback((e, t) => {
    for (let n of f.current) n(e, t)
  }, []);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.ConfettiCannonContextProvider, {
      confettiCanvas: d,
      spriteCanvas: n,
      baseConfig: r.COMMON_CONFETTI_BASE_CONFIG,
      addClickListener: C,
      removeClickListener: _,
      children: t
    }), (0, i.jsx)(l.ConfettiCanvas, {
      ref: c,
      className: o.canvas,
      environment: r.COMMON_CONFETTI_ENVIRONMENT,
      onClick: E ? S : void 0
    }), (0, i.jsx)(l.SpriteCanvas, {
      ref: u,
      colors: r.COMMON_CONFETTI_COLORS,
      sprites: r.COMMON_CONFETTI_SPRITES,
      spriteWidth: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: r.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}