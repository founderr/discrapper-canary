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
    p = n(768119),
    h = n(944486),
    m = n(914010),
    g = n(246946),
    E = n(594174),
    v = n(483360),
    I = n(226951),
    T = n(51144),
    b = n(981631),
    S = n(388032);
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
        [S.intl.string(S.t.HYiVER)]: () => R('day'),
        [S.intl.string(S.t.cu86KC)]: () => R('day', -1),
        [S.intl.string(S.t['FvBj//'])]: () => R('week'),
        [S.intl.string(S.t['20uWCw'])]: () => R('month'),
        [S.intl.string(S.t['dXC/ho'])]: () => R('year')
    };
}
let L = RegExp('(?:\\s*('.concat('([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})', '|').concat('([0-9]{4})-([0-9]{1,2})', '|').concat('\\d{4}', '|').concat('([^\\d\\s]+)', '))'), 'i'),
    x = RegExp('\\s*(true|false)', 'i');
function w(e) {
    return ''.concat(e, ':');
}
function P(e) {
    return RegExp(w(e), 'i');
}
function M(e) {
    let t;
    let n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = b.Xyh.test(n) ? n : n === b.ME ? r(E.default.getCurrentUser()) : null != e.getMatch(4) ? r(E.default.findByTag(e.getMatch(4))) : r(E.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function k(e, t) {
    let n, r;
    let i = e.getFullMatch().trim().toLowerCase(),
        a = D()[i];
    return null != a ? ([n, r] = a()) : y().has(i) ? ([n, r] = O(i, 'MMMM', 'month')) : A().has(i) ? ([n, r] = O(i, 'dddd', 'day')) : N().has(i) ? ([n, r] = O(i, 'YYYY', 'year')) : ([n, r] = O(i, b.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
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
function B(e) {
    let t = {
        [S.intl.string(S.t.ZNR2fn)]: 'link',
        [S.intl.string(S.t['20uQR0'])]: 'embed',
        [S.intl.string(S.t.L4lxyM)]: 'poll',
        [S.intl.string(S.t.nrpA5O)]: 'snapshot',
        [S.intl.string(S.t['AV/v6u'])]: 'file',
        [S.intl.string(S.t.XM9XGB)]: 'video',
        [S.intl.string(S.t.TNLcp6)]: 'image',
        [S.intl.string(S.t.F8Wf0d)]: 'sound',
        [S.intl.string(S.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function G() {
    return [...Array.from(y()), ...Array.from(A()), ...Array.from(N()), ...Object.keys(D())];
}
function Z() {
    return l().sample(G());
}
function F(e, t, n) {
    return V(e, t, G()).map((e) => ({
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
function j(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = p.Z.getSearchType(t),
        s = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (a) {
        case b.aib.GUILD:
            n = v.ZP.queryGuildUsers({
                ...s,
                guildId: t
            });
            break;
        case b.aib.CHANNEL:
            n = v.ZP.queryChannelUsers({
                ...s,
                channelId: t
            });
            break;
        case b.aib.DMS:
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
                text: T.ZP.getUserTag(t),
                user: t
            };
        });
}
function H() {
    return p.Z.getSearchType() === b.aib.GUILD;
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
                t = e ? [S.intl.string(S.t.nrpA5O)] : [],
                n = [S.intl.string(S.t.ZNR2fn), S.intl.string(S.t['20uQR0']), S.intl.string(S.t.L4lxyM), S.intl.string(S.t['AV/v6u']), S.intl.string(S.t.XM9XGB), S.intl.string(S.t.TNLcp6), S.intl.string(S.t.F8Wf0d), S.intl.string(S.t.PJgX2t), ...t];
            return {
                [b.dCx.FILTER_FROM]: {
                    regex: P(S.intl.string(S.t['1TUdFh'])),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t['1TUdFh'])),
                    plainText: S.intl.string(S.t['1TUdFh']),
                    validator: Y,
                    getAutocompletions: j
                },
                [b.dCx.ANSWER_USERNAME_FROM]: {
                    follows: [b.dCx.FILTER_FROM],
                    regex: W,
                    validator: M,
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'author_id'
                },
                [b.dCx.FILTER_MENTIONS]: {
                    regex: P(S.intl.string(S.t.i96lOz)),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t.i96lOz)),
                    plainText: S.intl.string(S.t.i96lOz),
                    validator: Y,
                    getAutocompletions: j
                },
                [b.dCx.ANSWER_USERNAME_MENTIONS]: {
                    follows: [b.dCx.FILTER_MENTIONS],
                    regex: W,
                    validator: M,
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'mentions'
                },
                [b.dCx.FILTER_HAS]: {
                    regex: P(S.intl.string(S.t.CqCvio)),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t.CqCvio)),
                    plainText: S.intl.string(S.t.CqCvio),
                    getAutocompletions: (e, t, r) => V(e, r, n)
                },
                [b.dCx.ANSWER_HAS]: {
                    regex: RegExp('(?:\\s*-?('.concat(n.map((e) => I.Z.escape(e)).join('|'), '))'), 'i'),
                    follows: [b.dCx.FILTER_HAS],
                    validator: B,
                    componentType: 'ANSWER',
                    queryKey: 'has'
                },
                [b.dCx.FILTER_FILE_TYPE]: {
                    regex: P(S.intl.string(S.t.TMNjFh)),
                    key: w(S.intl.string(S.t.TMNjFh)),
                    plainText: S.intl.string(S.t.TMNjFh),
                    componentType: 'FILTER'
                },
                [b.dCx.ANSWER_FILE_TYPE]: {
                    regex: /(?:\s*([^\s]+))/,
                    follows: [b.dCx.FILTER_FILE_TYPE],
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'attachment_extensions'
                },
                [b.dCx.FILTER_FILE_NAME]: {
                    regex: P(S.intl.string(S.t['5xtLRE'])),
                    key: w(S.intl.string(S.t['5xtLRE'])),
                    plainText: S.intl.string(S.t['5xtLRE']),
                    componentType: 'FILTER'
                },
                [b.dCx.ANSWER_FILE_NAME]: {
                    regex: /(?:\s*([^\s]+)(?=\s))/,
                    follows: [b.dCx.FILTER_FILE_NAME],
                    mutable: !0,
                    componentType: 'ANSWER',
                    queryKey: 'attachment_filename'
                },
                [b.dCx.FILTER_BEFORE]: {
                    regex: P(S.intl.string(S.t['qZ+7BA'])),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t['qZ+7BA'])),
                    plainText: S.intl.string(S.t['qZ+7BA']),
                    getAutocompletions: (e, t, n) => F(e, n, b.dCx.FILTER_BEFORE)
                },
                [b.dCx.FILTER_ON]: {
                    regex: P('('.concat(S.intl.string(S.t.tIxkOj), '|').concat(S.intl.string(S.t.h2NzSU), ')')),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t.h2NzSU)),
                    plainText: S.intl.string(S.t.h2NzSU),
                    getAutocompletions: (e, t, n) => F(e, n, b.dCx.FILTER_ON)
                },
                [b.dCx.FILTER_AFTER]: {
                    regex: P(S.intl.string(S.t.KSDx7O)),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t.KSDx7O)),
                    plainText: S.intl.string(S.t.KSDx7O),
                    getAutocompletions: (e, t, n) => F(e, n, b.dCx.FILTER_AFTER)
                },
                [b.dCx.ANSWER_BEFORE]: {
                    regex: L,
                    follows: [b.dCx.FILTER_BEFORE],
                    componentType: 'ANSWER',
                    mutable: !0,
                    validator: (e) => k(e, 'before')
                },
                [b.dCx.ANSWER_ON]: {
                    regex: L,
                    follows: [b.dCx.FILTER_ON],
                    componentType: 'ANSWER',
                    mutable: !0,
                    validator: (e) => k(e, 'on')
                },
                [b.dCx.ANSWER_AFTER]: {
                    regex: L,
                    follows: [b.dCx.FILTER_AFTER],
                    componentType: 'ANSWER',
                    mutable: !0,
                    validator: (e) => k(e, 'after')
                },
                [b.dCx.FILTER_IN]: {
                    regex: P(S.intl.string(S.t.WNpFHR)),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t.WNpFHR)),
                    plainText: S.intl.string(S.t.WNpFHR),
                    validator: H,
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
                            let e = h.Z.getChannelId(t),
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
                [b.dCx.ANSWER_IN]: {
                    regex: /(?:\s*#?([^ ]+))/i,
                    mutable: !0,
                    follows: [b.dCx.FILTER_IN],
                    componentType: 'ANSWER',
                    validator: U,
                    queryKey: 'channel_id'
                },
                [b.dCx.FILTER_PINNED]: {
                    regex: P(S.intl.string(S.t['0B74eX'])),
                    componentType: 'FILTER',
                    key: w(S.intl.string(S.t['0B74eX'])),
                    plainText: S.intl.string(S.t['0B74eX']),
                    getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
                },
                [b.dCx.ANSWER_PINNED]: {
                    regex: x,
                    componentType: 'ANSWER',
                    follows: [b.dCx.FILTER_PINNED],
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
        .filter((e) => b.TNx.test(e))
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
