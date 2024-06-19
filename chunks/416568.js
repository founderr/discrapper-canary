n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(392711),
  o = n.n(a),
  u = n(699581),
  c = n(266067),
  d = n(91192),
  h = n(374470),
  g = n(442837),
  p = n(902704),
  m = n(846519),
  C = n(481060),
  E = n(925549),
  f = n(209613),
  _ = n(100527),
  I = n(906732),
  N = n(358221),
  Z = n(963202),
  S = n(353093),
  x = n(706590),
  T = n(940777),
  L = n(41776),
  v = n(905423),
  A = n(802718),
  M = n(796974),
  R = n(271383),
  O = n(430824),
  P = n(771845),
  j = n(358085),
  b = n(709054),
  D = n(792125),
  y = n(727258),
  U = n(605951),
  G = n(474109),
  w = n(741616),
  k = n(187835),
  B = n(162050),
  V = n(118122),
  H = n(193154),
  F = n(602147),
  W = n(773182),
  Y = n(222059),
  z = n(751277),
  K = n(65721),
  q = n(843343),
  Q = n(654142),
  J = n(695301),
  X = n(836697),
  $ = n(921230),
  ee = n(981631),
  et = n(689938),
  en = n(764945);

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ei = 56,
  es = (0, j.isWindows)() ? 4 : (0, j.isMac)() ? 0 : 12,
  er = ei - 16,
  ea = es + 10;
