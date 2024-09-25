n.d(t, {
    P: function () {
        return r;
    }
});
var r,
    i = n(818083);
!(function (e) {
    (e[(e.None = 0)] = 'None'), (e[(e.DefaultOn = 1)] = 'DefaultOn'), (e[(e.DefaultOff = 2)] = 'DefaultOff'), (e[(e.ComingSoon = 3)] = 'ComingSoon'), (e[(e.ClydeProfiles = 4)] = 'ClydeProfiles');
})(r || (r = {}));
let a = (0, i.B)({
    kind: 'guild',
    id: '2023-03_clyde_ai',
    label: 'ClydeAI',
    defaultConfig: { experimentState: 0 },
    treatments: [
        {
            id: 1,
            label: 'Enabled (Default Off)',
            config: { experimentState: 2 }
        },
        {
            id: 3,
            label: 'Enabled (Default On)',
            config: { experimentState: 1 }
        },
        {
            id: 4,
            label: 'Coming Soon',
            config: { experimentState: 3 }
        },
        {
            id: 5,
            label: 'Clyde Profiles',
            config: { experimentState: 4 }
        }
    ]
});
t.Z = a;
