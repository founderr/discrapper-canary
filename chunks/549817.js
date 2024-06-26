"use strict";
n(536091), n(47120), n(789020);
var i = n(392711),
  r = n.n(i),
  s = n(544891),
  o = n(570140),
  a = n(45114),
  l = n(367907),
  u = n(781792),
  _ = n(962086),
  c = n(160404),
  d = n(152376),
  E = n(592125),
  I = n(271383),
  T = n(594174),
  h = n(626135),
  f = n(630388),
  S = n(823379),
  N = n(960048),
  A = n(709054),
  m = n(45966),
  O = n(637853),
  p = n(816436),
  R = n(981631),
  g = n(372897),
  C = n(490897);

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (c.Z.isFullServerPreview(e)) return;
  let n = t ? m.Z.getOnboardingPromptsForOnboarding(e) : m.Z.getOnboardingPrompts(e),
    i = m.Z.getOnboardingResponses(e),
    r = n.map(e => e.options.filter(e => i.includes(e.id))).flat(),
    a = {},
    l = {};
  return (n.forEach(e => {
    a[e.id] = Date.now(), e.options.forEach(e => l[e.id] = Date.now())
  }), t) ? s.tn.post({
    url: R.ANM.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: r.map(e => e.id),
      onboarding_prompts_seen: a,
      onboarding_responses_seen: l
    }
  }).then(t => {
    null != t.body && o.Z.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(e => N.Z.captureException(e)) : s.tn.put({
    url: R.ANM.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: r.map(e => e.id),
      onboarding_prompts_seen: a,
      onboarding_responses_seen: l
    }
  }).then(t => {
    null != t.body && o.Z.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(e => N.Z.captureException(e))
}
t.Z = {
  selectOption(e, t, n, i) {
    let s = m.Z.getOnboardingPrompt(t);
    if (null == s) return;
    let a = s.singleSelect ? r().without(r().map(s.options, "id"), n) : [];
    o.Z.dispatch({
      type: "GUILD_ONBOARDING_SELECT_OPTION",
      guildId: e,
      promptId: t,
      optionId: n,
      selected: i,
      removedOptionIds: a
    })
  },
  updateOnboardingResponses: r().debounce(v, 1e3),
  updateRolesLocal: function(e, t, n) {
    var i, s;
    let a = null !== (s = null === (i = I.ZP.getSelfMember(e)) || void 0 === i ? void 0 : i.roles) && void 0 !== s ? s : [];
    if (c.Z.isViewingRoles(e)) {
      (0, _.og)(e, r().difference(r().union(a, t), n));
      return
    }(t.length > 0 || n.length > 0) && o.Z.dispatch({
      type: "GUILD_MEMBER_UPDATE_LOCAL",
      guildId: e,
      roles: r().difference(r().union(a, t), n),
      addedRoleIds: t,
      removedRoleIds: n
    })
  },
  completeOnboarding(e, t) {
    let n = t.length > 0 ? t[t.length - 1] : null,
      i = m.Z.getSelectedOptions(e),
      r = (0, O.L6)(i),
      s = (0, O.dX)(i),
      o = m.Z.getEnabled(e) ? m.Z.getDefaultChannelIds(e) : [],
      [u, d] = (0, O.Ee)(e, t, o),
      N = [...s, ...o],
      L = N.map(e => E.Z.getChannel(e)).filter(S.lm),
      D = (0, p.v)(e, new Set(N), L, !0).length,
      M = null == n ? [] : n.options.map(e => e.id);
    if (h.default.track(R.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, l.hH)(e),
        step: t.length - 1,
        options_selected: null == n ? 0 : i.filter(e => M.includes(e.id)).length,
        skipped: M.length > 0,
        back: !1,
        in_onboarding: !0,
        is_final_step: !0,
        roles_granted: r.size,
        channels_granted: D,
        guild_onboarding_covered_channel_ids: u.map(e => e.id),
        guild_onboarding_uncovered_channel_ids: d.map(e => e.id)
      }), (0, a.Ju)(e, C.W.GUILD_ONBOARDING_QUESTION, A.default.fromTimestamp(Date.now())), v(e, !0), c.Z.isFullServerPreview(e)) {
      (0, _.zS)(e, N, []), (0, _.aq)(e, {
        optInEnabled: !0
      }), (0, _.og)(e, Array.from(r));
      let t = T.default.getCurrentUser();
      if (null != t) {
        var P, y;
        let n = null !== (y = null === (P = I.ZP.getMember(e, t.id)) || void 0 === P ? void 0 : P.flags) && void 0 !== y ? y : 0;
        (0, _.aq)(e, {
          memberOptions: {
            flags: (0, f.mB)(n, g.q.COMPLETED_ONBOARDING, !0)
          }
        })
      }
    }
  },
  onboardExistingMember(e, t) {
    let n = new Set(t);
    (m.Z.getEnabled(e) ? m.Z.getDefaultChannelIds(e) : []).forEach(e => n.add(e)), n.size > 0 && (0, d.Mo)(e, Array.from(n), !0, {
      page: R.ZY5.GUILD_ONBOARDING
    })
  },
  finishOnboarding(e) {
    o.Z.dispatch({
      type: "GUILD_ONBOARDING_COMPLETE",
      guildId: e
    })
  },
  setUserOnboardingStep(e, t) {
    o.Z.dispatch({
      type: "GUILD_ONBOARDING_SET_STEP",
      guildId: e,
      step: t
    })
  },
  async resetOnboarding(e) {
    let t = T.default.getCurrentUser();
    if (null != t) {
      var n, i;
      let r = null !== (i = null === (n = I.ZP.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
      await (0, u.e)(e, {
        flags: (0, f.mB)(r, g.q.COMPLETED_ONBOARDING, !1)
      })
    }
  }
}