"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983"),
  i = n("884691"),
  l = n("77078"),
  r = n("850068"),
  a = n("598981"),
  u = n("650509"),
  o = n("90592"),
  c = n("94973"),
  d = n("782340"),
  f = n("771077");

function h(e) {
  let {
    listing: t
  } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), i = (0, o.isApplicationUserSubscription)(t.sku_flags);
  return i || n ? (0, s.jsxs)("div", {
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

function p(e) {
  var t;
  let {
    guildId: n,
    applicationId: o,
    applicationPrimarySkuId: d,
    analyticsLocation: p,
    onComplete: v,
    forcesTransitionToGuild: I
  } = e, {
    listingsLoaded: _
  } = (0, u.useFetchListingsForApplication)(o, d), {
    entitlementsLoaded: m
  } = (0, u.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: C
  } = (0, u.useActiveSubscriptionListingForApplication)(o, n), E = (0, a.default)();
  i.useEffect(() => {
    E && r.fetchSubscriptions()
  }, [E]);
  let A = null == C ? void 0 : C.id,
    T = null == C ? void 0 : null === (t = C.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return _ && (null == n || m) ? null == A || null == T || 0 === T.length ? null : (0, s.jsx)("div", {
    className: f.container,
    children: T.map(e => (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(h, {
        listing: e
      }), (0, s.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: A,
        analyticsLocation: p,
        onComplete: v,
        forcesTransitionToGuild: I
      })]
    }, e.id))
  }) : (0, s.jsx)("div", {
    className: f.loadingContainer,
    children: (0, s.jsx)(l.Spinner, {})
  })
}