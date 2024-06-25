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
  f = n(593618),
  S = n(451478),
  A = n(626135),
  N = n(624138),
  m = n(543241),
  O = n(883661),
  p = n(880949),
  R = n(784222),
  g = n(149203),
  C = n(981631),
  v = n(957825),
  L = n(689938),
  D = n(761002);
let M = (0, N.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  P = (0, N.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  y = (0, N.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  U = (0, N.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  b = (0, N.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  G = (0, N.Mg)(D.__invalid_unicodeCategoryShortcutHeight),
  w = (0, N.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  x = (0, N.Mg)(c.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  B = y + P + 2 * b,
  k = M + P,
  V = k + (w + 2 * x),
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
  } = e, I = (0, u.JA)("expression-guild-".concat(n)), T = l.type === g.En.GUILD ? null : l.id, h = t === n, S = l.type === g.En.GUILD ? l.guild : null, N = (0, i.jsxs)(d.Clickable, {
    ...I,
    "aria-label": (0, m.Nf)(l, S),
    className: o()({
      [D.categoryItemGuildCategory]: null != S,
      [D.categoryItemDefaultCategory]: null == S,
      [D.categoryItemDefaultCategorySelected]: null == S && h,
      [D.categoryItemRecentEmoji]: l.type === g.En.RECENT
    }),
    onClick: () => {
      null != S && A.default.track(C.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == s ? void 0 : s.location,
        tab: v.X1.EMOJI,
        guild_id: S.id
      }), _(n)
    },
    children: [null != S ? (0, i.jsx)(p.Z, {
      guild: S,
      isSelected: h,
      shouldAnimate: !E && c,
      isLocked: l.isNitroLocked
    }) : null, null == S && null != T ? (0, i.jsx)(O.Z, {
      categoryId: T,
      className: D.categoryIcon,
      height: y,
      width: y,
      size: "custom"
    }) : null]
  }), R = a[n + 1], L = null != R && l.type === g.En.GUILD && R.type !== g.En.GUILD;
  return null != S ? (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(f.Z, {
      guild: S,
      includeActivity: !1,
      children: (0, i.jsx)("div", {
        children: N
      })
    }), L ? (0, i.jsx)("hr", {
      className: D.guildCategorySeparator
    }, "separator") : null]
  }) : N
}
t.Z = e => {
  let {
    className: t,
    emojiListRef: n,
    sectionDescriptors: s,
    intention: a,
    channel: u
  } = e, c = T.kJ.useStore(e => e.activeCategoryIndex), f = (0, R.Ni)({
    sectionDescriptors: s,
    emojiListRef: n
  }), A = (0, E.O)(), N = (0, m.kI)(a, u), O = r.useRef(null), p = (0, _.e7)([S.Z], () => S.Z.isFocused()), C = (0, _.e7)([I.Z], () => I.Z.useReducedMotion, []), v = r.useMemo(() => l().memoize((e, t) => {
    let n = N[t];
    if (null != n) return (0, i.jsx)(H, {
      activeIndex: c,
      analyticsContext: A,
      categories: N,
      category: n,
      categoryIndex: t,
      handleCategorySelect: f,
      isWindowFocused: p,
      useReducedMotion: C
    }, t)
  }), [c, A, N, f, p, C]), M = r.useMemo(() => [8, 8, 0, 8], []), b = r.useCallback((e, t) => {
    let n = N[t];
    if (n.type === g.En.RECENT) return B;
    if (n.type === g.En.GUILD) {
      let e = N[t + 1];
      return null != e && e.type !== g.En.GUILD ? V : k
    }
    return Z
  }, [N]), {
    nonUnicodeCategoryCount: F,
    firstUnicodeCategoryIndex: Y,
    firstUnicodeCategoryOffsetTop: j,
    rowCountBySection: W
  } = r.useMemo(() => {
    let e = 0,
      t = 0,
      n = 0,
      i = 0;
    N.forEach(r => {
      r.type === g.En.GUILD ? (t += 1, n += 1) : r.type === g.En.UNICODE ? i += 1 : (e += 1, t += 1)
    });
    let r = B + t * k + V;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: r,
      rowCountBySection: [e, n, i]
    }
  }, [N]), [K, z] = r.useState(!0);
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
      let n = N[e];
      if (null == n) return 0;
      let i = K ? G : 0;
      if (n.type === g.En.RECENT) return t ? 0 : U;
      if (n.type === g.En.GUILD) {
        let n = N[e + 1];
        return null != n && n.type !== g.En.GUILD ? t ? w + -2 * x + P + i : P : t ? i : P
      }
      return t ? P + i : 2 * P
    }, [N, K]),
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
    categories: N,
    listPadding: M,
    onScroll: q,
    renderCategoryListItem: v,
    renderSection: J,
    rowCount: N.length,
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