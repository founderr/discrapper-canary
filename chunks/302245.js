n.d(t, {
    Hp: function () {
        return l;
    },
    PW: function () {
        return r;
    },
    WV: function () {
        return s;
    },
    vI: function () {
        return u;
    }
});
var r,
    i = n(470079),
    a = n(818083),
    o = n(46140);
!(function (e) {
    (e[(e.CONTROL = 0)] = 'CONTROL'), (e[(e.REWARD_AVAILABLE = 1)] = 'REWARD_AVAILABLE'), (e[(e.EARN_A_REWARD = 2)] = 'EARN_A_REWARD'), (e[(e.EARN_A_REWARD_EXCLAMATION = 3)] = 'EARN_A_REWARD_EXCLAMATION');
})(r || (r = {}));
let s = 60,
    l = (0, a.B)({
        id: '2024-07_quest_bar_v2_reward_highlighting',
        kind: 'user',
        label: 'Quest Bar V2 Reward Highlighting',
        defaultConfig: {
            enabled: !1,
            variant: 0
        },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    variant: 0
                }
            },
            {
                id: 1,
                label: 'Reward Available',
                config: {
                    enabled: !0,
                    variant: 1
                }
            },
            {
                id: 2,
                label: 'Earn a Reward',
                config: {
                    enabled: !0,
                    variant: 2
                }
            },
            {
                id: 3,
                label: 'Earn a Reward!',
                config: {
                    enabled: !0,
                    variant: 3
                }
            }
        ]
    }),
    u = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = i.useMemo(() => e.config.features.includes(o.S7.REWARD_HIGHLIGHTING), [e]);
        return l.useExperiment({ location: t }, { autoTrackExposure: n }).enabled && r;
    };
