n.d(a, {
    Z: function () {
        return u;
    }
});
var t = n(735250);
n(470079);
var r = n(481060),
    s = n(424602),
    o = n(397698),
    i = n(776862),
    l = n(701488),
    c = n(981631);
function u(e) {
    let { channel: a, guildId: u, locationObject: _, openInPopout: E, initialSelectedApplicationId: d, initialSlide: I = l.ag.DIRECTORY, enableSelectedTextChannelInvite: A = !1, analyticsLocations: T, opensAppLauncherModal: m = !1 } = e,
        O = T.length > 0 ? T[T.length - 1] : 'open-activity-shelf',
        { enabled: N } = s.m1.getCurrentConfig({ location: O }, { autoTrackExposure: !1 });
    if (m && N) {
        null != a &&
            (0, o.Z)({
                openInPopout: E,
                channel: a,
                analyticsLocation: O
            });
        return;
    }
    E && (0, i.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
    let R = E ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    return (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('64714'), n.e('64430')]).then(n.bind(n, 471840));
            return (n) =>
                (0, t.jsx)(e, {
                    ...n,
                    channel: a,
                    guildId: u,
                    locationObject: _,
                    initialSlide: I,
                    initialSelectedApplicationId: d,
                    enableSelectedTextChannelInvite: A,
                    analyticsLocations: T
                });
        },
        {
            modalKey: l.AC,
            contextKey: R
        }
    );
}
