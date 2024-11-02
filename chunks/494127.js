n.d(t, {
    F_: function () {
        return r;
    },
    JP: function () {
        return a;
    },
    YQ: function () {
        return s;
    },
    as: function () {
        return l;
    }
});
var i = n(818083);
let r = (0, i.B)({
        kind: 'user',
        id: '2023-09_whats_new_drop_1_flip',
        label: "What's New Drop 1",
        defaultConfig: { flipped: !1 },
        treatments: [
            {
                id: 1,
                label: 'Flipped',
                config: { flipped: !0 }
            }
        ]
    }),
    a = () => r.useExperiment({ location: 'experiment_hook' }),
    s = (0, i.B)({
        kind: 'user',
        id: '2023-09_whats_new_drop_2_flip',
        label: "What's New Drop 2",
        defaultConfig: { flipped: !1 },
        treatments: [
            {
                id: 1,
                label: 'Flipped',
                config: { flipped: !0 }
            }
        ]
    }),
    l = () => s.useExperiment({ location: 'experiment_hook' });
