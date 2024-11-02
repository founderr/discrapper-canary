n.d(e, {
    Ar: function () {
        return R;
    },
    DO: function () {
        return d;
    },
    Fn: function () {
        return T;
    },
    Jq: function () {
        return N;
    },
    QO: function () {
        return A;
    },
    Vb: function () {
        return g;
    },
    YN: function () {
        return p;
    },
    ZF: function () {
        return O;
    },
    ep: function () {
        return _;
    },
    km: function () {
        return I;
    },
    nC: function () {
        return f;
    },
    vo: function () {
        return S;
    }
}),
    n(47120),
    n(411104);
var r = n(581364),
    i = n(314897),
    l = n(866830),
    u = n(539573),
    a = n(727072),
    o = n(85960),
    E = n(273504),
    s = n(388032);
let c = (t, e) => ''.concat(t, '-').concat(e, '-new-rule'),
    d = (t) => (null == t ? void 0 : t.triggerType) === E.fX.KEYWORD,
    S = (t) => (null == t ? void 0 : t.triggerType) === E.fX.ML_SPAM,
    T = (t) => (null == t ? void 0 : t.triggerType) === E.fX.DEFAULT_KEYWORD_LIST,
    f = (t) => (null == t ? void 0 : t.triggerType) === E.fX.MENTION_SPAM,
    N = (t) => (null == t ? void 0 : t.triggerType) === E.fX.USER_PROFILE;
function _(t, e) {
    let n = o.I6[e],
        r = (0, o.jp)(e, t),
        u = {
            id: c(t, e),
            name: n.getDefaultRuleName(),
            guildId: t,
            eventType: n.eventType,
            triggerType: e,
            triggerMetadata: r,
            enabled: !0,
            creatorId: i.default.getId(),
            actions: (0, l.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set()
        };
    if (g(u)) throw Error(s.intl.string(s.t['A/nX8P']));
    let E = (0, a.mY)(t, e);
    return E > 0 && (u.name += ' '.concat(E + 1)), u;
}
function I(t, e) {
    if (t.length > e) throw Error(s.intl.formatToPlainString(s.t.mee4qa, { limit: e }));
    t.forEach((t) => {
        if (t.length > E.hu || t.length < E.Vk)
            throw new u.V6(
                s.intl.formatToPlainString(s.t.rbRvGR, {
                    keyword: t,
                    max: E.hu,
                    min: E.Vk
                })
            );
    });
}
function A(t) {
    if (d(t)) {
        var e, n;
        let r = null !== (e = t.triggerMetadata.keywordFilter) && void 0 !== e ? e : [],
            i = null !== (n = t.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
        if (0 === r.length && 0 === i.length) throw Error(s.intl.string(s.t.kz2Av7));
        I(r, E.RH),
            !(function (t) {
                if (t.length > E.VW) throw Error(s.intl.formatToPlainString(s.t.tDjhFx, { limit: E.VW }));
                t.forEach((t) => {
                    if (t.length > E.aj || t.length < E.uE)
                        throw new u.uS(
                            s.intl.formatToPlainString(s.t['WR0m9/'], {
                                regex: t,
                                max: E.aj,
                                min: E.uE
                            })
                        );
                });
            })(i);
    }
    if (0 === t.actions.length) throw Error(s.intl.string(s.t['t+gj5e']));
}
function g(t) {
    var e;
    return (0, r.BH)(null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : 'INVALID_SNOWFLAKE');
}
function p(t) {
    switch (t) {
        case E.q4.MESSAGE_SEND:
            return s.intl.string(s.t.NlQW4O);
        case E.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return s.intl.string(s.t['Q+68IS']);
        default:
            return s.intl.string(s.t.SP9BBw);
    }
}
function O(t) {
    switch (t) {
        case E.jj.BLOCK_MESSAGE:
            return s.intl.string(s.t.d1ab8v);
        case E.jj.FLAG_TO_CHANNEL:
            return s.intl.string(s.t['Y+Vmvb']);
        case E.jj.USER_COMMUNICATION_DISABLED:
            return s.intl.string(s.t['6WPxY2']);
        case E.jj.QUARANTINE_USER:
            return s.intl.string(s.t.NPO8eX);
        default:
            return s.intl.string(s.t.SP9BBw);
    }
}
function R(t) {
    switch (t) {
        case E.fX.KEYWORD:
            return s.intl.string(s.t.ffR2cH);
        case E.fX.ML_SPAM:
            return s.intl.string(s.t['puF/Oj']);
        case E.fX.DEFAULT_KEYWORD_LIST:
            return s.intl.string(s.t.LnGhZm);
        case E.fX.MENTION_SPAM:
            return s.intl.string(s.t.pX7i6u);
        case E.fX.USER_PROFILE:
            return s.intl.string(s.t.q1L2v7);
        default:
            return s.intl.string(s.t.SP9BBw);
    }
}
