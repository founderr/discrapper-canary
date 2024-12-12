var i,
    a,
    s = r(47120);
var o = r(724458);
var l = r(392711),
    u = r.n(l),
    c = r(442837),
    d = r(570140),
    f = r(592125),
    _ = r(271383),
    h = r(430824),
    p = r(594174),
    m = r(979651),
    g = r(700785),
    E = r(146085),
    v = r(590415);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.SPEAKER = 'speaker'), (e.MODERATOR = 'moderator');
})(i || (i = {}));
let T = {},
    b = {
        speaker: !1,
        moderator: !1
    };
function y(e, n) {
    let r = m.Z.getVoiceStateForChannel(n, e);
    return (0, v.gf)(r) === v.xO.ON_STAGE;
}
function S(e, n, r) {
    return g.BT({
        permission: E.yP,
        user: e,
        context: n,
        overwrites: r.permissionOverwrites,
        roles: h.Z.getRoles(n.id)
    });
}
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = f.Z.getChannel(n),
        a = null == i ? void 0 : i.getGuildId(),
        s = h.Z.getGuild(a);
    return null != s && null != i && i.isGuildStageVoice()
        ? {
              speaker: y(e, n),
              moderator: r ? S(e, s, i) : null
          }
        : b;
}
function N(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == T[n] && (T[n] = {});
    let i = A(e, n, r);
    return (T[n][e] = i), i;
}
function C(e, n) {
    var r;
    if (null == n) return !1;
    let i = f.Z.getChannel(n);
    return !!(null != i && i.isGuildStageVoice()) && (null === (r = T[n]) || void 0 === r || delete r[e], !0);
}
function R(e, n) {
    for (let r in T) {
        let i = f.Z.getBasicChannel(r);
        if (null != i && i.guild_id === n) delete T[r][e];
    }
    return !0;
}
function O(e) {
    let n = Object.values(f.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of n) delete T[e.id];
    return n.length > 0;
}
function D(e) {
    let { channels: n } = e;
    for (let e of n) delete T[e.id];
}
function L(e) {
    let { guildId: n } = e;
    O(n);
}
function x(e) {
    let { guildId: n, user: r } = e;
    return null != r && null != n && R(r.id, n);
}
function w(e) {
    let { voiceStates: n } = e;
    return (
        !u().isEmpty(T) &&
        n.reduce((e, n) => {
            let { userId: r, channelId: i } = n;
            return C(r, i) || e;
        }, !1)
    );
}
function P(e) {
    return O(e.guildId);
}
function M() {
    T = {};
}
function k(e) {
    let { guild: n } = e;
    for (let e in T) {
        let r = f.Z.getBasicChannel(e);
        (null == r || r.guild_id === n.id) && delete T[e];
    }
}
class U extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, f.Z, h.Z, p.default, m.Z);
    }
    isSpeaker(e, n) {
        return this.getPermissionsForUser(e, n).speaker;
    }
    isModerator(e, n) {
        var r;
        return null !== (r = this.getPermissionsForUser(e, n, !0).moderator) && void 0 !== r && r;
    }
    isAudienceMember(e, n) {
        let r = this.getPermissionsForUser(e, n);
        return !r.speaker && !r.moderator;
    }
    getPermissionsForUser(e, n) {
        var r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == n) return b;
        let a = null === (r = T[n]) || void 0 === r ? void 0 : r[e];
        if (null != a) return i && null == a.moderator ? N(e, n, !0) : a;
        return N(e, n, i);
    }
}
I(U, 'displayName', 'StageChannelRoleStore'),
    (n.ZP = new U(d.Z, {
        CHANNEL_UPDATES: D,
        CONNECTION_OPEN: M,
        GUILD_MEMBER_REMOVE: x,
        GUILD_MEMBER_UPDATE: x,
        GUILD_ROLE_UPDATE: L,
        PASSIVE_UPDATE_V2: P,
        VOICE_STATE_UPDATES: w,
        GUILD_CREATE: k,
        GUILD_DELETE: k
    }));
