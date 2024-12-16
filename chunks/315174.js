n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(752877),
    s = n(873546),
    c = n(481060),
    u = n(540059),
    d = n(666188),
    h = n(695346),
    p = n(768581),
    m = n(358555),
    f = n(981631),
    g = n(647086),
    C = n(388032),
    v = n(215887);
function _(e) {
    var t;
    let { guild: n, controller: l, guildBanner: r, animate: c } = e,
        { value: d } = l.springs,
        m = h.QK.getSetting(),
        f = (0, u.Q3)('AnimatedBanner') ? 150 : 90;
    return (0, i.jsx)(a.animated.div, {
        className: v.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * f, 'px)'))
        },
        children: (0, i.jsx)(a.animated.div, {
            className: o()(v.bannerImage, { [v.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (m ? 'translateY('.concat((1 - e) * f * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * f, 'px)'))) },
            children: (0, i.jsx)('img', {
                className: o()(v.bannerImg, { [v.bannerImgFullWidth]: s.tq }),
                src:
                    null !==
                        (t = p.ZP.getGuildBannerURL(
                            {
                                id: n.id,
                                banner: r
                            },
                            c
                        )) && void 0 !== t
                        ? t
                        : '',
                alt: '',
                'aria-hidden': !0
            })
        })
    });
}
function x(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
        { value: s } = n.springs,
        u = t.hasFeature(f.oNc.DISCOVERABLE),
        d = (0, i.jsx)('div', {
            className: v.communityInfo,
            children:
                u &&
                (0, i.jsx)(c.Tooltip, {
                    text: C.intl.string(C.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, i.jsxs)('div', {
                            className: v.communityInfoPill,
                            ...e,
                            children: [
                                (0, i.jsx)(c.GlobeEarthIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 12,
                                    height: 12,
                                    className: v.communityIcon
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    children: C.intl.string(C.t['B/vjCg'])
                                })
                            ]
                        })
                })
        });
    return r
        ? (0, i.jsx)('div', {
              className: o()(v.communityInfoContainer, v.hasSubheader),
              children: d
          })
        : (0, i.jsx)(a.animated.div, {
              className: v.communityInfoContainer,
              style: l ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function I() {
    return (0, i.jsx)(c.StarIcon, {
        size: 'custom',
        color: 'currentColor',
        className: v.favoritesIcon,
        height: 20,
        width: 20
    });
}
t.ZP = l.memo(function (e) {
    let { bannerVisible: t, controller: n, className: r, onClick: a, onContextMenu: b, onMouseDown: E, disableBannerAnimation: S, 'aria-expanded': Z, 'aria-controls': N, guild: y, guildBanner: T, animationOverlayHeight: j, children: A, headerClassName: P, communityInfoVisible: R, hasSubheader: M } = e,
        L = y.hasFeature(f.oNc.ANIMATED_BANNER),
        w = (0, d.Z)(y),
        D = !w && y.hasCommunityInfoSubheader(),
        O = !w && R,
        k = (0, p.xR)(T) && L && !S,
        [G, U] = l.useState(!1),
        B = l.useRef(),
        H = l.useRef(null),
        V = l.useRef(),
        F = h.QK.getSetting();
    l.useEffect(() => {
        if (k && t && !B.current && F)
            return (
                U(!0),
                (V.current = setTimeout(() => {
                    U(!1);
                }, 5000)),
                () => {
                    clearTimeout(V.current);
                }
            );
    }, [k, t, F]),
        l.useEffect(() => {
            B.current = t;
        }, [t]);
    let W = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        z = (0, u.Q3)('GuildHeader');
    return (0, i.jsx)(c.ThemeProvider, {
        theme: t ? f.BRd.DARK : void 0,
        children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        ref: H,
                        className: o()(r, {
                            [v.container]: !0,
                            [v.clickable]: null != a,
                            [v.selected]: null != a && Z,
                            [v.hasBanner]: W(),
                            [v.bannerVisible]: t,
                            [e]: !z && t,
                            [v.communityInfoVisible]: O || (M && D)
                        }),
                        onMouseDown: E,
                        onContextMenu: b,
                        onClick: a,
                        children: [
                            (0, i.jsxs)('header', {
                                className: o()(v.header, P, { [v.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: o()(v.headerContent, v.primaryInfo),
                                        children: [
                                            (0, i.jsx)(m.Z, {
                                                guild: y,
                                                isBannerVisible: t
                                            }),
                                            y.id === g._ && (0, i.jsx)(I, {}),
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'text-md/semibold',
                                                lineClamp: 1,
                                                className: v.name,
                                                children: y.toString()
                                            }),
                                            null != a &&
                                                (0, i.jsx)(c.Clickable, {
                                                    className: v.headerButton,
                                                    'aria-controls': N,
                                                    'aria-expanded': Z,
                                                    focusProps: {
                                                        ringTarget: H,
                                                        offset: 4
                                                    },
                                                    onClick: a,
                                                    onContextMenu: b,
                                                    'aria-label': C.intl.formatToPlainString(C.t.xMXpl5, { guildName: null !== (l = null == y ? void 0 : y.toString()) && void 0 !== l ? l : '' })
                                                }),
                                            (0, i.jsx)('div', {
                                                className: v.headerChildren,
                                                children: A
                                            })
                                        ]
                                    }),
                                    D &&
                                        (0, i.jsx)(x, {
                                            guild: y,
                                            controller: n,
                                            hasBanner: null != T,
                                            hasSubheader: null != M && M
                                        })
                                ]
                            }),
                            null != T
                                ? (0, i.jsx)(_, {
                                      guild: y,
                                      controller: n,
                                      guildBanner: T,
                                      animate: G
                                  })
                                : null
                        ]
                    }),
                    k && W()
                        ? (0, i.jsx)('div', {
                              className: v.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  U(!0), clearTimeout(V.current);
                              },
                              onMouseLeave: () => U(!1),
                              style: { height: j }
                          })
                        : null
                ]
            });
        }
    });
});
