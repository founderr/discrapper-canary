n.d(t, {
    Z: function () {
        return m;
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
    _ = n(314897),
    E = n(158776),
    f = n(579264),
    h = n(981631);
let p = [],
    I = [];
function m(e) {
    let t = (0, a.e7)([_.default], () => _.default.getId() === e),
        n = (0, a.e7)([E.Z], () => E.Z.getActivities(e)),
        m = (0, a.e7)([o.Z], () => (t ? o.Z.getUserOutbox(e) : void 0)),
        T = (0, s.aK)('use-user-profile-activity'),
        S = (0, a.e7)([d.Z], () => (T ? d.Z.getAnyDiscoverableStreamForUser(e) : d.Z.getAnyStreamForUser(e)), [T, e]),
        { live: g, recent: A } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    n.filter((e) => {
                        let { type: t } = e;
                        return t !== h.IIU.CUSTOM_STATUS;
                    }),
                    (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
                ),
                t = null == m ? void 0 : m.entries.filter((t) => ((0, l.y0)(t) ? !e.some((e) => null != e && (0, u.RL)(t, e)) : (0, f.Z)(t) && !(0, c.kr)(t)));
            return {
                live: 0 === e.length ? p : e,
                recent: null == t || 0 === t.length ? I : t
            };
        }, [n, m]);
    return {
        live: g,
        recent: A,
        stream: S,
        outbox: m
    };
}
