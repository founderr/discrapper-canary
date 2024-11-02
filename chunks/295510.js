e.d(n, {
    Z: function () {
        return l;
    }
});
var i = e(200651);
e(192379);
var r = e(153867),
    o = e(468026),
    a = e(394059),
    u = e(388032);
function l(t) {
    let { type: n, onConfirm: e, ...l } = t,
        d = n === a.K.STREAM ? u.intl.string(u.t['/lFMWl']) : u.intl.string(u.t.xzxhZW),
        s = n === a.K.STREAM ? u.intl.string(u.t.xaOX7e) : u.intl.string(u.t.oU1p9P);
    return (0, i.jsx)(o.default, {
        confirmText: u.intl.string(u.t['cY+Ooa']),
        secondaryConfirmText: u.intl.string(u.t['JdIQ/f']),
        title: d,
        cancelText: u.intl.string(u.t['ETE/oK']),
        onConfirm: e,
        onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), e();
        },
        body: s,
        ...l
    });
}
