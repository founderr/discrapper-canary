n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(880949),
    d = n(806966),
    _ = n(254494),
    E = n(593618),
    f = n(594174),
    h = n(74538),
    p = n(697426),
    m = n(526617),
    I = n(474936),
    T = n(689938),
    g = n(199398);
let S = [8, 8, 8, 8],
    A = 40;
function v(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: a, ...s } = e;
    return (0, r.jsx)(u.Clickable, {
        ...a,
        ...s,
        onClick: i,
        className: o()(g.categoryIcon, { [g.selected]: n }),
        children: (0, r.jsx)(t, {
            className: g.categoryIconIcon,
            color: 'currentColor'
        })
    });
}
function N(e, t, n, i, a, o) {
    switch (e.categoryInfo.type) {
        case p.bg.FAVORITES:
            return (0, r.jsx)(
                v,
                {
                    ...i,
                    icon: u.StarIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        case p.bg.RECENTLY_HEARD:
            return (0, r.jsx)(
                v,
                {
                    ...i,
                    icon: u.ClockIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        case p.bg.FREQUENTLY_USED:
            return (0, r.jsx)(
                v,
                {
                    ...i,
                    icon: u.AnalyticsIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        case p.bg.GUILD:
            return (0, r.jsx)(
                u.Clickable,
                {
                    ...a,
                    ...i,
                    className: g.category,
                    onClick: t,
                    children: (0, r.jsx)(c.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: n,
                        isLocked: o
                    })
                },
                e.key
            );
        case p.bg.DEFAULTS:
            return (0, r.jsx)(
                v,
                {
                    ...i,
                    icon: u.ClydeIcon,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        default:
            return null;
    }
}
function O(e) {
    switch (e.categoryInfo.type) {
        case p.bg.FAVORITES:
            return T.Z.Messages.FAVORITES;
        case p.bg.RECENTLY_HEARD:
            return T.Z.Messages.RECENTLY_HEARD;
        case p.bg.FREQUENTLY_USED:
            return T.Z.Messages.FREQUENTLY_USED;
        case p.bg.GUILD:
            return (0, r.jsx)(E.K, {
                guild: e.categoryInfo.guild,
                includeActivity: !1
            });
        case p.bg.DEFAULTS:
            return T.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
    }
}
function R(e) {
    switch (e.categoryInfo.type) {
        case p.bg.FAVORITES:
            return T.Z.Messages.FAVORITES;
        case p.bg.RECENTLY_HEARD:
            return T.Z.Messages.RECENTLY_HEARD;
        case p.bg.FREQUENTLY_USED:
            return T.Z.Messages.FREQUENTLY_USED;
        case p.bg.GUILD:
            return e.categoryInfo.guild.name;
        case p.bg.DEFAULTS:
            return T.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
    }
}
function C(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: a, isNitroLocked: o } = e,
        l = (0, s.JA)('soundboard_guild_'.concat(n));
    return (0, r.jsx)(u.Tooltip, {
        text: O(t),
        'aria-label': R(t),
        position: 'right',
        children: (e) => N(t, i, a, e, l, o)
    });
}
function y(e) {
    let { soundboardListRef: t, categories: n, shouldUpsellLockedCategories: a, listPadding: o = S, guildId: s, inExpressionPicker: u } = e,
        c = i.useRef(null),
        E = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        p = (0, h.I5)(E, I.p9.TIER_2),
        T = i.useCallback(
            (e, t, n, i) => {
                let o = a && (0, m.O)(e.categoryInfo, p, s);
                return (0, r.jsx)(C, {
                    category: e,
                    categoryIndex: t,
                    onClick: n,
                    isSelected: i,
                    isNitroLocked: o
                });
            },
            [s, a, p]
        );
    return (0, r.jsx)(_.Z, {
        className: u ? g.expressionPickerCategoryList : g.categoryList,
        categoryListRef: c,
        expressionsListRef: t,
        store: d.Wq,
        categories: n,
        listPadding: o,
        renderCategoryListItem: T,
        rowCount: n.length,
        categoryHeight: A
    });
}
