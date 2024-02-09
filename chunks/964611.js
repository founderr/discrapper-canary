"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("917351"),
  o = n.n(r),
  u = n("974667"),
  d = n("446674"),
  c = n("769846"),
  f = n("77078"),
  p = n("997289"),
  m = n("206230"),
  h = n("986632"),
  E = n("405607"),
  g = n("423080"),
  S = n("471671"),
  C = n("46829"),
  T = n("599110"),
  v = n("159885"),
  I = n("788506"),
  _ = n("675280"),
  y = n("917764"),
  A = n("83017"),
  N = n("115279"),
  x = n("49111"),
  O = n("13030"),
  R = n("782340"),
  M = n("983664");
let L = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  P = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  b = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  j = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  U = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  D = (0, v.cssValueToNumber)(M.unicodeCategoryShortcutHeight),
  k = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  w = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  F = b + P + 2 * U,
  G = L + P,
  B = G + (k + 2 * w),
  H = b + j + 2 * U;

function V(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: a,
    categories: r,
    category: o,
    handleCategorySelect: d,
    isWindowFocused: c,
    useReducedMotion: p
  } = e, m = (0, u.useListItem)("expression-guild-".concat(n)), h = o.type === N.EmojiCategoryTypes.GUILD ? null : o.id, E = t === n, S = o.type === N.EmojiCategoryTypes.GUILD ? o.guild : null, C = (0, l.jsxs)(f.Clickable, {
    ...m,
    "aria-label": (0, I.getAriaIdForEmojiCategory)(o, S),
    className: s({
      [M.categoryItemGuildCategory]: null != S,
      [M.categoryItemDefaultCategory]: null == S,
      [M.categoryItemDefaultCategorySelected]: null == S && E,
      [M.categoryItemRecentEmoji]: o.type === N.EmojiCategoryTypes.RECENT
    }),
    onClick: () => {
      null != S && T.default.track(x.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == a ? void 0 : a.location,
        tab: O.ExpressionPickerViewType.EMOJI,
        guild_id: S.id
      }), d(n)
    },
    children: [null != S ? (0, l.jsx)(y.default, {
      guild: S,
      isSelected: E,
      shouldAnimate: !p && c
    }) : null, null == S && null != h ? (0, l.jsx)(_.default, {
      categoryId: h,
      className: M.categoryIcon,
      height: b,
      width: b
    }) : null]
  }), v = r[n + 1], A = null != v && o.type === N.EmojiCategoryTypes.GUILD && v.type !== N.EmojiCategoryTypes.GUILD;
  return null != S ? (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(g.default, {
      guild: S,
      includeActivity: !1,
      children: (0, l.jsx)("div", {
        children: C
      })
    }), A ? (0, l.jsx)("hr", {
      className: M.guildCategorySeparator
    }, "separator") : null]
  }) : C
}
var K = e => {
  let {
    className: t,
    emojiListRef: n,
    sectionDescriptors: a,
    intention: r,
    channel: u
  } = e, c = h.EmojiPickerStore.useStore(e => e.activeCategoryIndex), g = (0, A.useCategorySelectHandler)({
    sectionDescriptors: a,
    emojiListRef: n
  }), T = (0, p.useAnalyticsContext)(), v = (0, I.useEmojiCategories)(r, u), _ = i.useRef(null), y = (0, d.useStateFromStores)([S.default], () => S.default.isFocused()), x = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion, []), O = i.useMemo(() => o.memoize((e, t) => {
    let n = v[t];
    if (null != n) return (0, l.jsx)(V, {
      activeIndex: c,
      analyticsContext: T,
      categories: v,
      category: n,
      categoryIndex: t,
      handleCategorySelect: g,
      isWindowFocused: y,
      useReducedMotion: x
    }, t)
  }), [c, T, v, g, y, x]), L = i.useMemo(() => [8, 8, 0, 8], []), U = i.useCallback((e, t) => {
    let n = v[t];
    if (n.type === N.EmojiCategoryTypes.RECENT) return F;
    if (n.type === N.EmojiCategoryTypes.GUILD) {
      let e = v[t + 1],
        n = null != e && e.type !== N.EmojiCategoryTypes.GUILD;
      return n ? B : G
    }
    return H
  }, [v]), {
    nonUnicodeCategoryCount: K,
    firstUnicodeCategoryIndex: W,
    firstUnicodeCategoryOffsetTop: Y,
    rowCountBySection: z
  } = i.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      l = 0;
    v.forEach(i => {
      i.type === N.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : i.type === N.EmojiCategoryTypes.UNICODE ? l += 1 : (e += 1, t += 1)
    });
    let i = [e, n, l],
      a = F + t * G + B;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: a,
      rowCountBySection: i
    }
  }, [v]), [J, Z] = i.useState(!0);
  i.useLayoutEffect(() => {
    Z(K >= 7)
  }, [K]);
  let q = i.useCallback(e => {
      var t;
      let n = null === (t = _.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null == n) return;
      let l = e + n.height;
      l - k >= Y ? Z(!1) : Z(!0)
    }, [Y]),
    X = i.useCallback(e => {
      var t;
      e(W), null === (t = _.current) || void 0 === t || t.scrollTo(Y)
    }, [Y, W]),
    Q = i.useCallback((e, t) => {
      let n = v[e];
      if (null == n) return 0;
      let l = J ? D : 0;
      if (n.type === N.EmojiCategoryTypes.RECENT) return t ? 0 : j;
      if (n.type === N.EmojiCategoryTypes.GUILD) {
        let n = v[e + 1];
        return null != n && n.type !== N.EmojiCategoryTypes.GUILD ? t ? k + -2 * w + P + l : P : t ? l : P
      }
      return t ? P + l : 2 * P
    }, [v, J]),
    $ = i.useMemo(() => function(e, t) {
      return (0, l.jsx)(i.Fragment, {
        children: t
      }, e)
    }, []),
    ee = J ? "shortcut" : "hiddenshortcut";
  return (0, l.jsx)(E.default, {
    categoryListRef: _,
    expressionsListRef: n,
    className: t,
    store: h.EmojiPickerStore,
    categories: v,
    listPadding: L,
    onScroll: q,
    renderCategoryListItem: O,
    renderSection: $,
    rowCount: v.length,
    categoryHeight: U,
    getScrollOffsetForIndex: Q,
    rowCountBySection: z,
    children: e => K >= 7 && (0, l.jsx)(f.Clickable, {
      "aria-hidden": !J,
      "aria-label": R.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: s(M.unicodeShortcut, {
        [M.unicodeShortcutInvisible]: !J
      }),
      tabIndex: J ? 0 : -1,
      onClick: () => X(e),
      children: (0, l.jsx)(C.default, {
        height: b,
        width: b
      })
    }, ee)
  })
}