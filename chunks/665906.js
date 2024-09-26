n.d(t, {
    $R: function () {
        return D;
    },
    C7: function () {
        return R;
    },
    Ek: function () {
        return v;
    },
    Gu: function () {
        return k;
    },
    JQ: function () {
        return O;
    },
    NE: function () {
        return I;
    },
    RG: function () {
        return M;
    },
    Xb: function () {
        return w;
    },
    Xu: function () {
        return g;
    },
    Y: function () {
        return G;
    },
    cD: function () {
        return S;
    },
    ki: function () {
        return T;
    },
    kn: function () {
        return b;
    },
    tM: function () {
        return m;
    },
    tc: function () {
        return L;
    },
    xl: function () {
        return P;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    o = n(442837),
    s = n(987170),
    l = n(590293),
    u = n(901461),
    c = n(131704),
    d = n(314897),
    _ = n(592125),
    E = n(496675),
    f = n(709054),
    h = n(601070),
    p = n(981631);
let m = (0, s.Z)({
    id: '2022-07_voice_in_threads',
    label: 'Voice in Threads',
    kind: 'guild',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function I(e, t) {
    return A(
        (0, o.e7)(
            [E.Z],
            () => {
                let t = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : a.$e(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
                return E.Z.can(t, e);
            },
            [e]
        ),
        e,
        t
    );
}
function T(e, t) {
    let n = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : a.$e(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
    return A(E.Z.can(n, e), e, t);
}
function g(e) {
    let t = (0, o.e7)([E.Z], () => E.Z.can(a.$e(p.Plq.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === p.d4z.GUILD_TEXT && A(t, e);
}
function S(e) {
    let t = I(e),
        n = g(e);
    return t || n;
}
function A(e, t, n) {
    return !(__OVERLAY__ || !e || !c.uC.has(t.type) || (null != n && (n.hasFlag(p.iLy.HAS_THREAD) || (0, u.Z)(n)))) && !0;
}
function v(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getChannel(f.default.castMessageIdAsChannelId(e.id)), [e]);
    return N(
        (0, o.e7)([E.Z], () => E.Z.can(p.Plq.VIEW_CHANNEL, t), [t]),
        e,
        t
    );
}
function N(e, t, n) {
    return (!!t.hasFlag(p.iLy.HAS_THREAD) && null != n && !!e) || !1;
}
function O(e) {
    return (0, o.cj)([h.Z, E.Z], () => {
        let t = h.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = h.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = h.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = i()(n).some((e) => E.Z.can(p.Plq.VIEW_CHANNEL, e.channel)),
            o = i()(t).some((e) => !(e.channel.id in n) && E.Z.can(p.Plq.VIEW_CHANNEL, e.channel)),
            s = i()(r).some((e) => E.Z.can(p.Plq.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: a || o || s,
            hasMoreActiveThreads: s || o
        };
    });
}
function R(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getChannel(null == e ? void 0 : e.parent_id)),
        n = (0, o.e7)([E.Z], () => null != t && E.Z.can(p.Plq.MANAGE_THREADS, t), [t]),
        r = (0, o.e7)([d.default], () => d.default.getId());
    return !!(null != e && null != t && e.isThread()) && (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)));
}
function C(e, t) {
    return null != e && t.can(p.Plq.SEND_MESSAGES_IN_THREADS, e);
}
function y(e, t, n) {
    var r;
    return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t);
}
function L(e) {
    let t = (0, o.e7)([E.Z], () => C(e, E.Z)),
        n = w(e);
    return y(e, t, n);
}
function b(e) {
    let t = C(e, E.Z),
        n = x(e);
    return y(e, t, n);
}
function D(e) {
    var t;
    let n = (0, o.e7)([E.Z], () => null != e && E.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e));
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n));
}
function M(e) {
    var t;
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e)));
}
function P(e) {
    let t = E.Z.can(p.Plq.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function U(e, t) {
    return null != e && t.can(p.Plq.MANAGE_THREADS, e);
}
function w(e) {
    return (0, o.e7)([E.Z], () => U(e, E.Z));
}
function x(e) {
    return U(e, E.Z);
}
function G(e) {
    let t = (0, l.Z)(),
        n = (0, o.e7)([E.Z], () => E.Z.can(p.Plq.CONNECT, e)),
        r = D(e),
        i = m.useExperiment(
            {
                guildId: e.guild_id,
                location: 'e791ea_1'
            },
            { autoTrackExposure: !1 }
        ).enabled;
    return !t && e.isVocalThread() && i && n && r;
}
function k(e) {
    let t = w(e);
    return e.isLockedThread() && !t;
}
