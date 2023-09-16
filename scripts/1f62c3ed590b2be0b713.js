"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18809], {
        665328: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                a = r(882723),
                l = r(159895),
                s = r(799066),
                c = r(793008),
                f = r(444663),
                p = r(473708),
                d = r(36627),
                h = r.n(d),
                v = r(587161),
                g = r.n(v);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, r) {
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
                return !t || "object" !== D(t) && "function" != typeof t ? function(e) {
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
            var D = function(e) {
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
                    var r, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return m(this, r)
                }
            }

            function j() {
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
            const E = function(e) {
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
                var t = S(r);

                function r() {
                    y(this, r);
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
                            (0, a.hasModalOpen)(f.UPLOAD_ERROR_MODAL_KEY) && (0, a.closeModal)(f.UPLOAD_ERROR_MODAL_KEY);
                            t.stopPropagation();
                            t.preventDefault();
                            null === (n = (r = e.props).onDragOver) || void 0 === n || n.call(r, t);
                            if (!e.state.isDragging) {
                                var i;
                                (0, l.I6)(s.Z);
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
                        a = t.style,
                        l = t.className;
                    return (0, n.jsx)("div", {
                        ref: this.elementDOMRef,
                        className: u()(l, h().uploadArea, (e = {}, b(e, h().droppable, this.state.isDragging), b(e, h().uploadModalIn, this.state.isOverZone), e)),
                        style: a,
                        children: (0, n.jsxs)("div", {
                            className: h().uploadDropModal,
                            children: [this.state.isDragging && (0, n.jsx)(j, {}), (0, n.jsx)("div", {
                                className: h().bgScale
                            }), (0, n.jsxs)("div", {
                                className: h().inner,
                                children: [(0, n.jsx)(c.Z, {
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
                Z: () => D
            });
            var n = r(281110),
                o = r(347365),
                i = r(101566),
                u = r(474717),
                a = r(124453),
                l = r(473708);

            function s(e, t, r, n, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            s(i, n, o, u, a, "next", e)
                        }

                        function a(e) {
                            s(i, n, o, u, a, "throw", e)
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

            function y(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
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
                    return y(this, r)
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
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
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
                            }([i, a])
                        }
                    }
                },
                D = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && b(e, t)
                    }(r, e);
                    var t = m(r);

                    function r(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                            o = arguments.length > 2 ? arguments[2] : void 0;
                        f(this, r);
                        return t.call(this, e, n, o)
                    }
                    var s = r.prototype;
                    s.uploadFiles = function(e, t) {
                        var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).addFilesTo,
                            o = this,
                            u = this,
                            a = function() {
                                return d(h(r.prototype), "upload", o)
                            };
                        return c((function() {
                            var r, o, s;
                            return w(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        a().call(u, {
                                            name: l.Z.Messages.ATTACHMENT_PROCESSING
                                        }, t, e);
                                        r = new AbortController;
                                        c.label = 1;
                                    case 1:
                                        c.trys.push([1, 4, , 5]);
                                        u.files = e;
                                        if (u._aborted) return [2];
                                        u._handleStart((function() {
                                            return r.abort()
                                        }));
                                        return [4, u.compressAndCheckFileSize()];
                                    case 2:
                                        if (!c.sent()) return [2];
                                        u.setUploadingTextForUI();
                                        return [4, (0, i.$)(u.files, !0, u._recomputeProgress.bind(u))];
                                    case 3:
                                        c.sent();
                                        return [3, 5];
                                    case 4:
                                        o = c.sent();
                                        u._handleException(o);
                                        return [3, 5];
                                    case 5:
                                        c.trys.push([5, 7, , 8]);
                                        return [4, u._createMessage(r.signal, t, n)];
                                    case 6:
                                        return [2, c.sent()];
                                    case 7:
                                        s = c.sent();
                                        if (u._raiseEndpointErrors) throw s;
                                        u._handleException(s);
                                        return [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    s._createMessage = function(e, t, r) {
                        var i = this;
                        return c((function() {
                            var l, s, c, f, p, d, h;
                            return w(this, (function(y) {
                                switch (y.label) {
                                    case 0:
                                        l = [];
                                        i.files.forEach((function(e, t) {
                                            var r = (0, a.B)(e, t);
                                            e.item.platform === u.ow.WEB && l.push(v({}, r))
                                        }));
                                        s = null != r && null != t ? i._addAttachmentsToPayload(t, r, l) : g(v({}, t), {
                                            attachments: l
                                        });
                                        c = {
                                            url: i._url,
                                            body: s,
                                            signal: e
                                        };
                                        f = "POST" === i._method ? n.ZP.post : n.ZP.patch;
                                        y.label = 1;
                                    case 1:
                                        y.trys.push([1, 3, , 4]);
                                        return [4, f(c)];
                                    case 2:
                                        p = y.sent();
                                        i._handleComplete(p.body);
                                        return [2, p.body];
                                    case 3:
                                        d = y.sent();
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
                f: () => c,
                l: () => f
            });
            var n = r(785893),
                o = r(667294),
                i = r(318715),
                u = r(652555),
                a = r(704230),
                l = r(840249),
                s = o.createContext(void 0);

            function c(e) {
                var t = o.useContext(s);
                if (null == t) throw new Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
                var r = t.listingsLoaded;
                (0, t.fetchGroupListingsForGuild)();
                return r
            }

            function f(e) {
                var t = e.guildId,
                    r = e.children,
                    c = e.refetchOnMount,
                    f = e.includeSoftDeleted,
                    p = e.countryCode,
                    d = e.dontFetchWhileTrue,
                    h = (0, i.ZP)([u.Z], (function() {
                        return u.Z.isConnected()
                    })),
                    v = (0, i.ZP)([l.Z], (function() {
                        return null != t ? l.Z.getSubscriptionGroupListingsForGuildFetchState(t) : l.M.FETCHED
                    })),
                    g = o.useRef(c),
                    y = o.useCallback((function() {
                        if (null != t && h && !0 !== d) {
                            var e = l.Z.getSubscriptionGroupListingsForGuildFetchState(t);
                            if (g.current || e === l.M.NOT_FETCHED) {
                                g.current = !1;
                                a.FP(t, {
                                    includeSoftDeleted: f,
                                    countryCode: p
                                })
                            }
                        }
                    }), [h, t, f, p, d]),
                    b = o.useMemo((function() {
                        return v === l.M.FETCHED && !0 !== g.current
                    }), [v, g]);
                return (0, n.jsx)(s.Provider, {
                    value: {
                        listingsLoaded: b,
                        fetchGroupListingsForGuild: y
                    },
                    children: r
                })
            }
        },
        547721: (e, t, r) => {
            r.d(t, {
                _k: () => m,
                jO: () => w,
                GG: () => D,
                qi: () => S,
                sp: () => j,
                r4: () => E,
                _1: () => L,
                HQ: () => P,
                YB: () => _,
                QV: () => Z,
                JH: () => x,
                oC: () => T
            });
            var n = r(667294),
                o = r(202351),
                i = r(251295),
                u = r(652555),
                a = r(172779),
                l = r(704230),
                s = r(840249),
                c = r(633440);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t, r, n, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            p(i, n, o, u, a, "next", e)
                        }

                        function a(e) {
                            p(i, n, o, u, a, "throw", e)
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
                            a = !1;
                        try {
                            for (r = r.call(e); !(u = (n = r.next()).done); u = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (a) throw o
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
            var y = function(e, t) {
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
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
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
                            }([i, a])
                        }
                    }
                },
                b = [],
                O = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.refetchOnMount,
                        i = void 0 !== r && r,
                        a = t.includeSoftDeleted,
                        c = void 0 === a || a,
                        f = t.countryCode,
                        p = t.dontFetchWhileTrue,
                        d = (0, o.e7)([u.Z], (function() {
                            return u.Z.isConnected()
                        })),
                        h = (0, o.e7)([s.Z], (function() {
                            return null != e ? s.Z.getSubscriptionGroupListingsForGuildFetchState(e) : s.M.FETCHED
                        })),
                        v = n.useRef(i);
                    n.useEffect((function() {
                        if (null != e && d && !0 !== p) {
                            var t = s.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                            if (i || t === s.M.NOT_FETCHED) {
                                v.current = !1;
                                l.FP(e, {
                                    includeSoftDeleted: c,
                                    countryCode: f
                                })
                            }
                        }
                    }), [d, e, c, i, f, p]);
                    return {
                        listingsLoaded: h === s.M.FETCHED && !0 !== v.current
                    }
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.includeSoftDeleted,
                        n = void 0 !== r && r,
                        i = t.includeUnpublished,
                        u = void 0 === i || i;
                    return (0, o.Wu)([s.Z], (function() {
                        if (null == e) return [];
                        var t = s.Z.getSubscriptionGroupListing(e);
                        if (null == t) return [];
                        var r = [],
                            o = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var l, c = t.subscription_listings_ids[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                                var f = l.value,
                                    p = s.Z.getSubscriptionListing(f);
                                null != p && (p.soft_deleted && !n || (p.published || u) && r.push(p))
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == c.return || c.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return r
                    }), [e, n, u])
                },
                w = function(e) {
                    return (0, o.e7)([s.Z], (function() {
                        return null != e ? s.Z.getSubscriptionListing(e) : null
                    }))
                },
                D = function(e) {
                    var t = (0, a.f)("useGroupListingsForGuild");
                    return (0, o.e7)([s.Z], (function() {
                        return null != e && t ? s.Z.getSubscriptionGroupListingsForGuild(e) : b
                    }))
                },
                S = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1,
                        sortDeletedListingsLast: !1
                    };
                    O(e);
                    return (0, o.Wu)([s.Z], (function() {
                        var r = null != e ? s.Z.getSubscriptionGroupListingsForGuild(e) : b,
                            n = [],
                            o = !0,
                            i = !1,
                            u = void 0;
                        try {
                            for (var a, l = r[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {
                                var c = a.value,
                                    f = !0,
                                    p = !1,
                                    d = void 0;
                                try {
                                    for (var h, g = c.subscription_listings_ids[Symbol.iterator](); !(f = (h = g.next()).done); f = !0) {
                                        var y = h.value,
                                            O = s.Z.getSubscriptionListing(y);
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
                                o || null == l.return || l.return()
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
                j = function(e) {
                    var t = h(n.useState(!1), 2),
                        r = t[0],
                        i = t[1],
                        u = n.useMemo((function() {
                            return e.map(c.W)
                        }), [e]),
                        a = (0, o.Wu)([s.Z], (function() {
                            return u.filter((function(e) {
                                return !s.Z.getDidFetchListingForSubscriptionPlanId(e)
                            }))
                        }), [u]);
                    n.useEffect((function() {
                        if (!r && a.length > 0) {
                            i(!0);
                            Promise.all(a.map((function(e) {
                                return l.vY(e)
                            }))).catch((function() {})).then((function() {
                                i(!1)
                            }))
                        }
                    }), [r, a]);
                    return {
                        loading: r
                    }
                },
                E = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        a = i[1],
                        s = (e = d((function(e, t, r) {
                            var n;
                            return y(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        i.trys.push([0, 2, 3, 4]);
                                        o(!0);
                                        a(null);
                                        return [4, l._d(e, t, r)];
                                    case 1:
                                        i.sent();
                                        return [2, !0];
                                    case 2:
                                        n = i.sent();
                                        a(n);
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
                        deleteSubscriptionListing: s
                    }
                },
                L = function() {
                    var e = h((0, i.Z)(l.AE), 2),
                        t = e[0],
                        r = e[1],
                        n = r.loading;
                    return {
                        error: r.error,
                        submitting: n,
                        archiveSubscriptionListing: t
                    }
                },
                P = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        a = i[1],
                        s = (e = d((function(e) {
                            var t, r, n, i;
                            return y(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        t = e.guildId, r = e.groupListingId, n = e.listingId;
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 3, 4, 5]);
                                        o(!0);
                                        a(null);
                                        return [4, l.O0({
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
                                        a(i);
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
                        publishSubscriptionListing: s,
                        clearError: function() {
                            return a(null)
                        }
                    }
                },
                _ = function(e) {
                    return (0, o.e7)([s.Z], (function() {
                        return null != e ? s.Z.getSubscriptionSettings(e) : void 0
                    }))
                },
                Z = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        a = i[1],
                        s = n.useCallback((e = d((function(e, t) {
                            var r;
                            return y(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        o(!0);
                                        a(null);
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, 4, 5]);
                                        return [4, l.W2(e, t)];
                                    case 2:
                                        n.sent();
                                        return [3, 5];
                                    case 3:
                                        r = n.sent();
                                        a(r);
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
                        updateSubscriptionsSettings: s,
                        error: u
                    }
                },
                x = function() {
                    var e, t = h(n.useState(!1), 2),
                        r = t[0],
                        o = t[1],
                        i = h(n.useState(null), 2),
                        u = i[0],
                        a = i[1],
                        s = n.useCallback((e = d((function(e) {
                            var t;
                            return y(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        o(!0);
                                        a(null);
                                        r.label = 1;
                                    case 1:
                                        r.trys.push([1, 3, 4, 5]);
                                        return [4, l.Qb(e)];
                                    case 2:
                                        r.sent();
                                        return [3, 5];
                                    case 3:
                                        t = r.sent();
                                        a(t);
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
                        fetchSubscriptionsSettings: s,
                        error: u
                    }
                },
                T = function(e) {
                    return (0, o.e7)([s.Z], (function() {
                        return null != e ? s.Z.getSubscriptionTrial(e) : null
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
        962957: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: p,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20.2949 0.298996L21.7089 1.713L19.4169 4.006L21.7089 6.299L20.2949 7.713L18.0019 5.42L15.7099 7.713L14.2949 6.299L16.5879 4.006L14.2949 1.713L15.7099 0.298996L18.0019 2.592L20.2949 0.298996ZM8.00195 13.006C10.207 13.006 12.002 11.211 12.002 9.006C12.002 6.801 10.207 5.006 8.00195 5.006C5.79695 5.006 4.00195 6.801 4.00195 9.006C4.00195 11.211 5.79695 13.006 8.00195 13.006ZM8.00195 14.006C3.29095 14.006 0.00195312 16.473 0.00195312 20.006V21.006H16.002V20.006C16.002 16.473 12.713 14.006 8.00195 14.006Z"
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=1f62c3ed590b2be0b713.js.map