r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(399606),
    a = r(592125),
    s = r(594174);
function o(e) {
    let { channelId: n } = e,
        r = (0, i.e7)([a.Z], () => a.Z.getChannel(n));
    return (0, i.e7)([s.default], () => {
        var e;
        return null != r && r.isDM() && 1 === r.recipients.length && (null === (e = s.default.getUser(r.recipients[0])) || void 0 === e ? void 0 : e.bot) === !0;
    });
}
