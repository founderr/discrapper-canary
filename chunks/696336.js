"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ei
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("817736"),
  d = n("90915"),
  c = n("974667"),
  f = n("118810"),
  h = n("446674"),
  C = n("233736"),
  p = n("862337"),
  m = n("77078"),
  E = n("406189"),
  g = n("302437"),
  I = n("812204"),
  _ = n("685665"),
  S = n("191145"),
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
  b = n("439932"),
  j = n("674644"),
  G = n("533669"),
  U = n("270382"),
  P = n("777778"),
  w = n("648647"),
  F = n("982360"),
  B = n("628570"),
  V = n("283294"),
  H = n("822485"),
  k = n("798573"),
  Y = n("795853"),
  K = n("357762"),
  W = n("504957"),
  Z = n("199218"),
  z = n("624531"),
  X = n("785343"),
  Q = n("22567"),
  J = n("49111"),
  q = n("782340"),
  $ = n("5457");
let ee = 56,
  et = (0, D.isWindows)() ? 4 : (0, D.isMac)() ? 0 : 12,
  en = ee - 16,
  el = et + 10;
class ea {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n) {
    this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new p.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith(J.Routes.GUILD_DISCOVERY) || e === J.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === J.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
        let e = (0, o.findDOMNode)(this.guildDiscoveryRef.current);
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
      let s = ee * a + el;
      !t && (s += en);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + ee <= i.scrollTop + i.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScroll()
    }, this._handleScroll = u.debounce(() => {
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

function es(e) {
  let {
    disableAppDownload: t = D.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [u] = (0, h.useStateFromStoresArray)([O.default], () => {
    let e = O.default.getGuildsTree();
    return [e, e.version]
  }), o = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : o, [o, n]), C = (0, h.useStateFromStoresArray)([M.default, R.default], () => Object.keys(M.default.getGuilds()).filter(e => R.default.isCurrentUserGuest(e))), E = f.concat(C), g = (0, h.useStateFromStores)([y.default], () => {
    var e;
    return null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()
  }), ee = (0, h.useStateFromStores)([S.default], () => S.default.isFullscreenInContext()), et = (0, h.useStateFromStores)([M.default], () => M.default.getGeoRestrictedGuilds()), [en, el] = a.useState(!1), es = a.useCallback(() => el(!0), []), ei = a.useCallback(() => el(!1), []), er = a.useRef(!1), [eu] = a.useState(() => new p.Timeout), eo = a.useRef(null), ed = a.useRef(null), {
    ref: ec,
    ...ef
  } = (0, c.useListContainerProps)(), eh = (0, m.useFocusJumpSection)(), [eC, ep] = a.useState(!1), [em] = a.useState(() => new ea(u, ep, () => {
    var e, t;
    null === (e = eo.current) || void 0 === e || e.calculateState(), null === (t = ed.current) || void 0 === t || t.calculateState()
  })), {
    AnalyticsLocationProvider: eE
  } = (0, _.default)(I.default.GUILDS_LIST), {
    pathname: eg
  } = (0, d.useLocation)(), eI = eg.startsWith(J.Routes.GUILD_DISCOVERY), e_ = eg.startsWith(J.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!er.current) {
      if (0 !== u.size) {
        if (eI) em.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = x.default.getGuildListDimensions();
          em.scrollTo({
            to: e,
            animate: !1
          })
        }
        return er.current = !0, () => eu.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (em.setGuildsTree(u), er.current || 0 === u.size) return;
    let e = v.default.getState().guildId;
    em.scrollToGuild(e, !1);
    let t = null,
      n = v.default.subscribe(e => {
        let {
          guildId: n
        } = e;
        n !== t && (t = n, em.scrollToGuild(t, !1))
      });
    return n
  }, [u, em]), (0, G.default)(em.scrollToGuild);
  let eS = (0, A.useEligibleForGameRecommendations)(),
    eN = u.getRoots(),
    eT = (0, N.default)(),
    eA = et.map(e => (0, l.jsx)(V.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(eE, {
    children: (0, l.jsx)("nav", {
      className: i($.wrapper, s, (0, b.getThemeClass)(r), {
        [$.hidden]: ee
      }),
      "aria-label": q.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: ec,
        ...ef,
        ...eh,
        role: "tree",
        className: $.tree,
        children: [(0, l.jsx)(U.default, {
          ref: eo,
          isVisible: em.isItemVisible,
          onJumpTo: em.handleJumpToGuild,
          className: $.unreadMentionsIndicatorTop,
          barClassName: $.unreadMentionsBar
        }), (0, l.jsxs)(m.AdvancedScrollerNone, {
          className: i({
            [$.scroller]: !0,
            [$.scrolling]: eC
          }),
          ref: em.scrollerRef,
          onScroll: em.handleScroll,
          children: [(0, l.jsx)(k.HomeButton, {}), eT ? (0, l.jsx)(T.default, {}) : null, (0, l.jsx)(F.default, {}), (0, l.jsx)(Y.default, {
            isOnHubVerificationRoute: e_
          }), (0, l.jsx)(P.default, {}), E.map(e => (0, l.jsx)(Q.default, {
            guildId: e
          }, e)), g ? (0, l.jsx)(X.default, {}) : null, !n && eS ? (0, l.jsx)(H.default, {
            ref: em.guildDiscoveryRef,
            selected: eI,
            tooltip: q.default.Messages.GUILD_DISCOVERY_TOOLTIP
          }) : null, (0, l.jsx)(K.default, {}), (0, l.jsx)("div", {
            "aria-label": q.default.Messages.SERVERS,
            children: eN.map(function e(t) {
              switch (t.type) {
                case j.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(Z.default, {
                    folderNode: t,
                    setNodeRef: em.setNodeRef,
                    draggable: !0,
                    sorting: en,
                    onDragStart: es,
                    onDragEnd: ei,
                    renderChildNode: e
                  }, t.id);
                case j.GuildsNodeType.GUILD:
                  return (0, l.jsx)(z.default, {
                    guildNode: t,
                    setRef: em.setNodeRef,
                    draggable: !0,
                    sorting: en,
                    onDragStart: es,
                    onDragEnd: ei
                  }, t.id);
                default:
                  return null
              }
            })
          }), eA, n ? null : (0, l.jsx)(B.default, {
            disableTooltip: f.length > 0,
            lastTargetNode: eN[eN.length - 1]
          }), n || eS ? null : (0, l.jsx)(H.default, {
            ref: em.guildDiscoveryRef,
            selected: eI
          }), (0, l.jsx)(W.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(K.default, {}), (0, l.jsx)(w.default, {})]
          })]
        }), (0, l.jsx)(U.default, {
          reverse: !0,
          ref: ed,
          isVisible: em.isItemVisible,
          onJumpTo: em.handleJumpToGuild,
          className: $.unreadMentionsIndicatorBottom,
          barClassName: $.unreadMentionsBar
        })]
      })
    })
  })
}
var ei = a.memo(function(e) {
  let t = (0, g.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(es, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, C.default)(e, t))