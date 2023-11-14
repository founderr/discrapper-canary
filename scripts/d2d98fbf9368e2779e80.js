(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54387"], {
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                d = n("255397"),
                r = n("191145"),
                o = n("782340");

            function s(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: o.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => d.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        172844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                d = n("629109"),
                r = n("272030"),
                o = n("987317"),
                s = n("990766"),
                i = n("901582"),
                c = n("243288"),
                f = n("769928"),
                S = n("976074"),
                M = n("386045"),
                g = n("18346"),
                m = n("803725"),
                E = n("76393"),
                p = n("103979"),
                C = n("816106"),
                I = n("373469"),
                h = n("42203"),
                T = n("42887"),
                x = n("697218"),
                A = n("374014"),
                v = n("49111"),
                _ = n("353927"),
                U = n("782340");

            function V(e) {
                return (0, l.useStateFromStores)([I.default], () => {
                    let t = I.default.getActiveStreamForApplicationStream(e);
                    return null != t && (0, A.encodeStreamKey)(t) === (0, A.encodeStreamKey)(e)
                })
            }

            function b(e) {
                let {
                    stream: t,
                    analyticsContext: n,
                    appContext: I,
                    exitFullscreen: b,
                    onSelect: w
                } = e, O = function(e) {
                    let t = V(e),
                        n = x.default.getCurrentUser(),
                        d = null != n && e.ownerId === n.id,
                        r = (0, g.default)(),
                        {
                            enableViewerClipping: o,
                            ignoreSenderPreference: s
                        } = p.default.useExperiment({
                            location: "StreamContextMenu"
                        }, {
                            autoTrackExposure: !1
                        }),
                        i = (0, l.useStateFromStores)([M.default], () => M.default.getIsAtMaxSaveClipOperations()),
                        c = (0, l.useStateFromStores)([M.default], () => M.default.isViewerClippingAllowedForUser(e.ownerId)) || s;
                    return r && o && t && !d ? (0, a.jsx)(u.MenuItem, {
                        id: "clip-stream",
                        disabled: !c || i,
                        label: U.default.Messages.CLIPS_VIEWERSIDE_SAVE,
                        action: () => (0, m.saveClip)((0, A.encodeStreamKey)(e))
                    }) : null
                }(t), R = V(t), j = function(e) {
                    let t = V(e),
                        n = (0, C.default)(e.ownerId, _.MediaEngineContextTypes.STREAM);
                    return t ? n : null
                }(t), F = function(e) {
                    let t;
                    let n = (0, l.useStateFromStores)([E.default], () => null != E.default.getRemoteSessionId()),
                        d = (0, l.useStateFromStores)([h.default], () => h.default.getChannel(e.channelId), [e.channelId]),
                        r = V(e),
                        i = x.default.getCurrentUser(),
                        c = null != i && e.ownerId === i.id;
                    return (t = c ? U.default.Messages.STOP_STREAMING : r ? U.default.Messages.STOP_WATCHING : U.default.Messages.WATCH_STREAM, n || !c && r && (null == d ? void 0 : d.isGuildStageVoice())) ? null : (0, a.jsx)(u.MenuItem, {
                        id: "watch",
                        label: t,
                        action: r ? function() {
                            (0, s.stopStream)((0, A.encodeStreamKey)(e))
                        } : function() {
                            o.default.selectVoiceChannel(e.channelId), (0, s.watchStream)(e)
                        }
                    })
                }(t), L = function(e) {
                    let t = V(e),
                        n = (0, l.useStateFromStores)([T.default], () => T.default.isLocalMute(e.ownerId, _.MediaEngineContextTypes.STREAM)),
                        r = x.default.getCurrentUser(),
                        o = null != r && e.ownerId === r.id;
                    return !t || o ? null : (0, a.jsx)(u.MenuCheckboxItem, {
                        id: "mute",
                        label: U.default.Messages.SOUND_MUTE,
                        action: function() {
                            d.default.toggleLocalMute(e.ownerId, _.MediaEngineContextTypes.STREAM)
                        },
                        checked: n
                    })
                }(t), y = (0, S.default)(t, I, b), k = (0, f.default)(t.channelId, t.ownerId), N = (0, c.default)(t.channelId), G = (0, l.useStateFromStores)([h.default], () => h.default.getChannel(t.channelId), [t.channelId]);
                return (0, a.jsx)(i.default, {
                    context: n,
                    object: v.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, a.jsxs)(u.Menu, {
                        navId: "stream-context",
                        onClose: r.closeContextMenu,
                        "aria-label": U.default.Messages.STREAM_ACTIONS_MENU_LABEL,
                        onSelect: w,
                        children: [(0, a.jsxs)(u.MenuGroup, {
                            children: [F, O, L]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: j
                        }), (0, a.jsxs)(u.MenuGroup, {
                            children: [(null == G ? void 0 : G.isGuildStageVoice()) ? null : N, k, R && y]
                        })]
                    })
                })
            }
        },
        816106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                d = n("629109"),
                r = n("42887"),
                o = n("697218"),
                s = n("829536"),
                i = n("773336"),
                c = n("353927"),
                f = n("782340");

            function S(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
                    S = (0, l.useStateFromStores)([r.default], () => r.default.getLocalVolume(e, n), [e, n]),
                    M = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    g = n === c.MediaEngineContextTypes.STREAM;
                return M ? null : (0, a.jsx)(u.MenuControlItem, {
                    id: "user-volume",
                    label: g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
                    control: (t, l) => (0, a.jsx)(u.MenuSliderControl, {
                        ...t,
                        ref: l,
                        value: (0, s.amplitudeToPerceptual)(S),
                        maxValue: i.isPlatformEmbedded ? 200 : 100,
                        onChange: t => d.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
                        "aria-label": g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
                    })
                })
            }
        }
    }
]);