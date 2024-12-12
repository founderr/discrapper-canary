r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(388032);
function o() {
    function e() {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('82935').then(r.bind(r, 431583));
            return (n) =>
                (0, i.jsx)(e, {
                    source: 'Screenshare Unavailable',
                    ...n
                });
        });
    }
    (0, a.openModalLazy)(async () => {
        let { default: n } = await r.e('67753').then(r.bind(r, 873809));
        return (r) =>
            (0, i.jsx)(n, {
                ...r,
                header: s.intl.string(s.t.GFr0GR),
                body: s.intl.string(s.t.QSk6Ex),
                confirmText: s.intl.string(s.t.BK8LKy),
                onConfirm: e
            });
    });
}
