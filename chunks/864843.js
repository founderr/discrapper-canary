"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250"),
  i = n("470079"),
  l = n("481060"),
  r = n("355467"),
  a = n("887706"),
  u = n("270144"),
  o = n("171246"),
  c = n("174931"),
  d = n("689938"),
  f = n("541940");

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

function I(e) {
  var t;
  let {
    guildId: n,
    applicationId: o,
    applicationPrimarySkuId: d,
    analyticsLocation: I,
    onComplete: h,
    forcesTransitionToGuild: m
  } = e, {
    listingsLoaded: C
  } = (0, u.useFetchListingsForApplication)(o, d), {
    entitlementsLoaded: _
  } = (0, u.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: g
  } = (0, u.useActiveSubscriptionListingForApplication)(o, n), v = (0, a.default)();
  i.useEffect(() => {
    v && r.fetchSubscriptions()
  }, [v]);
  let A = null == g ? void 0 : g.id,
    R = null == g ? void 0 : null === (t = g.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return C && (null == n || _) ? null == A || null == R || 0 === R.length ? null : (0, s.jsx)("div", {
    className: f.container,
    children: R.map(e => (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(p, {
        listing: e
      }), (0, s.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: A,
        analyticsLocation: I,
        onComplete: h,
        forcesTransitionToGuild: m
      })]
    }, e.id))
  }) : (0, s.jsx)("div", {
    className: f.loadingContainer,
    children: (0, s.jsx)(l.Spinner, {})
  })
}