n.d(t, {
    HI: function () {
        return l;
    },
    mJ: function () {
        return r;
    }
});
var i,
    r,
    a = n(818083);
((i = r || (r = {}))[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.VARIANT_1 = 1)] = 'VARIANT_1'), (i[(i.VARIANT_2 = 2)] = 'VARIANT_2');
let s = (0, a.B)({
    kind: 'user',
    id: '2024-04_marketing_page_non_sub_perk_tile_order',
    label: 'Changes the order of the non-subscriber perk tiles',
    defaultConfig: { tileOrderVariant: 0 },
    treatments: [
        {
            id: 0,
            label: 'Default',
            config: { tileOrderVariant: 0 }
        },
        {
            id: 1,
            label: 'Variant 1',
            config: { tileOrderVariant: 1 }
        },
        {
            id: 2,
            label: 'Variant 2',
            config: { tileOrderVariant: 2 }
        }
    ]
});
function l(e) {
    let { location: t } = e,
        { tileOrderVariant: n } = s.useExperiment({ location: t });
    return n;
}
