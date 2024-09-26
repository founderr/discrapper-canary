var r = n(536091);
var i = n(411104);
var a = n(47120);
var o = n(789020);
var s = n(392711),
    l = n.n(s),
    u = n(544891),
    c = n(570140),
    d = n(45114),
    _ = n(367907),
    E = n(781792),
    f = n(962086),
    h = n(160404),
    p = n(152376),
    m = n(592125),
    I = n(271383),
    T = n(594174),
    g = n(626135),
    S = n(630388),
    A = n(823379),
    v = n(960048),
    N = n(709054),
    O = n(45966),
    R = n(637853),
    C = n(816436),
    y = n(981631),
    L = n(372897),
    b = n(490897);
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (h.Z.isFullServerPreview(e)) return;
    let n = t ? O.Z.getOnboardingPromptsForOnboarding(e) : O.Z.getOnboardingPrompts(e),
        r = O.Z.getOnboardingResponses(e),
        i = n.map((e) => e.options.filter((e) => r.includes(e.id))).flat(),
        a = {},
        o = {};
    return (n.forEach((e) => {
        (a[e.id] = Date.now()), e.options.forEach((e) => (o[e.id] = Date.now()));
    }),
    t)
        ? u.tn
              .post({
                  url: y.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: a,
                      onboarding_responses_seen: o
                  }
              })
              .then((t) => {
                  null != t.body &&
                      c.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen
                      });
              })
              .catch((e) => v.Z.captureException(e))
        : u.tn
              .put({
                  url: y.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: a,
                      onboarding_responses_seen: o
                  }
              })
              .then((t) => {
                  null != t.body &&
                      c.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen
                      });
              })
              .catch((t) => {
                  v.Z.captureException(Error('Failed to update onboarding responses for guild '.concat(e, ': ').concat(t.statusCode), { cause: t }));
              });
}
function M(e, t, n) {
    var r, i;
    let a = null !== (i = null === (r = I.ZP.getSelfMember(e)) || void 0 === r ? void 0 : r.roles) && void 0 !== i ? i : [];
    if (h.Z.isViewingRoles(e)) {
        (0, f.og)(e, l().difference(l().union(a, t), n));
        return;
    }
    (t.length > 0 || n.length > 0) &&
        c.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: l().difference(l().union(a, t), n),
            addedRoleIds: t,
            removedRoleIds: n
        });
}
t.Z = {
    selectOption(e, t, n, r) {
        let i = O.Z.getOnboardingPrompt(t);
        if (null == i) return;
        let a = i.singleSelect ? l().without(l().map(i.options, 'id'), n) : [];
        c.Z.dispatch({
            type: 'GUILD_ONBOARDING_SELECT_OPTION',
            guildId: e,
            promptId: t,
            optionId: n,
            selected: r,
            removedOptionIds: a
        });
    },
    updateOnboardingResponses: l().debounce(D, 1000),
    updateRolesLocal: M,
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            r = O.Z.getSelectedOptions(e),
            i = (0, R.L6)(r),
            a = (0, R.dX)(r),
            o = O.Z.getEnabled(e) ? O.Z.getDefaultChannelIds(e) : [],
            [s, l] = (0, R.Ee)(e, t, o),
            u = [...a, ...o],
            c = u.map((e) => m.Z.getChannel(e)).filter(A.lm),
            E = (0, C.v)(e, new Set(u), c, !0).length,
            p = null == n ? [] : n.options.map((e) => e.id);
        if (
            (g.default.track(y.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, _.hH)(e),
                step: t.length - 1,
                options_selected: null == n ? 0 : r.filter((e) => p.includes(e.id)).length,
                skipped: p.length > 0,
                back: !1,
                in_onboarding: !0,
                is_final_step: !0,
                roles_granted: i.size,
                channels_granted: E,
                guild_onboarding_covered_channel_ids: s.map((e) => e.id),
                guild_onboarding_uncovered_channel_ids: l.map((e) => e.id)
            }),
            (0, d.Ju)(e, b.W.GUILD_ONBOARDING_QUESTION, N.default.fromTimestamp(Date.now())),
            D(e, !0),
            h.Z.isFullServerPreview(e))
        ) {
            (0, f.zS)(e, u, []), (0, f.aq)(e, { optInEnabled: !0 }), (0, f.og)(e, Array.from(i));
            let t = T.default.getCurrentUser();
            if (null != t) {
                var v, M;
                let n = null !== (M = null === (v = I.ZP.getMember(e, t.id)) || void 0 === v ? void 0 : v.flags) && void 0 !== M ? M : 0;
                (0, f.aq)(e, { memberOptions: { flags: (0, S.mB)(n, L.q.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (O.Z.getEnabled(e) ? O.Z.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)), n.size > 0 && (0, p.Mo)(e, Array.from(n), !0, { page: y.ZY5.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        c.Z.dispatch({
            type: 'GUILD_ONBOARDING_COMPLETE',
            guildId: e
        });
    },
    setUserOnboardingStep(e, t) {
        c.Z.dispatch({
            type: 'GUILD_ONBOARDING_SET_STEP',
            guildId: e,
            step: t
        });
    },
    async resetOnboarding(e) {
        let t = T.default.getCurrentUser();
        if (null != t) {
            var n, r;
            let i = null !== (r = null === (n = I.ZP.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
            await (0, E.e)(e, { flags: (0, S.mB)(i, L.q.COMPLETED_ONBOARDING, !1) });
        }
    }
};
