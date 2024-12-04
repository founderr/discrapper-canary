n.d(t, {
    B: function () {
        return f;
    },
    y: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(442837),
    s = n(481060),
    o = n(26033),
    l = n(594174),
    u = n(324745),
    c = n(388032);
function d(e) {
    return (0, i.EQ)(e)
        .when(o.dX, () => c.intl.string(c.t['4f8iur']))
        .when(o.y0, () => c.intl.string(c.t.yX2hNz))
        .when(o.kq, () => c.intl.string(c.t.oSs8en))
        .when(o.m9, () => c.intl.string(c.t.bK9GT0))
        .exhaustive();
}
function f(e) {
    let { user: t, entry: i, display: c, onAction: f, onClose: _ } = e,
        p = (0, u.Z)({ onClose: _ }),
        h = (0, a.e7)([l.default], () => l.default.getCurrentUser());
    if (t.id !== (null == h ? void 0 : h.id) || 'live' === c || null == i || !(0, o.LP)(i)) return null;
    let m = () => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('26545').then(n.bind(n, 81596));
            return (n) =>
                (0, r.jsx)(e, {
                    entry: i,
                    user: t,
                    onAction: f,
                    onOpenGameSettings: p,
                    ...n
                });
        });
    };
    return (0, r.jsx)(s.MenuItem, {
        id: 'delete-entry-history',
        label: d(i),
        action: () => {
            null == f || f({ action: 'PRESS_DELETE_HISTORY_MENU_ITEM' }), m();
        },
        color: 'danger'
    });
}
