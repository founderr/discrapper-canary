n.d(t, {
    $W: function () {
        return c;
    },
    Q9: function () {
        return u;
    },
    ci: function () {
        return s;
    },
    h9: function () {
        return r;
    },
    p7: function () {
        return d;
    }
});
var r,
    i = n(818083);
!(function (e) {
    (e[(e.SHOW = 0)] = 'SHOW'), (e[(e.HIDE = 1)] = 'HIDE'), (e[(e.DERANK = 2)] = 'DERANK');
})(r || (r = {}));
let a = (0, i.B)({
        kind: 'user',
        id: '2024-08_blocking_voice_states',
        label: 'Blocking Voice States (Blocker)',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    o = (0, i.B)({
        kind: 'user',
        id: '2024-09_blocking_voice_states_blockee',
        label: 'Blocking Voice States (Blockee)',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function s(e) {
    return a.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function l(e) {
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
function u(e) {
    return o.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function c(e) {
    let { enabled: t } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
function d(e) {
    let t = c(e);
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: l(e)
    };
}
