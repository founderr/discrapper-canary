n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(846027),
    l = n(468026),
    r = n(503856),
    o = n(689938);
function c(e, t, c) {
    if (t && (0, r.p)()) {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e('41281').then(n.bind(n, 669732));
            return (t) => (0, i.jsx)(e, { ...t });
        });
        return;
    }
    if (t) {
        (0, s.openModal)((e) =>
            (0, i.jsx)(l.default, {
                ...e,
                title: o.Z.Messages.SUPPRESSED,
                body: o.Z.Messages.SUPPRESSED_PERMISSION_BODY
            })
        );
        return;
    }
    if (e) {
        (0, s.openModal)((e) =>
            (0, i.jsx)(l.default, {
                ...e,
                title: o.Z.Messages.SERVER_MUTED_DIALOG_TITLE,
                body: o.Z.Messages.SERVER_MUTED_DIALOG_BODY
            })
        );
        return;
    }
    a.Z.toggleSelfMute({ location: c });
}
