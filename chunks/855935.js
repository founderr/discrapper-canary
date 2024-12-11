n.d(t, {
    Z: function () {
        return x;
    }
});
var l = n(200651),
    o = n(192379),
    i = n(498607),
    a = n.n(i),
    r = n(399606),
    s = n(481060),
    c = n(588215),
    C = n(893966),
    d = n(527379),
    u = n(981631),
    m = n(388032);
let h = [c.d$.ORDER_BY_GUILD_JOINED_AT_DESC, c.d$.ORDER_BY_GUILD_JOINED_AT_ASC, c.d$.ORDER_BY_USER_ID_DESC, c.d$.ORDER_BY_USER_ID_ASC];
function x(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, r.e7)([C.Z], () => C.Z.getSearchStateByGuildId(t), [t], a()),
        x = o.useCallback(
            (e) => {
                (0, d.Dr)(t, {
                    ...i,
                    selectedSort: e
                });
            },
            [t, i]
        );
    return (0, l.jsx)(s.Menu, {
        navId: 'members-table-sort-menu',
        onClose: () => {
            null == n || n();
        },
        'aria-label': m.intl.string(m.t['u/7RdX']),
        onSelect: u.dG4,
        children: (0, l.jsx)(s.MenuGroup, {
            children: h.map((e) => {
                var t, n;
                return (0, l.jsx)(
                    s.MenuRadioItem,
                    {
                        id: 'members-table-sort-'.concat(e),
                        label: (function (e) {
                            switch (e) {
                                case c.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
                                    return m.intl.string(m.t.V7zCwM);
                                case c.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
                                    return m.intl.string(m.t.l2Zaen);
                                case c.d$.ORDER_BY_USER_ID_DESC:
                                    return m.intl.string(m.t.xMA6RE);
                                case c.d$.ORDER_BY_USER_ID_ASC:
                                    return m.intl.string(m.t.bUKkZ2);
                                default:
                                    return null;
                            }
                        })(e),
                        checked: ((t = e), (n = i.selectedSort) === c.d$.ORDER_BY_UNSPECIFIED || null == n ? t === c.d$.ORDER_BY_GUILD_JOINED_AT_DESC : t === n),
                        disabled: !1,
                        action: () => x(e),
                        group: 'members-table-sort'
                    },
                    'members-table-sort-'.concat(e)
                );
            })
        })
    });
}
