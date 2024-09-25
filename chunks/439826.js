n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(571269),
    n(298267);
var s,
    a,
    r = n(735250),
    i = n(470079),
    o = n(120356),
    l = n.n(o),
    c = n(526629),
    d = n(186325),
    _ = n(780384),
    u = n(481060),
    E = n(393238),
    T = n(410030),
    I = n(44315),
    R = n(70097),
    m = n(113434),
    g = n(497505),
    N = n(918701),
    C = n(623249),
    p = n(78826),
    f = n(670638),
    A = n(642145),
    S = n(981631),
    h = n(689938),
    M = n(411702);
function x(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: o } = e,
        { ref: l, height: d = 0 } = (0, E.Z)([s]),
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        T = (0, m.z)(n),
        { type: R, hints: g } = i.useMemo(
            () =>
                _ || T
                    ? {
                          type: 2,
                          hints: []
                      }
                    : s.length > 0
                      ? {
                            type: 0,
                            hints: s.map((e) => e.message)
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
            [s, _, T, a]
        ),
        N = 2 !== R,
        p = (0, u.useSpring)({
            opacity: N ? 1 : 0,
            height: N ? d : 0,
            config: A.Y
        }),
        f = 0 === R ? u.CircleWarningIcon : u.CircleInformationIcon,
        h = (0, I.Lq)(S.Ilk.RED_345),
        x = 0 === R ? h : o ? u.tokens.colors.TEXT_NORMAL : u.tokens.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(c.animated.div, {
            style: p,
            children: (0, r.jsxs)('div', {
                ref: l,
                className: M.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: M.hintsContainer,
                        children: [
                            (0, r.jsx)(f, {
                                size: 'xs',
                                color: x
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: o ? 'text-muted' : 'always-white',
                                children: g.at(0)
                            })
                        ]
                    }),
                    0 === R &&
                        (0, r.jsx)(u.Button, {
                            onClick: () =>
                                (0, C.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: s
                                }),
                            size: u.ButtonSizes.MIN,
                            look: u.ButtonLooks.LINK,
                            color: u.ButtonColors.CUSTOM,
                            style: { color: (0, I.Lq)(S.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function b(e) {
    var t;
    let { quest: n, isHovering: s, errorHints: a, warningHints: o, onCtxMenuClose: c, onCtxMenuOpen: E, onCtxMenuSelect: I } = e,
        C = (0, N.j8)(n),
        A = (0, T.ZP)(),
        b = ((0, _.wj)(A) ? S.BRd.DARK : S.BRd.LIGHT) === S.BRd.DARK,
        O = i.useMemo(() => (0, N.nP)(C), [C]),
        P = i.useContext(d.S).reducedMotion.enabled,
        v = (0, N.Mi)(n, g.jn.GIFT_INVENTORY_FOR_YOU),
        L = (0, m.tP)(n),
        Z = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        D = i.useRef(s),
        B = i.useRef(null),
        U = (0, m.B6)(n.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        });
    return (
        i.useEffect(() => {
            if (O && null != B.current)
                return (
                    D.current !== s && (s && !P ? B.current.play() : (B.current.pause(), (B.current.currentTime = 0))),
                    (D.current = s),
                    () => {
                        var e;
                        null === (e = B.current) || void 0 === e || e.pause();
                    }
                );
        }, [s, O, P]),
        (0, r.jsxs)('div', {
            className: M.container,
            children: [
                (0, r.jsx)('div', {
                    className: M.heroAssetWrapper,
                    children: O
                        ? (0, r.jsx)(p.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => (
                                  null != e.current && (B.current = e.current),
                                  (0, r.jsx)(R.Z, {
                                      ref: e,
                                      autoPlay: !P && s,
                                      loop: !0,
                                      muted: !0,
                                      playsInline: !0,
                                      className: M.heroAsset,
                                      controls: !1,
                                      children: (0, r.jsx)('source', {
                                          src: C,
                                          type: (0, N.mN)(C)
                                      })
                                  })
                              )
                          })
                        : (0, r.jsx)(p.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(n.config.messages.questName),
                                      className: M.heroAsset,
                                      src: C
                                  })
                          })
                }),
                (0, r.jsx)('div', {
                    className: l()(M.overlay, {
                        [M.darkThemeGradient]: b,
                        [M.lightThemeGradient]: !b
                    })
                }),
                (0, r.jsxs)('div', {
                    className: M.positionContentOverBackground,
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.contents,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: M.topRow,
                                    children: [
                                        v &&
                                            !L &&
                                            !Z &&
                                            (0, r.jsx)('div', {
                                                className: M.pill,
                                                children: (0, r.jsx)(u.Text, {
                                                    variant: 'eyebrow',
                                                    color: 'always-white',
                                                    className: M.eyebrowText,
                                                    children: h.Z.Messages.RECOMMENDED
                                                })
                                            }),
                                        (0, r.jsx)(f.r, {
                                            onOpen: E,
                                            onClose: c,
                                            onSelect: I,
                                            questContent: g.jn.QUEST_HOME_DESKTOP,
                                            quest: n,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: (e) =>
                                                (0, r.jsx)(u.Clickable, {
                                                    ...e,
                                                    className: M.submenuWrapper,
                                                    'aria-label': h.Z.Messages.ACTIONS,
                                                    children: (0, r.jsx)(u.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: l()(M.submenuIcon)
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(p.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: (e) =>
                                        (0, r.jsx)('img', {
                                            ref: e,
                                            className: M.partnerBranding,
                                            alt: n.config.messages.gameTitle,
                                            src: (0, N.Gs)(n, 'dark')
                                        })
                                }),
                                (0, r.jsxs)('div', {
                                    className: M.bottomRow,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            color: b ? 'text-muted' : 'always-white',
                                            children: h.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: n.config.messages.gamePublisher })
                                        }),
                                        L || Z
                                            ? null
                                            : (0, r.jsx)(u.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: b ? 'text-muted' : 'always-white',
                                                  children: h.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: U })
                                              })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(x, {
                            quest: n,
                            errorHints: a,
                            warningHints: o,
                            isDarkTheme: b
                        })
                    ]
                })
            ]
        })
    );
}
((a = s || (s = {}))[(a.ERROR = 0)] = 'ERROR'), (a[(a.WARNING = 1)] = 'WARNING'), (a[(a.NONE = 2)] = 'NONE');
