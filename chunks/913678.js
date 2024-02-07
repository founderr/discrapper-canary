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
    forcesTransitionToGuild: v
  } = e, {
    listingsLoaded: E
  } = (0, u.useFetchListingsForApplication)(o, d), {
    entitlementsLoaded: C
  } = (0, u.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: _
  } = (0, u.useActiveSubscriptionListingForApplication)(o, n), T = (0, l.default)();
  i.useEffect(() => {
    T && a.fetchSubscriptions()
  }, [T]);
  let A = null == _ ? void 0 : _.id,
    m = null == _ ? void 0 : null === (t = _.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return E && (null == n || C) ? null == A || null == m || 0 === m.length ? null : (0, s.jsx)("div", {
    className: f.container,
    children: m.map(e => (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(h, {
        listing: e
      }), (0, s.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: A,
        analyticsLocation: p,
        onComplete: I,
        forcesTransitionToGuild: v
      })]
    }, e.id))
  }) : (0, s.jsx)("div", {
    className: f.loadingContainer,
    children: (0, s.jsx)(r.Spinner, {})
  })
}