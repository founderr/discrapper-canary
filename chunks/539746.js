r.d(n, {
    J$: function () {
        return s;
    },
    _J: function () {
        return o;
    },
    xG: function () {
        return l;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-06_game_profile_experiment',
    label: 'Enables the Game Profile',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: r } = s.getCurrentConfig({ location: e }, { autoTrackExposure: n });
    return r;
}
function l(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: r } = s.useExperiment({ location: e }, { autoTrackExposure: n });
    return r;
}
