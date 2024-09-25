var r,
    i = n(733860);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(433517),
    c = n(379649),
    d = n(570140),
    _ = n(786761),
    E = n(572804),
    f = n(901461),
    h = n(814082),
    p = n(23750),
    m = n(314897),
    I = n(592125),
    T = n(375954),
    g = n(306680),
    S = n(699516),
    A = n(914010),
    v = n(9156),
    N = n(594174),
    O = n(981631);
function R(e, t, n) {
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
let C = 'recentMentionFilterSettings',
    y = [],
    b = {},
    L = !1,
    D = !0,
    M = u.K.get(C, {
        guildFilter: O.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    P = !1,
    U = 0,
    w = !1,
    x = !1;
function G() {
    w = !0;
}
function k() {
    w = !1;
}
function B(e) {
    let { guildId: t } = e;
    (L = !0), null == t && M.guildFilter === O.NgX.THIS_SERVER && q({ guildFilter: O.NgX.ALL_SERVERS });
}
function F(e) {
    if (e instanceof p.ZP) return e;
    let t = T.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, _.e5)(e);
}
function Z(e) {
    let { hasMoreAfter: t, messages: n, isAfter: r } = e,
        i = s().map(n, F);
    r ? (y = y.concat(i)) : ((y = i), (b = {})),
        s().forEach(i, (e) => {
            b[e.id] = !0;
        }),
        (L = !1),
        (D = t),
        (U = (0, c.zO)()),
        (P = !0);
}
function V() {
    L = !1;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, f.Z)(e) && !O.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = I.Z.getChannel(t);
    if (null == n || n.type === O.d4z.DM || (M.guildFilter === O.NgX.THIS_SERVER && n.getGuildId() !== A.Z.getGuildId())) return null;
    let r = m.default.getId();
    if (S.Z.isBlockedForMessage(e) || (0, h.Z)(e, r)) return null;
    e = F(e);
    let i = !M.everyoneFilter,
        a = !M.roleFilter;
    return (0, E.ZP)({
        message: e,
        userId: r,
        suppressEveryone: i,
        suppressRoles: a
    })
        ? (x &&
              g.ZP.ackMessageId(n.id) !== e.id &&
              (0, E.ZP)({
                  message: e,
                  userId: r,
                  suppressEveryone: v.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: v.ZP.isSuppressRolesEnabled(n.getGuildId())
              }) &&
              (x = !1),
          e)
        : null;
}
function Y(e) {
    let { channelId: t, message: n } = e,
        r = N.default.getCurrentUser();
    if (
        null == r ||
        !(0, E.Hl)({
            rawMessage: n,
            userId: r.id,
            suppressRoles: !1,
            suppressEveryone: !1
        })
    )
        return !1;
    let i = H(n, t);
    if (null == i) return !1;
    (y = y.slice()).unshift(i), (b[i.id] = !0);
}
function j(e) {
    let t = e.message.id;
    if (null == b[String(t)]) return !1;
    let n = s().findIndex(y, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        r = (y = y.slice())[n];
    null != r && (y[n] = (0, _.wi)(r, e.message));
}
function W(e) {
    if (null == b[e]) return !1;
    delete b[e],
        (y = s().filter(y, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function K(e) {
    let { id: t } = e;
    return W(t);
}
function z(e) {
    let { ids: t } = e;
    s().forEach(t, W);
}
function q(e) {
    let t = { ...M };
    (M = s().defaults(s().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), M)), u.K.set(C, M);
    let n = (e, n) => t[e] !== M[e] && M[e] === n,
        r = n('guildFilter', O.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
    b = {};
    let i = [];
    r &&
        y.forEach((e) => {
            let t = H(e);
            null != t && (i.push(t), (b[t.id] = !0));
        }),
        0 === (y = i).length && (P = !1);
}
function Q() {
    if (M.guildFilter !== O.NgX.THIS_SERVER) return !1;
    P = !1;
}
function X() {
    (y = []), (b = {}), (P = !1), (x = !1);
}
function $(e) {
    let { guild: t } = e;
    y = s().filter(y, (e) => {
        let n = I.Z.getChannel(e.channel_id);
        return (null != n && n.getGuildId() !== t.id) || (delete b[e.id], !1);
    });
}
function J() {
    y = y.filter((e) => !S.Z.isBlockedForMessage(e));
}
function ee(e) {
    let { channel: t } = e;
    y = s().filter(y, (e) => e.channel_id !== t.id || (delete b[e.id], !1));
}
function et(e) {
    X();
}
function en(e) {
    let { size: t } = e;
    for (let e = t; e < y.length; ++e) delete b[y[e].id];
    let n = y.length;
    n > (y = y.slice(0, t)).length && (D = !0);
}
function er(e) {
    x = !0;
}
class ei extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(N.default, I.Z, T.Z, g.ZP);
    }
    isOpen() {
        return w;
    }
    get hasLoadedEver() {
        return P;
    }
    get lastLoaded() {
        return U;
    }
    getMentions() {
        return P || y.length > 0 ? y : null;
    }
    hasMention(e) {
        return b[e];
    }
    get loading() {
        return L;
    }
    get hasMore() {
        return D;
    }
    get guildFilter() {
        return M.guildFilter;
    }
    get everyoneFilter() {
        return M.everyoneFilter;
    }
    get roleFilter() {
        return M.roleFilter;
    }
    get mentionsAreStale() {
        return x;
    }
}
R(ei, 'displayName', 'RecentMentionsStore'),
    (t.Z = new ei(d.Z, {
        LOAD_RECENT_MENTIONS: B,
        LOAD_RECENT_MENTIONS_SUCCESS: Z,
        LOAD_RECENT_MENTIONS_FAILURE: V,
        SET_RECENT_MENTIONS_FILTER: q,
        CLEAR_MENTIONS: et,
        TRUNCATE_MENTIONS: en,
        CHANNEL_SELECT: Q,
        CONNECTION_OPEN: X,
        GUILD_DELETE: $,
        MESSAGE_CREATE: Y,
        MESSAGE_UPDATE: j,
        MESSAGE_DELETE: K,
        RECENT_MENTION_DELETE: K,
        MESSAGE_DELETE_BULK: z,
        CHANNEL_DELETE: ee,
        THREAD_DELETE: ee,
        RELATIONSHIP_ADD: J,
        RELATIONSHIP_REMOVE: J,
        MENTION_MODAL_OPEN: G,
        MENTION_MODAL_CLOSE: k,
        SET_RECENT_MENTIONS_STALE: er
    }));
