t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(812236),
    a = t(989573);
function l(e) {
    let { channel: n, applicationId: t, botUserId: l } = e,
        o = (0, i.ms)({
            channel: n,
            applicationId: t,
            botUserId: l
        }),
        r = (0, a.Z)({ channelId: n.id });
    return o && null != l && !r;
}
