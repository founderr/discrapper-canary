(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74731], {
        455021: (e, t, r) => {
            e.exports = r.p + "d55a815e67ecc4faaafeb63dd2379a5a.png"
        },
        101566: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => Z,
                $: () => H
            });
            var n = r(495414),
                o = r(95508),
                i = r(598143),
                a = r(257695),
                c = r(595882),
                l = r(717187),
                s = r(496486),
                u = r.n(s),
                f = r(296602),
                p = r(493254);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        y(e, t, r[t])
                    }))
                }
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function O(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }
            var P = new f.Z("UploaderBase.tsx"),
                w = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && g(e, t)
                    }(r, e);
                    var t = S(r);

                    function r(e) {
                        var n, o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            a = arguments.length > 2 ? arguments[2] : void 0;
                        h(this, r);
                        (n = t.call(this))._token = "";
                        n._lastUpdate = 0;
                        n._loaded = 0;
                        n._aborted = !1;
                        n._errored = !1;
                        n._raiseEndpointErrors = !1;
                        n.alreadyStarted = !1;
                        n._handleStart = function(e) {
                            n._cancel = e;
                            n.alreadyStarted || n.emit("start", n._file);
                            n.alreadyStarted = !0
                        };
                        n._handleProgress = function(e, t, r) {
                            var o = Date.now(),
                                i = (0, c.S)(e, t),
                                a = Math.floor((e - n._loaded) / ((o - n._lastUpdate) / 1e3));
                            if (null != r) {
                                var l;
                                null === (l = n._file.items) || void 0 === l || l.forEach((function(e) {
                                    e.item.progress = r[e.id]
                                }))
                            }
                            n._lastUpdate = o;
                            n._loaded = e;
                            n._file = _(m({}, n._file), {
                                currentSize: t,
                                progress: i,
                                rate: a
                            });
                            n.emit("progress", n._file)
                        };
                        n._handleException = function(e) {
                            n._handleError({
                                reason: {
                                    type: p.xi.ERROR_SOURCE_UNKNOWN,
                                    msg: e.toString()
                                }
                            })
                        };
                        n._handleAborted = function() {
                            n.clearProcessingMessageInterval()
                        };
                        n._handleError = function(e) {
                            var t = e.code,
                                r = e.reason,
                                o = e.body;
                            n.clearProcessingMessageInterval();
                            if (!n._aborted) {
                                n._errored = !0;
                                P.log("_handleError: ".concat(t, " (").concat(JSON.stringify(r), ") for ").concat(n.id));
                                n.emit("error", n._file, t, o, r);
                                n.removeAllListeners()
                            }
                        };
                        n._handleComplete = function(e) {
                            n.clearProcessingMessageInterval();
                            P.log("_handleComplete for ".concat(n.id));
                            n.emit("complete", n._file, e);
                            n.removeAllListeners()
                        };
                        n.id = u().uniqueId("Uploader");
                        n._url = e;
                        n._method = i;
                        n._raiseEndpointErrors = null !== (o = null == a ? void 0 : a.raiseEndpointErrors) && void 0 !== o && o;
                        return n
                    }
                    var n = r.prototype;
                    n._addAttachmentsToPayload = function(e, t, r) {
                        var n = m({}, e),
                            o = v(u().get(n, t, [])).concat(v(r));
                        return u().set(n, t, o)
                    };
                    n.clearProcessingMessageInterval = function() {
                        if (null != this.processingMessageChangeInterval) {
                            clearInterval(this.processingMessageChangeInterval);
                            this.processingMessageChangeInterval = void 0
                        }
                    };
                    n.cancel = function() {
                        P.log("cancel() for ".concat(this.id));
                        this._aborted = !0;
                        null != this._cancel && this._cancel();
                        this._handleComplete()
                    };
                    n.cancelItem = function(e) {
                        throw new Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                    };
                    n.upload = function(e, t, r) {
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
                            items: r
                        }
                    };
                    return r
                }(l.EventEmitter),
                A = r(2590),
                j = r(473708);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function M(e, t, r, n, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function C(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            M(i, n, o, a, c, "next", e)
                        }

                        function c(e) {
                            M(i, n, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        I(e, t, r[t])
                    }))
                }
                return e
            }

            function U(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function N(e, t) {
                return !t || "object" !== k(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function x(e, t) {
                x = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return x(e, t)
            }

            function G(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function z(e) {
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
                    var r, n = R(e);
                    if (t) {
                        var o = R(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return N(this, r)
                }
            }
            var B = function(e, t) {
                    var r, n, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function c(i) {
                        return function(c) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                            n = i[1];
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
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, c])
                        }
                    }
                },
                F = new n.Z("CloudUploaderBase.tsx"),
                Z = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && x(e, t)
                    }(r, e);
                    var t = z(r);

                    function r() {
                        L(this, r);
                        var e;
                        (e = t.apply(this, arguments)).files = [];
                        return e
                    }
                    var n = r.prototype;
                    n._fileSize = function() {
                        return this.files.reduce((function(e, t) {
                            var r;
                            return e += null !== (r = t.currentSize) && void 0 !== r ? r : 0
                        }), 0)
                    };
                    n.compressAndCheckFileSize = function() {
                        var e = this;
                        return C((function() {
                            var t, r, n, o, c, l, s, u, f, d, h, y, b;
                            return B(this, (function(m) {
                                switch (m.label) {
                                    case 0:
                                        n = (0, a.F)(null === (t = e.files[0]) || void 0 === t || null === (r = t.item) || void 0 === r ? void 0 : r.target);
                                        if (e.files.length > n.getMaxAttachmentsCount()) {
                                            F.log("Too many attachments for ".concat(e.id));
                                            e._handleError({
                                                code: A.evJ.TOO_MANY_ATTACHMENTS
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 10];
                                    case 1:
                                        m.trys.push([1, 8, 9, 10]);
                                        s = e.files[Symbol.iterator]();
                                        m.label = 2;
                                    case 2:
                                        if (o = (u = s.next()).done) return [3, 7];
                                        f = u.value;
                                        m.label = 3;
                                    case 3:
                                        m.trys.push([3, 5, , 6]);
                                        return [4, f.reactNativeCompressAndExtractData()];
                                    case 4:
                                        m.sent();
                                        if (f.status === i.m.CANCELED) {
                                            F.log("compressAndCheckFileSize() file has been cancelled for compression - ".concat(f.id));
                                            return [3, 6]
                                        }
                                        if (0 === (null !== (d = f.currentSize) && void 0 !== d ? d : 0)) {
                                            e._handleError({
                                                code: A.evJ.ENTITY_EMPTY
                                            });
                                            return [2, !1]
                                        }
                                        if ((null !== (h = f.currentSize) && void 0 !== h ? h : 0) > n.getMaxFileSize(f.channelId)) {
                                            e._handleError({
                                                code: A.evJ.ENTITY_TOO_LARGE,
                                                reason: {
                                                    type: p.xi.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE
                                                }
                                            });
                                            return [2, !1]
                                        }
                                        return [3, 6];
                                    case 5:
                                        y = m.sent();
                                        e._handleException(y);
                                        return [2, !1];
                                    case 6:
                                        o = !0;
                                        return [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        b = m.sent();
                                        c = !0;
                                        l = b;
                                        return [3, 10];
                                    case 9:
                                        try {
                                            o || null == s.return || s.return()
                                        } finally {
                                            if (c) throw l
                                        }
                                        return [7];
                                    case 10:
                                        if (e._fileSize() > n.getMaxTotalAttachmentSize()) {
                                            e._handleError({
                                                code: A.evJ.ENTITY_TOO_LARGE,
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
                    n._filesTooLarge = function() {
                        return this.files.some((function(e) {
                            return e.error === A.evJ.ENTITY_TOO_LARGE
                        }))
                    };
                    n.setUploadingTextForUI = function() {
                        var e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : j.Z.Messages.UPLOADING_FILES.format({
                                count: this.files.length
                            }),
                            t = this.files.some((function(e) {
                                return e.isImage
                            })),
                            r = this.files.some((function(e) {
                                return e.isVideo
                            })),
                            n = this._fileSize();
                        F.log("setUploadingTextForUI - total content: ".concat(n, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id));
                        this._file = U(D({}, this._file), {
                            totalPostCompressionSize: n,
                            currentSize: n,
                            name: e,
                            hasVideo: r,
                            hasImage: t,
                            attachmentsCount: this.files.length,
                            items: this.files
                        })
                    };
                    n._recomputeProgress = function() {
                        var e = this._recomputeProgressTotal(),
                            t = e.loaded,
                            r = e.total,
                            n = this._recomputeProgressByFile();
                        this._handleProgress(t, r, n)
                    };
                    n._recomputeProgressTotal = function() {
                        var e = this._fileSize();
                        return {
                            loaded: this.files.reduce((function(e, t) {
                                var r;
                                return e += null !== (r = t.loaded) && void 0 !== r ? r : 0
                            }), 0),
                            total: e
                        }
                    };
                    n._recomputeProgressByFile = function() {
                        var e = {};
                        this.files.forEach((function(t) {
                            e[t.id] = (0, c.S)(t.loaded, t.currentSize)
                        }));
                        return e
                    };
                    n.cancel = function() {
                        F.log("Cancel called for ".concat(this.id));
                        if (!this._aborted) {
                            this._aborted = !0;
                            null != this._cancel && this._cancel();
                            this.files.forEach((function(e) {
                                return e.cancel()
                            }));
                            this._handleComplete()
                        }
                    };
                    n.cancelItem = function(e) {
                        var t = this;
                        return C((function() {
                            var r, n;
                            return B(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        F.log("Cancel called for ".concat(t.id, " for item ").concat(e));
                                        if (null == (r = t.files.find((function(t) {
                                                return t.id === e
                                            })))) return [2];
                                        if (r.status === i.m.CANCELED) return [2];
                                        n = t.files.indexOf(r);
                                        t.files = G(t.files.slice(0, n)).concat(G(t.files.slice(n + 1)));
                                        t._file = U(D({}, t._file), {
                                            items: t.files
                                        });
                                        return [4, (0, o.V)(r)];
                                    case 1:
                                        a.sent();
                                        r.cancel();
                                        t.emit("cancel-upload-item", t._file);
                                        0 === t.files.length && t.cancel();
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    n.failed = function() {
                        return this.files.some((function(e) {
                            return e.status === i.m.ERROR
                        }))
                    };
                    n._remainingUploadCount = function() {
                        var e = this.files;
                        return e.length - e.filter((function(e) {
                            return e.status === i.m.COMPLETED
                        })).length
                    };
                    n.clear = function() {
                        this.cancel();
                        this.files = []
                    };
                    return r
                }(w);

            function H(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                Y = C((function(e) {
                    var t, r, n, o = arguments;
                    return B(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = o.length > 1 && void 0 !== o[1] && o[1], r = o.length > 2 ? o[2] : void 0;
                                n = e.map((function(e) {
                                    return new Promise((function(n, o) {
                                        switch (e.status) {
                                            case i.m.NOT_STARTED:
                                                e.upload();
                                                break;
                                            case i.m.COMPLETED:
                                                n("complete");
                                                break;
                                            case i.m.ERROR:
                                                t && e.error !== A.evJ.ENTITY_TOO_LARGE ? e.upload() : o(new Error("File failed to upload"));
                                                break;
                                            case i.m.CANCELED:
                                                o(new Error("Upload is canceled"))
                                        }
                                        e.on("complete", (function() {
                                            n("complete")
                                        }));
                                        e.on("error", (function() {
                                            o(new Error("File ".concat(e.id, " failed to upload")))
                                        }));
                                        e.on("progress", (function(e, t) {
                                            null == r || r(e, t)
                                        }))
                                    }))
                                }));
                                return [4, Promise.all(n)];
                            case 1:
                                a.sent();
                                return [2]
                        }
                    }))
                }));
                return Y.apply(this, arguments)
            }
        },
        970925: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => y
            });
            var n = r(785893),
                o = (r(667294), r(284610)),
                i = r(149258),
                a = r(15084),
                c = r(593166),
                l = r(442212),
                s = r(203600),
                u = r(2590),
                f = r(473708);

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function h(e) {
                return null != (null == e ? void 0 : e.getGuildId()) ? u.ZY5.GUILD_CHANNEL : (null == e ? void 0 : e.isGroupDM()) || (null == e ? void 0 : e.isPrivate()) ? u.ZY5.DM_CHANNEL : null
            }

            function y(e) {
                var t = function() {
                        b();
                        (0, c.z)(!0)
                    },
                    y = e.channel,
                    b = e.onClose,
                    m = e.content,
                    _ = d(e, ["channel", "onClose", "content"]);
                return (0, n.jsx)(l.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            p(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    artURL: r(455021),
                    type: s.cd.MESSAGE_LENGTH_UPSELL,
                    title: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
                    body: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
                        maxLength: u.J6R,
                        onLearnMore: t
                    }),
                    context: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
                        maxLength: u.J6R
                    }),
                    glowUp: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
                        onLearnMore: t
                    }),
                    analyticsSource: {
                        page: h(y)
                    },
                    analyticsLocation: {
                        section: u.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
                        object: u.qAy.BUTTON_CTA
                    },
                    onClose: b,
                    secondaryCTA: f.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
                    onSecondaryClick: function() {
                        b();
                        var e = new Blob([m], {
                            type: "text/plain"
                        });
                        (0, a.d)([(0, i.dp)(e, "message.txt")], y, o.d.ChannelMessage, {
                            requireConfirm: !0,
                            showLargeMessageDialog: !0
                        })
                    }
                }, _))
            }
        }
    }
]);