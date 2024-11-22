n.d(t, {
    Z: function () {
        return y;
    },
    n: function () {
        return T;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(180650),
    o = n(399606),
    c = n(481060),
    d = n(607070),
    u = n(906732),
    m = n(70097),
    h = n(963249),
    p = n(594174),
    f = n(754347),
    g = n(74538),
    C = n(884697),
    b = n(624377),
    v = n(141011),
    x = n(813083),
    _ = n(67938),
    k = n(372654),
    I = n(215023),
    j = n(474936),
    E = n(388032),
    S = n(462972);
let T = (0, C.IC)(96),
    N = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = a.useRef(null),
            s = (0, o.e7)([p.default], () => p.default.getCurrentUser());
        return g.ZP.canUseCollectibles(s)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: E.intl.format(E.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(c.Clickable, {
                              innerRef: i,
                              className: S.getPremiumHook,
                              onClick: () => {
                                  (0, h.Z)({
                                      subscriptionTier: j.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: i
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
    },
    B = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)('img', {
                  src: t,
                  alt: '',
                  className: S.animationAsset
              })
            : (0, r.jsx)(m.Z, {
                  src: t,
                  className: S.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function y(e) {
    var t, n, a;
    let { category: i, className: u, hideLimitedTimeBadge: m = !1 } = e,
        { backgroundColors: h } = (0, b.Z)(i.styles),
        p = (0, I.ZS)(i.skuId),
        g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    if (i.skuId === l.T.CHANCE) return (0, r.jsx)(_.O, { category: i });
    let j = !!(null == p ? void 0 : p.showDarkBannerText),
        E = null == p ? void 0 : p.animatedBanner;
    return (0, r.jsxs)(v.Z, {
        asset: i.banner,
        className: s()(S.shopBanner, u),
        style:
            null != h
                ? {
                      background: ''.concat((0, k.nH)(h), ' border-box border-box'),
                      outlineColor: h.border.toHslString()
                  }
                : void 0,
        children: [
            !g && void 0 !== E && (0, r.jsx)(B, { src: E }),
            (null === (t = I.Ve[i.skuId]) || void 0 === t ? void 0 : t.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: S.discordLogo,
                      children: [
                          (0, r.jsx)(c.ClydeIcon, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: S.discordIcon
                          }),
                          (0, r.jsx)(f.Z, { className: S.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(c.Spacer, { size: 28 }),
            (null === (n = I.Ve[i.skuId]) || void 0 === n ? void 0 : n.addLogo)
                ? (0, r.jsx)('img', {
                      className: S.categoryLogo,
                      src: (0, C.uV)(i.logo, { size: T }),
                      alt: i.name,
                      style: { maxWidth: null === (a = I.Ve[i.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth }
                  })
                : (0, r.jsx)(c.Spacer, { size: 96 }),
            (0, r.jsx)(c.Text, {
                className: s()(S.summary, { [S.blackSummary]: j }),
                variant: 'text-md/normal',
                children: i.skuId === l.T.DISXCORE ? (0, r.jsx)(N, { category: i }) : i.summary
            }),
            !m &&
                (0, r.jsx)(x.Z, {
                    category: i,
                    className: S.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
