"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250"),
  i = n("470079"),
  l = n("481060"),
  r = n("355467"),
  a = n("887706"),
  o = n("270144"),
  u = n("171246"),
  c = n("174931"),
  d = n("689938"),
  f = n("276552");

function p(e) {
  let {
    listing: t
  } = e, n = (0, u.isApplicationGuildSubscription)(t.sku_flags);
  return (0, u.isApplicationUserSubscription)(t.sku_flags) || n ? (0, s.jsxs)("div", {
    className: f.cta,
    children: [(0, s.jsx)(l.Heading, {
      variant: "heading-lg/bold",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, s.jsx)(l.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: t.name
      })
    })]
  }) : null
}

function h(e) {
  var t;
  let {
    guildId: n,
    applicationId: u,
    applicationPrimarySkuId: d,
    analyticsLocation: h,
    onComplete: v,
    forcesTransitionToGuild: m
  } = e, {
    listingsLoaded: I
  } = (0, o.useFetchListingsForApplication)(u, d), {
    entitlementsLoaded: _
  } = (0, o.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: g
  } = (0, o.useActiveSubscriptionListingForApplication)(u, n), C = (0, a.default)();
  i.useEffect(() => {
    C && r.fetchSubscriptions()
  }, [C]);
  let T = null == g ? void 0 : g.id,
    A = null == g ? void 0 : null === (t = g.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return I && (null == n || _) ? null == T || null == A || 0 === A.length ? null : (0, s.jsx)("div", {
    className: f.container,
    children: A.map(e => (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(p, {
        listing: e
      }), (0, s.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: T,
        analyticsLocation: h,
        onComplete: v,
        forcesTransitionToGuild: m
      })]
    }, e.id))
  }) : (0, s.jsx)("div", {
    className: f.loadingContainer,
    children: (0, s.jsx)(l.Spinner, {})
  })
}