n.d(t, {
    Pe: function () {
        return ee;
    },
    Pr: function () {
        return j;
    },
    Qe: function () {
        return r;
    },
    nB: function () {
        return et;
    }
});
var r,
    i = n(47120);
var a = n(733860);
var o = n(658722),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    _ = n(346610),
    E = n(984933),
    f = n(699516),
    h = n(768119),
    p = n(944486),
    m = n(914010),
    I = n(246946),
    T = n(594174),
    g = n(483360),
    S = n(226951),
    A = n(51144),
    v = n(981631),
    N = n(689938);
function O() {
    return new Set(
        d()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function R() {
    return new Set(
        d()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function C() {
    let e = new Date().getFullYear();
    return new Set(
        u()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function y(e, t) {
    return [e, e.clone().add(1, t)];
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return y(d()().startOf(e).add(t, e), e);
}
function L(e, t, n) {
    return y(d()(e, t).local(), n);
}
function D() {
    return {
        [N.Z.Messages.SEARCH_SHORTCUT_TODAY]: () => b('day'),
        [N.Z.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => b('day', -1),
        [N.Z.Messages.SEARCH_SHORTCUT_WEEK]: () => b('week'),
        [N.Z.Messages.SEARCH_SHORTCUT_MONTH]: () => b('month'),
        [N.Z.Messages.SEARCH_SHORTCUT_YEAR]: () => b('year')
    };
}
let M = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    P = '\\d{4}',
    U = '([0-9]{4})-([0-9]{1,2})',
    w = '([^\\d\\s]+)',
    x = RegExp('(?:\\s*('.concat(M, '|').concat(U, '|').concat(P, '|').concat(w, '))'), 'i'),
    G = RegExp('\\s*(true|false)', 'i');
function k(e) {
    return ''.concat(e, ':');
}
function B(e) {
    return RegExp(k(e), 'i');
}
function F(e) {
    let t;
    let n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = v.Xyh.test(n) ? n : n === v.ME ? r(T.default.getCurrentUser()) : null != e.getMatch(4) ? r(T.default.findByTag(e.getMatch(4))) : r(T.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function Z(e, t) {
    let n, r;
    let i = e.getFullMatch().trim().toLowerCase(),
        a = D()[i];
    return null != a ? ([n, r] = a()) : O().has(i) ? ([n, r] = L(i, 'MMMM', 'month')) : R().has(i) ? ([n, r] = L(i, 'dddd', 'day')) : C().has(i) ? ([n, r] = L(i, 'YYYY', 'year')) : ([n, r] = L(i, v.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function V(e) {
    let t = e.getMatch(1),
        n = m.Z.getGuildId(),
        r = E.ZP.getChannels(n)[E.sH].concat(E.ZP.getChannels(n)[E.Zb]),
        i = E.ZP.getTextChannelNameDisambiguations(n),
        a = u()
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
function H(e) {
    let t = {
        [N.Z.Messages.SEARCH_ANSWER_HAS_LINK]: 'link',
        [N.Z.Messages.SEARCH_ANSWER_HAS_EMBED]: 'embed',
        [N.Z.Messages.SEARCH_ANSWER_HAS_POLL]: 'poll',
        [N.Z.Messages.SEARCH_ANSWER_HAS_SNAPSHOT]: 'snapshot',
        [N.Z.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: 'file',
        [N.Z.Messages.SEARCH_ANSWER_HAS_VIDEO]: 'video',
        [N.Z.Messages.SEARCH_ANSWER_HAS_IMAGE]: 'image',
        [N.Z.Messages.SEARCH_ANSWER_HAS_SOUND]: 'sound',
        [N.Z.Messages.SEARCH_ANSWER_HAS_STICKER]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function Y() {
    return [...Array.from(O()), ...Array.from(R()), ...Array.from(C()), ...Object.keys(D())];
}
function j() {
    return u().sample(Y());
}
function W(e, t, n) {
    return K(e, t, Y()).map((e) => ({
        ...e,
        group: n,
        key: ''.concat(n, '-').concat(e.text)
    }));
}
function K(e, t, n) {
    let r = e.toLocaleLowerCase();
    return u()(n)
        .filter((e) => s()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function z(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = h.Z.getSearchType(t),
        o = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (a) {
        case v.aib.GUILD:
            n = g.ZP.queryGuildUsers({
                ...o,
                guildId: t
            });
            break;
        case v.aib.CHANNEL:
            n = g.ZP.queryChannelUsers({
                ...o,
                channelId: t
            });
            break;
        case v.aib.DMS:
            n = g.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    return n
        .filter((e) => {
            let { record: t } = e;
            return !f.Z.isBlocked(t.id);
        })
        .map((e) => {
            let { record: t } = e;
            return {
                text: A.ZP.getUserTag(t),
                user: t
            };
        });
}
function q() {
    return h.Z.getSearchType() === v.aib.GUILD;
}
function Q() {
    return !I.Z.hidePersonalInformation;
}
let X = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
function $() {
    let { canForwardMessages: e } = (0, _.WT)({ location: 'SearchTokens' }, { autoTrackExposure: !1 }),
        t = e ? [N.Z.Messages.SEARCH_ANSWER_HAS_SNAPSHOT] : [],
        n = [N.Z.Messages.SEARCH_ANSWER_HAS_LINK, N.Z.Messages.SEARCH_ANSWER_HAS_EMBED, N.Z.Messages.SEARCH_ANSWER_HAS_POLL, N.Z.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.Z.Messages.SEARCH_ANSWER_HAS_VIDEO, N.Z.Messages.SEARCH_ANSWER_HAS_IMAGE, N.Z.Messages.SEARCH_ANSWER_HAS_SOUND, N.Z.Messages.SEARCH_ANSWER_HAS_STICKER, ...t];
    return {
        [v.dCx.FILTER_FROM]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_FROM),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_FROM),
            plainText: N.Z.Messages.SEARCH_FILTER_FROM,
            validator: Q,
            getAutocompletions: z
        },
        [v.dCx.ANSWER_USERNAME_FROM]: {
            follows: [v.dCx.FILTER_FROM],
            regex: X,
            validator: F,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [v.dCx.FILTER_MENTIONS]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_MENTIONS),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_MENTIONS),
            plainText: N.Z.Messages.SEARCH_FILTER_MENTIONS,
            validator: Q,
            getAutocompletions: z
        },
        [v.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [v.dCx.FILTER_MENTIONS],
            regex: X,
            validator: F,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [v.dCx.FILTER_HAS]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_HAS),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_HAS),
            plainText: N.Z.Messages.SEARCH_FILTER_HAS,
            getAutocompletions: (e, t, r) => K(e, r, n)
        },
        [v.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(n.map((e) => S.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [v.dCx.FILTER_HAS],
            validator: H,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [v.dCx.FILTER_FILE_TYPE]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_FILE_TYPE),
            key: k(N.Z.Messages.SEARCH_FILTER_FILE_TYPE),
            plainText: N.Z.Messages.SEARCH_FILTER_FILE_TYPE,
            componentType: 'FILTER'
        },
        [v.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [v.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [v.dCx.FILTER_FILE_NAME]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_FILE_NAME),
            key: k(N.Z.Messages.SEARCH_FILTER_FILE_NAME),
            plainText: N.Z.Messages.SEARCH_FILTER_FILE_NAME,
            componentType: 'FILTER'
        },
        [v.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [v.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [v.dCx.FILTER_BEFORE]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_BEFORE),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_BEFORE),
            plainText: N.Z.Messages.SEARCH_FILTER_BEFORE,
            getAutocompletions: (e, t, n) => W(e, n, v.dCx.FILTER_BEFORE)
        },
        [v.dCx.FILTER_ON]: {
            regex: B('('.concat(N.Z.Messages.SEARCH_FILTER_ON, '|').concat(N.Z.Messages.SEARCH_FILTER_DURING, ')')),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_DURING),
            plainText: N.Z.Messages.SEARCH_FILTER_DURING,
            getAutocompletions: (e, t, n) => W(e, n, v.dCx.FILTER_ON)
        },
        [v.dCx.FILTER_AFTER]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_AFTER),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_AFTER),
            plainText: N.Z.Messages.SEARCH_FILTER_AFTER,
            getAutocompletions: (e, t, n) => W(e, n, v.dCx.FILTER_AFTER)
        },
        [v.dCx.ANSWER_BEFORE]: {
            regex: x,
            follows: [v.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => Z(e, 'before')
        },
        [v.dCx.ANSWER_ON]: {
            regex: x,
            follows: [v.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => Z(e, 'on')
        },
        [v.dCx.ANSWER_AFTER]: {
            regex: x,
            follows: [v.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => Z(e, 'after')
        },
        [v.dCx.FILTER_IN]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_IN),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_IN),
            plainText: N.Z.Messages.SEARCH_FILTER_IN,
            validator: q,
            getAutocompletions(e, t, n) {
                '#' === e[0] && (e = e.substring(1));
                let r = g.ZP.queryChannels({
                    query: e,
                    type: E.sH,
                    guildId: t,
                    limit: 1 / 0
                })
                    .concat(
                        g.ZP.queryChannels({
                            query: e,
                            type: E.Zb,
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
                let i = E.ZP.getTextChannelNameDisambiguations(t);
                return u()(r)
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
        [v.dCx.ANSWER_IN]: {
            regex: /(?:\s*#?([^ ]+))/i,
            mutable: !0,
            follows: [v.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: V,
            queryKey: 'channel_id'
        },
        [v.dCx.FILTER_PINNED]: {
            regex: B(N.Z.Messages.SEARCH_FILTER_PINNED),
            componentType: 'FILTER',
            key: k(N.Z.Messages.SEARCH_FILTER_PINNED),
            plainText: N.Z.Messages.SEARCH_FILTER_PINNED,
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [v.dCx.ANSWER_PINNED]: {
            regex: G,
            componentType: 'ANSWER',
            follows: [v.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let t = e.getMatch(1);
                return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
            }
        }
    };
}
!(function (e) {
    (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER');
})(r || (r = {}));
let J = {};
function ee() {
    Object.assign(J, $());
}
function et(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(J).length;
    return u()(J)
        .keys()
        .filter((e) => v.TNx.test(e))
        .filter((e) => null != J[e].key)
        .map((e) => ({
            token: e,
            text: J[e].key
        }))
        .filter((t) => {
            let { text: n } = t;
            return s()(e.toLowerCase(), n);
        })
        .take(t)
        .value();
}
t.ZP = J;
