"use strict";
i.r(t), i.d(t, {
  default: function() {
    return W
  }
}), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  r = i.n(s),
  a = i("917351"),
  o = i.n(a),
  u = i("446674"),
  c = i("895547"),
  d = i("769846"),
  f = i("96386"),
  E = i("997289"),
  m = i("986632"),
  I = i("538282"),
  p = i("246511"),
  g = i("45961"),
  _ = i("515059"),
  S = i("139321"),
  h = i("845579"),
  C = i("124299"),
  T = i("599110"),
  N = i("159885"),
  v = i("788506"),
  A = i("675280"),
  y = i("917764"),
  R = i("83017"),
  j = i("232786"),
  O = i("842126"),
  M = i("115279"),
  x = i("49111"),
  L = i("13030"),
  P = i("782340"),
  D = i("843646");
let b = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  U = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  w = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  G = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  k = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  V = (0, N.cssValueToNumber)(d.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  F = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  H = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
  K = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  B = e => e + 2 * K,
  J = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: i,
      emojiGrid: s,
      emojiSize: a,
      onEmojiSelect: d,
      searchQuery: f,
      sectionDescriptors: I,
      setCollapsedSections: g,
      getEmojiItemProps: h,
      getEmojiRowProps: C,
      isScrolling: N,
      isUsingKeyboardNavigation: P,
      allowAnimatedEmoji: K,
      channelGuildId: B,
      messageId: J,
      isBurstReaction: z,
      listHeaderClassName: W
    } = e, Z = (0, E.useAnalyticsContext)(), Y = l.useRef(x.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), Q = l.useMemo(() => "" !== i ? c.default.convert.toCodePoint(i) : "", [i]), X = l.useCallback(function(e) {
      let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = new Set(t),
        l = t.has(e);
      l ? n.delete(e) : n.add(e), null != i && T.default.track(x.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: Z.location,
        tab: L.ExpressionPickerViewType.EMOJI,
        collapsed: !l,
        guild_id: i.id
      }), g(n)
    }, [Z, t, g]), q = l.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: i
      } = e, n = e.type === R.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
      Y.current !== x.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(Y.current), Y.current = window.requestAnimationFrame(() => {
        m.EmojiPickerStore.setInspectedExpressionPosition(t, i, p.InspectedExpressionChangeSource.MOUSE_EVENT), m.EmojiPickerStore.setSearchPlaceholder(n), Y.current = x.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
      })
    }, []), $ = (0, u.useStateFromStores)([S.HotspotStore], () => S.HotspotStore.hasHotspot(S.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), ee = l.useMemo(() => o.memoize((e, t) => {
      let i = s[e],
        l = I[t.sectionIndex];
      return (0, n.jsx)(O.default, {
        emojiDescriptors: i,
        emojiSize: a,
        surrogateCodePoint: Q,
        onInspect: q,
        onSelect: d,
        getEmojiItemProps: h,
        getEmojiRowProps: C,
        isScrolling: N,
        isUsingKeyboardNavigation: P,
        rowIndex: e,
        allowAnimatedEmoji: K,
        showEmojiFavoriteTooltip: $,
        channelGuildId: B,
        category: l.sectionId,
        selectedItemClassName: D.selectedItem,
        messageId: J,
        isBurstReaction: z
      }, e)
    }), [s, I, a, Q, q, d, h, C, N, P, K, $, B, J, z]);
    l.useEffect(() => () => {
      var e, t;
      return null === (t = ee.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [ee]);
    let et = l.useMemo(() => o.memoize(e => {
        let i = I[e];
        if (null == i) return;
        let {
          guild: l,
          categoryId: s,
          type: a,
          sectionId: o
        } = i;
        if (a === M.EmojiCategoryTypes.SEARCH_RESULTS) return;
        let u = a === M.EmojiCategoryTypes.GUILD ? null != l ? (0, n.jsx)(y.default, {
            guild: l,
            height: 16,
            width: 16
          }) : null : null != s ? (0, n.jsx)(A.default, {
            categoryId: s,
            height: 16,
            width: 16
          }) : null,
          c = null == l ? void 0 : l.toString();
        return null != s && (c = (0, v.getStringForEmojiCategory)(s, null == l ? void 0 : l.toString())), (0, n.jsx)(_.default, {
          className: r(D.header, W),
          icon: u,
          isCollapsed: t.has(o),
          onClick: () => X(o, l),
          children: c
        }, o)
      }), [I, t, X, W]),
      ei = l.useCallback((e, i) => {
        let l = I[e];
        if (l.type === M.EmojiCategoryTypes.GUILD) {
          let s = t.has(l.sectionId);
          return (0, n.jsx)("div", {
            className: r(D.categorySection, {
              [D.categorySectionLast]: e === I.length - 1,
              [D.categorySectionCollapsed]: s
            }),
            children: i
          })
        }
        return (0, n.jsx)("div", {
          className: r(D.categorySection, {
            [D.categorySectionLast]: e === I.length - 1,
            [D.categorySectionCollapsed]: t.has(l.sectionId)
          }),
          children: i
        }, e)
      }, [t, I]),
      en = l.useCallback(e => {
        let i = I[e];
        return i.sectionId !== M.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(i.sectionId) ? null : (0, n.jsx)(j.default, {
          className: D.premiumUpsell
        }, "emoji-picker-inline-upsell")
      }, [I, t]),
      el = l.useCallback(e => {
        let i = I[e];
        return i.sectionId !== M.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(i.sectionId) ? 0 : H
      }, [I, t]),
      es = l.useCallback(e => {
        var i;
        return e === I.length - 1 || t.has(null === (i = I[e]) || void 0 === i ? void 0 : i.sectionId) ? 0 : F
      }, [t, I]),
      er = l.useMemo(() => ["" !== f ? k : b, U, w, G], [f]),
      ea = l.useCallback(e => {
        let t = I[e];
        return t.type === M.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : V
      }, [I]);
    return {
      listPadding: er,
      renderRow: ee,
      renderSection: ei,
      renderSectionHeader: et,
      renderSectionFooter: en,
      sectionMarginBottom: es,
      sectionHeaderHeight: ea,
      sectionFooterHeight: el
    }
  },
  z = l.memo(function(e) {
    let {
      diversitySurrogate: t,
      emojiGrid: i,
      emojiListRef: s,
      emojiSize: r,
      onEmojiSelect: a,
      sectionDescriptors: o,
      rowCountBySection: u,
      collapsedSections: c,
      setCollapsedSections: d,
      getEmojiItemProps: E,
      getEmojiRowProps: p,
      rowCount: _,
      isUsingKeyboardNavigation: S,
      channelGuildId: T,
      messageId: N,
      isBurstReaction: v,
      listHeaderClassName: A
    } = e, y = l.useRef(!1), R = m.EmojiPickerStore.useStore(e => e.activeCategoryIndex), j = (0, I.useExpressionPickerStore)(e => e.searchQuery), O = h.AnimateEmoji.useSetting(), {
      listPadding: M,
      renderRow: x,
      renderSection: L,
      renderSectionHeader: b,
      renderSectionFooter: U,
      sectionMarginBottom: w,
      sectionHeaderHeight: G,
      sectionFooterHeight: k
    } = J({
      collapsedSections: c,
      diversitySurrogate: t,
      emojiGrid: i,
      emojiSize: r,
      onEmojiSelect: a,
      searchQuery: j,
      sectionDescriptors: o,
      setCollapsedSections: d,
      getEmojiItemProps: E,
      getEmojiRowProps: p,
      isScrolling: y,
      isUsingKeyboardNavigation: S,
      allowAnimatedEmoji: O,
      channelGuildId: T,
      messageId: N,
      isBurstReaction: v,
      listHeaderClassName: A
    }), V = (0, g.useSynchronizedActiveCategoryIndexForScrollPosition)({
      activeCategoryIndex: R,
      isScrolling: y,
      listRef: s,
      onActiveCategoryIndexChange: m.EmojiPickerStore.setActiveCategoryIndex,
      scrollOffset: 20,
      searchQuery: j
    });
    (0, g.useSynchronizedScrollPositionForActiveCategoryIndex)({
      searchQuery: j,
      activeCategoryIndex: R,
      listRef: s
    });
    let F = o.length > 0;
    return (0, n.jsx)("div", {
      className: D.listWrapper,
      children: F ? (0, n.jsx)(C.default, {
        role: "none presentation",
        className: D.list,
        listPadding: M,
        onScroll: V,
        renderRow: x,
        renderSection: L,
        renderSectionHeader: b,
        renderSectionFooter: U,
        rowCount: _,
        rowCountBySection: u,
        rowHeight: B(r),
        sectionHeaderHeight: G,
        sectionMarginBottom: w,
        sectionFooterHeight: k,
        stickyHeaders: !0,
        ref: s
      }) : (0, n.jsx)(f.default, {
        message: P.default.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: D.noSearchResultsContainer
      })
    })
  });
var W = z