(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63470"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    l = e.length;
                if (l > n) return !1;
                if (l === n) return e === t;
                e: for (var i = 0, r = 0; i < l; i++) {
                    for (var s = e.charCodeAt(i); r < n;)
                        if (t.charCodeAt(r++) === s) continue e;
                    return !1
                }
                return !0
            }
        },
        48648: function(e, t, n) {
            if (n("808653"), n("424973"), !l) var l = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, l) {
                        return n.index = l, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, l, i) {
                        return n.index = i, e + t.call(n, l)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? l.map(e, t) : e)
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

                    function l() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && l(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && l(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && l(), t
                        }
                    }
                }

                function i(e, t, n, l, i, r, s) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = l, this.b1 = i, this.b2 = r, this.histo = s
                }

                function r() {
                    this.vboxes = new n(function(e, t) {
                        return l.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var l, i, r, s = 0;
                            for (l = this.r1; l <= this.r2; l++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (r = this.b1; r <= this.b2; r++) s += n[t(l, i, r)] || 0;
                            this._count = s, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var l, i, r, s, a = 0,
                                u = 8,
                                o = 0,
                                d = 0,
                                c = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (s = this.b1; s <= this.b2; s++) a += l = n[t(i, r, s)] || 0, o += l * (i + .5) * u, d += l * (r + .5) * u, c += l * (s + .5) * u;
                            a ? this._avg = [~~(o / a), ~~(d / a), ~~(c / a)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, r.prototype = {
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
                        for (var t, n, l, i = this.vboxes, r = 0; r < i.size(); r++)((n = Math.sqrt(Math.pow(e[0] - i.peek(r).color[0], 2) + Math.pow(e[1] - i.peek(r).color[1], 2) + Math.pow(e[2] - i.peek(r).color[2], 2))) < t || void 0 === t) && (t = n, l = i.peek(r).color);
                        return l
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return l.naturalOrder(l.sum(e.color), l.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            i = e[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(s, a) {
                        if (!s.length || a < 2 || a > 256) return !1;
                        var u, o, d, c, f, E, h, I, _, g, p, T, m, v, N, S, A = (u = s, f = Array(32768), u.forEach(function(n) {
                                d = n[0] >> e, c = n[1] >> e, f[o = t(d, c, n[2] >> e)] = (f[o] || 0) + 1
                            }), f),
                            C = 0;
                        A.forEach(function() {
                            C++
                        });
                        var L = (E = s, h = A, p = 1e6, T = 0, m = 1e6, v = 0, N = 1e6, S = 0, E.forEach(function(t) {
                                I = t[0] >> e, _ = t[1] >> e, g = t[2] >> e, I < p ? p = I : I > T && (T = I), _ < m ? m = _ : _ > v && (v = _), g < N ? N = g : g > S && (S = g)
                            }), new i(p, T, m, v, N, S, h)),
                            O = new n(function(e, t) {
                                return l.naturalOrder(e.count(), t.count())
                            });

                        function M(e, n) {
                            for (var i, r = 1, s = 0; s < 1e3;) {
                                if (!(i = e.pop()).count()) {
                                    e.push(i), s++;
                                    continue
                                }
                                var a = function(e, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                r = n.g2 - n.g1 + 1,
                                                s = n.b2 - n.b1 + 1,
                                                a = l.max([i, r, s]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, o, d, c, f, E = 0,
                                                h = [],
                                                I = [];
                                            if (a == i)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (c = 0, o = n.g1; o <= n.g2; o++)
                                                        for (d = n.b1; d <= n.b2; d++) c += e[f = t(u, o, d)] || 0;
                                                    E += c, h[u] = E
                                                } else if (a == r)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (c = 0, o = n.r1; o <= n.r2; o++)
                                                            for (d = n.b1; d <= n.b2; d++) c += e[f = t(o, u, d)] || 0;
                                                        E += c, h[u] = E
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (c = 0, o = n.r1; o <= n.r2; o++)
                                                                for (d = n.g1; d <= n.g2; d++) c += e[f = t(o, d, u)] || 0;
                                                            E += c, h[u] = E
                                                        }
                                            return h.forEach(function(e, t) {
                                                I[t] = E - e
                                            }), _(a == i ? "r" : a == r ? "g" : "b")
                                        }

                                        function _(e) {
                                            var t, l, i, r, s, a = e + "1",
                                                o = e + "2",
                                                d = 0;
                                            for (u = n[a]; u <= n[o]; u++)
                                                if (h[u] > E / 2) {
                                                    for (i = n.copy(), r = n.copy(), t = u - n[a], s = t <= (l = n[o] - u) ? Math.min(n[o] - 1, ~~(u + l / 2)) : Math.max(n[a], ~~(u - 1 - t / 2)); !h[s];) s++;
                                                    for (d = I[s]; !d && h[s - 1];) d = I[--s];
                                                    return i[o] = s, r[a] = i[o] + 1, [i, r]
                                                }
                                        }
                                    }(A, i),
                                    u = a[0],
                                    o = a[1];
                                if (!u) return;
                                if (e.push(u), o && (e.push(o), r++), r >= n || s++ > 1e3) return
                            }
                        }
                        O.push(L), M(O, .75 * a);
                        for (var R = new n(function(e, t) {
                                return l.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); O.size();) R.push(O.pop());
                        M(R, a - R.size());
                        for (var D = new r; R.size();) D.push(R.pop());
                        return D
                    }
                }
            }();
            e.exports = i.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function l(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return l.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return r.default
                }
            });
            var l = n("14716"),
                i = n("745510"),
                r = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var l = n("884691");

            function i() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691");
            let i = {};

            function r(e) {
                let t = (0, l.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                i = n("48174");
            let r = [];

            function s(e, t) {
                let n = (0, l.useRef)(),
                    s = (0, l.useRef)(r);
                return s.current === r ? (n.current = e(), s.current = t) : !(0, i.default)(t, s.current) && (n.current = e(), s.current = t), n.current
            }
        },
        56585: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ffd15f0afc010d71a931.svg"
        },
        149361: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6d4cb1bdf1775bb8cacd.png"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return s
                }
            });
            var l = n("913144");

            function i(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return a
                }
            });
            var l = n("872717"),
                i = n("913144"),
                r = n("843823"),
                s = n("49111");

            function a() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return r.default.needsRefresh() ? (i.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), l.default.get({
                    url: s.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                u = n("782340"),
                o = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: h,
                        retryPrompt: I,
                        retrySuccessMessage: _
                    } = this.props, {
                        code: g,
                        errorMessage: p,
                        retrySuccess: T
                    } = this.state, m = i.Children.count(r) > 0 ? (0, l.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: o.card,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, v = null != I ? (0, l.jsxs)(a.Text, {
                        className: s(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(a.Clickable, {
                            className: s(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(a.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, N = T ? (0, l.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: _
                        })
                    }) : null;
                    return (0, l.jsx)(a.ModalRoot, {
                        transitionState: E,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(a.ModalContent, {
                                children: [null != h ? (0, l.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: h
                                }) : null, m, N, (0, l.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, l.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : p
                                    }) : null, v]
                                })]
                            }), (0, l.jsxs)(a.ModalFooter, {
                                children: [(0, l.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: c || 0 === g.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, l.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: a
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: a
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: a
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: a
                    })]
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = n("872717"),
                r = n("49111"),
                s = n("782340");
            l = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, i = n("872717"),
                r = n("49111"),
                s = n("782340");
            l = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        789394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelEmojisExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        148387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InvitePropertiesType: function() {
                    return i
                },
                default: function() {
                    return c
                }
            });
            var l, i, r = n("450911"),
                s = n("819689"),
                a = n("605250"),
                u = n("42203"),
                o = n("231987");
            (l = i || (i = {}))[l.GROUP_DM = 0] = "GROUP_DM", l[l.USER = 1] = "USER", l[l.CHANNEL = 2] = "CHANNEL";
            class d extends o.default {
                _sendInvite(e, t, n, l, i) {
                    s.default.sendInvite(e.id, t, n, l).then(() => i(null, !0), () => i(null, !1))
                }
                drain(e, t) {
                    let {
                        location: n,
                        suggested: l
                    } = e;
                    switch (e.type) {
                        case 0:
                        case 2:
                            this._sendInvite(e.channel, e.inviteKey, n, l, t);
                            break;
                        case 1:
                            r.default.ensurePrivateChannel(e.user.id).then(i => {
                                let r = u.default.getChannel(i);
                                null != r && this._sendInvite(r, e.inviteKey, n, l, t)
                            }, () => t(null, !1))
                    }
                }
                constructor() {
                    super(new a.default("InviteQueue"), 1010)
                }
            }
            var c = new d
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), r = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != r) r(null);
                else if (l.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var l, i, r, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return l
                },
                BotTagTypes: function() {
                    return i
                }
            }), (r = l || (l = {}))[r.GAME = 1] = "GAME", r[r.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", r[r.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = i || (i = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        442939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                useGetOrFetchApplication: function() {
                    return o
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("233736"),
                s = n("651057"),
                a = n("299285");

            function u(e) {
                let t = l.useRef([]);
                return l.useEffect(() => {
                    !(0, r.areArraysShallowEqual)(e, t.current) && (s.default.fetchApplications(e, !1), t.current = e)
                }, [e]), (0, i.useStateFromStoresArray)([a.default], () => e.map(e => a.default.getApplication(e)))
            }

            function o(e) {
                return u(null != e ? [e] : [])[0]
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return a
                }
            }), n("222007");
            var l = n("697218"),
                i = n("315102"),
                r = n("449008"),
                s = n("49111");

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case s.ChannelTypes.DM:
                        let [a] = e.recipients.map(l.default.getUser).filter(r.isNotNullish);
                        if (null == a) return null;
                        return a.getAvatarURL(void 0, t, n);
                    case s.ChannelTypes.GROUP_DM:
                        return i.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        659404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CommunityEndlessInvitesExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-04_community_endless_invites",
                label: "Community Endless Invites",
                defaultConfig: {
                    defaultInvitesToNeverExpire: !1
                },
                treatments: [{
                    id: 1,
                    label: "Causes invites to never expire (by default) in the Guild",
                    config: {
                        defaultInvitesToNeverExpire: !0
                    }
                }]
            })
        },
        262362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("65597"),
                i = n("305961"),
                r = n("354023"),
                s = n("659404"),
                a = n("49111");

            function u(e) {
                let {
                    guildId: t
                } = e, n = s.CommunityEndlessInvitesExperiment.useExperiment({
                    guildId: null != t ? t : "",
                    location: "6798be_2"
                }), u = (0, l.default)([i.default], () => i.default.getGuild(t));
                return null != t && function(e) {
                    var t;
                    let {
                        guild: n,
                        experimentConfig: l
                    } = e, {
                        defaultInvitesToNeverExpire: i
                    } = null != l ? l : s.CommunityEndlessInvitesExperiment.getCurrentConfig({
                        guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                        location: "6798be_1"
                    });
                    if ((null == n ? void 0 : n.hasFeature(a.GuildFeatures.HUB)) === !0 || (null == n ? void 0 : n.hasFeature(a.GuildFeatures.COMMUNITY)) === !0 && i) return r.default.INVITE_OPTIONS_FOREVER.value
                }({
                    guild: u,
                    experimentConfig: n
                })
            }
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = {
                openCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            openCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                },
                updateCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            updateCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                }
            }
        },
        385042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("69927"),
                r = n("773336"),
                s = n("782340");

            function a() {
                return l.useEffect(() => {
                    !r.isPlatformEmbedded && (0, i.flashPageTitle)({
                        messages: [s.default.Messages.GO_LIVE_HEY, s.default.Messages.GO_LIVE_LOOK, s.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        708730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsInGrowingFriendGuildCommunityUpsellExperiment: function() {
                    return i
                }
            });
            var l = n("122807");
            let i = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = l.GrowingFriendGuildCommunityUpsellExperiment.useExperiment({
                        guildId: e,
                        location: "7ae634_1"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }
        },
        122807: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GrowingFriendGuildCommunityUpsellExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-04_growing_friend_guild_community_upsell",
                label: "Growing Friend Guild Community Upsell",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Community Upsell to Growing Friend Guilds",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        272091: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                useIsNewCommunity: function() {
                    return d
                }
            });
            var l = n("65597"),
                i = n("305961"),
                r = n("957255"),
                s = n("697218"),
                a = n("708730"),
                u = n("49111");

            function o(e, t) {
                let n = (0, l.default)([s.default], () => {
                        var e, t;
                        return null !== (t = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : ""
                    }),
                    o = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    d = (0, l.default)([i.default], () => i.default.getGuild(e), [e]),
                    c = null == d ? void 0 : d.hasFeature(u.GuildFeatures.COMMUNITY),
                    f = (0, l.default)([r.default], () => r.default.can(u.Permissions.ADMINISTRATOR, d), [d]),
                    E = (null == d ? void 0 : d.isOwner(n)) || f;
                return !!o && !c && !!E && !!t || !1
            }

            function d(e, t) {
                let n = (0, a.useIsInGrowingFriendGuildCommunityUpsellExperiment)(null != e ? e : ""),
                    r = (0, l.default)([i.default], () => i.default.getGuild(e), [e]),
                    s = null == r ? void 0 : r.hasFeature(u.GuildFeatures.COMMUNITY);
                return !!n && !!s && !!t || !1
            }
        },
        577617: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderOption: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                a = n("886074"),
                u = n("45029"),
                o = n("782340"),
                d = n("41604");

            function c(e) {
                let {
                    text: t,
                    isLocked: n,
                    shouldSparkle: i
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: r(d.container),
                        children: [i ? (0, l.jsx)(a.default, {
                            className: d.sparkles
                        }) : null, (0, l.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            children: t
                        }), n ? (0, l.jsxs)("div", {
                            className: d.pill,
                            children: [(0, l.jsx)(u.default, {
                                height: 14,
                                width: 14,
                                className: d.icon
                            }), (0, l.jsx)(s.Text, {
                                variant: "text-xs/medium",
                                color: "header-primary",
                                className: d.pillText,
                                children: o.default.Messages.COMMUNITIES
                            })]
                        }) : null]
                    })
                })
            }

            function f(e, t, n) {
                return (0, l.jsx)(c, {
                    text: e.label,
                    isLocked: t,
                    shouldSparkle: n
                })
            }
        },
        255070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("759843"),
                r = n("77078"),
                s = n("716241"),
                a = n("428958"),
                u = n("592407"),
                o = n("45395"),
                d = n("272091"),
                c = n("49111"),
                f = n("782340"),
                E = n("191455"),
                h = n("149361");

            function I(e) {
                let {
                    permanentInviteSelected: t,
                    guildId: n,
                    onClick: I
                } = e, _ = (0, d.default)(null != n ? n : "", t);
                return ((0, a.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
                }), _) ? (0, l.jsxs)("div", {
                    className: E.container,
                    children: [(0, l.jsx)("div", {
                        className: E.imageContainer,
                        children: (0, l.jsx)("img", {
                            src: h,
                            className: E.image,
                            alt: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
                        })
                    }), (0, l.jsxs)("div", {
                        className: E.textContainer,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: E.header,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            className: E.description,
                            children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
                        }), (0, l.jsx)(r.Button, {
                            size: r.ButtonSizes.SMALL,
                            color: r.Button.Colors.BRAND,
                            className: E.button,
                            onClick: () => {
                                s.default.trackWithMetadata(c.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), u.default.init(null != n ? n : ""), o.default.open(), I()
                            },
                            children: f.default.Messages.GET_STARTED
                        })]
                    })]
                }) : null
            }
        },
        87241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuestVoiceInvitesExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            let i = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-02_guest_voice_invites",
                label: "Guest Voice Invites",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow creation of guest voice invites",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        155996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                i = n("298386"),
                r = n("65597"),
                s = n("656038"),
                a = n("42203"),
                u = n("923959"),
                o = n("449008");

            function d(e) {
                let t = (0, r.useStateFromStoresArray)([u.default], () => u.default.getVocalChannelIds(e)),
                    n = (0, r.useStateFromStoresArray)([a.default], () => t.map(e => a.default.getChannel(e)).filter(o.isNotNullish), [t]),
                    d = l.useMemo(() => n.filter(e => !(0, s.default)(e) && e.type === i.ChannelTypes.GUILD_VOICE), [n]);
                return d
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("872717"),
                i = n("913144"),
                r = n("479756"),
                s = n("38654"),
                a = n("9294"),
                u = n("26989"),
                o = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : o.default.getInviteKeyForGuildId(e),
                    r = d.default.getCurrentUser(),
                    s = !u.default.isMember(e, null == r ? void 0 : r.id);
                try {
                    let t = await l.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: r
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: r.version,
                            description: r.description,
                            formFields: r.form_fields,
                            guild: r.guild
                        }
                    }), r
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await l.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, h = async (e, t) => {
                let n = await l.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: r
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields
                    }
                })
            }, I = async (e, t) => {
                await l.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, _ = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, r.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await l.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: r
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: r
                    }), r
                } catch (e) {
                    throw e
                }
            };
            var g = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: h,
                enableVerificationForm: I,
                submitVerificationForm: _
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return r
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return o
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return _
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return g
                }
            }), n("222007");
            var l, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let r = new Set([i.VerificationFormFieldTypes.TERMS]),
                s = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                u = 16,
                o = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                h = 1e3,
                I = 300,
                _ = "Membership Gating",
                g = "in-app-member-verification";
            (l || (l = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), l = n("453265").default;
            let i = l.openMemberVerificationModal;
            l.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return o
                }
            });
            var l = n("308503"),
                i = n("659500"),
                r = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, l.default)(e => s),
                u = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                o = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(r.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("599110"),
                s = n("50926"),
                a = n("347977"),
                u = n("394294"),
                o = n("49111");
            let d = () => {
                    r.default.track(o.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    r.default.track(o.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let r = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: r,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return l
                }
            }), (i = l || (l = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return p
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return m
                },
                updateImpersonatedChannels: function() {
                    return N
                },
                updateImpersonatedRoles: function() {
                    return S
                },
                updateImpersonatedData: function() {
                    return A
                }
            }), n("222007");
            var l = n("913144"),
                i = n("716241"),
                r = n("393414"),
                s = n("42203"),
                a = n("923959"),
                u = n("26989"),
                o = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                h = n("38654"),
                I = n("507950"),
                _ = n("49111"),
                g = n("724210");

            function p(e, t) {
                E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), v(e)
            }

            function T(e, t) {
                let n = h.default.getData(e);
                null != n && n.type === t.type && (E.default.track(_.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), l.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), v(e))
            }

            function m(e) {
                l.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function v(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    l = null != t && (0, g.isStaticChannelRoute)(t);
                if (!l && !d.default.can(_.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, r.transitionTo)(_.Routes.CHANNEL(e, t.id))
                }
            }

            function N(e, t, n) {
                let l = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => l.add(e)), n.forEach(e => l.delete(e)), T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: l
                })
            }

            function S(e, t) {
                let n = o.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        l = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (l.some(e => !t.roles.includes(e))) return !0;
                        let i = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            r = i.filter(e => !n.includes(e));
                        return r.length > 0 && N(e, r, []), !1
                    })
                }(e, t);
                let l = {};
                t.forEach(e => l[e] = n.roles[e]), T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: l
                })
            }

            function A(e, t) {
                T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            }), n("222007");
            var l = n("522632"),
                i = n("833858");
            let r = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = l.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[r])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(r, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = l.parse(n),
                    a = (0, i.getFirstQueryStringValue)(s[r]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        234919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-05_vanity_url_target",
                label: "Vanity URL Targeting",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        310688: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eI
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("627445"),
                u = n.n(a),
                o = n("917351"),
                d = n.n(o),
                c = n("759843"),
                f = n("498574"),
                E = n("446674"),
                h = n("669491"),
                I = n("77078"),
                _ = n("970728"),
                g = n("685073"),
                p = n("84339"),
                T = n("812204"),
                m = n("685665"),
                v = n("442939"),
                N = n("656038"),
                S = n("419830"),
                A = n("262362"),
                C = n("582415"),
                L = n("385042"),
                O = n("87241"),
                M = n("155996"),
                R = n("834052"),
                D = n("373469"),
                U = n("19766"),
                x = n("42203"),
                y = n("923959"),
                w = n("330154"),
                b = n("705955"),
                P = n("957255"),
                F = n("824563"),
                V = n("18494"),
                G = n("697218"),
                B = n("316133"),
                j = n("941886"),
                H = n("145131"),
                k = n("810567"),
                W = n("474571"),
                K = n("423487"),
                Y = n("599110"),
                z = n("568734"),
                Z = n("354023"),
                X = n("9294"),
                q = n("512027"),
                Q = n("234919"),
                J = n("52393"),
                $ = n("216463"),
                ee = n("474592"),
                et = n("652453"),
                en = n("470259"),
                el = n("91366"),
                ei = n("49111"),
                er = n("724210"),
                es = n("782340"),
                ea = n("435808"),
                eu = n("926622"),
                eo = n("486425"),
                ed = n("56585");
            let {
                INVITE_OPTIONS_FOREVER: ec,
                INVITE_OPTIONS_7_DAYS: ef,
                INVITE_OPTIONS_UNLIMITED: eE
            } = Z.default;
            class eh extends i.PureComponent {
                componentDidMount() {
                    let {
                        inviteChannel: e,
                        code: t,
                        guild: n,
                        source: l,
                        canCreateInvites: i,
                        analyticsLocation: r,
                        streamUserId: s,
                        targetType: a,
                        targetUserId: u,
                        application: o,
                        initialCounts: d,
                        rows: c,
                        showFriends: f,
                        modalState: E,
                        setModalState: h
                    } = this.props, {
                        maxAge: I,
                        maxUses: g,
                        temporary: p
                    } = E;
                    if (i) {
                        let n = null == e ? void 0 : e.id;
                        if (null == n) return;
                        h({
                            networkError: void 0
                        }), _.default.createInvite(n, {
                            validate: null != t ? t : null,
                            max_age: I,
                            max_uses: g,
                            target_user_id: u,
                            target_type: a,
                            target_application_id: null == o ? void 0 : o.id,
                            temporary: p
                        }, l).catch(e => h({
                            networkError: e
                        }))
                    }
                    if (f && Y.default.track(ei.AnalyticEvents.INVITE_SUGGESTION_OPENED, {
                            location: l,
                            num_suggestions: c.length,
                            num_friends: d.numFriends,
                            num_dms: d.numDms,
                            num_group_dms: d.numGroupDms,
                            guild_id: n.id
                        }), Q.default.trackExposure({
                            guildId: null == n ? void 0 : n.id,
                            location: "acc417_1"
                        }), null != s) {
                        let e = D.default.getStreamForUser(s, n.id),
                            t = (0, C.getStreamerApplication)(e, F.default);
                        Y.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Stream Invite",
                            source: l,
                            location: r,
                            other_user_id: s,
                            application_id: null != t ? t.id : null,
                            application_name: null != t ? t.name : null,
                            game_id: null != t ? t.id : null
                        })
                    } else(null == o ? void 0 : o.id) != null || Y.default.track(ei.AnalyticEvents.OPEN_MODAL, {
                        type: "Instant Invite Modal",
                        source: l,
                        location: r
                    })
                }
                componentWillUnmount() {
                    let {
                        inviteChannel: e,
                        inviteFlags: t,
                        setInviteFlags: n
                    } = this.props;
                    (0, z.hasFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE) && null != e && (n((0, z.removeFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE)), _.default.clearInviteFromStore(e.id))
                }
                getInviteKey() {
                    let {
                        code: e,
                        vanityURLCode: t,
                        guildScheduledEvent: n,
                        modalState: l
                    } = this.props, {
                        showVanityURL: i
                    } = l, r = i ? t : null != e ? e : t;
                    return null == r ? r : (0, X.generateInviteKeyFromExtraData)({
                        baseCode: r,
                        guildScheduledEventId: null == n ? void 0 : n.id
                    })
                }
                renderChannelWarning() {
                    let {
                        inviteChannel: e
                    } = this.props;
                    return (0, N.default)(e) ? (0, l.jsxs)("div", {
                        className: ea.warningContainer,
                        children: [(0, l.jsx)(K.default, {
                            className: ea.warningIcon,
                            color: h.default.unsafe_rawColors.YELLOW_300.css,
                            width: 12
                        }), (0, l.jsx)(I.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: es.default.Messages.INVITE_PRIVATE_CHANNEL_WARNING
                        })]
                    }) : null
                }
                renderHeader() {
                    let e;
                    let {
                        guild: t,
                        showFriends: n,
                        guildScheduledEvent: i,
                        streamUserId: r,
                        application: a,
                        welcomeToServer: u,
                        inviteChannel: o,
                        modalState: d,
                        handleDone: c
                    } = this.props, {
                        query: f
                    } = d, E = null, h = null;
                    if (e = u ? null : null != r ? es.default.Messages.INVITE_STREAM_HEADER : null != a ? es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: a.name
                        }) : null != i ? es.default.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == o ? void 0 : o.isGuildStageVoice()) ? es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : es.default.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        }), null != o) {
                        let e = (0, S.getChannelIconComponent)(o, t);
                        null != e && (h = (0, l.jsxs)("div", {
                            className: ea.headerChannelContainer,
                            children: [(0, l.jsx)(e, {
                                className: ea.channelIcon
                            }), (0, l.jsx)(I.Text, {
                                color: "interactive-normal",
                                variant: "text-md/normal",
                                children: o.name
                            })]
                        }))
                    }
                    return E = t.hasFeature(ei.GuildFeatures.HUB) ? (0, l.jsxs)("div", {
                        className: ea.hubHeader,
                        children: [(0, l.jsx)(I.Heading, {
                            className: s(ea.hubInviteTitle, ea.headerCloseButtonSpacing),
                            id: this._headerId,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: es.default.Messages.HUB_INVITE_HEADER
                        }), (0, l.jsx)(I.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: es.default.Messages.HUB_INVITE_SUBHEADER
                        }), n && (0, l.jsx)(k.default, {
                            query: f,
                            className: ea.hubFriendSearch,
                            onChange: this.handleQueryChange,
                            placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            "aria-label": es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        })]
                    }) : n ? (0, l.jsxs)("div", {
                        className: ea.header,
                        children: [(0, l.jsx)("div", {
                            className: ea.headerTopRow,
                            children: (0, l.jsx)(I.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: s(eu.marginBottom4, ea.headerCloseButtonSpacing, ea.headerText),
                                children: e
                            })
                        }), h, (0, l.jsx)(k.default, {
                            query: f,
                            className: ea.searchBar,
                            onChange: this.handleQueryChange,
                            placeholder: es.default.Messages.INVITE_SEARCH_FOR_FRIENDS,
                            autoFocus: !0,
                            onClear: this.handleClearSearch
                        }), (0, l.jsx)("div", {
                            className: eu.marginTop8,
                            children: this.renderChannelWarning()
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(I.FormTitle, {
                            id: this._headerId,
                            tag: "h2",
                            className: s(eu.marginReset, ea.headerCloseButtonSpacing, ea.headerText),
                            children: e
                        }), h, this.renderChannelWarning()]
                    }), (0, l.jsxs)(I.ModalHeader, {
                        separator: n,
                        children: [(0, l.jsx)(I.ModalCloseButton, {
                            className: ea.closeButton,
                            onClick: c
                        }), (0, l.jsxs)("div", {
                            className: ea.headerContainer,
                            children: [u && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("img", {
                                    className: ea.welcomeImage,
                                    src: ed,
                                    alt: ""
                                }), (0, l.jsx)(I.H, {
                                    className: ea.welcomeHeading,
                                    children: es.default.Messages.INVITE_WELCOME_HEADING
                                }), (0, l.jsx)("p", {
                                    className: ea.welcomeSubheading,
                                    children: es.default.Messages.INVITE_WELCOME_SUBHEADING
                                })]
                            }), null != r ? (0, l.jsx)(L.default, {}) : null, E]
                        })]
                    })
                }
                renderFriendsBody() {
                    let {
                        rows: e
                    } = this.props, t = this.getInviteKey();
                    return 0 === e.length ? (0, l.jsx)(I.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, l.jsx)(j.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                        })
                    }) : null == t ? (0, l.jsx)(I.ModalContent, {
                        className: s(ea.inviteRowEmptyState),
                        children: (0, l.jsx)(j.EmptyStateText, {
                            children: es.default.Messages.INVITE_FRIEND_MODAL_LOADING
                        })
                    }) : (0, l.jsx)(I.ModalListContent, {
                        className: ea.scroller,
                        sections: [e.length],
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        paddingBottom: 16
                    })
                }
                renderSection() {
                    return null
                }
                renderBody() {
                    var e;
                    let {
                        guild: t,
                        showFriends: n,
                        streamUserId: i,
                        application: r
                    } = this.props;
                    if (n) return this.renderFriendsBody();
                    let s = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
                        a = G.default.getCurrentUser();
                    u(null != a, "InstantInviteModal: user cannot be undefined");
                    let o = t.isOwner(a),
                        d = o ? es.default.Messages.INVITE_SHARE_LINK_OWN_SERVER : es.default.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                    return null != i ? d = es.default.Messages.INVITE_SHARE_LINK_TO_STREAM : null != r && (d = es.default.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY), (0, l.jsx)(I.ModalContent, {
                        className: ea.noScroll,
                        children: (0, l.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: eu.marginBottom20,
                            children: [(0, l.jsx)(I.Text, {
                                className: ea.subText,
                                variant: "text-sm/normal",
                                children: d
                            }), (0, l.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: s
                            })]
                        })
                    })
                }
                renderFooter() {
                    var e;
                    let {
                        noInvitesAvailable: t,
                        showFriends: n,
                        guildScheduledEvent: i,
                        streamUserId: r,
                        application: a,
                        inviteChannel: u,
                        modalState: o
                    } = this.props, {
                        maxAge: d
                    } = o, c = null, f = (0, J.default)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                    if (n) {
                        let e = es.default.Messages.INVITE_FOOTER_LINK_HEADER;
                        null != r ? e = es.default.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != a ? e = es.default.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != i ? e = es.default.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == u ? void 0 : u.isGuildStageVoice()) && (e = es.default.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER), c = (0, l.jsxs)(H.default, {
                            direction: H.default.Direction.VERTICAL,
                            className: ea.content,
                            children: [(0, l.jsx)(I.FormTitle, {
                                tag: "h5",
                                className: eu.marginBottom8,
                                children: e
                            }), (0, l.jsx)(et.InviteCopyInput, {
                                ...this.props,
                                copyValue: f
                            })]
                        })
                    } else !t && (c = (0, l.jsxs)(H.default, {
                        justify: H.default.Justify.BETWEEN,
                        className: eu.marginTop20,
                        children: [(0, l.jsx)(I.Checkbox, {
                            size: 18,
                            type: I.Checkbox.Types.INVERTED,
                            value: d === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, l.jsx)(I.Text, {
                                className: ea.checkBoxLabel,
                                variant: "text-sm/normal",
                                children: es.default.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                            })
                        }), (0, l.jsx)(I.Tooltip, {
                            text: es.default.Messages.LINK_SETTINGS,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, l.jsx)(I.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eo.cursorPointer,
                                    children: (0, l.jsx)(W.default, {
                                        width: 18,
                                        height: 18,
                                        color: h.default.unsafe_rawColors.PRIMARY_400.css
                                    })
                                })
                            }
                        })]
                    }));
                    return null != c ? (0, l.jsx)(I.ModalFooter, {
                        className: s({
                            [ea.noPadding]: !n,
                            [ea.footer]: n
                        }),
                        children: c
                    }) : null
                }
                getModalContent() {
                    let {
                        modalState: e,
                        handleDone: t
                    } = this.props, {
                        currentPage: n
                    } = e;
                    switch (n) {
                        case el.InstantInviteModalPages.MAIN:
                            return (0, l.jsxs)(l.Fragment, {
                                children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                            });
                        case el.InstantInviteModalPages.SETTINGS:
                            return (0, l.jsx)(ee.InstantInviteSettingsPage, {
                                ...this.props,
                                headerId: this._headerId,
                                onSelectMaxAge: this.handleSelectMaxAge,
                                onSelectMaxUses: this.handleSelectMaxUses,
                                onToggleTemporary: this.handleToggleTemporary,
                                handleDone: t
                            });
                        case el.InstantInviteModalPages.GUEST:
                            var i;
                            let r = (0, J.default)(null !== (i = this.getInviteKey()) && void 0 !== i ? i : "");
                            return (0, l.jsx)($.InstantInviteGuestPage, {
                                ...this.props,
                                headerId: this._headerId,
                                handleDone: t,
                                copyValue: r
                            });
                        default:
                            return null
                    }
                }
                render() {
                    let {
                        transitionState: e,
                        inviteChannel: t,
                        guild: n
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: this.props.showFriends ? ea.wrapper : void 0,
                        children: (0, l.jsx)(I.ModalRoot, {
                            impression: {
                                impressionName: c.ImpressionNames.GUILD_INVITE,
                                impressionProperties: {
                                    invite_channel_id: null == t ? void 0 : t.id,
                                    invite_guild_id: n.id
                                }
                            },
                            "aria-labelledby": this._headerId,
                            transitionState: e,
                            className: ea.modal,
                            children: this.getModalContent()
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._headerId = d.uniqueId(), this.openSettings = () => {
                        let {
                            changePage: e
                        } = this.props;
                        e(el.InstantInviteModalPages.SETTINGS)
                    }, this.handleSelectMaxAge = e => {
                        let {
                            modalState: t,
                            setModalState: n
                        } = this.props;
                        n({
                            maxAge: e,
                            savedMaxAge: t.maxAge
                        })
                    }, this.handleSelectMaxUses = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            maxUses: e
                        })
                    }, this.handleToggleTemporary = e => {
                        let {
                            setModalState: t
                        } = this.props;
                        t({
                            temporary: e
                        })
                    }, this.handleToggleGuest = e => {
                        let {
                            inviteFlags: t,
                            setInviteFlags: n
                        } = this.props;
                        n((0, z.setFlag)(t, f.GuildInviteFlags.IS_GUEST_INVITE, e))
                    }, this.handleQueryChange = e => {
                        var t;
                        let {
                            setModalState: n
                        } = this.props;
                        null === (t = this._scroller) || void 0 === t || t.scrollTo({
                            to: 0
                        }), (0, g.searchInviteSuggestions)(e), n({
                            query: e
                        })
                    }, this.handleClearSearch = () => {
                        this.handleQueryChange("")
                    }, this.handleToggleMaxAge = () => {
                        let {
                            modalState: e,
                            setModalState: t
                        } = this.props, {
                            maxAge: n,
                            savedMaxAge: l
                        } = e;
                        t({
                            maxAge: l,
                            savedMaxAge: n
                        })
                    }, this.getRowHeight = (e, t) => {
                        if (e > 0) return 0;
                        let n = this.props.rows[t];
                        switch (n.type) {
                            case Z.RowTypes.CHANNEL:
                            case Z.RowTypes.GROUP_DM:
                            case Z.RowTypes.DM:
                            case Z.RowTypes.FRIEND:
                                return en.INVITE_ROW_HEIGHT;
                            default:
                                return 0
                        }
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let {
                            analyticsLocation: i
                        } = this.props, r = this.getInviteKey(), s = this.props.rows[n], a = "".concat(s.type, "-").concat(s.item.id);
                        switch (s.type) {
                            case Z.RowTypes.GROUP_DM:
                            case Z.RowTypes.CHANNEL:
                                return (0, l.jsx)(en.InviteRow, {
                                    row: s,
                                    channel: s.item,
                                    inviteKey: r,
                                    location: i
                                }, a);
                            case Z.RowTypes.DM:
                            case Z.RowTypes.FRIEND:
                                return (0, l.jsx)(en.InviteRow, {
                                    row: s,
                                    user: s.item,
                                    inviteKey: r,
                                    location: i
                                }, a);
                            default:
                                return null
                        }
                    }
                }
            }
            eh.defaultProps = {
                analyticsLocation: ei.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                defaultMaxAge: ef.value
            };
            var eI = i.forwardRef(function(e, t) {
                var n, r, s, a;
                let {
                    channel: u,
                    guild: o,
                    source: d,
                    guildScheduledEvent: c,
                    streamUserId: h,
                    applicationId: I,
                    transitionState: S,
                    onClose: C,
                    welcomeToServer: L,
                    page: D,
                    analyticsLocation: F
                } = e, [G, j] = i.useState(D === el.InstantInviteModalPages.GUEST ? f.GuildInviteFlags.IS_GUEST_INVITE : 0), {
                    AnalyticsLocationProvider: H,
                    analyticsLocations: k
                } = (0, m.default)(T.default.INSTANT_INVITE_MODAL), W = (0, E.useStateFromStores)([x.default, V.default], () => {
                    let e = V.default.getVoiceChannelId();
                    if (null == e) return null;
                    let t = x.default.getChannel(e);
                    return (null == t ? void 0 : t.guild_id) === o.id ? t : null
                }), K = null != W && !(0, N.default)(W) && [ei.InstantInviteSources.GUILD_CONTEXT_MENU, ei.InstantInviteSources.GUILD_HEADER].includes(d), Y = (0, M.default)(o.id), Z = (0, E.useStateFromStores)([V.default, x.default, y.default], () => {
                    if (K && ((0, z.hasFlag)(G, f.GuildInviteFlags.IS_GUEST_INVITE) || D === el.InstantInviteModalPages.GUEST)) return W;
                    if (D === el.InstantInviteModalPages.GUEST) return 1 === Y.length ? Y[0] : void 0;
                    if (null != u) return u;
                    let e = V.default.getChannelId(),
                        t = null == e || (0, er.isStaticChannelRoute)(e) ? void 0 : x.default.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = x.default.getChannel(t.parent_id)), null != t ? t : y.default.getDefaultChannel(o.id, !0, ei.Permissions.CREATE_INSTANT_INVITE)
                }, [K, G, D, u, o.id, W, Y]), [X, Q] = i.useState(null), J = null != X ? X : Z, $ = null;
                null != h ? $ = el.InviteTargetTypes.STREAM : null != I && ($ = el.InviteTargetTypes.EMBEDDED_APPLICATION);
                let ee = null != u ? u.getGuildId() : null != o ? o.id : null,
                    et = (0, E.useStateFromStores)([w.default], () => {
                        let e = null != J ? J.id : null;
                        return null == e ? null : w.default.getInvite(e, {
                            targetType: $,
                            targetUserId: h,
                            targetApplicationId: I
                        })
                    }, [J, $, h, I]),
                    [en, es, ea, eu, eo] = (0, E.useStateFromStoresArray)([b.default, B.default, U.default], () => {
                        let e = null != J ? J.id : null;
                        return [b.default.getInviteSuggestionRows(), b.default.getTotalSuggestionsCount() >= 1, b.default.getInitialCounts(), null != u && null != J ? B.default.getVoiceStatesForChannel(J) : null, null != ee ? U.default.getProps(ee, e) : null]
                    }, [J, u, ee]),
                    ed = (0, E.useStateFromStores)([P.default], () => null != J && P.default.can(ei.Permissions.CREATE_INSTANT_INVITE, J), [J]),
                    eI = null === et || !ed,
                    [e_] = i.useState(() => {
                        let e = new Set;
                        return null != h && null != eu ? eu.forEach(t => {
                            let {
                                user: n
                            } = t;
                            e.add(n.id)
                        }) : null != ee && null != eo && $ !== el.InviteTargetTypes.EMBEDDED_APPLICATION && eo.rows.forEach(t => {
                            t.type === U.MemberListRowTypes.MEMBER && e.add(t.userId)
                        }), e
                    }),
                    eg = null == u ? void 0 : u.id,
                    ep = (0, E.useStateFromStores)([R.default], () => R.default.getStageInstanceByChannel(eg), [eg]);
                i.useEffect(() => {
                    (0, g.loadInviteSuggestions)({
                        omitUserIds: e_,
                        guild: o,
                        channel: u,
                        applicationId: I,
                        inviteTargetType: $
                    }).catch(ei.NOOP_NULL)
                }, [e_, u, o, I, $]);
                let [eT] = (0, v.default)(null != I ? [I] : []), em = (0, A.default)({
                    guildId: ee
                }), ev = null != et ? et.code : void 0, eN = null == et ? void 0 : et.maxAge, eS = null == et ? void 0 : et.maxUses, eA = null == et ? void 0 : et.temporary, eC = o.vanityURLCode, eL = null != eC && eC.length > 0, {
                    enabled: eO
                } = q.default.useExperiment({
                    guildId: null !== (s = null !== (r = null !== (n = o.id) && void 0 !== n ? n : null == et ? void 0 : et.guild.id) && void 0 !== r ? r : ee) && void 0 !== s ? s : "",
                    location: "acc417_2"
                }, {
                    autoTrackExposure: eL
                }), eM = eO && !(null == J ? void 0 : J.isGuildVocal()) && eL, eR = (null == J ? void 0 : J.type) === ei.ChannelTypes.GUILD_VOICE, eD = (0, N.default)(J);
                !ed && (null == ep ? void 0 : ep.invite_code) != null && (ev = ep.invite_code);
                let [eU, ex] = i.useState({
                    query: "",
                    maxAge: null !== (a = null != eN ? eN : em) && void 0 !== a ? a : ef.value,
                    savedMaxAge: eN === ec.value ? null != em ? em : ef.value : ec.value,
                    maxUses: null != eS && 0 !== eS ? eS : eE.value,
                    temporary: null != eA && eA,
                    networkError: void 0,
                    showVanityURL: eM,
                    currentPage: null != D ? D : el.InstantInviteModalPages.MAIN,
                    lastPage: void 0
                }), ey = i.useCallback(e => {
                    ex(t => ({
                        ...t,
                        ...e
                    }))
                }, []), ew = i.useCallback(e => {
                    ey({
                        currentPage: e,
                        lastPage: eU.currentPage
                    })
                }, [eU.currentPage, ey]), eb = (eR || K) && D !== el.InstantInviteModalPages.GUEST && !eM && !eI && !eD, {
                    enabled: eP
                } = O.GuestVoiceInvitesExperiment.useExperiment({
                    guildId: null == o ? void 0 : o.id,
                    location: "acc417_3"
                }, {
                    autoTrackExposure: eb
                }), {
                    maxAge: eF,
                    maxUses: eV,
                    temporary: eG,
                    savedMaxAge: eB
                } = eU, ej = i.useCallback(() => {
                    let {
                        currentPage: e,
                        lastPage: t
                    } = eU;
                    e === el.InstantInviteModalPages.SETTINGS && null != t ? ew(t) : C()
                }, [ew, eU, C]), eH = i.useCallback(() => {
                    let e = null == J ? void 0 : J.id;
                    0 === eV && 0 === eF && !eG && eM ? ey({
                        networkError: void 0,
                        showVanityURL: !0
                    }) : null != e && (ey({
                        networkError: void 0,
                        showVanityURL: !1
                    }), _.default.createInvite(e, {
                        max_age: eF,
                        max_uses: eV,
                        target_type: $,
                        target_user_id: h,
                        target_application_id: null == eT ? void 0 : eT.id,
                        temporary: eG,
                        flags: G
                    }, d).catch(e => ey({
                        networkError: e,
                        showVanityURL: eM
                    }))), eF !== ec.value && eB !== ec.value && ey({
                        savedMaxAge: ec.value
                    })
                }, [eM, J, d, null == eT ? void 0 : eT.id, $, h, eF, eV, eG, G, ey, eB]), ek = (0, p.default)(J), eW = (0, p.default)(G), eK = ek !== J, eY = eW !== G;
                return i.useEffect(() => {
                    (eK || eY) && eH()
                }, [eH, eK, eY]), (0, l.jsx)(H, {
                    children: (0, l.jsx)(eh, {
                        ref: t,
                        canCreateInvites: ed,
                        noInvitesAvailable: eI,
                        inviteChannel: J,
                        guild: o,
                        guildScheduledEvent: c,
                        streamUserId: h,
                        vanityURLCode: eC,
                        targetType: $,
                        targetUserId: h,
                        application: eT,
                        rows: en,
                        showFriends: es,
                        initialCounts: ea,
                        code: ev,
                        source: d,
                        welcomeToServer: L,
                        analyticsLocations: k,
                        analyticsLocation: F,
                        transitionState: S,
                        onClose: C,
                        canShowVanityURL: eM,
                        isGuestInviteCreationToggleEnabled: eP && eb,
                        shouldHideTemporaryInviteToggle: eP && eb || D === el.InstantInviteModalPages.GUEST,
                        modalState: eU,
                        setModalState: ey,
                        changePage: ew,
                        onGenerateNewLink: eH,
                        inviteFlags: G,
                        setInviteFlags: j,
                        showGuestInviteToggleForCurrentVoiceChannel: K,
                        setInviteChannel: Q,
                        handleDone: ej
                    })
                })
            })
        },
        216463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteGuestPage: function() {
                    return I
                }
            }), n("808653");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                u = n("155996"),
                o = n("41594"),
                d = n("652453"),
                c = n("782340"),
                f = n("435808"),
                E = n("926622");
            let h = e => {
                    let {
                        guild: t,
                        inviteChannel: n,
                        setInviteChannel: r
                    } = e, s = (0, u.default)(t.id), d = i.useMemo(() => s.reduce((e, t) => ({
                        ...e,
                        [t.id]: t
                    }), {}), [s]), f = i.useMemo(() => Object.values(d).map(e => ({
                        value: e.id,
                        label: e.name
                    })), [d]);
                    return (0, l.jsx)(a.SearchableSelect, {
                        options: f,
                        value: null == n ? void 0 : n.id,
                        onChange: e => {
                            r(d[e])
                        },
                        placeholder: c.default.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
                        renderOptionPrefix: e => {
                            if (null == e) return null;
                            let n = e.value,
                                i = d[n];
                            return null == i ? null : (0, l.jsx)(o.ChannelItemIcon, {
                                channel: i,
                                guild: t
                            })
                        }
                    })
                },
                I = e => {
                    let {
                        handleDone: t,
                        headerId: n,
                        inviteChannel: i,
                        copyValue: r
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(a.ModalHeader, {
                            children: [(0, l.jsx)(a.ModalCloseButton, {
                                className: f.closeButton,
                                onClick: t
                            }), (0, l.jsx)("div", {
                                className: f.headerContainer,
                                children: (0, l.jsx)(a.FormTitle, {
                                    id: n,
                                    tag: "h2",
                                    className: s(E.marginReset, f.headerCloseButtonSpacing, f.headerText),
                                    children: c.default.Messages.INVITE_A_GUEST_VOICE_ONLY
                                })
                            })]
                        }), (0, l.jsx)(a.ModalContent, {
                            className: f.noScroll,
                            children: (0, l.jsxs)("div", {
                                className: f.guestBody,
                                children: [(0, l.jsx)(a.Text, {
                                    tag: "div",
                                    variant: "heading-sm/normal",
                                    color: "header-secondary",
                                    children: c.default.Messages.INVITE_A_GUEST_EXPLANATION
                                }), (0, l.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: f.guestSelectChannelHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_1
                                }), (0, l.jsx)(h, {
                                    ...e
                                }), (0, l.jsx)(a.FormTitle, {
                                    tag: "h5",
                                    className: f.guestSendInviteLinkHeader,
                                    children: c.default.Messages.INVITE_A_GUEST_STEP_2
                                }), (0, l.jsx)(d.InviteCopyInput, {
                                    ...e,
                                    copyValue: null == i ? "" : r,
                                    disabled: null == i
                                })]
                            })
                        })]
                    })
                }
        },
        825691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                u = n("272091"),
                o = n("577617"),
                d = n("255070"),
                c = n("354023"),
                f = n("849366"),
                E = n("782340"),
                h = n("911011"),
                I = n("926622");
            let _ = c.default.getMaxAgeOptions;

            function g(e) {
                let {
                    temporary: t,
                    shouldHide: n,
                    onToggleTemporary: i
                } = e;
                return n ? (0, l.jsx)("div", {
                    className: I.marginTop20
                }) : (0, l.jsx)(a.FormItem, {
                    className: s(I.marginTop20, h.switch),
                    children: (0, l.jsx)(a.FormSwitch, {
                        value: t,
                        onChange: e => i(e),
                        note: E.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: E.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let p = c.default.getMaxUsesOptions;

            function T(e) {
                var t;
                let {
                    guildId: n,
                    shouldHideTemporaryInviteToggle: r,
                    maxAge: c,
                    maxUses: T,
                    temporary: m,
                    onGenerateNewLink: v,
                    onToggleTemporary: N,
                    onSelectMaxAge: S,
                    onSelectMaxUses: A
                } = e, C = (0, u.default)(n, 0 === c), L = (0, u.default)(n, !0), O = (0, f.default)(n), M = O.find(e => e.value === c), R = p.find(e => e.value === T), [D, U] = i.useState(!1), x = (0, u.useIsNewCommunity)(n, D);
                return (0, l.jsx)("div", {
                    className: h.settingsContent,
                    children: (0, l.jsxs)("form", {
                        onSubmit: v,
                        children: [(0, l.jsx)(a.FormItem, {
                            title: E.default.Messages.EXPIRE_AFTER,
                            className: I.marginTop20,
                            children: (0, l.jsx)(a.SingleSelect, {
                                value: null !== (t = null == M ? void 0 : M.value) && void 0 !== t ? t : _[0].value,
                                options: O,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, o.renderOption)(e, t && L, t && x)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, o.renderOption)(t, n && L, n && x)
                                },
                                onChange: S,
                                optionClassName: h.option,
                                className: h.option,
                                maxVisibleItems: 8
                            })
                        }), C ? (0, l.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === c,
                            onClick: () => U(!0)
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(a.FormItem, {
                                title: E.default.Messages.MAX_NUMBER_OF_USES,
                                className: s(I.marginTop20, I.marginBottom4),
                                children: (0, l.jsx)(a.SingleSelect, {
                                    value: null == R ? void 0 : R.value,
                                    options: p,
                                    onChange: A
                                })
                            }), (0, l.jsx)(g, {
                                temporary: m,
                                shouldHide: C || r,
                                onToggleTemporary: N
                            })]
                        })]
                    })
                })
            }
        },
        339485: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("819855"),
                s = n("77078"),
                a = n("272091"),
                u = n("782340");

            function o(e) {
                let {
                    guildId: t,
                    maxAge: n,
                    onConfirm: o,
                    onDismiss: d,
                    theme: c
                } = e, f = (0, a.default)(t, 0 === n);
                return (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(s.Button, {
                        onClick: o,
                        disabled: f,
                        children: u.default.Messages.GENERATE_A_NEW_LINK
                    }), (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: (0, r.isThemeLight)(c) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE,
                        onClick: d,
                        children: u.default.Messages.CANCEL
                    })]
                })
            }
        },
        474592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InstantInviteSettingsPage: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                a = n("841098"),
                u = n("825691"),
                o = n("339485"),
                d = n("782340"),
                c = n("435808"),
                f = n("926622");
            let E = e => {
                let {
                    handleDone: t,
                    headerId: n,
                    modalState: i,
                    shouldHideTemporaryInviteToggle: E,
                    onGenerateNewLink: h,
                    onToggleTemporary: I,
                    onSelectMaxAge: _,
                    onSelectMaxUses: g,
                    guild: p
                } = e, T = (0, a.default)(), {
                    maxAge: m,
                    maxUses: v,
                    temporary: N
                } = i;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(s.ModalHeader, {
                        children: [(0, l.jsx)(s.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: t
                        }), (0, l.jsx)("div", {
                            className: c.headerContainer,
                            children: (0, l.jsx)(s.FormTitle, {
                                id: n,
                                tag: "h2",
                                className: r(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
                                children: d.default.Messages.INVITE_SETTINGS_TITLE
                            })
                        })]
                    }), (0, l.jsx)(u.default, {
                        guildId: p.id,
                        shouldHideTemporaryInviteToggle: E,
                        maxAge: m,
                        maxUses: v,
                        temporary: N,
                        onToggleTemporary: I,
                        onSelectMaxAge: _,
                        onSelectMaxUses: g,
                        onGenerateNewLink: h
                    }), (0, l.jsx)(s.ModalFooter, {
                        className: c.settingsFooter,
                        children: (0, l.jsx)(o.default, {
                            guildId: null == p ? void 0 : p.id,
                            maxAge: m,
                            theme: T,
                            onConfirm: () => {
                                h(), t()
                            },
                            onDismiss: t
                        })
                    })]
                })
            }
        },
        470259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVITE_ROW_HEIGHT: function() {
                    return m
                },
                InviteRow: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("819855"),
                s = n("77078"),
                a = n("148387"),
                u = n("843962"),
                o = n("679653"),
                d = n("161778"),
                c = n("305961"),
                f = n("705955"),
                E = n("27618"),
                h = n("697218"),
                I = n("315102"),
                _ = n("159885"),
                g = n("158998"),
                p = n("782340"),
                T = n("435808");
            let m = 44;
            class v extends i.Component {
                shouldComponentUpdate(e, t) {
                    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
                }
                renderUserOrChannel() {
                    let e, t, n;
                    let {
                        user: i,
                        channel: r
                    } = this.props;
                    if (null != i) t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32), n = g.default.getName(i);
                    else if (null != r && (t = (0, u.getChannelIconURL)(r), n = (0, o.computeChannelName)(r, h.default, E.default), null == t && null != r.guild_id)) {
                        let n = c.default.getGuild(r.guild_id);
                        null != n && (null != n.icon ? t = I.default.getGuildIconURL({
                            id: r.guild_id,
                            icon: n.icon,
                            size: 32
                        }) : e = (0, _.getAcronym)(n.name))
                    }
                    if (null == t || null == n) return null != e ? (0, l.jsx)("div", {
                        className: T.acronym,
                        "aria-hidden": !0,
                        children: e
                    }) : null;
                    return (0, l.jsx)(s.Avatar, {
                        src: t,
                        "aria-label": n,
                        size: s.AvatarSizes.SIZE_32,
                        className: T.inviteRowAvatar
                    })
                }
                render() {
                    let e;
                    let {
                        user: t,
                        channel: n
                    } = this.props, {
                        sending: i,
                        invited: a,
                        hovered: u
                    } = this.state;
                    return e = a ? (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        size: s.Button.Sizes.SMALL,
                        disabled: !0,
                        color: (0, r.isThemeDark)(d.default.theme) ? s.Button.Colors.WHITE : s.Button.Colors.BLACK,
                        children: p.default.Messages.INVITE_FRIEND_MODAL_SENT
                    }) : (0, l.jsx)(s.Button, {
                        color: s.Button.Colors.GREEN,
                        look: u ? s.Button.Looks.FILLED : s.Button.Looks.OUTLINED,
                        className: T.inviteRowButton,
                        size: s.Button.Sizes.SMALL,
                        submitting: i,
                        onClick: this.handleClickInvite,
                        children: p.default.Messages.INVITE_FRIEND_MODAL_INVITE
                    }), (0, l.jsxs)("div", {
                        className: T.inviteRow,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: [(0, l.jsxs)("div", {
                            className: T.inviteRowInfo,
                            children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
                                className: T.inviteRowName,
                                children: [g.default.getName(t), null != n ? (0, o.computeChannelName)(n, h.default, E.default, !0) : null]
                            })]
                        }), e]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        sending: !1,
                        invited: !1,
                        hovered: !1
                    }, this.handleMouseEnter = () => {
                        this.setState({
                            hovered: !0
                        })
                    }, this.handleMouseLeave = () => {
                        this.setState({
                            hovered: !1
                        })
                    }, this.getSuggestedProps = () => {
                        var e;
                        let {
                            row: t
                        } = this.props;
                        return null !== (e = null != t ? f.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
                    }, this.handleClickInvite = () => {
                        let {
                            user: e,
                            channel: t,
                            inviteKey: n,
                            location: l
                        } = this.props;
                        null != n && (null != t ? (this.setState({
                            sending: !0
                        }), a.default.enqueue({
                            type: a.InvitePropertiesType.GROUP_DM,
                            channel: t,
                            inviteKey: n,
                            location: l,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })) : null != e && (this.setState({
                            sending: !0
                        }), a.default.enqueue({
                            type: a.InvitePropertiesType.USER,
                            user: e,
                            inviteKey: n,
                            location: l,
                            suggested: this.getSuggestedProps()
                        }, e => {
                            this.setState({
                                sending: !1,
                                invited: e
                            })
                        })))
                    }
                }
            }
        },
        849366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("65597"),
                i = n("708730"),
                r = n("305961"),
                s = n("354023"),
                a = n("49111");

            function u(e) {
                let t = (0, l.default)([r.default], () => r.default.getGuild(e), [e]),
                    n = (0, i.useIsInGrowingFriendGuildCommunityUpsellExperiment)(e),
                    u = s.default.getMaxAgeOptions;
                return !n || (null == t ? void 0 : t.hasFeature(a.GuildFeatures.COMMUNITY)) ? u.filter(e => (null == e ? void 0 : e.value) !== s.default.INVITE_OPTIONS_30_DAYS.value) : u
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var l = n("65597"),
                i = n("862205"),
                r = n("697218"),
                s = n("719923"),
                a = n("782340");
            let u = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                o = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: l,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: a,
                        collectOffOverride: u
                    } = n, o = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: !u && (o ? l : r),
                        autoUnfurlReactionTooltip: a
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : o({
                        user: t,
                        config: u.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, l.default)([r.default], () => r.default.getCurrentUser()), s = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: f
                    } = o({
                        user: i,
                        config: s
                    }), E = a && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescriptionLine1: () => null,
                        getNewSettingsDescriptionLine2: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 4,
                        label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
                    }
                }
        },
        45395: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = {
                    open() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("79536").then(n.bind(n, "79536"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        })
                    }
                }
        },
        846325: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return r
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return s
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return o
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                },
                NUM_RECENTLY_HEARD_SOUNDS: function() {
                    return f
                },
                NUM_FREQUENTLY_USED_SOUNDS: function() {
                    return E
                }
            }), n("222007");
            let r = 32,
                s = 5,
                a = "DEFAULT";
            (i = l || (l = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED";
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                o = "ctrl+`",
                d = [],
                c = "0",
                f = 6,
                E = 6
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007"), n("424973"), n("834022");
            var l, i, r = n("917351"),
                s = n.n(r),
                a = n("446674"),
                u = n("913144"),
                o = n("845579"),
                d = n("374363"),
                c = n("697218"),
                f = n("599110"),
                E = n("829536"),
                h = n("846325"),
                I = n("49111"),
                _ = n("397336");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let g = new Map,
                p = new Map,
                T = new Set,
                m = 0,
                v = 0,
                N = new Set,
                S = new Map,
                A = !1;

            function C(e) {
                let {
                    sound: t
                } = e, n = g.get(t.guildId), l = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != l && -1 !== l ? (n[l] = t, g.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), g.set(t.guildId, [...n]))
            }
            let L = s.debounce(e => {
                f.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function O(e) {
                var t, n;
                let l = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(l)) t.soundboardMuted ? T.add(e) : T.delete(e);
                for (let e of T.keys()) null == l[e] && T.delete(e)
            }
            class M extends a.default.Store {
                initialize() {
                    this.waitFor(d.default), O(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(g),
                        favoritedSoundIds: Array.from(N),
                        localSoundboardMutes: Array.from(T)
                    }
                }
                getSounds() {
                    return g
                }
                getSoundsForGuild(e) {
                    return g.get(e)
                }
                getSound(e, t) {
                    var n;
                    let l = null !== (n = g.get(e)) && void 0 !== n ? n : [];
                    return l.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(g.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === v
                }
                isFetchingDefaultSounds() {
                    return 1 === m
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === m
                }
                hasFetchedDefaultSounds() {
                    return 2 === m
                }
                isUserPlayingSounds(e) {
                    let t = S.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != p.get(e)
                }
                isFavoriteSound(e) {
                    return N.has(e)
                }
                getFavorites() {
                    return N
                }
                isLocalSoundboardMuted(e) {
                    return T.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return A
                }
                hasFetchedAllSounds() {
                    return 2 === v && 2 === m
                }
            }
            M.displayName = "SoundboardStore";
            var R = new M(u.default, {
                LOGOUT: function() {
                    g.clear(), p.clear(), S.clear(), A = !1, v = 0, m = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    v = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: C,
                GUILD_SOUNDBOARD_SOUND_UPDATE: C,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    g.delete(t);
                    let l = g.get(n),
                        i = null == l ? void 0 : l.findIndex(e => e.soundId === t);
                    null != l && null != i && !(i < 0) && (l.splice(i, 1), g.set(n, [...l]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, l;
                    let {
                        soundId: i,
                        userId: r
                    } = e, s = (null !== (n = p.get(i)) && void 0 !== n ? n : 0) + 1, a = (null !== (l = S.get(r)) && void 0 !== l ? l : 0) + 1;
                    p.set(i, s), S.set(r, a), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: l,
                        userId: i
                    } = e, r = (null !== (t = p.get(l)) && void 0 !== t ? t : 0) - 1, s = (null !== (n = S.get(i)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? p.delete(l) : p.set(l, r), s <= 0 ? S.delete(i) : S.set(i, s)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    L(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    p.clear(), S.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: l
                    } = t;
                    if (n === _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, r;
                        N = new Set(null !== (r = null == l ? void 0 : null === (i = l.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== r ? r : [])
                    } else n === _.UserSettingsTypes.PRELOADED_USER_SETTINGS && O(l)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    m = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    g.set(h.DEFAULT_SOUND_GUILD_ID, t), m = 2
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        g.set(t, n)
                    }), v = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    g.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    T.has(t) ? T.delete(t) : T.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    g = new Map(Object.entries(t.soundboardSounds)), N = new Set(t.favoritedSoundIds), T = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    g.set(t, n)
                }
            })
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return o
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var l, i, r = n("991170"),
                s = n("719923"),
                a = n("24373"),
                u = n("49111");
            (l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let o = (e, t, n) => {
                    if (null == t) return 2;
                    let l = s.default.canUseCustomStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) return 0;
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? l ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === o(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973");
            var l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                s = n("913144"),
                a = n("80507"),
                u = n("374363"),
                o = n("364685"),
                d = n("49111"),
                c = n("397336");
            let f = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let E = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => o.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                h = () => {
                    o.default.isLoaded && E.compute()
                },
                I = () => {
                    h()
                };

            function _() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class g extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (f = e), this.syncWith([o.default], I), this.syncWith([u.default], _)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            g.displayName = "StickersPersistedStore", g.persistKey = "StickersPersistedStoreV2";
            var p = new g(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), h()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("702976");
            var l, i = n("866227"),
                r = n.n(i),
                s = n("666038");
            l = class e extends s.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: r(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        19766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EVERYONE_ID: function() {
                    return A
                },
                MemberListRowTypes: function() {
                    return l
                },
                default: function() {
                    return b
                }
            }), n("808653"), n("424973"), n("222007");
            var l, i, r = n("917351"),
                s = n.n(r),
                a = n("210696"),
                u = n.n(a),
                o = n("316693"),
                d = n("446674"),
                c = n("913144"),
                f = n("991170"),
                E = n("373469"),
                h = n("271938"),
                I = n("42203"),
                _ = n("525065"),
                g = n("26989"),
                p = n("305961"),
                T = n("824563"),
                m = n("101125"),
                v = n("697218"),
                N = n("49111"),
                S = n("782340");
            let A = "everyone";

            function C(e, t, n, l) {
                switch (t) {
                    case N.StatusTypes.ONLINE:
                    case N.StatusTypes.OFFLINE:
                    case N.StatusTypes.UNKNOWN:
                        return {
                            type: "GROUP", key: t, id: t, get title() {
                                switch (t) {
                                    case N.StatusTypes.ONLINE:
                                        return S.default.Messages.STATUS_ONLINE;
                                    case N.StatusTypes.OFFLINE:
                                        return S.default.Messages.STATUS_OFFLINE;
                                    default:
                                        return S.default.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: l
                        };
                    default:
                        let i = p.default.getGuild(e),
                            r = null != i ? i.getRole(t) : null;
                        return {
                            type: "GROUP", key: t, id: t, title: null != r ? r.name : "", count: n, index: l
                        }
                }
            }

            function L(e, t, n) {
                let l = n === h.default.getId(),
                    i = T.default.isMobileOnline(n),
                    r = l ? m.default.getStatus() : T.default.getStatus(n, e),
                    s = l ? m.default.getActivities() : T.default.getActivities(n, e),
                    a = E.default.getStreamForUser(n, e),
                    u = v.default.getUser(n);
                return null == u ? null : {
                    type: "MEMBER",
                    ...g.default.getMember(e, n),
                    user: u,
                    status: r,
                    activities: s,
                    applicationStream: a,
                    isOwner: t === n,
                    isMobileOnline: i
                }
            }

            function O(e) {
                let t = I.default.getChannel(e);
                return null == t ? A : null == t.memberListId ? function(e) {
                    return f.default.canEveryone(N.Permissions.VIEW_CHANNEL, e) ? A : u.v3(s(e.permissionOverwrites).reduce((e, t) => {
                        let {
                            id: n,
                            allow: l,
                            deny: i
                        } = t;
                        return o.default.has(l, N.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : o.default.has(i, N.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
                    }, []).sort().join(",")).toString()
                }(t) : t.memberListId
            }(i = l || (l = {})).GROUP = "GROUP", i.MEMBER = "MEMBER";
            class M {
                updateOwnerId() {
                    let e = p.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    let t = f.default.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
                setGroups(e) {
                    let t = 0;
                    this.groups = e.map(e => {
                        var n;
                        let l = t,
                            i = Math.max(0, null !== (n = e.count) && void 0 !== n ? n : 0);
                        return t += i + 1, C(this.guildId, e.id, i, l)
                    }), this.rows.length = t
                }
                sync(e, t) {
                    let [n] = e;
                    t.forEach((e, t) => this.update(n + t, e))
                }
                invalidate(e) {
                    let [t, n] = e;
                    for (let e = t; e <= n; e++) {
                        let t = this.rows[e];
                        if (null == t) break;
                        delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id]
                    }
                    this.version++
                }
                insert(e, t) {
                    let {
                        group: n,
                        member: l
                    } = t;
                    if (null != n) this.rows.splice(e, 0, C(this.guildId, n.id, n.count));
                    else if (null != l) {
                        let t = L(this.guildId, this.ownerId, l.user.id);
                        if (null == t) return;
                        this.rows.splice(e, 0, t), this.members[l.user.id] = t
                    }
                    this.version++
                }
                update(e, t) {
                    let {
                        group: n,
                        member: l
                    } = t, i = this.rows[e];
                    if (null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n) this.rows[e] = C(this.guildId, n.id, n.count);
                    else if (null != l) {
                        let t = L(this.guildId, this.ownerId, l.user.id);
                        if (null == t) return;
                        this.rows[e] = t, this.members[l.user.id] = t
                    }
                    this.version++
                }
                delete(e) {
                    let t = this.rows[e];
                    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
                rebuildMember(e) {
                    let t = this.members[e];
                    null != t && (Object.assign(t, L(this.guildId, this.ownerId, e)), this.version++)
                }
                rebuildMembers() {
                    s.forEach(this.members, (e, t) => {
                        this.rebuildMember(t)
                    })
                }
                constructor(e, t) {
                    this.rows = [], this.groups = [], this.members = {}, this.version = 0, this.guildId = e, this.listId = t, this.updateOwnerId()
                }
            }
            let R = new class e {
                get(e, t) {
                    let n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    let l = n[t];
                    return null == l && ((l = new M(e, t)).setGroups([{
                        id: N.StatusTypes.UNKNOWN,
                        count: 0
                    }]), n[t] = l), l
                }
                forEach(e, t) {
                    if (null == e) s.forEach(this._guildLists, e => {
                        s.forEach(e, t)
                    });
                    else {
                        let n = this._guildLists[e];
                        null != n && s.forEach(n, t)
                    }
                }
                delete(e) {
                    delete this._guildLists[e]
                }
                reset() {
                    this._guildLists = {}
                }
                constructor() {
                    this._guildLists = {}
                }
            };

            function D() {
                R.reset()
            }
            let U = [];

            function x() {
                let e = E.default.getAllApplicationStreams(),
                    t = U.concat(e);
                U = e, t.forEach(e => {
                    R.forEach(null, t => t.rebuildMember(e.ownerId))
                })
            }

            function y() {
                let e = h.default.getId();
                R.forEach(null, t => t.rebuildMember(e))
            }
            class w extends d.default.Store {
                initialize() {
                    this.waitFor(v.default, p.default, I.default, g.default, T.default, m.default, h.default, _.default, E.default), this.syncWith([m.default], y), this.syncWith([E.default], x)
                }
                getProps(e, t) {
                    let n = R.get(e, O(t));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                }
                getRows(e, t) {
                    let n = R.get(e, O(t));
                    return n.rows
                }
            }
            w.displayName = "ChannelMemberStore";
            var b = new w(c.default, {
                CONNECTION_OPEN: D,
                OVERLAY_INITIALIZE: D,
                GUILD_MEMBER_LIST_UPDATE: function(e) {
                    let t = R.get(e.guildId, e.id);
                    e.ops.forEach(e => {
                        switch (e.op) {
                            case "SYNC":
                                t.sync(e.range, e.items);
                                break;
                            case "INVALIDATE":
                                t.invalidate(e.range);
                                break;
                            case "INSERT":
                                t.insert(e.index, e.item);
                                break;
                            case "UPDATE":
                                t.update(e.index, e.item);
                                break;
                            case "DELETE":
                                t.delete(e.index)
                        }
                    }), t.setGroups(e.groups)
                },
                GUILD_UPDATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    R.forEach(t.id, e => {
                        e.updateOwnerId() && e.rebuildMembers()
                    })
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    R.delete(t.id)
                },
                GUILD_ROLE_UPDATE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    R.forEach(t, e => e.rebuildMembers())
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    R.forEach(t, e => e.rebuildMember(n.id))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var l = n("446674"),
                i = n("913144"),
                r = n("9294"),
                s = n("49111");
            let a = {},
                u = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let l = (0, r.parseExtraDataFromInviteKey)(e),
                    i = a[e],
                    u = null != i ? {
                        state: s.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: l.baseCode
                    };
                t(u), a = {
                    ...a,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [u.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class f extends l.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, r.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, l;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (l = e.invite.approximate_presence_count) && void 0 !== l ? l : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, l;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (l = e.invite.approximate_presence_count) && void 0 !== l ? l : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, d(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        191542: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("446674"),
                r = n("872717"),
                s = n("913144"),
                a = n("271938"),
                u = n("401848"),
                o = n("49111"),
                d = n("724210");
            let c = {},
                f = Object.freeze({});

            function E(e) {
                var t;
                return null !== (t = c[e]) && void 0 !== t ? t : f
            }

            function h(e) {
                var t, n;
                let {
                    channelId: l,
                    userId: i
                } = e, r = {
                    ...E(l)
                };
                clearTimeout(r[i]), r[i] = (t = l, n = i, setTimeout(() => {
                    s.default.dispatch({
                        type: "TYPING_STOP",
                        channelId: t,
                        userId: n
                    })
                }, 1e4)), c[l] = r
            }

            function I(e) {
                let {
                    channelId: t,
                    userId: n
                } = e, l = c[t];
                if (null == l || null == l[n]) return !1;
                let i = {
                    ...l
                };
                clearTimeout(i[n]), delete i[n], c[t] = i
            }

            function _() {
                c = {}
            }
            class g extends i.default.Store {
                getTypingUsers(e) {
                    return E(e)
                }
                isTyping(e, t) {
                    return null != E(e)[t]
                }
            }
            g.displayName = "TypingStore";
            var p = new g(s.default, {
                TYPING_START: h,
                TYPING_STOP: I,
                TYPING_START_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = a.default.getId();
                    if (null == n || t === d.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), l = null);
                    let i = Date.now(),
                        c = 8e3;
                    if (null != l && (null != l.timeout || l.prevSend + c > i)) return !1;
                    let I = null == l || l.prevSend > i - 2 * c ? 1500 : 0,
                        _ = setTimeout(() => {
                            if (null != l && l.channelId === t && n === a.default.getId() && null != l.timeout) l.timeout = null, !(function(e) {
                                let t = E(e);
                                return t === f ? 0 : Object.keys(t).length
                            }(t) > 5) && r.default.post({
                                url: o.Endpoints.TYPING(t),
                                oldFormErrors: !0
                            }).then(e => {
                                if (200 === e.status) {
                                    var n, l;
                                    let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                        r = null !== (l = e.body.thread_create_cooldown_ms) && void 0 !== l ? l : 0;
                                    i > 0 && s.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: u.SlowmodeType.SendMessage,
                                        cooldownMs: i
                                    }), r > 0 && s.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: t,
                                        slowmodeType: u.SlowmodeType.CreateThread,
                                        cooldownMs: r
                                    })
                                }
                            })
                        }, I);
                    return l = {
                        channelId: t,
                        timeout: _,
                        prevSend: i
                    }, h({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    let {
                        channelId: t
                    } = e, n = a.default.getId();
                    return null != n && null != l && l.channelId === t && null != l.timeout && (clearTimeout(l.timeout), l = null, I({
                        channelId: t,
                        userId: n
                    }))
                },
                CONNECTION_OPEN: _,
                OVERLAY_INITIALIZE: _,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: {
                            author: n
                        },
                        optimistic: i
                    } = e;
                    return i && ! function(e) {
                        if (null == l || l.channelId !== e) return;
                        null != l.timeout && clearTimeout(l.timeout), l = null
                    }(t), null != n && I({
                        channelId: t,
                        userId: n.id
                    })
                }
            })
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                i = n("913144"),
                r = n("27618");
            let s = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...a
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !r.default.isBlocked(e)))
            }
            class d extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([r.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return s
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(i.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), s = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    s = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    s = !1
                },
                LOGOUT: function() {
                    u = {
                        ...a
                    }
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("627445"),
                i = n.n(l),
                r = n("446674"),
                s = n("913144"),
                a = n("816454");
            let u = new Map;

            function o(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(s.default, {
                WINDOW_INIT: function(e) {
                    i(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: l,
                        focused: r
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: l,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = o(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = o(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = o(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = c
        },
        941886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return g
                },
                EmptyStateText: function() {
                    return p
                },
                default: function() {
                    return i
                }
            });
            var l, i, r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                u = n.n(a),
                o = n("819855"),
                d = n("77078"),
                c = n("145131"),
                f = n("49111"),
                E = n("430098"),
                h = n("926622");
            let {
                Provider: I,
                Consumer: _
            } = s.createContext(f.ThemeTypes.DARK);
            class g extends s.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: l,
                        offsetX: i,
                        offsetY: s,
                        style: a
                    } = this.props;
                    return (0, r.jsx)(_, {
                        children: d => (0, r.jsx)(c.default.Child, {
                            grow: 0,
                            className: u(E.image, h.marginBottom40),
                            style: {
                                ...a,
                                width: n,
                                height: l,
                                marginLeft: i,
                                marginTop: s,
                                backgroundImage: "url(".concat((0, o.isThemeDark)(d) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let p = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: l,
                    note: i,
                    style: s
                } = e;
                return (0, r.jsxs)(c.default.Child, {
                    grow: 0,
                    direction: c.default.Direction.VERTICAL,
                    style: s,
                    children: [null != t && (0, r.jsx)(d.H, {
                        className: u(n, E.title),
                        children: t
                    }), null != i ? (0, r.jsx)("div", {
                        className: u(l, E.text, h.marginTop8),
                        children: i
                    }) : null]
                })
            };
            (l = class extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: l
                    } = this.props;
                    return (0, r.jsx)(I, {
                        value: t,
                        children: (0, r.jsx)(c.default, {
                            direction: c.default.Direction.VERTICAL,
                            align: c.default.Align.CENTER,
                            justify: c.default.Justify.CENTER,
                            className: u(E.wrapper, n),
                            style: l,
                            children: e
                        })
                    })
                }
            }).Text = p, l.Image = g, i = l
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                s = n("393414"),
                a = n("49111"),
                u = i.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: o,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, E = i.useCallback(e => {
                        !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, s.transitionTo)(n), null == o || o()), null == d || d(e))
                    }, [n, d, o]), h = i.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, s.transitionTo)(n), null == o || o())
                    }, [n, o]), I = (0, l.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: h,
                        onKeyPress: E,
                        ...f,
                        children: u
                    });
                    return (0, l.jsx)(r.FocusRing, {
                        ...c,
                        children: I
                    })
                })
        },
        98292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                u = n("374665");

            function o(e) {
                let {
                    children: t,
                    "aria-label": n,
                    className: r,
                    position: o
                } = e, d = i.useRef(null), c = null != n ? n : "string" == typeof t && t;
                return (0, l.jsx)(a.Tooltip, {
                    position: null != o ? o : "top",
                    delay: 500,
                    text: t,
                    "aria-label": c,
                    children: n => {
                        let {
                            onMouseEnter: i,
                            onMouseLeave: a
                        } = n;
                        return (0, l.jsx)("div", {
                            className: s(r, u.overflow),
                            ref: d,
                            "aria-hidden": e["aria-hidden"],
                            onMouseEnter: () => {
                                let {
                                    current: e
                                } = d;
                                null != e && e.offsetWidth < e.scrollWidth && (null == i || i())
                            },
                            onMouseLeave: a,
                            children: t
                        })
                    }
                })
            }
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("733154"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, r.ChatIcon, void 0, {
                    size: 24
                })
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("197801"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, r.SettingsIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("390300"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("287083"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, r.StageIcon, void 0, {
                    size: 32
                })
        },
        619911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("125094"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: r,
                            fill: i
                        }), (0, l.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: r,
                            fill: i
                        })]
                    })
                }, r.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("276825"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, r.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return o
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return _
                },
                readFileAsBase64: function() {
                    return p
                },
                dataUriFileSize: function() {
                    return T
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return v
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var l = n("627445"),
                i = n.n(l),
                r = n("917351"),
                s = n.n(r),
                a = n("48648"),
                u = n.n(a);

            function o(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i,
                    minWidth: r = 0,
                    minHeight: s = 0
                } = e;
                if (t !== l || n !== i) {
                    let e = t > l ? l / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), s);
                    let a = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * a), r), n = Math.max(Math.round(n * a), s)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    l = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return o({
                    width: e,
                    height: t,
                    maxWidth: l,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e, r = 1;
                t > l && (r = l / t), t = Math.round(t * r);
                let s = 1;
                return (n = Math.round(n * r)) > i && (s = i / n), Math.min(r * s, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(l / t, i / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let h = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let l = document.createElement("canvas"),
                    i = l.getContext("2d");
                if (null == i) return h;
                let r = l.width = 0 === e.width ? 128 : e.width,
                    s = l.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, r, s);
                let a = i.getImageData(0, 0, r, s).data,
                    o = function(e, t, n) {
                        let l = [];
                        for (let i = 0, r, s, a, u, o; i < t; i += n) s = e[(r = 4 * i) + 0], a = e[r + 1], u = e[r + 2], (void 0 === (o = e[r + 3]) || o >= 125) && !(s > 250 && a > 250 && u > 250) && l.push([s, a, u]);
                        return l
                    }(a, r * s, n),
                    d = u(o, t);
                return "boolean" == typeof d ? h : d.palette()
            }
            let _ = e => "number" == typeof e ? null : g(e),
                g = s.memoize(e => new Promise((t, n) => {
                    let l = new Image;
                    l.crossOrigin = "Anonymous", l.onerror = e => {
                        n(e), l.onerror = l.onload = null, l = null
                    }, l.onload = () => {
                        t(I(l, 5, 10)), l.onerror = l.onload = null, l = null
                    }, l.src = e
                }));

            function p(e) {
                return new Promise((t, n) => {
                    let l = new FileReader;
                    l.readAsDataURL(e), l.onload = () => {
                        i("string" == typeof l.result, "Result must be a string"), t(l.result)
                    }, l.onerror = e => n(e)
                })
            }

            function T(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function m(e, t, n) {
                let l = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            l = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) l[i] = t.charCodeAt(i);
                        return new Blob([l], {
                            type: n
                        })
                    }(e),
                    i = await l.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function v(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let l = await e.text(),
                    i = l.indexOf("IDAT");
                return !!(i > 0) && -1 !== l.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var l = n("917351"),
                i = n.n(l);
            let r = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var r = n("697218"),
                s = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, a = e.updateModalProps, i = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == l) {
                    null == u || u();
                    return
                }
                let d = l(h, c, s);

                function c() {
                    null == u || u()
                }

                function f(e) {
                    i(d), n(e)
                }

                function E(e) {
                    i(d), r(e)
                }

                function h(e) {
                    return a(d, h, c, {
                        ...s,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    a(d, h, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: i,
                    mfaCodeHandler: r = u,
                    isModalOpen: s = !1,
                    ...a
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, u;
                    if (i = e, u = s, i.body && 60008 === i.body.code || u && 429 === i.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...a
                    });
                    l(e)
                })
            }

            function d(e, t) {
                var n, l;
                let {
                    checkEnabled: i = null !== (l = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(i) ? u : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return l
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function l(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let l = 20 * Math.log10(e / n);
                return n * (t = l > 0 ? l / 6 + 1 : (50 + l) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function l(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return l
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("781738");
            var l = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("920636");
            let s = (e, t, n) => function(i) {
                return (0, l.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function a(e, t, n) {
                return (0, i.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, l) {
                return (0, i.updateModal)(e, s(t, n, l))
            }
        }
    }
]);