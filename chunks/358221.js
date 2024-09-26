var r,
    i = n(47120);
var a = n(653041);
var o = n(724458);
var s = n(512722),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(570140),
    E = n(317381),
    f = n(710845),
    h = n(258609),
    p = n(569545),
    m = n(199902),
    I = n(314897),
    T = n(523746),
    g = n(592125),
    S = n(944486),
    A = n(606304),
    v = n(594174),
    N = n(33039),
    O = n(979651),
    R = n(413523),
    C = n(354459),
    y = n(981631);
function L(e, t, n) {
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
let b = new f.Z('ChannelRTCStore'),
    D = Object.freeze([]),
    M = [],
    P = {},
    U = {},
    w = {},
    x = {},
    G = {},
    k = {},
    B = {},
    F = {},
    Z = {},
    V = {};
function H(e) {
    let t = P[e];
    return null == t && ((t = new R.ZP(e)), (P[e] = t)), t;
}
function Y() {
    for (let e of M) et(e);
    en();
}
function j() {
    let e = [],
        t = S.Z.getChannelId();
    null != t && e.push(t);
    let n = S.Z.getVoiceChannelId();
    null != n && !e.includes(n) && e.push(n);
    let r = h.Z.getRemoteSessionId(),
        i = O.Z.getVoiceStateForSession(I.default.getId(), r);
    (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), c().difference(M, e).forEach(et);
    let a = c().difference(e, M);
    return (M = e), a;
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
    return t.reduce((t, n) => (e(H(n)) ? (ee(n), J(n), !0) : t), !1);
}
function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
    return W((t) => t.updateParticipant(e), t);
}
function z(e) {
    var t;
    let n = g.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) ? C.dF.AUTO : C.dF.NONE;
    return null !== (t = U[e]) && void 0 !== t ? t : [r, C.dF.NONE];
}
function q(e) {
    if (null == U[e]) return !1;
    let [t] = U[e];
    return t !== C.dF.NONE;
}
function Q(e) {
    null == w[e] &&
        (w[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let t = w[e],
        n = performance.now(),
        r = q(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    t.lastUpdate = n;
}
function X(e, t) {
    Q(e);
    let n = q(e);
    null == t ? delete U[e] : (U[e] = t), n !== q(e) && w[e].toggleCount++;
}
function $(e) {
    return e.size(R.sI.STREAM) > 0 || e.size(R.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function J(e) {
    let t = I.default.getId(),
        n = H(e);
    if (0 === n.size() || S.Z.getVoiceChannelId() !== e) {
        X(e, null);
        return;
    }
    let r = C.dF.NONE,
        i = n.toArray(R.sI.STREAM).find((e) => e.type === C.fO.STREAM && m.Z.getActiveStreamForStreamKey(e.id));
    if (null != i) l()(i.type === C.fO.STREAM, 'Impossible condition'), (r = i.id);
    else if (1 === n.size()) r = t;
    else if (1 === n.size(R.sI.VIDEO)) {
        let [e] = n.toArray(R.sI.VIDEO);
        r = e.id;
    } else {
        var a;
        let e = n.toArray().find((e) => e.type === C.fO.USER && e.id !== t && !e.ringing);
        r = null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t;
    }
    let [o] = z(e);
    if (o !== C.dF.AUTO && o !== C.dF.NONE) {
        let e = n.getParticipant(o);
        (null == e || (e.type === C.fO.STREAM && null == m.Z.getActiveStreamForStreamKey(e.id))) && (o = C.dF.NONE);
    }
    X(e, [o, r]);
}
function ee(e) {
    let t = H(e);
    if (0 === t.size()) return;
    let n = ey(e) || $(t) ? y.WtW.VIDEO : y.WtW.VOICE;
    n === y.WtW.VOICE ? (delete x[e], delete G[e]) : (x[e] = n);
}
function et(e) {
    delete P[e], delete U[e], delete x[e], delete G[e];
}
function en() {
    return W((e) => e.rebuild(), j());
}
function er(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    return null != t ? delete w[t] : null != n && (delete F[n], delete Z[n], Q(n)), en();
}
function ei(e) {
    let { channelId: t, messageId: n } = e,
        r = en(),
        i = g.Z.getChannel(t);
    return null == t || null == n || ((null == i ? void 0 : i.type) !== y.d4z.GUILD_VOICE && (null == i ? void 0 : i.type) !== y.d4z.GUILD_STAGE_VOICE) || F[t] ? r : ((F[t] = !0), !0);
}
function ea(e) {
    let { voiceStates: t, initial: n } = e;
    return t.reduce((e, t) => {
        let { userId: r, channelId: i } = t;
        return n && null != i && !M.includes(i) ? e : K(r) || e;
    }, !1);
}
function eo() {
    return W((e) => e.updateEmbeddedActivities());
}
function es(e) {
    let { userId: t } = e;
    return W((e) => e.updateParticipantSpeaking(t));
}
function el(e) {
    let { user: t } = e;
    return K(t.id);
}
function eu(e) {
    let { channelId: t } = e;
    return W((e) => e.rebuild(), [t]);
}
function ec(e) {
    let { channelId: t } = e;
    return et(t);
}
function ed(e) {
    let { guild: t } = e,
        n = [];
    if (
        (c().forEach(M, (e) => {
            let r = g.Z.getChannel(e);
            (null == r || r.getGuildId() === t.id) && n.push(e);
        }),
        0 === n.length)
    )
        return !1;
    c().forEach(n, (e) => et(e));
}
function e_(e) {
    let { channelId: t, participantsOpen: n } = e;
    k[t] = n;
}
function eE(e) {
    let { channelId: t, voiceParticipantsHidden: n } = e;
    B[t] = n;
}
function ef(e) {
    let { channelId: t, selfStreamHidden: n } = e,
        r = I.default.getId();
    if (n) {
        let [e] = z(t);
        (0, p.DB)(e) && e.includes(r) && X(t, null);
    }
    K(r, [t]);
}
function eh(e) {
    let { channelId: t, large: n } = e;
    Z[t] = n;
}
function ep(e) {
    let { channelId: t, dismissed: n } = e;
    V[t] = n;
}
function em(e) {
    let { channelId: t, chatOpen: n } = e;
    F[t] = n;
}
function eI(e) {
    let { channelId: t, id: n } = e,
        r = H(t);
    null == n &&
        r.toArray(R.sI.STREAM).forEach((e) => {
            (0, C._5)(e) && r.updateParticipant(e.user.id);
        });
    let [, i] = z(t);
    if ((X(t, [null != n ? n : C.dF.NONE, i]), (0, p.DB)(n))) {
        try {
            let { ownerId: e } = (0, p.my)(n);
            e === I.default.getId() && K(e, [t]);
        } catch (e) {
            b.warn('INVALID STREAM KEY FORMAT '.concat(n), e);
        }
        !$(r) && (k[t] = !1);
    }
}
function eT(e) {
    let { channel: t } = e;
    if (t.type === y.d4z.GROUP_DM) {
        let e = t.originChannelId;
        if (null != e) {
            var n, r;
            return (G[t.id] = { [y.IlC.APP]: null !== (r = null === (n = G[e]) || void 0 === n ? void 0 : n[y.IlC.APP]) && void 0 !== r ? r : y.AEg.NORMAL }), !0;
        }
    }
    return !1;
}
function eg(e) {
    let {
        channel: { id: t }
    } = e;
    return delete F[t], delete Z[t], et(t);
}
function eS(e) {
    let { channelId: t, layout: n, appContext: r } = e;
    G[t] = {
        ...G[t],
        [r]: n
    };
}
function eA(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.my)(t);
    return K(r, [n]);
}
function ev(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.my)(t);
    return K(r, [n]);
}
function eN(e) {
    let { channelId: t, userId: n } = e;
    return K(n, [t]);
}
function eO(e) {
    let { channelId: t, userId: n } = e;
    return K(n, [t]);
}
function eR(e) {
    let { userId: t } = e;
    return K(t);
}
function eC(e) {
    let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
    return W((e) => e.updateParticipantQuality(n, r, i), [t]);
}
function ey(e) {
    var t;
    return !!(null === (t = g.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal());
}
class eL extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.default, T.Z, g.Z, E.ZP, S.Z, A.Z, v.default, N.Z, O.Z), this.syncWith([E.ZP], eo), this.syncWith([h.Z], en);
    }
    getParticipantsVersion(e) {
        return H(e).version;
    }
    getParticipants(e) {
        var t;
        return null !== (t = H(e).toArray()) && void 0 !== t ? t : D;
    }
    getSpeakingParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.SPEAKING)) && void 0 !== t ? t : D;
    }
    getFilteredParticipants(e) {
        return B[e] ? H(e).toArray(R.sI.FILTERED) : H(e).toArray();
    }
    getVideoParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.VIDEO)) && void 0 !== t ? t : D;
    }
    getStreamParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.STREAM)) && void 0 !== t ? t : D;
    }
    getActivityParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.ACTIVITY)) && void 0 !== t ? t : D;
    }
    getParticipant(e, t) {
        return H(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = H(e);
        return t.size() - t.size(R.sI.STREAM) - t.size(R.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null === (t = k[e]) || void 0 === t || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = z(e);
        return t === C.dF.NONE ? null : t !== C.dF.AUTO ? t : n === C.dF.NONE || n === C.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : H(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = w[e];
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
        return null !== (t = x[e]) && void 0 !== t ? t : ey(e) ? y.WtW.VIDEO : y.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.IlC.APP;
        if (__OVERLAY__) return y.AEg.NORMAL;
        let i = ey(e);
        return null !== (n = null === (t = G[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : i ? y.AEg.NO_CHAT : y.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null !== (t = F[e]) && void 0 !== t && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.IlC.APP;
        return Object.values(G).some((t) => t[e] === y.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return Z[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
    }
}
L(eL, 'displayName', 'ChannelRTCStore'),
    (t.Z = new eL(_.Z, {
        CONNECTION_OPEN: Y,
        CONNECTION_OPEN_SUPPLEMENTAL: en,
        THREAD_LIST_SYNC: en,
        OVERLAY_INITIALIZE: en,
        VOICE_CHANNEL_SELECT: er,
        CHANNEL_SELECT: ei,
        CHANNEL_RTC_ACTIVE_CHANNELS: en,
        VOICE_STATE_UPDATES: ea,
        CHANNEL_CREATE: eT,
        CHANNEL_DELETE: eg,
        THREAD_DELETE: eg,
        CALL_CREATE: eu,
        CALL_UPDATE: eu,
        CALL_DELETE: ec,
        CHANNEL_RTC_SELECT_PARTICIPANT: eI,
        CHANNEL_RTC_UPDATE_LAYOUT: eS,
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: e_,
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eE,
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eh,
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: ep,
        STREAM_UPDATE_SELF_HIDDEN: ef,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: em,
        RTC_CONNECTION_VIDEO: eN,
        RTC_CONNECTION_PLATFORM: eO,
        AUDIO_SET_LOCAL_VIDEO_DISABLED: eR,
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eC,
        STREAM_CLOSE: eA,
        STREAM_DELETE: eA,
        STREAM_WATCH: ev,
        SPEAKING: es,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: es,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: es,
        USER_UPDATE: el,
        GUILD_MEMBER_UPDATE: el,
        GUILD_DELETE: ed
    }));
