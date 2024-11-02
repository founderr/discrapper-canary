e.d(t, {
    w: function () {
        return a;
    }
});
var i = e(200651);
e(192379);
var r = e(481060);
function a(n, t) {
    return (0, r.openModalLazy)(async () => {
        let { default: r } = await e.e('79521').then(e.bind(e, 207540));
        return (e) =>
            (0, i.jsx)(r, {
                ...e,
                onConfirm: () => {
                    e.onClose(), t();
                },
                channel: n
            });
    });
}
