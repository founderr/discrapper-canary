n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(392711),
    s = n.n(o),
    c = n(512969),
    u = n(91192),
    d = n(374470),
    h = n(442837),
    p = n(902704),
    f = n(846519),
    m = n(481060),
    g = n(925549),
    C = n(209613),
    _ = n(100527),
    x = n(906732),
    v = n(358221),
    I = n(963202),
    b = n(706590),
    N = n(940777),
    E = n(41776),
    S = n(905423),
    Z = n(802718),
    y = n(796974),
    T = n(271383),
    j = n(430824),
    A = n(771845),
    P = n(358085),
    R = n(709054),
    M = n(727258),
    L = n(605951),
    w = n(474109),
    D = n(741616),
    O = n(187835),
    k = n(118122),
    G = n(193154),
    U = n(602147),
    B = n(773182),
    H = n(222059),
    V = n(751277),
    F = n(65721),
    W = n(843343),
    z = n(654142),
    Y = n(695301),
    K = n(836697),
    q = n(921230),
    Q = n(981631),
    X = n(388032),
    J = n(355161);
function $(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let ee = 56,
    et = (0, P.isWindows)() ? 4 : (0, P.isMac)() ? 0 : 12,
    en = ee - 16,
    ei = et + 10;
class el {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i) {
        $(this, 'guildsTree', void 0),
            $(this, 'setScrolling', void 0),
            $(this, 'onScroll', void 0),
            $(this, 'onScrollStateChanged', void 0),
            $(this, 'scrollerRef', void 0),
            $(this, 'guildDiscoveryRef', void 0),
            $(this, 'nodeRefs', void 0),
            $(this, 'timeout', void 0),
            $(this, 'isScrolling', void 0),
            $(this, 'isNearBottom', void 0),
            $(this, 'scrollToGuild', void 0),
            $(this, 'handleJumpToGuild', void 0),
            $(this, 'scrollTo', void 0),
            $(this, 'isItemVisible', void 0),
            $(this, 'handleScroll', void 0),
            $(this, '_handleScrollDebounced', void 0),
            $(this, '_handleScrollThrottled', void 0),
            $(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.onScrollStateChanged = i),
            (this.scrollerRef = l.createRef()),
            (this.guildDiscoveryRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new f.V7()),
            (this.isScrolling = !1),
            (this.isNearBottom = !1),
            (this.scrollToGuild = (e, t) => {
                let n = this.scrollerRef.current;
                if (null == n || (null == e && window.location.pathname.startsWith(Q.Z5c.GUILD_DISCOVERY)) || e === Q.x8Z.SERVER_DISCOVERY_BADGE || e === Q.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
                if (null == e) {
                    n.scrollTo({
                        to: 0,
                        animate: t
                    });
                    return;
                }
                let i = this.nodeRefs[e];
                for (; null == i; ) {
                    let t = this.guildsTree.getNode(e);
                    if ((null == t ? void 0 : t.parentId) == null) break;
                    i = this.nodeRefs[t.parentId];
                }
                null != i && (0, d.k)(i)
                    ? n.scrollIntoViewNode({
                          node: i,
                          animate: t,
                          padding: 8
                      })
                    : n.scrollTo({
                          to: 0,
                          animate: t
                      });
            }),
            (this.handleJumpToGuild = (e) => {
                this.scrollToGuild(e, !0);
            }),
            (this.scrollTo = (e) => {
                var t;
                null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e);
            }),
            (this.isItemVisible = (e, t, n) => {
                let i = this.scrollerRef.current;
                if (null == i) return !1;
                let l = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (l < 0) return !1;
                let r = ee * l + ei;
                !t && (r += en);
                let a = i.getScrollerState();
                return (!t && !!(r >= a.scrollTop)) || (!!t && !!(r + ee <= a.scrollTop + a.offsetHeight)) || !1;
            }),
            (this.handleScroll = () => {
                !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = s().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                g.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = s().throttle(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t, scrollHeight: n, offsetHeight: i } = e.getScrollerState(),
                    l = t + i >= n - 24;
                l !== this.isNearBottom && ((this.isNearBottom = l), this.onScrollStateChanged({ isNearBottom: l }));
            }, 100)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            });
    }
}
function er(e) {
    let { disableAppDownload: t = P.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: o } = e,
        [s] = (0, h.Wu)([A.ZP], () => {
            let e = A.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, h.e7)([E.Z], () => E.Z.lurkingGuildIds()),
        p = l.useMemo(() => (n ? [] : d), [d, n]),
        g = (0, h.Wu)([j.Z, T.ZP], () => R.default.keys(j.Z.getGuilds()).filter((e) => T.ZP.isCurrentUserGuest(e))),
        C = p.concat(g),
        $ = (0, h.e7)([v.Z], () => v.Z.isFullscreenInContext()),
        ee = (0, h.e7)([j.Z], () => j.Z.getGeoRestrictedGuilds()),
        [et, en] = l.useState(!1),
        ei = l.useCallback(() => en(!0), []),
        er = l.useCallback(() => en(!1), []),
        ea = l.useRef(!1),
        [eo] = l.useState(() => new f.V7()),
        es = l.useRef(null),
        ec = l.useRef(null),
        [eu, ed] = l.useState(!1),
        { clanDiscoveryEnabled: eh } = (0, I.nk)('guilds_bar'),
        { ref: ep, ...ef } = (0, u.OP)(),
        em = (0, m.useFocusJumpSection)(),
        [eg, eC] = l.useState(!1),
        e_ = l.useMemo(
            () =>
                new el(
                    s,
                    eC,
                    () => {
                        var e, t;
                        null === (e = es.current) || void 0 === e || e.calculateState(), null === (t = ec.current) || void 0 === t || t.calculateState();
                    },
                    (e) => {
                        let { isNearBottom: t } = e;
                        ed(t);
                    }
                ),
            [s]
        ),
        { analyticsLocations: ex } = (0, x.ZP)(_.Z.GUILDS_LIST),
        { pathname: ev } = (0, c.TH)(),
        eI = ev.startsWith(Q.Z5c.GUILD_DISCOVERY) || ev.startsWith(Q.Z5c.GLOBAL_DISCOVERY),
        eb = ev.startsWith(Q.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!ea.current) {
            if (0 !== s.size) {
                if (eI) e_.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = y.Z.getGuildListDimensions();
                    e_.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (ea.current = !0), () => eo.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((e_.setGuildsTree(s), ea.current || 0 === s.size)) return;
            let e = S.Z.getState().guildId;
            e_.scrollToGuild(e, !1);
            let t = null;
            return S.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), e_.scrollToGuild(t, !1));
            });
        }, [s, e_]);
    let eN = l.useCallback(() => {
        e_.scrollTo({
            to: 0,
            animate: !1
        });
    }, [e_]);
    function eE(e) {
        switch (e.type) {
            case M.eD.FOLDER:
                return (0, i.jsx)(
                    z.Z,
                    {
                        folderNode: e,
                        setNodeRef: e_.setNodeRef,
                        draggable: !0,
                        sorting: et,
                        onDragStart: ei,
                        onDragEnd: er,
                        renderChildNode: eE
                    },
                    e.id
                );
            case M.eD.GUILD:
                return (0, i.jsx)(
                    Y.Z,
                    {
                        guildNode: e,
                        setRef: e_.setNodeRef,
                        draggable: !0,
                        sorting: et,
                        onDragStart: ei,
                        onDragEnd: er
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, L.Z)(e_.scrollToGuild);
    let eS = s.getRoots(),
        eZ = (0, b.Z)(),
        ey = (0, Z.U)(),
        eT = l.useCallback(
            (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(U.Z, {
                    ref: e_.guildDiscoveryRef,
                    selected: eI,
                    className: J.fixedDiscoveryIcon,
                    onClick: t
                });
            },
            [eI, e_.guildDiscoveryRef]
        ),
        ej = ee.map((e) =>
            (0, i.jsx)(
                G.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(x.Gt, {
        value: ex,
        children: (0, i.jsx)(m.ThemeProvider, {
            theme: o,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()(J.wrapper, r, e, { [J.hidden]: $ }),
                    'aria-label': X.intl.string(X.t.PjnF2t),
                    children: (0, i.jsxs)('ul', {
                        ref: ep,
                        ...ef,
                        ...em,
                        role: 'tree',
                        className: J.tree,
                        children: [
                            (0, i.jsx)(w.Z, {
                                ref: es,
                                isVisible: e_.isItemVisible,
                                onJumpTo: e_.handleJumpToGuild,
                                className: J.unreadMentionsIndicatorTop,
                                barClassName: J.unreadMentionsBar
                            }),
                            (0, i.jsxs)(m.AdvancedScrollerNone, {
                                className: a()({
                                    [J.scroller]: !0,
                                    [J.scrolling]: eg
                                }),
                                ref: e_.scrollerRef,
                                onScroll: e_.handleScroll,
                                children: [
                                    (0, i.jsx)(H.u, {}),
                                    eZ ? (0, i.jsx)(N.Z, {}) : null,
                                    (0, i.jsx)(V.Z, { isOnHubVerificationRoute: eb }),
                                    (0, i.jsx)(D.Z, {}),
                                    ey,
                                    C.map((e) => (0, i.jsx)(q.Z, { guildId: e }, e)),
                                    (0, i.jsx)(K.Z, { onActivate: eN }),
                                    (0, i.jsx)(F.Z, {}),
                                    (0, i.jsx)('div', {
                                        'aria-label': X.intl.string(X.t['7hB4kp']),
                                        children: eS.map(eE)
                                    }),
                                    ej,
                                    n
                                        ? null
                                        : (0, i.jsx)(k.Z, {
                                              disableTooltip: p.length > 0,
                                              lastTargetNode: eS[eS.length - 1]
                                          }),
                                    (0, i.jsx)(W.Z, {}),
                                    t
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [(0, i.jsx)(F.Z, {}), (0, i.jsx)(O.Z, {})]
                                          })
                                ]
                            }),
                            !n && eh
                                ? (0, i.jsx)(B.LW, {
                                      hideGradient: eu,
                                      children: (0, i.jsx)(B.KF, { children: eT })
                                  })
                                : n
                                  ? null
                                  : (0, i.jsx)(B.LW, {
                                        hideGradient: eu,
                                        children: eT({})
                                    }),
                            (0, i.jsx)(w.Z, {
                                reverse: !0,
                                ref: ec,
                                isVisible: e_.isItemVisible,
                                onJumpTo: e_.handleJumpToGuild,
                                className: a()(J.unreadMentionsIndicatorBottom, { [J.unreadMentionsFixedFooter]: !n }),
                                barClassName: J.unreadMentionsBar
                            })
                        ]
                    })
                })
        })
    });
}
t.Z = l.memo(
    function (e) {
        let t = (0, C.Z)('guildsnav');
        return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(er, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
