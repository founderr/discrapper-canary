n.d(t, {
    Z: function () {
        return k;
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
    _ = n(617136),
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
    R = n(642145),
    B = n(981631),
    I = n(689938),
    y = n(411702);
function M(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: s, isDarkTheme: l } = e,
        { ref: i, height: d = 0 } = (0, m.Z)([o]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, h.z)(n),
        { type: g, hints: _ } = a.useMemo(
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
        f = 2 !== g,
        E = (0, p.useSpring)({
            opacity: f ? 1 : 0,
            height: f ? d : 0,
            config: R.Y
        }),
        S = 0 === g ? p.CircleWarningIcon : p.CircleInformationIcon,
        T = (0, C.Lq)(B.Ilk.RED_345),
        v = 0 === g ? T : l ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(c.animated.div, {
            style: E,
            children: (0, r.jsxs)('div', {
                ref: i,
                className: y.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.hintsContainer,
                        children: [
                            (0, r.jsx)(S, {
                                size: 'xs',
                                color: v
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: _.at(0)
                            })
                        ]
                    }),
                    0 === g &&
                        (0, r.jsx)(p.Button, {
                            onClick: () =>
                                (0, N.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: o
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, C.Lq)(B.Ilk.BLUE_345) },
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
        (0, r.jsx)(g.Z, {
            ref: l,
            autoPlay: !o,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: i()(y.videoOverlay, { [y.videoOverlayVisible]: s }),
            controls: !1,
            children: (0, r.jsx)('source', {
                src: n.url,
                type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0
            })
        })
    );
}
function k(e) {
    var t, n, o;
    let { quest: s, isHovering: l, errorHints: c, warningHints: m, onCtxMenuClose: C, onCtxMenuOpen: N, onCtxMenuSelect: R } = e,
        k = (0, S.cr)(s),
        w = a.useMemo(() => (0, T.fh)(s, T.Bd.HERO), [s]),
        L = a.useMemo(() => (0, T.fh)(s, T.Bd.LOGO_TYPE, 'dark'), [s]),
        U = (0, x.ZP)(),
        q = ((0, u.wj)(U) ? B.BRd.DARK : B.BRd.LIGHT) === B.BRd.DARK,
        Z = a.useContext(d.S).reducedMotion.enabled,
        P = (0, S.Mi)(s, E.jn.GIFT_INVENTORY_FOR_YOU),
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
            if (!!k)
                (0, f.AH)(s.id, {
                    questContent: E.jn.QUEST_HOME_DESKTOP,
                    questContentCTA: _.jZ.ACCEPT_QUEST
                }),
                    (0, b.openVideoQuestModal)(s);
        }, [k, s]);
    a.useEffect(() => {
        if (w.isAnimated && null != H.current)
            return (
                W.current !== l && (l && !Z ? H.current.play() : (H.current.pause(), (H.current.currentTime = 0))),
                (W.current = l),
                () => {
                    var e;
                    null === (e = H.current) || void 0 === e || e.pause();
                }
            );
    }, [l, w, Z]);
    let K = a.useMemo(() => (0, v.z)(v.i.QUEST_HOME_VIDEO, s), [s]);
    return (0, r.jsxs)('div', {
        className: y.container,
        children: [
            (0, r.jsxs)('div', {
                className: y.heroAssetWrapper,
                children: [
                    w.isAnimated
                        ? (0, r.jsx)(j.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (H.current = e.current),
                                      (0, r.jsx)(g.Z, {
                                          ref: e,
                                          autoPlay: !Z && l,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: y.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: w.url,
                                              type: null !== (t = w.mimetype) && void 0 !== t ? t : void 0
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
                                      className: y.heroAsset,
                                      src: w.url
                                  })
                          }),
                    k &&
                        !Z &&
                        null != K &&
                        (0, r.jsx)(O, {
                            asset: K,
                            reducedMotionEnabled: Z,
                            visible: l
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: i()(y.overlay, {
                    [y.darkThemeGradient]: q,
                    [y.lightThemeGradient]: !q
                })
            }),
            (0, r.jsxs)('div', {
                className: y.positionContentOverBackground,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.contents,
                        children: [
                            (0, r.jsxs)('div', {
                                className: y.topRow,
                                children: [
                                    P &&
                                        !Q &&
                                        !D &&
                                        (0, r.jsx)('div', {
                                            className: y.pill,
                                            children: (0, r.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: y.eyebrowText,
                                                children: I.Z.Messages.RECOMMENDED
                                            })
                                        }),
                                    k &&
                                        (0, r.jsx)(p.Tooltip, {
                                            text: G ? 'Watch again' : z ? 'Continue watching' : 'Start video quest',
                                            children: (e) =>
                                                (0, r.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: y.utilButtonWrapper,
                                                    'aria-label': I.Z.Messages.PLAY,
                                                    onClick: F,
                                                    children: (0, r.jsx)(p.PlayIcon, { className: y.utilButtonIcon })
                                                })
                                        }),
                                    (0, r.jsx)(A.r, {
                                        onOpen: N,
                                        onClose: C,
                                        onSelect: R,
                                        questContent: E.jn.QUEST_HOME_DESKTOP,
                                        quest: s,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(p.Clickable, {
                                                ...e,
                                                className: y.utilButtonWrapper,
                                                'aria-label': I.Z.Messages.ACTIONS,
                                                children: (0, r.jsx)(p.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: i()(y.utilButtonIcon)
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
                                        className: y.partnerBranding,
                                        alt: s.config.messages.gameTitle,
                                        src: L.url
                                    })
                            }),
                            (0, r.jsxs)('div', {
                                className: y.bottomRow,
                                children: [
                                    (0, r.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: q ? 'text-muted' : 'always-white',
                                        children: I.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: s.config.messages.gamePublisher })
                                    }),
                                    Q || D
                                        ? null
                                        : (0, r.jsx)(p.Text, {
                                              variant: 'text-sm/medium',
                                              color: q ? 'text-muted' : 'always-white',
                                              children: I.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: V })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(M, {
                        quest: s,
                        errorHints: c,
                        warningHints: m,
                        isDarkTheme: q
                    })
                ]
            })
        ]
    });
}
((s = o || (o = {}))[(s.ERROR = 0)] = 'ERROR'), (s[(s.WARNING = 1)] = 'WARNING'), (s[(s.NONE = 2)] = 'NONE');
