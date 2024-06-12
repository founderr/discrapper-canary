"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("911367"),
  u = n("594174"),
  d = n("447452"),
  c = n("484459"),
  f = n("87728"),
  h = n("123579"),
  m = n("402777");

function p(e) {
  let {
    location: t,
    channel: n,
    ...s
  } = e, {
    updatedOnAllSurfaces: p
  } = (0, d.useSimplifiedProfileExperiment)({
    location: t
  }), E = (0, f.default)();
  (0, o.useFetchProfileEffects)();
  let [g] = n.recipients, C = (0, r.useStateFromStores)([u.default], () => u.default.getUser(g));
  return (i()(null != C, "Unexpected missing user"), l.useEffect(() => {
    (0, c.maybeFetchUserProfileForPopout)(C, {
      withMutualGuilds: !C.bot,
      withMutualFriends: !C.bot,
      channelId: n.id
    })
  }, [C, n.id]), E) ? null : !p || C.bot || C.isNonUserBot() || C.isClyde() ? (0, a.jsx)(h.default, {
    user: C,
    channel: n,
    ...s
  }) : (0, a.jsx)(m.default, {
    user: C,
    channel: n,
    ...s
  })
}