"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [15084], {
        625091: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(70418),
                o = n(744564),
                i = n(943469),
                a = n(720419),
                l = n(567867),
                s = n(444663),
                c = n(769915),
                u = n(598143),
                f = n(474717),
                p = n(460471),
                d = n(201891),
                y = n(720637),
                h = n(358624),
                _ = n(723029),
                O = n(28862),
                E = n(798808),
                g = n(331055),
                b = n(284610),
                m = n(255592),
                A = n(661123),
                v = n(2590),
                P = n(473708);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        L(e, t, n[t])
                    }))
                }
                return e
            }

            function w(e, t) {
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
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e) {
                var t = e.channelId,
                    n = e.uploads,
                    r = e.draftType,
                    u = e.parsedMessage,
                    f = e.options,
                    T = void 0 === f ? {} : f,
                    L = new p.Z(v.ANM.MESSAGES(t)),
                    D = {
                        content: "",
                        nonce: "",
                        channel_id: t,
                        type: v.uaV.DEFAULT,
                        sticker_ids: null == T ? void 0 : T.stickerIds
                    };
                null != u && (D.content = null == u ? void 0 : u.content);
                if (null != E.Z.getPendingReply(t)) {
                    D.type = v.uaV.REPLY;
                    D.message_reference = T.messageReference;
                    D.allowed_mentions = T.allowedMentions;
                    (0, O.A6)(t)
                }
                var S, Z = R((0, g.ZP)(D.content), 2),
                    U = Z[0],
                    M = Z[1];
                if (U) {
                    D.content = M;
                    var C;
                    D.flags = (0, A.pj)(null !== (C = D.flags) && void 0 !== C ? C : 0, v.iLy.SUPPRESS_NOTIFICATIONS)
                }
                var j, x, F = null !== (S = T.nonce) && void 0 !== S ? S : (0, h.rv)(),
                    N = (0, h.ZP)({
                        channelId: t,
                        content: D.content,
                        tts: null !== (j = null == u ? void 0 : u.tts) && void 0 !== j && j,
                        type: D.type,
                        messageReference: D.message_reference,
                        flags: D.flags,
                        nonce: F
                    });
                D.nonce = F;
                L.on("start", (function(e) {
                    x = (0, y.e5)(w(I({}, N), {
                        id: e.id
                    }));
                    o.Z.dispatch({
                        type: "UPLOAD_START",
                        channelId: t,
                        file: e,
                        message: x,
                        uploader: L
                    })
                }));
                L.on("progress", (function(e) {
                    o.Z.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: t,
                        file: e
                    })
                }));
                L.on("error", (function(e, u, f, p) {
                    o.Z.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: t,
                        file: e,
                        messageRecord: x
                    });
                    (0, _.x)({
                        fileItems: e.items,
                        failureCode: u,
                        errorMessage: null == p ? void 0 : p.msg
                    });
                    if (u !== v.evJ.EXPLICIT_CONTENT)
                        if (u !== v.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                            if (u !== v.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                                (0, s.openUploadError)({
                                    title: P.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    help: P.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                                });
                                ! function() {
                                    "" !== D.content && "" === b.Z.getDraft(t, r) && i.Z.saveDraft(t, D.content, r);
                                    0 === m.Z.getUploadCount(t, r) && l.Z.setUploads({
                                        channelId: t,
                                        uploads: n,
                                        draftType: r
                                    })
                                }()
                            }
                        } else {
                            var y = {
                                    code: u,
                                    message: null == f ? void 0 : f.message
                                },
                                h = null == x ? null : {
                                    type: c.$V.SEND,
                                    message: w(I({}, x), {
                                        channelId: t
                                    })
                                };
                            (0, s.openUploadError)({
                                title: P.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: (0, d.uF)(h, y)
                            })
                        }
                    else a.Z.sendClydeError(t, u)
                }));
                L.on("complete", (function(e) {
                    o.Z.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: t,
                        file: e,
                        aborted: L._aborted
                    })
                }));
                L.uploadFiles(n, D)
            }
            const S = {
                instantBatchUpload: function(e) {
                    var t = e.channelId,
                        n = e.files,
                        r = e.draftType,
                        o = e.isThumbnail,
                        i = void 0 !== o && o,
                        a = e.isClip,
                        l = void 0 !== a && a,
                        s = Array.from(n).map((function(e) {
                            return new u.n({
                                file: e,
                                platform: f.ow.WEB,
                                isThumbnail: i,
                                isClip: l
                            }, t)
                        }));
                    D({
                        channelId: t,
                        uploads: s,
                        draftType: r
                    })
                },
                upload: function e(t) {
                    var n = t.channelId,
                        l = t.file,
                        c = t.draftType,
                        u = t.message,
                        f = {
                            content: "",
                            tts: !1,
                            hasSpoiler: t.hasSpoiler,
                            filename: t.filename
                        };
                    if (null != u) {
                        f.content = u.content;
                        f.tts = u.tts;
                        f.channel_id = u.channel_id;
                        var d = E.Z.getPendingReply(n);
                        if (null != d) {
                            var y = a.Z.getSendMessageOptionsForReply(d);
                            f.type = v.uaV.REPLY;
                            f.message_reference = y.messageReference;
                            f.allowed_mentions = y.allowedMentions;
                            (0, O.A6)(n)
                        }
                    }
                    var h = new p.Z(v.ANM.MESSAGES(n));
                    h.on("start", (function(e) {
                        o.Z.dispatch({
                            type: "UPLOAD_START",
                            channelId: n,
                            file: e,
                            uploader: h
                        })
                    }));
                    h.on("progress", (function(e) {
                        o.Z.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: n,
                            file: e
                        })
                    }));
                    h.on("error", (function(t, p) {
                        o.Z.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: n,
                            file: t
                        });
                        (0, _.x)({
                            fileItems: t.items,
                            failureCode: p
                        });
                        if (p !== v.evJ.EXPLICIT_CONTENT) {
                            (0, s.openUploadError)({
                                title: P.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: P.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                    onClick: function() {
                                        (0, r.closeModal)(s.UPLOAD_ERROR_MODAL_KEY);
                                        e({
                                            channelId: n,
                                            file: l,
                                            draftType: c,
                                            message: u
                                        })
                                    }
                                })
                            });
                            "" !== f.content && "" === b.Z.getDraft(n, c) && i.Z.saveDraft(n, f.content, c)
                        } else a.Z.sendClydeError(n, p)
                    }));
                    h.on("complete", (function(e) {
                        o.Z.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: n,
                            file: e
                        })
                    }));
                    h.upload(l, f)
                },
                uploadFiles: D,
                cancel: function(e) {
                    o.Z.dispatch({
                        type: "UPLOAD_CANCEL_REQUEST",
                        file: e
                    });
                    if (null != e.draftContent && null != e.channelId) {
                        "" === b.Z.getDraft(e.channelId, b.d.ChannelMessage) && o.Z.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: b.d.ChannelMessage
                        })
                    }
                }
            }
        },
        460471: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(281110),
                o = n(347365),
                i = n(101566),
                a = n(474717),
                l = n(124453),
                s = n(473708);

            function c(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            c(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            c(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t, n) {
                d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = y(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(n) : o.value
                    }
                };
                return d(e, t, n || e)
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }

            function _(e, t) {
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

            function O(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var m = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                A = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && E(e, t)
                    }(n, e);
                    var t = b(n);

                    function n(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            o = arguments.length > 2 ? arguments[2] : void 0;
                        f(this, n);
                        return t.call(this, e, r, o)
                    }
                    var c = n.prototype;
                    c.uploadFiles = function(e, t) {
                        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).addFilesTo,
                            o = this,
                            a = this,
                            l = function() {
                                return d(y(n.prototype), "upload", o)
                            };
                        return u((function() {
                            var n, o, c;
                            return m(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        l().call(a, {
                                            name: s.Z.Messages.ATTACHMENT_PROCESSING
                                        }, t, e);
                                        n = new AbortController;
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 4, , 5]);
                                        a.files = e;
                                        if (a._aborted) return [2];
                                        a._handleStart((function() {
                                            return n.abort()
                                        }));
                                        return [4, a.compressAndCheckFileSize()];
                                    case 2:
                                        if (!u.sent()) return [2];
                                        a.setUploadingTextForUI();
                                        return [4, (0,
                                            i.$)(a.files, !0, a._recomputeProgress.bind(a))];
                                    case 3:
                                        u.sent();
                                        return [3, 5];
                                    case 4:
                                        o = u.sent();
                                        a._handleException(o);
                                        return [3, 5];
                                    case 5:
                                        u.trys.push([5, 7, , 8]);
                                        return [4, a._createMessage(n.signal, t, r)];
                                    case 6:
                                        return [2, u.sent()];
                                    case 7:
                                        c = u.sent();
                                        if (a._raiseEndpointErrors) throw c;
                                        a._handleException(c);
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    c._createMessage = function(e, t, n) {
                        var i = this;
                        return u((function() {
                            var s, c, u, f, p, d, y;
                            return m(this, (function(O) {
                                switch (O.label) {
                                    case 0:
                                        s = [];
                                        i.files.forEach((function(e, t) {
                                            var n = (0, l.B)(e, t);
                                            e.item.platform === a.ow.WEB && s.push(h({}, n))
                                        }));
                                        c = null != n && null != t ? i._addAttachmentsToPayload(t, n, s) : _(h({}, t), {
                                            attachments: s
                                        });
                                        u = {
                                            url: i._url,
                                            body: c,
                                            signal: e
                                        };
                                        f = "POST" === i._method ? r.ZP.post : r.ZP.patch;
                                        O.label = 1;
                                    case 1:
                                        O.trys.push([1, 3, , 4]);
                                        return [4, f(u)];
                                    case 2:
                                        p = O.sent();
                                        i._handleComplete(p.body);
                                        return [2, p.body];
                                    case 3:
                                        d = O.sent();
                                        if (i._raiseEndpointErrors) throw new o.Hx(d);
                                        i._handleError({
                                            code: null == d || null === (y = d.body) || void 0 === y ? void 0 : y.code,
                                            body: null == d ? void 0 : d.body
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    return n
                }(i.Z)
        },
        15084: (e, t, n) => {
            n.d(t, {
                G: () => b,
                d: () => m
            });
            var r = n(247250),
                o = n(567867),
                i = n(625091),
                a = n(444663),
                l = n(474717),
                s = n(396043),
                c = n(347874),
                u = n(255592),
                f = n(473903),
                p = n(652591),
                d = n(149258),
                y = n(116094),
                h = n(99181),
                _ = n(2590),
                O = n(493254),
                E = n(203600),
                g = n(473708);

            function b(e, t) {
                var n = f.default.getCurrentUser(),
                    r = e.getGuildId(),
                    o = d.dg(r),
                    i = [],
                    l = 0,
                    c = 0,
                    u = 0,
                    p = [],
                    b = !0,
                    m = !1,
                    A = void 0;
                try {
                    for (var v, P = t[Symbol.iterator](); !(b = (v = P.next()).done); b = !0) {
                        var T = v.value;
                        u += 1;
                        l += T.size;
                        i.push(T.size);
                        T.size > c && (c = T.size);
                        null != T.type ? p.push(T.type) : p.push("unknown")
                    }
                } catch (e) {
                    m = !0;
                    A = e
                } finally {
                    try {
                        b || null == P.return || P.return()
                    } finally {
                        if (m) throw A
                    }
                }
                if (c > o) {
                    (0, s.yw)(_.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: r,
                        user_individual_file_size_limit: o,
                        pre_compression_file_sizes: i,
                        pre_compression_aggregate_file_size: l,
                        num_attachments: u,
                        error_type: O.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: p
                    });
                    (0, a.openUploadError)({
                        title: g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, h.BK)(n, r),
                        showPremiumUpsell: !(0, y.M5)(n, E.p9.TIER_2),
                        fileSize: c
                    })
                } else(0, a.openUploadError)({
                    title: g.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: g.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: d.Ng(d.OC())
                    })
                })
            }

            function m(e, t, n) {
                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    f = s.requireConfirm,
                    d = void 0 === f || f,
                    y = s.showLargeMessageDialog,
                    O = void 0 !== y && y,
                    E = s.isThumbnail,
                    m = void 0 !== E && E,
                    A = s.isClip,
                    v = void 0 !== A && A;
                if (!(e.length < 1)) {
                    var P = t.getGuildId();
                    if ((0, h.Bf)(e, P)) b(t, e);
                    else if (u.Z.getUploadCount(t.id, n) + e.length > _.dN1) {
                        (0, a.openUploadError)({
                            title: g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                            help: g.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                limit: _.dN1
                            })
                        });
                        p.default.track(_.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                            existing_count: u.Z.getUploadCount(t.id, n),
                            new_count: e.length
                        })
                    } else {
                        t.type !== _.d4z.GUILD_VOICE && t.type !== _.d4z.GUILD_STAGE_VOICE || c.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0);
                        if (d) {
                            var T = Array.from(e).map((function(e) {
                                return {
                                    file: e,
                                    platform: l.ow.WEB,
                                    isThumbnail: m,
                                    isClip: v
                                }
                            }));
                            o.Z.addFiles({
                                files: T,
                                channelId: t.id,
                                showLargeMessageDialog: O,
                                draftType: n
                            })
                        } else i.Z.instantBatchUpload({
                            channelId: t.id,
                            files: e,
                            draftType: n,
                            isThumbnail: m,
                            isClip: v
                        })
                    }
                }
            }
        },
        99181: (e, t, n) => {
            n.d(t, {
                BK: () => s,
                Bf: () => c,
                KZ: () => u
            });
            var r = n(474717),
                o = n(149258),
                i = n(116094),
                a = n(203600),
                l = n(473708);

            function s(e, t) {
                var n = o.Ng(o.dg(t));
                return i.ZP.isPremium(e, a.p9.TIER_2) ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                }) : i.ZP.isPremium(e, a.p9.TIER_1) ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: n
                }) : l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                })
            }

            function c(e, t) {
                return o.nA(e, t) || o.vY(e)
            }

            function u(e) {
                return e.reduce((function(e, t) {
                    t.item.platform === r.ow.WEB && e.push(t.item.file);
                    return e
                }), [])
            }
        }
    }
]);