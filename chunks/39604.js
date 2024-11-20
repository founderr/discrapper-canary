n.d(t, {
    C1: function () {
        return G;
    },
    Gh: function () {
        return Z;
    },
    N0: function () {
        return x;
    },
    T1: function () {
        return w;
    },
    Tm: function () {
        return F;
    },
    UW: function () {
        return K;
    },
    _Q: function () {
        return L;
    },
    eL: function () {
        return V;
    },
    eU: function () {
        return P;
    },
    em: function () {
        return D;
    },
    jv: function () {
        return H;
    },
    rO: function () {
        return W;
    },
    sS: function () {
        return Y;
    },
    yg: function () {
        return O;
    },
    yi: function () {
        return M;
    },
    yl: function () {
        return k;
    },
    zq: function () {
        return j;
    }
}),
    n(47120),
    n(653041);
var r = n(46973),
    i = n(992774),
    a = n(570140),
    s = n(579806),
    o = n(255914),
    l = n(594190),
    u = n(569545),
    c = n(441167),
    d = n(695346),
    f = n(361291),
    _ = n(199902),
    p = n(314897),
    h = n(131951),
    m = n(959457),
    g = n(33039),
    E = n(626135),
    v = n(358085),
    b = n(557177),
    I = n(435064),
    T = n(61994),
    S = n(550351),
    y = n(659487),
    A = n(711644),
    N = n(259612),
    C = n(356659),
    R = n(981631);
