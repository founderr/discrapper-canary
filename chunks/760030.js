var r = n(481060),
    i = n(388032);
t.Z = {
    showIgnoreSuccessToast(e) {
        (0, r.showToast)((0, r.createToast)(i.intl.formatToPlainString(i.t['+joqrK'], { username: e }), r.ToastType.SUCCESS));
    },
    showUnignoreSuccessToast(e) {
        (0, r.showToast)((0, r.createToast)(i.intl.formatToPlainString(i.t.THExKS, { username: e }), r.ToastType.SUCCESS));
    },
    showBlockSuccessToast(e) {
        (0, r.showToast)((0, r.createToast)(i.intl.formatToPlainString(i.t.XXPrIi, { username: e }), r.ToastType.SUCCESS));
    },
    showUnblockSuccessToast(e) {
        (0, r.showToast)((0, r.createToast)(i.intl.formatToPlainString(i.t.uExcGR, { username: e }), r.ToastType.SUCCESS));
    },
    showMuteSuccessToast(e) {
        (0, r.showToast)((0, r.createToast)(i.intl.formatToPlainString(i.t.X4NtYW, { username: e }), r.ToastType.SUCCESS));
    },
    showUnmuteSuccessToast(e) {
        (0, r.showToast)((0, r.createToast)(i.intl.formatToPlainString(i.t.tRaBfX, { username: e }), r.ToastType.SUCCESS));
    },
    showFailedToast() {
        (0, r.showToast)((0, r.createToast)(i.intl.string(i.t.zBpoc3), r.ToastType.FAILURE));
    }
};
