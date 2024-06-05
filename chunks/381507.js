"use strict";
s.r(t);
var n = s("735250");
s("470079");
var l = s("780384"),
  r = s("481060"),
  i = s("410030"),
  a = s("204197"),
  o = s("51144"),
  u = s("105759"),
  C = s("898969"),
  d = s("703614"),
  c = s("182294"),
  p = s("689938"),
  _ = s("866127");
t.default = () => {
  let e = (0, u.default)(),
    {
      avatarSrc: t,
      eventHandlers: s
    } = (0, a.default)({
      user: e,
      size: c.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }),
    f = (0, i.useTheme)(),
    E = (0, l.isThemeLight)(f),
    x = o.default.getName(e),
    L = E ? C.default : d.default;
  return null == e ? null : (0, n.jsxs)("div", {
    className: _.attributionBannerContainer,
    children: [(0, n.jsx)("div", {
      className: _.avatarContainer,
      children: (0, n.jsx)(r.Avatar, {
        src: t,
        "aria-label": e.username,
        size: c.AvatarSizes.SIZE_32,
        ...s
      })
    }), (0, n.jsx)(r.Text, {
      variant: "text-xs/bold",
      className: _.bannerHeader,
      children: p.default.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
        userName: x
      })
    }), (0, n.jsx)(L, {
      className: _.bannerIcon
    })]
  })
}