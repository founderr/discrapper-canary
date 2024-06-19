n(47120), n(773603);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(447543),
  r = n(568154),
  o = n(703656),
  c = n(430824),
  u = n(701190),
  d = n(449934),
  E = n(650233),
  h = n(981631),
  _ = n(898625),
  I = n(96927);
t.Z = e => {
  let {
    guildId: t,
    inviteCode: n
  } = e, [m, g] = s.useState(_.hO.INITIAL), [p, T] = s.useState(null != n);
  s.useEffect(() => {
    null != n && a.Z.resolveInvite(n, "Hub").finally(() => T(!1))
  }, [n]);
  let N = (0, l.e7)([u.Z], () => null != n ? u.Z.getInvite(n) : null),
    S = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
  s.useEffect(() => {
    null != S && (0, o.uL)(h.Z5c.CHANNEL(t))
  }, [S, t]);
  let C = s.useCallback(e => {
      g(t => Math.max(t, e))
    }, []),
    A = (0, d.gK)();
  return (0, i.jsx)("div", {
    className: I.page,
    children: (0, i.jsxs)(r.Z, {
      embedded: !0,
      splash: A,
      waveState: m,
      showLogo: !1,
      updateWaveState: C,
      children: [(0, i.jsx)("div", {
        className: I.dragRegion
      }), (0, i.jsx)("div", {
        className: I.contentWrapper,
        children: !p && (0, i.jsx)(E.HubEmailConnectionModalView, {
          invite: N
        })
      })]
    })
  })
}