n.d(t, {
    Ar: function () {
        return v;
    },
    DO: function () {
        return E;
    },
    Fn: function () {
        return g;
    },
    Jq: function () {
        return A;
    },
    QO: function () {
        return j;
    },
    Vb: function () {
        return N;
    },
    YN: function () {
        return L;
    },
    ZF: function () {
        return M;
    },
    ep: function () {
        return _;
    },
    km: function () {
        return R;
    },
    nC: function () {
        return S;
    },
    vo: function () {
        return d;
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
    c = n(273504),
    s = n(388032);
let f = (e, t) => ''.concat(e, '-').concat(t, '-new-rule'),
    E = (e) => (null == e ? void 0 : e.triggerType) === c.fX.KEYWORD,
    d = (e) => (null == e ? void 0 : e.triggerType) === c.fX.ML_SPAM,
    g = (e) => (null == e ? void 0 : e.triggerType) === c.fX.DEFAULT_KEYWORD_LIST,
    S = (e) => (null == e ? void 0 : e.triggerType) === c.fX.MENTION_SPAM,
    A = (e) => (null == e ? void 0 : e.triggerType) === c.fX.USER_PROFILE;
function _(e, t) {
    let n = o.I6[t],
        r = (0, o.jp)(t, e),
        u = {
            id: f(e, t),
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: i.default.getId(),
            actions: (0, l.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set()
        };
    if (N(u)) throw Error(s.intl.string(s.t['A/nX8P']));
    let c = (0, a.mY)(e, t);
    return c > 0 && (u.name += ' '.concat(c + 1)), u;
}
function R(e, t) {
    if (e.length > t) throw Error(s.intl.formatToPlainString(s.t.mee4qa, { limit: t }));
    e.forEach((e) => {
        if (e.length > c.hu || e.length < c.Vk)
            throw new u.V6(
                s.intl.formatToPlainString(s.t.rbRvGR, {
                    keyword: e,
                    max: c.hu,
                    min: c.Vk
                })
            );
    });
}
function j(e) {
    if (E(e)) {
        var t, n;
        let r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
            i = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
        if (0 === r.length && 0 === i.length) throw Error(s.intl.string(s.t.kz2Av7));
        R(r, c.RH),
            !(function (e) {
                if (e.length > c.VW) throw Error(s.intl.formatToPlainString(s.t.tDjhFx, { limit: c.VW }));
                e.forEach((e) => {
                    if (e.length > c.aj || e.length < c.uE)
                        throw new u.uS(
                            s.intl.formatToPlainString(s.t['WR0m9/'], {
                                regex: e,
                                max: c.aj,
                                min: c.uE
                            })
                        );
                });
            })(i);
    }
    if (0 === e.actions.length) throw Error(s.intl.string(s.t['t+gj5e']));
}
function N(e) {
    var t;
    return (0, r.BH)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : 'INVALID_SNOWFLAKE');
}
function L(e) {
    switch (e) {
        case c.q4.MESSAGE_SEND:
            return s.intl.string(s.t.NlQW4O);
        case c.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return s.intl.string(s.t['Q+68IS']);
        default:
            return s.intl.string(s.t.SP9BBw);
    }
}
function M(e) {
    switch (e) {
        case c.jj.BLOCK_MESSAGE:
            return s.intl.string(s.t.d1ab8v);
        case c.jj.FLAG_TO_CHANNEL:
            return s.intl.string(s.t['Y+Vmvb']);
        case c.jj.USER_COMMUNICATION_DISABLED:
            return s.intl.string(s.t['6WPxY2']);
        case c.jj.QUARANTINE_USER:
            return s.intl.string(s.t.NPO8eX);
        default:
            return s.intl.string(s.t.SP9BBw);
    }
}
function v(e) {
    switch (e) {
        case c.fX.KEYWORD:
            return s.intl.string(s.t.ffR2cH);
        case c.fX.ML_SPAM:
            return s.intl.string(s.t['puF/Oj']);
        case c.fX.DEFAULT_KEYWORD_LIST:
            return s.intl.string(s.t.LnGhZm);
        case c.fX.MENTION_SPAM:
            return s.intl.string(s.t.pX7i6u);
        case c.fX.USER_PROFILE:
            return s.intl.string(s.t.q1L2v7);
        default:
            return s.intl.string(s.t.SP9BBw);
    }
}
