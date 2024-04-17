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
  } = e, _ = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), [P, S] = r.useState(c), A = r.useRef((0, u.getGiftAnimationData)(t, P)), [E, p] = r.useState(null == f), [C, I] = r.useState(!1), [m, T] = r.useState(-1), N = () => {
    A.current = (0, u.getGiftAnimationData)(t, P), T(e => e + 1)
  }, O = () => {
    p(!1), I(!0), T(-1), S(c)
  };
  r.useEffect(() => {
    null == f && S(c)
  }, [f, c]), r.useEffect(() => {
    if (null != f && m >= 0) {
      O();
      return
    }
    N()
  }, [t, f]), r.useEffect(() => {
    (!C || null == f) && N()
  }, [P]), r.useEffect(() => {
    C && (p(null == f), I(!1), N())
  }, [C]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, a.jsx)(i.default, {
    importData: A.current,
    shouldAnimate: !_ && d,
    className: n,
    versionKey: m,
    onComplete: null != f ? () => {
      null != f && (S(f), p(!0))
    } : void 0,
    loop: E
  })
}