t.d(n, {
    q: function () {
        return c;
    }
});
var l = t(481060),
    a = t(522474),
    i = t(592125),
    r = t(403404),
    o = t(701488),
    s = t(981631);
async function c(e) {
    let { analyticsLocations: n, channelId: t, guildId: c, locationObject: u, initialSlide: d = o.ag.DIRECTORY, initialSelectedApplicationId: m } = e;
    if ((0, l.hasModalOpen)(o.AC)) return;
    let _ = i.Z.getChannel(t),
        f = a.Z.getWindowOpen(s.KJ3.CHANNEL_CALL_POPOUT);
    await (0, r.Z)({
        analyticsLocations: n,
        channel: _,
        guildId: c,
        openInPopout: f,
        initialSlide: d,
        initialSelectedApplicationId: m,
        locationObject: null != u ? u : {}
    });
}
