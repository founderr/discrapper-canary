"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983"),
  i = n("884691"),
  r = n("77078"),
  a = n("850068"),
  l = n("598981"),
  u = n("650509"),
  o = n("90592"),
  c = n("94973"),
  d = n("782340"),
  f = n("358261");

function h(e) {
  let {
    listing: t
  } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), i = (0, o.isApplicationUserSubscription)(t.sku_flags);
  return i || n ? (0, s.jsxs)("div", {
    className: f.cta,
    children: [(0, s.jsx)(r.Heading, {
      variant: "heading-lg/bold",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, s.jsx)(r.Heading, {
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
    onComplete: I,
    forcesTransitionToGuild: C
  } = e, {
    listingsLoaded: v
  } = (0, u.useFetchListingsForApplication)(o, d), {
    entitlementsLoaded: E
  } = (0, u.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: T
  } = (0, u.useActiveSubscriptionListingForApplication)(o, n), A = (0, l.default)();
  i.useEffect(() => {
    A && a.fetchSubscriptions()
  }, [A]);
  let _ = null == T ? void 0 : T.id,
    g = null == T ? void 0 : null === (t = T.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return v && (null == n || E) ? null == _ || null == g || 0 === g.length ? null : (0, s.jsx)("div", {
    className: f.container,
    children: g.map(e => (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(h, {
        listing: e
      }), (0, s.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: _,
        analyticsLocation: p,
        onComplete: I,
        forcesTransitionToGuild: C
      })]
    }, e.id))
  }) : (0, s.jsx)("div", {
    className: f.loadingContainer,
    children: (0, s.jsx)(r.Spinner, {})
  })
}