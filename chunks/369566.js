n.d(t, {
    Z: function () {
        return g;
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
    h = n(27144),
    p = n(579264),
    m = n(981631);
let I = [],
    T = [];
function g(e) {
    let { pastActivityEnabled: t } = (0, h.z)({
            location: 'useUserProfileActivity',
            autoTrackExposure: !0
        }),
        n = (0, o.e7)([E.default], () => E.default.getId() === e),
        r = t || n,
        g = (0, o.e7)([f.Z], () => f.Z.getActivities(e)),
        S = (0, o.e7)([l.Z], () => (r ? l.Z.getUserOutbox(e) : void 0)),
        A = (0, s.aK)('use-user-profile-activity'),
        v = (0, o.e7)([_.Z], () => (A ? _.Z.getAnyDiscoverableStreamForUser(e) : _.Z.getAnyStreamForUser(e)), [A, e]),
        { live: N, recent: O } = (0, i.useMemo)(() => {
            let e = (0, a.uniqWith)(
                    g.filter((e) => {
                        let { type: t } = e;
                        return t !== m.IIU.CUSTOM_STATUS;
                    }),
                    (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
                ),
                t = null == S ? void 0 : S.entries.filter((t) => ((0, u.y0)(t) ? !e.some((e) => null != e && (0, c.RL)(t, e)) : (0, p.Z)(t) && !(0, d.kr)(t)));
            return {
                live: 0 === e.length ? I : e,
                recent: null == t || 0 === t.length ? T : t
            };
        }, [g, S]);
    return {
        live: N,
        recent: O,
        stream: v,
        outbox: S
    };
}
