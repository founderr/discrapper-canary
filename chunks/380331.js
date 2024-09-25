var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(91192),
    d = n(442837),
    _ = n(477690),
    E = n(481060),
    f = n(2052),
    h = n(607070),
    p = n(806966),
    m = n(254494),
    I = n(593618),
    T = n(451478),
    g = n(626135),
    S = n(624138),
    A = n(543241),
    v = n(883661),
    N = n(880949),
    O = n(784222),
    R = n(149203),
    C = n(981631),
    y = n(957825),
    b = n(689938),
    L = n(932740);
let D = (0, S.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    M = (0, S.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    P = (0, S.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    U = (0, S.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    w = (0, S.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    x = (0, S.Mg)(L.__invalid_unicodeCategoryShortcutHeight),
    G = (0, S.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    k = (0, S.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    B = P + M + 2 * w,
    F = D + M,
    Z = F + (G + 2 * k),
    V = P + U + 2 * w,
    H = 7;
function Y(e) {
    let { activeIndex: t, categoryIndex: n, analyticsContext: r, categories: o, category: l, handleCategorySelect: u, isWindowFocused: d, useReducedMotion: _ } = e,
        f = (0, c.JA)('expression-guild-'.concat(n)),
        h = l.type === R.En.GUILD ? null : l.id,
        p = t === n,
        m = l.type === R.En.GUILD ? l.guild : null,
        T = (0, i.jsxs)(E.Clickable, {
            ...f,
            'aria-label': (0, A.Nf)(l, m),
            className: s()({
                [L.categoryItemGuildCategory]: null != m,
                [L.categoryItemDefaultCategory]: null == m,
                [L.categoryItemDefaultCategorySelected]: null == m && p,
                [L.categoryItemRecentEmoji]: l.type === R.En.RECENT
            }),
            onClick: () => {
                null != m &&
                    g.default.track(C.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: null == r ? void 0 : r.location,
                        tab: y.X1.EMOJI,
                        guild_id: m.id
                    }),
                    u(n);
            },
            children: [
                null != m
                    ? (0, i.jsx)(N.Z, {
                          guild: m,
                          isSelected: p,
                          shouldAnimate: !_ && d,
                          isLocked: l.isNitroLocked
                      })
                    : null,
                null == m && null != h
                    ? (0, i.jsx)(v.Z, {
                          categoryId: h,
                          className: L.categoryIcon,
                          height: P,
                          width: P,
                          size: 'custom'
                      })
                    : null
            ]
        }),
        S = o[n + 1],
        O = null != S && l.type === R.En.GUILD && S.type !== R.En.GUILD;
    return null != m
        ? (0, i.jsxs)(a.Fragment, {
              children: [
                  (0, i.jsx)(I.Z, {
                      guild: m,
                      includeActivity: !1,
                      children: (0, i.jsx)('div', { children: T })
                  }),
                  O ? (0, i.jsx)('hr', { className: L.guildCategorySeparator }, 'separator') : null
              ]
          })
        : T;
}
let j = (e) => {
    let { className: t, emojiListRef: n, sectionDescriptors: r, intention: o, channel: l } = e,
        c = p.kJ.useStore((e) => e.activeCategoryIndex),
        _ = (0, O.Ni)({
            sectionDescriptors: r,
            emojiListRef: n
        }),
        I = (0, f.O)(),
        g = (0, A.kI)(o, l),
        S = a.useRef(null),
        v = (0, d.e7)([T.Z], () => T.Z.isFocused()),
        N = (0, d.e7)([h.Z], () => h.Z.useReducedMotion, []),
        C = a.useMemo(
            () =>
                u().memoize((e, t) => {
                    let n = g[t];
                    if (null != n)
                        return (0, i.jsx)(
                            Y,
                            {
                                activeIndex: c,
                                analyticsContext: I,
                                categories: g,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: _,
                                isWindowFocused: v,
                                useReducedMotion: N
                            },
                            t
                        );
                }),
            [c, I, g, _, v, N]
        ),
        y = a.useMemo(() => [8, 8, 0, 8], []),
        D = a.useCallback(
            (e, t) => {
                let n = g[t];
                if (n.type === R.En.RECENT) return B;
                if (n.type === R.En.GUILD) {
                    let e = g[t + 1];
                    return null != e && e.type !== R.En.GUILD ? Z : F;
                }
                return V;
            },
            [g]
        ),
        {
            nonUnicodeCategoryCount: w,
            firstUnicodeCategoryIndex: j,
            firstUnicodeCategoryOffsetTop: W,
            rowCountBySection: K
        } = a.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            g.forEach((i) => {
                i.type === R.En.GUILD ? ((t += 1), (n += 1)) : i.type === R.En.UNICODE ? (r += 1) : ((e += 1), (t += 1));
            });
            let i = B + t * F + Z;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r]
            };
        }, [g]),
        [z, q] = a.useState(!0);
    a.useLayoutEffect(() => {
        q(w >= H);
    }, [w]);
    let Q = a.useCallback(
            (e) => {
                var t;
                let n = null === (t = S.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null != n) e + n.height - G >= W ? q(!1) : q(!0);
            },
            [W]
        ),
        X = a.useCallback(
            (e) => {
                var t;
                e(j), null === (t = S.current) || void 0 === t || t.scrollTo(W);
            },
            [W, j]
        ),
        $ = a.useCallback(
            (e, t) => {
                let n = g[e];
                if (null == n) return 0;
                let r = z ? x : 0;
                if (n.type === R.En.RECENT) return t ? 0 : U;
                if (n.type === R.En.GUILD) {
                    let n = g[e + 1];
                    return null != n && n.type !== R.En.GUILD ? (t ? G + -2 * k + M + r : M) : t ? r : M;
                }
                return t ? M + r : 2 * M;
            },
            [g, z]
        ),
        J = a.useMemo(
            () =>
                function (e, t) {
                    return (0, i.jsx)(a.Fragment, { children: t }, e);
                },
            []
        ),
        ee = z ? 'shortcut' : 'hiddenshortcut';
    return (0, i.jsx)(m.Z, {
        categoryListRef: S,
        expressionsListRef: n,
        className: t,
        store: p.kJ,
        categories: g,
        listPadding: y,
        onScroll: Q,
        renderCategoryListItem: C,
        renderSection: J,
        rowCount: g.length,
        categoryHeight: D,
        getScrollOffsetForIndex: $,
        rowCountBySection: K,
        children: (e) =>
            w >= H &&
            (0, i.jsx)(
                E.Clickable,
                {
                    'aria-hidden': !z,
                    'aria-label': b.Z.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
                    className: s()(L.unicodeShortcut, { [L.unicodeShortcutInvisible]: !z }),
                    tabIndex: z ? 0 : -1,
                    onClick: () => X(e),
                    children: (0, i.jsx)(E.ReactionIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: P,
                        width: P
                    })
                },
                ee
            )
    });
};
t.Z = j;
