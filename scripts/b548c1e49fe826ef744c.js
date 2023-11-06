(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54387"], {
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                d = n("255397"),
                r = n("191145"),
                o = n("782340");

            function s(e) {
                let t = (0, a.useStateFromStores)([r.default], () => r.default.getVoiceParticipantsHidden(e));
                return (0, l.jsx)(u.MenuCheckboxItem, {
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
            var l = n("37983");
            n("884691");
            var a = n("446674"),
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
                h = n("816106"),
                C = n("373469"),
                I = n("42203"),
                T = n("42887"),
                x = n("697218"),
                A = n("374014"),
                _ = n("49111"),
                v = n("353927"),
                U = n("782340");

            function V(e) {
                return (0, a.useStateFromStores)([C.default], () => {
                    let t = C.default.getActiveStreamForApplicationStream(e);
                    return null != t && (0, A.encodeStreamKey)(t) === (0, A.encodeStreamKey)(e)
                })
            }

            function b(e) {
                let {
                    stream: t,
                    analyticsContext: n,
                    appContext: C,
                    exitFullscreen: b,
                    onSelect: w
                } = e, R = function(e) {
                    let t = V(e),
                        n = x.default.getCurrentUser(),
                        d = null != n && e.ownerId === n.id,
                        r = (0, g.default)(),
                        {
                            enableViewerClipping: o
                        } = p.default.useExperiment({
                            location: "StreamContextMenu"
                        }, {
                            autoTrackExposure: !1
                        }),
                        s = (0, a.useStateFromStores)([M.default], () => M.default.isViewerClippingAllowedForUser(e.ownerId));
                    return r && o && t && !d ? (0, l.jsx)(u.MenuItem, {
                        id: "clip-stream",
                        disabled: !s,
                        label: U.default.Messages.CLIPS_VIEWERSIDE_SAVE,
                        action: () => (0, m.saveClip)((0, A.encodeStreamKey)(e))
                    }) : null
                }(t), j = V(t), O = function(e) {
                    let t = V(e),
                        n = (0, h.default)(e.ownerId, v.MediaEngineContextTypes.STREAM);
                    return t ? n : null
                }(t), L = function(e) {
                    let t;
                    let n = (0, a.useStateFromStores)([E.default], () => null != E.default.getRemoteSessionId()),
                        d = (0, a.useStateFromStores)([I.default], () => I.default.getChannel(e.channelId), [e.channelId]),
                        r = V(e),
                        i = x.default.getCurrentUser(),
                        c = null != i && e.ownerId === i.id;
                    return (t = c ? U.default.Messages.STOP_STREAMING : r ? U.default.Messages.STOP_WATCHING : U.default.Messages.WATCH_STREAM, n || !c && r && (null == d ? void 0 : d.isGuildStageVoice())) ? null : (0, l.jsx)(u.MenuItem, {
                        id: "watch",
                        label: t,
                        action: r ? function() {
                            (0, s.stopStream)((0, A.encodeStreamKey)(e))
                        } : function() {
                            o.default.selectVoiceChannel(e.channelId), (0, s.watchStream)(e)
                        }
                    })
                }(t), F = function(e) {
                    let t = V(e),
                        n = (0, a.useStateFromStores)([T.default], () => T.default.isLocalMute(e.ownerId, v.MediaEngineContextTypes.STREAM)),
                        r = x.default.getCurrentUser(),
                        o = null != r && e.ownerId === r.id;
                    return !t || o ? null : (0, l.jsx)(u.MenuCheckboxItem, {
                        id: "mute",
                        label: U.default.Messages.SOUND_MUTE,
                        action: function() {
                            d.default.toggleLocalMute(e.ownerId, v.MediaEngineContextTypes.STREAM)
                        },
                        checked: n
                    })
                }(t), y = (0, S.default)(t, C, b), k = (0, f.default)(t.channelId, t.ownerId), N = (0, c.default)(t.channelId), G = (0, a.useStateFromStores)([I.default], () => I.default.getChannel(t.channelId), [t.channelId]);
                return (0, l.jsx)(i.default, {
                    context: n,
                    object: _.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(u.Menu, {
                        navId: "stream-context",
                        onClose: r.closeContextMenu,
                        "aria-label": U.default.Messages.STREAM_ACTIONS_MENU_LABEL,
                        onSelect: w,
                        children: [(0, l.jsxs)(u.MenuGroup, {
                            children: [L, R, F]
                        }), (0, l.jsx)(u.MenuGroup, {
                            children: O
                        }), (0, l.jsxs)(u.MenuGroup, {
                            children: [(null == G ? void 0 : G.isGuildStageVoice()) ? null : N, k, j && y]
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
            var l = n("37983");
            n("884691");
            var a = n("446674"),
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
                    S = (0, a.useStateFromStores)([r.default], () => r.default.getLocalVolume(e, n), [e, n]),
                    M = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    g = n === c.MediaEngineContextTypes.STREAM;
                return M ? null : (0, l.jsx)(u.MenuControlItem, {
                    id: "user-volume",
                    label: g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
                    control: (t, a) => (0, l.jsx)(u.MenuSliderControl, {
                        ...t,
                        ref: a,
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