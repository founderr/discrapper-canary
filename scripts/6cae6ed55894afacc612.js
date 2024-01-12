(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44812"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    l = e.length;
                if (l > n) return !1;
                if (l === n) return e === t;
                e: for (var i = 0, s = 0; i < l; i++) {
                    for (var o = e.charCodeAt(i); s < n;)
                        if (t.charCodeAt(s++) === o) continue e;
                    return !1
                }
                return !0
            }
        },
        748268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c87be216431a35927431.svg"
        },
        913139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("913144"),
                i = {
                    addKeybind(e) {
                        l.default.dispatch({
                            type: "KEYBINDS_ADD_KEYBIND",
                            keybind: e
                        })
                    },
                    setKeybind(e) {
                        l.default.dispatch({
                            type: "KEYBINDS_SET_KEYBIND",
                            keybind: e
                        })
                    },
                    deleteKeybind(e) {
                        l.default.dispatch({
                            type: "KEYBINDS_DELETE_KEYBIND",
                            id: e
                        })
                    },
                    enableAll(e) {
                        l.default.dispatch({
                            type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                            enable: e
                        })
                    }
                }
        },
        278108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                i = n("884691"),
                s = n("499032"),
                o = n.n(s),
                r = n("312165"),
                a = n("3958"),
                d = n("773336"),
                c = n("50885"),
                u = n("49111");
            let f = d.isPlatformEmbedded && null != c.default.getDiscordUtils().inputCaptureRegisterElement;
            class h extends i.PureComponent {
                componentDidMount() {
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1, this.cleanUp()
                }
                componentDidUpdate(e) {
                    this.props.defaultValue !== e.defaultValue && this.setState({
                        codes: this.props.defaultValue
                    })
                }
                cleanUp() {
                    d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === a.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: i
                    } = this.state, {
                        disabled: s
                    } = this.props;
                    return f ? (t = c.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !d.isPlatformEmbedded && (e = this.handleComboKeys), (0, l.jsx)(a.default, {
                        disabled: s,
                        value: n,
                        mode: i,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: f
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        d.isPlatformEmbedded && !f && (this.gs = new r.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: a.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: a.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === a.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, n) => {
                        if (n.preventDefault(), "keydown" === n.type) {
                            let e = t.map(e => [u.KeyboardDeviceTypes.KEYBOARD_KEY, o(e), u.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: l
                                } = n;
                            null == e.find(e => {
                                let [, t] = e;
                                return l === t
                            }) && e.push([u.KeyboardDeviceTypes.KEYBOARD_KEY, l, u.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
                        }
                    }, this.handleGSChange = e => {
                        if (!1 === this._mounted) return;
                        let t = [...e.combo];
                        this.handleComboChange(t)
                    }, this.handleNativeChange = e => {
                        e.length > 0 && this.handleComboChange(e), this.recordEnd()
                    };
                    let {
                        defaultValue: t
                    } = e;
                    this.state = {
                        codes: t,
                        mode: a.RecordModes.DEFAULT
                    }
                }
            }
            var g = h
        },
        225389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: r = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                        clipRule: "evenodd",
                        className: d
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: r = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                        clipRule: "evenodd",
                        className: d
                    })]
                })
            }
        },
        312165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007"), n("424973");
            var l, i = n("44170"),
                s = n("773336"),
                o = n("50885"),
                r = n("13798"),
                a = n("49111");
            let d = [],
                c = (e, t, n) => {
                    let l = (0, s.isWindows)() ? 0 : 1;
                    (e !== a.KeyboardDeviceTypes.MOUSE_BUTTON || n !== l) && d.forEach(l => l._handleEvent(e, t, n))
                };
            l = class extends i.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (d = d.filter(e => e !== this)).length && o.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, r.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [l, i] = t;
                        return !(l === e && i === n)
                    }) : (this.combo.push([e, n, (0, r.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], d.push(this), 1 === d.length && o.default.setOnInputEventCallback(c)
                }
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return u
                },
                useInventoryGuildSettingsExperiment: function() {
                    return h
                }
            });
            var l = n("65597"),
                i = n("862205"),
                s = n("697218"),
                o = n("719923"),
                r = n("782340");
            let a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                d = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: l,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: s,
                        autoUnfurlReactionTooltip: r,
                        collectOffOverride: a
                    } = n, d = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: s,
                        collectEnabled: !a && (d ? l : s),
                        autoUnfurlReactionTooltip: r
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : d({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                u = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, l.default)([s.default], () => s.default.getCurrentUser()), o = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: u,
                        autoUnfurlReactionTooltip: f
                    } = d({
                        user: i,
                        config: o
                    }), h = r && u && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: r,
                        collectEnabled: h,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescriptionLine1: () => null,
                        getNewSettingsDescriptionLine2: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 4,
                        label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => r.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => r.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                h = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
                    }
                }
        },
        644926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                s = n("446674"),
                o = n("77078"),
                r = n("913139"),
                a = n("278108"),
                d = n("485328"),
                c = n("227602"),
                u = n("555158"),
                f = n("13798"),
                h = n("846325"),
                g = n("49111"),
                E = n("782340"),
                p = n("304593");

            function m(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: m
                } = e, N = (0, s.useStateFromStores)([c.default], () => c.default.getKeybindForAction(g.GlobalKeybindActions.SOUNDBOARD_HOLD)), [R, b] = i.useState(null !== (t = null == N ? void 0 : N.shortcut) && void 0 !== t ? t : []);
                return i.useEffect(() => (d.default.disable(), () => {
                    d.default.enable()
                }), []), (0, l.jsxs)(o.ModalRoot, {
                    transitionState: n,
                    children: [(0, l.jsxs)(o.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(o.Heading, {
                            className: p.header,
                            variant: "heading-xl/semibold",
                            children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, l.jsx)(o.ModalCloseButton, {
                            className: p.closeButton,
                            onClick: m
                        })]
                    }), (0, l.jsxs)(o.ModalContent, {
                        className: p.content,
                        children: [(0, l.jsx)(u.default, {
                            className: p.warning,
                            messageType: u.HelpMessageTypes.WARNING,
                            children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, l.jsx)(o.Heading, {
                            className: p.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: E.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, l.jsx)(o.Text, {
                            className: p.action,
                            variant: "text-md/normal",
                            children: E.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, l.jsx)(o.Text, {
                            className: p.actionDescription,
                            variant: "text-sm/normal",
                            children: E.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, l.jsx)(o.Heading, {
                            className: p.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: E.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, l.jsx)(a.default, {
                            defaultValue: R,
                            onChange: b
                        }), (0, l.jsx)(o.Anchor, {
                            className: p.resetButton,
                            onClick: () => b((0, f.toCombo)(h.DEFAULT_KEYBIND)),
                            children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            onClick: function() {
                                if (0 === R.length) return null != N && r.default.deleteKeybind(N.id), m();
                                null == N ? r.default.addKeybind({
                                    action: g.GlobalKeybindActions.SOUNDBOARD_HOLD,
                                    shortcut: R,
                                    enabled: !0,
                                    params: {}
                                }) : r.default.setKeybind({
                                    ...N,
                                    shortcut: R
                                });
                                m()
                            },
                            children: E.default.Messages.SAVE
                        }), (0, l.jsx)(o.Button, {
                            onClick: m,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var l, i, s = n("991170"),
                o = n("719923"),
                r = n("24373"),
                a = n("49111");
            (l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return 2;
                    let l = o.default.canUseCustomStickersEverywhere(t);
                    if ((0, r.isStandardSticker)(e)) return 0;
                    if ((0, r.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || s.default.can({
                        permission: a.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? l ? 0 : 1 : 2 : 3;
                    return 2
                },
                c = (e, t, n) => 0 === d(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("424973");
            var l = n("917351"),
                i = n.n(l),
                s = n("446674"),
                o = n("913144"),
                r = n("80507"),
                a = n("374363"),
                d = n("364685"),
                c = n("49111"),
                u = n("397336");
            let f = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let h = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => d.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                g = () => {
                    d.default.isLoaded && h.compute()
                },
                E = () => {
                    g()
                };

            function p() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                h.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class m extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(d.default), null != e && (f = e), this.syncWith([d.default], E), this.syncWith([a.default], p)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return h
                }
            }
            m.displayName = "StickersPersistedStore", m.persistKey = "StickersPersistedStoreV2";
            var N = new m(o.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        h.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), g()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== u.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return i
                },
                default: function() {
                    return g
                }
            });
            var l, i, s = n("37983");
            n("884691");
            var o = n("414456"),
                r = n.n(o),
                a = n("77078"),
                d = n("36694"),
                c = n("381546"),
                u = n("68238"),
                f = n("423487"),
                h = n("557296");
            (l = i || (i = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var g = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: i = "text-normal",
                    textVariant: o = "text-sm/medium"
                } = e, g = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return u.default;
                        case 2:
                            return c.default;
                        case 3:
                            return d.default
                    }
                }(n), E = function(e) {
                    switch (e) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(n);
                return (0, s.jsxs)("div", {
                    className: r(h.container, E, l),
                    children: [(0, s.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, s.jsx)(g, {
                            className: h.icon
                        })
                    }), (0, s.jsx)(a.Text, {
                        className: h.text,
                        color: i,
                        variant: o,
                        children: t
                    })]
                })
            }
        },
        3958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecordModes: function() {
                    return l
                },
                default: function() {
                    return b
                }
            }), n("222007");
            var l, i, s = n("37983"),
                o = n("884691"),
                r = n("414456"),
                a = n.n(r),
                d = n("800648"),
                c = n.n(d),
                u = n("917351"),
                f = n.n(u),
                h = n("77078"),
                g = n("13798"),
                E = n("145131"),
                p = n("782340"),
                m = n("523192");
            (i = l || (l = {})).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING";
            let N = {
                DEFAULT: m.default,
                RECORDING: m.recording
            };
            class R extends o.PureComponent {
                componentWillUnmount() {
                    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
                }
                componentDidUpdate(e) {
                    let {
                        mode: t
                    } = this.props, {
                        mode: n
                    } = e;
                    if (n === t) return;
                    let {
                        _inputRef: l
                    } = this;
                    if (null == l.current) return;
                    let {
                        activeElement: i
                    } = document;
                    "DEFAULT" === t && l.current === i && l.current.blur(), "RECORDING" === t && l.current !== i && l.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: n,
                        disabled: l
                    } = this.props, i = (0, g.toString)(n, !0);
                    e = "RECORDING" === t ? p.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? p.default.Messages.SHORTCUT_RECORDER_BUTTON : p.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let o = "DEFAULT" === t && n.length > 0;
                    return (0, s.jsx)(h.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, s.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: a(m.container, N[t], {
                                [m.hasValue]: o,
                                [m.disabled]: l
                            }),
                            children: (0, s.jsxs)(E.default, {
                                className: m.layout,
                                children: [(0, s.jsx)(E.default.Child, {
                                    className: m.input,
                                    children: (0, s.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: p.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: i,
                                        disabled: "RECORDING" !== this.props.mode || l
                                    })
                                }), (0, s.jsx)(E.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, s.jsxs)(h.Button, {
                                        className: m.button,
                                        disabled: l,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: h.Button.Sizes.MIN,
                                        color: h.ButtonColors.PRIMARY,
                                        children: [(0, s.jsx)("span", {
                                            className: m.text,
                                            children: e
                                        }), (0, s.jsx)("span", {
                                            className: m.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = f.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = o.createRef(), this._containerRef = o.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: n,
                            onChange: l
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != n && null != l) this._unregisterNativeRecorder = n(e.id, l);
                            else if (null != l) {
                                let t = new c(e);
                                t.handleKey = l
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: n
                        } = this.props;
                        (!n || "RECORDING" !== this._mousedownMode) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var b = R
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("505088"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        backgroundColor: r,
                        ...a
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon, void 0, {
                    size: 24
                })
        },
        68238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("225389"),
                o = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 12 12",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, s.CircleInformationIcon, {}, {
                    size: 16
                })
        }
    }
]);