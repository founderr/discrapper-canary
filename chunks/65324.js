"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007"), n("70102");
var i = n("37983"),
  l = n("884691"),
  s = n("446674"),
  r = n("206230"),
  a = n("491605"),
  u = n("210721"),
  d = n("646718");

function o(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: o = !0,
    defaultAnimationState: c,
    idleAnimationState: E
  } = e, f = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), [_, S] = l.useState(c), h = l.useRef((0, u.getGiftAnimationData)(t, _)), [m, p] = l.useState(null == E), [C, I] = l.useState(!1), [g, v] = l.useState(-1), R = () => {
    h.current = (0, u.getGiftAnimationData)(t, _), v(e => e + 1)
  }, T = () => {
    p(!1), I(!0), v(-1), S(c)
  };
  l.useEffect(() => {
    null == E && S(c)
  }, [E, c]), l.useEffect(() => {
    if (null != E && g >= 0) {
      T();
      return
    }
    R()
  }, [t, E]), l.useEffect(() => {
    (!C || null == E) && R()
  }, [_]), l.useEffect(() => {
    C && (p(null == E), I(!1), R())
  }, [C]);
  if (!d.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, i.jsx)(a.default, {
    importData: h.current,
    shouldAnimate: !f && o,
    className: n,
    versionKey: g,
    onComplete: null != E ? () => {
      null != E && (S(E), p(!0))
    } : void 0,
    loop: m
  })
}