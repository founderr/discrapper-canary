n.d(t, {
    A: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var i = n(481060);
function a(e) {
    let { message: t, initialAnswerId: a } = e;
    (0, i.openModalLazy)(async () => {
        let { default: e } = await n.e('74590').then(n.bind(n, 651081));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                message: t,
                initialAnswerId: a
            });
    });
}
