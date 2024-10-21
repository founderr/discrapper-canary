n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(430824);
function r(e) {
    let { onCloseCallback: t, analyticsLocations: r, ...l } = e;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await n.e('11166').then(n.bind(n, 971949));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...l,
                    analyticsLocations: r,
                    guildCount: s.Z.getGuildCount(),
                    'aria-labelledby': 'nitro-guild-cap-upsell'
                });
        },
        { onCloseCallback: t }
    );
}
