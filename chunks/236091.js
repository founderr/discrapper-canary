"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("442837"),
  r = n("692547"),
  o = n("481060"),
  u = n("358221"),
  d = n("594190"),
  c = n("836157"),
  f = n("199902"),
  h = n("529653"),
  m = n("924557"),
  p = n("435064"),
  E = n("354459"),
  g = n("689938"),
  C = n("292059");
t.default = e => {
  let {
    className: t,
    channelId: n
  } = e, l = (0, m.useEnableClips)(), {
    enableDecoupledGameClipping: S
  } = c.default.useExperiment({
    location: "ClipsEnabledIndicator"
  }, {
    autoTrackExposure: !1
  });
  return (0, i.useStateFromStores)([f.default, u.default, p.default, d.default], () => {
    var e;
    if (null == n) return !1;
    let t = f.default.getCurrentUserActiveStream(),
      a = null === (e = d.default.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
    return null != t && !!p.default.getSettings().clipsEnabled && !!l || null != a && !!p.default.getSettings().decoupledClipsEnabled && !!S || u.default.getParticipants(n).some(e => e.type === E.ParticipantTypes.USER && p.default.isClipsEnabledForUser(e.user.id))
  }) ? (0, a.jsxs)(o.TooltipContainer, {
    text: g.default.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
    color: o.TooltipColors.GREY,
    className: s()(t, C.clipsEnabledIndicator),
    children: [(0, a.jsx)(o.IconBadge, {
      icon: h.default,
      shape: o.BadgeShapes.ROUND_LEFT,
      color: r.default.unsafe_rawColors.PRIMARY_500.css,
      className: C.clipBadgeIcon
    }), (0, a.jsx)(o.TextBadge, {
      text: g.default.Messages.CLIPS_ENABLED_BADGE,
      shape: o.BadgeShapes.ROUND_RIGHT,
      color: r.default.unsafe_rawColors.PRIMARY_500.css,
      className: C.clipBadgeText
    })]
  }) : null
}