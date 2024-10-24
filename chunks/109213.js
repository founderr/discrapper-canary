n.d(t, {
    G: function () {
        return r;
    }
});
var i = n(818083),
    l = n(987338);
let r = (0, i.B)({
    kind: 'user',
    id: '2024-10_shop_skus_in_gift_flow',
    label: 'Gift Collectibles in DM',
    defaultConfig: {
        enabled: !1,
        showBothNitroSkusInCategorySelect: !1
    },
    commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
    treatments: [
        {
            id: 1,
            label: 'Gift Collectibles in DM, with existing Nitro flow',
            config: {
                enabled: !0,
                showBothNitroSkusInCategorySelect: !1
            }
        },
        {
            id: 2,
            label: 'Gift Collectibles in DM, select Nitro SKU from category',
            config: {
                enabled: !0,
                showBothNitroSkusInCategorySelect: !0
            }
        }
    ]
});
