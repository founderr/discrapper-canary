"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("392711"),
  l = n.n(o),
  u = n("920906"),
  d = n("873546"),
  _ = n("442837"),
  c = n("946188"),
  E = n("477690"),
  I = n("481060"),
  T = n("788911"),
  f = n("2052"),
  S = n("607070"),
  h = n("906732"),
  A = n("806966"),
  m = n("28546"),
  N = n("691251"),
  p = n("98528"),
  O = n("551058"),
  C = n("536442"),
  R = n("75145"),
  g = n("197115"),
  L = n("695346"),
  v = n("594174"),
  D = n("695464"),
  M = n("242411"),
  y = n("626135"),
  P = n("111361"),
  U = n("624138"),
  b = n("540780"),
  G = n("543241"),
  w = n("883661"),
  k = n("880949"),
  B = n("784222"),
  V = n("566083"),
  x = n("172800"),
  F = n("149203"),
  H = n("981631"),
  Y = n("957825"),
  j = n("474936"),
  W = n("689938"),
  K = n("995292");
let z = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  Z = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  X = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  Q = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  q = (0, U.cssValueToNumber)(E.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  J = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  $ = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
  ee = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  et = e => e + 2 * ee,
  en = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: s,
      emojiSize: o,
      onEmojiSelect: u,
      searchQuery: d,
      sectionDescriptors: E,
      setCollapsedSections: I,
      getEmojiItemProps: T,
      getEmojiRowProps: S,
      isScrolling: h,
      isUsingKeyboardNavigation: m,
      allowAnimatedEmoji: p,
      channelGuildId: g,
      messageId: L,
      isBurstReaction: v,
      listHeaderClassName: D,
      activeSectionIndex: M,
      upsellGlowOpacity: P,
      enableNitroUpsell: U
    } = e, b = (0, f.useAnalyticsContext)(), j = r.useRef(H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), W = r.useMemo(() => "" !== n ? c.default.convert.toCodePoint(n) : "", [n]), ee = r.useCallback(e => {
      if (!U) return !1;
      let t = E[e],
        n = E[e + 1];
      return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [U, E]), et = r.useCallback(e => {
      if (!U || e >= E.length - 1) return !1;
      let t = E[e],
        n = E[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [U, E]), en = r.useCallback(function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = new Set(t),
        r = t.has(e);
      r ? i.delete(e) : i.add(e), null != n && y.default.track(H.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: b.location,
        tab: Y.ExpressionPickerViewType.EMOJI,
        collapsed: !r,
        guild_id: n.id
      }), I(i)
    }, [b, t, I]), ei = r.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, i = e.type === B.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
      j.current !== H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(j.current), j.current = window.requestAnimationFrame(() => {
        A.EmojiPickerStore.setInspectedExpressionPosition(t, n, N.InspectedExpressionChangeSource.MOUSE_EVENT), A.EmojiPickerStore.setSearchPlaceholder(i), j.current = H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
      })
    }, []), er = (0, _.useStateFromStores)([C.HotspotStore], () => C.HotspotStore.hasHotspot(C.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), es = r.useMemo(() => l().memoize((e, t) => {
      let n = s[e],
        r = E[t.sectionIndex];
      return (0, i.jsx)(x.default, {
        emojiDescriptors: n,
        emojiSize: o,
        surrogateCodePoint: W,
        onInspect: ei,
        onSelect: u,
        getEmojiItemProps: T,
        getEmojiRowProps: S,
        isScrolling: h,
        isUsingKeyboardNavigation: m,
        rowIndex: e,
        allowAnimatedEmoji: p,
        showEmojiFavoriteTooltip: er,
        channelGuildId: g,
        category: r.sectionId,
        selectedItemClassName: K.__invalid_selectedItem,
        messageId: L,
        isBurstReaction: v,
        inNitroLockedSection: r.isNitroLocked
      }, e)
    }), [s, E, o, W, ei, u, T, S, h, m, p, er, g, L, v]);
    r.useEffect(() => () => {
      var e, t;
      return null === (t = es.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [es]);
    let ea = r.useMemo(() => l().memoize(e => {
        let n = E[e];
        if (null == n) return;
        let {
          guild: r,
          categoryId: s,
          type: o,
          sectionId: l
        } = n;
        if (o === F.EmojiCategoryTypes.SEARCH_RESULTS) return;
        let u = o === F.EmojiCategoryTypes.GUILD ? null != r ? (0, i.jsx)(k.default, {
            guild: r,
            height: 16,
            width: 16
          }) : null : null != s ? (0, i.jsx)(w.default, {
            categoryId: s,
            height: 16,
            width: 16
          }) : null,
          d = null == r ? void 0 : r.toString();
        null != s && (d = (0, G.getStringForEmojiCategory)(s, null == r ? void 0 : r.toString()));
        let _ = M === e,
          c = n.isNitroLocked,
          I = U && c && !_,
          T = U && c && _;
        return (0, i.jsx)(O.default, {
          className: a()(K.header, D, {
            [K.inactiveNitroHeader]: I,
            [K.activeNitroHeader]: T
          }),
          icon: u,
          isCollapsed: t.has(l),
          onClick: () => en(l, r),
          children: d
        }, l)
      }), [E, t, en, D, M, U]),
      eo = r.useCallback((e, n) => {
        let r = E[e],
          s = et(e),
          o = ee(e);
        return (0, i.jsx)("div", {
          className: a()(K.categorySection, {
            [K.categorySectionLast]: e === E.length - 1,
            [K.categorySectionCollapsed]: t.has(r.sectionId),
            [K.categorySectionNitroLocked]: U && r.isNitroLocked,
            [K.categorySectionNitroDivider]: s || o
          }),
          children: n
        }, e)
      }, [t, E, U, et, ee]),
      el = r.useCallback(e => {
        let n = E[e];
        return n.sectionId !== F.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || U ? et(e) ? (0, i.jsx)(R.default, {
          glowOpacity: P
        }) : ee(e) ? (0, i.jsx)("div", {
          className: K.nitroBottomDivider
        }) : null : (0, i.jsx)(V.default, {
          className: K.premiumUpsell
        }, "emoji-picker-inline-upsell")
      }, [E, t, P, U, et, ee]),
      eu = r.useCallback(e => {
        let n = E[e];
        return n.sectionId !== F.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || U ? et(e) ? 41 : ee(e) ? 33 : 0 : $
      }, [E, t, U, et, ee]),
      ed = r.useCallback(e => {
        var n;
        return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || et(e) || ee(e) ? 0 : J
      }, [t, E, et, ee]),
      e_ = r.useMemo(() => ["" !== d ? Q : z, Z, X, 0], [d]);
    return {
      listPadding: e_,
      renderRow: es,
      renderSection: eo,
      renderSectionHeader: ea,
      renderSectionFooter: el,
      sectionMarginBottom: ed,
      sectionHeaderHeight: r.useCallback(e => E[e].type === F.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : q, [E]),
      sectionFooterHeight: eu
    }
  },
  ei = r.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: s,
      emojiSize: a,
      onEmojiSelect: o,
      sectionDescriptors: l,
      rowCountBySection: c,
      collapsedSections: E,
      setCollapsedSections: N,
      getEmojiItemProps: O,
      getEmojiRowProps: C,
      rowCount: R,
      isUsingKeyboardNavigation: U,
      channelGuildId: G,
      messageId: w,
      isBurstReaction: k,
      listHeaderClassName: B
    } = e, V = r.useRef(!1), x = A.EmojiPickerStore.useStore(e => e.activeCategoryIndex), F = (0, m.useExpressionPickerStore)(e => e.searchQuery), Y = L.AnimateEmoji.useSetting(), z = (0, _.useStateFromStores)([v.default], () => v.default.getCurrentUser()), Z = (0, P.isPremium)(z), {
      location: X
    } = (0, f.useAnalyticsContext)(), {
      analyticsLocations: Q
    } = (0, h.default)(), [q, J] = r.useState(0), [$, ee] = r.useState(!1), [ei, er] = r.useState(0), es = (0, _.useStateFromStores)([S.default], () => S.default.useReducedMotion), ea = (0, u.useSpring)({
      transform: $ ? "translateY(0%)" : "translateY(120%)",
      opacity: $ ? 1 : 0,
      config: {
        tension: 120,
        friction: 14
      },
      immediate: es
    }), eo = l.some(e => e.isNitroLocked), {
      enabled: el
    } = b.default.useExperiment({
      location: "Emoji Picker List"
    }, {
      autoTrackExposure: eo
    }), {
      listPadding: eu,
      renderRow: ed,
      renderSection: e_,
      renderSectionHeader: ec,
      renderSectionFooter: eE,
      sectionMarginBottom: eI,
      sectionHeaderHeight: eT,
      sectionFooterHeight: ef
    } = en({
      collapsedSections: E,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: a,
      onEmojiSelect: o,
      searchQuery: F,
      sectionDescriptors: l,
      setCollapsedSections: N,
      getEmojiItemProps: O,
      getEmojiRowProps: C,
      isScrolling: V,
      isUsingKeyboardNavigation: U,
      allowAnimatedEmoji: Y,
      channelGuildId: G,
      messageId: w,
      isBurstReaction: k,
      listHeaderClassName: B,
      activeSectionIndex: q,
      upsellGlowOpacity: ei,
      enableNitroUpsell: el
    }), eS = (0, p.useShowUpsellForScrollPosition)({
      listRef: s,
      searchQuery: F,
      setShowUpsell: ee,
      setUpsellGlowOpacity: er,
      emojiSectionDescriptors: l
    }), eh = (0, p.useSynchronizedActiveCategoryIndexForScrollPosition)({
      activeCategoryIndex: x,
      isScrolling: V,
      listRef: s,
      onActiveCategoryIndexChange: e => {
        J(e), "" === F && A.EmojiPickerStore.setActiveCategoryIndex(e)
      },
      scrollOffset: 0,
      searchQuery: F,
      disableForSearch: !1
    });
    (0, p.useSynchronizedScrollPositionForActiveCategoryIndex)({
      searchQuery: F,
      activeCategoryIndex: x,
      listRef: s
    });
    let eA = r.useCallback(e => {
        el && eS(e), eh(e)
      }, [eS, eh, el]),
      em = l.length > 0;
    return r.useEffect(() => {
      $ && y.default.track(H.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: j.PremiumUpsellTypes.EMOJI_PICKER_FLOATING_UPSELL,
        location: X,
        location_stack: Q
      })
    }, [X, Q, $]), r.useEffect(() => {
      "" !== F && (er(0), ee(!1))
    }, [F]), (0, i.jsxs)("div", {
      className: K.listWrapper,
      children: [em ? (0, i.jsx)(D.default, {
        role: "none presentation",
        className: K.list,
        listPadding: eu,
        onScroll: eA,
        renderRow: ed,
        renderSection: e_,
        renderSectionHeader: ec,
        renderSectionFooter: eE,
        rowCount: R,
        rowCountBySection: c,
        rowHeight: et(a),
        sectionHeaderHeight: eT,
        sectionMarginBottom: eI,
        sectionFooterHeight: ef,
        stickyHeaders: !0,
        ref: s
      }) : (0, i.jsx)(T.default, {
        message: W.default.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: K.noSearchResultsContainer
      }), !el || Z || d.isMobile ? null : (0, i.jsxs)(u.animated.div, {
        style: {
          ...ea,
          opacity: ea.opacity
        },
        className: K.upsellContainer,
        children: [(0, i.jsx)(M.default, {
          width: 16,
          height: 16,
          className: K.upsellLock
        }), (0, i.jsx)(I.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          className: K.upsellText,
          children: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
        }), (0, i.jsx)(g.default, {
          className: K.upsellButton,
          size: I.ButtonSizes.TINY,
          shinyButtonClassName: K.upsellButton,
          subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2,
          buttonText: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
          premiumModalAnalyticsLocation: {
            section: H.AnalyticsSections.EMOJI_PICKER_FLOATING_UPSELL
          },
          tabIndex: $ ? 0 : -1
        })]
      })]
    })
  });
t.default = ei