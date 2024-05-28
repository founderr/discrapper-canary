"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCollapsibleCardBasicInfo: function() {
    return T
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("481060"),
  i = n("765400"),
  l = n("86813"),
  r = n("826026"),
  u = n("937615"),
  o = n("817460"),
  d = n("290348"),
  c = n("367719"),
  E = n("882101"),
  f = n("689938"),
  _ = n("778269");
let T = e => {
  let {
    listingId: t,
    isListingPublished: n,
    expanded: T,
    onToggleExpanded: I
  } = e, S = (0, c.default)(), [m] = d.useName(t), [C] = d.useImage(t, S), [N] = d.useSubscriptionPlan(t);
  return (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsx)(E.GuildRoleSubscriptionCardTierImage, {
      image: C
    }), (0, s.jsxs)("div", {
      className: _.tierTextInfoContainer,
      children: [(0, s.jsx)(E.GuildRoleSubscriptionCardTierName, {
        listingName: m
      }), (0, s.jsxs)("div", {
        className: _.tierPriceContainer,
        children: [!n && (0, s.jsx)(i.MonetizationListingDraftBadge, {}), (0, s.jsxs)(a.Text, {
          variant: "text-xs/normal",
          className: _.tierPrice,
          children: [(0, u.formatPrice)(N.price, N.currency), " ", f.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            period: (0, o.formatPlanInterval)({
              interval: N.interval,
              interval_count: N.interval_count
            })
          })]
        })]
      })]
    }), (0, s.jsx)(a.Clickable, {
      onClick: I,
      children: T ? (0, s.jsx)(r.default, {
        className: _.toggleButton
      }) : (0, s.jsx)(l.default, {
        className: _.toggleButton
      })
    })]
  })
}