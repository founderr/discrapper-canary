r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(63063),
    a = r(927923),
    s = r(388032);
function o(e, n, r) {
    let a = null;
    return (
        'failed' === n ? (a = l(e, r.code)) : 'n/a' === n && (a = u(e, r.code)),
        null != a &&
            (a.errorCodeMessage = s.intl.format(s.t['1Bi9CQ'], {
                supportURL: i.Z.getSubmitRequestURL(),
                errorCode: r.code
            })),
        a
    );
}
function l(e, n) {
    let { platform: r, name: i } = e;
    switch (n) {
        case a.Ry.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
            return {
                title: s.intl.string(s.t['GSZ+HB']),
                body: s.intl.formatToPlainString(s.t['cYX/3N'], { deviceType: r })
            };
        case a.Ry.CONSOLE_DEVICE_INVALID_POWER_MODE:
            return {
                title: s.intl.formatToPlainString(s.t.akd6S0, { deviceType: r }),
                body: s.intl.formatToPlainString(s.t.RyOvpK, { deviceName: i })
            };
        case a.Ry.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
            return {
                title: s.intl.formatToPlainString(s.t.M6Vzam, { deviceType: r }),
                body: s.intl.formatToPlainString(s.t.InKtnJ, { deviceName: i })
            };
        case a.Ry.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
            return {
                title: s.intl.string(s.t['QL1y9/']),
                body: s.intl.formatToPlainString(s.t.D18eZm, { deviceType: r }),
                isAccountLinkError: !0
            };
        default:
            return {
                title: s.intl.string(s.t['QL1y9/']),
                body: s.intl.formatToPlainString(s.t['6ZyNHx'], { deviceName: i })
            };
    }
}
function u(e, n) {
    let { platform: r, name: i } = e;
    if (n === a.Ry.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED)
        return {
            title: s.intl.formatToPlainString(s.t.KchfhI, { deviceType: r }),
            body: s.intl.formatToPlainString(s.t['21ndz8'], { deviceName: i })
        };
    return null;
}
