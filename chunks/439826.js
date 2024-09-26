n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(571269),
    n(298267);
var s,
    o,
    r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    c = n(526629),
    d = n(186325),
    u = n(780384),
    p = n(481060),
    m = n(393238),
    x = n(410030),
    _ = n(44315),
    C = n(70097),
    g = n(113434),
    f = n(497505),
    E = n(918701),
    h = n(623249),
    S = n(78826),
    T = n(670638),
    N = n(642145),
    v = n(981631),
    j = n(689938),
    A = n(411702);
function R(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: o, isDarkTheme: l } = e,
        { ref: i, height: d = 0 } = (0, m.Z)([s]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, g.z)(n),
        { type: C, hints: f } = a.useMemo(
            () =>
                u || x
                    ? {
                          type: 2,
                          hints: []
                      }
                    : s.length > 0
                      ? {
                            type: 0,
                            hints: s.map((e) => e.message)
                        }
                      : o.length > 0
                        ? {
                              type: 1,
                              hints: o
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [s, u, x, o]
        ),
        E = 2 !== C,
        S = (0, p.useSpring)({
            opacity: E ? 1 : 0,
            height: E ? d : 0,
            config: N.Y
        }),
        T = 0 === C ? p.CircleWarningIcon : p.CircleInformationIcon,
        j = (0, _.Lq)(v.Ilk.RED_345),
        R = 0 === C ? j : l ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(c.animated.div, {
            style: S,
            children: (0, r.jsxs)('div', {
                ref: i,
                className: A.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.hintsContainer,
                        children: [
                            (0, r.jsx)(T, {
                                size: 'xs',
                                color: R
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: f.at(0)
                            })
                        ]
                    }),
                    0 === C &&
                        (0, r.jsx)(p.Button, {
                            onClick: () =>
                                (0, h.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: s
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, _.Lq)(v.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function b(e) {
    var t;
    let { quest: n, isHovering: s, errorHints: o, warningHints: l, onCtxMenuClose: c, onCtxMenuOpen: m, onCtxMenuSelect: _ } = e,
        h = (0, E.j8)(n),
        N = (0, x.ZP)(),
        b = ((0, u.wj)(N) ? v.BRd.DARK : v.BRd.LIGHT) === v.BRd.DARK,
        B = a.useMemo(() => (0, E.nP)(h), [h]),
        I = a.useContext(d.S).reducedMotion.enabled,
        M = (0, E.Mi)(n, f.jn.GIFT_INVENTORY_FOR_YOU),
        O = (0, g.tP)(n),
        y = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        L = a.useRef(s),
        w = a.useRef(null),
        k = (0, g.B6)(n.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        });
    return (
        a.useEffect(() => {
            if (B && null != w.current)
                return (
                    L.current !== s && (s && !I ? w.current.play() : (w.current.pause(), (w.current.currentTime = 0))),
                    (L.current = s),
                    () => {
                        var e;
                        null === (e = w.current) || void 0 === e || e.pause();
                    }
                );
        }, [s, B, I]),
        (0, r.jsxs)('div', {
            className: A.container,
            children: [
                (0, r.jsx)('div', {
                    className: A.heroAssetWrapper,
                    children: B
                        ? (0, r.jsx)(S.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => (
                                  null != e.current && (w.current = e.current),
                                  (0, r.jsx)(C.Z, {
                                      ref: e,
                                      autoPlay: !I && s,
                                      loop: !0,
                                      muted: !0,
                                      playsInline: !0,
                                      className: A.heroAsset,
                                      controls: !1,
                                      children: (0, r.jsx)('source', {
                                          src: h,
                                          type: (0, E.mN)(h)
                                      })
                                  })
                              )
                          })
                        : (0, r.jsx)(S.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(n.config.messages.questName),
                                      className: A.heroAsset,
                                      src: h
                                  })
                          })
                }),
                (0, r.jsx)('div', {
                    className: i()(A.overlay, {
                        [A.darkThemeGradient]: b,
                        [A.lightThemeGradient]: !b
                    })
                }),
                (0, r.jsxs)('div', {
                    className: A.positionContentOverBackground,
                    children: [
                        (0, r.jsxs)('div', {
                            className: A.contents,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: A.topRow,
                                    children: [
                                        M &&
                                            !O &&
                                            !y &&
                                            (0, r.jsx)('div', {
                                                className: A.pill,
                                                children: (0, r.jsx)(p.Text, {
                                                    variant: 'eyebrow',
                                                    color: 'always-white',
                                                    className: A.eyebrowText,
                                                    children: j.Z.Messages.RECOMMENDED
                                                })
                                            }),
                                        (0, r.jsx)(T.r, {
                                            onOpen: m,
                                            onClose: c,
                                            onSelect: _,
                                            questContent: f.jn.QUEST_HOME_DESKTOP,
                                            quest: n,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: (e) =>
                                                (0, r.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: A.submenuWrapper,
                                                    'aria-label': j.Z.Messages.ACTIONS,
                                                    children: (0, r.jsx)(p.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: i()(A.submenuIcon)
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(S.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: (e) =>
                                        (0, r.jsx)('img', {
                                            ref: e,
                                            className: A.partnerBranding,
                                            alt: n.config.messages.gameTitle,
                                            src: (0, E.Gs)(n, 'dark')
                                        })
                                }),
                                (0, r.jsxs)('div', {
                                    className: A.bottomRow,
                                    children: [
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-sm/medium',
                                            color: b ? 'text-muted' : 'always-white',
                                            children: j.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: n.config.messages.gamePublisher })
                                        }),
                                        O || y
                                            ? null
                                            : (0, r.jsx)(p.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: b ? 'text-muted' : 'always-white',
                                                  children: j.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: k })
                                              })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(R, {
                            quest: n,
                            errorHints: o,
                            warningHints: l,
                            isDarkTheme: b
                        })
                    ]
                })
            ]
        })
    );
}
((o = s || (s = {}))[(o.ERROR = 0)] = 'ERROR'), (o[(o.WARNING = 1)] = 'WARNING'), (o[(o.NONE = 2)] = 'NONE');