async function O(e) {
    let { allowVoiceRecording: t } = e;
    await d.tU.updateSetting(t), E.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }), a.Z.dispatch({ type: 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE' });
}
async function D(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            clipsEnabled: t,
            ...(!t && { decoupledClipsEnabled: !1 })
        }
    }),
        r &&
            E.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 })
            });
}
function L(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            ...(t && { clipsEnabled: !0 }),
            decoupledClipsEnabled: t
        }
    }),
        n &&
            E.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t
            });
}
function x(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        E.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function w(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { storageLocation: e }
    });
}
function M(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsQuality: e }
    });
}
function P(e) {
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsLength: e }
    });
}
function k(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { viewerClipsEnabled: t }
    }),
        n && E.default.track(R.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function U(e, t) {
    var n, r, i, a, s, l, u, c, d, _;
    let p = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, o.lG)(e),
            a = null !== (n = p.get(i)) && void 0 !== n ? n : 0;
        p.set(i, a + r);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: null !== (r = p.get(o.Su.NVIDIA_CUDA)) && void 0 !== r ? r : 0,
        frames_encoded_nvidia_direct3d: null !== (i = p.get(o.Su.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
        frames_encoded_openh264: null !== (a = p.get(o.Su.OPENH264)) && void 0 !== a ? a : 0,
        frames_encoded_videotoolbox: null !== (s = p.get(o.Su.VIDEOTOOLBOX)) && void 0 !== s ? s : 0,
        frames_encoded_amd_direct3d: null !== (l = p.get(o.Su.AMD_DIRECT_3D)) && void 0 !== l ? l : 0,
        frames_encoded_intel: null !== (u = p.get(o.Su.INTEL)) && void 0 !== u ? u : 0,
        frames_encoded_intel_direct3d: null !== (c = p.get(o.Su.INTEL_DIRECT_3D)) && void 0 !== c ? c : 0,
        frames_encoded_uncategorized: null !== (d = p.get(o.Su.UNCATEGORIZED)) && void 0 !== d ? d : 0,
        frames_encoded_unknown: null !== (_ = p.get(o.Su.UNKNOWN)) && void 0 !== _ ? _ : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: I.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: f.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt
    };
}
async function B(e) {
    let t = I.Z.getSettings().storageLocation,
        n = (0, S.Z)(e),
        r = ''.concat((0, T.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
        i = s.Z.fileManager.join(t, r),
        o = h.Z.getMediaEngine(),
        l = JSON.stringify(n),
        c = null != e ? (0, u.my)(e).ownerId : void 0,
        d = (function (e) {
            var t;
            let n, r, i;
            if (null != e) {
                n = null != e ? m.Z.getRTCConnection(e) : null;
                let t = (0, u.my)(e);
                (r = t.guildId), (i = t.channelId);
            } else {
                let e = p.default.getId(),
                    t = _.Z.getActiveStreamForUser(e, null);
                (n = null != t ? m.Z.getRTCConnection((0, u.V9)(t)) : null), (r = null == t ? void 0 : t.guildId), (i = null == t ? void 0 : t.channelId);
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
        a.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: {
                ...n,
                filepath: i
            }
        });
    try {
        var f;
        let { duration: e, clipStats: t } = await (null != c ? o.saveClipForUser(c, i, l) : o.saveClip(i, l)),
            r = U(d, t);
        (r.clip_save_time_ms = t.clipSaveTimeMs), (r.clip_size_bytes = t.clipSizeBytes), null != t.viewerDecodeFps && ((r.decode_fps_during_clip = t.viewerDecodeFps), (r.encode_fps_during_clip = t.viewerEncodeFps), (r.target_fps = null)), E.default.track(R.rMx.CLIP_SAVED, r);
        let a = await (0, N.R)(s.Z.clips.getClipProtocolURLFromPath(i), 0);
        return (
            (n.thumbnail = a),
            (n.length = e),
            C.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null !== (f = null == a ? void 0 : a.length) && void 0 !== f ? f : 0, ' bytes thumbnail.')),
            await o.updateClipMetadata(i, JSON.stringify(n)),
            {
                ...n,
                filepath: i
            }
        );
    } catch (r) {
        if (
            (null != e &&
                a.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: n.id
                }),
            !('errorMessage' in r))
        )
            throw (E.default.track(R.rMx.CLIP_SAVE_FAILURE, d), r);
        let t = U(d, r);
        throw ((t.error_at = r.errorAt), (t.error_message = r.errorMessage), E.default.track(R.rMx.CLIP_SAVE_FAILURE, t), r.errorMessage);
    }
}
async function G(e) {
    var t;
    let n = I.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: s } = c.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (I.Z.getIsAtMaxSaveClipOperations()) return;
    let o = I.Z.getSettings().clipsEnabled && null != _.Z.getCurrentUserActiveStream(),
        d = n && I.Z.getSettings().decoupledClipsEnabled && (null === (t = l.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && h.Z.hasClipsSource(),
        f = null != e && null != _.Z.getActiveStreamForStreamKey(e) && s;
    if (!o && !d && !f) return;
    let m = _.Z.getCurrentUserActiveStream(),
        E = null != m ? (0, u.V9)(m) : void 0,
        v = null != e ? e : E,
        T = (() => {
            let e = null != v ? (0, u.my)(v).ownerId : void 0;
            return e === p.default.getId() ? C.X9.STREAMER : null != e ? C.X9.VIEWER : C.X9.DECOUPLED;
        })(),
        S = await (async () => {
            if (null == v) return;
            let { ownerId: e, guildId: t } = (0, u.my)(v),
                n = g.Z.getStreamId(e, t, r.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, i.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, N.W)(t);
                } catch (e) {
                    return;
                }
        })();
    a.Z.dispatch({
        type: 'CLIPS_SAVE_CLIP_START',
        clipType: T,
        streamKey: v,
        thumbnail: S
    });
    let y = (0, b.GN)('clip_save', 0.5),
        A = performance.now();
    try {
        let e = await B(v);
        a.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        C.jF.error('Clip Failed to Save', e), null == y || y.stop(), (0, b.GN)('clip_error', 0.5), a.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    C.jF.info(''.concat(I.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - A), 'ms'));
}
function Z(e, t) {
    a.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: t
    });
}
async function F(e, t) {
    let n = I.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = {
        ...n,
        ...t
    };
    null != (await (0, y.w)(r)) &&
        (await h.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        E.default.track(R.rMx.CLIP_EDITED, { clip_id: r.id }),
        a.Z.dispatch({
            type: 'CLIPS_UPDATE_METADATA',
            clip: r
        }));
}
function V() {
    a.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function j() {
    a.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function H(e) {
    var t;
    if (!(0, v.isDesktop)() || (null === (t = s.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await s.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, y.w)({
            ...e.metadata,
            filepath: e.filepath
        });
        null != t && r.push(t);
    }
    a.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: r
    });
}
async function Y(e) {
    var t;
    if (!!(0, v.isDesktop)() && (null === (t = s.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null)
        await s.Z.clips.deleteClip(e),
            a.Z.dispatch({
                type: 'CLIPS_DELETE_CLIP',
                filepath: e
            });
}
async function W(e, t) {
    let n = h.Z.getMediaEngine(),
        r = await n.exportClip(e.filepath, t);
    return (0, A.Z)(r);
}
function K(e) {
    a.Z.dispatch({
        type: 'CLIPS_DISMISS_EDUCATION',
        educationType: e
    });
}
