"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007"), n("70102");
var r = n("37983"),
  u = n("884691"),
  i = n("446674"),
  a = n("206230"),
  l = n("491605"),
  s = n("210721"),
  o = n("646718");

function c(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: c = !0,
    defaultAnimationState: d,
    idleAnimationState: f
  } = e, p = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), [P, S] = u.useState(d), h = u.useRef((0, s.getGiftAnimationData)(t, P)), [m, x] = u.useState(null == f), [C, I] = u.useState(!1), [E, v] = u.useState(-1), g = () => {
    h.current = (0, s.getGiftAnimationData)(t, P), v(e => e + 1)
  }, T = () => {
    x(!1), I(!0), v(-1), S(d)
  };
  u.useEffect(() => {
    null == f && S(d)
  }, [f, d]), u.useEffect(() => {
    if (null != f && E >= 0) {
      T();
      return
    }
    g()
  }, [t, f]), u.useEffect(() => {
    (!C || null == f) && g()
  }, [P]), u.useEffect(() => {
    C && (x(null == f), I(!1), g())
  }, [C]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(l.default, {
    importData: h.current,
    shouldAnimate: !p && c,
    className: n,
    versionKey: E,
    onComplete: null != f ? () => {
      null != f && (S(f), x(!0))
    } : void 0,
    loop: m
  })
}