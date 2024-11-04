n.d(t, {
    H: function () {
        return o;
    },
    V: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(626135),
    s = n(687683),
    a = n(981631);
function o(e) {
    let { channelId: t, onConfirm: o, onCancel: c } = e;
    r.default.track(a.rMx.OPEN_MODAL, {
        type: s.t9,
        channel_id: t
    }),
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e('4117').then(n.bind(n, 217723));
            return (t) =>
                (0, i.jsx)(e, {
                    onConfirm: o,
                    onDismiss: c,
                    ...t
                });
        });
}
function c(e) {
    let { onConfirm: t, onCancel: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e('7649').then(n.bind(n, 797464));
        return (n) =>
            (0, i.jsx)(e, {
                onConfirm: t,
                onDismiss: r,
                ...n
            });
    });
}
