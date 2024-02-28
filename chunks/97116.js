"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCollapsibleCardBasicInfo: function() {
    return p
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("944371"),
  i = n("837899"),
  r = n("425190"),
  u = n("153160"),
  o = n("577357"),
  d = n("167109"),
  c = n("373622"),
  f = n("944256"),
  h = n("782340"),
  m = n("176256");
let p = e => {
  let {
    listingId: t,
    isListingPublished: n,
    expanded: p,
    onToggleExpanded: E
  } = e, g = (0, c.default)(), [S] = d.useName(t), [C] = d.useImage(t, g), [_] = d.useSubscriptionPlan(t);
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsx)(f.GuildRoleSubscriptionCardTierImage, {
      image: C
    }), (0, l.jsxs)("div", {
      className: m.tierTextInfoContainer,
      children: [(0, l.jsx)(f.GuildRoleSubscriptionCardTierName, {
        listingName: S
      }), (0, l.jsxs)("div", {
        className: m.tierPriceContainer,
        children: [!n && (0, l.jsx)(s.MonetizationListingDraftBadge, {}), (0, l.jsxs)(a.Text, {
          variant: "text-xs/normal",
          className: m.tierPrice,
          children: [(0, u.formatPrice)(_.price, _.currency), " ", h.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            period: (0, o.formatPlanInterval)({
              interval: _.interval,
              interval_count: _.interval_count
            })
          })]
        })]
      })]
    }), (0, l.jsx)(a.Clickable, {
      onClick: E,
      children: p ? (0, l.jsx)(r.default, {
        className: m.toggleButton
      }) : (0, l.jsx)(i.default, {
        className: m.toggleButton
      })
    })]
  })
}