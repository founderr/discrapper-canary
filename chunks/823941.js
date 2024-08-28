n.d(t, {
    Z: function () {
        return j;
    },
    n: function () {
        return L;
    }
});
var r = n(735250),
    s = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
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
    S = n(689938),
    T = n(291256);
let L = (0, C.IC)(96),
    N = {
        [o.T.DISXCORE]: {
            left: () => n(136648),
            right: () => n(850298),
            leftLogo: () => n(407848),
            rightLogo: () => n(457734)
        },
        [o.T.FANTASY]: {
            left: () => n(44602),
            right: () => n(862392),
            leftLogo: () => n(150218),
            rightLogo: () => n(625591)
        },
        [o.T.CYBERPUNK]: {
            left: () => n(862358),
            right: () => n(604083),
            leftLogo: () => n(519293),
            rightLogo: () => n(769307)
        },
        [o.T.ELEMENTS]: {
            left: () => n(534572),
            right: () => n(905911),
            leftOverflow: () => n(149653),
            rightOverflow: () => n(183749),
            leftLogo: () => n(201651),
            rightLogo: () => n(47227)
        },
        [o.T.ANIME_V2]: {
            left: () => n(607668),
            right: () => n(381436),
            leftLogo: () => n(384970),
            rightLogo: () => n(906935)
        },
        [o.T.SPRINGTOONS]: {
            left: () => n(138272),
            right: () => n(392425),
            leftLogo: () => n(547470),
            rightLogo: () => n(204641)
        },
        [o.T.LOFI_VIBES]: {
            left: () => n(659813),
            right: () => n(722603),
            leftLogo: () => n(678747),
            rightLogo: () => n(178466)
        },
        [o.T.GALAXY]: {
            left: () => n(236801),
            right: () => n(537085),
            leftLogo: () => n(818198),
            rightLogo: () => n(959177)
        },
        [o.T.FEELIN_RETRO]: {
            left: () => n(616442),
            right: () => n(250440),
            leftLogo: () => n(662232),
            rightLogo: () => n(226107)
        },
        [o.T.PIRATES]: {
            left: () => n(519741),
            right: () => n(980112),
            leftLogo: () => n(379545),
            rightLogo: () => n(31847)
        },
        [o.T.ARCADE]: {
            left: () => n(6414),
            right: () => n(959436),
            leftLogo: () => n(23695),
            rightLogo: () => n(2235)
        },
        [o.T.TIDE]: {
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
            a = s.useRef(null),
            i = (0, l.e7)([f.default], () => f.default.getCurrentUser());
        return g.ZP.canUseCollectibles(i)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: S.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
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
function k(e) {
    var t, n, s;
    let { config: a, category: l, index: c, hideLimitedTimeBadge: d = !1 } = e,
        u = c % 2 == 1,
        f =
            null !== (s = u ? a.left() : a.right()) && void 0 !== s
                ? s
                : (0, C.uV)(l.banner, {
                      size: x.yV,
                      format: 'jpg'
                  }),
        p = u ? (null === (t = a.leftOverflow) || void 0 === t ? void 0 : t.call(a)) : null === (n = a.rightOverflow) || void 0 === n ? void 0 : n.call(a),
        g = u ? a.rightLogo() : a.leftLogo(),
        { backgroundColors: _ } = (0, m.Z)(l.styles),
        h = {
            objectPosition: u ? 'left' : 'right',
            background: null != _ ? ''.concat((0, x.nH)(_), ' border-box border-box') : void 0,
            outlineColor: null != _ ? _.border.toHslString() : void 0
        };
    return (0, r.jsxs)('div', {
        className: i()(T.condensedBannerContainer),
        children: [
            (0, r.jsx)('img', {
                src: f,
                style: h,
                className: T.condensedBannerImage,
                alt: ''
            }),
            null != p &&
                (0, r.jsx)('img', {
                    src: p,
                    className: i()(T.overflowImage, {
                        [T.overflowImageLeft]: u,
                        [T.tideOverflowImage]: l.skuId === o.T.TIDE
                    }),
                    alt: ''
                }),
            (0, r.jsx)('img', {
                className: i()(T.condensedCategoryLogo, { [T.condensedCategoryLogoLeft]: !u }),
                src: g,
                alt: l.name
            }),
            !d &&
                (0, r.jsx)(b.Z, {
                    category: l,
                    className: i()(T.limitedTimeBadge, { [T.limitedTimeBadgeLeft]: u }),
                    display: 'banner'
                })
        ]
    });
}
function j(e) {
    var t, n, s, a;
    let { category: l, className: d, hideLimitedTimeBadge: u = !1, index: f = 0 } = e,
        { backgroundColors: g } = (0, m.Z)(l.styles),
        v = !!(null === (t = E.Ve[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText),
        { condensedBannersEnabled: S } = (0, I.O)({ location: 'Collectibles Shop Banner' });
    if (S) {
        let e = N[l.skuId];
        if (null != e)
            return (0, r.jsx)(k, {
                config: e,
                category: l,
                index: f,
                hideLimitedTimeBadge: u
            });
    }
    return l.skuId === o.T.TIDE
        ? (0, r.jsx)(h.G, { category: l })
        : (0, r.jsxs)(_.Z, {
              asset: l.banner,
              className: i()(T.shopBanner, d),
              style:
                  null != g
                      ? {
                            background: ''.concat((0, x.nH)(g), ' border-box border-box'),
                            outlineColor: g.border.toHslString()
                        }
                      : void 0,
              children: [
                  (null === (n = E.Ve[l.skuId]) || void 0 === n ? void 0 : n.addAttributionLogo)
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
                                (0, r.jsx)(p.Z, { className: T.discordWordmark })
                            ]
                        })
                      : (0, r.jsx)(c.Spacer, { size: 28 }),
                  (null === (s = E.Ve[l.skuId]) || void 0 === s ? void 0 : s.addLogo)
                      ? (0, r.jsx)('img', {
                            className: T.categoryLogo,
                            src: (0, C.uV)(l.logo, { size: L }),
                            alt: l.name,
                            style: { maxWidth: null === (a = E.Ve[l.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth }
                        })
                      : (0, r.jsx)(c.Spacer, { size: 96 }),
                  (0, r.jsx)(c.Text, {
                      className: i()(T.summary, { [T.blackSummary]: v }),
                      variant: 'text-md/normal',
                      children: l.skuId === o.T.DISXCORE ? (0, r.jsx)(O, { category: l }) : l.summary
                  }),
                  !u &&
                      (0, r.jsx)(b.Z, {
                          category: l,
                          className: T.limitedTimeBadge,
                          display: 'banner'
                      })
              ]
          });
}
