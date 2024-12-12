r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(846027),
    a = r(872810),
    s = r(314897),
    o = r(569545);
function l(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == e) return;
    let { streamType: r, guildId: l, channelId: u, ownerId: c } = e,
        d = (0, o.V9)({
            streamType: r,
            guildId: l,
            channelId: u,
            ownerId: c
        });
    c === s.default.getId() && i.Z.setGoLiveSource(null), a.g(d, n);
}
