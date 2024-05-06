"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  r = n("470079"),
  s = n("481060"),
  i = n("355467"),
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
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-lg/bold",
      children: n ? u.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : u.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, a.jsx)(s.Heading, {
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
    onComplete: p,
    forcesTransitionToGuild: T
  } = e, {
    listingsLoaded: E
  } = (0, o.useFetchListingsForApplication)(c, u), {
    entitlementsLoaded: C
  } = (0, o.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: _
  } = (0, o.useActiveSubscriptionListingForApplication)(c, n), x = (0, l.default)();
  r.useEffect(() => {
    x && i.fetchSubscriptions()
  }, [x]);
  let g = null == _ ? void 0 : _.id,
    I = null == _ ? void 0 : null === (t = _.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return E && (null == n || C) ? null == g || null == I || 0 === I.length ? null : (0, a.jsx)("div", {
    className: f.container,
    children: I.map(e => (0, a.jsxs)(r.Fragment, {
      children: [(0, a.jsx)(m, {
        listing: e
      }), (0, a.jsx)(d.default, {
        listing: e,
        guildId: n,
        groupListingId: g,
        analyticsLocation: h,
        onComplete: p,
        forcesTransitionToGuild: T
      })]
    }, e.id))
  }) : (0, a.jsx)("div", {
    className: f.loadingContainer,
    children: (0, a.jsx)(s.Spinner, {})
  })
}