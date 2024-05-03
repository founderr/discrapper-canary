"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  i = n("470079"),
  r = n("481060"),
  s = n("355467"),
  l = n("887706"),
  o = n("270144"),
  c = n("171246"),
  d = n("174931"),
  u = n("689938"),
  f = n("641899");

function m(e) {
  let {
    listing: t
  } = e, n = (0, c.isApplicationGuildSubscription)(t.sku_flags);
  return (0, c.isApplicationUserSubscription)(t.sku_flags) || n ? (0, a.jsxs)("div", {
    className: f.cta,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      children: n ? u.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : u.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, a.jsx)(r.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: n ? u.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : u.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: t.name
      })
    })]
  }) : null
}

function h(e) {
  var t;
  let {
    guildId: n,
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
    guildId: n
  }), {
    subscriptionGroupListing: C
  } = (0, o.useActiveSubscriptionListingForApplication)(c, n), g = (0, l.default)();
  i.useEffect(() => {
    g && s.fetchSubscriptions()
  }, [g]);
  let x = null == C ? void 0 : C.id,
    I = null == C ? void 0 : null === (t = C.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return p && (null == n || _) ? null == x || null == I || 0 === I.length ? null : (0, a.jsx)("div", {
    className: f.container,
    children: I.map(e => (0, a.jsxs)(i.Fragment, {
      children: [(0, a.jsx)(m, {
        listing: e
      }), (0, a.jsx)(d.default, {
        listing: e,
        guildId: n,
        groupListingId: x,
        analyticsLocation: h,
        onComplete: E,
        forcesTransitionToGuild: T
      })]
    }, e.id))
  }) : (0, a.jsx)("div", {
    className: f.loadingContainer,
    children: (0, a.jsx)(r.Spinner, {})
  })
}