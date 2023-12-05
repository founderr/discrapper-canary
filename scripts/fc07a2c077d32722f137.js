(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82735"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            }), n("424973");
            var i = n("913144"),
                a = n("696605");

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function u(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: r,
                    rowHeight: l
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (a.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let c = o(.5 * r),
                    E = o(i, -c),
                    f = o(i + r, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; E <= f;) E = d(E);
                u(t, n, s)
            }
        },
        713841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("913144"),
                a = n("592407"),
                r = n("482391"),
                l = n("611183"),
                u = {
                    init() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: e,
                            sectionId: t
                        })
                    },
                    startEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    stopEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    startEditingIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: e
                        })
                    },
                    stopEditingIntegration() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: e
                        })
                    },
                    startEditingWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: e
                        })
                    },
                    stopEditingWebhook() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: e
                        })
                    },
                    async saveApplicationPermissions(e, t, n) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await r.updateApplicationCommandPermissions({
                                applicationId: e,
                                commandId: e,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: t,
                                permissions: n
                            }), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveIntegration(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveWebhook(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await l.default.update(e, t.id, t), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    }
                }
        },
        352674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
                    startTyping(e) {
                        i.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        i.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: e
                        })
                    }
                }
        },
        611183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("917351"),
                a = n.n(i),
                r = n("872717"),
                l = n("913144"),
                u = n("49111");
            let o = ["Spidey Bot", "Captain Hook"];
            var s = {
                fetchForGuild(e) {
                    l.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    }), r.default.get({
                        url: u.Endpoints.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(t => {
                        let {
                            body: n
                        } = t;
                        return l.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    }).catch(t => {
                        let {
                            body: n
                        } = t;
                        l.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(e, t) {
                    l.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    }), r.default.get({
                        url: u.Endpoints.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return l.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: t,
                            webhooks: i
                        })
                    })
                },
                create: (e, t, n) => (null == n && (n = o[a.random(0, o.length - 1)]), r.default.post({
                    url: u.Endpoints.CHANNEL_WEBHOOKS(t),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return l.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: e,
                        webhook: n
                    }), n
                })),
                delete: (e, t) => r.default.delete({
                    url: u.Endpoints.WEBHOOK(t),
                    oldFormErrors: !0
                }).then(() => {
                    l.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: e,
                        webhookId: t
                    })
                }),
                update: (e, t, n) => r.default.patch({
                    url: u.Endpoints.WEBHOOK(t),
                    body: n,
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return l.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: e,
                        webhook: n
                    }), n
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("37983");
            var i = n("884691"),
                a = n("917351"),
                r = n.n(a);
            n("233736");
            var l = n("666020");

            function u(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        981112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                stageAttachmentFiles: function() {
                    return I
                },
                default: function() {
                    return i
                }
            }), n("808653"), n("222007"), n("70102");
            var i, a = n("811022"),
                r = n("994440"),
                l = n("282928"),
                u = n("142852"),
                o = n("402752"),
                s = n("572868"),
                d = n("49111"),
                c = n("894488"),
                E = n("782340");
            let f = new a.default("CloudUploaderBase.tsx");
            async function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = e.map(e => new Promise((i, a) => {
                        switch (e.status) {
                            case l.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case l.CloudUploadStatus.COMPLETED:
                                i("complete");
                                break;
                            case l.CloudUploadStatus.ERROR:
                                t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : a(Error("File failed to upload"));
                                break;
                            case l.CloudUploadStatus.CANCELED:
                                a(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            i("complete")
                        }), e.on("error", () => {
                            a(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == n || n(e, t)
                        })
                    }));
                await Promise.all(i)
            }
            i = class extends s.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var n;
                        return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let n = (0, u.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > n.getMaxAttachmentsCount() ? (f.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === d.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : E.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        n = this.files.some(e => e.isVideo),
                        i = this._fileSize();
                    f.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: i,
                        currentSize: i,
                        name: e,
                        hasVideo: n,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
                    this._handleProgress(e, t, n)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var n;
                            return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                        }, 0);
                    return {
                        loaded: t,
                        total: e
                    }
                }
                _recomputeProgressByFile() {
                    let e = {};
                    return this.files.forEach(t => {
                        e[t.id] = (0, o.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    f.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    f.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === l.CloudUploadStatus.CANCELED) return;
                    let n = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, r.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === l.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === l.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
        },
        572868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("70102");
            var i, a = n("44170"),
                r = n("917351"),
                l = n.n(r),
                u = n("605250"),
                o = n("402752"),
                s = n("894488");
            let d = new u.default("UploaderBase.tsx");
            i = class extends a.EventEmitter {
                _addAttachmentsToPayload(e, t, n) {
                    let i = {
                            ...e
                        },
                        a = [...l.get(i, t, []), ...n];
                    return l.set(i, t, a)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    d.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, n) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: e.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == t ? void 0 : t.content,
                        channelId: null == t ? void 0 : t.channel_id,
                        items: n
                    }
                }
                constructor(e, t = "POST", n) {
                    var i;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, n) => {
                        let i = Date.now(),
                            a = (0, o.calculateProgress)(e, t),
                            r = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var l;
                            null === (l = this._file.items) || void 0 === l || l.forEach(e => {
                                e.item.progress = n[e.id]
                            })
                        }
                        this._lastUpdate = i, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: a,
                            rate: r
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: s.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: n,
                            body: i
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, i, n), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = l.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (i = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== i && i
                }
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                u = n("587974"),
                o = n("315102"),
                s = n("524768"),
                d = n("616674"),
                c = n("363577");

            function E(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: r,
                    height: E,
                    className: f,
                    selectable: I = !1,
                    onFocus: T,
                    onBlur: _,
                    onMouseOver: S,
                    onMouseLeave: N,
                    ...p
                } = e, [h, A] = a.useState(!1), m = a.useCallback(() => {
                    A(!0), null == T || T()
                }, [T]), C = a.useCallback(() => {
                    A(!1), null == _ || _()
                }, [_]), g = a.useCallback(() => {
                    A(!0), null == S || S()
                }, [S]), O = a.useCallback(() => {
                    A(!1), null == N || N()
                }, [N]), M = a.useMemo(() => {
                    if (t.type === s.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return o.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return c
                }, [t, r]);
                return (0, i.jsx)("div", {
                    ...p,
                    className: l(d.wrapper, f, {
                        [d.selectable]: I,
                        [d.selected]: I && n
                    }),
                    onFocus: m,
                    onBlur: C,
                    onMouseOver: g,
                    onMouseLeave: O,
                    children: (0, i.jsx)(u.default, {
                        className: d.mask,
                        mask: I && (n || h) ? u.MaskIDs.SQUIRCLE : u.MaskIDs.AVATAR_DEFAULT,
                        width: r,
                        height: E,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: r,
                                height: E
                            },
                            src: M
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                l = n("83910"),
                u = n("93393"),
                o = n("317041"),
                s = n("749296");
            let d = e => {
                switch (e.id) {
                    case o.BuiltInSectionId.BUILT_IN:
                        return l.default;
                    case o.BuiltInSectionId.FRECENCY:
                        return u.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: a,
                    height: l,
                    padding: u,
                    isSelected: o,
                    selectable: c = !1,
                    ...E
                } = e, f = d(t);
                return (0, i.jsx)("div", {
                    className: r(s.wrapper, n, {
                        [s.selectable]: c,
                        [s.selected]: c && o
                    }),
                    style: {
                        width: a,
                        height: l,
                        padding: null != u ? u : 0
                    },
                    children: null != f ? (0, i.jsx)(f, {
                        className: s.icon,
                        width: a,
                        height: l,
                        ...E
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return u
                },
                pxToRem: function() {
                    return o
                },
                getCommandQuery: function() {
                    return s
                }
            });
            var i = n("524768"),
                a = n("991630"),
                r = n("943161"),
                l = n("317041");
            let u = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? r.default : a.default;

            function o(e) {
                return "".concat(e / 16, "rem")
            }

            function s(e, t) {
                let n = t,
                    i = !1,
                    a = t.indexOf(":");
                if (a >= 0) {
                    let e = t.lastIndexOf(" ", a);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, a)
                } else t = t.substring(0, t.length);
                let r = t.split(" ", l.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > l.MAX_SUBCOMMAND_LEVEL && (i = !0, r.pop()), t = r.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: r,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("850572"),
                l = () => (0, i.jsx)("div", {
                    className: r.loadingWrapper,
                    children: (0, i.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return l
                }
            });
            var i = n("65597"),
                a = n("42203"),
                r = n("337026");

            function l(e) {
                let t = (0, i.default)([a.default], () => a.default.getChannel(e)),
                    {
                        enabled: n
                    } = r.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        535348: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.STREAM = 0] = "STREAM", a[a.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("629109"),
                r = n("271938"),
                l = n("42887"),
                u = n("49111"),
                o = n("353927");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    n = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
                    s = (0, i.useStateFromStores)([l.default], () => l.default.supports(o.Features.DISABLE_VIDEO) && l.default.isVideoEnabled()),
                    d = (0, i.useStateFromStores)([l.default], () => l.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (s || d), d, e => {
                    let i = e ? u.VideoToggleState.DISABLED : u.VideoToggleState.MANUAL_ENABLED;
                    a.default.setDisableLocalVideo(n, i, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("452804"),
                r = n("135230"),
                l = n("535348"),
                u = n("782340");

            function o(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...o
                } = e, s = t === l.SelfStreamAndVideoAlertType.STREAM ? u.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === l.SelfStreamAndVideoAlertType.STREAM ? u.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, i.jsx)(r.default, {
                    confirmText: u.default.Messages.CONFIRM,
                    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                    title: s,
                    cancelText: u.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        a.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...o
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("255397"),
                u = n("191145"),
                o = n("782340");

            function s(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.getVoiceParticipantsHidden(e));
                return (0, i.jsx)(r.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: o.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => l.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("168973"),
                u = n("301603"),
                o = n("632616"),
                s = n("535348"),
                d = n("353927"),
                c = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, E, f] = (0, u.default)(e, t),
                    I = (0, a.useStateFromStores)([l.default], () => l.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, i.jsx)(r.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !E,
                    action: () => {
                        if (I || E) return f(!E);
                        (0, r.openModal)(e => (0, i.jsx)(o.default, {
                            ...e,
                            type: s.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => f(!E)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("648911"),
                u = n("271938"),
                o = n("42887"),
                s = n("782340"),
                d = n("431024");

            function c(e) {
                let t = (0, r.useModalContext)(),
                    c = (0, a.useStateFromStores)([o.default], () => o.default.isVideoEnabled()),
                    E = (0, a.useStateFromStores)([u.default], () => u.default.getId() === e),
                    f = (0, l.default)();
                return (!c || f) && E ? (0, i.jsx)(r.MenuItem, {
                    id: "change-video-background",
                    label: (0, i.jsx)("div", {
                        className: d.item,
                        children: c ? s.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : s.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                videoEnabled: c
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function a(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return a
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return u
                }
            }), n("70102");
            let r = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : r
            }

            function u(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        888355: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsDMsToClydeEnabled: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("862205"),
                r = n("305961"),
                l = n("980215");
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

            function o() {
                let {
                    isDMsToClydeEnabled: e
                } = u.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), t = (0, i.useStateFromStoresArray)([r.default], () => r.default.getGuildIds()), n = t.some(e => (0, l.getClydeExperimentEnabled)(r.default.getGuild(e)));
                return e && n
            }
        },
        497660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                a = n("884691"),
                r = n("446674"),
                l = n("77078"),
                u = n("713841"),
                o = n("592407"),
                s = n("305961"),
                d = n("957255"),
                c = n("49111"),
                E = n("782340"),
                f = n("460856");

            function I(e, t, n) {
                let I = s.default.getGuild(t),
                    T = (0, r.useStateFromStores)([d.default], () => null != I ? d.default.can(c.Permissions.MANAGE_GUILD, I) : null),
                    _ = a.useCallback(() => {
                        o.default.open(t, c.GuildSettingsSections.INTEGRATIONS), u.default.setSection(c.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    S = n === c.AppContext.POPOUT;
                return e.bot && T && !S ? (0, i.jsx)(l.MenuItem, {
                    id: "manage-integration",
                    label: (0, i.jsx)("div", {
                        className: f.labelWrapper,
                        children: (0, i.jsx)("span", {
                            className: f.label,
                            children: E.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: _
                }) : null
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                r = n("697218"),
                l = n("509");

            function u(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function o(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, l.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, i.useStateFromStores)([a.default], () => o(e, t, a.default), [t, e]);
                return s(n)
            }

            function c(e, t) {
                let n = o(e, t, a.default);
                return s(n)
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
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
                    return f
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return _
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
                    return m
                }
            }), n("70102");
            var i = n("872717"),
                a = n("913144"),
                r = n("54239"),
                l = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: r
                } = t;
                if (null == e) throw Error("Need guildId");
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: r
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), a.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function o(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, r.popLayer)()
            }

            function c() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function f(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function _(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
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

            function m(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, a, r, l, u, o, s, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var E = n("446674"),
                f = n("913144"),
                I = n("49111");
            let T = I.FormStates.CLOSED,
                _ = {},
                S = !1;

            function N() {
                T = I.FormStates.CLOSED, _ = {}, s = null, d = void 0, c = []
            }

            function p() {
                h(), A(), _ = {}, T = I.FormStates.OPEN
            }

            function h() {
                i = void 0, u = void 0
            }

            function A() {
                a = void 0, r = void 0, l = void 0, o = void 0
            }
            class m extends E.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return _
                }
                showNotice() {
                    return void 0 !== i || void 0 !== a || void 0 !== r || void 0 !== l || void 0 !== u || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return a
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: a,
                        pendingBio: r,
                        pendingPronouns: l,
                        pendingNickname: u,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
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
            m.displayName = "GuildIdentitySettingsStore";
            var C = new m(f.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, T = I.FormStates.OPEN, _ = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = I.FormStates.SUBMITTING, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== I.FormStates.SUBMITTING) return !1;
                    T = I.FormStates.OPEN, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = I.FormStates.OPEN, _ = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return I
                },
                useTrackMemberFilterRolesUsed: function() {
                    return T
                },
                MemberSafetyFlagType: function() {
                    return r
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return _
                },
                ModerationActionType: function() {
                    return l
                },
                useTrackModerationAction: function() {
                    return S
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var i, a, r, l, u = n("884691"),
                o = n("812204"),
                s = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function f(e, t, n) {
                var i;
                let a = {
                    ...t,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(e, a)
            }

            function I(e) {
                let t = u.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function T(e) {
                let t = u.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function _(e) {
                let t = u.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function S(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: a
                } = t, r = u.useCallback(t => {
                    let r = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != a ? a : void 0
                    };
                    f(E.AnalyticEvents.MODERATION_ACTION, r)
                }, [e, n, i, a]);
                return r
            }

            function N(e, t) {
                f(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(a = l || (l = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"
        },
        482391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearIntegrationPermissions: function() {
                    return o
                },
                editPermissions: function() {
                    return s
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
                    return f
                },
                updateApplicationCommandPermissions: function() {
                    return I
                }
            });
            var i = n("872717"),
                a = n("913144"),
                r = n("507217"),
                l = n("389153"),
                u = n("49111");

            function o() {
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function s(e, t, n) {
                a.default.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function d(e, t) {
                i.default.get(u.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }, () => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                })
            }
            async function c(e, t, n) {
                let r = [];
                try {
                    let a = await i.default.get(u.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
                    a.ok && (r = a.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        a.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: e,
                            commandId: n,
                            guildId: t
                        });
                        return
                    }
                }
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: t,
                    permissions: r
                })
            }

            function E(e) {
                a.default.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function f(e) {
                a.default.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function I(e) {
                let {
                    applicationId: t,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: u,
                    guildId: o,
                    permissions: s
                } = e, d = n === t ? function(e, t, n, i) {
                    if (!n || !i) return t;
                    let a = {
                        [e]: n,
                        [(0, l.allChannelsSentinel)(e)]: i
                    };
                    return t.filter(e => {
                        let t = a[e.id];
                        return null == t || e.permission !== t
                    })
                }(o, s, i, u) : s, c = await r.updateApplicationGuildCommandPermissions(t, o, n, d);
                c.ok && a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: o,
                    permissions: c.body.permissions
                })
            }
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return l
                },
                addQueued: function() {
                    return u
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var i = n("872717"),
                a = n("913144"),
                r = n("49111");

            function l(e, t, n, i) {
                a.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function u(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: r,
                    onSuccess: l,
                    onFailure: u
                } = t;
                a.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: r,
                    onSuccess: l,
                    onFailure: u
                })
            }

            function o(e, t, n) {
                a.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function s(e, t) {
                let n = await i.default.get({
                    url: r.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    a.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var r = n("446674"),
                l = n("913144"),
                u = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                c = {},
                E = {};

            function f(e) {
                delete d[e];
                let t = E[e];
                null != t && delete c[t], delete E[e]
            }
            class I extends r.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? d[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(d)) {
                        let i = E[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == d[n] || d[n].state === s.InteractionState.FAILED) && (null == d[t] || d[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return i
                }
            }
            I.displayName = "InteractionStore";
            var T = new I(l.default, {
                LOGOUT: function() {
                    d = {}, c = {}, E = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: a,
                        onCancel: r,
                        onSuccess: l,
                        onFailure: u
                    } = e;
                    null != n && (c[n] = t, E[t] = n), d[t] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: a,
                        onCancel: r,
                        onSuccess: l,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let a = d[n];
                    if (null == a || a.state !== s.InteractionState.QUEUED) return !1;
                    a.state = s.InteractionState.CREATED, null === (t = a.onCreate) || void 0 === t || t.call(a, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), f(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: a
                    } = e;
                    if (null == n) return !1;
                    let r = d[n];
                    if (null == r) return !1;
                    null === (t = r.onFailure) || void 0 === t || t.call(r, i, a), r.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? f(n) : d[n] = {
                        ...r,
                        state: s.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: a
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = d[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), f(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === s.InteractionState.FAILED && f(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    a = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, a = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.QUEUED = 0] = "QUEUED", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                    return m
                }
            }), n("222007");
            var i, a, r = n("249654"),
                l = n("872717"),
                u = n("913144"),
                o = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                E = n("274800"),
                f = n("809810"),
                I = n("3765"),
                T = n("606981"),
                _ = n("49111");

            function S(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : r.default.extractTimestamp(e) + 9e5
            }
            let N = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: a,
                    indices: u,
                    applicationId: o,
                    channelId: I,
                    guildId: T,
                    localState: S
                } = e, N = r.default.fromTimestamp(Date.now());
                if (!f.default.canQueueInteraction(n, N)) return;
                await d.default.unarchiveThreadIfNecessary(I), (0, E.addQueued)(N, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: u
                    },
                    onFailure: (e, t) => p(I, e, t)
                }), null != S && (0, E.queueInteractionComponentState)(n, N, S, u);
                let A = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: N,
                    guild_id: T,
                    channel_id: I,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: a,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === s.ComponentType.STRING_SELECT || e.type === s.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(S)
                    }
                };
                await l.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: A,
                    timeout: 3e3
                }, e => {
                    h(N, I, T, e)
                })
            }, p = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, h = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var a;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === _.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let a = (0, T.getFirstSkemaError)(i.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && u.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, E.setFailed)(e, void 0, null == a ? void 0 : a.message);
                                return
                            }(0, E.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, E.setFailed)(e, null === (a = i.body) || void 0 === a ? void 0 : a.code);
                        return
                    }(0, E.setFailed)(e)
                }
            };
            (a = i || (i = {}))[a.SENDING = 0] = "SENDING", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED", a[a.TIMED_OUT = 3] = "TIMED_OUT";
            let A = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    a = e.state === _.MessageStates.SENT && S(e.id) < Date.now();
                let l = e.state === _.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : r.default.extractTimestamp(n) + 3e3) < Date.now(),
                    u = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    o = e.isCommandType();
                if (u && i === I.InteractionState.QUEUED || o && e.state === _.MessageStates.SENDING && null != t) return 0;
                if (u && i === I.InteractionState.CREATED || e.hasFlag(_.MessageFlags.LOADING) && !a) return 1;
                if (null != e.interaction && e.hasFlag(_.MessageFlags.LOADING) && a) return 3;
                else if (null != e.interaction && !e.hasFlag(_.MessageFlags.LOADING) && l) return 3;
                else if (o && e.state === _.MessageStates.SEND_FAILED) return 2
            };

            function m(e) {
                let t = e.options;
                for (;
                    (null == t ? void 0 : t.length) === 1 && (t[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
                for (let e of null != t ? t : [])
                    if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return a
                }
            }), n("222007");
            let i = "_errors";

            function a(e) {
                return function e(t, n) {
                    let a = t[i];
                    if (null != a && Array.isArray(a)) return a[0];
                    for (let [a, r] of Object.entries(t))
                        if (a !== i && null != r && "object" == typeof r) return e(r, null != n ? n : a);
                    return null
                }(e, void 0)
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return o
                },
                fetchPrivateChannelIntegrations: function() {
                    return s
                },
                deletePrivateChannelIntegration: function() {
                    return d
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                a = n("872717"),
                r = n("913144");
            n("253981");
            var l = n("140596"),
                u = n("49111");
            n("843455"), n("782340");

            function o() {
                l.default.getApplicationsShelfFetchState() === l.FetchState.NOT_FETCHED && (r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), a.default.get(u.Endpoints.APPLICATIONS_SHELF).then(e => r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function s(e) {
                let t = new i.default(1e3, 5e3);
                r.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), a.default.get({
                    url: u.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    r.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    r.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function d(e, t) {
                return a.default.delete(u.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return s
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                r = n("201155"),
                l = n("21121"),
                u = n("970755"),
                o = n("140596");

            function s(e) {
                let {
                    channelId: t
                } = e;
                (0, l.useInMainTabsExperiment)();
                let n = (0, r.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: s,
                        applicationsShelf: d,
                        integrationsFetchState: c,
                        applicationsShelfFetchState: E
                    } = (0, a.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((c === o.FetchState.NOT_FETCHED || c === o.FetchState.FETCH_FAILED) && (0, u.fetchPrivateChannelIntegrations)(t), (E === o.FetchState.NOT_FETCHED || E === o.FetchState.FETCH_FAILED) && (0, u.fetchApplicationsShelf)())
                }, [n, t, c, E]);
                let f = new Set(s.map(e => e.application.id)),
                    I = d.filter(e => !f.has(e.id));
                return {
                    installedIntegrations: s,
                    availableApplications: I,
                    applicationsShelf: d,
                    fetched: c !== o.FetchState.NOT_FETCHED && c !== o.FetchState.FETCHING && E !== o.FetchState.NOT_FETCHED && E !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                a = n("79112"),
                r = n("685665"),
                l = n("929423");
            n("424562");
            var u = n("49111"),
                o = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, r.default)(), f = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != d ? d : E), a.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, s, d, c, E]);
                return f
            }
        },
        85166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("42203"),
                u = n("305961"),
                o = n("957255"),
                s = n("697218"),
                d = n("244480"),
                c = n("325861"),
                E = n("49111"),
                f = n("782340");

            function I(e, t, n) {
                var I;
                let T = l.default.getChannel(n),
                    _ = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, n), [n, e.id]),
                    N = (null === (I = s.default.getCurrentUser()) || void 0 === I ? void 0 : I.id) === e.id,
                    p = (0, a.useStateFromStores)([o.default], () => null != n && o.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != T && null != _ && (p || N) && S.speaker ? (0, i.jsx)(r.MenuItem, {
                    id: "audience",
                    label: N ? f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        N ? (0, d.moveSelfToAudience)(T) : (0, d.moveUserToAudience)(e, T)
                    }
                }) : null
            }
        },
        834247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("272030"),
                l = n("838446"),
                u = n("158534"),
                o = n("798609"),
                s = n("846883"),
                d = n("812204"),
                c = n("243288"),
                E = n("321135"),
                f = n("873254"),
                I = n("888355"),
                T = n("861370"),
                _ = n("230947"),
                S = n("497660"),
                N = n("726750"),
                p = n("85166"),
                h = n("170990"),
                A = n("304582"),
                m = n("72057"),
                C = n("300925"),
                g = n("563816"),
                O = n("489836"),
                M = n("406703"),
                D = n("502533"),
                G = n("314838"),
                y = n("383161"),
                R = n("421602"),
                L = n("459870"),
                U = n("692986"),
                v = n("806179"),
                P = n("97508"),
                b = n("816106"),
                F = n("623879"),
                x = n("49111"),
                H = n("782340"),
                B = (0, u.default)((0, l.default)(function(e) {
                    let {
                        user: t,
                        guildId: n,
                        channel: l,
                        showMediaItems: u = !1,
                        showChatItems: d = !0,
                        showChannelCallItems: B = !1,
                        showModalItems: w = !0,
                        showStageChannelItems: j = !1,
                        context: V,
                        onSelect: k,
                        onHeightUpdate: Y
                    } = e, W = (0, v.default)(t.id, n, l.id), K = (0, y.default)(t, n, V), z = (0, R.default)(t.id, V), Q = (0, F.default)(t.id), X = (0, M.default)(t, V), Z = (0, m.default)({
                        user: t,
                        guildId: n,
                        context: V
                    }), q = (0, A.default)(t), J = (0, b.default)(t.id), $ = (0, U.default)(t.id), ee = (0, _.default)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: x.AnalyticsPages.GUILD_CHANNEL,
                            section: x.AnalyticsSections.CHAT_USERNAME,
                            object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: V
                    }), et = (0, G.default)(t, n), en = (0, s.default)(null, t), ei = (0, h.default)(t), ea = (0, O.default)(t), er = (0, C.default)(t, n, l.id), el = (0, P.default)(t.id, n), eu = (0, L.default)(t, n), eo = (0, T.default)({
                        id: t.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), es = (0, D.default)(t.id, l.id), ed = (0, E.default)(t.id), ec = (0, c.default)(l.id), eE = (0, N.default)(t), ef = (0, p.default)(t, n, l.id), eI = (0, g.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: l,
                        guildId: n,
                        onShow: Y
                    }), eT = (0, f.default)(t.id), e_ = (0, S.default)(t, n, V), eS = t.isNonUserBot(), eN = t.isClyde(), ep = (0, I.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: k,
                        children: [!eS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [eE, j && ef]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [w && W, d && K, z, X, w && Z, w && q, Q]
                            }), u && (0, i.jsx)(a.MenuGroup, {
                                children: J
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: w && en
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [u && $, u && es, w && ee, eI, e_, w && et, ei, w && ea, B && eT]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: er
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [el, eu]
                            }), B && (0, i.jsxs)(a.MenuGroup, {
                                children: [ec, ed]
                            })]
                        }), eN && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [w && W, ep && z]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: er
                            })]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: eo
                        })]
                    })
                }, {
                    object: x.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_CHANNEL_USER_MENU])
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                a = n("884691"),
                r = n("627445"),
                l = n.n(r),
                u = n("446674"),
                o = n("77078"),
                s = n("240249"),
                d = n("524768"),
                c = n("389153"),
                E = n("916565"),
                f = n("355263"),
                I = n("633043"),
                T = n("305961"),
                _ = n("317041"),
                S = n("782340"),
                N = n("205735"),
                p = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: r,
                        guildId: p,
                        onShow: h
                    } = e, A = a.useRef(!1), m = a.useRef(0), C = (0, u.useStateFromStores)([T.default], () => T.default.getGuild(null != p ? p : r.guild_id)), {
                        hasMoreAfter: g,
                        scrollDown: O,
                        sectionDescriptors: M,
                        commands: D,
                        placeholders: G
                    } = s.useDiscovery(r, {
                        commandType: t
                    }, {
                        placeholderCount: _.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: y,
                        sections: R
                    } = a.useMemo(() => {
                        let e = D.concat(G),
                            t = {};
                        return M.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [D, M, G]), L = a.useMemo(() => (0, c.canUseContextMenuCommands)(r, y.length, s.getCommandTypeCount(r, t, null == C ? void 0 : C.applicationCommandCounts)), [r, t, y.length, null == C ? void 0 : C.applicationCommandCounts]);
                    a.useEffect(() => {
                        L !== A.current && (L && (null == h || h()), A.current = L)
                    }, [L, h]), a.useEffect(() => {
                        U(m.current)
                    }, [y]);
                    let U = a.useCallback(e => {
                            g && e + 500 > 34 * y.length - 40 && O(), m.current = e
                        }, [g, O, y]),
                        v = a.useCallback(e => {
                            if (e.inputType === d.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(o.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, i.jsx)(I.default, {})
                            }, "menu-command-".concat(e.id));
                            l(null != r, "menu item should not show if channel is null");
                            let t = R[e.applicationId],
                                a = null != t ? (0, f.getIconComponent)(t) : void 0;
                            return (0, i.jsx)(o.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != a ? (0, i.jsx)(a, {
                                    channel: r,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, E.default)({
                                        command: e,
                                        optionValues: {},
                                        context: {
                                            channel: r,
                                            guild: C
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [r, C, n, R]);
                    return L && (0, i.jsx)(o.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        onChildrenScroll: U,
                        childRowHeight: 34,
                        listClassName: N.list,
                        disabled: 0 === y.length,
                        children: y.map(v)
                    })
                }
        },
        383161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                mentionUser: function() {
                    return I
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("352674"),
                u = n("42203"),
                o = n("957255"),
                s = n("18494"),
                d = n("659500"),
                c = n("158998"),
                E = n("49111"),
                f = n("782340");

            function I(e, t) {
                let {
                    id: n
                } = e, i = "@".concat(c.default.getUserTag(e, {
                    decoration: "never"
                }));
                d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: i,
                    rawText: "<@".concat(n, ">")
                }), null != t && l.default.startTyping(t)
            }

            function T(e, t, n) {
                let [l, d] = (0, a.useStateFromStoresArray)([s.default, u.default, o.default], () => {
                    let e = s.default.getChannelId(t),
                        n = u.default.getChannel(e),
                        i = null != n && (n.isMultiUserDM() || o.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [e, i]
                }, [t]), c = n === E.AppContext.POPOUT;
                return !d || c ? null : (0, i.jsx)(r.MenuItem, {
                    id: "mention",
                    label: f.default.Messages.MENTION,
                    action: function() {
                        I(e, l)
                    }
                })
            }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                a = n("42887"),
                r = n("512244");

            function l() {
                return (0, i.useStateFromStores)([a.default], () => (0, r.default)(a.default))
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("926001"),
                l = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, r.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("503420"),
                l = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: r,
                                fill: a,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, r.ClockIcon, void 0, {
                    size: 20
                })
        }
    }
]);