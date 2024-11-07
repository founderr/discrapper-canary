n.d(t, {
    Fv: function () {
        return o;
    },
    eA: function () {
        return c;
    }
});
var i = n(192379),
    r = n(818083),
    l = n(594174),
    s = n(981631);
let a = (0, r.B)({
    kind: 'guild',
    id: '2022-03_guild_access_rate_insight_experiment',
    label: 'Guild Access Rate Insight Experiment',
    defaultConfig: { showAccessRate: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show guild access rate in insights',
            config: { showAccessRate: !0 }
        }
    ]
});
function o(e) {
    var t;
    return (
        (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) &&
        a.getCurrentConfig({
            guildId: e,
            location: '77b4b2_1'
        }).showAccessRate
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (
        i.useEffect(() => {
            !t &&
                null != e &&
                a.trackExposure({
                    guildId: e,
                    location: '77b4b2_2'
                });
        }, [e, t]),
        a.useExperiment(
            {
                guildId: null != e ? e : s.lds,
                location: '77b4b2_3'
            },
            {
                autoTrackExposure: !1,
                disable: t || null == e
            }
        )
    );
}
