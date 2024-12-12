r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
        kind: 'user',
        id: '2024-12_shop_link_mention',
        label: 'Collectibles Shop Link Mention Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Render shop link as mention',
                config: { enabled: !0 }
            }
        ],
        commonTriggerPoint: a.$P.CONNECTION_OPEN
    }),
    o = (e) => s.getCurrentConfig({ location: e }).enabled;
