t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(213459),
    a = t(812236),
    l = t(989573);
function o(e) {
    let { channel: n, applicationId: t, botUserId: o } = e,
        r = (0, a.ms)({
            channel: n,
            applicationId: t,
            botUserId: o
        }),
        { isUserInstalled: s } = (0, i.If)(n, t),
        c = (0, l.Z)({ channelId: n.id });
    return r && null != o && !c && !s;
}
