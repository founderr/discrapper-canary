t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(735250),
    a = t(470079),
    r = t(481060),
    o = t(355467),
    l = t(887706),
    s = t(270144),
    c = t(171246),
    d = t(174931),
    u = t(689938),
    _ = t(732019);
function p(e) {
    let { listing: n } = e,
        t = (0, c.KK)(n.sku_flags);
    return (0, c.KW)(n.sku_flags) || t
        ? (0, i.jsxs)('div', {
              className: _.cta,
              children: [
                  (0, i.jsx)(r.Heading, {
                      variant: 'heading-lg/bold',
                      children: t ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                  }),
                  (0, i.jsx)(r.Heading, {
                      color: 'interactive-normal',
                      variant: 'heading-md/normal',
                      children: t ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({ applicationName: n.name })
                  })
              ]
          })
        : null;
}
function m(e) {
    var n;
    let { guildId: t, applicationId: c, applicationPrimarySkuId: u, analyticsLocation: m, onComplete: I, forcesTransitionToGuild: f } = e,
        { listingsLoaded: g } = (0, s.FE)(c, u),
        { entitlementsLoaded: h } = (0, s.LM)({ guildId: t }),
        { subscriptionGroupListing: C } = (0, s.F5)(c, t),
        v = (0, l.Z)();
    a.useEffect(() => {
        v && o.jg();
    }, [v]);
    let E = null == C ? void 0 : C.id,
        x = null == C ? void 0 : null === (n = C.subscription_listings) || void 0 === n ? void 0 : n.filter((e) => e.published);
    return g && (null == t || h)
        ? null == E || null == x || 0 === x.length
            ? null
            : (0, i.jsx)('div', {
                  className: _.container,
                  children: x.map((e) =>
                      (0, i.jsxs)(
                          a.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(p, { listing: e }),
                                  (0, i.jsx)(d.Z, {
                                      listing: e,
                                      guildId: t,
                                      groupListingId: E,
                                      analyticsLocation: m,
                                      onComplete: I,
                                      forcesTransitionToGuild: f
                                  })
                              ]
                          },
                          e.id
                      )
                  )
              })
        : (0, i.jsx)('div', {
              className: _.loadingContainer,
              children: (0, i.jsx)(r.Spinner, {})
          });
}
