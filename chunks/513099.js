"use strict";
n.d(t, {
  Z: function() {
    return C
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(420660),
  _ = n(100527),
  c = n(906732),
  d = n(233440),
  E = n(199902),
  I = n(158776),
  T = n(74538),
  h = n(998502),
  f = n(785717),
  S = n(204197),
  A = n(652853),
  N = n(228168),
  m = n(981631),
  O = n(474936),
  p = n(148443);
let R = l.AvatarSizes.SIZE_80,
  g = h.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function C(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: s,
    channelId: h,
    animateOnHover: C,
    onOpenProfile: v
  } = e, {
    theme: L
  } = (0, A.z)(), {
    analyticsLocations: D
  } = (0, c.ZP)(_.Z.AVATAR), {
    trackUserProfileAction: M
  } = (0, f.KZ)(), P = T.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, O.p9.TIER_2), y = r.useMemo(() => (0, d.W)(t, h), [t, h]), {
    status: U,
    isMobileOnline: b
  } = (0, a.cj)([E.Z, I.Z], () => {
    let e = null != E.Z.getAnyStreamForUser(t.id),
      n = I.Z.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === m.IIU.PLAYING : n !== m.IIU.CUSTOM_STATUS
      });
    return {
      status: (0, u.Z)(n) ? m.Skl.STREAMING : I.Z.getStatus(t.id),
      isMobileOnline: I.Z.isMobileOnline(t.id)
    }
  }), {
    avatarDecorationSrc: G,
    avatarSrc: w,
    eventHandlers: x
  } = (0, S.Z)({
    user: t,
    guildId: s,
    size: R,
    animateOnHover: C
  }), B = (0, i.jsx)(g, {
    src: w,
    avatarDecoration: G,
    size: R,
    "aria-label": t.username,
    imageClassName: null != v ? p.overlay : void 0,
    status: y ? m.Skl.UNKNOWN : U,
    statusBackdropColor: P && !y ? (0, l.getStatusBackdropColor)(L) : void 0,
    isMobile: b,
    statusTooltip: !0,
    statusTooltipDelay: N.vB
  });
  return null == v ? (0, i.jsx)("div", {
    ...x,
    className: p.avatar,
    children: B
  }) : (0, i.jsx)(l.Clickable, {
    ...x,
    className: o()(p.avatar, p.clickable),
    onClick: () => {
      M({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: D
      }), null == v || v()
    },
    children: B
  })
}