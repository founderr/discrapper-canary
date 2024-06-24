n.d(t, {
  Z: function() {
    return c
  }
}), n(47120), n(411104);
var r = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(481060),
  i = n(607070),
  o = n(409302),
  u = n(474936);

function c(e) {
  let {
    giftStyle: t,
    className: n,
    shouldAnimate: c = !0,
    defaultAnimationState: d,
    idleAnimationState: E
  } = e, h = (0, s.e7)([i.Z], () => i.Z.useReducedMotion), [p, f] = a.useState(d), C = a.useRef((0, o._)(t, p)), [_, A] = a.useState(null == E), [O, N] = a.useState(!1), [I, S] = a.useState(-1), P = () => {
    C.current = (0, o._)(t, p), S(e => e + 1)
  }, m = () => {
    A(!1), N(!0), S(-1), f(d)
  };
  a.useEffect(() => {
    null == E && f(d)
  }, [E, d]), a.useEffect(() => {
    if (null != E && I >= 0) {
      m();
      return
    }
    P()
  }, [t, E]), a.useEffect(() => {
    (!O || null == E) && P()
  }, [p]), a.useEffect(() => {
    O && (A(null == E), N(!1), P())
  }, [O]);
  if (!u.Cj.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
  return (0, r.jsx)(l.LottieAnimation, {
    importData: C.current,
    shouldAnimate: !h && c,
    className: n,
    versionKey: I,
    onComplete: null != E ? () => {
      null != E && (f(E), A(!0))
    } : void 0,
    loop: _
  })
}