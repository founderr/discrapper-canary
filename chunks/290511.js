n.d(t, {
    FN: function () {
        return o;
    },
    M$: function () {
        return m;
    },
    NE: function () {
        return _;
    },
    NO: function () {
        return h;
    },
    Oq: function () {
        return R;
    },
    RF: function () {
        return b;
    },
    Un: function () {
        return l;
    },
    X: function () {
        return I;
    },
    YW: function () {
        return p;
    },
    ae: function () {
        return T;
    },
    b3: function () {
        return E;
    },
    cf: function () {
        return C;
    },
    dr: function () {
        return A;
    },
    fY: function () {
        return S;
    },
    iU: function () {
        return f;
    },
    l7: function () {
        return s;
    },
    md: function () {
        return v;
    },
    qm: function () {
        return g;
    },
    yZ: function () {
        return y;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(348327),
    c = n.n(u),
    d = n(388032);
let f = 100,
    _ = 50,
    h = 100,
    p = 15,
    m = 12,
    g = 50,
    E = 4,
    v = 7,
    I = 5,
    S = 13;
function b(e) {
    if (e.options.length > 0) return !1;
    let { id: t, ...n } = T(),
        { id: r, ...i } = e;
    return c()(n, i);
}
function T() {
    return {
        id: String(Date.now()),
        title: d.intl.string(d.t.vY91Cw),
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0
    };
}
function y(e) {
    return {
        id: String(Date.now()),
        title: '',
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: e,
        type: 0
    };
}
function A(e) {
    return {
        id: e.id,
        options: e.options.map((e) => {
            var t, n, r;
            return {
                id: e.id,
                channel_ids: e.channelIds,
                role_ids: e.roleIds,
                emoji: e.emoji,
                emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                emoji_name: null === (n = e.emoji) || void 0 === n ? void 0 : n.name,
                emoji_animated: null === (r = e.emoji) || void 0 === r ? void 0 : r.animated,
                title: e.title,
                description: e.description
            };
        }),
        title: e.title,
        single_select: e.singleSelect,
        disabled: e.disabled,
        required: e.required,
        in_onboarding: e.inOnboarding,
        type: e.type
    };
}
function N(e) {
    return {
        id: e.id,
        options: e.options.map((e) => {
            var t;
            return {
                id: e.id,
                channelIds: e.channel_ids,
                roleIds: e.role_ids,
                emoji: e.emoji,
                title: e.title,
                description: null !== (t = e.description) && void 0 !== t ? t : ''
            };
        }),
        title: e.title,
        singleSelect: e.single_select,
        disabled: e.disabled,
        required: e.required,
        inOnboarding: e.in_onboarding,
        type: e.type
    };
}
function C(e) {
    var t, n, r;
    return {
        prompts: e.prompts.map(N),
        defaultChannelIds: e.default_channel_ids,
        responses: null !== (t = e.responses) && void 0 !== t ? t : [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
        onboardingResponsesSeen: null !== (r = e.onboarding_responses_seen) && void 0 !== r ? r : {},
        belowRequirements: e.below_requirements
    };
}
function R(e) {
    return null == e || (null == e.id && null == e.name);
}
((r = s || (s = {}))[(r.CUSTOMIZE = 0)] = 'CUSTOMIZE'), (r[(r.BROWSE = 1)] = 'BROWSE'), ((i = o || (o = {}))[(i.MULTIPLE_CHOICE = 0)] = 'MULTIPLE_CHOICE'), (i[(i.DROPDOWN = 1)] = 'DROPDOWN'), ((a = l || (l = {}))[(a.ONBOARDING_DEFAULT = 0)] = 'ONBOARDING_DEFAULT'), (a[(a.ONBOARDING_ADVANCED = 1)] = 'ONBOARDING_ADVANCED');
