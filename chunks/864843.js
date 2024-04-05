"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250"),
  i = n("470079"),
  l = n("481060"),
  a = n("355467"),
  r = n("887706"),
  u = n("270144"),
  o = n("171246"),
  c = n("174931"),
  d = n("689938"),
  f = n("276552");

function p(e) {
  let {
    listing: t
  } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags);
  return (0, o.isApplicationUserSubscription)(t.sku_flags) || n ? (0, s.jsxs)("div", {
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
    applicationId: o,
    applicationPrimarySkuId: d,
    analyticsLocation: h,
    onComplete: I,
    forcesTransitionToGuild: _
  } = e, {
    listingsLoaded: v
  } = (0, u.useFetchListingsForApplication)(o, d), {
    entitlementsLoaded: m
  } = (0, u.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: C
  } = (0, u.useActiveSubscriptionListingForApplication)(o, n), g = (0, r.default)();
  i.useEffect(() => {
    g && a.fetchSubscriptions()
  }, [g]);
  let T = null == C ? void 0 : C.id,
    A = null == C ? void 0 : null === (t = C.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return v && (null == n || m) ? null == T || null == A || 0 === A.length ? null : (0, s.jsx)("div", {
    className: f.container,
    children: A.map(e => (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(p, {
        listing: e
      }), (0, s.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: T,
        analyticsLocation: h,
        onComplete: I,
        forcesTransitionToGuild: _
      })]
    }, e.id))
  }) : (0, s.jsx)("div", {
    className: f.loadingContainer,
    children: (0, s.jsx)(l.Spinner, {})
  })
}