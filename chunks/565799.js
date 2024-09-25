var r,
    i = n(47120);
var a = n(724458);
var o = n(653041);
var s = n(348327),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(759174),
    E = n(570140),
    f = n(569545),
    h = n(199902),
    p = n(314897),
    m = n(592125),
    I = n(430824),
    T = n(496675),
    g = n(699516),
    S = n(606304),
    A = n(594174),
    v = n(979651),
    N = n(938475),
    O = n(501655),
    R = n(88751),
    C = n(427679);
function y(e, t, n) {
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
let b = 'NO_GUILD',
    L = new _.h(
        (e) => [P(e)],
        (e) => e.id
    ),
    D = new Set(),
    M = {};
function P(e) {
    var t;
    return null !== (t = e.getGuildId()) && void 0 !== t ? t : b;
}
function U(e) {
    return L.values(null != e ? e : void 0, !0).map((e) => {
        let { id: t } = e;
        return t;
    });
}
function w(e) {
    !D.has(e) &&
        (D.add(e),
        c()(m.Z.getMutableGuildChannelsForGuild(e))
            .values()
            .forEach((e) => {
                k(e) && L.set(e.id, e);
            }));
}
function x(e) {
    let t = M[e];
    if (null != t) return t;
    let n = m.Z.getChannel(e);
    return null != n && n.isGuildStageVoice() ? ((w(n.guild_id), k(n)) ? G(e) : null) : null;
}
function G(e) {
    let t = M[e];
    return null == t && ((t = new O.ZP(e)), (M[e] = t), t.rebuild()), t;
}
function k(e) {
    return null != e && e.isGuildStageVoice() && N.ZP.countVoiceStatesForChannel(e.id) > 0;
}
function B(e, t) {
    let n = m.Z.getChannel(e);
    return null != n && n.isGuildStageVoice() ? (0 === t.size() ? H(n.id) : null == L.get(n.id) && L.set(n.id, n)) : H(e);
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U();
    return t.reduce((t, n) => {
        let r = G(n);
        return e(r) ? (B(n, r), !0) : t;
    }, !1);
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U();
    return F((t) => t.updateParticipant(e), t);
}
function V(e) {
    for (let t of L.values(e)) L.delete(t.id), delete M[t.id];
    D.delete(e);
}
function H(e) {
    return null != e && (delete M[e], L.delete(e), !0);
}
function Y() {
    D.clear(), L.clear(), (M = {});
}
function j(e, t, n) {
    if (null == n || e.has(n)) return;
    let r = m.Z.getChannel(n);
    if (!!(null == r ? void 0 : r.isGuildStageVoice())) t.add(n), e.add(n);
}
function W(e) {
    let { voiceStates: t } = e,
        n = new Set();
    return t.reduce((e, t) => {
        if (null == t.guildId || !D.has(t.guildId)) return e;
        let r = new Set();
        return (j(n, r, t.oldChannelId), j(n, r, t.channelId), 0 === r.size) ? e : Z(t.userId, Array.from(r)) || e;
    }, !1);
}
function K(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) for (let t of e.members) n = Z(t.user.id) || n;
    return n;
}
function z(e) {
    let t = !1;
    for (let n of U(e.guildId)) t = G(n).rebuild() || t;
    return t;
}
function q(e) {
    let { user: t } = e;
    return Z(t.id);
}
function Q(e) {
    let { relationship: t } = e;
    return Z(t.id);
}
function X(e) {
    let { guild: t } = e;
    V(t.id);
}
function $(e) {
    let { channelId: t, guildId: n, userId: r } = e;
    return !!(null != n && D.has(n)) && Z(r, [t]);
}
function J(e) {
    let { streamKey: t } = e,
        { channelId: n, guildId: r, ownerId: i } = (0, f.my)(t);
    return !!(null != r && D.has(r)) && Z(i, [n]);
}
function ee(e) {
    let {
        channel: { id: t }
    } = e;
    return H(t);
}
function et(e) {
    let { channels: t } = e,
        n = t.reduce((e, t) => {
            if (!t.isGuildStageVoice() || !D.has(t.guild_id)) return e;
            let n = L.get(t.id);
            return null == n || l()(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), L.set(t.id, t), e);
        }, []);
    return F((e) => e.rebuild(), n), n.length > 0;
}
function en(e) {
    let { guildId: t } = e;
    if (D.has(t)) return F((e) => e.rebuild(), U(t));
}
let er = [];
class ei extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(p.default, A.default, m.Z, S.Z, v.Z, T.Z, N.ZP, I.Z, R.ZP, g.Z, C.Z, h.Z);
    }
    getParticipantsVersion(e) {
        var t, n;
        return null == e ? -1 : null !== (n = null === (t = x(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1;
    }
    getMutableParticipants(e, t) {
        var n, r;
        return null == e ? er : null !== (r = null === (n = x(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : er;
    }
    getMutableRequestToSpeakParticipants(e) {
        var t, n;
        return null !== (n = null === (t = x(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : er;
    }
    getRequestToSpeakParticipantsVersion(e) {
        var t, n;
        return null !== (n = null === (t = x(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1;
    }
    getParticipantCount(e, t) {
        var n, r;
        return null !== (r = null === (n = x(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0;
    }
    getChannels(e) {
        return w(null != e ? e : b), L.values(null != e ? e : b);
    }
    getChannelsVersion() {
        return L.version;
    }
    getParticipant(e, t) {
        var n, r;
        return null !== (r = null === (n = x(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null;
    }
}
y(ei, 'displayName', 'StageChannelParticipantStore'),
    (t.Z = new ei(E.Z, {
        CONNECTION_OPEN: Y,
        OVERLAY_INITIALIZE: Y,
        VOICE_STATE_UPDATES: W,
        CHANNEL_DELETE: ee,
        GUILD_MEMBERS_CHUNK_BATCH: K,
        USER_UPDATE: q,
        GUILD_MEMBER_REMOVE: q,
        GUILD_MEMBER_UPDATE: q,
        CHANNEL_UPDATES: et,
        GUILD_ROLE_UPDATE: en,
        RTC_CONNECTION_VIDEO: $,
        STREAM_CLOSE: J,
        STREAM_DELETE: J,
        RELATIONSHIP_ADD: Q,
        RELATIONSHIP_REMOVE: Q,
        GUILD_CREATE: X,
        GUILD_DELETE: X,
        PASSIVE_UPDATE_V2: z
    }));
