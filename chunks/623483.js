e.d(t, {
    Z: function () {
        return u;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(117984),
    a = e(388032);
function u(n) {
    return (0, i.jsx)(r.MenuItem, {
        id: 'delete-channel',
        label: a.intl.string(a.t.Jg0R7e),
        subtext: a.intl.string(a.t['+mNKMz']),
        color: 'danger',
        action: () =>
            (0, r.openModalLazy)(async () => {
                let { default: t } = await e.e('37720').then(e.bind(e, 357632));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onConfirm: () => {
                            e.onClose(), (0, l.xh)(n.id);
                        },
                        channel: n
                    });
            })
    });
}
