n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(430824);
function o(e) {
    let { onCloseCallback: t, analyticsLocations: o, ...s } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await n.e('11166').then(n.bind(n, 971949));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    ...s,
                    analyticsLocations: o,
                    guildCount: a.Z.getGuildCount(),
                    'aria-labelledby': 'nitro-guild-cap-upsell'
                });
        },
        { onCloseCallback: t }
    );
}
