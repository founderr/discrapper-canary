n.d(t, {
  Z: function() {
    return g
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(570140),
  r = n(519938),
  o = n(928518),
  c = n(585483),
  u = n(317381),
  d = n(917107),
  h = n(716600),
  m = n(918559),
  p = n(981631);
let E = (e, t) => {
  a.Z.wait(() => {
    (0, r.Cz)(e, t)
  })
};

function g(e) {
  let t, {
      embedId: n,
      className: a,
      style: r
    } = e,
    g = (0, s.e7)([o.Z], () => o.Z.getWindow(p.KJ3.CHANNEL_CALL_POPOUT)),
    f = (0, h.Z)(),
    C = (0, s.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null != f && !(0, d.Z)(f.channelId) && C === m.Ez.PANEL) t = window;
  else {
    var _;
    t = null !== (_ = null == g ? void 0 : g.window) && void 0 !== _ ? _ : window
  }
  let I = i.useRef(null),
    x = i.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, l;
          E(n, null !== (l = null === (t = I.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== l ? l : null), e = null
        }))
      }
    }, [n, t]);
  return i.useEffect(() => (t.addEventListener("resize", x), c.S.subscribe(p.CkL.REMEASURE_TARGET, x), () => {
    t.removeEventListener("resize", x), c.S.unsubscribe(p.CkL.REMEASURE_TARGET, x)
  }), [x, t]), i.useLayoutEffect(() => {
    let e = I.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    x();
    let l = new t.ResizeObserver(x);
    return l.observe(e), () => {
      l.disconnect(), E(n, null)
    }
  }, [n, x]), (0, l.jsx)("div", {
    ref: I,
    style: r,
    className: a
  })
}