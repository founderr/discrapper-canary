n.d(t, {
  Z: function() {
    return o
  }
}), n(47120), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  u = n(481060),
  a = n(607070),
  l = n(409302),
  d = n(474936);

function o(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: o = !0,
    defaultAnimationState: c,
    idleAnimationState: h
  } = e, b = (0, s.e7)([a.Z], () => a.Z.useReducedMotion), [f, p] = r.useState(c), _ = r.useRef((0, l._)(t, f)), [E, S] = r.useState(null == h), [I, m] = r.useState(!1), [O, k] = r.useState(-1), g = () => {
    _.current = (0, l._)(t, f), k(e => e + 1)
  }, P = () => {
    S(!1), m(!0), k(-1), p(c)
  };
  r.useEffect(() => {
    null == h && p(c)
  }, [h, c]), r.useEffect(() => {
    if (null != h && O >= 0) {
      P();
      return
    }
    g()
  }, [t, h]), r.useEffect(() => {
    (!I || null == h) && g()
  }, [f]), r.useEffect(() => {
    I && (S(null == h), m(!1), g())
  }, [I]);
  if (!d.Cj.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, i.jsx)(u.LottieAnimation, {
    importData: _.current,
    shouldAnimate: !b && o,
    className: n,
    versionKey: O,
    onComplete: null != h ? () => {
      null != h && (p(h), S(!0))
    } : void 0,
    loop: E
  })
}