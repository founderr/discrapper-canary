n.d(t, {
    Z: function () {
        return T;
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
    h = n(474936),
    g = n(388032),
    p = n(755451),
    x = n(699623),
    S = n(820350);
function T(e) {
    let { user: t, showOverlay: n, children: T } = e,
        C = (0, l.ZP)(),
        { analyticsLocations: _ } = (0, o.ZP)(a.Z.PREMIUM_UPSELL_OVERLAY);
    return (s.useEffect(() => {
        n &&
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                location_stack: _,
                type: h.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
            });
    }, [n, _]),
    n)
        ? (0, i.jsxs)('div', {
              className: p.upsellOverlayContainer,
              children: [
                  (0, i.jsx)('div', { children: T }),
                  (0, i.jsxs)('div', {
                      className: p.upsellOverlay,
                      children: [
                          (0, i.jsx)('img', {
                              className: p.upsellImage,
                              alt: g.intl.string(g.t.LHFZQ0),
                              src: (function (e) {
                                  switch (e) {
                                      case m.BRd.DARK:
                                          return x;
                                      case m.BRd.LIGHT:
                                          return S;
                                  }
                              })(C)
                          }),
                          (0, i.jsxs)('div', {
                              className: p.upsellTextContainer,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-lg/semibold',
                                      color: 'always-white',
                                      children: g.intl.string(g.t.dMaDFR)
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'always-white',
                                      children: g.intl.string(g.t.F7sgFB)
                                  })
                              ]
                          }),
                          (0, i.jsx)(c.Z, {
                              size: r.Button.Sizes.LARGE,
                              color: r.Button.Colors.GREEN,
                              buttonText: u.ZP.isPremium(t) ? g.intl.string(g.t.AfRWIy) : g.intl.string(g.t.nkdUys),
                              subscriptionTier: h.Si.TIER_2
                          })
                      ]
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: T });
}
