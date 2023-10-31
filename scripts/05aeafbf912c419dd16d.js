(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76016"], {
        748268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c87be216431a35927431.svg"
        },
        913139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("913144"),
                r = {
                    addKeybind(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_ADD_KEYBIND",
                            keybind: e
                        })
                    },
                    setKeybind(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_SET_KEYBIND",
                            keybind: e
                        })
                    },
                    deleteKeybind(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_DELETE_KEYBIND",
                            id: e
                        })
                    },
                    enableAll(e) {
                        i.default.dispatch({
                            type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                            enable: e
                        })
                    }
                }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return _
                },
                resetSubscriptionPlanData: function() {
                    return f
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("333805"),
                a = n("160299"),
                s = n("745279"),
                o = n("850068"),
                u = n("49111"),
                d = n("646718");
            async function c(e, t, n, d, c) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let l = {
                            url: u.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        s = {};
                    null != t && (s.country_code = t), null != n && (s.payment_source_id = n), null != d && (s.include_unpublished = d), null != c && (s.revenue_surface = c), l.query = s, !a.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let E = await i.default.get(l);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, s.captureBillingException)(t), new l.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function _(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => c(i, e, t, void 0, n)))
            }

            function f() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        278108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("499032"),
                a = n.n(l),
                s = n("312165"),
                o = n("3958"),
                u = n("773336"),
                d = n("50885"),
                c = n("49111");
            let E = u.isPlatformEmbedded && null != d.default.getDiscordUtils().inputCaptureRegisterElement;
            class _ extends r.PureComponent {
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
                    u.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === o.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: r
                    } = this.state, {
                        disabled: l
                    } = this.props;
                    return E ? (t = d.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !u.isPlatformEmbedded && (e = this.handleComboKeys), (0, i.jsx)(o.default, {
                        disabled: l,
                        value: n,
                        mode: r,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: E
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        u.isPlatformEmbedded && !E && (this.gs = new s.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: o.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: o.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === o.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, n) => {
                        if (n.preventDefault(), "keydown" === n.type) {
                            let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, a(e), c.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: i
                                } = n;
                            null == e.find(e => {
                                let [, t] = e;
                                return i === t
                            }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, i, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
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
                        mode: o.RecordModes.DEFAULT
                    }
                }
            }
            var f = _
        },
        225389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: s = "",
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: s = "",
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("49111"),
                l = n("782340");
            class a extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        312165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("44170"),
                r = n("773336"),
                l = n("50885"),
                a = n("13798"),
                s = n("49111");
            let o = [],
                u = (e, t, n) => {
                    let i = (0, r.isWindows)() ? 0 : 1;
                    (e !== s.KeyboardDeviceTypes.MOUSE_BUTTON || n !== i) && o.forEach(i => i._handleEvent(e, t, n))
                };
            class d extends i.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (o = o.filter(e => e !== this)).length && l.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, a.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [i, r] = t;
                        return !(i === e && r === n)
                    }) : (this.combo.push([e, n, (0, a.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], o.push(this), 1 === o.length && l.default.setOnInputEventCallback(u)
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("605250"),
                r = n("802493");
            let l = new i.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return l.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let l = r.default.stickersTransaction(i);
                    for (let i of (l.putAll(e, t), n)) l.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = r || (r = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return a
                },
                getApplicationResolution: function() {
                    return E
                },
                ApplicationStreamFPS: function() {
                    return s
                },
                ApplicationStreamPresets: function() {
                    return o
                },
                getApplicationFramerate: function() {
                    return _
                },
                ApplicationStreamPresetValues: function() {
                    return f
                },
                ApplicationStreamSettingRequirements: function() {
                    return S
                },
                ApplicationStreamResolutionButtons: function() {
                    return p
                },
                GoLiveDeviceResolutionButtons: function() {
                    return h
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return O
                },
                ApplicationStreamFPSButtons: function() {
                    return g
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return R
                }
            });
            var i, r, l, a, s, o, u = n("49111"),
                d = n("646718"),
                c = n("782340");

            function E(e) {
                switch (e) {
                    case a.RESOLUTION_480:
                        return a.RESOLUTION_480;
                    case a.RESOLUTION_720:
                        return a.RESOLUTION_720;
                    case a.RESOLUTION_1080:
                        return a.RESOLUTION_1080;
                    case a.RESOLUTION_SOURCE:
                        return a.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function _(e) {
                switch (e) {
                    case s.FPS_5:
                        return s.FPS_5;
                    case s.FPS_15:
                        return s.FPS_15;
                    case s.FPS_30:
                        return s.FPS_30;
                    case s.FPS_60:
                        return s.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = a || (a = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (r = s || (s = {}))[r.FPS_5 = 5] = "FPS_5", r[r.FPS_15 = 15] = "FPS_15", r[r.FPS_30 = 30] = "FPS_30", r[r.FPS_60 = 60] = "FPS_60", (l = o || (o = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let f = {
                    [o.PRESET_DOCUMENTS]: [{
                        resolution: a.RESOLUTION_SOURCE,
                        fps: s.FPS_15
                    }, {
                        resolution: a.RESOLUTION_SOURCE,
                        fps: s.FPS_5
                    }],
                    [o.PRESET_VIDEO]: [{
                        resolution: a.RESOLUTION_1440,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_1080,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: s.FPS_30
                    }],
                    [o.PRESET_CUSTOM]: []
                },
                S = [{
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_30,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_15,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_30,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_15,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_30
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_15
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_5
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_60,
                    guildPremiumTier: u.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_30
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_15
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_5
                }];

            function I(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let p = [I(a.RESOLUTION_720), I(a.RESOLUTION_1080), I(a.RESOLUTION_1440), I(a.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                h = [I(a.RESOLUTION_720), I(a.RESOLUTION_1080), I(a.RESOLUTION_1440)],
                T = e => "".concat(e, "p"),
                O = [I(a.RESOLUTION_480, () => T(a.RESOLUTION_480)), I(a.RESOLUTION_720, () => T(a.RESOLUTION_720)), I(a.RESOLUTION_1080, () => T(a.RESOLUTION_1080)), I(a.RESOLUTION_1440, () => T(a.RESOLUTION_1440)), I(a.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                g = [I(s.FPS_15), I(s.FPS_30), I(s.FPS_60)],
                R = [I(s.FPS_15, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_15
                })), I(s.FPS_30, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_30
                })), I(s.FPS_60, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_60
                }))]
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return c
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return _
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return f
                },
                GuildHomeBadgeExperiment: function() {
                    return S
                },
                GuildHomeFeedbackExperiment: function() {
                    return I
                },
                GuildHomeDeprecationExperiment: function() {
                    return p
                }
            });
            var i = n("446674"),
                r = n("203288"),
                l = n("862205"),
                a = n("21121"),
                s = n("923959"),
                o = n("305961"),
                u = n("49111");

            function d(e, t, n) {
                let i = t.getChannels(e)[s.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function c(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([s.default, r.default], () => null != e && d(e.id, s.default, r.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === u.ME || e === u.FAVORITES || (0, a.isInMainTabsExperiment)()) return !1;
                let t = o.default.getGuild(e);
                return !!(null != t && d(e, s.default, r.default)) && t.hasFeature(u.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let _ = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                f = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                S = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, l.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, l.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let I = (0, l.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                p = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                a = n("38654"),
                s = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    a = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, S = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, I = async (e, t) => {
                if (a.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var p = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: f,
                enableVerificationForm: S,
                submitVerificationForm: I
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return S
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return I
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return p
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                a = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                _ = 150,
                f = 1e3,
                S = 300,
                I = "Membership Gating",
                p = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, i.default)(e => a),
                o = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                a = n("50926"),
                s = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return h
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return O
                },
                updateImpersonatedChannels: function() {
                    return R
                },
                updateImpersonatedRoles: function() {
                    return m
                },
                updateImpersonatedData: function() {
                    return N
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                a = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                S = n("507950"),
                I = n("49111"),
                p = n("724210");

            function h(e, t) {
                _.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === S.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), g(e)
            }

            function T(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (_.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === S.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), g(e))
            }

            function O(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function g(e) {
                let t = c.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, p.isStaticChannelRoute)(t);
                if (!i && !d.default.can(I.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(I.Routes.CHANNEL(e, t.id))
                }
            }

            function R(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), T(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function m(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && R(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), T(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function N(e, t) {
                T(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = i.parse(n),
                    s = (0, r.getFirstQueryStringValue)(a[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                a = n("719923"),
                s = n("782340");
            let o = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, s = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: s ? i : l
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), a = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = u({
                        user: r,
                        config: a
                    }), E = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        692171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("872717"),
                l = n("913144"),
                a = n("49111");
            let s = Object.freeze({
                    burstCredits: 0,
                    wasReplenishedToday: !1,
                    nextReplenishAt: null,
                    isReactionPickerBurstToggled: null,
                    emojiReactionForCoachmark: null,
                    guildBurstPreviews: {}
                }),
                o = {
                    ...s
                };
            class u extends i.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : {
                        ...s
                    }
                }
                get remainingBurstCurrency() {
                    return o.burstCredits
                }
                get hasAvailableBurstCurrency() {
                    return this.remainingBurstCurrency > 0
                }
                get nextReplenishAt() {
                    return o.nextReplenishAt
                }
                get isReactionPickerBurstToggled() {
                    return null != o.isReactionPickerBurstToggled && o.isReactionPickerBurstToggled
                }
                get emojiReactionToTargetForCoachmark() {
                    return o.emojiReactionForCoachmark
                }
                getBurstedPreviewData(e) {
                    var t;
                    return null !== (t = o.guildBurstPreviews[e]) && void 0 !== t ? t : void 0
                }
                getState() {
                    return o
                }
            }
            u.displayName = "BurstReactionStore", u.persistKey = "BurstReactionStore33";
            var d = new u(l.default, {
                BURST_CREDITS_SET: e => {
                    let {
                        amount: t,
                        wasReplenishedToday: n,
                        nextReplenishAt: i
                    } = e;
                    o.burstCredits = t, o.wasReplenishedToday = n, o.nextReplenishAt = i
                },
                POST_CONNECTION_OPEN: () => {
                    r.default.get({
                        url: a.Endpoints.BURST_CREDIT_BALANCE
                    }).then(e => {
                        l.default.dispatch({
                            type: "BURST_CREDITS_SET",
                            amount: e.body.amount,
                            wasReplenishedToday: e.body.replenished_today,
                            nextReplenishAt: new Date(e.body.next_replenish_at)
                        })
                    }).catch(() => {})
                },
                BURST_REACTION_PICKER_TOGGLE: e => {
                    let {
                        value: t
                    } = e;
                    o.isReactionPickerBurstToggled = t
                },
                BURST_REACTION_SHOW_FREE_USER_SENT_POPOUT: e => {
                    let {
                        emoji: t
                    } = e;
                    o.emojiReactionForCoachmark = null != t ? t : null
                },
                BURST_GUILD_PREVIEW_SET: e => {
                    let {
                        guildId: t,
                        channelId: n,
                        messageId: i,
                        emoji: r
                    } = e;
                    o.guildBurstPreviews[t] = {
                        channelId: n,
                        messageId: i,
                        emoji: r
                    }
                },
                BURST_GUILD_PREVIEW_CLEAR: e => {
                    let {
                        guildId: t
                    } = e;
                    delete o.guildBurstPreviews[t]
                }
            })
        },
        644926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                a = n("77078"),
                s = n("913139"),
                o = n("278108"),
                u = n("485328"),
                d = n("227602"),
                c = n("555158"),
                E = n("13798"),
                _ = n("846325"),
                f = n("49111"),
                S = n("782340"),
                I = n("304593");

            function p(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: p
                } = e, h = (0, l.useStateFromStores)([d.default], () => d.default.getKeybindForAction(f.GlobalKeybindActions.SOUNDBOARD_HOLD)), [T, O] = r.useState(null !== (t = null == h ? void 0 : h.shortcut) && void 0 !== t ? t : []);
                return r.useEffect(() => (u.default.disable(), () => {
                    u.default.enable()
                }), []), (0, i.jsxs)(a.ModalRoot, {
                    transitionState: n,
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)(a.Heading, {
                            className: I.header,
                            variant: "heading-xl/semibold",
                            children: S.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, i.jsx)(a.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: p
                        })]
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: I.content,
                        children: [(0, i.jsx)(c.default, {
                            className: I.warning,
                            messageType: c.HelpMessageTypes.WARNING,
                            children: S.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, i.jsx)(a.Heading, {
                            className: I.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, i.jsx)(a.Text, {
                            className: I.action,
                            variant: "text-md/normal",
                            children: S.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, i.jsx)(a.Text, {
                            className: I.actionDescription,
                            variant: "text-sm/normal",
                            children: S.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, i.jsx)(a.Heading, {
                            className: I.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, i.jsx)(o.default, {
                            defaultValue: T,
                            onChange: O
                        }), (0, i.jsx)(a.Anchor, {
                            className: I.resetButton,
                            onClick: () => O((0, E.toCombo)(_.DEFAULT_KEYBIND)),
                            children: S.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, i.jsxs)(a.ModalFooter, {
                        children: [(0, i.jsx)(a.Button, {
                            onClick: function() {
                                if (0 === T.length) return null != h && s.default.deleteKeybind(h.id), p();
                                null == h ? s.default.addKeybind({
                                    action: f.GlobalKeybindActions.SOUNDBOARD_HOLD,
                                    shortcut: T,
                                    enabled: !0,
                                    params: {}
                                }) : s.default.setKeybind({
                                    ...h,
                                    shortcut: T
                                });
                                p()
                            },
                            children: S.default.Messages.SAVE
                        }), (0, i.jsx)(a.Button, {
                            onClick: p,
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            children: S.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var l = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, r, l = n("991170"),
                a = n("719923"),
                s = n("4233"),
                o = n("24373"),
                u = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = a.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = s.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || l.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                c = (e, t, n) => d(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                a = n("913144"),
                s = n("80507"),
                o = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let _ = new s.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                f = () => {
                    u.default.isLoaded && _.compute()
                },
                S = () => {
                    f()
                };

            function I() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class p extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], S), this.syncWith([o.default], I)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return _
                }
            }
            p.displayName = "StickersPersistedStore", p.persistKey = "StickersPersistedStoreV2";
            var h = new p(a.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        _.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), f()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i, r, l = n("102053"),
                a = n("446674"),
                s = n("913144"),
                o = n("802493"),
                u = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                S = n("305961"),
                I = n("161585"),
                p = n("24373"),
                h = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let T = 2,
                O = new Map,
                g = new Map,
                R = null,
                m = [],
                N = null,
                C = !1,
                A = new Map,
                v = (e, t) => {
                    A = new Map(A.set(e, t))
                },
                U = 1e3 * h.Durations.HOUR,
                P = () => {
                    if (0 !== T) return;
                    let e = o.default.database();
                    if (null == e) return;
                    T = 2;
                    let t = (0, u.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !A.has(e)) {
                                for (let t of n) y(t, !0, S.default.getGuild(e));
                                v(e, n)
                            }
                    }
                },
                y = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    g.set(e.id, e), t && L(e, n)
                },
                L = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == R) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: I.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, p.isStandardSticker)(e)) {
                        let t = m.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: I.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: I.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), R.set(e.id, r)
                    } else if ((0, p.isGuildSticker)(e) && null != n) {
                        let r = c.default.getByName(n),
                            l = {
                                type: I.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: I.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            R.set(e.id, a);
                            return
                        }
                        a.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => a.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), R.set(e.id, a)
                    }
                },
                D = (e, t, n) => {
                    O.set(e.id, e);
                    let i = [...m];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), m = i
                    }(t || n) && e.stickers.forEach(e => y(e))
                },
                M = () => {
                    A.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => L(e, n))
                    }), m.forEach(e => {
                        e.stickers.forEach(e => L(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => y(t, !0, e)), v(e.id, e.stickers))
            }
            class w extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, S.default)
                }
                get isLoaded() {
                    return 0 !== T
                }
                get stickerMetadata() {
                    return P(), null == R && (R = new Map, M()), R
                }
                get hasLoadedStickerPacks() {
                    return null != N && N + U > Date.now()
                }
                get isFetchingStickerPacks() {
                    return C
                }
                getStickerById(e) {
                    return !g.has(e) && P(), g.get(e)
                }
                getStickerPack(e) {
                    return O.get(e)
                }
                getPremiumPacks() {
                    return m
                }
                isPremiumPack(e) {
                    return m.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return A
                }
                getAllStickersIterator() {
                    return P(), g.values()
                }
                getAllGuildStickers() {
                    return P(), A
                }
                getStickersByGuildId(e) {
                    return P(), A.get(e)
                }
            }
            w.displayName = "StickersStore";
            var F = new w(s.default, {
                BACKGROUND_SYNC: () => {
                    R = null, g = new Map, A = new Map, T = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    R = null, g = new Map, A = new Map, t.forEach(b), T = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (b(t), 1 === T && null == t.stickers && null != t.stickerUpdates && (T = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = A.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != R && R.delete(e.id), g.delete(e.id)
                    }), A.delete(n.id), A = new Map(A)
                },
                LOGOUT: () => {
                    T = 0, m = [], g.clear(), O.clear(), R = null, A.clear(), A = new Map(A), C = !1, N = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    C = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => D(e, !0)), N = Date.now(), C = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    D(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => y(e)), v(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, l = null !== (t = A.get(i)) && void 0 !== t ? t : [];
                    v(i, [...null !== (n = l.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), y(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    y(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = g.get(e.id);
                        return null != n && (0, p.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = A.get(n)) && void 0 !== t ? t : [], a = l.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        g.delete(e.id), null != R && R.delete(e.id)
                    });
                    let s = i.map(e => r(e));
                    s.forEach(e => y(e)), v(n, s)
                }
            })
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, l, a;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return s
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (l = i || (i = {}))[l.BACKGROUND = 0] = "BACKGROUND", (a = r || (r = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
            let s = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                o = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var l = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class a extends l.default {
                static createFromServer(e) {
                    var t;
                    return new a({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("619340"),
                a = n("376556"),
                s = n("450205"),
                o = n("813006"),
                u = n("49111");
            let d = new Set([u.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                _ = [],
                f = {},
                S = {},
                I = e => {
                    E = e.filter(e => !d.has(e.type) && a.default.isSupported(e.type)), _ = e.filter(e => d.has(e.type)), c = !1
                };
            class p extends i.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return S[e] || !1
                }
            }
            p.displayName = "ConnectedAccountsStore";
            var h = new p(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    I(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new o.default(e.guild)
                            }))
                        }));
                        I(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, l = E.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != r && (l.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                a = n("49111");
            let s = {},
                o = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = s[e],
                    o = null != r ? {
                        state: a.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(o), s = {
                    ...s,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, d(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function a() {
                l = []
            }
            class s extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            s.displayName = "LayerStore";
            var o = new s(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
            })
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return r
                },
                default: function() {
                    return f
                }
            });
            var i, r, l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                o = n("77078"),
                u = n("36694"),
                d = n("381546"),
                c = n("68238"),
                E = n("423487"),
                _ = n("557296");
            (i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
            var f = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: i,
                    textColor: a = "text-normal",
                    textVariant: f = "text-sm/medium"
                } = e, S = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return E.default;
                        case r.INFO:
                            return c.default;
                        case r.ERROR:
                            return d.default;
                        case r.POSITIVE:
                            return u.default
                    }
                }(n), I = function(e) {
                    switch (e) {
                        case r.WARNING:
                            return _.warning;
                        case r.INFO:
                            return _.info;
                        case r.ERROR:
                            return _.error;
                        case r.POSITIVE:
                            return _.positive
                    }
                }(n);
                return (0, l.jsxs)("div", {
                    className: s(_.container, I, i),
                    children: [(0, l.jsx)("div", {
                        className: _.iconDiv,
                        children: (0, l.jsx)(S, {
                            className: _.icon
                        })
                    }), (0, l.jsx)(o.Text, {
                        className: _.text,
                        color: a,
                        variant: f,
                        children: t
                    })]
                })
            }
        },
        3958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecordModes: function() {
                    return r
                },
                default: function() {
                    return O
                }
            });
            var i, r, l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("800648"),
                d = n.n(u),
                c = n("917351"),
                E = n.n(c),
                _ = n("77078"),
                f = n("13798"),
                S = n("145131"),
                I = n("782340"),
                p = n("523192");
            (i = r || (r = {})).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING";
            let h = {
                [r.DEFAULT]: p.default,
                [r.RECORDING]: p.recording
            };
            class T extends a.PureComponent {
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
                        _inputRef: i
                    } = this;
                    if (null == i.current) return;
                    let {
                        activeElement: l
                    } = document;
                    t === r.DEFAULT && i.current === l && i.current.blur(), t === r.RECORDING && i.current !== l && i.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: n,
                        disabled: i
                    } = this.props, a = (0, f.toString)(n, !0);
                    e = t === r.RECORDING ? I.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? I.default.Messages.SHORTCUT_RECORDER_BUTTON : I.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let s = t === r.DEFAULT && n.length > 0;
                    return (0, l.jsx)(_.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, l.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: o(p.container, h[t], {
                                [p.hasValue]: s,
                                [p.disabled]: i
                            }),
                            children: (0, l.jsxs)(S.default, {
                                className: p.layout,
                                children: [(0, l.jsx)(S.default.Child, {
                                    className: p.input,
                                    children: (0, l.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: I.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: a,
                                        disabled: this.props.mode !== r.RECORDING || i
                                    })
                                }), (0, l.jsx)(S.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, l.jsxs)(_.Button, {
                                        className: p.button,
                                        disabled: i,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: _.Button.Sizes.MIN,
                                        color: _.ButtonColors.PRIMARY,
                                        children: [(0, l.jsx)("span", {
                                            className: p.text,
                                            children: e
                                        }), (0, l.jsx)("span", {
                                            className: p.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = E.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = a.createRef(), this._containerRef = a.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: n,
                            onChange: i
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != n && null != i) this._unregisterNativeRecorder = n(e.id, i);
                            else if (null != i) {
                                let t = new d(e);
                                t.handleKey = i
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: n
                        } = this.props;
                        (!n || this._mousedownMode !== r.RECORDING) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var O = T
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: s,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon)
        },
        68238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("225389"),
                a = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 12 12",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, l.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        }
    }
]);