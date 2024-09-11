t.d(n, {
    w: function () {
        return r;
    }
});
var i = t(735250);
t(470079);
var l = t(481060);
function r(e, n) {
    return (0, l.openModalLazy)(async () => {
        let { default: l } = await Promise.all([t.e('53115'), t.e('79521')]).then(t.bind(t, 207540));
        return (t) =>
            (0, i.jsx)(l, {
                ...t,
                onConfirm: () => {
                    t.onClose(), n();
                },
                channel: e
            });
    });
}
