r.d(t, {
    Z: function () {
        return N;
    },
    n: function () {
        return S;
    }
});
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(180650),
    o = r(399606),
    c = r(481060),
    d = r(906732),
    u = r(963249),
    m = r(594174),
    f = r(754347),
    p = r(74538),
    C = r(884697),
    h = r(624377),
    g = r(141011),
    _ = r(813083),
    b = r(67938),
    x = r(372654),
    E = r(215023),
    I = r(474936),
    v = r(689938),
    T = r(462972),
    L = r(275001);
let S = (0, C.IC)(96),
    k = (e) => {
        let { category: t } = e,
            { analyticsLocations: r } = (0, d.ZP)(),
            a = n.useRef(null),
            i = (0, o.e7)([m.default], () => m.default.getCurrentUser());
        return p.ZP.canUseCollectibles(i)
            ? (0, s.jsx)(s.Fragment, { children: t.summary })
            : (0, s.jsx)(s.Fragment, {
                  children: v.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                      getPremium: (e) =>
                          (0, s.jsx)(c.Clickable, {
                              innerRef: a,
                              className: T.getPremiumHook,
                              onClick: () => {
                                  (0, u.Z)({
                                      subscriptionTier: I.Si.TIER_2,
                                      analyticsLocations: r,
                                      returnRef: a
                                  });
                              },
                              tag: 'span',
                              children: (0, s.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  color: 'always-white',
                                  tag: 'span',
                                  children: e
                              })
                          })
                  })
              });
    };
function N(e) {
    var t, r, n, a;
    let { category: o, className: d, hideLimitedTimeBadge: u = !1 } = e,
        { backgroundColors: m } = (0, h.Z)(o.styles),
        p = !!(null === (t = E.Ve[o.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
    return o.skuId === l.T.CHANCE
        ? (0, s.jsx)(b.O, { category: o })
        : (0, s.jsxs)(g.Z, {
              asset: o.banner,
              className: i()(T.shopBanner, d),
              style:
                  null != m
                      ? {
                            background: ''.concat((0, x.nH)(m), ' border-box border-box'),
                            outlineColor: m.border.toHslString()
                        }
                      : void 0,
              children: [
                  o.skuId === l.T.BAND &&
                      (0, s.jsx)('img', {
                          src: L,
                          alt: '',
                          className: T.animationAsset
                      }),
                  (null === (r = E.Ve[o.skuId]) || void 0 === r ? void 0 : r.addAttributionLogo)
                      ? (0, s.jsxs)('div', {
                            className: T.discordLogo,
                            children: [
                                (0, s.jsx)(c.ClydeIcon, {
                                    size: 'custom',
                                    width: 28,
                                    height: 28,
                                    color: 'currentColor',
                                    className: T.discordIcon
                                }),
                                (0, s.jsx)(f.Z, { className: T.discordWordmark })
                            ]
                        })
                      : (0, s.jsx)(c.Spacer, { size: 28 }),
                  (null === (n = E.Ve[o.skuId]) || void 0 === n ? void 0 : n.addLogo)
                      ? (0, s.jsx)('img', {
                            className: T.categoryLogo,
                            src: (0, C.uV)(o.logo, { size: S }),
                            alt: o.name,
                            style: { maxWidth: null === (a = E.Ve[o.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth }
                        })
                      : (0, s.jsx)(c.Spacer, { size: 96 }),
                  (0, s.jsx)(c.Text, {
                      className: i()(T.summary, { [T.blackSummary]: p }),
                      variant: 'text-md/normal',
                      children: o.skuId === l.T.DISXCORE ? (0, s.jsx)(k, { category: o }) : o.summary
                  }),
                  !u &&
                      (0, s.jsx)(_.Z, {
                          category: o,
                          className: T.limitedTimeBadge,
                          display: 'banner'
                      })
              ]
          });
}
