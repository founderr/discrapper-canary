n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(197115),
  a = n(702346),
  r = n(981631),
  o = n(474936),
  c = n(689938),
  u = n(255265);

function d(e) {
  let {
    message: t,
    channel: n
  } = e, d = null != n.guild_id ? r.jXE.TEXT_IN_VOICE : r.jXE.CHANNEL_TEXT_AREA;
  return (0, s.jsx)(a.Z, {
    contentClassName: u.messageContentContainer,
    iconContainerClassName: u.iconContainer,
    iconNode: (0, s.jsx)(i.BellIcon, {
      colorClass: u.icon
    }),
    children: (0, s.jsxs)("div", {
      className: u.container,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: t.content
        }), (0, s.jsxs)("div", {
          className: u.nitroBadge,
          children: [(0, s.jsx)(i.NitroWheelIcon, {
            size: "xs",
            colorClass: u.nitroBadgeIcon
          }), (0, s.jsx)(i.Text, {
            variant: "text-xs/medium",
            className: u.nitroBadgeText,
            children: c.Z.Messages.POWERED_BY_NITRO
          })]
        })]
      }), (0, s.jsx)("div", {
        className: u.buttonContainer,
        children: (0, s.jsx)(l.Z, {
          showGradient: !0,
          iconClassName: u.premiumIcon,
          subscriptionTier: o.Si.TIER_2,
          buttonText: c.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
          size: i.Button.Sizes.SMALL,
          premiumModalAnalyticsLocation: {
            section: d,
            object: r.qAy.MESSAGE
          }
        })
      })]
    })
  })
}