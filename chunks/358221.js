n(47120), n(653041), n(724458);
var r,
    i = n(512722),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(317381),
    d = n(710845),
    f = n(258609),
    _ = n(569545),
    p = n(199902),
    h = n(314897),
    m = n(523746),
    g = n(592125),
    E = n(944486),
    v = n(606304),
    I = n(594174),
    T = n(33039),
    b = n(979651),
    S = n(413523),
    y = n(354459),
    A = n(981631);
function N(e, t, n) {
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
let C = new d.Z('ChannelRTCStore'),
    R = Object.freeze([]),
    O = [],
    D = {},
    L = {},
    x = {},
    w = {},
    P = {},
    M = {},
    k = {},
    U = {},
    B = {},
    G = {},
    Z = {};
function F(e) {
    let t = D[e];
    return null == t && ((t = new S.ZP(e)), (D[e] = t)), t;
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return t.reduce(
        (t, n) =>
            e(F(n))
                ? ((function (e) {
                      let t = F(e);
                      if (0 === t.size()) return;
                      let n = er(e) || z(t) ? A.WtW.VIDEO : A.WtW.VOICE;
                      n === A.WtW.VOICE ? (delete w[e], delete P[e]) : (w[e] = n);
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = F(e);
                      if (0 === n.size() || E.Z.getVoiceChannelId() !== e) {
                          K(e, null);
                          return;
                      }
                      let r = y.dF.NONE,
                          i = n.toArray(S.sI.STREAM).find((e) => e.type === y.fO.STREAM && p.Z.getActiveStreamForStreamKey(e.id));
                      if (null != i) a()(i.type === y.fO.STREAM, 'Impossible condition'), (r = i.id);
                      else if (1 === n.size()) r = t;
                      else if (1 === n.size(S.sI.VIDEO)) {
                          let [e] = n.toArray(S.sI.VIDEO);
                          r = e.id;
                      } else {
                          var s;
                          let e = n.toArray().find((e) => e.type === y.fO.USER && e.id !== t && !e.ringing);
                          r = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t;
                      }
                      let [o] = H(e);
                      if (o !== y.dF.AUTO && o !== y.dF.NONE) {
                          let e = n.getParticipant(o);
                          (null == e || (e.type === y.fO.STREAM && null == p.Z.getActiveStreamForStreamKey(e.id))) && (o = y.dF.NONE);
                      }
                      K(e, [o, r]);
                  })(n),
                  !0)
                : t,
        !1
    );
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return V((t) => t.updateParticipant(e), t);
}
function H(e) {
    var t;
    let n = g.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) ? y.dF.AUTO : y.dF.NONE;
    return null !== (t = L[e]) && void 0 !== t ? t : [r, y.dF.NONE];
}
function Y(e) {
    if (null == L[e]) return !1;
    let [t] = L[e];
    return t !== y.dF.NONE;
}
function W(e) {
    null == x[e] &&
        (x[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let t = x[e],
        n = performance.now(),
        r = Y(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    t.lastUpdate = n;
}
function K(e, t) {
    W(e);
    let n = Y(e);
    null == t ? delete L[e] : (L[e] = t), n !== Y(e) && x[e].toggleCount++;
}
function z(e) {
    return e.size(S.sI.STREAM) > 0 || e.size(S.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function q(e) {
    delete D[e], delete L[e], delete w[e], delete P[e];
}
function Q() {
    return V(
        (e) => e.rebuild(),
        (function () {
            let e = [],
                t = E.Z.getChannelId();
            null != t && e.push(t);
            let n = E.Z.getVoiceChannelId();
            null != n && !e.includes(n) && e.push(n);
            let r = f.Z.getRemoteSessionId(),
                i = b.Z.getVoiceStateForSession(h.default.getId(), r);
            (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), o().difference(O, e).forEach(q);
            let a = o().difference(e, O);
            return (O = e), a;
        })()
    );
}
function X() {
    return V((e) => e.updateEmbeddedActivities());
}
function J(e) {
    let { userId: t } = e;
    return V((e) => e.updateParticipantSpeaking(t));
}
function $(e) {
    let { user: t } = e;
    return j(t.id);
}
function ee(e) {
    let { channelId: t } = e;
    return V((e) => e.rebuild(), [t]);
}
function et(e) {
    let {
        channel: { id: t }
    } = e;
    return delete U[t], delete B[t], delete G[t], q(t);
}
function en(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.my)(t);
    return j(r, [n]);
}
function er(e) {
    var t;
    return !!(null === (t = g.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal());
}
class ei extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(p.Z, h.default, m.Z, g.Z, c.ZP, E.Z, v.Z, I.default, T.Z, b.Z), this.syncWith([c.ZP], X), this.syncWith([f.Z], Q), (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 && Object.assign(k, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return F(e).version;
    }
    getParticipants(e) {
        var t;
        return null !== (t = F(e).toArray()) && void 0 !== t ? t : R;
    }
    getSpeakingParticipants(e) {
        var t;
        return null !== (t = F(e).toArray(S.sI.SPEAKING)) && void 0 !== t ? t : R;
    }
    getFilteredParticipants(e) {
        return k[e] ? F(e).toArray(S.sI.FILTERED) : F(e).toArray();
    }
    getVideoParticipants(e) {
        var t;
        return null !== (t = F(e).toArray(S.sI.VIDEO)) && void 0 !== t ? t : R;
    }
    getStreamParticipants(e) {
        var t;
        return null !== (t = F(e).toArray(S.sI.STREAM)) && void 0 !== t ? t : R;
    }
    getActivityParticipants(e) {
        var t;
        return null !== (t = F(e).toArray(S.sI.ACTIVITY)) && void 0 !== t ? t : R;
    }
    getParticipant(e, t) {
        return F(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = F(e);
        return t.size() - t.size(S.sI.STREAM) - t.size(S.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null === (t = M[e]) || void 0 === t || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null !== (t = k[e]) && void 0 !== t && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = H(e);
        return t === y.dF.NONE ? null : t !== y.dF.AUTO ? t : n === y.dF.NONE || n === y.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : F(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = x[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount
              };
    }
    getMode(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t ? t : er(e) ? A.WtW.VIDEO : A.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.IlC.APP;
        if (__OVERLAY__) return A.AEg.NORMAL;
        let i = er(e);
        return null !== (n = null === (t = P[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : i ? A.AEg.NO_CHAT : A.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null !== (t = U[e]) && void 0 !== t && t;
    }
    getAllChatOpen() {
        return U;
    }
    getParticipantsListOpen(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.IlC.APP;
        return Object.values(P).some((t) => t[e] === A.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return G[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return Z[e];
    }
}
N(ei, 'displayName', 'ChannelRTCStore'),
    N(ei, 'persistKey', 'ChannelRTCStore'),
    (t.Z = new ei(u.Z, {
        CONNECTION_OPEN: function () {
            for (let e of O) q(e);
            Q();
        },
        CONNECTION_OPEN_SUPPLEMENTAL: Q,
        THREAD_LIST_SYNC: Q,
        OVERLAY_INITIALIZE: Q,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t, currentVoiceChannelId: n } = e;
            return null != t ? delete x[t] : null != n && (delete U[n], delete G[n], W(n)), Q();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t, messageId: n } = e,
                r = Q(),
                i = g.Z.getChannel(t);
            return null == t || null == n || ((null == i ? void 0 : i.type) !== A.d4z.GUILD_VOICE && (null == i ? void 0 : i.type) !== A.d4z.GUILD_STAGE_VOICE) || U[t] ? r : ((B[t] = !1), (U[t] = !0), !0);
        },
        CHANNEL_RTC_ACTIVE_CHANNELS: Q,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t, initial: n } = e;
            return t.reduce((e, t) => {
                let { userId: r, channelId: i } = t;
                return n && null != i && !O.includes(i) ? e : j(r) || e;
            }, !1);
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (t.type === A.d4z.GROUP_DM) {
                let e = t.originChannelId;
                if (null != e) {
                    var n, r;
                    return (P[t.id] = { [A.IlC.APP]: null !== (r = null === (n = P[e]) || void 0 === n ? void 0 : n[A.IlC.APP]) && void 0 !== r ? r : A.AEg.NORMAL }), !0;
                }
            }
            return !1;
        },
        CHANNEL_DELETE: et,
        THREAD_DELETE: et,
        CALL_CREATE: ee,
        CALL_UPDATE: ee,
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            return q(t);
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
            let { channelId: t, id: n } = e,
                r = F(t);
            null == n &&
                r.toArray(S.sI.STREAM).forEach((e) => {
                    (0, y._5)(e) && r.updateParticipant(e.user.id);
                });
            let [, i] = H(t);
            if ((K(t, [null != n ? n : y.dF.NONE, i]), (0, _.DB)(n))) {
                try {
                    let { ownerId: e } = (0, _.my)(n);
                    e === h.default.getId() && j(e, [t]);
                } catch (e) {
                    C.warn('INVALID STREAM KEY FORMAT '.concat(n), e);
                }
                !z(r) && (M[t] = !1);
            }
        },
        CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
            let { channelId: t, layout: n, appContext: r } = e;
            P[t] = {
                ...P[t],
                [r]: n
            };
        },
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
            let { channelId: t, participantsOpen: n } = e;
            M[t] = n;
        },
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
            let { channelId: t, voiceParticipantsHidden: n } = e;
            k[t] = n;
        },
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
            let { channelId: t, large: n } = e;
            G[t] = n;
        },
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
            let { channelId: t, dismissed: n } = e;
            Z[t] = n;
        },
        STREAM_UPDATE_SELF_HIDDEN: function (e) {
            let { channelId: t, selfStreamHidden: n } = e,
                r = h.default.getId();
            if (n) {
                let [e] = H(t);
                (0, _.DB)(e) && e.includes(r) && K(t, null);
            }
            j(r, [t]);
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
            let { channelId: t, chatOpen: n } = e;
            (U[t] = n), n && (B[t] = !1);
        },
        CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: function (e) {
            let { channelId: t, participantsListOpen: n } = e;
            (B[t] = n), n && (U[t] = !1);
        },
        RTC_CONNECTION_VIDEO: function (e) {
            let { channelId: t, userId: n } = e;
            return j(n, [t]);
        },
        RTC_CONNECTION_PLATFORM: function (e) {
            let { channelId: t, userId: n } = e;
            return j(n, [t]);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            let { userId: t } = e;
            return j(t);
        },
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
            let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
            return V((e) => e.updateParticipantQuality(n, r, i), [t]);
        },
        STREAM_CLOSE: en,
        STREAM_DELETE: en,
        STREAM_WATCH: function (e) {
            let { streamKey: t } = e,
                { channelId: n, ownerId: r } = (0, _.my)(t);
            return j(r, [n]);
        },
        SPEAKING: J,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: J,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: J,
        USER_UPDATE: $,
        GUILD_MEMBER_UPDATE: $,
        GUILD_DELETE: function (e) {
            let { guild: t } = e,
                n = [];
            if (
                (o().forEach(O, (e) => {
                    let r = g.Z.getChannel(e);
                    (null == r || r.getGuildId() === t.id) && n.push(e);
                }),
                0 === n.length)
            )
                return !1;
            o().forEach(n, (e) => q(e));
        }
    }));
