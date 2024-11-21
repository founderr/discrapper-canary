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
    b = n(594174),
    I = n(33039),
    T = n(979651),
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
    M = {},
    P = {},
    k = {},
    U = {},
    G = {},
    B = {};
function Z(e) {
    let t = D[e];
    return null == t && ((t = new S.ZP(e)), (D[e] = t)), t;
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return t.reduce(
        (t, n) =>
            e(Z(n))
                ? ((function (e) {
                      let t = Z(e);
                      if (0 === t.size()) return;
                      let n = en(e) || K(t) ? A.WtW.VIDEO : A.WtW.VOICE;
                      n === A.WtW.VOICE ? (delete w[e], delete M[e]) : (w[e] = n);
                  })(n),
                  (function (e) {
                      let t = h.default.getId(),
                          n = Z(e);
                      if (0 === n.size() || E.Z.getVoiceChannelId() !== e) {
                          W(e, null);
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
                      let [o] = j(e);
                      if (o !== y.dF.AUTO && o !== y.dF.NONE) {
                          let e = n.getParticipant(o);
                          (null == e || (e.type === y.fO.STREAM && null == p.Z.getActiveStreamForStreamKey(e.id))) && (o = y.dF.NONE);
                      }
                      W(e, [o, r]);
                  })(n),
                  !0)
                : t,
        !1
    );
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
    return F((t) => t.updateParticipant(e), t);
}
function j(e) {
    var t;
    let n = g.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) ? y.dF.AUTO : y.dF.NONE;
    return null !== (t = L[e]) && void 0 !== t ? t : [r, y.dF.NONE];
}
function H(e) {
    if (null == L[e]) return !1;
    let [t] = L[e];
    return t !== y.dF.NONE;
}
function Y(e) {
    null == x[e] &&
        (x[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let t = x[e],
        n = performance.now(),
        r = H(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    t.lastUpdate = n;
}
function W(e, t) {
    Y(e);
    let n = H(e);
    null == t ? delete L[e] : (L[e] = t), n !== H(e) && x[e].toggleCount++;
}
function K(e) {
    return e.size(S.sI.STREAM) > 0 || e.size(S.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function z(e) {
    delete D[e], delete L[e], delete w[e], delete M[e];
}
function q() {
    return F(
        (e) => e.rebuild(),
        (function () {
            let e = [],
                t = E.Z.getChannelId();
            null != t && e.push(t);
            let n = E.Z.getVoiceChannelId();
            null != n && !e.includes(n) && e.push(n);
            let r = f.Z.getRemoteSessionId(),
                i = T.Z.getVoiceStateForSession(h.default.getId(), r);
            (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), o().difference(O, e).forEach(z);
            let a = o().difference(e, O);
            return (O = e), a;
        })()
    );
}
function Q() {
    return F((e) => e.updateEmbeddedActivities());
}
function X(e) {
    let { userId: t } = e;
    return F((e) => e.updateParticipantSpeaking(t));
}
function J(e) {
    let { user: t } = e;
    return V(t.id);
}
function $(e) {
    let { channelId: t } = e;
    return F((e) => e.rebuild(), [t]);
}
function ee(e) {
    let {
        channel: { id: t }
    } = e;
    return delete U[t], delete G[t], z(t);
}
function et(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, _.my)(t);
    return V(r, [n]);
}
function en(e) {
    var t;
    return !!(null === (t = g.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal());
}
class er extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(p.Z, h.default, m.Z, g.Z, c.ZP, E.Z, v.Z, b.default, I.Z, T.Z), this.syncWith([c.ZP], Q), this.syncWith([f.Z], q), (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 && Object.assign(k, null == e ? void 0 : e.voiceParticipantsHidden);
    }
    getState() {
        return { voiceParticipantsHidden: k };
    }
    getParticipantsVersion(e) {
        return Z(e).version;
    }
    getParticipants(e) {
        var t;
        return null !== (t = Z(e).toArray()) && void 0 !== t ? t : R;
    }
    getSpeakingParticipants(e) {
        var t;
        return null !== (t = Z(e).toArray(S.sI.SPEAKING)) && void 0 !== t ? t : R;
    }
    getFilteredParticipants(e) {
        return k[e] ? Z(e).toArray(S.sI.FILTERED) : Z(e).toArray();
    }
    getVideoParticipants(e) {
        var t;
        return null !== (t = Z(e).toArray(S.sI.VIDEO)) && void 0 !== t ? t : R;
    }
    getStreamParticipants(e) {
        var t;
        return null !== (t = Z(e).toArray(S.sI.STREAM)) && void 0 !== t ? t : R;
    }
    getActivityParticipants(e) {
        var t;
        return null !== (t = Z(e).toArray(S.sI.ACTIVITY)) && void 0 !== t ? t : R;
    }
    getParticipant(e, t) {
        return Z(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = Z(e);
        return t.size() - t.size(S.sI.STREAM) - t.size(S.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null === (t = P[e]) || void 0 === t || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null !== (t = k[e]) && void 0 !== t && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = j(e);
        return t === y.dF.NONE ? null : t !== y.dF.AUTO ? t : n === y.dF.NONE || n === y.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : Z(e).getParticipant(t);
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
        return null !== (t = w[e]) && void 0 !== t ? t : en(e) ? A.WtW.VIDEO : A.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.IlC.APP;
        if (__OVERLAY__) return A.AEg.NORMAL;
        let i = en(e);
        return null !== (n = null === (t = M[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : i ? A.AEg.NO_CHAT : A.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null !== (t = U[e]) && void 0 !== t && t;
    }
    getAllChatOpen() {
        return U;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.IlC.APP;
        return Object.values(M).some((t) => t[e] === A.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return G[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return B[e];
    }
}
N(er, 'displayName', 'ChannelRTCStore'),
    N(er, 'persistKey', 'ChannelRTCStore'),
    (t.Z = new er(u.Z, {
        CONNECTION_OPEN: function () {
            for (let e of O) z(e);
            q();
        },
        CONNECTION_OPEN_SUPPLEMENTAL: q,
        THREAD_LIST_SYNC: q,
        OVERLAY_INITIALIZE: q,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t, currentVoiceChannelId: n } = e;
            return null != t ? delete x[t] : null != n && (delete U[n], delete G[n], Y(n)), q();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t, messageId: n } = e,
                r = q(),
                i = g.Z.getChannel(t);
            return null == t || null == n || ((null == i ? void 0 : i.type) !== A.d4z.GUILD_VOICE && (null == i ? void 0 : i.type) !== A.d4z.GUILD_STAGE_VOICE) || U[t] ? r : ((U[t] = !0), !0);
        },
        CHANNEL_RTC_ACTIVE_CHANNELS: q,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t, initial: n } = e;
            return t.reduce((e, t) => {
                let { userId: r, channelId: i } = t;
                return n && null != i && !O.includes(i) ? e : V(r) || e;
            }, !1);
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (t.type === A.d4z.GROUP_DM) {
                let e = t.originChannelId;
                if (null != e) {
                    var n, r;
                    return (M[t.id] = { [A.IlC.APP]: null !== (r = null === (n = M[e]) || void 0 === n ? void 0 : n[A.IlC.APP]) && void 0 !== r ? r : A.AEg.NORMAL }), !0;
                }
            }
            return !1;
        },
        CHANNEL_DELETE: ee,
        THREAD_DELETE: ee,
        CALL_CREATE: $,
        CALL_UPDATE: $,
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            return z(t);
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
            let { channelId: t, id: n } = e,
                r = Z(t);
            null == n &&
                r.toArray(S.sI.STREAM).forEach((e) => {
                    (0, y._5)(e) && r.updateParticipant(e.user.id);
                });
            let [, i] = j(t);
            if ((W(t, [null != n ? n : y.dF.NONE, i]), (0, _.DB)(n))) {
                try {
                    let { ownerId: e } = (0, _.my)(n);
                    e === h.default.getId() && V(e, [t]);
                } catch (e) {
                    C.warn('INVALID STREAM KEY FORMAT '.concat(n), e);
                }
                !K(r) && (P[t] = !1);
            }
        },
        CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
            let { channelId: t, layout: n, appContext: r } = e;
            M[t] = {
                ...M[t],
                [r]: n
            };
        },
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
            let { channelId: t, participantsOpen: n } = e;
            P[t] = n;
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
            B[t] = n;
        },
        STREAM_UPDATE_SELF_HIDDEN: function (e) {
            let { channelId: t, selfStreamHidden: n } = e,
                r = h.default.getId();
            if (n) {
                let [e] = j(t);
                (0, _.DB)(e) && e.includes(r) && W(t, null);
            }
            V(r, [t]);
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
            let { channelId: t, chatOpen: n } = e;
            U[t] = n;
        },
        RTC_CONNECTION_VIDEO: function (e) {
            let { channelId: t, userId: n } = e;
            return V(n, [t]);
        },
        RTC_CONNECTION_PLATFORM: function (e) {
            let { channelId: t, userId: n } = e;
            return V(n, [t]);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            let { userId: t } = e;
            return V(t);
        },
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
            let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
            return F((e) => e.updateParticipantQuality(n, r, i), [t]);
        },
        STREAM_CLOSE: et,
        STREAM_DELETE: et,
        STREAM_WATCH: function (e) {
            let { streamKey: t } = e,
                { channelId: n, ownerId: r } = (0, _.my)(t);
            return V(r, [n]);
        },
        SPEAKING: X,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: X,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: X,
        USER_UPDATE: J,
        GUILD_MEMBER_UPDATE: J,
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
            o().forEach(n, (e) => z(e));
        }
    }));
