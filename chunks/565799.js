n(47120), n(724458), n(653041);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(759174),
    _ = n(570140),
    p = n(569545),
    h = n(199902),
    m = n(314897),
    g = n(592125),
    E = n(430824),
    v = n(496675),
    b = n(699516),
    I = n(606304),
    T = n(594174),
    S = n(979651),
    y = n(938475),
    A = n(501655),
    N = n(88751),
    C = n(427679);
let R = 'NO_GUILD',
    O = new f.h(
        (e) => [
            (function (e) {
                var t;
                return null !== (t = e.getGuildId()) && void 0 !== t ? t : R;
            })(e)
        ],
        (e) => e.id
    ),
    D = new Set(),
    L = {};
function x(e) {
    return O.values(null != e ? e : void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function w(e) {
    !D.has(e) &&
        (D.add(e),
        c()(g.Z.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                k(e) && O.set(e.id, e);
            }));
}
function M(e) {
    let t = L[e];
    if (null != t) return t;
    let n = g.Z.getChannel(e);
    return null != n && n.isGuildStageVoice() ? ((w(n.guild_id), k(n)) ? P(e) : null) : null;
}
function P(e) {
    let t = L[e];
    return null == t && ((t = new A.ZP(e)), (L[e] = t), t.rebuild()), t;
}
function k(e) {
    return null != e && e.isGuildStageVoice() && y.ZP.countVoiceStatesForChannel(e.id) > 0;
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x();
    return t.reduce((t, n) => {
        let r = P(n);
        return e(r)
            ? (!(function (e, t) {
                  let n = g.Z.getChannel(e);
                  null != n && n.isGuildStageVoice() ? (0 === t.size() ? B(n.id) : null == O.get(n.id) && O.set(n.id, n)) : B(e);
              })(n, r),
              !0)
            : t;
    }, !1);
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x();
    return U((t) => t.updateParticipant(e), t);
}
function B(e) {
    return null != e && (delete L[e], O.delete(e), !0);
}
function Z() {
    D.clear(), O.clear(), (L = {});
}
function F(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = g.Z.getChannel(n);
    if (!!(null == r ? void 0 : r.isGuildStageVoice())) t.add(n), e.add(n);
}
function V(e) {
    let { user: t } = e;
    return G(t.id);
}
function j(e) {
    let { relationship: t } = e;
    return G(t.id);
}
function H(e) {
    let { guild: t } = e;
    !(function (e) {
        for (let t of O.values(e)) O.delete(t.id), delete L[t.id];
        D.delete(e);
    })(t.id);
}
function Y(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, p.my)(t);
    return !!(null != r && D.has(r)) && G(i, [n]);
}
let W = [];
class K extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(m.default, T.default, g.Z, I.Z, S.Z, v.Z, y.ZP, E.Z, N.ZP, b.Z, C.Z, h.Z);
    }
    getParticipantsVersion(e) {
        var t, n;
        return null == e ? -1 : null !== (n = null === (t = M(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1;
    }
    getMutableParticipants(e, t) {
        var n, r;
        return null == e ? W : null !== (r = null === (n = M(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : W;
    }
    getMutableRequestToSpeakParticipants(e) {
        var t, n;
        return null !== (n = null === (t = M(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : W;
    }
    getRequestToSpeakParticipantsVersion(e) {
        var t, n;
        return null !== (n = null === (t = M(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1;
    }
    getParticipantCount(e, t) {
        var n, r;
        return null !== (r = null === (n = M(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0;
    }
    getChannels(e) {
        return w(null != e ? e : R), O.values(null != e ? e : R);
    }
    getChannelsVersion() {
        return O.version;
    }
    getParticipant(e, t) {
        var n, r;
        return null !== (r = null === (n = M(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null;
    }
}
(s = 'StageChannelParticipantStore'),
    (a = 'displayName') in (i = K)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new K(_.Z, {
        CONNECTION_OPEN: Z,
        OVERLAY_INITIALIZE: Z,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = new Set();
            return t.reduce((e, t) => {
                if (null == t.guildId || !D.has(t.guildId)) return e;
                let r = new Set();
                return (F(n, r, t.oldChannelId), F(n, r, t.channelId), 0 === r.size) ? e : G(t.userId, Array.from(r)) || e;
            }, !1);
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t }
            } = e;
            return B(t);
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e,
                n = !1;
            for (let e of t) for (let t of e.members) n = G(t.user.id) || n;
            return n;
        },
        USER_UPDATE: V,
        GUILD_MEMBER_REMOVE: V,
        GUILD_MEMBER_UPDATE: V,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = t.reduce((e, t) => {
                    if (!t.isGuildStageVoice() || !D.has(t.guild_id)) return e;
                    let n = O.get(t.id);
                    return null == n || l()(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), O.set(t.id, t), e);
                }, []);
            return U((e) => e.rebuild(), n), n.length > 0;
        },
        GUILD_ROLE_UPDATE: function (e) {
            let { guildId: t } = e;
            if (D.has(t)) return U((e) => e.rebuild(), x(t));
        },
        RTC_CONNECTION_VIDEO: function (e) {
            let { channelId: t, guildId: n, userId: r } = e;
            return !!(null != n && D.has(n)) && G(r, [t]);
        },
        STREAM_CLOSE: Y,
        STREAM_DELETE: Y,
        RELATIONSHIP_ADD: j,
        RELATIONSHIP_REMOVE: j,
        RELATIONSHIP_UPDATE: j,
        GUILD_CREATE: H,
        GUILD_DELETE: H,
        PASSIVE_UPDATE_V2: function (e) {
            let t = !1;
            for (let n of x(e.guildId)) t = P(n).rebuild() || t;
            return t;
        }
    }));
