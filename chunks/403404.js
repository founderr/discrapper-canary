n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(424602),
    s = n(397698),
    o = n(776862),
    l = n(701488),
    u = n(981631);
function c(e) {
    let { channel: t, guildId: c, locationObject: d, openInPopout: f, initialSelectedApplicationId: _, initialSlide: h = l.ag.DIRECTORY, enableSelectedTextChannelInvite: p = !1, analyticsLocations: m, opensAppLauncherModal: g = !1 } = e,
        E = m.length > 0 ? m[m.length - 1] : 'open-activity-shelf',
        { enabled: v } = a.m1.getCurrentConfig({ location: E }, { autoTrackExposure: !1 });
    if (g && v) {
        null != t &&
            (0, s.Z)({
                openInPopout: f,
                channel: t,
                analyticsLocation: E
            });
        return;
    }
    f && (0, o.Z)(u.KJ3.CHANNEL_CALL_POPOUT);
    let I = f ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('67588'), n.e('47593'), n.e('34614')]).then(n.bind(n, 471840));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    channel: t,
                    guildId: c,
                    locationObject: d,
                    initialSlide: h,
                    initialSelectedApplicationId: _,
                    enableSelectedTextChannelInvite: p,
                    analyticsLocations: m
                });
        },
        {
            modalKey: l.AC,
            contextKey: I
        }
    );
}
