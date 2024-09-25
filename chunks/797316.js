let r;
var i,
    a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(177523),
    d = n(353926),
    _ = n(768419),
    E = n(314897),
    f = n(439170),
    h = n(433355),
    p = n(592125),
    m = n(486472),
    I = n(271383),
    T = n(430824),
    g = n(19780),
    S = n(699516),
    A = n(944486),
    v = n(914010),
    N = n(981631);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let R = new c.ZP((e) => {
    for (let t in e) null == T.Z.getGuild(t) && !m.Z.isUnavailable(t) && delete e[t];
    u.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_FLUSH',
        subscriptions: e
    });
});
function C(e, t) {
    let n = {};
    R.forEach((i) => {
        var a;
        i !== v.Z.getGuildId() && i !== g.Z.getGuildId() && i !== (null === (a = p.Z.getChannel(A.Z.getChannelId())) || void 0 === a ? void 0 : a.getGuildId()) && (null == r || r.guildId !== i) && (R.clearWithoutFlushing(i, e), t && (n[i] = R.get(i)));
    }),
        !s().isEmpty(n) &&
            u.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: n
            });
}
function y(e, t) {
    return R.subscribeToGuild(e), null != t && h.ZP.getSection(t) === N.ULH.MEMBERS && b(e, t, c.KV);
}
function b(e, t, n) {
    if (t === f.oL) return R.subscribeChannel(e, t, n);
    let r = p.Z.getChannel(t);
    if (null == r) return !1;
    let i = r.getGuildId();
    return (i !== e && e === N.I_8 && R.subscribeToGuild(i), null != r && r.isThread()) ? (r.type === N.d4z.ANNOUNCEMENT_THREAD ? R.subscribeChannel(i, r.parent_id, n) : !!r.isActiveThread() && R.subscribeThreadMemberList(i, t, A.Z.getChannelId())) : R.subscribeChannel(i, t, n);
}
function L(e) {
    let { type: t } = e;
    'CONNECTION_OPEN' === t && C(!0, !1);
    let n = v.Z.getGuildId();
    null != n && y(n, A.Z.getChannelId(n));
    let r = {};
    R.forEach((e) => {
        null == T.Z.getGuild(e) ? R.clearWithoutFlushing(e, !0) : (r[e] = R.get(e));
    }),
        !s().isEmpty(r) &&
            u.Z.dispatch({
                type: 'GUILD_SUBSCRIPTIONS_FLUSH',
                subscriptions: r
            });
}
function D() {
    C(!1, !1);
}
function M(e) {
    let { idle: t } = e;
    if (!t) return !1;
    C(!1, !0);
}
function P() {
    R.reset();
}
function U(e) {
    let { guild: t } = e;
    t.id === v.Z.getGuildId() && Y();
}
function w(e) {
    let { guild: t } = e;
    R.clearWithoutFlushing(t.id, !0);
}
function x(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            e !== E.default.getId() && R.subscribeUser(t, e);
        }),
        !1
    );
}
function G(e) {
    let { guildId: t, userIds: n } = e;
    return (
        n.forEach((e) => {
            R.unsubscribeUser(t, e);
        }),
        !1
    );
}
function k(e) {
    let { guildId: t } = e;
    R.subscribeToMemberUpdates(t);
}
function B(e) {
    let { guildId: t } = e;
    R.unsubscribeFromMemberUpdates(t);
}
function F(e) {
    let { guildId: t } = e;
    return R.subscribeToGuild(t);
}
function Z(e) {
    let { guildId: t, channelId: n, ranges: r } = e;
    return b(t, n, r);
}
function V(e) {
    let { guildId: t, channelId: n } = e;
    return y(t, n);
}
function H(e) {
    let { guildId: t, channelId: n } = e;
    return !m.Z.isUnavailable(t) && y(t, n);
}
function Y() {
    return y(v.Z.getGuildId(), A.Z.getChannelId());
}
function j(e) {
    let { channel: t } = e;
    return t.isArchivedThread() ? R.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && A.Z.getChannelId() === t.id && void R.subscribeThreadMemberList(t.guild_id, t.id, A.Z.getChannelId());
}
function W(e) {
    let { channel: t } = e;
    return R.unsubscribeThreadMemberList(t.guild_id, t.id);
}
function K() {
    let e = _.Z.getSyncingWith();
    if (null == e) null != r && (R.unsubscribeUser(r.guildId, r.userId), (r = null));
    else {
        let { userId: t } = e;
        if ((null != r && r.userId === t) || S.Z.isFriend(t)) return !1;
        let n = I.ZP.memberOf(t);
        if (0 === n.length) return !1;
        let [i] = n;
        (r = {
            guildId: i,
            userId: t
        }),
            R.subscribeUser(i, t);
    }
    return !1;
}
function z(e) {
    let { guildIds: t } = e;
    for (let e of t) null != e && R.subscribeToGuild(e);
    return !1;
}
class q extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, T.Z, v.Z, A.Z, g.Z, E.default, h.ZP, d.Z), this.syncWith([_.Z], K), this.syncWith([h.ZP], Y);
    }
    getSubscribedThreadIds() {
        return R.getSubscribedThreadIds();
    }
    isSubscribedToThreads(e) {
        return R.isSubscribedToThreads(e);
    }
    isSubscribedToAnyMember(e) {
        return R.isSubscribedToAnyMember(e);
    }
    isSubscribedToMemberUpdates(e) {
        return R.isSubscribedToMemberUpdates(e);
    }
    isSubscribedToAnyGuildChannel(e) {
        let t = R.get(e).channels;
        return null != t && Object.keys(t).length > 0;
    }
}
O(q, 'displayName', 'GuildSubscriptionsStore'),
    (t.Z = new q(u.Z, {
        CONNECTION_OPEN: L,
        CONNECTION_RESUMED: L,
        CONNECTION_CLOSED: D,
        IDLE: M,
        LOGOUT: P,
        VOICE_CHANNEL_SELECT: H,
        CHANNEL_SELECT: H,
        GUILD_CREATE: U,
        GUILD_DELETE: w,
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: x,
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: G,
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: k,
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: B,
        GUILD_SUBSCRIPTIONS_CHANNEL: Z,
        GUILD_SUBSCRIPTIONS: F,
        CHANNEL_PRELOAD: V,
        INBOX_OPEN: z,
        THREAD_UPDATE: j,
        THREAD_DELETE: W,
        THREAD_LIST_SYNC: Y
    }));
