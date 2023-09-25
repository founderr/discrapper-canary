"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [55571], {
        470661: e => {
            e.exports = function(e) {
                var i, o;
                if ((e = String(e).toLowerCase()).length < 3) return e;
                if (e.charCodeAt(0) === t) {
                    i = !0;
                    e = "Y" + e.substr(1)
                }
                E.test(e) ? e = e.substr(0, e.length - 2) : b.test(e) && (e = e.substr(0, e.length - 1));
                if (o = v.exec(e)) u.test(o[1]) && (e = e.substr(0, e.length - 1));
                else if ((o = y.exec(e)) && c.test(o[1])) {
                    e = o[1];
                    m.test(e) ? e += "e" : g.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")
                }(o = h.exec(e)) && c.test(o[1]) && (e = o[1] + "i");
                (o = I.exec(e)) && u.test(o[1]) && (e = o[1] + n[o[2]]);
                (o = O.exec(e)) && u.test(o[1]) && (e = o[1] + r[o[2]]);
                (o = A.exec(e)) ? l.test(o[1]) && (e = o[1]): (o = _.exec(e)) && l.test(o[1]) && (e = o[1]);
                (o = p.exec(e)) && (l.test(o[1]) || s.test(o[1]) && !f.test(o[1])) && (e = o[1]);
                d.test(e) && l.test(e) && (e = e.substr(0, e.length - 1));
                i && (e = "y" + e.substr(1));
                return e
            };
            var t = "y".charCodeAt(0),
                n = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                r = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                i = "[aeiouy]",
                o = "([^aeiou][^aeiouy]*)",
                a = "([aeiouy][aeiou]*)",
                u = new RegExp("^([^aeiou][^aeiouy]*)?" + a + o),
                s = new RegExp("^([^aeiou][^aeiouy]*)?" + a + o + a + "?$"),
                l = new RegExp("^([^aeiou][^aeiouy]*)?(" + a + o + "){2,}"),
                c = new RegExp("^([^aeiou][^aeiouy]*)?" + i),
                f = new RegExp("^" + o + i + "[^aeiouwxy]$"),
                d = /ll$/,
                p = /^(.+?)e$/,
                h = /^(.+?)y$/,
                _ = /^(.+?(s|t))(ion)$/,
                y = /^(.+?)(ed|ing)$/,
                m = /(at|bl|iz)$/,
                v = /^(.+?)eed$/,
                b = /^.+?[^s]s$/,
                E = /^.+?(ss|i)es$/,
                g = /([^aeiouylsz])\1$/,
                I = new RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                A = new RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        625091: (e, t, n) => {
            n.d(t, {
                Z: () => D
            });
            var r = n(882723),
                i = n(744564),
                o = n(943469),
                a = n(720419),
                u = n(567867),
                s = n(444663),
                l = n(769915),
                c = n(598143),
                f = n(474717),
                d = n(460471),
                p = n(201891),
                h = n(649536),
                _ = n(358624),
                y = n(723029),
                m = n(28862),
                v = n(798808),
                b = n(331055),
                E = n(284610),
                g = n(255592),
                I = n(661123),
                O = n(2590),
                A = n(473708);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function w(e) {
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
            }

            function R(e, t) {
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

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
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

            function P(e) {
                var t = e.channelId,
                    n = e.uploads,
                    r = e.draftType,
                    c = e.parsedMessage,
                    f = e.options,
                    T = void 0 === f ? {} : f,
                    S = new d.Z(O.ANM.MESSAGES(t)),
                    P = {
                        content: "",
                        nonce: "",
                        channel_id: t,
                        type: O.uaV.DEFAULT,
                        sticker_ids: null == T ? void 0 : T.stickerIds
                    };
                null != c && (P.content = null == c ? void 0 : c.content);
                if (null != v.Z.getPendingReply(t)) {
                    P.type = O.uaV.REPLY;
                    P.message_reference = T.messageReference;
                    P.allowed_mentions = T.allowedMentions;
                    (0, m.A6)(t)
                }
                var D, L = M((0, b.ZP)(P.content), 2),
                    F = L[0],
                    C = L[1];
                if (F) {
                    P.content = C;
                    var U;
                    P.flags = (0, I.pj)(null !== (U = P.flags) && void 0 !== U ? U : 0, O.iLy.SUPPRESS_NOTIFICATIONS)
                }
                var Z, N, j = null !== (D = T.nonce) && void 0 !== D ? D : (0, _.rv)(),
                    x = (0, _.ZP)({
                        channelId: t,
                        content: P.content,
                        tts: null !== (Z = null == c ? void 0 : c.tts) && void 0 !== Z && Z,
                        type: P.type,
                        messageReference: P.message_reference,
                        flags: P.flags,
                        nonce: j
                    });
                P.nonce = j;
                S.on("start", (function(e) {
                    N = (0, h.e5)(R(w({}, x), {
                        id: e.id
                    }));
                    i.Z.dispatch({
                        type: "UPLOAD_START",
                        channelId: t,
                        file: e,
                        message: N,
                        uploader: S
                    })
                }));
                S.on("progress", (function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: t,
                        file: e
                    })
                }));
                S.on("error", (function(e, c, f, d) {
                    i.Z.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: t,
                        file: e,
                        messageRecord: N
                    });
                    (0, y.x)({
                        fileItems: e.items,
                        failureCode: c,
                        errorMessage: null == d ? void 0 : d.msg
                    });
                    if (c !== O.evJ.EXPLICIT_CONTENT)
                        if (c !== O.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                            if (c !== O.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                                (0, s.openUploadError)({
                                    title: A.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    help: A.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                                });
                                ! function() {
                                    "" !== P.content && "" === E.Z.getDraft(t, r) && o.Z.saveDraft(t, P.content, r);
                                    0 === g.Z.getUploadCount(t, r) && u.Z.setUploads({
                                        channelId: t,
                                        uploads: n,
                                        draftType: r
                                    })
                                }()
                            }
                        } else {
                            var h = {
                                    code: c,
                                    message: null == f ? void 0 : f.message
                                },
                                _ = null == N ? null : {
                                    type: l.$V.SEND,
                                    message: R(w({}, N), {
                                        channelId: t
                                    })
                                };
                            (0, s.openUploadError)({
                                title: A.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: (0, p.uF)(_, h)
                            })
                        }
                    else a.Z.sendClydeError(t, c)
                }));
                S.on("complete", (function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: t,
                        file: e,
                        aborted: S._aborted
                    })
                }));
                S.uploadFiles(n, P)
            }
            const D = {
                instantBatchUpload: function(e) {
                    var t = e.channelId,
                        n = e.files,
                        r = e.draftType,
                        i = e.isThumbnail,
                        o = void 0 !== i && i,
                        a = e.isClip,
                        u = void 0 !== a && a,
                        s = Array.from(n).map((function(e) {
                            return new c.n({
                                file: e,
                                platform: f.ow.WEB,
                                isThumbnail: o,
                                isClip: u
                            }, t)
                        }));
                    P({
                        channelId: t,
                        uploads: s,
                        draftType: r
                    })
                },
                upload: function e(t) {
                    var n = t.channelId,
                        u = t.file,
                        l = t.draftType,
                        c = t.message,
                        f = {
                            content: "",
                            tts: !1,
                            hasSpoiler: t.hasSpoiler,
                            filename: t.filename
                        };
                    if (null != c) {
                        f.content = c.content;
                        f.tts = c.tts;
                        f.channel_id = c.channel_id;
                        var p = v.Z.getPendingReply(n);
                        if (null != p) {
                            var h = a.Z.getSendMessageOptionsForReply(p);
                            f.type = O.uaV.REPLY;
                            f.message_reference = h.messageReference;
                            f.allowed_mentions = h.allowedMentions;
                            (0, m.A6)(n)
                        }
                    }
                    var _ = new d.Z(O.ANM.MESSAGES(n));
                    _.on("start", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_START",
                            channelId: n,
                            file: e,
                            uploader: _
                        })
                    }));
                    _.on("progress", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: n,
                            file: e
                        })
                    }));
                    _.on("error", (function(t, d) {
                        i.Z.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: n,
                            file: t
                        });
                        (0, y.x)({
                            fileItems: t.items,
                            failureCode: d
                        });
                        if (d !== O.evJ.EXPLICIT_CONTENT) {
                            (0, s.openUploadError)({
                                title: A.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: A.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                    onClick: function() {
                                        (0, r.closeModal)(s.UPLOAD_ERROR_MODAL_KEY);
                                        e({
                                            channelId: n,
                                            file: u,
                                            draftType: l,
                                            message: c
                                        })
                                    }
                                })
                            });
                            "" !== f.content && "" === E.Z.getDraft(n, l) && o.Z.saveDraft(n, f.content, l)
                        } else a.Z.sendClydeError(n, d)
                    }));
                    _.on("complete", (function(e) {
                        i.Z.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: n,
                            file: e
                        })
                    }));
                    _.upload(u, f)
                },
                uploadFiles: P,
                cancel: function(e) {
                    i.Z.dispatch({
                        type: "UPLOAD_CANCEL_REQUEST",
                        file: e
                    });
                    if (null != e.draftContent && null != e.channelId) {
                        "" === E.Z.getDraft(e.channelId, E.d.ChannelMessage) && i.Z.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: E.d.ChannelMessage
                        })
                    }
                }
            }
        },
        460471: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(281110),
                i = n(347365),
                o = n(101566),
                a = n(474717),
                u = n(124453),
                s = n(473708);

            function l(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            l(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            l(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
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

            function p(e, t, n) {
                p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                };
                return p(e, t, n || e)
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function _(e) {
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

            function y(e, t) {
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

            function m(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    return m(this, n)
                }
            }
            var g = function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
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
                            }([o, u])
                        }
                    }
                },
                I = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && v(e, t)
                    }(n, e);
                    var t = E(n);

                    function n(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        f(this, n);
                        return t.call(this, e, r, i)
                    }
                    var l = n.prototype;
                    l.uploadFiles = function(e, t) {
                        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).addFilesTo,
                            i = this,
                            a = this,
                            u = function() {
                                return p(h(n.prototype), "upload", i)
                            };
                        return c((function() {
                            var n, i, l;
                            return g(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        u().call(a, {
                                            name: s.Z.Messages.ATTACHMENT_PROCESSING
                                        }, t, e);
                                        n = new AbortController;
                                        c.label = 1;
                                    case 1:
                                        c.trys.push([1, 4, , 5]);
                                        a.files = e;
                                        if (a._aborted) return [2];
                                        a._handleStart((function() {
                                            return n.abort()
                                        }));
                                        return [4, a.compressAndCheckFileSize()];
                                    case 2:
                                        if (!c.sent()) return [2];
                                        a.setUploadingTextForUI();
                                        return [4, (0, o.$)(a.files, !0, a._recomputeProgress.bind(a))];
                                    case 3:
                                        c.sent();
                                        return [3, 5];
                                    case 4:
                                        i = c.sent();
                                        a._handleException(i);
                                        return [3, 5];
                                    case 5:
                                        c.trys.push([5, 7, , 8]);
                                        return [4, a._createMessage(n.signal, t, r)];
                                    case 6:
                                        return [2, c.sent()];
                                    case 7:
                                        l = c.sent();
                                        if (a._raiseEndpointErrors) throw l;
                                        a._handleException(l);
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    l._createMessage = function(e, t, n) {
                        var o = this;
                        return c((function() {
                            var s, l, c, f, d, p, h;
                            return g(this, (function(m) {
                                switch (m.label) {
                                    case 0:
                                        s = [];
                                        o.files.forEach((function(e, t) {
                                            var n = (0, u.B)(e, t);
                                            e.item.platform === a.ow.WEB && s.push(_({}, n))
                                        }));
                                        l = null != n && null != t ? o._addAttachmentsToPayload(t, n, s) : y(_({}, t), {
                                            attachments: s
                                        });
                                        c = {
                                            url: o._url,
                                            body: l,
                                            signal: e
                                        };
                                        f = "POST" === o._method ? r.ZP.post : r.ZP.patch;
                                        m.label = 1;
                                    case 1:
                                        m.trys.push([1, 3, , 4]);
                                        return [4, f(c)];
                                    case 2:
                                        d = m.sent();
                                        o._handleComplete(d.body);
                                        return [2, d.body];
                                    case 3:
                                        p = m.sent();
                                        if (o._raiseEndpointErrors) throw new i.Hx(p);
                                        o._handleError({
                                            code: null == p || null === (h = p.body) || void 0 === h ? void 0 : h.code,
                                            body: null == p ? void 0 : p.body
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
        372518: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(281110),
                i = n(744564),
                o = n(105783),
                a = n(671293),
                u = n(129586),
                s = n(858519),
                l = n(980204),
                c = n(854602),
                f = n(2590),
                d = n(473708);

            function p(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            p(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            p(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var _ = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function y(e, t, n) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = h((function(e, t, n) {
                    var r, i;
                    return _(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                a.trys.push([0, 2, , 3]);
                                return [4, e()];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                r = a.sent();
                                (null === (i = r.body) || void 0 === i ? void 0 : i.code) === f.evJ.NON_MODERATED_TAG_REQUIRED && o.Z.show({
                                    title: t,
                                    body: n
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            const v = {
                resort: function(e) {
                    i.Z.dispatch({
                        type: "RESORT_THREADS",
                        channelId: e
                    })
                },
                createForumTag: function(e, t) {
                    return r.ZP.post({
                        url: f.ANM.FORUM_TAGS(t),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                            moderated: e.moderated
                        }
                    })
                },
                updateForumTag: function(e, t) {
                    var n = r.ZP.put({
                        url: f.ANM.FORUM_TAG(t, e.id),
                        body: {
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: null == e.emojiId ? e.emojiName : void 0,
                            moderated: e.moderated
                        }
                    });
                    y((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_EDIT_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                deleteForumTag: function(e, t) {
                    var n = r.ZP.delete({
                        url: f.ANM.FORUM_TAG(e, t)
                    });
                    y((function() {
                        return n
                    }), d.Z.Messages.FORUM_TAG_REMOVE_ERROR, d.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
                },
                updateForumPostTags: function(e, t) {
                    return h((function() {
                        return _(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, a.Z.unarchiveThreadIfNecessary(e)];
                                case 1:
                                    n.sent();
                                    return [2, r.ZP.patch({
                                        url: f.ANM.CHANNEL(e),
                                        body: {
                                            applied_tags: t
                                        }
                                    })]
                            }
                        }))
                    }))()
                },
                hideAdminOnboarding: function(e, t) {
                    i.Z.dispatch({
                        type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                        channelId: e,
                        hide: t
                    })
                },
                markPostAsSeen: function(e, t, n) {
                    (0, u.a8)((0, l.UP)(e), t, n)
                },
                markPostAsUnseen: function(e, t, n) {
                    (0, u.FL)((0, l.UP)(e), t, n)
                },
                flushSeenItems: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.cs.IMMEDIATE_WITH_COOLDOWN;
                    (0, u.rS)((0, l.UP)(e), t)
                },
                searchForumPosts: function(e, t, n, r) {
                    return h((function() {
                        var o;
                        return _(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_START",
                                        channelId: t
                                    });
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, , 4]);
                                    return [4, a.Z.searchThreads(e, t, n, r)];
                                case 2:
                                    o = u.sent();
                                    (0, c.Js)({
                                        guildId: e,
                                        channelId: t,
                                        numSearchResults: o.length
                                    });
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_SUCCESS",
                                        channelId: t,
                                        threadIds: o
                                    });
                                    return [3, 4];
                                case 3:
                                    u.sent();
                                    i.Z.dispatch({
                                        type: "FORUM_SEARCH_FAILURE",
                                        channelId: t
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                },
                updateForumSearchQuery: function(e, t) {
                    i.Z.dispatch({
                        type: "FORUM_SEARCH_QUERY_UPDATED",
                        channelId: e,
                        query: t
                    })
                },
                clearForumSearch: function(e) {
                    i.Z.dispatch({
                        type: "FORUM_SEARCH_CLEAR",
                        channelId: e
                    })
                }
            }
        },
        234798: (e, t, n) => {
            n.d(t, {
                cl: () => O,
                ZK: () => A,
                EB: () => S
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                a = n(281110),
                u = n(744564),
                s = n(61209),
                l = n(866893),
                c = n(779354),
                f = n(572615),
                d = n(926578),
                p = n(2590);

            function h(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            h(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            h(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var m = function(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
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
                            }([o, u])
                        }
                    }
                },
                v = function() {
                    function e(t) {
                        y(this, e);
                        this._set = {};
                        this._defaultValueFunc = t
                    }
                    var t = e.prototype;
                    t.get = function(e) {
                        this._set.hasOwnProperty(e) || (this._set[e] = this._defaultValueFunc());
                        return this._set[e]
                    };
                    t.delete = function(e) {
                        delete this._set[e]
                    };
                    t.hasNext = function() {
                        return !i().isEmpty(this._set)
                    };
                    t.next = function() {
                        return Object.keys(this._set)[0]
                    };
                    return e
                }(),
                b = new(function() {
                    function e() {
                        y(this, e);
                        this.requested = new v((function() {
                            return new Set
                        }))
                    }
                    var t = e.prototype;
                    t.request = function(e, t) {
                        this.requested.get(e).add(t)
                    };
                    t.hasRequested = function(e, t) {
                        return this.requested.get(e).has(t)
                    };
                    t.finishRequesting = function(e, t) {
                        var n = this.requested.get(e);
                        t.forEach((function(e) {
                            return n.delete(e)
                        }));
                        b.compact(e)
                    };
                    t.getRequested = function(e) {
                        return this.requested.get(e)
                    };
                    t.getNextBatch = function(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    };
                    t.hasNext = function() {
                        return this.requested.hasNext()
                    };
                    t.next = function() {
                        return this.requested.next()
                    };
                    t.compact = function(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    };
                    return e
                }()),
                E = null;

            function g(e, t) {
                if ((0, c.r)(e)) {
                    var n = d.Z.getMessageState(t),
                        r = n.loaded,
                        i = n.message;
                    return !r && null == i
                }
                return !1
            }

            function I(e, t) {
                return !e && null == t
            }

            function O(e) {
                var t = (0, o.cj)([f.Z], (function() {
                        return f.Z.getMessage(e.id)
                    })),
                    n = t.loaded,
                    r = t.firstMessage,
                    i = (0, o.e7)([s.Z], (function() {
                        return s.Z.getChannel(e.parent_id)
                    }));
                null != i && I(n, r) && w(i, e.id);
                return {
                    loaded: n,
                    firstMessage: r
                }
            }

            function A(e, t) {
                var n = (0, o.cj)([d.Z], (function() {
                        return d.Z.getMessageState(t.id)
                    })),
                    r = n.loaded,
                    i = n.message;
                null != e && g(t.guild_id, t.id) && w(e, t.id);
                return {
                    loaded: r,
                    mostRecentMessage: i
                }
            }

            function T(e, t) {
                var n = !1;
                t.forEach((function(t) {
                    var r = f.Z.getMessage(t);
                    if (I(r.loaded, r.firstMessage) || g(e.guild_id, t)) {
                        b.request(e.id, t);
                        n = !0
                    }
                }));
                n && null == E && (E = setTimeout(R, 0))
            }

            function S(e) {
                T(e, (0, l.U)(e.id).slice(0, 10))
            }

            function w(e, t) {
                if (!b.hasRequested(e.id, t)) {
                    var n = (0, l.U)(e.id),
                        r = n.findIndex((function(e) {
                            return e === t
                        })),
                        i = n.slice(r, r + 5).filter((function(t) {
                            return !b.hasRequested(e.id, t)
                        }));
                    T(e, i)
                }
            }

            function R() {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = _((function() {
                    return m(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                e.trys.push([0, , 3, 4]);
                                return b.hasNext() ? [4, P(b.next())] : [3, 2];
                            case 1:
                                e.sent();
                                return [3, 0];
                            case 2:
                                return [3, 4];
                            case 3:
                                E = null;
                                return [7];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = _((function(e) {
                    var t, n, r, i, o;
                    return m(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                t = b.getNextBatch(e, 10);
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, 4, 5]);
                                return 0 === t.length || null == (r = null === (n = s.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id) ? [2] : [4, a.ZP.post({
                                    url: p.ANM.FORUM_POSTS(e),
                                    body: {
                                        thread_ids: t
                                    }
                                })];
                            case 2:
                                i = l.sent(), o = i.body.threads;
                                u.Z.dispatch({
                                    type: "LOAD_FORUM_POSTS",
                                    guildId: r,
                                    threads: o
                                });
                                return [3, 5];
                            case 3:
                                l.sent();
                                return [3, 5];
                            case 4:
                                b.finishRequesting(e, t);
                                return [7];
                            case 5:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        926578: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(202351),
                i = n(744564),
                o = n(649536),
                a = n(61209),
                u = n(473903),
                s = n(72580),
                l = n(102921);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
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

            function h(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var y = function(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var v = {};

            function b(e) {
                var t, n = a.Z.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                var r = v[n.id];
                return l.Z.compare(null == e ? void 0 : e.id, null == r || null === (t = r.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function E(e, t) {
                var n = null == t ? null : (0, o.e5)(t);
                v[e] = {
                    loaded: !0,
                    message: n
                };
                return !0
            }

            function g(e, t) {
                var n = I(e),
                    r = O(e);
                if (null == n || null == r) return !1;
                v[e] = p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            f(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    message: (0, o.wi)(r, t)
                });
                return !0
            }

            function I(e) {
                return v[e]
            }

            function O(e) {
                var t;
                return null === (t = I(e)) || void 0 === t ? void 0 : t.message
            }

            function A(e) {
                var t = e.threads,
                    n = e.mostRecentMessages;
                t.forEach((function(e) {
                    return E(e.id, null)
                }));
                null == n || n.filter(s.lm).forEach((function(e) {
                    E(e.channel_id, e)
                }))
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
                    t && _(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z, u.default)
                };
                r.getMessageState = function(e) {
                    e in v || (v[e] = {
                        loaded: !1,
                        message: null
                    });
                    return v[e]
                };
                return n
            }(r.ZP.Store);
            T.displayName = "ForumPostRecentMessageStore";
            const S = new T(i.Z, {
                CONNECTION_OPEN: function() {
                    v = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification) return !1;
                    if (!b(e.message)) return !1;
                    e.message.channel_id === e.message.id ? E(e.message.channel_id, null) : E(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!b(e.message)) return !1;
                    if (e.message.channel_id === e.message.id) return !1;
                    g(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        var n = O(e);
                        if ((null == n ? void 0 : n.id) === t) {
                            delete v[e];
                            return !0
                        }
                        return !1
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    var t = e.threads;
                    for (var n in t) E(n, t[n].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: A,
                LOAD_THREADS_SUCCESS: A
            })
        },
        980204: (e, t, n) => {
            n.d(t, {
                UP: () => d,
                rj: () => p,
                Ct: () => h,
                ZP: () => _
            });
            var r = n(129586),
                i = n(858519),
                o = n(854602),
                a = n(734901);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function s(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
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
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    return s(this, n)
                }
            }

            function d(e) {
                return "".concat(i.AT.FORUM_CHANNEL, "_").concat(e)
            }

            function p(e, t, n) {
                (0, r.a8)(d(e), t, n)
            }

            function h(e, t, n) {
                (0, r.FL)(d(e), t, n)
            }
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
                    t && l(e, t)
                }(n, e);
                var t = f(n);

                function n(e) {
                    var r, i = e.guildId,
                        u = e.channelId,
                        s = e.windowId,
                        l = e.isPaused;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    (r = t.call(this, {
                        windowId: s,
                        isPaused: l,
                        id: d(u)
                    })).createFlushSeenItemsFunction = function(e) {
                        var t = r.trackedFeedItems,
                            n = r.channelId,
                            i = {
                                guildId: r.guildId,
                                channelId: n,
                                sessionId: r.sessionId,
                                trackedFeedItems: t,
                                isForcedFlush: null != e
                            };
                        return function() {
                            return function(e) {
                                var t = e.guildId,
                                    n = e.channelId,
                                    r = e.sessionId,
                                    i = e.trackedFeedItems,
                                    a = e.isForcedFlush,
                                    u = [],
                                    s = [],
                                    l = !0,
                                    c = !1,
                                    f = void 0;
                                try {
                                    for (var d, p = Object.keys(i)[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                                        var h = d.value,
                                            _ = i[h].computeSeenTimeDestructive(a);
                                        if (_ > 0) {
                                            u.push(h);
                                            s.push(_)
                                        }
                                    }
                                } catch (e) {
                                    c = !0;
                                    f = e
                                } finally {
                                    try {
                                        l || null == p.return || p.return()
                                    } finally {
                                        if (c) throw f
                                    }
                                }
                                0 !== u.length && (0, o.qs)({
                                    guildId: t,
                                    channelId: n,
                                    sessionId: r,
                                    postIds: u,
                                    additionalTimes: s
                                })
                            }(i)
                        }
                    };
                    r.guildId = i;
                    r.channelId = u;
                    r.sessionId = (0, a.WW)(u);
                    return r
                }
                return n
            }(i.zQ)
        },
        117428: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => D
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(882723),
                u = n(105783),
                s = n(567867),
                l = n(460471),
                c = n(694755),
                f = n(61209),
                d = n(284610),
                p = n(567403),
                h = n(352980),
                _ = n(443812),
                y = n(149258),
                m = n(15084),
                v = n(99181),
                b = n(854602),
                E = n(607544),
                g = n(503871),
                I = n(2590),
                O = n(520453),
                A = n(473708),
                T = n(165376),
                S = n.n(T);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || P(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return w(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || P(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e, t) {
                if (e) {
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                }
            }

            function D(e) {
                var t, n = e.threadId,
                    T = e.attachments,
                    w = e.sendMessage,
                    P = e.transitionState,
                    D = e.onClose,
                    L = (0, _.Dt)(),
                    F = (0, o.e7)([f.Z], (function() {
                        return f.Z.getChannel(n)
                    }), [n]),
                    C = (0, o.e7)([p.Z], (function() {
                        return p.Z.getGuild(null == F ? void 0 : F.getGuildId())
                    }), [F]),
                    U = (0, o.e7)([f.Z], (function() {
                        return f.Z.getChannel(null == F ? void 0 : F.parent_id)
                    }), [F]),
                    Z = null === (t = T[0]) || void 0 === t ? void 0 : t.item,
                    N = R(i.useState(null), 2),
                    j = N[0],
                    x = N[1];
                i.useEffect((function() {
                    null != Z && (0, c.Fq)(Z.file, (function(e, t) {
                        return x(e)
                    }), O.dG)
                }), [Z]);
                var k = null != Z && null != j ? {
                        src: j,
                        width: E.TJ,
                        height: E.Lp,
                        spoiler: T[0].spoiler,
                        alt: T[0].description
                    } : null,
                    G = R(i.useState(!1), 2),
                    B = G[0],
                    H = G[1],
                    z = i.useCallback((function() {
                        (0, b.xI)({
                            added: !1
                        });
                        w();
                        D()
                    }), [w, D]),
                    W = i.useCallback((function() {
                        if (null != F && null != C) {
                            (0, b.xI)({
                                added: !0
                            });
                            ! function(e) {
                                var t = e.thread,
                                    n = e.attachments,
                                    r = e.setIsUploading,
                                    i = e.guild,
                                    o = e.onClose,
                                    a = new l.Z(I.ANM.MESSAGE(t.id, t.id), "PATCH");
                                a.on("start", (function() {
                                    r(!0)
                                }));
                                a.on("progress", (function(e) {
                                    var u = (0, y.dg)(i.id);
                                    if (e.currentSize > u) {
                                        a.cancel();
                                        r(!1);
                                        o();
                                        (0, m.G)(t, (0, v.KZ)(n))
                                    }
                                }));
                                a.on("error", (function(e, t) {
                                    r(!1);
                                    if (t === I.evJ.EXPLICIT_CONTENT) {
                                        o();
                                        u.Z.show({
                                            title: A.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                            body: A.Z.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                                name: i.toString()
                                            })
                                        })
                                    }
                                }));
                                a.on("complete", (function() {
                                    r(!1);
                                    o();
                                    s.Z.clearAll(t.id, d.d.ChannelMessage)
                                }));
                                var c = h.Z.getMessages(t.id).get(t.id),
                                    f = null != c ? c.attachments : [];
                                a.uploadFiles(n, {
                                    attachments: M(f)
                                }, {
                                    addFilesTo: "attachments"
                                })
                            }({
                                thread: F,
                                attachments: T,
                                setIsUploading: H,
                                guild: C,
                                onClose: D
                            })
                        }
                    }), [F, T, H, C, D]);
                return null == U ? null : (0, r.jsxs)(a.ModalRoot, {
                    transitionState: P,
                    size: a.ModalSize.SMALL,
                    className: S().modalRoot,
                    "aria-labelledby": L,
                    children: [(0, r.jsxs)(a.ModalContent, {
                        className: S().modal,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: S().header,
                            id: L,
                            children: A.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: S().body,
                            children: A.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
                        }), (0, r.jsx)("div", {
                            className: S().forumPost,
                            children: (0, r.jsx)(g.oL, {
                                createStore: function() {
                                    return (0, g.NU)(U)
                                },
                                children: (0, r.jsx)(E.ZP, {
                                    threadId: n,
                                    goToThread: O.dG,
                                    overrideMedia: k
                                })
                            })
                        })]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        className: S().modalFooter,
                        children: [(0, r.jsx)(a.Button, {
                            look: a.Button.Looks.BLANK,
                            className: S().cancelButton,
                            disabled: B,
                            onClick: D,
                            children: A.Z.Messages.CANCEL
                        }), (0, r.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            className: S().dontAddButton,
                            disabled: B,
                            onClick: z,
                            children: A.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
                        }), (0, r.jsx)(a.Button, {
                            color: a.Button.Colors.BRAND,
                            className: S().button,
                            submitting: B,
                            onClick: W,
                            autoFocus: !0,
                            children: A.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
                        })]
                    })]
                })
            }
        },
        302685: (e, t, n) => {
            n.d(t, {
                E: () => _,
                H: () => b
            });
            var r = n(5387),
                i = n.n(r),
                o = n(281110),
                a = n(744564),
                u = n(327499),
                s = n(664731),
                l = n(2590);

            function c(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            c(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            c(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var d = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };

            function p(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = f((function(e) {
                    var t, n;
                    return d(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                                    guildId: e
                                });
                                return [4, o.ZP.get({
                                    url: l.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
                                })];
                            case 1:
                                t = r.sent();
                                n = t.body;
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                                    guildId: e,
                                    roleMemberCount: n
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                                    guildId: e
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function _(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = f((function(e) {
                    return d(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return s.Z.shouldFetch(e) ? [4, p(e)] : [3, 2];
                            case 1:
                                t.sent();
                                t.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var m = new(i())({
                maxAge: 1e4
            });

            function v(e, t) {
                return o.ZP.get({
                    url: l.ANM.GUILD_ROLE_MEMBER_IDS(e, t)
                }).then((function(t) {
                    u.Z.requestMembersById(e, t.body, !1);
                    return t.body.length
                }))
            }

            function b(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = "".concat(e, "-").concat(t);
                if (!n || null == m.get(r)) {
                    m.set(r, !0);
                    return v(e, t)
                }
                return Promise.resolve(null)
            }
        },
        664731: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
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
            var f = {},
                d = {};
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = c(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getRoleMemberCount = function(e) {
                    return null != e ? f[e] : null
                };
                r.shouldFetch = function(e) {
                    if (null == e) return !1;
                    var t = d[e];
                    return null == t || Date.now() - t > 12e4
                };
                return n
            }(r.ZP.Store);
            p.displayName = "GuildRoleMemberCountStore";
            const h = new p(i.Z, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.roleMemberCount;
                    f[t] = n;
                    d[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.count,
                        i = f[t];
                    if (null == i) return !1;
                    i[n] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.added,
                        i = f[t];
                    if (null == i) return !1;
                    if (null == i[n]) return !1;
                    var o = Object.keys(r).length;
                    i[n] += o
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = f[t];
                    if (null == r) return !1;
                    if (null == r[n]) return !1;
                    r[n] = r[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = f[t];
                    if (null == r) return !1;
                    if (null == r[n]) return !1;
                    r[n] = Math.max(r[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    var t = e.guildId,
                        n = e.role;
                    null == f[t] && (f[t] = {});
                    f[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    delete f[t.id];
                    delete d[t.id]
                }
            })
        },
        129586: (e, t, n) => {
            n.d(t, {
                a8: () => i,
                FL: () => o,
                rS: () => a
            });
            var r = n(744564);

            function i(e, t, n) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function o(e, t, n) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        858519: (e, t, n) => {
            n.d(t, {
                AT: () => l,
                cs: () => c,
                zQ: () => p
            });
            var r = n(441143),
                i = n.n(r),
                o = n(744564);

            function a(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            a(o, r, i, u, s, "next", e)
                        }

                        function s(e) {
                            a(o, r, i, u, s, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var l, c, f = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
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
                        }([o, u])
                    }
                }
            };
            ! function(e) {
                e.GUILD_HOME = "guild_home";
                e.FORUM_CHANNEL = "forum_channel"
            }(l || (l = {}));
            ! function(e) {
                e[e.IMMEDIATE = 0] = "IMMEDIATE";
                e[e.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN";
                e[e.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY"
            }(c || (c = {}));
            var d = function() {
                    function e() {
                        s(this, e);
                        this.seenIntervals = []
                    }
                    var t = e.prototype;
                    t.maybeMarkSeen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        if (null != t && null == t.endTimeMillis) return !1;
                        this.seenIntervals.push({
                            startTimeMillis: e
                        });
                        return !0
                    };
                    t.maybeMarkUnseen = function(e) {
                        var t = this.seenIntervals[this.seenIntervals.length - 1];
                        if (null == t || null != t.endTimeMillis) return !1;
                        t.endTimeMillis = e;
                        return !0
                    };
                    t.isVisible = function() {
                        var e = this.seenIntervals[this.seenIntervals.length - 1];
                        return null != (null == e ? void 0 : e.startTimeMillis) && null == (null == e ? void 0 : e.endTimeMillis)
                    };
                    t.computeSeenTimeDestructive = function(e) {
                        var t = 0,
                            n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var u, s = this.seenIntervals[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                                var l = u.value;
                                if (null == l.endTimeMillis)
                                    if (e) {
                                        var c = Date.now();
                                        t += c - l.startTimeMillis;
                                        n.push({
                                            startTimeMillis: c
                                        })
                                    } else n.push(l);
                                else t += l.endTimeMillis - l.startTimeMillis
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        i()(n.length < 2, "there should only be a single left over data");
                        this.seenIntervals = n;
                        return Math.round(t)
                    };
                    return e
                }(),
                p = function() {
                    function e(t) {
                        var n = t.id,
                            r = t.windowId,
                            i = t.isPaused,
                            a = this;
                        s(this, e);
                        this.initialize = function() {
                            var e, t;
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_SEEN", a.handleFeedItemSeen);
                            o.Z.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", a.handleFeedItemUnseen);
                            o.Z.subscribe("ANALYTICS_FEED_FLUSH", a.handleFeedItemFlush);
                            o.Z.subscribe("APP_STATE_UPDATE", a.handleAppStateUpdate);
                            o.Z.subscribe("DRAWER_OPEN", a.handleDrawerOpen);
                            o.Z.subscribe("DRAWER_CLOSE", a.handleDrawerClose);
                            o.Z.subscribe("WINDOW_FOCUS", a.handleWindowFocus);
                            null === (t = (e = a).onInitialize) || void 0 === t || t.call(e)
                        };
                        this.terminate = function() {
                            var e, t;
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", a.handleFeedItemSeen);
                            o.Z.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", a.handleFeedItemUnseen);
                            o.Z.unsubscribe("ANALYTICS_FEED_FLUSH", a.handleFeedItemFlush);
                            o.Z.unsubscribe("APP_STATE_UPDATE", a.handleAppStateUpdate);
                            o.Z.unsubscribe("DRAWER_OPEN", a.handleDrawerOpen);
                            o.Z.unsubscribe("DRAWER_CLOSE", a.handleDrawerClose);
                            o.Z.unsubscribe("WINDOW_FOCUS", a.handleWindowFocus);
                            null === (t = (e = a).onTerminate) || void 0 === t || t.call(e);
                            a.maybeFlushSeenItems(c.IMMEDIATE)
                        };
                        this.handleFeedItemFlush = function(e) {
                            var t = e.id,
                                n = e.force;
                            a._id === t && a.maybeFlushSeenItems(n)
                        };
                        this.handleFeedItemSeen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === a._id)
                                if (a._paused) a._pausedFeedItemIds.add(o);
                                else {
                                    var u = a.getTrackedFeedItem(o).maybeMarkSeen(i);
                                    null === (n = (t = a).onFeedItemSeen) || void 0 === n || n.call(t, o, u)
                                }
                        };
                        this.handleFeedItemUnseen = function(e) {
                            var t, n, r = e.id,
                                i = e.timestampMillis,
                                o = e.feedItemId;
                            if (r === a._id) {
                                a._paused && a._pausedFeedItemIds.delete(o);
                                var u = a.getTrackedFeedItem(o).maybeMarkUnseen(i);
                                null === (n = (t = a).onFeedItemUnseen) || void 0 === n || n.call(t, o, u);
                                a.maybeFlushSeenItems()
                            }
                        };
                        this.getTrackedFeedItem = function(e) {
                            null == a.trackedFeedItems[e] && (a.trackedFeedItems[e] = new d);
                            return a.trackedFeedItems[e]
                        };
                        this.getVisibleFeedItemIds = function() {
                            var e = Object.keys(a.trackedFeedItems);
                            return new Set(e.filter((function(e) {
                                var t;
                                return null === (t = a.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                            })))
                        };
                        this.handleDrawerClose = function() {
                            a._isReactNavigationFocused && a.resume()
                        };
                        this.handleDrawerOpen = function() {
                            a._isReactNavigationFocused && a.pause()
                        };
                        this.handleAppStateUpdate = function(e) {
                            var t = e.state;
                            "active" === t && a._isReactNavigationFocused && a.resume();
                            if ("background" === t) {
                                a._isReactNavigationFocused && a.pause();
                                a.maybeFlushSeenItems(c.IMMEDIATE)
                            }
                        };
                        this.clearPausedFeedItemIds = function() {
                            a._pausedFeedItemIds = new Set;
                            a._paused = !1
                        };
                        this.pause = function() {
                            if (!a._paused) {
                                var e = a.getVisibleFeedItemIds();
                                e.forEach((function(e) {
                                    a.handleFeedItemUnseen({
                                        id: a._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_UNSEEN"
                                    })
                                }));
                                a._paused = !0;
                                a._pausedFeedItemIds = e
                            }
                        };
                        this.resume = function() {
                            if (a._paused) {
                                a._paused = !1;
                                a._pausedFeedItemIds.forEach((function(e) {
                                    a.handleFeedItemSeen({
                                        id: a._id,
                                        feedItemId: e,
                                        timestampMillis: Date.now(),
                                        type: "ANALYTICS_FEED_ITEM_SEEN"
                                    })
                                }));
                                a.clearPausedFeedItemIds()
                            }
                        };
                        this.handleReactNavigationFocus = function(e, t) {
                            a._isReactNavigationFocused = e;
                            a._isReactNavigationFocused && !t ? a.resume() : a.pause()
                        };
                        this.handleWindowFocus = function(e) {
                            a._windowId === e.windowId && (e.focused ? a.resume() : a.pause())
                        };
                        this.trackedFeedItems = {};
                        this._id = n;
                        this._windowId = r;
                        this._pausedFeedItemIds = new Set;
                        this._paused = null != i && i;
                        this._isReactNavigationFocused = !0;
                        this._lastFlushTimeMillis = Date.now()
                    }
                    e.prototype.maybeFlushSeenItems = function(e) {
                        if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4) return Promise.resolve();
                        if (e === c.IMMEDIATE_WITH_COOLDOWN && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                        var t, n = this.createFlushSeenItemsFunction(e);
                        if (null == n) return Promise.resolve();
                        this._lastFlushTimeMillis = Date.now();
                        return e === c.IMMEDIATE || e === c.IMMEDIATE_WITH_COOLDOWN ? new Promise((t = u((function(e) {
                            return f(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        t.sent();
                                        e();
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return t.apply(this, arguments)
                        })) : new Promise((function(e) {
                            setTimeout(u((function() {
                                return f(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n()];
                                        case 1:
                                            t.sent();
                                            e();
                                            return [2]
                                    }
                                }))
                            })), 100)
                        }))
                    };
                    return e
                }()
        },
        15084: (e, t, n) => {
            n.d(t, {
                G: () => E,
                d: () => g
            });
            var r = n(247250),
                i = n(567867),
                o = n(625091),
                a = n(444663),
                u = n(474717),
                s = n(396043),
                l = n(566706),
                c = n(255592),
                f = n(473903),
                d = n(652591),
                p = n(149258),
                h = n(694329),
                _ = n(99181),
                y = n(2590),
                m = n(493254),
                v = n(203600),
                b = n(473708);

            function E(e, t) {
                var n = f.default.getCurrentUser(),
                    r = e.getGuildId(),
                    i = p.dg(r),
                    o = [],
                    u = 0,
                    l = 0,
                    c = 0,
                    d = [],
                    E = !0,
                    g = !1,
                    I = void 0;
                try {
                    for (var O, A = t[Symbol.iterator](); !(E = (O = A.next()).done); E = !0) {
                        var T = O.value;
                        c += 1;
                        u += T.size;
                        o.push(T.size);
                        T.size > l && (l = T.size);
                        null != T.type ? d.push(T.type) : d.push("unknown")
                    }
                } catch (e) {
                    g = !0;
                    I = e
                } finally {
                    try {
                        E || null == A.return || A.return()
                    } finally {
                        if (g) throw I
                    }
                }
                if (l > i) {
                    (0, s.yw)(y.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
                        channel_id: e.id,
                        guild_id: r,
                        user_individual_file_size_limit: i,
                        pre_compression_file_sizes: o,
                        pre_compression_aggregate_file_size: u,
                        num_attachments: c,
                        error_type: m.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                        attachment_mimetypes: d
                    });
                    (0, a.openUploadError)({
                        title: b.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                        help: (0, _.BK)(n, r),
                        showPremiumUpsell: !(0, h.M5)(n, v.p9.TIER_2),
                        fileSize: l
                    })
                } else(0, a.openUploadError)({
                    title: b.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: b.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
                        maxSize: p.Ng(p.OC())
                    })
                })
            }

            function g(e, t, n) {
                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    f = s.requireConfirm,
                    p = void 0 === f || f,
                    h = s.showLargeMessageDialog,
                    m = void 0 !== h && h,
                    v = s.isThumbnail,
                    g = void 0 !== v && v,
                    I = s.isClip,
                    O = void 0 !== I && I;
                if (!(e.length < 1)) {
                    var A = t.getGuildId();
                    if ((0, _.Bf)(e, A)) E(t, e);
                    else if (c.Z.getUploadCount(t.id, n) + e.length > y.dN1) {
                        (0, a.openUploadError)({
                            title: b.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                            help: b.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                limit: y.dN1
                            })
                        });
                        d.default.track(y.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                            existing_count: c.Z.getUploadCount(t.id, n),
                            new_count: e.length
                        })
                    } else {
                        t.type !== y.d4z.GUILD_VOICE && t.type !== y.d4z.GUILD_STAGE_VOICE || l.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0);
                        if (p) {
                            var T = Array.from(e).map((function(e) {
                                return {
                                    file: e,
                                    platform: u.ow.WEB,
                                    isThumbnail: g,
                                    isClip: O
                                }
                            }));
                            i.Z.addFiles({
                                files: T,
                                channelId: t.id,
                                showLargeMessageDialog: m,
                                draftType: n
                            })
                        } else o.Z.instantBatchUpload({
                            channelId: t.id,
                            files: e,
                            draftType: n,
                            isThumbnail: g,
                            isClip: O
                        })
                    }
                }
            }
        },
        99181: (e, t, n) => {
            n.d(t, {
                BK: () => s,
                Bf: () => l,
                KZ: () => c
            });
            var r = n(474717),
                i = n(149258),
                o = n(694329),
                a = n(203600),
                u = n(473708);

            function s(e, t) {
                var n = i.Ng(i.dg(t));
                return o.ZP.isPremium(e, a.p9.TIER_2) ? u.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                }) : o.ZP.isPremium(e, a.p9.TIER_1) ? u.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                    maxSize: n
                }) : u.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: n
                })
            }

            function l(e, t) {
                return i.nA(e, t) || i.vY(e)
            }

            function c(e) {
                return e.reduce((function(e, t) {
                    t.item.platform === r.ow.WEB && e.push(t.item.file);
                    return e
                }), [])
            }
        },
        482507: (e, t, n) => {
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e;
                i.contentEditable = "true";
                i.style.visibility = "none";
                t.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, e.length);
                var o = document.execCommand("copy");
                t.removeChild(i);
                return o
            }
        },
        652286: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(667294);

            function i() {
                var e = (0, r.createContext)(void 0);
                return {
                    Provider: function(t) {
                        var n = t.initialStore,
                            i = t.createStore,
                            o = t.children,
                            a = (0, r.useRef)();
                        if (!a.current) {
                            if (n) {
                                console.warn("Provider initialStore is deprecated and will be removed in the next version.");
                                i || (i = function() {
                                    return n
                                })
                            }
                            a.current = i()
                        }
                        return (0, r.createElement)(e.Provider, {
                            value: a.current
                        }, o)
                    },
                    useStore: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            i = (0, r.useContext)(e);
                        if (!i) throw new Error("Seems like you have not used zustand provider as an ancestor.");
                        return i(t, n)
                    },
                    useStoreApi: function() {
                        var t = (0, r.useContext)(e);
                        if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, r.useMemo)((function() {
                            return {
                                getState: t.getState,
                                setState: t.setState,
                                subscribe: t.subscribe,
                                destroy: t.destroy
                            }
                        }), [t])
                    }
                }
            }
        }
    }
]);