n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(430824);
function a(e) {
    let { onCloseCallback: t, analyticsLocations: a, ...o } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await n.e('11166').then(n.bind(n, 971949));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...o,
                    analyticsLocations: a,
                    guildCount: l.Z.getGuildCount(),
                    'aria-labelledby': 'nitro-guild-cap-upsell'
                });
        },
        { onCloseCallback: t }
    );
}
