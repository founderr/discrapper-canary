n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(442837),
  o = n(911367),
  c = n(594174),
  u = n(447452),
  d = n(484459),
  h = n(87728),
  m = n(123579),
  p = n(402777);

function E(e) {
  let {
    location: t,
    channel: n,
    ...s
  } = e, {
    updatedOnAllSurfaces: E
  } = (0, u.t)({
    location: t
  }), g = (0, h.Z)();
  (0, o.t)();
  let [f] = n.recipients, C = (0, r.e7)([c.default], () => c.default.getUser(f));
  return (a()(null != C, "Unexpected missing user"), i.useEffect(() => {
    (0, d.W)(C, {
      withMutualGuilds: !C.bot,
      withMutualFriends: !C.bot,
      channelId: n.id
    })
  }, [C, n.id]), g) ? null : !E || C.bot || C.isNonUserBot() || C.isClyde() ? (0, l.jsx)(m.Z, {
    user: C,
    channel: n,
    ...s
  }) : (0, l.jsx)(p.Z, {
    user: C,
    channel: n,
    ...s
  })
}