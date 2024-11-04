n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060);
function a(e) {
    let { upsellType: t } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await n.e('51816').then(n.bind(n, 415788));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                upsellType: t,
                'aria-labelledby': 'reverse-trial-upsell-modal'
            });
    });
}
