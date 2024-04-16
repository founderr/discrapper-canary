"use strict";
i.r(t), i.d(t, {
  default: function() {
    return C
  }
});
var n = i("735250"),
  r = i("470079"),
  s = i("481060"),
  a = i("355467"),
  l = i("887706"),
  o = i("270144"),
  c = i("171246"),
  u = i("174931"),
  d = i("689938"),
  f = i("276552");

function p(e) {
  let {
    listing: t
  } = e, i = (0, c.isApplicationGuildSubscription)(t.sku_flags);
  return (0, c.isApplicationUserSubscription)(t.sku_flags) || i ? (0, n.jsxs)("div", {
    className: f.cta,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-lg/bold",
      children: i ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, n.jsx)(s.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: i ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: t.name
      })
    })]
  }) : null
}

function C(e) {
  var t;
  let {
    guildId: i,
    applicationId: c,
    applicationPrimarySkuId: d,
    analyticsLocation: C,
    onComplete: m,
    forcesTransitionToGuild: h
  } = e, {
    listingsLoaded: _
  } = (0, o.useFetchListingsForApplication)(c, d), {
    entitlementsLoaded: E
  } = (0, o.useFetchEntitlementsForGuild)({
    guildId: i
  }), {
    subscriptionGroupListing: I
  } = (0, o.useActiveSubscriptionListingForApplication)(c, i), T = (0, l.default)();
  r.useEffect(() => {
    T && a.fetchSubscriptions()
  }, [T]);
  let x = null == I ? void 0 : I.id,
    g = null == I ? void 0 : null === (t = I.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return _ && (null == i || E) ? null == x || null == g || 0 === g.length ? null : (0, n.jsx)("div", {
    className: f.container,
    children: g.map(e => (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(p, {
        listing: e
      }), (0, n.jsx)(u.default, {
        listing: e,
        guildId: i,
        groupListingId: x,
        analyticsLocation: C,
        onComplete: m,
        forcesTransitionToGuild: h
      })]
    }, e.id))
  }) : (0, n.jsx)("div", {
    className: f.loadingContainer,
    children: (0, n.jsx)(s.Spinner, {})
  })
}