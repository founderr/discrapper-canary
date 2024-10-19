n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(470079),
    i = n(392711),
    a = n(442837),
    s = n(750881),
    o = n(353647),
    l = n(26033),
    u = n(180335),
    c = n(561308),
    d = n(199902),
    _ = n(158776),
    E = n(981631);
let f = [],
    h = [];
function p(e) {
    let t = (0, a.e7)([_.Z], () => _.Z.getActivities(e)),
        n = (0, a.e7)([o.Z], () => o.Z.getUserOutbox(e)),
        p = (0, s.aK)('use-user-profile-activity'),
        I = (0, a.e7)([d.Z], () => (p ? d.Z.getAnyDiscoverableStreamForUser(e) : d.Z.getAnyStreamForUser(e)), [p, e]),
        { live: m, recent: T } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    t.filter((e) => {
                        let { type: t } = e;
                        return t !== E.IIU.CUSTOM_STATUS;
                    }),
                    (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
                ),
                r = null == n ? void 0 : n.entries.filter((t) => ((0, l.y0)(t) ? !e.some((e) => null != e && (0, u.RL)(t, e)) : (0, l.LP)(t) && !(0, c.kr)(t)));
            return {
                live: 0 === e.length ? f : e,
                recent: null == r || 0 === r.length ? h : r
            };
        }, [t, null == n ? void 0 : n.entries]);
    return {
        live: m,
        recent: T,
        stream: I,
        outbox: n
    };
}
