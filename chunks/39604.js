n.d(t, {
    C1: function () {
        return Z;
    },
    Gh: function () {
        return F;
    },
    N0: function () {
        return w;
    },
    T1: function () {
        return M;
    },
    Tm: function () {
        return V;
    },
    UW: function () {
        return z;
    },
    _Q: function () {
        return x;
    },
    eL: function () {
        return H;
    },
    eU: function () {
        return k;
    },
    em: function () {
        return L;
    },
    jv: function () {
        return Y;
    },
    rO: function () {
        return K;
    },
    sS: function () {
        return W;
    },
    yg: function () {
        return D;
    },
    yi: function () {
        return P;
    },
    yl: function () {
        return U;
    },
    zq: function () {
        return j;
    }
}),
    n(47120),
    n(653041);
var r = n(46973),
    i = n(992774),
    a = n(381499),
    s = n(570140),
    o = n(579806),
    l = n(255914),
    u = n(594190),
    c = n(569545),
    d = n(441167),
    f = n(675478),
    _ = n(361291),
    h = n(199902),
    p = n(314897),
    m = n(131951),
    g = n(959457),
    E = n(33039),
    v = n(626135),
    I = n(358085),
    S = n(557177),
    b = n(435064),
    T = n(61994),
    y = n(550351),
    A = n(659487),
    N = n(711644),
    C = n(259612),
    R = n(356659),
    O = n(981631);
