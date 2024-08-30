n.d(t, {
    Z: function () {
        return B;
    },
    n: function () {
        return S;
    }
});
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180650),
    l = n(399606),
    c = n(481060),
    d = n(906732),
    u = n(963249),
    f = n(594174),
    p = n(754347),
    g = n(74538),
    C = n(884697),
    m = n(624377),
    _ = n(141011),
    b = n(813083),
    h = n(67938),
    x = n(372654),
    I = n(994896),
    E = n(215023),
    v = n(474936),
    T = n(689938),
    L = n(291256);
let S = (0, C.IC)(96),
    N = {
        [i.T.DISXCORE]: {
            left: () => n(136648),
            right: () => n(850298),
            leftLogo: () => n(407848),
            rightLogo: () => n(457734)
        },
        [i.T.FANTASY]: {
            left: () => n(44602),
            right: () => n(862392),
            leftLogo: () => n(150218),
            rightLogo: () => n(625591)
        },
        [i.T.CYBERPUNK]: {
            left: () => n(862358),
            right: () => n(604083),
            leftLogo: () => n(519293),
            rightLogo: () => n(769307)
        },
        [i.T.ELEMENTS]: {
            left: () => n(534572),
            right: () => n(905911),
            leftOverflow: () => n(149653),
            rightOverflow: () => n(183749),
            leftLogo: () => n(201651),
            rightLogo: () => n(47227)
        },
        [i.T.ANIME_V2]: {
            left: () => n(607668),
            right: () => n(381436),
            leftLogo: () => n(384970),
            rightLogo: () => n(906935)
        },
        [i.T.SPRINGTOONS]: {
            left: () => n(138272),
            right: () => n(392425),
            leftLogo: () => n(547470),
            rightLogo: () => n(204641)
        },
        [i.T.LOFI_VIBES]: {
            left: () => n(659813),
            right: () => n(722603),
            leftLogo: () => n(678747),
            rightLogo: () => n(178466)
        },
        [i.T.GALAXY]: {
            left: () => n(236801),
            right: () => n(537085),
            leftLogo: () => n(818198),
            rightLogo: () => n(959177)
        },
        [i.T.FEELIN_RETRO]: {
            left: () => n(616442),
            right: () => n(250440),
            leftLogo: () => n(662232),
            rightLogo: () => n(226107)
        },
        [i.T.PIRATES]: {
            left: () => n(519741),
            right: () => n(980112),
            leftLogo: () => n(379545),
            rightLogo: () => n(31847)
        },
        [i.T.ARCADE]: {
            left: () => n(6414),
            right: () => n(959436),
            leftLogo: () => n(23695),
            rightLogo: () => n(2235)
        },
        [i.T.TIDE]: {
            left: () => n(960088),
            right: () => n(402313),
            leftOverflow: () => n(757631),
            rightOverflow: () => n(17142),
            leftLogo: () => n(237457),
            rightLogo: () => n(958609)
        }
    },
    O = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, d.ZP)(),
            s = r.useRef(null),
            o = (0, l.e7)([f.default], () => f.default.getCurrentUser());
        return g.ZP.canUseCollectibles(o)
            ? (0, a.jsx)(a.Fragment, { children: t.summary })
            : (0, a.jsx)(a.Fragment, {
                  children: T.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                      getPremium: (e) =>
                          (0, a.jsx)(c.Clickable, {
                              innerRef: s,
                              className: L.getPremiumHook,
                              onClick: () => {
                                  (0, u.Z)({
                                      subscriptionTier: v.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: s
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
    var t, n, r;
    let { config: s, category: l, index: c, hideLimitedTimeBadge: d = !1 } = e,
        u = c % 2 == 1,
        f =
            null !== (r = u ? s.left() : s.right()) && void 0 !== r
                ? r
                : (0, C.uV)(l.banner, {
                      size: x.yV,
                      format: 'jpg'
                  }),
        p = u ? (null === (t = s.leftOverflow) || void 0 === t ? void 0 : t.call(s)) : null === (n = s.rightOverflow) || void 0 === n ? void 0 : n.call(s),
        g = u ? s.rightLogo() : s.leftLogo(),
        { backgroundColors: _ } = (0, m.Z)(l.styles),
        h = {
            objectPosition: u ? 'left' : 'right',
            background: null != _ ? ''.concat((0, x.nH)(_), ' border-box border-box') : void 0,
            outlineColor: null != _ ? _.border.toHslString() : void 0
        };
    return (0, a.jsxs)('div', {
        className: o()(L.condensedBannerContainer),
        children: [
            (0, a.jsx)('img', {
                src: f,
                style: h,
                className: L.condensedBannerImage,
                alt: ''
            }),
            null != p &&
                (0, a.jsx)('img', {
                    src: p,
                    className: o()(L.overflowImage, {
                        [L.overflowImageLeft]: u,
                        [L.tideOverflowImage]: l.skuId === i.T.TIDE
                    }),
                    alt: ''
                }),
            (0, a.jsx)('img', {
                className: o()(L.condensedCategoryLogo, { [L.condensedCategoryLogoLeft]: !u }),
                src: g,
                alt: l.name
            }),
            !d &&
                (0, a.jsx)(b.Z, {
                    category: l,
                    className: o()(L.limitedTimeBadge, { [L.limitedTimeBadgeLeft]: u }),
                    display: 'banner'
                })
        ]
    });
}
function B(e) {
    var t, n, r, s;
    let { category: l, className: d, hideLimitedTimeBadge: u = !1, index: f = 0 } = e,
        { backgroundColors: g } = (0, m.Z)(l.styles),
        v = !!(null === (t = E.Ve[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText),
        { condensedBannersEnabled: T } = (0, I.O)({ location: 'Collectibles Shop Banner' });
    if (T) {
        let e = N[l.skuId];
        if (null != e)
            return (0, a.jsx)(k, {
                config: e,
                category: l,
                index: f,
                hideLimitedTimeBadge: u
            });
    }
    return l.skuId === i.T.TIDE
        ? (0, a.jsx)(h.G, { category: l })
        : (0, a.jsxs)(_.Z, {
              asset: l.banner,
              className: o()(L.shopBanner, d),
              style:
                  null != g
                      ? {
                            background: ''.concat((0, x.nH)(g), ' border-box border-box'),
                            outlineColor: g.border.toHslString()
                        }
                      : void 0,
              children: [
                  (null === (n = E.Ve[l.skuId]) || void 0 === n ? void 0 : n.addAttributionLogo)
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
                                (0, a.jsx)(p.Z, { className: L.discordWordmark })
                            ]
                        })
                      : (0, a.jsx)(c.Spacer, { size: 28 }),
                  (null === (r = E.Ve[l.skuId]) || void 0 === r ? void 0 : r.addLogo)
                      ? (0, a.jsx)('img', {
                            className: L.categoryLogo,
                            src: (0, C.uV)(l.logo, { size: S }),
                            alt: l.name,
                            style: { maxWidth: null === (s = E.Ve[l.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth }
                        })
                      : (0, a.jsx)(c.Spacer, { size: 96 }),
                  (0, a.jsx)(c.Text, {
                      className: o()(L.summary, { [L.blackSummary]: v }),
                      variant: 'text-md/normal',
                      children: l.skuId === i.T.DISXCORE ? (0, a.jsx)(O, { category: l }) : l.summary
                  }),
                  !u &&
                      (0, a.jsx)(b.Z, {
                          category: l,
                          className: L.limitedTimeBadge,
                          display: 'banner'
                      })
              ]
          });
}
