"use strict";
n.r(t), n.d(t, {
  default: function() {
    return er
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("817736"),
  d = n("90915"),
  c = n("974667"),
  f = n("118810"),
  h = n("446674"),
  C = n("233736"),
  p = n("862337"),
  m = n("77078"),
  E = n("406189"),
  g = n("302437"),
  S = n("812204"),
  I = n("685665"),
  _ = n("191145"),
  N = n("15131"),
  T = n("480376"),
  A = n("205550"),
  L = n("267567"),
  v = n("393027"),
  x = n("162805"),
  R = n("26989"),
  M = n("305961"),
  O = n("677099"),
  y = n("697218"),
  D = n("773336"),
  b = n("299039"),
  j = n("439932"),
  G = n("674644"),
  U = n("533669"),
  P = n("270382"),
  w = n("777778"),
  F = n("648647"),
  B = n("982360"),
  V = n("628570"),
  H = n("283294"),
  k = n("822485"),
  Y = n("798573"),
  K = n("795853"),
  W = n("357762"),
  Z = n("504957"),
  z = n("199218"),
  X = n("624531"),
  Q = n("785343"),
  q = n("22567"),
  J = n("49111"),
  $ = n("782340"),
  ee = n("876879");
let et = 56,
  en = (0, D.isWindows)() ? 4 : (0, D.isMac)() ? 0 : 12,
  el = et - 16,
  ea = en + 10;
class es {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n) {
    this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new p.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
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
      let s = et * a + ea;
      !t && (s += el);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + et <= i.scrollTop + i.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScroll()
    }, this._handleScroll = o.debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      E.default.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }
  }
}

function ei(e) {
  let {
    disableAppDownload: t = D.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([O.default], () => {
    let e = O.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), C = (0, h.useStateFromStoresArray)([M.default, R.default], () => b.default.keys(M.default.getGuilds()).filter(e => R.default.isCurrentUserGuest(e))), E = f.concat(C), g = (0, h.useStateFromStores)([y.default], () => {
    var e;
    return null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()
  }), et = (0, h.useStateFromStores)([_.default], () => _.default.isFullscreenInContext()), en = (0, h.useStateFromStores)([M.default], () => M.default.getGeoRestrictedGuilds()), [el, ea] = a.useState(!1), ei = a.useCallback(() => ea(!0), []), er = a.useCallback(() => ea(!1), []), eo = a.useRef(!1), [eu] = a.useState(() => new p.Timeout), ed = a.useRef(null), ec = a.useRef(null), {
    ref: ef,
    ...eh
  } = (0, c.useListContainerProps)(), eC = (0, m.useFocusJumpSection)(), [ep, em] = a.useState(!1), [eE] = a.useState(() => new es(o, em, () => {
    var e, t;
    null === (e = ed.current) || void 0 === e || e.calculateState(), null === (t = ec.current) || void 0 === t || t.calculateState()
  })), {
    AnalyticsLocationProvider: eg
  } = (0, I.default)(S.default.GUILDS_LIST), {
    pathname: eS
  } = (0, d.useLocation)(), eI = eS.startsWith(J.Routes.GUILD_DISCOVERY), e_ = eS.startsWith(J.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!eo.current) {
      if (0 !== o.size) {
        if (eI) eE.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = x.default.getGuildListDimensions();
          eE.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eo.current = !0, () => eu.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (eE.setGuildsTree(o), eo.current || 0 === o.size) return;
    let e = v.default.getState().guildId;
    eE.scrollToGuild(e, !1);
    let t = null,
      n = v.default.subscribe(e => {
        let {
          guildId: n
        } = e;
        n !== t && (t = n, eE.scrollToGuild(t, !1))
      });
    return n
  }, [o, eE]), (0, U.default)(eE.scrollToGuild);
  let eN = (0, A.useEligibleForGameRecommendations)(),
    eT = o.getRoots(),
    eA = (0, N.default)(),
    eL = en.map(e => (0, l.jsx)(H.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(eg, {
    children: (0, l.jsx)("nav", {
      className: i(ee.wrapper, s, (0, j.getThemeClass)(r), {
        [ee.hidden]: et
      }),
      "aria-label": $.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: ef,
        ...eh,
        ...eC,
        role: "tree",
        className: ee.tree,
        children: [(0, l.jsx)(P.default, {
          ref: ed,
          isVisible: eE.isItemVisible,
          onJumpTo: eE.handleJumpToGuild,
          className: ee.unreadMentionsIndicatorTop,
          barClassName: ee.unreadMentionsBar
        }), (0, l.jsxs)(m.AdvancedScrollerNone, {
          className: i({
            [ee.scroller]: !0,
            [ee.scrolling]: ep
          }),
          ref: eE.scrollerRef,
          onScroll: eE.handleScroll,
          children: [(0, l.jsx)(Y.HomeButton, {}), eA ? (0, l.jsx)(T.default, {}) : null, (0, l.jsx)(B.default, {}), (0, l.jsx)(K.default, {
            isOnHubVerificationRoute: e_
          }), (0, l.jsx)(w.default, {}), E.map(e => (0, l.jsx)(q.default, {
            guildId: e
          }, e)), g ? (0, l.jsx)(Q.default, {}) : null, !n && eN ? (0, l.jsx)(k.default, {
            ref: eE.guildDiscoveryRef,
            selected: eI,
            tooltip: $.default.Messages.GUILD_DISCOVERY_TOOLTIP
          }) : null, (0, l.jsx)(W.default, {}), (0, l.jsx)("div", {
            "aria-label": $.default.Messages.SERVERS,
            children: eT.map(function e(t) {
              switch (t.type) {
                case G.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(z.default, {
                    folderNode: t,
                    setNodeRef: eE.setNodeRef,
                    draggable: !0,
                    sorting: el,
                    onDragStart: ei,
                    onDragEnd: er,
                    renderChildNode: e
                  }, t.id);
                case G.GuildsNodeType.GUILD:
                  return (0, l.jsx)(X.default, {
                    guildNode: t,
                    setRef: eE.setNodeRef,
                    draggable: !0,
                    sorting: el,
                    onDragStart: ei,
                    onDragEnd: er
                  }, t.id);
                default:
                  return null
              }
            })
          }), eL, n ? null : (0, l.jsx)(V.default, {
            disableTooltip: f.length > 0,
            lastTargetNode: eT[eT.length - 1]
          }), n || eN ? null : (0, l.jsx)(k.default, {
            ref: eE.guildDiscoveryRef,
            selected: eI
          }), (0, l.jsx)(Z.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(W.default, {}), (0, l.jsx)(F.default, {})]
          })]
        }), (0, l.jsx)(P.default, {
          reverse: !0,
          ref: ec,
          isVisible: eE.isItemVisible,
          onJumpTo: eE.handleJumpToGuild,
          className: ee.unreadMentionsIndicatorBottom,
          barClassName: ee.unreadMentionsBar
        })]
      })
    })
  })
}
var er = a.memo(function(e) {
  let t = (0, g.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(ei, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, C.default)(e, t))