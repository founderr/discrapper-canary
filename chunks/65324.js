"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007"), n("70102");
var a = n("37983"),
  l = n("884691"),
  i = n("446674"),
  r = n("206230"),
  s = n("491605"),
  u = n("642716"),
  o = n("646718");

function d(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: d = !0,
    defaultAnimationState: c,
    idleAnimationState: f
  } = e, I = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion), [_, S] = l.useState(c), E = l.useRef((0, u.getGiftAnimationData)(t, _)), [T, A] = l.useState(null == f), [P, N] = l.useState(!1), [m, C] = l.useState(-1), O = () => {
    E.current = (0, u.getGiftAnimationData)(t, _), C(e => e + 1)
  }, p = () => {
    A(!1), N(!0), C(-1), S(c)
  };
  l.useEffect(() => {
    null == f && S(c)
  }, [f, c]), l.useEffect(() => {
    if (null != f && m >= 0) {
      p();
      return
    }
    O()
  }, [t, f]), l.useEffect(() => {
    (!P || null == f) && O()
  }, [_]), l.useEffect(() => {
    P && (A(null == f), N(!1), O())
  }, [P]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, a.jsx)(s.default, {
    importData: E.current,
    shouldAnimate: !I && d,
    className: n,
    versionKey: m,
    onComplete: null != f ? () => {
      null != f && (S(f), A(!0))
    } : void 0,
    loop: T
  })
}