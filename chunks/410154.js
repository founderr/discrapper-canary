n.d(e, {
    C5: function () {
        return i;
    }
});
var r,
    i,
    a = n(818083);
((r = i || (i = {}))[(r.DEFAULT = 0)] = 'DEFAULT'), (r[(r.WINTER_2023_DROP = 1)] = 'WINTER_2023_DROP'), (r[(r.MONSTER_DROP = 2)] = 'MONSTER_DROP'), (r[(r.SPRINGTOONS = 4)] = 'SPRINGTOONS'), (r[(r.SHY = 5)] = 'SHY'), (r[(r.GALAXY = 6)] = 'GALAXY'), (r[(r.TIDE = 7)] = 'TIDE'), (r[(r.ROBERT = 8)] = 'ROBERT'), (r[(r.STORM = 9)] = 'STORM'), (r[(r.EQUINOX_FALL = 10)] = 'EQUINOX_FALL');
let s = (0, a.B)({
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
        },
        {
            id: 10,
            label: 'Equinox/fall 2024',
            config: { variant: 10 }
        }
    ]
});
e.ZP = (t) => s.useExperiment({ location: t }).variant;
