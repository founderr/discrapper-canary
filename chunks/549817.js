n(536091), n(411104), n(47120), n(789020);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    s = n(570140),
    o = n(45114),
    l = n(367907),
    u = n(781792),
    c = n(962086),
    d = n(160404),
    f = n(152376),
    _ = n(592125),
    p = n(271383),
    h = n(594174),
    m = n(626135),
    g = n(630388),
    E = n(823379),
    v = n(960048),
    I = n(709054),
    b = n(45966),
    T = n(637853),
    S = n(816436),
    y = n(981631),
    A = n(372897),
    N = n(490897);
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (d.Z.isFullServerPreview(e)) return;
    let n = t ? b.Z.getOnboardingPromptsForOnboarding(e) : b.Z.getOnboardingPrompts(e),
        r = b.Z.getOnboardingResponses(e),
        i = n.map((e) => e.options.filter((e) => r.includes(e.id))).flat(),
        o = {},
        l = {};
    return (n.forEach((e) => {
        (o[e.id] = Date.now()), e.options.forEach((e) => (l[e.id] = Date.now()));
    }),
    t)
        ? a.tn
              .post({
                  url: y.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: o,
                      onboarding_responses_seen: l
                  },
                  rejectWithError: !0
              })
              .then((t) => {
                  null != t.body &&
                      s.Z.dispatch({
                          type: 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS',
                          guildId: e,
                          options: t.body.onboarding_responses,
                          prompts_seen: t.body.onboarding_prompts_seen,
                          options_seen: t.body.onboarding_responses_seen
                      });
              })
              .catch((e) => v.Z.captureException(e))
        : a.tn
              .put({
                  url: y.ANM.GUILD_ONBOARDING_RESPONSES(e),
                  body: {
                      onboarding_responses: i.map((e) => e.id),
                      onboarding_prompts_seen: o,
                      onboarding_responses_seen: l
                  },
                  rejectWithError: !1
              })
              .then((t) => {
                  null != t.body &&
                      s.Z.dispatch({
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
t.Z = {
    selectOption(e, t, n, r) {
        let a = b.Z.getOnboardingPrompt(t);
        if (null == a) return;
        let o = a.singleSelect ? i().without(i().map(a.options, 'id'), n) : [];
        s.Z.dispatch({
            type: 'GUILD_ONBOARDING_SELECT_OPTION',
            guildId: e,
            promptId: t,
            optionId: n,
            selected: r,
            removedOptionIds: o
        });
    },
    updateOnboardingResponses: i().debounce(C, 1000),
    updateRolesLocal: function (e, t, n) {
        var r, a;
        let o = null !== (a = null === (r = p.ZP.getSelfMember(e)) || void 0 === r ? void 0 : r.roles) && void 0 !== a ? a : [];
        if (d.Z.isViewingRoles(e)) {
            (0, c.og)(e, i().difference(i().union(o, t), n));
            return;
        }
        (t.length > 0 || n.length > 0) &&
            s.Z.dispatch({
                type: 'GUILD_MEMBER_UPDATE_LOCAL',
                guildId: e,
                roles: i().difference(i().union(o, t), n),
                addedRoleIds: t,
                removedRoleIds: n
            });
    },
    completeOnboarding(e, t) {
        let n = t.length > 0 ? t[t.length - 1] : null,
            r = b.Z.getSelectedOptions(e),
            i = (0, T.L6)(r),
            a = (0, T.dX)(r),
            s = b.Z.getEnabled(e) ? b.Z.getDefaultChannelIds(e) : [],
            [u, f] = (0, T.Ee)(e, t, s),
            v = [...a, ...s],
            R = v.map((e) => _.Z.getChannel(e)).filter(E.lm),
            O = (0, S.v)(e, new Set(v), R, !0).length,
            D = null == n ? [] : n.options.map((e) => e.id);
        if (
            (m.default.track(y.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, l.hH)(e),
                step: t.length - 1,
                options_selected: null == n ? 0 : r.filter((e) => D.includes(e.id)).length,
                skipped: D.length > 0,
                back: !1,
                in_onboarding: !0,
                is_final_step: !0,
                roles_granted: i.size,
                channels_granted: O,
                guild_onboarding_covered_channel_ids: u.map((e) => e.id),
                guild_onboarding_uncovered_channel_ids: f.map((e) => e.id)
            }),
            (0, o.Ju)(e, N.W.GUILD_ONBOARDING_QUESTION, I.default.fromTimestamp(Date.now())),
            C(e, !0),
            d.Z.isFullServerPreview(e))
        ) {
            (0, c.zS)(e, v, []), (0, c.aq)(e, { optInEnabled: !0 }), (0, c.og)(e, Array.from(i));
            let t = h.default.getCurrentUser();
            if (null != t) {
                var L, x;
                let n = null !== (x = null === (L = p.ZP.getMember(e, t.id)) || void 0 === L ? void 0 : L.flags) && void 0 !== x ? x : 0;
                (0, c.aq)(e, { memberOptions: { flags: (0, g.mB)(n, A.q.COMPLETED_ONBOARDING, !0) } });
            }
        }
    },
    onboardExistingMember(e, t) {
        let n = new Set(t);
        (b.Z.getEnabled(e) ? b.Z.getDefaultChannelIds(e) : []).forEach((e) => n.add(e)), n.size > 0 && (0, f.Mo)(e, Array.from(n), !0, { page: y.ZY5.GUILD_ONBOARDING });
    },
    finishOnboarding(e) {
        s.Z.dispatch({
            type: 'GUILD_ONBOARDING_COMPLETE',
            guildId: e
        });
    },
    setUserOnboardingStep(e, t) {
        s.Z.dispatch({
            type: 'GUILD_ONBOARDING_SET_STEP',
            guildId: e,
            step: t
        });
    },
    async resetOnboarding(e) {
        let t = h.default.getCurrentUser();
        if (null != t) {
            var n, r;
            let i = null !== (r = null === (n = p.ZP.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
            await (0, u.e)(e, { flags: (0, g.mB)(i, A.q.COMPLETED_ONBOARDING, !1) });
        }
    }
};
