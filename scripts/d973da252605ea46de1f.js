(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [37246], {
        753074: t => {
            "use strict";
            var n = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                e = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, o, i) {
                if ("string" != typeof o) {
                    var u = Object.getOwnPropertyNames(o);
                    r && (u = u.concat(Object.getOwnPropertySymbols(o)));
                    for (var c = 0; c < u.length; ++c)
                        if (!(n[u[c]] || e[u[c]] || i && i[u[c]])) try {
                            t[u[c]] = o[u[c]]
                        } catch (t) {}
                }
                return t
            }
        },
        16243: t => {
            if (!n) var n = {
                map: function(t, n) {
                    var e = {};
                    return n ? t.map((function(t, r) {
                        e.index = r;
                        return n.call(e, t)
                    })) : t.slice()
                },
                naturalOrder: function(t, n) {
                    return t < n ? -1 : t > n ? 1 : 0
                },
                sum: function(t, n) {
                    var e = {};
                    return t.reduce(n ? function(t, r, o) {
                        e.index = o;
                        return t + n.call(e, r)
                    } : function(t, n) {
                        return t + n
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? n.map(t, e) : t)
                }
            };
            var e = function() {
                function t(t, n, e) {
                    return (t << 10) + (n << 5) + e
                }

                function e(t) {
                    var n = [],
                        e = !1;

                    function r() {
                        n.sort(t);
                        e = !0
                    }
                    return {
                        push: function(t) {
                            n.push(t);
                            e = !1
                        },
                        peek: function(t) {
                            e || r();
                            void 0 === t && (t = n.length - 1);
                            return n[t]
                        },
                        pop: function() {
                            e || r();
                            return n.pop()
                        },
                        size: function() {
                            return n.length
                        },
                        map: function(t) {
                            return n.map(t)
                        },
                        debug: function() {
                            e || r();
                            return n
                        }
                    }
                }

                function r(t, n, e, r, o, i, u) {
                    var c = this;
                    c.r1 = t;
                    c.r2 = n;
                    c.g1 = e;
                    c.g2 = r;
                    c.b1 = o;
                    c.b2 = i;
                    c.histo = u
                }
                r.prototype = {
                    volume: function(t) {
                        var n = this;
                        n._volume && !t || (n._volume = (n.r2 - n.r1 + 1) * (n.g2 - n.g1 + 1) * (n.b2 - n.b1 + 1));
                        return n._volume
                    },
                    count: function(n) {
                        var e = this,
                            r = e.histo;
                        if (!e._count_set || n) {
                            var o, i, u, c = 0;
                            for (o = e.r1; o <= e.r2; o++)
                                for (i = e.g1; i <= e.g2; i++)
                                    for (u = e.b1; u <= e.b2; u++) c += r[t(o, i, u)] || 0;
                            e._count = c;
                            e._count_set = !0
                        }
                        return e._count
                    },
                    copy: function() {
                        var t = this;
                        return new r(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
                    },
                    avg: function(n) {
                        var e = this,
                            r = e.histo;
                        if (!e._avg || n) {
                            var o, i, u, c, a = 0,
                                l = 0,
                                s = 0,
                                f = 0;
                            for (i = e.r1; i <= e.r2; i++)
                                for (u = e.g1; u <= e.g2; u++)
                                    for (c = e.b1; c <= e.b2; c++) {
                                        a += o = r[t(i, u, c)] || 0;
                                        l += o * (i + .5) * 8;
                                        s += o * (u + .5) * 8;
                                        f += o * (c + .5) * 8
                                    }
                            e._avg = a ? [~~(l / a), ~~(s / a), ~~(f / a)] : [~~(8 * (e.r1 + e.r2 + 1) / 2), ~~(8 * (e.g1 + e.g2 + 1) / 2), ~~(8 * (e.b1 + e.b2 + 1) / 2)]
                        }
                        return e._avg
                    },
                    contains: function(t) {
                        var n = this,
                            e = t[0] >> 3;
                        gval = t[1] >> 3;
                        bval = t[2] >> 3;
                        return e >= n.r1 && e <= n.r2 && gval >= n.g1 && gval <= n.g2 && bval >= n.b1 && bval <= n.b2
                    }
                };

                function o() {
                    this.vboxes = new e((function(t, e) {
                        return n.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    }))
                }
                o.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(t) {
                            return t.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var n = this.vboxes, e = 0; e < n.size(); e++)
                            if (n.peek(e).vbox.contains(t)) return n.peek(e).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var n, e, r, o = this.vboxes, i = 0; i < o.size(); i++)
                            if ((e = Math.sqrt(Math.pow(t[0] - o.peek(i).color[0], 2) + Math.pow(t[1] - o.peek(i).color[1], 2) + Math.pow(t[2] - o.peek(i).color[2], 2))) < n || void 0 === n) {
                                n = e;
                                r = o.peek(i).color
                            } return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort((function(t, e) {
                            return n.naturalOrder(n.sum(t.color), n.sum(e.color))
                        }));
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var r = t.length - 1,
                            o = t[r].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[r].color = [255, 255, 255])
                    }
                };

                function i(e, r) {
                    if (r.count()) {
                        var o = r.r2 - r.r1 + 1,
                            i = r.g2 - r.g1 + 1,
                            u = r.b2 - r.b1 + 1,
                            c = n.max([o, i, u]);
                        if (1 == r.count()) return [r.copy()];
                        var a, l, s, f, p = 0,
                            d = [],
                            h = [];
                        if (c == o)
                            for (a = r.r1; a <= r.r2; a++) {
                                f = 0;
                                for (l = r.g1; l <= r.g2; l++)
                                    for (s = r.b1; s <= r.b2; s++) f += e[t(a, l, s)] || 0;
                                p += f;
                                d[a] = p
                            } else if (c == i)
                                for (a = r.g1; a <= r.g2; a++) {
                                    f = 0;
                                    for (l = r.r1; l <= r.r2; l++)
                                        for (s = r.b1; s <= r.b2; s++) f += e[t(l, a, s)] || 0;
                                    p += f;
                                    d[a] = p
                                } else
                                    for (a = r.b1; a <= r.b2; a++) {
                                        f = 0;
                                        for (l = r.r1; l <= r.r2; l++)
                                            for (s = r.g1; s <= r.g2; s++) f += e[t(l, s, a)] || 0;
                                        p += f;
                                        d[a] = p
                                    }
                        d.forEach((function(t, n) {
                            h[n] = p - t
                        }));
                        return _(c == o ? "r" : c == i ? "g" : "b")
                    }

                    function _(t) {
                        var n, e, o, i, u, c = t + "1",
                            l = t + "2",
                            s = 0;
                        for (a = r[c]; a <= r[l]; a++)
                            if (d[a] > p / 2) {
                                o = r.copy();
                                i = r.copy();
                                u = (n = a - r[c]) <= (e = r[l] - a) ? Math.min(r[l] - 1, ~~(a + e / 2)) : Math.max(r[c], ~~(a - 1 - n / 2));
                                for (; !d[u];) u++;
                                s = h[u];
                                for (; !s && d[u - 1];) s = h[--u];
                                o[l] = u;
                                i[c] = o[l] + 1;
                                return [o, i]
                            }
                    }
                }
                return {
                    quantize: function(u, c) {
                        if (!u.length || c < 2 || c > 256) return !1;
                        var a = function(n) {
                            var e, r, o, i, u = new Array(32768);
                            n.forEach((function(n) {
                                r = n[0] >> 3;
                                o = n[1] >> 3;
                                i = n[2] >> 3;
                                e = t(r, o, i);
                                u[e] = (u[e] || 0) + 1
                            }));
                            return u
                        }(u);
                        a.forEach((function() {
                            0
                        }));
                        var l = function(t, n) {
                                var e, o, i, u = 1e6,
                                    c = 0,
                                    a = 1e6,
                                    l = 0,
                                    s = 1e6,
                                    f = 0;
                                t.forEach((function(t) {
                                    e = t[0] >> 3;
                                    o = t[1] >> 3;
                                    i = t[2] >> 3;
                                    e < u ? u = e : e > c && (c = e);
                                    o < a ? a = o : o > l && (l = o);
                                    i < s ? s = i : i > f && (f = i)
                                }));
                                return new r(u, c, a, l, s, f, n)
                            }(u, a),
                            s = new e((function(t, e) {
                                return n.naturalOrder(t.count(), e.count())
                            }));
                        s.push(l);

                        function f(t, n) {
                            for (var e, r = 1, o = 0; o < 1e3;)
                                if ((e = t.pop()).count()) {
                                    var u = i(a, e),
                                        c = u[0],
                                        l = u[1];
                                    if (!c) return;
                                    t.push(c);
                                    if (l) {
                                        t.push(l);
                                        r++
                                    }
                                    if (r >= n) return;
                                    if (o++ > 1e3) return
                                } else {
                                    t.push(e);
                                    o++
                                }
                        }
                        f(s, .75 * c);
                        for (var p = new e((function(t, e) {
                                return n.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            })); s.size();) p.push(s.pop());
                        f(p, c - p.size());
                        for (var d = new o; p.size();) d.push(p.pop());
                        return d
                    }
                }
            }();
            t.exports = e.quantize
        },
        735885: (t, n, e) => {
            "use strict";
            e.d(n, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
            });
            var r = e(744564);

            function o(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function i() {
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
        396179: (t, n, e) => {
            "use strict";
            e.d(n, {
                Z: () => b
            });
            var r = e(281110),
                o = e(630631),
                i = e(744564),
                u = e(735885),
                c = e(2590);

            function a(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function l(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        a(t, n, e[n])
                    }))
                }
                return t
            }

            function s() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.Z.dispatch(l({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: t,
                    subsection: n
                }, e));
                (0, u.jN)(c.S9g.USER_SETTINGS)
            }
            var f = e(223219),
                p = e(652591),
                d = e(775173),
                h = e(488110),
                _ = e(239620),
                O = e(473708);

            function v(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function y(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        v(t, n, e[n])
                    }))
                }
                return t
            }

            function E(t, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }));
                return t
            }
            const b = {
                open: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    s(t, n, e)
                },
                init: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        e = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(y({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: t,
                        subsection: n
                    }, e))
                },
                close: function() {
                    var t = f.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != t && t()
                },
                setSection: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(y({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: t,
                        subsection: n
                    }, e))
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
                saveAccountChanges: function(t, n) {
                    var e = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var u = t.username,
                        a = t.email,
                        l = t.emailToken,
                        s = t.password,
                        f = t.avatar,
                        v = t.newPassword,
                        b = t.discriminator,
                        S = n.close;
                    return (0, h.Z)((function(t) {
                        var n = E(y({
                                username: u,
                                email: a,
                                email_token: l,
                                password: s,
                                avatar: f,
                                new_password: v
                            }, t), {
                                discriminator: null != b && "" !== b ? b : void 0
                            }),
                            e = o.Z.get(c.JkL),
                            i = (0, _.xJ)();
                        if (null != i && null != e) {
                            n.push_provider = i;
                            n.push_token = e
                        }
                        var p = o.Z.get(c.scU);
                        if (null != _.mv && null != p) {
                            n.push_voip_provider = _.mv;
                            n.push_voip_token = p
                        }
                        return r.ZP.patch({
                            url: c.ANM.ME,
                            oldFormErrors: !0,
                            body: n
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: O.Z.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        var n = t.body,
                            r = n.token;
                        p.default.track(c.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, d.xR)(n.avatar)
                        });
                        delete n.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: n.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: n
                        });
                        null != v && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: n,
                            newPassword: v
                        });
                        null != s && null != v && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: n.id
                        });
                        S ? e.close() : e.submitComplete();
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
        959898: (t, n, e) => {
            "use strict";
            e.d(n, {
                i: () => l
            });
            var r = e(785893),
                o = (e(667294), e(795308)),
                i = e(633878);

            function u(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function c(t, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }));
                return t
            }

            function a(t, n) {
                if (null == t) return {};
                var e, r, o = function(t, n) {
                    if (null == t) return {};
                    var e, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        e = i[r];
                        n.indexOf(e) >= 0 || (o[e] = t[e])
                    }
                    return o
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        e = i[r];
                        n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e])
                    }
                }
                return o
            }
            var l = function(t) {
                var n = t.width,
                    e = void 0 === n ? 24 : n,
                    l = t.height,
                    s = void 0 === l ? 24 : l,
                    f = t.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = t.colorClass,
                    h = void 0 === d ? "" : d,
                    _ = a(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(e);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))));
                        r.forEach((function(n) {
                            u(t, n, e[n])
                        }))
                    }
                    return t
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M15.293 15.293a1 1 0 0 1 1.414 0L19 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414L20.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414L19 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Zm3.353-.89-.525-.524a3 3 0 1 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .707l-.525.526c-.46.46-.74 1.032-.838 1.628-.042.25-.231.464-.485.478-.184.01-.37.015-.556.015H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.985 2.985 0 0 0-1.628.838l-.525.525a.5.5 0 0 1-.708 0Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        614948: (t, n, e) => {
            "use strict";
            e.d(n, {
                Ux: () => y,
                gS: () => E,
                ww: () => b
            });
            var r = e(667294),
                o = e(318715),
                i = e(396179),
                u = e(19585),
                c = e(482139),
                a = e(664625),
                l = e(21372),
                s = e(567403),
                f = e(682776),
                p = e(464187),
                d = e(36058),
                h = e(2590),
                _ = e(589677),
                O = e(131559),
                v = e(473708);

            function y(t) {
                return (0, o.ZP)([a.default, l.ZP], (function() {
                    if (null == t) return !1;
                    var n = a.default.getId();
                    return (0, d.EY)(l.ZP.getMember(t, n))
                }), [t])
            }

            function E(t) {
                return (0, o.cj)([a.default, l.ZP, p.Z, s.Z], (function() {
                    var n = {
                            nick: void 0,
                            bio: void 0
                        },
                        e = p.Z.getGuildId(),
                        r = null != t ? t : e,
                        o = s.Z.getGuild(r);
                    if (null == o || null == r) return n;
                    var i = a.default.getId(),
                        u = l.ZP.getMember(r, i),
                        c = (0, d.Ow)(null == u ? void 0 : u.flags);
                    if (0 === c.size) return n;
                    if (c.has(_.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                        if (null == t) {
                            var f;
                            n.nick = [v.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (f = o.name) && void 0 !== f ? f : ""
                            })]
                        } else n.nick = [v.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
                    c.has(_.q.AUTOMOD_QUARANTINED_BIO) && (n.bio = [v.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]);
                    return n
                }), [t])
            }

            function b(t) {
                var n = t.guildId,
                    e = t.scrollPosition,
                    a = t.analyticsLocation,
                    l = t.analyticsLocations,
                    p = t.openWithoutBackstack,
                    d = (0, u.Z)().analyticsLocations,
                    _ = (0, o.ZP)([s.Z], (function() {
                        return s.Z.getGuild(n)
                    }), [n]),
                    v = (0, o.ZP)([f.Z], (function() {
                        return null != _ && f.Z.can(h.Plq.CHANGE_NICKNAME, _)
                    }), [_]);
                return [r.useCallback((function() {
                    if (null != _) {
                        var t = h.oAB.PROFILE_CUSTOMIZATION,
                            n = O.NB.GUILD;
                        v ? (0, c.Fq)(_, null != l ? l : d) : n = O.NB.USER_PROFILE;
                        i.Z.open(t, n, {
                            scrollPosition: e,
                            analyticsLocation: a,
                            analyticsLocations: l,
                            openWithoutBackstack: p
                        })
                    }
                }), [v, e, a, l, p, _, d]), v]
            }
        },
        813659: (t, n, e) => {
            "use strict";
            e.r(n);
            e.d(n, {
                default: () => w
            });
            var r = e(785893),
                o = e(667294),
                i = e(318715),
                u = e(304548),
                c = e(153686),
                a = e(19585),
                l = e(664625),
                s = e(21372),
                f = e(567403),
                p = e(124251),
                d = e(914563),
                h = e(652591),
                _ = e(36058),
                O = e(614948),
                v = e(292327),
                y = e(2590),
                E = e(589677),
                b = e(473708),
                S = e(747475),
                I = e.n(S);

            function g(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
                return r
            }

            function T(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (e = e.call(t); !(u = (r = e.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (t) {
                            c = !0;
                            o = t
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return g(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return g(t, n)
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(t) {
                var n, e = t.onClose,
                    S = t.transitionState,
                    g = t.guildId,
                    w = (0, i.ZP)([l.default], (function() {
                        return l.default.getId()
                    })),
                    m = (0, i.ZP)([s.ZP], (function() {
                        return s.ZP.getMember(g, w)
                    }), [g, w]),
                    N = (0, i.ZP)([f.Z], (function() {
                        return f.Z.getGuild(g)
                    }), [g]),
                    D = null !== (n = null == N ? void 0 : N.name) && void 0 !== n ? n : "",
                    P = (0, _.no)(m),
                    A = (0, a.Z)(c.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT).analyticsLocations,
                    L = T((0,
                        O.ww)({
                        guildId: g,
                        analyticsLocations: A,
                        openWithoutBackstack: !0
                    }), 2),
                    U = L[0],
                    M = L[1],
                    R = P.has(E.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? b.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : b.Z.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                M || (R = b.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                var j = M ? b.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : b.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                o.useEffect((function() {
                    h.default.track(y.rMx.OPEN_MODAL, {
                        type: v.dc,
                        guild_id: g,
                        other_user_id: w
                    })
                }), []);
                o.useEffect((function() {
                    null != N || e()
                }), [N, e]);
                return null == N ? null : (0, r.jsxs)(u.ModalRoot, {
                    transitionState: S,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsx)(u.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: I().headerContainer,
                            children: [(0, r.jsxs)("div", {
                                className: I().guildIconContainer,
                                children: [(0, r.jsx)(p.Z, {
                                    guild: N,
                                    size: p.Z.Sizes.LARGER
                                }), (0, r.jsx)("div", {
                                    className: I().statusContainer,
                                    children: (0, r.jsx)(d.Z, {
                                        className: I().statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, r.jsx)(u.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: b.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: D
                                })
                            })]
                        })
                    }), (0, r.jsx)(u.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: I().descriptionContainer,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: R
                            })
                        })
                    }), (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            onClick: function() {
                                U();
                                e()
                            },
                            color: u.Button.Colors.BRAND_NEW,
                            look: u.Button.Looks.FILLED,
                            children: j
                        }), (0, r.jsx)(u.Button, {
                            onClick: e,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            children: b.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        482139: (t, n, e) => {
            "use strict";
            e.d(n, {
                iq: () => s,
                HP: () => p,
                Fq: () => d,
                jR: () => h,
                It: () => _,
                I5: () => O,
                g_: () => v,
                Cf: () => y,
                ID: () => E,
                sr: () => b,
                z5: () => S,
                IO: () => I,
                pG: () => g,
                W3: () => T,
                b9: () => w,
                _V: () => m
            });
            var r = e(281110),
                o = e(744564),
                i = e(735885),
                u = e(2590);

            function c(t, n, e, r, o, i, u) {
                try {
                    var c = t[i](u),
                        a = c.value
                } catch (t) {
                    e(t);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function a(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(n, e);

                        function u(t) {
                            c(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            c(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var l = function(t, n) {
                var e, r, o, i, u = {
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
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                i = n.call(t, u)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                e = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function s(t, n) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = a((function(t, n) {
                    var e, i, c, a, s, f;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                e = n.nick, i = n.avatar;
                                if (null == t) throw new Error("Need guildId");
                                o.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                                });
                                c = {
                                    nick: e,
                                    avatar: i
                                };
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: u.ANM.SET_GUILD_MEMBER(t),
                                    body: c,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                a = l.sent();
                                o.Z.dispatch({
                                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                                });
                                o.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildMember: a.body,
                                    guildId: t
                                });
                                return [2, a];
                            case 3:
                                s = l.sent();
                                if (null != (null == (f = s.body) ? void 0 : f.username)) {
                                    f.nick = f.username;
                                    delete f.username
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

            function p(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function d(t, n) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: n
                })
            }

            function h() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                });
                (0, i.xf)()
            }

            function _() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function O(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function v(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function y(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function E(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function b(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function S(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function I() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function g() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function w() {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m(t) {
                o.Z.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        239620: (t, n, e) => {
            "use strict";
            e.d(n, {
                mv: () => i,
                xJ: () => u
            });
            var r, o = e(120415),
                i = null;

            function u() {
                return (0, o.Dt)(), null
            }! function(t) {
                t.REMINDER = "reminder";
                t.TOP_MESSAGE_PUSH = "top_messages_push";
                t.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        223219: (t, n, e) => {
            "use strict";
            e.d(n, {
                Z: () => G
            });
            var r = e(496486),
                o = e.n(r),
                i = e(202351),
                u = e(744564),
                c = e(473903),
                a = e(2590);

            function l(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function f(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function d(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        f(t, n, e[n])
                    }))
                }
                return t
            }

            function h(t, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function _(t, n) {
                _ = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return _(t, n)
            }
            var O = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t) {
                var n = function() {
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
                    var e, r = p(t);
                    if (n) {
                        var o = p(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return h(this, e)
                }
            }
            var y = a.QZA.CLOSED,
                E = null,
                b = null,
                S = {},
                I = {},
                g = {},
                T = null,
                w = null,
                m = !1,
                N = !1,
                D = null,
                P = null,
                A = null,
                L = [],
                U = null,
                M = null;

            function R(t) {
                var n, e, r, o, i, u, l = c.default.getCurrentUser();
                if (null == l) return j();
                b = null !== (n = t.section) && void 0 !== n ? n : b;
                U = null !== (e = t.section) && void 0 !== e ? e : b;
                null != t.subsection && null != b && (S[b] = t.subsection);
                null != t.scrollPosition && null != b && (I[b] = t.scrollPosition);
                N = !!t.openWithoutBackstack;
                y = a.QZA.OPEN;
                g = {};
                T = f({}, a.oAB.ACCOUNT, {
                    userId: l.id,
                    username: l.username,
                    discriminator: l.discriminator,
                    email: l.email,
                    avatar: l.avatar,
                    password: "",
                    newPassword: null,
                    claimed: l.isClaimed()
                });
                w = d({}, T);
                P = null !== (r = t.onClose) && void 0 !== r ? r : null;
                A = null !== (o = t.analyticsLocation) && void 0 !== o ? o : null;
                L = null !== (i = t.analyticsLocations) && void 0 !== i ? i : [];
                M = null !== (u = t.impressionSource) && void 0 !== u ? u : null
            }

            function j() {
                y = a.QZA.CLOSED;
                m = !1;
                T = null;
                U = null;
                w = null;
                E = null;
                b = null;
                S = {};
                I = {};
                P = null;
                A = null;
                L = [];
                M = null
            }

            function C() {
                y = a.QZA.OPEN;
                g = {}
            }
            var Z = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && _(t, n)
                }(e, t);
                var n = v(e);

                function e() {
                    l(this, e);
                    return n.apply(this, arguments)
                }
                var r = e.prototype;
                r.initialize = function() {
                    this.waitFor(c.default)
                };
                r.hasChanges = function() {
                    return null != w && null != T && (!(!this.isOpen() && D !== a.cII.USER_SETTINGS) && !o().isEqual(w, T))
                };
                r.isOpen = function() {
                    return m
                };
                r.getPreviousSection = function() {
                    return E
                };
                r.getSection = function() {
                    return b
                };
                r.getSubsection = function() {
                    return null != b ? S[b] : null
                };
                r.getScrollPosition = function() {
                    return null != b ? I[b] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return N
                };
                r.getProps = function() {
                    return {
                        submitting: y === a.QZA.SUBMITTING,
                        section: b,
                        subsection: null != b ? S[b] : null,
                        scrollPosition: null != b ? I[b] : null,
                        settings: w,
                        errors: g,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: A,
                        analyticsLocations: L,
                        initialSection: U,
                        impressionSource: M
                    }
                };
                ! function(t, n, e) {
                    n && s(t.prototype, n);
                    e && s(t, e)
                }(e, [{
                    key: "onClose",
                    get: function() {
                        return P
                    }
                }]);
                return e
            }(i.ZP.Store);
            Z.displayName = "UserSettingsModalStore";
            const G = new Z(u.Z, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    m = !0;
                    R(t)
                },
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_MODAL_CLOSE: j,
                LOGOUT: j,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    y = a.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    if (y !== a.QZA.SUBMITTING) return !1;
                    y = a.QZA.OPEN;
                    b = a.oAB.ACCOUNT;
                    var n;
                    g = null !== (n = t.errors) && void 0 !== n ? n : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    E = b;
                    b = t.section;
                    A = null;
                    var n;
                    L = null !== (n = t.analyticsLocations) && void 0 !== n ? n : [];
                    null != t.subsection && (S[b] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    var n = t.forSection;
                    null != n ? delete S[n] : null != b && delete S[b]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    var n = t.forSection;
                    null != n ? delete I[n] : null != b && delete I[b]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    var n = t.settings;
                    null == w && (w = {});
                    var e = w[a.oAB.ACCOUNT];
                    w[a.oAB.ACCOUNT] = d({}, e, n)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: C,
                USER_SETTINGS_MODAL_RESET: function() {
                    var t = c.default.getCurrentUser();
                    C();
                    if (null != t) {
                        T = f({}, a.oAB.ACCOUNT, {
                            userId: t.id,
                            username: t.username,
                            discriminator: t.discriminator,
                            email: t.email,
                            avatar: t.avatar,
                            password: "",
                            newPassword: null,
                            claimed: t.isClaimed()
                        });
                        w = d({}, T)
                    }
                },
                DRAWER_SELECT_TAB: function(t) {
                    D = t.tab;
                    return null == b && D === a.cII.USER_SETTINGS && R({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        901654: (t, n, e) => {
            "use strict";
            e.d(n, {
                Z: () => b
            });
            var r = e(441143),
                o = e.n(r),
                i = e(202351),
                u = e(744564),
                c = e(575978);

            function a(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function s(t) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return s(t)
            }

            function f(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        l(t, n, e[n])
                    }))
                }
                return t
            }

            function p(t, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }));
                return t
            }

            function d(t, n) {
                return !n || "object" !== _(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function h(t, n) {
                h = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return h(t, n)
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
                var n = function() {
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
                    var e, r = s(t);
                    if (n) {
                        var o = s(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return d(this, e)
                }
            }
            var v = new Map;

            function y(t) {
                var n = v.get(t);
                if (null == n) {
                    console.warn("Window state not initialized", t);
                    return {
                        isElementFullscreen: !1,
                        focused: !1,
                        windowSize: {
                            width: 0,
                            height: 0
                        }
                    }
                }
                return n
            }
            var E = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && h(t, n)
                }(e, t);
                var n = O(e);

                function e() {
                    a(this, e);
                    return n.apply(this, arguments)
                }
                var r = e.prototype;
                r.isFocused = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
                    return y(t).focused
                };
                r.getFocusedWindowId = function() {
                    var t = null;
                    v.forEach((function(n, e) {
                        n.focused && (t = e)
                    }));
                    return t
                };
                r.isElementFullScreen = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
                    return y(t).isElementFullscreen
                };
                r.windowSize = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
                    return y(t).windowSize
                };
                return e
            }(i.ZP.Store);
            E.displayName = "WindowStore";
            const b = new E(u.Z, {
                WINDOW_INIT: function(t) {
                    o()(!v.has(t.windowId), "Window initialized multiple times");
                    var n = t.width,
                        e = t.height,
                        r = t.isElementFullscreen,
                        i = t.focused;
                    v.set(t.windowId, {
                        windowSize: {
                            width: n,
                            height: e
                        },
                        isElementFullscreen: r,
                        focused: i
                    });
                    return !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    var n = y(t.windowId);
                    if (n.isElementFullscreen === t.isElementFullscreen) return !1;
                    v.set(t.windowId, p(f({}, n), {
                        isElementFullscreen: t.isElementFullscreen
                    }));
                    return !0
                },
                WINDOW_FOCUS: function(t) {
                    var n = y(t.windowId);
                    if (n.focused === t.focused) return !1;
                    v.set(t.windowId, p(f({}, n), {
                        focused: t.focused
                    }));
                    return !0
                },
                WINDOW_RESIZED: function(t) {
                    var n = y(t.windowId);
                    if (n.windowSize.width === t.width && n.windowSize.height === t.height) return !1;
                    v.set(t.windowId, p(f({}, n), {
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }));
                    return !0
                },
                WINDOW_UNLOAD: function(t) {
                    v.delete(t.windowId);
                    return !0
                }
            })
        },
        914563: (t, n, e) => {
            "use strict";
            e.d(n, {
                Z: () => s
            });
            var r = e(785893),
                o = (e(667294), e(168075)),
                i = e(959898),
                u = e(633878);

            function c(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function a(t, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }));
                return t
            }

            function l(t, n) {
                if (null == t) return {};
                var e, r, o = function(t, n) {
                    if (null == t) return {};
                    var e, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        e = i[r];
                        n.indexOf(e) >= 0 || (o[e] = t[e])
                    }
                    return o
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        e = i[r];
                        n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(t) {
                var n = t.color,
                    e = void 0 === n ? "currentColor" : n,
                    o = t.height,
                    i = void 0 === o ? 24 : o,
                    s = t.width,
                    f = void 0 === s ? 24 : s,
                    p = l(t, ["color", "height", "width"]);
                return (0, r.jsxs)("svg", a(function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(e);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))));
                        r.forEach((function(n) {
                            c(t, n, e[n])
                        }))
                    }
                    return t
                }({}, (0, u.Z)(p)), {
                    width: f,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                        stroke: e,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                        fill: e
                    })]
                }))
            }), i.i)
        },
        347117: (t, n, e) => {
            "use strict";
            e.d(n, {
                Tj: () => p,
                zp: () => d,
                Dc: () => h,
                rn: () => _,
                rv: () => O,
                XN: () => y,
                OF: () => E,
                fD: () => S,
                QB: () => I,
                Bo: () => g,
                c0: () => m
            });
            var r = e(441143),
                o = e.n(r),
                i = e(496486),
                u = e.n(i),
                c = e(16243),
                a = e.n(c);

            function l(t, n, e, r, o, i, u) {
                try {
                    var c = t[i](u),
                        a = c.value
                } catch (t) {
                    e(t);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function s(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(n, e);

                        function u(t) {
                            l(i, r, o, u, c, "next", t)
                        }

                        function c(t) {
                            l(i, r, o, u, c, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var f = function(t, n) {
                var e, r, o, i, u = {
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
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                i = n.call(t, u)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                e = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };
            0;

            function p(t) {
                var n = t.width,
                    e = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight,
                    i = t.minWidth,
                    u = void 0 === i ? 0 : i,
                    c = t.minHeight,
                    a = void 0 === c ? 0 : c;
                if (n !== r || e !== o) {
                    var l = n > r ? r / n : 1;
                    n = Math.max(Math.round(n * l), u);
                    var s = (e = Math.max(Math.round(e * l), a)) > o ? o / e : 1;
                    n = Math.max(Math.round(n * s), u);
                    e = Math.max(Math.round(e * s), a)
                }
                return {
                    width: n,
                    height: e
                }
            }

            function d(t, n) {
                var e = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return p({
                    width: t,
                    height: n,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: e
                })
            }

            function h(t) {
                var n = t.width,
                    e = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight,
                    i = 1;
                n > r && (i = r / n);
                n = Math.round(n * i);
                var u = 1;
                (e = Math.round(e * i)) > o && (u = o / e);
                return Math.min(i * u, 1)
            }

            function _(t) {
                var n = t.width,
                    e = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight;
                if (n === e) return 1;
                var i = Math.max(r / n, o / e);
                return Math.min(i, 1)
            }

            function O(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            var v = [
                [0, 0, 0]
            ];

            function y(t, n, e) {
                var r = document.createElement("canvas"),
                    o = r.getContext("2d");
                if (null == o) return v;
                var i = r.width = 0 === t.width ? 128 : t.width,
                    u = r.height = 0 === t.height ? 128 : t.height;
                o.drawImage(t, 0, 0, i, u);
                var c = function(t, n, e) {
                        for (var r, o, i, u, c, a = [], l = 0; l < n; l += e) {
                            o = t[0 + (r = 4 * l)];
                            i = t[r + 1];
                            u = t[r + 2];
                            (void 0 === (c = t[r + 3]) || c >= 125) && (o > 250 && i > 250 && u > 250 || a.push([o, i, u]))
                        }
                        return a
                    }(o.getImageData(0, 0, i, u).data, i * u, e),
                    l = a()(c, n);
                return "boolean" == typeof l ? v : l.palette()
            }
            var E = function(t) {
                    return b(t)
                },
                b = u().memoize((function(t) {
                    return new Promise((function(n, e) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(t) {
                            e(t);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            n(y(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = t
                    }))
                }));

            function S(t) {
                return new Promise((function(n, e) {
                    var r = new FileReader;
                    r.readAsDataURL(t);
                    r.onload = function() {
                        o()("string" == typeof r.result, "Result must be a string");
                        n(r.result)
                    };
                    r.onerror = function(t) {
                        return e(t)
                    }
                }))
            }

            function I(t) {
                var n = t.split(";base64,");
                o()(2 === n.length, "Input data is not a valid image.");
                return atob(n[1]).length
            }

            function g(t, n, e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = s((function(t, n, e) {
                    var r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, w(t).arrayBuffer()];
                            case 1:
                                r = o.sent();
                                return [2, new File([r], n, {
                                    type: e
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(t) {
                var n;
                n = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                for (var e = t.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(n.length), o = 0; o < n.length; o++) r[o] = n.charCodeAt(o);
                return new Blob([r], {
                    type: e
                })
            }

            function m(t) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = s((function(t) {
                    var n, e, r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if ("image/png" !== (null === (n = t.type) || void 0 === n ? void 0 : n.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, t.text()];
                            case 1:
                                e = o.sent();
                                return (r = e.indexOf("IDAT")) > 0 && -1 !== e.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        990554: (t, n, e) => {
            "use strict";
            e.d(n, {
                l: () => o
            });
            var r = e(421281);

            function o(t, n) {
                for (var e = arguments.length, o = new Array(e > 2 ? e - 2 : 0), i = 2; i < e; i++) o[i - 2] = arguments[i];
                var u = o.reduce((function(t, n) {
                        return t + (0, r.De)(n)
                    }), ""),
                    c = "".concat(n).concat(u),
                    a = t[c];
                if (null != a) return a;
                0
            }
        }
    }
]);