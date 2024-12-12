r.d(n, {
    Pe: function () {
        return et;
    },
    Pr: function () {
        return W;
    },
    Qe: function () {
        return i;
    },
    nB: function () {
        return en;
    }
});
var i,
    a = r(47120);
var s = r(733860);
var o = r(658722),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(913527),
    f = r.n(d),
    _ = r(346610),
    h = r(984933),
    p = r(699516),
    m = r(768119),
    g = r(944486),
    E = r(914010),
    v = r(246946),
    I = r(594174),
    T = r(483360),
    b = r(226951),
    y = r(51144),
    S = r(981631),
    A = r(388032);
function N() {
    return new Set(
        f()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function C() {
    return new Set(
        f()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function R() {
    let e = new Date().getFullYear();
    return new Set(
        c()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function O(e, n) {
    return [e, e.clone().add(1, n)];
}
function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return O(f()().startOf(e).add(n, e), e);
}
function L(e, n, r) {
    return O(f()(e, n).local(), r);
}
function x() {
    return {
        [A.intl.string(A.t.HYiVER)]: () => D('day'),
        [A.intl.string(A.t.cu86KC)]: () => D('day', -1),
        [A.intl.string(A.t['FvBj//'])]: () => D('week'),
        [A.intl.string(A.t['20uWCw'])]: () => D('month'),
        [A.intl.string(A.t['dXC/ho'])]: () => D('year')
    };
}
let w = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    P = '\\d{4}',
    M = '([0-9]{4})-([0-9]{1,2})',
    k = '([^\\d\\s]+)',
    U = RegExp('(?:\\s*('.concat(w, '|').concat(M, '|').concat(P, '|').concat(k, '))'), 'i'),
    B = RegExp('\\s*(true|false)', 'i');
function G(e) {
    return ''.concat(e, ':');
}
function Z(e) {
    return RegExp(G(e), 'i');
}
function F(e) {
    let n;
    let r = e.getMatch(1),
        i = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (n = S.Xyh.test(r) ? r : r === S.ME ? i(I.default.getCurrentUser()) : null != e.getMatch(4) ? i(I.default.findByTag(e.getMatch(4))) : i(I.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', n), !0);
}
function V(e, n) {
    let r, i;
    let a = e.getFullMatch().trim().toLowerCase(),
        s = x()[a];
    return null != s ? ([r, i] = s()) : N().has(a) ? ([r, i] = L(a, 'MMMM', 'month')) : C().has(a) ? ([r, i] = L(a, 'dddd', 'day')) : R().has(a) ? ([r, i] = L(a, 'YYYY', 'year')) : ([r, i] = L(a, S.b2L, 'day')), !!(r.isValid() && i.isValid()) && ('before' === n ? ((i = r), (r = null)) : 'after' === n && ((r = i), (i = null)), e.setData('start', r), e.setData('end', i), !0);
}
function j(e) {
    let n = e.getMatch(1),
        r = E.Z.getGuildId(),
        i = h.ZP.getChannels(r)[h.sH].concat(h.ZP.getChannels(r)[h.Zb]),
        a = h.ZP.getTextChannelNameDisambiguations(r),
        s = c()
            .chain(i)
            .map((e) => {
                let { channel: n } = e;
                return n;
            })
            .find((e) => {
                var r, i;
                return n === (null !== (i = null === (r = a[e.id]) || void 0 === r ? void 0 : r.name) && void 0 !== i ? i : e.name);
            })
            .value();
    return null != s && (e.setData('channel', s), !0);
}
function H(e) {
    let n = {
        [A.intl.string(A.t.ZNR2fn)]: 'link',
        [A.intl.string(A.t['20uQR0'])]: 'embed',
        [A.intl.string(A.t.L4lxyM)]: 'poll',
        [A.intl.string(A.t.nrpA5O)]: 'snapshot',
        [A.intl.string(A.t['AV/v6u'])]: 'file',
        [A.intl.string(A.t.XM9XGB)]: 'video',
        [A.intl.string(A.t.TNLcp6)]: 'image',
        [A.intl.string(A.t.F8Wf0d)]: 'sound',
        [A.intl.string(A.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != n && '' !== n && (e.setData('has', n), !0);
}
function Y() {
    return [...Array.from(N()), ...Array.from(C()), ...Array.from(R()), ...Object.keys(x())];
}
function W() {
    return c().sample(Y());
}
function K(e, n, r) {
    return z(e, n, Y()).map((e) => ({
        ...e,
        group: r,
        key: ''.concat(r, '-').concat(e.text)
    }));
}
function z(e, n, r) {
    let i = e.toLocaleLowerCase();
    return c()(r)
        .filter((e) => l()(i, e.toLocaleLowerCase()))
        .take(n)
        .map((e) => ({ text: e }))
        .value();
}
function q(e, n) {
    let r,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = m.Z.getSearchType(n),
        o = {
            query: (e = e.split('#')[0]),
            limit: i,
            request: a
        };
    switch (s) {
        case S.aib.GUILD:
            r = T.ZP.queryGuildUsers({
                ...o,
                guildId: n
            });
            break;
        case S.aib.CHANNEL:
            r = T.ZP.queryChannelUsers({
                ...o,
                channelId: n
            });
            break;
        case S.aib.DMS:
            r = T.ZP.queryUsers(e, i, !0, a, () => !0);
            break;
        default:
            return [];
    }
    return r
        .filter((e) => {
            let { record: n } = e;
            return !p.Z.isBlockedOrIgnored(n.id);
        })
        .map((e) => {
            let { record: n } = e;
            return {
                text: y.ZP.getUserTag(n),
                user: n
            };
        });
}
function Q() {
    return m.Z.getSearchType() === S.aib.GUILD;
}
function X() {
    return !v.Z.hidePersonalInformation;
}
let J = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
function $() {
    let { canForwardMessages: e } = (0, _.WT)({ location: 'SearchTokens' }, { autoTrackExposure: !1 }),
        n = e ? [A.intl.string(A.t.nrpA5O)] : [],
        r = [A.intl.string(A.t.ZNR2fn), A.intl.string(A.t['20uQR0']), A.intl.string(A.t.L4lxyM), A.intl.string(A.t['AV/v6u']), A.intl.string(A.t.XM9XGB), A.intl.string(A.t.TNLcp6), A.intl.string(A.t.F8Wf0d), A.intl.string(A.t.PJgX2t), ...n];
    return {
        [S.dCx.FILTER_FROM]: {
            regex: Z(A.intl.string(A.t['1TUdFh'])),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t['1TUdFh'])),
            plainText: A.intl.string(A.t['1TUdFh']),
            validator: X,
            getAutocompletions: q
        },
        [S.dCx.ANSWER_USERNAME_FROM]: {
            follows: [S.dCx.FILTER_FROM],
            regex: J,
            validator: F,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [S.dCx.FILTER_MENTIONS]: {
            regex: Z(A.intl.string(A.t.i96lOz)),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t.i96lOz)),
            plainText: A.intl.string(A.t.i96lOz),
            validator: X,
            getAutocompletions: q
        },
        [S.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [S.dCx.FILTER_MENTIONS],
            regex: J,
            validator: F,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [S.dCx.FILTER_HAS]: {
            regex: Z(A.intl.string(A.t.CqCvio)),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t.CqCvio)),
            plainText: A.intl.string(A.t.CqCvio),
            getAutocompletions: (e, n, i) => z(e, i, r)
        },
        [S.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(r.map((e) => b.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [S.dCx.FILTER_HAS],
            validator: H,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [S.dCx.FILTER_FILE_TYPE]: {
            regex: Z(A.intl.string(A.t.TMNjFh)),
            key: G(A.intl.string(A.t.TMNjFh)),
            plainText: A.intl.string(A.t.TMNjFh),
            componentType: 'FILTER'
        },
        [S.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [S.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [S.dCx.FILTER_FILE_NAME]: {
            regex: Z(A.intl.string(A.t['5xtLRE'])),
            key: G(A.intl.string(A.t['5xtLRE'])),
            plainText: A.intl.string(A.t['5xtLRE']),
            componentType: 'FILTER'
        },
        [S.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [S.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [S.dCx.FILTER_BEFORE]: {
            regex: Z(A.intl.string(A.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t['qZ+7BA'])),
            plainText: A.intl.string(A.t['qZ+7BA']),
            getAutocompletions: (e, n, r) => K(e, r, S.dCx.FILTER_BEFORE)
        },
        [S.dCx.FILTER_ON]: {
            regex: Z('('.concat(A.intl.string(A.t.tIxkOj), '|').concat(A.intl.string(A.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t.h2NzSU)),
            plainText: A.intl.string(A.t.h2NzSU),
            getAutocompletions: (e, n, r) => K(e, r, S.dCx.FILTER_ON)
        },
        [S.dCx.FILTER_AFTER]: {
            regex: Z(A.intl.string(A.t.KSDx7O)),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t.KSDx7O)),
            plainText: A.intl.string(A.t.KSDx7O),
            getAutocompletions: (e, n, r) => K(e, r, S.dCx.FILTER_AFTER)
        },
        [S.dCx.ANSWER_BEFORE]: {
            regex: U,
            follows: [S.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'before')
        },
        [S.dCx.ANSWER_ON]: {
            regex: U,
            follows: [S.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'on')
        },
        [S.dCx.ANSWER_AFTER]: {
            regex: U,
            follows: [S.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'after')
        },
        [S.dCx.FILTER_IN]: {
            regex: Z(A.intl.string(A.t.WNpFHR)),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t.WNpFHR)),
            plainText: A.intl.string(A.t.WNpFHR),
            validator: Q,
            getAutocompletions(e, n, r) {
                '#' === e[0] && (e = e.substring(1));
                let i = T.ZP.queryChannels({
                    query: e,
                    type: h.sH,
                    guildId: n,
                    limit: 1 / 0
                })
                    .concat(
                        T.ZP.queryChannels({
                            query: e,
                            type: h.Zb,
                            guildId: n,
                            limit: 1 / 0
                        })
                    )
                    .map((e) => {
                        let { record: n } = e;
                        return n;
                    })
                    .filter((e) => !e.isThread());
                if ('' === e.trim()) {
                    let e = g.Z.getChannelId(n),
                        r = i.find((n) => n.id === e);
                    null != r && (i.splice(i.indexOf(r), 1), i.unshift(r));
                }
                let a = h.ZP.getTextChannelNameDisambiguations(n);
                return c()(i)
                    .take(r)
                    .map((e) => {
                        var n, r;
                        return {
                            text: ''.concat(null !== (r = null === (n = a[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : e.name),
                            channel: e
                        };
                    })
                    .value();
            }
        },
        [S.dCx.ANSWER_IN]: {
            regex: /(?:\s*#?([^ ]+))/i,
            mutable: !0,
            follows: [S.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: j,
            queryKey: 'channel_id'
        },
        [S.dCx.FILTER_PINNED]: {
            regex: Z(A.intl.string(A.t['0B74eX'])),
            componentType: 'FILTER',
            key: G(A.intl.string(A.t['0B74eX'])),
            plainText: A.intl.string(A.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [S.dCx.ANSWER_PINNED]: {
            regex: B,
            componentType: 'ANSWER',
            follows: [S.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let n = e.getMatch(1);
                return 'true' === n ? (e.setData('pinned', !0), !0) : 'false' === n && (e.setData('pinned', !1), !0);
            }
        }
    };
}
!(function (e) {
    (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER');
})(i || (i = {}));
let ee = {};
function et() {
    Object.assign(ee, $());
}
function en(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(ee).length;
    return c()(ee)
        .keys()
        .filter((e) => S.TNx.test(e))
        .filter((e) => null != ee[e].key)
        .map((e) => ({
            token: e,
            text: ee[e].key
        }))
        .filter((n) => {
            let { text: r } = n;
            return l()(e.toLowerCase(), r);
        })
        .take(n)
        .value();
}
n.ZP = ee;
