t.d(n, {
    q: function () {
        return c;
    }
});
var l = t(481060),
    i = t(522474),
    a = t(592125),
    r = t(403404),
    o = t(701488),
    s = t(981631);
async function c(e) {
    let { analyticsLocations: n, channelId: t, guildId: c, locationObject: u, initialSlide: d = o.ag.DIRECTORY, initialSelectedApplicationId: m } = e;
    if ((0, l.hasModalOpen)(o.AC)) return;
    let f = a.Z.getChannel(t),
        _ = i.Z.getWindowOpen(s.KJ3.CHANNEL_CALL_POPOUT);
    await (0, r.Z)({
        analyticsLocations: n,
        channel: f,
        guildId: c,
        openInPopout: _,
        initialSlide: d,
        initialSelectedApplicationId: m,
        locationObject: null != u ? u : {}
    });
}
