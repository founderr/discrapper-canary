t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var r = t(153867),
    l = t(468026),
    u = t(394059),
    a = t(388032);
function o(n) {
    let { type: e, onConfirm: t, ...o } = n,
        d = e === u.K.STREAM ? a.intl.string(a.t['/lFMWl']) : a.intl.string(a.t.xzxhZW),
        c = e === u.K.STREAM ? a.intl.string(a.t.xaOX7e) : a.intl.string(a.t.oU1p9P);
    return (0, i.jsx)(l.default, {
        confirmText: a.intl.string(a.t['cY+Ooa']),
        secondaryConfirmText: a.intl.string(a.t['JdIQ/f']),
        title: d,
        cancelText: a.intl.string(a.t['ETE/oK']),
        onConfirm: t,
        onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
        },
        body: c,
        ...o
    });
}
