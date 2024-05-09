"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("355467"),
  r = l("887706"),
  o = l("270144"),
  d = l("171246"),
  u = l("174931"),
  c = l("689938"),
  f = l("541940");

function m(e) {
  let {
    listing: t
  } = e, l = (0, d.isApplicationGuildSubscription)(t.sku_flags);
  return (0, d.isApplicationUserSubscription)(t.sku_flags) || l ? (0, n.jsxs)("div", {
    className: f.cta,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-lg/bold",
      children: l ? c.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : c.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, n.jsx)(s.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: l ? c.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : c.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: t.name
      })
    })]
  }) : null
}

function I(e) {
  var t;
  let {
    guildId: l,
    applicationId: d,
    applicationPrimarySkuId: c,
    analyticsLocation: I,
    onComplete: T,
    forcesTransitionToGuild: N
  } = e, {
    listingsLoaded: E
  } = (0, o.useFetchListingsForApplication)(d, c), {
    entitlementsLoaded: S
  } = (0, o.useFetchEntitlementsForGuild)({
    guildId: l
  }), {
    subscriptionGroupListing: g
  } = (0, o.useActiveSubscriptionListingForApplication)(d, l), p = (0, r.default)();
  a.useEffect(() => {
    p && i.fetchSubscriptions()
  }, [p]);
  let h = null == g ? void 0 : g.id,
    _ = null == g ? void 0 : null === (t = g.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return E && (null == l || S) ? null == h || null == _ || 0 === _.length ? null : (0, n.jsx)("div", {
    className: f.container,
    children: _.map(e => (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(m, {
        listing: e
      }), (0, n.jsx)(u.default, {
        listing: e,
        guildId: l,
        groupListingId: h,
        analyticsLocation: I,
        onComplete: T,
        forcesTransitionToGuild: N
      })]
    }, e.id))
  }) : (0, n.jsx)("div", {
    className: f.loadingContainer,
    children: (0, n.jsx)(s.Spinner, {})
  })
}