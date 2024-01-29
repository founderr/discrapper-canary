"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007"), n("70102");
var s = n("37983"),
  r = n("884691"),
  i = n("446674"),
  l = n("206230"),
  a = n("491605"),
  u = n("210721"),
  o = n("78345");

function d(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: d = !0,
    defaultAnimationState: c,
    idleAnimationState: f
  } = e, p = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), [E, S] = r.useState(c), h = r.useRef((0, u.getGiftAnimationData)(t, E)), [m, I] = r.useState(null == f), [_, C] = r.useState(!1), [T, x] = r.useState(-1), g = () => {
    h.current = (0, u.getGiftAnimationData)(t, E), x(e => e + 1)
  }, v = () => {
    I(!1), C(!0), x(-1), S(c)
  };
  r.useEffect(() => {
    null == f && S(c)
  }, [f, c]), r.useEffect(() => {
    if (null != f && T >= 0) {
      v();
      return
    }
    g()
  }, [t, f]), r.useEffect(() => {
    (!_ || null == f) && g()
  }, [E]), r.useEffect(() => {
    _ && (I(null == f), C(!1), g())
  }, [_]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, s.jsx)(a.default, {
    importData: h.current,
    shouldAnimate: !p && d,
    className: n,
    versionKey: T,
    onComplete: null != f ? () => {
      null != f && (S(f), I(!0))
    } : void 0,
    loop: m
  })
}