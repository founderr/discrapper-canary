t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(213459),
    a = t(689938);
function l(e) {
    let { applicationId: n, channel: t } = e;
    (0, i.PL)(!0, !0);
    let { isUserInstalled: l } = (0, i.If)(t, n);
    return { buttonText: l ? a.Z.Messages.APP_LAUNCHER_OPEN_DM : a.Z.Messages.TRY_IT_OUT };
}
