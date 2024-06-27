"use strict";
n(653041), n(536091);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(160404),
  d = n(592125),
  E = n(70956),
  I = n(709054),
  T = n(977258),
  h = n(819553),
  f = n(290511);
let S = {},
  A = {},
  N = {},
  m = !1;

function O(e, t, n) {
  return e.map(e => (function(e, t, n) {
    let i = !1,
      r = [];
    for (let t = 0; t < e.options.length; t++) {
      let s = e.options[t],
        o = null == n[s.id];
      o && (i = !0), r.push({
        ...s,
        isUnseen: o
      })
    }
    return {
      ...e,
      options: r,
      hasNewAnswers: i,
      isNew: null == t[e.id]
    }
  })(e, t, n))
}

function R(e) {
  var t, n, i, r, s, o, a, l, u;
  let {
    guildId: _,
    updates: c
  } = e, d = null !== (s = null !== (r = c.onboardingPromptsSeen) && void 0 !== r ? r : null === (t = S[_]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== s ? s : {}, E = null !== (a = null !== (o = c.onboardingResponsesSeen) && void 0 !== o ? o : null === (n = S[_]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== a ? a : {}, I = O(null !== (u = null !== (l = c.prompts) && void 0 !== l ? l : null === (i = S[_]) || void 0 === i ? void 0 : i.prompts) && void 0 !== u ? u : [], d, E);
  S[_] = {
    ...S[_],
    ...c,
    prompts: I
  }
}

function p(e, t) {
  if (null == A[e]) return;
  let n = {};
  Object.keys(A[e]).forEach(i => {
    !t.includes(i) && A[e][i] ? n[i] = !0 : t.includes(i) && !1 === A[e][i] && (n[i] = !1)
  }), A[e] = n;
  let i = t.filter(e => null == n[e] || !0 === n[e]);
  Object.keys(n).forEach(e => {
    !0 === n[e] && !t.includes(e) && i.push(e)
  }), S[e] = {
    ...S[e],
    responses: i
  }
}
let g = [],
  C = [],
  v = [];
class L extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(d.Z, h.ZP, c.Z)
  }
  getOnboardingPromptsForOnboarding(e) {
    var t, n;
    return null !== (n = null === (t = S[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : g
  }
  getOnboardingPrompts(e) {
    var t, n;
    return null !== (n = null === (t = S[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : g
  }
  getOnboardingResponses(e) {
    var t, n, i;
    return c.Z.isFullServerPreview(e) ? Array.from(null !== (n = c.Z.getOnboardingResponses(e)) && void 0 !== n ? n : C) : null !== (i = null === (t = S[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== i ? i : C
  }
  getSelectedOptions(e) {
    let t = this.getOnboardingResponses(e);
    return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id))
  }
  getOnboardingResponsesForPrompt(e, t) {
    let n = S[e];
    if (null == n) return C;
    let i = n.prompts.find(e => e.id === t);
    return null == i ? C : l().intersection(i.options.map(e => e.id), this.getOnboardingResponses(e))
  }
  getEnabledOnboardingPrompts(e) {
    var t, n;
    let i = S[e];
    return c.Z.isFullServerPreview(e) ? null !== (t = null == i ? void 0 : i.prompts) && void 0 !== t ? t : g : null != i && i.enabled ? null !== (n = i.prompts) && void 0 !== n ? n : g : g
  }
  getDefaultChannelIds(e) {
    var t, n;
    return null !== (n = null === (t = S[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : v
  }
  getEnabled(e) {
    var t, n;
    return c.Z.isFullServerPreview(e) ? null != S[e] : null !== (n = null === (t = S[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
  }
  getOnboardingPrompt(e) {
    return Object.values(S).map(e => e.prompts).flat().find(t => t.id === e)
  }
  isLoading() {
    return m
  }
  shouldFetchPrompts(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Z.Millis.HOUR;
    if (m) return !1;
    let n = N[e];
    return null == n || Date.now() - n > t
  }
  getPendingResponseOptions(e) {
    return A[e]
  }
  ackIdForGuild(e) {
    let t = this.getEnabledOnboardingPrompts(e),
      n = "0";
    return t.forEach(e => {
      e.options.forEach(e => {
        I.default.compare(e.id, n) > 0 && (n = e.id)
      }), I.default.compare(e.id, n) > 0 && (n = e.id)
    }), n
  }
  lastFetchedAt(e) {
    return N[e]
  }
  isAdvancedMode(e) {
    var t;
    return null != e && (null === (t = S[e]) || void 0 === t ? void 0 : t.mode) === f.Un.ONBOARDING_ADVANCED
  }
}
o = "GuildOnboardingPromptsStore", (s = "displayName") in(r = L) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new L(_.Z, {
  CONNECTION_OPEN: function() {
    m = !1, S = {}
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
    m = !0
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      prompts: n,
      defaultChannelIds: i,
      enabled: r,
      responses: s,
      onboardingPromptsSeen: o,
      onboardingResponsesSeen: a,
      mode: l,
      belowRequirements: u
    } = e;
    m = !1;
    let _ = h.ZP.getOnboardingStatus(t) === h.uX.READY,
      c = O(n, o, a);
    S[t] = {
      enabled: r,
      mode: l,
      belowRequirements: u,
      prompts: c,
      onboardingPrompts: c.filter(e => e.inOnboarding),
      defaultChannelIds: i.filter(e => (0, T.s)(t, e)),
      responses: _ ? [] : s,
      onboardingPromptsSeen: o,
      onboardingResponsesSeen: a
    }, !_ && p(t, s), N[t] = Date.now()
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
    m = !1
  },
  GUILD_ONBOARDING_SELECT_OPTION: function(e) {
    let {
      guildId: t,
      optionId: n,
      selected: i,
      removedOptionIds: r
    } = e;
    return !!c.Z.isFullServerPreview(t) || null != S[t] && (null != r && r.length > 0 && l().pullAll(S[t].responses, r), i ? S[t].responses.push(n) : l().pull(S[t].responses, n), null == A[t] && (A[t] = {}), A[t][n] = i, null != r && r.forEach(e => A[t][e] = !1), A[t] = {
      ...A[t]
    }, !0)
  },
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
    let {
      guildId: t,
      options: n,
      prompts_seen: i,
      options_seen: r
    } = e;
    p(t, n);
    let s = S[t];
    if (null == s) return !1;
    let o = O(s.prompts, i, r);
    S[t] = {
      ...s,
      prompts: o,
      onboardingPrompts: o.filter(e => e.inOnboarding),
      onboardingPromptsSeen: i,
      onboardingResponsesSeen: r
    }
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: R,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: R,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    S[t] = {
      ...S[t],
      defaultChannelIds: n
    }
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      guildId: t,
      mode: n
    } = e, i = S[t];
    null != i && (i.mode = n)
  }
})