n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(153867),
    a = n(468026),
    o = n(394059),
    s = n(689938);
function l(e) {
    let { type: t, onConfirm: n, ...l } = e,
        u = t === o.K.STREAM ? s.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
        d = t === o.K.STREAM ? s.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
    return (0, r.jsx)(a.default, {
        confirmText: s.Z.Messages.CONFIRM,
        secondaryConfirmText: s.Z.Messages.DONT_ASK_AGAIN,
        title: u,
        cancelText: s.Z.Messages.CANCEL,
        onConfirm: n,
        onConfirmSecondary: () => {
            i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n();
        },
        body: d,
        ...l
    });
}
