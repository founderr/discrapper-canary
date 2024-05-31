"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("594174"),
  u = n("447452"),
  d = n("484459"),
  c = n("87728"),
  f = n("123579");

function h(e) {
  let {
    location: t,
    channel: n,
    ...s
  } = e, {
    updatedOnAllSurfaces: h
  } = (0, u.useSimplifiedProfileExperiment)({
    location: t
  }), m = (0, c.default)(), [p] = n.recipients, E = (0, r.useStateFromStores)([o.default], () => o.default.getUser(p));
  return (i()(null != E, "Unexpected missing user"), l.useEffect(() => {
    (0, d.maybeFetchUserProfileForPopout)(E, {
      withMutualGuilds: !E.bot,
      withMutualFriends: !E.bot,
      channelId: n.id
    })
  }, [E, n.id]), m) ? null : (h && !E.bot && !E.isNonUserBot() && E.isClyde(), (0, a.jsx)(f.default, {
    user: E,
    channel: n,
    ...s
  }))
}