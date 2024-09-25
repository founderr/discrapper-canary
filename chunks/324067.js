var r,
    i = n(653041);
var a = n(47120);
var o = n(724458);
var s = n(442837),
    l = n(570140),
    u = n(740504),
    c = n(853856),
    d = n(314897),
    _ = n(592125),
    E = n(984933),
    f = n(430824),
    h = n(981631);
function p(e, t, n) {
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
let m = null,
    I = {},
    T = null;
function g() {
    return {
        _categories: [],
        null: []
    };
}
let S = g();
function A(e, t) {
    e.index = t;
}
function v(e) {
    let t = E.ZP.getChannels(e),
        n = g(),
        r = (e) => {
            var t;
            let { channel: r } = e;
            (null !== (t = n[null != r.parent_id ? r.parent_id : 'null']) && void 0 !== t ? t : n.null).push({
                channel: r,
                index: -1
            });
        };
    return (
        t[h.d4z.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({
                channel: t,
                index: -1
            }),
                (n[t.id] = []);
        }),
        t[E.sH].forEach(r),
        t[E.Zb].forEach(r),
        (0, u.Z)(n._categories, n).forEach(A),
        (I[e] = n),
        n
    );
}
function N() {
    (I = {}), null != m && v(m);
}
function O(e) {
    let {
        guild: { id: t }
    } = e;
    (I[t] = void 0), m === t && v(t);
}
function R(e) {
    let {
        guild: { id: t }
    } = e;
    delete I[t];
}
function C(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (I[t] = void 0), m === t && v(t);
}
function y(e) {
    let { channels: t } = e,
        n = !1;
    for (let { guild_id: e } of t) null != e && ((I[e] = void 0), (n = !0), m === e && v(e));
    return n;
}
function b(e) {
    let { guildId: t, user: n } = e;
    if (d.default.getId() !== n.id) return !1;
    (I[t] = void 0), t === m && v(t);
}
function L() {
    if (null == m) return !1;
    v(m);
}
function D(e) {
    let { guildId: t } = e;
    (I[t] = void 0), t === m && v(t);
}
function M(e, t) {
    if (((T = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((I[n] = void 0), n === m && v(n), !0);
}
function P(e) {
    let { channelId: t } = e;
    return null == t && null != T ? M(_.Z.getChannel(T), null) : M(_.Z.getChannel(t), t);
}
function U(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return d.default.getSessionId() !== r ? e : M(_.Z.getChannel(n), n) || e;
    }, !1);
}
function w(e) {
    let { guildId: t } = e;
    if (((m = null != t ? t : null), null == t || null != I[t])) return !1;
    v(t);
}
function x() {
    v(h.I_8);
}
function G(e) {
    let t = I[e];
    return null != t ? t : v(e);
}
class k extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(E.ZP, f.Z, d.default, _.Z, c.Z), this.syncWith([c.Z], x);
    }
    getCategories(e) {
        return null != e ? G(e) : S;
    }
}
p(k, 'displayName', 'GuildCategoryStore'),
    (t.Z = new k(l.Z, {
        CHANNEL_SELECT: w,
        CONNECTION_OPEN: N,
        OVERLAY_INITIALIZE: N,
        CACHE_LOADED_LAZY: N,
        GUILD_CREATE: O,
        GUILD_UPDATE: O,
        GUILD_DELETE: R,
        CHANNEL_CREATE: C,
        CHANNEL_DELETE: C,
        CHANNEL_UPDATES: y,
        GUILD_MEMBER_UPDATE: b,
        CURRENT_USER_UPDATE: L,
        GUILD_ROLE_CREATE: D,
        GUILD_ROLE_UPDATE: D,
        GUILD_ROLE_DELETE: D,
        IMPERSONATE_UPDATE: D,
        IMPERSONATE_STOP: D,
        VOICE_CHANNEL_SELECT: P,
        VOICE_STATE_UPDATES: U
    }));
