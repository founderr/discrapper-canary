n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(928518),
    o = n(776862),
    s = n(626135),
    l = n(981631);
function u(e, t) {
    let u = null != t ? t : ''.concat(l.jXE.PREMIUM_GUILD_UPSELL_MODAL);
    null != e.targetBoostedGuildTier && (u += ' - Tier '.concat(e.targetBoostedGuildTier));
    let c = () => {
        s.default.track(l.rMx.MODAL_DISMISSED, {
            type: u,
            location: e.analyticsSourceLocation
        });
    };
    s.default.track(l.rMx.OPEN_MODAL, {
        type: u,
        location: e.analyticsSourceLocation
    });
    let { openInPopoutEnabled: d, ..._ } = e,
        E = a.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) && null != d && d;
    E && (0, o.Z)(l.KJ3.CHANNEL_CALL_POPOUT);
    let f = E ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await n.e('89675').then(n.bind(n, 146747));
            return (t) =>
                (0, r.jsx)(e, {
                    ..._,
                    ...t
                });
        },
        {
            onCloseCallback: c,
            contextKey: f
        }
    );
}
