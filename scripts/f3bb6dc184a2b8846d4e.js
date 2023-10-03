(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [10790, 96043, 53686, 71402], {
        545292: (e, t, n) => {
            e.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        455021: (e, t, n) => {
            e.exports = n.p + "d55a815e67ecc4faaafeb63dd2379a5a.png"
        },
        247250: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(744564),
                i = n(396043),
                o = n(652591),
                l = n(930948),
                a = n(2590);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }
            const s = {
                rebuildRTCActiveChannels: function() {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_ACTIVE_CHANNELS"
                    })
                },
                selectParticipant: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_SELECT_PARTICIPANT",
                        channelId: e,
                        id: t
                    })
                },
                updateLayout: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.IlC.APP;
                    o.default.track(a.rMx.VIDEO_LAYOUT_TOGGLED, c({
                        video_layout: t
                    }, (0, i.AB)(e)));
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_LAYOUT",
                        channelId: e,
                        layout: t,
                        appContext: n
                    })
                },
                toggleParticipants: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
                        channelId: e,
                        participantsOpen: t
                    })
                },
                toggleVoiceParticipantsHidden: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
                        channelId: e,
                        voiceParticipantsHidden: t
                    })
                },
                updateStageStreamSize: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
                        channelId: e,
                        large: t
                    })
                },
                updateStageVideoLimitBoostUpsellDismissed: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
                        channelId: e,
                        dismissed: t
                    })
                },
                updateChatOpen: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                        channelId: e,
                        chatOpen: t
                    });
                    t ? setTimeout((function() {
                        l.S.dispatch(a.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    }), 0) : l.S.dispatch(a.CkL.FOCUS_CHAT_BUTTON)
                }
            }
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => d,
                jW: () => _
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                l = n(73105),
                a = n(2590);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function d(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var u, f, d = 0,
                        _ = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        _ = e.pageY
                    }
                    if (0 === d && 0 === _) {
                        var p, E = null === (p = e.target) || void 0 === p ? void 0 : p.getBoundingClientRect(),
                            O = null != E ? E : {},
                            I = O.left,
                            h = void 0 === I ? 0 : I,
                            T = O.top,
                            m = void 0 === T ? 0 : T,
                            g = O.width,
                            y = void 0 === g ? 0 : g,
                            b = O.height;
                        d = h + y / 2;
                        _ = m + (void 0 === b ? 0 : b) / 2
                    }
                    var S = {
                        render: t,
                        renderLazy: r,
                        target: null !== (u = e.target) && void 0 !== u ? u : e.currentTarget,
                        rect: new DOMRect(d, _, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var v = (0, l.RD)((function() {
                        v();
                        s(S)
                    }));
                    else {
                        e.preventDefault();
                        s(S)
                    }
                }
            }

            function _(e, t, n) {
                d(e, void 0, n, t)
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => l
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => p,
                Gn: () => O,
                Y2: () => I,
                mE: () => h
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                l = n(615796),
                a = n(264628),
                u = n(673679),
                c = n(2590),
                s = n(203600);

            function f(e, t, n, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            f(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            f(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var _ = function(e, t) {
                var n, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function p(e, t, n, r, i) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = d((function(e, t, n, s, f) {
                    var d, p, E, O;
                    return _(this, (function(_) {
                        switch (_.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                _.label = 1;
                            case 1:
                                _.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                p = {};
                                null != t && (p.country_code = t);
                                null != n && (p.payment_source_id = n);
                                null != s && (p.include_unpublished = s);
                                null != f && (p.revenue_surface = f);
                                d.query = p;
                                return l.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, u.GE)()];
                            case 2:
                                _.sent();
                                _.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                E = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: E.body
                                });
                                return [3, 6];
                            case 5:
                                O = _.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(O);
                                throw new o.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return p(e, t)
                })))
            }

            function I(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return p(r, e, t, void 0, n)
                })))
            }

            function h() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        567867: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(744564);
            const i = {
                popFirstFile: function(e) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_POP_FILE",
                        channelId: e
                    })
                },
                addFiles: function(e) {
                    var t = e.files,
                        n = e.channelId,
                        i = e.showLargeMessageDialog,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_ADD_FILES",
                        channelId: n,
                        files: t,
                        showLargeMessageDialog: i,
                        draftType: o
                    })
                },
                addFile: function(e) {
                    var t = e.file,
                        n = e.channelId,
                        i = e.showLargeMessageDialog,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_ADD_FILES",
                        channelId: n,
                        files: [t],
                        showLargeMessageDialog: i,
                        draftType: o
                    })
                },
                remove: function(e, t, n) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
                        channelId: e,
                        id: t,
                        draftType: n
                    })
                },
                removeFiles: function(e, t, n) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
                        channelId: e,
                        attachmentIds: t,
                        draftType: n
                    })
                },
                clearAll: function(e, t) {
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
                        channelId: e,
                        draftType: t
                    })
                },
                update: function(e, t, n, i) {
                    var o = i.description,
                        l = i.filename,
                        a = i.spoiler,
                        u = i.thumbnail;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
                        channelId: e,
                        id: t,
                        filename: l,
                        description: o,
                        thumbnail: u,
                        spoiler: a,
                        draftType: n
                    })
                },
                setUploads: function(e) {
                    var t = e.uploads,
                        n = e.channelId,
                        i = e.draftType,
                        o = e.resetState;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
                        channelId: n,
                        uploads: o ? t.map((function(e) {
                            return e.resetState()
                        })) : t,
                        draftType: i
                    })
                },
                setFile: function(e) {
                    var t = e.file,
                        n = e.channelId,
                        i = e.id,
                        o = e.draftType;
                    r.Z.dispatch({
                        type: "UPLOAD_ATTACHMENT_SET_FILE",
                        channelId: n,
                        id: i,
                        file: t,
                        draftType: o
                    })
                }
            }
        },
        625091: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n(304548),
                i = n(744564),
                o = n(943469),
                l = n(720419),
                a = n(567867),
                u = n(444663),
                c = n(769915),
                s = n(598143),
                f = n(474717),
                d = n(460471),
                _ = n(201891),
                p = n(649536),
                E = n(358624),
                O = n(723029),
                I = n(28862),
                h = n(798808),
                T = n(331055),
                m = n(284610),
                g = n(255592),
                y = n(661123),
                b = n(2590),
                S = n(473708);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        A(e, t, n[t])
                    }))
                }
                return e
            }

            function L(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                var t = e.channelId,
                    n = e.uploads,
                    r = e.draftType,
                    s = e.parsedMessage,
                    f = e.options,
                    v = void 0 === f ? {} : f,
                    A = new d.Z(b.ANM.MESSAGES(t)),
                    N = {
                        content: "",
                        nonce: "",
                        channel_id: t,
                        type: b.uaV.DEFAULT,
                        sticker_ids: null == v ? void 0 : v.stickerIds
                    };
                null != s && (N.content = null == s ? void 0 : s.content);
                if (null != h.Z.getPendingReply(t)) {
                    N.type = b.uaV.REPLY;
                    N.message_reference = v.messageReference;
                    N.allowed_mentions = v.allowedMentions;
                    (0, I.A6)(t)
                }
                var C, U = R((0, T.ZP)(N.content), 2),
                    M = U[0],
                    w = U[1];
                if (M) {
                    N.content = w;
                    var D;
                    N.flags = (0,
                        y.pj)(null !== (D = N.flags) && void 0 !== D ? D : 0, b.iLy.SUPPRESS_NOTIFICATIONS)
                }
                var j, G, k = null !== (C = v.nonce) && void 0 !== C ? C : (0, E.rv)(),
                    Z = (0, E.ZP)({
                        channelId: t,
                        content: N.content,
                        tts: null !== (j = null == s ? void 0 : s.tts) && void 0 !== j && j,
                        type: N.type,
                        messageReference: N.message_reference,
                        flags: N.flags,
                        nonce: k
                    });
                N.nonce = k;
                A.on("start", (function(e) {
                    G = (0, p.e5)(L(P({}, Z), {
                        id: e.id
                    }));
                    i.Z.dispatch({
                        type: "UPLOAD_START",
                        channelId: t,
                        file: e,
                        message: G,
                        uploader: A
                    })
                }));
                A.on("progress", (function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: t,
                        file: e
                    })
                }));
                A.on("error", (function(e, s, f, d) {
                    i.Z.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: t,
                        file: e,
                        messageRecord: G
                    });
                    (0, O.x)({
                        fileItems: e.items,
                        failureCode: s,
                        errorMessage: null == d ? void 0 : d.msg
                    });
                    if (s !== b.evJ.EXPLICIT_CONTENT)
                        if (s !== b.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                            if (s !== b.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                                (0, u.openUploadError)({
                                    title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                                });
                                ! function() {
                                    "" !== N.content && "" === m.Z.getDraft(t, r) && o.Z.saveDraft(t, N.content, r);
                                    0 === g.Z.getUploadCount(t, r) && a.Z.setUploads({
                                        channelId: t,
                                        uploads: n,
                                        draftType: r
                                    })
                                }()
                            }
                        } else {
                            var p = {
                                    code: s,
                                    message: null == f ? void 0 : f.message
                                },
                                E = null == G ? null : {
                                    type: c.$V.SEND,
                                    message: L(P({}, G), {
                                        channelId: t
                                    })
                                };
                            (0, u.openUploadError)({
                                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: (0, _.uF)(E, p)
                            })
                        }
                    else l.Z.sendClydeError(t, s)
                }));
                A.on("complete", (function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: t,
                        file: e,
                        aborted: A._aborted
                    })
                }));
                A.uploadFiles(n, N)
            }
            const C = {
                instantBatchUpload: function(e) {
                    var t = e.channelId,
                        n = e.files,
                        r = e.draftType,
                        i = e.isThumbnail,
                        o = void 0 !== i && i,
                        l = e.isClip,
                        a = void 0 !== l && l,
                        u = Array.from(n).map((function(e) {
                            return new s.n({
                                file: e,
                                platform: f.ow.WEB,
                                isThumbnail: o,
                                isClip: a
                            }, t)
                        }));
                    N({
                        channelId: t,
                        uploads: u,
                        draftType: r
                    })
                },
                upload: function e(t) {
                    var n = t.channelId,
                        a = t.file,
                        c = t.draftType,
                        s = t.message,
                        f = {
                            content: "",
                            tts: !1,
                            hasSpoiler: t.hasSpoiler,
                            filename: t.filename
                        };
                    if (null != s) {
                        f.content = s.content;
                        f.tts = s.tts;
                        f.channel_id = s.channel_id;
                        var _ = h.Z.getPendingReply(n);
                        if (null != _) {
                            var p = l.Z.getSendMessageOptionsForReply(_);
                            f.type = b.uaV.REPLY;
                            f.message_reference = p.messageReference;
                            f.allowed_mentions = p.allowedMentions;
                            (0, I.A6)(n)
                        }
                    }
                    var E = new d.Z(b.ANM.MESSAGES(n));
                    E.on("start", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_START",
                            channelId: n,
                            file: e,
                            uploader: E
                        })
                    }));
                    E.on("progress", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: n,
                            file: e
                        })
                    }));
                    E.on("error", (function(t, d) {
                        i.Z.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: n,
                            file: t
                        });
                        (0, O.x)({
                            fileItems: t.items,
                            failureCode: d
                        });
                        if (d !== b.evJ.EXPLICIT_CONTENT) {
                            (0, u.openUploadError)({
                                title: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: S.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                    onClick: function() {
                                        (0, r.closeModal)(u.UPLOAD_ERROR_MODAL_KEY);
                                        e({
                                            channelId: n,
                                            file: a,
                                            draftType: c,
                                            message: s
                                        })
                                    }
                                })
                            });
                            "" !== f.content && "" === m.Z.getDraft(n, c) && o.Z.saveDraft(n, f.content, c)
                        } else l.Z.sendClydeError(n, d)
                    }));
                    E.on("complete", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: n,
                            file: e
                        })
                    }));
                    E.upload(a, f)
                },
                uploadFiles: N,
                cancel: function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_CANCEL_REQUEST",
                        file: e
                    });
                    if (null != e.draftContent && null != e.channelId) {
                        "" === m.Z.getDraft(e.channelId, m.d.ChannelMessage) && i.Z.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: m.d.ChannelMessage
                        })
                    }
                }
            }
        },
        949995: (e, t, n) => {
            "use strict";
            n.d(t, {
                bd: () => u,
                J6: () => c,
                pA: () => s
            });
            var r, i, o = n(334276),
                l = n.n(o);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.IMAGE = 0] = "IMAGE";
                e[e.DOCUMENT = 1] = "DOCUMENT";
                e[e.CODE = 2] = "CODE"
            }(r || (r = {}));
            var u = (a(i = {}, r.IMAGE, l().image), a(i, r.DOCUMENT, l().document), a(i, r.CODE, l().code), i),
                c = [r.DOCUMENT, r.IMAGE, r.CODE],
                s = [r.IMAGE, r.IMAGE, r.IMAGE]
        },
        793008: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                l = n(949995),
                a = n(334276),
                u = n.n(a);
            const c = function(e) {
                var t = e.icons,
                    n = e.className;
                return (0,
                    r.jsxs)("div", {
                    className: o()(u().icons, n),
                    children: [(0, r.jsx)("div", {
                        className: u().wrapOne,
                        children: (0, r.jsx)("div", {
                            className: o()(u().icon, u().one, l.bd[t[0]])
                        })
                    }), (0, r.jsx)("div", {
                        className: u().wrapThree,
                        children: (0, r.jsx)("div", {
                            className: o()(u().icon, u().three, l.bd[t[2]])
                        })
                    }), (0, r.jsx)("div", {
                        className: u().wrapTwo,
                        children: (0, r.jsx)("div", {
                            className: o()(u().icon, u().two, l.bd[t[1]])
                        })
                    })]
                })
            }
        },
        444663: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                UPLOAD_ERROR_MODAL_KEY: () => U,
                default: () => C,
                openUploadError: () => M
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                l = n.n(o),
                a = n(264817),
                u = n(883489),
                c = n(202351),
                s = n(304548),
                f = n(793008),
                d = n(473903),
                _ = n(452723),
                p = n(694329),
                E = n(799066),
                O = n(245325),
                I = n(442212),
                h = n(203600),
                T = n(2590),
                m = n(949995),
                g = n(473708),
                y = n(505021),
                b = n.n(y);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function A(e) {
                var t, n = e.onClose,
                    o = e.fileSize,
                    a = v(e, ["onClose", "fileSize"]),
                    u = null != o && h.Lw < o,
                    y = (0, O.Z)({
                        autoTrackExposure: !u,
                        experiment: E.Z,
                        location: h.cd.UPLOAD_ERROR_UPSELL
                    }),
                    A = y.isLoading,
                    P = y.suggestedPremiumType,
                    L = !u && P === h.p9.TIER_0,
                    R = (0, c.e7)([d.default], (function() {
                        return d.default.getCurrentUser()
                    })),
                    N = (0, r.jsx)(f.Z, {
                        icons: m.J6
                    });
                t = L ? g.Z.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, p.Px)(h.p9.TIER_0),
                    premiumMaxSize: g.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : g.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                var C = i.useMemo((function() {
                        var e = p.ZP.getUserMaxFileSize(R),
                            t = (0, _.BU)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = g.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == R ? void 0 : R.premiumType) {
                            case h.p9.TIER_0:
                                n = g.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case h.p9.TIER_1:
                                n = g.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }), [R]),
                    U = (0, r.jsxs)("div", {
                        className: b().body,
                        children: [(0, r.jsx)("span", {
                            children: C
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(I.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            S(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artElement: N,
                    artContainerClassName: l()(b().artContainer),
                    enableArtBoxShadow: !1,
                    type: h.cd.UPLOAD_ERROR_UPSELL,
                    title: g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: U,
                    context: g.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: g.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: T.jXE.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: L ? h.Si.TIER_0 : h.Si.TIER_2,
                    isLoading: A
                }, a))
            }
            var P = n(443812),
                L = n(334276),
                R = n.n(L);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                var t = e.title,
                    n = e.help,
                    i = e.showPremiumUpsell,
                    o = e.transitionState,
                    a = e.icons,
                    c = e.fileSize,
                    s = e.onClose,
                    d = (0, P.Dt)(),
                    _ = null != a ? a : m.J6;
                return i ? (0, r.jsx)(A, {
                    transitionState: o,
                    onClose: s,
                    fileSize: c
                }) : (0, r.jsx)(u.Y0, {
                    size: u.Cg.DYNAMIC,
                    "aria-labelledby": d,
                    transitionState: o,
                    children: (0, r.jsx)("div", {
                        className: l()(R().uploadDropModal, R().error),
                        children: (0, r.jsxs)("div", {
                            className: R().inner,
                            children: [(0, r.jsx)(f.Z, {
                                icons: _
                            }), (0, r.jsx)("div", {
                                id: d,
                                className: R().title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: R().instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            var U = "UPLOAD_ERROR_MODAL_KEY";

            function M(e) {
                (0, a.h7)((function(t) {
                    return (0, r.jsx)(C, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                N(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, t, e))
                }), {
                    modalKey: U
                })
            }
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(n, e);
                var t = s(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(120415);

            function i(e, t, n, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var l = e.apply(t, n);

                        function a(e) {
                            i(l, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            i(l, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function a(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = o((function(e, t) {
                    var i, o, a, u;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                i = l.sent(), o = i.default;
                                if (null != (a = o(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (u = document.createElement("a")).href = e;
                                    u.target = "_blank";
                                    u.rel = "noreferrer noopener";
                                    u.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        101566: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Y,
                $: () => K
            });
            var r = n(495414),
                i = n(409479),
                o = n(95508),
                l = n(598143),
                a = n(257695),
                u = n(595882),
                c = n(717187),
                s = n.n(c),
                f = n(496486),
                d = n.n(f),
                _ = n(296602),
                p = n(493254);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function g(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var A = new _.Z("UploaderBase.tsx"),
                P = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && y(e, t)
                    }(n, e);
                    var t = v(n);

                    function n(e) {
                        var r, i, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            l = arguments.length > 2 ? arguments[2] : void 0;
                        O(this, n);
                        (r = t.call(this))._token = "";
                        r._lastUpdate = 0;
                        r._loaded = 0;
                        r._aborted = !1;
                        r._errored = !1;
                        r._raiseEndpointErrors = !1;
                        r.alreadyStarted = !1;
                        r._handleStart = function(e) {
                            r._cancel = e;
                            r.alreadyStarted || r.emit("start", r._file);
                            r.alreadyStarted = !0
                        };
                        r._handleProgress = function(e, t, n) {
                            var i = Date.now(),
                                o = (0, u.S)(e, t),
                                l = Math.floor((e - r._loaded) / ((i - r._lastUpdate) / 1e3));
                            if (null != n) {
                                var a;
                                null === (a = r._file.items) || void 0 === a || a.forEach((function(e) {
                                    e.item.progress = n[e.id]
                                }))
                            }
                            r._lastUpdate = i;
                            r._loaded = e;
                            r._file = m(T({}, r._file), {
                                currentSize: t,
                                progress: o,
                                rate: l
                            });
                            r.emit("progress", r._file)
                        };
                        r._handleException = function(e) {
                            r._handleError({
                                reason: {
                                    type: p.xi.ERROR_SOURCE_UNKNOWN,
                                    msg: e.toString()
                                }
                            })
                        };
                        r._handleAborted = function() {
                            r.clearProcessingMessageInterval()
                        };
                        r._handleError = function(e) {
                            var t = e.code,
                                n = e.reason,
                                i = e.body;
                            r.clearProcessingMessageInterval();
                            if (!r._aborted) {
                                r._errored = !0;
                                A.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(r.id));
                                r.emit("error", r._file, t, i, n);
                                r.removeAllListeners()
                            }
                        };
                        r._handleComplete = function(e) {
                            r.clearProcessingMessageInterval();
                            A.log("_handleComplete for ".concat(r.id));
                            r.emit("complete", r._file, e);
                            r.removeAllListeners()
                        };
                        r.id = d().uniqueId("Uploader");
                        r._url = e;
                        r._method = o;
                        r._raiseEndpointErrors = null !== (i = null == l ? void 0 : l.raiseEndpointErrors) && void 0 !== i && i;
                        return r
                    }
                    var r = n.prototype;
                    r._addAttachmentsToPayload = function(e, t, n) {
                        var r = T({}, e),
                            i = b(d().get(r, t, [])).concat(b(n));
                        return d().set(r, t, i)
                    };
                    r.clearProcessingMessageInterval = function() {
                        if (null != this.processingMessageChangeInterval) {
                            clearInterval(this.processingMessageChangeInterval);
                            this.processingMessageChangeInterval = void 0
                        }
                    };
                    r.cancel = function() {
                        A.log("cancel() for ".concat(this.id));
                        this._aborted = !0;
                        null != this._cancel && this._cancel();
                        this._handleComplete()
                    };
                    r.cancelItem = function(e) {
                        throw new Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                    };
                    r.upload = function(e, t, n) {
                        if (null != this._cancel) throw new Error("Uploader.upload(...): An upload is already in progress.");
                        this._lastUpdate = Date.now();
                        this._loaded = 0;
                        this._file = {
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
                    };
                    return n
                }(s()),
                L = n(2590),
                R = n(473708);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t, n, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function U(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            C(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            C(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function M(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function w(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        w(e, t, n[t])
                    }))
                }
                return e
            }

            function G(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function k(e, t) {
                return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Z(e, t) {
                Z = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Z(e, t)
            }

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function F(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = D(e);
                    if (t) {
                        var i = D(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return k(this, n)
                }
            }
            var H = function(e, t) {
                    var n, r, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                V = new r.Z("CloudUploaderBase.tsx"),
                Y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Z(e, t)
                    }(n, e);
                    var t = F(n);

                    function n() {
                        M(this, n);
                        var e;
                        (e = t.apply(this, arguments)).files = [];
                        return e
                    }
                    var r = n.prototype;
                    r._fileSize = function() {
                        return this.files.reduce((function(e, t) {
                            var n;
                            return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                        }), 0)
                    };
                    r.compressAndCheckFileSize = function() {
                        var e = this;
                        return U((function() {
                            var t, n, r, i, o, u, c, s, f, d, _, E, O;
                            return H(this, (function(I) {
                                switch (I.label) {
                                    case 0:
                                        r = (0, a.F)(null === (t = e.files[0]) || void 0 === t || null === (n = t.item) || void 0 === n ? void 0 : n.target);
                                        if (e.files.length > r.getMaxAttachmentsCount()) {
                                            V.log("Too many attachments for ".concat(e.id));
                                            e._handleError({
                                                code: L.evJ.TOO_MANY_ATTACHMENTS
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 10];
                                    case 1:
                                        I.trys.push([1, 8, 9, 10]);
                                        c = e.files[Symbol.iterator]();
                                        I.label = 2;
                                    case 2:
                                        if (i = (s = c.next()).done) return [3, 7];
                                        f = s.value;
                                        I.label = 3;
                                    case 3:
                                        I.trys.push([3, 5, , 6]);
                                        return [4, f.reactNativeCompressAndExtractData()];
                                    case 4:
                                        I.sent();
                                        if (f.status === l.m.CANCELED) {
                                            V.log("compressAndCheckFileSize() file has been cancelled for compression - ".concat(f.id));
                                            return [3, 6]
                                        }
                                        if (0 === (null !== (d = f.currentSize) && void 0 !== d ? d : 0)) {
                                            e._handleError({
                                                code: L.evJ.ENTITY_EMPTY
                                            });
                                            return [2, !1]
                                        }
                                        if ((null !== (_ = f.currentSize) && void 0 !== _ ? _ : 0) > r.getMaxFileSize(f.channelId)) {
                                            e._handleError({
                                                code: L.evJ.ENTITY_TOO_LARGE,
                                                reason: {
                                                    type: p.xi.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE
                                                }
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 6];
                                    case 5:
                                        E = I.sent();
                                        e._handleException(E);
                                        return [2, !1];
                                    case 6:
                                        i = !0;
                                        return [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        O = I.sent();
                                        o = !0;
                                        u = O;
                                        return [3, 10];
                                    case 9:
                                        try {
                                            i || null == c.return || c.return()
                                        } finally {
                                            if (o) throw u
                                        }
                                        return [7];
                                    case 10:
                                        if (e._fileSize() > r.getMaxTotalAttachmentSize()) {
                                            e._handleError({
                                                code: L.evJ.ENTITY_TOO_LARGE,
                                                reason: {
                                                    type: p.xi.POSTCOMPRESSION_SUM_TOO_LARGE
                                                }
                                            });
                                            return [2, !1]
                                        }
                                        return [2, !0]
                                }
                            }))
                        }))()
                    };
                    r._filesTooLarge = function() {
                        return this.files.some((function(e) {
                            return e.error === L.evJ.ENTITY_TOO_LARGE
                        }))
                    };
                    r.setUploadingTextForUI = function() {
                        var e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : R.Z.Messages.UPLOADING_FILES.format({
                                count: this.files.length
                            }),
                            t = this.files.some((function(e) {
                                return e.isImage
                            })),
                            n = this.files.some((function(e) {
                                return e.isVideo
                            })),
                            r = this._fileSize();
                        V.log("setUploadingTextForUI - total content: ".concat(r, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id));
                        this._file = G(j({}, this._file), {
                            totalPostCompressionSize: r,
                            currentSize: r,
                            name: e,
                            hasVideo: n,
                            hasImage: t,
                            attachmentsCount: this.files.length,
                            items: this.files
                        })
                    };
                    r._recomputeProgress = function() {
                        var e, t = this._recomputeProgressTotal(),
                            n = t.loaded,
                            r = t.total;
                        (0, i.Dn)() && (e = this._recomputeProgressByFile());
                        this._handleProgress(n, r, e)
                    };
                    r._recomputeProgressTotal = function() {
                        var e = this._fileSize();
                        return {
                            loaded: this.files.reduce((function(e, t) {
                                var n;
                                return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                            }), 0),
                            total: e
                        }
                    };
                    r._recomputeProgressByFile = function() {
                        var e = {};
                        this.files.forEach((function(t) {
                            e[t.id] = (0, u.S)(t.loaded, t.currentSize)
                        }));
                        return e
                    };
                    r.cancel = function() {
                        V.log("Cancel called for ".concat(this.id));
                        if (!this._aborted) {
                            this._aborted = !0;
                            null != this._cancel && this._cancel();
                            this.files.forEach((function(e) {
                                return e.cancel()
                            }));
                            this._handleComplete()
                        }
                    };
                    r.cancelItem = function(e) {
                        var t = this;
                        return U((function() {
                            var n, r;
                            return H(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        V.log("Cancel called for ".concat(t.id, " for item ").concat(e));
                                        if (null == (n = t.files.find((function(t) {
                                                return t.id === e
                                            })))) return [2];
                                        if (n.status === l.m.CANCELED) return [2];
                                        r = t.files.indexOf(n);
                                        t.files = x(t.files.slice(0, r)).concat(x(t.files.slice(r + 1)));
                                        t._file = G(j({}, t._file), {
                                            items: t.files
                                        });
                                        return [4, (0, o.V)(n)];
                                    case 1:
                                        i.sent();
                                        n.cancel();
                                        t.emit("cancel-upload-item", t._file);
                                        0 === t.files.length && t.cancel();
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    r.failed = function() {
                        return this.files.some((function(e) {
                            return e.status === l.m.ERROR
                        }))
                    };
                    r._remainingUploadCount = function() {
                        var e = this.files;
                        return e.length - e.filter((function(e) {
                            return e.status === l.m.COMPLETED
                        })).length
                    };
                    r.clear = function() {
                        this.cancel();
                        this.files = []
                    };
                    return n
                }(P);

            function K(e) {
                return z.apply(this, arguments)
            }

            function z() {
                z = U((function(e) {
                    var t, n, r, i = arguments;
                    return H(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 ? i[2] : void 0;
                                r = e.map((function(e) {
                                    return new Promise((function(r, i) {
                                        switch (e.status) {
                                            case l.m.NOT_STARTED:
                                                e.upload();
                                                break;
                                            case l.m.COMPLETED:
                                                r("complete");
                                                break;
                                            case l.m.ERROR:
                                                t && e.error !== L.evJ.ENTITY_TOO_LARGE ? e.upload() : i(new Error("File failed to upload"));
                                                break;
                                            case l.m.CANCELED:
                                                i(new Error("Upload is canceled"))
                                        }
                                        e.on("complete", (function() {
                                            r("complete")
                                        }));
                                        e.on("error", (function() {
                                            i(new Error("File ".concat(e.id, " failed to upload")))
                                        }));
                                        e.on("progress", (function(e, t) {
                                            null == n || n(e, t)
                                        }))
                                    }))
                                }));
                                return [4, Promise.all(r)];
                            case 1:
                                o.sent();
                                return [2]
                        }
                    }))
                }));
                return z.apply(this, arguments)
            }
        },
        460471: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(281110),
                i = n(347365),
                o = n(101566),
                l = n(474717),
                a = n(124453),
                u = n(473708);

            function c(e, t, n, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            c(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            c(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t, n) {
                _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                };
                return _(e, t, n || e)
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function I(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var g = function(e, t) {
                    var n, r, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && h(e, t)
                    }(n, e);
                    var t = m(n);

                    function n(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        f(this, n);
                        return t.call(this, e, r, i)
                    }
                    var c = n.prototype;
                    c.uploadFiles = function(e, t) {
                        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).addFilesTo,
                            i = this,
                            l = this,
                            a = function() {
                                return _(p(n.prototype), "upload", i)
                            };
                        return s((function() {
                            var n, i, c;
                            return g(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        a().call(l, {
                                            name: u.Z.Messages.ATTACHMENT_PROCESSING
                                        }, t, e);
                                        n = new AbortController;
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 4, , 5]);
                                        l.files = e;
                                        if (l._aborted) return [2];
                                        l._handleStart((function() {
                                            return n.abort()
                                        }));
                                        return [4, l.compressAndCheckFileSize()];
                                    case 2:
                                        if (!s.sent()) return [2];
                                        l.setUploadingTextForUI();
                                        return [4, (0, o.$)(l.files, !0, l._recomputeProgress.bind(l))];
                                    case 3:
                                        s.sent();
                                        return [3, 5];
                                    case 4:
                                        i = s.sent();
                                        l._handleException(i);
                                        return [3, 5];
                                    case 5:
                                        s.trys.push([5, 7, , 8]);
                                        return [4, l._createMessage(n.signal, t, r)];
                                    case 6:
                                        return [2, s.sent()];
                                    case 7:
                                        c = s.sent();
                                        if (l._raiseEndpointErrors) throw c;
                                        l._handleException(c);
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    c._createMessage = function(e, t, n) {
                        var o = this;
                        return s((function() {
                            var u, c, s, f, d, _, p;
                            return g(this, (function(I) {
                                switch (I.label) {
                                    case 0:
                                        u = [];
                                        o.files.forEach((function(e, t) {
                                            var n = (0, a.B)(e, t);
                                            e.item.platform === l.ow.WEB && u.push(E({}, n))
                                        }));
                                        c = null != n && null != t ? o._addAttachmentsToPayload(t, n, u) : O(E({}, t), {
                                            attachments: u
                                        });
                                        s = {
                                            url: o._url,
                                            body: c,
                                            signal: e
                                        };
                                        f = "POST" === o._method ? r.ZP.post : r.ZP.patch;
                                        I.label = 1;
                                    case 1:
                                        I.trys.push([1, 3, , 4]);
                                        return [4, f(s)];
                                    case 2:
                                        d = I.sent();
                                        o._handleComplete(d.body);
                                        return [2, d.body];
                                    case 3:
                                        _ = I.sent();
                                        if (o._raiseEndpointErrors) throw new i.Hx(_);
                                        o._handleError({
                                            code: null == _ || null === (p = _.body) || void 0 === p ? void 0 : p.code,
                                            body: null == _ ? void 0 : _.body
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    return n
                }(o.Z)
        },
        83797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e) {
                return null != e && e.type !== r.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
            }
        },
        153686: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.APP_ICON_EDITOR = "app icon editor";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_CARD = "collectibles shop card";
                e.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
                e.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home";
                e.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal";
                e.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark"
            }(r || (r = {}));
            const i = r
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => C,
                JS: () => N,
                hH: () => L,
                AB: () => U,
                ZP: () => G,
                oG: () => j,
                kO: () => D,
                yw: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                l = n(382060),
                a = n(664625),
                u = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                _ = n(973469),
                p = n(682776),
                E = n(491260),
                O = n(563367),
                I = n(715107),
                h = n(464187),
                T = n(407561),
                m = n(652591),
                g = n(563135),
                y = n(671723);
            var b = n(2590),
                S = n(897196);

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function L(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    l = o[c.sH].length,
                    u = o[c.Zb].length,
                    _ = T.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: l + u,
                    guild_num_text_channels: l,
                    guild_num_voice_channels: u,
                    guild_num_roles: P(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = p.Z.getGuildPermissions(t)) && void 0 !== n ? n : g.ZP.NONE),
                    guild_is_vip: t.hasFeature(b.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: P(_)
                }
            }

            function R(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function N(e) {
                if (null == e) return null;
                var t = u.Z.getChannel(e);
                return null == t ? null : C(t)
            }

            function C(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, b.Plq.VIEW_CHANNEL)
                    };
                    n = l.Ec.has(e.type) && null != e.parent_id ? i(u.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = p.Z.getChannelPermissions(e)) && void 0 !== t ? t : g.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(e) {
                if (null == e) return null;
                var t = u.Z.getChannel(e);
                if (null == t) return null;
                var n, r = _.Z.isVideoEnabled(),
                    i = O.Z.getMediaSessionId();
                return A({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, D(t.getGuildId(), t.id, r), {
                    game_name: null != (n = y.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function M(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!m.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== b.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? h.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? I.Z.getChannelId(i) : null,
                        l = u.Z.getChannel(o),
                        a = M(l, i),
                        c = A({}, t, L(a), null != i && null != o && (0, S.AB)(o) ? R(0, o) : C(l));
                    m.default.track(e, c, {
                        flush: n
                    })
                }
            }

            function D(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(T.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== a.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function j(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(T.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != E.Z.findActivity(e.userId, (function(e) {
                        return e.type === b.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const G = {
                trackWithMetadata: w,
                getVoiceStateMetadata: D
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => l,
                ub: () => a,
                bB: () => u
            });
            var r, i, o, l, a, u;
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                e[e.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                e[e.BOT = 3] = "BOT";
                e[e.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(i || (i = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(o || (o = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(l || (l = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(a || (a = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(u || (u = {}))
        },
        87931: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => i,
                tI: () => o,
                L9: () => d,
                no: () => _,
                ND: () => p,
                WC: () => O,
                z8: () => I,
                km: () => T,
                k0: () => m,
                af: () => g
            });
            var r, i, o, l, a = n(2590),
                u = n(203600),
                c = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(i || (i = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function d(e) {
                switch (e) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var _ = (s(l = {}, o.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5
                }]), s(l, o.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }]), s(l, o.PRESET_CUSTOM, []), l),
                p = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: u.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: u.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: u.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: u.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_5
                }];

            function E(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var O = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                I = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440)],
                h = function(e) {
                    return "".concat(e, "p")
                },
                T = [E(r.RESOLUTION_480, (function() {
                    return h(r.RESOLUTION_480)
                })), E(r.RESOLUTION_720, (function() {
                    return h(r.RESOLUTION_720)
                })), E(r.RESOLUTION_1080, (function() {
                    return h(r.RESOLUTION_1080)
                })), E(r.RESOLUTION_1440, (function() {
                    return h(r.RESOLUTION_1440)
                })), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                m = [E(i.FPS_15), E(i.FPS_30), E(i.FPS_60)],
                g = [E(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), E(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), E(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        897436: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jp: () => s,
                Xx: () => f,
                JY: () => _
            });
            var r = n(318715),
                i = n(260561),
                o = n(473903),
                l = n(694329),
                a = n(473708),
                u = (0, i.B)({
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
                c = function(e) {
                    var t = e.user,
                        n = e.config,
                        r = n.desktopViewAndUseAndCollectEnabled,
                        i = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: i,
                        collectEnabled: l.ZP.isPremium(t) ? r : i
                    }
                },
                s = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure,
                        r = void 0 === n || n;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : c({
                        user: t,
                        config: u.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: r
                        })
                    })
                },
                f = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            expressionSourceGuild: void 0,
                            autoTrackExposure: !0
                        },
                        n = t.expressionSourceGuild,
                        i = void 0 === n ? void 0 : n,
                        l = t.autoTrackExposure,
                        a = void 0 === l || l,
                        s = (0, r.ZP)([o.default], (function() {
                            return o.default.getCurrentUser()
                        })),
                        f = u.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: a
                        }),
                        d = c({
                            user: s,
                            config: f
                        }),
                        _ = d.viewAndUseEnabled,
                        p = d.showTryPacksModalAndV2Copy,
                        E = d.collectEnabled,
                        O = _ && E && null != i && !1 !== (null == i || null === (e = i.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: _,
                        collectEnabled: O,
                        showTryPacksModalAndV2Copy: p
                    }
                },
                d = (0, i.B)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: function() {
                            return null
                        }
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: function() {
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }]
                }),
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            guildId: void 0,
                            autoTrackExposure: !0
                        },
                        t = e.guildId,
                        n = e.autoTrackExposure,
                        r = void 0 === n || n,
                        i = d.useExperiment({
                            guildId: null != t ? t : "",
                            location: "482926_3"
                        }, {
                            autoTrackExposure: void 0 === r || r
                        });
                    return {
                        showSettingsToggle: i.showSettingsToggle,
                        allowCollection: i.allowCollection,
                        getNewSettingsDescription: i.getNewSettingsDescription
                    }
                }
        },
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => E,
                M0: () => O,
                Qj: () => I,
                Ao: () => h,
                YO: () => T,
                VO: () => m
            });
            var r = n(61209),
                i = n(567403),
                o = n(682776),
                l = n(968696),
                a = n(2590),
                u = n(897196),
                c = Array.from(u.Vg).map((function(e) {
                    return l.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                _ = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                p = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                E = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                O = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function I(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(d);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = e.match(s);
                if (null != r && r.length > 1) {
                    var i;
                    return {
                        guildId: r[1],
                        channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
                    }
                }
                var o = e.match(_);
                return null != o && o.length > 1 ? {
                    guildId: o[1]
                } : null
            }

            function h(e) {
                if (null == e) return null;
                var t = e.match(p);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function T(e) {
                return !!e.isPrivate() || o.Z.can(a.Plq.VIEW_CHANNEL, e)
            }

            function m(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == i.Z.getGuild(t) && t !== a.ME) return !1;
                if (null == n) return !0;
                var o = r.Z.getChannel(n);
                return null != o && T(o)
            }
        },
        159895: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bc: () => h,
                I6: () => g,
                Z$: () => y
            });
            var r = n(667294),
                i = n(318715),
                o = n(281110),
                l = n(744564),
                a = n(810978),
                u = n(473903),
                c = n(551778),
                s = n(636795),
                f = n(884123),
                d = n(203600),
                _ = n(2590);

            function p(e, t, n, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            p(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            p(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var I = function(e, t) {
                    var n, r, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys,
                                                    i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                h = "nonSubscriber";

            function T() {
                return (T = E((function() {
                    var e;
                    return I(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                l.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                                });
                                return [4, o.ZP.get({
                                    url: _.ANM.USER_PREMIUM_LIKELIHOOD
                                })];
                            case 1:
                                e = t.sent().body;
                                l.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                                    premiumLikelihood: m(e)
                                });
                                return [3, 3];
                            case 2:
                                404 === t.sent().status ? l.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                                }) : l.Z.dispatch({
                                    type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e) {
                var t;
                return O(t = {}, h, e.non_subscriber), O(t, d.Si.TIER_0, e[d.Si.TIER_0]), O(t, d.Si.TIER_2, e[d.Si.TIER_2]), t
            }

            function g(e) {
                var t = e.getCurrentConfig({
                        location: "443cca_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    r = t.useExpectedValue,
                    i = f.Z.shouldFetchPremiumLikelihood();
                b(u.default.getCurrentUser(), i, n, r)
            }

            function y(e) {
                var t = e.useExperiment({
                        location: "443cca_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enabled,
                    o = t.useExpectedValue,
                    l = (0, i.ZP)([f.Z], (function() {
                        return f.Z.shouldFetchPremiumLikelihood()
                    })),
                    a = (0, i.ZP)([u.default], (function() {
                        return u.default.getCurrentUser()
                    }));
                r.useEffect((function() {
                    b(a, l, n, o)
                }), [a, l, n, o])
            }

            function b(e, t, n, r) {
                if (null != e && !(0, s.I5)(e) && n) {
                    t && function() {
                        T.apply(this, arguments)
                    }();
                    if (r) {
                        c.Z.isLoadedForSKU(d.Si.TIER_0) || c.Z.isFetchingForSKU(d.Si.TIER_0) || (0, a.GZ)(d.Si.TIER_0);
                        c.Z.isLoadedForSKU(d.Si.TIER_2) || c.Z.isFetchingForSKU(d.Si.TIER_2) || (0, a.GZ)(d.Si.TIER_2)
                    }
                }
            }
        },
        884123: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                d = f;
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && u(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    d = f
                };
                r.getState = function() {
                    return d
                };
                r.shouldFetchPremiumLikelihood = function() {
                    return !d.isFetching && !d.fetched
                };
                return n
            }(r.ZP.Store);
            _.displayName = "UserPremiumLikelihoodStore";
            const p = new _(i.Z, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    d.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    var t = e.premiumLikelihood;
                    d.premiumLikelihood = t;
                    d.fetched = !0;
                    d.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    d.isFetching = !1
                },
                LOGOUT: function() {
                    d.premiumLikelihood = void 0
                }
            })
        },
        799066: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            })
        },
        245325: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(202351),
                i = n(473903),
                o = n(551778),
                l = n(694329),
                a = n(159895),
                u = n(884123),
                c = n(203600);
            var s = n(717035);

            function f(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    f = e.location,
                    d = (0, r.e7)([i.default], (function() {
                        return i.default.getCurrentUser()
                    })),
                    _ = (0, s.N)(),
                    p = null != _,
                    E = null != d && (0, l.I5)(d);
                (0, a.Z$)(n);
                var O = n.useExperiment({
                        location: null != f ? f : "1"
                    }, {
                        autoTrackExposure: !E && !p && t
                    }),
                    I = O.enabled,
                    h = O.useExpectedValue,
                    T = O.useLikelihood,
                    m = (0, r.cj)([u.Z], (function() {
                        var e = u.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    g = m.premiumLikelihood,
                    y = m.fetched,
                    b = (0, r.e7)([o.Z], (function() {
                        return o.Z.isLoadedForSKUs([c.Si.TIER_0, c.Si.TIER_2])
                    })),
                    S = !E && I && !p && (h ? !y || !b : !y),
                    v = c.p9.TIER_2;
                if (p) {
                    var A = _.subscription_trial;
                    (null == A ? void 0 : A.sku_id) === c.Si.TIER_0 ? v = c.p9.TIER_0 : (null == A ? void 0 : A.sku_id) === c.Si.TIER_2 && (v = c.p9.TIER_2)
                } else if (!E && !S && I)
                    if (h) {
                        v = function(e, t, n) {
                            return null == e ? c.p9.TIER_2 : e[c.Si.TIER_0] * t > e[c.Si.TIER_2] * n ? c.p9.TIER_0 : c.p9.TIER_2
                        }(g, (0, l.aS)(c.Xh.PREMIUM_MONTH_TIER_0).amount, (0, l.aS)(c.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else T && (v = function(e) {
                        if (null == e) return c.p9.TIER_0;
                        var t = e[a.Bc],
                            n = e[c.Si.TIER_0],
                            r = e[c.Si.TIER_2];
                        return r > n && r > t ? c.p9.TIER_2 : c.p9.TIER_0
                    }(g));
                return {
                    isLoading: S,
                    suggestedPremiumType: v
                }
            }
        },
        970925: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => E
            });
            var r = n(785893),
                i = (n(667294), n(284610)),
                o = n(149258),
                l = n(15084),
                a = n(593166),
                u = n(442212),
                c = n(203600),
                s = n(2590),
                f = n(473708);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function p(e) {
                return null != (null == e ? void 0 : e.getGuildId()) ? s.ZY5.GUILD_CHANNEL : (null == e ? void 0 : e.isGroupDM()) || (null == e ? void 0 : e.isPrivate()) ? s.ZY5.DM_CHANNEL : null
            }

            function E(e) {
                var t = function() {
                        O();
                        (0, a.z)(!0)
                    },
                    E = e.channel,
                    O = e.onClose,
                    I = e.content,
                    h = _(e, ["channel", "onClose", "content"]);
                return (0, r.jsx)(u.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            d(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artURL: n(455021),
                    type: c.cd.MESSAGE_LENGTH_UPSELL,
                    title: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
                    body: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
                        maxLength: s.J6R,
                        onLearnMore: t
                    }),
                    context: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
                        maxLength: s.J6R
                    }),
                    glowUp: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
                        onLearnMore: t
                    }),
                    analyticsSource: {
                        page: p(E)
                    },
                    analyticsLocation: {
                        section: s.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: s.qAy.BUTTON_CTA
                    },
                    onClose: O,
                    secondaryCTA: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        O();
                        var e = new Blob([I], {
                            type: "text/plain"
                        });
                        (0, l.d)([(0, o.dp)(e, "message.txt")], E, i.d.ChannelMessage, {
                            requireConfirm: !0,
                            showLargeMessageDialog: !0
                        })
                    }
                }, h))
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                l = n.n(o),
                a = n(304548),
                u = n(153686),
                c = n(19585),
                s = n(594302),
                f = n(652591),
                d = n(694329),
                _ = n(717035),
                p = n(455706),
                E = n(70535),
                O = n(203600),
                I = n(2590),
                h = n(473708),
                T = n(745576),
                m = n.n(T),
                g = n(545292),
                y = n.n(g);

            function b(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function S(e) {
                var t, n, o = e.title,
                    T = e.type,
                    g = e.guildBoostProps,
                    S = e.analyticsSource,
                    v = e.analyticsLocation,
                    A = e.body,
                    P = e.context,
                    L = e.glowUp,
                    R = e.modalClassName,
                    N = e.artContainerClassName,
                    C = e.bodyClassName,
                    U = e.transitionState,
                    M = e.onClose,
                    w = e.onSubscribeClick,
                    D = e.onSecondaryClick,
                    j = e.secondaryCTA,
                    G = e.subscribeButtonText,
                    k = e.showNewBadge,
                    Z = void 0 !== k && k,
                    x = e.enableArtBoxShadow,
                    B = void 0 === x || x,
                    F = e.subscriptionTier,
                    H = void 0 === F ? O.Si.TIER_2 : F,
                    V = e.isLoading,
                    Y = void 0 !== V && V,
                    K = e.hideBackButton,
                    z = e.backButtonText,
                    W = b(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    J = null != g,
                    X = (0, _.N)(),
                    q = (null == X || null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H && !J,
                    Q = (0,
                        c.Z)(u.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    Y || (J ? f.default.track(I.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(T, " - Tier ").concat(g.boostedGuildTier),
                        guild_id: g.guild.id,
                        channel_id: g.channelId,
                        location: v,
                        location_stack: Q
                    }) : f.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: T,
                        source: S,
                        location_stack: Q,
                        sku_id: H
                    }))
                }), [J, H, Y]);
                var $, ee = B ? l()(m().artContainer, m().artContainerBoxShadow, N) : l()(m().artContainer, N),
                    te = null;
                te = "artURL" in W ? (0, r.jsx)("img", {
                    className: m().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, r.jsxs)(a.ModalRoot, {
                    className: l()(m().root, R),
                    "aria-label": o,
                    transitionState: U,
                    children: [(0, r.jsxs)("div", {
                        className: ee,
                        children: [te, Z ? (0, r.jsx)("img", {
                            className: m().sparkleBadge,
                            alt: "",
                            src: y()
                        }) : null]
                    }), (0, r.jsx)(a.ModalContent, {
                        className: m().content,
                        children: Y ? (0, r.jsx)(a.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: q ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(E.ZP, {
                                    onClose: M,
                                    type: T,
                                    subscriptionTier: null !== ($ = null == X || null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== $ ? $ : O.Si.TIER_2,
                                    headingText: o,
                                    context: P,
                                    analyticsLocationObject: v,
                                    children: L
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(a.Heading, {
                                    className: m().header,
                                    variant: "heading-xl/semibold",
                                    children: o
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: l()(C),
                                    children: A
                                })]
                            })
                        })
                    }), (0, r.jsxs)(a.ModalFooter, {
                        className: m().footer,
                        children: [(0, r.jsxs)("div", {
                            className: m().primaryActions,
                            children: [null != j ? (0, r.jsx)(a.Button, {
                                className: m().secondaryAction,
                                onClick: D,
                                size: a.Button.Sizes.SMALL,
                                color: a.Button.Colors.PRIMARY,
                                look: a.Button.Looks.LINK,
                                children: j
                            }) : null, function() {
                                var e, t;
                                if (J) return (0, r.jsx)(s.Z, {
                                    analyticsLocation: v,
                                    guild: g.guild,
                                    onClose: M
                                });
                                var n = q ? (0, d.Rt)({
                                        intervalType: null == X || null === (e = X.subscription_trial) || void 0 === e ? void 0 : e.interval,
                                        intervalCount: null == X || null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.interval_count
                                    }) : void 0,
                                    i = q ? null == X ? void 0 : X.trial_id : null;
                                return (0, r.jsx)(p.Z, {
                                    premiumModalAnalyticsLocation: v,
                                    subscriptionTier: H,
                                    trialId: i,
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == w || w();
                                        M()
                                    },
                                    buttonText: null != G ? G : n
                                })
                            }()]
                        }), !K && (0, r.jsx)(a.Button, {
                            onClick: M,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: null != z ? z : h.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        798808: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                i = n(744564),
                o = n(352980);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var E = {},
                O = {};

            function I(e) {
                if (null == e) return !1;
                var t = O[e];
                if (null == t) return !1;
                var n = o.Z.getMessage(e, t.messageId);
                if (null == n) return !1;
                E[e] = {
                    channel: t.channel,
                    message: n,
                    shouldMention: t.shouldMention,
                    showMentionToggle: t.showMentionToggle
                };
                delete O[e]
            }

            function h() {
                E = {};
                O = {}
            }
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && d(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(o.Z)
                };
                r.getPendingReply = function(e) {
                    return E[e]
                };
                return n
            }(r.ZP.Store);
            T.displayName = "PendingReplyStore";
            const m = new T(i.Z, {
                CREATE_PENDING_REPLY: function(e) {
                    var t = e.channel,
                        n = e.message,
                        r = e.shouldMention,
                        i = void 0 === r || r,
                        o = e.showMentionToggle,
                        l = void 0 === o || o;
                    E[t.id] = {
                        channel: t,
                        message: n,
                        shouldMention: i,
                        showMentionToggle: l
                    }
                },
                CREATE_SHALLOW_PENDING_REPLY: function(e) {
                    var t = e.channel,
                        n = e.messageId,
                        r = e.shouldMention,
                        i = void 0 === r || r,
                        o = e.showMentionToggle,
                        l = void 0 === o || o;
                    O[t.id] = {
                        channel: t,
                        messageId: n,
                        shouldMention: i,
                        showMentionToggle: l
                    }
                },
                SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
                    var t = e.channelId,
                        n = e.shouldMention;
                    t in E && (E[t] = s(c({}, E[t]), {
                        shouldMention: n
                    }));
                    t in O && (O[t] = s(c({}, O[t]), {
                        shouldMention: n
                    }))
                },
                DELETE_PENDING_REPLY: function(e) {
                    var t = e.channelId;
                    delete E[t];
                    delete O[t]
                },
                CONNECTION_OPEN: h,
                LOGOUT: h,
                MESSAGE_DELETE: function(e) {
                    var t, n, r, i = e.id,
                        o = e.channelId;
                    if ((null === (t = E[o]) || void 0 === t || null === (n = t.message) || void 0 === n ? void 0 : n.id) === i) delete E[o];
                    else {
                        if ((null === (r = O[o]) || void 0 === r ? void 0 : r.messageId) !== i) return !1;
                        delete O[o]
                    }
                },
                CHANNEL_SELECT: function(e) {
                    I(e.channelId)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    I(e.channelId)
                }
            })
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => o,
                dp: () => l,
                X7: () => a,
                E1: () => u,
                f7: () => c,
                HE: () => s,
                SJ: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var o, l;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(o || (o = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(l || (l = {}));
            var a = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10],
                u = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10, l.OPTION_1, l.OPTION_2, l.OPTION_3, l.OPTION_4].reduce((function(e, t, n) {
                    return i(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            i.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(169376);

            function i(e) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return i(e)
            }

            function o(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = i(e);
                    if (t) {
                        var l = i(this).constructor;
                        n = Reflect.construct(r, arguments, l)
                    } else n = r.apply(this, arguments);
                    return o(this, n)
                }
            }
            const c = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = u(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
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
                };
                return n
            }(r.Z)
        },
        50433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var _ = [];

            function p() {
                _ = []
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return _.length > 0
                };
                r.getLayers = function() {
                    return _
                };
                return n
            }(r.ZP.Store);
            E.displayName = "LayerStore";
            const O = new E(i.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (_.indexOf(t) >= 0) return !1;
                    _ = s(_).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === _.length) return !1;
                    _ = _.slice(0, -1)
                },
                LAYER_POP_ALL: p,
                LOGOUT: p,
                NOTIFICATION_CLICK: p
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => B
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                l = n.n(o),
                a = n(202351),
                u = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function I(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || y(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || y(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var S = Object.freeze([]),
                v = {},
                A = {},
                P = {},
                L = {},
                R = {};

            function N(e, t) {
                var n = v[e];
                return null != n ? n[t] : null
            }
            var C = function(e) {
                switch (e.type) {
                    case d.IIU.CUSTOM_STATUS:
                        return 4;
                    case d.IIU.COMPETING:
                        return 3;
                    case d.IIU.STREAMING:
                        return 2;
                    case d.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var U = function(e) {
                return (0, c.Z)(e) ? 1 : 0
            };

            function M(e, t) {
                return function(e, t) {
                    return C(t) - C(e)
                }(e, t) || function(e, t) {
                    return U(t) - U(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function w(e) {
                delete A[e];
                delete P[e];
                delete L[e];
                if (null != v[e]) {
                    var t = T(l().sortBy(v[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        P[e] = n.activities;
                        null != n.clientStatus && (L[e] = n.clientStatus)
                    } else l().every(v[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete v[e]
                }
            }

            function D(e) {
                var t = v[e];
                if (null != t) {
                    var n = l().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        A[e] = n.status;
                        P[e] = n.activities;
                        null != n.clientStatus && (L[e] = n.clientStatus)
                    }
                }
            }

            function j(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    l = e.activities;
                if (n === s.default.getId()) return !1;
                var a = v[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = v[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[t] = {
                    status: r,
                    clientStatus: o,
                    activities: S,
                    timestamp: Date.now()
                };
                else {
                    var u = l.length > 1 ? m(l).sort(M) : l,
                        c = a[t];
                    l = null != c && i()(c.activities, u) ? c.activities : u;
                    a[t] = {
                        status: r,
                        clientStatus: o,
                        activities: l,
                        timestamp: Date.now()
                    }
                }
                delete R[n];
                w(n);
                return !0
            }

            function G(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    l = e.timestamp;
                if (n !== s.default.getId()) {
                    var a = v[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = v[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[t] = {
                        status: r,
                        clientStatus: i,
                        activities: S,
                        timestamp: Date.now()
                    };
                    else {
                        var u = o.length > 1 ? m(o).sort(M) : o;
                        a[t] = {
                            status: r,
                            clientStatus: i,
                            activities: u,
                            timestamp: l
                        }
                    }
                }
            }

            function k(e, t) {
                if (t === s.default.getId()) return !1;
                var n = v[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete v[t];
                w(t)
            }

            function Z(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(v)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        k(e, i.value)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    A[s.default.getId()] = e;
                    P[s.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = A[e]) && void 0 !== i ? i : n
                    }
                    var o, l = N(e, t);
                    return null !== (o = null == l ? void 0 : l.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = P[e]) && void 0 !== n ? n : S
                    }
                    var r = N(e, t);
                    return null == r || null == r.activities ? S : r.activities
                };
                r.getPrimaryActivity = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(e, t);
                    return n[0]
                };
                r.getAllApplicationActivities = function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, l = Object.keys(P)[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                            var a = o.value,
                                u = P[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, _ = u[Symbol.iterator](); !(c = (d = _.next()).done); c = !0) {
                                    var p = d.value;
                                    p.application_id === e && t.push({
                                        userId: a,
                                        activity: p
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == _.return || _.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                };
                r.getApplicationActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(e, (function(e) {
                        return e.application_id === t
                    }), n)
                };
                r.findActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(e, n).find(t)
                };
                r.getActivityMetadata = function(e) {
                    return R[e]
                };
                r.getUserIds = function() {
                    return Object.keys(P)
                };
                r.isMobileOnline = function(e) {
                    var t = L[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: v,
                        statuses: A,
                        activities: P,
                        activityMetadata: R,
                        clientStatuses: L
                    }
                };
                return n
            }(a.ZP.Store);
            x.displayName = "PresenceStore";
            const B = new x(u.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    v = {};
                    R = {};
                    A = E({}, r, A[r]);
                    P = E({}, r, P[r]);
                    L = E({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                l = t.clientStatus,
                                a = t.activities;
                            G({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: l,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            l = e.activities;
                        if (null != t) {
                            G({
                                guildId: d.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: l,
                                timestamp: o
                            });
                            i.add(t.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    v = t.presencesForGuilds;
                    A = t.statuses;
                    P = t.activities;
                    R = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        j({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    Z(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return k(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return j({
                            guildId: null != t ? t : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    Z(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && j({
                            guildId: d.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(e) {
                    var t = e.userId,
                        n = e.metadata;
                    R[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && j({
                            guildId: t,
                            userId: e.user_id,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.addedMembers;
                    null == n || n.forEach((function(e) {
                        null != e.presence && j({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = s.default.getId();
                    if (A[t] === e.status && P[t] === e.activities) return !1;
                    A[t] = e.status;
                    P[t] = e.activities;
                    delete R[t]
                }
            })
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => l,
                Dt: () => a,
                FG: () => u
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                a = function() {
                    return (0, o.Z)((function() {
                        return l()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(a())
                }
        },
        406493: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(795308),
                l = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const _ = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    c = e.viewBox,
                    _ = void 0 === c ? "0 0 24 24" : c,
                    p = e.foreground,
                    E = d(e, ["width", "height", "color", "viewBox", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(E)), {
                    width: n,
                    height: o,
                    viewBox: _,
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: u,
                        d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    _ = e.colorClass,
                    p = void 0 === _ ? "" : _,
                    E = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm1.672-6.391a.6.6 0 0 0-.525-.309h-2.294a.6.6 0 0 0-.524.309l-1.167 2.1a.6.6 0 0 0 0 .582l1.166 2.1a.6.6 0 0 0 .525.309h2.294a.6.6 0 0 0 .525-.309l1.166-2.1a.6.6 0 0 0 0-.582l-1.166-2.1ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        939198: (e, t, n) => {
            "use strict";
            n.d(t, {
                mT: () => i,
                Jj: () => o,
                OF: () => l,
                hV: () => r,
                WW: () => a
            });
            var r, i = 550,
                o = 350,
                l = 40;
            ! function(e) {
                e.STATIC = "STATIC";
                e.RESPONSIVE = "RESPONSIVE";
                e.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var a = 20
        },
        531441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dv: () => _,
                OV: () => E,
                NG: () => O,
                mA: () => I,
                IG: () => h,
                lB: () => T,
                G2: () => m,
                fW: () => g
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                l = (n(304548), n(87931)),
                a = (n(473708), n(800624)),
                u = n.n(a);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            var _ = {
                ROUND: u().baseShapeRound,
                ROUND_LEFT: u().baseShapeRoundLeft,
                ROUND_RIGHT: u().baseShapeRoundRight,
                SQUARE: ""
            };

            function p(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function E(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function O(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var I = function(e) {
                    var t = e.count,
                        n = e.color,
                        i = void 0 === n ? l.Z.STATUS_DANGER : n,
                        a = e.disableColor,
                        c = void 0 !== a && a,
                        I = e.shape,
                        h = void 0 === I ? _.ROUND : I,
                        T = e.className,
                        m = e.style,
                        g = d(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(T, u().numberBadge, h),
                        style: s({
                            backgroundColor: c ? void 0 : i,
                            width: E(t),
                            paddingRight: p(t)
                        }, m)
                    }, g), {
                        children: O(t)
                    }))
                },
                h = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = e.color,
                        a = void 0 === i ? l.Z.STATUS_DANGER : i,
                        c = e.shape,
                        p = void 0 === c ? _.ROUND : c,
                        E = e.disableColor,
                        O = void 0 !== E && E,
                        I = e.style,
                        h = d(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(n, u().textBadge, p),
                        style: s({
                            backgroundColor: O ? void 0 : a
                        }, I)
                    }, h), {
                        children: t
                    }))
                },
                T = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = d(e, ["text", "className"]);
                    return (0, r.jsx)(h, s({
                        className: o()(u().premiumBadge, n),
                        text: t
                    }, i))
                },
                m = function(e) {
                    var t = e.icon,
                        n = e.className,
                        i = e.color,
                        a = void 0 === i ? l.Z.STATUS_DANGER : i,
                        c = e.shape,
                        f = void 0 === c ? _.ROUND : c,
                        d = e.disableColor,
                        p = void 0 !== d && d,
                        E = e.style;
                    return (0, r.jsx)("div", {
                        className: o()(n, u().iconBadge, f),
                        style: s({
                            backgroundColor: p ? void 0 : a
                        }, E),
                        children: (0, r.jsx)(t, {
                            className: u().icon
                        })
                    })
                },
                g = function(e) {
                    var t = e.className,
                        n = e.color,
                        i = void 0 === n ? l.Z.INTERACTIVE_ACTIVE : n,
                        a = e.shape,
                        c = void 0 === a ? _.ROUND : a,
                        f = e.disableColor,
                        p = void 0 !== f && f,
                        E = e.style,
                        O = d(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", s({
                        className: o()(t, u().circleBadge, c),
                        style: s({
                            backgroundColor: p ? void 0 : i
                        }, E)
                    }, O))
                }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => z,
                WA: () => B,
                f5: () => Z,
                Gb: () => M,
                Rs: () => H,
                _2: () => Y,
                gL: () => D,
                fG: () => G
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                l = n.n(o),
                a = n(809784),
                u = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var _ = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? i(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && d(e.prototype, t);
                    n && d(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const p = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function I(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            O(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            O(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(e, t) {
                    var n, r, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                g = new u.Z("Spellchecker"),
                y = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function b(e) {
                var t;
                e = null !== (t = p[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        l = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(l.toUpperCase())
                }
                g.error("".concat(e, " is not a valid locale."))
            }
            var S = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = T(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var l = this.getAvailableLanguages(t);
                        this.languageDetector = new _(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, a = null !== (o = l[e]) && void 0 !== o ? o : p[i];
                                null != a && n.setLocale(a)
                            }
                        }));
                        y.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        y.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = y.setLocale(e)) || void 0 === t || t.then((function(t) {
                            g.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = T(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        y.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && h(e.prototype, t);
                        n && h(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                v = l().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, a.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function A(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return v(e, t.target)
                }), !0)
            }

            function P() {
                return (P = I((function() {
                    var e, t, n, r;
                    return m(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, y.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(b).filter(s.lm);
                                A(r = new S(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var L = n(120415);

            function R(e, t, n, r, i, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            R(o, r, i, l, a, "next", e)
                        }

                        function a(e) {
                            R(o, r, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var C = function(e, t) {
                var n, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function U() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, L.nI)() && U()
            }
            var w = M() ? function() {
                return P.apply(this, arguments)
            }() : null;

            function D(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(e) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(e) {
                return x.apply(this, arguments)
            }

            function x() {
                x = N((function(e) {
                    var t, n, r = arguments;
                    return C(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, w];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return x.apply(this, arguments)
            }

            function B(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = N((function(e) {
                    var t, n, r, i = arguments;
                    return C(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, w];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function H(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = N((function(e) {
                    var t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function z(e) {
                if (!U()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                i = n(652591);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function u(e, t, n) {
                var r = t.trackedActionData,
                    o = a(t, ["trackedActionData"]),
                    u = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, l({
                            status_code: e.status
                        }, u, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, l({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, u, a));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return u(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return u(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return u(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return u(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return u(r.ZP.delete, e, "del")
                }
            }
        },
        15084: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => m,
                d: () => g
            });
            var r = n(247250),
                i = n(567867),
                o = n(625091),
                l = n(444663),
                a = n(474717),
                u = n(396043),
                c = n(566706),
                s = n(255592),
                f = n(473903),
                d = n(652591),
                _ = n(149258),
                p = n(694329),
                E = n(99181),
                O = n(2590),
                I = n(493254),
                h = n(203600),
                T = n(473708);

            function m(e, t) {
                var n = f.default.getCurrentUser(),
                    r = e.getGuildId(),
                    i = _.dg(r),
                    o = [],
                    a = 0,
                    c = 0,
                    s = 0,
                    d = [],
                    m = !0,
                    g = !1,
                    y = void 0;
                try {
                    for (var b, S = t[Symbol.iterator](); !(m = (b = S.next()).done); m = !0) {
                        var v = b.value;
                        s += 1;
                        a += v.size;
                        o.push(v.size);
                        v.size > c && (c = v.size);
                        null != v.type ? d.push(v.type) : d.push("unknown")
                    }
                } catch (e) {
                    g = !0;
                    y = e
                } finally {
                    try {
                        m || null == S.return || S.return()
                    } finally {
                        if (g) throw y
                    }
                }
                if (c > i) {
                    (0, u.yw)(O.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: r,
                        user_individual_file_size_limit: i,
                        pre_compression_file_sizes: o,
                        pre_compression_aggregate_file_size: a,
                        num_attachments: s,
                        error_type: I.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: d
                    });
                    (0, l.openUploadError)({
                        title: T.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, E.BK)(n, r),
                        showPremiumUpsell: !(0, p.M5)(n, h.p9.TIER_2),
                        fileSize: c
                    })
                } else(0, l.openUploadError)({
                    title: T.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: T.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: _.Ng(_.OC())
                    })
                })
            }

            function g(e, t, n) {
                var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    f = u.requireConfirm,
                    _ = void 0 === f || f,
                    p = u.showLargeMessageDialog,
                    I = void 0 !== p && p,
                    h = u.isThumbnail,
                    g = void 0 !== h && h,
                    y = u.isClip,
                    b = void 0 !== y && y;
                if (!(e.length < 1)) {
                    var S = t.getGuildId();
                    if ((0, E.Bf)(e, S)) m(t, e);
                    else if (s.Z.getUploadCount(t.id, n) + e.length > O.dN1) {
                        (0, l.openUploadError)({
                            title: T.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                            help: T.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                limit: O.dN1
                            })
                        });
                        d.default.track(O.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                            existing_count: s.Z.getUploadCount(t.id, n),
                            new_count: e.length
                        })
                    } else {
                        t.type !== O.d4z.GUILD_VOICE && t.type !== O.d4z.GUILD_STAGE_VOICE || c.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0);
                        if (_) {
                            var v = Array.from(e).map((function(e) {
                                return {
                                    file: e,
                                    platform: a.ow.WEB,
                                    isThumbnail: g,
                                    isClip: b
                                }
                            }));
                            i.Z.addFiles({
                                files: v,
                                channelId: t.id,
                                showLargeMessageDialog: I,
                                draftType: n
                            })
                        } else o.Z.instantBatchUpload({
                            channelId: t.id,
                            files: e,
                            draftType: n,
                            isThumbnail: g,
                            isClip: b
                        })
                    }
                }
            }
        },
        99181: (e, t, n) => {
            "use strict";
            n.d(t, {
                BK: () => u,
                Bf: () => c,
                KZ: () => s
            });
            var r = n(474717),
                i = n(149258),
                o = n(694329),
                l = n(203600),
                a = n(473708);

            function u(e, t) {
                var n = i.Ng(i.dg(t));
                return o.ZP.isPremium(e, l.p9.TIER_2) ? a.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                }) : o.ZP.isPremium(e, l.p9.TIER_1) ? a.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: n
                }) : a.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                })
            }

            function c(e, t) {
                return i.nA(e, t) || i.vY(e)
            }

            function s(e) {
                return e.reduce((function(e, t) {
                    t.item.platform === r.ow.WEB && e.push(t.item.file);
                    return e
                }), [])
            }
        }
    }
]);