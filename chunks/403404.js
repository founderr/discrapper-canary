t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(735250);
t(470079);
var i = t(481060),
    r = t(424602),
    a = t(397698),
    o = t(776862),
    s = t(701488),
    c = t(981631);
function u(e) {
    let { channel: n, guildId: u, locationObject: d, openInPopout: m, initialSelectedApplicationId: f, initialSlide: _ = s.ag.DIRECTORY, enableSelectedTextChannelInvite: p = !1, analyticsLocations: h, opensAppLauncherModal: C = !1 } = e,
        v = h.length > 0 ? h[h.length - 1] : 'open-activity-shelf',
        { enabled: x } = r.m1.getCurrentConfig({ location: v }, { autoTrackExposure: !1 });
    if (C && x) {
        null != n &&
            (0, a.Z)({
                openInPopout: m,
                channel: n,
                analyticsLocation: v
            });
        return;
    }
    m && (0, o.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
    let E = m ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([t.e('64714'), t.e('64430')]).then(t.bind(t, 471840));
            return (t) =>
                (0, l.jsx)(e, {
                    ...t,
                    channel: n,
                    guildId: u,
                    locationObject: d,
                    initialSlide: _,
                    initialSelectedApplicationId: f,
                    enableSelectedTextChannelInvite: p,
                    analyticsLocations: h
                });
        },
        {
            modalKey: s.AC,
            contextKey: E
        }
    );
}
