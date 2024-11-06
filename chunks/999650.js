n.d(t, {
    Pe: function () {
        return z;
    },
    Pr: function () {
        return Z;
    },
    Qe: function () {
        return r;
    },
    nB: function () {
        return q;
    }
}),
    n(47120),
    n(733860);
var r,
    i,
    a = n(658722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(346610),
    f = n(984933),
    _ = n(699516),
    h = n(768119),
    p = n(944486),
    m = n(914010),
    g = n(246946),
    E = n(594174),
    v = n(483360),
    I = n(226951),
    S = n(51144),
    T = n(981631),
    b = n(388032);
function y() {
    return new Set(
        c()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function A() {
    return new Set(
        c()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function N() {
    let e = new Date().getFullYear();
    return new Set(
        l()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function C(e, t) {
    return [e, e.clone().add(1, t)];
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return C(c()().startOf(e).add(t, e), e);
}
function O(e, t, n) {
    return C(c()(e, t).local(), n);
}
function D() {
    return {
        [b.intl.string(b.t.HYiVER)]: () => R('day'),
        [b.intl.string(b.t.cu86KC)]: () => R('day', -1),
        [b.intl.string(b.t['FvBj//'])]: () => R('week'),
        [b.intl.string(b.t['20uWCw'])]: () => R('month'),
        [b.intl.string(b.t['dXC/ho'])]: () => R('year')
    };
}
let L = RegExp('(?:\\s*('.concat('([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})', '|').concat('([0-9]{4})-([0-9]{1,2})', '|').concat('\\d{4}', '|').concat('([^\\d\\s]+)', '))'), 'i'),
    x = RegExp('\\s*(true|false)', 'i');
function w(e) {
    return ''.concat(e, ':');
}
function M(e) {
    return RegExp(w(e), 'i');
}
function P(e) {
    let t;
    let n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = T.Xyh.test(n) ? n : n === T.ME ? r(E.default.getCurrentUser()) : null != e.getMatch(4) ? r(E.default.findByTag(e.getMatch(4))) : r(E.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function k(e, t) {
    let n, r;
    let i = e.getFullMatch().trim().toLowerCase(),
        a = D()[i];
    return null != a ? ([n, r] = a()) : y().has(i) ? ([n, r] = O(i, 'MMMM', 'month')) : A().has(i) ? ([n, r] = O(i, 'dddd', 'day')) : N().has(i) ? ([n, r] = O(i, 'YYYY', 'year')) : ([n, r] = O(i, T.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function U(e) {
    let t = e.getMatch(1),
        n = m.Z.getGuildId(),
        r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
        i = f.ZP.getTextChannelNameDisambiguations(n),
        a = l()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .find((e) => {
                var n, r;
                return t === (null !== (r = null === (n = i[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : e.name);
            })
            .value();
    return null != a && (e.setData('channel', a), !0);
}
function G(e) {
    let t = {
        [b.intl.string(b.t.ZNR2fn)]: 'link',
        [b.intl.string(b.t['20uQR0'])]: 'embed',
        [b.intl.string(b.t.L4lxyM)]: 'poll',
        [b.intl.string(b.t.nrpA5O)]: 'snapshot',
        [b.intl.string(b.t['AV/v6u'])]: 'file',
        [b.intl.string(b.t.XM9XGB)]: 'video',
        [b.intl.string(b.t.TNLcp6)]: 'image',
        [b.intl.string(b.t.F8Wf0d)]: 'sound',
        [b.intl.string(b.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function B() {
    return [...Array.from(y()), ...Array.from(A()), ...Array.from(N()), ...Object.keys(D())];
}
function Z() {
    return l().sample(B());
}
function F(e, t, n) {
    return V(e, t, B()).map((e) => ({
        ...e,
        group: n,
        key: ''.concat(n, '-').concat(e.text)
    }));
}
function V(e, t, n) {
    let r = e.toLocaleLowerCase();
    return l()(n)
        .filter((e) => s()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function H(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = h.Z.getSearchType(t),
        s = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (a) {
        case T.aib.GUILD:
            n = v.ZP.queryGuildUsers({
                ...s,
                guildId: t
            });
            break;
        case T.aib.CHANNEL:
            n = v.ZP.queryChannelUsers({
                ...s,
                channelId: t
            });
            break;
        case T.aib.DMS:
            n = v.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    return n
        .filter((e) => {
            let { record: t } = e;
            return !_.Z.isBlockedOrIgnored(t.id);
        })
        .map((e) => {
            let { record: t } = e;
            return {
                text: S.ZP.getUserTag(t),
                user: t
            };
        });
}
function j() {
    return h.Z.getSearchType() === T.aib.GUILD;
}
function Y() {
    return !g.Z.hidePersonalInformation;
}
let W = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
((i = r || (r = {})).FILTER = 'FILTER'), (i.ANSWER = 'ANSWER');
let K = {};
function z() {
    Object.assign(
        K,
        (function () {
            let { canForwardMessages: e } = (0, d.WT)({ location: 'SearchTokens' }, { autoTrackExposure: !1 }),
                t = e ? [b.intl.string(b.t.nrpA5O)] : [],
                n = [b.intl.string(b.t.ZNR2fn), b.intl.string(b.t['20uQR0']), b.intl.string(b.t.L4lxyM), b.intl.string(b.t['AV/v6u']), b.intl.string(b.t.XM9XGB), b.intl.string(b.t.TNLcp6), b.intl.string(b.t.F8Wf0d), b.intl.string(b.t.PJgX2t), ...t];
            return {
                [T.dCx.FILTER_FROM]: {
                    regex: M(b.intl.string(b.t['1TUdFh'])),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t['1TUdFh'])),
                    plainText: b.intl.string(b.t['1TUdFh']),
                    validator: Y,
                    getAutocompletions: H
                },
                [T.dCx.ANSWER_USERNAME_FROM]: {
                    follows: [T.dCx.FILTER_FROM],
                    regex: W,
                    validator: P,
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'author_id'
                },
                [T.dCx.FILTER_MENTIONS]: {
                    regex: M(b.intl.string(b.t.i96lOz)),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t.i96lOz)),
                    plainText: b.intl.string(b.t.i96lOz),
                    validator: Y,
                    getAutocompletions: H
                },
                [T.dCx.ANSWER_USERNAME_MENTIONS]: {
                    follows: [T.dCx.FILTER_MENTIONS],
                    regex: W,
                    validator: P,
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'mentions'
                },
                [T.dCx.FILTER_HAS]: {
                    regex: M(b.intl.string(b.t.CqCvio)),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t.CqCvio)),
                    plainText: b.intl.string(b.t.CqCvio),
                    getAutocompletions: (e, t, r) => V(e, r, n)
                },
                [T.dCx.ANSWER_HAS]: {
                    regex: RegExp('(?:\\s*-?('.concat(n.map((e) => I.Z.escape(e)).join('|'), '))'), 'i'),
                    follows: [T.dCx.FILTER_HAS],
                    validator: G,
                    componentType: 'ANSWER',
                    queryKey: 'has'
                },
                [T.dCx.FILTER_FILE_TYPE]: {
                    regex: M(b.intl.string(b.t.TMNjFh)),
                    key: w(b.intl.string(b.t.TMNjFh)),
                    plainText: b.intl.string(b.t.TMNjFh),
                    componentType: 'FILTER'
                },
                [T.dCx.ANSWER_FILE_TYPE]: {
                    regex: /(?:\s*([^\s]+))/,
                    follows: [T.dCx.FILTER_FILE_TYPE],
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'attachment_extensions'
                },
                [T.dCx.FILTER_FILE_NAME]: {
                    regex: M(b.intl.string(b.t['5xtLRE'])),
                    key: w(b.intl.string(b.t['5xtLRE'])),
                    plainText: b.intl.string(b.t['5xtLRE']),
                    componentType: 'FILTER'
                },
                [T.dCx.ANSWER_FILE_NAME]: {
                    regex: /(?:\s*([^\s]+)(?=\s))/,
                    follows: [T.dCx.FILTER_FILE_NAME],
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'attachment_filename'
                },
                [T.dCx.FILTER_BEFORE]: {
                    regex: M(b.intl.string(b.t['qZ+7BA'])),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t['qZ+7BA'])),
                    plainText: b.intl.string(b.t['qZ+7BA']),
                    getAutocompletions: (e, t, n) => F(e, n, T.dCx.FILTER_BEFORE)
                },
                [T.dCx.FILTER_ON]: {
                    regex: M('('.concat(b.intl.string(b.t.tIxkOj), '|').concat(b.intl.string(b.t.h2NzSU), ')')),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t.h2NzSU)),
                    plainText: b.intl.string(b.t.h2NzSU),
                    getAutocompletions: (e, t, n) => F(e, n, T.dCx.FILTER_ON)
                },
                [T.dCx.FILTER_AFTER]: {
                    regex: M(b.intl.string(b.t.KSDx7O)),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t.KSDx7O)),
                    plainText: b.intl.string(b.t.KSDx7O),
                    getAutocompletions: (e, t, n) => F(e, n, T.dCx.FILTER_AFTER)
                },
                [T.dCx.ANSWER_BEFORE]: {
                    regex: L,
                    follows: [T.dCx.FILTER_BEFORE],
                    componentType: 'ANSWER',
                    mutable: !0,
                    validator: (e) => k(e, 'before')
                },
                [T.dCx.ANSWER_ON]: {
                    regex: L,
                    follows: [T.dCx.FILTER_ON],
                    componentType: 'ANSWER',
                    mutable: !0,
                    validator: (e) => k(e, 'on')
                },
                [T.dCx.ANSWER_AFTER]: {
                    regex: L,
                    follows: [T.dCx.FILTER_AFTER],
                    componentType: 'ANSWER',
                    mutable: !0,
                    validator: (e) => k(e, 'after')
                },
                [T.dCx.FILTER_IN]: {
                    regex: M(b.intl.string(b.t.WNpFHR)),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t.WNpFHR)),
                    plainText: b.intl.string(b.t.WNpFHR),
                    validator: j,
                    getAutocompletions(e, t, n) {
                        '#' === e[0] && (e = e.substring(1));
                        let r = v.ZP.queryChannels({
                            query: e,
                            type: f.sH,
                            guildId: t,
                            limit: 1 / 0
                        })
                            .concat(
                                v.ZP.queryChannels({
                                    query: e,
                                    type: f.Zb,
                                    guildId: t,
                                    limit: 1 / 0
                                })
                            )
                            .map((e) => {
                                let { record: t } = e;
                                return t;
                            })
                            .filter((e) => !e.isThread());
                        if ('' === e.trim()) {
                            let e = p.Z.getChannelId(t),
                                n = r.find((t) => t.id === e);
                            null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
                        }
                        let i = f.ZP.getTextChannelNameDisambiguations(t);
                        return l()(r)
                            .take(n)
                            .map((e) => {
                                var t, n;
                                return {
                                    text: ''.concat(null !== (n = null === (t = i[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                    channel: e
                                };
                            })
                            .value();
                    }
                },
                [T.dCx.ANSWER_IN]: {
                    regex: /(?:\s*#?([^ ]+))/i,
                    mutable: !0,
                    follows: [T.dCx.FILTER_IN],
                    componentType: 'ANSWER',
                    validator: U,
                    queryKey: 'channel_id'
                },
                [T.dCx.FILTER_PINNED]: {
                    regex: M(b.intl.string(b.t['0B74eX'])),
                    componentType: 'FILTER',
                    key: w(b.intl.string(b.t['0B74eX'])),
                    plainText: b.intl.string(b.t['0B74eX']),
                    getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
                },
                [T.dCx.ANSWER_PINNED]: {
                    regex: x,
                    componentType: 'ANSWER',
                    follows: [T.dCx.FILTER_PINNED],
                    queryKey: 'pinned',
                    validator: (e) => {
                        let t = e.getMatch(1);
                        return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
                    }
                }
            };
        })()
    );
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
    return l()(K)
        .keys()
        .filter((e) => T.TNx.test(e))
        .filter((e) => null != K[e].key)
        .map((e) => ({
            token: e,
            text: K[e].key
        }))
        .filter((t) => {
            let { text: n } = t;
            return s()(e.toLowerCase(), n);
        })
        .take(t)
        .value();
}
t.ZP = K;
