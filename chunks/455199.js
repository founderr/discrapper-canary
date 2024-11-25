n(733860), n(653041);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(433517),
    d = n(379649),
    f = n(570140),
    _ = n(786761),
    p = n(572804),
    h = n(901461),
    m = n(814082),
    g = n(23750),
    E = n(314897),
    v = n(592125),
    I = n(375954),
    b = n(306680),
    T = n(699516),
    S = n(914010),
    y = n(9156),
    A = n(594174),
    N = n(981631);
let C = 'recentMentionFilterSettings',
    R = [],
    O = {},
    D = {},
    L = !1,
    x = !0,
    w = c.K.get(C, {
        guildFilter: N.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    M = !1,
    P = 0,
    k = !1,
    U = !1;
function B(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == O[e.getChannelId()] && (O[e.getChannelId()] = 0), O[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != O[e.getChannelId()] && (O[e.getChannelId()] = Math.max(0, O[e.getChannelId()] - 1));
            });
}
function G(e) {
    if (e instanceof g.ZP) return e;
    let t = I.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, _.e5)(e);
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, h.Z)(e) && !N.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = v.Z.getChannel(t);
    if (null == n || n.type === N.d4z.DM || (w.guildFilter === N.NgX.THIS_SERVER && n.getGuildId() !== S.Z.getGuildId())) return null;
    let r = E.default.getId();
    if (T.Z.isBlockedOrIgnoredForMessage(e) || (0, m.Z)(e, r)) return null;
    e = G(e);
    let i = !w.everyoneFilter,
        a = !w.roleFilter;
    return (0, p.ZP)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: a
    })
        ? (U &&
              b.ZP.ackMessageId(n.id) !== e.id &&
              (0, p.ZP)({
                  message: e,
                  userId: r,
                  suppressEveryone: y.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: y.ZP.isSuppressRolesEnabled(n.getGuildId())
              }) &&
              (U = !1),
          e)
        : null;
}
function F(e) {
    if (null == D[e]) return !1;
    delete D[e],
        B({
            deletedMessages: l().filter(R, (t) => {
                let { id: n } = t;
                return n === e;
            })
        }),
        (R = l().filter(R, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function V(e) {
    let { id: t } = e;
    return F(t);
}
function j(e) {
    let t = { ...w };
    (w = l().defaults(l().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), w)), c.K.set(C, w);
    let n = (e, n) => t[e] !== w[e] && w[e] === n,
        r = n('guildFilter', N.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
    D = {};
    let i = [];
    r &&
        R.forEach((e) => {
            let t = Z(e);
            null != t && (i.push(t), (D[t.id] = !0));
        }),
        (O = {}),
        (R = i).forEach((e) => {
            null == O[e.getChannelId()] && (O[e.getChannelId()] = 0), O[e.getChannelId()]++;
        }),
        0 === R.length && (M = !1);
}
function H() {
    (R = []), (D = {}), (M = !1), (U = !1), (O = {});
}
function Y() {
    B({ deletedMessages: l().filter(R, (e) => T.Z.isBlockedOrIgnoredForMessage(e)) }), (R = R.filter((e) => !T.Z.isBlockedOrIgnoredForMessage(e)));
}
function W(e) {
    let { channel: t } = e,
        n = [];
    (R = l().filter(R, (e) => e.channel_id !== t.id || (delete D[e.id], n.push(e), !1))), B({ deletedMessages: n });
}
class K extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(A.default, v.Z, I.Z, b.ZP);
    }
    isOpen() {
        return k;
    }
    get hasLoadedEver() {
        return M;
    }
    get lastLoaded() {
        return P;
    }
    getMentions() {
        return M || R.length > 0 ? R : null;
    }
    hasMention(e) {
        return D[e];
    }
    get loading() {
        return L;
    }
    get hasMore() {
        return x;
    }
    get guildFilter() {
        return w.guildFilter;
    }
    get everyoneFilter() {
        return w.everyoneFilter;
    }
    get roleFilter() {
        return w.roleFilter;
    }
    get mentionsAreStale() {
        return U;
    }
    get mentionCountByChannel() {
        return O;
    }
    getMentionCountForChannel(e) {
        var t;
        return null !== (t = O[e]) && void 0 !== t ? t : 0;
    }
}
(s = 'RecentMentionsStore'),
    (a = 'displayName') in (i = K)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new K(f.Z, {
        LOAD_RECENT_MENTIONS: function (e) {
            let { guildId: t } = e;
            (L = !0), null == t && w.guildFilter === N.NgX.THIS_SERVER && j({ guildFilter: N.NgX.ALL_SERVERS });
        },
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { hasMoreAfter: t, messages: n, isAfter: r } = e,
                i = l().map(n, G);
            B({ addedMessages: i }),
                r ? (R = R.concat(i)) : ((R = i), (D = {})),
                l().forEach(i, (e) => {
                    D[e.id] = !0;
                }),
                (L = !1),
                (x = t),
                (P = (0, d.zO)()),
                (M = !0);
        },
        LOAD_RECENT_MENTIONS_FAILURE: function () {
            L = !1;
        },
        SET_RECENT_MENTIONS_FILTER: j,
        CLEAR_MENTIONS: function (e) {
            H();
        },
        TRUNCATE_MENTIONS: function (e) {
            let { size: t } = e;
            B({ deletedMessages: R.slice(t) });
            for (let e = t; e < R.length; ++e) delete D[R[e].id];
            let n = R.length;
            n > (R = R.slice(0, t)).length && (x = !0);
        },
        CHANNEL_SELECT: function () {
            if (w.guildFilter !== N.NgX.THIS_SERVER) return !1;
            M = !1;
        },
        CONNECTION_OPEN: H,
        GUILD_DELETE: function (e) {
            let { guild: t } = e,
                n = [];
            (R = l().filter(R, (e) => {
                let r = v.Z.getChannel(e.channel_id);
                return (null != r && r.getGuildId() !== t.id) || (delete D[e.id], n.push(e), !1);
            })),
                B({ deletedMessages: n });
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e,
                r = A.default.getCurrentUser();
            if (
                null == r ||
                !(0, p.Hl)({
                    rawMessage: n,
                    userId: r.id,
                    suppressRoles: !1,
                    suppressEveryone: !1
                })
            )
                return !1;
            let i = Z(n, t);
            if (null == i) return !1;
            (R = R.slice()).unshift(i), (D[i.id] = !0), B({ addedMessages: [i] });
        },
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id;
            if (null == D[String(t)]) return !1;
            let n = l().findIndex(R, (e) => {
                    let { id: n } = e;
                    return n === t;
                }),
                r = (R = R.slice())[n];
            null != r && (R[n] = (0, _.wi)(r, e.message));
        },
        MESSAGE_DELETE: V,
        RECENT_MENTION_DELETE: V,
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t } = e;
            l().forEach(t, F);
        },
        CHANNEL_DELETE: W,
        THREAD_DELETE: W,
        RELATIONSHIP_ADD: Y,
        RELATIONSHIP_REMOVE: Y,
        RELATIONSHIP_UPDATE: Y,
        MENTION_MODAL_OPEN: function () {
            k = !0;
        },
        MENTION_MODAL_CLOSE: function () {
            k = !1;
        },
        SET_RECENT_MENTIONS_STALE: function (e) {
            U = !0;
        }
    }));
