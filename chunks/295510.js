n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(153867),
    a = n(468026),
    r = n(394059),
    s = n(388032);
function o(e) {
    let { type: t, onConfirm: n, ...o } = e,
        c = t === r.K.STREAM ? s.intl.string(s.t['/lFMWl']) : s.intl.string(s.t.xzxhZW),
        d = t === r.K.STREAM ? s.intl.string(s.t.xaOX7e) : s.intl.string(s.t.oU1p9P);
    return (0, i.jsx)(a.default, {
        confirmText: s.intl.string(s.t['cY+Ooa']),
        secondaryConfirmText: s.intl.string(s.t['JdIQ/f']),
        title: c,
        cancelText: s.intl.string(s.t['ETE/oK']),
        onConfirm: n,
        onConfirmSecondary: () => {
            l.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n();
        },
        body: d,
        ...o
    });
}
