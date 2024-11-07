n(733860), n(653041);
var i,
    r,
    l,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    d = n(433517),
    u = n(379649),
    m = n(570140),
    h = n(786761),
    f = n(572804),
    p = n(901461),
    _ = n(814082),
    g = n(23750),
    E = n(314897),
    C = n(592125),
    I = n(375954),
    x = n(306680),
    N = n(699516),
    v = n(914010),
    T = n(9156),
    S = n(594174),
    A = n(981631);
let b = 'recentMentionFilterSettings',
    j = [],
    Z = {},
    R = !1,
    L = !0,
    P = d.K.get(b, {
        guildFilter: A.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    y = !1,
    O = 0,
    M = !1,
    k = !1;
function D(e) {
    if (e instanceof g.ZP) return e;
    let t = I.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, h.e5)(e);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, p.Z)(e) && !A.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = C.Z.getChannel(t);
    if (null == n || n.type === A.d4z.DM || (P.guildFilter === A.NgX.THIS_SERVER && n.getGuildId() !== v.Z.getGuildId())) return null;
    let i = E.default.getId();
    if (N.Z.isBlockedOrIgnoredForMessage(e) || (0, _.Z)(e, i)) return null;
    e = D(e);
    let r = !P.everyoneFilter,
        l = !P.roleFilter;
    return (0, f.ZP)({
        message: e,
        userId: i,
        suppressEveryone: r,
        suppressRoles: l
    })
        ? (k &&
              x.ZP.ackMessageId(n.id) !== e.id &&
              (0, f.ZP)({
                  message: e,
                  userId: i,
                  suppressEveryone: T.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: T.ZP.isSuppressRolesEnabled(n.getGuildId())
              }) &&
              (k = !1),
          e)
        : null;
}
function U(e) {
    if (null == Z[e]) return !1;
    delete Z[e],
        (j = s().filter(j, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function w(e) {
    let { id: t } = e;
    return U(t);
}
function F(e) {
    let t = { ...P };
    (P = s().defaults(s().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), P)), d.K.set(b, P);
    let n = (e, n) => t[e] !== P[e] && P[e] === n,
        i = n('guildFilter', A.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
    Z = {};
    let r = [];
    i &&
        j.forEach((e) => {
            let t = B(e);
            null != t && (r.push(t), (Z[t.id] = !0));
        }),
        0 === (j = r).length && (y = !1);
}
function G() {
    (j = []), (Z = {}), (y = !1), (k = !1);
}
function V() {
    j = j.filter((e) => !N.Z.isBlockedOrIgnoredForMessage(e));
}
function H(e) {
    let { channel: t } = e;
    j = s().filter(j, (e) => e.channel_id !== t.id || (delete Z[e.id], !1));
}
class z extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(S.default, C.Z, I.Z, x.ZP);
    }
    isOpen() {
        return M;
    }
    get hasLoadedEver() {
        return y;
    }
    get lastLoaded() {
        return O;
    }
    getMentions() {
        return y || j.length > 0 ? j : null;
    }
    hasMention(e) {
        return Z[e];
    }
    get loading() {
        return R;
    }
    get hasMore() {
        return L;
    }
    get guildFilter() {
        return P.guildFilter;
    }
    get everyoneFilter() {
        return P.everyoneFilter;
    }
    get roleFilter() {
        return P.roleFilter;
    }
    get mentionsAreStale() {
        return k;
    }
}
(a = 'RecentMentionsStore'),
    (l = 'displayName') in (r = z)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new z(m.Z, {
        LOAD_RECENT_MENTIONS: function (e) {
            let { guildId: t } = e;
            (R = !0), null == t && P.guildFilter === A.NgX.THIS_SERVER && F({ guildFilter: A.NgX.ALL_SERVERS });
        },
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { hasMoreAfter: t, messages: n, isAfter: i } = e,
                r = s().map(n, D);
            i ? (j = j.concat(r)) : ((j = r), (Z = {})),
                s().forEach(r, (e) => {
                    Z[e.id] = !0;
                }),
                (R = !1),
                (L = t),
                (O = (0, u.zO)()),
                (y = !0);
        },
        LOAD_RECENT_MENTIONS_FAILURE: function () {
            R = !1;
        },
        SET_RECENT_MENTIONS_FILTER: F,
        CLEAR_MENTIONS: function (e) {
            G();
        },
        TRUNCATE_MENTIONS: function (e) {
            let { size: t } = e;
            for (let e = t; e < j.length; ++e) delete Z[j[e].id];
            let n = j.length;
            n > (j = j.slice(0, t)).length && (L = !0);
        },
        CHANNEL_SELECT: function () {
            if (P.guildFilter !== A.NgX.THIS_SERVER) return !1;
            y = !1;
        },
        CONNECTION_OPEN: G,
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            j = s().filter(j, (e) => {
                let n = C.Z.getChannel(e.channel_id);
                return (null != n && n.getGuildId() !== t.id) || (delete Z[e.id], !1);
            });
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e,
                i = S.default.getCurrentUser();
            if (
                null == i ||
                !(0, f.Hl)({
                    rawMessage: n,
                    userId: i.id,
                    suppressRoles: !1,
                    suppressEveryone: !1
                })
            )
                return !1;
            let r = B(n, t);
            if (null == r) return !1;
            (j = j.slice()).unshift(r), (Z[r.id] = !0);
        },
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id;
            if (null == Z[String(t)]) return !1;
            let n = s().findIndex(j, (e) => {
                    let { id: n } = e;
                    return n === t;
                }),
                i = (j = j.slice())[n];
            null != i && (j[n] = (0, h.wi)(i, e.message));
        },
        MESSAGE_DELETE: w,
        RECENT_MENTION_DELETE: w,
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t } = e;
            s().forEach(t, U);
        },
        CHANNEL_DELETE: H,
        THREAD_DELETE: H,
        RELATIONSHIP_ADD: V,
        RELATIONSHIP_REMOVE: V,
        MENTION_MODAL_OPEN: function () {
            M = !0;
        },
        MENTION_MODAL_CLOSE: function () {
            M = !1;
        },
        SET_RECENT_MENTIONS_STALE: function (e) {
            k = !0;
        }
    }));
