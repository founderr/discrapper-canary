"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
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
  S = n("100527"),
  I = n("906732"),
  _ = n("358221"),
  N = n("706590"),
  T = n("940777"),
  A = n("122222"),
  L = n("41776"),
  v = n("905423"),
  x = n("802718"),
  R = n("796974"),
  y = n("271383"),
  M = n("430824"),
  O = n("771845"),
  b = n("358085"),
  D = n("709054"),
  j = n("792125"),
  G = n("727258"),
  P = n("605951"),
  U = n("474109"),
  w = n("741616"),
  B = n("187835"),
  F = n("162050"),
  V = n("118122"),
  H = n("193154"),
  k = n("602147"),
  K = n("222059"),
  Y = n("751277"),
  W = n("65721"),
  Z = n("843343"),
  z = n("654142"),
  X = n("695301"),
  q = n("836697"),
  Q = n("921230"),
  J = n("981631"),
  $ = n("689938"),
  ee = n("764060");

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let en = 56,
  el = (0, b.isWindows)() ? 4 : (0, b.isMac)() ? 0 : 12,
  ea = en - 16,
  es = el + 10;
class ei {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n) {
    et(this, "guildsTree", void 0), et(this, "setScrolling", void 0), et(this, "onScroll", void 0), et(this, "scrollerRef", void 0), et(this, "guildDiscoveryRef", void 0), et(this, "nodeRefs", void 0), et(this, "timeout", void 0), et(this, "isScrolling", void 0), et(this, "scrollToGuild", void 0), et(this, "handleJumpToGuild", void 0), et(this, "scrollTo", void 0), et(this, "isItemVisible", void 0), et(this, "handleScroll", void 0), et(this, "_handleScroll", void 0), et(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new m.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith(J.Routes.GUILD_DISCOVERY) || e === J.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === J.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
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
    disableAppDownload: t = b.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([O.default], () => {
    let e = O.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), p = (0, h.useStateFromStoresArray)([M.default, y.default], () => D.default.keys(M.default.getGuilds()).filter(e => y.default.isCurrentUserGuest(e))), g = f.concat(p), E = (0, h.useStateFromStores)([_.default], () => _.default.isFullscreenInContext()), et = (0, h.useStateFromStores)([M.default], () => M.default.getGeoRestrictedGuilds()), [en, el] = a.useState(!1), ea = a.useCallback(() => el(!0), []), es = a.useCallback(() => el(!1), []), er = a.useRef(!1), [eo] = a.useState(() => new m.Timeout), eu = a.useRef(null), ed = a.useRef(null), {
    ref: ec,
    ...ef
  } = (0, c.useListContainerProps)(), eh = (0, C.useFocusJumpSection)(), [ep, em] = a.useState(!1), [eC] = a.useState(() => new ei(o, em, () => {
    var e, t;
    null === (e = eu.current) || void 0 === e || e.calculateState(), null === (t = ed.current) || void 0 === t || t.calculateState()
  })), {
    analyticsLocations: eg
  } = (0, I.default)(S.default.GUILDS_LIST), {
    pathname: eE
  } = (0, d.useLocation)(), eS = eE.startsWith(J.Routes.GUILD_DISCOVERY), eI = eE.startsWith(J.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!er.current) {
      if (0 !== o.size) {
        if (eS) eC.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = R.default.getGuildListDimensions();
          eC.scrollTo({
            to: e,
            animate: !1
          })
        }
        return er.current = !0, () => eo.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (eC.setGuildsTree(o), er.current || 0 === o.size) return;
    let e = v.default.getState().guildId;
    eC.scrollToGuild(e, !1);
    let t = null;
    return v.default.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eC.scrollToGuild(t, !1))
    })
  }, [o, eC]), (0, P.default)(eC.scrollToGuild);
  let e_ = (0, A.useEligibleForGameRecommendations)(),
    eN = o.getRoots(),
    eT = (0, N.default)(),
    eA = (0, x.useSignUpButton)(),
    eL = et.map(e => (0, l.jsx)(H.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(I.AnalyticsLocationProvider, {
    value: eg,
    children: (0, l.jsx)("nav", {
      className: i()(ee.wrapper, s, (0, j.getThemeClass)(r), {
        [ee.hidden]: E
      }),
      "aria-label": $.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: ec,
        ...ef,
        ...eh,
        role: "tree",
        className: ee.tree,
        children: [(0, l.jsx)(U.default, {
          ref: eu,
          isVisible: eC.isItemVisible,
          onJumpTo: eC.handleJumpToGuild,
          className: ee.unreadMentionsIndicatorTop,
          barClassName: ee.unreadMentionsBar
        }), (0, l.jsxs)(C.AdvancedScrollerNone, {
          className: i()({
            [ee.scroller]: !0,
            [ee.scrolling]: ep
          }),
          ref: eC.scrollerRef,
          onScroll: eC.handleScroll,
          children: [(0, l.jsx)(K.HomeButton, {}), eT ? (0, l.jsx)(T.default, {}) : null, (0, l.jsx)(F.default, {}), (0, l.jsx)(Y.default, {
            isOnHubVerificationRoute: eI
          }), (0, l.jsx)(w.default, {}), eA, g.map(e => (0, l.jsx)(Q.default, {
            guildId: e
          }, e)), (0, l.jsx)(q.default, {}), !n && e_ ? (0, l.jsx)(k.default, {
            ref: eC.guildDiscoveryRef,
            selected: eS,
            tooltip: $.default.Messages.GUILD_DISCOVERY_TOOLTIP
          }) : null, (0, l.jsx)(W.default, {}), (0, l.jsx)("div", {
            "aria-label": $.default.Messages.SERVERS,
            children: eN.map(function e(t) {
              switch (t.type) {
                case G.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(z.default, {
                    folderNode: t,
                    setNodeRef: eC.setNodeRef,
                    draggable: !0,
                    sorting: en,
                    onDragStart: ea,
                    onDragEnd: es,
                    renderChildNode: e
                  }, t.id);
                case G.GuildsNodeType.GUILD:
                  return (0, l.jsx)(X.default, {
                    guildNode: t,
                    setRef: eC.setNodeRef,
                    draggable: !0,
                    sorting: en,
                    onDragStart: ea,
                    onDragEnd: es
                  }, t.id);
                default:
                  return null
              }
            })
          }), eL, n ? null : (0, l.jsx)(V.default, {
            disableTooltip: f.length > 0,
            lastTargetNode: eN[eN.length - 1]
          }), n || e_ ? null : (0, l.jsx)(k.default, {
            ref: eC.guildDiscoveryRef,
            selected: eS
          }), (0, l.jsx)(Z.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(W.default, {}), (0, l.jsx)(B.default, {})]
          })]
        }), (0, l.jsx)(U.default, {
          reverse: !0,
          ref: ed,
          isVisible: eC.isItemVisible,
          onJumpTo: eC.handleJumpToGuild,
          className: ee.unreadMentionsIndicatorBottom,
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