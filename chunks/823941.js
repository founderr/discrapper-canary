n.d(t, {
    Z: function () {
        return L;
    },
    n: function () {
        return N;
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
    f = n(451478),
    g = n(754347),
    C = n(74538),
    b = n(884697),
    v = n(624377),
    x = n(141011),
    _ = n(813083),
    k = n(67938),
    I = n(372654),
    j = n(215023),
    S = n(474936),
    E = n(388032),
    T = n(462972);
let N = (0, b.IC)(96),
    B = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = a.useRef(null),
            s = (0, o.e7)([h.default], () => h.default.getCurrentUser());
        return C.ZP.canUseCollectibles(s)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: E.intl.format(E.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(c.Clickable, {
                              innerRef: i,
                              className: T.getPremiumHook,
                              onClick: () => {
                                  (0, p.Z)({
                                      subscriptionTier: S.Si.TIER_2,
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
    y = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)('img', {
                  src: t,
                  alt: '',
                  className: T.animationAsset
              })
            : (0, r.jsx)(m.Z, {
                  src: t,
                  className: T.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function L(e) {
    var t, n, a;
    let { category: i, className: u, hideLimitedTimeBadge: m = !1 } = e,
        { backgroundColors: p } = (0, v.Z)(i.styles),
        h = (0, j.ZS)(i.skuId),
        C = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        S = (0, o.e7)([f.Z], () => f.Z.isFocused());
    if (i.skuId === l.T.CHANCE) return (0, r.jsx)(k.O, { category: i });
    let E = !!(null == h ? void 0 : h.showDarkBannerText),
        L = null == h ? void 0 : h.animatedBanner;
    return (0, r.jsxs)(x.Z, {
        asset: i.banner,
        className: s()(T.shopBanner, u),
        style:
            null != p
                ? {
                      background: ''.concat((0, I.nH)(p), ' border-box border-box'),
                      outlineColor: p.border.toHslString()
                  }
                : void 0,
        children: [
            !C && void 0 !== L && S && (0, r.jsx)(y, { src: L }),
            (null === (t = j.Ve[i.skuId]) || void 0 === t ? void 0 : t.addAttributionLogo)
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
                          (0, r.jsx)(g.Z, { className: T.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(c.Spacer, { size: 28 }),
            (null === (n = j.Ve[i.skuId]) || void 0 === n ? void 0 : n.addLogo)
                ? (0, r.jsx)('img', {
                      className: T.categoryLogo,
                      src: (0, b.uV)(i.logo, { size: N }),
                      alt: i.name,
                      style: { maxWidth: null === (a = j.Ve[i.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth }
                  })
                : (0, r.jsx)(c.Spacer, { size: 96 }),
            (0, r.jsx)(c.Text, {
                className: s()(T.summary, { [T.blackSummary]: E }),
                variant: 'text-md/normal',
                children: i.skuId === l.T.DISXCORE ? (0, r.jsx)(B, { category: i }) : i.summary
            }),
            !m &&
                (0, r.jsx)(_.Z, {
                    category: i,
                    className: T.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
