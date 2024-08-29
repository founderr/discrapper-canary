n.d(t, {
    E: function () {
        return p;
    }
}),
    n(47120);
var i = n(470079),
    l = n(442837),
    r = n(835473),
    o = n(594174),
    a = n(695103),
    u = n(823379),
    c = n(358085),
    d = n(317381),
    s = n(761122);
function p(e) {
    let t = (0, l.e7)([o.default], o.default.getCurrentUser),
        n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
        p = (0, l.e7)([a.Z], () => a.Z.testModeEmbeddedApplicationId),
        f = n.map((e) => e.application_id),
        v = null != p ? [p, ...f] : f,
        Z = (0, r.Z)(v),
        h = i.useMemo(() => Z.filter(u.lm), [Z]),
        _ = i.useMemo(
            () =>
                null != p && h.length > 0 && h[0].id === p && null != h[0].embeddedActivityConfig
                    ? [
                          {
                              activity: h[0].embeddedActivityConfig,
                              application: h[0]
                          }
                      ]
                    : [],
            [h, p]
        ),
        g = i.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = h.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(u.lm),
            [n, h]
        );
    return i.useMemo(
        () =>
            [..._, ...g]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, s.Z)((0, c.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, g, _]
    );
}
