"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
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
  I = n("429569"),
  _ = n("788506"),
  y = n("675280"),
  A = n("917764"),
  N = n("83017"),
  x = n("115279"),
  O = n("49111"),
  R = n("13030"),
  M = n("782340"),
  L = n("983664");
let P = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  b = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  j = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  U = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  D = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  k = (0, v.cssValueToNumber)(L.unicodeCategoryShortcutHeight),
  w = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  F = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  G = j + b + 2 * D,
  B = P + b,
  H = B + (w + 2 * F),
  V = j + U + 2 * D;

function K(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: a,
    categories: r,
    category: o,
    handleCategorySelect: d,
    isWindowFocused: c,
    useReducedMotion: p,
    isNitroLocked: m
  } = e, h = (0, u.useListItem)("expression-guild-".concat(n)), E = o.type === x.EmojiCategoryTypes.GUILD ? null : o.id, S = t === n, C = o.type === x.EmojiCategoryTypes.GUILD ? o.guild : null, {
    enabled: v
  } = I.default.useExperiment({
    location: "Emoji Picker Category List"
  }, {
    autoTrackExposure: m
  }), N = (0, l.jsxs)(f.Clickable, {
    ...h,
    "aria-label": (0, _.getAriaIdForEmojiCategory)(o, C),
    className: s({
      [L.categoryItemGuildCategory]: null != C,
      [L.categoryItemDefaultCategory]: null == C,
      [L.categoryItemDefaultCategorySelected]: null == C && S,
      [L.categoryItemRecentEmoji]: o.type === x.EmojiCategoryTypes.RECENT
    }),
    onClick: () => {
      null != C && T.default.track(O.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == a ? void 0 : a.location,
        tab: R.ExpressionPickerViewType.EMOJI,
        guild_id: C.id
      }), d(n)
    },
    children: [null != C ? (0, l.jsx)(A.default, {
      guild: C,
      isSelected: S,
      shouldAnimate: !p && c,
      isLocked: v && m
    }) : null, null == C && null != E ? (0, l.jsx)(y.default, {
      categoryId: E,
      className: L.categoryIcon,
      height: j,
      width: j
    }) : null]
  }), M = r[n + 1], P = null != M && o.type === x.EmojiCategoryTypes.GUILD && M.type !== x.EmojiCategoryTypes.GUILD;
  return null != C ? (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(g.default, {
      guild: C,
      includeActivity: !1,
      children: (0, l.jsx)("div", {
        children: N
      })
    }), P ? (0, l.jsx)("hr", {
      className: L.guildCategorySeparator
    }, "separator") : null]
  }) : N
}
var W = e => {
  let {
    className: t,
    emojiListRef: n,
    sectionDescriptors: a,
    intention: r,
    channel: u
  } = e, c = h.EmojiPickerStore.useStore(e => e.activeCategoryIndex), g = (0, N.useCategorySelectHandler)({
    sectionDescriptors: a,
    emojiListRef: n
  }), T = (0, p.useAnalyticsContext)(), v = (0, _.useEmojiCategories)(r, u), I = i.useRef(null), y = (0, d.useStateFromStores)([S.default], () => S.default.isFocused()), A = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion, []), O = (0, _.useCategoryNitroLockedStates)(r, u, v), R = i.useMemo(() => o.memoize((e, t) => {
    let n = v[t];
    if (null == n) return;
    let i = O[t];
    return (0, l.jsx)(K, {
      activeIndex: c,
      analyticsContext: T,
      categories: v,
      category: n,
      categoryIndex: t,
      handleCategorySelect: g,
      isWindowFocused: y,
      useReducedMotion: A,
      isNitroLocked: i
    }, t)
  }), [c, T, v, g, y, A, O]), P = i.useMemo(() => [8, 8, 0, 8], []), D = i.useCallback((e, t) => {
    let n = v[t];
    if (n.type === x.EmojiCategoryTypes.RECENT) return G;
    if (n.type === x.EmojiCategoryTypes.GUILD) {
      let e = v[t + 1],
        n = null != e && e.type !== x.EmojiCategoryTypes.GUILD;
      return n ? H : B
    }
    return V
  }, [v]), {
    nonUnicodeCategoryCount: W,
    firstUnicodeCategoryIndex: Y,
    firstUnicodeCategoryOffsetTop: z,
    rowCountBySection: J
  } = i.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      l = 0;
    v.forEach(i => {
      i.type === x.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : i.type === x.EmojiCategoryTypes.UNICODE ? l += 1 : (e += 1, t += 1)
    });
    let i = [e, n, l],
      a = G + t * B + H;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: a,
      rowCountBySection: i
    }
  }, [v]), [Z, q] = i.useState(!0);
  i.useLayoutEffect(() => {
    q(W >= 7)
  }, [W]);
  let X = i.useCallback(e => {
      var t;
      let n = null === (t = I.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null == n) return;
      let l = e + n.height;
      l - w >= z ? q(!1) : q(!0)
    }, [z]),
    Q = i.useCallback(e => {
      var t;
      e(Y), null === (t = I.current) || void 0 === t || t.scrollTo(z)
    }, [z, Y]),
    $ = i.useCallback((e, t) => {
      let n = v[e];
      if (null == n) return 0;
      let l = Z ? k : 0;
      if (n.type === x.EmojiCategoryTypes.RECENT) return t ? 0 : U;
      if (n.type === x.EmojiCategoryTypes.GUILD) {
        let n = v[e + 1];
        return null != n && n.type !== x.EmojiCategoryTypes.GUILD ? t ? w + -2 * F + b + l : b : t ? l : b
      }
      return t ? b + l : 2 * b
    }, [v, Z]),
    ee = i.useMemo(() => function(e, t) {
      return (0, l.jsx)(i.Fragment, {
        children: t
      }, e)
    }, []),
    et = Z ? "shortcut" : "hiddenshortcut";
  return (0, l.jsx)(E.default, {
    categoryListRef: I,
    expressionsListRef: n,
    className: t,
    store: h.EmojiPickerStore,
    categories: v,
    listPadding: P,
    onScroll: X,
    renderCategoryListItem: R,
    renderSection: ee,
    rowCount: v.length,
    categoryHeight: D,
    getScrollOffsetForIndex: $,
    rowCountBySection: J,
    children: e => W >= 7 && (0, l.jsx)(f.Clickable, {
      "aria-hidden": !Z,
      "aria-label": M.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: s(L.unicodeShortcut, {
        [L.unicodeShortcutInvisible]: !Z
      }),
      tabIndex: Z ? 0 : -1,
      onClick: () => Q(e),
      children: (0, l.jsx)(C.default, {
        height: j,
        width: j
      })
    }, et)
  })
}