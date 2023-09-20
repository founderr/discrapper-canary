(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [37246], {
        753074: e => {
            "use strict";
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, o, i) {
                if ("string" != typeof o) {
                    var a = Object.getOwnPropertyNames(o);
                    r && (a = a.concat(Object.getOwnPropertySymbols(o)));
                    for (var u = 0; u < a.length; ++u)
                        if (!(t[a[u]] || n[a[u]] || i && i[a[u]])) try {
                            e[a[u]] = o[a[u]]
                        } catch (e) {}
                }
                return e
            }
        },
        16243: e => {
            if (!t) var t = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map((function(e, r) {
                        n.index = r;
                        return t.call(n, e)
                    })) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, o) {
                        n.index = o;
                        return e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, n) {
                    return Math.max.apply(null, n ? t.map(e, n) : e)
                }
            };
            var n = function() {
                function e(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e);
                        n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e);
                            n = !1
                        },
                        peek: function(e) {
                            n || r();
                            void 0 === e && (e = t.length - 1);
                            return t[e]
                        },
                        pop: function() {
                            n || r();
                            return t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            n || r();
                            return t
                        }
                    }
                }

                function r(e, t, n, r, o, i, a) {
                    var u = this;
                    u.r1 = e;
                    u.r2 = t;
                    u.g1 = n;
                    u.g2 = r;
                    u.b1 = o;
                    u.b2 = i;
                    u.histo = a
                }
                r.prototype = {
                    volume: function(e) {
                        var t = this;
                        t._volume && !e || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1));
                        return t._volume
                    },
                    count: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || t) {
                            var o, i, a, u = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (i = n.g1; i <= n.g2; i++)
                                    for (a = n.b1; a <= n.b2; a++) u += r[e(o, i, a)] || 0;
                            n._count = u;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var e = this;
                        return new r(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo)
                    },
                    avg: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || t) {
                            var o, i, a, u, l = 0,
                                c = 0,
                                s = 0,
                                _ = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (a = n.g1; a <= n.g2; a++)
                                    for (u = n.b1; u <= n.b2; u++) {
                                        l += o = r[e(i, a, u)] || 0;
                                        c += o * (i + .5) * 8;
                                        s += o * (a + .5) * 8;
                                        _ += o * (u + .5) * 8
                                    }
                            n._avg = l ? [~~(c / l), ~~(s / l), ~~(_ / l)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(e) {
                        var t = this,
                            n = e[0] >> 3;
                        gval = e[1] >> 3;
                        bval = e[2] >> 3;
                        return n >= t.r1 && n <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                    }
                };

                function o() {
                    this.vboxes = new n((function(e, n) {
                        return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                o.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(e) {
                            return e.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, r, o = this.vboxes, i = 0; i < o.size(); i++)
                            if ((n = Math.sqrt(Math.pow(e[0] - o.peek(i).color[0], 2) + Math.pow(e[1] - o.peek(i).color[1], 2) + Math.pow(e[2] - o.peek(i).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                r = o.peek(i).color
                            } return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort((function(e, n) {
                            return t.naturalOrder(t.sum(e.color), t.sum(n.color))
                        }));
                        var n = e[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                        var r = e.length - 1,
                            o = e[r].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (e[r].color = [255, 255, 255])
                    }
                };

                function i(n, r) {
                    if (r.count()) {
                        var o = r.r2 - r.r1 + 1,
                            i = r.g2 - r.g1 + 1,
                            a = r.b2 - r.b1 + 1,
                            u = t.max([o, i, a]);
                        if (1 == r.count()) return [r.copy()];
                        var l, c, s, _, E = 0,
                            I = [],
                            p = [];
                        if (u == o)
                            for (l = r.r1; l <= r.r2; l++) {
                                _ = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) _ += n[e(l, c, s)] || 0;
                                E += _;
                                I[l] = E
                            } else if (u == i)
                                for (l = r.g1; l <= r.g2; l++) {
                                    _ = 0;
                                    for (c = r.r1; c <= r.r2; c++)
                                        for (s = r.b1; s <= r.b2; s++) _ += n[e(c, l, s)] || 0;
                                    E += _;
                                    I[l] = E
                                } else
                                    for (l = r.b1; l <= r.b2; l++) {
                                        _ = 0;
                                        for (c = r.r1; c <= r.r2; c++)
                                            for (s = r.g1; s <= r.g2; s++) _ += n[e(c, s, l)] || 0;
                                        E += _;
                                        I[l] = E
                                    }
                        I.forEach((function(e, t) {
                            p[t] = E - e
                        }));
                        return f(u == o ? "r" : u == i ? "g" : "b")
                    }

                    function f(e) {
                        var t, n, o, i, a, u = e + "1",
                            c = e + "2",
                            s = 0;
                        for (l = r[u]; l <= r[c]; l++)
                            if (I[l] > E / 2) {
                                o = r.copy();
                                i = r.copy();
                                a = (t = l - r[u]) <= (n = r[c] - l) ? Math.min(r[c] - 1, ~~(l + n / 2)) : Math.max(r[u], ~~(l - 1 - t / 2));
                                for (; !I[a];) a++;
                                s = p[a];
                                for (; !s && I[a - 1];) s = p[--a];
                                o[c] = a;
                                i[u] = o[c] + 1;
                                return [o, i]
                            }
                    }
                }
                return {
                    quantize: function(a, u) {
                        if (!a.length || u < 2 || u > 256) return !1;
                        var l = function(t) {
                            var n, r, o, i, a = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                o = t[1] >> 3;
                                i = t[2] >> 3;
                                n = e(r, o, i);
                                a[n] = (a[n] || 0) + 1
                            }));
                            return a
                        }(a);
                        l.forEach((function() {
                            0
                        }));
                        var c = function(e, t) {
                                var n, o, i, a = 1e6,
                                    u = 0,
                                    l = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    _ = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    o = e[1] >> 3;
                                    i = e[2] >> 3;
                                    n < a ? a = n : n > u && (u = n);
                                    o < l ? l = o : o > c && (c = o);
                                    i < s ? s = i : i > _ && (_ = i)
                                }));
                                return new r(a, u, l, c, s, _, t)
                            }(a, l),
                            s = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        s.push(c);

                        function _(e, t) {
                            for (var n, r = 1, o = 0; o < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var a = i(l, n),
                                        u = a[0],
                                        c = a[1];
                                    if (!u) return;
                                    e.push(u);
                                    if (c) {
                                        e.push(c);
                                        r++
                                    }
                                    if (r >= t) return;
                                    if (o++ > 1e3) return
                                } else {
                                    e.push(n);
                                    o++
                                }
                        }
                        _(s, .75 * u);
                        for (var E = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); s.size();) E.push(s.pop());
                        _(E, u - E.size());
                        for (var I = new o; E.size();) I.push(E.pop());
                        return I
                    }
                }
            }();
            e.exports = n.quantize
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => a
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

            function a() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        734691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                a = n(223219),
                u = n(652591),
                l = n(775173),
                c = n(488110),
                s = n(120415),
                _ = n(735885),
                E = n(2590),
                I = n(473708);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
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

            function d(e, t) {
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
            const T = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(f({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: t
                    }, n));
                    (0, _.jN)(E.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(f({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = a.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(f({
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
                    var a = e.username,
                        _ = e.email,
                        p = e.emailToken,
                        T = e.password,
                        O = e.avatar,
                        A = e.newPassword,
                        S = e.discriminator,
                        N = t.close;
                    return (0, c.Z)((function(e) {
                        var t = d(f({
                                username: a,
                                email: _,
                                email_token: p,
                                password: T,
                                avatar: O,
                                new_password: A
                            }, e), {
                                discriminator: null != S && "" !== S ? S : void 0
                            }),
                            n = o.Z.get(E.JkL),
                            i = (0, s.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var u = o.Z.get(E.scU);
                        if (null != E.mvA && null != u) {
                            t.push_voip_provider = E.mvA;
                            t.push_voip_token = u
                        }
                        return r.ZP.patch({
                            url: E.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: I.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        u.default.track(E.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, l.xR)(t.avatar)
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
                        null != A && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: A
                        });
                        null != T && null != A && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        N ? n.close() : n.submitComplete();
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
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(882723),
                l = n(473708),
                c = n(775823),
                s = n.n(c);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function I(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
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
                    var n, r = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
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
                    t && p(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    _(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            o = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == o || o(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        i = t.actionText,
                        c = t.children,
                        _ = t.error,
                        E = t.isLoading,
                        I = t.maxLength,
                        p = t.transitionState,
                        f = t.helpMessage,
                        d = t.retryPrompt,
                        T = t.retrySuccessMessage,
                        O = this.state,
                        A = O.code,
                        S = O.errorMessage,
                        N = O.retrySuccess,
                        h = o.Children.count(c) > 0 ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        m = null != d ? (0, r.jsxs)(u.Text, {
                            className: a()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                                className: a()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(u.Anchor, {
                                    children: d
                                })
                            })]
                        }) : null,
                        L = N ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: T
                            })
                        }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: p,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != f ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: f
                                }) : null, h, L, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != I ? I : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != _ ? _ : S
                                    }) : null, m]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: E || 0 === A.length,
                                    children: null != i ? i : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            T.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const O = T
        },
        153686: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
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
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
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
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home"
            }(r || (r = {}));
            const o = r
        },
        614948: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ux: () => O,
                gS: () => A,
                ww: () => S
            });
            var r = n(667294),
                o = n(318715),
                i = n(734691),
                a = n(19585),
                u = n(482139),
                l = n(664625),
                c = n(21372),
                s = n(567403),
                _ = n(682776),
                E = n(464187),
                I = n(36058),
                p = n(2590),
                f = n(589677),
                d = n(131559),
                T = n(473708);

            function O(e) {
                return (0, o.ZP)([l.default, c.ZP], (function() {
                    if (null == e) return !1;
                    var t = l.default.getId();
                    return (0, I.EY)(c.ZP.getMember(e, t))
                }), [e])
            }

            function A(e) {
                return (0, o.cj)([l.default, c.ZP, E.Z, s.Z], (function() {
                    var t = {
                            nick: void 0,
                            bio: void 0
                        },
                        n = E.Z.getGuildId(),
                        r = null != e ? e : n,
                        o = s.Z.getGuild(r);
                    if (null == o || null == r) return t;
                    var i = l.default.getId(),
                        a = c.ZP.getMember(r, i),
                        u = (0, I.Ow)(null == a ? void 0 : a.flags);
                    if (0 === u.size) return t;
                    if (u.has(f.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                        if (null == e) {
                            var _;
                            t.nick = [T.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (_ = o.name) && void 0 !== _ ? _ : ""
                            })]
                        } else t.nick = [T.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
                    u.has(f.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [T.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]);
                    return t
                }), [e])
            }

            function S(e) {
                var t = e.guildId,
                    n = e.scrollPosition,
                    l = e.analyticsLocation,
                    c = e.analyticsLocations,
                    E = e.openWithoutBackstack,
                    I = (0, a.Z)().analyticsLocations,
                    f = (0,
                        o.ZP)([s.Z], (function() {
                        return s.Z.getGuild(t)
                    }), [t]),
                    T = (0, o.ZP)([_.Z], (function() {
                        return null != f && _.Z.can(p.Plq.CHANGE_NICKNAME, f)
                    }), [f]);
                return [r.useCallback((function() {
                    if (null != f) {
                        var e = p.oAB.PROFILE_CUSTOMIZATION,
                            t = d.NB.GUILD;
                        T ? (0, u.Fq)(f, null != c ? c : I) : t = d.NB.USER_PROFILE;
                        i.Z.open(e, t, {
                            scrollPosition: n,
                            analyticsLocation: l,
                            analyticsLocations: c,
                            openWithoutBackstack: E
                        })
                    }
                }), [T, n, l, c, E, f, I]), T]
            }
        },
        813659: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => R
            });
            var r = n(785893),
                o = n(667294),
                i = n(318715),
                a = n(882723),
                u = n(153686),
                l = n(19585),
                c = n(664625),
                s = n(21372),
                _ = n(567403),
                E = n(124251),
                I = n(914563),
                p = n(652591),
                f = n(36058),
                d = n(614948),
                T = n(292327),
                O = n(2590),
                A = n(589677),
                S = n(473708),
                N = n(436052),
                h = n.n(N);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e) {
                var t, n = e.onClose,
                    N = e.transitionState,
                    m = e.guildId,
                    R = (0, i.ZP)([c.default], (function() {
                        return c.default.getId()
                    })),
                    g = (0, i.ZP)([s.ZP], (function() {
                        return s.ZP.getMember(m, R)
                    }), [m, R]),
                    C = (0, i.ZP)([_.Z], (function() {
                        return _.Z.getGuild(m)
                    }), [m]),
                    b = null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : "",
                    M = (0, f.no)(g),
                    v = (0, l.Z)(u.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT).analyticsLocations,
                    U = L((0, d.ww)({
                        guildId: m,
                        analyticsLocations: v,
                        openWithoutBackstack: !0
                    }), 2),
                    y = U[0],
                    P = U[1],
                    D = M.has(A.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? S.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : S.Z.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                P || (D = S.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                var G = P ? S.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : S.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                o.useEffect((function() {
                    p.default.track(O.rMx.OPEN_MODAL, {
                        type: T.dc,
                        guild_id: m,
                        other_user_id: R
                    })
                }), []);
                o.useEffect((function() {
                    null != C || n()
                }), [C, n]);
                return null == C ? null : (0, r.jsxs)(a.ModalRoot, {
                    transitionState: N,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsx)(a.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: h().headerContainer,
                            children: [(0, r.jsxs)("div", {
                                className: h().guildIconContainer,
                                children: [(0, r.jsx)(E.Z, {
                                    guild: C,
                                    size: E.Z.Sizes.LARGER
                                }), (0, r.jsx)("div", {
                                    className: h().statusContainer,
                                    children: (0, r.jsx)(I.Z, {
                                        className: h().statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, r.jsx)(a.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: S.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: b
                                })
                            })]
                        })
                    }), (0, r.jsx)(a.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: h().descriptionContainer,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: D
                            })
                        })
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [(0, r.jsx)(a.Button, {
                            onClick: function() {
                                y();
                                n()
                            },
                            color: a.Button.Colors.BRAND_NEW,
                            look: a.Button.Looks.FILLED,
                            children: G
                        }), (0, r.jsx)(a.Button, {
                            onClick: n,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: S.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        482139: (e, t, n) => {
            "use strict";
            n.d(t, {
                iq: () => s,
                HP: () => E,
                Fq: () => I,
                jR: () => p,
                It: () => f,
                I5: () => d,
                g_: () => T,
                Cf: () => O,
                ID: () => A,
                sr: () => S,
                z5: () => N,
                IO: () => h,
                pG: () => m,
                W3: () => L,
                b9: () => R,
                _V: () => g
            });
            var r = n(281110),
                o = n(744564),
                i = n(735885),
                a = n(2590);

            function u(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
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

                        function a(e) {
                            u(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            u(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var c = function(e, t) {
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
                        }([i, u])
                    }
                }
            };

            function s(e, t) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = l((function(e, t) {
                    var n, i, u, l, s, _;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                n = t.nick, i = t.avatar;
                                if (null == e) throw new Error("Need guildId");
                                o.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                                });
                                u = {
                                    nick: n,
                                    avatar: i
                                };
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: a.ANM.SET_GUILD_MEMBER(e),
                                    body: u,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                l = c.sent();
                                o.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                                });
                                o.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildMember: l.body,
                                    guildId: e
                                });
                                return [2, l];
                            case 3:
                                s = c.sent();
                                if (null != (null == (_ = s.body) ? void 0 : _.username)) {
                                    _.nick = _.username;
                                    delete _.username
                                }
                                o.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                                    errors: s.body
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function E(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function I(e, t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function p() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                });
                (0, i.xf)()
            }

            function f() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function d(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function T(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function O(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function A(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function h() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function m() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function L() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function R() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g(e) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                a = n(744564),
                u = n(473903),
                l = n(2590);

            function c(e, t) {
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

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var O = l.QZA.CLOSED,
                A = null,
                S = null,
                N = {},
                h = {},
                m = {},
                L = null,
                R = null,
                g = !1,
                C = !1,
                b = null,
                M = null,
                v = null,
                U = [],
                y = null,
                P = null;

            function D(e) {
                var t, n, r, o, i, a, c = u.default.getCurrentUser();
                if (null == c) return G();
                S = null !== (t = e.section) && void 0 !== t ? t : S;
                y = null !== (n = e.section) && void 0 !== n ? n : S;
                null != e.subsection && null != S && (N[S] = e.subsection);
                null != e.scrollPosition && null != S && (h[S] = e.scrollPosition);
                C = !!e.openWithoutBackstack;
                O = l.QZA.OPEN;
                m = {};
                L = _({}, l.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                R = I({}, L);
                M = null !== (r = e.onClose) && void 0 !== r ? r : null;
                v = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                U = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                P = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function G() {
                O = l.QZA.CLOSED;
                g = !1;
                L = null;
                y = null;
                R = null;
                A = null;
                S = null;
                N = {};
                h = {};
                M = null;
                v = null;
                U = [];
                P = null
            }

            function w() {
                O = l.QZA.OPEN;
                m = {}
            }
            var B = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != R && null != L && (!(!this.isOpen() && b !== l.cII.USER_SETTINGS) && !o().isEqual(R, L))
                };
                r.isOpen = function() {
                    return g
                };
                r.getPreviousSection = function() {
                    return A
                };
                r.getSection = function() {
                    return S
                };
                r.getSubsection = function() {
                    return null != S ? N[S] : null
                };
                r.getScrollPosition = function() {
                    return null != S ? h[S] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return C
                };
                r.getProps = function() {
                    return {
                        submitting: O === l.QZA.SUBMITTING,
                        section: S,
                        subsection: null != S ? N[S] : null,
                        scrollPosition: null != S ? h[S] : null,
                        settings: R,
                        errors: m,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: C,
                        analyticsLocation: v,
                        analyticsLocations: U,
                        initialSection: y,
                        impressionSource: P
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: O,
                        previousSection: A,
                        section: S,
                        subsections: N,
                        scrollPositions: h,
                        errors: m,
                        originalSettings: L,
                        settings: R,
                        open: g,
                        openWithoutBackstack: C,
                        tab: b,
                        onClose: M,
                        analyticsLocation: v,
                        analyticsLocations: U,
                        initialSection: y,
                        impressionSource: P
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return M
                    }
                }]);
                return n
            }(i.ZP.Store);
            B.displayName = "UserSettingsModalStore";
            const j = new B(a.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    g = !0;
                    D(e)
                },
                USER_SETTINGS_MODAL_INIT: D,
                USER_SETTINGS_MODAL_CLOSE: G,
                LOGOUT: G,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    O = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (O !== l.QZA.SUBMITTING) return !1;
                    O = l.QZA.OPEN;
                    S = l.oAB.ACCOUNT;
                    var t;
                    m = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    A = S;
                    S = e.section;
                    v = null;
                    var t;
                    U = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (N[S] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete N[t] : null != S && delete N[S]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete h[t] : null != S && delete h[S]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == R && (R = {});
                    var n = R[l.oAB.ACCOUNT];
                    R[l.oAB.ACCOUNT] = I({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: w,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    w();
                    if (null != e) {
                        L = _({}, l.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        R = I({}, L)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    b = e.tab;
                    return null == S && b === l.cII.USER_SETTINGS && D({
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
                Z: () => S
            });
            var r = n(441143),
                o = n.n(r),
                i = n(202351),
                a = n(744564),
                u = n(575978);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

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
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function _(e) {
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

            function E(e, t) {
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
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var T = new Map;

            function O(e) {
                var t = T.get(e);
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
                    t && p(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFocused = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return O(e).focused
                };
                r.getFocusedWindowId = function() {
                    var e = null;
                    T.forEach((function(t, n) {
                        t.focused && (e = n)
                    }));
                    return e
                };
                r.isElementFullScreen = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return O(e).isElementFullscreen
                };
                r.windowSize = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return O(e).windowSize
                };
                r.__getLocalVars = function() {
                    return {
                        windowStates: T
                    }
                };
                return n
            }(i.ZP.Store);
            A.displayName = "WindowStore";
            const S = new A(a.Z, {
                WINDOW_INIT: function(e) {
                    o()(!T.has(e.windowId), "Window initialized multiple times");
                    var t = e.width,
                        n = e.height,
                        r = e.isElementFullscreen,
                        i = e.focused;
                    T.set(e.windowId, {
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
                    var t = O(e.windowId);
                    if (t.isElementFullscreen === e.isElementFullscreen) return !1;
                    T.set(e.windowId, E(_({}, t), {
                        isElementFullscreen: e.isElementFullscreen
                    }));
                    return !0
                },
                WINDOW_FOCUS: function(e) {
                    var t = O(e.windowId);
                    if (t.focused === e.focused) return !1;
                    T.set(e.windowId, E(_({}, t), {
                        focused: e.focused
                    }));
                    return !0
                },
                WINDOW_RESIZED: function(e) {
                    var t = O(e.windowId);
                    if (t.windowSize.width === e.width && t.windowSize.height === e.height) return !1;
                    T.set(e.windowId, E(_({}, t), {
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }));
                    return !0
                },
                WINDOW_UNLOAD: function(e) {
                    T.delete(e.windowId);
                    return !0
                }
            })
        },
        914563: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
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

            function u(e, t) {
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

            function l(e) {
                var t = e.color,
                    n = void 0 === t ? "currentColor" : t,
                    l = e.height,
                    c = void 0 === l ? 24 : l,
                    s = e.width,
                    _ = void 0 === s ? 24 : s,
                    E = u(e, ["color", "height", "width"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(E)), {
                    width: _,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                        stroke: n,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                        fill: n
                    })]
                }))
            }
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => E,
                zp: () => I,
                Dc: () => p,
                rn: () => f,
                rv: () => d,
                XN: () => O,
                OF: () => A,
                fD: () => N,
                QB: () => h,
                Bo: () => m,
                c0: () => g
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                a = n.n(i),
                u = n(16243),
                l = n.n(u);

            function c(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            c(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            c(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var _ = function(e, t) {
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
                        }([i, u])
                    }
                }
            };
            0;

            function E(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight,
                    i = e.minWidth,
                    a = void 0 === i ? 0 : i,
                    u = e.minHeight,
                    l = void 0 === u ? 0 : u;
                if (t !== r || n !== o) {
                    var c = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * c), a);
                    var s = (n = Math.max(Math.round(n * c), l)) > o ? o / n : 1;
                    t = Math.max(Math.round(t * s), a);
                    n = Math.max(Math.round(n * s), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function I(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return E({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function p(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight,
                    i = 1;
                t > r && (i = r / t);
                t = Math.round(t * i);
                var a = 1;
                (n = Math.round(n * i)) > o && (a = o / n);
                return Math.min(i * a, 1)
            }

            function f(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight;
                if (t === n) return 1;
                var i = Math.max(r / t, o / n);
                return Math.min(i, 1)
            }

            function d(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var T = [
                [0, 0, 0]
            ];

            function O(e, t, n) {
                var r = document.createElement("canvas"),
                    o = r.getContext("2d");
                if (null == o) return T;
                var i = r.width = 0 === e.width ? 128 : e.width,
                    a = r.height = 0 === e.height ? 128 : e.height;
                o.drawImage(e, 0, 0, i, a);
                var u = function(e, t, n) {
                        for (var r, o, i, a, u, l = [], c = 0; c < t; c += n) {
                            o = e[0 + (r = 4 * c)];
                            i = e[r + 1];
                            a = e[r + 2];
                            (void 0 === (u = e[r + 3]) || u >= 125) && (o > 250 && i > 250 && a > 250 || l.push([o, i, a]))
                        }
                        return l
                    }(o.getImageData(0, 0, i, a).data, i * a, n),
                    c = l()(u, t);
                return "boolean" == typeof c ? T : c.palette()
            }
            var A = function(e) {
                    return S(e)
                },
                S = a().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(e) {
                            n(e);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            t(O(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = e
                    }))
                }));

            function N(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e);
                    r.onload = function() {
                        o()("string" == typeof r.result, "Result must be a string");
                        t(r.result)
                    };
                    r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function h(e) {
                var t = e.split(";base64,");
                o()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function m(e, t, n) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = s((function(e, t, n) {
                    var r;
                    return _(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, R(e).arrayBuffer()];
                            case 1:
                                r = o.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function R(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                return new Blob([r], {
                    type: n
                })
            }

            function g(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = s((function(e) {
                    var t, n, r;
                    return _(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = o.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
            }));

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

            function c(e, t) {
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
            var s, _, E = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                I = n(680918);
            s = I.showModal;
            E = I.updateModalProps;
            _ = n(264817).Mr;

            function p(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    a = e.hooks,
                    c = (void 0 === a ? {} : a).onEarlyClose,
                    I = function() {
                        null == c || c()
                    },
                    p = function(e) {
                        _(O);
                        n(e)
                    },
                    d = function(e) {
                        _(O);
                        r(e)
                    },
                    T = function(e) {
                        var t = e.res;
                        E(O, A, I, l(u({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != s) var O = s(A, I, i);
                else null == c || c();

                function A(e) {
                    E(O, A, I, l(u({}, i), {
                        isLoading: !0
                    }));
                    return f({
                        promiseFn: t,
                        resolve: p,
                        reject: d,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }
            }

            function f(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    a = void 0 === i ? p : i,
                    l = e.isModalOpen,
                    s = void 0 !== l && l,
                    _ = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, s)) return a(u({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, _));
                    r(e)
                }))
            }

            function d(e, t) {
                var n, o, a = null != t ? t : {},
                    l = a.checkEnabled,
                    s = void 0 === l ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : l,
                    _ = c(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(s) ? p : f)(u({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, _))
                }))
            }
        },
        990554: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => o
            });
            var r = n(421281);

            function o(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                var a = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    u = "".concat(t).concat(a),
                    l = e[u];
                if (null != l) return l;
                0
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => l,
                updateModalProps: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
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
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function l(e, t, n) {
                return (0, o.h7)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, o.o)(e, u(t, n, r))
            }
        }
    }
]);