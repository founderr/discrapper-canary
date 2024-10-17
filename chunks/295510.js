t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(735250);
t(470079);
var r = t(153867),
    o = t(468026),
    a = t(394059),
    u = t(689938);
function s(e) {
    let { type: n, onConfirm: t, ...s } = e,
        l = n === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
        d = n === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
    return (0, i.jsx)(o.default, {
        confirmText: u.Z.Messages.CONFIRM,
        secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
        title: l,
        cancelText: u.Z.Messages.CANCEL,
        onConfirm: t,
        onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), t();
        },
        body: d,
        ...s
    });
}
