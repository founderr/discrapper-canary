n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(526629),
    o = n(873546),
    c = n(481060),
    u = n(540059),
    d = n(666188),
    h = n(695346),
    p = n(768581),
    f = n(358555),
    _ = n(981631),
    m = n(647086),
    g = n(689938),
    C = n(501223);
function I(e) {
    var t;
    let { guild: n, controller: l, guildBanner: r, animate: c } = e,
        { value: u } = l.springs,
        d = h.QK.getSetting();
    return (0, i.jsx)(s.animated.div, {
        className: C.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, i.jsx)(s.animated.div, {
            className: a()(C.bannerImage, { [C.bannerImgFullWidth]: o.tq }),
            style: { transform: u.to((e) => (d ? 'translateY('.concat((1 - e) * 60, 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * 90, 'px)'))) },
            children: (0, i.jsx)('img', {
                className: a()(C.bannerImg, { [C.bannerImgFullWidth]: o.tq }),
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
function E(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
        { value: o } = n.springs,
        u = t.hasFeature(_.oNc.DISCOVERABLE),
        d = (0, i.jsx)('div', {
            className: C.communityInfo,
            children:
                u &&
                (0, i.jsx)(c.Tooltip, {
                    text: g.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
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
                                    children: g.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
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
        : (0, i.jsx)(s.animated.div, {
              className: C.communityInfoContainer,
              style: l ? { opacity: o } : { height: o.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function N() {
    return (0, i.jsx)(c.StarIcon, {
        size: 'custom',
        color: 'currentColor',
        className: C.favoritesIcon,
        height: 20,
        width: 20
    });
}
t.ZP = l.memo(function (e) {
    let { bannerVisible: t, controller: n, className: r, onClick: s, onContextMenu: x, onMouseDown: S, disableBannerAnimation: v, 'aria-expanded': Z, 'aria-controls': T, guild: b, guildBanner: A, animationOverlayHeight: M, children: R, headerClassName: L, communityInfoVisible: y, hasSubheader: P } = e,
        O = b.hasFeature(_.oNc.ANIMATED_BANNER),
        j = (0, d.Z)(b),
        D = !j && b.hasCommunityInfoSubheader(),
        G = !j && y,
        w = (0, p.xR)(A) && O && !v,
        [U, k] = l.useState(!1),
        B = l.useRef(),
        V = l.useRef(null),
        H = l.useRef(),
        F = h.QK.getSetting();
    l.useEffect(() => {
        if (w && t && !B.current && F)
            return (
                k(!0),
                (H.current = setTimeout(() => {
                    k(!1);
                }, 5000)),
                () => {
                    clearTimeout(H.current);
                }
            );
    }, [w, t, F]),
        l.useEffect(() => {
            B.current = t;
        }, [t]);
    let W = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        z = (0, u.Q)('GuildHeader');
    return (0, i.jsx)(c.ThemeProvider, {
        theme: t ? _.BRd.DARK : void 0,
        children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        ref: V,
                        className: a()(r, {
                            [C.container]: !0,
                            [C.clickable]: null != s,
                            [C.selected]: null != s && Z,
                            [C.hasBanner]: W(),
                            [C.bannerVisible]: t,
                            [e]: t,
                            [C.communityInfoVisible]: G || (P && D)
                        }),
                        onMouseDown: S,
                        onContextMenu: x,
                        onClick: s,
                        children: [
                            z
                                ? null
                                : (0, i.jsxs)('header', {
                                      className: a()(C.header, L, { [C.themedHeaderMobile]: o.tq }),
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: a()(C.headerContent, C.primaryInfo),
                                              children: [
                                                  (0, i.jsx)(f.Z, {
                                                      guild: b,
                                                      isBannerVisible: t
                                                  }),
                                                  b.id === m._ && (0, i.jsx)(N, {}),
                                                  (0, i.jsx)(c.Heading, {
                                                      variant: 'text-md/semibold',
                                                      lineClamp: 1,
                                                      className: C.name,
                                                      children: b.toString()
                                                  }),
                                                  null != s &&
                                                      (0, i.jsx)(c.Clickable, {
                                                          className: C.headerButton,
                                                          'aria-controls': T,
                                                          'aria-expanded': Z,
                                                          focusProps: {
                                                              ringTarget: V,
                                                              offset: 4
                                                          },
                                                          onClick: s,
                                                          onContextMenu: x,
                                                          'aria-label': g.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({ guildName: null !== (l = null == b ? void 0 : b.toString()) && void 0 !== l ? l : '' })
                                                      }),
                                                  (0, i.jsx)('div', {
                                                      className: C.headerChildren,
                                                      children: R
                                                  })
                                              ]
                                          }),
                                          D &&
                                              (0, i.jsx)(E, {
                                                  guild: b,
                                                  controller: n,
                                                  hasBanner: null != A,
                                                  hasSubheader: null != P && P
                                              })
                                      ]
                                  }),
                            null != A
                                ? (0, i.jsx)(I, {
                                      guild: b,
                                      controller: n,
                                      guildBanner: A,
                                      animate: U
                                  })
                                : null
                        ]
                    }),
                    w && W()
                        ? (0, i.jsx)('div', {
                              className: C.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  k(!0), clearTimeout(H.current);
                              },
                              onMouseLeave: () => k(!1),
                              style: { height: M }
                          })
                        : null
                ]
            });
        }
    });
});
