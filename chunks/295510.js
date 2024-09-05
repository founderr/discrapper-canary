t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250);
t(470079);
var r = t(153867),
    a = t(468026),
    o = t(394059),
    l = t(689938);
function u(e) {
    let { type: n, onConfirm: t, ...u } = e,
        d = n === o.K.STREAM ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
        s = n === o.K.STREAM ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
    return (0, i.jsx)(a.default, {
        confirmText: l.Z.Messages.CONFIRM,
        secondaryConfirmText: l.Z.Messages.DONT_ASK_AGAIN,
        title: d,
        cancelText: l.Z.Messages.CANCEL,
        onConfirm: t,
        onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
        },
        body: s,
        ...u
    });
}
