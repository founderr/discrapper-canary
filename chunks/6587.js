"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  useFlattenedChannelIdListWithThreads: function() {
    return c
  }
}), n("424973");
var i = n("884691"),
  o = n("446674"),
  l = n("123561"),
  a = n("829072"),
  u = n("233069"),
  d = n("870691"),
  s = n("952451"),
  r = n("49111"),
  E = n("695838");

function _(e, t, n) {
  let i = e === E.FAVORITES_RAW_GUILD_ID || e === r.FAVORITES ? (0, a.computeFavoritesState)() : l.default.getGuildWithoutChangingCommunityRows(e).guildChannels;
  return A(i, t, n)
}

function c(e, t, n, l, a) {
  let u = (0, o.useStateFromStores)([s.default], () => s.default.getGuildChangeSentinel(e)),
    r = (0, o.useStateFromStores)([d.default], () => d.default.version);
  return (0, i.useMemo)(() => A(t, l, a).map(e => e.id), [t, n, u, r])
}

function A(e, t, n) {
  let i = [];
  return e.forEachShownChannel(e => {
    ((0, u.isGuildSelectableChannelType)(e.type) || t && (0, u.isGuildVocalChannelType)(e.type)) && i.push(e)
  }, n), i
}