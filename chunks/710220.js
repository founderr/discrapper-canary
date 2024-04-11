"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var i = s("481060"),
  r = s("204197"),
  l = s("182294"),
  n = s("689938"),
  o = s("853626"),
  u = s("144343");

function d(e) {
  var t;
  let {
    referrer: s
  } = e, {
    avatarSrc: d,
    eventHandlers: c
  } = (0, r.default)({
    user: s,
    size: l.AvatarSizes.SIZE_32,
    animateOnHover: !0
  });
  return (0, a.jsx)("div", {
    className: o.attributionBannerContainer,
    children: (0, a.jsxs)("div", {
      className: o.attributionBannerContent,
      children: [(0, a.jsx)("div", {
        className: o.iconContainer,
        children: (0, a.jsx)(i.Avatar, {
          className: o.icon,
          src: d,
          "aria-label": s.username,
          size: l.AvatarSizes.SIZE_32,
          ...c
        })
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-lg/medium",
        className: o.textContainer,
        children: n.default.Messages.USER_TRIAL_OFFER_ATTRIBUTION_BANNER.format({
          username: null != (t = s).globalName ? t.globalName : t.username
        })
      }), (0, a.jsx)("img", {
        src: u,
        alt: "",
        className: o.attributionIcon
      })]
    })
  })
}