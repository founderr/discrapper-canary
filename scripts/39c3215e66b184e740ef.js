(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82735"], {
        666020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            }), n("424973");
            var i = n("913144"),
                a = n("696605");

            function r(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: t,
                    userIds: e
                })
            }

            function l(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: t,
                    userIds: e
                })
            }

            function o(t, e, n) {
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
                    height: r,
                    rowHeight: l
                } = t;

                function s(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(t / l)) + e)
                }
                let u = [];

                function d(t) {
                    let e = t + (a.MINIMUM_RANGE - 1);
                    return u.push([t, e]), e + 1
                }
                let c = s(.5 * r),
                    E = s(i, -c),
                    I = s(i + r, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; E <= I;) E = d(E);
                o(e, n, u)
            }
        },
        713841: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("913144"),
                a = n("592407"),
                r = n("482391"),
                l = n("611183"),
                o = {
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
                            }), await r.updateApplicationCommandPermissions({
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
                            }), await l.default.update(t, e.id, e), i.default.dispatch({
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
                    return u
                }
            });
            var i = n("917351"),
                a = n.n(i),
                r = n("872717"),
                l = n("913144"),
                o = n("49111");
            let s = ["Spidey Bot", "Captain Hook"];
            var u = {
                fetchForGuild(t) {
                    l.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t
                    }), r.default.get({
                        url: o.Endpoints.GUILD_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: n
                        } = e;
                        return l.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            webhooks: n
                        })
                    }).catch(e => {
                        let {
                            body: n
                        } = e;
                        l.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(t, e) {
                    l.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t,
                        channelId: e
                    }), r.default.get({
                        url: o.Endpoints.CHANNEL_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return l.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            channelId: e,
                            webhooks: i
                        })
                    })
                },
                create: (t, e, n) => (null == n && (n = s[a.random(0, s.length - 1)]), r.default.post({
                    url: o.Endpoints.CHANNEL_WEBHOOKS(e),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return l.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: t,
                        webhook: n
                    }), n
                })),
                delete: (t, e) => r.default.delete({
                    url: o.Endpoints.WEBHOOK(e),
                    oldFormErrors: !0
                }).then(() => {
                    l.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: t,
                        webhookId: e
                    })
                }),
                update: (t, e, n) => r.default.patch({
                    url: o.Endpoints.WEBHOOK(e),
                    body: n,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return l.default.dispatch({
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let l = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = t;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    width: e,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM17.7863 5.37403C17.8815 5.20737 17.7612 5 17.5692 5H14.4352C14.1661 5 13.9176 5.14421 13.7841 5.3779L6.21373 18.626C6.1185 18.7926 6.23884 19 6.43079 19H9.56476C9.8339 19 10.0824 18.8558 10.2159 18.6221L17.7863 5.37403Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    })
                })
            }
        },
        750560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var i = n("884691"),
                a = n("917351"),
                r = n.n(a);
            n("233736");
            var l = n("666020");

            function o(t) {
                i.useEffect(() => (r.forEach(t, (t, e) => (0, l.subscribeMembers)(e, t)), () => {
                    r.forEach(t, (t, e) => (0, l.unsubscribeMembers)(e, t))
                }), [t])
            }
        },
        981112: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                stageAttachmentFiles: function() {
                    return f
                },
                default: function() {
                    return i
                }
            }), n("808653"), n("222007"), n("70102");
            var i, a = n("811022"),
                r = n("994440"),
                l = n("282928"),
                o = n("142852"),
                s = n("402752"),
                u = n("572868"),
                d = n("49111"),
                c = n("894488"),
                E = n("782340");
            let I = new a.default("CloudUploaderBase.tsx");
            async function f(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = t.map(t => new Promise((i, a) => {
                        switch (t.status) {
                            case l.CloudUploadStatus.NOT_STARTED:
                                t.upload();
                                break;
                            case l.CloudUploadStatus.COMPLETED:
                                i("complete");
                                break;
                            case l.CloudUploadStatus.ERROR:
                                e && t.error !== d.AbortCodes.ENTITY_TOO_LARGE ? t.upload() : a(Error("File failed to upload"));
                                break;
                            case l.CloudUploadStatus.CANCELED:
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
            i = class extends u.default {
                _fileSize() {
                    return this.files.reduce((t, e) => {
                        var n;
                        return t += null !== (n = e.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var t, e;
                    let n = (0, o.getUploadTarget)(null === (e = this.files[0]) || void 0 === e ? void 0 : null === (t = e.item) || void 0 === t ? void 0 : t.target);
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
                    if (null == e || e.status === l.CloudUploadStatus.CANCELED) return;
                    let n = this.files.indexOf(e);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, r.cancelGetAttachmentFile)(e), e.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(t => t.status === l.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let t = this.files;
                    return t.length - t.filter(t => t.status === l.CloudUploadStatus.COMPLETED).length
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
                r = n("917351"),
                l = n.n(r),
                o = n("605250"),
                s = n("402752"),
                u = n("894488");
            let d = new o.default("UploaderBase.tsx");
            i = class extends a.EventEmitter {
                _addAttachmentsToPayload(t, e, n) {
                    let i = {
                            ...t
                        },
                        a = [...l.get(i, e, []), ...n];
                    return l.set(i, e, a)
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
                            r = Math.floor((t - this._loaded) / ((i - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var l;
                            null === (l = this._file.items) || void 0 === l || l.forEach(t => {
                                t.item.progress = n[t.id]
                            })
                        }
                        this._lastUpdate = i, this._loaded = t, this._file = {
                            ...this._file,
                            currentSize: e,
                            progress: a,
                            rate: r
                        }, this.emit("progress", this._file)
                    }, this._handleException = t => {
                        this._handleError({
                            reason: {
                                type: u.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
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
                    }, this.id = l.uniqueId("Uploader"), this._url = t, this._method = e, this._raiseEndpointErrors = null !== (i = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== i && i
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
                r = n("414456"),
                l = n.n(r),
                o = n("587974"),
                s = n("315102"),
                u = n("524768"),
                d = n("616674"),
                c = n("363577");

            function E(t) {
                let {
                    section: e,
                    isSelected: n,
                    width: r,
                    height: E,
                    className: I,
                    selectable: f = !1,
                    onFocus: T,
                    onBlur: _,
                    onMouseOver: S,
                    onMouseLeave: p,
                    ...N
                } = t, [h, A] = a.useState(!1), m = a.useCallback(() => {
                    A(!0), null == T || T()
                }, [T]), C = a.useCallback(() => {
                    A(!1), null == _ || _()
                }, [_]), O = a.useCallback(() => {
                    A(!0), null == S || S()
                }, [S]), g = a.useCallback(() => {
                    A(!1), null == p || p()
                }, [p]), M = a.useMemo(() => {
                    if (e.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var t;
                        return s.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            bot: null === (t = e.application) || void 0 === t ? void 0 : t.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return c
                }, [e, r]);
                return (0, i.jsx)("div", {
                    ...N,
                    className: l(d.wrapper, I, {
                        [d.selectable]: f,
                        [d.selected]: f && n
                    }),
                    onFocus: m,
                    onBlur: C,
                    onMouseOver: O,
                    onMouseLeave: g,
                    children: (0, i.jsx)(o.default, {
                        className: d.mask,
                        mask: f && (n || h) ? o.MaskIDs.SQUIRCLE : o.MaskIDs.AVATAR_DEFAULT,
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
                r = n.n(a),
                l = n("83910"),
                o = n("93393"),
                s = n("317041"),
                u = n("749296");
            let d = t => {
                switch (t.id) {
                    case s.BuiltInSectionId.BUILT_IN:
                        return l.default;
                    case s.BuiltInSectionId.FRECENCY:
                        return o.default;
                    default:
                        return
                }
            };

            function c(t) {
                let {
                    section: e,
                    className: n,
                    width: a,
                    height: l,
                    padding: o,
                    isSelected: s,
                    selectable: c = !1,
                    ...E
                } = t, I = d(e);
                return (0, i.jsx)("div", {
                    className: r(u.wrapper, n, {
                        [u.selectable]: c,
                        [u.selected]: c && s
                    }),
                    style: {
                        width: a,
                        height: l,
                        padding: null != o ? o : 0
                    },
                    children: null != I ? (0, i.jsx)(I, {
                        className: u.icon,
                        width: a,
                        height: l,
                        ...E
                    }) : null
                })
            }
        },
        355263: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIconComponent: function() {
                    return o
                },
                pxToRem: function() {
                    return s
                },
                getCommandQuery: function() {
                    return u
                }
            });
            var i = n("524768"),
                a = n("991630"),
                r = n("943161"),
                l = n("317041");
            let o = t => t.type === i.ApplicationCommandSectionType.BUILT_IN ? r.default : a.default;

            function s(t) {
                return "".concat(t / 16, "rem")
            }

            function u(t, e) {
                let n = e,
                    i = !1,
                    a = e.indexOf(":");
                if (a >= 0) {
                    let t = e.lastIndexOf(" ", a);
                    t >= 0 ? (e = e.substring(0, t), i = !0) : e = e.substring(0, a)
                } else e = e.substring(0, e.length);
                let r = e.split(" ", l.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > l.MAX_SUBCOMMAND_LEVEL && (i = !0, r.pop()), e = r.join(" "), (n.length > e.length || e.endsWith(" ")) && (i = !0, e = e.trimEnd()), {
                    text: e,
                    parts: r,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
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
                    return l
                }
            });
            var i = n("65597"),
                a = n("42203"),
                r = n("337026");

            function l(t) {
                let e = (0, i.default)([a.default], () => a.default.getChannel(t)),
                    {
                        enabled: n
                    } = r.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(t) {
                    return null != t && (!!t.isMultiUserDM() || !!t.isDM() && !t.isSystemDM() && null == t.rawRecipients.find(t => t.bot))
                }(e)
            }
        },
        149022: function(t, e, n) {
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

            function a(t) {
                return {
                    textValue: t,
                    richValue: l(t)
                }
            }
            n.r(e), n.d(e, {
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
                    return o
                }
            }), n("70102");
            let r = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(t) {
                return "" !== t ? t.split("\n").map(t => ({
                    type: "line",
                    children: [{
                        text: t
                    }]
                })) : r
            }

            function o(t) {
                switch (t.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: t.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: t.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: t.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: t.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: t.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: t.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: t.emoji.name, surrogate: t.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: t.emoji.emojiId, name: t.emoji.name, animated: t.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        235275: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useIsDMsToClydeEnabled: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("862205"),
                r = n("305961"),
                l = n("980215");
            let o = (0, a.createExperiment)({
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
                } = o.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), e = (0, i.useStateFromStoresArray)([r.default], () => r.default.getGuildIds()), n = e.some(t => (0, l.getClydeExperimentEnabled)(r.default.getGuild(t)));
                return t && n
            }
        },
        497660: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                a = n("884691"),
                r = n("446674"),
                l = n("77078"),
                o = n("713841"),
                s = n("592407"),
                u = n("305961"),
                d = n("957255"),
                c = n("49111"),
                E = n("782340"),
                I = n("460856");

            function f(t, e, n) {
                let f = u.default.getGuild(e),
                    T = (0, r.useStateFromStores)([d.default], () => null != f ? d.default.can(c.Permissions.MANAGE_GUILD, f) : null),
                    _ = a.useCallback(() => {
                        s.default.open(e, c.GuildSettingsSections.INTEGRATIONS), o.default.setSection(c.IntegrationSettingsSections.APPLICATION, t.id)
                    }, [t.id, e]),
                    S = n === c.AppContext.POPOUT;
                return t.bot && T && !S ? (0, i.jsx)(l.MenuItem, {
                    id: "manage-integration",
                    label: (0, i.jsx)("div", {
                        className: I.labelWrapper,
                        children: (0, i.jsx)("span", {
                            className: I.label,
                            children: E.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: _
                }) : null
            }
        },
        406043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useCurrentUserCommunicationDisabled: function() {
                    return o
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

            function o(t) {
                let e = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return d(null == e ? void 0 : e.id, t)
            }

            function s(t, e, n) {
                return null != e && null != t ? n.getMember(e, t) : null
            }

            function u(t) {
                var e;
                return [null !== (e = null == t ? void 0 : t.communicationDisabledUntil) && void 0 !== e ? e : null, (0, l.isMemberCommunicationDisabled)(t)]
            }

            function d(t, e) {
                let n = (0, i.useStateFromStores)([a.default], () => s(t, e, a.default), [e, t]);
                return u(n)
            }

            function c(t, e) {
                let n = s(t, e, a.default);
                return u(n)
            }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return u
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
                    return f
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
                    return p
                },
                resetPendingProfileChanges: function() {
                    return N
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
            async function o(t, e) {
                let {
                    nick: n,
                    avatar: r
                } = e;
                if (null == t) throw Error("Need guildId");
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(t),
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

            function u(t, e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
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

            function f(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function T(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function _(t) {
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

            function p() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
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

            function m(t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let i, a, r, l, o, s, u, d, c;
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            });
            var E = n("446674"),
                I = n("913144"),
                f = n("49111");
            let T = f.FormStates.CLOSED,
                _ = {},
                S = !1;

            function p() {
                T = f.FormStates.CLOSED, _ = {}, u = null, d = void 0, c = []
            }

            function N() {
                h(), A(), _ = {}, T = f.FormStates.OPEN
            }

            function h() {
                i = void 0, o = void 0
            }

            function A() {
                a = void 0, r = void 0, l = void 0, s = void 0
            }
            class m extends E.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return _
                }
                showNotice() {
                    return void 0 !== i || void 0 !== a || void 0 !== r || void 0 !== l || void 0 !== o || void 0 !== s
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
                    return o
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: a,
                        pendingBio: r,
                        pendingPronouns: l,
                        pendingNickname: o,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return u
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
            var C = new m(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    u = t.guild, T = f.FormStates.OPEN, _ = {}, d = t.source, c = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: p,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), p()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    u = t.guild, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = f.FormStates.SUBMITTING, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (T !== f.FormStates.SUBMITTING) return !1;
                    T = f.FormStates.OPEN, _ = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    T = f.FormStates.OPEN, _ = t.errors
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
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    s = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    _ = {}
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
                    return f
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
                    return p
                }
            });
            var i, a, r, l, o = n("884691"),
                s = n("812204"),
                u = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function I(t, e, n) {
                var i;
                let a = {
                    ...e,
                    ...(0, u.collectGuildAnalyticsMetadata)(null !== (i = e.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(t, a)
            }

            function f(t) {
                let e = o.useCallback(e => {
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

            function T(t) {
                let e = o.useCallback(e => {
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
            }(i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function _(t) {
                let e = o.useCallback(e => {
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
                } = e, r = o.useCallback(e => {
                    let r = {
                        action_type: e,
                        mod_user_id: d.default.getId(),
                        guild_id: t,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != a ? a : void 0
                    };
                    I(E.AnalyticEvents.MODERATION_ACTION, r)
                }, [t, n, i, a]);
                return r
            }

            function p(t, e) {
                I(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: t,
                    location: e
                })
            }(a = l || (l = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"
        },
        482391: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearIntegrationPermissions: function() {
                    return s
                },
                editPermissions: function() {
                    return u
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
                    return f
                }
            });
            var i = n("872717"),
                a = n("913144"),
                r = n("507217"),
                l = n("389153"),
                o = n("49111");

            function s() {
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function u(t, e, n) {
                a.default.dispatch({
                    applicationId: t,
                    commandId: e,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function d(t, e) {
                i.default.get(o.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(n => {
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
                let r = [];
                try {
                    let a = await i.default.get(o.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n));
                    a.ok && (r = a.body.permissions)
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
                    permissions: r
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
            async function f(t) {
                let {
                    applicationId: e,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: o,
                    guildId: s,
                    permissions: u
                } = t, d = n === e ? function(t, e, n, i) {
                    if (!n || !i) return e;
                    let a = {
                        [t]: n,
                        [(0, l.allChannelsSentinel)(t)]: i
                    };
                    return e.filter(t => {
                        let e = a[t.id];
                        return null == e || t.permission !== e
                    })
                }(s, u, i, o) : u, c = await r.updateApplicationGuildCommandPermissions(e, s, n, d);
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
                    return l
                },
                addQueued: function() {
                    return o
                },
                setFailed: function() {
                    return s
                },
                fetchMessageInteractionData: function() {
                    return u
                }
            });
            var i = n("872717"),
                a = n("913144"),
                r = n("49111");

            function l(t, e, n, i) {
                a.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: t,
                    nonce: e,
                    state: n,
                    indices: i
                })
            }

            function o(t, e) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: r,
                    onSuccess: l,
                    onFailure: o
                } = e;
                a.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: t,
                    messageId: i,
                    onCreate: r,
                    onSuccess: l,
                    onFailure: o
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
            async function u(t, e) {
                let n = await i.default.get({
                    url: r.Endpoints.MESSAGE_INTERACTION_DATA(t, e),
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
                    return T
                }
            }), n("222007");
            var r = n("446674"),
                l = n("913144"),
                o = n("798609"),
                s = n("42203"),
                u = n("3765");
            let d = {},
                c = {},
                E = {};

            function I(t) {
                delete d[t];
                let e = E[t];
                null != e && delete c[e], delete E[t]
            }
            class f extends r.default.Store {
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
                    return (null == n || null == d[n] || d[n].state === u.InteractionState.FAILED) && (null == d[e] || d[e].state === u.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return i
                }
            }
            f.displayName = "InteractionStore";
            var T = new f(l.default, {
                LOGOUT: function() {
                    d = {}, c = {}, E = {}
                },
                INTERACTION_QUEUE: function(t) {
                    let {
                        nonce: e,
                        messageId: n,
                        data: i,
                        onCreate: a,
                        onCancel: r,
                        onSuccess: l,
                        onFailure: o
                    } = t;
                    null != n && (c[n] = e, E[e] = n), d[e] = {
                        state: u.InteractionState.QUEUED,
                        data: i,
                        onCreate: a,
                        onCancel: r,
                        onSuccess: l,
                        onFailure: o
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
                    if (null == a || a.state !== u.InteractionState.QUEUED) return !1;
                    a.state = u.InteractionState.CREATED, null === (e = a.onCreate) || void 0 === e || e.call(a, i)
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
                    let r = d[n];
                    if (null == r) return !1;
                    null === (e = r.onFailure) || void 0 === e || e.call(r, i, a), r.data.interactionType === o.InteractionTypes.APPLICATION_COMMAND ? I(n) : d[n] = {
                        ...r,
                        state: u.InteractionState.FAILED,
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
                    for (let [t, e] of Object.entries(d)) e.state === u.InteractionState.FAILED && I(t)
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
                    return p
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
                o = n("913144"),
                s = n("819689"),
                u = n("798609"),
                d = n("263024"),
                c = n("271938"),
                E = n("274800"),
                I = n("809810"),
                f = n("3765"),
                T = n("606981"),
                _ = n("49111");

            function S(t) {
                return null == t || "" === t || Number.isNaN(t) ? Date.now() : r.default.extractTimestamp(t) + 9e5
            }
            let p = async t => {
                let {
                    componentType: e,
                    messageId: n,
                    messageFlags: i,
                    customId: a,
                    indices: o,
                    applicationId: s,
                    channelId: f,
                    guildId: T,
                    localState: S
                } = t, p = r.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, p)) return;
                await d.default.unarchiveThreadIfNecessary(f), (0, E.addQueued)(p, {
                    messageId: n,
                    data: {
                        interactionType: u.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: o
                    },
                    onFailure: (t, e) => N(f, t, e)
                }), null != S && (0, E.queueInteractionComponentState)(n, p, S, o);
                let A = {
                    type: u.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: p,
                    guild_id: T,
                    channel_id: f,
                    message_flags: i,
                    message_id: n,
                    application_id: s,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: e,
                        custom_id: a,
                        ... function(t) {
                            if (null == t) return null;
                            if (t.type === u.ComponentType.STRING_SELECT || t.type === u.ComponentType.INPUT_TEXT) return t;
                            let e = t.selectedOptions.map(t => t.value);
                            return {
                                type: t.type,
                                values: e
                            }
                        }(S)
                    }
                };
                await l.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: A,
                    timeout: 3e3
                }, t => {
                    h(p, f, T, t)
                })
            }, N = (t, e, n) => {
                null == n && null != e && s.default.sendClydeError(t, e)
            }, h = (t, e, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var a;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === _.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let a = (0, T.getFirstSkemaError)(i.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && o.default.dispatch({
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
                    a = t.state === _.MessageStates.SENT && S(t.id) < Date.now();
                let l = t.state === _.MessageStates.SEND_FAILED && (null == (n = t.id) || "" === n || Number.isNaN(n) ? Date.now() : r.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.APPLICATION_COMMAND,
                    s = t.isCommandType();
                if (o && i === f.InteractionState.QUEUED || s && t.state === _.MessageStates.SENDING && null != e) return 0;
                if (o && i === f.InteractionState.CREATED || t.hasFlag(_.MessageFlags.LOADING) && !a) return 1;
                if (null != t.interaction && t.hasFlag(_.MessageFlags.LOADING) && a) return 3;
                else if (null != t.interaction && !t.hasFlag(_.MessageFlags.LOADING) && l) return 3;
                else if (s && t.state === _.MessageStates.SEND_FAILED) return 2
            };

            function m(t) {
                let e = t.options;
                for (;
                    (null == e ? void 0 : e.length) === 1 && (e[0].type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || e[0].type === u.ApplicationCommandOptionType.SUB_COMMAND);) e = e[0].options;
                for (let t of null != e ? e : [])
                    if (t.type === u.ApplicationCommandOptionType.ATTACHMENT) return !1;
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
                    for (let [a, r] of Object.entries(e))
                        if (a !== i && null != r && "object" == typeof r) return t(r, null != n ? n : a);
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
                    return u
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
                o = n("49111");
            n("843455"), n("782340");

            function s() {
                l.default.getApplicationsShelfFetchState() === l.FetchState.NOT_FETCHED && (r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), a.default.get(o.Endpoints.APPLICATIONS_SHELF).then(t => r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: t.body.applications
                })).catch(t => r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function u(t) {
                let e = new i.default(1e3, 5e3);
                r.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: t
                }), a.default.get({
                    url: o.Endpoints.CHANNEL_INTEGRATIONS(t),
                    backoff: e,
                    retries: 10
                }).then(e => {
                    r.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: t,
                        integrations: e.body
                    })
                }).catch(() => {
                    r.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: t
                    })
                })
            }

            function d(t, e) {
                return a.default.delete(o.Endpoints.CHANNEL_INTEGRATION(t, e)).then(t => {
                    var e;
                    if (null === (e = t.body) || void 0 === e ? void 0 : e.message) throw Error(t.body.message)
                })
            }
        },
        252063: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                usePrivateChannelIntegrationState: function() {
                    return u
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                r = n("201155"),
                l = n("21121"),
                o = n("970755"),
                s = n("140596");

            function u(t) {
                let {
                    channelId: e
                } = t;
                (0, l.useInMainTabsExperiment)();
                let n = (0, r.useShowApplicationInGDM)(e),
                    {
                        installedIntegrations: u,
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
                    n && ((c === s.FetchState.NOT_FETCHED || c === s.FetchState.FETCH_FAILED) && (0, o.fetchPrivateChannelIntegrations)(e), (E === s.FetchState.NOT_FETCHED || E === s.FetchState.FETCH_FAILED) && (0, o.fetchApplicationsShelf)())
                }, [n, e, c, E]);
                let I = new Set(u.map(t => t.application.id)),
                    f = d.filter(t => !I.has(t.id));
                return {
                    installedIntegrations: u,
                    availableApplications: f,
                    applicationsShelf: d,
                    fetched: c !== s.FetchState.NOT_FETCHED && c !== s.FetchState.FETCHING && E !== s.FetchState.NOT_FETCHED && E !== s.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                a = n("79112"),
                r = n("685665"),
                l = n("929423");
            n("424562");
            var o = n("49111"),
                s = n("397336");

            function u(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: u,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = t, {
                    analyticsLocations: E
                } = (0, r.default)(), I = (0, i.useCallback)(() => {
                    null != e && (0, l.initGuildIdentitySettings)(e, null != d ? d : E), a.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [e, n, u, d, c, E]);
                return I
            }
        },
        85166: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("42203"),
                o = n("305961"),
                s = n("957255"),
                u = n("697218"),
                d = n("244480"),
                c = n("325861"),
                E = n("49111"),
                I = n("782340");

            function f(t, e, n) {
                var f;
                let T = l.default.getChannel(n),
                    _ = (0, a.useStateFromStores)([o.default], () => o.default.getGuild(e), [e]),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(t.id, n), [n, t.id]),
                    p = (null === (f = u.default.getCurrentUser()) || void 0 === f ? void 0 : f.id) === t.id,
                    N = (0, a.useStateFromStores)([s.default], () => null != n && s.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != T && null != _ && (N || p) && S.speaker ? (0, i.jsx)(r.MenuItem, {
                    id: "audience",
                    label: p ? I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        p ? (0, d.moveSelfToAudience)(T) : (0, d.moveUserToAudience)(t, T)
                    }
                }) : null
            }
        },
        834247: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return H
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("272030"),
                l = n("838446"),
                o = n("158534"),
                s = n("798609"),
                u = n("846883"),
                d = n("812204"),
                c = n("243288"),
                E = n("321135"),
                I = n("873254"),
                f = n("235275"),
                T = n("861370"),
                _ = n("230947"),
                S = n("497660"),
                p = n("726750"),
                N = n("85166"),
                h = n("170990"),
                A = n("304582"),
                m = n("72057"),
                C = n("300925"),
                O = n("563816"),
                g = n("489836"),
                M = n("406703"),
                D = n("502533"),
                G = n("314838"),
                y = n("383161"),
                R = n("421602"),
                U = n("459870"),
                L = n("692986"),
                v = n("806179"),
                P = n("97508"),
                b = n("816106"),
                F = n("623879"),
                x = n("49111"),
                B = n("782340"),
                H = (0, o.default)((0, l.default)(function(t) {
                    let {
                        user: e,
                        guildId: n,
                        channel: l,
                        showMediaItems: o = !1,
                        showChatItems: d = !0,
                        showChannelCallItems: H = !1,
                        showModalItems: w = !0,
                        showStageChannelItems: j = !1,
                        context: k,
                        onSelect: Y,
                        onHeightUpdate: V
                    } = t, W = (0, v.default)(e.id, n, l.id), K = (0, y.default)(e, n, k), z = (0, R.default)(e.id, k), Q = (0, F.default)(e.id), X = (0, M.default)(e, k), Z = (0, m.default)({
                        user: e,
                        guildId: n,
                        context: k
                    }), q = (0, A.default)(e), J = (0, b.default)(e.id), $ = (0, L.default)(e.id), tt = (0, _.default)({
                        guildId: n,
                        userId: e.id,
                        analyticsLocation: {
                            page: x.AnalyticsPages.GUILD_CHANNEL,
                            section: x.AnalyticsSections.CHAT_USERNAME,
                            object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: k
                    }), te = (0, G.default)(e, n), tn = (0, u.default)(null, e), ti = (0, h.default)(e), ta = (0, g.default)(e), tr = (0, C.default)(e, n, l.id), tl = (0, P.default)(e.id, n), to = (0, U.default)(e, n), ts = (0, T.default)({
                        id: e.id,
                        label: B.default.Messages.COPY_ID_USER
                    }), tu = (0, D.default)(e.id, l.id), td = (0, E.default)(e.id), tc = (0, c.default)(l.id), tE = (0, p.default)(e), tI = (0, N.default)(e, n, l.id), tf = (0, O.default)({
                        commandType: s.ApplicationCommandType.USER,
                        commandTargetId: e.id,
                        channel: l,
                        guildId: n,
                        onShow: V
                    }), tT = (0, I.default)(e.id), t_ = (0, S.default)(e, n, k), tS = e.isNonUserBot(), tp = e.isClyde(), tN = (0, f.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": B.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: Y,
                        children: [!tS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [tE, j && tI]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [w && W, d && K, z, X, w && Z, w && q, Q]
                            }), o && (0, i.jsx)(a.MenuGroup, {
                                children: J
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: w && tn
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [o && $, o && tu, w && tt, tf, t_, w && te, ti, w && ta, H && tT]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: tr
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [tl, to]
                            }), H && (0, i.jsxs)(a.MenuGroup, {
                                children: [tc, td]
                            })]
                        }), tp && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [w && W, tN && z]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: tr
                            })]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: ts
                        })]
                    })
                }, {
                    object: x.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_CHANNEL_USER_MENU])
        },
        563816: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return N
                }
            });
            var i = n("37983"),
                a = n("884691"),
                r = n("627445"),
                l = n.n(r),
                o = n("446674"),
                s = n("77078"),
                u = n("240249"),
                d = n("524768"),
                c = n("389153"),
                E = n("916565"),
                I = n("355263"),
                f = n("633043"),
                T = n("305961"),
                _ = n("317041"),
                S = n("782340"),
                p = n("205735"),
                N = t => {
                    let {
                        commandType: e,
                        commandTargetId: n,
                        channel: r,
                        guildId: N,
                        onShow: h
                    } = t, A = a.useRef(!1), m = a.useRef(0), C = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(null != N ? N : r.guild_id)), {
                        hasMoreAfter: O,
                        scrollDown: g,
                        sectionDescriptors: M,
                        commands: D,
                        placeholders: G
                    } = u.useDiscovery(r, {
                        commandType: e
                    }, {
                        placeholderCount: _.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: y,
                        sections: R
                    } = a.useMemo(() => {
                        let t = D.concat(G),
                            e = {};
                        return M.forEach(t => {
                            e[t.id] = t
                        }), {
                            visibleCommands: t,
                            sections: e
                        }
                    }, [D, M, G]), U = a.useMemo(() => (0, c.canUseContextMenuCommands)(r, y.length, u.getCommandTypeCount(r, e, null == C ? void 0 : C.applicationCommandCounts)), [r, e, y.length, null == C ? void 0 : C.applicationCommandCounts]);
                    a.useEffect(() => {
                        U !== A.current && (U && (null == h || h()), A.current = U)
                    }, [U, h]), a.useEffect(() => {
                        L(m.current)
                    }, [y]);
                    let L = a.useCallback(t => {
                            O && t + 500 > 34 * y.length - 40 && g(), m.current = t
                        }, [O, g, y]),
                        v = a.useCallback(t => {
                            if (t.inputType === d.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(s.MenuItem, {
                                id: "menu-command-".concat(t.id),
                                render: () => (0, i.jsx)(f.default, {})
                            }, "menu-command-".concat(t.id));
                            l(null != r, "menu item should not show if channel is null");
                            let e = R[t.applicationId],
                                a = null != e ? (0, I.getIconComponent)(e) : void 0;
                            return (0, i.jsx)(s.MenuItem, {
                                id: t.id,
                                label: t.displayName,
                                showIconFirst: !0,
                                icon: () => null != a ? (0, i.jsx)(a, {
                                    channel: r,
                                    section: e,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, E.default)({
                                        command: t,
                                        optionValues: {},
                                        context: {
                                            channel: r,
                                            guild: C
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, t.id)
                        }, [r, C, n, R]);
                    return U && (0, i.jsx)(s.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        onChildrenScroll: L,
                        childRowHeight: 34,
                        listClassName: p.list,
                        disabled: 0 === y.length,
                        children: y.map(v)
                    })
                }
        },
        383161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                mentionUser: function() {
                    return f
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
                o = n("42203"),
                s = n("957255"),
                u = n("18494"),
                d = n("659500"),
                c = n("158998"),
                E = n("49111"),
                I = n("782340");

            function f(t, e) {
                let {
                    id: n
                } = t, i = "@".concat(c.default.getUserTag(t, {
                    decoration: "never"
                }));
                d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: i,
                    rawText: "<@".concat(n, ">")
                }), null != e && l.default.startTyping(e)
            }

            function T(t, e, n) {
                let [l, d] = (0, a.useStateFromStoresArray)([u.default, o.default, s.default], () => {
                    let t = u.default.getChannelId(e),
                        n = o.default.getChannel(t),
                        i = null != n && (n.isMultiUserDM() || s.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [t, i]
                }, [e]), c = n === E.AppContext.POPOUT;
                return !d || c ? null : (0, i.jsx)(r.MenuItem, {
                    id: "mention",
                    label: I.default.Messages.MENTION,
                    action: function() {
                        f(t, l)
                    }
                })
            }
        },
        83910: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("926001"),
                l = n("75196"),
                o = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...o
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: e,
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
        93393: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("503420"),
                l = n("75196"),
                o = (0, a.replaceIcon)(function(t) {
                    let {
                        width: e = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: r,
                        ...o
                    } = t;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: e,
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