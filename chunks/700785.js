n.d(t, {
    BT: function () {
        return Z;
    },
    Hn: function () {
        return S;
    },
    Hu: function () {
        return B;
    },
    I0: function () {
        return M;
    },
    Og: function () {
        return U;
    },
    TP: function () {
        return v;
    },
    Uu: function () {
        return V;
    },
    e9: function () {
        return k;
    },
    iJ: function () {
        return x;
    },
    o4: function () {
        return w;
    },
    oz: function () {
        return H;
    },
    r6: function () {
        return G;
    },
    uB: function () {
        return P;
    },
    we: function () {
        return F;
    },
    ym: function () {
        return y;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(149765),
    s = n(911969),
    l = n(715903),
    u = n(69882),
    c = n(160404),
    d = n(41776),
    _ = n(569471),
    E = n(131704),
    f = n(314897),
    h = n(592125),
    p = n(271383),
    m = n(430824),
    I = n(594174),
    T = n(709054),
    g = n(981631);
let S = o.vB(0),
    A = o.$e(...a().values(g.Plq)),
    v = o.$e(g.Plq.CREATE_INSTANT_INVITE, g.Plq.CHANGE_NICKNAME, g.Plq.VIEW_CHANNEL, g.Plq.SEND_MESSAGES, g.Plq.EMBED_LINKS, g.Plq.ATTACH_FILES, g.Plq.READ_MESSAGE_HISTORY, g.Plq.MENTION_EVERYONE, g.Plq.USE_EXTERNAL_EMOJIS, g.Plq.USE_EXTERNAL_STICKERS, g.Plq.ADD_REACTIONS, g.Plq.CREATE_PUBLIC_THREADS, g.Plq.CREATE_PRIVATE_THREADS, g.Plq.SEND_MESSAGES_IN_THREADS, g.Plq.SEND_POLLS, g.Plq.CONNECT, g.Plq.SPEAK, g.Plq.USE_VAD, g.Plq.STREAM, g.Plq.USE_EMBEDDED_ACTIVITIES, g.Plq.USE_SOUNDBOARD, g.Plq.REQUEST_TO_SPEAK, g.Plq.USE_APPLICATION_COMMANDS, g.Plq.CREATE_GUILD_EXPRESSIONS, g.Plq.CREATE_EVENTS, g.Plq.USE_EXTERNAL_APPS),
    N = o.$e(g.Plq.VIEW_CHANNEL, g.Plq.READ_MESSAGE_HISTORY),
    O = o.$e(g.Plq.VIEW_CHANNEL, g.Plq.SEND_MESSAGES, g.Plq.CONNECT, g.Plq.SPEAK, g.Plq.STREAM, g.Plq.USE_EMBEDDED_ACTIVITIES, g.Plq.USE_EXTERNAL_APPS, g.Plq.USE_EXTERNAL_EMOJIS, g.Plq.USE_EXTERNAL_SOUNDS, g.Plq.USE_EXTERNAL_STICKERS, g.Plq.USE_SOUNDBOARD, g.Plq.USE_VAD),
    R = o.$e(g.Plq.VIEW_CHANNEL, g.Plq.READ_MESSAGE_HISTORY),
    C = o.$e(g.Plq.VIEW_CHANNEL, g.Plq.READ_MESSAGE_HISTORY, g.Plq.CHANGE_NICKNAME),
    y = o.$e(g.Plq.MANAGE_GUILD, g.Plq.MANAGE_ROLES, g.Plq.ADMINISTRATOR, g.Plq.BAN_MEMBERS, g.Plq.MANAGE_NICKNAMES, g.Plq.CREATE_GUILD_EXPRESSIONS, g.Plq.MANAGE_GUILD_EXPRESSIONS, g.Plq.MANAGE_WEBHOOKS, g.Plq.VIEW_AUDIT_LOG);
function L(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === g.BpS.ELEVATED && n === f.default.getId()) {
        var i;
        !(null === (i = I.default.getCurrentUser()) || void 0 === i ? void 0 : i.mfaEnabled) && (e = o.Od(e, g.TC2));
    }
    return e;
}
function b(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = o.Od(n, i.deny)), (n = o.IH(n, i.allow))), null != t)) {
        let e = S,
            i = S;
        for (let n = 0; n < t.roles.length; n++) {
            let a = r[t.roles[n]];
            null != a && ((e = o.IH(e, a.allow)), (i = o.IH(i, a.deny)));
        }
        (n = o.Od(n, i)), (n = o.IH(n, e));
        let a = r[t.userId];
        null != a && ((n = o.Od(n, a.deny)), (n = o.IH(n, a.allow)));
        let s = o.e$(n, g.Plq.ADMINISTRATOR);
        (0, l.EY)(t) && !s && (n = o.hX(n, C)), (0, u.b)(t) && !s && (n = o.hX(n, R));
    }
    return n;
}
function D(e) {
    let { userId: t, member: n, guild: r, overwrites: i, roles: a, checkElevated: s = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: u = N } = e;
    if (l) return b(r.id, n, S, i);
    let c = (a =
            null != a
                ? {
                      ...m.Z.getRoles(r.id),
                      ...a
                  }
                : m.Z.getRoles(r.id))[r.getEveryoneRoleId()],
        _ = null != c ? c.permissions : v;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = a[n.roles[e]];
            void 0 !== t && (_ = o.IH(_, t.permissions));
        }
    return (_ = o.e$(_, g.Plq.ADMINISTRATOR) ? A : b(r.id, n, _, i)), (d.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (_ = o.hX(_, u)), p.ZP.isCurrentUserGuest(r.id) && (_ = o.hX(_, O)), L(_, r, t, s);
}
function M(e) {
    let t,
        { forceRoles: n, context: r, overwrites: i, roles: a, checkElevated: o = !0, excludeGuildPermissions: s } = e,
        l = N;
    if (r instanceof E.Sf) {
        var u;
        if (r.isScheduledForDeletion()) return S;
        if (E.Ec.has(r.type)) {
            let e = h.Z.getChannel(r.parent_id);
            return null == e
                ? S
                : U(
                      r,
                      M({
                          forceRoles: n,
                          context: e,
                          overwrites: i,
                          roles: a,
                          checkElevated: o,
                          excludeGuildPermissions: s
                      }),
                      !1
                  );
        }
        l = null !== (u = r.computeLurkerPermissionsAllowList()) && void 0 !== u ? u : l;
        i =
            null != i
                ? {
                      ...r.permissionOverwrites,
                      ...i
                  }
                : r.permissionOverwrites;
        let e = r.getGuildId();
        t = null != e ? m.Z.getGuild(e) : null;
    } else (i = null != i ? i : {}), (t = r);
    if (null == t) return S;
    let c = {
        userId: g.lds,
        nick: '',
        guildId: t.id,
        guildMemberAvatar: null,
        roles: T.default.keys(n),
        colorString: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
    };
    return D({
        userId: g.lds,
        member: c,
        guild: t,
        overwrites: i,
        roles: a,
        checkElevated: o,
        excludeGuildPermissions: s,
        lurkerPermissionsMask: l
    });
}
function P(e) {
    var t, n, r;
    let i,
        { user: a, context: o, overwrites: s, roles: l, checkElevated: u = !0, excludeGuildPermissions: d = !1 } = e;
    if (null == a) return S;
    let f = 'string' == typeof a ? a : a.id,
        T = N;
    if (o instanceof E.Sf) {
        if (o.isScheduledForDeletion()) return S;
        if (E.Ec.has(o.type)) {
            let e = h.Z.getChannel(o.parent_id);
            if (null == e || e.isScheduledForDeletion()) return S;
            let t = f === (null === (n = I.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && _.Z.hasJoined(o.id);
            return U(
                o,
                P({
                    user: a,
                    context: e,
                    overwrites: s,
                    roles: l,
                    checkElevated: u,
                    excludeGuildPermissions: d
                }),
                t
            );
        }
        T = null !== (r = o.computeLurkerPermissionsAllowList()) && void 0 !== r ? r : T;
        s =
            null != s
                ? {
                      ...o.permissionOverwrites,
                      ...s
                  }
                : o.permissionOverwrites;
        let e = o.getGuildId();
        i = null != e ? m.Z.getGuild(e) : null;
    } else (s = null != s ? s : {}), (i = o);
    if (null == i) return S;
    if (!(f === (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && c.Z.isViewingRoles(i.id)) && i.isOwner(f)) return L(A, i, f, u);
    let g = p.ZP.getMember(i.id, f);
    return D({
        userId: f,
        member: g,
        guild: i,
        overwrites: s,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: d,
        lurkerPermissionsMask: T
    });
}
function U(e, t, n) {
    return e.type !== g.d4z.PRIVATE_THREAD || n || o.e$(t, g.Plq.MANAGE_THREADS) ? (o.e$(t, g.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !o.e$(t, g.Plq.MANAGE_THREADS) ? o.Od(t, g.Plq.SEND_MESSAGES) : o.$e(t, g.Plq.SEND_MESSAGES)) : o.Od(t, g.Plq.SEND_MESSAGES)) : S;
}
function w(e, t) {
    if (E.Ec.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = { ...e.permissionOverwrites },
        i = { ...t.permissionOverwrites };
    return (
        null == r[n] && (r[n] = F(n)),
        null == i[n] && (i[n] = F(n)),
        Object.keys(r).length === Object.keys(i).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = i[e];
                return !(null != n && o.fS(n.deny, t.deny) && o.fS(n.allow, t.allow)) && !0;
            })
    );
}
function x(e) {
    var t;
    return a().some(m.Z.getRoles(e.id), (e) => e.hoist && o.e$(e.permissions, g.Plq.ADMINISTRATOR)) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0;
}
function G(e, t, n, r) {
    if (null != t && e.isOwner(t)) return !0;
    if (null == n) return !1;
    let i = a()(m.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return i.indexOf(n.id) > (null != r ? i.indexOf(r.id) : -1);
}
function k(e, t) {
    let n = p.ZP.getMember(e.id, t);
    if (null != n)
        return a()(m.Z.getRoles(e.id))
            .filter((e) => -1 !== n.roles.indexOf(e.id))
            .sortBy((e) => -e.position)
            .first();
}
function B(e, t) {
    return null == t.hoistRoleId ? null : m.Z.getRole(e.id, t.hoistRoleId);
}
function F(e) {
    return {
        id: e,
        type: s.BN.ROLE,
        allow: S,
        deny: S
    };
}
function Z(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: a, excludeGuildPermissions: s } = e;
    return o.e$(
        P({
            user: n,
            context: r,
            overwrites: i,
            roles: a,
            checkElevated: !0,
            excludeGuildPermissions: s
        }),
        t
    );
}
function V(e, t) {
    let n;
    let r = {};
    if (t instanceof E.Sf) {
        if (t.type === g.d4z.PRIVATE_THREAD || (E.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = m.Z.getRole(n.id, n.getEveryoneRoleId());
    if (null == i) return !1;
    let a = i.permissions,
        s = r[n.id];
    return null != s && ((a = o.Od(a, s.deny)), (a = o.IH(a, s.allow))), o.e$(a, e);
}
function H(e, t) {
    let n;
    let r = {};
    if (t instanceof E.Sf) {
        if (t.type === g.d4z.PRIVATE_THREAD || (E.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = m.Z.getRole(n.id, n.getEveryoneRoleId());
    return !(null == i || !o.e$(i.permissions, e) || a().some(r, (t) => o.e$(t.deny, e))) && !0;
}
