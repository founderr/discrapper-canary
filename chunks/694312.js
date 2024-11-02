n.d(t, {
    E: function () {
        return f;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(835473),
    o = n(594174),
    u = n(695103),
    a = n(823379),
    c = n(358085),
    d = n(317381),
    s = n(761122);
function f(e) {
    let t = (0, l.e7)([o.default], o.default.getCurrentUser),
        n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
        f = (0, l.e7)([u.Z], () => u.Z.testModeEmbeddedApplicationId),
        p = n.map((e) => e.application_id),
        v = null != f ? [f, ...p] : p,
        h = (0, r.Z)(v),
        g = i.useMemo(() => h.filter(a.lm), [h]),
        Z = i.useMemo(
            () =>
                null != f && g.length > 0 && g[0].id === f && null != g[0].embeddedActivityConfig
                    ? [
                          {
                              activity: g[0].embeddedActivityConfig,
                              application: g[0]
                          }
                      ]
                    : [],
            [g, f]
        ),
        m = i.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = g.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(a.lm),
            [n, g]
        );
    return i.useMemo(
        () =>
            [...Z, ...m]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, s.Z)((0, c.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, m, Z]
    );
}
