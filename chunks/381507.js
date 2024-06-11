"use strict";
s.r(t);
var i = s("735250");
s("470079");
var n = s("780384"),
  r = s("481060"),
  l = s("410030"),
  a = s("204197"),
  o = s("51144"),
  C = s("105759"),
  u = s("898969"),
  d = s("703614"),
  _ = s("182294"),
  p = s("689938"),
  c = s("866127");
t.default = () => {
  let e = (0, C.default)(),
    {
      avatarSrc: t,
      eventHandlers: s
    } = (0, a.default)({
      user: e,
      size: _.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }),
    f = (0, l.useTheme)(),
    x = (0, n.isThemeLight)(f),
    L = o.default.getName(e),
    E = x ? u.default : d.default;
  return null == e ? null : (0, i.jsxs)("div", {
    className: c.attributionBannerContainer,
    children: [(0, i.jsx)("div", {
      className: c.avatarContainer,
      children: (0, i.jsx)(r.Avatar, {
        src: t,
        "aria-label": e.username,
        size: _.AvatarSizes.SIZE_32,
        ...s
      })
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/bold",
      className: c.bannerHeader,
      children: p.default.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
        userName: L
      })
    }), (0, i.jsx)(E, {
      className: c.bannerIcon
    })]
  })
}