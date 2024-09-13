n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(571269),
    n(298267);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(56217),
    d = n(186325),
    u = n(780384),
    _ = n(481060),
    E = n(393238),
    h = n(410030),
    m = n(44315),
    I = n(70097),
    g = n(113434),
    p = n(497505),
    T = n(918701),
    S = n(623249),
    C = n(78826),
    f = n(670638),
    N = n(642145),
    A = n(981631),
    v = n(689938),
    L = n(411702);
function Z(e) {
    var t;
    let { quest: n, errorHints: i, warningHints: a, isDarkTheme: l } = e,
        { ref: o, height: d = 0 } = (0, E.Z)([i]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        h = (0, g.z)(n),
        { type: I, hints: p } = r.useMemo(
            () =>
                u || h
                    ? {
                          type: 2,
                          hints: []
                      }
                    : i.length > 0
                      ? {
                            type: 0,
                            hints: i.map((e) => e.message)
                        }
                      : a.length > 0
                        ? {
                              type: 1,
                              hints: a
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [i, u, h, a]
        ),
        T = 2 !== I,
        C = (0, _.useSpring)({
            opacity: T ? 1 : 0,
            height: T ? d : 0,
            config: N.Y
        }),
        f = 0 === I ? _.CircleWarningIcon : _.CircleInformationIcon,
        v = (0, m.Lq)(A.Ilk.RED_345),
        Z = 0 === I ? v : l ? _.tokens.colors.TEXT_NORMAL : _.tokens.colors.WHITE;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsx)(c.animated.div, {
            style: C,
            children: (0, s.jsxs)('div', {
                ref: o,
                className: L.hints,
                children: [
                    (0, s.jsxs)('div', {
                        className: L.hintsContainer,
                        children: [
                            (0, s.jsx)(f, {
                                size: 'xs',
                                color: Z
                            }),
                            (0, s.jsx)(_.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: p.at(0)
                            })
                        ]
                    }),
                    0 === I &&
                        (0, s.jsx)(_.Button, {
                            onClick: () =>
                                (0, S.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: i
                                }),
                            size: _.ButtonSizes.MIN,
                            look: _.ButtonLooks.LINK,
                            color: _.ButtonColors.CUSTOM,
                            style: { color: (0, m.Lq)(A.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function R(e) {
    var t;
    let { quest: n, isHovering: i, errorHints: a, warningHints: l, onCtxMenuClose: c, onCtxMenuOpen: E, onCtxMenuSelect: m } = e,
        S = (0, T.j8)(n),
        N = (0, h.ZP)(),
        R = ((0, u.wj)(N) ? A.BRd.DARK : A.BRd.LIGHT) === A.BRd.DARK,
        O = r.useMemo(() => (0, T.nP)(n.config.assets.hero), [n]),
        x = r.useContext(d.S).reducedMotion.enabled,
        b = (0, T.Mi)(n, p.jn.GIFT_INVENTORY_FOR_YOU),
        P = (0, g.tP)(n),
        M = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        D = r.useRef(i),
        y = r.useRef(null),
        j = (0, g.B6)(n.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        });
    return (
        r.useEffect(() => {
            if (O && null != y.current)
                return (
                    D.current !== i && (i && !x ? y.current.play() : (y.current.pause(), (y.current.currentTime = 0))),
                    (D.current = i),
                    () => {
                        var e;
                        null === (e = y.current) || void 0 === e || e.pause();
                    }
                );
        }, [i, O, x]),
        (0, s.jsxs)('div', {
            className: L.container,
            children: [
                (0, s.jsx)('div', {
                    className: L.heroAssetWrapper,
                    children: O
                        ? (0, s.jsx)(C.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => (
                                  null != e.current && (y.current = e.current),
                                  (0, s.jsx)(I.Z, {
                                      ref: e,
                                      autoPlay: !x && i,
                                      loop: !0,
                                      muted: !0,
                                      playsInline: !0,
                                      className: L.heroAsset,
                                      controls: !1,
                                      children: (0, s.jsx)('source', {
                                          src: S,
                                          type: (0, T.mN)(S)
                                      })
                                  })
                              )
                          })
                        : (0, s.jsx)(C.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, s.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(n.config.messages.questName),
                                      className: L.heroAsset,
                                      src: S
                                  })
                          })
                }),
                (0, s.jsx)('div', {
                    className: o()(L.overlay, {
                        [L.darkThemeGradient]: R,
                        [L.lightThemeGradient]: !R
                    })
                }),
                (0, s.jsxs)('div', {
                    className: L.positionContentOverBackground,
                    children: [
                        (0, s.jsxs)('div', {
                            className: L.contents,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: L.topRow,
                                    children: [
                                        b &&
                                            !P &&
                                            !M &&
                                            (0, s.jsx)('div', {
                                                className: L.pill,
                                                children: (0, s.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    color: 'always-white',
                                                    className: L.eyebrowText,
                                                    children: v.Z.Messages.RECOMMENDED
                                                })
                                            }),
                                        (0, s.jsx)(f.r, {
                                            onOpen: E,
                                            onClose: c,
                                            onSelect: m,
                                            questContent: p.jn.QUEST_HOME_DESKTOP,
                                            quest: n,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: (e) =>
                                                (0, s.jsx)(_.Clickable, {
                                                    ...e,
                                                    className: L.submenuWrapper,
                                                    'aria-label': v.Z.Messages.ACTIONS,
                                                    children: (0, s.jsx)(_.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: o()(L.submenuIcon)
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, s.jsx)(C.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: (e) =>
                                        (0, s.jsx)('img', {
                                            ref: e,
                                            className: L.partnerBranding,
                                            alt: n.config.messages.gameTitle,
                                            src: (0, T.Gs)(n, 'dark')
                                        })
                                }),
                                (0, s.jsxs)('div', {
                                    className: L.bottomRow,
                                    children: [
                                        (0, s.jsx)(_.Text, {
                                            variant: 'text-sm/medium',
                                            color: R ? 'text-muted' : 'always-white',
                                            children: v.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: n.config.messages.gamePublisher })
                                        }),
                                        P || M
                                            ? null
                                            : (0, s.jsx)(_.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: R ? 'text-muted' : 'always-white',
                                                  children: v.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: j })
                                              })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(Z, {
                            quest: n,
                            errorHints: a,
                            warningHints: l,
                            isDarkTheme: R
                        })
                    ]
                })
            ]
        })
    );
}
((a = i || (i = {}))[(a.ERROR = 0)] = 'ERROR'), (a[(a.WARNING = 1)] = 'WARNING'), (a[(a.NONE = 2)] = 'NONE');
