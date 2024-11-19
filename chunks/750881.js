n.d(t, {
    $W: function () {
        return f;
    },
    NR: function () {
        return h;
    },
    R4: function () {
        return _;
    },
    bA: function () {
        return d;
    },
    h9: function () {
        return i;
    },
    p7: function () {
        return p;
    },
    sb: function () {
        return c;
    }
});
var r,
    i,
    a = n(818083),
    s = n(922611),
    o = n(987338);
((r = i || (i = {}))[(r.SHOW = 0)] = 'SHOW'), (r[(r.HIDE = 1)] = 'HIDE'), (r[(r.DERANK = 2)] = 'DERANK');
let l = (0, a.B)({
        kind: 'user',
        id: '2024-08_blocking_voice_states',
        label: 'Blocking Voice States (Blocker)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    analyticsEligible: !0
                }
            },
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    analyticsEligible: !0
                }
            }
        ]
    }),
    u = (0, a.B)({
        kind: 'user',
        id: '2024-09_blocking_voice_states_blockee',
        label: 'Blocking Voice States (Blockee)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    analyticsEligible: !0
                }
            },
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    analyticsEligible: !0
                }
            }
        ]
    });
function c(e) {
    let { enabled: t } = l.getCurrentConfig({ location: e });
    return t;
}
function d(e) {
    let t = l.useExperiment({ location: e }),
        n = (0, s.Do)({ location: 'use_blocking_voice_states_config_for_blocker' });
    return {
        ...l.useExperiment({ location: e }),
        analyticsEligible: t.analyticsEligible && !n
    };
}
function f(e) {
    let { enabled: t } = u.getCurrentConfig({ location: e });
    return t;
}
function _(e) {
    let t = u.useExperiment({ location: e }),
        n = (0, s.Do)({ location: 'use_blocking_voice_states_config_for_blockee' });
    return {
        ...u.useExperiment({ location: e }),
        analyticsEligible: t.analyticsEligible && !n
    };
}
function p(e) {
    let { enabled: t, analyticsEligible: n } = u.getCurrentConfig({ location: e }),
        { enabled: r, analyticsEligible: i } = l.getCurrentConfig({ location: e }),
        a = (0, s.JX)({ location: 'get_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: (n || i) && !a
    };
}
function h(e) {
    let { enabled: t, analyticsEligible: n } = u.useExperiment({ location: e }),
        { enabled: r, analyticsEligible: i } = l.useExperiment({ location: e }),
        a = (0, s.Do)({ location: 'use_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: (n || i) && !a
    };
}
