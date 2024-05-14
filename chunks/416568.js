"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("699581"),
  d = n("613828"),
  c = n("924826"),
  f = n("374470"),
  h = n("442837"),
  m = n("902704"),
  p = n("846519"),
  C = n("481060"),
  g = n("925549"),
  E = n("209613"),
  _ = n("100527"),
  S = n("906732"),
  I = n("358221"),
  N = n("963202"),
  T = n("706590"),
  A = n("940777"),
  L = n("41776"),
  v = n("905423"),
  x = n("802718"),
  R = n("796974"),
  M = n("271383"),
  y = n("430824"),
  O = n("771845"),
  D = n("358085"),
  b = n("709054"),
  j = n("792125"),
  P = n("727258"),
  G = n("605951"),
  U = n("474109"),
  w = n("741616"),
  B = n("187835"),
  F = n("162050"),
  H = n("118122"),
  V = n("193154"),
  k = n("602147"),
  Y = n("773182"),
  K = n("222059"),
  W = n("751277"),
  z = n("65721"),
  Z = n("843343"),
  X = n("654142"),
  Q = n("695301"),
  q = n("836697"),
  J = n("921230"),
  $ = n("981631"),
  ee = n("689938"),
  et = n("31836");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let el = 56,
  ea = (0, D.isWindows)() ? 4 : (0, D.isMac)() ? 0 : 12,
  es = el - 16,
  ei = ea + 10;
class er {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, l, s) {
    en(this, "guildsTree", void 0), en(this, "setScrolling", void 0), en(this, "onScroll", void 0), en(this, "onScrollStateChanged", void 0), en(this, "scrollToDiscovery", void 0), en(this, "scrollerRef", void 0), en(this, "guildDiscoveryRef", void 0), en(this, "nodeRefs", void 0), en(this, "timeout", void 0), en(this, "isScrolling", void 0), en(this, "isNearBottom", void 0), en(this, "scrollToGuild", void 0), en(this, "handleJumpToGuild", void 0), en(this, "scrollTo", void 0), en(this, "isItemVisible", void 0), en(this, "handleScroll", void 0), en(this, "_handleScrollDebounced", void 0), en(this, "_handleScrollThrottled", void 0), en(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.onScrollStateChanged = l, this.scrollToDiscovery = s, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new p.Timeout, this.isScrolling = !1, this.isNearBottom = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith($.Routes.GUILD_DISCOVERY) || e === $.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === $.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
        if (this.scrollToDiscovery) {
          let e = (0, u.findDOMNode)(this.guildDiscoveryRef.current);
          (0, f.isElement)(e, HTMLElement) ? n.scrollIntoViewNode({
            node: e,
            animate: t,
            padding: 8
          }): n.scrollTo({
            to: 0,
            animate: t
          })
        }
        return
      }
      if (null == e) {
        n.scrollTo({
          to: 0,
          animate: t
        });
        return
      }
      let l = this.nodeRefs[e];
      for (; null == l;) {
        let t = this.guildsTree.getNode(e);
        if ((null == t ? void 0 : t.parentId) == null) break;
        l = this.nodeRefs[t.parentId]
      }
      null != l && (0, f.isElement)(l) ? n.scrollIntoViewNode({
        node: l,
        animate: t,
        padding: 8
      }) : n.scrollTo({
        to: 0,
        animate: t
      })
    }, this.handleJumpToGuild = e => {
      this.scrollToGuild(e, !0)
    }, this.scrollTo = e => {
      var t;
      null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e)
    }, this.isItemVisible = (e, t, n) => {
      let l = this.scrollerRef.current;
      if (null == l) return !1;
      let a = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (a < 0) return !1;
      let s = el * a + ei;
      !t && (s += es);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + el <= i.scrollTop + i.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled()
    }, this._handleScrollDebounced = o().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      g.default.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this._handleScrollThrottled = o().throttle(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        offsetHeight: l
      } = e.getScrollerState(), a = t + l >= n - 24;
      a !== this.isNearBottom && (this.isNearBottom = a, this.onScrollStateChanged({
        isNearBottom: a
      }))
    }, 100), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }
  }
}

