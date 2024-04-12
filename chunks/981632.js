"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120"), n("411104");
var r = n("735250"),
  a = n("470079"),
  u = n("442837"),
  s = n("607070"),
  i = n("301822"),
  l = n("409302"),
  c = n("474936");

function d(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: d = !0,
    defaultAnimationState: o,
    idleAnimationState: f
  } = e, E = (0, u.useStateFromStores)([s.default], () => s.default.useReducedMotion), [A, P] = a.useState(o), S = a.useRef((0, l.getGiftAnimationData)(t, A)), [_, C] = a.useState(null == f), [O, I] = a.useState(!1), [p, N] = a.useState(-1), m = () => {
    S.current = (0, l.getGiftAnimationData)(t, A), N(e => e + 1)
  }, L = () => {
    C(!1), I(!0), N(-1), P(o)
  };
  a.useEffect(() => {
    null == f && P(o)
  }, [f, o]), a.useEffect(() => {
    if (null != f && p >= 0) {
      L();
      return
    }
    m()
  }, [t, f]), a.useEffect(() => {
    (!O || null == f) && m()
  }, [A]), a.useEffect(() => {
    O && (C(null == f), I(!1), m())
  }, [O]);
  if (!c.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(i.default, {
    importData: S.current,
    shouldAnimate: !E && d,
    className: n,
    versionKey: p,
    onComplete: null != f ? () => {
      null != f && (P(f), C(!0))
    } : void 0,
    loop: _
  })
}