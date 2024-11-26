n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(880949),
    d = n(806966),
    f = n(254494),
    _ = n(593618),
    p = n(594174),
    h = n(74538),
    m = n(697426),
    g = n(526617),
    E = n(474936),
    v = n(388032),
    I = n(843282);
let T = [8, 8, 8, 8];
function b(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: a, ...o } = e;
    return (0, r.jsx)(u.Clickable, {
        ...a,
        ...o,
        onClick: i,
        className: s()(I.categoryIcon, { [I.selected]: n }),
        children: (0, r.jsx)(t, {
            className: I.categoryIconIcon,
            color: 'currentColor'
        })
    });
}
function S(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: a, isNitroLocked: s } = e,
        l = (0, o.JA)('soundboard_guild_'.concat(n));
    return (0, r.jsx)(u.Tooltip, {
        text: (function (e) {
            switch (e.categoryInfo.type) {
                case m.bg.FAVORITES:
                    return v.intl.string(v.t.k8fFjo);
                case m.bg.RECENTLY_HEARD:
                    return v.intl.string(v.t['8i/+SE']);
                case m.bg.FREQUENTLY_USED:
                    return v.intl.string(v.t['+cGVV1']);
                case m.bg.GUILD:
                    return (0, r.jsx)(_.K, {
                        guild: e.categoryInfo.guild,
                        includeActivity: !1
                    });
                case m.bg.DEFAULTS:
                    return v.intl.string(v.t.Rtvk9f);
            }
        })(t),
        'aria-label': (function (e) {
            switch (e.categoryInfo.type) {
                case m.bg.FAVORITES:
                    return v.intl.string(v.t.k8fFjo);
                case m.bg.RECENTLY_HEARD:
                    return v.intl.string(v.t['8i/+SE']);
                case m.bg.FREQUENTLY_USED:
                    return v.intl.string(v.t['+cGVV1']);
                case m.bg.GUILD:
                    return e.categoryInfo.guild.name;
                case m.bg.DEFAULTS:
                    return v.intl.string(v.t.Rtvk9f);
            }
        })(t),
        position: 'right',
        children: (e) =>
            (function (e, t, n, i, a, s) {
                switch (e.categoryInfo.type) {
                    case m.bg.FAVORITES:
                        return (0, r.jsx)(
                            b,
                            {
                                ...i,
                                icon: u.StarIcon,
                                onClick: t,
                                isSelected: n,
                                listItemProps: a
                            },
                            e.key
                        );
                    case m.bg.RECENTLY_HEARD:
                        return (0, r.jsx)(
                            b,
                            {
                                ...i,
                                icon: u.ClockIcon,
                                onClick: t,
                                isSelected: n,
                                listItemProps: a
                            },
                            e.key
                        );
                    case m.bg.FREQUENTLY_USED:
                        return (0, r.jsx)(
                            b,
                            {
                                ...i,
                                icon: u.AnalyticsIcon,
                                onClick: t,
                                isSelected: n,
                                listItemProps: a
                            },
                            e.key
                        );
                    case m.bg.GUILD:
                        return (0, r.jsx)(
                            u.Clickable,
                            {
                                ...a,
                                ...i,
                                className: I.category,
                                onClick: t,
                                children: (0, r.jsx)(c.Z, {
                                    guild: e.categoryInfo.guild,
                                    isSelected: n,
                                    isLocked: s
                                })
                            },
                            e.key
                        );
                    case m.bg.DEFAULTS:
                        return (0, r.jsx)(
                            b,
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
            })(t, i, a, e, l, s)
    });
}
function y(e) {
    let { soundboardListRef: t, categories: n, shouldUpsellLockedCategories: a, listPadding: s = T, guildId: o, inExpressionPicker: u } = e,
        c = i.useRef(null),
        _ = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        m = (0, h.I5)(_, E.p9.TIER_2),
        v = i.useCallback(
            (e, t, n, i) => {
                let s = a && (0, g.O)(e.categoryInfo, m, o);
                return (0, r.jsx)(S, {
                    category: e,
                    categoryIndex: t,
                    onClick: n,
                    isSelected: i,
                    isNitroLocked: s
                });
            },
            [o, a, m]
        );
    return (0, r.jsx)(f.Z, {
        className: u ? I.expressionPickerCategoryList : I.categoryList,
        categoryListRef: c,
        expressionsListRef: t,
        store: d.Wq,
        categories: n,
        listPadding: s,
        renderCategoryListItem: v,
        rowCount: n.length,
        categoryHeight: 40
    });
}
