(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97203"], {
        295544: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e866c0682a80de08f451.svg"
        },
        195272: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e69c6ba7f0551970b560.svg"
        },
        907572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FriendsIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: s
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z",
                        className: s
                    })]
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        758946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createAudioMP4FromVideoMP4: function() {
                    return i
                }
            }), n("222007"), n("424973");
            var a = n("469520"),
                l = n.n(a);
            async function i(e) {
                let t = l.createFile(),
                    n = l.createFile(),
                    a = {};
                e.fileStart = 0, t.onReady = e => {
                    for (let l of (n.init({
                            duration: e.duration,
                            timescale: e.timescale
                        }), e.audioTracks)) a[l.id] = l, t.setExtractionOptions(l.id, null, {
                        nbSamples: 1 / 0
                    }), n.addTrack({
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
                        for (let e of r) n.addSample(l, e.data, e);
                        t.releaseUsedSamples(l, r.length), delete a[l];
                        let s = n.getTrackById(l),
                            u = t.getTrackById(l);
                        if (null != u.edts) {
                            let e = u.edts.elst;
                            s.add("edts").boxes.push(e)
                        }
                        0 === Object.keys(a).length && e()
                    }
                });
                return t.appendBuffer(e), t.flush(), await i, n.getBuffer()
            }
        },
        643290: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("446674"),
                r = n("77078"),
                s = n("442939"),
                u = n("915639"),
                o = n("953109"),
                d = n("299039"),
                c = n("782340"),
                f = n("258818");

            function m(e) {
                var t, n;
                let {
                    clip: m
                } = e, [v] = (0, s.default)([null !== (t = m.applicationId) && void 0 !== t ? t : ""]), E = (0, i.useStateFromStores)([u.default], () => u.default.locale), p = l.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
                return (0, a.jsxs)("div", {
                    className: f.root,
                    children: [(0, a.jsxs)("div", {
                        className: f.nameSection,
                        children: [(0, a.jsx)(o.default, {
                            game: v
                        }), (0, a.jsx)(r.Text, {
                            className: f.name,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: null !== (n = null == v ? void 0 : v.name) && void 0 !== n ? n : m.applicationName
                        })]
                    }), (0, a.jsxs)("div", {
                        className: f.timeContainer,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleDateString(E, {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
                            }), (0, a.jsx)(r.Text, {
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
        488673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                r = n.n(i),
                s = n("551042"),
                u = n("77078"),
                o = n("272030"),
                d = n("49671"),
                c = n("817963"),
                f = n("42203"),
                m = n("305961"),
                v = n("957255"),
                E = n("697218"),
                p = n("433487"),
                h = n("299039"),
                C = n("803725"),
                N = n("142485"),
                x = n("643290"),
                S = n("431734"),
                g = n("80028"),
                I = n("846325"),
                _ = n("782340"),
                L = n("515597"),
                M = n("446825").Buffer;

            function T(e) {
                let {
                    clip: t,
                    cropData: i,
                    channelId: T,
                    clipName: A,
                    voiceAudioEnabled: j,
                    applicationAudioEnabled: R,
                    onSetClipName: P,
                    onChangeVoiceAudioEnabled: b,
                    onChangeApplicationAudioEnabled: w,
                    onPrompt: y,
                    onClose: D
                } = e, [k, O] = l.useState(null), {
                    onShareClick: G
                } = (0, N.default)({
                    channelId: T,
                    setExporting: e => O(null != e ? "share" : null)
                });
                async function F() {
                    let e = f.default.getChannel(T);
                    O("export"), y(!0);
                    try {
                        let l = await (0, C.exportClip)(t, {
                            ...i,
                            applicationAudio: R,
                            voiceAudio: j
                        });
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await n.el("823749").then(n.bind(n, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, E.default).canCreateExpressions, u = null == A || "" === A ? (0, g.CLIP_NAME_TEMPLATE)(h.default.extractTimestamp(t.id)) : A, o = u.slice(0, I.MAX_LENGTH_SOUND_NAME);
                            return t => (0, a.jsx)(i, {
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
                        O(null), y(!1)
                    }
                }
                async function U() {
                    O("export"), y(!0);
                    try {
                        let e = await (0, C.exportClip)(t, {
                                ...i,
                                applicationAudio: R,
                                voiceAudio: j
                            }),
                            n = await e.arrayBuffer();
                        await d.default.fileManager.saveWithDialog(M.from(n), (0, g.CLIPS_EXPORT_FILENAME)(t.id))
                    } catch (e) {} finally {
                        O(null), y(!1)
                    }
                }

                function B() {
                    y(!0), (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("386092").then(n.bind(n, "386092"));
                        return n => (0, a.jsx)(e, {
                            clip: t,
                            ...n,
                            onClose: async () => {
                                await n.onClose(), y(!1)
                            },
                            onDelete: async () => {
                                await n.onClose(), D(), y(!1)
                            }
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: L.clipForm,
                    children: [(0, a.jsxs)("div", {
                        className: r(L.clipFormSection, L.editSection),
                        children: [(0, a.jsx)(u.FormItem, {
                            className: L.clipFormItem,
                            title: _.default.Messages.CLIPS_EDIT_TITLE,
                            children: (0, a.jsx)(u.TextInput, {
                                onChange: e => {
                                    "" === e ? P(void 0) : P(e)
                                },
                                value: A,
                                minLength: g.CLIP_NAME_MIN_CHAR_LENGTH,
                                maxLength: g.CLIP_NAME_MAX_CHAR_LENGTH,
                                placeholder: _.default.Messages.CLIPS_UNTITLED
                            })
                        }), (0, a.jsxs)("div", {
                            className: L.clipFormSwitches,
                            children: [(0, a.jsx)(u.FormSwitch, {
                                onChange: w,
                                value: R,
                                hideBorder: !0,
                                children: _.default.Messages.CLIPS_EDIT_GAME_AUDIO
                            }), (0, a.jsx)(u.FormSwitch, {
                                onChange: b,
                                value: j,
                                hideBorder: !0,
                                children: _.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: r(L.clipFormSection, L.metadataSection),
                        children: [(0, a.jsx)(x.default, {
                            clip: t
                        }), (0, a.jsx)(S.default, {
                            className: L.userList,
                            clip: t
                        })]
                    }), (0, a.jsxs)("div", {
                        className: L.clipFormFooter,
                        children: [(0, a.jsx)(u.Button, {
                            submitting: "share" === k,
                            disabled: null != k && "share" !== k,
                            color: u.Button.Colors.BRAND,
                            wrapperClassName: L.clipFormFooterButton,
                            onClick: () => G({
                                clip: {
                                    ...t,
                                    name: A
                                },
                                cropData: i,
                                applicationAudioEnabled: R,
                                voiceAudioEnabled: j,
                                onShareComplete: () => {
                                    s.closeModal(g.CLIPS_EDIT_MODAL_KEY), s.closeModal(g.CLIPS_GALLERY_MODAL_KEY)
                                }
                            }),
                            children: _.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, a.jsx)(u.Button, {
                            size: u.Button.Sizes.ICON,
                            className: L.clipFormFooterButton,
                            disabled: null != k,
                            wrapperClassName: r(L.clipFormFooterButton, {
                                [L.submittingWrapperFix]: null != k
                            }),
                            color: u.Button.Colors.PRIMARY,
                            onClick: D,
                            children: _.default.Messages.SAVE_CHANGES
                        }), (0, a.jsx)(u.Button, {
                            "aria-label": _.default.Messages.MORE_OPTIONS,
                            size: u.Button.Sizes.ICON,
                            wrapperClassName: r(L.clipFormFooterButton, {
                                [L.submittingWrapperFix]: null != k
                            }),
                            submitting: "export" === k,
                            disabled: null != k && "export" !== k,
                            color: u.Button.Colors.PRIMARY,
                            onClick: function(e) {
                                (0, o.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("87102").then(n.bind(n, "87102"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        onExportToSoundboard: F,
                                        onExportToFile: U,
                                        onDelete: B,
                                        channelId: T
                                    })
                                })
                            },
                            children: (0, a.jsx)(p.default, {})
                        })]
                    })]
                })
            }
        },
        473070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var a = n("37983"),
                l = n("884691"),
                i = n("759843"),
                r = n("77078"),
                s = n("477566"),
                u = n("49671"),
                o = n("812204"),
                d = n("685665"),
                c = n("803725"),
                f = n("758946"),
                m = n("99366"),
                v = n("135284"),
                E = n("488673"),
                p = n("5431"),
                h = n("464135"),
                C = n("782340"),
                N = n("756458");

            function x(e) {
                var t, n, p, h, x, g, I, _;
                let {
                    clip: L,
                    channelId: M,
                    transitionState: T,
                    onClose: A
                } = e, [j, R] = l.useState(!0), [P, b] = l.useState(!1), [w, y] = l.useState(null), [D, k] = l.useState(null), {
                    AnalyticsLocationProvider: O
                } = (0, d.default)(o.default.CLIPS_EDITOR);
                l.useEffect(() => {
                    (async function e() {
                        let e;
                        try {
                            e = await u.default.clips.loadClip(L.filepath)
                        } catch {
                            A(), s.default.show({
                                title: C.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                                body: C.default.Messages.CLIPS_LOAD_ERROR_BODY
                            });
                            return
                        }
                        let t = e.data.buffer,
                            n = await (0, f.createAudioMP4FromVideoMP4)(t),
                            a = URL.createObjectURL(new Blob([n], {
                                type: "audio/mp4"
                            })),
                            l = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        k(a), y(l)
                    })()
                }, [L.filepath, A]), l.useEffect(() => () => {
                    null != w && URL.revokeObjectURL(w)
                }, [w]), l.useEffect(() => () => {
                    null != D && URL.revokeObjectURL(D)
                }, [D]);
                let [G, F] = l.useState(null === (x = null === (t = L.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === x || x), [U, B] = l.useState(null === (g = null === (n = L.editMetadata) || void 0 === n ? void 0 : n.applicationAudio) || void 0 === g || g), [V, H] = l.useState({
                    start: null !== (I = null === (p = L.editMetadata) || void 0 === p ? void 0 : p.start) && void 0 !== I ? I : 0,
                    end: null !== (_ = null === (h = L.editMetadata) || void 0 === h ? void 0 : h.end) && void 0 !== _ ? _ : 0
                }), [z, Z] = l.useState(L.name), X = l.useRef({
                    name: z,
                    editMetadata: {
                        start: V.start,
                        end: V.end,
                        voiceAudio: G,
                        applicationAudio: U
                    }
                });
                X.current = {
                    name: z,
                    editMetadata: {
                        start: V.start,
                        end: V.end,
                        voiceAudio: G,
                        applicationAudio: U
                    }
                };
                let W = (0, v.useClipProtocolURL)(L);
                return l.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != W && (e = {
                            thumbnail: await (0, m.createThumbnailFromVideo)(W, X.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(L.id, {
                            ...X.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [L.id, W]), (0, a.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: N.modalRoot,
                    transitionState: T,
                    children: (0, a.jsx)(O, {
                        children: (0, a.jsx)(r.ModalContent, {
                            className: N.modalContent,
                            children: null == w || null == D ? (0, a.jsx)("div", {
                                className: N.spinnerContainer,
                                children: (0, a.jsx)(r.Spinner, {})
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(S, {
                                    voiceAudioEnabled: G,
                                    applicationAudioEnabled: U,
                                    videoURL: w,
                                    cropData: V,
                                    onSetCropData: H,
                                    isLoading: j,
                                    hasOpenPrompt: P,
                                    onDoneLoading: () => R(!1),
                                    audioURL: D,
                                    transitionState: T
                                }), !j && (0, a.jsx)(E.default, {
                                    voiceAudioEnabled: G,
                                    channelId: M,
                                    applicationAudioEnabled: U,
                                    onChangeApplicationAudioEnabled: B,
                                    onChangeVoiceAudioEnabled: F,
                                    cropData: V,
                                    onSetClipName: Z,
                                    clipName: z,
                                    clip: L,
                                    onPrompt: b,
                                    onClose: A
                                })]
                            })
                        })
                    })
                })
            }

            function S(e) {
                let {
                    cropData: t,
                    onSetCropData: n,
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
                    var e, t, n;
                    o && !(null === (t = v.current) || void 0 === t ? void 0 : null === (e = t.videoElement) || void 0 === e ? void 0 : e.paused) && (null === (n = v.current) || void 0 === n || n.pause())
                }, [o]), l.useEffect(() => {
                    function e(e) {
                        var n, a;
                        if ((null === (n = document.activeElement) || void 0 === n ? void 0 : n.tagName) === "INPUT") return;
                        let l = v.current;
                        if (null == l) return;
                        let i = null === (a = v.current) || void 0 === a ? void 0 : a.videoElement;
                        if (null == i) return;
                        let r = !1;
                        switch (e.key) {
                            case " ":
                                r = !0, i.paused ? l.play() : l.pause();
                                break;
                            case "ArrowLeft":
                                r = !0, l.seek(Math.max(i.currentTime - i.duration / 30, t.start));
                                break;
                            case "ArrowRight":
                                r = !0, l.seek(Math.min(i.currentTime + i.duration / 30, t.end))
                        }
                        r && (e.stopPropagation(), e.preventDefault())
                    }
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [t.start, t.end]), (0, a.jsxs)("div", {
                    className: N.editorPane,
                    children: [(0, a.jsx)("div", {
                        className: N.videoSizer,
                        children: (0, a.jsx)(p.default, {
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
                    }), !u && m && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(m) ? (0, a.jsx)(h.default, {
                        videoPlayerRef: v,
                        cropData: t,
                        setCropData: n,
                        sourceURL: c
                    }) : null]
                })
            }
        },
        5431: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("424973");
            var a = n("37983"),
                l = n("884691"),
                i = n("917351"),
                r = n("31695"),
                s = n("58608"),
                u = n("756458");

            function o(e) {
                let {
                    setRef: t,
                    audioTrackLabel: n,
                    src: i,
                    muted: r
                } = e, s = l.useCallback(e => {
                    t(e, n)
                }, [t, n]), o = l.useCallback(e => {
                    Object.values(e.currentTarget.audioTracks).forEach(e => {
                        e.enabled = n === e.label
                    })
                }, [n]);
                return (0, a.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(n),
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
                    src: n,
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
                        n = (0, i.round)(E, 3),
                        a = null != p ? (0, i.round)(p, 3) : (0, i.round)(e.duration, 3);
                    if (t >= a || t < n) {
                        for (let e of Object.values(h.current)) null != e && (e.currentTime = E);
                        return !0
                    }
                }, [E, p]);
                (0, r.default)(() => {
                    if (x.current) {
                        let e = S();
                        e && g()
                    }
                });
                let g = l.useCallback(() => {
                        for (let e of (x.current = !0, S(), Object.values(h.current))) null != e && e.play()
                    }, [S]),
                    I = l.useCallback(() => {
                        for (let e of Object.values(h.current)) null != e && e.pause()
                    }, []),
                    _ = l.useCallback(e => {
                        var t;
                        for (let n of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (x.current = !1), Object.values(h.current))) null != n && (n.currentTime = e)
                    }, []),
                    L = l.useCallback(() => {
                        var e;
                        (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? g(): I()
                    }, [g, I]),
                    M = l.useCallback(e => {
                        h.current.main = e
                    }, []),
                    T = l.useCallback(e => {
                        let t = [];
                        for (let n of Object.values(e.currentTarget.audioTracks)) n.label.includes(":application") ? n.enabled = !0 : n.label.includes(":voice") ? (n.enabled = !1, !t.includes(n.label) && t.push(n.label)) : n.enabled = !1;
                        N(t)
                    }, []),
                    A = l.useCallback((e, t) => {
                        h.current[t] = e
                    }, []);
                return (l.useImperativeHandle(t, () => ({
                    play: g,
                    seek: _,
                    pause: I,
                    videoElement: h.current.main
                })), null == n) ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        onClick: L,
                        className: m ? u.hidden : u.displayVideo,
                        ref: M,
                        src: n,
                        muted: !c,
                        onLoadedMetadata: T,
                        onLoadedData: v,
                        preload: "auto"
                    }), C.map(e => (0, a.jsx)(o, {
                        audioTrackLabel: e,
                        setRef: A,
                        src: d,
                        muted: !f
                    }, e))]
                })
            })
        },
        464135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                r = n.n(i),
                s = n("917351"),
                u = n("65597"),
                o = n("77078"),
                d = n("731898"),
                c = n("31695"),
                f = n("471671"),
                m = n("830837"),
                v = n("132755"),
                E = n("58608"),
                p = n("80028"),
                h = n("766825");

            function C(e) {
                var t, n, i, C;
                let {
                    sourceURL: x,
                    cropData: S,
                    videoPlayerRef: g,
                    setCropData: I
                } = e, [_, L] = l.useState((C = !(null === (n = g.current) || void 0 === n ? void 0 : null === (t = n.videoElement) || void 0 === t ? void 0 : t.paused), C)), M = l.useRef(null), [T, A] = l.useState(null), [j, R] = l.useState(), P = l.useRef(null), b = l.useRef(null), [w, y] = l.useState(0), [D, k] = l.useState(!1), [O, G] = l.useState(null);
                (0, c.default)(() => {
                    var e;
                    let t = null === (e = g.current) || void 0 === e ? void 0 : e.videoElement;
                    null != t && w !== t.currentTime && y(t.currentTime)
                });
                let F = l.useMemo(() => S.end - S.start, [S]);
                l.useEffect(() => {
                    var e;
                    let t = null === (e = g.current) || void 0 === e ? void 0 : e.videoElement,
                        n = P.current,
                        a = b.current;
                    if (null == t || null == n || null == a) return;
                    let l = (0, s.debounce)(L, p.CLIP_PLAYING_DEBOUNCE_MS),
                        i = () => {
                            A(null), k(!1), l.cancel(), l(!0)
                        },
                        r = () => {
                            l.cancel(), l(!1)
                        };
                    return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
                        t.removeEventListener("play", i), t.removeEventListener("pause", r)
                    }
                }, [g]);
                let {
                    ref: U,
                    width: B = 0,
                    height: V = 0
                } = (0, d.default)(), H = (0, u.default)([f.default], () => f.default.windowSize());
                l.useMemo(() => {
                    let e = U.current;
                    null != e && G(e.getBoundingClientRect())
                }, [H.width, H.height, B]);
                let z = l.useRef(null),
                    Z = l.useRef({}),
                    X = l.useCallback((e, t) => {
                        var n, a, l, i;
                        if (null == j) return;
                        if (null == O) return null;
                        let r = (0, s.clamp)(e, O.left, O.right),
                            u = (r - O.left) / O.width * j,
                            o = (0, s.clamp)(u, 0, j),
                            d = T;
                        if (null == d && t && (d = o <= S.start ? "start" : o >= S.end ? "end" : "playhead", null === (n = g.current) || void 0 === n || n.pause(), A(d), k(_)), "start" === d) {
                            let e = (0, s.clamp)(o, 0, S.end - p.MIN_CLIP_DURATION_SECONDS);
                            I({
                                ...S,
                                start: e
                            }), null === (a = g.current) || void 0 === a || a.seek(e)
                        } else if ("end" === d) {
                            let e = (0, s.clamp)(o, S.start + p.MIN_CLIP_DURATION_SECONDS, j);
                            I({
                                ...S,
                                end: e
                            }), null === (l = g.current) || void 0 === l || l.seek(e)
                        } else if ("playhead" === d) {
                            let e = (0, s.clamp)(o, S.start, S.end);
                            null === (i = g.current) || void 0 === i || i.seek(e)
                        }
                    }, [j, O, T, S, g, _, I]),
                    W = l.useCallback(e => {
                        X(e.clientX, !0)
                    }, [X]),
                    Y = l.useCallback(e => {
                        X(e.clientX, !1)
                    }, [X]),
                    K = l.useCallback(() => {
                        if (D) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.play()
                        }
                        k(!1), A(null)
                    }, [g, D]);
                l.useEffect(() => (document.addEventListener("mousemove", Y), document.addEventListener("mouseup", K), () => {
                    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", K)
                }), [Y, K]), l.useEffect(() => {
                    (async function e() {
                        var e;
                        let t = U.current,
                            n = M.current;
                        if (null == t || null == n || null == j) return;
                        t.height = V, t.width = B;
                        let a = t.getContext("2d");
                        if (null == a) return;
                        a.fillStyle = "#000", a.fillRect(0, 0, B, V);
                        let l = n.videoWidth / n.videoHeight,
                            i = Math.ceil(V * l),
                            r = Math.ceil(B / i),
                            s = z.current;
                        if (null == s) return;
                        s.width = i, s.height = V;
                        let u = null == s ? void 0 : s.getContext("2d", {
                            willReadFrequently: !0
                        });
                        if (null == u) return;
                        let o = Z.current;
                        if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
                            for (let e = 0; e < r; e++) a.putImageData(o[r][e], i * e, 0);
                            return
                        }
                        for (let e = 0; e < r; e++) await new Promise(t => {
                            n.onseeked = () => {
                                a.drawImage(n, i * e, 0, i, V), u.drawImage(n, 0, 0, i, V);
                                let l = u.getImageData(0, 0, i, V);
                                null == o[r] && (o[r] = []), o[r][e] = l, t()
                            }, n.currentTime = i / B * j * e
                        })
                    })()
                }, [B, V, U, j, z]);
                let q = w - S.start,
                    J = null === (i = g.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, a.jsx)("div", {
                    className: h.centeringWrapper,
                    children: (0, a.jsxs)("div", {
                        className: h.timelineContainer,
                        children: [(0, a.jsx)("div", {
                            className: h.playPauseButtonWrapper,
                            children: (0, a.jsx)(o.Clickable, {
                                onClick: () => {
                                    var e, t;
                                    return _ ? null === (e = g.current) || void 0 === e ? void 0 : e.pause() : null === (t = g.current) || void 0 === t ? void 0 : t.play()
                                },
                                className: h.playPauseButton,
                                children: _ ? (0, a.jsx)(m.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                }) : (0, a.jsx)(v.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: r(h.timeline, {
                                [h.timelineDragging]: null != T
                            }),
                            onMouseDown: W,
                            children: [(0, a.jsx)("canvas", {
                                className: h.hiddenCanvas,
                                ref: z
                            }), (0, a.jsx)("canvas", {
                                className: h.timelineBackground,
                                ref: U
                            }), (0, a.jsx)("div", {
                                ref: P,
                                className: h.playhead,
                                style: {
                                    left: null != J ? "".concat(J.currentTime / J.duration * 100, "%") : 0
                                }
                            }), (0, a.jsx)(E.default, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    let e = M.current;
                                    if (null != e) {
                                        if (R(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration)) {
                                            var t;
                                            null === (t = g.current) || void 0 === t || t.seek(e.duration / 2), y(e.duration / 2)
                                        }
                                        0 === S.end && I(t => ({
                                            ...t,
                                            end: e.duration
                                        }))
                                    }
                                },
                                className: h.timelineVideo,
                                ref: M,
                                src: x,
                                muted: !0
                            }), (0, a.jsxs)("div", {
                                className: h.dragBox,
                                style: {
                                    left: null != j ? "".concat(S.start / j * 100, "%") : "0",
                                    right: null != j ? "".concat((j - S.end) / j * 100, "%") : "0"
                                },
                                children: [(0, a.jsx)("div", {
                                    className: h.timePillContainer,
                                    children: (0, a.jsx)("div", {
                                        ref: b,
                                        className: h.timePillBackground,
                                        children: (0, a.jsxs)(o.Text, {
                                            variant: "text-sm/normal",
                                            className: h.timePillText,
                                            color: "always-white",
                                            children: [N(q), (0, a.jsx)("span", {
                                                className: h.slashCharacter,
                                                children: " / "
                                            }), N(F)]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleLeft, {
                                        [h.dragging]: "start" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, a.jsx)("div", {
                                        className: h.cropLeftArrow
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleRight, {
                                        [h.dragging]: "end" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, a.jsx)("div", {
                                        className: h.cropRightArrow
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }

            function N(e) {
                ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
                let t = Math.floor(e / 60),
                    n = Math.floor(e % 60),
                    a = Math.floor(e % 1 * 100);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, a = a < 10 ? "0" + a : a, "".concat(t, ":").concat(n, ".").concat(a)
            }
        },
        431734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                r = n.n(i),
                s = n("446674"),
                u = n("77078"),
                o = n("308289"),
                d = n("697218"),
                c = n("564875"),
                f = n("449008"),
                m = n("387111"),
                v = n("782340"),
                E = n("887642");

            function p(e) {
                let {
                    user: t
                } = e, n = m.default.useName(null, null, t);
                return (0, a.jsxs)("div", {
                    className: E.userItem,
                    children: [(0, a.jsx)(o.default, {
                        user: t
                    }), (0, a.jsx)(u.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: n
                    })]
                })
            }

            function h(e) {
                let {
                    clip: t,
                    className: n
                } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = l.useCallback(e => {
                    let {
                        row: t
                    } = e, n = i[t];
                    return null == n ? null : (0, a.jsx)(p, {
                        user: n
                    }, t)
                }, [i]);
                return (0, a.jsxs)("div", {
                    className: r(n, E.root),
                    children: [(0, a.jsx)("div", {
                        className: E.header,
                        children: (0, a.jsxs)(u.FormTitle, {
                            className: E.title,
                            children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, a.jsxs)("div", {
                                className: E.userCountPill,
                                children: [(0, a.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, a.jsx)(c.default, {
                                    className: E.userCountIcon
                                })]
                            })]
                        })
                    }), (0, a.jsx)(u.List, {
                        className: E.userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: o
                    })]
                })
            }
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var a = n("316693"),
                l = n("923510"),
                i = n("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = a.default.combine(r, i.Permissions.CONNECT),
                u = a.default.combine(r, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            }), n("222007");
            var a = n("884691"),
                l = n("316693"),
                i = n("446674"),
                r = n("252931"),
                s = n("813006");
            n("923959");
            var u = n("957255"),
                o = n("697218");
            n("991170");
            var d = n("270161"),
                c = n("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                m = (e, t, n, a) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return a && null != t && e.creator_id === t.id;
                    if ("userId" in e) return a && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var l;
                        return a && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
                    }
                    return !1
                },
                v = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, c.Permissions.CREATE_EVENTS), l.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                E = e => {
                    let [t, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e), [l, r, d, E] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(n, e)]), p = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = a.useCallback(e => m(e, p, r, l), [l, r, p]), C = a.useCallback(e => m(e, p, E, d), [E, d, p]);
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
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [a, l] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e),
                        i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(a, e),
                        E = t.can(l, e),
                        p = n.getCurrentUser();
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
                            showSettingsToggle: n
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n
                },
                C = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n,
                            getNewSettingsDescriptionLine1: a
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n && null != a()
                }
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("304983"),
                r = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
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
        564875: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("907572"),
                r = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: l,
                                className: i,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, a.jsx)("path", {
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