n.d(t, {
    BT: function () {
        return B;
    },
    Hn: function () {
        return I;
    },
    Hu: function () {
        return U;
    },
    I0: function () {
        return function e(t) {
            let n,
                { forceRoles: r, context: i, overwrites: a, roles: s, checkElevated: o = !0, excludeGuildPermissions: l } = t,
                u = b;
            if (i instanceof f.Sf) {
                var c;
                if (i.isScheduledForDeletion()) return I;
                if (f.Ec.has(i.type)) {
                    let t = h.Z.getChannel(i.parent_id);
                    return null == t
                        ? I
                        : x(
                              i,
                              e({
                                  forceRoles: r,
                                  context: t,
                                  overwrites: a,
                                  roles: s,
                                  checkElevated: o,
                                  excludeGuildPermissions: l
                              }),
                              !1
                          );
                }
                u = null !== (c = i.computeLurkerPermissionsAllowList()) && void 0 !== c ? c : u;
                a =
                    null != a
                        ? {
                              ...i.permissionOverwrites,
                              ...a
                          }
                        : i.permissionOverwrites;
                let t = i.getGuildId();
                n = null != t ? m.Z.getGuild(t) : null;
            } else (a = null != a ? a : {}), (n = i);
            if (null == n) return I;
            let d = {
                userId: v.lds,
                nick: '',
                guildId: n.id,
                guildMemberAvatar: null,
                roles: E.default.keys(r),
                colorString: null,
                hoistRoleId: null,
                premiumSince: null,
                isPending: !1,
                joinedAt: new Date().toISOString(),
                communicationDisabledUntil: null
            };
            return D({
                userId: v.lds,
                member: d,
                guild: n,
                overwrites: a,
                roles: s,
                checkElevated: o,
                excludeGuildPermissions: l,
                lurkerPermissionsMask: u
            });
        };
    },
    Og: function () {
        return x;
    },
    TP: function () {
        return T;
    },
    Uu: function () {
        return Z;
    },
    e9: function () {
        return k;
    },
    iJ: function () {
        return M;
    },
    o4: function () {
        return w;
    },
    oz: function () {
        return F;
    },
    r6: function () {
        return P;
    },
    uB: function () {
        return L;
    },
    we: function () {
        return G;
    },
    ym: function () {
        return C;
    }
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    s = n(911969),
    o = n(715903),
    l = n(69882),
    u = n(160404),
    c = n(41776),
    d = n(569471),
    f = n(131704),
    _ = n(314897),
    h = n(592125),
    p = n(271383),
    m = n(430824),
    g = n(594174),
    E = n(709054),
    v = n(981631);
let I = a.vB(0),
    S = a.$e(...i().values(v.Plq)),
    T = a.$e(v.Plq.CREATE_INSTANT_INVITE, v.Plq.CHANGE_NICKNAME, v.Plq.VIEW_CHANNEL, v.Plq.SEND_MESSAGES, v.Plq.EMBED_LINKS, v.Plq.ATTACH_FILES, v.Plq.READ_MESSAGE_HISTORY, v.Plq.MENTION_EVERYONE, v.Plq.USE_EXTERNAL_EMOJIS, v.Plq.USE_EXTERNAL_STICKERS, v.Plq.ADD_REACTIONS, v.Plq.CREATE_PUBLIC_THREADS, v.Plq.CREATE_PRIVATE_THREADS, v.Plq.SEND_MESSAGES_IN_THREADS, v.Plq.SEND_POLLS, v.Plq.CONNECT, v.Plq.SPEAK, v.Plq.USE_VAD, v.Plq.STREAM, v.Plq.USE_EMBEDDED_ACTIVITIES, v.Plq.USE_SOUNDBOARD, v.Plq.REQUEST_TO_SPEAK, v.Plq.USE_APPLICATION_COMMANDS, v.Plq.CREATE_GUILD_EXPRESSIONS, v.Plq.CREATE_EVENTS, v.Plq.USE_EXTERNAL_APPS),
    b = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.READ_MESSAGE_HISTORY),
    y = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.SEND_MESSAGES, v.Plq.CONNECT, v.Plq.SPEAK, v.Plq.STREAM, v.Plq.USE_EMBEDDED_ACTIVITIES, v.Plq.USE_EXTERNAL_APPS, v.Plq.USE_EXTERNAL_EMOJIS, v.Plq.USE_EXTERNAL_SOUNDS, v.Plq.USE_EXTERNAL_STICKERS, v.Plq.USE_SOUNDBOARD, v.Plq.USE_VAD),
    A = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.READ_MESSAGE_HISTORY),
    N = a.$e(v.Plq.VIEW_CHANNEL, v.Plq.READ_MESSAGE_HISTORY, v.Plq.CHANGE_NICKNAME),
    C = a.$e(v.Plq.MANAGE_GUILD, v.Plq.MANAGE_ROLES, v.Plq.ADMINISTRATOR, v.Plq.BAN_MEMBERS, v.Plq.MANAGE_NICKNAMES, v.Plq.CREATE_GUILD_EXPRESSIONS, v.Plq.MANAGE_GUILD_EXPRESSIONS, v.Plq.MANAGE_WEBHOOKS, v.Plq.VIEW_AUDIT_LOG);
