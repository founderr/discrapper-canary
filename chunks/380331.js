"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(91192),
  _ = n(442837),
  c = n(477690),
  d = n(481060),
  E = n(2052),
  I = n(607070),
  T = n(806966),
  h = n(254494),
  S = n(593618),
  f = n(451478),
  N = n(626135),
  A = n(624138),
  m = n(543241),
  O = n(883661),
  R = n(880949),
  p = n(784222),
  g = n(149203),
  C = n(981631),
  v = n(957825),
  L = n(689938),
  D = n(761002);
let M = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  P = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  y = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  U = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  b = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  G = (0, A.Mg)(D.__invalid_unicodeCategoryShortcutHeight),
  w = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  B = (0, A.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  k = y + P + 2 * b,
  x = M + P,
  V = x + (w + 2 * B),
  Z = y + U + 2 * b;

function H(e) {
  let {
    activeIndex: t,
    categoryIndex: n,
    analyticsContext: s,
    categories: a,
    category: l,
    handleCategorySelect: _,
    isWindowFocused: c,
    useReducedMotion: E
  } = e, I = (0, u.JA)("expression-guild-".concat(n)), T = l.type === g.En.GUILD ? null : l.id, h = t === n, f = l.type === g.En.GUILD ? l.guild : null, A = (0, i.jsxs)(d.Clickable, {
    ...I,
    "aria-label": (0, m.Nf)(l, f),
    className: o()({
      [D.categoryItemGuildCategory]: null != f,
      [D.categoryItemDefaultCategory]: null == f,
      [D.categoryItemDefaultCategorySelected]: null == f && h,
      [D.categoryItemRecentEmoji]: l.type === g.En.RECENT
    }),
    onClick: () => {
      null != f && N.default.track(C.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == s ? void 0 : s.location,
        tab: v.X1.EMOJI,
        guild_id: f.id
      }), _(n)
    },
    children: [null != f ? (0, i.jsx)(R.Z, {
      guild: f,
      isSelected: h,
      shouldAnimate: !E && c,
      isLocked: l.isNitroLocked
    }) : null, null == f && null != T ? (0, i.jsx)(O.Z, {
      categoryId: T,
      className: D.categoryIcon,
      height: y,
      width: y,
      size: "custom"
    }) : null]
  }), p = a[n + 1], L = null != p && l.type === g.En.GUILD && p.type !== g.En.GUILD;
  return null != f ? (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(S.Z, {
      guild: f,
      includeActivity: !1,
      children: (0, i.jsx)("div", {
        children: A
      })
    }), L ? (0, i.jsx)("hr", {
      className: D.guildCategorySeparator
    }, "separator") : null]
  }) : A
}
t.Z = e => {
  let {
    className: t,
    emojiListRef: n,
    sectionDescriptors: s,
    intention: a,
    channel: u
  } = e, c = T.kJ.useStore(e => e.activeCategoryIndex), S = (0, p.Ni)({
    sectionDescriptors: s,
    emojiListRef: n
  }), N = (0, E.O)(), A = (0, m.kI)(a, u), O = r.useRef(null), R = (0, _.e7)([f.Z], () => f.Z.isFocused()), C = (0, _.e7)([I.Z], () => I.Z.useReducedMotion, []), v = r.useMemo(() => l().memoize((e, t) => {
    let n = A[t];
    if (null != n) return (0, i.jsx)(H, {
      activeIndex: c,
      analyticsContext: N,
      categories: A,
      category: n,
      categoryIndex: t,
      handleCategorySelect: S,
      isWindowFocused: R,
      useReducedMotion: C
    }, t)
  }), [c, N, A, S, R, C]), M = r.useMemo(() => [8, 8, 0, 8], []), b = r.useCallback((e, t) => {
    let n = A[t];
    if (n.type === g.En.RECENT) return k;
    if (n.type === g.En.GUILD) {
      let e = A[t + 1];
      return null != e && e.type !== g.En.GUILD ? V : x
    }
    return Z
  }, [A]), {
    nonUnicodeCategoryCount: F,
    firstUnicodeCategoryIndex: Y,
    firstUnicodeCategoryOffsetTop: j,
    rowCountBySection: W
  } = r.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      i = 0;
    A.forEach(r => {
      r.type === g.En.GUILD ? (t += 1, n += 1) : r.type === g.En.UNICODE ? i += 1 : (e += 1, t += 1)
    });
    let r = k + t * x + V;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: r,
      rowCountBySection: [e, n, i]
    }
  }, [A]), [K, z] = r.useState(!0);
  r.useLayoutEffect(() => {
    z(F >= 7)
  }, [F]);
  let q = r.useCallback(e => {
      var t;
      let n = null === (t = O.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null != n) e + n.height - w >= j ? z(!1) : z(!0)
    }, [j]),
    X = r.useCallback(e => {
      var t;
      e(Y), null === (t = O.current) || void 0 === t || t.scrollTo(j)
    }, [j, Y]),
    Q = r.useCallback((e, t) => {
      let n = A[e];
      if (null == n) return 0;
      let i = K ? G : 0;
      if (n.type === g.En.RECENT) return t ? 0 : U;
      if (n.type === g.En.GUILD) {
        let n = A[e + 1];
        return null != n && n.type !== g.En.GUILD ? t ? w + -2 * B + P + i : P : t ? i : P
      }
      return t ? P + i : 2 * P
    }, [A, K]),
    J = r.useMemo(() => function(e, t) {
      return (0, i.jsx)(r.Fragment, {
        children: t
      }, e)
    }, []),
    $ = K ? "shortcut" : "hiddenshortcut";
  return (0, i.jsx)(h.Z, {
    categoryListRef: O,
    expressionsListRef: n,
    className: t,
    store: T.kJ,
    categories: A,
    listPadding: M,
    onScroll: q,
    renderCategoryListItem: v,
    renderSection: J,
    rowCount: A.length,
    categoryHeight: b,
    getScrollOffsetForIndex: Q,
    rowCountBySection: W,
    children: e => F >= 7 && (0, i.jsx)(d.Clickable, {
      "aria-hidden": !K,
      "aria-label": L.Z.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: o()(D.unicodeShortcut, {
        [D.unicodeShortcutInvisible]: !K
      }),
      tabIndex: K ? 0 : -1,
      onClick: () => X(e),
      children: (0, i.jsx)(d.ReactionIcon, {
        size: "custom",
        color: "currentColor",
        height: y,
        width: y
      })
    }, $)
  })
}