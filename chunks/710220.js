s.d(t, {
  Z: function() {
    return E
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(204197),
  r = s(182294),
  l = s(689938),
  o = s(247764),
  c = s(144343);

function E(e) {
  var t;
  let {
    referrer: s
  } = e, {
    avatarSrc: E,
    eventHandlers: _
  } = (0, i.Z)({
    user: s,
    size: r.EF.SIZE_32,
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
          src: E,
          "aria-label": s.username,
          size: r.EF.SIZE_32,
          ..._
        })
      }), (0, n.jsx)(a.Heading, {
        variant: "heading-lg/medium",
        className: o.textContainer,
        children: l.Z.Messages.REFERRAL_PROGRAM_SUBSCRIBER_HOMER_BANNER.format({
          username: null != (t = s).globalName ? t.globalName : t.username
        })
      }), (0, n.jsx)("img", {
        src: c,
        alt: "",
        className: o.attributionIcon
      })]
    })
  })
}