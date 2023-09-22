(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74968, 88110, 96043], {
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = i(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(t)) {
                    for (var e = t.length, r = 0; r < e; ++r) this[r] = t[r];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), n = this._front, r = this._capacity, i = 0; i < t; ++i) e[i] = this[n + i & r - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    n = this._length;
                if (e > 1) {
                    var r = this._capacity;
                    if (n + e > r) {
                        for (var i = 0; i < e; ++i) {
                            this._checkCapacity(n + 1);
                            this[o = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var o = this._front, i = 0; i < e; ++i) {
                        this[o + n & r - 1] = arguments[i];
                        o++
                    }
                    this._length = n + e;
                    return n + e
                }
                if (0 === e) return n;
                this._checkCapacity(n + 1);
                this[i = this._front + n & this._capacity - 1] = t;
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
                    if (e + n > (i = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(e + 1);
                            var i = this._capacity;
                            this[u = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = u
                        }
                        return e
                    }
                    var o = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var u;
                        this[u = (o - 1 & i - 1 ^ i) - i] = arguments[r];
                        o = u
                    }
                    this._front = o;
                    this._length = e + n;
                    return e + n
                }
                if (0 === n) return e;
                this._checkCapacity(e + 1);
                i = this._capacity;
                this[r = (this._front - 1 & i - 1 ^ i) - i] = t;
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
                this._capacity < t && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            e.prototype._resizeTo = function(t) {
                var e = this._front,
                    n = this._capacity,
                    i = new Array(n),
                    o = this._length;
                r(this, 0, i, 0, n);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + o <= n) r(i, e, this, 0, o);
                else {
                    var u = o - (e + o & n - 1);
                    r(i, e, this, 0, u);
                    r(i, 0, this, u, o - u)
                }
            };
            var n = Array.isArray;

            function r(t, e, n, r, i) {
                for (var o = 0; o < i; ++o) n[o + r] = t[o + e]
            }

            function i(t) {
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
        250282: (t, e, n) => {
            t.exports = n.p + "4d4b2ca112d3e89d2f063f09131604f5.png"
        },
        823493: (t, e, n) => {
            var r = n(23279),
                i = n(513218);
            t.exports = function(t, e, n) {
                var o = !0,
                    u = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(n)) {
                    o = "leading" in n ? !!n.leading : o;
                    u = "trailing" in n ? !!n.trailing : u
                }
                return r(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: u
                })
            }
        },
        735885: (t, e, n) => {
            "use strict";
            n.d(e, {
                jN: () => i,
                xf: () => o,
                Ou: () => u
            });
            var r = n(744564);

            function i(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        494889: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => h
            });
            var r = n(873955),
                i = n.n(r),
                o = n(744564),
                u = n(921554),
                a = n(502079);
            const l = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.queue = []
                }
                var e = t.prototype;
                e.enqueue = function(t) {
                    this.queue.push(t)
                };
                e.flush = function() {
                    for (; this.queue.length > 0;) {
                        var t;
                        null === (t = this.queue.shift()) || void 0 === t || t()
                    }
                };
                return t
            }());
            var c = n(316878),
                s = n(2590);

            function f(t, e, n) {
                var r, i, o, u, a, l, f, d, p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (i = null !== (r = e.key) && void 0 !== r ? r : p) && void 0 !== i ? i : "modal",
                    modal: t,
                    animation: null !== (o = e.animation) && void 0 !== o ? o : c.Z.useReducedMotion ? s.fMv.FADE : s.fMv.SLIDE_UP,
                    shouldPersistUnderModals: null !== (u = e.shouldPersistUnderModals) && void 0 !== u && u,
                    props: n,
                    backdropStyle: null !== (a = e.backdropStyle) && void 0 !== a ? a : null,
                    backdropInstant: null !== (l = e.backdropInstant) && void 0 !== l && l,
                    disableAnimation: null !== (f = e.disableAnimation) && void 0 !== f && f,
                    closable: "boolean" != typeof e.closable || e.closable,
                    label: null !== (d = e.label) && void 0 !== d ? d : "",
                    callbacks: {}
                }
            }

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        d(t, e, n[e])
                    }))
                }
                return t
            }
            const h = {
                push: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.IlC.APP;
                    (0, a.Ll)(p({
                        key: n,
                        modal: f(t, {}, e, n)
                    }, r));
                    o.Z.dispatch({
                        type: "MODAL_PUSH",
                        modal: t,
                        props: e,
                        key: n,
                        appContext: u
                    });
                    return n
                },
                pushLazy: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        o = this,
                        a = (0, u.D)();
                    return null != a && a.isReady() ? (t instanceof Promise ? t.then((function(t) {
                        return t.default
                    })) : t()).then((function(t) {
                        return o.push(t, e, n, r)
                    })) : new Promise((function(i) {
                        return l.enqueue((function() {
                            return i(o.pushLazy(t, e, n, r))
                        }))
                    }))
                },
                updateAnimation: function(t, e) {
                    o.Z.dispatch({
                        type: "MODAL_UPDATE",
                        key: t,
                        props: {},
                        partial: !0,
                        animation: e
                    })
                },
                pop: function() {
                    (0, a.GZ)();
                    o.Z.dispatch({
                        type: "MODAL_POP"
                    })
                },
                popWithKey: function(t, e) {
                    (0, a.GZ)(t, e);
                    o.Z.dispatch({
                        type: "MODAL_POP",
                        key: t,
                        onExited: e
                    })
                },
                popAll: function() {
                    (0, a.lE)();
                    o.Z.dispatch({
                        type: "MODAL_POP_ALL"
                    });
                    o.Z.dispatch({
                        type: "CHANNEL_SETTINGS_CLOSE"
                    });
                    o.Z.dispatch({
                        type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                    });
                    o.Z.dispatch({
                        type: "GUILD_SETTINGS_CLOSE"
                    });
                    o.Z.dispatch({
                        type: "HIDE_ACTION_SHEET"
                    });
                    o.Z.dispatch({
                        type: "DISPLAYED_INVITE_CLEAR"
                    });
                    o.Z.dispatch({
                        type: "DRAWER_CLOSE",
                        animated: !0
                    });
                    o.Z.dispatch({
                        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                    });
                    o.Z.dispatch({
                        type: "QUICKSWITCHER_HIDE"
                    });
                    o.Z.dispatch({
                        type: "MENTION_MODAL_CLOSE"
                    });
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    o.Z.dispatch({
                        type: "SEARCH_MODAL_CLOSE"
                    });
                    o.Z.dispatch({
                        type: "CONNECTIONS_GRID_MODAL_HIDE"
                    })
                }
            }
        },
        734691: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => _
            });
            var r = n(281110),
                i = n(630631),
                o = n(744564),
                u = n(223219),
                a = n(652591),
                l = n(775173),
                c = n(488110),
                s = n(120415),
                f = n(735885),
                d = n(2590),
                p = n(473708);

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        h(t, e, n[e])
                    }))
                }
                return t
            }

            function v(t, e) {
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
            const _ = {
                open: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    o.Z.dispatch(y({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: t,
                        subsection: e
                    }, n));
                    (0, f.jN)(d.S9g.USER_SETTINGS)
                },
                init: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    o.Z.dispatch(y({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: t,
                        subsection: e
                    }, n))
                },
                close: function() {
                    var t = u.Z.onClose;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != t && t()
                },
                setSection: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    o.Z.dispatch(y({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: t,
                        subsection: e
                    }, n))
                },
                clearSubsection: function(t) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: t
                    })
                },
                clearScrollPosition: function(t) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: t
                    })
                },
                updateAccount: function(t) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: t
                    })
                },
                submitComplete: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(t, e) {
                    var n = this;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var u = t.username,
                        f = t.email,
                        h = t.emailToken,
                        _ = t.password,
                        b = t.avatar,
                        E = t.newPassword,
                        O = t.discriminator,
                        S = e.close;
                    return (0,
                        c.Z)((function(t) {
                        var e = v(y({
                                username: u,
                                email: f,
                                email_token: h,
                                password: _,
                                avatar: b,
                                new_password: E
                            }, t), {
                                discriminator: null != O && "" !== O ? O : void 0
                            }),
                            n = i.Z.get(d.JkL),
                            o = (0, s.xJ)();
                        if (null != o && null != n) {
                            e.push_provider = o;
                            e.push_token = n
                        }
                        var a = i.Z.get(d.scU);
                        if (null != d.mvA && null != a) {
                            e.push_voip_provider = d.mvA;
                            e.push_voip_token = a
                        }
                        return r.ZP.patch({
                            url: d.ANM.ME,
                            oldFormErrors: !0,
                            body: e
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: p.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return o.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(t) {
                        var e = t.body,
                            r = e.token;
                        a.default.track(d.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, l.xR)(e.avatar)
                        });
                        delete e.token;
                        o.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: e.id
                        });
                        o.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: e
                        });
                        null != E && o.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: e,
                            newPassword: E
                        });
                        null != _ && null != E && o.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: e.id
                        });
                        S ? n.close() : n.submitComplete();
                        return t
                    }), (function(t) {
                        o.Z.dispatch({
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
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(882723),
                l = n(473708),
                c = n(775823),
                s = n.n(c);

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return d(t)
            }

            function p(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }
            var y = function(t) {
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
                    var n, r = d(t);
                    if (e) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var _ = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(t, e)
                }(n, t);
                var e = v(n);

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
                            i = n.onError;
                        r(t.state.code).catch((function(e) {
                            if (null != e.body) {
                                null == i || i(e.body);
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
                        o = e.actionText,
                        c = e.children,
                        f = e.error,
                        d = e.isLoading,
                        p = e.maxLength,
                        h = e.transitionState,
                        y = e.helpMessage,
                        v = e.retryPrompt,
                        _ = e.retrySuccessMessage,
                        b = this.state,
                        E = b.code,
                        O = b.errorMessage,
                        S = b.retrySuccess,
                        g = i.Children.count(c) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        m = null != v ? (0, r.jsxs)(a.Text, {
                            className: u()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: u()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: v
                                })
                            })]
                        }) : null,
                        T = S ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: _
                            })
                        }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != y ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: y
                                }) : null, g, T, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: E,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : O
                                    }) : null, m]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === E.length,
                                    children: null != o ? o : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(i.PureComponent);
            _.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const b = _
        },
        973889: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function a(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l(t, e) {
                l = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return l(t, e)
            }
            var c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
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
                    var n, r = u(t);
                    if (e) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && l(t, e)
                }(n, t);
                var e = s(n);

                function n(t, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return e.call(this, t, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        320142: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
            });
            var r = n(120415);

            function i(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function o(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = t.apply(e, n);

                        function a(t) {
                            i(u, r, o, a, l, "next", t)
                        }

                        function l(t) {
                            i(u, r, o, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = function(t, e) {
                var n, r, i, o, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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

            function a(t, e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o((function(t, e) {
                    var i, o, a, l;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(65091), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(21635)]).then(n.bind(n, 624501))];
                            case 1:
                                i = u.sent(), o = i.default;
                                if (null != (a = o(t, {
                                        skipExtensionCheck: e,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(t);
                                else {
                                    (l = document.createElement("a")).href = t;
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
        83797: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(2590);

            function i(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            "use strict";
            n.d(e, {
                v_: () => w,
                JS: () => R,
                hH: () => N,
                AB: () => M,
                ZP: () => U,
                oG: () => x,
                kO: () => D,
                yw: () => L
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(382060),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(52467),
                h = n(682776),
                y = n(491260),
                v = n(563367),
                _ = n(715107),
                b = n(464187),
                E = n(407561),
                O = n(652591),
                S = n(563135),
                g = n(671723);
            var m = n(2590),
                T = n(897196);

            function I(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        I(t, e, n[e])
                    }))
                }
                return t
            }

            function A(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function N(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(t, r),
                    o = c.ZP.getChannels(t),
                    u = o[c.sH].length,
                    l = o[c.Zb].length,
                    p = E.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: A(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = h.Z.getGuildPermissions(e)) && void 0 !== n ? n : S.ZP.NONE),
                    guild_is_vip: e.hasFeature(m.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: A(p)
                }
            }

            function P(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function R(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                return null == e ? null : w(e)
            }

            function w(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && o.Z.has(e.deny, m.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(t.type) && null != t.parent_id ? i(l.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = h.Z.getChannelPermissions(t)) && void 0 !== e ? e : S.ZP.NONE),
                    channel_hidden: n
                }
            }

            function M(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = v.Z.getMediaSessionId();
                return C({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, D(e.getGuildId(), e.id, r), {
                    game_name: null != (n = g.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function j(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function L(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!O.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== m.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? b.Z.getGuildId() : null,
                        o = "channel_id" in e ? e.channel_id : r ? _.Z.getChannelId(i) : null,
                        u = l.Z.getChannel(o),
                        a = j(u, i),
                        c = C({}, e, N(a), null != i && null != o && (0, T.AB)(o) ? P(0, o) : w(u));
                    O.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function D(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(E.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== a.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function x(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(E.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != y.Z.findActivity(t.userId, (function(t) {
                        return t.type === m.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const U = {
                trackWithMetadata: L,
                getVoiceStateMetadata: D
            }
        },
        279008: (t, e, n) => {
            "use strict";
            n.d(e, {
                Kh: () => i,
                yh: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_explicit_media_redaction",
                label: "Explicit Media Redaction",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable explicit media redaction",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function i() {
                return r.getCurrentConfig({
                    location: "686da2_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function o() {
                return r.useExperiment({
                    location: "686da2_2"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        174333: (t, e, n) => {
            "use strict";
            n.d(e, {
                yZ: () => y,
                l4: () => v,
                HH: () => b,
                zj: () => E,
                qx: () => O,
                KP: () => S,
                Tw: () => g
            });
            var r = n(418705),
                i = n(988135),
                o = n(968449),
                u = n(61209),
                a = n(840922),
                l = n(473903),
                c = n(661123),
                s = n(279008),
                f = n(2590),
                d = n(757225);
            n(473708);

            function p(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var h = function() {
                    var t = l.default.getCurrentUser();
                    return !1 === (null == t ? void 0 : t.nsfwAllowed) ? r.Q4.BLUR : r.Q4.SHOW
                },
                y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!t) return h();
                    var n = o.UP.getSetting();
                    return e ? n === d.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : h() : n === d.TI.NON_FRIENDS || n === d.TI.FRIENDS_AND_NON_FRIENDS ? r.Q4.BLOCK : h()
                },
                v = function() {
                    var t = o.Sh.getSetting();
                    return {
                        explicitContentGuilds: t.explicitContentGuilds === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y() : t.explicitContentGuilds,
                        explicitContentNonFriendDm: t.explicitContentNonFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y(!0) : t.explicitContentNonFriendDm,
                        explicitContentFriendDm: t.explicitContentFriendDm === r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION ? y(!0, !0) : t.explicitContentFriendDm
                    }
                };

            function _(t) {
                return t === r.Q4.BLUR
            }

            function b(t) {
                if (!(0, s.Kh)()) return !1;
                if (null == l.default.getCurrentUser()) return !1;
                var e = v(),
                    n = e.explicitContentGuilds,
                    r = e.explicitContentFriendDm,
                    i = e.explicitContentNonFriendDm,
                    o = u.Z.getChannel(t.channel_id);
                return null != o && (o.isDM() || o.isGroupDM() ? a.Z.getFriendIDs().includes(t.author.id) ? _(r) : _(i) : _(n))
            }
            var E = function(t) {
                var e = v();
                o.Sh.updateSetting(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            p(t, e, n[e])
                        }))
                    }
                    return t
                }({}, e, t))
            };

            function O() {
                return !!(0, s.Kh)() && (null != l.default.getCurrentUser() && _(v().explicitContentGuilds))
            }

            function S(t, e) {
                if (i.ZP.get("obscure_blur_effect_enabled")) return !0;
                var n = t.flags;
                return !(void 0 === n || !e) && (0, c.yE)(n, f.J0y.CONTAINS_EXPLICIT_MEDIA)
            }

            function g(t) {
                var e = b(t);
                return {
                    obscuredAttachments: t.attachments.filter((function(t) {
                        return S(t, e)
                    })),
                    obscuredEmbeds: t.embeds.filter((function(t) {
                        return S(t, e)
                    }))
                }
            }
        },
        507711: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => P
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(882723),
                l = n(494889),
                c = n(443812),
                s = n(786170),
                f = n(347365),
                d = n(281110),
                p = n(2590);

            function h(t, e, n, r) {
                return d.ZP.post({
                    url: p.ANM.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
                    body: {
                        channel_id: t,
                        message_id: e,
                        attachment_ids: n,
                        embed_ids: r
                    }
                })
            }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function v(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function _(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return y(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = function(t, e) {
                var n, r, i, o, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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

            function E(t) {
                var e, n, r = null != t ? t : {},
                    o = r.onError,
                    u = r.onSuccess,
                    a = _(i.useState(!1), 2),
                    l = a[0],
                    c = a[1],
                    s = l,
                    d = i.useCallback((n = (e = function(t, e, n, r) {
                            var i, a;
                            return b(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (s) return [2];
                                        c(!0);
                                        l.label = 1;
                                    case 1:
                                        l.trys.push([1, 3, 4, 5]);
                                        return [4, h(t, e, n, r)];
                                    case 2:
                                        l.sent();
                                        null == u || u();
                                        return [3, 5];
                                    case 3:
                                        i = l.sent();
                                        a = new f.Hx(i);
                                        null == o || o(a);
                                        return [3, 5];
                                    case 4:
                                        c(!1);
                                        return [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, i) {
                                var o = e.apply(t, n);

                                function u(t) {
                                    v(o, r, i, u, a, "next", t)
                                }

                                function a(t) {
                                    v(o, r, i, u, a, "throw", t)
                                }
                                u(void 0)
                            }))
                        }),
                        function(t, e, r, i) {
                            return n.apply(this, arguments)
                        }), [s, o, u]);
                return {
                    reportFalsePositive: d,
                    isReportFalsePositiveLoading: l
                }
            }
            var O = n(318715),
                S = n(352980),
                g = n(279008),
                m = n(174333),
                T = n(493254),
                I = n(473708),
                C = n(516499),
                A = n.n(C),
                N = function(t) {
                    var e = t.attachment,
                        n = e.url,
                        i = e.description,
                        o = T.XH.test(e.filename);
                    return (0, r.jsx)("div", {
                        className: A().mediaContainer,
                        children: o ? (0, r.jsx)(s.Z, {
                            className: u()(A().video, A().media),
                            controls: !0,
                            src: n
                        }) : (0, r.jsx)("img", {
                            className: u()(A().image, A().media),
                            src: n,
                            alt: i
                        })
                    })
                };

            function P(t) {
                var e = t.channelId,
                    n = t.messageId,
                    o = t.attachmentId,
                    u = t.transitionState,
                    s = t.onClose,
                    f = (0, c.Dt)(),
                    d = function(t, e, n) {
                        var r, i = (0, O.ZP)([S.Z], (function() {
                                return S.Z.getMessage(t, e)
                            })),
                            o = (0, g.yh)();
                        if (void 0 === i) return [];
                        var u, a = void 0 !== n ? function(t) {
                            return t.id === n
                        } : function(t) {
                            return (0, m.KP)(t, o)
                        };
                        return null !== (u = null == i || null === (r = i.attachments) || void 0 === r ? void 0 : r.filter(a)) && void 0 !== u ? u : []
                    }(e, n, o),
                    p = E({
                        onSuccess: i.useCallback((function() {
                            l.Z.pop();
                            (0, a.showToast)((0,
                                a.createToast)(I.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, a.ToastType.CUSTOM));
                            s()
                        }), [s]),
                        onError: function() {
                            (0, a.showToast)((0, a.createToast)(I.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE))
                        }
                    }),
                    h = p.reportFalsePositive,
                    y = p.isReportFalsePositiveLoading,
                    v = function() {
                        s()
                    };
                void 0 !== d && 0 !== (null == d ? void 0 : d.length) || v();
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: u,
                    "aria-labelledby": f,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsxs)(a.ModalContent, {
                        children: [(0, r.jsx)(a.ModalCloseButton, {
                            onClick: v,
                            className: A().closeButton
                        }), (0, r.jsx)(a.Heading, {
                            id: f,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: A().header,
                            children: I.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: A().subheader,
                            children: I.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === d.length ? (0, r.jsx)(N, {
                            attachment: d[0]
                        }) : null]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [(0, r.jsx)(a.Button, {
                            className: A().button,
                            disabled: y,
                            submitting: y,
                            size: a.Button.Sizes.MEDIUM,
                            onClick: function() {
                                return h(e, n, d.map((function(t) {
                                    return t.id
                                })), [])
                            },
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: I.Z.Messages.CONFIRM
                            })
                        }), (0, r.jsx)(a.Button, {
                            className: A().button,
                            disabled: y,
                            color: a.Button.Colors.TRANSPARENT,
                            size: a.Button.Sizes.MEDIUM,
                            onClick: v,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: I.Z.Messages.CANCEL
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
                i = (n(667294), n(882723)),
                o = n(734691),
                u = n(320142),
                a = n(719174),
                l = n(2590),
                c = n(473708),
                s = n(852744),
                f = n.n(s),
                d = n(250282),
                p = n.n(d);

            function h(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function y(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            h(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            h(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var _ = function(t, e) {
                var n, r, i, o, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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
            const b = function(t) {
                var e = t.channelId,
                    s = t.messageId,
                    d = t.transitionState,
                    h = t.onClose,
                    b = function() {
                        h();
                        (0, i.openModalLazy)(y((function() {
                            var t, i;
                            return _(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, n(507711)];
                                    case 1:
                                        t = o.sent(), i = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(i, function(t) {
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
                                            }({
                                                channelId: e,
                                                messageId: s
                                            }, t))
                                        }]
                                }
                            }))
                        })))
                    },
                    E = (0, a.Z)();
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: d,
                    "aria-label": c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: f().modalHeader,
                        children: [(0, r.jsx)("img", {
                            src: p(),
                            alt: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                            className: f().headerImg
                        }), (0, r.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: f().headerText,
                            children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_NOTICE
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: f().modalBody,
                        children: [(0, r.jsx)(i.Heading, {
                            variant: "heading-lg/bold",
                            className: f().modalInteriorHeader,
                            children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: E ? c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }), (0, r.jsxs)("div", {
                            className: f().buttonContainer,
                            children: [E ? (0, r.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                onClick: function() {
                                    o.Z.open(l.oAB.PRIVACY_AND_SAFETY);
                                    h()
                                },
                                fullWidth: !0,
                                children: c.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                            }) : (0, r.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                onClick: function() {
                                    (0, u.Z)("https://discord.com")
                                },
                                fullWidth: !0,
                                children: c.Z.Messages.LEARN_MORE
                            }), (0, r.jsx)(i.Button, {
                                color: i.Button.Colors.PRIMARY,
                                onClick: function() {
                                    h()
                                },
                                fullWidth: !0,
                                children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                            }), (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: c.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
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
                k4: () => i,
                fA: () => o,
                vp: () => u,
                Bj: () => a,
                H: () => l,
                Ll: () => c,
                GZ: () => s,
                lE: () => f,
                EV: () => d
            });

            function r(t) {
                throw t
            }

            function i(t) {
                t = null !== t ? t : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function o(t, e) {
                return !1
            }

            function u(t) {
                return !1
            }

            function a() {
                return !1
            }

            function l() {
                return !1
            }

            function c(t) {
                t = null !== t ? t : r(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function s(t, e) {
                return !1
            }

            function f() {
                return !1
            }

            function d(t) {
                return !1
            }
        },
        719174: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(202351),
                i = n(473903);

            function o() {
                return (0, r.e7)([i.default], (function() {
                    var t;
                    return null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed
                }))
            }
        },
        491260: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => F
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                l = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function v(t) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return v(t)
            }

            function _(t, e) {
                return !e || "object" !== S(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function b(t, e) {
                b = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return b(t, e)
            }

            function E(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || g(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || g(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function g(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function m(t) {
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
                    var n, r = v(t);
                    if (e) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var T = Object.freeze([]),
                I = {},
                C = {},
                A = {},
                N = {},
                P = {};

            function R(t, e) {
                var n = I[t];
                return null != n ? n[e] : null
            }
            var w = function(t) {
                switch (t.type) {
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
            var M = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function j(t, e) {
                return function(t, e) {
                    return w(e) - w(t)
                }(t, e) || function(t, e) {
                    return M(e) - M(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function L(t) {
                delete C[t];
                delete A[t];
                delete N[t];
                if (null != I[t]) {
                    var e = E(u().sortBy(I[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        C[t] = n.status;
                        A[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    } else u().every(I[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete I[t]
                }
            }

            function D(t) {
                var e = I[t];
                if (null != e) {
                    var n = u().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        C[t] = n.status;
                        A[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    }
                }
            }

            function x(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    o = t.clientStatus,
                    u = t.activities;
                if (n === s.default.getId()) return !1;
                var a = I[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = I[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: o,
                    activities: T,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? O(u).sort(j) : u,
                        c = a[e];
                    u = null != c && i()(c.activities, l) ? c.activities : l;
                    a[e] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete P[n];
                L(n);
                return !0
            }

            function U(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    o = t.activities,
                    u = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = I[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = I[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: T,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? O(o).sort(j) : o;
                        a[e] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function Z(t, e) {
                if (e === s.default.getId()) return !1;
                var n = I[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete I[e];
                L(e)
            }

            function k(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(I)[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                        Z(t, i.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var B = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && b(t, e)
                }(n, t);
                var e = m(n);

                function n() {
                    h(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    C[s.default.getId()] = t;
                    A[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = C[t]) && void 0 !== i ? i : n
                    }
                    var o, u = R(t, e);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = A[t]) && void 0 !== n ? n : T
                    }
                    var r = R(t, e);
                    return null == r || null == r.activities ? T : r.activities
                };
                r.getPrimaryActivity = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e);
                    return n[0]
                };
                r.getAllApplicationActivities = function(t) {
                    var e = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(A)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                l = A[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var h = d.value;
                                    h.application_id === t && e.push({
                                        userId: a,
                                        activity: h
                                    })
                                }
                            } catch (t) {
                                s = !0;
                                f = t
                            } finally {
                                try {
                                    c || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                };
                r.getApplicationActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, (function(t) {
                        return t.application_id === e
                    }), n)
                };
                r.findActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, n).find(e)
                };
                r.getActivityMetadata = function(t) {
                    return P[t]
                };
                r.getUserIds = function() {
                    return Object.keys(A)
                };
                r.isMobileOnline = function(t) {
                    var e = N[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: I,
                        statuses: C,
                        activities: A,
                        activityMetadata: P,
                        clientStatuses: N
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: T,
                        presencesForGuilds: I,
                        statuses: C,
                        activities: A,
                        clientStatuses: N,
                        activityMetadata: P,
                        typeScore: w,
                        richnessScore: M
                    }
                };
                return n
            }(a.ZP.Store);
            B.displayName = "PresenceStore";
            const F = new B(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    I = {};
                    P = {};
                    C = y({}, r, C[r]);
                    A = y({}, r, A[r]);
                    N = y({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                u = e.clientStatus,
                                a = e.activities;
                            U({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            u = t.activities;
                        if (null != e) {
                            U({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
                            });
                            i.add(e.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    I = e.presencesForGuilds;
                    C = e.statuses;
                    A = e.activities;
                    P = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        x({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    k(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return Z(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        return x({
                            guildId: null != e ? e : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    k(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && x({
                            guildId: d.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    P[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && x({
                            guildId: e,
                            userId: t.user_id,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.addedMembers;
                    null == n || n.forEach((function(t) {
                        null != t.presence && x({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    var e = s.default.getId();
                    if (C[e] === t.status && A[e] === t.activities) return !1;
                    C[e] = t.status;
                    A[e] = t.activities;
                    delete P[e]
                }
            })
        },
        223219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => Z
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(473903),
                l = n(2590);

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
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

            function d(t) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return d(t)
            }

            function p(t) {
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

            function h(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
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
            var v = function(t) {
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
                    var n, r = d(t);
                    if (e) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var b = l.QZA.CLOSED,
                E = null,
                O = null,
                S = {},
                g = {},
                m = {},
                T = null,
                I = null,
                C = !1,
                A = !1,
                N = null,
                P = null,
                R = null,
                w = [],
                M = null,
                j = null;

            function L(t) {
                var e, n, r, i, o, u, c = a.default.getCurrentUser();
                if (null == c) return D();
                O = null !== (e = t.section) && void 0 !== e ? e : O;
                M = null !== (n = t.section) && void 0 !== n ? n : O;
                null != t.subsection && null != O && (S[O] = t.subsection);
                null != t.scrollPosition && null != O && (g[O] = t.scrollPosition);
                A = !!t.openWithoutBackstack;
                b = l.QZA.OPEN;
                m = {};
                T = f({}, l.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                I = p({}, T);
                P = null !== (r = t.onClose) && void 0 !== r ? r : null;
                R = null !== (i = t.analyticsLocation) && void 0 !== i ? i : null;
                w = null !== (o = t.analyticsLocations) && void 0 !== o ? o : [];
                j = null !== (u = t.impressionSource) && void 0 !== u ? u : null
            }

            function D() {
                b = l.QZA.CLOSED;
                C = !1;
                T = null;
                M = null;
                I = null;
                E = null;
                O = null;
                S = {};
                g = {};
                P = null;
                R = null;
                w = [];
                j = null
            }

            function x() {
                b = l.QZA.OPEN;
                m = {}
            }
            var U = function(t) {
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
                var e = _(n);

                function n() {
                    c(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.default)
                };
                r.hasChanges = function() {
                    return null != I && null != T && (!(!this.isOpen() && N !== l.cII.USER_SETTINGS) && !i().isEqual(I, T))
                };
                r.isOpen = function() {
                    return C
                };
                r.getPreviousSection = function() {
                    return E
                };
                r.getSection = function() {
                    return O
                };
                r.getSubsection = function() {
                    return null != O ? S[O] : null
                };
                r.getScrollPosition = function() {
                    return null != O ? g[O] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return A
                };
                r.getProps = function() {
                    return {
                        submitting: b === l.QZA.SUBMITTING,
                        section: O,
                        subsection: null != O ? S[O] : null,
                        scrollPosition: null != O ? g[O] : null,
                        settings: I,
                        errors: m,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: R,
                        analyticsLocations: w,
                        initialSection: M,
                        impressionSource: j
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: b,
                        previousSection: E,
                        section: O,
                        subsections: S,
                        scrollPositions: g,
                        errors: m,
                        originalSettings: T,
                        settings: I,
                        open: C,
                        openWithoutBackstack: A,
                        tab: N,
                        onClose: P,
                        analyticsLocation: R,
                        analyticsLocations: w,
                        initialSection: M,
                        impressionSource: j
                    }
                };
                ! function(t, e, n) {
                    e && s(t.prototype, e);
                    n && s(t, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return P
                    }
                }]);
                return n
            }(o.ZP.Store);
            U.displayName = "UserSettingsModalStore";
            const Z = new U(u.Z, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    C = !0;
                    L(t)
                },
                USER_SETTINGS_MODAL_INIT: L,
                USER_SETTINGS_MODAL_CLOSE: D,
                LOGOUT: D,
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
                    E = O;
                    O = t.section;
                    R = null;
                    var e;
                    w = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [];
                    null != t.subsection && (S[O] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    var e = t.forSection;
                    null != e ? delete S[e] : null != O && delete S[O]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    var e = t.forSection;
                    null != e ? delete g[e] : null != O && delete g[O]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    var e = t.settings;
                    null == I && (I = {});
                    var n = I[l.oAB.ACCOUNT];
                    I[l.oAB.ACCOUNT] = p({}, n, e)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: x,
                USER_SETTINGS_MODAL_RESET: function() {
                    var t = a.default.getCurrentUser();
                    x();
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
                        I = p({}, T)
                    }
                },
                DRAWER_SELECT_TAB: function(t) {
                    N = t.tab;
                    return null == O && N === l.cII.USER_SETTINGS && L({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        443812: (t, e, n) => {
            "use strict";
            n.d(e, {
                hQ: () => u,
                Dt: () => a,
                FG: () => l
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(t)
                },
                a = function() {
                    return (0, o.Z)((function() {
                        return u()
                    }))
                },
                l = function(t) {
                    return (0, t.children)(a())
                }
        },
        939198: (t, e, n) => {
            "use strict";
            n.d(e, {
                mT: () => i,
                Jj: () => o,
                OF: () => u,
                hV: () => r,
                WW: () => a
            });
            var r, i = 550,
                o = 350,
                u = 40;
            ! function(t) {
                t.STATIC = "STATIC";
                t.RESPONSIVE = "RESPONSIVE";
                t.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var a = 20
        },
        786170: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => h
            });
            var r = n(785893),
                i = n(667294),
                o = n(809784),
                u = n(202351),
                a = n(316878),
                l = n(939198);

            function c(t, e, n) {
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
                        c(t, e, n[e])
                    }))
                }
                return t
            }

            function f(t, e) {
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

            function d(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            var p = function(t) {
                var e = function() {
                        var t;
                        h && (null == E || null === (t = E.current) || void 0 === t || t.play())
                    },
                    n = function() {
                        var t;
                        h && (null == E || null === (t = E.current) || void 0 === t || t.pause())
                    },
                    c = function() {
                        return {
                            maxWidth: _.width,
                            maxHeight: _.height,
                            width: "100%",
                            height: "100%"
                        }
                    },
                    f = t.externalRef,
                    p = t.autoPlay,
                    h = t.playOnHover,
                    y = t.responsive,
                    v = t.mediaLayoutType,
                    _ = d(t, ["externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]),
                    b = !(0, u.e7)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })) && !h && p,
                    E = i.useRef(null);
                i.useLayoutEffect((function() {
                    return function() {
                        var t = E.current;
                        null != t && function(t) {
                            t.removeAttribute("src");
                            Array.from(t.children).forEach((function(t) {
                                if ((0, o.k)(t, HTMLSourceElement)) {
                                    t.removeAttribute("src");
                                    t.removeAttribute("type")
                                }(0, o.k)(t, HTMLImageElement) && t.removeAttribute("src")
                            }));
                            try {
                                t.load()
                            } catch (t) {}
                        }(t)
                    }
                }), []);
                i.useLayoutEffect((function() {
                    if ("function" == typeof f) {
                        f(null);
                        f(E.current)
                    } else null != f && (f.current = E.current);
                    return function() {
                        "function" == typeof f ? f(null) : null != f && (f.current = null)
                    }
                }), [f, E]);
                return (0, r.jsx)("video", s({
                    ref: E,
                    autoPlay: b,
                    onMouseEnter: e,
                    onMouseLeave: n,
                    onFocus: e,
                    onBlur: n,
                    style: v === l.hV.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : y ? c() : {}
                }, _))
            };
            const h = i.forwardRef((function(t, e) {
                return (0, r.jsx)(p, f(s({}, t), {
                    externalRef: e
                }))
            }))
        },
        488110: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => v
            });
            var r = n(473903),
                i = n(496486),
                o = function(t) {
                    return "function" == typeof t ? t() : t
                };
            n.n(i)().curry((function(t, e, n) {
                return o(e) ? t(n) : n({})
            }));

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        u(t, e, n[e])
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

            function c(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            var s, f, d = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            s = p.showModal;
            d = p.updateModalProps;
            f = n(264817).Mr;

            function h(t) {
                var e = t.promiseFn,
                    n = t.resolve,
                    r = t.reject,
                    i = t.modalProps,
                    o = void 0 === i ? {} : i,
                    u = t.hooks,
                    c = (void 0 === u ? {} : u).onEarlyClose,
                    p = function() {
                        null == c || c()
                    },
                    h = function(t) {
                        f(b);
                        n(t)
                    },
                    v = function(t) {
                        f(b);
                        r(t)
                    },
                    _ = function(t) {
                        var e = t.res;
                        d(b, E, p, l(a({}, o), {
                            error: e.body.message
                        }))
                    };
                if (null != s) var b = s(E, p, o);
                else null == c || c();

                function E(t) {
                    d(b, E, p, l(a({}, o), {
                        isLoading: !0
                    }));
                    return y({
                        promiseFn: e,
                        resolve: h,
                        reject: v,
                        code: t,
                        mfaCodeHandler: _,
                        isModalOpen: !0
                    })
                }
            }

            function y(t) {
                var e = t.promiseFn,
                    n = t.resolve,
                    r = t.reject,
                    i = t.code,
                    o = t.mfaCodeHandler,
                    u = void 0 === o ? h : o,
                    l = t.isModalOpen,
                    s = void 0 !== l && l,
                    f = c(t, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return e(null != i ? {
                    code: i
                } : {}).then(n, (function(t) {
                    if (function(t, e) {
                            return t.body && 60008 === t.body.code || e && 429 === t.status
                        }(t, s)) return u(a({
                        promiseFn: e,
                        resolve: n,
                        reject: r,
                        res: t
                    }, f));
                    r(t)
                }))
            }

            function v(t, e) {
                var n, i, u = null != e ? e : {},
                    l = u.checkEnabled,
                    s = void 0 === l ? null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i : l,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(e, n) {
                    (o(s) ? h : y)(a({
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
                updateModalProps: () => c
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(919244);

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var a = function(t, e, n) {
                return function(i) {
                    return (0, r.jsx)(o.Z, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                u(t, e, n[e])
                            }))
                        }
                        return t
                    }({
                        handleSubmit: t,
                        handleEarlyClose: e
                    }, n, i))
                }
            };

            function l(t, e, n) {
                return (0, i.h7)(a(t, e, n), {
                    onCloseCallback: e
                })
            }

            function c(t, e, n, r) {
                return (0, i.o)(t, a(e, n, r))
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
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(t) {
                var e = (0, r.useRef)(i);
                e.current === i && (e.current = t());
                return e.current
            }
        }
    }
]);