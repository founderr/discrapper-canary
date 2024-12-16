n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(192379),
    r = n(399606),
    l = n(674180),
    s = n(594174),
    a = n(63063),
    o = n(223892),
    c = n(58259),
    d = n(158992),
    u = n(159361),
    m = n(377176),
    h = n(981631),
    g = n(388032);
function x(e) {
    let t;
    let n = (0, o.Ob)(e),
        x = null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
        p = null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE),
        f = (0, r.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        { error: C, loading: I, createEnableRequest: _, submittedRequest: v } = (0, c.Z)(null == e ? void 0 : e.id),
        { loading: N, error: T, refresh: b, eligibility: j } = (0, d.Z)(null == e ? void 0 : e.id),
        { isApplicationRejected: S, requestCooldownDuration: E } = (0, u.Z)(j),
        R = (null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(h.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
        { isMonetizationReapplicationDisabled: y } = (0, l.eC)(null == e ? void 0 : e.id),
        A = v || (null == j ? void 0 : j.isApplicationPending) === !0,
        Z = (null == j ? void 0 : j.canApply) === !0,
        L = g.intl.format(g.t.aJUdOj, { faqUrl: a.Z.getArticleURL(h.BhN.CREATOR_FAQ) });
    S && y
        ? (t = !0 === x ? g.intl.format(g.t['0o1Q+v'], { communityGuidelineUrl: h.EYA.GUIDELINES }) : g.intl.format(g.t.b6h59v, { communityGuidelineUrl: h.EYA.GUIDELINES }))
        : S &&
          null != E &&
          (t = g.intl.format(g.t.TvX209, {
              requestCooldownDuration: E,
              creatorRevenuePolicyUrl: a.Z.getArticleURL(h.BhN.CREATOR_POLICY)
          }));
    let D = n && f && !1 === p,
        O = n && !1 === x,
        P = (0, m.f)(),
        k = S && Z && f ? g.intl.format(g.t.wbVIUF, {}) : void 0;
    return (
        i.useEffect(() => {
            D && b();
        }, [b, D]),
        {
            resubmittingEnableRequest: I,
            resubmissionError: C,
            isGuildOwner: f,
            createEnableRequest: _,
            resubmittedRequest: v,
            eligibilityLoading: N,
            eligibilityError: T,
            refreshEligibility: b,
            eligibility: j,
            eligibleForMonetization: Z,
            isApplicationPending: A,
            hasPreviousApplicationRejection: S,
            requestRejectedNoticeText: t,
            reapplyNoticeText: k,
            showAcceptTermsFlow: O,
            wasRejectedInV1: O && (R || S),
            requirementsFinePrintText: L,
            acceptTermsCheckboxText: P
        }
    );
}
