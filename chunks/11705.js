"use strict";
s.r(t), s.d(t, {
  GuildRoleSubscriptionCollapsibleCardBasicInfo: function() {
    return C
  }
}), s("47120");
var n = s("735250");
s("470079");
var i = s("481060"),
  l = s("765400"),
  a = s("86813"),
  r = s("826026"),
  u = s("937615"),
  o = s("817460"),
  d = s("290348"),
  c = s("367719"),
  f = s("882101"),
  _ = s("689938"),
  I = s("778269");
let C = e => {
  let {
    listingId: t,
    isListingPublished: s,
    expanded: C,
    onToggleExpanded: m
  } = e, E = (0, c.default)(), [S] = d.useName(t), [T] = d.useImage(t, E), [N] = d.useSubscriptionPlan(t);
  return (0, n.jsxs)("div", {
    className: I.container,
    children: [(0, n.jsx)(f.GuildRoleSubscriptionCardTierImage, {
      image: T
    }), (0, n.jsxs)("div", {
      className: I.tierTextInfoContainer,
      children: [(0, n.jsx)(f.GuildRoleSubscriptionCardTierName, {
        listingName: S
      }), (0, n.jsxs)("div", {
        className: I.tierPriceContainer,
        children: [!s && (0, n.jsx)(l.MonetizationListingDraftBadge, {}), (0, n.jsxs)(i.Text, {
          variant: "text-xs/normal",
          className: I.tierPrice,
          children: [(0, u.formatPrice)(N.price, N.currency), " ", _.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            period: (0, o.formatPlanInterval)({
              interval: N.interval,
              interval_count: N.interval_count
            })
          })]
        })]
      })]
    }), (0, n.jsx)(i.Clickable, {
      onClick: m,
      children: C ? (0, n.jsx)(r.default, {
        className: I.toggleButton
      }) : (0, n.jsx)(a.default, {
        className: I.toggleButton
      })
    })]
  })
}