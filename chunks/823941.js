n.d(t, {
    Z: function () {
        return B;
    },
    n: function () {
        return T;
    }
});
var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(180650),
    o = n(399606),
    c = n(481060),
    d = n(906732),
    u = n(963249),
    m = n(594174),
    p = n(754347),
    f = n(74538),
    h = n(884697),
    g = n(624377),
    C = n(141011),
    b = n(813083),
    x = n(67938),
    v = n(372654),
    _ = n(215023),
    k = n(474936),
    j = n(388032),
    E = n(915376),
    I = n(275001);
let T = (0, h.IC)(96),
    S = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, d.ZP)(),
            s = a.useRef(null),
            i = (0, o.e7)([m.default], () => m.default.getCurrentUser());
        return f.ZP.canUseCollectibles(i)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: j.intl.format(j.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(c.Clickable, {
                              innerRef: s,
                              className: E.getPremiumHook,
                              onClick: () => {
                                  (0, u.Z)({
                                      subscriptionTier: k.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: s
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
function B(e) {
    var t, n, a, s;
    let { category: o, className: d, hideLimitedTimeBadge: u = !1 } = e,
        { backgroundColors: m } = (0, g.Z)(o.styles),
        f = !!(null === (t = _.Ve[o.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
    return o.skuId === l.T.CHANCE
        ? (0, r.jsx)(x.O, { category: o })
        : (0, r.jsxs)(C.Z, {
              asset: o.banner,
              className: i()(E.shopBanner, d),
              style:
                  null != m
                      ? {
                            background: ''.concat((0, v.nH)(m), ' border-box border-box'),
                            outlineColor: m.border.toHslString()
                        }
                      : void 0,
              children: [
                  o.skuId === l.T.BAND &&
                      (0, r.jsx)('img', {
                          src: I,
                          alt: '',
                          className: E.animationAsset
                      }),
                  (null === (n = _.Ve[o.skuId]) || void 0 === n ? void 0 : n.addAttributionLogo)
                      ? (0, r.jsxs)('div', {
                            className: E.discordLogo,
                            children: [
                                (0, r.jsx)(c.ClydeIcon, {
                                    size: 'custom',
                                    width: 28,
                                    height: 28,
                                    color: 'currentColor',
                                    className: E.discordIcon
                                }),
                                (0, r.jsx)(p.Z, { className: E.discordWordmark })
                            ]
                        })
                      : (0, r.jsx)(c.Spacer, { size: 28 }),
                  (null === (a = _.Ve[o.skuId]) || void 0 === a ? void 0 : a.addLogo)
                      ? (0, r.jsx)('img', {
                            className: E.categoryLogo,
                            src: (0, h.uV)(o.logo, { size: T }),
                            alt: o.name,
                            style: { maxWidth: null === (s = _.Ve[o.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth }
                        })
                      : (0, r.jsx)(c.Spacer, { size: 96 }),
                  (0, r.jsx)(c.Text, {
                      className: i()(E.summary, { [E.blackSummary]: f }),
                      variant: 'text-md/normal',
                      children: o.skuId === l.T.DISXCORE ? (0, r.jsx)(S, { category: o }) : o.summary
                  }),
                  !u &&
                      (0, r.jsx)(b.Z, {
                          category: o,
                          className: E.limitedTimeBadge,
                          display: 'banner'
                      })
              ]
          });
}
