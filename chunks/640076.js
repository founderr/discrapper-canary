"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
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
  g = n("45961"),
  S = n("515059"),
  C = n("139321"),
  T = n("845579"),
  v = n("124299"),
  I = n("600785"),
  _ = n("599110"),
  y = n("159885"),
  A = n("429569"),
  N = n("788506"),
  x = n("675280"),
  O = n("917764"),
  R = n("83017"),
  M = n("232786"),
  L = n("842126"),
  P = n("115279"),
  b = n("49111"),
  j = n("13030"),
  U = n("782340"),
  D = n("843646");
let k = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
  w = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
  F = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
  G = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  B = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
  H = (0, y.cssValueToNumber)(c.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
  V = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
  K = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
  W = (0, y.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  Y = e => e + 2 * W,
  z = e => {
    let {
      collapsedSections: t,
      diversitySurrogate: n,
      emojiGrid: a,
      emojiSize: r,
      onEmojiSelect: c,
      searchQuery: f,
      sectionDescriptors: h,
      setCollapsedSections: g,
      getEmojiItemProps: T,
      getEmojiRowProps: v,
      isScrolling: y,
      isUsingKeyboardNavigation: A,
      allowAnimatedEmoji: U,
      channelGuildId: W,
      messageId: Y,
      isBurstReaction: z,
      listHeaderClassName: J,
      activeSectionIndex: q,
      enableNitroUpsell: Z
    } = e, Q = (0, p.useAnalyticsContext)(), X = i.useRef(b.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), $ = i.useMemo(() => "" !== n ? d.default.convert.toCodePoint(n) : "", [n]), ee = i.useCallback(e => {
      if (!Z) return !1;
      let t = h[e],
        n = h[e + 1];
      return e >= h.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
    }, [Z, h]), et = i.useCallback(e => {
      if (!Z || e >= h.length - 1) return !1;
      let t = h[e],
        n = h[e + 1];
      return !t.isNitroLocked && n.isNitroLocked
    }, [Z, h]), en = i.useCallback(function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        l = new Set(t),
        i = t.has(e);
      i ? l.delete(e) : l.add(e), null != n && _.default.track(b.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
        location: Q.location,
        tab: j.ExpressionPickerViewType.EMOJI,
        collapsed: !i,
        guild_id: n.id
      }), g(l)
    }, [Q, t, g]), el = i.useCallback(e => {
      let {
        columnIndex: t,
        visibleRowIndex: n
      } = e, l = e.type === R.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
      X.current !== b.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(X.current), X.current = window.requestAnimationFrame(() => {
        m.EmojiPickerStore.setInspectedExpressionPosition(t, n, E.InspectedExpressionChangeSource.MOUSE_EVENT), m.EmojiPickerStore.setSearchPlaceholder(l), X.current = b.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
      })
    }, []), ei = (0, u.useStateFromStores)([C.HotspotStore], () => C.HotspotStore.hasHotspot(C.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), ea = i.useMemo(() => o.memoize((e, t) => {
      let n = a[e],
        i = h[t.sectionIndex];
      return (0, l.jsx)(L.default, {
        emojiDescriptors: n,
        emojiSize: r,
        surrogateCodePoint: $,
        onInspect: el,
        onSelect: c,
        getEmojiItemProps: T,
        getEmojiRowProps: v,
        isScrolling: y,
        isUsingKeyboardNavigation: A,
        rowIndex: e,
        allowAnimatedEmoji: U,
        showEmojiFavoriteTooltip: ei,
        channelGuildId: W,
        category: i.sectionId,
        selectedItemClassName: D.selectedItem,
        messageId: Y,
        isBurstReaction: z,
        inNitroLockedSection: i.isNitroLocked
      }, e)
    }), [a, h, r, $, el, c, T, v, y, A, U, ei, W, Y, z]);
    i.useEffect(() => () => {
      var e, t;
      return null === (t = ea.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
    }, [ea]);
    let es = i.useMemo(() => o.memoize(e => {
        let n = h[e];
        if (null == n) return;
        let {
          guild: i,
          categoryId: a,
          type: r,
          sectionId: o
        } = n;
        if (r === P.EmojiCategoryTypes.SEARCH_RESULTS) return;
        let u = r === P.EmojiCategoryTypes.GUILD ? null != i ? (0, l.jsx)(O.default, {
            guild: i,
            height: 16,
            width: 16
          }) : null : null != a ? (0, l.jsx)(x.default, {
            categoryId: a,
            height: 16,
            width: 16
          }) : null,
          d = null == i ? void 0 : i.toString();
        null != a && (d = (0, N.getStringForEmojiCategory)(a, null == i ? void 0 : i.toString()));
        let c = q === e,
          f = n.isNitroLocked,
          p = Z && f && !c,
          m = Z && f && c;
        return (0, l.jsx)(S.default, {
          className: s(D.header, J, {
            [D.inactiveNitroHeader]: p,
            [D.activeNitroHeader]: m
          }),
          icon: u,
          isCollapsed: t.has(o),
          onClick: () => en(o, i),
          children: d
        }, o)
      }), [h, t, en, J, q, Z]),
      er = i.useCallback((e, n) => {
        let i = h[e],
          a = et(e),
          r = ee(e);
        return (0, l.jsx)("div", {
          className: s(D.categorySection, {
            [D.categorySectionLast]: e === h.length - 1,
            [D.categorySectionCollapsed]: t.has(i.sectionId),
            [D.categorySectionNitroLocked]: Z && i.isNitroLocked,
            [D.categorySectionNitroDivider]: a || r
          }),
          children: n
        }, e)
      }, [t, h, Z, et, ee]),
      eo = i.useCallback(e => {
        let n = h[e];
        return n.sectionId !== P.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || Z ? et(e) ? (0, l.jsxs)("div", {
          className: s(D.nitroTopDividerContainer),
          children: [(0, l.jsx)("div", {
            className: D.nitroTopDividerUpper
          }), (0, l.jsxs)("div", {
            className: s(D.nitroTopDividerLockContainer),
            children: [(0, l.jsx)("div", {
              className: D.nitroTopDividerLockBorder
            }), (0, l.jsx)("div", {
              className: D.nitroTopDividerLockCircle,
              children: (0, l.jsx)(I.default, {
                width: 16,
                height: 16,
                color: "white"
              })
            }), (0, l.jsx)("div", {
              className: D.nitroTopDividerLockBorderReversed
            })]
          }), (0, l.jsx)("div", {
            className: D.nitroTopDividerLower
          })]
        }) : ee(e) ? (0, l.jsx)("div", {
          className: D.nitroBottomDivider
        }) : null : (0, l.jsx)(M.default, {
          className: D.premiumUpsell
        }, "emoji-picker-inline-upsell")
      }, [h, t, Z, et, ee]),
      eu = i.useCallback(e => {
        let n = h[e];
        return n.sectionId !== P.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || Z ? et(e) ? 41 : ee(e) ? 33 : 0 : K
      }, [h, t, Z, et, ee]),
      ed = i.useCallback(e => {
        var n;
        return e === h.length - 1 || t.has(null === (n = h[e]) || void 0 === n ? void 0 : n.sectionId) || et(e) || ee(e) ? 0 : V
      }, [t, h, et, ee]),
      ec = i.useMemo(() => ["" !== f ? B : k, w, F, G], [f]),
      ef = i.useCallback(e => {
        let t = h[e];
        return t.type === P.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : H
      }, [h]);
    return {
      listPadding: ec,
      renderRow: ea,
      renderSection: er,
      renderSectionHeader: es,
      renderSectionFooter: eo,
      sectionMarginBottom: ed,
      sectionHeaderHeight: ef,
      sectionFooterHeight: eu
    }
  },
  J = i.memo(function(e) {
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
      rowCount: S,
      isUsingKeyboardNavigation: C,
      channelGuildId: I,
      messageId: _,
      isBurstReaction: y,
      listHeaderClassName: N
    } = e, x = i.useRef(!1), O = m.EmojiPickerStore.useStore(e => e.activeCategoryIndex), R = (0, h.useExpressionPickerStore)(e => e.searchQuery), M = T.AnimateEmoji.useSetting(), [L, P] = i.useState(0), b = o.some(e => e.isNitroLocked), {
      enabled: j
    } = A.default.useExperiment({
      location: "Emoji Picker List"
    }, {
      autoTrackExposure: b
    }), {
      listPadding: k,
      renderRow: w,
      renderSection: F,
      renderSectionHeader: G,
      renderSectionFooter: B,
      sectionMarginBottom: H,
      sectionHeaderHeight: V,
      sectionFooterHeight: K
    } = z({
      collapsedSections: d,
      diversitySurrogate: t,
      emojiGrid: n,
      emojiSize: s,
      onEmojiSelect: r,
      searchQuery: R,
      sectionDescriptors: o,
      setCollapsedSections: c,
      getEmojiItemProps: p,
      getEmojiRowProps: E,
      isScrolling: x,
      isUsingKeyboardNavigation: C,
      allowAnimatedEmoji: M,
      channelGuildId: I,
      messageId: _,
      isBurstReaction: y,
      listHeaderClassName: N,
      activeSectionIndex: L,
      enableNitroUpsell: j
    }), W = (0, g.useSynchronizedActiveCategoryIndexForScrollPosition)({
      activeCategoryIndex: O,
      isScrolling: x,
      listRef: a,
      onActiveCategoryIndexChange: e => {
        P(e), "" === R && m.EmojiPickerStore.setActiveCategoryIndex(e)
      },
      scrollOffset: 0,
      searchQuery: R,
      disableForSearch: !1
    });
    (0, g.useSynchronizedScrollPositionForActiveCategoryIndex)({
      searchQuery: R,
      activeCategoryIndex: O,
      listRef: a
    });
    let J = o.length > 0;
    return (0, l.jsx)("div", {
      className: D.listWrapper,
      children: J ? (0, l.jsx)(v.default, {
        role: "none presentation",
        className: D.list,
        listPadding: k,
        onScroll: W,
        renderRow: w,
        renderSection: F,
        renderSectionHeader: G,
        renderSectionFooter: B,
        rowCount: S,
        rowCountBySection: u,
        rowHeight: Y(s),
        sectionHeaderHeight: V,
        sectionMarginBottom: H,
        sectionFooterHeight: K,
        stickyHeaders: !0,
        ref: a
      }) : (0, l.jsx)(f.default, {
        message: U.default.Messages.NO_EMOJI_SEARCH_RESULTS,
        className: D.noSearchResultsContainer
      })
    })
  });
var q = J