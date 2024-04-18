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
  N = n("2485"),
  T = n("706590"),
  A = n("940777"),
  L = n("122222"),
  v = n("41776"),
  x = n("905423"),
  R = n("802718"),
  y = n("796974"),
  M = n("271383"),
  O = n("430824"),
  b = n("771845"),
  D = n("358085"),
  j = n("709054"),
  P = n("792125"),
  G = n("727258"),
  U = n("605951"),
  w = n("474109"),
  F = n("741616"),
  B = n("187835"),
  H = n("162050"),
  V = n("118122"),
  k = n("193154"),
  Y = n("602147"),
  K = n("222059"),
  W = n("751277"),
  Z = n("65721"),
  z = n("843343"),
  X = n("654142"),
  Q = n("695301"),
  q = n("836697"),
  J = n("921230"),
  $ = n("981631"),
  ee = n("689938"),
  et = n("764060");

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
  constructor(e, t, n) {
    en(this, "guildsTree", void 0), en(this, "setScrolling", void 0), en(this, "onScroll", void 0), en(this, "scrollerRef", void 0), en(this, "guildDiscoveryRef", void 0), en(this, "nodeRefs", void 0), en(this, "timeout", void 0), en(this, "isScrolling", void 0), en(this, "scrollToGuild", void 0), en(this, "handleJumpToGuild", void 0), en(this, "scrollTo", void 0), en(this, "isItemVisible", void 0), en(this, "handleScroll", void 0), en(this, "_handleScroll", void 0), en(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new m.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith($.Routes.GUILD_DISCOVERY) || e === $.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === $.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
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
      let s = el * a + ei;
      !t && (s += es);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + el <= i.scrollTop + i.offsetHeight) || !1
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

function eo(e) {
  let {
    disableAppDownload: t = D.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([b.default], () => {
    let e = b.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStores)([v.default], () => v.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), p = (0, h.useStateFromStoresArray)([O.default, M.default], () => j.default.keys(O.default.getGuilds()).filter(e => M.default.isCurrentUserGuest(e))), g = f.concat(p), E = (0, h.useStateFromStores)([I.default], () => I.default.isFullscreenInContext()), en = (0, h.useStateFromStores)([O.default], () => O.default.getGeoRestrictedGuilds()), [el, ea] = a.useState(!1), es = a.useCallback(() => ea(!0), []), ei = a.useCallback(() => ea(!1), []), eo = a.useRef(!1), [eu] = a.useState(() => new m.Timeout), ed = a.useRef(null), ec = a.useRef(null), {
    ref: ef,
    ...eh
  } = (0, c.useListContainerProps)(), ep = (0, C.useFocusJumpSection)(), [em, eC] = a.useState(!1), [eg] = a.useState(() => new er(o, eC, () => {
    var e, t;
    null === (e = ed.current) || void 0 === e || e.calculateState(), null === (t = ec.current) || void 0 === t || t.calculateState()
  })), {
    analyticsLocations: eE
  } = (0, S.default)(_.default.GUILDS_LIST), {
    pathname: e_
  } = (0, d.useLocation)(), eS = e_.startsWith($.Routes.GUILD_DISCOVERY), eI = e_.startsWith($.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!eo.current) {
      if (0 !== o.size) {
        if (eS) eg.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = y.default.getGuildListDimensions();
          eg.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eo.current = !0, () => eu.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (eg.setGuildsTree(o), eo.current || 0 === o.size) return;
    let e = x.default.getState().guildId;
    eg.scrollToGuild(e, !1);
    let t = null;
    return x.default.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eg.scrollToGuild(t, !1))
    })
  }, [o, eg]), (0, U.default)(eg.scrollToGuild);
  let eN = (0, L.useEligibleForGameRecommendations)(),
    eT = (0, N.useClanDiscoveryExperimentEnabled)("guilds_bar"),
    eA = eN || eT,
    eL = o.getRoots(),
    ev = (0, T.default)(),
    ex = (0, R.useSignUpButton)(),
    eR = en.map(e => (0, l.jsx)(k.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: eE,
    children: (0, l.jsx)("nav", {
      className: i()(et.wrapper, s, (0, P.getThemeClass)(r), {
        [et.hidden]: E
      }),
      "aria-label": ee.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: ef,
        ...eh,
        ...ep,
        role: "tree",
        className: et.tree,
        children: [(0, l.jsx)(w.default, {
          ref: ed,
          isVisible: eg.isItemVisible,
          onJumpTo: eg.handleJumpToGuild,
          className: et.unreadMentionsIndicatorTop,
          barClassName: et.unreadMentionsBar
        }), (0, l.jsxs)(C.AdvancedScrollerNone, {
          className: i()({
            [et.scroller]: !0,
            [et.scrolling]: em
          }),
          ref: eg.scrollerRef,
          onScroll: eg.handleScroll,
          children: [(0, l.jsx)(K.HomeButton, {}), ev ? (0, l.jsx)(A.default, {}) : null, (0, l.jsx)(H.default, {}), (0, l.jsx)(W.default, {
            isOnHubVerificationRoute: eI
          }), (0, l.jsx)(F.default, {}), ex, g.map(e => (0, l.jsx)(J.default, {
            guildId: e
          }, e)), !n && eA ? (0, l.jsx)(Y.default, {
            ref: eg.guildDiscoveryRef,
            selected: eS,
            tooltip: ee.default.Messages.GUILD_DISCOVERY_TOOLTIP
          }) : null, (0, l.jsx)(q.default, {}), (0, l.jsx)(Z.default, {}), (0, l.jsx)("div", {
            "aria-label": ee.default.Messages.SERVERS,
            children: eL.map(function e(t) {
              switch (t.type) {
                case G.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(X.default, {
                    folderNode: t,
                    setNodeRef: eg.setNodeRef,
                    draggable: !0,
                    sorting: el,
                    onDragStart: es,
                    onDragEnd: ei,
                    renderChildNode: e
                  }, t.id);
                case G.GuildsNodeType.GUILD:
                  return (0, l.jsx)(Q.default, {
                    guildNode: t,
                    setRef: eg.setNodeRef,
                    draggable: !0,
                    sorting: el,
                    onDragStart: es,
                    onDragEnd: ei
                  }, t.id);
                default:
                  return null
              }
            })
          }), eR, n ? null : (0, l.jsx)(V.default, {
            disableTooltip: f.length > 0,
            lastTargetNode: eL[eL.length - 1]
          }), n || eA ? null : (0, l.jsx)(Y.default, {
            ref: eg.guildDiscoveryRef,
            selected: eS
          }), (0, l.jsx)(z.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Z.default, {}), (0, l.jsx)(B.default, {})]
          })]
        }), (0, l.jsx)(w.default, {
          reverse: !0,
          ref: ec,
          isVisible: eg.isItemVisible,
          onJumpTo: eg.handleJumpToGuild,
          className: et.unreadMentionsIndicatorBottom,
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
}, (e, t) => !1 === t.isVisible || (0, p.default)(e, t))