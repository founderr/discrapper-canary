var r = n(481060),
    i = n(375964);
var a = n(703656),
    o = n(302155),
    s = n(71509),
    l = n(981631),
    u = n(689938);
t.Z = new o.Z({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, a.uL)(l.Z5c.ME), (0, r.showToast)((0, r.createToast)(u.Z.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({ username: e.username }), r.ToastType.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, r.showToast)((0, r.createToast)(i.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, r.ToastType.FAILURE));
    },
    onTokenSet() {
        (0, r.closeModal)(s.Ui);
    }
});
