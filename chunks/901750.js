var n = t(735250);
t(470079);
var i = t(481060),
  a = t(689938),
  l = t(304089);
s.Z = function(e) {
  let {
    hasGuildBoostSlots: s,
    hasAppliedGuildBoosts: r,
    isUserPremiumTier2: o,
    subscriptionIsPausedOrPausePending: c
  } = e;
  return (0, n.jsxs)("div", {
    className: l.wrapper,
    children: [(0, n.jsx)("div", {
      className: l.guildBoostGemWrapper,
      children: (0, n.jsx)("img", {
        alt: "",
        className: l.guildBoostGem,
        src: t(908635)
      })
    }), (0, n.jsxs)("div", {
      className: l.gradient,
      children: [(0, n.jsx)(i.Heading, {
        variant: "display-md",
        className: l.heading,
        children: function(e) {
          let {
            hasGuildBoostSlots: s,
            hasAppliedGuildBoosts: t,
            isUserPremiumTier2: n,
            subscriptionIsPausedOrPausePending: i
          } = e;
          return i ? a.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_YOUR_GUILD_BOOSTS.format() : s ? n && !t ? a.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_HAS_UNAPPLIED_FREE_GUILD_BOOSTS.format() : a.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_YOUR_GUILD_BOOSTS.format() : a.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_NO_GUILD_BOOSTS
        }({
          hasGuildBoostSlots: s,
          isUserPremiumTier2: o,
          hasAppliedGuildBoosts: r,
          subscriptionIsPausedOrPausePending: c
        })
      }), (0, n.jsx)("svg", {
        viewBox: "0 0 660 210",
        className: l.wave,
        children: (0, n.jsx)("path", {
          d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z"
        })
      })]
    })]
  })
}