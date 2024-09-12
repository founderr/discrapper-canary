n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(699581),
    u = n(266067),
    d = n(91192),
    h = n(374470),
    p = n(442837),
    _ = n(902704),
    f = n(846519),
    m = n(481060),
    g = n(925549),
    C = n(209613),
    I = n(100527),
    E = n(906732),
    N = n(358221),
    x = n(963202),
    S = n(353093),
    v = n(706590),
    Z = n(940777),
    T = n(831565),
    L = n(41776),
    A = n(905423),
    b = n(802718),
    M = n(796974),
    R = n(271383),
    P = n(430824),
    O = n(771845),
    y = n(358085),
    j = n(709054),
    D = n(727258),
    w = n(605951),
    U = n(474109),
    G = n(741616),
    k = n(187835),
    B = n(118122),
    V = n(193154),
    H = n(602147),
    F = n(773182),
    W = n(222059),
    z = n(751277),
    Y = n(65721),
    K = n(843343),
    q = n(654142),
    Q = n(695301),
    X = n(836697),
    J = n(921230),
    $ = n(981631),
    ee = n(689938),
    et = n(355161);
function en(e, t, n) {
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
let ei = 56,
    el = (0, y.isWindows)() ? 4 : (0, y.isMac)() ? 0 : 12,
    er = ei - 16,
    ea = el + 10;
class es {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i, r) {
        en(this, 'guildsTree', void 0),
            en(this, 'setScrolling', void 0),
            en(this, 'onScroll', void 0),
            en(this, 'onScrollStateChanged', void 0),
            en(this, 'scrollToDiscovery', void 0),
            en(this, 'scrollerRef', void 0),
            en(this, 'guildDiscoveryRef', void 0),
            en(this, 'nodeRefs', void 0),
            en(this, 'timeout', void 0),
            en(this, 'isScrolling', void 0),
            en(this, 'isNearBottom', void 0),
            en(this, 'scrollToGuild', void 0),
            en(this, 'handleJumpToGuild', void 0),
            en(this, 'scrollTo', void 0),
            en(this, 'isItemVisible', void 0),
            en(this, 'handleScroll', void 0),
            en(this, '_handleScrollDebounced', void 0),
            en(this, '_handleScrollThrottled', void 0),
            en(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.onScrollStateChanged = i),
            (this.scrollToDiscovery = r),
            (this.scrollerRef = l.createRef()),
            (this.guildDiscoveryRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new f.V7()),
            (this.isScrolling = !1),
            (this.isNearBottom = !1),
            (this.scrollToGuild = (e, t) => {
                let n = this.scrollerRef.current;
                if (null == n) return;
                if ((null == e && window.location.pathname.startsWith($.Z5c.GUILD_DISCOVERY)) || e === $.x8Z.SERVER_DISCOVERY_BADGE || e === $.x8Z.E3_SERVER_DISCOVERY_BADGE) {
                    if (this.scrollToDiscovery) {
                        let e = (0, c.findDOMNode)(this.guildDiscoveryRef.current);
                        (0, h.k)(e, HTMLElement)
                            ? n.scrollIntoViewNode({
                                  node: e,
                                  animate: t,
                                  padding: 8
                              })
                            : n.scrollTo({
                                  to: 0,
                                  animate: t
                              });
                    }
                    return;
                }
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
                null != i && (0, h.k)(i)
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
                let r = ei * l + ea;
                !t && (r += er);
                let a = i.getScrollerState();
                return (!t && !!(r >= a.scrollTop)) || (!!t && !!(r + ei <= a.scrollTop + a.offsetHeight)) || !1;
            }),
            (this.handleScroll = () => {
                !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = o().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                g.Z.updateGuildListScrollTo(t), this.onScroll();
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
function eo(e) {
    let { disableAppDownload: t = y.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: s } = e,
        [o] = (0, p.Wu)([O.ZP], () => {
            let e = O.ZP.getGuildsTree();
            return [e, e.version];
        }),
        c = (0, p.e7)([L.Z], () => L.Z.lurkingGuildIds()),
        h = l.useMemo(() => (n ? [] : c), [c, n]),
        _ = (0, p.Wu)([P.Z, R.ZP], () => j.default.keys(P.Z.getGuilds()).filter((e) => R.ZP.isCurrentUserGuest(e))),
        g = h.concat(_),
        C = (0, p.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        en = (0, p.e7)([P.Z], () => P.Z.getGeoRestrictedGuilds()),
        [ei, el] = l.useState(!1),
        er = l.useCallback(() => el(!0), []),
        ea = l.useCallback(() => el(!1), []),
        eo = l.useRef(!1),
        [ec] = l.useState(() => new f.V7()),
        eu = l.useRef(null),
        ed = l.useRef(null),
        [eh, ep] = l.useState(!1),
        { clanDiscoveryEnabled: e_ } = (0, x.nk)('guilds_bar'),
        { guilds: ef } = (0, x.C3)({
            location: 'guilds_bar',
            includeConverted: !0
        }),
        em = (0, T.v)({ location: 'GuildsBar' }),
        eg = e_ || ef.length > 0 || em,
        eC = l.useMemo(() => ef.filter((e) => !(0, S.EJ)(e)), [ef]).length > 0,
        eI = l.useMemo(() => (eC ? F.OO : e_ ? F.KF : void 0), [e_, eC]),
        eE = !eg,
        { ref: eN, ...ex } = (0, d.OP)(),
        eS = (0, m.useFocusJumpSection)(),
        [ev, eZ] = l.useState(!1),
        eT = l.useMemo(
            () =>
                new es(
                    o,
                    eZ,
                    () => {
                        var e, t;
                        null === (e = eu.current) || void 0 === e || e.calculateState(), null === (t = ed.current) || void 0 === t || t.calculateState();
                    },
                    (e) => {
                        let { isNearBottom: t } = e;
                        ep(t);
                    },
                    eE
                ),
            [o, eE]
        ),
        { analyticsLocations: eL } = (0, E.ZP)(I.Z.GUILDS_LIST),
        { pathname: eA } = (0, u.TH)(),
        eb = eA.startsWith($.Z5c.GUILD_DISCOVERY) || eA.startsWith($.Z5c.GLOBAL_DISCOVERY),
        eM = eA.startsWith($.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!eo.current) {
            if (0 !== o.size) {
                if (eb) eT.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = M.Z.getGuildListDimensions();
                    eT.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (eo.current = !0), () => ec.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((eT.setGuildsTree(o), eo.current || 0 === o.size)) return;
            let e = A.Z.getState().guildId;
            eT.scrollToGuild(e, !1);
            let t = null;
            return A.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eT.scrollToGuild(t, !1));
            });
        }, [o, eT]);
    let eR = l.useCallback(() => {
        eT.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eT]);
    function eP(e) {
        switch (e.type) {
            case D.eD.FOLDER:
                return (0, i.jsx)(
                    q.Z,
                    {
                        folderNode: e,
                        setNodeRef: eT.setNodeRef,
                        draggable: !0,
                        sorting: ei,
                        onDragStart: er,
                        onDragEnd: ea,
                        renderChildNode: eP
                    },
                    e.id
                );
            case D.eD.GUILD:
                return (0, i.jsx)(
                    Q.Z,
                    {
                        guildNode: e,
                        setRef: eT.setNodeRef,
                        draggable: !0,
                        sorting: ei,
                        onDragStart: er,
                        onDragEnd: ea
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, w.Z)(eT.scrollToGuild);
    let eO = o.getRoots(),
        ey = (0, v.Z)(),
        ej = (0, b.U)(),
        eD = en.map((e) =>
            (0, i.jsx)(
                V.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(E.Gt, {
        value: eL,
        children: (0, i.jsx)(m.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()(et.wrapper, r, e, { [et.hidden]: C }),
                    'aria-label': ee.Z.Messages.GUILDS_BAR_A11Y_LABEL,
                    children: (0, i.jsxs)('ul', {
                        ref: eN,
                        ...ex,
                        ...eS,
                        role: 'tree',
                        className: et.tree,
                        children: [
                            (0, i.jsx)(U.Z, {
                                ref: eu,
                                isVisible: eT.isItemVisible,
                                onJumpTo: eT.handleJumpToGuild,
                                className: et.unreadMentionsIndicatorTop,
                                barClassName: et.unreadMentionsBar
                            }),
                            (0, i.jsxs)(m.AdvancedScrollerNone, {
                                className: a()({
                                    [et.scroller]: !0,
                                    [et.scrolling]: ev
                                }),
                                ref: eT.scrollerRef,
                                onScroll: eT.handleScroll,
                                children: [
                                    (0, i.jsx)(W.u, {}),
                                    ey ? (0, i.jsx)(Z.Z, {}) : null,
                                    (0, i.jsx)(z.Z, { isOnHubVerificationRoute: eM }),
                                    (0, i.jsx)(G.Z, {}),
                                    ej,
                                    g.map((e) => (0, i.jsx)(J.Z, { guildId: e }, e)),
                                    (0, i.jsx)(X.Z, { onActivate: eR }),
                                    (0, i.jsx)(Y.Z, {}),
                                    (0, i.jsx)('div', {
                                        'aria-label': ee.Z.Messages.SERVERS,
                                        children: eO.map(eP)
                                    }),
                                    eD,
                                    n
                                        ? null
                                        : (0, i.jsx)(B.Z, {
                                              disableTooltip: h.length > 0,
                                              lastTargetNode: eO[eO.length - 1]
                                          }),
                                    n || eg
                                        ? null
                                        : (0, i.jsx)(H.Z, {
                                              ref: eT.guildDiscoveryRef,
                                              selected: eb
                                          }),
                                    (0, i.jsx)(K.Z, {}),
                                    t
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [(0, i.jsx)(Y.Z, {}), (0, i.jsx)(k.Z, {})]
                                          })
                                ]
                            }),
                            !n && eg && null != eI
                                ? (0, i.jsx)(F.LW, {
                                      hideGradient: eh,
                                      children: (0, i.jsx)(eI, {
                                          children: (e) => {
                                              let { onClick: t } = e;
                                              return (0, i.jsx)(H.Z, {
                                                  ref: eT.guildDiscoveryRef,
                                                  selected: eb,
                                                  className: et.fixedDiscoveryIcon,
                                                  onClick: t
                                              });
                                          }
                                      })
                                  })
                                : !n && eg
                                  ? (0, i.jsx)(F.LW, {
                                        hideGradient: eh,
                                        children: (0, i.jsx)(H.Z, {
                                            ref: eT.guildDiscoveryRef,
                                            selected: eb,
                                            className: et.fixedDiscoveryIcon
                                        })
                                    })
                                  : null,
                            (0, i.jsx)(U.Z, {
                                reverse: !0,
                                ref: ed,
                                isVisible: eT.isItemVisible,
                                onJumpTo: eT.handleJumpToGuild,
                                className: a()(et.unreadMentionsIndicatorBottom, { [et.unreadMentionsFixedFooter]: !n && eg }),
                                barClassName: et.unreadMentionsBar
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
        return (0, i.jsx)(d.bG, {
            navigator: t,
            children: (0, i.jsx)(eo, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, _.Z)(e, t)
);
