"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(920906),
  _ = n(873546),
  c = n(442837),
  d = n(946188),
  E = n(477690),
  I = n(481060),
  T = n(788911),
  h = n(2052),
  f = n(607070),
  S = n(906732),
  A = n(806966),
  N = n(28546),
  m = n(691251),
  O = n(98528),
  R = n(551058),
  p = n(536442),
  g = n(104494),
  C = n(639119),
  v = n(75145),
  L = n(197115),
  D = n(631771),
  M = n(695346),
  P = n(594174),
  y = n(672752),
  U = n(695464),
  b = n(626135),
  G = n(111361),
  w = n(74538),
  B = n(624138),
  x = n(543241),
  k = n(883661),
  V = n(880949),
  Z = n(784222),
  H = n(172800),
  F = n(149203),
  Y = n(981631),
  j = n(957825),
  W = n(474936),
  K = n(689938),
  z = n(935879);
let q = (0, B.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  X = (0, B.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  Q = (0, B.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  J = (0, B.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  $ = (0, B.Mg)(E.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  ee = (0, B.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  et = (0, B.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  en = e => e + 2 * et,
  ei = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: s,
      emojiSize: a,
      onEmojiSelect: u,
      searchQuery: _,
      sectionDescriptors: E,
      setCollapsedSections: I,
      getEmojiItemProps: T,
      getEmojiRowProps: f,
      isScrolling: S,
      isUsingKeyboardNavigation: N,
      allowAnimatedEmoji: O,
      channelGuildId: g,
      messageId: C,
      isBurstReaction: L,
      listHeaderClassName: D,
      activeSectionIndex: M,
      upsellGlowOpacity: P
    } = e, y = (0, h.O)(), U = r.useRef(Y.xAR), G = r.useMemo(() => "" !== n ? d.Z.convert.toCodePoint(n) : "", [n]), w = r.useCallback(e => {
      let t = E[e],
        n = E[e + 1];
      return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [E]), B = r.useCallback(e => {
      if (e >= E.length - 1) return !1;
      let t = E[e],
        n = E[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [E]), W = r.useCallback(function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = new Set(t),
        r = t.has(e);
      r ? i.delete(e) : i.add(e), null != n && b.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: y.location,
        tab: j.X1.EMOJI,
        collapsed: !r,
        guild_id: n.id
      }), I(i)
    }, [y, t, I]), K = r.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, i = e.type === Z.ld.EMOJI ? e.emoji.allNamesString : e.name;
      U.current !== Y.xAR && window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(() => {
        A.kJ.setInspectedExpressionPosition(t, n, m.u.MOUSE_EVENT), A.kJ.setSearchPlaceholder(i), U.current = Y.xAR
      })
    }, []), et = (0, c.e7)([p.qc], () => p.qc.hasHotspot(p.v6.FAVORITE_EMOJI_TOOLTIP), []), en = r.useMemo(() => l().memoize((e, t) => {
      let n = s[e],
        r = E[t.sectionIndex];
      return (0, i.jsx)(H.Z, {
        emojiDescriptors: n,
        emojiSize: a,
        surrogateCodePoint: G,
        onInspect: K,
        onSelect: u,
        getEmojiItemProps: T,
        getEmojiRowProps: f,
        isScrolling: S,
        isUsingKeyboardNavigation: N,
        rowIndex: e,
        allowAnimatedEmoji: O,
        showEmojiFavoriteTooltip: et,
        channelGuildId: g,
        category: r.sectionId,
        selectedItemClassName: z.__invalid_selectedItem,
        messageId: C,
        isBurstReaction: L,
        inNitroLockedSection: r.isNitroLocked
      }, e)
    }), [s, E, a, G, K, u, T, f, S, N, O, et, g, C, L]);
    r.useEffect(() => () => {
      var e, t;
      return null === (t = en.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [en]);
    let ei = r.useMemo(() => l().memoize(e => {
        let n = E[e];
        if (null == n) return;
        let {
          guild: r,
          categoryId: s,
          type: a,
          sectionId: l
        } = n;
        if (a === F.En.SEARCH_RESULTS) return;
        let u = a === F.En.GUILD ? null != r ? (0, i.jsx)(V.Z, {
            guild: r,
            height: 16,
            width: 16
          }) : null : null != s ? (0, i.jsx)(k.Z, {
            categoryId: s,
            height: 16,
            width: 16,
            size: "custom"
          }) : null,
          _ = null == r ? void 0 : r.toString();
        null != s && (_ = (0, x.Y1)(s, null == r ? void 0 : r.toString()));
        let c = M === e,
          d = n.isNitroLocked,
          I = d && !c,
          T = d && c;
        return (0, i.jsx)(R.Z, {
          className: o()(z.header, D, {
            [z.inactiveNitroHeader]: I,
            [z.activeNitroHeader]: T
          }),
          icon: u,
          isCollapsed: t.has(l),
          onClick: () => W(l, r),
          children: _
        }, l)
      }), [E, t, W, D, M]),
      er = r.useCallback((e, n) => {
        let r = E[e],
          s = B(e),
          a = w(e);
        return (0, i.jsx)("div", {
          className: o()(z.categorySection, {
            [z.categorySectionLast]: e === E.length - 1,
            [z.categorySectionCollapsed]: t.has(r.sectionId),
            [z.categorySectionNitroLocked]: r.isNitroLocked,
            [z.categorySectionNitroDivider]: s || a
          }),
          children: n
        }, e)
      }, [t, E, B, w]),
      es = r.useCallback(e => B(e) ? (0, i.jsx)(v.Z, {
        glowOpacity: P
      }) : w(e) ? (0, i.jsx)("div", {
        className: z.nitroBottomDivider
      }) : null, [P, B, w]),
      eo = r.useCallback(e => B(e) ? 41 : w(e) ? 33 : 0, [B, w]),
      ea = r.useCallback(e => {
        var n;
        return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || B(e) || w(e) ? 0 : ee
      }, [t, E, B, w]),
      el = r.useMemo(() => ["" !== _ ? J : q, X, Q, 0], [_]);
    return {
      listPadding: el,
      renderRow: en,
      renderSection: er,
      renderSectionHeader: ei,
      renderSectionFooter: es,
      sectionMarginBottom: ea,
      sectionHeaderHeight: r.useCallback(e => E[e].type === F.En.SEARCH_RESULTS ? 0 : $, [E]),
      sectionFooterHeight: eo
    }
  },
  er = r.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: s,
      emojiSize: o,
      onEmojiSelect: a,
      setUpsellConfigs: l,
      sectionDescriptors: d,
      rowCountBySection: E,
      collapsedSections: m,
      setCollapsedSections: R,
      getEmojiItemProps: p,
      getEmojiRowProps: v,
      rowCount: B,
      isUsingKeyboardNavigation: x,
      channelGuildId: k,
      messageId: V,
      isBurstReaction: H,
      listHeaderClassName: F
    } = e, j = r.useRef(!1), q = A.kJ.useStore(e => e.activeCategoryIndex), X = (0, N.Iu)(e => e.searchQuery), Q = M.Yk.useSetting(), J = (0, c.e7)([P.default], () => P.default.getCurrentUser()), $ = (0, G.I5)(J), {
      location: ee
    } = (0, h.O)(), {
      analyticsLocations: et
    } = (0, S.ZP)(), [er, es] = r.useState(0), [eo, ea] = r.useState(!1), [el, eu] = r.useState(0), e_ = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), ec = (0, u.useSpring)({
      transform: eo ? "translateY(0%)" : "translateY(120%)",
      opacity: eo ? 1 : 0,
      config: {
        tension: 120,
        friction: 14
      },
      immediate: e_
    }), ed = (0, C.N)(), eE = (0, g.Ng)(), eI = eo && !$ && !_.tq && !(null != ed || null != eE), {
      enabled: eT
    } = D.Gi.useExperiment({
      location: "Premium Emoji Roadblock"
    }, {
      autoTrackExposure: eI,
      disable: !eI
    }), {
      listPadding: eh,
      renderRow: ef,
      renderSection: eS,
      renderSectionHeader: eA,
      renderSectionFooter: eN,
      sectionMarginBottom: em,
      sectionHeaderHeight: eO,
      sectionFooterHeight: eR
    } = ei({
      collapsedSections: m,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: o,
      onEmojiSelect: a,
      searchQuery: X,
      sectionDescriptors: d,
      setCollapsedSections: R,
      getEmojiItemProps: p,
      getEmojiRowProps: v,
      isScrolling: j,
      isUsingKeyboardNavigation: x,
      allowAnimatedEmoji: Q,
      channelGuildId: k,
      messageId: V,
      isBurstReaction: H,
      listHeaderClassName: F,
      activeSectionIndex: er,
      upsellGlowOpacity: el
    }), ep = (0, O.Uf)({
      listRef: s,
      searchQuery: X,
      setShowUpsell: ea,
      setUpsellGlowOpacity: eu,
      emojiSectionDescriptors: d
    }), eg = (0, O.Qs)({
      activeCategoryIndex: q,
      isScrolling: j,
      listRef: s,
      onActiveCategoryIndexChange: e => {
        es(e), "" === X && A.kJ.setActiveCategoryIndex(e)
      },
      scrollOffset: 0,
      searchQuery: X,
      disableForSearch: !1
    });
    (0, O.Xs)({
      searchQuery: X,
      activeCategoryIndex: q,
      listRef: s
    });
    let eC = r.useCallback(e => {
        ep(e), eg(e)
      }, [ep, eg]),
      ev = d.length > 0;
    return r.useEffect(() => {
      eo && b.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
        type: W.cd.EMOJI_PICKER_FLOATING_UPSELL,
        location: ee,
        location_stack: et
      })
    }, [ee, et, eo]), r.useEffect(() => {
      "" !== X && (eu(0), ea(!1))
    }, [X]), (0, i.jsxs)("div", {
      className: z.listWrapper,
      children: [ev ? (0, i.jsx)(U.Z, {
        role: "none presentation",
        className: z.list,
        listPadding: eh,
        onScroll: eC,
        renderRow: ef,
        renderSection: eS,
        renderSectionHeader: eA,
        renderSectionFooter: eN,
        rowCount: B,
        rowCountBySection: E,
        rowHeight: en(o),
        sectionHeaderHeight: eO,
        sectionMarginBottom: em,
        sectionFooterHeight: eR,
        stickyHeaders: !0,
        ref: s
      }) : (0, i.jsx)(T.Z, {
        message: K.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: z.noSearchResultsContainer
      }), $ || _.tq ? null : (0, i.jsxs)(u.animated.div, {
        style: {
          ...ec,
          opacity: ec.opacity
        },
        className: z.upsellContainer,
        children: [(0, i.jsx)(I.NitroWheelIcon, {
          size: "md",
          color: y.JX.PREMIUM_TIER_2
        }), (0, i.jsx)(I.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          className: z.upsellText,
          children: function() {
            if (!eT) return K.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
            {
              let e = (0, w.Px)(W.p9.TIER_2);
              return K.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
                nitroTierName: e,
                onClick: () => {
                  l({
                    type: Z.Bg.PREMIUM,
                    emojiDescriptor: void 0
                  })
                }
              })
            }
          }()
        }), (0, i.jsx)(L.Z, {
          className: z.upsellButton,
          size: I.ButtonSizes.TINY,
          shinyButtonClassName: z.upsellButton,
          subscriptionTier: W.Si.TIER_2,
          buttonText: K.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
          premiumModalAnalyticsLocation: {
            section: Y.jXE.EMOJI_PICKER_FLOATING_UPSELL
          },
          tabIndex: eo ? 0 : -1
        })]
      })]
    })
  });
t.Z = er