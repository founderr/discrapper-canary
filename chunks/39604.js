n.d(t, {
    C1: function () {
        return H;
    },
    Gh: function () {
        return Y;
    },
    N0: function () {
        return w;
    },
    T1: function () {
        return x;
    },
    Tm: function () {
        return j;
    },
    UW: function () {
        return X;
    },
    _Q: function () {
        return U;
    },
    eL: function () {
        return W;
    },
    eU: function () {
        return k;
    },
    em: function () {
        return P;
    },
    jv: function () {
        return z;
    },
    rO: function () {
        return Q;
    },
    sS: function () {
        return q;
    },
    yg: function () {
        return M;
    },
    yi: function () {
        return G;
    },
    yl: function () {
        return B;
    },
    zq: function () {
        return K;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(46973),
    o = n(992774),
    s = n(381499),
    l = n(570140),
    u = n(579806),
    c = n(255914),
    d = n(594190),
    _ = n(569545),
    E = n(441167),
    f = n(675478),
    h = n(361291),
    p = n(199902),
    m = n(314897),
    I = n(131951),
    T = n(959457),
    g = n(33039),
    S = n(626135),
    A = n(358085),
    v = n(557177),
    N = n(435064),
    O = n(61994),
    R = n(550351),
    C = n(659487),
    y = n(711644),
    b = n(259612),
    L = n(356659),
    D = n(981631);
function M(e) {
    let { allowVoiceRecording: t } = e;
    f.hW.updateAsync(
        'clips',
        (e) => {
            e.allowVoiceRecording = s.D5.create({ value: t });
        },
        f.fy.INFREQUENT_USER_ACTION
    ),
        S.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t });
}
async function P(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            clipsEnabled: t,
            ...(!t && { decoupledClipsEnabled: !1 })
        }
    }),
        r &&
            S.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 })
            });
}
function U(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            ...(t && { clipsEnabled: !0 }),
            decoupledClipsEnabled: t
        }
    }),
        n &&
            S.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t
            });
}
function w(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        S.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function x(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { storageLocation: e }
    });
}
function G(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsQuality: e }
    });
}
function k(e) {
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsLength: e }
    });
}
function B(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    l.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { viewerClipsEnabled: t }
    }),
        n && S.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function F(e) {
    var t;
    let n, r, i;
    if (null != e) {
        n = null != e ? T.Z.getRTCConnection(e) : null;
        let t = (0, _.my)(e);
        (r = t.guildId), (i = t.channelId);
    } else {
        let e = m.default.getId(),
            t = p.Z.getActiveStreamForUser(e, null);
        (n = null != t ? T.Z.getRTCConnection((0, _.V9)(t)) : null), (r = null == t ? void 0 : t.guildId), (i = null == t ? void 0 : t.channelId);
    }
    let a = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
    return {
        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
        guild_id: r,
        channel_id: i,
        application_id: null == a ? void 0 : a.id,
        application_name: null == a ? void 0 : a.name
    };
}
function Z(e, t) {
    var n, r, i, a, o, s, l, u, d, _;
    let E = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, c.lG)(e),
            a = null !== (n = E.get(i)) && void 0 !== n ? n : 0;
        E.set(i, a + r);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: null !== (r = E.get(c.Su.NVIDIA_CUDA)) && void 0 !== r ? r : 0,
        frames_encoded_nvidia_direct3d: null !== (i = E.get(c.Su.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
        frames_encoded_openh264: null !== (a = E.get(c.Su.OPENH264)) && void 0 !== a ? a : 0,
        frames_encoded_videotoolbox: null !== (o = E.get(c.Su.VIDEOTOOLBOX)) && void 0 !== o ? o : 0,
        frames_encoded_amd_direct3d: null !== (s = E.get(c.Su.AMD_DIRECT_3D)) && void 0 !== s ? s : 0,
        frames_encoded_intel: null !== (l = E.get(c.Su.INTEL)) && void 0 !== l ? l : 0,
        frames_encoded_intel_direct3d: null !== (u = E.get(c.Su.INTEL_DIRECT_3D)) && void 0 !== u ? u : 0,
        frames_encoded_uncategorized: null !== (d = E.get(c.Su.UNCATEGORIZED)) && void 0 !== d ? d : 0,
        frames_encoded_unknown: null !== (_ = E.get(c.Su.UNKNOWN)) && void 0 !== _ ? _ : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: N.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: h.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt
    };
}
async function V(e) {
    let t = N.Z.getSettings().storageLocation,
        n = (0, R.Z)(e),
        r = ''.concat((0, O.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
        i = u.Z.fileManager.join(t, r),
        a = I.Z.getMediaEngine(),
        o = JSON.stringify(n),
        s = null != e ? (0, _.my)(e).ownerId : void 0,
        c = F(e);
    null != e &&
        l.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: {
                ...n,
                filepath: i
            }
        });
    try {
        var d;
        let { duration: e, clipStats: t } = await (null != s ? a.saveClipForUser(s, i, o) : a.saveClip(i, o)),
            r = Z(c, t);
        (r.clip_save_time_ms = t.clipSaveTimeMs), (r.clip_size_bytes = t.clipSizeBytes), null != t.viewerDecodeFps && ((r.decode_fps_during_clip = t.viewerDecodeFps), (r.encode_fps_during_clip = t.viewerEncodeFps), (r.target_fps = null)), S.default.track(D.rMx.CLIP_SAVED, r);
        let l = await (0, b.R)(u.Z.clips.getClipProtocolURLFromPath(i), 0);
        return (
            (n.thumbnail = l),
            (n.length = e),
            L.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null !== (d = null == l ? void 0 : l.length) && void 0 !== d ? d : 0, ' bytes thumbnail.')),
            await a.updateClipMetadata(i, JSON.stringify(n)),
            {
                ...n,
                filepath: i
            }
        );
    } catch (i) {
        if (
            (null != e &&
                l.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: n.id
                }),
            !('errorMessage' in i))
        )
            throw (S.default.track(D.rMx.CLIP_SAVE_FAILURE, c), i);
        let t = i,
            r = Z(c, t);
        throw ((r.error_at = t.errorAt), (r.error_message = t.errorMessage), S.default.track(D.rMx.CLIP_SAVE_FAILURE, r), t.errorMessage);
    }
}
async function H(e) {
    var t;
    let n = N.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: r } = E.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (N.Z.getIsAtMaxSaveClipOperations()) return;
    let i = N.Z.getSettings().clipsEnabled && null != p.Z.getCurrentUserActiveStream(),
        s = n && N.Z.getSettings().decoupledClipsEnabled && (null === (t = d.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && I.Z.hasClipsSource(),
        u = null != e && null != p.Z.getActiveStreamForStreamKey(e) && r;
    if (!i && !s && !u) return;
    let c = p.Z.getCurrentUserActiveStream(),
        f = null != c ? (0, _.V9)(c) : void 0,
        h = null != e ? e : f,
        T = (() => {
            let e = null != h ? (0, _.my)(h).ownerId : void 0;
            return e === m.default.getId() ? L.X9.STREAMER : null != e ? L.X9.VIEWER : L.X9.DECOUPLED;
        })(),
        S = await (async () => {
            if (null == h) return;
            let { ownerId: e, guildId: t } = (0, _.my)(h),
                n = g.Z.getStreamId(e, t, a.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, o.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, b.W)(t);
                } catch (e) {
                    return;
                }
        })();
    l.Z.dispatch({
        type: 'CLIPS_SAVE_CLIP_START',
        clipType: T,
        streamKey: h,
        thumbnail: S
    });
    let A = (0, v.GN)('clip_save', 0.5),
        O = performance.now();
    try {
        let e = await V(h);
        l.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        L.jF.error('Clip Failed to Save', e), null == A || A.stop(), (0, v.GN)('clip_error', 0.5), l.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    L.jF.info(''.concat(N.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - O), 'ms'));
}
function Y(e, t) {
    l.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: t
    });
}
async function j(e, t) {
    let n = N.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = {
        ...n,
        ...t
    };
    null != (await (0, C.w)(r)) &&
        (await I.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        S.default.track(D.rMx.CLIP_EDITED, { clip_id: r.id }),
        l.Z.dispatch({
            type: 'CLIPS_UPDATE_METADATA',
            clip: r
        }));
}
function W() {
    l.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function K() {
    l.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function z(e) {
    var t;
    if (!(0, A.isDesktop)() || (null === (t = u.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await u.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, C.w)({
            ...e.metadata,
            filepath: e.filepath
        });
        null != t && r.push(t);
    }
    l.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: r
    });
}
async function q(e) {
    var t;
    if (!!(0, A.isDesktop)() && (null === (t = u.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null)
        await u.Z.clips.deleteClip(e),
            l.Z.dispatch({
                type: 'CLIPS_DELETE_CLIP',
                filepath: e
            });
}
async function Q(e, t) {
    let n = I.Z.getMediaEngine(),
        r = await n.exportClip(e.filepath, t);
    return (0, y.Z)(r);
}
function X(e) {
    l.Z.dispatch({
        type: 'CLIPS_DISMISS_EDUCATION',
        educationType: e
    });
}
