t.d(n, {
    w: function () {
        return r;
    }
});
var i = t(735250);
t(470079);
var a = t(481060);
function r(e, n) {
    return (0, a.openModalLazy)(async () => {
        let { default: a } = await Promise.all([t.e('53115'), t.e('79521')]).then(t.bind(t, 207540));
        return (t) =>
            (0, i.jsx)(a, {
                ...t,
                onConfirm: () => {
                    t.onClose(), n();
                },
                channel: e
            });
    });
}
