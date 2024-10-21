n.d(t, {
    B: function () {
        return _;
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
    c = n(689938);
function d(e) {
    return (0, i.EQ)(e)
        .when(o.dX, () => c.Z.Messages.USER_ACTIVITY_CLEAR_GAME_HISTORY)
        .when(o.y0, () => c.Z.Messages.USER_ACTIVITY_CLEAR_WATCH_HISTORY)
        .when(o.kq, () => c.Z.Messages.USER_ACTIVITY_CLEAR_LISTENING_HISTORY)
        .when(o.m9, () => c.Z.Messages.USER_ACTIVITY_CLEAR_ACTIVITY_HISTORY)
        .exhaustive();
}
function _(e) {
    let { user: t, entry: i, display: c, onAction: _, onClose: E } = e,
        f = (0, u.Z)({ onClose: E }),
        h = (0, a.e7)([l.default], () => l.default.getCurrentUser());
    if (t.id !== (null == h ? void 0 : h.id) || 'live' === c || null == i || !(0, o.LP)(i)) return null;
    let p = () => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('89943'), n.e('62880'), n.e('27421')]).then(n.bind(n, 81596));
            return (n) =>
                (0, r.jsx)(e, {
                    entry: i,
                    user: t,
                    onAction: _,
                    onOpenGameSettings: f,
                    ...n
                });
        });
    };
    return (0, r.jsx)(s.MenuItem, {
        id: 'delete-entry-history',
        label: d(i),
        action: () => {
            null == _ || _({ action: 'PRESS_DELETE_HISTORY_MENU_ITEM' }), p();
        },
        color: 'danger'
    });
}
