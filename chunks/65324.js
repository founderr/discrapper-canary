"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("206230"),
  r = n("491605"),
  u = n("642716"),
  o = n("646718");

function d(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: d = !0,
    defaultAnimationState: c,
    idleAnimationState: f
  } = e, E = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), [_, I] = a.useState(c), h = a.useRef((0, u.getGiftAnimationData)(t, _)), [p, T] = a.useState(null == f), [N, m] = a.useState(!1), [A, g] = a.useState(-1), S = () => {
    h.current = (0, u.getGiftAnimationData)(t, _), g(e => e + 1)
  }, v = () => {
    T(!1), m(!0), g(-1), I(c)
  };
  a.useEffect(() => {
    null == f && I(c)
  }, [f, c]), a.useEffect(() => {
    if (null != f && A >= 0) {
      v();
      return
    }
    S()
  }, [t, f]), a.useEffect(() => {
    (!N || null == f) && S()
  }, [_]), a.useEffect(() => {
    N && (T(null == f), m(!1), S())
  }, [N]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, s.jsx)(r.default, {
    importData: h.current,
    shouldAnimate: !E && d,
    className: n,
    versionKey: A,
    onComplete: null != f ? () => {
      null != f && (I(f), T(!0))
    } : void 0,
    loop: p
  })
}