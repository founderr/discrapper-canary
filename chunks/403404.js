n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(424602),
    o = n(397698),
    s = n(776862),
    l = n(701488),
    u = n(981631);
function c(e) {
    let { channel: t, guildId: c, locationObject: d, openInPopout: _, initialSelectedApplicationId: E, initialSlide: f = l.ag.DIRECTORY, enableSelectedTextChannelInvite: h = !1, analyticsLocations: p, opensAppLauncherModal: m = !1 } = e,
        I = p.length > 0 ? p[p.length - 1] : 'open-activity-shelf',
        { enabled: T } = a.m1.getCurrentConfig({ location: I }, { autoTrackExposure: !1 });
    if (m && T) {
        null != t &&
            (0, o.Z)({
                openInPopout: _,
                channel: t,
                analyticsLocation: I
            });
        return;
    }
    _ && (0, s.Z)(u.KJ3.CHANNEL_CALL_POPOUT);
    let g = _ ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('67588'), n.e('47593'), n.e('69673')]).then(n.bind(n, 471840));
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
            contextKey: g
        }
    );
}
