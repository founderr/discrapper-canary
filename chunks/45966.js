var i,
    a = r(653041);
var s = r(536091);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(160404),
    f = r(592125),
    _ = r(70956),
    h = r(709054),
    p = r(977258),
    m = r(819553),
    g = r(290511);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let v = {},
    I = {},
    T = {},
    b = !1;
function y() {
    b = !0;
}
function S() {
    (b = !1), (v = {});
}
function A(e, n, r) {
    let i = !1,
        a = [];
    for (let n = 0; n < e.options.length; n++) {
        let s = e.options[n],
            o = null == r[s.id];
        o && (i = !0),
            a.push({
                ...s,
                isUnseen: o
            });
    }
    return {
        ...e,
        options: a,
        hasNewAnswers: i,
        isNew: null == n[e.id]
    };
}
function N(e, n, r) {
    return e.map((e) => A(e, n, r));
}
function C(e) {
    let { guildId: n, prompts: r, defaultChannelIds: i, enabled: a, responses: s, onboardingPromptsSeen: o, onboardingResponsesSeen: l, mode: u, belowRequirements: c } = e;
    b = !1;
    let d = m.ZP.getOnboardingStatus(n) === m.uX.READY,
        f = N(r, o, l);
    (v[n] = {
        enabled: a,
        mode: u,
        belowRequirements: c,
        prompts: f,
        onboardingPrompts: f.filter((e) => e.inOnboarding),
        defaultChannelIds: i.filter((e) => (0, p.s)(n, e)),
        responses: d ? [] : s,
        onboardingPromptsSeen: o,
        onboardingResponsesSeen: l
    }),
        !d && L(n, s),
        (T[n] = Date.now());
}
function R() {
    b = !1;
}
function O(e) {
    var n, r, i, a, s, o, l, u, c;
    let { guildId: d, updates: f } = e,
        _ = null !== (s = null !== (a = f.onboardingPromptsSeen) && void 0 !== a ? a : null === (n = v[d]) || void 0 === n ? void 0 : n.onboardingPromptsSeen) && void 0 !== s ? s : {},
        h = null !== (l = null !== (o = f.onboardingResponsesSeen) && void 0 !== o ? o : null === (r = v[d]) || void 0 === r ? void 0 : r.onboardingResponsesSeen) && void 0 !== l ? l : {},
        p = N(null !== (c = null !== (u = f.prompts) && void 0 !== u ? u : null === (i = v[d]) || void 0 === i ? void 0 : i.prompts) && void 0 !== c ? c : [], _, h);
    v[d] = {
        ...v[d],
        ...f,
        prompts: p
    };
}
function D(e) {
    let { guildId: n, optionId: r, selected: i, removedOptionIds: a } = e;
    return !!d.Z.isFullServerPreview(n) || (null != v[n] && (null != a && a.length > 0 && l().pullAll(v[n].responses, a), i ? v[n].responses.push(r) : l().pull(v[n].responses, r), null == I[n] && (I[n] = {}), (I[n][r] = i), null != a && a.forEach((e) => (I[n][e] = !1)), (I[n] = { ...I[n] }), !0));
}
function L(e, n) {
    if (null == I[e]) return;
    let r = {};
    Object.keys(I[e]).forEach((i) => {
        !n.includes(i) && I[e][i] ? (r[i] = !0) : n.includes(i) && !1 === I[e][i] && (r[i] = !1);
    }),
        (I[e] = r);
    let i = n.filter((e) => null == r[e] || !0 === r[e]);
    Object.keys(r).forEach((e) => {
        !0 === r[e] && !n.includes(e) && i.push(e);
    }),
        (v[e] = {
            ...v[e],
            responses: i
        });
}
function x(e) {
    let { guildId: n, options: r, prompts_seen: i, options_seen: a } = e;
    L(n, r);
    let s = v[n];
    if (null == s) return !1;
    let o = N(s.prompts, i, a);
    v[n] = {
        ...s,
        prompts: o,
        onboardingPrompts: o.filter((e) => e.inOnboarding),
        onboardingPromptsSeen: i,
        onboardingResponsesSeen: a
    };
}
function w(e) {
    let { guildId: n, channelIds: r } = e;
    v[n] = {
        ...v[n],
        defaultChannelIds: r
    };
}
function P(e) {
    let { guildId: n, mode: r } = e,
        i = v[n];
    null != i && (i.mode = r);
}
let M = [],
    k = [],
    U = [];
class B extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, m.ZP, d.Z);
    }
    getOnboardingPromptsForOnboarding(e) {
        var n, r;
        return null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n.onboardingPrompts) && void 0 !== r ? r : M;
    }
    getOnboardingPrompts(e) {
        var n, r;
        return null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n.prompts) && void 0 !== r ? r : M;
    }
    getOnboardingResponses(e) {
        var n, r, i;
        return d.Z.isFullServerPreview(e) ? Array.from(null !== (r = d.Z.getOnboardingResponses(e)) && void 0 !== r ? r : k) : null !== (i = null === (n = v[e]) || void 0 === n ? void 0 : n.responses) && void 0 !== i ? i : k;
    }
    getSelectedOptions(e) {
        let n = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => n.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, n) {
        let r = v[e];
        if (null == r) return k;
        let i = r.prompts.find((e) => e.id === n);
        return null == i
            ? k
            : l().intersection(
                  i.options.map((e) => e.id),
                  this.getOnboardingResponses(e)
              );
    }
    getEnabledOnboardingPrompts(e) {
        var n, r;
        let i = v[e];
        return d.Z.isFullServerPreview(e) ? (null !== (n = null == i ? void 0 : i.prompts) && void 0 !== n ? n : M) : null != i && i.enabled ? (null !== (r = i.prompts) && void 0 !== r ? r : M) : M;
    }
    getDefaultChannelIds(e) {
        var n, r;
        return null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n.defaultChannelIds) && void 0 !== r ? r : U;
    }
    getEnabled(e) {
        var n, r;
        return d.Z.isFullServerPreview(e) ? null != v[e] : null !== (r = null === (n = v[e]) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
    }
    getOnboardingPrompt(e) {
        return Object.values(v)
            .map((e) => e.prompts)
            .flat()
            .find((n) => n.id === e);
    }
    isLoading() {
        return b;
    }
    shouldFetchPrompts(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Z.Millis.HOUR;
        if (b) return !1;
        let r = T[e];
        return null == r || Date.now() - r > n;
    }
    getPendingResponseOptions(e) {
        return I[e];
    }
    ackIdForGuild(e) {
        let n = this.getEnabledOnboardingPrompts(e),
            r = '0';
        return (
            n.forEach((e) => {
                e.options.forEach((e) => {
                    h.default.compare(e.id, r) > 0 && (r = e.id);
                }),
                    h.default.compare(e.id, r) > 0 && (r = e.id);
            }),
            r
        );
    }
    lastFetchedAt(e) {
        return T[e];
    }
    isAdvancedMode(e) {
        var n;
        return null != e && (null === (n = v[e]) || void 0 === n ? void 0 : n.mode) === g.Un.ONBOARDING_ADVANCED;
    }
}
E(B, 'displayName', 'GuildOnboardingPromptsStore'),
    (n.Z = new B(c.Z, {
        CONNECTION_OPEN: S,
        GUILD_ONBOARDING_PROMPTS_FETCH_START: y,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: C,
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: R,
        GUILD_ONBOARDING_SELECT_OPTION: D,
        GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: x,
        GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: O,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: O,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: w,
        GUILD_SETTINGS_ONBOARDING_SET_MODE: P
    }));
