n.d(t, {
  Z: function() {
    return g
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
  d = n(484459),
  h = n(87728),
  m = n(792379),
  E = n(123579),
  p = n(402777);

function g(e) {
  let {
    location: t,
    channel: n,
    ...s
  } = e, {
    botProfilesEnabled: g
  } = (0, u.J)({
    location: t
  }), f = (0, h.Z)();
  (0, o.t)();
  let [C] = n.recipients, _ = (0, r.e7)([c.default], () => c.default.getUser(C));
  return (a()(null != _, "ProfilePanelExperimentWrapper: user cannot be undefined"), i.useEffect(() => {
    (0, d.W)(_, {
      withMutualFriends: !_.bot,
      withMutualGuilds: !0,
      channelId: n.id
    })
  }, [_, n.id]), f) ? null : g && _.isNonUserBot() ? (0, l.jsx)(m.Z, {
    user: _,
    channel: n,
    ...s
  }) : g || !_.bot ? (0, l.jsx)(p.Z, {
    user: _,
    channel: n,
    ...s
  }) : (0, l.jsx)(E.Z, {
    user: _,
    channel: n,
    ...s
  })
}