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
    a = n(695103),
    u = n(823379),
    c = n(358085),
    d = n(317381),
    s = n(761122);
function f(e) {
    let t = (0, l.e7)([o.default], o.default.getCurrentUser),
        n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
        f = (0, l.e7)([a.Z], () => a.Z.testModeEmbeddedApplicationId),
        p = n.map((e) => e.application_id),
        v = null != f ? [f, ...p] : p,
        h = (0, r.Z)(v),
        Z = i.useMemo(() => h.filter(u.lm), [h]),
        g = i.useMemo(
            () =>
                null != f && Z.length > 0 && Z[0].id === f && null != Z[0].embeddedActivityConfig
                    ? [
                          {
                              activity: Z[0].embeddedActivityConfig,
                              application: Z[0]
                          }
                      ]
                    : [],
            [Z, f]
        ),
        _ = i.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = Z.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(u.lm),
            [n, Z]
        );
    return i.useMemo(
        () =>
            [...g, ..._]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, s.Z)((0, c.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, _, g]
    );
}
