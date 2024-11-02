n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(388032);
function s() {
    function e() {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e('82935').then(n.bind(n, 431583));
            return (t) =>
                (0, r.jsx)(e, {
                    source: 'Screenshare Unavailable',
                    ...t
                });
        });
    }
    (0, i.openModalLazy)(async () => {
        let { default: t } = await n.e('67753').then(n.bind(n, 873809));
        return (n) =>
            (0, r.jsx)(t, {
                ...n,
                header: a.intl.string(a.t.GFr0GR),
                body: a.intl.string(a.t.QSk6Ex),
                confirmText: a.intl.string(a.t.BK8LKy),
                onConfirm: e
            });
    });
}
