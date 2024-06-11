"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCollapsibleCardBasicInfo: function() {
    return T
  }
}), n("47120");
var i = n("735250");
n("470079");
var a = n("481060"),
  s = n("765400"),
  r = n("86813"),
  l = n("826026"),
  u = n("937615"),
  o = n("817460"),
  d = n("290348"),
  c = n("367719"),
  f = n("882101"),
  E = n("689938"),
  _ = n("778269");
let T = e => {
  let {
    listingId: t,
    isListingPublished: n,
    expanded: T,
    onToggleExpanded: I
  } = e, S = (0, c.default)(), [C] = d.useName(t), [m] = d.useImage(t, S), [N] = d.useSubscriptionPlan(t);
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(f.GuildRoleSubscriptionCardTierImage, {
      image: m
    }), (0, i.jsxs)("div", {
      className: _.tierTextInfoContainer,
      children: [(0, i.jsx)(f.GuildRoleSubscriptionCardTierName, {
        listingName: C
      }), (0, i.jsxs)("div", {
        className: _.tierPriceContainer,
        children: [!n && (0, i.jsx)(s.MonetizationListingDraftBadge, {}), (0, i.jsxs)(a.Text, {
          variant: "text-xs/normal",
          className: _.tierPrice,
          children: [(0, u.formatPrice)(N.price, N.currency), " ", E.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            period: (0, o.formatPlanInterval)({
              interval: N.interval,
              interval_count: N.interval_count
            })
          })]
        })]
      })]
    }), (0, i.jsx)(a.Clickable, {
      onClick: I,
      children: T ? (0, i.jsx)(l.default, {
        className: _.toggleButton
      }) : (0, i.jsx)(r.default, {
        className: _.toggleButton
      })
    })]
  })
}