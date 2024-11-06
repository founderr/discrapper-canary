n.d(t, {
    I6: function () {
        return E;
    },
    V9: function () {
        return S;
    },
    Z6: function () {
        return _;
    },
    jp: function () {
        return R;
    },
    r5: function () {
        return g;
    },
    vT: function () {
        return r;
    },
    vh: function () {
        return i;
    },
    yU: function () {
        return A;
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
    c = n(676317),
    s = n(273504),
    f = n(388032);
((l = r || (r = {})).NEW = 'new'), (l.RECOMMENDED = 'recommended'), (l.BETA = 'beta'), (l.ALPHA = 'alpha');
let E = {
    [s.fX.SPAM_LINK]: {
        getDefaultRuleName: () => f.intl.string(f.t.ffR2cH),
        type: s.fX.SPAM_LINK,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set()
    },
    [s.fX.KEYWORD]: {
        getDefaultRuleName: () => f.intl.string(f.t.ffR2cH),
        type: s.fX.KEYWORD,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL, s.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.ML_SPAM]: {
        getDefaultRuleName: () => f.intl.string(f.t['puF/Oj']),
        type: s.fX.ML_SPAM,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => f.intl.string(f.t.LnGhZm),
        type: s.fX.DEFAULT_KEYWORD_LIST,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.MENTION_SPAM]: {
        getDefaultRuleName: () => f.intl.string(f.t.pX7i6u),
        type: s.fX.MENTION_SPAM,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.BLOCK_MESSAGE, s.jj.FLAG_TO_CHANNEL, s.jj.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
    },
    [s.fX.USER_PROFILE]: {
        getDefaultRuleName: () => f.intl.string(f.t.q1L2v7),
        type: s.fX.USER_PROFILE,
        eventType: s.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.QUARANTINE_USER, s.jj.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.jj.QUARANTINE_USER])
    },
    [s.fX.SERVER_POLICY]: {
        getDefaultRuleName: () => f.intl.string(f.t.ZQr92N),
        type: s.fX.SERVER_POLICY,
        eventType: s.q4.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.jj.FLAG_TO_CHANNEL]),
        flags: new Set(['alpha']),
        defaultActionTypes: new Set()
    }
};
((u = i || (i = {})).MEMBERS = 'members'), (u.CONTENT = 'content');
let d = {
        members: [E[s.fX.USER_PROFILE]],
        content: [E[s.fX.SERVER_POLICY], E[s.fX.MENTION_SPAM], E[s.fX.ML_SPAM], E[s.fX.DEFAULT_KEYWORD_LIST], E[s.fX.KEYWORD]]
    },
    g = (e, t) => E[e].flags.has(t);
function S(e) {
    return Array.from(E[e].availableActionTypes);
}
function A(e, t) {
    let { id: n, eventType: r, triggerType: i, actions: l } = e,
        u = E[i];
    if (t.filter((e) => n !== e.id && e.triggerType === i).length > u.perGuildMaxCount) throw Error('You have exceeded the maximum number of rules of type '.concat(i));
    if (l.some((e) => !u.availableActionTypes.has(e.type))) throw Error('You have provided an action that is not available for this trigger type');
    if (r !== u.eventType) throw Error('You have provided an event type that is not available for this trigger type');
}
function _(e) {
    let t = (0, c.oA)(e);
    return a.useMemo(
        () =>
            Object.keys(d).reduce(
                (e, n) => {
                    let r = d[n].filter((e) => e.type !== s.fX.SERVER_POLICY && (e.type !== s.fX.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map((e) => e.type);
                    return (e[n] = r), e;
                },
                {
                    members: [],
                    content: []
                }
            ),
        [t]
    );
}
function R(e, t) {
    let n = (0, o.H)(t);
    switch (e) {
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
