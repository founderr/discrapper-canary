"use strict";
i.r(t), i.d(t, {
  default: function() {
    return B
  }
}), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  r = i.n(s),
  a = i("917351"),
  o = i.n(a),
  u = i("974667"),
  c = i("446674"),
  d = i("769846"),
  f = i("77078"),
  E = i("997289"),
  m = i("206230"),
  I = i("986632"),
  p = i("405607"),
  g = i("423080"),
  _ = i("471671"),
  S = i("46829"),
  h = i("599110"),
  C = i("159885"),
  T = i("788506"),
  N = i("675280"),
  v = i("917764"),
  A = i("83017"),
  y = i("115279"),
  R = i("49111"),
  j = i("13030"),
  O = i("782340"),
  M = i("983664");
let x = (0, C.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  L = (0, C.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  P = (0, C.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  D = (0, C.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  b = (0, C.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  U = (0, C.cssValueToNumber)(M.unicodeCategoryShortcutHeight),
  w = (0, C.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  G = (0, C.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  k = P + L + 2 * b,
  V = x + L,
  F = V + (w + 2 * G),
  H = P + D + 2 * b;

function K(e) {
  let {
    activeIndex: t,
    categoryIndex: i,
    analyticsContext: s,
    categories: a,
    category: o,
    handleCategorySelect: c,
    isWindowFocused: d,
    useReducedMotion: E
  } = e, m = (0, u.useListItem)("expression-guild-".concat(i)), I = o.type === y.EmojiCategoryTypes.GUILD ? null : o.id, p = t === i, _ = o.type === y.EmojiCategoryTypes.GUILD ? o.guild : null, S = (0, n.jsxs)(f.Clickable, {
    ...m,
    "aria-label": (0, T.getAriaIdForEmojiCategory)(o, _),
    className: r({
      [M.categoryItemGuildCategory]: null != _,
      [M.categoryItemDefaultCategory]: null == _,
      [M.categoryItemDefaultCategorySelected]: null == _ && p,
      [M.categoryItemRecentEmoji]: o.type === y.EmojiCategoryTypes.RECENT
    }),
    onClick: () => {
      null != _ && h.default.track(R.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == s ? void 0 : s.location,
        tab: j.ExpressionPickerViewType.EMOJI,
        guild_id: _.id
      }), c(i)
    },
    children: [null != _ ? (0, n.jsx)(v.default, {
      guild: _,
      isSelected: p,
      shouldAnimate: !E && d
    }) : null, null == _ && null != I ? (0, n.jsx)(N.default, {
      categoryId: I,
      className: M.categoryIcon,
      height: P,
      width: P
    }) : null]
  }), C = a[i + 1], A = null != C && o.type === y.EmojiCategoryTypes.GUILD && C.type !== y.EmojiCategoryTypes.GUILD;
  return null != _ ? (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(g.default, {
      guild: _,
      includeActivity: !1,
      children: (0, n.jsx)("div", {
        children: S
      })
    }), A ? (0, n.jsx)("hr", {
      className: M.guildCategorySeparator
    }, "separator") : null]
  }) : S
}
var B = e => {
  let {
    className: t,
    emojiListRef: i,
    sectionDescriptors: s,
    intention: a,
    channel: u
  } = e, d = I.EmojiPickerStore.useStore(e => e.activeCategoryIndex), g = (0, A.useCategorySelectHandler)({
    sectionDescriptors: s,
    emojiListRef: i
  }), h = (0, E.useAnalyticsContext)(), C = (0, T.useEmojiCategories)(a, u), N = l.useRef(null), v = (0, c.useStateFromStores)([_.default], () => _.default.isFocused()), R = (0, c.useStateFromStores)([m.default], () => m.default.useReducedMotion, []), j = l.useMemo(() => o.memoize((e, t) => {
    let i = C[t];
    if (null != i) return (0, n.jsx)(K, {
      activeIndex: d,
      analyticsContext: h,
      categories: C,
      category: i,
      categoryIndex: t,
      handleCategorySelect: g,
      isWindowFocused: v,
      useReducedMotion: R
    }, t)
  }), [d, h, C, g, v, R]), x = l.useMemo(() => [8, 8, 0, 8], []), b = l.useCallback((e, t) => {
    let i = C[t];
    if (i.type === y.EmojiCategoryTypes.RECENT) return k;
    if (i.type === y.EmojiCategoryTypes.GUILD) {
      let e = C[t + 1],
        i = null != e && e.type !== y.EmojiCategoryTypes.GUILD;
      return i ? F : V
    }
    return H
  }, [C]), {
    nonUnicodeCategoryCount: B,
    firstUnicodeCategoryIndex: J,
    firstUnicodeCategoryOffsetTop: z,
    rowCountBySection: W
  } = l.useMemo(() => {
    let e = 0,
      t = 0,
      i = 0,
      n = 0;
    C.forEach(l => {
      l.type === y.EmojiCategoryTypes.GUILD ? (t += 1, i += 1) : l.type === y.EmojiCategoryTypes.UNICODE ? n += 1 : (e += 1, t += 1)
    });
    let l = [e, i, n],
      s = k + t * V + F;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: s,
      rowCountBySection: l
    }
  }, [C]), [Z, Y] = l.useState(!0);
  l.useLayoutEffect(() => {
    Y(B >= 7)
  }, [B]);
  let Q = l.useCallback(e => {
      var t;
      let i = null === (t = N.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null == i) return;
      let n = e + i.height;
      n - w >= z ? Y(!1) : Y(!0)
    }, [z]),
    X = l.useCallback(e => {
      var t;
      e(J), null === (t = N.current) || void 0 === t || t.scrollTo(z)
    }, [z, J]),
    q = l.useCallback((e, t) => {
      let i = C[e];
      if (null == i) return 0;
      let n = Z ? U : 0;
      if (i.type === y.EmojiCategoryTypes.RECENT) return t ? 0 : D;
      if (i.type === y.EmojiCategoryTypes.GUILD) {
        let i = C[e + 1];
        return null != i && i.type !== y.EmojiCategoryTypes.GUILD ? t ? w + -2 * G + L + n : L : t ? n : L
      }
      return t ? L + n : 2 * L
    }, [C, Z]),
    $ = l.useMemo(() => function(e, t) {
      return (0, n.jsx)(l.Fragment, {
        children: t
      }, e)
    }, []),
    ee = Z ? "shortcut" : "hiddenshortcut";
  return (0, n.jsx)(p.default, {
    categoryListRef: N,
    expressionsListRef: i,
    className: t,
    store: I.EmojiPickerStore,
    categories: C,
    listPadding: x,
    onScroll: Q,
    renderCategoryListItem: j,
    renderSection: $,
    rowCount: C.length,
    categoryHeight: b,
    getScrollOffsetForIndex: q,
    rowCountBySection: W,
    children: e => B >= 7 && (0, n.jsx)(f.Clickable, {
      "aria-hidden": !Z,
      "aria-label": O.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: r(M.unicodeShortcut, {
        [M.unicodeShortcutInvisible]: !Z
      }),
      tabIndex: Z ? 0 : -1,
      onClick: () => X(e),
      children: (0, n.jsx)(S.default, {
        height: P,
        width: P
      })
    }, ee)
  })
}