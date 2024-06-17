"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("392711"),
  l = n.n(o),
  u = n("924826"),
  d = n("442837"),
  _ = n("477690"),
  c = n("481060"),
  E = n("2052"),
  I = n("607070"),
  T = n("806966"),
  f = n("254494"),
  S = n("593618"),
  h = n("451478"),
  A = n("642113"),
  m = n("626135"),
  N = n("624138"),
  p = n("543241"),
  O = n("883661"),
  C = n("880949"),
  R = n("784222"),
  g = n("149203"),
  L = n("981631"),
  v = n("957825"),
  D = n("689938"),
  M = n("271171");
let y = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  P = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  U = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  b = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  G = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  w = (0, N.cssValueToNumber)(M.__invalid_unicodeCategoryShortcutHeight),
  k = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  B = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  V = U + P + 2 * G,
  x = y + P,
  F = x + (k + 2 * B),
  H = U + b + 2 * G;

function Y(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: s,
    categories: o,
    category: l,
    handleCategorySelect: d,
    isWindowFocused: _,
    useReducedMotion: E
  } = e, I = (0, u.useListItem)("expression-guild-".concat(n)), T = l.type === g.EmojiCategoryTypes.GUILD ? null : l.id, f = t === n, h = l.type === g.EmojiCategoryTypes.GUILD ? l.guild : null, A = (0, i.jsxs)(c.Clickable, {
    ...I,
    "aria-label": (0, p.getAriaIdForEmojiCategory)(l, h),
    className: a()({
      [M.categoryItemGuildCategory]: null != h,
      [M.categoryItemDefaultCategory]: null == h,
      [M.categoryItemDefaultCategorySelected]: null == h && f,
      [M.categoryItemRecentEmoji]: l.type === g.EmojiCategoryTypes.RECENT
    }),
    onClick: () => {
      null != h && m.default.track(L.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == s ? void 0 : s.location,
        tab: v.ExpressionPickerViewType.EMOJI,
        guild_id: h.id
      }), d(n)
    },
    children: [null != h ? (0, i.jsx)(C.default, {
      guild: h,
      isSelected: f,
      shouldAnimate: !E && _,
      isLocked: l.isNitroLocked
    }) : null, null == h && null != T ? (0, i.jsx)(O.default, {
      categoryId: T,
      className: M.categoryIcon,
      height: U,
      width: U
    }) : null]
  }), N = o[n + 1], R = null != N && l.type === g.EmojiCategoryTypes.GUILD && N.type !== g.EmojiCategoryTypes.GUILD;
  return null != h ? (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(S.default, {
      guild: h,
      includeActivity: !1,
      children: (0, i.jsx)("div", {
        children: A
      })
    }), R ? (0, i.jsx)("hr", {
      className: M.guildCategorySeparator
    }, "separator") : null]
  }) : A
}
t.default = e => {
  let {
    className: t,
    emojiListRef: n,
    sectionDescriptors: s,
    intention: o,
    channel: u
  } = e, _ = T.EmojiPickerStore.useStore(e => e.activeCategoryIndex), S = (0, R.useCategorySelectHandler)({
    sectionDescriptors: s,
    emojiListRef: n
  }), m = (0, E.useAnalyticsContext)(), N = (0, p.useEmojiCategories)(o, u), O = r.useRef(null), C = (0, d.useStateFromStores)([h.default], () => h.default.isFocused()), L = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion, []), v = r.useMemo(() => l().memoize((e, t) => {
    let n = N[t];
    if (null != n) return (0, i.jsx)(Y, {
      activeIndex: _,
      analyticsContext: m,
      categories: N,
      category: n,
      categoryIndex: t,
      handleCategorySelect: S,
      isWindowFocused: C,
      useReducedMotion: L
    }, t)
  }), [_, m, N, S, C, L]), y = r.useMemo(() => [8, 8, 0, 8], []), G = r.useCallback((e, t) => {
    let n = N[t];
    if (n.type === g.EmojiCategoryTypes.RECENT) return V;
    if (n.type === g.EmojiCategoryTypes.GUILD) {
      let e = N[t + 1];
      return null != e && e.type !== g.EmojiCategoryTypes.GUILD ? F : x
    }
    return H
  }, [N]), {
    nonUnicodeCategoryCount: j,
    firstUnicodeCategoryIndex: W,
    firstUnicodeCategoryOffsetTop: K,
    rowCountBySection: z
  } = r.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      i = 0;
    N.forEach(r => {
      r.type === g.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : r.type === g.EmojiCategoryTypes.UNICODE ? i += 1 : (e += 1, t += 1)
    });
    let r = V + t * x + F;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: r,
      rowCountBySection: [e, n, i]
    }
  }, [N]), [Z, Q] = r.useState(!0);
  r.useLayoutEffect(() => {
    Q(j >= 7)
  }, [j]);
  let X = r.useCallback(e => {
      var t;
      let n = null === (t = O.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null != n) e + n.height - k >= K ? Q(!1) : Q(!0)
    }, [K]),
    q = r.useCallback(e => {
      var t;
      e(W), null === (t = O.current) || void 0 === t || t.scrollTo(K)
    }, [K, W]),
    J = r.useCallback((e, t) => {
      let n = N[e];
      if (null == n) return 0;
      let i = Z ? w : 0;
      if (n.type === g.EmojiCategoryTypes.RECENT) return t ? 0 : b;
      if (n.type === g.EmojiCategoryTypes.GUILD) {
        let n = N[e + 1];
        return null != n && n.type !== g.EmojiCategoryTypes.GUILD ? t ? k + -2 * B + P + i : P : t ? i : P
      }
      return t ? P + i : 2 * P
    }, [N, Z]),
    $ = r.useMemo(() => function(e, t) {
      return (0, i.jsx)(r.Fragment, {
        children: t
      }, e)
    }, []),
    ee = Z ? "shortcut" : "hiddenshortcut";
  return (0, i.jsx)(f.default, {
    categoryListRef: O,
    expressionsListRef: n,
    className: t,
    store: T.EmojiPickerStore,
    categories: N,
    listPadding: y,
    onScroll: X,
    renderCategoryListItem: v,
    renderSection: $,
    rowCount: N.length,
    categoryHeight: G,
    getScrollOffsetForIndex: J,
    rowCountBySection: z,
    children: e => j >= 7 && (0, i.jsx)(c.Clickable, {
      "aria-hidden": !Z,
      "aria-label": D.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: a()(M.unicodeShortcut, {
        [M.unicodeShortcutInvisible]: !Z
      }),
      tabIndex: Z ? 0 : -1,
      onClick: () => q(e),
      children: (0, i.jsx)(A.default, {
        height: U,
        width: U
      })
    }, ee)
  })
}