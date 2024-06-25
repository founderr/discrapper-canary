var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  r = n(692547),
  o = n(481060),
  c = n(358221),
  u = n(594190),
  d = n(836157),
  h = n(199902),
  m = n(924557),
  E = n(435064),
  p = n(354459),
  g = n(689938),
  f = n(66824);
t.Z = e => {
  let {
    className: t,
    channelId: n
  } = e, i = (0, m.Go)(), {
    enableDecoupledGameClipping: C
  } = d.Z.useExperiment({
    location: "ClipsEnabledIndicator"
  }, {
    autoTrackExposure: !1
  });
  return (0, a.e7)([h.Z, c.Z, E.Z, u.ZP], () => {
    var e;
    if (null == n) return !1;
    let t = h.Z.getCurrentUserActiveStream(),
      l = null === (e = u.ZP.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
    return null != t && !!E.Z.getSettings().clipsEnabled && !!i || null != l && !!E.Z.getSettings().decoupledClipsEnabled && !!C || c.Z.getParticipants(n).some(e => e.type === p.fO.USER && E.Z.isClipsEnabledForUser(e.user.id))
  }) ? (0, l.jsxs)(o.TooltipContainer, {
    text: g.Z.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
    color: o.TooltipColors.GREY,
    className: s()(t, f.clipsEnabledIndicator),
    children: [(0, l.jsx)(o.IconBadge, {
      icon: o.ClipsIcon,
      shape: o.BadgeShapes.ROUND_LEFT,
      color: r.Z.unsafe_rawColors.PRIMARY_500.css,
      className: f.clipBadgeIcon
    }), (0, l.jsx)(o.TextBadge, {
      text: g.Z.Messages.CLIPS_ENABLED_BADGE,
      shape: o.BadgeShapes.ROUND_RIGHT,
      color: r.Z.unsafe_rawColors.PRIMARY_500.css,
      className: f.clipBadgeText
    })]
  }) : null
}