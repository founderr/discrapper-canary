"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [52429], {
        665328: (e, t, r) => {
            r.d(t, {
                Z: () => P
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                l = r(304548),
                a = r(159895),
                c = r(799066),
                s = r(793008),
                f = r(444663),
                p = r(473708),
                d = r(334276),
                h = r.n(d),
                v = r(476600),
                g = r.n(v);

            function b(e, t) {
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

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function m(e, t) {
                return !t || "object" !== j(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }
            var j = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function D(e) {
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
                    var r, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return m(this, r)
                }
            }

            function S() {
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("div", {
                        className: u()(g().sparkleWhite, h().sparkleOne)
                    }), (0, n.jsx)("div", {
                        className: u()(g().sparkleWhite, h().sparkleTwo)
                    }), (0, n.jsx)("div", {
                        className: u()(g().lightWhite, h().lightOne)
                    }), (0, n.jsx)("div", {
                        className: u()(g().lightWhite, h().lightTwo)
                    }), (0, n.jsx)("div", {
                        className: u()(g().crossWhite, h().crossOne)
                    }), (0, n.jsx)("div", {
                        className: u()(g().crossWhite, h().crossTwo)
                    }), (0, n.jsx)("div", {
                        className: u()(g().popWhite, h().popOne)
                    })]
                })
            }
            const P = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && w(e, t)
                }(r, e);
                var t = D(r);

                function r() {
                    b(this, r);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        isDragging: !1,
                        isOverZone: !1
                    };
                    e.dragOverTimeout = null;
                    e.elementDOMRef = o.createRef();
                    e.isAllDropFiles = function(e) {
                        for (var t = 0; t < e.length; t++) try {
                            var r, n = null !== (r = e[t].webkitGetAsEntry()) && void 0 !== r ? r : e[t].getAsEntry();
                            if (n && !n.isFile) return !1
                        } catch (e) {
                            continue
                        }
                        return !0
                    };
                    e.preventUnwantedDrop = function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = t.dataTransfer;
                        if (null == n) return !0;
                        var o = Array.isArray(n.types) && -1 !== n.types.indexOf("text/uri-list") && -1 === n.types.indexOf("application/json"),
                            i = null != n.items && !e.isAllDropFiles(n.items);
                        if (o || i) {
                            t.stopPropagation();
                            t.preventDefault();
                            n.effectAllowed = "none";
                            n.dropEffect = "none";
                            if (r) {
                                e.setState({
                                    isDragging: !1
                                });
                                (0, f.openUploadError)({
                                    title: p.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
                                    help: p.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
                                    icons: e.props.icons
                                })
                            }
                            return !1
                        }
                        return !0
                    };
                    e.handleDragOver = function(t) {
                        var r, n;
                        if (!e.preventUnwantedDrop(t)) return !1;
                        var o = t.dataTransfer;
                        if (null != o) {
                            o.dropEffect = "copy";
                            (0, l.hasModalOpen)(f.UPLOAD_ERROR_MODAL_KEY) && (0, l.closeModal)(f.UPLOAD_ERROR_MODAL_KEY);
                            t.stopPropagation();
                            t.preventDefault();
                            null === (n = (r = e.props).onDragOver) || void 0 === n || n.call(r, t);
                            if (!e.state.isDragging) {
                                var i;
                                (0, a.I6)(c.Z);
                                var u = null === (i = e.elementDOMRef.current) || void 0 === i ? void 0 : i.ownerDocument.defaultView;
                                (null != u && o.types instanceof u.DOMStringList && o.types.contains("application/x-moz-file") || -1 !== o.types.indexOf("Files")) && e.setState((function(e) {
                                    return e.isDragging ? {} : {
                                        isDragging: !0
                                    }
                                }))
                            }
                            clearTimeout(e.dragOverTimeout);
                            e.dragOverTimeout = setTimeout((function() {
                                var t, r;
                                e.setState({
                                    isDragging: !1
                                });
                                null === (r = (t = e.props).onDragClear) || void 0 === r || r.call(t)
                            }), 1e3)
                        }
                    };
                    e.handleDragOverZone = function() {
                        e.setState({
                            isOverZone: !0
                        })
                    };
                    e.handleDragLeaveZone = function() {
                        e.setState({
                            isOverZone: !1
                        })
                    };
                    e.handleDragLeave = function(t) {
                        if (e.state.isDragging) {
                            t.stopPropagation();
                            t.preventDefault();
                            e.clearDragging()
                        }
                    };
                    e.clearDragging = function() {
                        var t, r;
                        e.setState({
                            isDragging: !1,
                            isOverZone: !1
                        });
                        null === (r = (t = e.props).onDragClear) || void 0 === r || r.call(t)
                    };
                    e.handleDrop = function(t) {
                        if (!e.preventUnwantedDrop(t, !0)) return !1;
                        var r = t.dataTransfer;
                        if (null == r) return !0;
                        if (e.state.isDragging) {
                            t.preventDefault();
                            t.stopPropagation();
                            e.props.onDrop(r.files);
                            e.clearDragging()
                        }
                    };
                    return e
                }
                var i = r.prototype;
                i.componentDidMount = function() {
                    var e = this.elementDOMRef.current;
                    if (null != e) {
                        e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1);
                        e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1);
                        e.addEventListener("dragover", this.handleDragOverZone, !1);
                        e.addEventListener("dragleave", this.handleDragLeaveZone, !1);
                        e.addEventListener("drop", this.handleDrop, !1)
                    }
                };
                i.componentWillUnmount = function() {
                    var e = this.elementDOMRef.current;
                    if (null != e) {
                        e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1);
                        e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1);
                        e.removeEventListener("dragover", this.handleDragOverZone, !1);
                        e.removeEventListener("dragleave", this.handleDragLeaveZone, !1);
                        e.removeEventListener("drop", this.handleDrop, !1)
                    }
                    clearTimeout(this.dragOverTimeout)
                };
                i.render = function() {
                    var e, t = this.props,
                        r = t.title,
                        o = t.description,
                        i = t.icons,
                        l = t.style,
                        a = t.className;
                    return (0, n.jsx)("div", {
                        ref: this.elementDOMRef,
                        className: u()(a, h().uploadArea, (e = {}, y(e, h().droppable, this.state.isDragging), y(e, h().uploadModalIn, this.state.isOverZone), e)),
                        style: l,
                        children: (0, n.jsxs)("div", {
                            className: h().uploadDropModal,
                            children: [this.state.isDragging && (0, n.jsx)(S, {}), (0, n.jsx)("div", {
                                className: h().bgScale
                            }), (0, n.jsxs)("div", {
                                className: h().inner,
                                children: [(0, n.jsx)(s.Z, {
                                    icons: i
                                }), (0, n.jsx)("div", {
                                    className: h().title,
                                    children: r
                                }), (0,
                                    n.jsx)("div", {
                                    className: h().instructions,
                                    children: (0, n.jsx)("pre", {
                                        children: o
                                    })
                                })]
                            })]
                        })
                    })
                };
                return r
            }(o.Component)
        },
        460471: (e, t, r) => {
            r.d(t, {
                Z: () => j
            });
            var n = r(281110),
                o = r(347365),
                i = r(101566),
                u = r(474717),
                l = r(124453),
                a = r(473708);

            function c(e, t, r, n, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            c(i, n, o, u, l, "next", e)
                        }

                        function l(e) {
                            c(i, n, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t, r) {
                d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                    var n = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e
                    }(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(r) : o.value
                    }
                };
                return d(e, t, r || e)
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function v(e) {
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
            }

            function g(e, t) {
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

            function b(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
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
            var O = function(e) {
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
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }
            var w = function(e, t) {
                    var r, n, o, i, u = {
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
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    (n = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            n = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
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
                            }([i, l])
                        }
                    }
                },
                j = function(e) {
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
                    }(r, e);
                    var t = m(r);

                    function r(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            o = arguments.length > 2 ? arguments[2] : void 0;
                        f(this, r);
                        return t.call(this, e, n, o)
                    }
                    var c = r.prototype;
                    c.uploadFiles = function(e, t) {
                        var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).addFilesTo,
                            o = this,
                            u = this,
                            l = function() {
                                return d(h(r.prototype), "upload", o)
                            };
                        return s((function() {
                            var r, o, c;
                            return w(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        l().call(u, {
                                            name: a.Z.Messages.ATTACHMENT_PROCESSING
                                        }, t, e);
                                        r = new AbortController;
                                        s.label = 1;
                                    case 1:
                                        s.trys.push([1, 4, , 5]);
                                        u.files = e;
                                        if (u._aborted) return [2];
                                        u._handleStart((function() {
                                            return r.abort()
                                        }));
                                        return [4, u.compressAndCheckFileSize()];
                                    case 2:
                                        if (!s.sent()) return [2];
                                        u.setUploadingTextForUI();
                                        return [4, (0, i.$)(u.files, !0, u._recomputeProgress.bind(u))];
                                    case 3:
                                        s.sent();
                                        return [3, 5];
                                    case 4:
                                        o = s.sent();
                                        u._handleException(o);
                                        return [3, 5];
                                    case 5:
                                        s.trys.push([5, 7, , 8]);
                                        return [4, u._createMessage(r.signal, t, n)];
                                    case 6:
                                        return [2, s.sent()];
                                    case 7:
                                        c = s.sent();
                                        if (u._raiseEndpointErrors) throw c;
                                        u._handleException(c);
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    c._createMessage = function(e, t, r) {
                        var i = this;
                        return s((function() {
                            var a, c, s, f, p, d, h;
                            return w(this, (function(b) {
                                switch (b.label) {
                                    case 0:
                                        a = [];
                                        i.files.forEach((function(e, t) {
                                            var r = (0, l.B)(e, t);
                                            e.item.platform === u.ow.WEB && a.push(v({}, r))
                                        }));
                                        c = null != r && null != t ? i._addAttachmentsToPayload(t, r, a) : g(v({}, t), {
                                            attachments: a
                                        });
                                        s = {
                                            url: i._url,
                                            body: c,
                                            signal: e
                                        };
                                        f = "POST" === i._method ? n.ZP.post : n.ZP.patch;
                                        b.label = 1;
                                    case 1:
                                        b.trys.push([1, 3, , 4]);
                                        return [4, f(s)];
                                    case 2:
                                        p = b.sent();
                                        i._handleComplete(p.body);
                                        return [2, p.body];
                                    case 3:
                                        d = b.sent();
                                        if (i._raiseEndpointErrors) throw new o.Hx(d);
                                        i._handleError({
                                            code: null == d || null === (h = d.body) || void 0 === h ? void 0 : h.code,
                                            body: null == d ? void 0 : d.body
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    return r
                }(i.Z)
        },
        172779: (e, t, r) => {
            r.d(t, {
                f: () => s,
                l: () => f
            });
            var n = r(785893),
                o = r(667294),
                i = r(318715),
                u = r(652555),
                l = r(704230),
                a = r(840249),
                c = o.createContext(void 0);

            function s(e) {
                var t = o.useContext(c);
                if (null == t) throw new Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
                var r = t.listingsLoaded;
                (0, t.fetchGroupListingsForGuild)();
                return r
            }

            function f(e) {
                var t = e.guildId,
                    r = e.children,
                    s = e.refetchOnMount,
                    f = e.includeSoftDeleted,
                    p = e.countryCode,
                    d = e.dontFetchWhileTrue,
                    h = (0, i.ZP)([u.Z], (function() {
                        return u.Z.isConnected()
                    })),
                    v = (0, i.ZP)([a.Z], (function() {
                        return null != t ? a.Z.getSubscriptionGroupListingsForGuildFetchState(t) : a.M.FETCHED
                    })),
                    g = o.useRef(s),
                    b = o.useCallback((function() {
                        if (null != t && h && !0 !== d) {
                            var e = a.Z.getSubscriptionGroupListingsForGuildFetchState(t);
                            if (g.current || e === a.M.NOT_FETCHED) {
                                g.current = !1;
                                l.FP(t, {
                                    includeSoftDeleted: f,
                                    countryCode: p
                                })
                            }
                        }
                    }), [h, t, f, p, d]),
                    y = o.useMemo((function() {
                        return v === a.M.FETCHED && !0 !== g.current
                    }), [v, g]);
                return (0, n.jsx)(c.Provider, {
                    value: {
                        listingsLoaded: y,
                        fetchGroupListingsForGuild: b
                    },
                    children: r
                })
            }
        },
        547721: (e, t, r) => {
            r.d(t, {
                _k: () => m,
                jO: () => w,
                GG: () => j,
                qi: () => D,
                sp: () => S,
                r4: () => P,
                _1: () => E,
                HQ: () => L,
                YB: () => _,
                QV: () => Z,
                JH: () => x,
                oC: () => T
            });
            var n = r(667294),
                o = r(202351),
                i = r(251295),
                u = r(652555),
                l = r(172779),
                a = r(704230),
                c = r(840249),
                s = r(633440);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t, r, n, o, i, u) {
                try {
                    var l = e[i](u),
                        a = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            p(i, n, o, u, l, "next", e)
                        }

                        function l(e) {
                            p(i, n, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            u = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || g(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || g(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0
                }
            }
            var b = function(e, t) {
                    var r, n, o, i, u = {
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
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    (n = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            n = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
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
                            }([i, l])
                        }
                    }
                },
                y = [],
                O = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.refetchOnMount,
                        i = void 0 !== r && r,
                        l = t.includeSoftDeleted,
                        s = void 0 === l || l,
                        f = t.countryCode,
                        p = t.dontFetchWhileTrue,
                        d = (0, o.e7)([u.Z], (function() {
                            return u.Z.isConnected()
                        })),
                        h = (0, o.e7)([c.Z], (function() {
                            return null != e ? c.Z.getSubscriptionGroupListingsForGuildFetchState(e) : c.M.FETCHED
                        })),
                        v = n.useRef(i);
                    n.useEffect((function() {
                        if (null != e && d && !0 !== p) {
                            var t = c.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                            if (i || t === c.M.NOT_FETCHED) {
                                v.current = !1;
                                a.FP(e, {
                                    includeSoftDeleted: s,
                                    countryCode: f
                                })
                            }
                        }
                    }), [d, e, s, i, f, p]);
                    return {
                        listingsLoaded: h === c.M.FETCHED && !0 !== v.current
                    }
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.includeSoftDeleted,
                        n = void 0 !== r && r,
                        i = t.includeUnpublished,
                        u = void 0 === i || i;
                    return (0, o.Wu)([c.Z], (function() {
                        if (null == e) return [];
                        var t = c.Z.getSubscriptionGroupListing(e);
                        if (null == t) return [];
                        var r = [],
                            o = !0,
                            i = !1,
                            l = void 0;
                        try {
                            for (var a, s = t.subscription_listings_ids[Symbol.iterator](); !(o = (a = s.next()).done); o = !0) {
                                var f = a.value,
                                    p = c.Z.getSubscriptionListing(f);
                                null != p && (p.soft_deleted && !n || (p.published || u) && r.push(p))
                            }
                        } catch (e) {
                            i = !0;
                            l = e
                        } finally {
                            try {
                                o || null == s.return || s.return()
                            } finally {
                                if (i) throw l
                            }
                        }
                        return r
                    }), [e, n, u])
                },
                w = function(e) {
                    return (0, o.e7)([c.Z], (function() {
                        return null != e ? c.Z.getSubscriptionListing(e) : null
                    }))
                },
                j = function(e) {
                    var t = (0, l.f)("useGroupListingsForGuild");
                    return (0, o.e7)([c.Z], (function() {
                        return null != e && t ? c.Z.getSubscriptionGroupListingsForGuild(e) : y
                    }))
                },
                D = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1,
                        sortDeletedListingsLast: !1
                    };
                    O(e);
                    return (0, o.Wu)([c.Z], (function() {
                        var r = null != e ? c.Z.getSubscriptionGroupListingsForGuild(e) : y,
                            n = [],
                            o = !0,
                            i = !1,
                            u = void 0;
                        try {
                            for (var l, a = r[Symbol.iterator](); !(o = (l = a.next()).done); o = !0) {
                                var s = l.value,
                                    f = !0,
                                    p = !1,
                                    d = void 0;
                                try {
                                    for (var h, g = s.subscription_listings_ids[Symbol.iterator](); !(f = (h = g.next()).done); f = !0) {
                                        var b = h.value,
                                            O = c.Z.getSubscriptionListing(b);
                                        null == O || !t.includeSoftDeleted && O.soft_deleted || n.push(O)
                                    }
                                } catch (e) {
                                    p = !0;
                                    d = e
                                } finally {
                                    try {
                                        f || null == g.return || g.return()
                                    } finally {
                                        if (p) throw d
                                    }
                                }
                            }
                        } catch (e) {
                            i = !0;
                            u = e
                        } finally {
                            try {
                                o || null == a.return || a.return()
                            } finally {
                                if (i) throw u
                            }
                        }
                        return t.includeSoftDeleted && t.sortDeletedListingsLast ? v(n.filter((function(e) {
                            return !e.soft_deleted
                        }))).concat(v(n.filter((function(e) {
                            return e.soft_deleted
                        })))) : n
                    }))
                },
                S = function(e) {
                    var t = h(n.useState(!1), 2),
                        r = t[0],
                        i = t[1],
                        u = n.useMemo((function() {
                            return e.map(s.W)
                        }), [e]),
                        l = (0, o.Wu)([c.Z], (function() {
                            return u.filter((function(e) {
                                return !c.Z.getDidFetchListingForSubscriptionPlanId(e)
                            }))
                        }), [u]);
                    n.useEffect((function() {
                        if (!r && l.length > 0) {
                            i(!0);
                            Promise.all(l.map((function(e) {
                                return a.vY(e)
                            }))).catch((function() {})).then((function() {
                                i(!1)
                            }))
                        }
                    }), [r, l]);
                    return {
                        loading: r
                    }
                },
                P = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        l = i[1],
                        c = (e = d((function(e, t, r) {
                            var n;
                            return b(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        i.trys.push([0, 2, 3, 4]);
                                        o(!0);
                                        l(null);
                                        return [4, a._d(e, t, r)];
                                    case 1:
                                        i.sent();
                                        return [2, !0];
                                    case 2:
                                        n = i.sent();
                                        l(n);
                                        return [3, 4];
                                    case 3:
                                        o(!1);
                                        return [7];
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(t, r, n) {
                            return e.apply(this, arguments)
                        });
                    return {
                        error: u,
                        submitting: r,
                        deleteSubscriptionListing: c
                    }
                },
                E = function() {
                    var e = h((0, i.Z)(a.AE), 2),
                        t = e[0],
                        r = e[1],
                        n = r.loading;
                    return {
                        error: r.error,
                        submitting: n,
                        archiveSubscriptionListing: t
                    }
                },
                L = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        l = i[1],
                        c = (e = d((function(e) {
                            var t, r, n, i;
                            return b(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        t = e.guildId, r = e.groupListingId, n = e.listingId;
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 3, 4, 5]);
                                        o(!0);
                                        l(null);
                                        return [4, a.O0({
                                            guildId: t,
                                            groupListingId: r,
                                            listingId: n,
                                            data: {
                                                published: !0
                                            }
                                        })];
                                    case 2:
                                        u.sent();
                                        return [2, !0];
                                    case 3:
                                        i = u.sent();
                                        l(i);
                                        return [3, 5];
                                    case 4:
                                        o(!1);
                                        return [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        })), function(t) {
                            return e.apply(this, arguments)
                        });
                    return {
                        error: u,
                        submitting: r,
                        publishSubscriptionListing: c,
                        clearError: function() {
                            return l(null)
                        }
                    }
                },
                _ = function(e) {
                    return (0, o.e7)([c.Z], (function() {
                        return null != e ? c.Z.getSubscriptionSettings(e) : void 0
                    }))
                },
                Z = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        l = i[1],
                        c = n.useCallback((e = d((function(e, t) {
                            var r;
                            return b(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        o(!0);
                                        l(null);
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, 4, 5]);
                                        return [4, a.W2(e, t)];
                                    case 2:
                                        n.sent();
                                        return [3, 5];
                                    case 3:
                                        r = n.sent();
                                        l(r);
                                        return [3, 5];
                                    case 4:
                                        o(!1);
                                        return [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        })), function(t, r) {
                            return e.apply(this, arguments)
                        }), []);
                    return {
                        loading: r,
                        updateSubscriptionsSettings: c,
                        error: u
                    }
                },
                x = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        l = i[1],
                        c = n.useCallback((e = d((function(e) {
                            var t;
                            return b(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        o(!0);
                                        l(null);
                                        r.label = 1;
                                    case 1:
                                        r.trys.push([1, 3, 4, 5]);
                                        return [4, a.Qb(e)];
                                    case 2:
                                        r.sent();
                                        return [3, 5];
                                    case 3:
                                        t = r.sent();
                                        l(t);
                                        return [3, 5];
                                    case 4:
                                        o(!1);
                                        return [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        })), function(t) {
                            return e.apply(this, arguments)
                        }), []);
                    return {
                        loading: r,
                        fetchSubscriptionsSettings: c,
                        error: u
                    }
                },
                T = function(e) {
                    return (0, o.e7)([c.Z], (function() {
                        return null != e ? c.Z.getSubscriptionTrial(e) : null
                    }))
                }
        },
        633440: (e, t, r) => {
            r.d(t, {
                W: () => i,
                V: () => u
            });
            var n = r(441143),
                o = r.n(n);

            function i(e) {
                var t = e.items;
                o()(1 === t.length, "more than 1 subscription item for role subscription");
                return t[0].planId
            }

            function u(e) {
                var t, r = null == e || null === (t = e.renewalMutations) || void 0 === t ? void 0 : t.items;
                if (null != r) {
                    o()(r.length <= 1, "more than 1 renewal mutation for role subscription");
                    return null == r ? void 0 : r[0].planId
                }
            }
        },
        808513: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                u = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
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

            function c(e, t) {
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

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
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

            function p(e, t) {
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
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(d)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: c,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20.2949 0.298996L21.7089 1.713L19.4169 4.006L21.7089 6.299L20.2949 7.713L18.0019 5.42L15.7099 7.713L14.2949 6.299L16.5879 4.006L14.2949 1.713L15.7099 0.298996L18.0019 2.592L20.2949 0.298996ZM8.00195 13.006C10.207 13.006 12.002 11.211 12.002 9.006C12.002 6.801 10.207 5.006 8.00195 5.006C5.79695 5.006 4.00195 6.801 4.00195 9.006C4.00195 11.211 5.79695 13.006 8.00195 13.006ZM8.00195 14.006C3.29095 14.006 0.00195312 16.473 0.00195312 20.006V21.006H16.002V20.006C16.002 16.473 12.713 14.006 8.00195 14.006Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    v = c(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M11.533 11A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .444-.17.504-.403.266-1.038.767-2.026 1.221-2.755.139-.222.438-.091.386.166l-.478 2.394a.5.5 0 0 0 .49.598h7.65c.283 0 .397-.522.158-.673C12.83 20.828 12 20.052 12 19a3 3 0 0 1 3-3h5.855a9.531 9.531 0 0 0-8.388-5h-.934ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        }
    }
]);