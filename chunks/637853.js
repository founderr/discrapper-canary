n.d(t, {
    Ee: function () {
        return R;
    },
    L6: function () {
        return G;
    },
    V7: function () {
        return y;
    },
    VF: function () {
        return x;
    },
    b$: function () {
        return A;
    },
    d9: function () {
        return U;
    },
    dF: function () {
        return C;
    },
    dX: function () {
        return k;
    },
    iF: function () {
        return L;
    },
    kl: function () {
        return D;
    },
    mn: function () {
        return b;
    },
    p3: function () {
        return N;
    },
    wC: function () {
        return v;
    }
});
var r = n(789020);
var i = n(47120);
var a = n(724458);
var o = n(653041);
var s = n(536091);
var l = n(442837),
    u = n(902704),
    c = n(447003),
    d = n(592125),
    _ = n(984933),
    E = n(430824),
    f = n(496675),
    h = n(630388),
    p = n(823379),
    m = n(700785),
    I = n(977258),
    T = n(981631),
    g = n(372897);
let S = new Date(1682488800000);
function A(e) {
    return (0, l.e7)([E.Z, f.Z], () => {
        let t = E.Z.getGuild(e),
            n = !!(null == t ? void 0 : t.hasFeature(T.oNc.COMMUNITY)),
            r = f.Z.can(T.Plq.MANAGE_GUILD, t),
            i = f.Z.can(T.Plq.MANAGE_ROLES, t);
        return n && r && i;
    });
}
function v(e) {
    let t = E.Z.getGuild(e),
        n = !!(null == t ? void 0 : t.hasFeature(T.oNc.COMMUNITY)),
        r = f.Z.can(T.Plq.MANAGE_GUILD, t),
        i = f.Z.can(T.Plq.MANAGE_ROLES, t);
    return n && r && i;
}
function N(e, t) {
    var n;
    if (null == e || !e.hasFeature(T.oNc.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < S) return !1;
    let r = null !== (n = t.flags) && void 0 !== n ? n : 0;
    return h.yE(r, g.q.STARTED_ONBOARDING) && !h.yE(r, g.q.COMPLETED_ONBOARDING);
}
function O(e, t, n) {
    let r = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            var t;
            null == e ||
                null === (t = e.channelIds) ||
                void 0 === t ||
                t.forEach((e) => {
                    r.add(e);
                });
        });
    }),
        t.forEach((e) => r.add(e));
    let i = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, c.Z)(e)),
        a = i.filter((e) => r.has(e.id) || (null != e.parent_id && r.has(e.parent_id)));
    return [a, i.filter((e) => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id)))];
}
function R(e, t, n) {
    return O(
        t,
        n,
        _.ZP.getChannels(e)[_.sH].map((e) => {
            let { channel: t } = e;
            return t;
        })
    );
}
function C(e, t, n) {
    return O(
        t,
        n,
        (0, l.e7)([_.ZP], () => _.ZP.getChannels(e))[_.sH].map((e) => {
            let { channel: t } = e;
            return t;
        })
    );
}
function y(e) {
    return L(d.Z.getChannel(e));
}
function L(e) {
    return !!(null != e && (0, I.s)(e.guild_id, e.id)) && (e.isForumChannel() ? m.Uu(T.Plq.SEND_MESSAGES_IN_THREADS, e) : m.Uu(T.Plq.SEND_MESSAGES, e));
}
function b(e) {
    return (0, l.e7)([d.Z], () => {
        let t = d.Z.getChannel(e);
        return (0, p.lm)(t) && L(t);
    });
}
function D(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = P(e, t, (e) => e.id, r);
    return (
        n.forEach((t) => {
            var n, a;
            if (!t.required) return;
            let o = P(e, null !== (a = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== a ? a : [], (e) => e.id),
                s = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let a = P(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => r(e) && !i.includes(e)
                    );
                    return a.length < t.length ? a : t;
                }, o);
            i.push(...s);
        }),
        i
    );
}
function M(e, t) {
    return e.filter((e) => {
        var n;
        return L(null === (n = t[e]) || void 0 === n ? void 0 : n.channel);
    });
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = _.ZP.getChannels(e)[_.sH],
        a = [];
    for (let { channel: e } of i)
        if ((0, I.s)(e.guild_id, e.id) && ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))) {
            let t = n(e);
            r(t) && a.push(t);
        }
    return a;
}
function U(e, t) {
    let n = P(e, t),
        r = _.ZP.getChannels(e)[_.sH],
        i = {};
    for (let e of r) i[e.channel.id] = e;
    return [
        M(
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            i
        ),
        n
    ];
}
function w(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, u.Z)(e[0], t[0]) && (0, u.Z)(e[1], t[1]);
}
function x(e, t) {
    return (0, l.e7)(
        [_.ZP],
        () => {
            let n = _.ZP.getChannels(e),
                r = [],
                i = [],
                a = {};
            for (let e of n[_.sH]) (0, I.s)(e.channel.guild_id, e.channel.id) && ((t.has(e.channel.id) && !e.channel.isCategory()) || (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) && ((a[e.channel.id] = e), r.push(e.channel), L(e.channel) && i.push(e.channel.id));
            return [i, r];
        },
        [e, t],
        w
    );
}
function G(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(p.lm)
    );
}
function k(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(p.lm)
    );
}
