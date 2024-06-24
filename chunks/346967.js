n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(442837),
  o = n(911367),
  c = n(594174),
  u = n(786874),
  d = n(447452),
  h = n(484459),
  m = n(87728),
  p = n(792379),
  E = n(123579),
  g = n(402777);

function f(e) {
  let {
    location: t,
    channel: n,
    ...s
  } = e, {
    updatedOnAllSurfaces: f
  } = (0, d.t)({
    location: t
  }), {
    botProfilesEnabled: C
  } = (0, u.J)({
    location: t
  }), _ = (0, m.Z)();
  (0, o.t)();
  let [I] = n.recipients, x = (0, r.e7)([c.default], () => c.default.getUser(I));
  return (a()(null != x, "ProfilePanelExperimentWrapper: user cannot be undefined"), i.useEffect(() => {
    (0, h.W)(x, {
      withMutualFriends: !x.bot,
      withMutualGuilds: !0,
      channelId: n.id
    })
  }, [x, n.id]), _) ? null : f && C && x.isNonUserBot() ? (0, l.jsx)(p.Z, {
    user: x,
    channel: n,
    ...s
  }) : f && (C || !x.bot) ? (0, l.jsx)(g.Z, {
    user: x,
    channel: n,
    ...s
  }) : (0, l.jsx)(E.Z, {
    user: x,
    channel: n,
    ...s
  })
}