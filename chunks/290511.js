n.d(t, {
    FN: function () {
        return i;
    },
    M$: function () {
        return E;
    },
    NE: function () {
        return c;
    },
    NO: function () {
        return d;
    },
    Oq: function () {
        return O;
    },
    RF: function () {
        return T;
    },
    Un: function () {
        return a;
    },
    X: function () {
        return m;
    },
    YW: function () {
        return _;
    },
    ae: function () {
        return g;
    },
    b3: function () {
        return h;
    },
    cf: function () {
        return N;
    },
    dr: function () {
        return A;
    },
    fY: function () {
        return I;
    },
    iU: function () {
        return u;
    },
    l7: function () {
        return r;
    },
    md: function () {
        return p;
    },
    qm: function () {
        return f;
    },
    yZ: function () {
        return S;
    }
});
var r,
    i,
    a,
    o = n(348327),
    s = n.n(o),
    l = n(689938);
let u = 100,
    c = 50,
    d = 100,
    _ = 15,
    E = 12,
    f = 50,
    h = 4,
    p = 7,
    m = 5,
    I = 13;
function T(e) {
    if (e.options.length > 0) return !1;
    let { id: t, ...n } = g(),
        { id: r, ...i } = e;
    return s()(n, i);
}
function g() {
    return {
        id: String(Date.now()),
        title: l.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
        options: [],
        singleSelect: !1,
        required: !1,
        inOnboarding: !0,
        type: 0
    };
}
function S(e) {
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
function v(e) {
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
function N(e) {
    var t, n, r;
    return {
        prompts: e.prompts.map(v),
        defaultChannelIds: e.default_channel_ids,
        responses: null !== (t = e.responses) && void 0 !== t ? t : [],
        mode: e.mode,
        enabled: e.enabled,
        onboardingPromptsSeen: null !== (n = e.onboarding_prompts_seen) && void 0 !== n ? n : {},
        onboardingResponsesSeen: null !== (r = e.onboarding_responses_seen) && void 0 !== r ? r : {},
        belowRequirements: e.below_requirements
    };
}
function O(e) {
    return null == e || (null == e.id && null == e.name);
}
!(function (e) {
    (e[(e.CUSTOMIZE = 0)] = 'CUSTOMIZE'), (e[(e.BROWSE = 1)] = 'BROWSE');
})(r || (r = {})),
    !(function (e) {
        (e[(e.MULTIPLE_CHOICE = 0)] = 'MULTIPLE_CHOICE'), (e[(e.DROPDOWN = 1)] = 'DROPDOWN');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.ONBOARDING_DEFAULT = 0)] = 'ONBOARDING_DEFAULT'), (e[(e.ONBOARDING_ADVANCED = 1)] = 'ONBOARDING_ADVANCED');
    })(a || (a = {}));
