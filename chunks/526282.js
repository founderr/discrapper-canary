"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("481060"),
  r = n("100527"),
  o = n("970606"),
  u = n("207796"),
  d = n("689938"),
  c = n("531612");
t.default = s.memo(function() {
  let e = (0, u.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, l.default);
  s.useEffect(() => {
    (0, o.trackClanUserInviteViewed)({
      location: r.default.CLAN_DISCOVERY
    })
  }, []);
  let t = s.useCallback(() => {
    (0, o.trackClanUserInviteClicked)({
      location: r.default.CLAN_DISCOVERY
    }), e(u.ClanDiscoveryUserScreens.USER_ONBOARDING)
  }, [e]);
  return (0, a.jsx)("div", {
    className: c.upsellContainer,
    children: (0, a.jsxs)("div", {
      className: c.upsellDetails,
      children: [(0, a.jsx)(i.Heading, {
        className: c.upsellTitle,
        variant: "heading-xxl/semibold",
        color: "header-primary",
        children: d.default.Messages.CLAN_DISCOVERY_UPSELL_TITLE
      }), (0, a.jsxs)(i.Text, {
        className: c.upsellSubtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: [" ", d.default.Messages.CLAN_DISCOVERY_UPSELL_SUBTITLE]
      }), (0, a.jsx)(i.Button, {
        onClick: t,
        children: (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          className: c.customizeButton,
          children: d.default.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
        })
      })]
    })
  })
})