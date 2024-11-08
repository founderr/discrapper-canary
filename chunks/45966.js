n(653041), n(536091);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(160404),
    f = n(592125),
    _ = n(70956),
    h = n(709054),
    p = n(977258),
    m = n(819553),
    g = n(290511);
let E = {},
    v = {},
    I = {},
    S = !1;
function b(e, t, n) {
    return e.map((e) =>
        (function (e, t, n) {
            let r = !1,
                i = [];
            for (let t = 0; t < e.options.length; t++) {
                let a = e.options[t],
                    s = null == n[a.id];
                s && (r = !0),
                    i.push({
                        ...a,
                        isUnseen: s
                    });
            }
            return {
                ...e,
                options: i,
                hasNewAnswers: r,
                isNew: null == t[e.id]
            };
        })(e, t, n)
    );
}
function T(e) {
    var t, n, r, i, a, s, o, l, u;
    let { guildId: c, updates: d } = e,
        f = null !== (a = null !== (i = d.onboardingPromptsSeen) && void 0 !== i ? i : null === (t = E[c]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== a ? a : {},
        _ = null !== (o = null !== (s = d.onboardingResponsesSeen) && void 0 !== s ? s : null === (n = E[c]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== o ? o : {},
        h = b(null !== (u = null !== (l = d.prompts) && void 0 !== l ? l : null === (r = E[c]) || void 0 === r ? void 0 : r.prompts) && void 0 !== u ? u : [], f, _);
    E[c] = {
        ...E[c],
        ...d,
        prompts: h
    };
}
function y(e, t) {
    if (null == v[e]) return;
    let n = {};
    Object.keys(v[e]).forEach((r) => {
        !t.includes(r) && v[e][r] ? (n[r] = !0) : t.includes(r) && !1 === v[e][r] && (n[r] = !1);
    }),
        (v[e] = n);
    let r = t.filter((e) => null == n[e] || !0 === n[e]);
    Object.keys(n).forEach((e) => {
        !0 === n[e] && !t.includes(e) && r.push(e);
    }),
        (E[e] = {
            ...E[e],
            responses: r
        });
}
let A = [],
    N = [],
    C = [];
class R extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, m.ZP, d.Z);
    }
    getOnboardingPromptsForOnboarding(e) {
        var t, n;
        return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : A;
    }
    getOnboardingPrompts(e) {
        var t, n;
        return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : A;
    }
    getOnboardingResponses(e) {
        var t, n, r;
        return d.Z.isFullServerPreview(e) ? Array.from(null !== (n = d.Z.getOnboardingResponses(e)) && void 0 !== n ? n : N) : null !== (r = null === (t = E[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== r ? r : N;
    }
    getSelectedOptions(e) {
        let t = this.getOnboardingResponses(e);
        return this.getOnboardingPrompts(e)
            .map((e) => e.options)
            .flat()
            .filter((e) => t.includes(e.id));
    }
    getOnboardingResponsesForPrompt(e, t) {
        let n = E[e];
        if (null == n) return N;
        let r = n.prompts.find((e) => e.id === t);
        return null == r
            ? N
            : l().intersection(
                  r.options.map((e) => e.id),
                  this.getOnboardingResponses(e)
              );
    }
    getEnabledOnboardingPrompts(e) {
        var t, n;
        let r = E[e];
        return d.Z.isFullServerPreview(e) ? (null !== (t = null == r ? void 0 : r.prompts) && void 0 !== t ? t : A) : null != r && r.enabled ? (null !== (n = r.prompts) && void 0 !== n ? n : A) : A;
    }
    getDefaultChannelIds(e) {
        var t, n;
        return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : C;
    }
    getEnabled(e) {
        var t, n;
        return d.Z.isFullServerPreview(e) ? null != E[e] : null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
    }
    getOnboardingPrompt(e) {
        return Object.values(E)
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
        let n = I[e];
        return null == n || Date.now() - n > t;
    }
    getPendingResponseOptions(e) {
        return v[e];
    }
    ackIdForGuild(e) {
        let t = this.getEnabledOnboardingPrompts(e),
            n = '0';
        return (
            t.forEach((e) => {
                e.options.forEach((e) => {
                    h.default.compare(e.id, n) > 0 && (n = e.id);
                }),
                    h.default.compare(e.id, n) > 0 && (n = e.id);
            }),
            n
        );
    }
    lastFetchedAt(e) {
        return I[e];
    }
    isAdvancedMode(e) {
        var t;
        return null != e && (null === (t = E[e]) || void 0 === t ? void 0 : t.mode) === g.Un.ONBOARDING_ADVANCED;
    }
}
(s = 'GuildOnboardingPromptsStore'),
    (a = 'displayName') in (i = R)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new R(c.Z, {
        CONNECTION_OPEN: function () {
            (S = !1), (E = {});
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_START: function () {
            S = !0;
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, prompts: n, defaultChannelIds: r, enabled: i, responses: a, onboardingPromptsSeen: s, onboardingResponsesSeen: o, mode: l, belowRequirements: u } = e;
            S = !1;
            let c = m.ZP.getOnboardingStatus(t) === m.uX.READY,
                d = b(n, s, o);
            (E[t] = {
                enabled: i,
                mode: l,
                belowRequirements: u,
                prompts: d,
                onboardingPrompts: d.filter((e) => e.inOnboarding),
                defaultChannelIds: r.filter((e) => (0, p.s)(t, e)),
                responses: c ? [] : a,
                onboardingPromptsSeen: s,
                onboardingResponsesSeen: o
            }),
                !c && y(t, a),
                (I[t] = Date.now());
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function () {
            S = !1;
        },
        GUILD_ONBOARDING_SELECT_OPTION: function (e) {
            let { guildId: t, optionId: n, selected: r, removedOptionIds: i } = e;
            return !!d.Z.isFullServerPreview(t) || (null != E[t] && (null != i && i.length > 0 && l().pullAll(E[t].responses, i), r ? E[t].responses.push(n) : l().pull(E[t].responses, n), null == v[t] && (v[t] = {}), (v[t][n] = r), null != i && i.forEach((e) => (v[t][e] = !1)), (v[t] = { ...v[t] }), !0));
        },
        GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function (e) {
            let { guildId: t, options: n, prompts_seen: r, options_seen: i } = e;
            y(t, n);
            let a = E[t];
            if (null == a) return !1;
            let s = b(a.prompts, r, i);
            E[t] = {
                ...a,
                prompts: s,
                onboardingPrompts: s.filter((e) => e.inOnboarding),
                onboardingPromptsSeen: r,
                onboardingResponsesSeen: i
            };
        },
        GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: T,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: T,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function (e) {
            let { guildId: t, channelIds: n } = e;
            E[t] = {
                ...E[t],
                defaultChannelIds: n
            };
        },
        GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
            let { guildId: t, mode: n } = e,
                r = E[t];
            null != r && (r.mode = n);
        }
    }));
