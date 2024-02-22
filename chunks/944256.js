"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCardTierName: function() {
    return f
  },
  GuildRoleSubscriptionCardTierImage: function() {
    return h
  },
  GuildRoleSubscriptionCardBasicInfo: function() {
    return m
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("944371"),
  i = n("153160"),
  r = n("577357"),
  u = n("167109"),
  o = n("373622"),
  d = n("782340"),
  c = n("753064");
let f = e => {
  let {
    listingName: t
  } = e;
  return (0, l.jsx)(a.Heading, {
    variant: "text-md/normal",
    color: "interactive-active",
    className: c.tierName,
    children: t
  })
};

function h(e) {
  let {
    image: t
  } = e;
  return null == t ? null : (0, l.jsx)("img", {
    src: t,
    alt: "",
    className: c.tierImage
  })
}
let m = e => {
  let {
    listingId: t,
    isListingPublished: n
  } = e, m = (0, o.default)(), [p] = u.useName(t), [E] = u.useImage(t, m), [S] = u.useSubscriptionPlan(t);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f, {
      listingName: p
    }), (0, l.jsx)(h, {
      image: E
    }), !n && (0, l.jsx)("div", {
      className: c.draftBadgeContainer,
      children: (0, l.jsx)(s.MonetizationListingDraftBadge, {})
    }), (0, l.jsx)(a.Text, {
      variant: "heading-xl/semibold",
      className: c.tierPrice,
      tag: "div",
      children: (0, i.formatPrice)(S.price, S.currency)
    }), (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "interactive-normal",
      className: c.tierPeriod,
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
        period: (0, r.formatPlanInterval)({
          interval: S.interval,
          interval_count: S.interval_count
        })
      })
    })]
  })
}