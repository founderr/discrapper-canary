let r, i;
n(47120), n(724458);
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(189786),
    h = n(981631),
    p = n(354459);
let m = 0,
    g = 0,
    E = {},
    v = new Set(),
    I = new Map(),
    S = {},
    T = {},
    b = {},
    y = {};
function A(e, t) {
    return ''.concat(e, ':').concat(t);
}
function N(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function C(e) {
    var t;
    let n = null !== (t = E[h.ME]) && void 0 !== t ? t : {},
        r = {};
    c().each(n, (t, n) => {
        t.channelId !== e && (r[n] = t);
    }),
        (E[h.ME] = r);
}
function R(e) {
    var t;
    return null !== (t = I.get(e)) && void 0 !== t ? t : new Set();
}
function O(e, t, n) {
    let r = N(E, null != e ? e : h.ME),
        i = r[t],
        a = n(i);
    return i === a
        ? [!1, a, i]
        : (null != i &&
              (delete r[t],
              null != i.channelId && (delete N(S, i.channelId)[t], delete N(T, i.channelId)[t]),
              null != i.sessionId && delete N(b, t)[i.sessionId],
              !(function (e, t) {
                  let n = R(e);
                  if (!!n.has(t)) (n = new Set(n)).delete(t), 0 === n.size ? I.delete(e) : I.set(e, n);
              })(null != e ? e : h.ME, t)),
          null != a &&
              ((r[t] = a),
              null != a.channelId &&
                  ((N(S, a.channelId)[t] = a),
                  a.selfVideo &&
                      ((N(T, a.channelId)[t] = a),
                      !(function (e, t) {
                          let n = R(e);
                          if (!n.has(t)) (n = new Set(n)).add(t), I.set(e, n);
                      })(null != e ? e : h.ME, t))),
              null != a.sessionId && (N(b, t)[a.sessionId] = a)),
          [!0, a, i]);
}
function D(e, t) {
    return O(e, t.userId, (e) => {
        if (null == t.channelId) return null;
        {
            let n = {
                channelId: t.channelId,
                deaf: t.deaf,
                mute: t.mute,
                requestToSpeakTimestamp: t.requestToSpeakTimestamp,
                selfDeaf: t.selfDeaf,
                selfMute: t.selfMute,
                selfStream: t.selfStream,
                selfVideo: t.selfVideo,
                sessionId: t.sessionId,
                suppress: t.suppress,
                userId: t.userId,
                discoverable: t.discoverable
            };
            return null != e ? e.merge(n) : new _.Z(n);
        }
    });
}
function L(e) {
    let { guild: t } = e;
    c().forEach(E[t.id], (e) => {
        O(t.id, e.userId, () => null);
    }),
        delete E[t.id];
}
class x extends (a = d.ZP.Store) {
    getAllVoiceStates() {
        return E;
    }
    getVoiceStateVersion() {
        return g;
    }
    getVoiceStates(e) {
        return N(E, null != e ? e : h.ME);
    }
    getVoiceStatesForChannel(e) {
        return N(S, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return N(T, e);
    }
    getVoiceState(e, t) {
        return this.getVoiceStates(e)[t];
    }
    getDiscoverableVoiceState(e, t) {
        let n = this.getVoiceState(e, t);
        return null == n || !1 === n.discoverable ? null : n;
    }
    getVoiceStateForChannel(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return null === (t = N(S, e)) || void 0 === t ? void 0 : t[n];
    }
    getVoiceStateForUser(e) {
        return Object.values(N(b, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(N(b, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null === (n = N(b, e)) || void 0 === n ? void 0 : n[t]) : null;
    }
    getUserVoiceChannelId(e, t) {
        var n;
        return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, r);
        return null != t && null != i && t.sessionId === i ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        var t;
        return null !== (t = I.get(e)) && void 0 !== t ? t : v;
    }
    isCurrentClientInVoiceChannel() {
        var e;
        return null != i && (null === (e = b[r]) || void 0 === e ? void 0 : e[i]) != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== r || (null != i && n.sessionId === i));
    }
    hasVideo(e) {
        return Object.values(N(T, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, a;
        let s = null != i && (null === (a = b[r]) || void 0 === a ? void 0 : null === (n = a[i]) || void 0 === n ? void 0 : n.channelId);
        return t === r && e === s ? p.wR.DESKTOP : y[A(t, e)];
    }
    get userHasBeenMovedVersion() {
        return m;
    }
}
(l = 'VoiceStateStore'),
    (o = 'displayName') in (s = x)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new x(f.Z, {
        CONNECTION_OPEN: function (e) {
            let { user: t, sessionId: n } = e,
                a = null != r && r !== t.id;
            return a && ((E = {}), (S = {}), (b = {}), (T = {}), I.clear()), (r = t.id), (i = n), a;
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function () {
            (E = {}), (S = {}), (b = {}), (T = {}), I.clear();
        },
        OVERLAY_INITIALIZE: function (e) {
            let { voiceStates: t, user: n, sessionId: a } = e;
            for (let [e, n] of ((E = {}), (S = {}), (b = {}), (T = {}), Object.entries(t))) for (let [t, r] of Object.entries(n)) O(e, t, () => new _.Z(r));
            (r = n.id), (i = a);
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e,
                [i] = O(t, r, (e) => (null == e ? void 0 : e.set('channelId', n)));
            return i;
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let [n, r, a] = D(t.guildId, t);
                return n ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (m += 1), g++, !0) : e;
            }, !1);
        },
        GUILD_DELETE: L,
        GUILD_CREATE: L,
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            C(t.id);
        },
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            C(t);
        },
        PASSIVE_UPDATE_V2: function (e) {
            let t = !1;
            for (let n of e.voiceStates) {
                let [r] = D(e.guildId, n);
                t = t || r;
            }
            for (let n of e.removedVoiceStateUsers) O(e.guildId, n, () => null), (t = !0);
            return t && g++, t;
        },
        RTC_CONNECTION_PLATFORM: function (e) {
            let { userId: t, channelId: n, platform: r } = e;
            y[A(t, n)] = r;
        }
    }));
