n.d(e, {
    I6: function () {
        return d;
    },
    V9: function () {
        return f;
    },
    Z6: function () {
        return _;
    },
    jp: function () {
        return I;
    },
    r5: function () {
        return T;
    },
    vT: function () {
        return r;
    },
    vh: function () {
        return i;
    },
    yU: function () {
        return N;
    }
}),
    n(47120),
    n(789020),
    n(411104),
    n(724458);
var r,
    i,
    l,
    u,
    a = n(192379),
    o = n(467319),
    E = n(676317),
    s = n(273504),
    c = n(388032);
((l = r || (r = {})).NEW = 'new'), (l.RECOMMENDED = 'recommended'), (l.BETA = 'beta'), (l.ALPHA = 'alpha');
let d = {
    [s.fX.SPAM_LINK]: {
        getDefaultRuleName: () => c.intl.string(c.t.ffR2cH),
        type: s.fX.SPAM_LINK,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set()
    },
    [s.fX.KEYWORD]: {
        getDefaultRuleName: () => c.intl.string(c.t.ffR2cH),
        type: s.fX.KEYWORD,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL, s.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.ML_SPAM]: {
        getDefaultRuleName: () => c.intl.string(c.t['puF/Oj']),
        type: s.fX.ML_SPAM,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => c.intl.string(c.t.LnGhZm),
        type: s.fX.DEFAULT_KEYWORD_LIST,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.MENTION_SPAM]: {
        getDefaultRuleName: () => c.intl.string(c.t.pX7i6u),
        type: s.fX.MENTION_SPAM,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL, s.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.USER_PROFILE]: {
        getDefaultRuleName: () => c.intl.string(c.t.q1L2v7),
        type: s.fX.USER_PROFILE,
        eventType: s.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.QUARANTINE_USER, s.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.QUARANTINE_USER])
    },
    [s.fX.SERVER_POLICY]: {
        getDefaultRuleName: () => c.intl.string(c.t.ZQr92N),
        type: s.fX.SERVER_POLICY,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.FLAG_TO_CHANNEL]),
        flags: new Set(['alpha']),
        defaultActionTypes: new Set()
    }
};
((u = i || (i = {})).MEMBERS = 'members'), (u.CONTENT = 'content');
let S = {
        members: [d[s.fX.USER_PROFILE]],
        content: [d[s.fX.SERVER_POLICY], d[s.fX.MENTION_SPAM], d[s.fX.ML_SPAM], d[s.fX.DEFAULT_KEYWORD_LIST], d[s.fX.KEYWORD]]
    },
    T = (t, e) => d[t].flags.has(e);
function f(t) {
    return Array.from(d[t].availableActionTypes);
}
function N(t, e) {
    let { id: n, eventType: r, triggerType: i, actions: l } = t,
        u = d[i];
    if (e.filter((t) => n !== t.id && t.triggerType === i).length > u.perGuildMaxCount) throw Error('You have exceeded the maximum number of rules of type '.concat(i));
    if (l.some((t) => !u.availableActionTypes.has(t.type))) throw Error('You have provided an action that is not available for this trigger type');
    if (r !== u.eventType) throw Error('You have provided an event type that is not available for this trigger type');
}
function _(t) {
    let e = (0, E.oA)(t);
    return a.useMemo(
        () =>
            Object.keys(S).reduce(
                (t, n) => {
                    let r = S[n].filter((t) => t.type !== s.fX.SERVER_POLICY && (t.type !== s.fX.USER_PROFILE || !!e) && t.perGuildMaxCount > 0).map((t) => t.type);
                    return (t[n] = r), t;
                },
                {
                    members: [],
                    content: []
                }
            ),
        [e]
    );
}
function I(t, e) {
    let n = (0, o.H)(e);
    switch (t) {
        case s.fX.DEFAULT_KEYWORD_LIST:
            return {
                allowList: [],
                presets: []
            };
        case s.fX.USER_PROFILE:
        case s.fX.KEYWORD:
            return {
                keywordFilter: [],
                regexPatterns: [],
                allowList: []
            };
        case s.fX.MENTION_SPAM:
            return {
                mentionTotalLimit: s.Ic,
                mentionRaidProtectionEnabled: n
            };
        case s.fX.ML_SPAM:
        case s.fX.SERVER_POLICY:
        default:
            return;
    }
}
