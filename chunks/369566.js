n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(392711);
var o = n(442837),
    s = n(750881),
    l = n(353647),
    u = n(26033),
    c = n(180335),
    d = n(561308),
    _ = n(199902),
    E = n(314897),
    f = n(158776),
    h = n(699516),
    p = n(626135),
    m = n(27144),
    I = n(579264),
    T = n(981631);
let g = [],
    S = [];
function A(e) {
    let { pastActivityEnabled: t } = (0, m.z)({
            location: 'useUserProfileActivity',
            autoTrackExposure: !0
        }),
        n = (0, o.e7)([E.default], () => E.default.getId() === e),
        r = t || n,
        A = (0, o.e7)([f.Z], () => f.Z.getActivities(e)),
        v = (0, o.e7)([l.Z], () => (r ? l.Z.getUserOutbox(e) : void 0)),
        N = (0, s.Q9)('use-user-profile-activity'),
        { stream: O, nonExperimentStream: R } = (0, o.cj)(
            [_.Z],
            () => {
                let t = _.Z.getAnyStreamForUser(e);
                return N
                    ? {
                          stream: _.Z.getAnyDiscoverableStreamForUser(e),
                          nonExperimentStream: t
                      }
                    : {
                          stream: t,
                          nonExperimentStream: t
                      };
            },
            [N, e]
        ),
        C = (0, o.e7)([h.Z], () => h.Z.getRelationshipType(e));
    (0, i.useEffect)(() => {
        var t;
        p.default.track(T.rMx.USER_VOICE_ACTIVITY_VIEWED, {
            activity_user_id: e,
            discoverable: null === (t = null == R ? void 0 : R.discoverable) || void 0 === t || t,
            surface: 'user-profile-activity',
            relationship_type: C,
            treatment: N && (null == R ? void 0 : R.discoverable) === !1 ? s.h9.HIDE : s.h9.SHOW
        });
    }, [R, N, e, C]);
    let { live: y, recent: L } = (0, i.useMemo)(() => {
        let e = (0, a.uniqWith)(
                A.filter((e) => {
                    let { type: t } = e;
                    return t !== T.IIU.CUSTOM_STATUS;
                }),
                (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
            ),
            t = null == v ? void 0 : v.entries.filter((t) => ((0, u.y0)(t) ? !e.some((e) => null != e && (0, c.RL)(t, e)) : (0, I.Z)(t) && !(0, d.kr)(t)));
        return {
            live: 0 === e.length ? g : e,
            recent: null == t || 0 === t.length ? S : t
        };
    }, [A, v]);
    return {
        live: y,
        recent: L,
        stream: O,
        outbox: v
    };
}
