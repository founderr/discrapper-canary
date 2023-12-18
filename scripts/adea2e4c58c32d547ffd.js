(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79455"], {
        666020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var i = n("913144"),
                a = n("696605");

            function l(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: t,
                    userIds: e
                })
            }

            function r(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: t,
                    userIds: e
                })
            }

            function u(t, e, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: t,
                    channelId: e,
                    ranges: n
                })
            }

            function s(t) {
                let {
                    guildId: e,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: r
                } = t;

                function s(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(t / r)) + e)
                }
                let o = [];

                function d(t) {
                    let e = t + (a.MINIMUM_RANGE - 1);
                    return o.push([t, e]), e + 1
                }
                let c = s(.5 * l),
                    E = s(i, -c),
                    I = s(i + l, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; E <= I;) E = d(E);
                u(e, n, o)
            }
        },
        713841: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("913144"),
                a = n("592407"),
                l = n("482391"),
                r = n("611183"),
                u = {
                    init() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: t,
                            sectionId: e
                        })
                    },
                    startEditingCommandPermissions(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    stopEditingCommandPermissions(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    startEditingIntegration(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: t
                        })
                    },
                    stopEditingIntegration() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: t
                        })
                    },
                    startEditingWebhook(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: t
                        })
                    },
                    stopEditingWebhook() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(t) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: t
                        })
                    },
                    async saveApplicationPermissions(t, e, n) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await l.updateApplicationCommandPermissions({
                                applicationId: t,
                                commandId: t,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: e,
                                permissions: n
                            }), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveIntegration(t, e) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.default.updateIntegration(t, e.id, e.expire_behavior, e.expire_grace_period, e.enable_emoticons), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveWebhook(t, e) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await r.default.update(t, e.id, e), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    }
                }
        },
        352674: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
                    startTyping(t) {
                        i.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: t
                        })
                    },
                    stopTyping(t) {
                        i.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: t
                        })
                    }
                }
        },
        611183: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("917351"),
                a = n.n(i),
                l = n("872717"),
                r = n("913144"),
                u = n("49111");
            let s = ["Spidey Bot", "Captain Hook"];
            var o = {
                fetchForGuild(t) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t
                    }), l.default.get({
                        url: u.Endpoints.GUILD_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: n
                        } = e;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            webhooks: n
                        })
                    }).catch(e => {
                        let {
                            body: n
                        } = e;
                        r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(t, e) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t,
                        channelId: e
                    }), l.default.get({
                        url: u.Endpoints.CHANNEL_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            channelId: e,
                            webhooks: i
                        })
                    })
                },
                create: (t, e, n) => (null == n && (n = s[a.random(0, s.length - 1)]), l.default.post({
                    url: u.Endpoints.CHANNEL_WEBHOOKS(e),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return r.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: t,
                        webhook: n
                    }), n
                })),
                delete: (t, e) => l.default.delete({
                    url: u.Endpoints.WEBHOOK(e),
                    oldFormErrors: !0
                }).then(() => {
                    r.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: t,
                        webhookId: e
                    })
                }),
                update: (t, e, n) => l.default.patch({
                    url: u.Endpoints.WEBHOOK(e),
                    body: n,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return r.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: t,
                        webhook: n
                    }), n
                })
            }
        },
        926001: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SlashBoxIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let r = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        750560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("37983");
            var i = n("884691"),
                a = n("917351"),
                l = n.n(a);
            n("233736");
            var r = n("666020");

            function u(t) {
                i.useEffect(() => (l.forEach(t, (t, e) => (0, r.subscribeMembers)(e, t)), () => {
                    l.forEach(t, (t, e) => (0, r.unsubscribeMembers)(e, t))
                }), [t])
            }
        },
        981112: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                stageAttachmentFiles: function() {
                    return T
                },
                default: function() {
                    return i
                }
            }), n("808653"), n("222007"), n("70102");
            var i, a = n("811022"),
                l = n("994440"),
                r = n("282928"),
                u = n("142852"),
                s = n("402752"),
                o = n("572868"),
                d = n("49111"),
                c = n("894488"),
                E = n("782340");
            let I = new a.default("CloudUploaderBase.tsx");
            async function T(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = t.map(t => new Promise((i, a) => {
                        switch (t.status) {
                            case r.CloudUploadStatus.NOT_STARTED:
                                t.upload();
                                break;
                            case r.CloudUploadStatus.COMPLETED:
                                i("complete");
                                break;
                            case r.CloudUploadStatus.ERROR:
                                e && t.error !== d.AbortCodes.ENTITY_TOO_LARGE ? t.upload() : a(Error("File failed to upload"));
                                break;
                            case r.CloudUploadStatus.CANCELED:
                                a(Error("Upload is canceled"))
                        }
                        t.on("complete", () => {
                            i("complete")
                        }), t.on("error", () => {
                            a(Error("File ".concat(t.id, " failed to upload")))
                        }), t.on("progress", (t, e) => {
                            null == n || n(t, e)
                        })
                    }));
                await Promise.all(i)
            }
            i = class extends o.default {
                _fileSize() {
                    return this.files.reduce((t, e) => {
                        var n;
                        return t += null !== (n = e.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var t, e;
                    let n = (0, u.getUploadTarget)(null === (e = this.files[0]) || void 0 === e ? void 0 : null === (t = e.item) || void 0 === t ? void 0 : t.target);
                    return this.files.length > n.getMaxAttachmentsCount() ? (I.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(t => t.error === d.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let t = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : E.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        e = this.files.some(t => t.isImage),
                        n = this.files.some(t => t.isVideo),
                        i = this._fileSize();
                    I.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: i,
                        currentSize: i,
                        name: t,
                        hasVideo: n,
                        hasImage: e,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: t,
                        total: e
                    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
                    this._handleProgress(t, e, n)
                }
                _recomputeProgressTotal() {
                    let t = this._fileSize(),
                        e = this.files.reduce((t, e) => {
                            var n;
                            return t += null !== (n = e.loaded) && void 0 !== n ? n : 0
                        }, 0);
                    return {
                        loaded: e,
                        total: t
                    }
                }
                _recomputeProgressByFile() {
                    let t = {};
                    return this.files.forEach(e => {
                        t[e.id] = (0, s.calculateProgress)(e.loaded, e.currentSize)
                    }), t
                }
                cancel() {
                    I.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(t => t.cancel()), this._handleComplete())
                }
                async cancelItem(t) {
                    I.log("Cancel called for ".concat(this.id, " for item ").concat(t));
                    let e = this.files.find(e => e.id === t);
                    if (null == e || e.status === r.CloudUploadStatus.CANCELED) return;
                    let n = this.files.indexOf(e);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, l.cancelGetAttachmentFile)(e), e.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(t => t.status === r.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let t = this.files;
                    return t.length - t.filter(t => t.status === r.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...t) {
                    super(...t), this.files = []
                }
            }
        },
        572868: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007"), n("70102");
            var i, a = n("44170"),
                l = n("917351"),
                r = n.n(l),
                u = n("605250"),
                s = n("402752"),
                o = n("894488");
            let d = new u.default("UploaderBase.tsx");
            i = class extends a.EventEmitter {
                _addAttachmentsToPayload(t, e, n) {
                    let i = {
                            ...t
                        },
                        a = [...r.get(i, e, []), ...n];
                    return r.set(i, e, a)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    d.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(t) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(t, e, n) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: t.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == e ? void 0 : e.content,
                        channelId: null == e ? void 0 : e.channel_id,
                        items: n
                    }
                }
                constructor(t, e = "POST", n) {
                    var i;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = t => {
                        this._cancel = t, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (t, e, n) => {
                        let i = Date.now(),
                            a = (0, s.calculateProgress)(t, e),
                            l = Math.floor((t - this._loaded) / ((i - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var r;
                            null === (r = this._file.items) || void 0 === r || r.forEach(t => {
                                t.item.progress = n[t.id]
                            })
                        }
                        this._lastUpdate = i, this._loaded = t, this._file = {
                            ...this._file,
                            currentSize: e,
                            progress: a,
                            rate: l
                        }, this.emit("progress", this._file)
                    }, this._handleException = t => {
                        this._handleError({
                            reason: {
                                type: o.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: t.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = t => {
                        let {
                            code: e,
                            reason: n,
                            body: i
                        } = t;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(e, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, e, i, n), this.removeAllListeners())
                    }, this._handleComplete = t => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, t), this.removeAllListeners()
                    }, this.id = r.uniqueId("Uploader"), this._url = t, this._method = e, this._raiseEndpointErrors = null !== (i = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== i && i
                }
            }
        },
        991630: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                u = n("587974"),
                s = n("315102"),
                o = n("524768"),
                d = n("616674"),
                c = n("363577");

            function E(t) {
                let {
                    section: e,
                    isSelected: n,
                    width: l,
                    height: E,
                    className: I,
                    selectable: T = !1,
                    onFocus: _,
                    onBlur: f,
                    onMouseOver: S,
                    onMouseLeave: N,
                    ...p
                } = t, [h, A] = a.useState(!1), C = a.useCallback(() => {
                    A(!0), null == _ || _()
                }, [_]), m = a.useCallback(() => {
                    A(!1), null == f || f()
                }, [f]), g = a.useCallback(() => {
                    A(!0), null == S || S()
                }, [S]), O = a.useCallback(() => {
                    A(!1), null == N || N()
                }, [N]), D = a.useMemo(() => {
                    if (e.type === o.ApplicationCommandSectionType.APPLICATION) {
                        var t;
                        return s.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            bot: null === (t = e.application) || void 0 === t ? void 0 : t.bot,
                            botIconFirst: !0,
                            size: l
                        })
                    }
                    return c
                }, [e, l]);
                return (0, i.jsx)("div", {
                    ...p,
                    className: r(d.wrapper, I, {
                        [d.selectable]: T,
                        [d.selected]: T && n
                    }),
                    onFocus: C,
                    onBlur: m,
                    onMouseOver: g,
                    onMouseLeave: O,
                    children: (0, i.jsx)(u.default, {
                        className: d.mask,
                        mask: T && (n || h) ? u.MaskIDs.SQUIRCLE : u.MaskIDs.AVATAR_DEFAULT,
                        width: l,
                        height: E,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: l,
                                height: E
                            },
                            src: D
                        })
                    })
                })
            }
        },
        943161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("83910"),
                u = n("93393"),
                s = n("317041"),
                o = n("749296");
            let d = t => {
                switch (t.id) {
                    case s.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case s.BuiltInSectionId.FRECENCY:
                        return u.default;
                    default:
                        return
                }
            };

            function c(t) {
                let {
                    section: e,
                    className: n,
                    width: a,
                    height: r,
                    padding: u,
                    isSelected: s,
                    selectable: c = !1,
                    ...E
                } = t, I = d(e);
                return (0, i.jsx)("div", {
                    className: l(o.wrapper, n, {
                        [o.selectable]: c,
                        [o.selected]: c && s
                    }),
                    style: {
                        width: a,
                        height: r,
                        padding: null != u ? u : 0
                    },
                    children: null != I ? (0, i.jsx)(I, {
                        className: o.icon,
                        width: a,
                        height: r,
                        ...E
                    }) : null
                })
            }
        },
        355263: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIconComponent: function() {
                    return u
                },
                pxToRem: function() {
                    return s
                },
                getCommandQuery: function() {
                    return o
                }
            });
            var i = n("524768"),
                a = n("991630"),
                l = n("943161"),
                r = n("317041");
            let u = t => t.type === i.ApplicationCommandSectionType.BUILT_IN ? l.default : a.default;

            function s(t) {
                return "".concat(t / 16, "rem")
            }

            function o(t, e) {
                let n = e,
                    i = !1,
                    a = e.indexOf(":");
                if (a >= 0) {
                    let t = e.lastIndexOf(" ", a);
                    t >= 0 ? (e = e.substring(0, t), i = !0) : e = e.substring(0, a)
                } else e = e.substring(0, e.length);
                let l = e.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return l.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, l.pop()), e = l.join(" "), (n.length > e.length || e.endsWith(" ")) && (i = !0, e = e.trimEnd()), {
                    text: e,
                    parts: l,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("850572"),
                r = () => (0, i.jsx)("div", {
                    className: l.loadingWrapper,
                    children: (0, i.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        337026: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useShowApplicationInGDM: function() {
                    return r
                }
            });
            var i = n("65597"),
                a = n("42203"),
                l = n("337026");

            function r(t) {
                let e = (0, i.default)([a.default], () => a.default.getChannel(t)),
                    {
                        enabled: n
                    } = l.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(t) {
                    return null != t && (!!t.isMultiUserDM() || !!t.isDM() && !t.isSystemDM() && null == t.rawRecipients.find(t => t.bot))
                }(e)
            }
        },
        888355: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useIsDMsToClydeEnabled: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("862205"),
                l = n("305961"),
                r = n("980215");
            let u = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_clyde_ai_dm",
                label: "DMs to Clyde",
                defaultConfig: {
                    isDMsToClydeEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable dms to clyde",
                    config: {
                        isDMsToClydeEnabled: !0
                    }
                }]
            });

            function s() {
                let {
                    isDMsToClydeEnabled: t
                } = u.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), e = (0, i.useStateFromStoresArray)([l.default], () => l.default.getGuildIds()), n = e.some(t => (0, r.getClydeExperimentEnabled)(l.default.getGuild(t)));
                return t && n
            }
        },
        823026: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            }), n("424973");
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
                r = n("77078"),
                u = n("713841"),
                s = n("79112"),
                o = n("988721"),
                d = n("592407"),
                c = n("305961"),
                E = n("957255"),
                I = n("49111"),
                T = n("782340");

            function _(t) {
                let {
                    user: e,
                    guildId: n,
                    channel: _,
                    context: f
                } = t, S = c.default.getGuild(n), N = (0, l.useStateFromStores)([E.default], () => null != S ? E.default.can(I.Permissions.MANAGE_GUILD, S) : null), p = (0, o.useContextIndexState)(_, !0, !0), h = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: A,
                    isGuildApp: C
                } = a.useMemo(() => {
                    var t, n, i, a;
                    if ((null == e ? void 0 : e.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let l = Object.values(null !== (i = null === (t = p.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {}),
                        r = Object.values(null !== (a = null === (n = h.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {});
                    return {
                        isGuildApp: l.some(t => {
                            var n;
                            return (null === (n = t.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == e ? void 0 : e.id)
                        }),
                        isUserApp: r.some(t => {
                            var n;
                            return (null === (n = t.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == e ? void 0 : e.id)
                        })
                    }
                }, [p, h, null == e ? void 0 : e.id]), m = a.useCallback(() => {
                    (null == S ? void 0 : S.id) != null && (d.default.open(S.id, I.GuildSettingsSections.INTEGRATIONS), u.default.setSection(I.IntegrationSettingsSections.APPLICATION, null == e ? void 0 : e.id))
                }, [null == e ? void 0 : e.id, null == S ? void 0 : S.id]), g = a.useCallback(() => {
                    s.default.open(I.UserSettingsSections.AUTHORIZED_APPS)
                }, []), O = f === I.AppContext.POPOUT;
                if (!(null == e ? void 0 : e.bot) || !N || O || !C && !A) return null;
                let D = [];
                return C && D.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: T.default.Messages.MANAGE_INTEGRATION,
                    action: m
                }, "manage-integration")), A && D.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-authorized-app",
                    label: T.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), D
            }
        },
        406043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useCurrentUserCommunicationDisabled: function() {
                    return u
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var i = n("446674"),
                a = n("26989"),
                l = n("697218"),
                r = n("509");

            function u(t) {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser());
                return d(null == e ? void 0 : e.id, t)
            }

            function s(t, e, n) {
                return null != e && null != t ? n.getMember(e, t) : null
            }

            function o(t) {
                var e;
                return [null !== (e = null == t ? void 0 : t.communicationDisabledUntil) && void 0 !== e ? e : null, (0, r.isMemberCommunicationDisabled)(t)]
            }

            function d(t, e) {
                let n = (0, i.useStateFromStores)([a.default], () => s(t, e, a.default), [e, t]);
                return o(n)
            }

            function c(t, e) {
                let n = s(t, e, a.default);
                return o(n)
            }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return T
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return f
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return h
                },
                clearErrors: function() {
                    return A
                },
                setDisableSubmit: function() {
                    return C
                }
            }), n("70102");
            var i = n("872717"),
                a = n("913144"),
                l = n("54239"),
                r = n("49111");
            async function u(t, e) {
                let {
                    nick: n,
                    avatar: l
                } = e;
                if (null == t) throw Error("Need guildId");
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await i.default.patch({
                        url: r.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), a.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function s(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function o(t, e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function d() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function c() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function I(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function T(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function _(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function f(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function S(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function N() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function h() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function A() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function C(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let i, a, l, r, u, s, o, d, c;
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var E = n("446674"),
                I = n("913144"),
                T = n("49111");
            let _ = T.FormStates.CLOSED,
                f = {},
                S = !1;

            function N() {
                _ = T.FormStates.CLOSED, f = {}, o = null, d = void 0, c = []
            }

            function p() {
                h(), A(), f = {}, _ = T.FormStates.OPEN
            }

            function h() {
                i = void 0, u = void 0
            }

            function A() {
                a = void 0, l = void 0, r = void 0, s = void 0
            }
            class C extends E.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return f
                }
                showNotice() {
                    return void 0 !== i || void 0 !== a || void 0 !== l || void 0 !== r || void 0 !== u || void 0 !== s
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return a
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return r
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: a,
                        pendingBio: l,
                        pendingPronouns: r,
                        pendingNickname: u,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            C.displayName = "GuildIdentitySettingsStore";
            var m = new C(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    o = t.guild, _ = T.FormStates.OPEN, f = {}, d = t.source, c = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    o = t.guild, f = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = T.FormStates.SUBMITTING, f = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (_ !== T.FormStates.SUBMITTING) return !1;
                    _ = T.FormStates.OPEN, f = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    _ = T.FormStates.OPEN, f = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    a = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    s = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    f = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    S = e
                }
            })
        },
        130037: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useTrackMemberSearchUsed: function() {
                    return T
                },
                useTrackMemberFilterRolesUsed: function() {
                    return _
                },
                MemberSafetyFlagType: function() {
                    return l
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return f
                },
                ModerationActionType: function() {
                    return r
                },
                useTrackModerationAction: function() {
                    return S
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var i, a, l, r, u = n("884691"),
                s = n("812204"),
                o = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function I(t, e, n) {
                var i;
                let a = {
                    ...e,
                    ...(0, o.collectGuildAnalyticsMetadata)(null !== (i = e.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(t, a)
            }

            function T(t) {
                let e = u.useCallback(e => {
                    ! function(t) {
                        let e = {
                            guild_id: t,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, e)
                    }(t)
                }, [t]);
                return e
            }

            function _(t) {
                let e = u.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            selected_role_count: e.size,
                            guild_id: t,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(t, e)
                }, [t]);
                return e
            }(i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

            function f(t) {
                let e = u.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            flag_type: e,
                            guild_id: t,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        I(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(t, e)
                }, [t]);
                return e
            }

            function S(t, e) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: a
                } = e, l = u.useCallback(e => {
                    let l = {
                        action_type: e,
                        mod_user_id: d.default.getId(),
                        guild_id: t,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != a ? a : void 0
                    };
                    I(E.AnalyticEvents.MODERATION_ACTION, l)
                }, [t, n, i, a]);
                return l
            }

            function N(t, e) {
                I(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: t,
                    location: e
                })
            }(a = r || (r = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"
        },
        482391: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearIntegrationPermissions: function() {
                    return s
                },
                editPermissions: function() {
                    return o
                },
                getApplicationCommands: function() {
                    return d
                },
                getApplicationCommandPermissions: function() {
                    return c
                },
                initIntegrationPermissions: function() {
                    return E
                },
                resetPermissions: function() {
                    return I
                },
                updateApplicationCommandPermissions: function() {
                    return T
                }
            });
            var i = n("872717"),
                a = n("913144"),
                l = n("507217"),
                r = n("389153"),
                u = n("49111");

            function s() {
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function o(t, e, n) {
                a.default.dispatch({
                    applicationId: t,
                    commandId: e,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function d(t, e) {
                i.default.get(u.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(n => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: e,
                        commands: n.body.application_commands,
                        guildId: t,
                        permissions: n.body.permissions
                    })
                }, () => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: e
                    })
                })
            }
            async function c(t, e, n) {
                let l = [];
                try {
                    let a = await i.default.get(u.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n));
                    a.ok && (l = a.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        a.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: t,
                            commandId: n,
                            guildId: e
                        });
                        return
                    }
                }
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: e,
                    permissions: l
                })
            }

            function E(t) {
                a.default.dispatch({
                    applicationId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function I(t) {
                a.default.dispatch({
                    commandId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function T(t) {
                let {
                    applicationId: e,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: u,
                    guildId: s,
                    permissions: o
                } = t, d = n === e ? function(t, e, n, i) {
                    if (!n || !i) return e;
                    let a = {
                        [t]: n,
                        [(0, r.allChannelsSentinel)(t)]: i
                    };
                    return e.filter(t => {
                        let e = a[t.id];
                        return null == e || t.permission !== e
                    })
                }(s, o, i, u) : o, c = await l.updateApplicationGuildCommandPermissions(e, s, n, d);
                c.ok && a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: s,
                    permissions: c.body.permissions
                })
            }
        },
        274800: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                queueInteractionComponentState: function() {
                    return r
                },
                addQueued: function() {
                    return u
                },
                setFailed: function() {
                    return s
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var i = n("872717"),
                a = n("913144"),
                l = n("49111");

            function r(t, e, n, i) {
                a.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: t,
                    nonce: e,
                    state: n,
                    indices: i
                })
            }

            function u(t, e) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: l,
                    onSuccess: r,
                    onFailure: u
                } = e;
                a.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: t,
                    messageId: i,
                    onCreate: l,
                    onSuccess: r,
                    onFailure: u
                })
            }

            function s(t, e, n) {
                a.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: t,
                    errorMessage: n,
                    errorCode: e
                })
            }
            async function o(t, e) {
                let n = await i.default.get({
                    url: l.Endpoints.MESSAGE_INTERACTION_DATA(t, e),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    a.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: t,
                        messageId: e,
                        interactionData: i
                    })
                }
            }
        },
        809810: function(t, e, n) {
            "use strict";
            let i, a;
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            }), n("222007");
            var l = n("446674"),
                r = n("913144"),
                u = n("798609"),
                s = n("42203"),
                o = n("3765");
            let d = {},
                c = {},
                E = {};

            function I(t) {
                delete d[t];
                let e = E[t];
                null != e && delete c[e], delete E[t]
            }
            class T extends l.default.Store {
                getInteraction(t) {
                    let e = c[t.id];
                    return null != e ? d[e] : null
                }
                getMessageInteractionStates() {
                    let t = {};
                    for (let [e, n] of Object.entries(d)) {
                        let i = E[e];
                        null != i && (t[i] = n.state)
                    }
                    return t
                }
                canQueueInteraction(t, e) {
                    let n = c[t];
                    return (null == n || null == d[n] || d[n].state === o.InteractionState.FAILED) && (null == d[e] || d[e].state === o.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return i
                }
            }
            T.displayName = "InteractionStore";
            var _ = new T(r.default, {
                LOGOUT: function() {
                    d = {}, c = {}, E = {}
                },
                INTERACTION_QUEUE: function(t) {
                    let {
                        nonce: e,
                        messageId: n,
                        data: i,
                        onCreate: a,
                        onCancel: l,
                        onSuccess: r,
                        onFailure: u
                    } = t;
                    null != n && (c[n] = e, E[e] = n), d[e] = {
                        state: o.InteractionState.QUEUED,
                        data: i,
                        onCreate: a,
                        onCancel: l,
                        onSuccess: r,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        interactionId: i
                    } = t;
                    if (null == n) return !1;
                    let a = d[n];
                    if (null == a || a.state !== o.InteractionState.QUEUED) return !1;
                    a.state = o.InteractionState.CREATED, null === (e = a.onCreate) || void 0 === e || e.call(a, i)
                },
                INTERACTION_SUCCESS: function(t) {
                    var e;
                    let {
                        nonce: n
                    } = t;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (e = i.onSuccess) || void 0 === e || e.call(i), I(n)
                },
                INTERACTION_FAILURE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: a
                    } = t;
                    if (null == n) return !1;
                    let l = d[n];
                    if (null == l) return !1;
                    null === (e = l.onFailure) || void 0 === e || e.call(l, i, a), l.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? I(n) : d[n] = {
                        ...l,
                        state: o.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: a
                    }
                },
                MESSAGE_CREATE: function(t) {
                    let {
                        message: e
                    } = t;
                    if (null == e.nonce) return !1;
                    {
                        var n;
                        let t = d[e.nonce];
                        if (null == t) return !1;
                        null === (n = t.onSuccess) || void 0 === n || n.call(t), I(e.nonce)
                    }
                },
                CHANNEL_SELECT: function(t) {
                    let {
                        channelId: e
                    } = t, n = s.default.getChannel(e);
                    if (null == n) return !1;
                    for (let [t, e] of Object.entries(d)) e.state === o.InteractionState.FAILED && I(t)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(t) {
                    let {
                        application: e
                    } = t;
                    a = e.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, a = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(t) {
                    let {
                        modalKey: e
                    } = t;
                    i = e
                }
            })
        },
        3765: function(t, e, n) {
            "use strict";
            var i, a;
            n.r(e), n.d(e, {
                InteractionState: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.QUEUED = 0] = "QUEUED", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED"
        },
        752598: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getInteractionTimeoutTimestamp: function() {
                    return S
                },
                executeMessageComponentInteraction: function() {
                    return N
                },
                handleInteractionResponse: function() {
                    return h
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return A
                },
                canRetryInteractionData: function() {
                    return C
                }
            }), n("222007");
            var i, a, l = n("249654"),
                r = n("872717"),
                u = n("913144"),
                s = n("819689"),
                o = n("798609"),
                d = n("263024"),
                c = n("271938"),
                E = n("274800"),
                I = n("809810"),
                T = n("3765"),
                _ = n("606981"),
                f = n("49111");

            function S(t) {
                return null == t || "" === t || Number.isNaN(t) ? Date.now() : l.default.extractTimestamp(t) + 9e5
            }
            let N = async t => {
                let {
                    componentType: e,
                    messageId: n,
                    messageFlags: i,
                    customId: a,
                    indices: u,
                    applicationId: s,
                    channelId: T,
                    guildId: _,
                    localState: S
                } = t, N = l.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, N)) return;
                await d.default.unarchiveThreadIfNecessary(T), (0, E.addQueued)(N, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: u
                    },
                    onFailure: (t, e) => p(T, t, e)
                }), null != S && (0, E.queueInteractionComponentState)(n, N, S, u);
                let A = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: N,
                    guild_id: _,
                    channel_id: T,
                    message_flags: i,
                    message_id: n,
                    application_id: s,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: e,
                        custom_id: a,
                        ... function(t) {
                            if (null == t) return null;
                            if (t.type === o.ComponentType.STRING_SELECT || t.type === o.ComponentType.INPUT_TEXT) return t;
                            let e = t.selectedOptions.map(t => t.value);
                            return {
                                type: t.type,
                                values: e
                            }
                        }(S)
                    }
                };
                await r.default.post({
                    url: f.Endpoints.INTERACTIONS,
                    body: A,
                    timeout: 3e3
                }, t => {
                    h(N, T, _, t)
                })
            }, p = (t, e, n) => {
                null == n && null != e && s.default.sendClydeError(t, e)
            }, h = (t, e, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var a;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === f.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let a = (0, _.getFirstSkemaError)(i.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && u.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: e,
                                    guildId: n
                                }), (0, E.setFailed)(t, void 0, null == a ? void 0 : a.message);
                                return
                            }(0, E.setFailed)(t, void 0, i.body.message);
                            return
                        }(0, E.setFailed)(t, null === (a = i.body) || void 0 === a ? void 0 : a.code);
                        return
                    }(0, E.setFailed)(t)
                }
            };
            (a = i || (i = {}))[a.SENDING = 0] = "SENDING", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED", a[a.TIMED_OUT = 3] = "TIMED_OUT";
            let A = (t, e) => {
                var n;
                let i = null == e ? void 0 : e.state,
                    a = t.state === f.MessageStates.SENT && S(t.id) < Date.now();
                let r = t.state === f.MessageStates.SEND_FAILED && (null == (n = t.id) || "" === n || Number.isNaN(n) ? Date.now() : l.default.extractTimestamp(n) + 3e3) < Date.now(),
                    u = (null == e ? void 0 : e.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    s = t.isCommandType();
                if (u && i === T.InteractionState.QUEUED || s && t.state === f.MessageStates.SENDING && null != e) return 0;
                if (u && i === T.InteractionState.CREATED || t.hasFlag(f.MessageFlags.LOADING) && !a) return 1;
                if (null != t.interaction && t.hasFlag(f.MessageFlags.LOADING) && a) return 3;
                else if (null != t.interaction && !t.hasFlag(f.MessageFlags.LOADING) && r) return 3;
                else if (s && t.state === f.MessageStates.SEND_FAILED) return 2
            };

            function C(t) {
                let e = t.options;
                for (;
                    (null == e ? void 0 : e.length) === 1 && (e[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || e[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) e = e[0].options;
                for (let t of null != e ? e : [])
                    if (t.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getFirstSkemaError: function() {
                    return a
                }
            }), n("222007");
            let i = "_errors";

            function a(t) {
                return function t(e, n) {
                    let a = e[i];
                    if (null != a && Array.isArray(a)) return a[0];
                    for (let [a, l] of Object.entries(e))
                        if (a !== i && null != l && "object" == typeof l) return t(l, null != n ? n : a);
                    return null
                }(t, void 0)
            }
        },
        970755: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchApplicationsShelf: function() {
                    return s
                },
                fetchPrivateChannelIntegrations: function() {
                    return o
                },
                deletePrivateChannelIntegration: function() {
                    return d
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                a = n("872717"),
                l = n("913144");
            n("253981");
            var r = n("140596"),
                u = n("49111");
            n("843455"), n("782340");

            function s() {
                r.default.getApplicationsShelfFetchState() === r.FetchState.NOT_FETCHED && (l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), a.default.get(u.Endpoints.APPLICATIONS_SHELF).then(t => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: t.body.applications
                })).catch(t => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function o(t) {
                let e = new i.default(1e3, 5e3);
                l.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: t
                }), a.default.get({
                    url: u.Endpoints.CHANNEL_INTEGRATIONS(t),
                    backoff: e,
                    retries: 10
                }).then(e => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: t,
                        integrations: e.body
                    })
                }).catch(() => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: t
                    })
                })
            }

            function d(t, e) {
                return a.default.delete(u.Endpoints.CHANNEL_INTEGRATION(t, e)).then(t => {
                    var e;
                    if (null === (e = t.body) || void 0 === e ? void 0 : e.message) throw Error(t.body.message)
                })
            }
        },
        252063: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                usePrivateChannelIntegrationState: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                l = n("201155"),
                r = n("21121"),
                u = n("970755"),
                s = n("140596");

            function o(t) {
                let {
                    channelId: e
                } = t;
                (0, r.useInMainTabsExperiment)();
                let n = (0, l.useShowApplicationInGDM)(e),
                    {
                        installedIntegrations: o,
                        applicationsShelf: d,
                        integrationsFetchState: c,
                        applicationsShelfFetchState: E
                    } = (0, a.useStateFromStoresObject)([s.default], () => ({
                        installedIntegrations: s.default.getIntegrations(e),
                        applicationsShelf: s.default.getApplicationsShelf(),
                        integrationsFetchState: s.default.getIntegrationsFetchState(e),
                        applicationsShelfFetchState: s.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((c === s.FetchState.NOT_FETCHED || c === s.FetchState.FETCH_FAILED) && (0, u.fetchPrivateChannelIntegrations)(e), (E === s.FetchState.NOT_FETCHED || E === s.FetchState.FETCH_FAILED) && (0, u.fetchApplicationsShelf)())
                }, [n, e, c, E]);
                let I = new Set(o.map(t => t.application.id)),
                    T = d.filter(t => !I.has(t.id));
                return {
                    installedIntegrations: o,
                    availableApplications: T,
                    applicationsShelf: d,
                    fetched: c !== s.FetchState.NOT_FETCHED && c !== s.FetchState.FETCHING && E !== s.FetchState.NOT_FETCHED && E !== s.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return S
                }
            }), n("222007"), n("424973");
            var i, a, l = n("446674"),
                r = n("913144"),
                u = n("653047"),
                s = n("946028");
            (a = i || (i = {}))[a.NOT_FETCHED = 0] = "NOT_FETCHED", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.FETCH_FAILED = 3] = "FETCH_FAILED";
            let o = new Map,
                d = new Map,
                c = [],
                E = 0,
                I = [];
            class T extends l.default.Store {
                getIntegrations(t) {
                    var e;
                    return null !== (e = o.get(t)) && void 0 !== e ? e : I
                }
                getIntegration(t, e) {
                    var n;
                    return null === (n = o.get(t)) || void 0 === n ? void 0 : n.find(t => t.application.id === e)
                }
                getAllIntegrations() {
                    return o
                }
                getIntegrationsFetchState(t) {
                    var e;
                    return null !== (e = d.get(t)) && void 0 !== e ? e : 0
                }
                getApplicationsShelfFetchState() {
                    return E
                }
                getApplicationsShelf() {
                    return c
                }
            }

            function _(t) {
                return t.sort((t, e) => t.application.name.localeCompare(e.application.name))
            }
            T.displayName = "PrivateChannelIntegrationStore";
            let f = new T(r.default, {
                LOGOUT() {
                    o.clear()
                },
                CONNECTION_OPEN() {
                    o.clear(), d.clear()
                },
                CHANNEL_SELECT(t) {
                    let {
                        channelId: e
                    } = t;
                    if (null == e || 3 !== d.get(e)) return !1;
                    d.set(e, 0)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    E = 1
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(t) {
                    let {
                        applications: e
                    } = t;
                    c = e.map(u.default.createFromServer).sort((t, e) => t.name.localeCompare(e.name)), E = 2
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    E = 3
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(t) {
                    let {
                        channelId: e
                    } = t;
                    o.set(e, null), d.set(e, 1)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(t) {
                    let {
                        channelId: e,
                        integrations: n
                    } = t;
                    o.set(e, _(n.map(s.createPrivateChannelIntegration))), d.set(e, 2)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(t) {
                    let {
                        channelId: e
                    } = t;
                    d.set(e, 3)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(t) {
                    let {
                        integration: e
                    } = t, n = o.get(e.channel_id);
                    if (null == n) return !1;
                    o.set(e.channel_id, _([...n, (0, s.createPrivateChannelIntegration)(e)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(t) {
                    let {
                        integration: e
                    } = t, n = o.get(e.channel_id);
                    if (null == n) return !1;
                    let i = (0, s.createPrivateChannelIntegration)(e),
                        a = n.findIndex(t => t.application.id === i.application.id),
                        l = [...n]; - 1 === a ? l.push(i) : l[a] = i, o.set(i.channel_id, _(l))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(t) {
                    let {
                        channelId: e,
                        applicationId: n
                    } = t, i = o.get(e);
                    if (null == i) return !1;
                    o.set(e, i.filter(t => t.application.id !== n))
                },
                CHANNEL_DELETE(t) {
                    let {
                        channel: e
                    } = t;
                    return o.delete(e.id)
                }
            });
            var S = f
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                a = n("79112"),
                l = n("685665"),
                r = n("929423");
            n("424562");
            var u = n("49111"),
                s = n("397336");

            function o(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = t, {
                    analyticsLocations: E
                } = (0, l.default)(), I = (0, i.useCallback)(() => {
                    null != e && (0, r.initGuildIdentitySettings)(e, null != d ? d : E), a.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [e, n, o, d, c, E]);
                return I
            }
        },
        85166: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return T
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("42203"),
                u = n("305961"),
                s = n("957255"),
                o = n("697218"),
                d = n("244480"),
                c = n("325861"),
                E = n("49111"),
                I = n("782340");

            function T(t, e, n) {
                var T;
                let _ = r.default.getChannel(n),
                    f = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(t.id, n), [n, t.id]),
                    N = (null === (T = o.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) === t.id,
                    p = (0, a.useStateFromStores)([s.default], () => null != n && s.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != _ && null != f && (p || N) && S.speaker ? (0, i.jsx)(l.MenuItem, {
                    id: "audience",
                    label: N ? I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        N ? (0, d.moveSelfToAudience)(_) : (0, d.moveUserToAudience)(t, _)
                    }
                }) : null
            }
        },
        834247: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return x
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("272030"),
                r = n("838446"),
                u = n("158534"),
                s = n("798609"),
                o = n("846883"),
                d = n("812204"),
                c = n("243288"),
                E = n("321135"),
                I = n("873254"),
                T = n("888355"),
                _ = n("861370"),
                f = n("230947"),
                S = n("726750"),
                N = n("85166"),
                p = n("170990"),
                h = n("304582"),
                A = n("72057"),
                C = n("300925"),
                m = n("563816"),
                g = n("489836"),
                O = n("406703"),
                D = n("502533"),
                G = n("314838"),
                M = n("383161"),
                R = n("421602"),
                v = n("459870"),
                U = n("692986"),
                L = n("806179"),
                y = n("97508"),
                P = n("816106"),
                F = n("623879"),
                b = n("49111"),
                H = n("782340"),
                x = (0, u.default)((0, r.default)(function(t) {
                    let {
                        user: e,
                        guildId: n,
                        channel: r,
                        showMediaItems: u = !1,
                        showChatItems: d = !0,
                        showChannelCallItems: x = !1,
                        showModalItems: B = !0,
                        showStageChannelItems: w = !1,
                        context: k,
                        onSelect: Y,
                        onHeightUpdate: j
                    } = t, V = (0, L.default)(e.id, n, r.id), W = (0, M.default)(e, n, k), K = (0, R.default)(e.id, k), z = (0, F.default)(e.id), Q = (0, O.default)(e, k), X = (0, A.default)({
                        user: e,
                        guildId: n,
                        context: k
                    }), Z = (0, h.default)(e), q = (0, P.default)(e.id), J = (0, U.default)(e.id), $ = (0, f.default)({
                        guildId: n,
                        userId: e.id,
                        analyticsLocation: {
                            page: b.AnalyticsPages.GUILD_CHANNEL,
                            section: b.AnalyticsSections.CHAT_USERNAME,
                            object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: k
                    }), tt = (0, G.default)(e, n), te = (0, o.default)(null, e), tn = (0, p.default)(e), ti = (0, g.default)(e), ta = (0, C.default)(e, n, r.id), tl = (0, y.default)(e.id, n), tr = (0, v.default)(e, n), tu = (0, _.default)({
                        id: e.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), ts = (0, D.default)(e.id, r.id), to = (0, E.default)(e.id), td = (0, c.default)(r.id), tc = (0, S.default)(e), tE = (0, N.default)(e, n, r.id), tI = (0, m.default)({
                        commandType: s.ApplicationCommandType.USER,
                        commandTargetId: e.id,
                        channel: r,
                        guildId: n,
                        onHeightUpdate: j,
                        context: k
                    }), tT = (0, I.default)(e.id), t_ = e.isNonUserBot(), tf = e.isClyde(), tS = (0, T.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: l.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: Y,
                        children: [!t_ && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [tc, w && tE]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [B && V, d && W, K, Q, B && X, B && Z, z]
                            }), u && (0, i.jsx)(a.MenuGroup, {
                                children: q
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: B && te
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [u && J, u && ts, B && $, tI, B && tt, tn, B && ti, x && tT]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: ta
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [tl, tr]
                            }), x && (0, i.jsxs)(a.MenuGroup, {
                                children: [td, to]
                            })]
                        }), tf && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [B && V, tS && K]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: ta
                            })]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: tu
                        })]
                    })
                }, {
                    object: b.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_CHANNEL_USER_MENU])
        },
        563816: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("627445"),
                r = n.n(l),
                u = n("446674"),
                s = n("77078"),
                o = n("240249"),
                d = n("916565"),
                c = n("355263"),
                E = n("633043"),
                I = n("823026"),
                T = n("305961"),
                _ = n("697218"),
                f = n("317041"),
                S = n("782340"),
                N = n("205735"),
                p = t => {
                    let e, {
                            commandType: n,
                            commandTargetId: l,
                            channel: p,
                            guildId: h,
                            onHeightUpdate: A,
                            context: C
                        } = t,
                        m = (0, u.useStateFromStores)([T.default], () => T.default.getGuild(null != h ? h : p.guild_id)),
                        g = (0, u.useStateFromStores)([_.default], () => _.default.getUser(l)),
                        O = (0, I.default)({
                            user: g,
                            guildId: null == m ? void 0 : m.id,
                            channel: p,
                            context: C
                        }),
                        {
                            commands: D,
                            sectionDescriptors: G,
                            loading: M
                        } = o.useDiscovery(p, {
                            commandType: n
                        }, {
                            limit: f.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: R
                        } = a.useMemo(() => {
                            let t = {};
                            return G.forEach(e => {
                                t[e.id] = e
                            }), {
                                sections: t
                            }
                        }, [G]),
                        v = a.useRef(M.current);
                    a.useEffect(() => {
                        M.current !== v.current && (v.current = M.current, null == A || A())
                    }, [M, A]);
                    let U = a.useCallback(t => {
                        r(null != p, "menu item should not show if channel is null");
                        let e = R[t.applicationId],
                            n = null != e ? (0, c.getIconComponent)(e) : void 0;
                        return (0, i.jsx)(s.MenuItem, {
                            id: t.id,
                            label: t.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, i.jsx)(n, {
                                channel: p,
                                section: e,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, d.default)({
                                    command: t,
                                    optionValues: {},
                                    context: {
                                        channel: p,
                                        guild: m
                                    },
                                    commandTargetId: l
                                })
                            }
                        }, t.id)
                    }, [p, m, l, R]);
                    return M.current ? e = (0, i.jsx)(s.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, i.jsx)(E.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (e = 0 === D.length ? (0, i.jsx)(s.MenuItem, {
                        id: "menu-commands-empty",
                        label: S.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : D.map(U), null != O && (e = (0, i.jsxs)(i.Fragment, {
                        children: [e, (0, i.jsx)(s.MenuSeparator, {}, "separator"), O]
                    }))), (0, i.jsx)(s.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        listClassName: N.list,
                        children: e
                    })
                }
        },
        383161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                mentionUser: function() {
                    return T
                },
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("352674"),
                u = n("42203"),
                s = n("957255"),
                o = n("18494"),
                d = n("659500"),
                c = n("158998"),
                E = n("49111"),
                I = n("782340");

            function T(t, e) {
                let {
                    id: n
                } = t, i = "@".concat(c.default.getUserTag(t, {
                    decoration: "never"
                }));
                d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: i,
                    rawText: "<@".concat(n, ">")
                }), null != e && r.default.startTyping(e)
            }

            function _(t, e, n) {
                let [r, d] = (0, a.useStateFromStoresArray)([o.default, u.default, s.default], () => {
                    let t = o.default.getChannelId(e),
                        n = u.default.getChannel(t),
                        i = null != n && (n.isMultiUserDM() || s.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [t, i]
                }, [e]), c = n === E.AppContext.POPOUT;
                return !d || c ? null : (0, i.jsx)(l.MenuItem, {
                    id: "mention",
                    label: I.default.Messages.MENTION,
                    action: function() {
                        T(t, r)
                    }
                })
            }
        },
        83910: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("926001"),
                r = n("75196"),
                u = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        93393: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("503420"),
                r = n("75196"),
                u = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: l,
                        ...u
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: e,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: l,
                                fill: a,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, l.ClockIcon, void 0, {
                    size: 20
                })
        }
    }
]);