n.d(t, {
  Z: function() {
    return _
  }
}), n(47120), n(411104);
var r = n(735250),
  a = n(470079),
  s = n(442837),
  u = n(481060),
  l = n(607070),
  i = n(409302),
  E = n(474936);

function _(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: _ = !0,
    defaultAnimationState: c,
    idleAnimationState: O
  } = e, C = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), [A, d] = a.useState(c), o = a.useRef((0, i._)(t, A)), [N, I] = a.useState(null == O), [f, R] = a.useState(!1), [L, P] = a.useState(-1), h = () => {
    o.current = (0, i._)(t, A), P(e => e + 1)
  }, S = () => {
    I(!1), R(!0), P(-1), d(c)
  };
  a.useEffect(() => {
    null == O && d(c)
  }, [O, c]), a.useEffect(() => {
    if (null != O && L >= 0) {
      S();
      return
    }
    h()
  }, [t, O]), a.useEffect(() => {
    (!f || null == O) && h()
  }, [A]), a.useEffect(() => {
    f && (I(null == O), R(!1), h())
  }, [f]);
  if (!E.Cj.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(u.LottieAnimation, {
    importData: o.current,
    shouldAnimate: !C && _,
    className: n,
    versionKey: L,
    onComplete: null != O ? () => {
      null != O && (d(O), I(!0))
    } : void 0,
    loop: N
  })
}