class eo {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, l, s) {
    el(this, "guildsTree", void 0), el(this, "setScrolling", void 0), el(this, "onScroll", void 0), el(this, "onScrollStateChanged", void 0), el(this, "scrollToDiscovery", void 0), el(this, "scrollerRef", void 0), el(this, "guildDiscoveryRef", void 0), el(this, "nodeRefs", void 0), el(this, "timeout", void 0), el(this, "isScrolling", void 0), el(this, "isNearBottom", void 0), el(this, "scrollToGuild", void 0), el(this, "handleJumpToGuild", void 0), el(this, "scrollTo", void 0), el(this, "isItemVisible", void 0), el(this, "handleScroll", void 0), el(this, "_handleScrollDebounced", void 0), el(this, "_handleScrollThrottled", void 0), el(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.onScrollStateChanged = l, this.scrollToDiscovery = s, this.scrollerRef = i.createRef(), this.guildDiscoveryRef = i.createRef(), this.nodeRefs = {}, this.timeout = new m.V7, this.isScrolling = !1, this.isNearBottom = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith(ee.Z5c.GUILD_DISCOVERY) || e === ee.x8Z.SERVER_DISCOVERY_BADGE || e === ee.x8Z.E3_SERVER_DISCOVERY_BADGE) {
        if (this.scrollToDiscovery) {
          let e = (0, u.findDOMNode)(this.guildDiscoveryRef.current);
          (0, h.k)(e, HTMLElement) ? n.scrollIntoViewNode({
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
      null != l && (0, h.k)(l) ? n.scrollIntoViewNode({
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
      let i = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (i < 0) return !1;
      let s = ei * i + ea;
      !t && (s += er);
      let r = l.getScrollerState();
      return !t && !!(s >= r.scrollTop) || !!t && !!(s + ei <= r.scrollTop + r.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled()
    }, this._handleScrollDebounced = o().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      E.Z.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this._handleScrollThrottled = o().throttle(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        offsetHeight: l
      } = e.getScrollerState(), i = t + l >= n - 24;
      i !== this.isNearBottom && (this.isNearBottom = i, this.onScrollStateChanged({
        isNearBottom: i
      }))
    }, 100), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }
  }
}

function eu(e) {
  let {
    disableAppDownload: t = j.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: a
  } = e, [o] = (0, g.Wu)([P.ZP], () => {
    let e = P.ZP.getGuildsTree();
    return [e, e.version]
  }), u = (0, g.e7)([L.Z], () => L.Z.lurkingGuildIds()), h = i.useMemo(() => n ? [] : u, [u, n]), p = (0, g.Wu)([O.Z, R.ZP], () => b.default.keys(O.Z.getGuilds()).filter(e => R.ZP.isCurrentUserGuest(e))), E = h.concat(p), f = (0, g.e7)([N.Z], () => N.Z.isFullscreenInContext()), el = (0, g.e7)([O.Z], () => O.Z.getGeoRestrictedGuilds()), [ei, es] = i.useState(!1), er = i.useCallback(() => es(!0), []), ea = i.useCallback(() => es(!1), []), eu = i.useRef(!1), [ec] = i.useState(() => new m.V7), ed = i.useRef(null), eh = i.useRef(null), [eg, ep] = i.useState(!1), {
    guilds: em,
    defaultGameId: eC
  } = (0, Z.C3)({
    location: "guilds_bar",
    includeConverted: !0
  }), eE = em.length > 0, ef = i.useMemo(() => em.filter(e => !(0, S.EJ)(e)), [em]).length > 0, {
    clanDiscoveryEnabled: e_,
    defaultGameId: eI
  } = (0, Z.nk)("guilds_bar"), eN = i.useMemo(() => ef ? W.OO : e_ ? W.KF : void 0, [e_, ef]), eZ = i.useMemo(() => ef ? eC : e_ ? eI : void 0, [eC, e_, ef, eI]), eS = null != eN, ex = !eS, {
    ref: eT,
    ...eL
  } = (0, d.OP)(), ev = (0, C.useFocusJumpSection)(), [eA, eM] = i.useState(!1), eR = i.useMemo(() => new eo(o, eM, () => {
    var e, t;
    null === (e = ed.current) || void 0 === e || e.calculateState(), null === (t = eh.current) || void 0 === t || t.calculateState()
  }, e => {
    let {
      isNearBottom: t
    } = e;
    ep(t)
  }, ex), [o, ex]), {
    analyticsLocations: eO
  } = (0, I.ZP)(_.Z.GUILDS_LIST), {
    pathname: eP
  } = (0, c.TH)(), ej = eP.startsWith(ee.Z5c.GUILD_DISCOVERY), eb = eP.startsWith(ee.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  i.useLayoutEffect(() => {
    if (!eu.current) {
      if (0 !== o.size) {
        if (ej) eR.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = M.Z.getGuildListDimensions();
          eR.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eu.current = !0, () => ec.stop()
      }
    }
  }, []), i.useEffect(() => {
    if (eR.setGuildsTree(o), eu.current || 0 === o.size) return;
    let e = v.Z.getState().guildId;
    eR.scrollToGuild(e, !1);
    let t = null;
    return v.Z.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eR.scrollToGuild(t, !1))
    })
  }, [o, eR]);
  let eD = i.useCallback(() => {
    eR.scrollTo({
      to: 0,
      animate: !1
    })
  }, [eR]);
  (0, U.Z)(eR.scrollToGuild);
  let ey = o.getRoots(),
    eU = (0, x.Z)(),
    eG = (0, A.U)(),
    ew = el.map(e => (0, l.jsx)(H.Z, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(I.Gt, {
    value: eO,
    children: (0, l.jsx)("nav", {
      className: r()(en.wrapper, s, (0, D.Q)(a), {
        [en.hidden]: f
      }),
      "aria-label": et.Z.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: eT,
        ...eL,
        ...ev,
        role: "tree",
        className: en.tree,
        children: [(0, l.jsx)(G.Z, {
          ref: ed,
          isVisible: eR.isItemVisible,
          onJumpTo: eR.handleJumpToGuild,
          className: en.unreadMentionsIndicatorTop,
          barClassName: en.unreadMentionsBar
        }), (0, l.jsxs)(C.AdvancedScrollerNone, {
          className: r()({
            [en.scroller]: !0,
            [en.scrolling]: eA
          }),
          ref: eR.scrollerRef,
          onScroll: eR.handleScroll,
          children: [(0, l.jsx)(Y.u, {}), eU ? (0, l.jsx)(T.Z, {}) : null, (0, l.jsx)(B.Z, {}), (0, l.jsx)(z.Z, {
            isOnHubVerificationRoute: eb
          }), (0, l.jsx)(w.Z, {}), eG, E.map(e => (0, l.jsx)($.Z, {
            guildId: e
          }, e)), (0, l.jsx)(X.Z, {
            onActivate: eD
          }), (0, l.jsx)(K.Z, {}), (0, l.jsx)("div", {
            "aria-label": et.Z.Messages.SERVERS,
            children: ey.map(function e(t) {
              switch (t.type) {
                case y.eD.FOLDER:
                  return (0, l.jsx)(Q.Z, {
                    folderNode: t,
                    setNodeRef: eR.setNodeRef,
                    draggable: !0,
                    sorting: ei,
                    onDragStart: er,
                    onDragEnd: ea,
                    renderChildNode: e
                  }, t.id);
                case y.eD.GUILD:
                  return (0, l.jsx)(J.Z, {
                    guildNode: t,
                    setRef: eR.setNodeRef,
                    draggable: !0,
                    sorting: ei,
                    onDragStart: er,
                    onDragEnd: ea
                  }, t.id);
                default:
                  return null
              }
            })
          }), ew, n ? null : (0, l.jsx)(V.Z, {
            disableTooltip: h.length > 0,
            lastTargetNode: ey[ey.length - 1]
          }), n || eE || e_ ? null : (0, l.jsx)(F.Z, {
            ref: eR.guildDiscoveryRef,
            selected: ej
          }), (0, l.jsx)(q.Z, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(K.Z, {}), (0, l.jsx)(k.Z, {})]
          })]
        }), n || null == eN || null == eZ ? !n && eE ? (0, l.jsx)(W.LW, {
          hideGradient: eg,
          children: (0, l.jsx)(F.Z, {
            ref: eR.guildDiscoveryRef,
            selected: ej,
            className: en.fixedDiscoveryIcon
          })
        }) : null : (0, l.jsx)(W.LW, {
          hideGradient: eg,
          children: (0, l.jsx)(eN, {
            defaultGameId: eZ,
            children: e => {
              let {
                onClick: t
              } = e;
              return (0, l.jsx)(F.Z, {
                ref: eR.guildDiscoveryRef,
                selected: ej,
                className: en.fixedDiscoveryIcon,
                onClick: t
              })
            }
          })
        }), (0, l.jsx)(G.Z, {
          reverse: !0,
          ref: eh,
          isVisible: eR.isItemVisible,
          onJumpTo: eR.handleJumpToGuild,
          className: r()(en.unreadMentionsIndicatorBottom, {
            [en.unreadMentionsFixedFooter]: !n && eS
          }),
          barClassName: en.unreadMentionsBar
        })]
      })
    })
  })
}
t.Z = i.memo(function(e) {
  let t = (0, f.Z)("guildsnav");
  return (0, l.jsx)(d.bG, {
    navigator: t,
    children: (0, l.jsx)(eu, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, p.Z)(e, t))