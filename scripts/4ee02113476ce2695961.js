(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75907"], {
        310013: function(e, t, n) {
            "use strict";
            var r = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                l = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var o = Object.getOwnPropertyNames(t);
                    l && (o = o.concat(Object.getOwnPropertySymbols(t)));
                    for (var u = 0; u < o.length; ++u)
                        if (!r[o[u]] && !i[o[u]] && (!n || !n[o[u]])) try {
                            e[o[u]] = t[o[u]]
                        } catch (e) {}
                }
                return e
            }
        },
        48648: function(e, t, n) {
            if (n("808653"), n("424973"), !r) var r = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, r) {
                        return n.index = r, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, i) {
                        return n.index = i, e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? r.map(e, t) : e)
                }
            };
            var i = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && r(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && r(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && r(), t
                        }
                    }
                }

                function i(e, t, n, r, i, l, o) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = l, this.histo = o
                }

                function l() {
                    this.vboxes = new n(function(e, t) {
                        return r.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var r, i, l, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (l = this.b1; l <= this.b2; l++) o += n[t(r, i, l)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var r, i, l, o, u = 0,
                                a = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (o = this.b1; o <= this.b2; o++) u += r = n[t(i, l, o)] || 0, s += r * (i + .5) * a, c += r * (l + .5) * a, d += r * (o + .5) * a;
                            u ? this._avg = [~~(s / u), ~~(c / u), ~~(d / u)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, l.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
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
                        for (var t, n, r, i = this.vboxes, l = 0; l < i.size(); l++)((n = Math.sqrt(Math.pow(e[0] - i.peek(l).color[0], 2) + Math.pow(e[1] - i.peek(l).color[1], 2) + Math.pow(e[2] - i.peek(l).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(l).color);
                        return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return r.naturalOrder(r.sum(e.color), r.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            i = e[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, u) {
                        if (!o.length || u < 2 || u > 256) return !1;
                        var a, s, c, d, f, h, p, I, m, E, _, g, T, S, C, v, N = (a = o, f = Array(32768), a.forEach(function(n) {
                                c = n[0] >> e, d = n[1] >> e, f[s = t(c, d, n[2] >> e)] = (f[s] || 0) + 1
                            }), f),
                            A = 0;
                        N.forEach(function() {
                            A++
                        });
                        var L = (h = o, p = N, _ = 1e6, g = 0, T = 1e6, S = 0, C = 1e6, v = 0, h.forEach(function(t) {
                                I = t[0] >> e, m = t[1] >> e, E = t[2] >> e, I < _ ? _ = I : I > g && (g = I), m < T ? T = m : m > S && (S = m), E < C ? C = E : E > v && (v = E)
                            }), new i(_, g, T, S, C, v, p)),
                            w = new n(function(e, t) {
                                return r.naturalOrder(e.count(), t.count())
                            });

                        function R(e, n) {
                            for (var i, l = 1, o = 0; o < 1e3;) {
                                if (!(i = e.pop()).count()) {
                                    e.push(i), o++;
                                    continue
                                }
                                var u = function(e, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                l = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                u = r.max([i, l, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var a, s, c, d, f, h = 0,
                                                p = [],
                                                I = [];
                                            if (u == i)
                                                for (a = n.r1; a <= n.r2; a++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += e[f = t(a, s, c)] || 0;
                                                    h += d, p[a] = h
                                                } else if (u == l)
                                                    for (a = n.g1; a <= n.g2; a++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += e[f = t(s, a, c)] || 0;
                                                        h += d, p[a] = h
                                                    } else
                                                        for (a = n.b1; a <= n.b2; a++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += e[f = t(s, c, a)] || 0;
                                                            h += d, p[a] = h
                                                        }
                                            return p.forEach(function(e, t) {
                                                I[t] = h - e
                                            }), m(u == i ? "r" : u == l ? "g" : "b")
                                        }

                                        function m(e) {
                                            var t, r, i, l, o, u = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (a = n[u]; a <= n[s]; a++)
                                                if (p[a] > h / 2) {
                                                    for (i = n.copy(), l = n.copy(), t = a - n[u], o = t <= (r = n[s] - a) ? Math.min(n[s] - 1, ~~(a + r / 2)) : Math.max(n[u], ~~(a - 1 - t / 2)); !p[o];) o++;
                                                    for (c = I[o]; !c && p[o - 1];) c = I[--o];
                                                    return i[s] = o, l[u] = i[s] + 1, [i, l]
                                                }
                                        }
                                    }(N, i),
                                    a = u[0],
                                    s = u[1];
                                if (!a) return;
                                if (e.push(a), s && (e.push(s), l++), l >= n || o++ > 1e3) return
                            }
                        }
                        w.push(L), R(w, .75 * u);
                        for (var M = new n(function(e, t) {
                                return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); w.size();) M.push(w.pop());
                        R(M, u - M.size());
                        for (var D = new l; M.size();) D.push(M.pop());
                        return D
                    }
                }
            }();
            e.exports = i.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return l.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                l = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("884691");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");
            let i = {};

            function l(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("48174");
            let l = [];

            function o(e, t) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(l);
                return o.current === l ? (n.current = e(), o.current = t) : !(0, i.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        529861: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ebd4163d89c2d849ec54.svg"
        },
        156465: function(e, t, n) {
            "use strict";
            e.exports = n.p + "42b086ee3d9863ea45bc.svg"
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), n("424973");
            var r = n("37983"),
                i = n("884691"),
                l = n("310013"),
                o = n.n(l),
                u = n("407063");
            let a = /url\(['"](.*)['"]\)/,
                s = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(a);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends i.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: r
                        } = this.state, {
                            style: i
                        } = this.props, l = null != i ? s(i.backgroundImage) : null;
                        null == l && l !== n ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== n && !0 === r && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, u.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...i
                        } = this.props, {
                            loaded: l,
                            cached: o
                        } = this.state;
                        if (!l && null != t) {
                            var u;
                            t = {
                                ...t,
                                backgroundImage: null == (u = o) || "" === u || "none" === u ? "none" : "url(".concat(u, ")")
                            }
                        }
                        return (0, r.jsx)(e, {
                            style: t,
                            ...i
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? s(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return o(t, e), t
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                l = n("49111"),
                o = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102"), n("222007"), n("704744");
            var r, i = n("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), l = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        519374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-12_create_guild_modal_themeing",
                label: "Create Guild Modal Force Light Theme",
                defaultConfig: {
                    forceLightTheme: !1
                },
                treatments: [{
                    id: 1,
                    label: "Force Light Theme",
                    config: {
                        forceLightTheme: !0
                    }
                }]
            });
            var l = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: r = {}
                } = e;
                return i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: r
                })
            }
        },
        297267: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openCreateGuildModal: function() {
                    return f
                },
                updateCreateGuildModal: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("42963"),
                o = n("599110"),
                u = n("169626"),
                a = n("243338"),
                s = n("49111"),
                c = n("149806");

            function d(e, t, n, i) {
                return (0, r.jsx)(u.default, {
                    onSuccess: t => {
                        l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.SUCCESS), e.onClose(), null == i || i(t)
                    },
                    onSlideChange: e => (function(e, t) {
                        switch (e) {
                            case a.CreateGuildSlideTypes.GUILD_TEMPLATES:
                                l.default.flowStepOrStart(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_TEMPLATES), o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Templates",
                                    location: t
                                });
                                break;
                            case a.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
                                l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_CREATE), o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Create Guild Step 2",
                                    location: t
                                });
                                break;
                            case a.CreateGuildSlideTypes.CREATION_INTENT:
                                o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Server Intent Discovery",
                                    location: t
                                });
                                break;
                            case a.CreateGuildSlideTypes.JOIN_GUILD:
                                l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.JOIN_GUILD), o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                                    type: "Join Guild",
                                    location: t
                                })
                        }
                    })(e, n),
                    initialSlide: t,
                    hasJoinButton: !0,
                    ...e
                })
            }
            let f = e => {
                    let {
                        initialSlide: t,
                        location: n,
                        onSuccess: r
                    } = e;
                    (0, i.openModal)(e => d(e, t, n, r), {
                        modalKey: a.CREATE_GUILD_MODAL_KEY
                    })
                },
                h = e => {
                    let {
                        slide: t,
                        location: n
                    } = e;
                    (0, i.updateModal)(a.CREATE_GUILD_MODAL_KEY, e => d(e, t, n))
                }
        },
        169626: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                o = n.n(l),
                u = n("759843"),
                a = n("77078"),
                s = n("84339"),
                c = n("599110"),
                d = n("439932"),
                f = n("519374"),
                h = n("818351"),
                p = n("21214"),
                I = n("622210"),
                m = n("72405"),
                E = n("110337"),
                _ = n("243338"),
                g = n("49111"),
                T = n("91140");

            function S(e) {
                let {
                    transitionState: t,
                    initialSlide: n = _.CreateGuildSlideTypes.GUILD_TEMPLATES,
                    onSuccess: l,
                    onClose: S,
                    onSlideChange: C,
                    hasJoinButton: v
                } = e, [N, A] = i.useState(n), L = (0, s.default)(N), [w, R] = i.useState(null), [M, D] = i.useState(null), [O, U] = i.useState(null), [b, G] = i.useState(!1), {
                    forceLightTheme: y
                } = (0, f.default)({
                    location: "CreateGuildModal"
                });
                i.useEffect(() => {
                    A(n)
                }, [A, n]), i.useEffect(() => {
                    N !== L && C(N)
                }, [C, N, L]);
                let x = i.useCallback(e => {
                        A(_.CreateGuildSlideTypes.CREATION_INTENT), D(e), c.default.track(g.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                            template_name: e.id,
                            template_code: e.code
                        })
                    }, []),
                    k = i.useCallback(e => {
                        G(e), A(_.CreateGuildSlideTypes.CUSTOMIZE_GUILD)
                    }, []),
                    F = i.useCallback(() => A(_.CreateGuildSlideTypes.JOIN_GUILD), [A]),
                    P = i.useCallback(() => {
                        if (N === _.CreateGuildSlideTypes.CUSTOMIZE_GUILD) {
                            A(_.CreateGuildSlideTypes.CREATION_INTENT);
                            return
                        }
                        A(_.CreateGuildSlideTypes.GUILD_TEMPLATES), D(null)
                    }, [N]),
                    j = i.useCallback(e => {
                        U(e), l(e)
                    }, [l, U]),
                    z = i.useCallback(() => {
                        o(null != O, "handleSuccess called before onGuildCreated"), l(O)
                    }, [l, O]),
                    V = {
                        impression_group: u.ImpressionGroups.GUILD_ADD_FLOW
                    };
                return (0, r.jsx)("div", {
                    className: y ? (0, d.getThemeClass)(g.ThemeTypes.LIGHT) : void 0,
                    children: (0, r.jsx)(a.ModalRoot, {
                        transitionState: t,
                        disableTrack: !0,
                        children: (0, r.jsx)("div", {
                            className: T.container,
                            children: (0, r.jsxs)(a.Slides, {
                                activeSlide: N,
                                width: 440,
                                onSlideReady: e => R(e),
                                children: [(0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.GUILD_TEMPLATES,
                                    impressionName: u.ImpressionNames.GUILD_ADD_LANDING,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(m.default, {
                                        isNewUser: !1,
                                        onJoin: v ? F : void 0,
                                        onChooseTemplate: x,
                                        onClose: S
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.CREATION_INTENT,
                                    impressionName: u.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(p.default, {
                                        onClose: S,
                                        onBack: P,
                                        onCreationIntentChosen: k
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                    impressionName: u.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(I.default, {
                                        guildTemplate: M,
                                        onGuildCreated: j,
                                        onClose: S,
                                        onBack: P,
                                        isSlideReady: w === _.CreateGuildSlideTypes.CUSTOMIZE_GUILD,
                                        isCommunity: b
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.CHANNEL_PROMPT,
                                    impressionName: u.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(h.default, {
                                        createdGuildId: O,
                                        onClose: S,
                                        onChannelPromptCompleted: z,
                                        isSlideReady: w === _.CreateGuildSlideTypes.CHANNEL_PROMPT
                                    })
                                }), (0, r.jsx)(a.Slide, {
                                    id: _.CreateGuildSlideTypes.JOIN_GUILD,
                                    impressionName: u.ImpressionNames.GUILD_ADD_JOIN,
                                    impressionProperties: V,
                                    children: (0, r.jsx)(E.default, {
                                        onBack: P,
                                        onClose: S,
                                        isSlideReady: w === _.CreateGuildSlideTypes.JOIN_GUILD
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        243338: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                CreateGuildSlideTypes: function() {
                    return r
                },
                CREATE_GUILD_MODAL_KEY: function() {
                    return l
                }
            }), (i = r || (r = {})).GUILD_TEMPLATES = "guild-templates", i.CUSTOMIZE_GUILD = "customize-guild", i.CHANNEL_PROMPT = "channel-prompt", i.JOIN_GUILD = "join-guild", i.CREATION_INTENT = "creation-intent";
            let l = "create-guild"
        },
        110337: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007");
            var l = n("37983"),
                o = n("884691"),
                u = n("414456"),
                a = n.n(u),
                s = n("77078"),
                c = n("970728"),
                d = n("448993"),
                f = n("393414"),
                h = n("145131"),
                p = n("476765"),
                I = n("883029"),
                m = n("49111"),
                E = n("782340"),
                _ = n("479030"),
                g = n("529861"),
                T = n("156465");
            let S = "hTKzmak",
                C = (0, p.uid)();
            let v = (r = window.GLOBAL_ENV.INVITE_HOST, i = "", null == r && (r = location.host, i = m.Routes.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(i, "/")),
                N = [S, "".concat(v).concat(S), "".concat(v).concat("cool-people")],
                A = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsxs)(s.Clickable, {
                        className: _.rowContainer,
                        onClick: () => {
                            t(), (0, f.transitionTo)(m.Routes.GUILD_DISCOVERY)
                        },
                        children: [(0, l.jsx)("img", {
                            width: 40,
                            height: 40,
                            className: _.rowIcon,
                            alt: "",
                            src: T
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(s.Heading, {
                                className: _.rowText,
                                variant: "heading-md/semibold",
                                children: E.default.Messages.DISCOVERY_UPSELL_HEADER
                            }), (0, l.jsx)(s.Text, {
                                className: _.rowText,
                                variant: "text-xs/normal",
                                children: E.default.Messages.DISCOVERY_UPSELL_DESCRIPTION
                            })]
                        }), (0, l.jsx)("img", {
                            className: _.rowArrow,
                            alt: "",
                            src: g
                        })]
                    })
                };

            function L(e) {
                let {
                    onBack: t,
                    onClose: n,
                    isSlideReady: r
                } = e, [i, u] = o.useState(""), [f, p] = o.useState(!1), [m, g] = o.useState(null), T = o.useRef(null);
                o.useEffect(() => {
                    var e;
                    r && (null === (e = T.current) || void 0 === e || e.focus())
                }, [r]);
                let L = e => {
                    e.preventDefault();
                    let t = i.trim();
                    if ("" === t) {
                        g(E.default.Messages.INVALID_INVITE_LINK_ERROR);
                        return
                    }
                    g(null), p(!0);
                    let r = t.split("/"),
                        l = r[r.length - 1];
                    c.default.resolveInvite(l, "Join Guild", {
                        inputValue: t
                    }).then(e => {
                        let {
                            invite: t
                        } = e;
                        if (p(!1), null == t) {
                            g(E.default.Messages.INSTANT_INVITE_EXPIRED);
                            return
                        }
                        if (null != t.channel) {
                            let e = c.default.getInviteContext("Join Guild", t);
                            c.default.acceptInvite({
                                inviteKey: t.code,
                                context: e,
                                callback: e => {
                                    n(), c.default.transitionToInvite(e)
                                }
                            }).then(() => {}, e => {
                                if (e instanceof d.V6OrEarlierAPIError || e instanceof d.APIError) {
                                    let t = (0, I.getInviteError)(e.code);
                                    g(t)
                                } else g(E.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
                            })
                        }
                    }, e => {
                        p(!1);
                        let t = new d.V6OrEarlierAPIError(e),
                            n = (0, I.getInviteError)(t.code);
                        g(n)
                    })
                };
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        className: _.header,
                        direction: h.default.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, l.jsx)(s.Heading, {
                            className: _.title,
                            variant: "heading-xl/semibold",
                            children: E.default.Messages.JOIN_SERVER_TITLE
                        }), (0, l.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: E.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
                        }), (0, l.jsx)(s.ModalCloseButton, {
                            className: _.closeButton,
                            onClick: n
                        })]
                    }), (0, l.jsxs)(s.ModalContent, {
                        className: _.content,
                        children: [(0, l.jsx)("form", {
                            onSubmit: L,
                            className: _.inputForm,
                            children: (0, l.jsxs)(s.FormItem, {
                                children: [(0, l.jsx)(s.FormTitle, {
                                    id: C,
                                    error: m,
                                    className: a(_.formTitle, {
                                        [_.error]: null != m
                                    }),
                                    required: !0,
                                    children: E.default.Messages.FORM_LABEL_INVITE_LINK
                                }), (0, l.jsx)(s.TextInput, {
                                    value: i,
                                    onChange: u,
                                    className: _.input,
                                    inputClassName: _.inputInner,
                                    placeholder: "".concat(v).concat(S),
                                    inputRef: T,
                                    required: !0,
                                    "aria-labelledby": C
                                })]
                            })
                        }), (0, l.jsx)(s.FormItem, {
                            title: E.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                            titleClassName: _.formTitle,
                            className: _.examplesForm,
                            children: N.map(e => (0, l.jsx)(s.Clickable, {
                                className: _.sampleLink,
                                onClick: () => u(e),
                                children: e
                            }, e))
                        }), (0, l.jsx)(A, {
                            onClick: n
                        })]
                    }), (0, l.jsxs)(s.ModalFooter, {
                        className: _.footer,
                        children: [(0, l.jsx)(s.Button, {
                            color: s.Button.Colors.BRAND,
                            submitting: f,
                            onClick: L,
                            children: E.default.Messages.NUF_JOIN_SERVER_BUTTON
                        }), (0, l.jsx)(s.Button, {
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MIN,
                            onClick: t,
                            children: E.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function i(e, t) {
                return !1
            }

            function l(e) {
                return !1
            }

            function o() {
                return !1
            }

            function u() {
                return !1
            }

            function a(e) {
                let {} = e;
                return !1
            }

            function s(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function h(e) {}

            function p(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return i
                },
                navigateToRootTab: function() {
                    return l
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return u
                },
                pushModal: function() {
                    return a
                },
                popModal: function() {
                    return s
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return f
                },
                coerceModalRoute: function() {
                    return h
                },
                useIsModalOpen: function() {
                    return p
                }
            })
        },
        149806: function(e, t, n) {
            "use strict";
            var r, i, l, o, u, a, s, c, d, f;
            n.r(t), n.d(t, {
                FlowType: function() {
                    return r
                },
                AgeGateSteps: function() {
                    return i
                },
                ClaimAccountSteps: function() {
                    return l
                },
                CreateGuildSteps: function() {
                    return o
                },
                RegistrationSteps: function() {
                    return u
                }
            }), (a = r || (r = {})).UNKNOWN = "unknown", a.ANY = "any", a.INVITE = "invite", a.ORGANIC = "organic_registration", a.ORGANIC_MARKETING = "organic_marketing", a.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", a.CREATE_GUILD = "create_guild", (s = i || (i = {})).AGE_GATE = "age_gate", s.AGE_GATE_UNDERAGE = "age_gate_underage", (c = l || (l = {})).CLAIM_ACCOUNT = "claim_account", c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", (d = o || (o = {})).GUILD_TEMPLATES = "guild_templates", d.GUILD_CREATE = "guild_create", d.CREATION_INTENT = "creation_intent", d.CHANNEL_PROMPT = "channel_prompt", d.JOIN_GUILD = "join_guild", d.SUCCESS = "create_success", (f = u || (u = {})).NUF_STARTED = "nuf_started", f.AGE_GATE = "age_gate", f.NUF_COMPLETE = "nuf_complete", f.HUB_CONNECTION = "hub_connection"
        },
        42963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("308503"),
                i = n("95410"),
                l = n("605250"),
                o = n("599110"),
                u = n("149806"),
                a = n("49111");
            let s = "UserFlowAnalyticsStore_current",
                c = "UserFlowAnalyticsStore";

            function d(e) {
                if (e === u.FlowType.UNKNOWN) return null;
                let t = i.default.get("".concat(c, "-").concat(e));
                if (null == t) return null;
                let {
                    version: n,
                    ...r
                } = t;
                return 1 !== n ? null : r
            }
            new l.default("UserFlowAnalytics");
            let f = (0, r.default)((e, t) => ({
                flows: {},
                currentFlow: null,
                activeFlow: () => {
                    var e;
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : i.default.get(s);
                    if (null == n) return null;
                    let {
                        [n]: r
                    } = t().flows, l = null != r ? r : d(n);
                    return (null == l ? void 0 : l.currentStep) != null ? n : null
                }
            }));

            function h(e, t) {
                let {
                    [e]: n, ...r
                } = f.getState().flows, i = null != n ? n : d(e);
                if ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== t) f.setState({
                    flows: {
                        ...r,
                        [e]: {
                            type: e,
                            lastStep: null,
                            lastTimestamp: null,
                            currentStep: t,
                            currentTimestamp: new Date,
                            skipped: !1
                        }
                    },
                    currentFlow: e
                })
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === u.FlowType.ANY) {
                    var i;
                    r = null !== (i = f.getState().activeFlow()) && void 0 !== i ? i : u.FlowType.UNKNOWN
                }
                let {
                    [r]: l, ...o
                } = f.getState().flows, a = null != l ? l : d(r);
                if (null != a && null != a.currentStep) a.currentStep !== t && f.setState({
                    flows: {
                        ...o,
                        [r]: {
                            ...a,
                            lastStep: a.currentStep,
                            lastTimestamp: a.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date,
                            ended: n
                        }
                    },
                    currentFlow: r
                })
            }
            f.subscribe(e => {
                var t;
                if (null != e && (! function(e) {
                        if (e.type === u.FlowType.UNKNOWN) return;
                        let t = "".concat(c, "-").concat(e.type);
                        e.ended ? (i.default.remove(t), i.default.remove(s)) : (i.default.set("".concat(c, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), i.default.set(s, e.type))
                    }(e), o.default.track(a.AnalyticEvents.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    }), e.ended)) {
                    let t = {
                        ...f.getState().flows
                    };
                    delete t[e.type], f.setState({
                        flows: t,
                        currentFlow: null
                    })
                }
            }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

            function I() {
                return null != f.getState().activeFlow()
            }
            var m = {
                flowStart: h,
                flowStepOrStart: function(e, t) {
                    I() ? p(e, t) : h(e, t)
                },
                flowStep: p,
                hasActiveFlow: I
            }
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("627445"),
                i = n.n(r),
                l = n("446674"),
                o = n("913144"),
                u = n("816454");
            let a = new Map;

            function s(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(o.default, {
                WINDOW_INIT: function(e) {
                    i(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: l
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = d
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("77078"),
                a = n("760607"),
                s = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), h = (0, u.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: o(s.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(a.default, {
                        ...d,
                        className: o(c, s.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: o(s.childContainer, {
                            [s.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("90915"),
                a = n("446674"),
                s = n("669491"),
                c = n("77078"),
                d = n("80300"),
                f = n("471671"),
                h = n("103603"),
                p = n("474293"),
                I = n("580357"),
                m = n("491088");
            let E = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                _ = {
                    [E.SMOL]: 16,
                    [E.MINI]: 20,
                    [E.SMALLER]: 24,
                    [E.SMALL]: 30,
                    [E.MEDIUM]: 40,
                    [E.LARGE]: 50,
                    [E.LARGER]: 64,
                    [E.XLARGE]: 100
                },
                g = {
                    [E.SMOL]: [10, 10, 8, 6, 6, 4],
                    [E.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [E.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [E.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [E.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [E.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [E.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [E.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class T extends i.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, r.jsx)("div", {
                        className: m.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, r.jsx)(I.default, {
                        className: m.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: i,
                        showBadge: l,
                        active: u,
                        size: a,
                        style: s = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: h,
                        onClick: I,
                        to: E,
                        badgeStrokeColor: _,
                        animate: T,
                        tabIndex: S,
                        iconSrc: C,
                        "aria-hidden": v,
                        ...N
                    } = this.props, A = g[a], L = null != I ? c.Clickable : "div";
                    return (0, r.jsxs)(L, {
                        className: o(m.icon, i, (0, p.getClass)(m, "iconSize", a), {
                            [null !== (e = (0, p.getClass)(m, "iconActive", a)) && void 0 !== e ? e : ""]: u,
                            [m.iconInactive]: !u,
                            [m.noIcon]: null == n.icon
                        }),
                        "aria-hidden": v,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = A[n.acronym.length]) && void 0 !== t ? t : A[A.length - 1]) * d,
                            ...s
                        } : s,
                        onClick: null != E || null == I ? void 0 : I,
                        tabIndex: S,
                        ...N,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, r.jsx)(c.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => i.cloneElement(i.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: i,
                        "aria-hidden": l
                    } = this.props;
                    return null != e ? (0, r.jsx)(u.Link, {
                        "aria-hidden": l,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: i,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let S = a.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: r,
                    style: i,
                    size: l
                } = e;
                return {
                    style: {
                        ...i,
                        backgroundImage: (0, h.makeCssUrlString)(null != r ? r : t.getIconURL(_[l], n && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, r.jsx)(T, {
                ...e
            })));
            class C extends i.PureComponent {
                render() {
                    return (0, r.jsx)(S, {
                        ...this.props
                    })
                }
            }
            C.Sizes = E, C.defaultProps = {
                size: E.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: s.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var v = C
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return a
                }
            });
            var r = n("995008"),
                i = n.n(r),
                l = n("775560");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                u = () => (0, l.useLazyValue)(() => o()),
                a = e => {
                    let {
                        children: t
                    } = e;
                    return t(u())
                }
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: o,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("276825"),
                o = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, l.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        651879: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                o = n("693566"),
                u = n.n(o),
                a = n("851387"),
                s = n("305961"),
                c = n("697218"),
                d = n("718517"),
                f = n("158998"),
                h = n("782340");
            let p = new u({
                maxAge: 1 * d.default.Millis.MINUTE
            });

            function I(e, t, n) {
                null != r && clearTimeout(r), r = setTimeout(() => {
                    let r = [],
                        i = e => {
                            r.push(e.id)
                        };
                    if (null == e) l.forEach(s.default.getGuilds(), i);
                    else if (Array.isArray(e)) e.forEach(e => {
                        let t = s.default.getGuild(e);
                        null != t && i(t)
                    });
                    else {
                        let t = s.default.getGuild(e);
                        null != t && i(t)
                    }
                    r.length > 0 && a.default.requestMembers(r, t.toLocaleLowerCase(), n)
                }, 200)
            }

            function m(e, t) {
                let n = "".concat(null != e ? e : "", ":").concat(t),
                    r = p.get(n);
                if (null != r) return r;
                p.set(n, !0)
            }
            var E = {
                getGuildNameSuggestion: function(e) {
                    let t = c.default.getCurrentUser(),
                        n = f.getName(t);
                    return null == n || 0 === n.length ? "" : h.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        r = Array.isArray(e),
                        i = [],
                        l = !1;
                    if (r) e.forEach(e => {
                        let n = m(e, t);
                        null == n && i.push(e)
                    });
                    else {
                        let n = m(e, t);
                        null == n && (l = !0)
                    }
                    i.length > 0 && r ? I(i, t, n) : l && I(e, t, n)
                }
            }
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return h
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return m
                },
                readFileAsBase64: function() {
                    return _
                },
                dataUriFileSize: function() {
                    return g
                },
                dataUrlToFile: function() {
                    return T
                },
                isPNGAnimated: function() {
                    return S
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                l = n("917351"),
                o = n.n(l),
                u = n("48648"),
                a = n.n(u);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: l = 0,
                    minHeight: o = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), o);
                    let u = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * u), l), n = Math.max(Math.round(n * u), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function c(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function d(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e, l = 1;
                t > r && (l = r / t), t = Math.round(t * l);
                let o = 1;
                return (n = Math.round(n * l)) > i && (o = i / n), Math.min(l * o, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function h(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let p = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return p;
                let l = r.width = 0 === e.width ? 128 : e.width,
                    o = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, l, o);
                let u = i.getImageData(0, 0, l, o).data,
                    s = function(e, t, n) {
                        let r = [];
                        for (let i = 0, l, o, u, a, s; i < t; i += n) o = e[(l = 4 * i) + 0], u = e[l + 1], a = e[l + 2], (void 0 === (s = e[l + 3]) || s >= 125) && !(o > 250 && u > 250 && a > 250) && r.push([o, u, a]);
                        return r
                    }(u, l * o, n),
                    c = a(s, t);
                return "boolean" == typeof c ? p : c.palette()
            }
            let m = e => "number" == typeof e ? null : E(e),
                E = o.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function _(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(e), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), t(r.result)
                    }, r.onerror = e => n(e)
                })
            }

            function g(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function T(e, t, n) {
                let r = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(e),
                    i = await r.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function S(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await e.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        883029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDescriptiveInviteError: function() {
                    return a
                },
                getInviteError: function() {
                    return s
                }
            });
            var r = n("697218"),
                i = n("701909"),
                l = n("719923"),
                o = n("49111"),
                u = n("782340");

            function a(e) {
                switch (e) {
                    case o.AbortCodes.TOO_MANY_USER_GUILDS:
                        let t = r.default.getCurrentUser(),
                            n = l.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()),
                            i = n ? o.MAX_USER_GUILDS_PREMIUM : o.MAX_USER_GUILDS;
                        return {
                            title: u.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                                quantity: i
                            }), description: u.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
                        };
                    case o.AbortCodes.GUILD_AT_CAPACITY:
                        return {
                            title: u.default.Messages.SERVER_IS_CURRENTLY_FULL, description: u.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    case o.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
                        return {
                            title: u.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: u.default.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    default:
                        return null
                }
            }

            function s(e) {
                switch (e) {
                    case o.AbortCodes.TOO_MANY_USER_GUILDS:
                        return u.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
                    case o.AbortCodes.GUILD_AT_CAPACITY:
                        return u.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
                    case o.AbortCodes.INVALID_COUNTRY_CODE:
                        return u.default.Messages.INVALID_COUNTRY_CODE;
                    case o.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
                        return u.default.Messages.INVALID_CANNOT_FRIEND_SELF;
                    case o.AbortCodes.INVITES_DISABLED:
                        return u.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
                            articleLink: i.default.getArticleURL(o.HelpdeskArticles.INVITE_DISABLED)
                        });
                    default:
                        return u.default.Messages.INVITE_MODAL_ERROR_DEFAULT
                }
            }
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return i
                }
            }), n("808653");
            var r = n("159885");

            function i(e, t) {
                for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) i[l - 2] = arguments[l];
                let o = i.reduce((e, t) => e + (0, r.upperCaseFirstChar)(t), ""),
                    u = "".concat(t).concat(o),
                    a = e[u];
                if (null != a) return a
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: r,
                    ...l
                } = t, o = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...o,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...o,
                            ...u
                        }), n(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return l(r.default.get, e, "get")
                },
                post: function(e) {
                    return l(r.default.post, e, "post")
                },
                put: function(e) {
                    return l(r.default.put, e, "put")
                },
                patch: function(e) {
                    return l(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.default.delete, e, "del")
                }
            }
        }
    }
]);