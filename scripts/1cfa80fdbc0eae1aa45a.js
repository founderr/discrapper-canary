(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [51143, 88110], {
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = o(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(t)) {
                    for (var e = t.length, r = 0; r < e; ++r) this[r] = t[r];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), n = this._front, r = this._capacity, o = 0; o < t; ++o) e[o] = this[n + o & r - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    n = this._length;
                if (e > 1) {
                    var r = this._capacity;
                    if (n + e > r) {
                        for (var o = 0; o < e; ++o) {
                            this._checkCapacity(n + 1);
                            this[i = this._front + n & this._capacity - 1] = arguments[o];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var i = this._front, o = 0; o < e; ++o) {
                        this[i + n & r - 1] = arguments[o];
                        i++
                    }
                    this._length = n + e;
                    return n + e
                }
                if (0 === e) return n;
                this._checkCapacity(n + 1);
                this[o = this._front + n & this._capacity - 1] = t;
                this._length = n + 1;
                return n + 1
            };
            e.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front + t - 1 & this._capacity - 1,
                        n = this[e];
                    this[e] = void 0;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front,
                        n = this[e];
                    this[e] = void 0;
                    this._front = e + 1 & this._capacity - 1;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.unshift = function(t) {
                var e = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (e + n > (o = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(e + 1);
                            var o = this._capacity;
                            this[a = (this._front - 1 & o - 1 ^ o) - o] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = a
                        }
                        return e
                    }
                    var i = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var a;
                        this[a = (i - 1 & o - 1 ^ o) - o] = arguments[r];
                        i = a
                    }
                    this._front = i;
                    this._length = e + n;
                    return e + n
                }
                if (0 === n) return e;
                this._checkCapacity(e + 1);
                o = this._capacity;
                this[r = (this._front - 1 & o - 1 ^ o) - o] = t;
                this._length = e + 1;
                this._front = r;
                return e + 1
            };
            e.prototype.peekBack = function() {
                var t = this._length;
                if (0 !== t) {
                    return this[this._front + t - 1 & this._capacity - 1]
                }
            };
            e.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            e.prototype.get = function(t) {
                var e = t;
                if (e === (0 | e)) {
                    var n = this._length;
                    e < 0 && (e += n);
                    if (!(e < 0 || e >= n)) return this[this._front + e & this._capacity - 1]
                }
            };
            e.prototype.isEmpty = function() {
                return 0 === this._length
            };
            e.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            e.prototype.toString = function() {
                return this.toArray().toString()
            };
            e.prototype.valueOf = e.prototype.toString;
            e.prototype.removeFront = e.prototype.shift;
            e.prototype.removeBack = e.prototype.pop;
            e.prototype.insertFront = e.prototype.unshift;
            e.prototype.insertBack = e.prototype.push;
            e.prototype.enqueue = e.prototype.push;
            e.prototype.dequeue = e.prototype.shift;
            e.prototype.toJSON = e.prototype.toArray;
            Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            e.prototype._makeCapacity = function() {
                for (var t = this._capacity, e = 0; e < t; ++e) this[e] = void 0
            };
            e.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(o(1.5 * this._capacity + 16))
            };
            e.prototype._resizeTo = function(t) {
                var e = this._front,
                    n = this._capacity,
                    o = new Array(n),
                    i = this._length;
                r(this, 0, o, 0, n);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + i <= n) r(o, e, this, 0, i);
                else {
                    var a = i - (e + i & n - 1);
                    r(o, e, this, 0, a);
                    r(o, 0, this, a, i - a)
                }
            };
            var n = Array.isArray;

            function r(t, e, n, r, o) {
                for (var i = 0; i < o; ++i) n[i + r] = t[i + e]
            }

            function o(t) {
                if ("number" != typeof t) {
                    if (!n(t)) return 16;
                    t = t.length
                }
                return function(t) {
                    t >>>= 0;
                    t -= 1;
                    t |= t >> 1;
                    t |= t >> 2;
                    t |= t >> 4;
                    t |= t >> 8;
                    return 1 + (t |= t >> 16)
                }(Math.min(Math.max(16, t), 1073741824))
            }
            t.exports = e
        },
        509049: (t, e, n) => {
            t.exports = n.p + "172dcca815d9bc83a650f32ce6cee1b3.svg"
        },
        823493: (t, e, n) => {
            var r = n(23279),
                o = n(513218);
            t.exports = function(t, e, n) {
                var i = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (o(n)) {
                    i = "leading" in n ? !!n.leading : i;
                    a = "trailing" in n ? !!n.trailing : a
                }
                return r(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        396179: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => O
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                a = n(735885),
                s = n(2590);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        l(t, e, n[e])
                    }))
                }
                return t
            }

            function c() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.Z.dispatch(u({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: t,
                    subsection: e
                }, n));
                (0, a.jN)(s.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                p = n(652591),
                h = n(775173),
                d = n(488110),
                y = n(239620),
                _ = n(473708);

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        v(t, e, n[e])
                    }))
                }
                return t
            }

            function S(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }
            const O = {
                open: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    c(t, e, n)
                },
                init: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: t,
                        subsection: e
                    }, n))
                },
                close: function() {
                    var t = f.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != t && t()
                },
                setSection: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(b({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: t,
                        subsection: e
                    }, n))
                },
                clearSubsection: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: t
                    })
                },
                clearScrollPosition: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: t
                    })
                },
                updateAccount: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: t
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
                saveAccountChanges: function(t, e) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var a = t.username,
                        l = t.email,
                        u = t.emailToken,
                        c = t.password,
                        f = t.avatar,
                        v = t.newPassword,
                        O = t.discriminator,
                        E = e.close;
                    return (0, d.Z)((function(t) {
                        var e = S(b({
                                username: a,
                                email: l,
                                email_token: u,
                                password: c,
                                avatar: f,
                                new_password: v
                            }, t), {
                                discriminator: null != O && "" !== O ? O : void 0
                            }),
                            n = o.Z.get(s.JkL),
                            i = (0, y.xJ)();
                        if (null != i && null != n) {
                            e.push_provider = i;
                            e.push_token = n
                        }
                        var p = o.Z.get(s.scU);
                        if (null != y.mv && null != p) {
                            e.push_voip_provider = y.mv;
                            e.push_voip_token = p
                        }
                        return r.ZP.patch({
                            url: s.ANM.ME,
                            oldFormErrors: !0,
                            body: e
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: _.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(t) {
                        var e = t.body,
                            r = e.token;
                        p.default.track(s.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, h.xR)(e.avatar)
                        });
                        delete e.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: e.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: e
                        });
                        null != v && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: e,
                            newPassword: v
                        });
                        null != c && null != v && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: e.id
                        });
                        E ? n.close() : n.submitComplete();
                        return t
                    }), (function(t) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: t.body
                        });
                        return t
                    }))
                }
            }
        },
        919244: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => b
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(304548),
                l = n(473708),
                u = n(949095),
                c = n.n(u);

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function h(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t, e) {
                d = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return d(t, e)
            }
            var y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var v = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && d(t, e)
                }(n, t);
                var e = _(n);

                function n() {
                    f(this, n);
                    var t;
                    (t = e.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    t.setRef = function(e) {
                        t._input = e
                    };
                    t.getLabelText = function() {
                        var e;
                        return null !== (e = t.props.label) && void 0 !== e ? e : t.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    t.getSupportedCodeTypes = function() {
                        return t.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    t.getPlaceholder = function() {
                        return t.props.forceNoPlaceholder ? null : null !== (e = t.props.placeholder) && void 0 !== e ? e : t.getSupportedCodeTypes();
                        var e
                    };
                    t.errorPresent = function() {
                        return null != t.props.error && "" !== t.props.error || null != t.state.errorMessage && "" !== t.state.errorMessage
                    };
                    t.handleRetry = function() {
                        var e = t.props.onRetry;
                        null == e || e().then((function() {
                            return t.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    t.handleSubmit = function(e) {
                        e.preventDefault();
                        var n = t.props,
                            r = n.handleSubmit,
                            o = n.onError;
                        r(t.state.code).catch((function(e) {
                            if (null != e.body) {
                                null == o || o(e.body);
                                e.body.message && t.setState({
                                    errorMessage: e.body.message
                                })
                            }
                        }))
                    };
                    t.handleCancel = function() {
                        var e = t.props,
                            n = e.onClose,
                            r = e.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    t.handleCodeChange = function(e) {
                        t.setState({
                            code: e
                        })
                    };
                    return t
                }
                n.prototype.render = function() {
                    var t, e = this.props,
                        n = e.title,
                        i = e.actionText,
                        u = e.children,
                        f = e.error,
                        p = e.isLoading,
                        h = e.maxLength,
                        d = e.transitionState,
                        y = e.helpMessage,
                        _ = e.retryPrompt,
                        v = e.retrySuccessMessage,
                        b = this.state,
                        S = b.code,
                        O = b.errorMessage,
                        E = b.retrySuccess,
                        g = o.Children.count(u) > 0 ? (0, r.jsx)(s.Card, {
                            type: s.Card.Types.WARNING,
                            className: c().card,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: u
                            })
                        }) : null,
                        m = null != _ ? (0, r.jsxs)(s.Text, {
                            className: a()(c().submitText, c().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(s.Clickable, {
                                className: a()(c().spacing, c().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(s.Anchor, {
                                    children: _
                                })
                            })]
                        }) : null,
                        T = E ? (0, r.jsx)(s.Card, {
                            type: s.Card.Types.SUCCESS,
                            className: c().card,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: v
                            })
                        }) : null;
                    return (0, r.jsx)(s.ModalRoot, {
                        transitionState: d,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(s.ModalContent, {
                                children: [null != y ? (0, r.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: c().spacing,
                                    children: y
                                }) : null, g, T, (0, r.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: c().spacing,
                                    children: [(0, r.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != h ? h : 10,
                                        value: S,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: c().error,
                                        children: null != f ? f : O
                                    }) : null, m]
                                })]
                            }), (0, r.jsxs)(s.ModalFooter, {
                                children: [(0, r.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: p || 0 === S.length,
                                    children: null != i ? i : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: p,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            v.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const b = v
        },
        569865: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => N
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                s = n(304548),
                l = n(494889),
                u = n(443812),
                c = n(786170),
                f = n(347365),
                p = n(985774);

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        l = s.value
                } catch (t) {
                    n(t);
                    return
                }
                s.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function y(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            s = !0;
                            o = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return h(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(t, e) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };

            function v(t) {
                var e, n, r = null != t ? t : {},
                    i = r.onError,
                    a = r.onSuccess,
                    s = y(o.useState(!1), 2),
                    l = s[0],
                    u = s[1],
                    c = l,
                    h = o.useCallback((n = (e = function(t, e, n, r) {
                        var o, s;
                        return _(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    if (c) return [2];
                                    u(!0);
                                    l.label = 1;
                                case 1:
                                    l.trys.push([1, 3, 4, 5]);
                                    return [4, (0, p.U)(t, e, n, r)];
                                case 2:
                                    l.sent();
                                    null == a || a();
                                    return [3, 5];
                                case 3:
                                    o = l.sent();
                                    s = new f.Hx(o);
                                    null == i || i(s);
                                    return [3, 5];
                                case 4:
                                    u(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);

                            function a(t) {
                                d(i, r, o, a, s, "next", t)
                            }

                            function s(t) {
                                d(i, r, o, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }), function(t, e, r, o) {
                        return n.apply(this, arguments)
                    }), [c, i, a]);
                return {
                    reportFalsePositive: h,
                    isReportFalsePositiveLoading: l
                }
            }
            var b = n(318715),
                S = n(352980),
                O = n(279008),
                E = n(392354),
                g = n(493254),
                m = n(473708),
                T = n(124060),
                C = n.n(T),
                A = function(t) {
                    var e = t.attachment,
                        n = e.url,
                        o = e.description,
                        i = g.XH.test(e.filename);
                    return (0, r.jsx)("div", {
                        className: C().mediaContainer,
                        children: i ? (0, r.jsx)(c.Z, {
                            className: a()(C().video, C().media),
                            controls: !0,
                            src: n
                        }) : (0, r.jsx)("img", {
                            className: a()(C().image, C().media),
                            src: n,
                            alt: o
                        })
                    })
                };

            function N(t) {
                var e = t.channelId,
                    n = t.messageId,
                    i = t.attachmentId,
                    a = t.transitionState,
                    c = t.onClose,
                    f = (0, u.Dt)(),
                    p = function(t, e, n) {
                        var r, o = (0, b.ZP)([S.Z], (function() {
                                return S.Z.getMessage(t, e)
                            })),
                            i = (0, O.yh)();
                        if (void 0 === o) return [];
                        var a, s = void 0 !== n ? function(t) {
                            return t.id === n
                        } : function(t) {
                            return (0, E.KP)({
                                type: E.lJ.Attachment,
                                media: t
                            }, i)
                        };
                        return null !== (a = null == o || null === (r = o.attachments) || void 0 === r ? void 0 : r.filter(s)) && void 0 !== a ? a : []
                    }(e, n, i),
                    h = v({
                        onSuccess: o.useCallback((function() {
                            l.Z.pop();
                            (0, s.showToast)((0, s.createToast)(m.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, s.ToastType.CUSTOM));
                            c()
                        }), [c]),
                        onError: function() {
                            (0, s.showToast)((0, s.createToast)(m.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
                        }
                    }),
                    d = h.reportFalsePositive,
                    y = h.isReportFalsePositiveLoading,
                    _ = function() {
                        c()
                    };
                void 0 !== p && 0 !== (null == p ? void 0 : p.length) || _();
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: a,
                    "aria-labelledby": f,
                    size: s.ModalSize.SMALL,
                    children: [(0, r.jsxs)(s.ModalContent, {
                        children: [(0, r.jsx)(s.ModalCloseButton, {
                            onClick: _,
                            className: C().closeButton
                        }), (0, r.jsx)(s.Heading, {
                            id: f,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: C().header,
                            children: m.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: C().subheader,
                            children: m.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === p.length ? (0, r.jsx)(A, {
                            attachment: p[0]
                        }) : null]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            className: C().button,
                            disabled: y,
                            submitting: y,
                            size: s.Button.Sizes.MEDIUM,
                            onClick: function() {
                                return d(e, n, p.map((function(t) {
                                    return t.id
                                })), [])
                            },
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                children: m.Z.Messages.CONFIRM
                            })
                        }), (0, r.jsx)(s.Button, {
                            className: C().button,
                            disabled: y,
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.MEDIUM,
                            onClick: _,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                children: m.Z.Messages.CANCEL
                            })
                        })]
                    })]
                })
            }
        },
        39697: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => b
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(396179),
                a = n(320142),
                s = n(719174),
                l = n(2590),
                u = n(473708),
                c = n(513275),
                f = n.n(c),
                p = n(509049),
                h = n.n(p);

            function d(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        l = s.value
                } catch (t) {
                    n(t);
                    return
                }
                s.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function y(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function a(t) {
                            d(i, r, o, a, s, "next", t)
                        }

                        function s(t) {
                            d(i, r, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function _(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var v = function(t, e) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
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
                                        if (!(o = a.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };
            const b = function(t) {
                var e = t.channelId,
                    c = t.messageId,
                    p = t.transitionState,
                    d = t.onClose,
                    b = function() {
                        d();
                        (0, o.openModalLazy)(y((function() {
                            var t, o;
                            return v(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, n(569865)];
                                    case 1:
                                        t = i.sent(), o = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, function(t) {
                                                for (var e = 1; e < arguments.length; e++) {
                                                    var n = null != arguments[e] ? arguments[e] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                                                    }))));
                                                    r.forEach((function(e) {
                                                        _(t, e, n[e])
                                                    }))
                                                }
                                                return t
                                            }({
                                                channelId: e,
                                                messageId: c
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    },
                    S = (0, s.Z)();
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: p,
                    "aria-label": u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
                    children: [(0, r.jsx)(o.ModalHeader, {
                        separator: !1,
                        className: f().modalHeader,
                        children: (0, r.jsx)("img", {
                            src: h(),
                            alt: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                            className: f().headerImg
                        })
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: f().modalBody,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-lg/bold",
                            className: f().modalInteriorHeader,
                            children: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: S ? u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }), (0, r.jsxs)("div", {
                            className: f().buttonContainer,
                            children: [S ? (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.BRAND,
                                onClick: function() {
                                    i.Z.open(l.oAB.PRIVACY_AND_SAFETY);
                                    d()
                                },
                                fullWidth: !0,
                                children: u.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                            }) : (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.BRAND,
                                onClick: function() {
                                    (0, a.Z)("https://discord.com")
                                },
                                fullWidth: !0,
                                children: u.Z.Messages.LEARN_MORE
                            }), (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: function() {
                                    d()
                                },
                                fullWidth: !0,
                                children: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                            }), (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                    handleFalsePositiveHook: function() {
                                        b()
                                    }
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        502079: (t, e, n) => {
            "use strict";
            n.d(e, {
                k4: () => o,
                fA: () => i,
                vp: () => a,
                Bj: () => s,
                H: () => l,
                Ll: () => u,
                GZ: () => c,
                lE: () => f,
                kf: () => p,
                bv: () => h,
                EV: () => d
            });

            function r(t) {
                throw t
            }

            function o(t) {
                t = null !== t ? t : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function i(t, e) {
                return !1
            }

            function a(t) {
                return !1
            }

            function s() {
                return !1
            }

            function l() {
                return !1
            }

            function u(t) {
                t = null !== t ? t : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function c(t, e) {
                return !1
            }

            function f() {
                return !1
            }

            function p(t) {}

            function h(t) {}

            function d(t) {
                return !1
            }
        },
        719174: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(202351),
                o = n(473903);

            function i() {
                return (0, r.e7)([o.default], (function() {
                    var t;
                    return null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed
                }))
            }
        },
        239620: (t, e, n) => {
            "use strict";
            n.d(e, {
                mv: () => i,
                xJ: () => a
            });
            var r, o = n(120415),
                i = null;

            function a() {
                return (0, o.Dt)(), null
            }! function(t) {
                t.REMINDER = "reminder";
                t.TOP_MESSAGE_PUSH = "top_messages_push";
                t.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        223219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => k
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                a = n(744564),
                s = n(473903),
                l = n(2590);

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function f(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        f(t, e, n[e])
                    }))
                }
                return t
            }

            function d(t, e) {
                return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function y(t, e) {
                y = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return y(t, e)
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var b = l.QZA.CLOSED,
                S = null,
                O = null,
                E = {},
                g = {},
                m = {},
                T = null,
                C = null,
                A = !1,
                N = !1,
                R = null,
                P = null,
                j = null,
                M = [],
                w = null,
                I = null;

            function x(t) {
                var e, n, r, o, i, a, u = s.default.getCurrentUser();
                if (null == u) return U();
                O = null !== (e = t.section) && void 0 !== e ? e : O;
                w = null !== (n = t.section) && void 0 !== n ? n : O;
                null != t.subsection && null != O && (E[O] = t.subsection);
                null != t.scrollPosition && null != O && (g[O] = t.scrollPosition);
                N = !!t.openWithoutBackstack;
                b = l.QZA.OPEN;
                m = {};
                T = f({}, l.oAB.ACCOUNT, {
                    userId: u.id,
                    username: u.username,
                    discriminator: u.discriminator,
                    email: u.email,
                    avatar: u.avatar,
                    password: "",
                    newPassword: null,
                    claimed: u.isClaimed()
                });
                C = h({}, T);
                P = null !== (r = t.onClose) && void 0 !== r ? r : null;
                j = null !== (o = t.analyticsLocation) && void 0 !== o ? o : null;
                M = null !== (i = t.analyticsLocations) && void 0 !== i ? i : [];
                I = null !== (a = t.impressionSource) && void 0 !== a ? a : null
            }

            function U() {
                b = l.QZA.CLOSED;
                A = !1;
                T = null;
                w = null;
                C = null;
                S = null;
                O = null;
                E = {};
                g = {};
                P = null;
                j = null;
                M = [];
                I = null
            }

            function L() {
                b = l.QZA.OPEN;
                m = {}
            }
            var D = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && y(t, e)
                }(n, t);
                var e = v(n);

                function n() {
                    u(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.hasChanges = function() {
                    return null != C && null != T && (!(!this.isOpen() && R !== l.cII.USER_SETTINGS) && !o().isEqual(C, T))
                };
                r.isOpen = function() {
                    return A
                };
                r.getPreviousSection = function() {
                    return S
                };
                r.getSection = function() {
                    return O
                };
                r.getSubsection = function() {
                    return null != O ? E[O] : null
                };
                r.getScrollPosition = function() {
                    return null != O ? g[O] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return N
                };
                r.getProps = function() {
                    return {
                        submitting: b === l.QZA.SUBMITTING,
                        section: O,
                        subsection: null != O ? E[O] : null,
                        scrollPosition: null != O ? g[O] : null,
                        settings: C,
                        errors: m,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: j,
                        analyticsLocations: M,
                        initialSection: w,
                        impressionSource: I
                    }
                };
                ! function(t, e, n) {
                    e && c(t.prototype, e);
                    n && c(t, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return P
                    }
                }]);
                return n
            }(i.ZP.Store);
            D.displayName = "UserSettingsModalStore";
            const k = new D(a.Z, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    A = !0;
                    x(t)
                },
                USER_SETTINGS_MODAL_INIT: x,
                USER_SETTINGS_MODAL_CLOSE: U,
                LOGOUT: U,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    b = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    if (b !== l.QZA.SUBMITTING) return !1;
                    b = l.QZA.OPEN;
                    O = l.oAB.ACCOUNT;
                    var e;
                    m = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    S = O;
                    O = t.section;
                    j = null;
                    var e;
                    M = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [];
                    null != t.subsection && (E[O] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    var e = t.forSection;
                    null != e ? delete E[e] : null != O && delete E[O]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    var e = t.forSection;
                    null != e ? delete g[e] : null != O && delete g[O]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    var e = t.settings;
                    null == C && (C = {});
                    var n = C[l.oAB.ACCOUNT];
                    C[l.oAB.ACCOUNT] = h({}, n, e)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    var t = s.default.getCurrentUser();
                    L();
                    if (null != t) {
                        T = f({}, l.oAB.ACCOUNT, {
                            userId: t.id,
                            username: t.username,
                            discriminator: t.discriminator,
                            email: t.email,
                            avatar: t.avatar,
                            password: "",
                            newPassword: null,
                            claimed: t.isClaimed()
                        });
                        C = h({}, T)
                    }
                },
                DRAWER_SELECT_TAB: function(t) {
                    R = t.tab;
                    return null == O && R === l.cII.USER_SETTINGS && x({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        488110: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => _
            });
            var r = n(473903),
                o = n(496486),
                i = function(t) {
                    return "function" == typeof t ? t() : t
                };
            n.n(o)().curry((function(t, e, n) {
                return i(e) ? t(n) : n({})
            }));

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        a(t, e, n[e])
                    }))
                }
                return t
            }

            function l(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }
            var c, f, p = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                h = n(680918);
            c = h.showModal;
            p = h.updateModalProps;
            f = n(264817).Mr;

            function d(t) {
                var e = t.promiseFn,
                    n = t.resolve,
                    r = t.reject,
                    o = t.modalProps,
                    i = void 0 === o ? {} : o,
                    a = t.hooks,
                    u = (void 0 === a ? {} : a).onEarlyClose,
                    h = function() {
                        null == u || u()
                    },
                    d = function(t) {
                        f(b);
                        n(t)
                    },
                    _ = function(t) {
                        f(b);
                        r(t)
                    },
                    v = function(t) {
                        var e = t.res;
                        p(b, S, h, l(s({}, i), {
                            error: e.body.message
                        }))
                    };
                if (null != c) var b = c(S, h, i);
                else null == u || u();

                function S(t) {
                    p(b, S, h, l(s({}, i), {
                        isLoading: !0
                    }));
                    return y({
                        promiseFn: e,
                        resolve: d,
                        reject: _,
                        code: t,
                        mfaCodeHandler: v,
                        isModalOpen: !0
                    })
                }
            }

            function y(t) {
                var e = t.promiseFn,
                    n = t.resolve,
                    r = t.reject,
                    o = t.code,
                    i = t.mfaCodeHandler,
                    a = void 0 === i ? d : i,
                    l = t.isModalOpen,
                    c = void 0 !== l && l,
                    f = u(t, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return e(null != o ? {
                    code: o
                } : {}).then(n, (function(t) {
                    if (function(t, e) {
                            return t.body && 60008 === t.body.code || e && 429 === t.status
                        }(t, c)) return a(s({
                        promiseFn: e,
                        resolve: n,
                        reject: r,
                        res: t
                    }, f));
                    r(t)
                }))
            }

            function _(t, e) {
                var n, o, a = null != e ? e : {},
                    l = a.checkEnabled,
                    c = void 0 === l ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : l,
                    f = u(a, ["checkEnabled"]);
                return new Promise((function(e, n) {
                    (i(c) ? d : y)(s({
                        promiseFn: t,
                        resolve: e,
                        reject: n
                    }, f))
                }))
            }
        },
        680918: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                showModal: () => l,
                updateModalProps: () => u
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var s = function(t, e, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                a(t, e, n[e])
                            }))
                        }
                        return t
                    }({
                        handleSubmit: t,
                        handleEarlyClose: e
                    }, n, o))
                }
            };

            function l(t, e, n) {
                return (0, o.h7)(s(t, e, n), {
                    onCloseCallback: e
                })
            }

            function u(t, e, n, r) {
                return (0, o.o)(t, s(e, n, r))
            }
        },
        142520: (t, e, n) => {
            "use strict";
            n.d(e, {
                x: () => r
            });
            var r;
            ! function(t) {
                t.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
        },
        989824: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(t) {
                var e = (0, r.useRef)(o);
                e.current === o && (e.current = t());
                return e.current
            }
        }
    }
]);