t.d(e, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var l = t(481060),
    r = t(424602),
    o = t(397698),
    a = t(776862),
    u = t(701488),
    c = t(981631);
function d(n) {
    let { channel: e, guildId: d, locationObject: s, openInPopout: C, initialSelectedApplicationId: h, initialSlide: f = u.ag.DIRECTORY, enableSelectedTextChannelInvite: p = !1, analyticsLocations: v, opensAppLauncherModal: _ = !1 } = n,
        m = v.length > 0 ? v[v.length - 1] : 'open-activity-shelf',
        { enabled: x } = r.m1.getCurrentConfig({ location: m }, { autoTrackExposure: !1 });
    if (_ && x) {
        null != e &&
            (0, o.Z)({
                openInPopout: C,
                channel: e,
                analyticsLocation: m
            });
        return;
    }
    C && (0, a.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
    let E = C ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
    return (0, l.openModalLazy)(
        async () => {
            let { default: n } = await Promise.all([t.e('36036'), t.e('64430')]).then(t.bind(t, 471840));
            return (t) =>
                (0, i.jsx)(n, {
                    ...t,
                    channel: e,
                    guildId: d,
                    locationObject: s,
                    initialSlide: f,
                    initialSelectedApplicationId: h,
                    enableSelectedTextChannelInvite: p,
                    analyticsLocations: v
                });
        },
        {
            modalKey: u.AC,
            contextKey: E
        }
    );
}
