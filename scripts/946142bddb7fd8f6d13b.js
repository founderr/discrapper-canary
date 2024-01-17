(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31101"], {
        48648: function(t, e, n) {
            if (n("808653"), n("424973"), !r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, u) {
                        return n.index = u, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var u = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function u(t, e, n, r, u, i, o) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = u, this.b2 = i, this.histo = o
                }

                function i() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return u.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, u, i, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (i = this.b1; i <= this.b2; i++) o += n[e(r, u, i)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new u(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, u, i, o, a = 0,
                                s = 8,
                                l = 0,
                                c = 0,
                                f = 0;
                            for (u = this.r1; u <= this.r2; u++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) a += r = n[e(u, i, o)] || 0, l += r * (u + .5) * s, c += r * (i + .5) * s, f += r * (o + .5) * s;
                            a ? this._avg = [~~(l / a), ~~(c / a), ~~(f / a)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, i.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, u = this.vboxes, i = 0; i < u.size(); i++)((n = Math.sqrt(Math.pow(t[0] - u.peek(i).color[0], 2) + Math.pow(t[1] - u.peek(i).color[1], 2) + Math.pow(t[2] - u.peek(i).color[2], 2))) < e || void 0 === e) && (e = n, r = u.peek(i).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            u = t[n].color;
                        u[0] > 251 && u[1] > 251 && u[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, a) {
                        if (!o.length || a < 2 || a > 256) return !1;
                        var s, l, c, f, d, h, _, E, p, g, v, m, M, A, S, I, b = (s = o, d = Array(32768), s.forEach(function(n) {
                                c = n[0] >> t, f = n[1] >> t, d[l = e(c, f, n[2] >> t)] = (d[l] || 0) + 1
                            }), d),
                            O = 0;
                        b.forEach(function() {
                            O++
                        });
                        var w = (h = o, _ = b, v = 1e6, m = 0, M = 1e6, A = 0, S = 1e6, I = 0, h.forEach(function(e) {
                                E = e[0] >> t, p = e[1] >> t, g = e[2] >> t, E < v ? v = E : E > m && (m = E), p < M ? M = p : p > A && (A = p), g < S ? S = g : g > I && (I = g)
                            }), new u(v, m, M, A, S, I, _)),
                            N = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function R(t, n) {
                            for (var u, i = 1, o = 0; o < 1e3;) {
                                if (!(u = t.pop()).count()) {
                                    t.push(u), o++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var u = n.r2 - n.r1 + 1,
                                                i = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                a = r.max([u, i, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, l, c, f, d, h = 0,
                                                _ = [],
                                                E = [];
                                            if (a == u)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (f = 0, l = n.g1; l <= n.g2; l++)
                                                        for (c = n.b1; c <= n.b2; c++) f += t[d = e(s, l, c)] || 0;
                                                    h += f, _[s] = h
                                                } else if (a == i)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (f = 0, l = n.r1; l <= n.r2; l++)
                                                            for (c = n.b1; c <= n.b2; c++) f += t[d = e(l, s, c)] || 0;
                                                        h += f, _[s] = h
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (f = 0, l = n.r1; l <= n.r2; l++)
                                                                for (c = n.g1; c <= n.g2; c++) f += t[d = e(l, c, s)] || 0;
                                                            h += f, _[s] = h
                                                        }
                                            return _.forEach(function(t, e) {
                                                E[e] = h - t
                                            }), p(a == u ? "r" : a == i ? "g" : "b")
                                        }

                                        function p(t) {
                                            var e, r, u, i, o, a = t + "1",
                                                l = t + "2",
                                                c = 0;
                                            for (s = n[a]; s <= n[l]; s++)
                                                if (_[s] > h / 2) {
                                                    for (u = n.copy(), i = n.copy(), e = s - n[a], o = e <= (r = n[l] - s) ? Math.min(n[l] - 1, ~~(s + r / 2)) : Math.max(n[a], ~~(s - 1 - e / 2)); !_[o];) o++;
                                                    for (c = E[o]; !c && _[o - 1];) c = E[--o];
                                                    return u[l] = o, i[a] = u[l] + 1, [u, i]
                                                }
                                        }
                                    }(b, u),
                                    s = a[0],
                                    l = a[1];
                                if (!s) return;
                                if (t.push(s), l && (t.push(l), i++), i >= n || o++ > 1e3) return
                            }
                        }
                        N.push(w), R(N, .75 * a);
                        for (var T = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); N.size();) T.push(N.pop());
                        R(T, a - T.size());
                        for (var C = new i; T.size();) C.push(T.pop());
                        return C
                    }
                }
            }();
            t.exports = u.quantize
        },
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var r = n("14716"),
                u = n("745510"),
                i = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            }), n("222007");
            var r = n("884691");

            function u() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");
            let u = {};

            function i(t) {
                let e = (0, r.useRef)(u);
                return e.current === u && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                u = n("48174");
            let i = [];

            function o(t, e) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(i);
                return o.current === i ? (n.current = t(), o.current = e) : !(0, u.default)(e, o.current) && (n.current = t(), o.current = e), n.current
            }
        },
        689223: function(t, e, n) {
            "use strict";
            t.exports = n.p + "0678b217e47589207930.mp4"
        },
        429777: function(t, e, n) {
            "use strict";
            t.exports = n.p + "3d23b8d31086b7901261.png"
        },
        430857: function(t, e, n) {
            "use strict";
            t.exports = n.p + "d3456e390fa9fdbbc0c4.webm"
        },
        743506: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            }), n("222007");
            var r, u, i = n("37983"),
                o = n("884691"),
                a = n("77078"),
                s = n("851387"),
                l = n("130037"),
                c = n("772280"),
                f = n("58608"),
                d = n("718517"),
                h = n("387111"),
                _ = n("49111"),
                E = n("782340"),
                p = n("676702");
            (u = r || (r = {}))[u.INITIAL = 0] = "INITIAL", u[u.OTHER_REASON = 1] = "OTHER_REASON";

            function g() {
                return [{
                    value: 0,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * d.default.Seconds.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * d.default.Seconds.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * d.default.Seconds.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * d.default.Seconds.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * d.default.Seconds.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * d.default.Seconds.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            let v = g()[1].value;

            function m(t) {
                let {
                    guildId: e,
                    user: r,
                    location: u,
                    userIds: d,
                    onBanMultiple: m,
                    transitionState: M,
                    onClose: A,
                    canBulkBan: S = !1
                } = t, [I, b] = o.useState(v), [O, w] = o.useState(""), [N, R] = o.useState(0), [T, C] = o.useState(!1), x = (0, l.useTrackModerationAction)(e, {
                    location: u,
                    targetUserId: null == r ? void 0 : r.id,
                    targets: d
                }), y = o.useCallback(() => {
                    if (null != m) {
                        let t = null != d && (null == d ? void 0 : d.size) > 0 && S;
                        if (!t || T) return;
                        if ("" === O.trim() && !T) {
                            C(!0);
                            return
                        }
                        m(e, [...d], I, O)
                    } else {
                        if (null == r) return;
                        s.default.banUser(e, null == r ? void 0 : r.id, I, O)
                    }
                    x(l.ModerationActionType.BAN), A()
                }, [m, x, A, d, S, T, O, e, I, r]), L = o.useCallback(t => {
                    b(t)
                }, []), k = o.useCallback(t => {
                    let {
                        value: e
                    } = t;
                    w(e), C(!1)
                }, []), D = o.useCallback(t => {
                    w(t), T && C(!1)
                }, [T]), F = o.useCallback(() => {
                    w(""), R(1)
                }, []), B = o.useCallback(() => {
                    R(0)
                }, []), U = [{
                    name: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                    value: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                }, {
                    name: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                    value: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                }, {
                    name: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                    value: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
                }], z = null != m && null != d ? E.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                    count: null == d ? void 0 : d.size
                }) : null == r ? "" : E.default.Messages.BAN_CONFIRM_TITLE.format({
                    username: "@".concat(h.default.getName(e, null, r))
                });
                return (0, i.jsxs)(a.ModalRoot, {
                    transitionState: M,
                    children: [(0, i.jsx)(a.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: z
                        })
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: p.modalContent,
                        children: [(0, i.jsxs)(f.default, {
                            autoPlay: !0,
                            loop: !0,
                            className: p.spacing,
                            width: 400,
                            children: [(0, i.jsx)("source", {
                                src: n("430857"),
                                type: "video/webm"
                            }), (0, i.jsx)("source", {
                                src: n("689223"),
                                type: "video/mp4"
                            }), (0, i.jsx)("img", {
                                alt: "",
                                src: n("429777")
                            })]
                        }), (0, i.jsxs)(a.FormItem, {
                            title: E.default.Messages.FORM_LABEL_REASON_BAN,
                            className: p.spacing,
                            children: [T && (0, i.jsx)(a.FormErrorBlock, {
                                className: p.error,
                                children: E.default.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, i.jsx)(a.Sequencer, {
                                steps: [0, 1],
                                step: N,
                                children: (t => {
                                    switch (N) {
                                        case 0:
                                            return (0, i.jsxs)(i.Fragment, {
                                                children: [(0, i.jsx)(a.RadioGroup, {
                                                    value: O,
                                                    options: t,
                                                    onChange: k,
                                                    radioItemClassName: p.radioItemStyles
                                                }), (0, i.jsxs)(a.Clickable, {
                                                    onClick: F,
                                                    className: p.banReasonOtherClickable,
                                                    children: [(0, i.jsx)(a.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: E.default.Messages.OTHER
                                                    }), (0, i.jsx)(c.default, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case 1:
                                            return (0, i.jsx)(a.TextArea, {
                                                maxLength: _.MAX_REASON_LENGTH,
                                                onChange: D,
                                                value: O,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                })(U)
                            })]
                        }), (0, i.jsx)(a.FormItem, {
                            title: E.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: p.spacing,
                            children: (0, i.jsx)(a.SingleSelect, {
                                options: g(),
                                value: I,
                                onChange: L
                            })
                        })]
                    }), (() => {
                        switch (N) {
                            case 0:
                                return (0, i.jsxs)(a.ModalFooter, {
                                    className: p.footer,
                                    children: [(0, i.jsx)(a.Button, {
                                        type: "button",
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        onClick: A,
                                        children: E.default.Messages.CANCEL
                                    }), (0, i.jsx)(a.Button, {
                                        type: "submit",
                                        color: a.Button.Colors.RED,
                                        size: a.Button.Sizes.SMALL,
                                        onClick: y,
                                        children: E.default.Messages.BAN
                                    })]
                                });
                            case 1:
                                return (0, i.jsxs)(a.ModalFooter, {
                                    className: p.footerStepped,
                                    children: [(0, i.jsx)(a.Button, {
                                        className: p.cancel,
                                        innerClassName: p.cancel,
                                        type: "button",
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        size: a.Button.Sizes.SMALL,
                                        onClick: B,
                                        children: E.default.Messages.BACK
                                    }), (0, i.jsx)(a.Button, {
                                        type: "submit",
                                        color: a.Button.Colors.RED,
                                        size: a.Button.Sizes.SMALL,
                                        onClick: y,
                                        children: E.default.Messages.BAN
                                    })]
                                })
                        }
                    })()]
                })
            }
        },
        276825: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("669491"),
                i = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        333805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, u = n("872717"),
                i = n("49111"),
                o = n("782340");
            r = class extends u.default.V6OrEarlierAPIError {
                constructor(t, e) {
                    super(t, e, null != e ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(e)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        689988: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("70102"), n("222007"), n("704744");
            var r, u = n("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        u.default.subscribe(e, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((t, e) => {
                        e.addChangeListener(t), t()
                    }))
                }
                terminate(t) {
                    !(this.initializedCount <= 0) && (t ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        u.default.unsubscribe(e, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("773336");
            async function u(t, e) {
                let {
                    default: u
                } = await n.el("572544").then(n.bind(n, "572544")), i = u(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != i) i(null);
                else if (r.isPlatformEmbedded) window.open(t);
                else {
                    let e = document.createElement("a");
                    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
                }
            }
        },
        616265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r = {
                openCreateGuildModal: t => {
                    n.el("297267").then(n.bind(n, "297267")).then(e => {
                        let {
                            openCreateGuildModal: n
                        } = e;
                        return n(t)
                    })
                },
                updateCreateGuildModal: t => {
                    n.el("297267").then(n.bind(n, "297267")).then(e => {
                        let {
                            updateCreateGuildModal: n
                        } = e;
                        return n(t)
                    })
                }
            }
        },
        130037: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useTrackMemberSearchUsed: function() {
                    return _
                },
                useTrackMemberFilterRolesUsed: function() {
                    return E
                },
                MemberSafetyFlagType: function() {
                    return i
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return p
                },
                ModerationActionType: function() {
                    return o
                },
                useTrackModerationAction: function() {
                    return g
                },
                trackMembersPageViewed: function() {
                    return v
                }
            });
            var r, u, i, o, a = n("884691"),
                s = n("812204"),
                l = n("716241"),
                c = n("271938"),
                f = n("599110"),
                d = n("49111");

            function h(t, e, n) {
                var r;
                let u = {
                    ...e,
                    ...(0, l.collectGuildAnalyticsMetadata)(null !== (r = e.guild_id) && void 0 !== r ? r : n)
                };
                f.default.track(t, u)
            }

            function _(t) {
                let e = a.useCallback(e => {
                    ! function(t) {
                        let e = {
                            guild_id: t,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        h(d.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, e)
                    }(t)
                }, [t]);
                return e
            }

            function E(t) {
                let e = a.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            selected_role_count: e.size,
                            guild_id: t,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        h(d.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(t, e)
                }, [t]);
                return e
            }(r = i || (i = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", r.COMMUNICATION_DISABLED = "communication_disabled", r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", r.USERNAME_QUARANTINED = "username_quarantined";

            function p(t) {
                let e = a.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            flag_type: e,
                            guild_id: t,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        h(d.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(t, e)
                }, [t]);
                return e
            }

            function g(t, e) {
                let {
                    location: n,
                    targetUserId: r,
                    targets: u,
                    locations: i
                } = e, o = a.useCallback(e => {
                    let o = {
                        action_type: e,
                        mod_user_id: c.default.getId(),
                        guild_id: t,
                        location: n,
                        locations: i,
                        target_user_id: null != r ? r : void 0,
                        targets: null != u ? u : void 0
                    };
                    h(d.AnalyticEvents.MODERATION_ACTION, o)
                }, [t, n, r, u, i]);
                return o
            }

            function v(t, e) {
                h(d.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: t,
                    location: e
                })
            }(u = o || (o = {})).BAN = "ban", u.KICK = "kick", u.MUTE = "mute", u.TIMEOUT = "timeout", u.ADD_ROLE = "add_role", u.REMOVE_ROLE = "remove_role", u.COPY_ID = "copy_id", u.CHANGE_NICKNAME = "change_nickname"
        },
        153498: function(t, e, n) {
            "use strict";

            function r(t) {
                let {} = t;
                return !1
            }

            function u(t, e) {
                return !1
            }

            function i(t) {
                return !1
            }

            function o() {
                return !1
            }

            function a() {
                return !1
            }

            function s(t) {
                let {} = t;
                return !1
            }

            function l(t, e) {
                return !1
            }

            function c() {
                return !1
            }

            function f(t) {}

            function d(t) {}

            function h(t) {}

            function _(t) {
                return !1
            }
            n.r(e), n.d(e, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return u
                },
                navigateToRootTab: function() {
                    return i
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return a
                },
                pushModal: function() {
                    return s
                },
                popModal: function() {
                    return l
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return f
                },
                coerceGuildsRoute: function() {
                    return d
                },
                coerceModalRoute: function() {
                    return h
                },
                useIsModalOpen: function() {
                    return _
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("627445"),
                u = n.n(r),
                i = n("446674"),
                o = n("913144"),
                a = n("816454");
            let s = new Map;

            function l(t) {
                let e = s.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class c extends i.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return l(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return s.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return l(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return l(t).windowSize
                }
            }
            c.displayName = "WindowStore";
            let f = new c(o.default, {
                WINDOW_INIT: function(t) {
                    u(!s.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: r,
                        focused: i
                    } = t;
                    return s.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: i
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = l(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (s.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = l(t.windowId);
                    return e.focused !== t.focused && (s.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = l(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (s.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return s.delete(t.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(t => {
                let {
                    addExtraAnalyticsDecorator: e
                } = t;
                e(t => {
                    t.client_app_state = f.isFocused() ? "focused" : "unfocused"
                })
            });
            var d = f
        },
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("469563"),
                i = n("276825"),
                o = n("75196"),
                a = (0, u.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: u = "currentColor",
                        ...i
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(i),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: u
                        })
                    })
                }, i.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        719347: function(t, e, n) {
            "use strict";
            var r, u;
            n.r(e), n.d(e, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return i
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return o
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return a
                },
                MediaLayoutType: function() {
                    return r
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return s
                }
            });
            let i = 550,
                o = 350,
                a = 40;
            (u = r || (r = {})).STATIC = "STATIC", u.RESPONSIVE = "RESPONSIVE", u.MOSAIC = "MOSAIC";
            let s = 20
        },
        58608: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                u = n("884691"),
                i = n("118810"),
                o = n("446674"),
                a = n("206230"),
                s = n("719347");
            let l = t => {
                let {
                    externalRef: e,
                    autoPlay: n,
                    playOnHover: l,
                    responsive: c,
                    mediaLayoutType: f,
                    ...d
                } = t, h = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion), _ = u.useRef(null);

                function E() {
                    var t;
                    l && (null == _ || null === (t = _.current) || void 0 === t || t.play())
                }

                function p() {
                    var t;
                    l && (null == _ || null === (t = _.current) || void 0 === t || t.pause())
                }
                return u.useLayoutEffect(() => () => {
                    let {
                        current: t
                    } = _;
                    null != t && function(t) {
                        t.removeAttribute("src"), Array.from(t.children).forEach(t => {
                            (0, i.isElement)(t, HTMLSourceElement) && (t.removeAttribute("src"), t.removeAttribute("type")), (0, i.isElement)(t, HTMLImageElement) && t.removeAttribute("src")
                        });
                        try {
                            t.load()
                        } catch (t) {}
                    }(t)
                }, []), u.useLayoutEffect(() => ("function" == typeof e ? (e(null), e(_.current)) : null != e && (e.current = _.current), () => {
                    "function" == typeof e ? e(null) : null != e && (e.current = null)
                }), [e, _]), (0, r.jsx)("video", {
                    ref: _,
                    autoPlay: !h && !l && n,
                    onMouseEnter: E,
                    onMouseLeave: p,
                    onFocus: E,
                    onBlur: p,
                    style: f === s.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : c ? function() {
                        return {
                            maxWidth: d.width,
                            maxHeight: d.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...d
                })
            };
            var c = u.forwardRef((t, e) => (0, r.jsx)(l, {
                ...t,
                externalRef: e
            }))
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return l
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return f
                },
                getCoverRatio: function() {
                    return d
                },
                makeCssUrlString: function() {
                    return h
                },
                getPalette: function() {
                    return E
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return v
                },
                dataUriFileSize: function() {
                    return m
                },
                dataUrlToFile: function() {
                    return M
                },
                isPNGAnimated: function() {
                    return A
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                u = n.n(r),
                i = n("917351"),
                o = n.n(i),
                a = n("48648"),
                s = n.n(a);

            function l(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: u,
                    minWidth: i = 0,
                    minHeight: o = 0
                } = t;
                if (e !== r || n !== u) {
                    let t = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * t), i), n = Math.max(Math.round(n * t), o);
                    let a = n > u ? u / n : 1;
                    e = Math.max(Math.round(e * a), i), n = Math.max(Math.round(n * a), o)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function c(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return l({
                    width: t,
                    height: e,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function f(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: u
                } = t, i = 1;
                e > r && (i = r / e), e = Math.round(e * i);
                let o = 1;
                return (n = Math.round(n * i)) > u && (o = u / n), Math.min(i * o, 1)
            }

            function d(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: u
                } = t;
                return e === n ? 1 : Math.min(Math.max(r / e, u / n), 1)
            }

            function h(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function E(t, e, n) {
                let r = document.createElement("canvas"),
                    u = r.getContext("2d");
                if (null == u) return _;
                let i = r.width = 0 === t.width ? 128 : t.width,
                    o = r.height = 0 === t.height ? 128 : t.height;
                u.drawImage(t, 0, 0, i, o);
                let a = u.getImageData(0, 0, i, o).data,
                    l = function(t, e, n) {
                        let r = [];
                        for (let u = 0, i, o, a, s, l; u < e; u += n) o = t[(i = 4 * u) + 0], a = t[i + 1], s = t[i + 2], (void 0 === (l = t[i + 3]) || l >= 125) && !(o > 250 && a > 250 && s > 250) && r.push([o, a, s]);
                        return r
                    }(a, i * o, n),
                    c = s(l, e);
                return "boolean" == typeof c ? _ : c.palette()
            }
            let p = t => "number" == typeof t ? null : g(t),
                g = o.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(E(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function v(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        u("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function m(t) {
                let e = t.split(";base64,");
                return u(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function M(t, e, n) {
                let r = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(e.length);
                        for (var u = 0; u < e.length; u++) r[u] = e.charCodeAt(u);
                        return new Blob([r], {
                            type: n
                        })
                    }(t),
                    u = await r.arrayBuffer();
                return new File([u], e, {
                    type: n
                })
            }
            async function A(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await t.text(),
                    u = r.indexOf("IDAT");
                return !!(u > 0) && -1 !== r.substring(0, u).indexOf("acTL") || !1
            }
        },
        655518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("872717"),
                u = n("599110");

            function i(t, e, n) {
                let {
                    trackedActionData: r,
                    ...i
                } = e, o = {
                    url: i.url,
                    request_method: n
                };
                return new Promise((e, n) => {
                    t(i).then(t => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t)), (0, u.trackNetworkAction)(r.event, {
                            status_code: t.status,
                            ...o,
                            ...n
                        }), e(t)
                    }).catch(t => {
                        var e, i;
                        let a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(t)), (0, u.trackNetworkAction)(r.event, {
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (i = t.body) || void 0 === i ? void 0 : i.message,
                            ...o,
                            ...a
                        }), n(t)
                    })
                })
            }
            var o = {
                get: function(t) {
                    return i(r.default.get, t, "get")
                },
                post: function(t) {
                    return i(r.default.post, t, "post")
                },
                put: function(t) {
                    return i(r.default.put, t, "put")
                },
                patch: function(t) {
                    return i(r.default.patch, t, "patch")
                },
                delete: function(t) {
                    return i(r.default.delete, t, "del")
                }
            }
        }
    }
]);