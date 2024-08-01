n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  r = n(442837),
  o = n(911367),
  c = n(594174),
  u = n(380738),
  d = n(484459),
  h = n(87728),
  m = n(792379),
  p = n(123579),
  _ = n(402777);

function f(e) {
  let {
location: t,
channel: n,
...s
  } = e, {
botProfilesEnabled: f
  } = (0, u.J)({
location: t
  }), E = (0, h.Z)();
  (0, o.t)();
  let [g] = n.recipients, C = (0, r.e7)([c.default], () => c.default.getUser(g));
  l()(null != C, 'ProfilePanelExperimentWrapper: user cannot be undefined');
  let I = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  return (l()(null != I, 'ProfilePanelExperimentWrapper: currentUser cannot be undefined'), a.useEffect(() => {
(0, d.W)(C, {
  withMutualFriends: !C.bot,
  withMutualGuilds: !0,
  channelId: n.id
});
  }, [
C,
n.id
  ]), E) ? null : f && C.isNonUserBot() ? (0, i.jsx)(m.Z, {
user: C,
channel: n,
...s
  }) : f || !C.bot ? (0, i.jsx)(_.Z, {
user: C,
currentUser: I,
channel: n,
...s
  }) : (0, i.jsx)(p.Z, {
user: C,
channel: n,
...s
  });
}