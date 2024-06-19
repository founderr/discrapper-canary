var i = n(735250);
n(470079);
var s = n(920906),
  l = n(442837),
  a = n(536442),
  r = n(984933),
  o = n(496675),
  c = n(51382),
  u = n(91326),
  d = n(503856),
  E = n(981631);

function h(e) {
  let {
    channel: t,
    guild: n
  } = e, r = (0, l.e7)([a.qc], () => a.qc.hasHotspot(a.v6.HUB_STUDY_ROOM_NOTICE)), o = (0, d.r)(t.guild_id), E = (0, s.useSpring)({
    maxHeight: o ? 0 : 300,
    overflow: "hidden",
    delay: 400
  });
  return (0, i.jsx)(s.animated.div, {
    style: E,
    children: r ? (0, i.jsx)(c.Z, {
      channel: t,
      guild: n
    }) : (0, i.jsx)(u.Z, {
      name: "\uD83D\uDCDA☕ ".concat(t.name),
      channel: t
    })
  })
}
t.Z = function(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([r.ZP], () => r.ZP.getChannels(t.id)[r.Zb][0]), s = (0, l.e7)([o.Z], () => null != n && o.Z.can(E.Plq.CONNECT, n.channel));
  return t.hasFeature(E.oNc.HUB) && null != n && s ? (0, i.jsx)(h, {
    channel: n.channel,
    guild: t
  }) : null
}