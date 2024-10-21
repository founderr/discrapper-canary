n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(200651);
n(192379);
var a = n(481060),
    r = n(626135),
    i = n(503899),
    l = n(292352),
    o = n(981631),
    c = n(689938),
    _ = n(386676);
function d() {
    return (0, s.jsxs)(a.Button, {
        innerClassName: _.qrCodeButtonContent,
        size: a.Button.Sizes.LARGE,
        onClick: () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('15812'), n.e('90688')]).then(n.bind(n, 978305));
                return (t) => (0, s.jsx)(e, { ...t });
            }),
                r.default.track(o.rMx.FAMILY_CENTER_ACTION, { action: l.YC.ShowQRCodeModal });
        },
        children: [(0, s.jsx)(i.Z, {}), c.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_BUTTON]
    });
}
