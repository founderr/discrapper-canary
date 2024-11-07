n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(91192),
    c = n(442837),
    d = n(477690),
    f = n(481060),
    _ = n(2052),
    h = n(607070),
    p = n(806966),
    m = n(254494),
    g = n(593618),
    E = n(451478),
    v = n(626135),
    I = n(624138),
    S = n(543241),
    T = n(883661),
    b = n(880949),
    y = n(784222),
    A = n(149203),
    N = n(981631),
    C = n(957825),
    R = n(388032),
    O = n(76640);
let D = (0, I.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    L = (0, I.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    x = (0, I.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    w = (0, I.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    M = (0, I.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    P = (0, I.Mg)(O.__invalid_unicodeCategoryShortcutHeight),
    k = (0, I.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    U = (0, I.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    G = x + L + 2 * M,
    B = D + L,
    Z = B + (k + 2 * U),
    F = x + w + 2 * M;
function V(e) {
    let { activeIndex: t, categoryIndex: n, analyticsContext: a, categories: o, category: l, handleCategorySelect: c, isWindowFocused: d, useReducedMotion: _ } = e,
        h = (0, u.JA)('expression-guild-'.concat(n)),
        p = l.type === A.En.GUILD ? null : l.id,
        m = t === n,
        E = l.type === A.En.GUILD ? l.guild : null,
        I = (0, r.jsxs)(f.Clickable, {
            ...h,
            'aria-label': (0, S.Nf)(l, E),
            className: s()({
                [O.categoryItemGuildCategory]: null != E,
                [O.categoryItemDefaultCategory]: null == E,
                [O.categoryItemDefaultCategorySelected]: null == E && m,
                [O.categoryItemRecentEmoji]: l.type === A.En.RECENT
            }),
            onClick: () => {
                null != E &&
                    v.default.track(N.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: null == a ? void 0 : a.location,
                        tab: C.X1.EMOJI,
                        guild_id: E.id
                    }),
                    c(n);
            },
            children: [
                null != E
                    ? (0, r.jsx)(b.Z, {
                          guild: E,
                          isSelected: m,
                          shouldAnimate: !_ && d,
                          isLocked: l.isNitroLocked
                      })
                    : null,
                null == E && null != p
                    ? (0, r.jsx)(T.Z, {
                          categoryId: p,
                          className: O.categoryIcon,
                          height: x,
                          width: x,
                          size: 'custom'
                      })
                    : null
            ]
        }),
        y = o[n + 1],
        R = null != y && l.type === A.En.GUILD && y.type !== A.En.GUILD;
    return null != E
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(g.Z, {
                      guild: E,
                      includeActivity: !1,
                      children: (0, r.jsx)('div', { children: I })
                  }),
                  R ? (0, r.jsx)('hr', { className: O.guildCategorySeparator }, 'separator') : null
              ]
          })
        : I;
}
t.Z = (e) => {
    let { className: t, emojiListRef: n, sectionDescriptors: a, intention: o, channel: u } = e,
        d = p.kJ.useStore((e) => e.activeCategoryIndex),
        g = (0, y.Ni)({
            sectionDescriptors: a,
            emojiListRef: n
        }),
        v = (0, _.O)(),
        I = (0, S.kI)(o, u),
        T = i.useRef(null),
        b = (0, c.e7)([E.Z], () => E.Z.isFocused()),
        N = (0, c.e7)([h.Z], () => h.Z.useReducedMotion, []),
        C = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = I[t];
                    if (null != n)
                        return (0, r.jsx)(
                            V,
                            {
                                activeIndex: d,
                                analyticsContext: v,
                                categories: I,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: g,
                                isWindowFocused: b,
                                useReducedMotion: N
                            },
                            t
                        );
                }),
            [d, v, I, g, b, N]
        ),
        D = i.useMemo(() => [8, 8, 0, 8], []),
        M = i.useCallback(
            (e, t) => {
                let n = I[t];
                if (n.type === A.En.RECENT) return G;
                if (n.type === A.En.GUILD) {
                    let e = I[t + 1];
                    return null != e && e.type !== A.En.GUILD ? Z : B;
                }
                return F;
            },
            [I]
        ),
        {
            nonUnicodeCategoryCount: H,
            firstUnicodeCategoryIndex: j,
            firstUnicodeCategoryOffsetTop: Y,
            rowCountBySection: W
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            I.forEach((i) => {
                i.type === A.En.GUILD ? ((t += 1), (n += 1)) : i.type === A.En.UNICODE ? (r += 1) : ((e += 1), (t += 1));
            });
            let i = G + t * B + Z;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r]
            };
        }, [I]),
        [K, z] = i.useState(!0);
    i.useLayoutEffect(() => {
        z(H >= 7);
    }, [H]);
    let q = i.useCallback(
            (e) => {
                var t;
                let n = null === (t = T.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null != n) e + n.height - k >= Y ? z(!1) : z(!0);
            },
            [Y]
        ),
        Q = i.useCallback(
            (e) => {
                var t;
                e(j), null === (t = T.current) || void 0 === t || t.scrollTo(Y);
            },
            [Y, j]
        ),
        X = i.useCallback(
            (e, t) => {
                let n = I[e];
                if (null == n) return 0;
                let r = K ? P : 0;
                if (n.type === A.En.RECENT) return t ? 0 : w;
                if (n.type === A.En.GUILD) {
                    let n = I[e + 1];
                    return null != n && n.type !== A.En.GUILD ? (t ? k + -2 * U + L + r : L) : t ? r : L;
                }
                return t ? L + r : 2 * L;
            },
            [I, K]
        ),
        J = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            []
        ),
        $ = K ? 'shortcut' : 'hiddenshortcut';
    return (0, r.jsx)(m.Z, {
        categoryListRef: T,
        expressionsListRef: n,
        className: t,
        store: p.kJ,
        categories: I,
        listPadding: D,
        onScroll: q,
        renderCategoryListItem: C,
        renderSection: J,
        rowCount: I.length,
        categoryHeight: M,
        getScrollOffsetForIndex: X,
        rowCountBySection: W,
        children: (e) =>
            H >= 7 &&
            (0, r.jsx)(
                f.Clickable,
                {
                    'aria-hidden': !K,
                    'aria-label': R.intl.string(R.t.dT0ct7),
                    className: s()(O.unicodeShortcut, { [O.unicodeShortcutInvisible]: !K }),
                    tabIndex: K ? 0 : -1,
                    onClick: () => Q(e),
                    children: (0, r.jsx)(f.ReactionIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: x,
                        width: x
                    })
                },
                $
            )
    });
};
