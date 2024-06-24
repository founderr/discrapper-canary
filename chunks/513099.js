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
  S = n(785717),
  f = n(204197),
  N = n(652853),
  A = n(228168),
  m = n(981631),
  O = n(474936),
  R = n(148443);
let p = l.AvatarSizes.SIZE_80,
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
  } = (0, N.z)(), {
    analyticsLocations: D
  } = (0, c.ZP)(_.Z.AVATAR), {
    trackUserProfileAction: M
  } = (0, S.KZ)(), P = T.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, O.p9.TIER_2), y = r.useMemo(() => (0, d.W)(t, h), [t, h]), {
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
    eventHandlers: B
  } = (0, f.Z)({
    user: t,
    guildId: s,
    size: p,
    animateOnHover: C
  }), k = (0, i.jsx)(g, {
    src: w,
    avatarDecoration: G,
    size: p,
    "aria-label": t.username,
    imageClassName: null != v ? R.overlay : void 0,
    status: y ? m.Skl.UNKNOWN : U,
    statusBackdropColor: P && !y ? (0, l.getStatusBackdropColor)(L) : void 0,
    isMobile: b,
    statusTooltip: !0,
    statusTooltipDelay: A.vB
  });
  return null == v ? (0, i.jsx)("div", {
    ...B,
    className: R.avatar,
    children: k
  }) : (0, i.jsx)(l.Clickable, {
    ...B,
    className: o()(R.avatar, R.clickable),
    onClick: () => {
      M({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: D
      }), null == v || v()
    },
    children: k
  })
}