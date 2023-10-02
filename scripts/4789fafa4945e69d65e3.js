(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [60575], {
        667237: e => {
            "use strict";

            function t(e) {
                this._capacity = o(e);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(e)) {
                    for (var t = e.length, r = 0; r < t; ++r) this[r] = e[r];
                    this._length = t
                }
            }
            t.prototype.toArray = function() {
                for (var e = this._length, t = new Array(e), n = this._front, r = this._capacity, o = 0; o < e; ++o) t[o] = this[n + o & r - 1];
                return t
            };
            t.prototype.push = function(e) {
                var t = arguments.length,
                    n = this._length;
                if (t > 1) {
                    var r = this._capacity;
                    if (n + t > r) {
                        for (var o = 0; o < t; ++o) {
                            this._checkCapacity(n + 1);
                            this[i = this._front + n & this._capacity - 1] = arguments[o];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var i = this._front, o = 0; o < t; ++o) {
                        this[i + n & r - 1] = arguments[o];
                        i++
                    }
                    this._length = n + t;
                    return n + t
                }
                if (0 === t) return n;
                this._checkCapacity(n + 1);
                this[o = this._front + n & this._capacity - 1] = e;
                this._length = n + 1;
                return n + 1
            };
            t.prototype.pop = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front + e - 1 & this._capacity - 1,
                        n = this[t];
                    this[t] = void 0;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.shift = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front,
                        n = this[t];
                    this[t] = void 0;
                    this._front = t + 1 & this._capacity - 1;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.unshift = function(e) {
                var t = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (t + n > (o = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(t + 1);
                            var o = this._capacity;
                            this[c = (this._front - 1 & o - 1 ^ o) - o] = arguments[r];
                            t++;
                            this._length = t;
                            this._front = c
                        }
                        return t
                    }
                    var i = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var c;
                        this[c = (i - 1 & o - 1 ^ o) - o] = arguments[r];
                        i = c
                    }
                    this._front = i;
                    this._length = t + n;
                    return t + n
                }
                if (0 === n) return t;
                this._checkCapacity(t + 1);
                o = this._capacity;
                this[r = (this._front - 1 & o - 1 ^ o) - o] = e;
                this._length = t + 1;
                this._front = r;
                return t + 1
            };
            t.prototype.peekBack = function() {
                var e = this._length;
                if (0 !== e) {
                    return this[this._front + e - 1 & this._capacity - 1]
                }
            };
            t.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            t.prototype.get = function(e) {
                var t = e;
                if (t === (0 | t)) {
                    var n = this._length;
                    t < 0 && (t += n);
                    if (!(t < 0 || t >= n)) return this[this._front + t & this._capacity - 1]
                }
            };
            t.prototype.isEmpty = function() {
                return 0 === this._length
            };
            t.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            t.prototype.toString = function() {
                return this.toArray().toString()
            };
            t.prototype.valueOf = t.prototype.toString;
            t.prototype.removeFront = t.prototype.shift;
            t.prototype.removeBack = t.prototype.pop;
            t.prototype.insertFront = t.prototype.unshift;
            t.prototype.insertBack = t.prototype.push;
            t.prototype.enqueue = t.prototype.push;
            t.prototype.dequeue = t.prototype.shift;
            t.prototype.toJSON = t.prototype.toArray;
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            t.prototype._makeCapacity = function() {
                for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0
            };
            t.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(o(1.5 * this._capacity + 16))
            };
            t.prototype._resizeTo = function(e) {
                var t = this._front,
                    n = this._capacity,
                    o = new Array(n),
                    i = this._length;
                r(this, 0, o, 0, n);
                this._capacity = e;
                this._makeCapacity();
                this._front = 0;
                if (t + i <= n) r(o, t, this, 0, i);
                else {
                    var c = i - (t + i & n - 1);
                    r(o, t, this, 0, c);
                    r(o, 0, this, c, i - c)
                }
            };
            var n = Array.isArray;

            function r(e, t, n, r, o) {
                for (var i = 0; i < o; ++i) n[i + r] = e[i + t]
            }

            function o(e) {
                if ("number" != typeof e) {
                    if (!n(e)) return 16;
                    e = e.length
                }
                return function(e) {
                    e >>>= 0;
                    e -= 1;
                    e |= e >> 1;
                    e |= e >> 2;
                    e |= e >> 4;
                    e |= e >> 8;
                    return 1 + (e |= e >> 16)
                }(Math.min(Math.max(16, e), 1073741824))
            }
            e.exports = t
        },
        23279: (e, t, n) => {
            var r = n(513218),
                o = n(707771),
                i = n(14841),
                c = Math.max,
                u = Math.min;
            e.exports = function(e, t, n) {
                var l, a, s, f, p, d, h = 0,
                    O = !1,
                    y = !1,
                    b = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                t = i(t) || 0;
                if (r(n)) {
                    O = !!n.leading;
                    s = (y = "maxWait" in n) ? c(i(n.maxWait) || 0, t) : s;
                    b = "trailing" in n ? !!n.trailing : b
                }

                function v(t) {
                    var n = l,
                        r = a;
                    l = a = void 0;
                    h = t;
                    return f = e.apply(r, n)
                }

                function g(e) {
                    h = e;
                    p = setTimeout(E, t);
                    return O ? v(e) : f
                }

                function _(e) {
                    var n = e - d;
                    return void 0 === d || n >= t || n < 0 || y && e - h >= s
                }

                function E() {
                    var e = o();
                    if (_(e)) return m(e);
                    p = setTimeout(E, function(e) {
                        var n = t - (e - d);
                        return y ? u(n, s - (e - h)) : n
                    }(e))
                }

                function m(e) {
                    p = void 0;
                    if (b && l) return v(e);
                    l = a = void 0;
                    return f
                }

                function S() {
                    var e = o(),
                        n = _(e);
                    l = arguments;
                    a = this;
                    d = e;
                    if (n) {
                        if (void 0 === p) return g(d);
                        if (y) {
                            clearTimeout(p);
                            p = setTimeout(E, t);
                            return v(d)
                        }
                    }
                    void 0 === p && (p = setTimeout(E, t));
                    return f
                }
                S.cancel = function() {
                    void 0 !== p && clearTimeout(p);
                    h = 0;
                    l = d = a = p = void 0
                };
                S.flush = function() {
                    return void 0 === p ? f : m(o())
                };
                return S
            }
        },
        707771: (e, t, n) => {
            var r = n(555639);
            e.exports = function() {
                return r.Date.now()
            }
        },
        823493: (e, t, n) => {
            var r = n(23279),
                o = n(513218);
            e.exports = function(e, t, n) {
                var i = !0,
                    c = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                if (o(n)) {
                    i = "leading" in n ? !!n.leading : i;
                    c = "trailing" in n ? !!n.trailing : c
                }
                return r(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: c
                })
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => c
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function c() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        396179: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                c = n(735885),
                u = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.Z.dispatch(a({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t
                }, n));
                (0, c.jN)(u.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                p = n(652591),
                d = n(775173),
                h = n(488110),
                O = n(239620),
                y = n(473708);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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
            const _ = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    s(e, t, n)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(v({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = f.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(v({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
                    })
                },
                submitComplete: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(e, t) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var c = e.username,
                        l = e.email,
                        a = e.emailToken,
                        s = e.password,
                        f = e.avatar,
                        b = e.newPassword,
                        _ = e.discriminator,
                        E = t.close;
                    return (0, h.Z)((function(e) {
                        var t = g(v({
                                username: c,
                                email: l,
                                email_token: a,
                                password: s,
                                avatar: f,
                                new_password: b
                            }, e), {
                                discriminator: null != _ && "" !== _ ? _ : void 0
                            }),
                            n = o.Z.get(u.JkL),
                            i = (0, O.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var p = o.Z.get(u.scU);
                        if (null != O.mv && null != p) {
                            t.push_voip_provider = O.mv;
                            t.push_voip_token = p
                        }
                        return r.ZP.patch({
                            url: u.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: y.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            r = t.token;
                        p.default.track(u.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, d.xR)(t.avatar)
                        });
                        delete t.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != b && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: b
                        });
                        null != s && null != b && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        E ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        385028: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = n(667294),
                i = n(304548),
                c = n(908741);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e, t, n, r) {
                return e.getAvatarURL(r, t, n)
            }
            const s = o.memo((function(e) {
                var t = e.user,
                    n = e.size,
                    s = void 0 === n ? i.AvatarSizes.SIZE_32 : n,
                    f = e.animate,
                    p = void 0 !== f && f,
                    d = e["aria-hidden"],
                    h = void 0 !== d && d,
                    O = l(e, ["user", "size", "animate", "aria-hidden"]),
                    y = o.useContext(c.Z);
                return (0, r.jsx)(i.Avatar, function(e) {
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
                }({
                    src: a(t, (0, i.getAvatarSize)(s), p, y),
                    size: s,
                    "aria-label": h ? void 0 : t.username,
                    "aria-hidden": h
                }, O))
            }))
        },
        775428: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => a
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
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

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var a = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    a = e.height,
                    s = void 0 === a ? 24 : a,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    O = e.secondaryColor,
                    y = void 0 === O ? "transparent" : O,
                    b = e.secondaryColorClass,
                    v = void 0 === b ? "" : b,
                    g = l(e, ["width", "height", "color", "colorClass", "secondaryColor", "secondaryColorClass"]);
                return (0, r.jsxs)("svg", u(function(e) {
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
                }({}, (0, i.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: h
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof y ? y : y.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: v
                    })]
                }))
            }
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(120415);

            function o(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var c = e.apply(t, n);

                        function u(e) {
                            o(c, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            o(c, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function u(e, t) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = i((function(e, t) {
                    var o, i, u, l;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                o = c.sent(), i = o.default;
                                if (null != (u = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (l = document.createElement("a")).href = e;
                                    l.target = "_blank";
                                    l.rel = "noreferrer noopener";
                                    l.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        175072: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r,
                H: () => o
            });
            var r, o;
            ! function(e) {
                e[e.GAME = 1] = "GAME";
                e[e.TICKETED_EVENTS = 3] = "TICKETED_EVENTS";
                e[e.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS"
            }(r || (r = {}));
            ! function(e) {
                e[e.BOT = 0] = "BOT";
                e[e.SERVER = 1] = "SERVER";
                e[e.SYSTEM_DM = 2] = "SYSTEM_DM";
                e[e.OFFICIAL = 3] = "OFFICIAL";
                e[e.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM";
                e[e.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER";
                e[e.AI = 6] = "AI";
                e[e.REMIX = 7] = "REMIX"
            }(o || (o = {}))
        },
        461557: (e, t, n) => {
            "use strict";
            n.d(t, {
                sE: () => s,
                L_: () => f,
                nj: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(302685),
                c = n(2590);

            function u(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            u(i, r, o, c, l, "next", e)
                        }

                        function l(e) {
                            u(i, r, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var a = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function s(e, t) {
                r.ZP.get({
                    url: c.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
                }).then((function(e) {
                    var n = [];
                    e.body.length > 0 && (n = e.body.map((function(e) {
                        return e.map((function(e) {
                            return {
                                connectionType: e.connection_type,
                                connectionMetadataField: e.connection_metadata_field,
                                applicationId: e.application_id,
                                operator: e.operator,
                                value: e.value
                            }
                        }))
                    })));
                    o.Z.dispatch({
                        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionConfigurations: n
                    })
                })).catch((function() {}))
            }

            function f(e, t, n) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = l((function(e, t, n) {
                    var u, l, s;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                u = n.map((function(e) {
                                    return e.map((function(e) {
                                        return {
                                            connection_type: e.connectionType,
                                            connection_metadata_field: e.connectionMetadataField,
                                            application_id: e.applicationId,
                                            operator: e.operator,
                                            value: e.value
                                        }
                                    }))
                                }));
                                return [4, r.ZP.put({
                                    url: c.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                                    body: 0 === u.length ? [] : u,
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    var t = [];
                                    e.body.length > 0 && (t = e.body.map((function(e) {
                                        return e.map((function(e) {
                                            return {
                                                connectionType: e.connection_type,
                                                connectionMetadataField: e.connection_metadata_field,
                                                applicationId: e.application_id,
                                                operator: e.operator,
                                                value: e.value
                                            }
                                        }))
                                    })));
                                    return t
                                }))];
                            case 1:
                                l = a.sent();
                                return [4, (0,
                                    i.H)(e, t, !1)];
                            case 2:
                                null != (s = a.sent()) && o.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                                    guildId: e,
                                    roleId: t,
                                    count: s
                                });
                                o.Z.dispatch({
                                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                                    roleId: t,
                                    roleConnectionConfigurations: l
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = l((function() {
                    return a(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: c.ANM.APPLICATION_USER_ROLE_CONNECTIONS
                                })];
                            case 1:
                                return [2, e.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        749978: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => ae
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                u = n(441143),
                l = n.n(u),
                a = n(496486),
                s = n.n(a),
                f = n(202351),
                p = n(795308),
                d = n(575945),
                h = n(304548),
                O = n(579344),
                y = n(327499),
                b = n(396179),
                v = n(385028),
                g = n(74535),
                _ = n(265688),
                E = n(396043),
                m = n(318277),
                S = n(344832),
                w = n(967783),
                C = n(384411),
                N = n(722406),
                T = n(664625),
                j = n(61209),
                P = n(629223),
                I = n(21372),
                R = n(682776),
                A = n(609853),
                x = n(718831),
                D = n(621329),
                M = n(6171),
                L = n(386991),
                k = n(652591),
                Z = n(461557),
                U = n(53645),
                B = n(491984),
                G = n(259718),
                F = n(497842),
                H = n(338935),
                V = n(678005),
                z = n(2590),
                W = n(473708),
                Y = n(989169),
                q = n.n(Y);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Q(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function X(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            Q(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            Q(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function J(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        J(e, t, n[t])
                    }))
                }
                return e
            }

            function ee(e, t) {
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

            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ne, re = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function oe(e) {
                var t = e.platformType,
                    n = e.className,
                    o = (0, g.ZP)(),
                    i = _.Z.get(t);
                return (0,
                    r.jsx)("img", {
                    src: (0, d.ap)(o) ? i.icon.lightSVG : i.icon.darkSVG,
                    alt: "",
                    className: c()(q().platformIcon, n)
                })
            }

            function ie(e) {
                var t = e.channel,
                    n = e.className,
                    o = (0, S.KS)(t);
                return (0, r.jsxs)("div", {
                    className: c()(q().channelName, n),
                    children: [null != o ? (0, r.jsx)(o, {
                        className: q().channelNameIcon
                    }) : null, (0, r.jsx)(h.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-normal",
                        className: q().channelNameText,
                        children: t.name
                    })]
                })
            }

            function ce(e) {
                var t, n = e.connectionType,
                    o = e.connectionMetadataField,
                    i = e.operator,
                    c = e.value,
                    u = e.result,
                    l = e.description,
                    a = null;
                if (null != l) switch (i) {
                    case V.iO.LESS_THAN:
                        a = W.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: l,
                            count: Math.max(0, Number(c) - 1)
                        });
                        break;
                    case V.iO.GREATER_THAN:
                        a = W.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: l,
                            count: Math.max(0, Number(c) + 1)
                        });
                        break;
                    default:
                        a = l
                } else {
                    var s;
                    switch (i) {
                        case V.iO.EQUAL:
                            s = W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE;
                            n === z.ABu.PAYPAL && o === V.PC.PAYPAL_VERIFIED && (s = W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
                            break;
                        case V.iO.NOT_EQUAL:
                            s = W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
                            break;
                        case V.iO.LESS_THAN:
                            s = W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
                            break;
                        case V.iO.GREATER_THAN:
                            s = W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
                            break;
                        case void 0:
                        case null:
                            return null
                    }
                    if (null == (a = (0, U.n_)({
                            connectionType: n,
                            connectionMetadataField: o,
                            operator: i,
                            operatorText: s,
                            value: c
                        }))) return null
                }
                t = u ? "header-secondary" : "text-danger";
                return (0, r.jsx)(h.Text, {
                    variant: "text-xs/normal",
                    color: t,
                    className: q().connectionsCheck,
                    children: a
                })
            }

            function ue(e) {
                var t = e.eligibilityStatesGroups,
                    n = e.onPlatformConnect,
                    i = e.onPlatformConnected,
                    u = te(o.useState({}), 2),
                    a = u[0],
                    f = u[1],
                    d = te(o.useState(0), 2),
                    O = d[0],
                    y = d[1],
                    b = te(o.useState(null), 2),
                    g = b[0],
                    E = b[1],
                    m = te(o.useState(null), 2),
                    S = m[0],
                    w = m[1],
                    C = o.useMemo((function() {
                        return s().flatten(t)
                    }), [t]),
                    T = o.useMemo((function() {
                        return s().groupBy(C, (function(e) {
                            return "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")
                        }))
                    }), [C]);
                o.useEffect((function() {
                    return y(Date.now())
                }), [C]);
                o.useEffect((function() {
                    if (null != g) {
                        var e = T["".concat(g).concat(null != S ? ":".concat(S.id) : "")];
                        if (null != e) {
                            e.every((function(e) {
                                return e.result
                            })) && i(g, S)
                        }
                    }
                }), [T, g, S, i]);
                var j = (0, h.useToken)(p.Z.unsafe_rawColors.GREEN_330).hex();
                return (0, r.jsx)(r.Fragment, {
                    children: Object.keys(T).sort((function(e, t) {
                        var n = T[e].every((function(e) {
                                return e.result
                            })),
                            r = T[t].every((function(e) {
                                return e.result
                            }));
                        return !0 === n && !1 === r ? 1 : !1 === n && !0 === r ? -1 : 0
                    })).map((function(e) {
                        var t, o, i, u = T[e],
                            s = u.find((function(e) {
                                return null == e.operator
                            })),
                            p = u.filter((function(e) {
                                return null != e.operator
                            })),
                            d = (null == s || s.result) && p.every((function(e) {
                                return e.result
                            })),
                            y = u.find((function(e) {
                                return null != e.application
                            })),
                            b = _.Z.get(e),
                            g = null == y ? void 0 : y.application,
                            m = null != (null == g ? void 0 : g.bot) ? new N.Z(g.bot) : null;
                        U.SJ.includes(null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : "") ? o = (0, r.jsx)(B.Z, {
                            className: q().botTag,
                            color: j,
                            size: 16
                        }) : null != m && (o = (0, r.jsx)(A.Z, {
                            className: q().botTag,
                            verified: m.isVerifiedBot()
                        }));
                        var S, C, P, I, R = a[null !== (i = null == b ? void 0 : b.type) && void 0 !== i ? i : V.Kt],
                            L = !d && null != R && R <= O;
                        S = d ? (0, r.jsx)(D.Z, {
                            className: q().connectionsChecksGroupCheckmark
                        }) : L ? (0, r.jsx)(h.Button, {
                            size: h.Button.Sizes.TINY,
                            look: h.Button.Looks.LINK,
                            color: h.Button.Colors.LINK,
                            className: q().connectionsChecksGroupRetryButton,
                            children: W.Z.Messages.RETRY
                        }) : (0, r.jsx)(x.Z, {
                            direction: x.Z.Directions.RIGHT,
                            className: q().connectionsChecksGroupCaret
                        });
                        (null == b ? void 0 : b.type) === z.ABu.STEAM && (C = W.Z.Messages.CONNECTIONS_STEAM_TOOLTIP);
                        return (0, r.jsxs)(h.Clickable, {
                            className: c()(q().connectionsChecksGroup, d ? q().connectionsChecksGroupPassed : null),
                            onClick: d ? void 0 : function() {
                                return function(e, t) {
                                    (0,
                                        F.Z)(e, "Verified Roles Connect Accounts Modal", null == t ? void 0 : t.role_connections_verification_url);
                                    f(ee($({}, a), J({}, e, Date.now())));
                                    E(e);
                                    w(null != t ? t : null);
                                    n()
                                }(null !== (P = null == b ? void 0 : b.type) && void 0 !== P ? P : V.Kt, g)
                            },
                            children: [!d && L ? (0, r.jsx)("div", {
                                className: q().connectionsChecksGroupRequirementsNotMet,
                                children: (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
                                })
                            }) : null, null != b ? (0, r.jsx)(oe, {
                                platformType: b.type
                            }) : null, null != m ? (0, r.jsx)(v.Z, {
                                user: m
                            }) : null, (0, r.jsxs)("div", {
                                className: q().connectionsChecksGroupTextContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: q().connectionsChecksGroupTextNameContainer,
                                    children: [(0, r.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: null !== (I = null == b ? void 0 : b.name) && void 0 !== I ? I : null == g ? void 0 : g.name
                                    }), o, null != C ? (0, r.jsx)(h.Tooltip, {
                                        text: C,
                                        children: function(e) {
                                            return (0, r.jsx)(M.Z, ee($({}, e), {
                                                className: q().connectionsChecksGroupTextNameInfoIcon
                                            }))
                                        }
                                    }) : null]
                                }), p.map((function(e) {
                                    var t = e.connection_type,
                                        n = e.connection_metadata_field,
                                        o = e.operator,
                                        i = e.value,
                                        c = e.result,
                                        u = e.description;
                                    l()(null != n, "connectionMetadataField is null");
                                    l()(null != o, "operator is null");
                                    l()(null != i, "value is null");
                                    return (0, r.jsx)(ce, {
                                        connectionType: t,
                                        connectionMetadataField: n,
                                        operator: o,
                                        value: i,
                                        result: c,
                                        description: u
                                    }, n)
                                }))]
                            }), S]
                        }, e)
                    }))
                })
            }

            function le(e) {
                var t = e.account,
                    n = e.setShowPreviewInvisibleIcon,
                    i = e.setShowPreviewMetadata,
                    c = te(o.useState(t.friendSync), 2),
                    u = c[0],
                    l = c[1],
                    a = te(o.useState(t.showActivity), 2),
                    s = a[0],
                    f = a[1],
                    p = te(o.useState(1 === t.metadataVisibility), 2),
                    d = p[0],
                    y = p[1],
                    b = te(o.useState(1 === t.visibility), 2),
                    v = b[0],
                    g = b[1];
                o.useEffect((function() {
                    n(!v);
                    i(d)
                }), []);
                var E, m, S, w = _.Z.get(t.type);
                z.BFP.has(t.type) && (E = (0, r.jsx)(h.FormSwitch, {
                    className: q().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: u,
                    onChange: function(e) {
                        l(e);
                        O.Z.setFriendSync(t.type, t.id, e)
                    },
                    children: (0, r.jsx)(h.Text, {
                        variant: "text-sm/semibold",
                        children: W.Z.Messages.SYNC_FRIENDS
                    })
                }));
                z.vbS.has(t.type) && (m = (0, r.jsx)(h.FormSwitch, {
                    className: q().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: s,
                    onChange: function(e) {
                        f(e);
                        O.Z.setShowActivity(t.type, t.id, e)
                    },
                    children: (0, r.jsx)(h.Text, {
                        variant: "text-sm/semibold",
                        children: W.Z.Messages.DISPLAY_ACTIVITY.format({
                            platform: w.name
                        })
                    })
                }));
                !0 === w.hasMetadata && (S = (0, r.jsx)(h.FormSwitch, {
                    className: q().accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: d,
                    disabled: !v,
                    onChange: function(e) {
                        i(e);
                        y(e);
                        O.Z.setMetadataVisibility(t.type, t.id, e ? 1 : 0)
                    },
                    children: (0, r.jsx)(h.Text, {
                        variant: "text-sm/semibold",
                        children: W.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
                    })
                }));
                return (0, r.jsxs)("div", {
                    className: q().accountConnectedPrivacyOptionsContainer,
                    children: [(0, r.jsx)(h.FormSwitch, {
                        className: q().accountConnectedPrivacyOptionsSwitchItem,
                        hideBorder: !0,
                        value: v,
                        onChange: function(e) {
                            n(!e);
                            g(e);
                            O.Z.setVisibility(t.type, t.id, e ? 1 : 0)
                        },
                        children: (0, r.jsx)(h.Text, {
                            variant: "text-sm/semibold",
                            children: W.Z.Messages.DISPLAY_ON_PROFILE
                        })
                    }), S, m, E]
                })
            }! function(e) {
                e[e.CHECKS_REQUIRED = 0] = "CHECKS_REQUIRED";
                e[e.ACCOUNT_CONNECTED = 1] = "ACCOUNT_CONNECTED";
                e[e.ROLE_GRANTED = 2] = "ROLE_GRANTED"
            }(ne || (ne = {}));

            function ae(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    i = e.guildId,
                    c = e.role,
                    u = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        null == n || n();
                        e && (0, h.closeModal)(H.s$, h.DEFAULT_MODAL_CONTEXT)
                    },
                    a = function() {
                        u(!0);
                        b.Z.open(z.oAB.AUTHORIZED_APPS)
                    },
                    s = function() {
                        u(!0);
                        b.Z.open(z.oAB.CONNECTIONS)
                    },
                    p = function() {
                        k.default.track(z.rMx.PASSPORT_CHALLENGE_STARTED, $({
                            role_id: c.id
                        }, (0, E.hH)(i)))
                    },
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        Oe(e);
                        ve(t);
                        S(ne.ACCOUNT_CONNECTED);
                        null != t && (0, Z.nj)().then((function(e) {
                            Ee(e)
                        })).catch((function() {}))
                    },
                    O = te(o.useState(ne.CHECKS_REQUIRED), 2),
                    v = O[0],
                    S = O[1],
                    N = te(o.useState(null), 2),
                    A = N[0],
                    x = N[1],
                    D = te(o.useState(!1), 2),
                    M = D[0],
                    U = D[1],
                    B = te(o.useState(!0), 2),
                    F = B[0],
                    V = B[1],
                    Y = te(o.useState(!1), 2),
                    K = Y[0],
                    Q = Y[1],
                    J = te(o.useState(!0), 2),
                    ee = J[0],
                    oe = J[1],
                    ce = te(o.useState(!1), 2),
                    ae = ce[0],
                    se = ce[1],
                    fe = (0, f.e7)([P.Z], (function() {
                        return P.Z.getAccounts()
                    })),
                    pe = (0, f.e7)([T.default], (function() {
                        return T.default.getId()
                    })),
                    de = te(o.useState(null), 2),
                    he = de[0],
                    Oe = de[1],
                    ye = te(o.useState(null), 2),
                    be = ye[0],
                    ve = ye[1],
                    ge = te(o.useState(null), 2),
                    _e = ge[0],
                    Ee = ge[1],
                    me = (0, g.ZP)(),
                    Se = (0, f.e7)([C.default], (function() {
                        return C.default.locale
                    })),
                    we = (0, f.e7)([I.ZP], (function() {
                        return I.ZP.getMember(i, pe)
                    })),
                    Ce = (0, f.e7)([j.Z], (function() {
                        return j.Z.getMutableGuildChannelsForGuild(i)
                    })),
                    Ne = Object.values(Ce).filter((function(e) {
                        return R.Z.can(z.Plq.VIEW_CHANNEL, e) && R.Z.can(z.Plq.SEND_MESSAGES, e) && (0, m.Z)(e).includes(c)
                    }));
                o.useEffect((function() {
                    y.Z.fetchGuildRoleConnectionsEligibility(i, c.id).then((function(e) {
                        x(e);
                        U(function(e) {
                            return e.some((function(e) {
                                return e.every((function(e) {
                                    return e.result
                                }))
                            }))
                        }(e));
                        V(!1)
                    }))
                }), [i, c.id, fe]);
                o.useEffect((function() {
                    k.default.track(z.rMx.PASSPORT_CHALLENGE_VIEWED, $({
                        role_id: c.id
                    }, (0, E.hH)(i)))
                }), [i, c.id]);
                o.useEffect((function() {
                    if (K && null != we && we.roles.includes(c.id)) {
                        Q(!1);
                        Ne.length > 0 ? S(ne.ROLE_GRANTED) : null == n || n();
                        k.default.track(z.rMx.PASSPORT_CHALLENGE_FINISHED, $({
                            role_id: c.id
                        }, (0, E.hH)(i)))
                    }
                }), [K, Ne.length, we, i, c.id, n]);

                function Te() {
                    return (Te = X((function() {
                        return re(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    Q(!0);
                                    return [4, y.Z.assignGuildRoleConnection(i, c.id)];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return (0, r.jsxs)(h.ModalRoot, {
                    size: h.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-label": W.Z.Messages.CONNECT_ACCOUNT_TITLE,
                    className: q().modalRoot,
                    children: [function() {
                        switch (v) {
                            case ne.CHECKS_REQUIRED:
                                return (0, r.jsxs)(h.ModalHeader, {
                                    className: q().header,
                                    separator: !1,
                                    children: [(0, r.jsx)("div", {
                                        className: q().headerText,
                                        children: (0,
                                            r.jsx)(h.Heading, {
                                            variant: "heading-xl/extrabold",
                                            children: W.Z.Messages.CONNECT_ACCOUNT_TITLE
                                        })
                                    }), (0, r.jsx)(h.ModalCloseButton, {
                                        onClick: function() {
                                            return u()
                                        }
                                    })]
                                });
                            case ne.ACCOUNT_CONNECTED:
                                var e, t;
                                l()(null != he, "lastPlatformConnected is null");
                                var n = null !== (t = null == be ? void 0 : be.name) && void 0 !== t ? t : null === (e = _.Z.get(he)) || void 0 === e ? void 0 : e.name;
                                return (0, r.jsxs)(h.ModalHeader, {
                                    className: q().header,
                                    separator: !1,
                                    children: [(0, r.jsx)(h.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: q().headerText,
                                        children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                                            platformName: n
                                        })
                                    }), (0, r.jsx)(h.ModalCloseButton, {
                                        onClick: function() {
                                            return u()
                                        }
                                    })]
                                });
                            case ne.ROLE_GRANTED:
                                return (0, r.jsxs)(h.ModalHeader, {
                                    className: q().header,
                                    separator: !1,
                                    children: [(0, r.jsx)(h.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: q().headerText,
                                        children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
                                    }), (0, r.jsx)(h.ModalCloseButton, {
                                        onClick: function() {
                                            return u(!0)
                                        }
                                    })]
                                });
                            default:
                                return null
                        }
                    }(), (0, r.jsx)(h.Sequencer, {
                        step: v,
                        steps: [ne.CHECKS_REQUIRED, ne.ACCOUNT_CONNECTED, ne.ROLE_GRANTED],
                        children: function() {
                            switch (v) {
                                case ne.CHECKS_REQUIRED:
                                    var e = null != A && A.length > 1;
                                    return (0, r.jsx)(h.ModalContent, {
                                        children: F || null == A ? (0, r.jsx)(h.Spinner, {
                                            className: q().connectionsChecksGroups
                                        }) : (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(h.Text, {
                                                variant: "text-md/medium",
                                                color: "header-secondary",
                                                children: e ? W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                                            }), (0, r.jsx)(h.ScrollerThin, {
                                                className: q().connectionsChecksGroups,
                                                children: (0, r.jsx)(ue, {
                                                    eligibilityStatesGroups: A,
                                                    onPlatformConnect: p,
                                                    onPlatformConnected: d
                                                })
                                            }), (0, r.jsx)(h.Text, {
                                                variant: "text-xs/normal",
                                                className: q().footerText,
                                                color: "header-secondary",
                                                children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                    privacyPolicyUrl: z.EYA.PRIVACY,
                                                    onAuthorizedApplicationsClick: function() {
                                                        return a()
                                                    },
                                                    onConnectionsClick: function() {
                                                        return s()
                                                    }
                                                })
                                            })]
                                        })
                                    });
                                case ne.ACCOUNT_CONNECTED:
                                    l()(null != he, "lastPlatformConnected is null");
                                    var t = fe.find((function(e) {
                                            var t = e.type;
                                            return he === t
                                        })),
                                        n = null == _e ? void 0 : _e.find((function(e) {
                                            return e.application.id === (null == be ? void 0 : be.id)
                                        }));
                                    return (0, r.jsxs)(h.ModalContent, {
                                        children: [(0, r.jsx)(h.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                privacyPolicyUrl: z.EYA.PRIVACY,
                                                onAuthorizedApplicationsClick: function() {
                                                    return a()
                                                },
                                                onConnectionsClick: function() {
                                                    return s()
                                                }
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: q().accountConnectedContainer,
                                            children: null == t && null == n ? (0, r.jsx)(h.Spinner, {
                                                className: q().accountConnectedLoading
                                            }) : (0, r.jsxs)(r.Fragment, {
                                                children: [null != t ? (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsxs)("div", {
                                                        className: q().accountConnectedContainerChild,
                                                        children: [(0, r.jsx)(h.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, r.jsx)(w.E3, {
                                                            connectedAccount: t,
                                                            userId: pe,
                                                            theme: me,
                                                            locale: Se,
                                                            className: q().accountConnectedPreviewConnectedUserAccount,
                                                            showMetadata: ee,
                                                            showInvisibleIcon: ae
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: q().accountConnectedContainerChild,
                                                        children: [(0, r.jsx)(h.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                                                        }), (0, r.jsx)(le, {
                                                            account: t,
                                                            setShowPreviewInvisibleIcon: se,
                                                            setShowPreviewMetadata: oe
                                                        })]
                                                    })]
                                                }) : null, null != n ? (0, r.jsxs)("div", {
                                                    className: q().accountConnectedContainerChild,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: q().accountConnectedHeader,
                                                        children: [(0, r.jsx)(h.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, r.jsx)(h.Tooltip, {
                                                            text: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                                                            children: function(e) {
                                                                return (0,
                                                                    r.jsx)(L.Z, $({}, e))
                                                            }
                                                        })]
                                                    }), (0, r.jsx)(w.tH, {
                                                        applicationRoleConnection: n,
                                                        className: q().accountConnectedPreviewConnectedUserAccount,
                                                        locale: Se
                                                    })]
                                                }) : null]
                                            })
                                        })]
                                    });
                                case ne.ROLE_GRANTED:
                                    return (0, r.jsxs)(h.ModalContent, {
                                        children: [(0, r.jsxs)("div", {
                                            className: q().roleGranted,
                                            children: [(0, r.jsx)(G.Z, {
                                                guildId: i,
                                                className: q().verifiedIcon,
                                                role: c,
                                                size: 24
                                            }), (0, r.jsx)(h.Text, {
                                                variant: "text-lg/semibold",
                                                color: "header-primary",
                                                className: q().roleGrantedName,
                                                children: c.name
                                            })]
                                        }), (0, r.jsx)(h.ScrollerThin, {
                                            className: q().channelsGranted,
                                            children: Ne.map((function(e) {
                                                return (0, r.jsx)(ie, {
                                                    channel: e
                                                }, e.id)
                                            }))
                                        })]
                                    });
                                default:
                                    return null
                            }
                        }()
                    }), function() {
                        var e, t = null !== (e = null == A ? void 0 : A.flat().some((function(e) {
                            return null == e.application_id
                        }))) && void 0 !== e && e;
                        switch (v) {
                            case ne.CHECKS_REQUIRED:
                                return (0, r.jsxs)(h.ModalFooter, {
                                    children: [(0, r.jsx)(h.Button, {
                                        color: h.ButtonColors.BRAND,
                                        onClick: function() {
                                            return function() {
                                                return Te.apply(this, arguments)
                                            }()
                                        },
                                        disabled: F || !M || K,
                                        children: W.Z.Messages.FINISH
                                    }), t ? (0,
                                        r.jsx)("div", {
                                        className: q().manageConnectionsFooterButton,
                                        children: (0, r.jsx)(h.Button, {
                                            look: h.ButtonLooks.LINK,
                                            color: h.ButtonColors.LINK,
                                            onClick: s,
                                            children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                });
                            case ne.ACCOUNT_CONNECTED:
                                return (0, r.jsx)(h.ModalFooter, {
                                    children: (0, r.jsx)(h.Button, {
                                        color: h.ButtonColors.BRAND,
                                        onClick: function() {
                                            return S(ne.CHECKS_REQUIRED)
                                        },
                                        children: W.Z.Messages.DONE
                                    })
                                });
                            default:
                                return (0, r.jsxs)(h.ModalFooter, {
                                    children: [(0, r.jsx)(h.Button, {
                                        color: h.ButtonColors.BRAND,
                                        onClick: function() {
                                            return u(!0)
                                        },
                                        children: W.Z.Messages.CLOSE
                                    }), t ? (0, r.jsx)("div", {
                                        className: q().manageConnectionsFooterButton,
                                        children: (0, r.jsx)(h.Button, {
                                            look: h.ButtonLooks.LINK,
                                            color: h.ButtonColors.LINK,
                                            onClick: s,
                                            children: W.Z.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                })
                        }
                    }()]
                })
            }
        },
        908741: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(667294).createContext(void 0)
        },
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
                N2: () => f,
                YM: () => p,
                Dx: () => d,
                jD: () => h,
                bO: () => O,
                Xp: () => y,
                fV: () => b
            });
            var r = n(202351),
                o = n(747820),
                i = n(260561),
                c = n(339432),
                u = n(5544),
                l = n(567403),
                a = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[u.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([u.ZP, o.Z], (function() {
                    return null != e && s(e.id, u.ZP, o.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(a.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function p(e) {
                if (__OVERLAY__) return !1;
                if (e === a.ME || e === a.I_8) return !1;
                if ((0, c.cn)()) return !1;
                var t = l.Z.getGuild(e);
                return null != t && (!!s(e, u.ZP, o.Z) && t.hasFeature(a.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var d = (0, i.B)({
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
                h = (0, i.B)({
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
                O = (0, i.B)({
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
                }),
                y = ((0, i.B)({
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
                }), (0, i.B)({
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
                }), (0,
                    i.B)({
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
                })),
                b = (0, i.B)({
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
        302685: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => O,
                H: () => g
            });
            var r = n(5387),
                o = n.n(r),
                i = n(281110),
                c = n(744564),
                u = n(327499),
                l = n(664731),
                a = n(2590);

            function s(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            s(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            s(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var p = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function d(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = f((function(e) {
                    var t, n;
                    return p(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                c.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                                    guildId: e
                                });
                                return [4, i.ZP.get({
                                    url: a.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
                                })];
                            case 1:
                                t = r.sent();
                                n = t.body;
                                c.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                                    guildId: e,
                                    roleMemberCount: n
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                c.Z.dispatch({
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

            function O(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = f((function(e) {
                    return p(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return l.Z.shouldFetch(e) ? [4, d(e)] : [3, 2];
                            case 1:
                                t.sent();
                                t.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var b = new(o())({
                maxAge: 1e4
            });

            function v(e, t) {
                return i.ZP.get({
                    url: a.ANM.GUILD_ROLE_MEMBER_IDS(e, t)
                }).then((function(t) {
                    u.Z.requestMembersById(e, t.body, !1);
                    return t.body.length
                }))
            }

            function g(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = "".concat(e, "-").concat(t);
                if (!n || null == b.get(r)) {
                    b.set(r, !0);
                    return v(e, t)
                }
                return Promise.resolve(null)
            }
        },
        664731: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function u(e, t) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = {},
                p = {};
            var d = function(e) {
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
                var t = s(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getRoleMemberCount = function(e) {
                    return null != e ? f[e] : null
                };
                r.shouldFetch = function(e) {
                    if (null == e) return !1;
                    var t = p[e];
                    return null == t || Date.now() - t > 12e4
                };
                return n
            }(r.ZP.Store);
            d.displayName = "GuildRoleMemberCountStore";
            const h = new d(o.Z, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.roleMemberCount;
                    f[t] = n;
                    p[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.count,
                        o = f[t];
                    if (null == o) return !1;
                    o[n] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.added,
                        o = f[t];
                    if (null == o) return !1;
                    if (null == o[n]) return !1;
                    var i = Object.keys(r).length;
                    o[n] += i
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
                    delete p[t.id]
                }
            })
        },
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => O,
                M0: () => y,
                Qj: () => b,
                Ao: () => v,
                YO: () => g,
                VO: () => _
            });
            var r = n(61209),
                o = n(567403),
                i = n(682776),
                c = n(968696),
                u = n(2590),
                l = n(897196),
                a = Array.from(l.Vg).map((function(e) {
                    return c.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)?(\\d+|").concat(a, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)(\\d+|").concat(a, ")(?:/)(\\d+)")),
                p = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                d = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                h = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                O = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(u.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                y = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function b(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(p);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = e.match(s);
                if (null != r && r.length > 1) {
                    var o;
                    return {
                        guildId: r[1],
                        channelId: null !== (o = r[2]) && void 0 !== o ? o : void 0
                    }
                }
                var i = e.match(d);
                return null != i && i.length > 1 ? {
                    guildId: i[1]
                } : null
            }

            function v(e) {
                if (null == e) return null;
                var t = e.match(h);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function g(e) {
                return !!e.isPrivate() || i.Z.can(u.Plq.VIEW_CHANNEL, e)
            }

            function _(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == o.Z.getGuild(t) && t !== u.ME) return !1;
                if (null == n) return !0;
                var i = r.Z.getChannel(n);
                return null != i && g(i)
            }
        },
        833589: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(281110),
                i = n(744564),
                c = n(2590);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
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

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e) {
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

            function p(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
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
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var y = Object.freeze({
                    burstCredits: 0,
                    wasReplenishedToday: !1,
                    nextReplenishAt: null,
                    isReactionPickerBurstToggled: null,
                    emojiReactionForCoachmark: null,
                    guildBurstPreviews: {}
                }),
                b = f({}, y),
                v = function(e) {
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
                    var t = O(n);

                    function n() {
                        u(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function(e) {
                        b = null != e ? e : f({}, y)
                    };
                    r.getBurstedPreviewData = function(e) {
                        var t;
                        return null !== (t = b.guildBurstPreviews[e]) && void 0 !== t ? t : void 0
                    };
                    r.getState = function() {
                        return b
                    };
                    ! function(e, t, n) {
                        t && l(e.prototype, t);
                        n && l(e, n)
                    }(n, [{
                        key: "remainingBurstCurrency",
                        get: function() {
                            return b.burstCredits
                        }
                    }, {
                        key: "hasAvailableBurstCurrency",
                        get: function() {
                            return this.remainingBurstCurrency > 0
                        }
                    }, {
                        key: "nextReplenishAt",
                        get: function() {
                            return b.nextReplenishAt
                        }
                    }, {
                        key: "isReactionPickerBurstToggled",
                        get: function() {
                            return null != b.isReactionPickerBurstToggled && b.isReactionPickerBurstToggled
                        }
                    }, {
                        key: "emojiReactionToTargetForCoachmark",
                        get: function() {
                            return b.emojiReactionForCoachmark
                        }
                    }]);
                    return n
                }(r.ZP.PersistedStore);
            v.displayName = "BurstReactionStore";
            v.persistKey = "BurstReactionStore33";
            const g = new v(i.Z, {
                BURST_CREDITS_SET: function(e) {
                    var t = e.amount,
                        n = e.wasReplenishedToday,
                        r = e.nextReplenishAt;
                    b.burstCredits = t;
                    b.wasReplenishedToday = n;
                    b.nextReplenishAt = r
                },
                POST_CONNECTION_OPEN: function() {
                    o.ZP.get({
                        url: c.ANM.BURST_CREDIT_BALANCE
                    }).then((function(e) {
                        i.Z.dispatch({
                            type: "BURST_CREDITS_SET",
                            amount: e.body.amount,
                            wasReplenishedToday: e.body.replenished_today,
                            nextReplenishAt: new Date(e.body.next_replenish_at)
                        })
                    })).catch((function() {}))
                },
                BURST_REACTION_PICKER_TOGGLE: function(e) {
                    var t = e.value;
                    b.isReactionPickerBurstToggled = t
                },
                BURST_REACTION_SHOW_FREE_USER_SENT_POPOUT: function(e) {
                    var t = e.emoji;
                    b.emojiReactionForCoachmark = null != t ? t : null
                },
                BURST_GUILD_PREVIEW_SET: function(e) {
                    var t = e.guildId,
                        n = e.channelId,
                        r = e.messageId,
                        o = e.emoji;
                    b.guildBurstPreviews[t] = {
                        channelId: n,
                        messageId: r,
                        emoji: o
                    }
                },
                BURST_GUILD_PREVIEW_CLEAR: function(e) {
                    var t = e.guildId;
                    delete b.guildBurstPreviews[t]
                }
            })
        },
        239620: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => i,
                xJ: () => c
            });
            var r, o = n(120415),
                i = null;

            function c() {
                return (0, o.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        629223: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var r = n(202351),
                o = n(744564),
                i = n(579344),
                c = n(265688),
                u = n(169376);

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
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
            var f = function(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var d = function(e) {
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
                    var t = p(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).id = e.id;
                        r.type = e.type;
                        r.name = e.name;
                        r.revoked = e.revoked || !1;
                        r.integrations = e.integrations || [];
                        r.visibility = e.visibility || 0;
                        r.friendSync = e.friend_sync || !1;
                        r.showActivity = e.show_activity || !1;
                        r.verified = e.verified || !1;
                        r.accessToken = e.access_token || null;
                        r.twoWayLink = e.two_way_link || !1;
                        r.metadata = e.metadata || null;
                        r.metadataVisibility = e.metadata_visibility || 0;
                        return r
                    }
                    n.prototype.toString = function() {
                        return this.name
                    };
                    return n
                }(u.Z),
                h = n(848285),
                O = n(2590);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
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

            function E(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function w(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var C = new Set([O.ABu.CONTACTS]),
                N = !0,
                T = [],
                j = [],
                P = {},
                I = {},
                R = function(e) {
                    T = e.filter((function(e) {
                        return !C.has(e.type) && c.Z.isSupported(e.type)
                    }));
                    j = e.filter((function(e) {
                        return C.has(e.type)
                    }));
                    N = !1
                };
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = w(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isJoining = function(e) {
                    return P[e] || !1
                };
                r.isFetching = function() {
                    return N
                };
                r.getAccounts = function() {
                    return T
                };
                r.getLocalAccounts = function() {
                    return j
                };
                r.getAccount = function(e, t) {
                    return T.find((function(n) {
                        return (null == e || n.id === e) && n.type === t
                    }))
                };
                r.getLocalAccount = function(e) {
                    return j.find((function(t) {
                        return t.type === e
                    }))
                };
                r.isSuggestedAccountType = function(e) {
                    return I[e] || !1
                };
                return n
            }(r.ZP.Store);
            A.displayName = "ConnectedAccountsStore";
            const x = new A(o.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.connectedAccounts.map((function(e) {
                        return new d(e)
                    }));
                    R(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        var t = e.accounts.map((function(e) {
                            return new d(_(g({}, e), {
                                integrations: e.integrations.map((function(e) {
                                    return _(g({}, e), {
                                        guild: new h.Z(e.guild)
                                    })
                                }))
                            }))
                        }));
                        R(t)
                    } else i.Z.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    P[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    var t = e.platformType,
                        n = e.id,
                        r = e.revoked,
                        o = e.accessToken,
                        i = T.find((function(e) {
                            return e.id === n && e.type === t
                        }));
                    if (null == i) return !1;
                    null != r && (i.revoked = r);
                    null != o && (i.accessToken = o)
                }
            })
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Z
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                c = n(744564),
                u = n(473903),
                l = n(2590);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e) {
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
            }

            function h(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var y = function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var v = l.QZA.CLOSED,
                g = null,
                _ = null,
                E = {},
                m = {},
                S = {},
                w = null,
                C = null,
                N = !1,
                T = !1,
                j = null,
                P = null,
                I = null,
                R = [],
                A = null,
                x = null;

            function D(e) {
                var t, n, r, o, i, c, a = u.default.getCurrentUser();
                if (null == a) return M();
                _ = null !== (t = e.section) && void 0 !== t ? t : _;
                A = null !== (n = e.section) && void 0 !== n ? n : _;
                null != e.subsection && null != _ && (E[_] = e.subsection);
                null != e.scrollPosition && null != _ && (m[_] = e.scrollPosition);
                T = !!e.openWithoutBackstack;
                v = l.QZA.OPEN;
                S = {};
                w = f({}, l.oAB.ACCOUNT, {
                    userId: a.id,
                    username: a.username,
                    discriminator: a.discriminator,
                    email: a.email,
                    avatar: a.avatar,
                    password: "",
                    newPassword: null,
                    claimed: a.isClaimed()
                });
                C = d({}, w);
                P = null !== (r = e.onClose) && void 0 !== r ? r : null;
                I = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                R = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                x = null !== (c = e.impressionSource) && void 0 !== c ? c : null
            }

            function M() {
                v = l.QZA.CLOSED;
                N = !1;
                w = null;
                A = null;
                C = null;
                g = null;
                _ = null;
                E = {};
                m = {};
                P = null;
                I = null;
                R = [];
                x = null
            }

            function L() {
                v = l.QZA.OPEN;
                S = {}
            }
            var k = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != C && null != w && (!(!this.isOpen() && j !== l.cII.USER_SETTINGS) && !o().isEqual(C, w))
                };
                r.isOpen = function() {
                    return N
                };
                r.getPreviousSection = function() {
                    return g
                };
                r.getSection = function() {
                    return _
                };
                r.getSubsection = function() {
                    return null != _ ? E[_] : null
                };
                r.getScrollPosition = function() {
                    return null != _ ? m[_] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return T
                };
                r.getProps = function() {
                    return {
                        submitting: v === l.QZA.SUBMITTING,
                        section: _,
                        subsection: null != _ ? E[_] : null,
                        scrollPosition: null != _ ? m[_] : null,
                        settings: C,
                        errors: S,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: T,
                        analyticsLocation: I,
                        analyticsLocations: R,
                        initialSection: A,
                        impressionSource: x
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return P
                    }
                }]);
                return n
            }(i.ZP.Store);
            k.displayName = "UserSettingsModalStore";
            const Z = new k(c.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    N = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: M,
                LOGOUT: M,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    v = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (v !== l.QZA.SUBMITTING) return !1;
                    v = l.QZA.OPEN;
                    _ = l.oAB.ACCOUNT;
                    var t;
                    S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    g = _;
                    _ = e.section;
                    I = null;
                    var t;
                    R = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (E[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete E[t] : null != _ && delete E[_]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete m[t] : null != _ && delete m[_]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == C && (C = {});
                    var n = C[l.oAB.ACCOUNT];
                    C[l.oAB.ACCOUNT] = d({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    L();
                    if (null != e) {
                        w = f({}, l.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        C = d({}, w)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    j = e.tab;
                    return null == _ && j === l.cII.USER_SETTINGS && D({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        901654: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(441143),
                o = n.n(r),
                i = n(202351),
                c = n(744564),
                u = n(575978);

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

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e) {
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

            function d(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
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
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var b = new Map;

            function v(e) {
                var t = b.get(e);
                if (null == t) {
                    console.warn("Window state not initialized", e);
                    return {
                        isElementFullscreen: !1,
                        focused: !1,
                        windowSize: {
                            width: 0,
                            height: 0
                        }
                    }
                }
                return t
            }
            var g = function(e) {
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
                var t = y(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFocused = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return v(e).focused
                };
                r.getFocusedWindowId = function() {
                    var e = null;
                    b.forEach((function(t, n) {
                        t.focused && (e = n)
                    }));
                    return e
                };
                r.isElementFullScreen = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return v(e).isElementFullscreen
                };
                r.windowSize = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return v(e).windowSize
                };
                return n
            }(i.ZP.Store);
            g.displayName = "WindowStore";
            const _ = new g(c.Z, {
                WINDOW_INIT: function(e) {
                    o()(!b.has(e.windowId), "Window initialized multiple times");
                    var t = e.width,
                        n = e.height,
                        r = e.isElementFullscreen,
                        i = e.focused;
                    b.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: i
                    });
                    return !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    var t = v(e.windowId);
                    if (t.isElementFullscreen === e.isElementFullscreen) return !1;
                    b.set(e.windowId, p(f({}, t), {
                        isElementFullscreen: e.isElementFullscreen
                    }));
                    return !0
                },
                WINDOW_FOCUS: function(e) {
                    var t = v(e.windowId);
                    if (t.focused === e.focused) return !1;
                    b.set(e.windowId, p(f({}, t), {
                        focused: e.focused
                    }));
                    return !0
                },
                WINDOW_RESIZED: function(e) {
                    var t = v(e.windowId);
                    if (t.windowSize.width === e.width && t.windowSize.height === e.height) return !1;
                    b.set(e.windowId, p(f({}, t), {
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }));
                    return !0
                },
                WINDOW_UNLOAD: function(e) {
                    b.delete(e.windowId);
                    return !0
                }
            })
        },
        609853: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(22212),
                u = n(985651),
                l = n(175072),
                a = n(473708),
                s = n(813968),
                f = n.n(s);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
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

            function h(e, t) {
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
            var O = function(e) {
                var t = e.invertColor,
                    n = void 0 !== t && t,
                    o = e.type,
                    s = void 0 === o ? l.H.BOT : o,
                    O = e.className,
                    y = e.verified,
                    b = e.useRemSizes,
                    v = void 0 !== b && b,
                    g = null,
                    _ = a.Z.Messages.VERIFIED_BOT_TOOLTIP;
                switch (s) {
                    case l.H.SYSTEM_DM:
                    case l.H.OFFICIAL:
                        y = !0;
                        _ = a.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP;
                        g = a.Z.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case l.H.SERVER:
                        g = a.Z.Messages.BOT_TAG_SERVER;
                        break;
                    case l.H.ORIGINAL_POSTER:
                        g = a.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case l.H.STAFF_ONLY_DM:
                        g = a.Z.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case l.H.AI:
                        y = !0;
                        _ = a.Z.Messages.AI_GENERATED_TOOLTIP;
                        g = a.Z.Messages.AI_TAG;
                        break;
                    case l.H.REMIX:
                        y = !1;
                        g = a.Z.Messages.REMIXING_TAG;
                        break;
                    case l.H.BOT:
                    default:
                        g = a.Z.Messages.BOT_TAG_BOT
                }
                var E, m = s === l.H.ORIGINAL_POSTER,
                    S = s === l.H.REMIX,
                    w = null;
                y && (w = (0, r.jsx)(c.u, {
                    text: _,
                    align: "center",
                    position: "top",
                    children: function(e) {
                        return (0, r.jsx)(u.Z, h(d({}, e), {
                            className: f().botTagVerified
                        }))
                    }
                }));
                E = s === l.H.AI ? f().botTagAI : n ? f().botTagInvert : f().botTagRegular;
                var C = function(e) {
                    var t;
                    return (0, r.jsxs)("span", h(d({}, e), {
                        className: i()(O, E, v ? f().rem : f().px, (t = {}, p(t, f().botTagOP, m), p(t, f().botTagRemix, S), t)),
                        children: [w, (0, r.jsx)("span", {
                            className: f().botText,
                            children: g
                        })]
                    }))
                };
                switch (s) {
                    case l.H.REMIX:
                        return (0, r.jsx)(c.u, {
                            text: a.Z.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: function(e) {
                                return C(e)
                            }
                        });
                    case l.H.ORIGINAL_POSTER:
                        return (0, r.jsx)(c.u, {
                            text: a.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return C(e)
                            }
                        });
                    default:
                        return C()
                }
            };
            O.Types = l.H;
            const y = O
        },
        859917: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                u = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const f = function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    p = e.foreground,
                    d = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 15.2",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        fillRule: "evenodd",
                        d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                    })
                }))
            };
            var p = n(479891),
                d = n.n(p);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
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

            function b(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function v(e) {
                var t = e.children,
                    n = e.size,
                    i = void 0 === n ? 16 : n,
                    u = e.className,
                    l = e.flowerStarClassName,
                    a = b(e, ["children", "size", "className", "flowerStarClassName"]),
                    s = o.Children.only(t),
                    p = {
                        width: i,
                        height: i
                    };
                return (0, r.jsxs)("div", {
                    className: c()(d().flowerStarContainer, u),
                    style: p,
                    children: [(0, r.jsx)(f, y(O({}, a), {
                        className: c()(l, d().flowerStar)
                    })), (0, r.jsx)("div", {
                        className: d().childContainer,
                        children: s
                    })]
                })
            }
        },
        718831: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(713068),
                u = n(388054),
                l = n(319497),
                a = n(67183),
                s = n(304548),
                f = n(633878),
                p = n(794308),
                d = n.n(p);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
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

            function b(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var v = {
                    UP: d().directionUp,
                    RIGHT: d().directionRight,
                    DOWN: d().directionDown,
                    LEFT: d().directionLeft
                },
                g = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? v.DOWN : t,
                        o = e.width,
                        p = void 0 === o ? 24 : o,
                        g = e.height,
                        _ = void 0 === g ? 24 : g,
                        E = e.color,
                        m = void 0 === E ? "currentColor" : E,
                        S = e.transition,
                        w = void 0 === S ? d().transition : S,
                        C = e.className,
                        N = e.foreground,
                        T = e.expanded,
                        j = b(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        P = (0, s.useRedesignIconContext)().enabled,
                        I = n;
                    !0 === T ? I = v.DOWN : !1 === T && (I = v.RIGHT);
                    if (P) {
                        var R, A = (R = {}, h(R, v.UP, a.u), h(R, v.DOWN, c.C), h(R, v.LEFT, u.V), h(R, v.RIGHT, l.F), R)[I];
                        return (0, r.jsx)(A, y(O({}, j), {
                            width: p,
                            height: _,
                            color: m,
                            colorClass: N
                        }))
                    }
                    return (0, r.jsx)("svg", y(O({
                        className: i()(C, w, I),
                        width: p,
                        height: _,
                        viewBox: "0 0 24 24"
                    }, (0, f.Z)(j)), {
                        children: (0, r.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: m,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            g.Directions = v;
            const _ = g
        },
        813784: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(450520),
                c = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    d = e.foregroundColor,
                    h = void 0 === d ? o.Z.unsafe_rawColors.RED_400.css : d,
                    O = e.foreground,
                    y = e.background,
                    b = p(e, ["width", "height", "color", "foregroundColor", "foreground", "background"]);
                return (0, r.jsxs)("svg", f(function(e) {
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
                }({}, (0, c.Z)(b)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("rect", {
                        fill: h,
                        className: O,
                        x: "2",
                        y: "21.2154",
                        width: "26",
                        height: "2",
                        transform: "rotate(-45 2 21.2154)"
                    }), (0, r.jsx)("path", {
                        fill: a,
                        className: y,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    O = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0,
                    c.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20Zm1.867-5.246a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Zm5.02-5.236c-.133.425.359.65.674.335l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63Zm4.674 4.335c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Zm-3.132 3.526a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        6171: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(775428),
                c = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        }), (0, r.jsx)("path", {
                            fill: f,
                            className: p,
                            d: "M9,7 L11,7 L11,5 L9,5 L9,7 Z M10,18 C5.59,18 2,14.41 2,10 C2,5.59 5.59,2 10,2 C14.41,2 18,5.59 18,10 C18,14.41 14.41,18 10,18 L10,18 Z M10,4.4408921e-16 C4.4771525,-1.77635684e-15 4.4408921e-16,4.4771525 0,10 C-1.33226763e-15,12.6521649 1.0535684,15.195704 2.92893219,17.0710678 C4.80429597,18.9464316 7.3478351,20 10,20 C12.6521649,20 15.195704,18.9464316 17.0710678,17.0710678 C18.9464316,15.195704 20,12.6521649 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,2.22044605e-16 10,0 L10,4.4408921e-16 Z M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z",
                            transform: "translate(2 2)"
                        })]
                    })
                }))
            }), i.d)
        },
        386991: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(775428),
                c = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 12 12",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }), i.d, {}, {
                size: 16
            })
        },
        694554: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    a = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", f(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                        className: a,
                        fill: l
                    }), (0, r.jsx)("path", {
                        d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                        className: a,
                        fill: l
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    O = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm11 14.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1ZM7 8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v.36a.5.5 0 0 1 .342-.474l2-.667a.5.5 0 0 1 .658.475v4.612a.5.5 0 0 1-.658.475l-2-.667A.5.5 0 0 1 14 11.64V12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        968696: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = {
                escape: function(e) {
                    return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                }
            }
        },
        202181: (e, t, n) => {
            "use strict";
            n.d(t, {
                fn: () => o,
                Dj: () => c,
                Pr: () => u,
                rB: () => l,
                NO: () => a,
                uF: () => s
            });
            var r = n(296602);

            function o() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.find((function(e) {
                    return null != e && i(e)
                }))
            }

            function i(e) {
                return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen
            }

            function c(e) {
                "function" == typeof e.requestFullscreen ? e.requestFullscreen() : "function" == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : "function" == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : "function" == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : "function" == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new r.Z("FullScreenUtils").warn("Fullscreen API is not supported.")
            }

            function u(e, t) {
                var n = null != t ? t : document;
                l(null, n) && ("function" == typeof n.exitFullscreen ? n.exitFullscreen() : "function" == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : "function" == typeof n.msExitFullscreen ? n.msExitFullscreen() : new r.Z("FullScreenUtils").warn("Fullscreen API is not supported."))
            }

            function l(e, t) {
                var n = null != t ? t : document;
                return Boolean(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || null != e && e.webkitDisplayingFullscreen)
            }
            var a = function() {
                if ("undefined" != typeof document) {
                    var e = document.createElement("video");
                    if ("function" == typeof e.requestFullscreen) return "fullscreenchange";
                    if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
                    if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
                    if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
                    if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange"
                } else console.warn("FullScreenUtils has been imported in a non-web environment");
                return "fullscreenchange"
            }();

            function s(e, t) {
                e.addEventListener(a, t);
                e.addEventListener("webkitfullscreenchange", t);
                return function() {
                    e.removeEventListener(a, t);
                    e.removeEventListener("webkitfullscreenchange", t)
                }
            }
        },
        142520: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var r;
            ! function(e) {
                e.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
        }
    }
]);