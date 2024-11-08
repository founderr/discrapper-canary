n(653041), n(47120), n(724458);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(740504),
    c = n(853856),
    d = n(314897),
    f = n(592125),
    _ = n(984933),
    h = n(430824),
    p = n(981631);
let m = null,
    g = {},
    E = null;
function v() {
    return {
        _categories: [],
        null: []
    };
}
let I = v();
function S(e, t) {
    e.index = t;
}
function b(e) {
    let t = _.ZP.getChannels(e),
        n = v(),
        r = (e) => {
            var t;
            let { channel: r } = e;
            (null !== (t = n[null != r.parent_id ? r.parent_id : 'null']) && void 0 !== t ? t : n.null).push({
                channel: r,
                index: -1
            });
        };
    return (
        t[p.d4z.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({
                channel: t,
                index: -1
            }),
                (n[t.id] = []);
        }),
        t[_.sH].forEach(r),
        t[_.Zb].forEach(r),
        (0, u.Z)(n._categories, n).forEach(S),
        (g[e] = n),
        n
    );
}
function T() {
    (g = {}), null != m && b(m);
}
function y(e) {
    let {
        guild: { id: t }
    } = e;
    (g[t] = void 0), m === t && b(t);
}
function A(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (g[t] = void 0), m === t && b(t);
}
function N(e) {
    let { guildId: t } = e;
    (g[t] = void 0), t === m && b(t);
}
function C(e, t) {
    if (((E = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((g[n] = void 0), n === m && b(n), !0);
}
function R() {
    b(p.I_8);
}
class O extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.Z, d.default, f.Z, c.Z), this.syncWith([c.Z], R);
    }
    getCategories(e) {
        return null != e
            ? (function (e) {
                  let t = g[e];
                  return null != t ? t : b(e);
              })(e)
            : I;
    }
}
(s = 'GuildCategoryStore'),
    (a = 'displayName') in (i = O)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new O(l.Z, {
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (((m = null != t ? t : null), null == t || null != g[t])) return !1;
            b(t);
        },
        CONNECTION_OPEN: T,
        OVERLAY_INITIALIZE: T,
        CACHE_LOADED_LAZY: T,
        GUILD_CREATE: y,
        GUILD_UPDATE: y,
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t }
            } = e;
            delete g[t];
        },
        CHANNEL_CREATE: A,
        CHANNEL_DELETE: A,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let { guild_id: e } of t) null != e && ((g[e] = void 0), (n = !0), m === e && b(e));
            return n;
        },
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e;
            if (d.default.getId() !== n.id) return !1;
            (g[t] = void 0), t === m && b(t);
        },
        CURRENT_USER_UPDATE: function () {
            if (null == m) return !1;
            b(m);
        },
        GUILD_ROLE_CREATE: N,
        GUILD_ROLE_UPDATE: N,
        GUILD_ROLE_DELETE: N,
        IMPERSONATE_UPDATE: N,
        IMPERSONATE_STOP: N,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null == t && null != E ? C(f.Z.getChannel(E), null) : C(f.Z.getChannel(t), t);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { channelId: n, sessionId: r } = t;
                return d.default.getSessionId() !== r ? e : C(f.Z.getChannel(n), n) || e;
            }, !1);
        }
    }));
