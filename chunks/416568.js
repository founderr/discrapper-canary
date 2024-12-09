n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(392711),
    s = n.n(a),
    c = n(512969),
    u = n(91192),
    d = n(374470),
    h = n(442837),
    p = n(902704),
    m = n(846519),
    f = n(481060),
    g = n(925549),
    C = n(209613),
    _ = n(100527),
    v = n(906732),
    x = n(358221),
    I = n(540059),
    b = n(706590),
    E = n(940777),
    S = n(41776),
    Z = n(905423),
    N = n(802718),
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
    U = n(193154),
    G = n(602147),
    B = n(416637),
    H = n(222059),
    V = n(751277),
    F = n(65721),
    W = n(843343),
    z = n(654142),
    Y = n(695301),
    K = n(836697),
    q = n(921230),
    Q = n(981631),
    J = n(388032),
    X = n(192069);
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
let ee = (0, P.isWindows)() ? 4 : (0, P.isMac)() ? 0 : 12;
class et {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i) {
        $(this, 'guildsTree', void 0),
            $(this, 'setScrolling', void 0),
            $(this, 'onScroll', void 0),
            $(this, 'sizes', void 0),
            $(this, 'scrollerRef', void 0),
            $(this, 'nodeRefs', void 0),
            $(this, 'timeout', void 0),
            $(this, 'isScrolling', void 0),
            $(this, 'scrollToGuild', void 0),
            $(this, 'handleJumpToGuild', void 0),
            $(this, 'scrollTo', void 0),
            $(this, 'isItemVisible', void 0),
            $(this, 'handleScroll', void 0),
            $(this, '_handleScrollDebounced', void 0),
            $(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.sizes = i),
            (this.scrollerRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new m.V7()),
            (this.isScrolling = !1),
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
                let { iconTotalSize: i, badgeVisibleBuffer: l, heightBeforeIcons: r } = this.sizes,
                    o = this.scrollerRef.current;
                if (null == o) return !1;
                let a = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (a < 0) return !1;
                let s = i * a + r;
                !t && (s += l);
                let c = o.getScrollerState();
                return (!t && !!(s >= c.scrollTop)) || (!!t && !!(s + i <= c.scrollTop + c.offsetHeight)) || !1;
            }),
            (this.handleScroll = () => {
                !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced();
            }),
            (this._handleScrollDebounced = s().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                g.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            });
    }
}
function en(e) {
    let { disableAppDownload: t = P.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: a } = e,
        s = (0, I.Q3)('GuildsBar'),
        { density: d } = (0, f.useThemeContext)(),
        [p] = (0, h.Wu)([A.ZP], () => {
            let e = A.ZP.getGuildsTree();
            return [e, e.version];
        }),
        g = (0, h.e7)([S.Z], () => S.Z.lurkingGuildIds()),
        C = l.useMemo(() => (n ? [] : g), [g, n]),
        $ = (0, h.Wu)([j.Z, T.ZP], () => R.default.keys(j.Z.getGuilds()).filter((e) => T.ZP.isCurrentUserGuest(e))),
        en = C.concat($),
        ei = (0, h.e7)([x.Z], () => x.Z.isFullscreenInContext()),
        el = (0, h.e7)([j.Z], () => j.Z.getGeoRestrictedGuilds()),
        [er, eo] = l.useState(!1),
        ea = l.useCallback(() => eo(!0), []),
        es = l.useCallback(() => eo(!1), []),
        ec = l.useRef(!1),
        [eu] = l.useState(() => new m.V7()),
        ed = l.useRef(null),
        eh = l.useRef(null),
        { ref: ep, ...em } = (0, u.OP)(),
        ef = (0, f.useFocusJumpSection)(),
        [eg, eC] = l.useState(!1),
        e_ = l.useMemo(
            () =>
                new et(
                    p,
                    eC,
                    () => {
                        var e, t;
                        null === (e = ed.current) || void 0 === e || e.calculateState(), null === (t = eh.current) || void 0 === t || t.calculateState();
                    },
                    (function (e, t) {
                        let n = e ? 40 : 44,
                            i = e && 'cozy' === t ? 12 : 8,
                            l = n + i,
                            r = 2 + i;
                        return {
                            iconSize: n,
                            iconMargin: i,
                            iconTotalSize: l,
                            badgeVisibleBuffer: l - 16,
                            separatorSize: r,
                            heightBeforeIcons: ee + r
                        };
                    })(s, d)
                ),
            [d, p, s]
        ),
        { analyticsLocations: ev } = (0, v.ZP)(_.Z.GUILDS_LIST),
        { pathname: ex } = (0, c.TH)(),
        eI = ex.startsWith(Q.Z5c.GUILD_DISCOVERY) || ex.startsWith(Q.Z5c.GLOBAL_DISCOVERY),
        eb = ex.startsWith(Q.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!ec.current) {
            if (0 !== p.size) {
                if (eI) e_.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = y.Z.getGuildListDimensions();
                    e_.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (ec.current = !0), () => eu.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((e_.setGuildsTree(p), ec.current || 0 === p.size)) return;
            let e = Z.Z.getState().guildId;
            e_.scrollToGuild(e, !1);
            let t = null;
            return Z.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), e_.scrollToGuild(t, !1));
            });
        }, [p, e_]);
    let eE = l.useCallback(() => {
        e_.scrollTo({
            to: 0,
            animate: !1
        });
    }, [e_]);
    function eS(e) {
        switch (e.type) {
            case M.eD.FOLDER:
                return (0, i.jsx)(
                    z.Z,
                    {
                        folderNode: e,
                        setNodeRef: e_.setNodeRef,
                        draggable: !0,
                        sorting: er,
                        onDragStart: ea,
                        onDragEnd: es,
                        renderChildNode: eS
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
                        sorting: er,
                        onDragStart: ea,
                        onDragEnd: es
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, L.Z)(e_.scrollToGuild);
    let eZ = p.getRoots(),
        eN = (0, b.Z)(),
        ey = (0, N.U)(),
        eT = el.map((e) =>
            (0, i.jsx)(
                U.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(v.Gt, {
        value: ev,
        children: (0, i.jsx)(f.ThemeProvider, {
            theme: a,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: o()(X.wrapper, r, e, { [X.hidden]: ei }),
                    'aria-label': J.intl.string(J.t.PjnF2t),
                    children: (0, i.jsxs)('ul', {
                        ref: ep,
                        ...em,
                        ...ef,
                        role: 'tree',
                        className: X.tree,
                        children: [
                            (0, i.jsx)(w.Z, {
                                ref: ed,
                                isVisible: e_.isItemVisible,
                                onJumpTo: e_.handleJumpToGuild,
                                className: X.unreadMentionsIndicatorTop,
                                barClassName: X.unreadMentionsBar
                            }),
                            (0, i.jsxs)('div', {
                                className: X.itemsContainer,
                                children: [
                                    (0, i.jsxs)(f.AdvancedScrollerNone, {
                                        className: o()({
                                            [X.scroller]: !0,
                                            [X.scrolling]: eg
                                        }),
                                        experimental_useStack: s,
                                        gap: 'xs',
                                        ref: e_.scrollerRef,
                                        onScroll: e_.handleScroll,
                                        children: [
                                            (0, i.jsx)(H.u, {}),
                                            eN ? (0, i.jsx)(E.Z, {}) : null,
                                            (0, i.jsx)(V.Z, { isOnHubVerificationRoute: eb }),
                                            (0, i.jsx)(D.Z, {}),
                                            ey,
                                            en.map((e) => (0, i.jsx)(q.Z, { guildId: e }, e)),
                                            (0, i.jsx)(K.Z, { onActivate: eE }),
                                            (0, i.jsx)(F.Z, {}),
                                            s
                                                ? (0, i.jsx)(f.Stack, {
                                                      gap: 'xs',
                                                      'aria-label': J.intl.string(J.t['7hB4kp']),
                                                      children: eZ.map(eS)
                                                  })
                                                : (0, i.jsx)('div', {
                                                      'aria-label': J.intl.string(J.t['7hB4kp']),
                                                      children: eZ.map(eS)
                                                  }),
                                            eT,
                                            n
                                                ? null
                                                : (0, i.jsx)(k.Z, {
                                                      disableTooltip: C.length > 0,
                                                      lastTargetNode: eZ[eZ.length - 1]
                                                  }),
                                            (0, i.jsx)(W.Z, {}),
                                            t ? null : (0, i.jsx)(O.Z, {})
                                        ]
                                    }),
                                    n
                                        ? null
                                        : (0, i.jsx)(B.g, {
                                              children: (0, i.jsx)(G.Z, {
                                                  selected: eI,
                                                  className: X.fixedDiscoveryIcon
                                              })
                                          })
                                ]
                            }),
                            (0, i.jsx)(w.Z, {
                                reverse: !0,
                                ref: eh,
                                isVisible: e_.isItemVisible,
                                onJumpTo: e_.handleJumpToGuild,
                                className: o()(X.unreadMentionsIndicatorBottom, { [X.unreadMentionsFixedFooter]: !n }),
                                barClassName: X.unreadMentionsBar
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
            children: (0, i.jsx)(en, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
