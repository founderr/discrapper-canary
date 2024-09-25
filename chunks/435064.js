var r,
    i = n(47120);
var a = n(789020);
var o = n(442837),
    s = n(570140),
    l = n(579806),
    u = n(594190),
    c = n(569545),
    d = n(314897),
    _ = n(594174),
    E = n(630388),
    f = n(358085),
    h = n(894694),
    p = n(356659),
    m = n(981631),
    I = n(37113);
function T(e, t, n) {
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
let g = 'default',
    S = [],
    A = [],
    v = [],
    N = 0,
    O = null,
    R = null,
    C = {},
    y = null,
    b = null,
    L = {},
    D = {
        clipsEnabled: !1,
        storageLocation: g,
        clipsQuality: {
            resolution: I.LY.RESOLUTION_1080,
            frameRate: I.ws.FPS_30
        },
        clipsLength: p.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: p.dJ.ALL
    },
    M = {
        clipsSettings: D,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: {
            dismissedAt: null,
            numberOfGamesLaunchedSinceDismissal: 0,
            numberOfTimesDismissed: 0
        }
    };
async function P() {
    if (M.clipsSettings.storageLocation !== g || null == l.Z || null == l.Z.remoteApp) return;
    let e = await l.Z.remoteApp.getPath('documents');
    (M.clipsSettings.storageLocation = e), er.emitChange();
}
function U(e) {
    let { classification: t } = e,
        n = M.hardwareClassification;
    (M.hardwareClassificationVersion = p.WM), (M.hardwareClassification = t), M.hardwareClassification === h.x.MEETS_AUTO_ENABLE && n !== h.x.MEETS_AUTO_ENABLE && (M.clipsSettings.clipsEnabled = !0);
    let r = M.hardwareClassificationForDecoupled;
    (M.hardwareClassificationForDecoupled = t), M.hardwareClassificationForDecoupled === h.x.MEETS_AUTO_ENABLE && r !== h.x.MEETS_AUTO_ENABLE && M.clipsSettings.clipsEnabled && (M.clipsSettings.decoupledClipsEnabled = !0);
}
function w(e) {
    let { clip: t } = e;
    for (let [e, n] of A.entries())
        if (n.id === t.id) {
            (A[e] = t), (A = [...A]);
            return;
        }
}
function x(e) {
    let { settings: t } = e;
    M = {
        ...M,
        clipsSettings: {
            ...M.clipsSettings,
            ...t
        }
    };
}
function G(e) {
    let { clipType: t, streamKey: n, thumbnail: r } = e;
    if (((N += 1), (M.hasTakenDecoupledClip = M.hasTakenDecoupledClip || t === p.X9.DECOUPLED), null != n && null != r)) {
        var i;
        let e = Date.now();
        (b = null != b ? b : e),
            (L[n] = [
                ...(null !== (i = L[n]) && void 0 !== i ? i : []),
                {
                    timestamp: e,
                    thumbnail: r
                }
            ]);
    }
}
function k(e) {
    let { streamKey: t, timestamp: n } = e;
    b === n && (b = null), null == n ? (L[t] = []) : (L[t] = L[t].filter((e) => e.timestamp !== n));
}
function B() {
    N = Math.max(N - 1, 0);
}
function F(e) {
    var t, n;
    let { clip: r } = e;
    (N = Math.max(N - 1, 0)),
        (R = {
            applicationName: r.applicationName,
            ended: !1,
            ...R,
            newClipIds: [...(null !== (t = null == R ? void 0 : R.newClipIds) && void 0 !== t ? t : []), r.id]
        }),
        (M = {
            ...M,
            newClipIds: [...(null !== (n = M.newClipIds) && void 0 !== n ? n : []), r.id]
        }),
        (v = v.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (A = [r, ...A]),
        (M.hasClips = !0);
}
function Z(e) {
    let { clip: t } = e;
    v = [t, ...v];
}
function V(e) {
    let { clipId: t } = e;
    v = v.filter((e) => {
        let { id: n } = e;
        return n !== t;
    });
}
function H(e) {
    let { channelId: t } = e;
    O = t;
}
function Y(e) {
    let { channelId: t } = e;
    t !== O && (O = null);
}
function j(e) {
    let { applicationName: t } = e;
    if (((y = null), !M.clipsSettings.clipsEnabled)) return !1;
    R = {
        applicationName: t,
        newClipIds: [],
        ended: !1
    };
}
function W(e) {
    let { errMsg: t } = e;
    y = t;
}
function K(e) {
    let { sourceName: t, pid: n } = e;
    if (!M.clipsSettings.clipsEnabled) return !1;
    let r = t;
    if (null != n) {
        var i;
        let e = u.ZP.getGameForPID(n);
        r = null !== (i = null == e ? void 0 : e.name) && void 0 !== i ? i : r;
    }
    if (null == r || '' === r) return !1;
    R = {
        applicationName: r,
        newClipIds: [],
        ended: !1
    };
}
function z(e) {
    let { streamKey: t } = e;
    if (((b = null), (L[t] = []), null == R || (0, c.my)(t).ownerId !== d.default.getId())) return !1;
    R =
        0 === R.newClipIds.length
            ? null
            : {
                  ...R,
                  ended: !0
              };
}
function q(e) {
    (M.hasClips = e.clips.length > 0), (A = e.clips);
}
function Q(e) {
    0 ===
        (A = A.filter((t) => {
            let { filepath: n } = t;
            return n !== e.filepath;
        })).length && (M.hasClips = !1);
}
function X() {
    if (null == R) return !1;
    R = null;
}
function $() {
    M.newClipIds = [];
}
function J(e) {
    C[e.userId] = {
        clipsEnabled: (0, E.yE)(e.flags, m.BVn.CLIPS_ENABLED),
        allowVoiceRecording: (0, E.yE)(e.flags, m.BVn.ALLOW_VOICE_RECORDING),
        allowAnyViewerClips: (0, E.yE)(e.flags, m.BVn.ALLOW_ANY_VIEWER_CLIPS)
    };
}
function ee(e) {
    let { added: t } = e;
    t.length > 0 && (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
}
function et(e) {
    let { educationType: t } = e;
    switch (t) {
        case p.D5.Error:
            y = null;
            break;
        case p.D5.Disabled:
        case p.D5.Enabled:
            (M.clipsEducationState.dismissedAt = Date.now()), (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (M.clipsEducationState.numberOfTimesDismissed += 1);
    }
}
class en extends (r = o.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (M = e), P(), this.waitFor(u.ZP);
    }
    getClips() {
        return A;
    }
    getPendingClips() {
        return v;
    }
    getUserAgnosticState() {
        return M;
    }
    getSettings() {
        return M.clipsSettings;
    }
    getLastClipsSession() {
        return R;
    }
    getClipsWarningShown(e) {
        return O === e;
    }
    getActiveAnimation() {
        return b;
    }
    getStreamClipAnimations(e) {
        var t;
        return null !== (t = L[e]) && void 0 !== t ? t : S;
    }
    hasAnyClipAnimations() {
        return Object.values(L).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return M.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return M.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return M.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return N >= p.Kw;
    }
    getLastClipsError() {
        return y;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n;
    }
    isDecoupledGameClippingEnabled() {
        var e, t;
        return null !== (t = null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t && (0, f.isWindows)();
    }
    hasClips() {
        return M.hasClips;
    }
    hasTakenDecoupledClip() {
        return M.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return M.newClipIds;
    }
}
T(en, 'displayName', 'ClipsStore'),
    T(en, 'persistKey', 'ClipsStore'),
    T(en, 'migrations', [
        (e) => ({
            clipsSettings: null != e ? e : D,
            newClipsCount: 0
        }),
        (e) => {
            let t = {
                ...D,
                ...e.clipsSettings
            };
            return {
                ...e,
                clipsSettings: t
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
            };
        },
        (e) => {
            var t, n;
            return {
                ...e,
                hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
                hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                hasClips: null !== (t = e.hasClips) && void 0 !== t && t
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                decoupledClipsEnabled: D.decoupledClipsEnabled
            }
        }),
        (e) => {
            var t;
            return {
                ...e,
                hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
            };
        },
        (e) => {
            var t;
            let r = null === (t = n(131951).Z) || void 0 === t ? void 0 : t.getHardwareEncoding();
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
                }
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
                newClipIDs: void 0
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? D.clipsQuality : e.clipsSettings.clipsQuality
            }
        }),
        (e) => {
            var t;
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : D.remindersEnabled
                }
            };
        },
        (e) => ({
            ...e,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0
            }
        })
    ]);
let er = new en(s.Z, {
    CLIPS_SETTINGS_UPDATE: x,
    CLIPS_SAVE_CLIP: F,
    CLIPS_SAVE_CLIP_PLACEHOLDER: Z,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: V,
    CLIPS_SAVE_CLIP_START: G,
    CLIPS_SAVE_CLIP_ERROR: B,
    CLIPS_SAVE_ANIMATION_END: k,
    STREAM_START: K,
    STREAM_STOP: z,
    CLIPS_CLEAR_CLIPS_SESSION: X,
    CLIPS_CLEAR_NEW_CLIP_IDS: $,
    CLIPS_LOAD_DIRECTORY_SUCCESS: q,
    CLIPS_DELETE_CLIP: Q,
    CLIPS_UPDATE_METADATA: w,
    RTC_CONNECTION_FLAGS: J,
    CLIPS_SHOW_CALL_WARNING: H,
    VOICE_CHANNEL_SELECT: Y,
    CLIPS_CLASSIFY_HARDWARE: U,
    CLIPS_INIT: j,
    CLIPS_INIT_FAILURE: W,
    CLIPS_DISMISS_EDUCATION: et,
    RUNNING_GAMES_CHANGE: ee
});
t.Z = er;
