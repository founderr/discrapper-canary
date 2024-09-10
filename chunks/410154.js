a.d(t, {
    C5: function () {
        return o;
    }
});
var n,
    o,
    i = a(818083);
((n = o || (o = {}))[(n.DEFAULT = 0)] = 'DEFAULT'), (n[(n.WINTER_2023_DROP = 1)] = 'WINTER_2023_DROP'), (n[(n.MONSTER_DROP = 2)] = 'MONSTER_DROP'), (n[(n.SPRINGTOONS = 4)] = 'SPRINGTOONS'), (n[(n.SHY = 5)] = 'SHY'), (n[(n.GALAXY = 6)] = 'GALAXY'), (n[(n.TIDE = 7)] = 'TIDE'), (n[(n.ROBERT = 8)] = 'ROBERT'), (n[(n.STORM = 9)] = 'STORM');
let r = (0, i.B)({
    kind: 'user',
    id: '2023-12_collectibles_shop_marketing',
    label: 'Collectibles Shop Marketing Variations',
    defaultConfig: { variant: 0 },
    treatments: [
        {
            id: 7,
            label: 'Tide 2024',
            config: { variant: 7 }
        },
        {
            id: 8,
            label: 'Robert 2024',
            config: { variant: 8 }
        },
        {
            id: 9,
            label: 'Storm 2024',
            config: { variant: 9 }
        }
    ]
});
t.ZP = (e) => r.useExperiment({ location: e }).variant;
