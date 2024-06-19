t(653041);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(165630),
  o = t(771845),
  c = t(11844),
  E = t(300037),
  d = t(689938),
  _ = t(475684);
s.Z = function(e) {
  let {
    hasAppliedGuildBoosts: s,
    subscriptionIsPausedOrPausePending: t
  } = e, T = (0, a.e7)([r.Z], () => r.Z.affinities), S = (0, a.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()), u = i.useMemo(() => {
    let e = T.slice(0, 3).map(e => e.guildId);
    for (let s = 0; s < S.length && !(e.length >= 3); s++) {
      let t = S[s];
      !e.includes(t) && e.push(t)
    }
    return e
  }, [T, S]);
  return 0 === u.length ? null : (0, n.jsxs)("div", {
    className: _.wrapper,
    children: [s && (0, n.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      className: _.header,
      children: d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_RECOMMENDED_SERVERS_HEADING
    }), u.map(e => (0, n.jsx)(E.Z, {
      className: _.recommendedServerCard,
      guildId: e,
      boostingVariant: !0
    }, e)), S.length > 3 && !1 === t && (0, n.jsx)(c.Z, {})]
  })
}