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
  p = n("902704"),
  m = n("846519"),
  C = n("481060"),
  g = n("925549"),
  E = n("209613"),
  _ = n("100527"),
  I = n("906732"),
  S = n("358221"),
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
  F = n("187835"),
  B = n("162050"),
  H = n("118122"),
  V = n("193154"),
  k = n("602147"),
  Y = n("222059"),
  K = n("751277"),
  W = n("65721"),
  z = n("843343"),
  Z = n("654142"),
  X = n("695301"),
  Q = n("836697"),
  q = n("921230"),
  J = n("981631"),
  $ = n("689938"),
  ee = n("31836");

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let en = 56,
  el = (0, D.isWindows)() ? 4 : (0, D.isMac)() ? 0 : 12,
  ea = en - 16,
  es = el + 10;
class ei {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, l) {
    et(this, "guildsTree", void 0), et(this, "setScrolling", void 0), et(this, "onScroll", void 0), et(this, "scrollToDiscovery", void 0), et(this, "scrollerRef", void 0), et(this, "guildDiscoveryRef", void 0), et(this, "nodeRefs", void 0), et(this, "timeout", void 0), et(this, "isScrolling", void 0), et(this, "scrollToGuild", void 0), et(this, "handleJumpToGuild", void 0), et(this, "scrollTo", void 0), et(this, "isItemVisible", void 0), et(this, "handleScroll", void 0), et(this, "_handleScroll", void 0), et(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollToDiscovery = l, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new m.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith(J.Routes.GUILD_DISCOVERY) || e === J.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === J.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
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
      let s = en * a + es;
      !t && (s += ea);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + en <= i.scrollTop + i.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScroll()
    }, this._handleScroll = o().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      g.default.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }
  }
}

function er(e) {
  let {
    disableAppDownload: t = D.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([O.default], () => {
    let e = O.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStoresArray)([y.default], () => Object.values(y.default.getGuilds())), f = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), p = a.useMemo(() => n ? [] : f, [f, n]), g = (0, h.useStateFromStoresArray)([y.default, M.default], () => b.default.keys(y.default.getGuilds()).filter(e => M.default.isCurrentUserGuest(e))), E = p.concat(g), et = (0, h.useStateFromStores)([S.default], () => S.default.isFullscreenInContext()), en = (0, h.useStateFromStores)([y.default], () => y.default.getGeoRestrictedGuilds()), [el, ea] = a.useState(!1), es = a.useCallback(() => ea(!0), []), er = a.useCallback(() => ea(!1), []), eo = a.useRef(!1), [eu] = a.useState(() => new m.Timeout), ed = a.useRef(null), ec = a.useRef(null), {
    enableClanCreation: ef,
    defaultGameId: eh
  } = (0, N.useAnyClanPrepilotExperiment)(u, "guilds_bar"), ep = !ef, {
    ref: em,
    ...eC
  } = (0, c.useListContainerProps)(), eg = (0, C.useFocusJumpSection)(), [eE, e_] = a.useState(!1), eI = a.useMemo(() => new ei(o, e_, () => {
    var e, t;
    null === (e = ed.current) || void 0 === e || e.calculateState(), null === (t = ec.current) || void 0 === t || t.calculateState()
  }, ep), [o, ep]), {
    analyticsLocations: eS
  } = (0, I.default)(_.default.GUILDS_LIST), {
    pathname: eN
  } = (0, d.useLocation)(), eT = eN.startsWith(J.Routes.GUILD_DISCOVERY), eA = eN.startsWith(J.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!eo.current) {
      if (0 !== o.size) {
        if (eT) eI.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = R.default.getGuildListDimensions();
          eI.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eo.current = !0, () => eu.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (eI.setGuildsTree(o), eo.current || 0 === o.size) return;
    let e = v.default.getState().guildId;
    eI.scrollToGuild(e, !1);
    let t = null;
    return v.default.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eI.scrollToGuild(t, !1))
    })
  }, [o, eI]), (0, G.default)(eI.scrollToGuild);
  let eL = o.getRoots(),
    ev = (0, T.default)(),
    ex = (0, x.useSignUpButton)(),
    eR = en.map(e => (0, l.jsx)(V.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(I.AnalyticsLocationProvider, {
    value: eS,
    children: (0, l.jsx)("nav", {
      className: i()(ee.wrapper, s, (0, j.getThemeClass)(r), {
        [ee.hidden]: et
      }),
      "aria-label": $.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: em,
        ...eC,
        ...eg,
        role: "tree",
        className: ee.tree,
        children: [(0, l.jsx)(U.default, {
          ref: ed,
          isVisible: eI.isItemVisible,
          onJumpTo: eI.handleJumpToGuild,
          className: ee.unreadMentionsIndicatorTop,
          barClassName: ee.unreadMentionsBar
        }), (0, l.jsxs)(C.AdvancedScrollerNone, {
          className: i()({
            [ee.scroller]: !0,
            [ee.scrolling]: eE
          }),
          ref: eI.scrollerRef,
          onScroll: eI.handleScroll,
          children: [(0, l.jsx)(Y.HomeButton, {}), ev ? (0, l.jsx)(A.default, {}) : null, (0, l.jsx)(B.default, {}), (0, l.jsx)(K.default, {
            isOnHubVerificationRoute: eA
          }), (0, l.jsx)(w.default, {}), ex, E.map(e => (0, l.jsx)(q.default, {
            guildId: e
          }, e)), (0, l.jsx)(Q.default, {}), (0, l.jsx)(W.default, {}), (0, l.jsx)("div", {
            "aria-label": $.default.Messages.SERVERS,
            children: eL.map(function e(t) {
              switch (t.type) {
                case P.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(Z.default, {
                    folderNode: t,
                    setNodeRef: eI.setNodeRef,
                    draggable: !0,
                    sorting: el,
                    onDragStart: es,
                    onDragEnd: er,
                    renderChildNode: e
                  }, t.id);
                case P.GuildsNodeType.GUILD:
                  return (0, l.jsx)(X.default, {
                    guildNode: t,
                    setRef: eI.setNodeRef,
                    draggable: !0,
                    sorting: el,
                    onDragStart: es,
                    onDragEnd: er
                  }, t.id);
                default:
                  return null
              }
            })
          }), eR, n ? null : (0, l.jsx)(H.default, {
            disableTooltip: p.length > 0,
            lastTargetNode: eL[eL.length - 1]
          }), n || ef ? null : (0, l.jsx)(k.default, {
            ref: eI.guildDiscoveryRef,
            selected: eT
          }), (0, l.jsx)(z.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(W.default, {}), (0, l.jsx)(F.default, {})]
          })]
        }), !n && ef ? (0, l.jsx)(k.GuildsBarFixedFooter, {
          children: (0, l.jsx)(k.GuildsBarClanAdminUpsellPopout, {
            defaultGameId: eh,
            children: e => {
              let {
                onClick: t
              } = e;
              return (0, l.jsx)(k.default, {
                ref: eI.guildDiscoveryRef,
                selected: eT,
                className: ee.fixedDiscoveryIcon,
                onClick: t
              })
            }
          })
        }) : null, (0, l.jsx)(U.default, {
          reverse: !0,
          ref: ec,
          isVisible: eI.isItemVisible,
          onJumpTo: eI.handleJumpToGuild,
          className: i()(ee.unreadMentionsIndicatorBottom, {
            [ee.unreadMentionsFixedFooter]: !n && ef
          }),
          barClassName: ee.unreadMentionsBar
        })]
      })
    })
  })
}
t.default = a.memo(function(e) {
  let t = (0, E.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(er, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, p.default)(e, t))