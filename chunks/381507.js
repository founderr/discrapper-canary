"use strict";
n.r(t);
var s = n("735250");
n("470079");
var i = n("780384"),
  r = n("481060"),
  l = n("410030"),
  a = n("204197"),
  o = n("51144"),
  C = n("105759"),
  u = n("898969"),
  d = n("703614"),
  c = n("182294"),
  p = n("689938"),
  f = n("841140");
t.default = () => {
  let e = (0, C.default)(),
    {
      avatarSrc: t,
      eventHandlers: n
    } = (0, a.default)({
      user: e,
      size: c.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }),
    x = (0, l.useTheme)(),
    _ = (0, i.isThemeLight)(x),
    m = o.default.getName(e),
    E = _ ? u.default : d.default;
  return null == e ? null : (0, s.jsxs)("div", {
    className: f.attributionBannerContainer,
    children: [(0, s.jsx)("div", {
      className: f.avatarContainer,
      children: (0, s.jsx)(r.Avatar, {
        src: t,
        "aria-label": e.username,
        size: c.AvatarSizes.SIZE_32,
        ...n
      })
    }), (0, s.jsx)(r.Text, {
      variant: "text-xs/bold",
      className: f.bannerHeader,
      children: p.default.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
        userName: m
      })
    }), (0, s.jsx)(E, {
      className: f.bannerIcon
    })]
  })
}