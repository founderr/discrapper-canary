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
    p = n(963249),
    h = n(594174),
    f = n(754347),
    g = n(74538),
    C = n(884697),
    b = n(624377),
    x = n(141011),
    v = n(813083),
    _ = n(67938),
    k = n(372654),
    j = n(215023),
    E = n(474936),
    S = n(388032),
    I = n(915376);
let T = (0, C.IC)(96),
    N = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = a.useRef(null),
            s = (0, o.e7)([h.default], () => h.default.getCurrentUser());
        return g.ZP.canUseCollectibles(s)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: S.intl.format(S.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(c.Clickable, {
                              innerRef: i,
                              className: I.getPremiumHook,
                              onClick: () => {
                                  (0, p.Z)({
                                      subscriptionTier: E.Si.TIER_2,
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
                  className: I.animationAsset
              })
            : (0, r.jsx)(m.Z, {
                  src: t,
                  className: I.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function y(e) {
    var t, n, a;
    let { category: i, className: u, hideLimitedTimeBadge: m = !1 } = e,
        { backgroundColors: p } = (0, b.Z)(i.styles),
        h = (0, j.ZS)(i.skuId),
        g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    if (i.skuId === l.T.CHANCE) return (0, r.jsx)(_.O, { category: i });
    let E = !!(null == h ? void 0 : h.showDarkBannerText),
        S = null == h ? void 0 : h.animatedBanner;
    return (0, r.jsxs)(x.Z, {
        asset: i.banner,
        className: s()(I.shopBanner, u),
        style:
            null != p
                ? {
                      background: ''.concat((0, k.nH)(p), ' border-box border-box'),
                      outlineColor: p.border.toHslString()
                  }
                : void 0,
        children: [
            !g && void 0 !== S && (0, r.jsx)(B, { src: S }),
            (null === (t = j.Ve[i.skuId]) || void 0 === t ? void 0 : t.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: I.discordLogo,
                      children: [
                          (0, r.jsx)(c.ClydeIcon, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: I.discordIcon
                          }),
                          (0, r.jsx)(f.Z, { className: I.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(c.Spacer, { size: 28 }),
            (null === (n = j.Ve[i.skuId]) || void 0 === n ? void 0 : n.addLogo)
                ? (0, r.jsx)('img', {
                      className: I.categoryLogo,
                      src: (0, C.uV)(i.logo, { size: T }),
                      alt: i.name,
                      style: { maxWidth: null === (a = j.Ve[i.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth }
                  })
                : (0, r.jsx)(c.Spacer, { size: 96 }),
            (0, r.jsx)(c.Text, {
                className: s()(I.summary, { [I.blackSummary]: E }),
                variant: 'text-md/normal',
                children: i.skuId === l.T.DISXCORE ? (0, r.jsx)(N, { category: i }) : i.summary
            }),
            !m &&
                (0, r.jsx)(v.Z, {
                    category: i,
                    className: I.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
