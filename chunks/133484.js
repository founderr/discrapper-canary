n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(410030),
    a = n(100527),
    o = n(906732),
    c = n(197115),
    d = n(626135),
    u = n(74538),
    m = n(981631),
    g = n(474936),
    h = n(388032),
    p = n(304556),
    x = n(699623),
    T = n(820350);
function S(e) {
    let { user: t, showOverlay: n, children: S } = e,
        _ = (0, l.ZP)(),
        { analyticsLocations: E } = (0, o.ZP)(a.Z.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: E,
                type: g.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [n, E]),
    n)
        ? (0, i.jsxs)('div', {
              className: p.upsellOverlayContainer,
              children: [
                  (0, i.jsx)('div', { children: S }),
                  (0, i.jsxs)('div', {
                      className: p.upsellOverlay,
                      children: [
                          (0, i.jsx)('img', {
                              className: p.upsellImage,
                              alt: h.intl.string(h.t.LHFZQ0),
                              src: (function (e) {
                                  switch (e) {
                                      case m.BRd.DARK:
                                          return x;
                                      case m.BRd.LIGHT:
                                          return T;
                                  }
                              })(_)
                          }),
                          (0, i.jsxs)('div', {
                              className: p.upsellTextContainer,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.dMaDFR)
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: h.intl.string(h.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Z, {
                              size: r.Button.Sizes.LARGE,
                              color: r.Button.Colors.GREEN,
                              buttonText: u.ZP.isPremium(t) ? h.intl.string(h.t.AfRWIy) : h.intl.string(h.t.nkdUys),
                              subscriptionTier: g.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: S });
}