function D(e) {
    let { allowVoiceRecording: t } = e;
    f.hW.updateAsync(
        'clips',
        (e) => {
            e.allowVoiceRecording = a.D5.create({ value: t });
        },
        f.fy.INFREQUENT_USER_ACTION
    ),
        v.default.track(O.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t });
}
async function L(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            clipsEnabled: t,
            ...(!t && { decoupledClipsEnabled: !1 })
        }
    }),
        r &&
            v.default.track(O.rMx.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 })
            });
}
function x(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            ...(t && { clipsEnabled: !0 }),
            decoupledClipsEnabled: t
        }
    }),
        n &&
            v.default.track(O.rMx.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t
            });
}
function w(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        v.default.track(O.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function M(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { storageLocation: e }
    });
}
function P(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsQuality: e }
    });
}
function k(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsLength: e }
    });
}
function U(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { viewerClipsEnabled: t }
    }),
        n && v.default.track(O.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function G(e, t) {
    var n, r, i, a, s, o, u, c, d, f;
    let h = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, l.lG)(e),
            a = null !== (n = h.get(i)) && void 0 !== n ? n : 0;
        h.set(i, a + r);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: null !== (r = h.get(l.Su.NVIDIA_CUDA)) && void 0 !== r ? r : 0,
        frames_encoded_nvidia_direct3d: null !== (i = h.get(l.Su.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
        frames_encoded_openh264: null !== (a = h.get(l.Su.OPENH264)) && void 0 !== a ? a : 0,
        frames_encoded_videotoolbox: null !== (s = h.get(l.Su.VIDEOTOOLBOX)) && void 0 !== s ? s : 0,
        frames_encoded_amd_direct3d: null !== (o = h.get(l.Su.AMD_DIRECT_3D)) && void 0 !== o ? o : 0,
        frames_encoded_intel: null !== (u = h.get(l.Su.INTEL)) && void 0 !== u ? u : 0,
        frames_encoded_intel_direct3d: null !== (c = h.get(l.Su.INTEL_DIRECT_3D)) && void 0 !== c ? c : 0,
        frames_encoded_uncategorized: null !== (d = h.get(l.Su.UNCATEGORIZED)) && void 0 !== d ? d : 0,
        frames_encoded_unknown: null !== (f = h.get(l.Su.UNKNOWN)) && void 0 !== f ? f : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: b.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: _.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt
    };
}
async function B(e) {
    let t = b.Z.getSettings().storageLocation,
        n = (0, y.Z)(e),
        r = ''.concat((0, T.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
        i = o.Z.fileManager.join(t, r),
        a = m.Z.getMediaEngine(),
        l = JSON.stringify(n),
        u = null != e ? (0, c.my)(e).ownerId : void 0,
        d = (function (e) {
            var t;
            let n, r, i;
            if (null != e) {
                n = null != e ? g.Z.getRTCConnection(e) : null;
                let t = (0, c.my)(e);
                (r = t.guildId), (i = t.channelId);
            } else {
                let e = p.default.getId(),
                    t = h.Z.getActiveStreamForUser(e, null);
                (n = null != t ? g.Z.getRTCConnection((0, c.V9)(t)) : null), (r = null == t ? void 0 : t.guildId), (i = null == t ? void 0 : t.channelId);
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
        })(e);
    null != e &&
        s.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: {
                ...n,
                filepath: i
            }
        });
    try {
        var f;
        let { duration: e, clipStats: t } = await (null != u ? a.saveClipForUser(u, i, l) : a.saveClip(i, l)),
            r = G(d, t);
        (r.clip_save_time_ms = t.clipSaveTimeMs), (r.clip_size_bytes = t.clipSizeBytes), null != t.viewerDecodeFps && ((r.decode_fps_during_clip = t.viewerDecodeFps), (r.encode_fps_during_clip = t.viewerEncodeFps), (r.target_fps = null)), v.default.track(O.rMx.CLIP_SAVED, r);
        let s = await (0, C.R)(o.Z.clips.getClipProtocolURLFromPath(i), 0);
        return (
            (n.thumbnail = s),
            (n.length = e),
            R.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null !== (f = null == s ? void 0 : s.length) && void 0 !== f ? f : 0, ' bytes thumbnail.')),
            await a.updateClipMetadata(i, JSON.stringify(n)),
            {
                ...n,
                filepath: i
            }
        );
    } catch (r) {
        if (
            (null != e &&
                s.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: n.id
                }),
            !('errorMessage' in r))
        )
            throw (v.default.track(O.rMx.CLIP_SAVE_FAILURE, d), r);
        let t = G(d, r);
        throw ((t.error_at = r.errorAt), (t.error_message = r.errorMessage), v.default.track(O.rMx.CLIP_SAVE_FAILURE, t), r.errorMessage);
    }
}
async function Z(e) {
    var t;
    let n = b.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: a } = d.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (b.Z.getIsAtMaxSaveClipOperations()) return;
    let o = b.Z.getSettings().clipsEnabled && null != h.Z.getCurrentUserActiveStream(),
        l = n && b.Z.getSettings().decoupledClipsEnabled && (null === (t = u.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && m.Z.hasClipsSource(),
        f = null != e && null != h.Z.getActiveStreamForStreamKey(e) && a;
    if (!o && !l && !f) return;
    let _ = h.Z.getCurrentUserActiveStream(),
        g = null != _ ? (0, c.V9)(_) : void 0,
        v = null != e ? e : g,
        I = (() => {
            let e = null != v ? (0, c.my)(v).ownerId : void 0;
            return e === p.default.getId() ? R.X9.STREAMER : null != e ? R.X9.VIEWER : R.X9.DECOUPLED;
        })(),
        T = await (async () => {
            if (null == v) return;
            let { ownerId: e, guildId: t } = (0, c.my)(v),
                n = E.Z.getStreamId(e, t, r.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, i.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, C.W)(t);
                } catch (e) {
                    return;
                }
        })();
    s.Z.dispatch({
        type: 'CLIPS_SAVE_CLIP_START',
        clipType: I,
        streamKey: v,
        thumbnail: T
    });
    let y = (0, S.GN)('clip_save', 0.5),
        A = performance.now();
    try {
        let e = await B(v);
        s.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        R.jF.error('Clip Failed to Save', e), null == y || y.stop(), (0, S.GN)('clip_error', 0.5), s.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    R.jF.info(''.concat(b.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - A), 'ms'));
}
function F(e, t) {
    s.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: t
    });
}
async function V(e, t) {
    let n = b.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = {
        ...n,
        ...t
    };
    null != (await (0, A.w)(r)) &&
        (await m.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        v.default.track(O.rMx.CLIP_EDITED, { clip_id: r.id }),
        s.Z.dispatch({
            type: 'CLIPS_UPDATE_METADATA',
            clip: r
        }));
}
function H() {
    s.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function j() {
    s.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function Y(e) {
    var t;
    if (!(0, I.isDesktop)() || (null === (t = o.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await o.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, A.w)({
            ...e.metadata,
            filepath: e.filepath
        });
        null != t && r.push(t);
    }
    s.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: r
    });
}
async function W(e) {
    var t;
    if (!!(0, I.isDesktop)() && (null === (t = o.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null)
        await o.Z.clips.deleteClip(e),
            s.Z.dispatch({
                type: 'CLIPS_DELETE_CLIP',
                filepath: e
            });
}
async function K(e, t) {
    let n = m.Z.getMediaEngine(),
        r = await n.exportClip(e.filepath, t);
    return (0, N.Z)(r);
}
function z(e) {
    s.Z.dispatch({
        type: 'CLIPS_DISMISS_EDUCATION',
        educationType: e
    });
}
