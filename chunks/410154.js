n.d(t, {
    C5: function () {
        return r;
    }
});
var a,
    r,
    s = n(818083);
((a = r || (r = {}))[(a.DEFAULT = 0)] = 'DEFAULT'), (a[(a.WINTER_2023_DROP = 1)] = 'WINTER_2023_DROP'), (a[(a.MONSTER_DROP = 2)] = 'MONSTER_DROP'), (a[(a.SPRINGTOONS = 4)] = 'SPRINGTOONS'), (a[(a.SHY = 5)] = 'SHY'), (a[(a.GALAXY = 6)] = 'GALAXY'), (a[(a.TIDE = 7)] = 'TIDE'), (a[(a.ROBERT = 8)] = 'ROBERT'), (a[(a.STORM = 9)] = 'STORM'), (a[(a.EQUINOX_FALL = 10)] = 'EQUINOX_FALL');
let o = (0, s.B)({
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
t.ZP = (e) => o.useExperiment({ location: e }).variant;
