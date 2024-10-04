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
    S = n(353093),
    x = n(706590),
    v = n(940777),
    Z = n(41776),
    T = n(905423),
    b = n(802718),
    A = n(796974),
    M = n(271383),
    R = n(430824),
    L = n(771845),
    y = n(358085),
    P = n(709054),
    O = n(727258),
    j = n(605951),
    D = n(474109),
    w = n(741616),
    U = n(187835),
    G = n(118122),
    k = n(193154),
    B = n(602147),
    V = n(773182),
    H = n(222059),
    F = n(751277),
    W = n(65721),
    z = n(843343),
    Y = n(654142),
    K = n(695301),
    q = n(836697),
    Q = n(921230),
    X = n(981631),
    J = n(689938),
    $ = n(355161);
function ee(e, t, n) {
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
let et = 56,
    en = (0, y.isWindows)() ? 4 : (0, y.isMac)() ? 0 : 12,
    ei = et - 16,
    el = en + 10;
class er {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i) {
        ee(this, 'guildsTree', void 0),
            ee(this, 'setScrolling', void 0),
            ee(this, 'onScroll', void 0),
            ee(this, 'onScrollStateChanged', void 0),
            ee(this, 'scrollerRef', void 0),
            ee(this, 'guildDiscoveryRef', void 0),
            ee(this, 'nodeRefs', void 0),
            ee(this, 'timeout', void 0),
            ee(this, 'isScrolling', void 0),
            ee(this, 'isNearBottom', void 0),
            ee(this, 'scrollToGuild', void 0),
            ee(this, 'handleJumpToGuild', void 0),
            ee(this, 'scrollTo', void 0),
            ee(this, 'isItemVisible', void 0),
            ee(this, 'handleScroll', void 0),
            ee(this, '_handleScrollDebounced', void 0),
            ee(this, '_handleScrollThrottled', void 0),
            ee(this, 'setNodeRef', void 0),
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
                if (null == n || (null == e && window.location.pathname.startsWith(X.Z5c.GUILD_DISCOVERY)) || e === X.x8Z.SERVER_DISCOVERY_BADGE || e === X.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
                let r = et * l + el;
                !t && (r += ei);
                let a = i.getScrollerState();
                return (!t && !!(r >= a.scrollTop)) || (!!t && !!(r + et <= a.scrollTop + a.offsetHeight)) || !1;
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
function ea(e) {
    let { disableAppDownload: t = y.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: s } = e,
        [o] = (0, h.Wu)([L.ZP], () => {
            let e = L.ZP.getGuildsTree();
            return [e, e.version];
        }),
        d = (0, h.e7)([Z.Z], () => Z.Z.lurkingGuildIds()),
        p = l.useMemo(() => (n ? [] : d), [d, n]),
        m = (0, h.Wu)([R.Z, M.ZP], () => P.default.keys(R.Z.getGuilds()).filter((e) => M.ZP.isCurrentUserGuest(e))),
        g = p.concat(m),
        ee = (0, h.e7)([E.Z], () => E.Z.isFullscreenInContext()),
        et = (0, h.e7)([R.Z], () => R.Z.getGeoRestrictedGuilds()),
        [en, ei] = l.useState(!1),
        el = l.useCallback(() => ei(!0), []),
        ea = l.useCallback(() => ei(!1), []),
        es = l.useRef(!1),
        [eo] = l.useState(() => new f.V7()),
        ec = l.useRef(null),
        eu = l.useRef(null),
        [ed, eh] = l.useState(!1),
        { clanDiscoveryEnabled: ep } = (0, N.nk)('guilds_bar'),
        { guilds: ef } = (0, N.C3)({
            location: 'guilds_bar',
            includeConverted: !0
        }),
        e_ = l.useMemo(() => ef.filter((e) => !(0, S.EJ)(e)), [ef]).length > 0,
        em = l.useMemo(() => (e_ ? V.OO : ep ? V.KF : void 0), [ep, e_]),
        { ref: eg, ...eC } = (0, u.OP)(),
        eI = (0, _.useFocusJumpSection)(),
        [eE, eN] = l.useState(!1),
        eS = l.useMemo(
            () =>
                new er(
                    o,
                    eN,
                    () => {
                        var e, t;
                        null === (e = ec.current) || void 0 === e || e.calculateState(), null === (t = eu.current) || void 0 === t || t.calculateState();
                    },
                    (e) => {
                        let { isNearBottom: t } = e;
                        eh(t);
                    }
                ),
            [o]
        ),
        { analyticsLocations: ex } = (0, I.ZP)(C.Z.GUILDS_LIST),
        { pathname: ev } = (0, c.TH)(),
        eZ = ev.startsWith(X.Z5c.GUILD_DISCOVERY) || ev.startsWith(X.Z5c.GLOBAL_DISCOVERY),
        eT = ev.startsWith(X.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!es.current) {
            if (0 !== o.size) {
                if (eZ) eS.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = A.Z.getGuildListDimensions();
                    eS.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (es.current = !0), () => eo.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((eS.setGuildsTree(o), es.current || 0 === o.size)) return;
            let e = T.Z.getState().guildId;
            eS.scrollToGuild(e, !1);
            let t = null;
            return T.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eS.scrollToGuild(t, !1));
            });
        }, [o, eS]);
    let eb = l.useCallback(() => {
        eS.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eS]);
    function eA(e) {
        switch (e.type) {
            case O.eD.FOLDER:
                return (0, i.jsx)(
                    Y.Z,
                    {
                        folderNode: e,
                        setNodeRef: eS.setNodeRef,
                        draggable: !0,
                        sorting: en,
                        onDragStart: el,
                        onDragEnd: ea,
                        renderChildNode: eA
                    },
                    e.id
                );
            case O.eD.GUILD:
                return (0, i.jsx)(
                    K.Z,
                    {
                        guildNode: e,
                        setRef: eS.setNodeRef,
                        draggable: !0,
                        sorting: en,
                        onDragStart: el,
                        onDragEnd: ea
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, j.Z)(eS.scrollToGuild);
    let eM = o.getRoots(),
        eR = (0, x.Z)(),
        eL = (0, b.U)(),
        ey = et.map((e) =>
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
    return (0, i.jsx)(I.Gt, {
        value: ex,
        children: (0, i.jsx)(_.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()($.wrapper, r, e, { [$.hidden]: ee }),
                    'aria-label': J.Z.Messages.GUILDS_BAR_A11Y_LABEL,
                    children: (0, i.jsxs)('ul', {
                        ref: eg,
                        ...eC,
                        ...eI,
                        role: 'tree',
                        className: $.tree,
                        children: [
                            (0, i.jsx)(D.Z, {
                                ref: ec,
                                isVisible: eS.isItemVisible,
                                onJumpTo: eS.handleJumpToGuild,
                                className: $.unreadMentionsIndicatorTop,
                                barClassName: $.unreadMentionsBar
                            }),
                            (0, i.jsxs)(_.AdvancedScrollerNone, {
                                className: a()({
                                    [$.scroller]: !0,
                                    [$.scrolling]: eE
                                }),
                                ref: eS.scrollerRef,
                                onScroll: eS.handleScroll,
                                children: [
                                    (0, i.jsx)(H.u, {}),
                                    eR ? (0, i.jsx)(v.Z, {}) : null,
                                    (0, i.jsx)(F.Z, { isOnHubVerificationRoute: eT }),
                                    (0, i.jsx)(w.Z, {}),
                                    eL,
                                    g.map((e) => (0, i.jsx)(Q.Z, { guildId: e }, e)),
                                    (0, i.jsx)(q.Z, { onActivate: eb }),
                                    (0, i.jsx)(W.Z, {}),
                                    (0, i.jsx)('div', {
                                        'aria-label': J.Z.Messages.SERVERS,
                                        children: eM.map(eA)
                                    }),
                                    ey,
                                    n
                                        ? null
                                        : (0, i.jsx)(G.Z, {
                                              disableTooltip: p.length > 0,
                                              lastTargetNode: eM[eM.length - 1]
                                          }),
                                    (0, i.jsx)(z.Z, {}),
                                    t
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [(0, i.jsx)(W.Z, {}), (0, i.jsx)(U.Z, {})]
                                          })
                                ]
                            }),
                            n || null == em
                                ? n
                                    ? null
                                    : (0, i.jsx)(V.LW, {
                                          hideGradient: ed,
                                          children: (0, i.jsx)(B.Z, {
                                              ref: eS.guildDiscoveryRef,
                                              selected: eZ,
                                              className: $.fixedDiscoveryIcon
                                          })
                                      })
                                : (0, i.jsx)(V.LW, {
                                      hideGradient: ed,
                                      children: (0, i.jsx)(em, {
                                          children: (e) => {
                                              let { onClick: t } = e;
                                              return (0, i.jsx)(B.Z, {
                                                  ref: eS.guildDiscoveryRef,
                                                  selected: eZ,
                                                  className: $.fixedDiscoveryIcon,
                                                  onClick: t
                                              });
                                          }
                                      })
                                  }),
                            (0, i.jsx)(D.Z, {
                                reverse: !0,
                                ref: eu,
                                isVisible: eS.isItemVisible,
                                onJumpTo: eS.handleJumpToGuild,
                                className: a()($.unreadMentionsIndicatorBottom, { [$.unreadMentionsFixedFooter]: !n }),
                                barClassName: $.unreadMentionsBar
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
            children: (0, i.jsx)(ea, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, p.Z)(e, t)
);
