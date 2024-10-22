n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    a = n(442837),
    s = n(750881),
    o = n(353647),
    l = n(26033),
    u = n(180335),
    c = n(561308),
    d = n(199902),
    _ = n(158776),
    E = n(699516),
    f = n(626135),
    h = n(981631);
let p = [],
    I = [];
function m(e) {
    let t = (0, a.e7)([_.Z], () => _.Z.getActivities(e)),
        n = (0, a.e7)([o.Z], () => o.Z.getUserOutbox(e)),
        { enabled: m, analyticsEligible: T } = (0, s.R4)('use-user-profile-activity'),
        { stream: S, nonExperimentStream: g } = (0, a.cj)(
            [d.Z],
            () => {
                let t = d.Z.getAnyStreamForUser(e);
                return m
                    ? {
                          stream: d.Z.getAnyDiscoverableStreamForUser(e),
                          nonExperimentStream: t
                      }
                    : {
                          stream: t,
                          nonExperimentStream: t
                      };
            },
            [m, e]
        ),
        A = (0, a.e7)([E.Z], () => E.Z.getRelationshipType(e));
    (0, r.useEffect)(() => {
        if (T && null != g) {
            var t;
            f.default.track(h.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: e,
                discoverable: null === (t = null == g ? void 0 : g.discoverable) || void 0 === t || t,
                surface: 'user-profile-activity',
                relationship_type: A,
                treatment: m && (null == g ? void 0 : g.discoverable) === !1 ? s.h9.HIDE : s.h9.SHOW
            });
        }
    }, [g, m, T, e, A]);
    let { live: N, recent: R } = (0, r.useMemo)(() => {
        let e = (0, i.uniqWith)(
                t.filter((e) => {
                    let { type: t } = e;
                    return t !== h.IIU.CUSTOM_STATUS;
                }),
                (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
            ),
            r = null == n ? void 0 : n.entries.filter((t) => !(0, c.Jg)(t) && ((0, l.dU)(t) ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.pB)(t, e)) : (0, l.y0)(t) ? !e.some((e) => null != e && (0, u.RL)(t, e)) : (0, l.LP)(t)));
        return {
            live: 0 === e.length ? p : e,
            recent: null == r || 0 === r.length ? I : r
        };
    }, [t, null == n ? void 0 : n.entries]);
    return {
        live: N,
        recent: R,
        stream: S,
        outbox: n
    };
}
