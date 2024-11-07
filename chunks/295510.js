t.d(e, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(153867),
    r = t(468026),
    u = t(394059),
    a = t(388032);
function d(n) {
    let { type: e, onConfirm: t, ...d } = n,
        o = e === u.K.STREAM ? a.intl.string(a.t['/lFMWl']) : a.intl.string(a.t.xzxhZW),
        s = e === u.K.STREAM ? a.intl.string(a.t.xaOX7e) : a.intl.string(a.t.oU1p9P);
    return (0, i.jsx)(r.default, {
        confirmText: a.intl.string(a.t['cY+Ooa']),
        secondaryConfirmText: a.intl.string(a.t['JdIQ/f']),
        title: o,
        cancelText: a.intl.string(a.t['ETE/oK']),
        onConfirm: t,
        onConfirmSecondary: () => {
            l.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
        },
        body: s,
        ...d
    });
}
