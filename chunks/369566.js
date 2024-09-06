n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(470079),
    i = n(392711),
    a = n(442837),
    s = n(353647),
    o = n(26033),
    l = n(180335),
    u = n(561308),
    c = n(199902),
    d = n(314897),
    _ = n(158776),
    E = n(27144),
    f = n(579264),
    h = n(981631);
let p = [],
    I = [];
function m(e) {
    let { pastActivityEnabled: t } = (0, E.z)({ location: 'useUserProfileActivity' }),
        n = (0, a.e7)([d.default], () => d.default.getId() === e),
        m = t || n,
        T = (0, a.e7)([_.Z], () => _.Z.getActivities(e)),
        S = (0, a.e7)([s.Z], () => (m ? s.Z.getUserOutbox(e) : void 0)),
        g = (0, a.e7)([c.Z], () => c.Z.getAnyStreamForUser(e)),
        { live: A, recent: N } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    T.filter((e) => {
                        let { type: t } = e;
                        return t !== h.IIU.CUSTOM_STATUS;
                    }),
                    (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id
                ),
                t = null == S ? void 0 : S.entries.filter((t) => ((0, o.y0)(t) ? !e.some((e) => null != e && (0, l.RL)(t, e)) : (0, f.Z)(t) && !(0, u.kr)(t)));
            return {
                live: 0 === e.length ? p : e,
                recent: null == t || 0 === t.length ? I : t
            };
        }, [T, null == S ? void 0 : S.entries]);
    return {
        live: A,
        recent: N,
        stream: g,
        outbox: S
    };
}
