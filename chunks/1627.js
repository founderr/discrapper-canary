var r = n(481060),
    i = n(703656),
    a = n(302155),
    o = n(71509),
    s = n(981631),
    l = n(689938);
t.Z = new a.Z({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, i.uL)(s.Z5c.ME), (0, r.showToast)((0, r.createToast)(l.Z.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({ username: e.username }), r.ToastType.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, r.showToast)((0, r.createToast)(l.Z.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, r.ToastType.FAILURE));
    },
    onTokenSet() {
        (0, r.closeModal)(o.Ui);
    }
});
