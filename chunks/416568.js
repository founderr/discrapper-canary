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
    m = n(846519),
    f = n(481060),
    g = n(925549),
    C = n(209613),
    _ = n(100527),
    v = n(906732),
    x = n(358221),
    I = n(706590),
    b = n(940777),
    E = n(41776),
    S = n(905423),
    Z = n(802718),
    N = n(796974),
    y = n(271383),
    T = n(430824),
    A = n(771845),
    j = n(358085),
    P = n(709054),
    R = n(727258),
    M = n(605951),
    L = n(474109),
    w = n(741616),
    D = n(187835),
    O = n(118122),
    k = n(193154),
    U = n(602147),
    G = n(416637),
    B = n(222059),
    V = n(751277),
    H = n(65721),
    F = n(843343),
    W = n(654142),
    z = n(695301),
    Y = n(836697),
    K = n(921230),
    q = n(981631),
    Q = n(388032),
    X = n(192069);
function J(e, t, n) {
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
let $ = 56,
    ee = (0, j.isWindows)() ? 4 : (0, j.isMac)() ? 0 : 12,
    et = $ - 16,
    en = ee + 10;
class ei {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n) {
        J(this, 'guildsTree', void 0),
            J(this, 'setScrolling', void 0),
            J(this, 'onScroll', void 0),
            J(this, 'scrollerRef', void 0),
            J(this, 'nodeRefs', void 0),
            J(this, 'timeout', void 0),
            J(this, 'isScrolling', void 0),
            J(this, 'scrollToGuild', void 0),
            J(this, 'handleJumpToGuild', void 0),
            J(this, 'scrollTo', void 0),
            J(this, 'isItemVisible', void 0),
            J(this, 'handleScroll', void 0),
            J(this, '_handleScrollDebounced', void 0),
            J(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.scrollerRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new m.V7()),
            (this.isScrolling = !1),
            (this.scrollToGuild = (e, t) => {
                let n = this.scrollerRef.current;
                if (null == n || (null == e && window.location.pathname.startsWith(q.Z5c.GUILD_DISCOVERY)) || e === q.x8Z.SERVER_DISCOVERY_BADGE || e === q.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
                let r = $ * l + en;
                !t && (r += et);
                let a = i.getScrollerState();
                return (!t && !!(r >= a.scrollTop)) || (!!t && !!(r + $ <= a.scrollTop + a.offsetHeight)) || !1;
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
function el(e) {
    let { disableAppDownload: t = j.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: o } = e,
        [s] = (0, h.Wu)([A.ZP], () => {
            let e = A.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, h.e7)([E.Z], () => E.Z.lurkingGuildIds()),
        p = l.useMemo(() => (n ? [] : d), [d, n]),
        g = (0, h.Wu)([T.Z, y.ZP], () => P.default.keys(T.Z.getGuilds()).filter((e) => y.ZP.isCurrentUserGuest(e))),
        C = p.concat(g),
        J = (0, h.e7)([x.Z], () => x.Z.isFullscreenInContext()),
        $ = (0, h.e7)([T.Z], () => T.Z.getGeoRestrictedGuilds()),
        [ee, et] = l.useState(!1),
        en = l.useCallback(() => et(!0), []),
        el = l.useCallback(() => et(!1), []),
        er = l.useRef(!1),
        [ea] = l.useState(() => new m.V7()),
        eo = l.useRef(null),
        es = l.useRef(null),
        { ref: ec, ...eu } = (0, u.OP)(),
        ed = (0, f.useFocusJumpSection)(),
        [eh, ep] = l.useState(!1),
        em = l.useMemo(
            () =>
                new ei(s, ep, () => {
                    var e, t;
                    null === (e = eo.current) || void 0 === e || e.calculateState(), null === (t = es.current) || void 0 === t || t.calculateState();
                }),
            [s]
        ),
        { analyticsLocations: ef } = (0, v.ZP)(_.Z.GUILDS_LIST),
        { pathname: eg } = (0, c.TH)(),
        eC = eg.startsWith(q.Z5c.GUILD_DISCOVERY) || eg.startsWith(q.Z5c.GLOBAL_DISCOVERY),
        e_ = eg.startsWith(q.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!er.current) {
            if (0 !== s.size) {
                if (eC) em.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = N.Z.getGuildListDimensions();
                    em.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (er.current = !0), () => ea.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((em.setGuildsTree(s), er.current || 0 === s.size)) return;
            let e = S.Z.getState().guildId;
            em.scrollToGuild(e, !1);
            let t = null;
            return S.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), em.scrollToGuild(t, !1));
            });
        }, [s, em]);
    let ev = l.useCallback(() => {
        em.scrollTo({
            to: 0,
            animate: !1
        });
    }, [em]);
    function ex(e) {
        switch (e.type) {
            case R.eD.FOLDER:
                return (0, i.jsx)(
                    W.Z,
                    {
                        folderNode: e,
                        setNodeRef: em.setNodeRef,
                        draggable: !0,
                        sorting: ee,
                        onDragStart: en,
                        onDragEnd: el,
                        renderChildNode: ex
                    },
                    e.id
                );
            case R.eD.GUILD:
                return (0, i.jsx)(
                    z.Z,
                    {
                        guildNode: e,
                        setRef: em.setNodeRef,
                        draggable: !0,
                        sorting: ee,
                        onDragStart: en,
                        onDragEnd: el
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, M.Z)(em.scrollToGuild);
    let eI = s.getRoots(),
        eb = (0, I.Z)(),
        eE = (0, Z.U)(),
        eS = $.map((e) =>
            (0, i.jsx)(
                k.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(v.Gt, {
        value: ef,
        children: (0, i.jsx)(f.ThemeProvider, {
            theme: o,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()(X.wrapper, r, e, { [X.hidden]: J }),
                    'aria-label': Q.intl.string(Q.t.PjnF2t),
                    children: (0, i.jsxs)('ul', {
                        ref: ec,
                        ...eu,
                        ...ed,
                        role: 'tree',
                        className: X.tree,
                        children: [
                            (0, i.jsx)(L.Z, {
                                ref: eo,
                                isVisible: em.isItemVisible,
                                onJumpTo: em.handleJumpToGuild,
                                className: X.unreadMentionsIndicatorTop,
                                barClassName: X.unreadMentionsBar
                            }),
                            (0, i.jsxs)('div', {
                                className: X.itemsContainer,
                                children: [
                                    (0, i.jsxs)(f.AdvancedScrollerNone, {
                                        className: a()({
                                            [X.scroller]: !0,
                                            [X.scrolling]: eh
                                        }),
                                        ref: em.scrollerRef,
                                        onScroll: em.handleScroll,
                                        children: [
                                            (0, i.jsx)(B.u, {}),
                                            eb ? (0, i.jsx)(b.Z, {}) : null,
                                            (0, i.jsx)(V.Z, { isOnHubVerificationRoute: e_ }),
                                            (0, i.jsx)(w.Z, {}),
                                            eE,
                                            C.map((e) => (0, i.jsx)(K.Z, { guildId: e }, e)),
                                            (0, i.jsx)(Y.Z, { onActivate: ev }),
                                            (0, i.jsx)(H.Z, {}),
                                            (0, i.jsx)('div', {
                                                'aria-label': Q.intl.string(Q.t['7hB4kp']),
                                                children: eI.map(ex)
                                            }),
                                            eS,
                                            n
                                                ? null
                                                : (0, i.jsx)(O.Z, {
                                                      disableTooltip: p.length > 0,
                                                      lastTargetNode: eI[eI.length - 1]
                                                  }),
                                            (0, i.jsx)(F.Z, {}),
                                            t ? null : (0, i.jsx)(D.Z, {})
                                        ]
                                    }),
                                    n
                                        ? null
                                        : (0, i.jsx)(G.g, {
                                              children: (0, i.jsx)(U.Z, {
                                                  selected: eC,
                                                  className: X.fixedDiscoveryIcon
                                              })
                                          })
                                ]
                            }),
                            (0, i.jsx)(L.Z, {
                                reverse: !0,
                                ref: es,
                                isVisible: em.isItemVisible,
                                onJumpTo: em.handleJumpToGuild,
                                className: a()(X.unreadMentionsIndicatorBottom, { [X.unreadMentionsFixedFooter]: !n }),
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
            children: (0, i.jsx)(el, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
