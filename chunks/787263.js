e.d(t, {
    w: function () {
        return r;
    }
});
var i = e(200651);
e(192379);
var a = e(481060);
function r(n, t) {
    return (0, a.openModalLazy)(async () => {
        let { default: a } = await e.e('79521').then(e.bind(e, 207540));
        return (e) =>
            (0, i.jsx)(a, {
                ...e,
                onConfirm: () => {
                    e.onClose(), t();
                },
                channel: n
            });
    });
}
