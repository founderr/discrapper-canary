var r,
    i = n(653041);
var a = n(536091);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(160404),
    d = n(592125),
    _ = n(70956),
    E = n(709054),
    f = n(977258),
    h = n(819553),
    p = n(290511);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = {},
    T = {},
    g = {},
    S = !1;
function A() {
    S = !0;
}
function v() {
    (S = !1), (I = {});
}
function N(e, t, n) {
    let r = !1,
        i = [];
    for (let t = 0; t < e.options.length; t++) {
        let a = e.options[t],
            o = null == n[a.id];
        o && (r = !0),
            i.push({
                ...a,
                isUnseen: o
            });
    }
    return {
        ...e,
        options: i,
        hasNewAnswers: r,
        isNew: null == t[e.id]
    };
}
function O(e, t, n) {
    return e.map((e) => N(e, t, n));
}
function R(e) {
    let { guildId: t, prompts: n, defaultChannelIds: r, enabled: i, responses: a, onboardingPromptsSeen: o, onboardingResponsesSeen: s, mode: l, belowRequirements: u } = e;
    S = !1;
    let c = h.ZP.getOnboardingStatus(t) === h.uX.READY,
        d = O(n, o, s);
    (I[t] = {
        enabled: i,
        mode: l,
        belowRequirements: u,
        prompts: d,
        onboardingPrompts: d.filter((e) => e.inOnboarding),
        defaultChannelIds: r.filter((e) => (0, f.s)(t, e)),
        responses: c ? [] : a,
        onboardingPromptsSeen: o,
        onboardingResponsesSeen: s
    }),
        !c && L(t, a),
        (g[t] = Date.now());
}
function C() {
    S = !1;
}
function y(e) {
    var t, n, r, i, a, o, s, l, u;
    let { guildId: c, updates: d } = e,
        _ = null !== (a = null !== (i = d.onboardingPromptsSeen) && void 0 !== i ? i : null === (t = I[c]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== a ? a : {},
        E = null !== (s = null !== (o = d.onboardingResponsesSeen) && void 0 !== o ? o : null === (n = I[c]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== s ? s : {},
        f = O(null !== (u = null !== (l = d.prompts) && void 0 !== l ? l : null === (r = I[c]) || void 0 === r ? void 0 : r.prompts) && void 0 !== u ? u : [], _, E);
    I[c] = {
        ...I[c],
        ...d,
        prompts: f
    };
}
function b(e) {
    let { guildId: t, optionId: n, selected: r, removedOptionIds: i } = e;
    return !!c.Z.isFullServerPreview(t) || (null != I[t] && (null != i && i.length > 0 && s().pullAll(I[t].responses, i), r ? I[t].responses.push(n) : s().pull(I[t].responses, n), null == T[t] && (T[t] = {}), (T[t][n] = r), null != i && i.forEach((e) => (T[t][e] = !1)), (T[t] = { ...T[t] }), !0));
}
function L(e, t) {
    if (null == T[e]) return;
    let n = {};
    Object.keys(T[e]).forEach((r) => {
        !t.includes(r) && T[e][r] ? (n[r] = !0) : t.includes(r) && !1 === T[e][r] && (n[r] = !1);
    }),
        (T[e] = n);
    let r = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 === n[e] && !t.includes(e) && r.push(e);
    }),
        (I[e] = {
            ...I[e],
            responses: r
        });
}
function D(e) {
    let { guildId: t, options: n, prompts_seen: r, options_seen: i } = e;
    L(t, n);
    let a = I[t];
    if (null == a) return !1;
    let o = O(a.prompts, r, i);
    I[t] = {
        ...a,
        prompts: o,
        onboardingPrompts: o.filter((e) => e.inOnboarding),
        onboardingPromptsSeen: r,
        onboardingResponsesSeen: i
    };
}
function M(e) {
    let { guildId: t, channelIds: n } = e;
    I[t] = {
        ...I[t],
        defaultChannelIds: n
    };
}
function P(e) {
    let { guildId: t, mode: n } = e,
        r = I[t];
    null != r && (r.mode = n);
}
let U = [],
    w = [],
    x = [];
class G extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, h.ZP, c.Z);
    }
    getOnboardingPromptsForOnboarding(e) {
        var t, n;
        return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : U;
    }
    getOnboardingPrompts(e) {
        var t, n;
        return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : U;
    }
    getOnboardingResponses(e) {
        var t, n, r;
        return c.Z.isFullServerPreview(e) ? Array.from(null !== (n = c.Z.getOnboardingResponses(e)) && void 0 !== n ? n : w) : null !== (r = null === (t = I[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== r ? r : w;
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = I[e];
        if (null == n) return w;
        let r = n.prompts.find((e) => e.id === t);
        return null == r
            ? w
            : s().intersection(
                  r.options.map((e) => e.id),
                  this.getOnboardingResponses(e)
              );
    }
    getEnabledOnboardingPrompts(e) {
        var t, n;
        let r = I[e];
        return c.Z.isFullServerPreview(e) ? (null !== (t = null == r ? void 0 : r.prompts) && void 0 !== t ? t : U) : null != r && r.enabled ? (null !== (n = r.prompts) && void 0 !== n ? n : U) : U;
    }
    getDefaultChannelIds(e) {
        var t, n;
        return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : x;
    }
    getEnabled(e) {
        var t, n;
        return c.Z.isFullServerPreview(e) ? null != I[e] : null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
    }
    getOnboardingPrompt(e) {
        return Object.values(I)
            .map((e) => e.prompts)
            .flat()
            .find((t) => t.id === e);
    }
    isLoading() {
        return S;
    }
    shouldFetchPrompts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Z.Millis.HOUR;
        if (S) return !1;
        let n = g[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return T[e];
    }
    ackIdForGuild(e) {
        let t = this.getEnabledOnboardingPrompts(e),
            n = '0';
        return (
            t.forEach((e) => {
                e.options.forEach((e) => {
                    E.default.compare(e.id, n) > 0 && (n = e.id);
                }),
                    E.default.compare(e.id, n) > 0 && (n = e.id);
            }),
            n
        );
    }
    lastFetchedAt(e) {
        return g[e];
    }
    isAdvancedMode(e) {
        var t;
        return null != e && (null === (t = I[e]) || void 0 === t ? void 0 : t.mode) === p.Un.ONBOARDING_ADVANCED;
    }
}
m(G, 'displayName', 'GuildOnboardingPromptsStore'),
    (t.Z = new G(u.Z, {
        CONNECTION_OPEN: v,
        GUILD_ONBOARDING_PROMPTS_FETCH_START: A,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: R,
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: C,
        GUILD_ONBOARDING_SELECT_OPTION: b,
        GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: D,
        GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: y,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: y,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: M,
        GUILD_SETTINGS_ONBOARDING_SET_MODE: P
    }));