function R(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (r && t.mfaLevel === v.BpS.ELEVATED && n === _.default.getId()) {
        var i;
        !(null === (i = g.default.getCurrentUser()) || void 0 === i ? void 0 : i.mfaEnabled) && (e = a.Od(e, v.TC2));
    }
    return e;
}
function O(e, t, n, r) {
    let i = r[e];
    if ((null != i && ((n = a.Od(n, i.deny)), (n = a.IH(n, i.allow))), null != t)) {
        let e = I,
            i = I;
        for (let n = 0; n < t.roles.length; n++) {
            let s = r[t.roles[n]];
            null != s && ((e = a.IH(e, s.allow)), (i = a.IH(i, s.deny)));
        }
        (n = a.Od(n, i)), (n = a.IH(n, e));
        let s = r[t.userId];
        null != s && ((n = a.Od(n, s.deny)), (n = a.IH(n, s.allow)));
        let u = a.e$(n, v.Plq.ADMINISTRATOR);
        (0, o.EY)(t) && !u && (n = a.hX(n, N)), (0, l.b)(t) && !u && (n = a.hX(n, A));
    }
    return n;
}
function D(e) {
    let { userId: t, member: n, guild: r, overwrites: i, roles: s, checkElevated: o = !0, excludeGuildPermissions: l = !1, lurkerPermissionsMask: u = b } = e;
    if (l) return O(r.id, n, I, i);
    let d = (s =
            null != s
                ? {
                      ...m.Z.getRoles(r.id),
                      ...s
                  }
                : m.Z.getRoles(r.id))[r.getEveryoneRoleId()],
        f = null != d ? d.permissions : T;
    if (null != n)
        for (let e = 0; e < n.roles.length; e++) {
            let t = s[n.roles[e]];
            void 0 !== t && (f = a.IH(f, t.permissions));
        }
    return (f = a.e$(f, v.Plq.ADMINISTRATOR) ? S : O(r.id, n, f, i)), (c.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (f = a.hX(f, u)), p.ZP.isCurrentUserGuest(r.id) && (f = a.hX(f, y)), R(f, r, t, o);
}
function L(e) {
    var t, n, r;
    let i,
        { user: a, context: s, overwrites: o, roles: l, checkElevated: c = !0, excludeGuildPermissions: _ = !1 } = e;
    if (null == a) return I;
    let E = 'string' == typeof a ? a : a.id,
        v = b;
    if (s instanceof f.Sf) {
        if (s.isScheduledForDeletion()) return I;
        if (f.Ec.has(s.type)) {
            let e = h.Z.getChannel(s.parent_id);
            if (null == e || e.isScheduledForDeletion()) return I;
            let t = E === (null === (n = g.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.Z.hasJoined(s.id);
            return x(
                s,
                L({
                    user: a,
                    context: e,
                    overwrites: o,
                    roles: l,
                    checkElevated: c,
                    excludeGuildPermissions: _
                }),
                t
            );
        }
        v = null !== (r = s.computeLurkerPermissionsAllowList()) && void 0 !== r ? r : v;
        o =
            null != o
                ? {
                      ...s.permissionOverwrites,
                      ...o
                  }
                : s.permissionOverwrites;
        let e = s.getGuildId();
        i = null != e ? m.Z.getGuild(e) : null;
    } else (o = null != o ? o : {}), (i = s);
    if (null == i) return I;
    if (!(E === (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.Z.isViewingRoles(i.id)) && i.isOwner(E)) return R(S, i, E, c);
    let T = p.ZP.getMember(i.id, E);
    return D({
        userId: E,
        member: T,
        guild: i,
        overwrites: o,
        roles: l,
        checkElevated: c,
        excludeGuildPermissions: _,
        lurkerPermissionsMask: v
    });
}
function x(e, t, n) {
    return e.type !== v.d4z.PRIVATE_THREAD || n || a.e$(t, v.Plq.MANAGE_THREADS) ? (a.e$(t, v.Plq.SEND_MESSAGES_IN_THREADS) ? (e.isLockedThread() && !a.e$(t, v.Plq.MANAGE_THREADS) ? a.Od(t, v.Plq.SEND_MESSAGES) : a.$e(t, v.Plq.SEND_MESSAGES)) : a.Od(t, v.Plq.SEND_MESSAGES)) : I;
}
function w(e, t) {
    if (f.Ec.has(e.type)) return !0;
    let { guild_id: n } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let r = { ...e.permissionOverwrites },
        i = { ...t.permissionOverwrites };
    return (
        null == r[n] && (r[n] = G(n)),
        null == i[n] && (i[n] = G(n)),
        Object.keys(r).length === Object.keys(i).length &&
            !Object.keys(r).some((e) => {
                let t = r[e],
                    n = i[e];
                return !(null != n && a.fS(n.deny, t.deny) && a.fS(n.allow, t.allow)) && !0;
            })
    );
}
function M(e) {
    var t;
    return i().some(m.Z.getRoles(e.id), (e) => e.hoist && a.e$(e.permissions, v.Plq.ADMINISTRATOR)) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0;
}
function P(e, t, n, r) {
    if (null != t && e.isOwner(t)) return !0;
    if (null == n) return !1;
    let a = i()(m.Z.getRoles(e.id))
        .sortBy((e) => e.position)
        .map((e) => e.id)
        .value();
    return a.indexOf(n.id) > (null != r ? a.indexOf(r.id) : -1);
}
function k(e, t) {
    let n = p.ZP.getMember(e.id, t);
    if (null != n)
        return i()(m.Z.getRoles(e.id))
            .filter((e) => -1 !== n.roles.indexOf(e.id))
            .sortBy((e) => -e.position)
            .first();
}
function U(e, t) {
    return null == t.hoistRoleId ? null : m.Z.getRole(e.id, t.hoistRoleId);
}
function G(e) {
    return {
        id: e,
        type: s.BN.ROLE,
        allow: I,
        deny: I
    };
}
function B(e) {
    let { permission: t, user: n, context: r, overwrites: i, roles: s, excludeGuildPermissions: o } = e;
    return a.e$(
        L({
            user: n,
            context: r,
            overwrites: i,
            roles: s,
            checkElevated: !0,
            excludeGuildPermissions: o
        }),
        t
    );
}
function Z(e, t) {
    let n;
    let r = {};
    if (t instanceof f.Sf) {
        if (t.type === v.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let i = m.Z.getRole(n.id, n.getEveryoneRoleId());
    if (null == i) return !1;
    let s = i.permissions,
        o = r[n.id];
    return null != o && ((s = a.Od(s, o.deny)), (s = a.IH(s, o.allow))), a.e$(s, e);
}
function F(e, t) {
    let n;
    let r = {};
    if (t instanceof f.Sf) {
        if (t.type === v.d4z.PRIVATE_THREAD || (f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id)))) return !1;
        r = t.permissionOverwrites;
        let e = t.getGuildId();
        n = null != e ? m.Z.getGuild(e) : null;
    } else n = t;
    if (null == n) return !1;
    let s = m.Z.getRole(n.id, n.getEveryoneRoleId());
    return !(null == s || !a.e$(s.permissions, e) || i().some(r, (t) => a.e$(t.deny, e))) && !0;
}
