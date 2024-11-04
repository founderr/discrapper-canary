n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(607187),
    s = n(112560),
    a = n(981631),
    o = n(388032),
    c = n(795447),
    u = n(800350);
function d(e) {
    let { channel: t, guild: d, width: h, inPopout: m } = e;
    return (0, i.jsx)(r.Z, {
        className: c.root,
        children: (0, i.jsx)(s.Z, {
            artURL: u,
            size: (0, s.L)(h),
            header: o.intl.string(o.t.O4FiWl),
            onCTAClick: () =>
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: d,
                                channel: t,
                                source: a.t4x.CHANNEL_CALL
                            });
                    },
                    { contextKey: m ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT }
                ),
            callToAction: o.intl.string(o.t.VINpSE)
        })
    });
}
