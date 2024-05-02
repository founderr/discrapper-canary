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
  S = n("906732"),
  I = n("358221"),
  N = n("963202"),
  T = n("2485"),
  A = n("706590"),
  L = n("940777"),
  v = n("122222"),
  x = n("41776"),
  R = n("905423"),
  M = n("802718"),
  y = n("796974"),
  O = n("271383"),
  D = n("430824"),
  b = n("771845"),
  j = n("358085"),
  P = n("709054"),
  G = n("792125"),
  U = n("727258"),
  w = n("605951"),
  F = n("474109"),
  B = n("741616"),
  V = n("187835"),
  H = n("162050"),
  k = n("118122"),
  Y = n("193154"),
  K = n("602147"),
  W = n("222059"),
  z = n("751277"),
  Z = n("65721"),
  X = n("843343"),
  Q = n("654142"),
  q = n("695301"),
  J = n("836697"),
  $ = n("921230"),
  ee = n("981631"),
  et = n("689938"),
  en = n("295986");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ea = 56,
  es = (0, j.isWindows)() ? 4 : (0, j.isMac)() ? 0 : 12,
  ei = ea - 16,
  er = es + 10;
class eo {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n) {
    el(this, "guildsTree", void 0), el(this, "setScrolling", void 0), el(this, "onScroll", void 0), el(this, "scrollerRef", void 0), el(this, "guildDiscoveryRef", void 0), el(this, "nodeRefs", void 0), el(this, "timeout", void 0), el(this, "isScrolling", void 0), el(this, "scrollToGuild", void 0), el(this, "handleJumpToGuild", void 0), el(this, "scrollTo", void 0), el(this, "isItemVisible", void 0), el(this, "handleScroll", void 0), el(this, "_handleScroll", void 0), el(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new m.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith(ee.Routes.GUILD_DISCOVERY) || e === ee.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === ee.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
        let e = (0, u.findDOMNode)(this.guildDiscoveryRef.current);
        (0, f.isElement)(e, HTMLElement) ? n.scrollIntoViewNode({
          node: e,
          animate: t,
          padding: 8
        }): n.scrollTo({
          to: 0,
          animate: t
        });
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
      let s = ea * a + er;
      !t && (s += ei);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + ea <= i.scrollTop + i.offsetHeight) || !1
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

function eu(e) {
  let {
    disableAppDownload: t = j.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([b.default], () => {
    let e = b.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStoresArray)([D.default], () => Object.values(D.default.getGuilds())), f = (0, h.useStateFromStores)([x.default], () => x.default.lurkingGuildIds()), p = a.useMemo(() => n ? [] : f, [f, n]), g = (0, h.useStateFromStoresArray)([D.default, O.default], () => P.default.keys(D.default.getGuilds()).filter(e => O.default.isCurrentUserGuest(e))), E = p.concat(g), el = (0, h.useStateFromStores)([I.default], () => I.default.isFullscreenInContext()), ea = (0, h.useStateFromStores)([D.default], () => D.default.getGeoRestrictedGuilds()), [es, ei] = a.useState(!1), er = a.useCallback(() => ei(!0), []), eu = a.useCallback(() => ei(!1), []), ed = a.useRef(!1), [ec] = a.useState(() => new m.Timeout), ef = a.useRef(null), eh = a.useRef(null), {
    ref: ep,
    ...em
  } = (0, c.useListContainerProps)(), eC = (0, C.useFocusJumpSection)(), [eg, eE] = a.useState(!1), [e_] = a.useState(() => new eo(o, eE, () => {
    var e, t;
    null === (e = ef.current) || void 0 === e || e.calculateState(), null === (t = eh.current) || void 0 === t || t.calculateState()
  })), {
    analyticsLocations: eS
  } = (0, S.default)(_.default.GUILDS_LIST), {
    pathname: eI
  } = (0, d.useLocation)(), eN = eI.startsWith(ee.Routes.GUILD_DISCOVERY), eT = eI.startsWith(ee.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!ed.current) {
      if (0 !== o.size) {
        if (eN) e_.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = y.default.getGuildListDimensions();
          e_.scrollTo({
            to: e,
            animate: !1
          })
        }
        return ed.current = !0, () => ec.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (e_.setGuildsTree(o), ed.current || 0 === o.size) return;
    let e = R.default.getState().guildId;
    e_.scrollToGuild(e, !1);
    let t = null;
    return R.default.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, e_.scrollToGuild(t, !1))
    })
  }, [o, e_]), (0, w.default)(e_.scrollToGuild);
  let eA = (0, v.useEligibleForGameRecommendations)(),
    eL = (0, T.useClanDiscoveryExperimentEnabled)("guilds_bar"),
    ev = (0, N.useAnyClanGuildExperimentEnabled)(u, "guilds_bar"),
    ex = eA || eL || ev,
    eR = o.getRoots(),
    eM = (0, A.default)(),
    ey = (0, M.useSignUpButton)(),
    eO = ea.map(e => (0, l.jsx)(Y.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: eS,
    children: (0, l.jsx)("nav", {
      className: i()(en.wrapper, s, (0, G.getThemeClass)(r), {
        [en.hidden]: el
      }),
      "aria-label": et.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: ep,
        ...em,
        ...eC,
        role: "tree",
        className: en.tree,
        children: [(0, l.jsx)(F.default, {
          ref: ef,
          isVisible: e_.isItemVisible,
          onJumpTo: e_.handleJumpToGuild,
          className: en.unreadMentionsIndicatorTop,
          barClassName: en.unreadMentionsBar
        }), (0, l.jsxs)(C.AdvancedScrollerNone, {
          className: i()({
            [en.scroller]: !0,
            [en.scrolling]: eg
          }),
          ref: e_.scrollerRef,
          onScroll: e_.handleScroll,
          children: [(0, l.jsx)(W.HomeButton, {}), eM ? (0, l.jsx)(L.default, {}) : null, (0, l.jsx)(H.default, {}), (0, l.jsx)(z.default, {
            isOnHubVerificationRoute: eT
          }), (0, l.jsx)(B.default, {}), ey, E.map(e => (0, l.jsx)($.default, {
            guildId: e
          }, e)), !n && ex ? (0, l.jsx)(K.default, {
            ref: e_.guildDiscoveryRef,
            selected: eN,
            tooltip: et.default.Messages.GUILD_DISCOVERY_TOOLTIP,
            consistentIconStyle: eL || ev
          }) : null, (0, l.jsx)(J.default, {}), (0, l.jsx)(Z.default, {}), (0, l.jsx)("div", {
            "aria-label": et.default.Messages.SERVERS,
            children: eR.map(function e(t) {
              switch (t.type) {
                case U.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(Q.default, {
                    folderNode: t,
                    setNodeRef: e_.setNodeRef,
                    draggable: !0,
                    sorting: es,
                    onDragStart: er,
                    onDragEnd: eu,
                    renderChildNode: e
                  }, t.id);
                case U.GuildsNodeType.GUILD:
                  return (0, l.jsx)(q.default, {
                    guildNode: t,
                    setRef: e_.setNodeRef,
                    draggable: !0,
                    sorting: es,
                    onDragStart: er,
                    onDragEnd: eu
                  }, t.id);
                default:
                  return null
              }
            })
          }), eO, n ? null : (0, l.jsx)(k.default, {
            disableTooltip: p.length > 0,
            lastTargetNode: eR[eR.length - 1]
          }), n || ex ? null : (0, l.jsx)(K.default, {
            ref: e_.guildDiscoveryRef,
            selected: eN
          }), (0, l.jsx)(X.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Z.default, {}), (0, l.jsx)(V.default, {})]
          })]
        }), (0, l.jsx)(F.default, {
          reverse: !0,
          ref: eh,
          isVisible: e_.isItemVisible,
          onJumpTo: e_.handleJumpToGuild,
          className: en.unreadMentionsIndicatorBottom,
          barClassName: en.unreadMentionsBar
        })]
      })
    })
  })
}
t.default = a.memo(function(e) {
  let t = (0, E.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(eu, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, p.default)(e, t))