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
            e.exports = function(e, i, o) {
                if ("string" != typeof i) {
                    var a = Object.getOwnPropertyNames(i);
                    r && (a = a.concat(Object.getOwnPropertySymbols(i)));
                    for (var u = 0; u < a.length; ++u)
                        if (!(t[a[u]] || n[a[u]] || o && o[a[u]])) try {
                            e[a[u]] = i[a[u]]
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
                    return e.reduce(t ? function(e, r, i) {
                        n.index = i;
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

                function r(e, t, n, r, i, o, a) {
                    var u = this;
                    u.r1 = e;
                    u.r2 = t;
                    u.g1 = n;
                    u.g2 = r;
                    u.b1 = i;
                    u.b2 = o;
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
                            var i, o, a, u = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (a = n.b1; a <= n.b2; a++) u += r[e(i, o, a)] || 0;
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
                            var i, o, a, u, l = 0,
                                c = 0,
                                s = 0,
                                _ = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (a = n.g1; a <= n.g2; a++)
                                    for (u = n.b1; u <= n.b2; u++) {
                                        l += i = r[e(o, a, u)] || 0;
                                        c += i * (o + .5) * 8;
                                        s += i * (a + .5) * 8;
                                        _ += i * (u + .5) * 8
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

                function i() {
                    this.vboxes = new n((function(e, n) {
                        return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                i.prototype = {
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
                        for (var t, n, r, i = this.vboxes, o = 0; o < i.size(); o++)
                            if ((n = Math.sqrt(Math.pow(e[0] - i.peek(o).color[0], 2) + Math.pow(e[1] - i.peek(o).color[1], 2) + Math.pow(e[2] - i.peek(o).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                r = i.peek(o).color
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
                            i = e[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255])
                    }
                };

                function o(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            o = r.g2 - r.g1 + 1,
                            a = r.b2 - r.b1 + 1,
                            u = t.max([i, o, a]);
                        if (1 == r.count()) return [r.copy()];
                        var l, c, s, _, E = 0,
                            I = [],
                            T = [];
                        if (u == i)
                            for (l = r.r1; l <= r.r2; l++) {
                                _ = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) _ += n[e(l, c, s)] || 0;
                                E += _;
                                I[l] = E
                            } else if (u == o)
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
                            T[t] = E - e
                        }));
                        return O(u == i ? "r" : u == o ? "g" : "b")
                    }

                    function O(e) {
                        var t, n, i, o, a, u = e + "1",
                            c = e + "2",
                            s = 0;
                        for (l = r[u]; l <= r[c]; l++)
                            if (I[l] > E / 2) {
                                i = r.copy();
                                o = r.copy();
                                a = (t = l - r[u]) <= (n = r[c] - l) ? Math.min(r[c] - 1, ~~(l + n / 2)) : Math.max(r[u], ~~(l - 1 - t / 2));
                                for (; !I[a];) a++;
                                s = T[a];
                                for (; !s && I[a - 1];) s = T[--a];
                                i[c] = a;
                                o[u] = i[c] + 1;
                                return [i, o]
                            }
                    }
                }
                return {
                    quantize: function(a, u) {
                        if (!a.length || u < 2 || u > 256) return !1;
                        var l = function(t) {
                            var n, r, i, o, a = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                i = t[1] >> 3;
                                o = t[2] >> 3;
                                n = e(r, i, o);
                                a[n] = (a[n] || 0) + 1
                            }));
                            return a
                        }(a);
                        l.forEach((function() {
                            0
                        }));
                        var c = function(e, t) {
                                var n, i, o, a = 1e6,
                                    u = 0,
                                    l = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    _ = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    i = e[1] >> 3;
                                    o = e[2] >> 3;
                                    n < a ? a = n : n > u && (u = n);
                                    i < l ? l = i : i > c && (c = i);
                                    o < s ? s = o : o > _ && (_ = o)
                                }));
                                return new r(a, u, l, c, s, _, t)
                            }(a, l),
                            s = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        s.push(c);

                        function _(e, t) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var a = o(l, n),
                                        u = a[0],
                                        c = a[1];
                                    if (!u) return;
                                    e.push(u);
                                    if (c) {
                                        e.push(c);
                                        r++
                                    }
                                    if (r >= t) return;
                                    if (i++ > 1e3) return
                                } else {
                                    e.push(n);
                                    i++
                                }
                        }
                        _(s, .75 * u);
                        for (var E = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); s.size();) E.push(s.pop());
                        _(E, u - E.size());
                        for (var I = new i; E.size();) I.push(E.pop());
                        return I
                    }
                }
            }();
            e.exports = n.quantize
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => a
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

            function a() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        734691: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                i = n(630631),
                o = n(744564),
                a = n(223219),
                u = n(652591),
                l = n(775173),
                c = n(488110),
                s = n(120415),
                _ = n(735885),
                E = n(2590),
                I = n(473708);

            function T(e, t, n) {
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
                        T(e, t, n[t])
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
            const f = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    o.Z.dispatch(O({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: e,
                        subsection: t
                    }, n));
                    (0, _.jN)(E.S9g.USER_SETTINGS)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    o.Z.dispatch(O({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = a.Z.onClose;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    o.Z.dispatch(O({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
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
                saveAccountChanges: function(e, t) {
                    var n = this;
                    o.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var a = e.username,
                        _ = e.email,
                        T = e.emailToken,
                        f = e.password,
                        d = e.avatar,
                        A = e.newPassword,
                        N = e.discriminator,
                        S = t.close;
                    return (0, c.Z)((function(e) {
                        var t = p(O({
                                username: a,
                                email: _,
                                email_token: T,
                                password: f,
                                avatar: d,
                                new_password: A
                            }, e), {
                                discriminator: null != N && "" !== N ? N : void 0
                            }),
                            n = i.Z.get(E.JkL),
                            o = (0, s.xJ)();
                        if (null != o && null != n) {
                            t.push_provider = o;
                            t.push_token = n
                        }
                        var u = i.Z.get(E.scU);
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
                                return o.Z.dispatch({
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
                        o.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        o.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != A && o.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: A
                        });
                        null != f && null != A && o.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        S ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        o.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        959898: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => c
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(633878);

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

            function l(e, t) {
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
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    _ = e.color,
                    E = void 0 === _ ? i.Z.colors.INTERACTIVE_NORMAL : _,
                    I = e.colorClass,
                    T = void 0 === I ? "" : I,
                    O = l(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, o.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof E ? E : E.css,
                        fillRule: "evenodd",
                        d: "M15.293 15.293a1 1 0 0 1 1.414 0L19 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414L20.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414L19 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Zm3.353-.89-.525-.524a3 3 0 1 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .707l-.525.526c-.46.46-.74 1.032-.838 1.628-.042.25-.231.464-.485.478-.184.01-.37.015-.556.015H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.985 2.985 0 0 0-1.628.838l-.525.525a.5.5 0 0 1-.708 0Z",
                        clipRule: "evenodd",
                        className: T
                    })
                }))
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
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home"
            }(r || (r = {}));
            const i = r
        },
        614948: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ux: () => d,
                gS: () => A,
                ww: () => N
            });
            var r = n(667294),
                i = n(318715),
                o = n(734691),
                a = n(19585),
                u = n(482139),
                l = n(664625),
                c = n(21372),
                s = n(567403),
                _ = n(682776),
                E = n(464187),
                I = n(36058),
                T = n(2590),
                O = n(589677),
                p = n(131559),
                f = n(473708);

            function d(e) {
                return (0, i.ZP)([l.default, c.ZP], (function() {
                    if (null == e) return !1;
                    var t = l.default.getId();
                    return (0, I.EY)(c.ZP.getMember(e, t))
                }), [e])
            }

            function A(e) {
                return (0, i.cj)([l.default, c.ZP, E.Z, s.Z], (function() {
                    var t = {
                            nick: void 0,
                            bio: void 0
                        },
                        n = E.Z.getGuildId(),
                        r = null != e ? e : n,
                        i = s.Z.getGuild(r);
                    if (null == i || null == r) return t;
                    var o = l.default.getId(),
                        a = c.ZP.getMember(r, o),
                        u = (0, I.Ow)(null == a ? void 0 : a.flags);
                    if (0 === u.size) return t;
                    if (u.has(O.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                        if (null == e) {
                            var _;
                            t.nick = [f.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (_ = i.name) && void 0 !== _ ? _ : ""
                            })]
                        } else t.nick = [f.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
                    u.has(O.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [f.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]);
                    return t
                }), [e])
            }

            function N(e) {
                var t = e.guildId,
                    n = e.scrollPosition,
                    l = e.analyticsLocation,
                    c = e.analyticsLocations,
                    E = e.openWithoutBackstack,
                    I = (0, a.Z)().analyticsLocations,
                    O = (0, i.ZP)([s.Z], (function() {
                        return s.Z.getGuild(t)
                    }), [t]),
                    f = (0, i.ZP)([_.Z], (function() {
                        return null != O && _.Z.can(T.Plq.CHANGE_NICKNAME, O)
                    }), [O]);
                return [r.useCallback((function() {
                    if (null != O) {
                        var e = T.oAB.PROFILE_CUSTOMIZATION,
                            t = p.NB.GUILD;
                        f ? (0, u.Fq)(O, null != c ? c : I) : t = p.NB.USER_PROFILE;
                        o.Z.open(e, t, {
                            scrollPosition: n,
                            analyticsLocation: l,
                            analyticsLocations: c,
                            openWithoutBackstack: E
                        })
                    }
                }), [f, n, l, c, E, O, I]), f]
            }
        },
        813659: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => h
            });
            var r = n(785893),
                i = n(667294),
                o = n(318715),
                a = n(882723),
                u = n(153686),
                l = n(19585),
                c = n(664625),
                s = n(21372),
                _ = n(567403),
                E = n(124251),
                I = n(914563),
                T = n(652591),
                O = n(36058),
                p = n(614948),
                f = n(292327),
                d = n(2590),
                A = n(589677),
                N = n(473708),
                S = n(436052),
                L = n.n(S);

            function m(e, t) {
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

            function h(e) {
                var t, n = e.onClose,
                    S = e.transitionState,
                    m = e.guildId,
                    h = (0, o.ZP)([c.default], (function() {
                        return c.default.getId()
                    })),
                    g = (0, o.ZP)([s.ZP], (function() {
                        return s.ZP.getMember(m, h)
                    }), [m, h]),
                    M = (0, o.ZP)([_.Z], (function() {
                        return _.Z.getGuild(m)
                    }), [m]),
                    U = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "",
                    C = (0, O.no)(g),
                    v = (0, l.Z)(u.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT).analyticsLocations,
                    b = R((0, p.ww)({
                        guildId: m,
                        analyticsLocations: v,
                        openWithoutBackstack: !0
                    }), 2),
                    P = b[0],
                    D = b[1],
                    y = C.has(A.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? N.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : N.Z.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                D || (y = N.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                var G = D ? N.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : N.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                i.useEffect((function() {
                    T.default.track(d.rMx.OPEN_MODAL, {
                        type: f.dc,
                        guild_id: m,
                        other_user_id: h
                    })
                }), []);
                i.useEffect((function() {
                    null != M || n()
                }), [M, n]);
                return null == M ? null : (0, r.jsxs)(a.ModalRoot, {
                    transitionState: S,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsx)(a.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: L().headerContainer,
                            children: [(0, r.jsxs)("div", {
                                className: L().guildIconContainer,
                                children: [(0, r.jsx)(E.Z, {
                                    guild: M,
                                    size: E.Z.Sizes.LARGER
                                }), (0, r.jsx)("div", {
                                    className: L().statusContainer,
                                    children: (0, r.jsx)(I.Z, {
                                        className: L().statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0,
                                r.jsx)(a.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: N.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: U
                                })
                            })]
                        })
                    }), (0, r.jsx)(a.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: L().descriptionContainer,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: y
                            })
                        })
                    }), (0, r.jsxs)(a.ModalFooter, {
                        children: [(0, r.jsx)(a.Button, {
                            onClick: function() {
                                P();
                                n()
                            },
                            color: a.Button.Colors.BRAND_NEW,
                            look: a.Button.Looks.FILLED,
                            children: G
                        }), (0, r.jsx)(a.Button, {
                            onClick: n,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: N.Z.Messages.CANCEL
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
                jR: () => T,
                It: () => O,
                I5: () => p,
                g_: () => f,
                Cf: () => d,
                ID: () => A,
                sr: () => N,
                z5: () => S,
                IO: () => L,
                pG: () => m,
                W3: () => R,
                b9: () => h,
                _V: () => g
            });
            var r = n(281110),
                i = n(744564),
                o = n(735885),
                a = n(2590);

            function u(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            u(o, r, i, a, l, "next", e)
                        }

                        function l(e) {
                            u(o, r, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var c = function(e, t) {
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

            function s(e, t) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = l((function(e, t) {
                    var n, o, u, l, s, _;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                n = t.nick, o = t.avatar;
                                if (null == e) throw new Error("Need guildId");
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                                });
                                u = {
                                    nick: n,
                                    avatar: o
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
                                i.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                                });
                                i.Z.dispatch({
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
                                i.Z.dispatch({
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
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function I(e, t) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function T() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                });
                (0, o.xf)()
            }

            function O() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function p(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function f(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function d(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function A(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function N(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function L() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function m() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function R() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g(e) {
                i.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => k
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
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

            function T(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var d = l.QZA.CLOSED,
                A = null,
                N = null,
                S = {},
                L = {},
                m = {},
                R = null,
                h = null,
                g = !1,
                M = !1,
                U = null,
                C = null,
                v = null,
                b = [],
                P = null,
                D = null;

            function y(e) {
                var t, n, r, i, o, a, c = u.default.getCurrentUser();
                if (null == c) return G();
                N = null !== (t = e.section) && void 0 !== t ? t : N;
                P = null !== (n = e.section) && void 0 !== n ? n : N;
                null != e.subsection && null != N && (S[N] = e.subsection);
                null != e.scrollPosition && null != N && (L[N] = e.scrollPosition);
                M = !!e.openWithoutBackstack;
                d = l.QZA.OPEN;
                m = {};
                R = _({}, l.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                h = I({}, R);
                C = null !== (r = e.onClose) && void 0 !== r ? r : null;
                v = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null;
                b = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [];
                D = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function G() {
                d = l.QZA.CLOSED;
                g = !1;
                R = null;
                P = null;
                h = null;
                A = null;
                N = null;
                S = {};
                L = {};
                C = null;
                v = null;
                b = [];
                D = null
            }

            function w() {
                d = l.QZA.OPEN;
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
                    t && O(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != h && null != R && (!(!this.isOpen() && U !== l.cII.USER_SETTINGS) && !i().isEqual(h, R))
                };
                r.isOpen = function() {
                    return g
                };
                r.getPreviousSection = function() {
                    return A
                };
                r.getSection = function() {
                    return N
                };
                r.getSubsection = function() {
                    return null != N ? S[N] : null
                };
                r.getScrollPosition = function() {
                    return null != N ? L[N] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return M
                };
                r.getProps = function() {
                    return {
                        submitting: d === l.QZA.SUBMITTING,
                        section: N,
                        subsection: null != N ? S[N] : null,
                        scrollPosition: null != N ? L[N] : null,
                        settings: h,
                        errors: m,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: M,
                        analyticsLocation: v,
                        analyticsLocations: b,
                        initialSection: P,
                        impressionSource: D
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return C
                    }
                }]);
                return n
            }(o.ZP.Store);
            B.displayName = "UserSettingsModalStore";
            const k = new B(a.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    g = !0;
                    y(e)
                },
                USER_SETTINGS_MODAL_INIT: y,
                USER_SETTINGS_MODAL_CLOSE: G,
                LOGOUT: G,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    d = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (d !== l.QZA.SUBMITTING) return !1;
                    d = l.QZA.OPEN;
                    N = l.oAB.ACCOUNT;
                    var t;
                    m = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    A = N;
                    N = e.section;
                    v = null;
                    var t;
                    b = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (S[N] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete S[t] : null != N && delete S[N]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete L[t] : null != N && delete L[N]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == h && (h = {});
                    var n = h[l.oAB.ACCOUNT];
                    h[l.oAB.ACCOUNT] = I({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: w,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    w();
                    if (null != e) {
                        R = _({}, l.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        h = I({}, R)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    U = e.tab;
                    return null == N && U === l.cII.USER_SETTINGS && y({
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
                Z: () => N
            });
            var r = n(441143),
                i = n.n(r),
                o = n(202351),
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
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }
            var O = function(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var f = new Map;

            function d(e) {
                var t = f.get(e);
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
                    t && T(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isFocused = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return d(e).focused
                };
                r.getFocusedWindowId = function() {
                    var e = null;
                    f.forEach((function(t, n) {
                        t.focused && (e = n)
                    }));
                    return e
                };
                r.isElementFullScreen = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return d(e).isElementFullscreen
                };
                r.windowSize = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
                    return d(e).windowSize
                };
                return n
            }(o.ZP.Store);
            A.displayName = "WindowStore";
            const N = new A(a.Z, {
                WINDOW_INIT: function(e) {
                    i()(!f.has(e.windowId), "Window initialized multiple times");
                    var t = e.width,
                        n = e.height,
                        r = e.isElementFullscreen,
                        o = e.focused;
                    f.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: o
                    });
                    return !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    var t = d(e.windowId);
                    if (t.isElementFullscreen === e.isElementFullscreen) return !1;
                    f.set(e.windowId, E(_({}, t), {
                        isElementFullscreen: e.isElementFullscreen
                    }));
                    return !0
                },
                WINDOW_FOCUS: function(e) {
                    var t = d(e.windowId);
                    if (t.focused === e.focused) return !1;
                    f.set(e.windowId, E(_({}, t), {
                        focused: e.focused
                    }));
                    return !0
                },
                WINDOW_RESIZED: function(e) {
                    var t = d(e.windowId);
                    if (t.windowSize.width === e.width && t.windowSize.height === e.height) return !1;
                    f.set(e.windowId, E(_({}, t), {
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }));
                    return !0
                },
                WINDOW_UNLOAD: function(e) {
                    f.delete(e.windowId);
                    return !0
                }
            })
        },
        914563: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                o = n(959898),
                a = n(633878);

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
            const s = (0, i.hN)((function(e) {
                var t = e.color,
                    n = void 0 === t ? "currentColor" : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    s = e.width,
                    _ = void 0 === s ? 24 : s,
                    E = c(e, ["color", "height", "width"]);
                return (0, r.jsxs)("svg", l(function(e) {
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
                }({}, (0, a.Z)(E)), {
                    width: _,
                    height: o,
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
            }), o.i)
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => E,
                zp: () => I,
                Dc: () => T,
                rn: () => O,
                rv: () => p,
                XN: () => d,
                OF: () => A,
                fD: () => S,
                QB: () => L,
                Bo: () => m,
                c0: () => g
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                a = n.n(o),
                u = n(16243),
                l = n.n(u);

            function c(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function s(e) {
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
            0;

            function E(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = e.minWidth,
                    a = void 0 === o ? 0 : o,
                    u = e.minHeight,
                    l = void 0 === u ? 0 : u;
                if (t !== r || n !== i) {
                    var c = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * c), a);
                    var s = (n = Math.max(Math.round(n * c), l)) > i ? i / n : 1;
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

            function T(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = 1;
                t > r && (o = r / t);
                t = Math.round(t * o);
                var a = 1;
                (n = Math.round(n * o)) > i && (a = i / n);
                return Math.min(o * a, 1)
            }

            function O(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight;
                if (t === n) return 1;
                var o = Math.max(r / t, i / n);
                return Math.min(o, 1)
            }

            function p(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var f = [
                [0, 0, 0]
            ];

            function d(e, t, n) {
                var r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return f;
                var o = r.width = 0 === e.width ? 128 : e.width,
                    a = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, o, a);
                var u = function(e, t, n) {
                        for (var r, i, o, a, u, l = [], c = 0; c < t; c += n) {
                            i = e[0 + (r = 4 * c)];
                            o = e[r + 1];
                            a = e[r + 2];
                            (void 0 === (u = e[r + 3]) || u >= 125) && (i > 250 && o > 250 && a > 250 || l.push([i, o, a]))
                        }
                        return l
                    }(i.getImageData(0, 0, o, a).data, o * a, n),
                    c = l()(u, t);
                return "boolean" == typeof c ? f : c.palette()
            }
            var A = function(e) {
                    return N(e)
                },
                N = a().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(e) {
                            n(e);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            t(d(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = e
                    }))
                }));

            function S(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e);
                    r.onload = function() {
                        i()("string" == typeof r.result, "Result must be a string");
                        t(r.result)
                    };
                    r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function L(e) {
                var t = e.split(";base64,");
                i()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function m(e, t, n) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = s((function(e, t, n) {
                    var r;
                    return _(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, h(e).arrayBuffer()];
                            case 1:
                                r = i.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                return new Blob([r], {
                    type: n
                })
            }

            function g(e) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = s((function(e) {
                    var t, n, r;
                    return _(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = i.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        990554: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => i
            });
            var r = n(421281);

            function i(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                var a = i.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    u = "".concat(t).concat(a),
                    l = e[u];
                if (null != l) return l;
                0
            }
        }
    }
]);