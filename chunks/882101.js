"use strict";
s.r(t), s.d(t, {
  GuildRoleSubscriptionCardBasicInfo: function() {
    return I
  },
  GuildRoleSubscriptionCardTierImage: function() {
    return _
  },
  GuildRoleSubscriptionCardTierName: function() {
    return f
  }
}), s("47120");
var n = s("735250");
s("470079");
var i = s("481060"),
  l = s("765400"),
  a = s("937615"),
  r = s("817460"),
  u = s("290348"),
  o = s("367719"),
  d = s("689938"),
  c = s("178026");
let f = e => {
  let {
    listingName: t
  } = e;
  return (0, n.jsx)(i.Heading, {
    variant: "text-md/normal",
    color: "interactive-active",
    className: c.tierName,
    children: t
  })
};

function _(e) {
  let {
    image: t
  } = e;
  return null == t ? null : (0, n.jsx)("img", {
    src: t,
    alt: "",
    className: c.tierImage
  })
}
let I = e => {
  let {
    listingId: t,
    isListingPublished: s
  } = e, I = (0, o.default)(), [C] = u.useName(t), [m] = u.useImage(t, I), [E] = u.useSubscriptionPlan(t);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(f, {
      listingName: C
    }), (0, n.jsx)(_, {
      image: m
    }), !s && (0, n.jsx)("div", {
      className: c.draftBadgeContainer,
      children: (0, n.jsx)(l.MonetizationListingDraftBadge, {})
    }), (0, n.jsx)(i.Text, {
      variant: "heading-xl/semibold",
      className: c.tierPrice,
      tag: "div",
      children: (0, a.formatPrice)(E.price, E.currency)
    }), (0, n.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "interactive-normal",
      className: c.tierPeriod,
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
        period: (0, r.formatPlanInterval)({
          interval: E.interval,
          interval_count: E.interval_count
        })
      })
    })]
  })
}