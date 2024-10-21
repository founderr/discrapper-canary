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
    let { channel: t, guildId: c, locationObject: d, openInPopout: _, initialSelectedApplicationId: E, initialSlide: f = l.ag.DIRECTORY, enableSelectedTextChannelInvite: h = !1, analyticsLocations: p, opensAppLauncherModal: I = !1 } = e,
        m = p.length > 0 ? p[p.length - 1] : 'open-activity-shelf',
        { enabled: T } = a.m1.getCurrentConfig({ location: m }, { autoTrackExposure: !1 });
    if (I && T) {
        null != t &&
            (0, s.Z)({
                openInPopout: _,
                channel: t,
                analyticsLocation: m
            });
        return;
    }
    _ && (0, o.Z)(u.KJ3.CHANNEL_CALL_POPOUT);
    let S = _ ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('67588'), n.e('47593'), n.e('34614')]).then(n.bind(n, 471840));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    channel: t,
                    guildId: c,
                    locationObject: d,
                    initialSlide: f,
                    initialSelectedApplicationId: E,
                    enableSelectedTextChannelInvite: h,
                    analyticsLocations: p
                });
        },
        {
            modalKey: l.AC,
            contextKey: S
        }
    );
}
