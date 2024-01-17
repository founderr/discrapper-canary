(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97203"], {
        295544: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e866c0682a80de08f451.svg"
        },
        195272: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e69c6ba7f0551970b560.svg"
        },
        907572: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FriendsIcon: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                i = a("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: s
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
                        className: s
                    })]
                })
            }
        },
        304983: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MoreHorizontalIcon: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                i = a("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        758946: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                createAudioMP4FromVideoMP4: function() {
                    return i
                }
            }), a("222007"), a("424973");
            var n = a("469520"),
                l = a.n(n);
            async function i(e) {
                let t = l.createFile(),
                    a = l.createFile(),
                    n = {};
                e.fileStart = 0, t.onReady = e => {
                    for (let l of (a.init({
                            duration: e.duration,
                            timescale: e.timescale
                        }), e.audioTracks)) n[l.id] = l, t.setExtractionOptions(l.id, null, {
                        nbSamples: 1 / 0
                    }), a.addTrack({
                        id: l.id,
                        timescale: l.timescale,
                        hdlr: "soun",
                        type: "mp4a",
                        duration: l.duration,
                        layer: l.layer,
                        channel_count: l.audio.channel_count,
                        samplerate: l.audio.sample_rate,
                        samplesize: l.audio.sample_size,
                        name: l.name
                    });
                    t.start()
                };
                let i = new Promise(e => {
                    t.onSamples = (l, i, r) => {
                        for (let e of r) a.addSample(l, e.data, e);
                        t.releaseUsedSamples(l, r.length), delete n[l];
                        let s = a.getTrackById(l),
                            u = t.getTrackById(l);
                        if (null != u.edts) {
                            let e = u.edts.elst;
                            s.add("edts").boxes.push(e)
                        }
                        0 === Object.keys(n).length && e()
                    }
                });
                return t.appendBuffer(e), t.flush(), await i, a.getBuffer()
            }
        },
        643290: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("446674"),
                r = a("77078"),
                s = a("442939"),
                u = a("915639"),
                o = a("953109"),
                d = a("299039"),
                c = a("782340"),
                f = a("258818");

            function m(e) {
                var t, a;
                let {
                    clip: m
                } = e, [v] = (0, s.default)([null !== (t = m.applicationId) && void 0 !== t ? t : ""]), E = (0, i.useStateFromStores)([u.default], () => u.default.locale), p = l.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
                return (0, n.jsxs)("div", {
                    className: f.root,
                    children: [(0, n.jsxs)("div", {
                        className: f.nameSection,
                        children: [(0, n.jsx)(o.default, {
                            game: v
                        }), (0, n.jsx)(r.Text, {
                            className: f.name,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: null !== (a = null == v ? void 0 : v.name) && void 0 !== a ? a : m.applicationName
                        })]
                    }), (0, n.jsxs)("div", {
                        className: f.timeContainer,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleDateString(E, {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit"
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleTimeString(E, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        488673: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("551042"),
                u = a("77078"),
                o = a("272030"),
                d = a("49671"),
                c = a("817963"),
                f = a("42203"),
                m = a("305961"),
                v = a("957255"),
                E = a("697218"),
                p = a("433487"),
                h = a("299039"),
                C = a("803725"),
                N = a("142485"),
                x = a("643290"),
                S = a("431734"),
                I = a("80028"),
                g = a("846325"),
                _ = a("782340"),
                L = a("515597"),
                M = a("446825").Buffer;

            function T(e) {
                let {
                    clip: t,
                    cropData: i,
                    channelId: T,
                    clipName: A,
                    voiceAudioEnabled: R,
                    applicationAudioEnabled: j,
                    onSetClipName: b,
                    onChangeVoiceAudioEnabled: P,
                    onChangeApplicationAudioEnabled: w,
                    onPrompt: D,
                    onClose: y
                } = e, [O, k] = l.useState(null), {
                    onShareClick: F
                } = (0, N.default)({
                    channelId: T,
                    setExporting: e => k(null != e ? "share" : null)
                });
                async function G() {
                    let e = f.default.getChannel(T);
                    k("export"), D(!0);
                    try {
                        let l = await (0, C.exportClip)(t, {
                            ...i,
                            applicationAudio: j,
                            voiceAudio: R
                        });
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await a.el("823749").then(a.bind(a, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, E.default).canCreateExpressions, u = null == A || "" === A ? (0, I.CLIP_NAME_TEMPLATE)(h.default.extractTimestamp(t.id)) : A, o = u.slice(0, g.MAX_LENGTH_SOUND_NAME);
                            return t => (0, n.jsx)(i, {
                                ...t,
                                showGuildPicker: !0,
                                guildId: s ? null == e ? void 0 : e.guild_id : void 0,
                                sourceFile: {
                                    file: new File([l], "".concat(u, ".mp4"), {
                                        type: "video/mp4"
                                    }),
                                    name: o
                                }
                            })
                        })
                    } catch (e) {} finally {
                        k(null), D(!1)
                    }
                }
                async function U() {
                    k("export"), D(!0);
                    try {
                        let e = await (0, C.exportClip)(t, {
                                ...i,
                                applicationAudio: j,
                                voiceAudio: R
                            }),
                            a = await e.arrayBuffer();
                        await d.default.fileManager.saveWithDialog(M.from(a), (0, I.CLIPS_EXPORT_FILENAME)(t.id))
                    } catch (e) {} finally {
                        k(null), D(!1)
                    }
                }

                function B() {
                    D(!0), (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("386092").then(a.bind(a, "386092"));
                        return a => (0, n.jsx)(e, {
                            clip: t,
                            ...a,
                            onClose: async () => {
                                await a.onClose(), D(!1)
                            },
                            onDelete: async () => {
                                await a.onClose(), y(), D(!1)
                            }
                        })
                    })
                }
                return (0, n.jsxs)("div", {
                    className: L.clipForm,
                    children: [(0, n.jsxs)("div", {
                        className: r(L.clipFormSection, L.editSection),
                        children: [(0, n.jsx)(u.FormItem, {
                            className: L.clipFormItem,
                            title: _.default.Messages.CLIPS_EDIT_TITLE,
                            children: (0, n.jsx)(u.TextInput, {
                                onChange: e => {
                                    "" === e ? b(void 0) : b(e)
                                },
                                value: A,
                                minLength: I.CLIP_NAME_MIN_CHAR_LENGTH,
                                maxLength: I.CLIP_NAME_MAX_CHAR_LENGTH,
                                placeholder: _.default.Messages.CLIPS_UNTITLED
                            })
                        }), (0, n.jsxs)("div", {
                            className: L.clipFormSwitches,
                            children: [(0, n.jsx)(u.FormSwitch, {
                                onChange: w,
                                value: j,
                                hideBorder: !0,
                                children: _.default.Messages.CLIPS_EDIT_GAME_AUDIO
                            }), (0, n.jsx)(u.FormSwitch, {
                                onChange: P,
                                value: R,
                                hideBorder: !0,
                                children: _.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: r(L.clipFormSection, L.metadataSection),
                        children: [(0, n.jsx)(x.default, {
                            clip: t
                        }), (0, n.jsx)(S.default, {
                            className: L.userList,
                            clip: t
                        })]
                    }), (0, n.jsxs)("div", {
                        className: L.clipFormFooter,
                        children: [(0, n.jsx)(u.Button, {
                            submitting: "share" === O,
                            disabled: null != O && "share" !== O,
                            color: u.Button.Colors.BRAND,
                            wrapperClassName: L.clipFormFooterButton,
                            onClick: () => F({
                                clip: {
                                    ...t,
                                    name: A
                                },
                                cropData: i,
                                applicationAudioEnabled: j,
                                voiceAudioEnabled: R,
                                onShareComplete: () => {
                                    s.closeModal(I.CLIPS_EDIT_MODAL_KEY), s.closeModal(I.CLIPS_GALLERY_MODAL_KEY)
                                }
                            }),
                            children: _.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.ICON,
                            className: L.clipFormFooterButton,
                            disabled: null != O,
                            wrapperClassName: r(L.clipFormFooterButton, {
                                [L.submittingWrapperFix]: null != O
                            }),
                            color: u.Button.Colors.PRIMARY,
                            onClick: y,
                            children: _.default.Messages.SAVE_CHANGES
                        }), (0, n.jsx)(u.Button, {
                            "aria-label": _.default.Messages.MORE_OPTIONS,
                            size: u.Button.Sizes.ICON,
                            wrapperClassName: r(L.clipFormFooterButton, {
                                [L.submittingWrapperFix]: null != O
                            }),
                            submitting: "export" === O,
                            disabled: null != O && "export" !== O,
                            color: u.Button.Colors.PRIMARY,
                            onClick: function(e) {
                                (0, o.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await a.el("87102").then(a.bind(a, "87102"));
                                    return t => (0, n.jsx)(e, {
                                        ...t,
                                        onExportToSoundboard: G,
                                        onExportToFile: U,
                                        onDelete: B,
                                        channelId: T
                                    })
                                })
                            },
                            children: (0, n.jsx)(p.default, {})
                        })]
                    })]
                })
            }
        },
        473070: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            }), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
            var n = a("37983"),
                l = a("884691"),
                i = a("759843"),
                r = a("77078"),
                s = a("477566"),
                u = a("49671"),
                o = a("812204"),
                d = a("685665"),
                c = a("803725"),
                f = a("758946"),
                m = a("99366"),
                v = a("135284"),
                E = a("488673"),
                p = a("5431"),
                h = a("464135"),
                C = a("28388"),
                N = a("782340"),
                x = a("756458");

            function S(e) {
                var t, a, p, h, C, S, g, _;
                let {
                    clip: L,
                    channelId: M,
                    transitionState: T,
                    onClose: A
                } = e, [R, j] = l.useState(!0), [b, P] = l.useState(!1), [w, D] = l.useState(null), [y, O] = l.useState(null), {
                    AnalyticsLocationProvider: k
                } = (0, d.default)(o.default.CLIPS_EDITOR);
                l.useEffect(() => {
                    (async function e() {
                        let e;
                        try {
                            e = await u.default.clips.loadClip(L.filepath)
                        } catch {
                            A(), s.default.show({
                                title: N.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                                body: N.default.Messages.CLIPS_LOAD_ERROR_BODY
                            });
                            return
                        }
                        let t = e.data.buffer,
                            a = await (0, f.createAudioMP4FromVideoMP4)(t),
                            n = URL.createObjectURL(new Blob([a], {
                                type: "audio/mp4"
                            })),
                            l = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        O(n), D(l)
                    })()
                }, [L.filepath, A]), l.useEffect(() => () => {
                    null != w && URL.revokeObjectURL(w)
                }, [w]), l.useEffect(() => () => {
                    null != y && URL.revokeObjectURL(y)
                }, [y]);
                let [F, G] = l.useState(null === (C = null === (t = L.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === C || C), [U, B] = l.useState(null === (S = null === (a = L.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === S || S), [V, H] = l.useState({
                    start: null !== (g = null === (p = L.editMetadata) || void 0 === p ? void 0 : p.start) && void 0 !== g ? g : 0,
                    end: null !== (_ = null === (h = L.editMetadata) || void 0 === h ? void 0 : h.end) && void 0 !== _ ? _ : 0
                }), [z, Z] = l.useState(L.name), K = l.useRef({
                    name: z,
                    editMetadata: {
                        start: V.start,
                        end: V.end,
                        voiceAudio: F,
                        applicationAudio: U
                    }
                });
                K.current = {
                    name: z,
                    editMetadata: {
                        start: V.start,
                        end: V.end,
                        voiceAudio: F,
                        applicationAudio: U
                    }
                };
                let X = (0, v.useClipProtocolURL)(L);
                return l.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != X && (e = {
                            thumbnail: await (0, m.createThumbnailFromVideo)(X, K.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(L.id, {
                            ...K.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [L.id, X]), (0, n.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: x.modalRoot,
                    transitionState: T,
                    children: (0, n.jsx)(k, {
                        children: (0, n.jsx)(r.ModalContent, {
                            className: x.modalContent,
                            children: null == w || null == y ? (0, n.jsx)("div", {
                                className: x.spinnerContainer,
                                children: (0, n.jsx)(r.Spinner, {})
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(I, {
                                    voiceAudioEnabled: F,
                                    applicationAudioEnabled: U,
                                    videoURL: w,
                                    cropData: V,
                                    onSetCropData: H,
                                    isLoading: R,
                                    hasOpenPrompt: b,
                                    onDoneLoading: () => j(!1),
                                    audioURL: y,
                                    transitionState: T
                                }), !R && (0, n.jsx)(E.default, {
                                    voiceAudioEnabled: F,
                                    channelId: M,
                                    applicationAudioEnabled: U,
                                    onChangeApplicationAudioEnabled: B,
                                    onChangeVoiceAudioEnabled: G,
                                    cropData: V,
                                    onSetClipName: Z,
                                    clipName: z,
                                    clip: L,
                                    onPrompt: P,
                                    onClose: A
                                })]
                            })
                        })
                    })
                })
            }

            function I(e) {
                let {
                    cropData: t,
                    onSetCropData: a,
                    voiceAudioEnabled: i,
                    applicationAudioEnabled: s,
                    isLoading: u,
                    hasOpenPrompt: o,
                    onDoneLoading: d,
                    videoURL: c,
                    audioURL: f,
                    transitionState: m
                } = e, v = l.useRef(null), E = l.useCallback(() => {
                    var e;
                    null === (e = v.current) || void 0 === e || e.seek(t.start), d()
                }, [d, t.start]);
                return l.useEffect(() => {
                    var e, t, a;
                    o && !(null === (t = v.current) || void 0 === t ? void 0 : null === (e = t.videoElement) || void 0 === e ? void 0 : e.paused) && (null === (a = v.current) || void 0 === a || a.pause())
                }, [o]), l.useEffect(() => {
                    function e(e) {
                        var a, n;
                        if ((null === (a = document.activeElement) || void 0 === a ? void 0 : a.tagName) === "INPUT") return;
                        let l = v.current;
                        if (null == l) return;
                        let i = null === (n = v.current) || void 0 === n ? void 0 : n.videoElement;
                        if (null == i) return;
                        let r = (0, C.default)(i.duration, e.shiftKey),
                            s = !1;
                        switch (e.key) {
                            case " ":
                                s = !0, i.paused ? l.play() : l.pause();
                                break;
                            case "ArrowLeft":
                                s = !0, l.seek(Math.max(i.currentTime - r, t.start));
                                break;
                            case "ArrowRight":
                                s = !0, l.seek(Math.min(i.currentTime + r, t.end))
                        }
                        s && (e.stopPropagation(), e.preventDefault())
                    }
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [t.start, t.end]), (0, n.jsxs)("div", {
                    className: x.editorPane,
                    children: [(0, n.jsx)("div", {
                        className: x.videoSizer,
                        children: (0, n.jsx)(p.default, {
                            applicationAudioEnabled: s,
                            voiceAudioEnabled: i,
                            ref: v,
                            audioSrc: f,
                            src: c,
                            isLoading: u,
                            onDoneLoading: E,
                            startTime: t.start,
                            endTime: t.end
                        })
                    }), !u && m && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(m) ? (0, n.jsx)(h.default, {
                        videoPlayerRef: v,
                        cropData: t,
                        setCropData: a,
                        sourceURL: c
                    }) : null]
                })
            }
        },
        5431: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("222007"), a("424973");
            var n = a("37983"),
                l = a("884691"),
                i = a("917351"),
                r = a("31695"),
                s = a("58608"),
                u = a("756458");

            function o(e) {
                let {
                    setRef: t,
                    audioTrackLabel: a,
                    src: i,
                    muted: r
                } = e, s = l.useCallback(e => {
                    t(e, a)
                }, [t, a]), o = l.useCallback(e => {
                    Object.values(e.currentTarget.audioTracks).forEach(e => {
                        e.enabled = a === e.label
                    })
                }, [a]);
                return (0, n.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(a),
                    className: u.hidden,
                    ref: s,
                    src: i,
                    muted: r,
                    preload: "auto",
                    onLoadedMetadata: o
                })
            }
            var d = l.forwardRef(function(e, t) {
                let {
                    src: a,
                    audioSrc: d,
                    applicationAudioEnabled: c,
                    voiceAudioEnabled: f,
                    isLoading: m,
                    onDoneLoading: v,
                    startTime: E = 0,
                    endTime: p
                } = e, h = l.useRef({}), [C, N] = l.useState([]), x = l.useRef(!1), S = l.useCallback(() => {
                    let e = h.current.main;
                    if (null == e) return;
                    let t = (0, i.round)(e.currentTime, 3),
                        a = (0, i.round)(E, 3),
                        n = null != p ? (0, i.round)(p, 3) : (0, i.round)(e.duration, 3);
                    if (t >= n || t < a) {
                        for (let e of Object.values(h.current)) null != e && (e.currentTime = E);
                        return !0
                    }
                }, [E, p]);
                (0, r.default)(() => {
                    if (x.current) {
                        let e = S();
                        e && I()
                    }
                });
                let I = l.useCallback(() => {
                        for (let e of (x.current = !0, S(), Object.values(h.current))) null != e && e.play()
                    }, [S]),
                    g = l.useCallback(() => {
                        for (let e of Object.values(h.current)) null != e && e.pause()
                    }, []),
                    _ = l.useCallback(e => {
                        var t;
                        for (let a of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (x.current = !1), Object.values(h.current))) null != a && (a.currentTime = e)
                    }, []),
                    L = l.useCallback(() => {
                        var e;
                        (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? I(): g()
                    }, [I, g]),
                    M = l.useCallback(e => {
                        h.current.main = e
                    }, []),
                    T = l.useCallback(e => {
                        let t = [];
                        for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(":application") ? a.enabled = !0 : a.label.includes(":voice") ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
                        N(t)
                    }, []),
                    A = l.useCallback((e, t) => {
                        h.current[t] = e
                    }, []);
                return (l.useImperativeHandle(t, () => ({
                    play: I,
                    seek: _,
                    pause: g,
                    videoElement: h.current.main
                })), null == a) ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.default, {
                        onClick: L,
                        className: m ? u.hidden : u.displayVideo,
                        ref: M,
                        src: a,
                        muted: !c,
                        onLoadedMetadata: T,
                        onLoadedData: v,
                        preload: "auto"
                    }), C.map(e => (0, n.jsx)(o, {
                        audioTrackLabel: e,
                        setRef: A,
                        src: d,
                        muted: !f
                    }, e))]
                })
            })
        },
        464135: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("917351"),
                u = a("65597"),
                o = a("718776"),
                d = a("77078"),
                c = a("731898"),
                f = a("31695"),
                m = a("471671"),
                v = a("830837"),
                E = a("132755"),
                p = a("58608"),
                h = a("28388"),
                C = a("80028"),
                N = a("782340"),
                x = a("766825"),
                S = function(e) {
                    var t, a, i, S, _, L;
                    let {
                        sourceURL: M,
                        cropData: T,
                        videoPlayerRef: A,
                        setCropData: R
                    } = e, [j, b] = l.useState((L = !(null === (a = A.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), L)), P = l.useRef(null), [w, D] = l.useState(null), [y, O] = l.useState(), k = l.useRef(null), F = l.useRef(null), [G, U] = l.useState(0), [B, V] = l.useState(!1), [H, z] = l.useState(null);
                    (0, f.default)(() => {
                        var e;
                        let t = null === (e = A.current) || void 0 === e ? void 0 : e.videoElement;
                        null != t && G !== t.currentTime && U(t.currentTime)
                    });
                    let Z = l.useMemo(() => T.end - T.start, [T]);
                    l.useEffect(() => {
                        var e;
                        let t = null === (e = A.current) || void 0 === e ? void 0 : e.videoElement,
                            a = k.current,
                            n = F.current;
                        if (null == t || null == a || null == n) return;
                        let l = (0, s.debounce)(b, C.CLIP_PLAYING_DEBOUNCE_MS),
                            i = () => {
                                D(null), V(!1), l.cancel(), l(!0)
                            },
                            r = () => {
                                l.cancel(), l(!1)
                            };
                        return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
                            t.removeEventListener("play", i), t.removeEventListener("pause", r)
                        }
                    }, [A]);
                    let {
                        ref: K,
                        width: X = 0,
                        height: W = 0
                    } = (0, c.default)(), Y = (0, u.default)([m.default], () => m.default.windowSize());
                    l.useMemo(() => {
                        let e = K.current;
                        null != e && z(e.getBoundingClientRect())
                    }, [Y.width, Y.height, X]);
                    let q = l.useRef(null),
                        J = l.useRef({}),
                        Q = l.useCallback(e => {
                            var t;
                            let a = (0, s.clamp)(e, 0, T.end - C.MIN_CLIP_DURATION_SECONDS);
                            R({
                                ...T,
                                start: a
                            }), null === (t = A.current) || void 0 === t || t.seek(a)
                        }, [T, R, A]),
                        $ = l.useCallback(e => {
                            var t, a;
                            let n = null === (t = A.current) || void 0 === t ? void 0 : t.videoElement;
                            if (null == n) return;
                            let l = (0, s.clamp)(e, T.start + C.MIN_CLIP_DURATION_SECONDS, n.duration);
                            R({
                                ...T,
                                end: l
                            }), null === (a = A.current) || void 0 === a || a.seek(l)
                        }, [T, R, A]),
                        ee = l.useCallback((e, t) => {
                            var a, n;
                            if (null == y) return;
                            if (null == H) return null;
                            let l = (0, s.clamp)(e, H.left, H.right),
                                i = (l - H.left) / H.width * y,
                                r = (0, s.clamp)(i, 0, y),
                                u = w;
                            if (null == u && t && (u = r <= T.start ? "start" : r >= T.end ? "end" : "playhead", null === (a = A.current) || void 0 === a || a.pause(), D(u), V(j)), "start" === u) Q(r);
                            else if ("end" === u) $(r);
                            else if ("playhead" === u) {
                                let e = (0, s.clamp)(r, T.start, T.end);
                                null === (n = A.current) || void 0 === n || n.seek(e)
                            }
                        }, [y, H, w, T.start, T.end, A, j, Q, $]),
                        et = l.useCallback(e => {
                            var t;
                            let a = null === (t = A.current) || void 0 === t ? void 0 : t.videoElement;
                            if (null == a) return;
                            let n = (0, h.default)(a.duration, e.shiftKey),
                                l = !1;
                            switch (e.key) {
                                case "ArrowLeft":
                                    l = !0, Q(T.start - n);
                                    break;
                                case "ArrowRight":
                                    l = !0, Q(T.start + n)
                            }
                            l && (e.stopPropagation(), e.preventDefault())
                        }, [A, Q, T.start]),
                        ea = l.useCallback(e => {
                            var t;
                            let a = null === (t = A.current) || void 0 === t ? void 0 : t.videoElement;
                            if (null == a) return;
                            let n = (0, h.default)(a.duration, e.shiftKey),
                                l = !1;
                            switch (e.key) {
                                case "ArrowLeft":
                                    l = !0, $(T.end - n);
                                    break;
                                case "ArrowRight":
                                    l = !0, $(T.end + n)
                            }
                            l && (e.stopPropagation(), e.preventDefault())
                        }, [A, $, T.end]),
                        en = l.useCallback(e => {
                            ee(e.clientX, !0)
                        }, [ee]),
                        el = l.useCallback(e => {
                            ee(e.clientX, !1)
                        }, [ee]),
                        ei = l.useCallback(() => {
                            if (B) {
                                var e;
                                null === (e = A.current) || void 0 === e || e.play()
                            }
                            V(!1), D(null)
                        }, [A, B]);
                    l.useEffect(() => (document.addEventListener("mousemove", el), document.addEventListener("mouseup", ei), () => {
                        document.removeEventListener("mousemove", el), document.removeEventListener("mouseup", ei)
                    }), [el, ei]), l.useEffect(() => {
                        (async function e() {
                            var e;
                            let t = K.current,
                                a = P.current;
                            if (null == t || null == a || null == y) return;
                            t.height = W, t.width = X;
                            let n = t.getContext("2d");
                            if (null == n) return;
                            n.fillStyle = "#000", n.fillRect(0, 0, X, W);
                            let l = a.videoWidth / a.videoHeight,
                                i = Math.ceil(W * l),
                                r = Math.ceil(X / i),
                                s = q.current;
                            if (null == s) return;
                            s.width = i, s.height = W;
                            let u = null == s ? void 0 : s.getContext("2d", {
                                willReadFrequently: !0
                            });
                            if (null == u) return;
                            let o = J.current;
                            if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
                                for (let e = 0; e < r; e++) n.putImageData(o[r][e], i * e, 0);
                                return
                            }
                            for (let e = 0; e < r; e++) await new Promise(t => {
                                a.onseeked = () => {
                                    n.drawImage(a, i * e, 0, i, W), u.drawImage(a, 0, 0, i, W);
                                    let l = u.getImageData(0, 0, i, W);
                                    null == o[r] && (o[r] = []), o[r][e] = l, t()
                                }, a.currentTime = i / X * y * e
                            })
                        })()
                    }, [X, W, K, y, q]);
                    let er = G - T.start,
                        es = null === (i = A.current) || void 0 === i ? void 0 : i.videoElement;
                    return (0, n.jsx)("div", {
                        className: x.centeringWrapper,
                        children: (0, n.jsxs)("div", {
                            className: x.timelineContainer,
                            children: [(0, n.jsx)("div", {
                                className: x.playPauseButtonWrapper,
                                children: (0, n.jsx)(d.Clickable, {
                                    tabIndex: 0,
                                    onClick: () => {
                                        var e, t;
                                        return j ? null === (e = A.current) || void 0 === e ? void 0 : e.pause() : null === (t = A.current) || void 0 === t ? void 0 : t.play()
                                    },
                                    className: x.playPauseButton,
                                    children: j ? (0, n.jsx)(v.default, {
                                        width: 24,
                                        height: 24,
                                        className: x.playPauseIcon
                                    }) : (0, n.jsx)(E.default, {
                                        width: 24,
                                        height: 24,
                                        className: x.playPauseIcon
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: r(x.timeline, {
                                    [x.timelineDragging]: null != w
                                }),
                                onMouseDown: en,
                                children: [(0, n.jsx)("canvas", {
                                    className: x.hiddenCanvas,
                                    ref: q
                                }), (0, n.jsx)("canvas", {
                                    className: x.timelineBackground,
                                    ref: K
                                }), (0, n.jsx)(o.FocusRing, {
                                    children: (0, n.jsx)("div", {
                                        tabIndex: 0,
                                        ref: k,
                                        className: x.playhead,
                                        style: {
                                            left: null != es ? "".concat(es.currentTime / es.duration * 100, "%") : 0
                                        }
                                    })
                                }), (0, n.jsx)(p.default, {
                                    preload: "auto",
                                    onLoadedMetadata: function() {
                                        let e = P.current;
                                        if (null != e) {
                                            if (O(e.duration), 0 === T.start && (0 === T.end || T.end === e.duration)) {
                                                var t;
                                                null === (t = A.current) || void 0 === t || t.seek(e.duration / 2), U(e.duration / 2)
                                            }
                                            0 === T.end && R(t => ({
                                                ...t,
                                                end: e.duration
                                            }))
                                        }
                                    },
                                    className: x.timelineVideo,
                                    ref: P,
                                    src: M,
                                    muted: !0
                                }), (0, n.jsxs)("div", {
                                    className: x.dragBox,
                                    style: {
                                        left: null != y ? "".concat(T.start / y * 100, "%") : "0",
                                        right: null != y ? "".concat((y - T.end) / y * 100, "%") : "0"
                                    },
                                    children: [(0, n.jsx)("div", {
                                        className: x.timePillContainer,
                                        children: (0, n.jsx)("div", {
                                            ref: F,
                                            className: x.timePillBackground,
                                            children: (0, n.jsxs)(d.Text, {
                                                variant: "text-sm/normal",
                                                className: x.timePillText,
                                                color: "always-white",
                                                children: [I(er), (0, n.jsx)("span", {
                                                    className: x.slashCharacter,
                                                    children: " / "
                                                }), I(Z)]
                                            })
                                        })
                                    }), (0, n.jsx)(o.FocusRing, {
                                        children: (0, n.jsx)("button", {
                                            className: r(x.dragHandleLeft, {
                                                [x.dragging]: "start" === w
                                            }),
                                            onMouseDown: en,
                                            onKeyDown: et,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": T.start,
                                            "aria-valuetext": g(T.start),
                                            "aria-valuemax": T.end - C.MIN_CLIP_DURATION_SECONDS,
                                            "aria-label": N.default.Messages.CLIPS_CROP_START,
                                            children: (0, n.jsx)("div", {
                                                className: x.cropLeftArrow
                                            })
                                        })
                                    }), (0, n.jsx)(o.FocusRing, {
                                        children: (0, n.jsx)("button", {
                                            className: r(x.dragHandleRight, {
                                                [x.dragging]: "end" === w
                                            }),
                                            onMouseDown: en,
                                            onKeyDown: ea,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": T.start + C.MIN_CLIP_DURATION_SECONDS,
                                            "aria-valuenow": T.end,
                                            "aria-valuetext": g(T.end),
                                            "aria-valuemax": null === (_ = A.current) || void 0 === _ ? void 0 : null === (S = _.videoElement) || void 0 === S ? void 0 : S.duration,
                                            "aria-label": N.default.Messages.CLIPS_CROP_END,
                                            children: (0, n.jsx)("div", {
                                                className: x.cropRightArrow
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                };

            function I(e) {
                ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
                let t = Math.floor(e / 60),
                    a = Math.floor(e % 60),
                    n = Math.floor(e % 1 * 100);
                return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, n = n < 10 ? "0" + n : n, "".concat(t, ":").concat(a, ".").concat(n)
            }

            function g(e) {
                let t = N.default.Messages.DURATION_MINUTES.format({
                        minutes: Math.floor(e / 60)
                    }),
                    a = N.default.Messages.DURATION_SECONDS.format({
                        seconds: e % 60
                    });
                return "".concat(t, " ").concat(a)
            }
        },
        431734: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("446674"),
                u = a("77078"),
                o = a("308289"),
                d = a("697218"),
                c = a("564875"),
                f = a("449008"),
                m = a("387111"),
                v = a("782340"),
                E = a("887642");

            function p(e) {
                let {
                    user: t
                } = e, a = m.default.useName(null, null, t);
                return (0, n.jsxs)("div", {
                    className: E.userItem,
                    children: [(0, n.jsx)(o.default, {
                        user: t
                    }), (0, n.jsx)(u.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: a
                    })]
                })
            }

            function h(e) {
                let {
                    clip: t,
                    className: a
                } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = l.useCallback(e => {
                    let {
                        row: t
                    } = e, a = i[t];
                    return null == a ? null : (0, n.jsx)(p, {
                        user: a
                    }, t)
                }, [i]);
                return (0, n.jsxs)("div", {
                    className: r(a, E.root),
                    children: [(0, n.jsx)("div", {
                        className: E.header,
                        children: (0, n.jsxs)(u.FormTitle, {
                            className: E.title,
                            children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, n.jsxs)("div", {
                                className: E.userCountPill,
                                children: [(0, n.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, n.jsx)(c.default, {
                                    className: E.userCountIcon
                                })]
                            })]
                        })
                    }), (0, n.jsx)(u.List, {
                        className: E.userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: o
                    })]
                })
            }
        },
        28388: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var n = a("80028");

            function l(e, t) {
                let a = e / n.SEEK_DENOMINATOR;
                return t && (a /= n.SEEK_SHIFT_MODIFIER), a
            }
        },
        270161: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return r
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var n = a("316693"),
                l = a("923510"),
                i = a("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = n.default.combine(r, i.Permissions.CONNECT),
                u = n.default.combine(r, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useManageResourcePermissions: function() {
                    return E
                },
                getManageResourcePermissions: function() {
                    return p
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return h
                },
                useShouldShowInventoryGuildSettingsCoachmark: function() {
                    return C
                }
            }), a("222007");
            var n = a("884691"),
                l = a("316693"),
                i = a("446674"),
                r = a("252931"),
                s = a("813006");
            a("923959");
            var u = a("957255"),
                o = a("697218");
            a("991170");
            var d = a("270161"),
                c = a("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                m = (e, t, a, n) => {
                    if (null == e) return !1;
                    if (a) return !0;
                    if ("creator_id" in e) return n && null != t && e.creator_id === t.id;
                    if ("userId" in e) return n && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var l;
                        return n && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
                    }
                    return !1
                },
                v = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, c.Permissions.CREATE_EVENTS), l.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                E = e => {
                    let [t, a] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e), [l, r, d, E] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(a, e)]), p = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = n.useCallback(e => m(e, p, r, l), [l, r, p]), C = n.useCallback(e => m(e, p, E, d), [E, d, p]);
                    return null == e ? f : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: E,
                        canManageGuildExpression: h,
                        canManageGuildEvent: C
                    }
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [n, l] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e),
                        i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(n, e),
                        E = t.can(l, e),
                        p = a.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: i,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: E,
                        canManageGuildExpression: e => m(e, p, r, i),
                        canManageGuildEvent: e => m(e, p, E, d)
                    }
                },
                h = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: a
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != a
                },
                C = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: a,
                            getNewSettingsDescriptionLine1: n
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != a && null != n()
                }
        },
        433487: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                i = a("304983"),
                r = a("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, i.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        564875: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                i = a("907572"),
                r = a("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("path", {
                                fill: l,
                                className: i,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, n.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, i.FriendsIcon, void 0, {
                    size: 16
                })
        }
    }
]);