"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007"), n("70102");
var r = n("37983"),
  i = n("884691"),
  s = n("446674"),
  l = n("206230"),
  u = n("491605"),
  a = n("210721"),
  o = n("78345");

function c(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: c = !0,
    defaultAnimationState: d,
    idleAnimationState: f
  } = e, I = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), [_, E] = i.useState(d), S = i.useRef((0, a.getGiftAnimationData)(t, _)), [T, N] = i.useState(null == f), [p, C] = i.useState(!1), [m, P] = i.useState(-1), h = () => {
    S.current = (0, a.getGiftAnimationData)(t, _), P(e => e + 1)
  }, R = () => {
    N(!1), C(!0), P(-1), E(d)
  };
  i.useEffect(() => {
    null == f && E(d)
  }, [f, d]), i.useEffect(() => {
    if (null != f && m >= 0) {
      R();
      return
    }
    h()
  }, [t, f]), i.useEffect(() => {
    (!p || null == f) && h()
  }, [_]), i.useEffect(() => {
    p && (N(null == f), C(!1), h())
  }, [p]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(u.default, {
    importData: S.current,
    shouldAnimate: !I && c,
    className: n,
    versionKey: m,
    onComplete: null != f ? () => {
      null != f && (E(f), N(!0))
    } : void 0,
    loop: T
  })
}