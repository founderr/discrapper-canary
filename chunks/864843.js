"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250"),
  r = a("470079"),
  i = a("481060"),
  s = a("355467"),
  l = a("887706"),
  o = a("270144"),
  c = a("171246"),
  d = a("174931"),
  u = a("689938"),
  f = a("641899");

function m(e) {
  let {
    listing: t
  } = e, a = (0, c.isApplicationGuildSubscription)(t.sku_flags);
  return (0, c.isApplicationUserSubscription)(t.sku_flags) || a ? (0, n.jsxs)("div", {
    className: f.cta,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      children: a ? u.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : u.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, n.jsx)(i.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: a ? u.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : u.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: t.name
      })
    })]
  }) : null
}

function h(e) {
  var t;
  let {
    guildId: a,
    applicationId: c,
    applicationPrimarySkuId: u,
    analyticsLocation: h,
    onComplete: E,
    forcesTransitionToGuild: T
  } = e, {
    listingsLoaded: p
  } = (0, o.useFetchListingsForApplication)(c, u), {
    entitlementsLoaded: _
  } = (0, o.useFetchEntitlementsForGuild)({
    guildId: a
  }), {
    subscriptionGroupListing: C
  } = (0, o.useActiveSubscriptionListingForApplication)(c, a), g = (0, l.default)();
  r.useEffect(() => {
    g && s.fetchSubscriptions()
  }, [g]);
  let x = null == C ? void 0 : C.id,
    I = null == C ? void 0 : null === (t = C.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return p && (null == a || _) ? null == x || null == I || 0 === I.length ? null : (0, n.jsx)("div", {
    className: f.container,
    children: I.map(e => (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(m, {
        listing: e
      }), (0, n.jsx)(d.default, {
        listing: e,
        guildId: a,
        groupListingId: x,
        analyticsLocation: h,
        onComplete: E,
        forcesTransitionToGuild: T
      })]
    }, e.id))
  }) : (0, n.jsx)("div", {
    className: f.loadingContainer,
    children: (0, n.jsx)(i.Spinner, {})
  })
}