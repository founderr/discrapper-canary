"use strict";
a.r(t), a("47120"), a("773603");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("447543"),
  r = a("703656"),
  o = a("430824"),
  u = a("701190"),
  d = a("612744"),
  c = a("449934"),
  f = a("650233"),
  E = a("981631"),
  h = a("756286"),
  _ = a("792196");
t.default = e => {
  let {
    guildId: t,
    inviteCode: a
  } = e, [C, m] = s.useState(h.WaveStates.INITIAL), [S, p] = s.useState(null != a);
  s.useEffect(() => {
    null != a && i.default.resolveInvite(a, "Hub").finally(() => p(!1))
  }, [a]);
  let I = (0, l.useStateFromStores)([u.default], () => null != a ? u.default.getInvite(a) : null),
    g = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t));
  s.useEffect(() => {
    null != g && (0, r.transitionTo)(E.Routes.CHANNEL(t))
  }, [g, t]);
  let T = s.useCallback(e => {
      m(t => Math.max(t, e))
    }, []),
    A = (0, c.getArtForPath)();
  return (0, n.jsx)("div", {
    className: _.page,
    children: (0, n.jsxs)(d.default, {
      embedded: !0,
      splash: A,
      waveState: C,
      showLogo: !1,
      updateWaveState: T,
      children: [(0, n.jsx)("div", {
        className: _.dragRegion
      }), (0, n.jsx)("div", {
        className: _.contentWrapper,
        children: !S && (0, n.jsx)(f.HubEmailConnectionModalView, {
          invite: I
        })
      })]
    })
  })
}