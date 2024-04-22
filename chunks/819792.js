"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("718017"),
  l = a("442837"),
  i = a("536442"),
  r = a("984933"),
  o = a("496675"),
  u = a("51382"),
  d = a("91326"),
  c = a("503856"),
  f = a("981631");

function E(e) {
  let {
    channel: t,
    guild: a
  } = e, r = (0, l.useStateFromStores)([i.HotspotStore], () => i.HotspotStore.hasHotspot(i.HotspotLocations.HUB_STUDY_ROOM_NOTICE)), o = (0, c.useConnectedInCurrentHub)(t.guild_id), f = (0, s.useSpring)({
    maxHeight: o ? 0 : 300,
    overflow: "hidden",
    delay: 400
  });
  return (0, n.jsx)(s.animated.div, {
    style: f,
    children: r ? (0, n.jsx)(u.default, {
      channel: t,
      guild: a
    }) : (0, n.jsx)(d.default, {
      name: "\uD83D\uDCDA☕ ".concat(t.name),
      channel: t
    })
  })
}
t.default = function(e) {
  let {
    guild: t
  } = e, a = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(t.id)[r.GUILD_VOCAL_CHANNELS_KEY][0]), s = (0, l.useStateFromStores)([o.default], () => null != a && o.default.can(f.Permissions.CONNECT, a.channel));
  return t.hasFeature(f.GuildFeatures.HUB) && null != a && s ? (0, n.jsx)(E, {
    channel: a.channel,
    guild: t
  }) : null
}