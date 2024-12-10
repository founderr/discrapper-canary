n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(752877),
    s = n(873546),
    c = n(481060),
    u = n(666188),
    d = n(695346),
    h = n(768581),
    p = n(358555),
    m = n(981631),
    f = n(647086),
    g = n(388032),
    C = n(215887);
function _(e) {
    var t;
    let { guild: n, controller: l, guildBanner: r, animate: c } = e,
        { value: u } = l.springs,
        p = d.QK.getSetting();
    return (0, i.jsx)(o.animated.div, {
        className: C.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, i.jsx)(o.animated.div, {
            className: a()(C.bannerImage, { [C.bannerImgFullWidth]: s.tq }),
            style: { transform: u.to((e) => (p ? 'translateY('.concat((1 - e) * 60, 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * 90, 'px)'))) },
            children: (0, i.jsx)('img', {
                className: a()(C.bannerImg, { [C.bannerImgFullWidth]: s.tq }),
                src:
                    null !==
                        (t = h.ZP.getGuildBannerURL(
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
function v(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
        { value: s } = n.springs,
        u = t.hasFeature(m.oNc.DISCOVERABLE),
        d = (0, i.jsx)('div', {
            className: C.communityInfo,
            children:
                u &&
                (0, i.jsx)(c.Tooltip, {
                    text: g.intl.string(g.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, i.jsxs)('div', {
                            className: C.communityInfoPill,
                            ...e,
                            children: [
                                (0, i.jsx)(c.GlobeEarthIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 12,
                                    height: 12,
                                    className: C.communityIcon
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    children: g.intl.string(g.t['B/vjCg'])
                                })
                            ]
                        })
                })
        });
    return r
        ? (0, i.jsx)('div', {
              className: a()(C.communityInfoContainer, C.hasSubheader),
              children: d
          })
        : (0, i.jsx)(o.animated.div, {
              className: C.communityInfoContainer,
              style: l ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function x() {
    return (0, i.jsx)(c.StarIcon, {
        size: 'custom',
        color: 'currentColor',
        className: C.favoritesIcon,
        height: 20,
        width: 20
    });
}
t.ZP = l.memo(function (e) {
    let { bannerVisible: t, controller: n, className: r, onClick: o, onContextMenu: I, onMouseDown: b, disableBannerAnimation: E, 'aria-expanded': S, 'aria-controls': Z, guild: N, guildBanner: y, animationOverlayHeight: T, children: j, headerClassName: A, communityInfoVisible: P, hasSubheader: R } = e,
        M = N.hasFeature(m.oNc.ANIMATED_BANNER),
        L = (0, u.Z)(N),
        w = !L && N.hasCommunityInfoSubheader(),
        D = !L && P,
        O = (0, h.xR)(y) && M && !E,
        [k, U] = l.useState(!1),
        G = l.useRef(),
        B = l.useRef(null),
        H = l.useRef(),
        V = d.QK.getSetting();
    l.useEffect(() => {
        if (O && t && !G.current && V)
            return (
                U(!0),
                (H.current = setTimeout(() => {
                    U(!1);
                }, 5000)),
                () => {
                    clearTimeout(H.current);
                }
            );
    }, [O, t, V]),
        l.useEffect(() => {
            G.current = t;
        }, [t]);
    let F = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, i.jsx)(c.ThemeProvider, {
        theme: t ? m.BRd.DARK : void 0,
        children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        ref: B,
                        className: a()(r, {
                            [C.container]: !0,
                            [C.clickable]: null != o,
                            [C.selected]: null != o && S,
                            [C.hasBanner]: F(),
                            [C.bannerVisible]: t,
                            [e]: t,
                            [C.communityInfoVisible]: D || (R && w)
                        }),
                        onMouseDown: b,
                        onContextMenu: I,
                        onClick: o,
                        children: [
                            (0, i.jsxs)('header', {
                                className: a()(C.header, A, { [C.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: a()(C.headerContent, C.primaryInfo),
                                        children: [
                                            (0, i.jsx)(p.Z, {
                                                guild: N,
                                                isBannerVisible: t
                                            }),
                                            N.id === f._ && (0, i.jsx)(x, {}),
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'text-md/semibold',
                                                lineClamp: 1,
                                                className: C.name,
                                                children: N.toString()
                                            }),
                                            null != o &&
                                                (0, i.jsx)(c.Clickable, {
                                                    className: C.headerButton,
                                                    'aria-controls': Z,
                                                    'aria-expanded': S,
                                                    focusProps: {
                                                        ringTarget: B,
                                                        offset: 4
                                                    },
                                                    onClick: o,
                                                    onContextMenu: I,
                                                    'aria-label': g.intl.formatToPlainString(g.t.xMXpl5, { guildName: null !== (l = null == N ? void 0 : N.toString()) && void 0 !== l ? l : '' })
                                                }),
                                            (0, i.jsx)('div', {
                                                className: C.headerChildren,
                                                children: j
                                            })
                                        ]
                                    }),
                                    w &&
                                        (0, i.jsx)(v, {
                                            guild: N,
                                            controller: n,
                                            hasBanner: null != y,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != y
                                ? (0, i.jsx)(_, {
                                      guild: N,
                                      controller: n,
                                      guildBanner: y,
                                      animate: k
                                  })
                                : null
                        ]
                    }),
                    O && F()
                        ? (0, i.jsx)('div', {
                              className: C.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  U(!0), clearTimeout(H.current);
                              },
                              onMouseLeave: () => U(!1),
                              style: { height: T }
                          })
                        : null
                ]
            });
        }
    });
});
