r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(392711);
var o = r(442837),
    l = r(750881),
    u = r(353647),
    c = r(26033),
    d = r(180335),
    f = r(561308),
    _ = r(199902),
    h = r(158776),
    p = r(699516),
    m = r(626135),
    g = r(9161),
    E = r(456644),
    v = r(981631);
let I = [],
    T = [];
function b(e) {
    let { recentActivityTabEnabled: n } = (0, g.O)({
            location: 'useUserProfileActivity',
            autoTrackExposure: !1
        }),
        { recentActivityEnabled: r } = (0, E.i)({
            location: 'useUserProfileActivity',
            autoTrackExposure: !1
        }),
        i = (0, o.e7)([h.Z], () => h.Z.getActivities(e)),
        b = (0, o.e7)([u.Z], () => (n || r ? u.Z.getUserOutbox(e) : void 0)),
        { enabled: y, analyticsEligible: S } = (0, l.R4)('use-user-profile-activity'),
        { stream: A, nonExperimentStream: N } = (0, o.cj)(
            [_.Z],
            () => {
                let n = _.Z.getAnyStreamForUser(e);
                return y
                    ? {
                          stream: _.Z.getAnyDiscoverableStreamForUser(e),
                          nonExperimentStream: n
                      }
                    : {
                          stream: n,
                          nonExperimentStream: n
                      };
            },
            [y, e]
        ),
        C = (0, o.e7)([p.Z], () => p.Z.getRelationshipType(e));
    (0, a.useEffect)(() => {
        if (S && null != N) {
            var n;
            m.default.track(v.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: e,
                discoverable: null === (n = null == N ? void 0 : N.discoverable) || void 0 === n || n,
                surface: 'user-profile-activity',
                relationship_type: C,
                treatment: y && (null == N ? void 0 : N.discoverable) === !1 ? l.h9.HIDE : l.h9.SHOW
            });
        }
    }, [N, y, S, e, C]);
    let { live: R, recent: O } = (0, a.useMemo)(() => {
        let e = (0, s.uniqWith)(
                i.filter((e) => {
                    let { type: n } = e;
                    return n !== v.IIU.CUSTOM_STATUS;
                }),
                (e, n) => (null != e.application_id && null != n.application_id && e.application_id === n.application_id) || (null != e.name && null != n.name && e.name === n.name)
            ),
            n = null == b ? void 0 : b.entries.filter((n) => !(0, f.Jg)(n) && ((0, c.dU)(n) ? n.extra.entries.length > 0 && !e.some((e) => null != e && (0, d.pB)(n, e)) : (0, c.y0)(n) ? !e.some((e) => null != e && (0, d.RL)(n, e)) : (0, c.Rh)(n)));
        return {
            live: 0 === e.length ? I : e,
            recent: null == n || 0 === n.length ? T : n
        };
    }, [i, null == b ? void 0 : b.entries]);
    return {
        live: R,
        recent: O,
        stream: A,
        outbox: b
    };
}
