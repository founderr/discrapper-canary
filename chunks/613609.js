"use strict";
n.r(t), n("47120"), n("773603");
var a = n("735250"),
  s = n("470079"),
  i = n("442837"),
  l = n("447543"),
  r = n("703656"),
  o = n("430824"),
  u = n("701190"),
  d = n("612744"),
  c = n("449934"),
  f = n("650233"),
  E = n("981631"),
  h = n("756286"),
  _ = n("84854");
t.default = e => {
  let {
    guildId: t,
    inviteCode: n
  } = e, [C, m] = s.useState(h.WaveStates.INITIAL), [S, p] = s.useState(null != n);
  s.useEffect(() => {
    null != n && l.default.resolveInvite(n, "Hub").finally(() => p(!1))
  }, [n]);
  let I = (0, i.useStateFromStores)([u.default], () => null != n ? u.default.getInvite(n) : null),
    g = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(t));
  s.useEffect(() => {
    null != g && (0, r.transitionTo)(E.Routes.CHANNEL(t))
  }, [g, t]);
  let T = s.useCallback(e => {
      m(t => Math.max(t, e))
    }, []),
    A = (0, c.getArtForPath)();
  return (0, a.jsx)("div", {
    className: _.page,
    children: (0, a.jsxs)(d.default, {
      embedded: !0,
      splash: A,
      waveState: C,
      showLogo: !1,
      updateWaveState: T,
      children: [(0, a.jsx)("div", {
        className: _.dragRegion
      }), (0, a.jsx)("div", {
        className: _.contentWrapper,
        children: !S && (0, a.jsx)(f.HubEmailConnectionModalView, {
          invite: I
        })
      })]
    })
  })
}