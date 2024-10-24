n.d(t, {
    Z: function () {
        return w;
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
    _ = n(70097),
    g = n(617136),
    f = n(272008),
    h = n(113434),
    E = n(497505),
    S = n(918701),
    T = n(475595),
    v = n(720293),
    N = n(623249),
    j = n(78826),
    A = n(670638),
    b = n(341907),
    B = n(642145),
    R = n(981631),
    y = n(689938),
    I = n(411702);
function M(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: s, isDarkTheme: l } = e,
        { ref: i, height: d = 0 } = (0, m.Z)([o]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, h.z)(n),
        { type: _, hints: g } = a.useMemo(
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
        f = 2 !== _,
        E = (0, p.useSpring)({
            opacity: f ? 1 : 0,
            height: f ? d : 0,
            config: B.Y
        }),
        S = 0 === _ ? p.CircleWarningIcon : p.CircleInformationIcon,
        T = (0, C.Lq)(R.Ilk.RED_345),
        v = 0 === _ ? T : l ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(c.animated.div, {
            style: E,
            children: (0, r.jsxs)('div', {
                ref: i,
                className: I.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: I.hintsContainer,
                        children: [
                            (0, r.jsx)(S, {
                                size: 'xs',
                                color: v
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: g.at(0)
                            })
                        ]
                    }),
                    0 === _ &&
                        (0, r.jsx)(p.Button, {
                            onClick: () =>
                                (0, N.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: o
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, C.Lq)(R.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function O(e) {
    var t;
    let { asset: n, reducedMotionEnabled: o, visible: s } = e,
        l = a.useRef(null);
    return (
        a.useEffect(() => {
            null != l.current && s && l.current.play();
        }, [s]),
        (0, r.jsx)(_.Z, {
            ref: l,
            autoPlay: !o,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: i()(I.videoOverlay, { [I.videoOverlayVisible]: s }),
            controls: !1,
            children: (0, r.jsx)('source', {
                src: n.url,
                type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0
            })
        })
    );
}
function w(e) {
    var t, n, o;
    let { quest: s, isHovering: l, errorHints: c, warningHints: m, onCtxMenuClose: C, onCtxMenuOpen: N, onCtxMenuSelect: B } = e,
        w = (0, S.cr)(s),
        k = a.useMemo(() => (0, T.fh)(s, T.Bd.HERO), [s]),
        P = a.useMemo(() => (0, T.fh)(s, T.Bd.LOGO_TYPE, 'dark'), [s]),
        L = (0, x.ZP)(),
        U = ((0, u.wj)(L) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK,
        q = a.useContext(d.S).reducedMotion.enabled,
        Z = (0, S.Mi)(s, E.jn.GIFT_INVENTORY_FOR_YOU),
        Q = (0, h.tP)(s),
        D = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        W = a.useRef(l),
        H = a.useRef(null),
        V = (0, h.B6)(s.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        z = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        G = (null === (o = s.userStatus) || void 0 === o ? void 0 : o.completedAt) != null,
        F = a.useCallback(() => {
            if (!!w)
                (0, f.AH)(s.id, {
                    questContent: E.jn.QUEST_HOME_DESKTOP,
                    questContentCTA: g.jZ.ACCEPT_QUEST
                }),
                    (0, b.openVideoQuestModal)(s);
        }, [w, s]);
    a.useEffect(() => {
        if (k.isAnimated && null != H.current)
            return (
                W.current !== l && (l && !q ? H.current.play() : (H.current.pause(), (H.current.currentTime = 0))),
                (W.current = l),
                () => {
                    var e;
                    null === (e = H.current) || void 0 === e || e.pause();
                }
            );
    }, [l, k, q]);
    let K = a.useMemo(() => (0, v.z)(v.i.QUEST_HOME_VIDEO, s), [s]);
    return (0, r.jsxs)('div', {
        className: I.container,
        children: [
            (0, r.jsxs)('div', {
                className: I.heroAssetWrapper,
                children: [
                    k.isAnimated
                        ? (0, r.jsx)(j.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (H.current = e.current),
                                      (0, r.jsx)(_.Z, {
                                          ref: e,
                                          autoPlay: !q && l,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: I.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: k.url,
                                              type: null !== (t = k.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(j.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(s.config.messages.questName),
                                      className: I.heroAsset,
                                      src: k.url
                                  })
                          }),
                    w &&
                        !q &&
                        null != K &&
                        (0, r.jsx)(O, {
                            asset: K,
                            reducedMotionEnabled: q,
                            visible: l
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: i()(I.overlay, {
                    [I.darkThemeGradient]: U,
                    [I.lightThemeGradient]: !U
                })
            }),
            (0, r.jsxs)('div', {
                className: I.positionContentOverBackground,
                children: [
                    (0, r.jsxs)('div', {
                        className: I.contents,
                        children: [
                            (0, r.jsxs)('div', {
                                className: I.topRow,
                                children: [
                                    Z &&
                                        !Q &&
                                        !D &&
                                        (0, r.jsx)('div', {
                                            className: I.pill,
                                            children: (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: I.eyebrowText,
                                                children: y.Z.Messages.RECOMMENDED
                                            })
                                        }),
                                    w &&
                                        (0, r.jsx)(p.Tooltip, {
                                            text: G ? 'Watch again' : z ? 'Continue watching' : 'Start video quest',
                                            children: (e) =>
                                                (0, r.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: I.utilButtonWrapper,
                                                    'aria-label': y.Z.Messages.PLAY,
                                                    onClick: F,
                                                    children: (0, r.jsx)(p.PlayIcon, { className: I.utilButtonIcon })
                                                })
                                        }),
                                    (0, r.jsx)(A.r, {
                                        onOpen: N,
                                        onClose: C,
                                        onSelect: B,
                                        questContent: E.jn.QUEST_HOME_DESKTOP,
                                        quest: s,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(p.Clickable, {
                                                ...e,
                                                className: I.utilButtonWrapper,
                                                'aria-label': y.Z.Messages.ACTIONS,
                                                children: (0, r.jsx)(p.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: i()(I.utilButtonIcon)
                                                })
                                            })
                                    })
                                ]
                            }),
                            (0, r.jsx)(j.Fl, {
                                id: 'QuestPartnerBranding_gameLogotype',
                                children: (e) =>
                                    (0, r.jsx)('img', {
                                        ref: e,
                                        className: I.partnerBranding,
                                        alt: s.config.messages.gameTitle,
                                        src: P.url
                                    })
                            }),
                            (0, r.jsxs)('div', {
                                className: I.bottomRow,
                                children: [
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: U ? 'text-muted' : 'always-white',
                                        children: y.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: s.config.messages.gamePublisher })
                                    }),
                                    Q || D
                                        ? null
                                        : (0, r.jsx)(p.Text, {
                                              variant: 'text-sm/medium',
                                              color: U ? 'text-muted' : 'always-white',
                                              children: y.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: V })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(M, {
                        quest: s,
                        errorHints: c,
                        warningHints: m,
                        isDarkTheme: U
                    })
                ]
            })
        ]
    });
}
((s = o || (o = {}))[(s.ERROR = 0)] = 'ERROR'), (s[(s.WARNING = 1)] = 'WARNING'), (s[(s.NONE = 2)] = 'NONE');
