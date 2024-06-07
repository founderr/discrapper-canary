"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCardBasicInfo: function() {
    return _
  },
  GuildRoleSubscriptionCardTierImage: function() {
    return E
  },
  GuildRoleSubscriptionCardTierName: function() {
    return f
  }
}), n("47120");
var i = n("735250");
n("470079");
var a = n("481060"),
  s = n("765400"),
  l = n("937615"),
  r = n("817460"),
  u = n("290348"),
  o = n("367719"),
  d = n("689938"),
  c = n("178026");
let f = e => {
  let {
    listingName: t
  } = e;
  return (0, i.jsx)(a.Heading, {
    variant: "text-md/normal",
    color: "interactive-active",
    className: c.tierName,
    children: t
  })
};

function E(e) {
  let {
    image: t
  } = e;
  return null == t ? null : (0, i.jsx)("img", {
    src: t,
    alt: "",
    className: c.tierImage
  })
}
let _ = e => {
  let {
    listingId: t,
    isListingPublished: n
  } = e, _ = (0, o.default)(), [T] = u.useName(t), [I] = u.useImage(t, _), [S] = u.useSubscriptionPlan(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(f, {
      listingName: T
    }), (0, i.jsx)(E, {
      image: I
    }), !n && (0, i.jsx)("div", {
      className: c.draftBadgeContainer,
      children: (0, i.jsx)(s.MonetizationListingDraftBadge, {})
    }), (0, i.jsx)(a.Text, {
      variant: "heading-xl/semibold",
      className: c.tierPrice,
      tag: "div",
      children: (0, l.formatPrice)(S.price, S.currency)
    }), (0, i.jsx)(a.Text, {
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