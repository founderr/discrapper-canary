n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(266067),
    u = n(91192),
    d = n(374470),
    h = n(442837),
    p = n(902704),
    f = n(846519),
    _ = n(481060),
    m = n(925549),
    g = n(209613),
    C = n(100527),
    I = n(906732),
    E = n(358221),
    N = n(963202),
    S = n(706590),
    x = n(940777),
    v = n(41776),
    T = n(905423),
    Z = n(802718),
    b = n(796974),
    A = n(271383),
    R = n(430824),
    M = n(771845),
    L = n(358085),
    P = n(709054),
    O = n(727258),
    y = n(605951),
    j = n(474109),
    D = n(741616),
    w = n(187835),
    U = n(118122),
    G = n(193154),
    k = n(602147),
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
    X = n(689938),
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
    et = (0, L.isWindows)() ? 4 : (0, L.isMac)() ? 0 : 12,
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
            (this._handleScrollDebounced = o().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                m.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = o().throttle(() => {
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
    let { disableAppDownload: t = L.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: s } = e,
        [o] = (0, h.Wu)([M.ZP], () => {
            let e = M.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, h.e7)([v.Z], () => v.Z.lurkingGuildIds()),
        p = l.useMemo(() => (n ? [] : d), [d, n]),
        m = (0, h.Wu)([R.Z, A.ZP], () => P.default.keys(R.Z.getGuilds()).filter((e) => A.ZP.isCurrentUserGuest(e))),
        g = p.concat(m),
        $ = (0, h.e7)([E.Z], () => E.Z.isFullscreenInContext()),
        ee = (0, h.e7)([R.Z], () => R.Z.getGeoRestrictedGuilds()),
        [et, en] = l.useState(!1),
        ei = l.useCallback(() => en(!0), []),
        er = l.useCallback(() => en(!1), []),
        ea = l.useRef(!1),
        [es] = l.useState(() => new f.V7()),
        eo = l.useRef(null),
        ec = l.useRef(null),
        [eu, ed] = l.useState(!1),
        { clanDiscoveryEnabled: eh } = (0, N.nk)('guilds_bar'),
        { ref: ep, ...ef } = (0, u.OP)(),
        e_ = (0, _.useFocusJumpSection)(),
        [em, eg] = l.useState(!1),
        eC = l.useMemo(
            () =>
                new el(
                    o,
                    eg,
                    () => {
                        var e, t;
                        null === (e = eo.current) || void 0 === e || e.calculateState(), null === (t = ec.current) || void 0 === t || t.calculateState();
                    },
                    (e) => {
                        let { isNearBottom: t } = e;
                        ed(t);
                    }
                ),
            [o]
        ),
        { analyticsLocations: eI } = (0, I.ZP)(C.Z.GUILDS_LIST),
        { pathname: eE } = (0, c.TH)(),
        eN = eE.startsWith(Q.Z5c.GUILD_DISCOVERY) || eE.startsWith(Q.Z5c.GLOBAL_DISCOVERY),
        eS = eE.startsWith(Q.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!ea.current) {
            if (0 !== o.size) {
                if (eN) eC.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = b.Z.getGuildListDimensions();
                    eC.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (ea.current = !0), () => es.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((eC.setGuildsTree(o), ea.current || 0 === o.size)) return;
            let e = T.Z.getState().guildId;
            eC.scrollToGuild(e, !1);
            let t = null;
            return T.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eC.scrollToGuild(t, !1));
            });
        }, [o, eC]);
    let ex = l.useCallback(() => {
        eC.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eC]);
    function ev(e) {
        switch (e.type) {
            case O.eD.FOLDER:
                return (0, i.jsx)(
                    z.Z,
                    {
                        folderNode: e,
                        setNodeRef: eC.setNodeRef,
                        draggable: !0,
                        sorting: et,
                        onDragStart: ei,
                        onDragEnd: er,
                        renderChildNode: ev
                    },
                    e.id
                );
            case O.eD.GUILD:
                return (0, i.jsx)(
                    Y.Z,
                    {
                        guildNode: e,
                        setRef: eC.setNodeRef,
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
    (0, y.Z)(eC.scrollToGuild);
    let eT = o.getRoots(),
        eZ = (0, S.Z)(),
        eb = (0, Z.U)(),
        eA = l.useCallback(
            (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(k.Z, {
                    ref: eC.guildDiscoveryRef,
                    selected: eN,
                    className: J.fixedDiscoveryIcon,
                    onClick: t
                });
            },
            [eN, eC.guildDiscoveryRef]
        ),
        eR = ee.map((e) =>
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
    return (0, i.jsx)(I.Gt, {
        value: eI,
        children: (0, i.jsx)(_.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()(J.wrapper, r, e, { [J.hidden]: $ }),
                    'aria-label': X.Z.Messages.GUILDS_BAR_A11Y_LABEL,
                    children: (0, i.jsxs)('ul', {
                        ref: ep,
                        ...ef,
                        ...e_,
                        role: 'tree',
                        className: J.tree,
                        children: [
                            (0, i.jsx)(j.Z, {
                                ref: eo,
                                isVisible: eC.isItemVisible,
                                onJumpTo: eC.handleJumpToGuild,
                                className: J.unreadMentionsIndicatorTop,
                                barClassName: J.unreadMentionsBar
                            }),
                            (0, i.jsxs)(_.AdvancedScrollerNone, {
                                className: a()({
                                    [J.scroller]: !0,
                                    [J.scrolling]: em
                                }),
                                ref: eC.scrollerRef,
                                onScroll: eC.handleScroll,
                                children: [
                                    (0, i.jsx)(H.u, {}),
                                    eZ ? (0, i.jsx)(x.Z, {}) : null,
                                    (0, i.jsx)(V.Z, { isOnHubVerificationRoute: eS }),
                                    (0, i.jsx)(D.Z, {}),
                                    eb,
                                    g.map((e) => (0, i.jsx)(q.Z, { guildId: e }, e)),
                                    (0, i.jsx)(K.Z, { onActivate: ex }),
                                    (0, i.jsx)(F.Z, {}),
                                    (0, i.jsx)('div', {
                                        'aria-label': X.Z.Messages.SERVERS,
                                        children: eT.map(ev)
                                    }),
                                    eR,
                                    n
                                        ? null
                                        : (0, i.jsx)(U.Z, {
                                              disableTooltip: p.length > 0,
                                              lastTargetNode: eT[eT.length - 1]
                                          }),
                                    (0, i.jsx)(W.Z, {}),
                                    t
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [(0, i.jsx)(F.Z, {}), (0, i.jsx)(w.Z, {})]
                                          })
                                ]
                            }),
                            !n && eh
                                ? (0, i.jsx)(B.LW, {
                                      hideGradient: eu,
                                      children: (0, i.jsx)(B.KF, { children: eA })
                                  })
                                : n
                                  ? null
                                  : (0, i.jsx)(B.LW, {
                                        hideGradient: eu,
                                        children: eA({})
                                    }),
                            (0, i.jsx)(j.Z, {
                                reverse: !0,
                                ref: ec,
                                isVisible: eC.isItemVisible,
                                onJumpTo: eC.handleJumpToGuild,
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
        let t = (0, g.Z)('guildsnav');
        return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(er, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
