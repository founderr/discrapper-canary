"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120"), n("411104");
var a = n("735250"),
  r = n("470079"),
  s = n("442837"),
  l = n("607070"),
  i = n("301822"),
  u = n("409302"),
  o = n("474936");

function d(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: d = !0,
    defaultAnimationState: c,
    idleAnimationState: f
  } = e, _ = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), [I, E] = r.useState(c), S = r.useRef((0, u.getGiftAnimationData)(t, I)), [P, A] = r.useState(null == f), [C, N] = r.useState(!1), [T, m] = r.useState(-1), p = () => {
    S.current = (0, u.getGiftAnimationData)(t, I), m(e => e + 1)
  }, O = () => {
    A(!1), N(!0), m(-1), E(c)
  };
  r.useEffect(() => {
    null == f && E(c)
  }, [f, c]), r.useEffect(() => {
    if (null != f && T >= 0) {
      O();
      return
    }
    p()
  }, [t, f]), r.useEffect(() => {
    (!C || null == f) && p()
  }, [I]), r.useEffect(() => {
    C && (A(null == f), N(!1), p())
  }, [C]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, a.jsx)(i.default, {
    importData: S.current,
    shouldAnimate: !_ && d,
    className: n,
    versionKey: T,
    onComplete: null != f ? () => {
      null != f && (E(f), A(!0))
    } : void 0,
    loop: P
  })
}