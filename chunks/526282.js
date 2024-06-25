var s = n(735250),
  i = n(470079),
  l = n(143927),
  a = n(481060),
  r = n(100527),
  o = n(970606),
  c = n(207796),
  u = n(689938),
  d = n(224025);
t.Z = i.memo(function() {
  let e = (0, c.GN)(e => e.setUserUpsellScreen, l.Z);
  i.useEffect(() => {
    (0, o.tv)({
      location: r.Z.CLAN_DISCOVERY
    })
  }, []);
  let t = i.useCallback(() => {
    (0, o.GS)({
      location: r.Z.CLAN_DISCOVERY
    }), e(c.o2.USER_ONBOARDING)
  }, [e]);
  return (0, s.jsx)("div", {
    className: d.upsellContainer,
    children: (0, s.jsxs)("div", {
      className: d.upsellDetails,
      children: [(0, s.jsx)(a.Heading, {
        className: d.upsellTitle,
        variant: "heading-xxl/semibold",
        color: "header-primary",
        children: u.Z.Messages.CLAN_DISCOVERY_UPSELL_TITLE
      }), (0, s.jsxs)(a.Text, {
        className: d.upsellSubtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: [" ", u.Z.Messages.CLAN_DISCOVERY_UPSELL_SUBTITLE]
      }), (0, s.jsx)(a.Button, {
        onClick: t,
        children: (0, s.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          className: d.customizeButton,
          children: u.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
        })
      })]
    })
  })
})