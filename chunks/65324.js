"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007"), n("70102");
var s = n("37983"),
  i = n("884691"),
  a = n("446674"),
  r = n("206230"),
  l = n("491605"),
  u = n("210721"),
  o = n("646718");

function d(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: d = !0,
    defaultAnimationState: c,
    idleAnimationState: f
  } = e, E = (0, a.useStateFromStores)([r.default], () => r.default.useReducedMotion), [p, S] = i.useState(c), m = i.useRef((0, u.getGiftAnimationData)(t, p)), [_, I] = i.useState(null == f), [C, T] = i.useState(!1), [x, h] = i.useState(-1), g = () => {
    m.current = (0, u.getGiftAnimationData)(t, p), h(e => e + 1)
  }, P = () => {
    I(!1), T(!0), h(-1), S(c)
  };
  i.useEffect(() => {
    null == f && S(c)
  }, [f, c]), i.useEffect(() => {
    if (null != f && x >= 0) {
      P();
      return
    }
    g()
  }, [t, f]), i.useEffect(() => {
    (!C || null == f) && g()
  }, [p]), i.useEffect(() => {
    C && (I(null == f), T(!1), g())
  }, [C]);
  if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, s.jsx)(l.default, {
    importData: m.current,
    shouldAnimate: !E && d,
    className: n,
    versionKey: x,
    onComplete: null != f ? () => {
      null != f && (S(f), I(!0))
    } : void 0,
    loop: _
  })
}