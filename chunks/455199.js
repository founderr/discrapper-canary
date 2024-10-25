n(733860), n(653041);
var i,
    a,
    s,
    r,
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    u = n(433517),
    d = n(379649),
    _ = n(570140),
    E = n(786761),
    I = n(572804),
    m = n(901461),
    f = n(814082),
    T = n(23750),
    h = n(314897),
    N = n(592125),
    p = n(375954),
    C = n(306680),
    g = n(699516),
    S = n(914010),
    A = n(9156),
    x = n(594174),
    R = n(981631);
let v = 'recentMentionFilterSettings',
    O = [],
    M = {},
    L = !1,
    Z = !0,
    b = u.K.get(v, {
        guildFilter: R.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    P = !1,
    D = 0,
    j = !1,
    U = !1;
function y(e) {
    if (e instanceof T.ZP) return e;
    let t = p.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, E.e5)(e);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, m.Z)(e) && !R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = N.Z.getChannel(t);
    if (null == n || n.type === R.d4z.DM || (b.guildFilter === R.NgX.THIS_SERVER && n.getGuildId() !== S.Z.getGuildId())) return null;
    let i = h.default.getId();
    if (g.Z.isBlockedForMessage(e) || (0, f.Z)(e, i)) return null;
    e = y(e);
    let a = !b.everyoneFilter,
        s = !b.roleFilter;
    return (0, I.ZP)({
        message: e,
        userId: i,
        suppressEveryone: a,
        suppressRoles: s
    })
        ? (U &&
              C.ZP.ackMessageId(n.id) !== e.id &&
              (0, I.ZP)({
                  message: e,
                  userId: i,
                  suppressEveryone: A.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: A.ZP.isSuppressRolesEnabled(n.getGuildId())
              }) &&
              (U = !1),
          e)
        : null;
}
function k(e) {
    if (null == M[e]) return !1;
    delete M[e],
        (O = o().filter(O, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function G(e) {
    let { id: t } = e;
    return k(t);
}
function F(e) {
    let t = { ...b };
    (b = o().defaults(o().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), b)), u.K.set(v, b);
    let n = (e, n) => t[e] !== b[e] && b[e] === n,
        i = n('guildFilter', R.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
    M = {};
    let a = [];
    i &&
        O.forEach((e) => {
            let t = B(e);
            null != t && (a.push(t), (M[t.id] = !0));
        }),
        0 === (O = a).length && (P = !1);
}
function w() {
    (O = []), (M = {}), (P = !1), (U = !1);
}
function V() {
    O = O.filter((e) => !g.Z.isBlockedForMessage(e));
}
function H(e) {
    let { channel: t } = e;
    O = o().filter(O, (e) => e.channel_id !== t.id || (delete M[e.id], !1));
}
class Y extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(x.default, N.Z, p.Z, C.ZP);
    }
    isOpen() {
        return j;
    }
    get hasLoadedEver() {
        return P;
    }
    get lastLoaded() {
        return D;
    }
    getMentions() {
        return P || O.length > 0 ? O : null;
    }
    hasMention(e) {
        return M[e];
    }
    get loading() {
        return L;
    }
    get hasMore() {
        return Z;
    }
    get guildFilter() {
        return b.guildFilter;
    }
    get everyoneFilter() {
        return b.everyoneFilter;
    }
    get roleFilter() {
        return b.roleFilter;
    }
    get mentionsAreStale() {
        return U;
    }
}
(r = 'RecentMentionsStore'),
    (s = 'displayName') in (a = Y)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new Y(_.Z, {
        LOAD_RECENT_MENTIONS: function (e) {
            let { guildId: t } = e;
            (L = !0), null == t && b.guildFilter === R.NgX.THIS_SERVER && F({ guildFilter: R.NgX.ALL_SERVERS });
        },
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { hasMoreAfter: t, messages: n, isAfter: i } = e,
                a = o().map(n, y);
            i ? (O = O.concat(a)) : ((O = a), (M = {})),
                o().forEach(a, (e) => {
                    M[e.id] = !0;
                }),
                (L = !1),
                (Z = t),
                (D = (0, d.zO)()),
                (P = !0);
        },
        LOAD_RECENT_MENTIONS_FAILURE: function () {
            L = !1;
        },
        SET_RECENT_MENTIONS_FILTER: F,
        CLEAR_MENTIONS: function (e) {
            w();
        },
        TRUNCATE_MENTIONS: function (e) {
            let { size: t } = e;
            for (let e = t; e < O.length; ++e) delete M[O[e].id];
            let n = O.length;
            n > (O = O.slice(0, t)).length && (Z = !0);
        },
        CHANNEL_SELECT: function () {
            if (b.guildFilter !== R.NgX.THIS_SERVER) return !1;
            P = !1;
        },
        CONNECTION_OPEN: w,
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            O = o().filter(O, (e) => {
                let n = N.Z.getChannel(e.channel_id);
                return (null != n && n.getGuildId() !== t.id) || (delete M[e.id], !1);
            });
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e,
                i = x.default.getCurrentUser();
            if (
                null == i ||
                !(0, I.Hl)({
                    rawMessage: n,
                    userId: i.id,
                    suppressRoles: !1,
                    suppressEveryone: !1
                })
            )
                return !1;
            let a = B(n, t);
            if (null == a) return !1;
            (O = O.slice()).unshift(a), (M[a.id] = !0);
        },
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id;
            if (null == M[String(t)]) return !1;
            let n = o().findIndex(O, (e) => {
                    let { id: n } = e;
                    return n === t;
                }),
                i = (O = O.slice())[n];
            null != i && (O[n] = (0, E.wi)(i, e.message));
        },
        MESSAGE_DELETE: G,
        RECENT_MENTION_DELETE: G,
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t } = e;
            o().forEach(t, k);
        },
        CHANNEL_DELETE: H,
        THREAD_DELETE: H,
        RELATIONSHIP_ADD: V,
        RELATIONSHIP_REMOVE: V,
        MENTION_MODAL_OPEN: function () {
            j = !0;
        },
        MENTION_MODAL_CLOSE: function () {
            j = !1;
        },
        SET_RECENT_MENTIONS_STALE: function (e) {
            U = !0;
        }
    }));
