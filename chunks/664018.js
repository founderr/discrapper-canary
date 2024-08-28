n.d(t, {
    D: function () {
        return r;
    },
    E: function () {
        return o;
    }
});
var s,
    r,
    a = n(818083);
((s = r || (r = {}))[(s.CONTROL = 0)] = 'CONTROL'), (s[(s.TRANSFORMATION = 1)] = 'TRANSFORMATION'), (s[(s.NO_MOVEMENT = 2)] = 'NO_MOVEMENT');
let i = (0, a.B)({
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
