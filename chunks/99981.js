t.d(n, {
    q: function () {
        return c;
    }
});
var l = t(481060),
    i = t(522474),
    r = t(592125),
    a = t(403404),
    o = t(701488),
    s = t(981631);
async function c(e) {
    let { analyticsLocations: n, channelId: t, guildId: c, locationObject: u, initialSlide: d = o.ag.DIRECTORY, initialSelectedApplicationId: m } = e;
    if ((0, l.hasModalOpen)(o.AC)) return;
    let f = r.Z.getChannel(t),
        _ = i.Z.getWindowOpen(s.KJ3.CHANNEL_CALL_POPOUT);
    await (0, a.Z)({
        analyticsLocations: n,
        channel: f,
        guildId: c,
        openInPopout: _,
        initialSlide: d,
        initialSelectedApplicationId: m,
        locationObject: null != u ? u : {}
    });
}
