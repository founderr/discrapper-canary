n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(571269),
    n(298267);
var o,
    s,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    c = n(100621),
    d = n(186325),
    u = n(780384),
    p = n(481060),
    m = n(393238),
    x = n(410030),
    C = n(44315),
    g = n(70097),
    _ = n(113434),
    f = n(497505),
    h = n(918701),
    E = n(475595),
    S = n(623249),
    T = n(78826),
    N = n(670638),
    v = n(642145),
    j = n(981631),
    A = n(689938),
    b = n(411702);
function R(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: s, isDarkTheme: l } = e,
        { ref: i, height: d = 0 } = (0, m.Z)([o]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, _.z)(n),
        { type: g, hints: f } = a.useMemo(
            () =>
                u || x
                    ? {
                          type: 2,
                          hints: []
                      }
                    : o.length > 0
                      ? {
                            type: 0,
                            hints: o.map((e) => e.message)
                        }
                      : s.length > 0
                        ? {
                              type: 1,
                              hints: s
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [o, u, x, s]
        ),
        h = 2 !== g,
        E = (0, p.useSpring)({
            opacity: h ? 1 : 0,
            height: h ? d : 0,
            config: v.Y
        }),
        T = 0 === g ? p.CircleWarningIcon : p.CircleInformationIcon,
        N = (0, C.Lq)(j.Ilk.RED_345),
        A = 0 === g ? N : l ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(c.animated.div, {
            style: E,
            children: (0, r.jsxs)('div', {
                ref: i,
                className: b.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.hintsContainer,
                        children: [
                            (0, r.jsx)(T, {
                                size: 'xs',
                                color: A
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: f.at(0)
                            })
                        ]
                    }),
                    0 === g &&
                        (0, r.jsx)(p.Button, {
                            onClick: () =>
                                (0, S.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: o
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, C.Lq)(j.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function B(e) {
    var t;
    let { quest: n, isHovering: o, errorHints: s, warningHints: l, onCtxMenuClose: c, onCtxMenuOpen: m, onCtxMenuSelect: C } = e,
        S = a.useMemo(() => (0, E.fh)(n, E.Bd.HERO), [n]),
        v = a.useMemo(() => (0, E.fh)(n, E.Bd.LOGO_TYPE, 'dark'), [n]),
        B = (0, x.ZP)(),
        I = ((0, u.wj)(B) ? j.BRd.DARK : j.BRd.LIGHT) === j.BRd.DARK,
        y = a.useContext(d.S).reducedMotion.enabled,
        M = (0, h.Mi)(n, f.jn.GIFT_INVENTORY_FOR_YOU),
        O = (0, _.tP)(n),
        w = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        k = a.useRef(o),
        L = a.useRef(null),
        U = (0, _.B6)(n.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        });
    return (
        a.useEffect(() => {
            if (S.isAnimated && null != L.current)
                return (
                    k.current !== o && (o && !y ? L.current.play() : (L.current.pause(), (L.current.currentTime = 0))),
                    (k.current = o),
                    () => {
                        var e;
                        null === (e = L.current) || void 0 === e || e.pause();
                    }
                );
        }, [o, S, y]),
        (0, r.jsxs)('div', {
            className: b.container,
            children: [
                (0, r.jsx)('div', {
                    className: b.heroAssetWrapper,
                    children: S.isAnimated
                        ? (0, r.jsx)(T.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (L.current = e.current),
                                      (0, r.jsx)(g.Z, {
                                          ref: e,
                                          autoPlay: !y && o,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: b.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: S.url,
                                              type: null !== (t = S.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(T.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(n.config.messages.questName),
                                      className: b.heroAsset,
                                      src: S.url
                                  })
                          })
                }),
                (0, r.jsx)('div', {
                    className: i()(b.overlay, {
                        [b.darkThemeGradient]: I,
                        [b.lightThemeGradient]: !I
                    })
                }),
                (0, r.jsxs)('div', {
                    className: b.positionContentOverBackground,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.contents,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: b.topRow,
                                    children: [
                                        M &&
                                            !O &&
                                            !w &&
                                            (0, r.jsx)('div', {
                                                className: b.pill,
                                                children: (0, r.jsx)(p.Text, {
                                                    variant: 'eyebrow',
                                                    color: 'always-white',
                                                    className: b.eyebrowText,
                                                    children: A.Z.Messages.RECOMMENDED
                                                })
                                            }),
                                        (0, r.jsx)(N.r, {
                                            onOpen: m,
                                            onClose: c,
                                            onSelect: C,
                                            questContent: f.jn.QUEST_HOME_DESKTOP,
                                            quest: n,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: (e) =>
                                                (0, r.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: b.submenuWrapper,
                                                    'aria-label': A.Z.Messages.ACTIONS,
                                                    children: (0, r.jsx)(p.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: i()(b.submenuIcon)
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(T.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: (e) =>
                                        (0, r.jsx)('img', {
                                            ref: e,
                                            className: b.partnerBranding,
                                            alt: n.config.messages.gameTitle,
                                            src: v.url
                                        })
                                }),
                                (0, r.jsxs)('div', {
                                    className: b.bottomRow,
                                    children: [
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-sm/medium',
                                            color: I ? 'text-muted' : 'always-white',
                                            children: A.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: n.config.messages.gamePublisher })
                                        }),
                                        O || w
                                            ? null
                                            : (0, r.jsx)(p.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: I ? 'text-muted' : 'always-white',
                                                  children: A.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: U })
                                              })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(R, {
                            quest: n,
                            errorHints: s,
                            warningHints: l,
                            isDarkTheme: I
                        })
                    ]
                })
            ]
        })
    );
}
((s = o || (o = {}))[(s.ERROR = 0)] = 'ERROR'), (s[(s.WARNING = 1)] = 'WARNING'), (s[(s.NONE = 2)] = 'NONE');
