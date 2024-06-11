"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120"), n("411104");
var r = n("735250"),
  a = n("470079"),
  s = n("442837"),
  u = n("481060"),
  i = n("607070"),
  l = n("409302"),
  c = n("474936");

function o(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: o = !0,
    defaultAnimationState: d,
    idleAnimationState: f
  } = e, E = (0, s.useStateFromStores)([i.default], () => i.default.useReducedMotion), [A, S] = a.useState(d), C = a.useRef((0, l.getGiftAnimationData)(t, A)), [P, _] = a.useState(null == f), [m, p] = a.useState(!1), [N, I] = a.useState(-1), O = () => {
    C.current = (0, l.getGiftAnimationData)(t, A), I(e => e + 1)
  }, T = () => {
    _(!1), p(!0), I(-1), S(d)
  };
  a.useEffect(() => {
    null == f && S(d)
  }, [f, d]), a.useEffect(() => {
    if (null != f && N >= 0) {
      T();
      return
    }
    O()
  }, [t, f]), a.useEffect(() => {
    (!m || null == f) && O()
  }, [A]), a.useEffect(() => {
    m && (_(null == f), p(!1), O())
  }, [m]);
  if (!c.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(u.LottieAnimation, {
    importData: C.current,
    shouldAnimate: !E && o,
    className: n,
    versionKey: N,
    onComplete: null != f ? () => {
      null != f && (S(f), _(!0))
    } : void 0,
    loop: P
  })
}