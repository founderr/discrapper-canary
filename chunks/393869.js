n.d(t, {
    i: function () {
        return a;
    },
    w: function () {
        return i;
    }
});
var s = n(990547),
    o = n(573261),
    l = n(981631);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return o.Z.put({
        url: l.ANM.USER_EMAIL,
        trackedActionData: {
            event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e }
        },
        rejectWithError: !1
    });
}
async function i(e) {
    return (
        await o.Z.post({
            url: l.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: { event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1
        })
    ).body;
}
