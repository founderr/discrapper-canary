n.d(t, {
    b: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(846027),
    o = n(468026),
    s = n(689938);
let l = null;
function u() {
    null !== l && (0, i.closeModal)(l), (l = null);
}
function c() {
    a.Z.setSilenceWarning(!1), u();
}
function d() {
    l = (0, i.openModal)((e) =>
        (0, r.jsx)(o.default, {
            title: s.Z.Messages.CONFIRM_DISABLE_SILENCE_TITLE,
            body: s.Z.Messages.CONFIRM_DISABLE_SILENCE_BODY,
            secondaryConfirmText: s.Z.Messages.CONFIRM_DISABLE_SILENCE_DONT_SHOW,
            onConfirmSecondary: c,
            onConfirm: u,
            confirmText: s.Z.Messages.OKAY,
            ...e
        })
    );
}
