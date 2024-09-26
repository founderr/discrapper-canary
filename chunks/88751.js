var r,
    i,
    a = n(47120);
var o = n(724458);
var s = n(392711),
    l = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(592125),
    _ = n(271383),
    E = n(430824),
    f = n(594174),
    h = n(979651),
    p = n(700785),
    m = n(146085),
    I = n(590415);
function T(e, t, n) {
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
!(function (e) {
    (e.SPEAKER = 'speaker'), (e.MODERATOR = 'moderator');
})(r || (r = {}));
let g = {},
    S = {
        speaker: !1,
        moderator: !1
    };
function A(e, t) {
    let n = h.Z.getVoiceStateForChannel(t, e);
    return (0, I.gf)(n) === I.xO.ON_STAGE;
}
function v(e, t, n) {
    return p.BT({
        permission: m.yP,
        user: e,
        context: t,
        overwrites: n.permissionOverwrites,
        roles: E.Z.getRoles(t.id)
    });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = d.Z.getChannel(t),
        i = null == r ? void 0 : r.getGuildId(),
        a = E.Z.getGuild(i);
    return null != a && null != r && r.isGuildStageVoice()
        ? {
              speaker: A(e, t),
              moderator: n ? v(e, a, r) : null
          }
        : S;
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == g[t] && (g[t] = {});
    let r = N(e, t, n);
    return (g[t][e] = r), r;
}
function R(e, t) {
    var n;
    if (null == t) return !1;
    let r = d.Z.getChannel(t);
    return !!(null != r && r.isGuildStageVoice()) && (null === (n = g[t]) || void 0 === n || delete n[e], !0);
}
function C(e, t) {
    for (let n in g) {
        let r = d.Z.getBasicChannel(n);
        if (null != r && r.guild_id === t) delete g[n][e];
    }
    return !0;
}
function y(e) {
    let t = Object.values(d.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete g[e.id];
    return t.length > 0;
}
function L(e) {
    let { channels: t } = e;
    for (let e of t) delete g[e.id];
}
function b(e) {
    let { guildId: t } = e;
    y(t);
}
function D(e) {
    let { guildId: t, user: n } = e;
    return null != n && null != t && C(n.id, t);
}
function M(e) {
    let { voiceStates: t } = e;
    return (
        !l().isEmpty(g) &&
        t.reduce((e, t) => {
            let { userId: n, channelId: r } = t;
            return R(n, r) || e;
        }, !1)
    );
}
function P(e) {
    return y(e.guildId);
}
function U() {
    g = {};
}
function w(e) {
    let { guild: t } = e;
    for (let e in g) {
        let n = d.Z.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete g[e];
    }
}
class x extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, d.Z, E.Z, f.default, h.Z);
    }
    isSpeaker(e, t) {
        return this.getPermissionsForUser(e, t).speaker;
    }
    isModerator(e, t) {
        var n;
        return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n;
    }
    isAudienceMember(e, t) {
        let n = this.getPermissionsForUser(e, t);
        return !n.speaker && !n.moderator;
    }
    getPermissionsForUser(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t) return S;
        let i = null === (n = g[t]) || void 0 === n ? void 0 : n[e];
        if (null != i) return r && null == i.moderator ? O(e, t, !0) : i;
        return O(e, t, r);
    }
}
T(x, 'displayName', 'StageChannelRoleStore'),
    (t.ZP = new x(c.Z, {
        CHANNEL_UPDATES: L,
        CONNECTION_OPEN: U,
        GUILD_MEMBER_REMOVE: D,
        GUILD_MEMBER_UPDATE: D,
        GUILD_ROLE_UPDATE: b,
        PASSIVE_UPDATE_V2: P,
        VOICE_STATE_UPDATES: M,
        GUILD_CREATE: w,
        GUILD_DELETE: w
    }));
