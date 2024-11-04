n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(82950),
    l = n(981631),
    s = n(921944),
    o = n(388032),
    c = n(524094);
function d(e) {
    let { guild: t, markAsDismissed: d } = e;
    return (0, i.jsx)(a.Z, {
        guild: t,
        onDismissed: () => d(s.L.UNKNOWN),
        onClick: function () {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        message: o.intl.string(o.t['1+hiPz']),
        cta: o.intl.string(o.t.hvVgAQ),
        trackingSource: l.PsQ.HUB_LINK_NOTICE,
        type: l.vID.HUB_LINK,
        image: c
    });
}
