s.d(t, {
    Z: function () {
        return k;
    },
    n: function () {
        return S;
    }
});
var a = s(735250),
    r = s(470079),
    n = s(120356),
    i = s.n(n),
    l = s(180650),
    o = s(399606),
    c = s(481060),
    d = s(906732),
    u = s(963249),
    m = s(594174),
    C = s(754347),
    f = s(74538),
    p = s(884697),
    h = s(624377),
    g = s(141011),
    _ = s(813083),
    b = s(67938),
    x = s(372654),
    E = s(215023),
    I = s(474936),
    T = s(689938),
    L = s(462972),
    v = s(275001);
let S = (0, p.IC)(96),
    N = (e) => {
        let { category: t } = e,
            { analyticsLocations: s } = (0, d.ZP)(),
            n = r.useRef(null),
            i = (0, o.e7)([m.default], () => m.default.getCurrentUser());
        return f.ZP.canUseCollectibles(i)
            ? (0, a.jsx)(a.Fragment, { children: t.summary })
            : (0, a.jsx)(a.Fragment, {
                  children: T.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                      getPremium: (e) =>
                          (0, a.jsx)(c.Clickable, {
                              innerRef: n,
                              className: L.getPremiumHook,
                              onClick: () => {
                                  (0, u.Z)({
                                      subscriptionTier: I.Si.TIER_2,
                                      analyticsLocations: s,
                                      returnRef: n
                                  });
                              },
                              tag: 'span',
                              children: (0, a.jsx)(c.Text, {
                                  variant: 'text-md/normal',
                                  color: 'always-white',
                                  tag: 'span',
                                  children: e
                              })
                          })
                  })
              });
    };
function k(e) {
    var t, s, r, n;
    let { category: o, className: d, hideLimitedTimeBadge: u = !1 } = e,
        { backgroundColors: m } = (0, h.Z)(o.styles),
        f = !!(null === (t = E.Ve[o.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
    return o.skuId === l.T.CHANCE
        ? (0, a.jsx)(b.O, { category: o })
        : (0, a.jsxs)(g.Z, {
              asset: o.banner,
              className: i()(L.shopBanner, d),
              style:
                  null != m
                      ? {
                            background: ''.concat((0, x.nH)(m), ' border-box border-box'),
                            outlineColor: m.border.toHslString()
                        }
                      : void 0,
              children: [
                  o.skuId === l.T.BAND &&
                      (0, a.jsx)('img', {
                          src: v,
                          alt: '',
                          className: L.animationAsset
                      }),
                  (null === (s = E.Ve[o.skuId]) || void 0 === s ? void 0 : s.addAttributionLogo)
                      ? (0, a.jsxs)('div', {
                            className: L.discordLogo,
                            children: [
                                (0, a.jsx)(c.ClydeIcon, {
                                    size: 'custom',
                                    width: 28,
                                    height: 28,
                                    color: 'currentColor',
                                    className: L.discordIcon
                                }),
                                (0, a.jsx)(C.Z, { className: L.discordWordmark })
                            ]
                        })
                      : (0, a.jsx)(c.Spacer, { size: 28 }),
                  (null === (r = E.Ve[o.skuId]) || void 0 === r ? void 0 : r.addLogo)
                      ? (0, a.jsx)('img', {
                            className: L.categoryLogo,
                            src: (0, p.uV)(o.logo, { size: S }),
                            alt: o.name,
                            style: { maxWidth: null === (n = E.Ve[o.skuId]) || void 0 === n ? void 0 : n.logoMaxWidth }
                        })
                      : (0, a.jsx)(c.Spacer, { size: 96 }),
                  (0, a.jsx)(c.Text, {
                      className: i()(L.summary, { [L.blackSummary]: f }),
                      variant: 'text-md/normal',
                      children: o.skuId === l.T.DISXCORE ? (0, a.jsx)(N, { category: o }) : o.summary
                  }),
                  !u &&
                      (0, a.jsx)(_.Z, {
                          category: o,
                          className: L.limitedTimeBadge,
                          display: 'banner'
                      })
              ]
          });
}
