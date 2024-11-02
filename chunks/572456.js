n.d(e, {
    XN: function () {
        return a;
    },
    af: function () {
        return o;
    },
    gK: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(481060);
function l(t) {
    return new Promise((e) => {
        (0, i.openModalLazy)(() =>
            t(
                () => {
                    e(!0);
                },
                (t) => (e(!1), t())
            )
        );
    });
}
let u = (t) =>
        l(async (e, i) => {
            let { default: l } = await n.e('44462').then(n.bind(n, 478472));
            return (n) =>
                (0, r.jsx)(l, {
                    ...n,
                    ruleName: t,
                    onConfirm: e,
                    onClose: () => i(n.onClose),
                    onCancel: () => i(n.onClose)
                });
        }),
    a = (t, e) =>
        l(async (i, l) => {
            let { default: u } = await n.e('92575').then(n.bind(n, 601787));
            return (n) =>
                (0, r.jsx)(u, {
                    ...n,
                    ruleName: t,
                    keyword: e,
                    onConfirm: i,
                    onClose: () => l(n.onClose),
                    onCancel: () => l(n.onClose)
                });
        }),
    o = (t) => (e) =>
        l(async (i, l) => {
            let { default: u } = await n.e('83613').then(n.bind(n, 449675)),
                a = () => {
                    e(), i();
                };
            return (e) =>
                (0, r.jsx)(u, {
                    ruleName: t,
                    ...e,
                    onConfirm: a,
                    onClose: () => l(e.onClose),
                    onCancel: () => l(e.onClose)
                });
        });
