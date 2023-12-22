(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97203"], {
        295544: function(e, t, l) {
            "use strict";
            e.exports = l.p + "e866c0682a80de08f451.svg"
        },
        195272: function(e, t, l) {
            "use strict";
            e.exports = l.p + "e69c6ba7f0551970b560.svg"
        },
        907572: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                FriendsIcon: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                i = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
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
        292915: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                SoundboardIcon: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                i = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M14.24 1.03a1 1 0 0 1 .73 1.21l-1 4a1 1 0 1 1-1.94-.48l1-4a1 1 0 0 1 1.21-.73ZM20.7 4.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 0 0 1.4 1.4l4-4Z",
                        className: s
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M15.14 20.14c1.78-1.78.7-5.75-2.42-8.86-3.11-3.12-7.08-4.2-8.86-2.42A3.13 3.13 0 0 0 3 11V11l-1.16 8.92a2 2 0 0 0 2.24 2.24L13 21c.86-.04 1.6-.32 2.14-.86Zm-1.3-3.4a9.61 9.61 0 0 0-2.53-4.05 9.61 9.61 0 0 0-4.05-2.53c-1.27-.35-1.82-.05-1.99.11-.16.17-.46.72-.11 2a9.61 9.61 0 0 0 2.53 4.04 9.61 9.61 0 0 0 4.05 2.53c1.27.35 1.82.05 1.99-.11.16-.17.46-.72.11-2Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M7.05 3.32a1 1 0 0 1 1.9-.64l1 3a1 1 0 0 1-1.9.64l-1-3ZM22.97 9.76a1 1 0 0 0-1.21-.73l-4 1a1 1 0 1 0 .48 1.94l4-1a1 1 0 0 0 .73-1.21ZM20.68 16.95a1 1 0 0 0 .64-1.9l-3-1a1 1 0 0 0-.64 1.9l3 1Z",
                        className: s
                    })]
                })
            }
        },
        758946: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                createAudioMP4FromVideoMP4: function() {
                    return i
                }
            }), l("222007"), l("424973");
            var a = l("469520"),
                n = l.n(a);
            async function i(e) {
                let t = n.createFile(),
                    l = n.createFile(),
                    a = {};
                e.fileStart = 0, t.onReady = e => {
                    for (let n of (l.init({
                            duration: e.duration,
                            timescale: e.timescale
                        }), e.audioTracks)) a[n.id] = n, t.setExtractionOptions(n.id, null, {
                        nbSamples: 1 / 0
                    }), l.addTrack({
                        id: n.id,
                        timescale: n.timescale,
                        hdlr: "soun",
                        type: "mp4a",
                        duration: n.duration,
                        layer: n.layer,
                        channel_count: n.audio.channel_count,
                        samplerate: n.audio.sample_rate,
                        samplesize: n.audio.sample_size,
                        name: n.name
                    });
                    t.start()
                };
                let i = new Promise(e => {
                    t.onSamples = (n, i, r) => {
                        for (let e of r) l.addSample(n, e.data, e);
                        t.releaseUsedSamples(n, r.length), delete a[n];
                        let s = l.getTrackById(n),
                            u = t.getTrackById(n);
                        if (null != u.edts) {
                            let e = u.edts.elst;
                            s.add("edts").boxes.push(e)
                        }
                        0 === Object.keys(a).length && e()
                    }
                });
                return t.appendBuffer(e), t.flush(), await i, l.getBuffer()
            }
        },
        643290: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                i = l("446674"),
                r = l("77078"),
                s = l("442939"),
                u = l("915639"),
                o = l("953109"),
                d = l("299039"),
                c = l("782340"),
                f = l("258818");

            function m(e) {
                var t, l;
                let {
                    clip: m
                } = e, [v] = (0, s.default)([null !== (t = m.applicationId) && void 0 !== t ? t : ""]), p = (0, i.useStateFromStores)([u.default], () => u.default.locale), E = n.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
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
                            children: null !== (l = null == v ? void 0 : v.name) && void 0 !== l ? l : m.applicationName
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
                                children: E.toLocaleDateString(p, {
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
                                children: E.toLocaleTimeString(p, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        488673: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                r = l.n(i),
                s = l("65597"),
                u = l("551042"),
                o = l("77078"),
                d = l("49671"),
                c = l("817963"),
                f = l("42203"),
                m = l("305961"),
                v = l("957255"),
                p = l("677099"),
                E = l("697218"),
                h = l("36694"),
                C = l("195812"),
                x = l("754576"),
                g = l("228220"),
                N = l("299039"),
                S = l("803725"),
                I = l("142485"),
                _ = l("643290"),
                L = l("431734"),
                T = l("80028"),
                M = l("846325"),
                j = l("782340"),
                A = l("515597"),
                R = l("446825").Buffer;

            function P(e) {
                let {
                    closePopout: t,
                    onExportToFile: l,
                    onExportToSoundboard: n
                } = e, i = (0, s.default)([p.default, v.default, E.default, m.default], () => p.default.getFlattenedGuildIds().some(e => {
                    let t = m.default.getGuild(e);
                    if (null == t) return !1;
                    let l = (0, c.getManageResourcePermissions)(t, v.default, E.default);
                    return l.canCreateExpressions
                }));
                return (0, a.jsxs)(o.Menu, {
                    navId: "clips-export",
                    "aria-label": j.default.Messages.CLIPS_EDIT_EXPORT,
                    onClose: t,
                    onSelect: t,
                    children: [i ? (0, a.jsx)(o.MenuItem, {
                        icon: x.default,
                        id: "clips-export-soundboard",
                        label: j.default.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
                        action: n
                    }) : null, (0, a.jsx)(o.MenuItem, {
                        icon: C.default,
                        id: "clips-export-file",
                        label: j.default.Messages.CLIPS_EXPORT_TO_FILE,
                        action: l
                    })]
                })
            }

            function b(e) {
                let {
                    clip: t,
                    cropData: i,
                    channelId: s,
                    clipName: p,
                    voiceAudioEnabled: x,
                    applicationAudioEnabled: b,
                    onSetClipName: w,
                    onChangeVoiceAudioEnabled: y,
                    onChangeApplicationAudioEnabled: D,
                    onClose: O
                } = e, [k, F] = n.useState(null), {
                    onShareClick: G
                } = (0, I.default)({
                    channelId: s,
                    setExporting: e => F(null != e ? "share" : null)
                });
                async function B() {
                    let e = f.default.getChannel(s);
                    F("export");
                    try {
                        let n = await (0, S.exportClip)(t, {
                            ...i,
                            applicationAudio: b,
                            voiceAudio: x
                        });
                        O(), (0, o.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await l.el("823749").then(l.bind(l, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, E.default).canCreateExpressions, u = null == p || "" === p ? (0, T.CLIP_NAME_TEMPLATE)(N.default.extractTimestamp(t.id)) : p, o = u.slice(0, M.MAX_LENGTH_SOUND_NAME);
                            return t => (0, a.jsx)(i, {
                                ...t,
                                showGuildPicker: !0,
                                guildId: s ? null == e ? void 0 : e.guild_id : void 0,
                                sourceFile: {
                                    file: new File([n], "".concat(u, ".mp4"), {
                                        type: "video/mp4"
                                    }),
                                    name: o
                                }
                            })
                        })
                    } catch (e) {} finally {
                        F(null)
                    }
                }
                async function U() {
                    F("export");
                    try {
                        let e = await (0, S.exportClip)(t, {
                                ...i,
                                applicationAudio: b,
                                voiceAudio: x
                            }),
                            l = await e.arrayBuffer();
                        await d.default.fileManager.saveWithDialog(R.from(l), (0, T.CLIPS_EXPORT_FILENAME)(t.id))
                    } catch (e) {} finally {
                        F(null)
                    }
                }

                function V() {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("386092").then(l.bind(l, "386092"));
                        return l => (0, a.jsx)(e, {
                            clip: t,
                            ...l,
                            onDelete: async () => {
                                await l.onClose(), O()
                            }
                        })
                    })
                }
                return (0, a.jsxs)("div", {
                    className: A.clipForm,
                    children: [(0, a.jsxs)("div", {
                        className: r(A.clipFormSection, A.editSection),
                        children: [(0, a.jsx)(o.FormItem, {
                            className: A.clipFormItem,
                            title: j.default.Messages.CLIPS_EDIT_TITLE,
                            children: (0, a.jsx)(o.TextInput, {
                                onChange: e => {
                                    "" === e ? w(void 0) : w(e)
                                },
                                value: p,
                                minLength: T.CLIP_NAME_MIN_CHAR_LENGTH,
                                maxLength: T.CLIP_NAME_MAX_CHAR_LENGTH,
                                placeholder: j.default.Messages.CLIPS_UNTITLED
                            })
                        }), (0, a.jsxs)("div", {
                            className: A.clipFormSwitches,
                            children: [(0, a.jsx)(o.FormSwitch, {
                                onChange: D,
                                value: b,
                                hideBorder: !0,
                                children: j.default.Messages.CLIPS_EDIT_GAME_AUDIO
                            }), (0, a.jsx)(o.FormSwitch, {
                                onChange: y,
                                value: x,
                                hideBorder: !0,
                                children: j.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: r(A.clipFormSection, A.metadataSection),
                        children: [(0, a.jsx)(_.default, {
                            clip: t
                        }), (0, a.jsx)(L.default, {
                            className: A.userList,
                            clip: t
                        })]
                    }), (0, a.jsxs)("div", {
                        className: A.clipFormFooter,
                        children: [(0, a.jsx)(o.Button, {
                            submitting: "share" === k,
                            disabled: null != k && "share" !== k,
                            color: o.Button.Colors.BRAND,
                            wrapperClassName: A.clipFormFooterPrimaryButton,
                            onClick: () => G({
                                clip: {
                                    ...t,
                                    name: p
                                },
                                cropData: i,
                                applicationAudioEnabled: b,
                                voiceAudioEnabled: x,
                                onShareComplete: () => {
                                    u.closeModal(T.CLIPS_EDIT_MODAL_KEY), u.closeModal(T.CLIPS_GALLERY_MODAL_KEY)
                                }
                            }),
                            children: j.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, a.jsx)(o.Tooltip, {
                            text: j.default.Messages.SAVE_CHANGES,
                            children: e => (0, a.jsx)(o.Button, {
                                ...e,
                                size: o.Button.Sizes.ICON,
                                className: A.clipFormFooterButton,
                                disabled: null != k,
                                wrapperClassName: r(A.clipFormFooterButton, {
                                    [A.submittingWrapperFix]: null != k
                                }),
                                color: o.Button.Colors.PRIMARY,
                                onClick: O,
                                children: (0, a.jsx)(h.default, {})
                            })
                        }), (0, a.jsx)(o.Popout, {
                            position: "top",
                            renderPopout: e => (0, a.jsx)(P, {
                                ...e,
                                channelId: s,
                                onExportToFile: U,
                                onExportToSoundboard: B
                            }),
                            children: (e, t) => {
                                let {
                                    isShown: l
                                } = t;
                                return (0, a.jsx)(o.Tooltip, {
                                    text: l ? null : j.default.Messages.CLIPS_EDIT_EXPORT,
                                    children: t => (0, a.jsx)(o.Button, {
                                        ...t,
                                        size: o.Button.Sizes.ICON,
                                        wrapperClassName: r(A.clipFormFooterButton, {
                                            [A.submittingWrapperFix]: null != k
                                        }),
                                        submitting: "export" === k,
                                        disabled: null != k && "export" !== k,
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: l => {
                                            var a, n;
                                            null === (a = t.onClick) || void 0 === a || a.call(t), null === (n = e.onClick) || void 0 === n || n.call(e, l)
                                        },
                                        children: (0, a.jsx)(C.default, {})
                                    })
                                })
                            }
                        }), (0, a.jsx)(o.Tooltip, {
                            text: j.default.Messages.DELETE,
                            children: e => (0, a.jsx)(o.Button, {
                                ...e,
                                size: o.Button.Sizes.ICON,
                                className: A.clipFormFooterButton,
                                wrapperClassName: r(A.clipFormFooterButton, {
                                    [A.submittingWrapperFix]: null != k
                                }),
                                disabled: null != k,
                                color: o.Button.Colors.PRIMARY,
                                onClick: V,
                                children: (0, a.jsx)(g.default, {})
                            })
                        })]
                    })]
                })
            }
        },
        473070: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
            var a = l("37983"),
                n = l("884691"),
                i = l("759843"),
                r = l("77078"),
                s = l("477566"),
                u = l("49671"),
                o = l("812204"),
                d = l("685665"),
                c = l("803725"),
                f = l("758946"),
                m = l("99366"),
                v = l("135284"),
                p = l("488673"),
                E = l("5431"),
                h = l("464135"),
                C = l("782340"),
                x = l("756458");

            function g(e) {
                var t, l, E, h, g, S, I, _;
                let {
                    clip: L,
                    channelId: T,
                    transitionState: M,
                    onClose: j
                } = e, [A, R] = n.useState(!0), [P, b] = n.useState(null), [w, y] = n.useState(null), {
                    AnalyticsLocationProvider: D
                } = (0, d.default)(o.default.CLIPS_EDITOR);
                n.useEffect(() => {
                    (async function e() {
                        let e;
                        try {
                            e = await u.default.clips.loadClip(L.filepath)
                        } catch {
                            j(), s.default.show({
                                title: C.default.Messages.CLIPS_LOAD_ERROR_TITLE,
                                body: C.default.Messages.CLIPS_LOAD_ERROR_BODY
                            });
                            return
                        }
                        let t = e.data.buffer,
                            l = await (0, f.createAudioMP4FromVideoMP4)(t),
                            a = URL.createObjectURL(new Blob([l], {
                                type: "audio/mp4"
                            })),
                            n = URL.createObjectURL(new Blob([e.data], {
                                type: "video/mp4"
                            }));
                        y(a), b(n)
                    })()
                }, [L.filepath, j]), n.useEffect(() => () => {
                    null != P && URL.revokeObjectURL(P)
                }, [P]), n.useEffect(() => () => {
                    null != w && URL.revokeObjectURL(w)
                }, [w]);
                let [O, k] = n.useState(null === (g = null === (t = L.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === g || g), [F, G] = n.useState(null === (S = null === (l = L.editMetadata) || void 0 === l ? void 0 : l.applicationAudio) || void 0 === S || S), [B, U] = n.useState({
                    start: null !== (I = null === (E = L.editMetadata) || void 0 === E ? void 0 : E.start) && void 0 !== I ? I : 0,
                    end: null !== (_ = null === (h = L.editMetadata) || void 0 === h ? void 0 : h.end) && void 0 !== _ ? _ : 0
                }), [V, H] = n.useState(L.name), z = n.useRef({
                    name: V,
                    editMetadata: {
                        start: B.start,
                        end: B.end,
                        voiceAudio: O,
                        applicationAudio: F
                    }
                });
                z.current = {
                    name: V,
                    editMetadata: {
                        start: B.start,
                        end: B.end,
                        voiceAudio: O,
                        applicationAudio: F
                    }
                };
                let Z = (0, v.useClipProtocolURL)(L);
                return n.useEffect(() => {
                    async function e() {
                        let e = {};
                        null != Z && (e = {
                            thumbnail: await (0, m.createThumbnailFromVideo)(Z, z.current.editMetadata.start)
                        }), (0, c.updateClipMetadata)(L.id, {
                            ...z.current,
                            ...e
                        })
                    }
                    return () => {
                        e()
                    }
                }, [L.id, Z]), (0, a.jsx)(r.ModalRoot, {
                    impression: {
                        impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
                    },
                    size: r.ModalSize.DYNAMIC,
                    className: x.modalRoot,
                    transitionState: M,
                    children: (0, a.jsx)(D, {
                        children: (0, a.jsx)(r.ModalContent, {
                            className: x.modalContent,
                            children: null == P || null == w ? (0, a.jsx)("div", {
                                className: x.spinnerContainer,
                                children: (0, a.jsx)(r.Spinner, {})
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(N, {
                                    voiceAudioEnabled: O,
                                    applicationAudioEnabled: F,
                                    videoURL: P,
                                    cropData: B,
                                    onSetCropData: U,
                                    isLoading: A,
                                    onDoneLoading: () => R(!1),
                                    audioURL: w,
                                    transitionState: M
                                }), !A && (0, a.jsx)(p.default, {
                                    voiceAudioEnabled: O,
                                    channelId: T,
                                    applicationAudioEnabled: F,
                                    onChangeApplicationAudioEnabled: G,
                                    onChangeVoiceAudioEnabled: k,
                                    cropData: B,
                                    onSetClipName: H,
                                    clipName: V,
                                    clip: L,
                                    onClose: j
                                })]
                            })
                        })
                    })
                })
            }

            function N(e) {
                let {
                    cropData: t,
                    onSetCropData: l,
                    voiceAudioEnabled: i,
                    applicationAudioEnabled: s,
                    isLoading: u,
                    onDoneLoading: o,
                    videoURL: d,
                    audioURL: c,
                    transitionState: f
                } = e, m = n.useRef(null), v = n.useCallback(() => {
                    var e;
                    null === (e = m.current) || void 0 === e || e.seek(t.start), o()
                }, [o, t.start]);
                return n.useEffect(() => {
                    function e(e) {
                        var l, a;
                        if ((null === (l = document.activeElement) || void 0 === l ? void 0 : l.tagName) === "INPUT") return;
                        let n = m.current;
                        if (null == n) return;
                        let i = null === (a = m.current) || void 0 === a ? void 0 : a.videoElement;
                        if (null == i) return;
                        let r = !1;
                        switch (e.key) {
                            case " ":
                                r = !0, i.paused ? n.play() : n.pause();
                                break;
                            case "ArrowLeft":
                                r = !0, n.seek(Math.max(i.currentTime - i.duration / 30, t.start));
                                break;
                            case "ArrowRight":
                                r = !0, n.seek(Math.min(i.currentTime + i.duration / 30, t.end))
                        }
                        r && (e.stopPropagation(), e.preventDefault())
                    }
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [t.start, t.end]), (0, a.jsxs)("div", {
                    className: x.editorPane,
                    children: [(0, a.jsx)("div", {
                        className: x.videoSizer,
                        children: (0, a.jsx)(E.default, {
                            applicationAudioEnabled: s,
                            voiceAudioEnabled: i,
                            ref: m,
                            audioSrc: c,
                            src: d,
                            isLoading: u,
                            onDoneLoading: v,
                            startTime: t.start,
                            endTime: t.end
                        })
                    }), u || f !== r.ModalTransitionState.ENTERED ? null : (0, a.jsx)(h.default, {
                        videoPlayerRef: m,
                        cropData: t,
                        setCropData: l,
                        sourceURL: d
                    })]
                })
            }
        },
        5431: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            }), l("222007"), l("424973");
            var a = l("37983"),
                n = l("884691"),
                i = l("917351"),
                r = l("31695"),
                s = l("58608"),
                u = l("756458");

            function o(e) {
                let {
                    setRef: t,
                    audioTrackLabel: l,
                    src: i,
                    muted: r
                } = e, s = n.useCallback(e => {
                    t(e, l)
                }, [t, l]), o = n.useCallback(e => {
                    Object.values(e.currentTarget.audioTracks).forEach(e => {
                        e.enabled = l === e.label
                    })
                }, [l]);
                return (0, a.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(l),
                    className: u.hidden,
                    ref: s,
                    src: i,
                    muted: r,
                    preload: "auto",
                    onLoadedMetadata: o
                })
            }
            var d = n.forwardRef(function(e, t) {
                let {
                    src: l,
                    audioSrc: d,
                    applicationAudioEnabled: c,
                    voiceAudioEnabled: f,
                    isLoading: m,
                    onDoneLoading: v,
                    startTime: p = 0,
                    endTime: E
                } = e, h = n.useRef({}), [C, x] = n.useState([]), g = n.useRef(!1), N = n.useCallback(() => {
                    let e = h.current.main;
                    if (null == e) return;
                    let t = (0, i.round)(e.currentTime, 3),
                        l = (0, i.round)(p, 3),
                        a = null != E ? (0, i.round)(E, 3) : (0, i.round)(e.duration, 3);
                    if (t >= a || t < l) {
                        for (let e of Object.values(h.current)) null != e && (e.currentTime = p);
                        return !0
                    }
                }, [p, E]);
                (0, r.default)(() => {
                    if (g.current) {
                        let e = N();
                        e && S()
                    }
                });
                let S = n.useCallback(() => {
                        for (let e of (g.current = !0, N(), Object.values(h.current))) null != e && e.play()
                    }, [N]),
                    I = n.useCallback(() => {
                        for (let e of Object.values(h.current)) null != e && e.pause()
                    }, []),
                    _ = n.useCallback(e => {
                        var t;
                        for (let l of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (g.current = !1), Object.values(h.current))) null != l && (l.currentTime = e)
                    }, []),
                    L = n.useCallback(() => {
                        var e;
                        (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? S(): I()
                    }, [S, I]),
                    T = n.useCallback(e => {
                        h.current.main = e
                    }, []),
                    M = n.useCallback(e => {
                        let t = [];
                        for (let l of Object.values(e.currentTarget.audioTracks)) l.label.includes(":application") ? l.enabled = !0 : l.label.includes(":voice") ? (l.enabled = !1, !t.includes(l.label) && t.push(l.label)) : l.enabled = !1;
                        x(t)
                    }, []),
                    j = n.useCallback((e, t) => {
                        h.current[t] = e
                    }, []);
                return (n.useImperativeHandle(t, () => ({
                    play: S,
                    seek: _,
                    pause: I,
                    videoElement: h.current.main
                })), null == l) ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        onClick: L,
                        className: m ? u.hidden : u.displayVideo,
                        ref: T,
                        src: l,
                        muted: !c,
                        onLoadedMetadata: M,
                        onLoadedData: v,
                        preload: "auto"
                    }), C.map(e => (0, a.jsx)(o, {
                        audioTrackLabel: e,
                        setRef: j,
                        src: d,
                        muted: !f
                    }, e))]
                })
            })
        },
        464135: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                r = l.n(i),
                s = l("917351"),
                u = l("65597"),
                o = l("77078"),
                d = l("731898"),
                c = l("31695"),
                f = l("471671"),
                m = l("830837"),
                v = l("132755"),
                p = l("58608"),
                E = l("80028"),
                h = l("766825");

            function C(e) {
                var t, l, i, C;
                let {
                    sourceURL: g,
                    cropData: N,
                    videoPlayerRef: S,
                    setCropData: I
                } = e, [_, L] = n.useState((C = !(null === (l = S.current) || void 0 === l ? void 0 : null === (t = l.videoElement) || void 0 === t ? void 0 : t.paused), C)), T = n.useRef(null), [M, j] = n.useState(null), [A, R] = n.useState(), P = n.useRef(null), b = n.useRef(null), [w, y] = n.useState(0), [D, O] = n.useState(!1), [k, F] = n.useState(null);
                (0, c.default)(() => {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement;
                    null != t && w !== t.currentTime && y(t.currentTime)
                });
                let G = n.useMemo(() => N.end - N.start, [N]);
                n.useEffect(() => {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement,
                        l = P.current,
                        a = b.current;
                    if (null == t || null == l || null == a) return;
                    let n = (0, s.debounce)(L, E.CLIP_PLAYING_DEBOUNCE_MS),
                        i = () => {
                            j(null), O(!1), n.cancel(), n(!0)
                        },
                        r = () => {
                            n.cancel(), n(!1)
                        };
                    return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
                        t.removeEventListener("play", i), t.removeEventListener("pause", r)
                    }
                }, [S]);
                let {
                    ref: B,
                    width: U = 0,
                    height: V = 0
                } = (0, d.default)(), H = (0, u.default)([f.default], () => f.default.windowSize());
                n.useMemo(() => {
                    let e = B.current;
                    null != e && F(e.getBoundingClientRect())
                }, [H.width, H.height, U]);
                let z = n.useRef(null),
                    Z = n.useRef({}),
                    X = n.useCallback((e, t) => {
                        var l, a, n, i;
                        if (null == A) return;
                        if (null == k) return null;
                        let r = (0, s.clamp)(e, k.left, k.right),
                            u = (r - k.left) / k.width * A,
                            o = (0, s.clamp)(u, 0, A),
                            d = M;
                        if (null == d && t && (d = o <= N.start ? "start" : o >= N.end ? "end" : "playhead", null === (l = S.current) || void 0 === l || l.pause(), j(d), O(_)), "start" === d) {
                            let e = (0, s.clamp)(o, 0, N.end - E.MIN_CLIP_DURATION_SECONDS);
                            I({
                                ...N,
                                start: e
                            }), null === (a = S.current) || void 0 === a || a.seek(e)
                        } else if ("end" === d) {
                            let e = (0, s.clamp)(o, N.start + E.MIN_CLIP_DURATION_SECONDS, A);
                            I({
                                ...N,
                                end: e
                            }), null === (n = S.current) || void 0 === n || n.seek(e)
                        } else if ("playhead" === d) {
                            let e = (0, s.clamp)(o, N.start, N.end);
                            null === (i = S.current) || void 0 === i || i.seek(e)
                        }
                    }, [A, k, M, N, S, _, I]),
                    W = n.useCallback(e => {
                        X(e.clientX, !0)
                    }, [X]),
                    Y = n.useCallback(e => {
                        X(e.clientX, !1)
                    }, [X]),
                    K = n.useCallback(() => {
                        if (D) {
                            var e;
                            null === (e = S.current) || void 0 === e || e.play()
                        }
                        O(!1), j(null)
                    }, [S, D]);
                n.useEffect(() => (document.addEventListener("mousemove", Y), document.addEventListener("mouseup", K), () => {
                    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", K)
                }), [Y, K]), n.useEffect(() => {
                    (async function e() {
                        var e;
                        let t = B.current,
                            l = T.current;
                        if (null == t || null == l || null == A) return;
                        t.height = V, t.width = U;
                        let a = t.getContext("2d");
                        if (null == a) return;
                        a.fillStyle = "#000", a.fillRect(0, 0, U, V);
                        let n = l.videoWidth / l.videoHeight,
                            i = Math.ceil(V * n),
                            r = Math.ceil(U / i),
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
                            l.onseeked = () => {
                                a.drawImage(l, i * e, 0, i, V), u.drawImage(l, 0, 0, i, V);
                                let n = u.getImageData(0, 0, i, V);
                                null == o[r] && (o[r] = []), o[r][e] = n, t()
                            }, l.currentTime = i / U * A * e
                        })
                    })()
                }, [U, V, B, A, z]);
                let q = w - N.start,
                    J = null === (i = S.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, a.jsx)("div", {
                    className: h.centeringWrapper,
                    children: (0, a.jsxs)("div", {
                        className: h.timelineContainer,
                        children: [(0, a.jsx)("div", {
                            className: h.playPauseButtonWrapper,
                            children: (0, a.jsx)(o.Clickable, {
                                onClick: () => {
                                    var e, t;
                                    return _ ? null === (e = S.current) || void 0 === e ? void 0 : e.pause() : null === (t = S.current) || void 0 === t ? void 0 : t.play()
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
                                [h.timelineDragging]: null != M
                            }),
                            onMouseDown: W,
                            children: [(0, a.jsx)("canvas", {
                                className: h.hiddenCanvas,
                                ref: z
                            }), (0, a.jsx)("canvas", {
                                className: h.timelineBackground,
                                ref: B
                            }), (0, a.jsx)("div", {
                                ref: P,
                                className: h.playhead,
                                style: {
                                    left: null != J ? "".concat(J.currentTime / J.duration * 100, "%") : 0
                                }
                            }), (0, a.jsx)(p.default, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    let e = T.current;
                                    if (null != e) {
                                        if (R(e.duration), 0 === N.start && (0 === N.end || N.end === e.duration)) {
                                            var t;
                                            null === (t = S.current) || void 0 === t || t.seek(e.duration / 2), y(e.duration / 2)
                                        }
                                        0 === N.end && I(t => ({
                                            ...t,
                                            end: e.duration
                                        }))
                                    }
                                },
                                className: h.timelineVideo,
                                ref: T,
                                src: g,
                                muted: !0
                            }), (0, a.jsxs)("div", {
                                className: h.dragBox,
                                style: {
                                    left: null != A ? "".concat(N.start / A * 100, "%") : "0",
                                    right: null != A ? "".concat((A - N.end) / A * 100, "%") : "0"
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
                                            children: [x(q), (0, a.jsx)("span", {
                                                className: h.slashCharacter,
                                                children: " / "
                                            }), x(G)]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleLeft, {
                                        [h.dragging]: "start" === M
                                    }),
                                    onMouseDown: W,
                                    children: (0, a.jsx)("div", {
                                        className: h.cropLeftArrow
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleRight, {
                                        [h.dragging]: "end" === M
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

            function x(e) {
                ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
                let t = Math.floor(e / 60),
                    l = Math.floor(e % 60),
                    a = Math.floor(e % 1 * 100);
                return t = t < 10 ? "0" + t : t, l = l < 10 ? "0" + l : l, a = a < 10 ? "0" + a : a, "".concat(t, ":").concat(l, ".").concat(a)
            }
        },
        431734: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                r = l.n(i),
                s = l("446674"),
                u = l("77078"),
                o = l("308289"),
                d = l("697218"),
                c = l("564875"),
                f = l("449008"),
                m = l("387111"),
                v = l("782340"),
                p = l("887642");

            function E(e) {
                let {
                    user: t
                } = e, l = m.default.useName(null, null, t);
                return (0, a.jsxs)("div", {
                    className: p.userItem,
                    children: [(0, a.jsx)(o.default, {
                        user: t
                    }), (0, a.jsx)(u.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: l
                    })]
                })
            }

            function h(e) {
                let {
                    clip: t,
                    className: l
                } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = n.useCallback(e => {
                    let {
                        row: t
                    } = e, l = i[t];
                    return null == l ? null : (0, a.jsx)(E, {
                        user: l
                    }, t)
                }, [i]);
                return (0, a.jsxs)("div", {
                    className: r(l, p.root),
                    children: [(0, a.jsx)("div", {
                        className: p.header,
                        children: (0, a.jsxs)(u.FormTitle, {
                            className: p.title,
                            children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, a.jsxs)("div", {
                                className: p.userCountPill,
                                children: [(0, a.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, a.jsx)(c.default, {
                                    className: p.userCountIcon
                                })]
                            })]
                        })
                    }), (0, a.jsx)(u.List, {
                        className: p.userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: o
                    })]
                })
            }
        },
        270161: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
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
            var a = l("316693"),
                n = l("923510"),
                i = l("49111");
            let r = i.Permissions.VIEW_CHANNEL,
                s = a.default.combine(r, i.Permissions.CONNECT),
                u = a.default.combine(r, n.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useManageResourcePermissions: function() {
                    return p
                },
                getManageResourcePermissions: function() {
                    return E
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return h
                },
                useShouldShowInventoryGuildSettingsCoachmark: function() {
                    return C
                }
            }), l("222007");
            var a = l("884691"),
                n = l("316693"),
                i = l("446674"),
                r = l("252931"),
                s = l("813006");
            l("923959");
            var u = l("957255"),
                o = l("697218");
            l("991170");
            var d = l("270161"),
                c = l("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                m = (e, t, l, a) => {
                    if (null == e) return !1;
                    if (l) return !0;
                    if ("creator_id" in e) return a && null != t && e.creator_id === t.id;
                    if ("userId" in e) return a && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var n;
                        return a && null != t && (null === (n = e.user) || void 0 === n ? void 0 : n.id) === t.id
                    }
                    return !1
                },
                v = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [n.default.combine(t, c.Permissions.CREATE_EVENTS), n.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                p = e => {
                    let [t, l] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e), [n, r, d, p] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(l, e)]), E = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = a.useCallback(e => m(e, E, r, n), [n, r, E]), C = a.useCallback(e => m(e, E, p, d), [p, d, E]);
                    return null == e ? f : {
                        canCreateExpressions: n,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: p,
                        canManageGuildExpression: h,
                        canManageGuildEvent: C
                    }
                },
                E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [a, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e),
                        i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(a, e),
                        p = t.can(n, e),
                        E = l.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: i,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: p,
                        canManageGuildExpression: e => m(e, E, r, i),
                        canManageGuildEvent: e => m(e, E, p, d)
                    }
                },
                h = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: l
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != l
                },
                C = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: l,
                            getNewSettingsDescriptionLine1: a
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != l && null != a()
                }
        },
        564875: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                i = l("907572"),
                r = l("75196"),
                s = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: n = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                fill: n,
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
        },
        754576: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                i = l("292915"),
                r = l("75196"),
                s = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        ...i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, r.default)(i),
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, a.jsxs)("g", {
                            clipPath: "url(#clip0_414_20322)",
                            children: [(0, a.jsx)("path", {
                                d: "M2 6.00299V18.003C2 19.107 2.895 20.003 4 20.003H5V4.00299H4C2.895 4.00299 2 4.89799 2 6.00299Z",
                                fill: n
                            }), (0, a.jsx)("path", {
                                d: "M20 4.00299H7V20.003H20C21.104 20.003 22 19.107 22 18.003V6.00299C22 4.89799 21.104 4.00299 20 4.00299ZM19 14.003C19 15.107 18.104 16.003 17 16.003C15.896 16.003 15 15.107 15 14.003C15 12.899 15.896 12.003 17 12.003V9.38999L13 10.724C13 10.724 13 14.984 13 15.003C13 16.107 12.104 17.003 11 17.003C9.896 17.003 9 16.107 9 15.003C9 13.899 9.896 13.003 11 13.003V10.003C11 9.57199 11.275 9.19099 11.684 9.05399L17.684 7.05399C17.989 6.95199 18.323 7.00299 18.585 7.19199C18.846 7.37899 19 7.68199 19 8.00299C19 8.00299 19 13.983 19 14.003Z",
                                fill: n
                            })]
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_414_20322",
                                children: (0, a.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                }, i.SoundboardIcon, void 0, {
                    size: 24
                })
        }
    }
]);