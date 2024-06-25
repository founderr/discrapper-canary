t.d(n, {
  Z: function() {
    return E
  }
});
var i = t(735250),
  l = t(470079),
  s = t(481060),
  a = t(355467),
  r = t(887706),
  o = t(270144),
  c = t(171246),
  d = t(174931),
  u = t(689938),
  I = t(636122);

function N(e) {
  let {
    listing: n
  } = e, t = (0, c.KK)(n.sku_flags);
  return (0, c.KW)(n.sku_flags) || t ? (0, i.jsxs)("div", {
    className: I.cta,
    children: [(0, i.jsx)(s.Heading, {
      variant: "heading-lg/bold",
      children: t ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, i.jsx)(s.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: t ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: n.name
      })
    })]
  }) : null
}

function E(e) {
  var n;
  let {
    guildId: t,
    applicationId: c,
    applicationPrimarySkuId: u,
    analyticsLocation: E,
    onComplete: T,
    forcesTransitionToGuild: m
  } = e, {
    listingsLoaded: _
  } = (0, o.FE)(c, u), {
    entitlementsLoaded: h
  } = (0, o.LM)({
    guildId: t
  }), {
    subscriptionGroupListing: g
  } = (0, o.F5)(c, t), O = (0, r.Z)();
  l.useEffect(() => {
    O && a.jg()
  }, [O]);
  let A = null == g ? void 0 : g.id,
    x = null == g ? void 0 : null === (n = g.subscription_listings) || void 0 === n ? void 0 : n.filter(e => e.published);
  return _ && (null == t || h) ? null == A || null == x || 0 === x.length ? null : (0, i.jsx)("div", {
    className: I.container,
    children: x.map(e => (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(N, {
        listing: e
      }), (0, i.jsx)(d.Z, {
        listing: e,
        guildId: t,
        groupListingId: A,
        analyticsLocation: E,
        onComplete: T,
        forcesTransitionToGuild: m
      })]
    }, e.id))
  }) : (0, i.jsx)("div", {
    className: I.loadingContainer,
    children: (0, i.jsx)(s.Spinner, {})
  })
}