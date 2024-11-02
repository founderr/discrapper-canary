t.d(n, {
    n: function () {
        return u;
    }
});
var i = t(192379),
    l = t(442837),
    a = t(626135),
    s = t(236289),
    o = t(451284),
    r = t(613734),
    c = t(800530),
    d = t(981631);
let u = () => {
    let e = (0, l.e7)([s.Z], () => s.Z.getAppealClassificationId()),
        n = (0, r.YG)(null != e ? e : d.lds),
        t = (0, o.P)(),
        u = (0, l.e7)([s.Z], () => s.Z.getIsDsaEligible());
    return i.useCallback(
        (i) => {
            a.default.track(d.rMx.SAFETY_HUB_ACTION, {
                action: i,
                account_standing: t.state,
                classification_ids: null != e ? [Number(e)] : null,
                source: c.s.AppealIngestion,
                is_dsa_eligible: u,
                violation_type: n.violationType
            });
        },
        [t.state, e, n, u]
    );
};
