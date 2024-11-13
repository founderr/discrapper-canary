n.d(t, {
    Z: function () {
        return y;
    },
    n: function () {
        return N;
    }
}),
    n(627341);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(278074),
    o = n(180650),
    c = n(399606),
    d = n(481060),
    u = n(607070),
    m = n(906732),
    h = n(963249),
    p = n(594174),
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
    I = n(388032),
    S = n(462972),
    T = n(275001);
let N = (0, C.IC)(96),
    B = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, m.ZP)(),
            i = a.useRef(null),
            s = (0, c.e7)([p.default], () => p.default.getCurrentUser());
        return g.ZP.canUseCollectibles(s)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: I.intl.format(I.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(d.Clickable, {
                              innerRef: i,
                              className: S.getPremiumHook,
                              onClick: () => {
                                  (0, h.Z)({
                                      subscriptionTier: E.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: i
                                  });
                              },
                              tag: 'span',
                              children: (0, r.jsx)(d.Text, {
                                  variant: 'text-md/normal',
                                  color: 'always-white',
                                  tag: 'span',
                                  children: e
                              })
                          })
                  })
              });
    };
function y(e) {
    var t, n, a, i;
    let { category: m, className: h, hideLimitedTimeBadge: p = !1 } = e,
        { backgroundColors: g } = (0, b.Z)(m.styles),
        E = !!(null === (t = j.Ve[m.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText),
        I = (0, c.e7)([u.Z], () => u.Z.useReducedMotion);
    if (m.skuId === o.T.CHANCE) return (0, r.jsx)(_.O, { category: m });
    let y = (0, l.EQ)(m.skuId)
        .with(o.T.BAND, () => T)
        .with(o.T.WARRIOR, () => 'https://cdn.discordapp.com/assets/content/db9fb34f490b777a6e9712b129f9e23ad930595d2df73ca85d2b54f247806e01.png')
        .otherwise(() => void 0);
    return (0, r.jsxs)(x.Z, {
        asset: m.banner,
        className: s()(S.shopBanner, h),
        style:
            null != g
                ? {
                      background: ''.concat((0, k.nH)(g), ' border-box border-box'),
                      outlineColor: g.border.toHslString()
                  }
                : void 0,
        children: [
            !I &&
                void 0 !== y &&
                (0, r.jsx)('img', {
                    src: y,
                    alt: '',
                    className: S.animationAsset
                }),
            (null === (n = j.Ve[m.skuId]) || void 0 === n ? void 0 : n.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: S.discordLogo,
                      children: [
                          (0, r.jsx)(d.ClydeIcon, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: S.discordIcon
                          }),
                          (0, r.jsx)(f.Z, { className: S.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(d.Spacer, { size: 28 }),
            (null === (a = j.Ve[m.skuId]) || void 0 === a ? void 0 : a.addLogo)
                ? (0, r.jsx)('img', {
                      className: S.categoryLogo,
                      src: (0, C.uV)(m.logo, { size: N }),
                      alt: m.name,
                      style: { maxWidth: null === (i = j.Ve[m.skuId]) || void 0 === i ? void 0 : i.logoMaxWidth }
                  })
                : (0, r.jsx)(d.Spacer, { size: 96 }),
            (0, r.jsx)(d.Text, {
                className: s()(S.summary, { [S.blackSummary]: E }),
                variant: 'text-md/normal',
                children: m.skuId === o.T.DISXCORE ? (0, r.jsx)(B, { category: m }) : m.summary
            }),
            !p &&
                (0, r.jsx)(v.Z, {
                    category: m,
                    className: S.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
