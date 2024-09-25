n.d(t, {
    T: function () {
        return l;
    }
});
var r = n(259443),
    i = n(818083),
    a = n(231338);
let o = (0, i.B)({
        id: '2024-04_quests_logging',
        kind: 'user',
        label: 'Quests Logging',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Quest logging enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    s = () => o.getCurrentConfig({ location: 'quests_logging' }, { autoTrackExposure: !1 }).enabled;
function l() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = s(),
        i = null == e ? void 0 : e.config.messages.questName,
        o = null != t ? '-'.concat(t) : '',
        l = null != i ? '-'.concat(i, ')') : '',
        u = 'QuestLogger'.concat(o).concat(l),
        c = new r.Y(u);
    return {
        log: n ? c.log : a.dG,
        warn: n ? c.warn : a.dG,
        error: n ? c.error : a.dG,
        info: n ? c.info : a.dG,
        verbose: n ? c.verbose : a.dG,
        trace: n ? c.trace : a.dG
    };
}