function eo(e) {
  let {
    disableAppDownload: t = D.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([O.default], () => {
    let e = O.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStoresArray)([y.default], () => Object.values(y.default.getGuilds())), f = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), m = a.useMemo(() => n ? [] : f, [f, n]), g = (0, h.useStateFromStoresArray)([y.default, M.default], () => b.default.keys(y.default.getGuilds()).filter(e => M.default.isCurrentUserGuest(e))), E = m.concat(g), en = (0, h.useStateFromStores)([I.default], () => I.default.isFullscreenInContext()), el = (0, h.useStateFromStores)([y.default], () => y.default.getGeoRestrictedGuilds()), [ea, es] = a.useState(!1), ei = a.useCallback(() => es(!0), []), eo = a.useCallback(() => es(!1), []), eu = a.useRef(!1), [ed] = a.useState(() => new p.Timeout), ec = a.useRef(null), ef = a.useRef(null), [eh, em] = a.useState(!1), {
    enableClanCreation: ep,
    defaultGameId: eC
  } = (0, N.useAnyClanPrepilotExperiment)(u, "guilds_bar"), {
    clanDiscoveryEnabled: eg,
    defaultGameId: eE
  } = (0, N.useClanPilotExperiment)("guilds_bar"), e_ = a.useMemo(() => ep ? Y.GuildsBarClanAdminUpsellPopout : eg ? Y.GuildsBarClanUserUpsellPopout : void 0, [eg, ep]), eS = a.useMemo(() => ep ? eC : eg ? eE : void 0, [eC, eg, ep, eE]), eI = null != e_, eN = !eI, {
    ref: eT,
    ...eA
  } = (0, c.useListContainerProps)(), eL = (0, C.useFocusJumpSection)(), [ev, ex] = a.useState(!1), eR = a.useMemo(() => new er(o, ex, () => {
    var e, t;
    null === (e = ec.current) || void 0 === e || e.calculateState(), null === (t = ef.current) || void 0 === t || t.calculateState()
  }, e => {
    let {
      isNearBottom: t
    } = e;
    em(t)
  }, eN), [o, eN]), {
    analyticsLocations: eM
  } = (0, S.default)(_.default.GUILDS_LIST), {
    pathname: ey
  } = (0, d.useLocation)(), eO = ey.startsWith($.Routes.GUILD_DISCOVERY), eD = ey.startsWith($.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!eu.current) {
      if (0 !== o.size) {
        if (eO) eR.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = R.default.getGuildListDimensions();
          eR.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eu.current = !0, () => ed.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (eR.setGuildsTree(o), eu.current || 0 === o.size) return;
    let e = v.default.getState().guildId;
    eR.scrollToGuild(e, !1);
    let t = null;
    return v.default.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eR.scrollToGuild(t, !1))
    })
  }, [o, eR]), (0, G.default)(eR.scrollToGuild);
  let eb = o.getRoots(),
    ej = (0, T.default)(),
    eP = (0, x.useSignUpButton)(),
    eG = el.map(e => (0, l.jsx)(V.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: eM,
    children: (0, l.jsx)("nav", {
      className: i()(et.wrapper, s, (0, j.getThemeClass)(r), {
        [et.hidden]: en
      }),
      "aria-label": ee.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: eT,
        ...eA,
        ...eL,
        role: "tree",
        className: et.tree,
        children: [(0, l.jsx)(U.default, {
          ref: ec,
          isVisible: eR.isItemVisible,
          onJumpTo: eR.handleJumpToGuild,
          className: et.unreadMentionsIndicatorTop,
          barClassName: et.unreadMentionsBar
        }), (0, l.jsxs)(C.AdvancedScrollerNone, {
          className: i()({
            [et.scroller]: !0,
            [et.scrolling]: ev
          }),
          ref: eR.scrollerRef,
          onScroll: eR.handleScroll,
          children: [(0, l.jsx)(K.HomeButton, {}), ej ? (0, l.jsx)(A.default, {}) : null, (0, l.jsx)(F.default, {}), (0, l.jsx)(W.default, {
            isOnHubVerificationRoute: eD
          }), (0, l.jsx)(w.default, {}), eP, E.map(e => (0, l.jsx)(J.default, {
            guildId: e
          }, e)), (0, l.jsx)(q.default, {}), (0, l.jsx)(z.default, {}), (0, l.jsx)("div", {
            "aria-label": ee.default.Messages.SERVERS,
            children: eb.map(function e(t) {
              switch (t.type) {
                case P.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(X.default, {
                    folderNode: t,
                    setNodeRef: eR.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: ei,
                    onDragEnd: eo,
                    renderChildNode: e
                  }, t.id);
                case P.GuildsNodeType.GUILD:
                  return (0, l.jsx)(Q.default, {
                    guildNode: t,
                    setRef: eR.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: ei,
                    onDragEnd: eo
                  }, t.id);
                default:
                  return null
              }
            })
          }), eG, n ? null : (0, l.jsx)(H.default, {
            disableTooltip: m.length > 0,
            lastTargetNode: eb[eb.length - 1]
          }), n || null != e_ && null != eS ? null : (0, l.jsx)(k.default, {
            ref: eR.guildDiscoveryRef,
            selected: eO
          }), (0, l.jsx)(Z.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(z.default, {}), (0, l.jsx)(B.default, {})]
          })]
        }), n || null == e_ || null == eS ? null : (0, l.jsx)(Y.GuildsBarFixedFooter, {
          hideGradient: eh,
          children: (0, l.jsx)(e_, {
            defaultGameId: eS,
            children: e => {
              let {
                onClick: t
              } = e;
              return (0, l.jsx)(k.default, {
                ref: eR.guildDiscoveryRef,
                selected: eO,
                className: et.fixedDiscoveryIcon,
                onClick: t
              })
            }
          })
        }), (0, l.jsx)(U.default, {
          reverse: !0,
          ref: ef,
          isVisible: eR.isItemVisible,
          onJumpTo: eR.handleJumpToGuild,
          className: i()(et.unreadMentionsIndicatorBottom, {
            [et.unreadMentionsFixedFooter]: !n && eI
          }),
          barClassName: et.unreadMentionsBar
        })]
      })
    })
  })
}
t.default = a.memo(function(e) {
  let t = (0, E.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(eo, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, m.default)(e, t))