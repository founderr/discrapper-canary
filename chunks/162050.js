n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  r = n(287734),
  a = n(770471),
  o = n(592125),
  u = n(306680),
  c = n(944486),
  d = n(594174),
  h = n(153124),
  p = n(436088),
  g = n(51144),
  m = n(603592),
  C = n(674552),
  E = n(689938);

function f() {
  var e;
  let t = (0, h.Dt)(),
    [n, f] = (0, i.Wu)([c.Z, o.Z], () => [o.Z.getChannel(c.Z.getVoiceChannelId()), c.Z.getCurrentlySelectedChannelId(null)]),
    _ = (0, i.e7)([u.ZP], () => null != n ? u.ZP.getMentionCount(n.id) : 0),
    I = (0, i.e7)([d.default], () => d.default.getUser(null == n ? void 0 : n.ownerId)),
    N = null !== (e = g.ZP.getGlobalName(I)) && void 0 !== e ? e : g.ZP.getUserTag(I),
    {
      canViewBroadcasts: Z
    } = a.Z.useExperiment({
      location: "broadcast_button_guilds_bar_no_track"
    }, {
      autoTrackExposure: !1
    }),
    S = null == n ? void 0 : n.isBroadcastChannel(),
    x = S && f === (null == n ? void 0 : n.id);
  return S && Z ? (0, l.jsx)(m.Z, {
    id: t,
    onClick: () => {
      S && null != n && r.default.selectPrivateChannel(n.id)
    },
    icon: p.Z,
    tooltip: null != N ? E.Z.Messages.BROADCASTING_CHANNEL_NAME.format({
      name: N
    }) : void 0,
    selected: x,
    upperBadge: (0, l.jsx)(s.Avatar, {
      size: s.AvatarSizes.SIZE_16,
      src: null == I ? void 0 : I.getAvatarURL(null, 16),
      "aria-label": N
    }),
    lowerBadge: _ > 0 ? (0, C.Ne)(_) : null
  }) : null
}