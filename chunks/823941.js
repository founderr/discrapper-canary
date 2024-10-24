n.d(t, {
    Z: function () {
        return N;
    },
    n: function () {
        return S;
    }
});
var r = n(200651),
    s = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(180650),
    o = n(399606),
    c = n(481060),
    d = n(906732),
    u = n(963249),
    m = n(594174),
    f = n(754347),
    p = n(74538),
    C = n(884697),
    h = n(624377),
    g = n(141011),
    _ = n(813083),
    b = n(67938),
    x = n(372654),
    E = n(215023),
    v = n(474936),
    I = n(689938),
    T = n(462972),
    L = n(275001);
let S = (0, C.IC)(96),
    k = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, d.ZP)(),
            a = s.useRef(null),
            i = (0, o.e7)([m.default], () => m.default.getCurrentUser());
        return p.ZP.canUseCollectibles(i)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: I.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                      getPremium: (e) =>
                          (0, r.jsx)(c.Clickable, {
                              innerRef: a,
                              className: T.getPremiumHook,
                              onClick: () => {
                                  (0, u.Z)({
                                      subscriptionTier: v.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: a
                                  });
                              },
                              tag: 'span',
                              children: (0, r.jsx)(c.Text, {
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
    var t, n, s, a;
    let { category: o, className: d, hideLimitedTimeBadge: u = !1 } = e,
        { backgroundColors: m } = (0, h.Z)(o.styles),
        p = !!(null === (t = E.Ve[o.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
    return o.skuId === l.T.CHANCE
        ? (0, r.jsx)(b.O, { category: o })
        : (0, r.jsxs)(g.Z, {
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
                      (0, r.jsx)('img', {
                          src: L,
                          alt: '',
                          className: T.animationAsset
                      }),
                  (null === (n = E.Ve[o.skuId]) || void 0 === n ? void 0 : n.addAttributionLogo)
                      ? (0, r.jsxs)('div', {
                            className: T.discordLogo,
                            children: [
                                (0, r.jsx)(c.ClydeIcon, {
                                    size: 'custom',
                                    width: 28,
                                    height: 28,
                                    color: 'currentColor',
                                    className: T.discordIcon
                                }),
                                (0, r.jsx)(f.Z, { className: T.discordWordmark })
                            ]
                        })
                      : (0, r.jsx)(c.Spacer, { size: 28 }),
                  (null === (s = E.Ve[o.skuId]) || void 0 === s ? void 0 : s.addLogo)
                      ? (0, r.jsx)('img', {
                            className: T.categoryLogo,
                            src: (0, C.uV)(o.logo, { size: S }),
                            alt: o.name,
                            style: { maxWidth: null === (a = E.Ve[o.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth }
                        })
                      : (0, r.jsx)(c.Spacer, { size: 96 }),
                  (0, r.jsx)(c.Text, {
                      className: i()(T.summary, { [T.blackSummary]: p }),
                      variant: 'text-md/normal',
                      children: o.skuId === l.T.DISXCORE ? (0, r.jsx)(k, { category: o }) : o.summary
                  }),
                  !u &&
                      (0, r.jsx)(_.Z, {
                          category: o,
                          className: T.limitedTimeBadge,
                          display: 'banner'
                      })
              ]
          });
}
