n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(749210),
  u = n(110924),
  d = n(58540),
  h = n(100527),
  m = n(906732),
  E = n(527379),
  p = n(484459),
  g = n(318661),
  f = n(502762),
  C = n(271383),
  _ = n(594174),
  I = n(189357),
  x = n(718617),
  T = n(327250),
  N = n(228168),
  Z = n(668972);

function S(e) {
  let {
    userId: t,
    guildId: n,
    onClose: s,
    className: S,
    infoPanelClassName: v,
    style: A
  } = e, M = (0, I.ms)(n), R = (0, r.e7)([_.default], () => _.default.getUser(t), [t]), j = (0, r.e7)([C.ZP], () => C.ZP.getMember(n, t), [n, t]), [L, O] = i.useState(null == R || null == j), P = (0, u.Z)(j), y = i.useRef(null), {
    analyticsLocations: b
  } = (0, m.ZP)(h.Z.GUILD_MEMBER_MOD_VIEW), D = (0, g.ZP)(t, n);
  return (i.useEffect(() => {
    !M && s()
  }, [M, s]), i.useEffect(() => {
    null != P && null == j && !L && s()
  }, [L, j, s, P]), i.useEffect(() => {
    null != R && null != j && O(!1)
  }, [R, j]), i.useEffect(() => {
    let e = null == j;
    return !L && e && (y.current = window.setTimeout(s, 500)), () => {
      null != y.current && window.clearTimeout(y.current)
    }
  }, [L, j, s]), (0, d.$)({
    [n]: [t]
  }), i.useEffect(() => {
    (async function e() {
      let e = [c.Z.requestMembersById(n, [t]), (0, E.nb)(n, [t]), (0, p.W)(t, void 0, {
        guildId: n,
        dispatchWait: !0
      })];
      await Promise.all(e), O(!1)
    })()
  }, [n, t]), M) ? L || null == R || null == j ? (0, l.jsx)("div", {
    className: a()(Z.sidebarContianer, Z.loadingContainer, S),
    style: A,
    children: (0, l.jsx)(o.Spinner, {
      animated: !0,
      type: L ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
    })
  }) : (0, l.jsx)(m.Gt, {
    value: b,
    children: (0, l.jsx)("div", {
      className: a()(Z.sidebarContianer, S),
      style: A,
      children: (0, l.jsx)(f.Z, {
        user: R,
        displayProfile: D,
        profileType: N.y0.MODAL,
        forceShowPremium: !0,
        className: a()(Z.profileThemedContainer),
        children: (0, l.jsxs)("div", {
          className: a()(Z.innerContainer),
          children: [(0, l.jsx)(T.Z, {
            userId: t,
            guildId: n,
            onClose: s
          }), (0, l.jsx)(x.Z, {
            userId: t,
            guildId: n,
            onClose: s,
            className: v
          })]
        })
      })
    })
  }) : null
}