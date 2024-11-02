n.d(t, {
    i: function () {
        return a;
    },
    w: function () {
        return i;
    }
});
var o = n(990547),
    s = n(573261),
    l = n(981631);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return s.Z.put({
        url: l.ANM.USER_EMAIL,
        trackedActionData: {
            event: o.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e }
        }
    });
}
async function i(e) {
    return (
        await s.Z.post({
            url: l.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: { event: o.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE }
        })
    ).body;
}
