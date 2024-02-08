"use strict";
n.r(t), n.d(t, {
  default: function() {
    return z
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("917351"),
  o = n.n(r),
  u = n("446674"),
  d = n("895547"),
  c = n("769846"),
  f = n("96386"),
  p = n("997289"),
  m = n("986632"),
  h = n("538282"),
  E = n("246511"),
  S = n("45961"),
  g = n("515059"),
  C = n("139321"),
  T = n("845579"),
  v = n("124299"),
  I = n("599110"),
  _ = n("159885"),
  y = n("788506"),
  A = n("675280"),
  N = n("917764"),
  x = n("83017"),
  O = n("232786"),
  R = n("842126"),
  M = n("115279"),
  L = n("49111"),
  P = n("13030"),
  b = n("782340"),
  j = n("843646");
let U = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  D = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  k = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  w = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  F = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  G = (0, _.cssValueToNumber)(c.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  B = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  H = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
  V = (0, _.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  K = e => e + 2 * V,
  W = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: a,
      emojiSize: r,
      onEmojiSelect: c,
      searchQuery: f,
      sectionDescriptors: h,
      setCollapsedSections: S,
      getEmojiItemProps: T,
      getEmojiRowProps: v,
      isScrolling: _,
      isUsingKeyboardNavigation: b,
      allowAnimatedEmoji: V,
      channelGuildId: K,
      messageId: W,
      isBurstReaction: Y,
      listHeaderClassName: z
    } = e, J = (0, p.useAnalyticsContext)(), q = i.useRef(L.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), Z = i.useMemo(() => "" !== n ? d.default.convert.toCodePoint(n) : "", [n]), Q = i.useCallback(function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        l = new Set(t),
        i = t.has(e);
      i ? l.delete(e) : l.add(e), null != n && I.default.track(L.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: J.location,
        tab: P.ExpressionPickerViewType.EMOJI,
        collapsed: !i,
        guild_id: n.id
      }), S(l)
    }, [J, t, S]), X = i.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, l = e.type === x.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
      q.current !== L.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(q.current), q.current = window.requestAnimationFrame(() => {
        m.EmojiPickerStore.setInspectedExpressionPosition(t, n, E.InspectedExpressionChangeSource.MOUSE_EVENT), m.EmojiPickerStore.setSearchPlaceholder(l), q.current = L.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
      })
    }, []), $ = (0, u.useStateFromStores)([C.HotspotStore], () => C.HotspotStore.hasHotspot(C.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), ee = i.useMemo(() => o.memoize((e, t) => {
      let n = a[e],
        i = h[t.sectionIndex];
      return (0, l.jsx)(R.default, {
        emojiDescriptors: n,
        emojiSize: r,
        surrogateCodePoint: Z,
        onInspect: X,
        onSelect: c,
        getEmojiItemProps: T,
        getEmojiRowProps: v,
        isScrolling: _,
        isUsingKeyboardNavigation: b,
        rowIndex: e,
        allowAnimatedEmoji: V,
        showEmojiFavoriteTooltip: $,
        channelGuildId: K,
        category: i.sectionId,
        selectedItemClassName: j.selectedItem,
        messageId: W,
        isBurstReaction: Y
      }, e)
    }), [a, h, r, Z, X, c, T, v, _, b, V, $, K, W, Y]);
    i.useEffect(() => () => {
      var e, t;
      return null === (t = ee.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [ee]);
    let et = i.useMemo(() => o.memoize(e => {
        let n = h[e];
        if (null == n) return;
        let {
          guild: i,
          categoryId: a,
          type: r,
          sectionId: o
        } = n;
        if (r === M.EmojiCategoryTypes.SEARCH_RESULTS) return;
        let u = r === M.EmojiCategoryTypes.GUILD ? null != i ? (0, l.jsx)(N.default, {
            guild: i,
            height: 16,
            width: 16
          }) : null : null != a ? (0, l.jsx)(A.default, {
            categoryId: a,
            height: 16,
            width: 16
          }) : null,
          d = null == i ? void 0 : i.toString();
        return null != a && (d = (0, y.getStringForEmojiCategory)(a, null == i ? void 0 : i.toString())), (0, l.jsx)(g.default, {
          className: s(j.header, z),
          icon: u,
          isCollapsed: t.has(o),
          onClick: () => Q(o, i),
          children: d
        }, o)
      }), [h, t, Q, z]),
      en = i.useCallback((e, n) => {
        let i = h[e];
        if (i.type === M.EmojiCategoryTypes.GUILD) {
          let a = t.has(i.sectionId);
          return (0, l.jsx)("div", {
            className: s(j.categorySection, {
              [j.categorySectionLast]: e === h.length - 1,
              [j.categorySectionCollapsed]: a
            }),
            children: n
          })
        }
        return (0, l.jsx)("div", {
          className: s(j.categorySection, {
            [j.categorySectionLast]: e === h.length - 1,
            [j.categorySectionCollapsed]: t.has(i.sectionId)
          }),
          children: n
        }, e)
      }, [t, h]),
      el = i.useCallback(e => {
        let n = h[e];
        return n.sectionId !== M.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) ? null : (0, l.jsx)(O.default, {
          className: j.premiumUpsell
        }, "emoji-picker-inline-upsell")
      }, [h, t]),
      ei = i.useCallback(e => {
        let n = h[e];
        return n.sectionId !== M.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) ? 0 : H
      }, [h, t]),
      ea = i.useCallback(e => {
        var n;
        return e === h.length - 1 || t.has(null === (n = h[e]) || void 0 === n ? void 0 : n.sectionId) ? 0 : B
      }, [t, h]),
      es = i.useMemo(() => ["" !== f ? F : U, D, k, w], [f]),
      er = i.useCallback(e => {
        let t = h[e];
        return t.type === M.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : G
      }, [h]);
    return {
      listPadding: es,
      renderRow: ee,
      renderSection: en,
      renderSectionHeader: et,
      renderSectionFooter: el,
      sectionMarginBottom: ea,
      sectionHeaderHeight: er,
      sectionFooterHeight: ei
    }
  },
  Y = i.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: n,
      emojiListRef: a,
      emojiSize: s,
      onEmojiSelect: r,
      sectionDescriptors: o,
      rowCountBySection: u,
      collapsedSections: d,
      setCollapsedSections: c,
      getEmojiItemProps: p,
      getEmojiRowProps: E,
      rowCount: g,
      isUsingKeyboardNavigation: C,
      channelGuildId: I,
      messageId: _,
      isBurstReaction: y,
      listHeaderClassName: A
    } = e, N = i.useRef(!1), x = m.EmojiPickerStore.useStore(e => e.activeCategoryIndex), O = (0, h.useExpressionPickerStore)(e => e.searchQuery), R = T.AnimateEmoji.useSetting(), {
      listPadding: M,
      renderRow: L,
      renderSection: P,
      renderSectionHeader: U,
      renderSectionFooter: D,
      sectionMarginBottom: k,
      sectionHeaderHeight: w,
      sectionFooterHeight: F
    } = W({
      collapsedSections: d,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: s,
      onEmojiSelect: r,
      searchQuery: O,
      sectionDescriptors: o,
      setCollapsedSections: c,
      getEmojiItemProps: p,
      getEmojiRowProps: E,
      isScrolling: N,
      isUsingKeyboardNavigation: C,
      allowAnimatedEmoji: R,
      channelGuildId: I,
      messageId: _,
      isBurstReaction: y,
      listHeaderClassName: A
    }), G = (0, S.useSynchronizedActiveCategoryIndexForScrollPosition)({
      activeCategoryIndex: x,
      isScrolling: N,
      listRef: a,
      onActiveCategoryIndexChange: m.EmojiPickerStore.setActiveCategoryIndex,
      scrollOffset: 20,
      searchQuery: O
    });
    (0, S.useSynchronizedScrollPositionForActiveCategoryIndex)({
      searchQuery: O,
      activeCategoryIndex: x,
      listRef: a
    });
    let B = o.length > 0;
    return (0, l.jsx)("div", {
      className: j.listWrapper,
      children: B ? (0, l.jsx)(v.default, {
        role: "none presentation",
        className: j.list,
        listPadding: M,
        onScroll: G,
        renderRow: L,
        renderSection: P,
        renderSectionHeader: U,
        renderSectionFooter: D,
        rowCount: g,
        rowCountBySection: u,
        rowHeight: K(s),
        sectionHeaderHeight: w,
        sectionMarginBottom: k,
        sectionFooterHeight: F,
        stickyHeaders: !0,
        ref: a
      }) : (0, l.jsx)(f.default, {
        message: b.default.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: j.noSearchResultsContainer
      })
    })
  });
var z = Y