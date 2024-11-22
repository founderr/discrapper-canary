n.d(t, {
    B: function () {
        return c;
    }
});
var o = n(192379),
    r = n(918701),
    s = n(988303),
    a = n(658590),
    l = n(448018),
    i = n(46140);
let c = (e, t) => {
    let n = (0, r.zK)(e, i.S7.QUEST_BAR_V2),
        c = (0, a.a)(e),
        { primaryVariant: d, progressVariant: u } = s.u.useExperiment({ location: i.dr.QUESTS_BAR }, { autoTrackExposure: t && n });
    return o.useMemo(() => (c ? (0, l.v)(e, s.P.V2, s.P.V2) : n ? (0, l.v)(e, d, u) : (0, l.v)(e, s.P.V1, s.P.V1)), [c, d, u, e, n]);
};
