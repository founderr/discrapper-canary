"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("669491"),
  u = n("77078"),
  o = n("191145"),
  d = n("161454"),
  c = n("584687"),
  f = n("373469"),
  h = n("522049"),
  m = n("956089"),
  p = n("56947"),
  E = n("386045"),
  g = n("99795"),
  C = n("782340"),
  S = n("688257"),
  _ = e => {
    let {
      className: t,
      channelId: n
    } = e, a = (0, p.useEnableClips)(), {
      enableDecoupledGameClipping: _
    } = c.default.useExperiment({
      location: "ClipsEnabledIndicator"
    }, {
      autoTrackExposure: !1
    }), I = (0, i.useStateFromStores)([f.default, o.default, E.default, d.default], () => {
      var e;
      if (null == n) return !1;
      let t = f.default.getCurrentUserActiveStream(),
        l = null === (e = d.default.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle;
      return null != t && !!E.default.getSettings().clipsEnabled && !!a || null != l && !!E.default.getSettings().decoupledClipsEnabled && !!_ || o.default.getParticipants(n).some(e => e.type === g.ParticipantTypes.USER && E.default.isClipsEnabledForUser(e.user.id))
    });
    return I ? (0, l.jsxs)(u.TooltipContainer, {
      text: C.default.Messages.CLIPS_ENABLED_VIEWER_TOOLTIP,
      color: u.TooltipColors.GREY,
      className: s(t, S.clipsEnabledIndicator),
      children: [(0, l.jsx)(m.IconBadge, {
        icon: h.default,
        shape: m.BadgeShapes.ROUND_LEFT,
        color: r.default.unsafe_rawColors.PRIMARY_500.css,
        className: S.clipBadgeIcon
      }), (0, l.jsx)(m.TextBadge, {
        text: C.default.Messages.CLIPS_ENABLED_BADGE,
        shape: m.BadgeShapes.ROUND_RIGHT,
        color: r.default.unsafe_rawColors.PRIMARY_500.css,
        className: S.clipBadgeText
      })]
    }) : null
  }