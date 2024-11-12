n(47120), n(724458);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(592125),
    p = n(271383),
    h = n(430824),
    m = n(594174),
    g = n(979651),
    E = n(700785),
    v = n(146085),
    I = n(590415);
((a = r || (r = {})).SPEAKER = 'speaker'), (a.MODERATOR = 'moderator');
let b = {},
    S = {
        speaker: !1,
        moderator: !1
    };
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    null == b[t] && (b[t] = {});
    let r = (function (e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = _.Z.getChannel(t),
            o = null == s ? void 0 : s.getGuildId(),
            l = h.Z.getGuild(o);
        if (null == l || null == s || !s.isGuildStageVoice()) return S;
        return {
            speaker: (function (e, t) {
                let n = g.Z.getVoiceStateForChannel(t, e);
                return (0, I.gf)(n) === I.xO.ON_STAGE;
            })(e, t),
            moderator: a
                ? ((n = e),
                  (r = l),
                  (i = s),
                  E.BT({
                      permission: v.yP,
                      user: n,
                      context: r,
                      overwrites: i.permissionOverwrites,
                      roles: h.Z.getRoles(r.id)
                  }))
                : null
        };
    })(e, t, n);
    return (b[t][e] = r), r;
}
function y(e) {
    let t = Object.values(_.Z.getMutableGuildChannelsForGuild(e)).filter((e) => e.isGuildStageVoice());
    for (let e of t) delete b[e.id];
    return t.length > 0;
}
function A(e) {
    let { guildId: t, user: n } = e;
    return (
        null != n &&
        null != t &&
        (function (e, t) {
            for (let n in b) {
                let r = _.Z.getBasicChannel(n);
                if (null != r && r.guild_id === t) delete b[n][e];
            }
            return !0;
        })(n.id, t)
    );
}
function N(e) {
    let { guild: t } = e;
    for (let e in b) {
        let n = _.Z.getBasicChannel(e);
        (null == n || n.guild_id === t.id) && delete b[e];
    }
}
class C extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, _.Z, h.Z, m.default, g.Z);
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
        let i = null === (n = b[t]) || void 0 === n ? void 0 : n[e];
        if (null != i) return r && null == i.moderator ? T(e, t, !0) : i;
        return T(e, t, r);
    }
}
(l = 'StageChannelRoleStore'),
    (o = 'displayName') in (s = C)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.ZP = new C(f.Z, {
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            for (let e of t) delete b[e.id];
        },
        CONNECTION_OPEN: function () {
            b = {};
        },
        GUILD_MEMBER_REMOVE: A,
        GUILD_MEMBER_UPDATE: A,
        GUILD_ROLE_UPDATE: function (e) {
            let { guildId: t } = e;
            y(t);
        },
        PASSIVE_UPDATE_V2: function (e) {
            return y(e.guildId);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                !c().isEmpty(b) &&
                t.reduce((e, t) => {
                    let { userId: n, channelId: r } = t;
                    return (
                        (function (e, t) {
                            var n;
                            if (null == t) return !1;
                            let r = _.Z.getChannel(t);
                            return !!(null != r && r.isGuildStageVoice()) && (null === (n = b[t]) || void 0 === n || delete n[e], !0);
                        })(n, r) || e
                    );
                }, !1)
            );
        },
        GUILD_CREATE: N,
        GUILD_DELETE: N
    }));
