r.d(n, {
    Z: function () {
        return I;
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
    g = r(981631);
let E = [],
    v = [];
function I(e) {
    let n = (0, o.e7)([h.Z], () => h.Z.getActivities(e)),
        r = (0, o.e7)([u.Z], () => u.Z.getUserOutbox(e)),
        { enabled: i, analyticsEligible: I } = (0, l.R4)('use-user-profile-activity'),
        { stream: T, nonExperimentStream: b } = (0, o.cj)(
            [_.Z],
            () => {
                let n = _.Z.getAnyStreamForUser(e);
                return i
                    ? {
                          stream: _.Z.getAnyDiscoverableStreamForUser(e),
                          nonExperimentStream: n
                      }
                    : {
                          stream: n,
                          nonExperimentStream: n
                      };
            },
            [i, e]
        ),
        y = (0, o.e7)([p.Z], () => p.Z.getRelationshipType(e));
    (0, a.useEffect)(() => {
        if (I && null != b) {
            var n;
            m.default.track(g.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: e,
                discoverable: null === (n = null == b ? void 0 : b.discoverable) || void 0 === n || n,
                surface: 'user-profile-activity',
                relationship_type: y,
                treatment: i && (null == b ? void 0 : b.discoverable) === !1 ? l.h9.HIDE : l.h9.SHOW
            });
        }
    }, [b, i, I, e, y]);
    let { live: S, recent: A } = (0, a.useMemo)(() => {
        let e = (0, s.uniqWith)(
                n.filter((e) => {
                    let { type: n } = e;
                    return n !== g.IIU.CUSTOM_STATUS;
                }),
                (e, n) => (null != e.application_id && null != n.application_id && e.application_id === n.application_id) || (null != e.name && null != n.name && e.name === n.name)
            ),
            i = null == r ? void 0 : r.entries.filter((n) => !(0, f.Jg)(n) && ((0, c.dU)(n) ? n.extra.entries.length > 0 && !e.some((e) => null != e && (0, d.pB)(n, e)) : (0, c.y0)(n) ? !e.some((e) => null != e && (0, d.RL)(n, e)) : (0, c.Rh)(n)));
        return {
            live: 0 === e.length ? E : e,
            recent: null == i || 0 === i.length ? v : i
        };
    }, [n, null == r ? void 0 : r.entries]);
    return {
        live: S,
        recent: A,
        stream: T,
        outbox: r
    };
}
