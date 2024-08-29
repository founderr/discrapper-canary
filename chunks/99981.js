l.d(n, {
    q: function () {
        return o;
    }
});
var t = l(481060),
    r = l(522474),
    a = l(592125),
    i = l(403404),
    s = l(701488),
    u = l(981631);
async function o(e) {
    let { analyticsLocations: n, channelId: l, guildId: o, locationObject: c, initialSlide: d = s.ag.DIRECTORY, initialSelectedApplicationId: m } = e;
    if ((0, t.hasModalOpen)(s.AC)) return;
    let E = a.Z.getChannel(l),
        p = r.Z.getWindowOpen(u.KJ3.CHANNEL_CALL_POPOUT);
    await (0, i.Z)({
        analyticsLocations: n,
        channel: E,
        guildId: o,
        openInPopout: p,
        initialSlide: d,
        initialSelectedApplicationId: m,
        locationObject: null != c ? c : {}
    });
}
