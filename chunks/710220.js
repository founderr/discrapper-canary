t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  r = t(204197),
  i = t(182294),
  l = t(689938),
  o = t(247764),
  _ = t(144343);

function c(e) {
  var s;
  let {
    referrer: t
  } = e, {
    avatarSrc: c,
    eventHandlers: E
  } = (0, r.Z)({
    user: t,
    size: i.EF.SIZE_32,
    animateOnHover: !0
  });
  return (0, n.jsx)("div", {
    className: o.attributionBannerContainer,
    children: (0, n.jsxs)("div", {
      className: o.attributionBannerContent,
      children: [(0, n.jsx)("div", {
        className: o.iconContainer,
        children: (0, n.jsx)(a.Avatar, {
          className: o.icon,
          src: c,
          "aria-label": t.username,
          size: i.EF.SIZE_32,
          ...E
        })
      }), (0, n.jsx)(a.Heading, {
        variant: "heading-lg/medium",
        className: o.textContainer,
        children: l.Z.Messages.REFERRAL_PROGRAM_SUBSCRIBER_HOMER_BANNER.format({
          username: null != (s = t).globalName ? s.globalName : s.username
        })
      }), (0, n.jsx)("img", {
        src: _,
        alt: "",
        className: o.attributionIcon
      })]
    })
  })
}