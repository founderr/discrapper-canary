r.d(t, {
    D: function () {
        return n;
    },
    E: function () {
        return o;
    }
});
var a,
    n,
    s = r(818083);
((a = n || (n = {}))[(a.CONTROL = 0)] = 'CONTROL'), (a[(a.TRANSFORMATION = 1)] = 'TRANSFORMATION'), (a[(a.NO_MOVEMENT = 2)] = 'NO_MOVEMENT');
let i = (0, s.B)({
        kind: 'user',
        id: '2024-03_shop_card_hover_animation',
        label: 'Shop card hover animation experiment',
        defaultConfig: { hoverVariant: 0 },
        treatments: [
            {
                id: 1,
                label: 'Use CSS Transformation',
                config: { hoverVariant: 1 }
            },
            {
                id: 2,
                label: 'No hover movement',
                config: { hoverVariant: 2 }
            }
        ]
    }),
    o = (e) => i.useExperiment({ location: e });
