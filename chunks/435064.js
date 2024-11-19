n(47120), n(789020);
var r,
    i = n(442837),
    a = n(570140),
    s = n(579806),
    o = n(594190),
    l = n(569545),
    u = n(314897),
    c = n(594174),
    d = n(630388),
    f = n(358085),
    _ = n(894694),
    p = n(356659),
    h = n(981631),
    m = n(37113);
function g(e, t, n) {
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
let E = 'default',
    v = [],
    b = [],
    I = [],
    T = 0,
    S = null,
    y = null,
    A = {},
    N = null,
    C = null,
    R = {},
    O = {
        clipsEnabled: !1,
        storageLocation: E,
        clipsQuality: {
            resolution: m.LY.RESOLUTION_1080,
            frameRate: m.ws.FPS_30
        },
        clipsLength: p.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: p.dJ.ALL
    },
    D = {
        clipsSettings: O,
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
async function L() {
    if (D.clipsSettings.storageLocation !== E || null == s.Z || null == s.Z.remoteApp) return;
    let e = await s.Z.remoteApp.getPath('documents');
    (D.clipsSettings.storageLocation = e), w.emitChange();
}
class x extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (D = e), L(), this.waitFor(o.ZP);
    }
    getClips() {
        return b;
    }
    getPendingClips() {
        return I;
    }
    getUserAgnosticState() {
        return D;
    }
    getSettings() {
        return D.clipsSettings;
    }
    getLastClipsSession() {
        return y;
    }
    getClipsWarningShown(e) {
        return S === e;
    }
    getActiveAnimation() {
        return C;
    }
    getStreamClipAnimations(e) {
        var t;
        return null !== (t = R[e]) && void 0 !== t ? t : v;
    }
    hasAnyClipAnimations() {
        return Object.values(R).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return D.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return D.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return D.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return T >= p.Kw;
    }
    getLastClipsError() {
        return N;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n;
    }
    isDecoupledGameClippingEnabled() {
        var e, t;
        return null !== (t = null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t && (0, f.isWindows)();
    }
    hasClips() {
        return D.hasClips;
    }
    hasTakenDecoupledClip() {
        return D.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return D.newClipIds;
    }
}
g(x, 'displayName', 'ClipsStore'),
    g(x, 'persistKey', 'ClipsStore'),
    g(x, 'migrations', [
        (e) => ({
            clipsSettings: null != e ? e : O,
            newClipsCount: 0
        }),
        (e) => {
            let t = {
                ...O,
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
                decoupledClipsEnabled: O.decoupledClipsEnabled
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
                clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? O.clipsQuality : e.clipsSettings.clipsQuality
            }
        }),
        (e) => {
            var t;
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : O.remindersEnabled
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
let w = new x(a.Z, {
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        D = {
            ...D,
            clipsSettings: {
                ...D.clipsSettings,
                ...t
            }
        };
    },
    CLIPS_SAVE_CLIP: function (e) {
        var t, n;
        let { clip: r } = e;
        (T = Math.max(T - 1, 0)),
            (y = {
                applicationName: r.applicationName,
                ended: !1,
                ...y,
                newClipIds: [...(null !== (t = null == y ? void 0 : y.newClipIds) && void 0 !== t ? t : []), r.id]
            }),
            (D = {
                ...D,
                newClipIds: [...(null !== (n = D.newClipIds) && void 0 !== n ? n : []), r.id]
            }),
            (I = I.filter((e) => {
                let { id: t } = e;
                return t !== r.id;
            })),
            (b = [r, ...b]),
            (D.hasClips = !0);
    },
    CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
        let { clip: t } = e;
        I = [t, ...I];
    },
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
        let { clipId: t } = e;
        I = I.filter((e) => {
            let { id: n } = e;
            return n !== t;
        });
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        let { clipType: t, streamKey: n, thumbnail: r } = e;
        if (((T += 1), (D.hasTakenDecoupledClip = D.hasTakenDecoupledClip || t === p.X9.DECOUPLED), null != n && null != r)) {
            var i;
            let e = Date.now();
            (C = null != C ? C : e),
                (R[n] = [
                    ...(null !== (i = R[n]) && void 0 !== i ? i : []),
                    {
                        timestamp: e,
                        thumbnail: r
                    }
                ]);
        }
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        T = Math.max(T - 1, 0);
    },
    CLIPS_SAVE_ANIMATION_END: function (e) {
        let { streamKey: t, timestamp: n } = e;
        C === n && (C = null), null == n ? (R[t] = []) : (R[t] = R[t].filter((e) => e.timestamp !== n));
    },
    STREAM_START: function (e) {
        let { sourceName: t, pid: n } = e;
        if (!D.clipsSettings.clipsEnabled) return !1;
        let r = t;
        if (null != n) {
            var i;
            let e = o.ZP.getGameForPID(n);
            r = null !== (i = null == e ? void 0 : e.name) && void 0 !== i ? i : r;
        }
        if (null == r || '' === r) return !1;
        y = {
            applicationName: r,
            newClipIds: [],
            ended: !1
        };
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        if (((C = null), (R[t] = []), null == y || (0, l.my)(t).ownerId !== u.default.getId())) return !1;
        y =
            0 === y.newClipIds.length
                ? null
                : {
                      ...y,
                      ended: !0
                  };
    },
    CLIPS_CLEAR_CLIPS_SESSION: function () {
        if (null == y) return !1;
        y = null;
    },
    CLIPS_CLEAR_NEW_CLIP_IDS: function () {
        D.newClipIds = [];
    },
    CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
        (D.hasClips = e.clips.length > 0), (b = e.clips);
    },
    CLIPS_DELETE_CLIP: function (e) {
        0 ===
            (b = b.filter((t) => {
                let { filepath: n } = t;
                return n !== e.filepath;
            })).length && (D.hasClips = !1);
    },
    CLIPS_UPDATE_METADATA: function (e) {
        let { clip: t } = e;
        for (let [e, n] of b.entries())
            if (n.id === t.id) {
                (b[e] = t), (b = [...b]);
                return;
            }
    },
    RTC_CONNECTION_FLAGS: function (e) {
        A[e.userId] = {
            clipsEnabled: (0, d.yE)(e.flags, h.BVn.CLIPS_ENABLED),
            allowVoiceRecording: (0, d.yE)(e.flags, h.BVn.ALLOW_VOICE_RECORDING),
            allowAnyViewerClips: (0, d.yE)(e.flags, h.BVn.ALLOW_ANY_VIEWER_CLIPS)
        };
    },
    CLIPS_SHOW_CALL_WARNING: function (e) {
        let { channelId: t } = e;
        S = t;
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        t !== S && (S = null);
    },
    CLIPS_CLASSIFY_HARDWARE: function (e) {
        let { classification: t } = e,
            n = D.hardwareClassification;
        (D.hardwareClassificationVersion = p.WM), (D.hardwareClassification = t), D.hardwareClassification === _.x.MEETS_AUTO_ENABLE && n !== _.x.MEETS_AUTO_ENABLE && (D.clipsSettings.clipsEnabled = !0);
        let r = D.hardwareClassificationForDecoupled;
        (D.hardwareClassificationForDecoupled = t), D.hardwareClassificationForDecoupled === _.x.MEETS_AUTO_ENABLE && r !== _.x.MEETS_AUTO_ENABLE && D.clipsSettings.clipsEnabled && (D.clipsSettings.decoupledClipsEnabled = !0);
    },
    CLIPS_INIT: function (e) {
        let { applicationName: t } = e;
        if (((N = null), !D.clipsSettings.clipsEnabled)) return !1;
        y = {
            applicationName: t,
            newClipIds: [],
            ended: !1
        };
    },
    CLIPS_INIT_FAILURE: function (e) {
        let { errMsg: t } = e;
        N = t;
    },
    CLIPS_DISMISS_EDUCATION: function (e) {
        let { educationType: t } = e;
        switch (t) {
            case p.D5.Error:
                N = null;
                break;
            case p.D5.Disabled:
            case p.D5.Enabled:
                (D.clipsEducationState.dismissedAt = Date.now()), (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (D.clipsEducationState.numberOfTimesDismissed += 1);
        }
    },
    RUNNING_GAMES_CHANGE: function (e) {
        let { added: t } = e;
        t.length > 0 && (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
    }
});
t.Z = w;
