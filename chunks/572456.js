n.d(t, {
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
function l(e) {
    return new Promise((t) => {
        (0, i.openModalLazy)(() =>
            e(
                () => {
                    t(!0);
                },
                (e) => (t(!1), e())
            )
        );
    });
}
let u = (e) =>
        l(async (t, i) => {
            let { default: l } = await n.e('44462').then(n.bind(n, 478472));
            return (n) =>
                (0, r.jsx)(l, {
                    ...n,
                    ruleName: e,
                    onConfirm: t,
                    onClose: () => i(n.onClose),
                    onCancel: () => i(n.onClose)
                });
        }),
    a = (e, t) =>
        l(async (i, l) => {
            let { default: u } = await n.e('92575').then(n.bind(n, 601787));
            return (n) =>
                (0, r.jsx)(u, {
                    ...n,
                    ruleName: e,
                    keyword: t,
                    onConfirm: i,
                    onClose: () => l(n.onClose),
                    onCancel: () => l(n.onClose)
                });
        }),
    o = (e) => (t) =>
        l(async (i, l) => {
            let { default: u } = await n.e('83613').then(n.bind(n, 449675)),
                a = () => {
                    t(), i();
                };
            return (t) =>
                (0, r.jsx)(u, {
                    ruleName: e,
                    ...t,
                    onConfirm: a,
                    onClose: () => l(t.onClose),
                    onCancel: () => l(t.onClose)
                });
        });
