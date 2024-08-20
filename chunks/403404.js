l.d(n, {
    Z: function () {
        return c;
    }
});
var t = l(735250);
l(470079);
var r = l(481060),
    i = l(424602),
    a = l(397698),
    s = l(776862),
    u = l(701488),
    o = l(981631);
function c(e) {
    let { channel: n, guildId: c, locationObject: d, openInPopout: m, initialSelectedApplicationId: f, initialSlide: E = u.ag.DIRECTORY, enableSelectedTextChannelInvite: p = !1, analyticsLocations: C, opensAppLauncherModal: N = !1 } = e,
        v = C.length > 0 ? C[C.length - 1] : 'open-activity-shelf',
        { enabled: _ } = i.m1.getCurrentConfig({ location: v }, { autoTrackExposure: !1 });
    if (N && _) {
        null != n &&
            (0, a.Z)({
                openInPopout: m,
                channel: n,
                analyticsLocation: v
            });
        return;
    }
    m && (0, s.Z)(o.KJ3.CHANNEL_CALL_POPOUT);
    let T = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    return (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([l.e('64714'), l.e('64430')]).then(l.bind(l, 471840));
            return (l) =>
                (0, t.jsx)(e, {
                    ...l,
                    channel: n,
                    guildId: c,
                    locationObject: d,
                    initialSlide: E,
                    initialSelectedApplicationId: f,
                    enableSelectedTextChannelInvite: p,
                    analyticsLocations: C
                });
        },
        {
            modalKey: u.AC,
            contextKey: T
        }
    );
}
