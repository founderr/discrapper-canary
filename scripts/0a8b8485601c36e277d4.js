(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75336"], {
        310013: function(t, e, n) {
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
            t.exports = function(t, e, n) {
                if ("string" != typeof e) {
                    var o = Object.getOwnPropertyNames(e);
                    l && (o = o.concat(Object.getOwnPropertySymbols(e)));
                    for (var u = 0; u < o.length; ++u)
                        if (!r[o[u]] && !i[o[u]] && (!n || !n[o[u]])) try {
                            t[o[u]] = e[o[u]]
                        } catch (t) {}
                }
                return t
            }
        },
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
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
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

                function i(t, e, n, r, i, l, o) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = l, this.histo = o
                }

                function l() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, l, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (l = this.b1; l <= this.b2; l++) o += n[e(r, i, l)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, l, o, u = 0,
                                s = 8,
                                a = 0,
                                d = 0,
                                c = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (o = this.b1; o <= this.b2; o++) u += r = n[e(i, l, o)] || 0, a += r * (i + .5) * s, d += r * (l + .5) * s, c += r * (o + .5) * s;
                            u ? this._avg = [~~(a / u), ~~(d / u), ~~(c / u)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, l.prototype = {
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
                        for (var e, n, r, i = this.vboxes, l = 0; l < i.size(); l++)((n = Math.sqrt(Math.pow(t[0] - i.peek(l).color[0], 2) + Math.pow(t[1] - i.peek(l).color[1], 2) + Math.pow(t[2] - i.peek(l).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(l).color);
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
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, u) {
                        if (!o.length || u < 2 || u > 256) return !1;
                        var s, a, d, c, f, h, _, E, p, I, S, T, g, N, v, m, O = (s = o, f = Array(32768), s.forEach(function(n) {
                                d = n[0] >> t, c = n[1] >> t, f[a = e(d, c, n[2] >> t)] = (f[a] || 0) + 1
                            }), f),
                            C = 0;
                        O.forEach(function() {
                            C++
                        });
                        var A = (h = o, _ = O, S = 1e6, T = 0, g = 1e6, N = 0, v = 1e6, m = 0, h.forEach(function(e) {
                                E = e[0] >> t, p = e[1] >> t, I = e[2] >> t, E < S ? S = E : E > T && (T = E), p < g ? g = p : p > N && (N = p), I < v ? v = I : I > m && (m = I)
                            }), new i(S, T, g, N, v, m, _)),
                            M = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function L(t, n) {
                            for (var i, l = 1, o = 0; o < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), o++;
                                    continue
                                }
                                var u = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                l = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                u = r.max([i, l, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, a, d, c, f, h = 0,
                                                _ = [],
                                                E = [];
                                            if (u == i)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (c = 0, a = n.g1; a <= n.g2; a++)
                                                        for (d = n.b1; d <= n.b2; d++) c += t[f = e(s, a, d)] || 0;
                                                    h += c, _[s] = h
                                                } else if (u == l)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (c = 0, a = n.r1; a <= n.r2; a++)
                                                            for (d = n.b1; d <= n.b2; d++) c += t[f = e(a, s, d)] || 0;
                                                        h += c, _[s] = h
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (c = 0, a = n.r1; a <= n.r2; a++)
                                                                for (d = n.g1; d <= n.g2; d++) c += t[f = e(a, d, s)] || 0;
                                                            h += c, _[s] = h
                                                        }
                                            return _.forEach(function(t, e) {
                                                E[e] = h - t
                                            }), p(u == i ? "r" : u == l ? "g" : "b")
                                        }

                                        function p(t) {
                                            var e, r, i, l, o, u = t + "1",
                                                a = t + "2",
                                                d = 0;
                                            for (s = n[u]; s <= n[a]; s++)
                                                if (_[s] > h / 2) {
                                                    for (i = n.copy(), l = n.copy(), e = s - n[u], o = e <= (r = n[a] - s) ? Math.min(n[a] - 1, ~~(s + r / 2)) : Math.max(n[u], ~~(s - 1 - e / 2)); !_[o];) o++;
                                                    for (d = E[o]; !d && _[o - 1];) d = E[--o];
                                                    return i[a] = o, l[u] = i[a] + 1, [i, l]
                                                }
                                        }
                                    }(O, i),
                                    s = u[0],
                                    a = u[1];
                                if (!s) return;
                                if (t.push(s), a && (t.push(a), l++), l >= n || o++ > 1e3) return
                            }
                        }
                        M.push(A), L(M, .75 * u);
                        for (var U = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); M.size();) U.push(M.pop());
                        L(U, u - U.size());
                        for (var D = new l; U.size();) D.push(U.pop());
                        return D
                    }
                }
            }();
            t.exports = i.quantize
        },
        54239: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return o
                }
            });
            var r = n("913144");

            function i(t) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        79112: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("872717"),
                i = n("95410"),
                l = n("913144"),
                o = n("211895"),
                u = n("26092"),
                s = n("599110"),
                a = n("315102"),
                d = n("730622"),
                c = n("49111"),
                f = n("191349"),
                h = n("782340"),
                _ = {
                    open() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, o.default)(t, e, n)
                    },
                    init: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: t,
                            subsection: e,
                            ...n
                        })
                    },
                    close() {
                        let t = u.default.onClose;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != t && t()
                    },
                    setSection(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: t,
                            subsection: e,
                            ...n
                        })
                    },
                    clearSubsection(t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: t
                        })
                    },
                    clearScrollPosition(t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: t
                        })
                    },
                    updateAccount(t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: t
                        })
                    },
                    submitComplete() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(t, e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: o,
                            emailToken: u,
                            password: _,
                            avatar: E,
                            newPassword: p,
                            discriminator: I
                        } = t, {
                            close: S
                        } = e;
                        return (0, d.default)(t => {
                            let e = {
                                    username: n,
                                    email: o,
                                    email_token: u,
                                    password: _,
                                    avatar: E,
                                    new_password: p,
                                    ...t,
                                    discriminator: null != I && "" !== I ? I : void 0
                                },
                                l = i.default.get(c.DEVICE_TOKEN),
                                s = (0, f.getDevicePushProvider)();
                            null != s && null != l && (e.push_provider = s, e.push_token = l);
                            let a = i.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != a && (e.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, e.push_voip_token = a), r.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: e
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: h.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => l.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(t => {
                            let e = t.body,
                                n = e.token;
                            return s.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, a.isAnimatedIconHash)(e.avatar)
                            }), delete e.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: e.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: e
                            }), null != p && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: e,
                                newPassword: p
                            }), null != _ && null != p && l.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: e.id
                            }), S ? this.close() : this.submitComplete(), t
                        }, t => (l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: t.body
                        }), t))
                    }
                }
        },
        920636: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("77078"),
                s = n("782340"),
                a = n("347129");
            class d extends i.PureComponent {
                render() {
                    var t;
                    let {
                        title: e,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: h,
                        helpMessage: _,
                        retryPrompt: E,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: I,
                        errorMessage: S,
                        retrySuccess: T
                    } = this.state, g = i.Children.count(l) > 0 ? (0, r.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: a.card,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, N = null != E ? (0, r.jsxs)(u.Text, {
                        className: o(a.submitText, a.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                            className: o(a.spacing, a.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(u.Anchor, {
                                children: E
                            })
                        })]
                    }) : null, v = T ? (0, r.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: a.card,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: a.spacing,
                                    children: _
                                }) : null, g, v, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: a.spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: I,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: a.error,
                                        children: null != d ? d : S
                                    }) : null, N]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: c || 0 === I.length,
                                    children: null != n ? n : s.default.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: s.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = t => {
                        this._input = t
                    }, this.getLabelText = () => {
                        var t;
                        return null !== (t = this.props.label) && void 0 !== t ? t : this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var t;
                        return this.props.forceNoPlaceholder ? null : null !== (t = this.props.placeholder) && void 0 !== t ? t : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: t
                        } = this.props;
                        null == t || t().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = t => {
                        t.preventDefault();
                        let {
                            handleSubmit: e,
                            onError: n
                        } = this.props;
                        e(this.state.code).catch(t => {
                            null != t.body && (null == n || n(t.body), t.body.message && this.setState({
                                errorMessage: t.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: t,
                            handleEarlyClose: e
                        } = this.props;
                        t(), null == e || e()
                    }, this.handleCodeChange = t => {
                        this.setState({
                            code: t
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
        646074: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatXIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.295 15.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414L20.416 19l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414L17.588 19l-2.293-2.293a1 1 0 0 1 0-1.414Z",
                        className: u
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "m18.648 14.404-.525-.525a3 3 0 0 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .708l-.525.525c-.46.46-.74 1.032-.839 1.628-.041.25-.23.464-.484.478-.184.01-.37.015-.556.015h-9.8c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2.002 12c0-5.523 4.477-10 10-10s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.986 2.986 0 0 0-1.628.838l-.526.525a.5.5 0 0 1-.707 0Z",
                        className: u
                    })]
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
            var i = n("669491"),
                l = n("75196");
            let o = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        956967: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useCurrentUserHasAutomodQuarantinedProfile: function() {
                    return S
                },
                useGuildAutomodProfileQuarantineErrors: function() {
                    return T
                },
                useOpenFixQuarantinedProfileModal: function() {
                    return g
                }
            }), n("702976");
            var r = n("884691"),
                i = n("65597"),
                l = n("79112"),
                o = n("685665"),
                u = n("929423"),
                s = n("271938"),
                a = n("26989"),
                d = n("305961"),
                c = n("957255"),
                f = n("162771"),
                h = n("681937"),
                _ = n("49111"),
                E = n("657944"),
                p = n("397336"),
                I = n("782340");

            function S(t) {
                return (0, i.default)([s.default, a.default], () => {
                    if (null == t) return !1;
                    let e = s.default.getId();
                    return (0, h.hasAutomodQuarantinedProfile)(a.default.getMember(t, e))
                }, [t])
            }

            function T(t) {
                return (0, i.useStateFromStoresObject)([s.default, a.default, f.default, d.default], () => {
                    let e = {
                            nick: void 0,
                            bio: void 0
                        },
                        n = f.default.getGuildId(),
                        r = null != t ? t : n,
                        i = d.default.getGuild(r);
                    if (null == i || null == r) return e;
                    let l = s.default.getId(),
                        o = a.default.getMember(r, l),
                        u = (0, h.getAutomodQuarantinedProfileFlags)(null == o ? void 0 : o.flags);
                    if (0 === u.size) return e;
                    if (u.has(E.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                        if (null == t) {
                            var c;
                            e.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (c = i.name) && void 0 !== c ? c : ""
                            })]
                        } else e.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
                    }
                    return u.has(E.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (e.bio = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), e
                }, [t])
            }

            function g(t) {
                let {
                    guildId: e,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: a,
                    openWithoutBackstack: f
                } = t, {
                    analyticsLocations: h
                } = (0, o.default)(), E = (0, i.default)([d.default], () => d.default.getGuild(e), [e]), I = (0, i.default)([c.default], () => null != E && c.default.can(_.Permissions.CHANGE_NICKNAME, E), [E]), S = r.useCallback(() => {
                    if (null == E) return;
                    let t = _.UserSettingsSections.PROFILE_CUSTOMIZATION,
                        e = p.ProfileCustomizationSubsection.GUILD;
                    I ? (0, u.initGuildIdentitySettings)(E, null != a ? a : h) : e = p.ProfileCustomizationSubsection.USER_PROFILE, l.default.open(t, e, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: a,
                        openWithoutBackstack: f
                    })
                }, [I, n, s, a, f, E, h]);
                return [S, I]
            }
        },
        55812: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return v
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("65597"),
                o = n("77078"),
                u = n("812204"),
                s = n("685665"),
                a = n("271938"),
                d = n("26989"),
                c = n("305961"),
                f = n("476263"),
                h = n("533930"),
                _ = n("599110"),
                E = n("681937"),
                p = n("956967"),
                I = n("143460"),
                S = n("49111"),
                T = n("657944"),
                g = n("782340"),
                N = n("678576");

            function v(t) {
                var e;
                let {
                    onClose: n,
                    transitionState: v,
                    guildId: m
                } = t, O = (0, l.default)([a.default], () => a.default.getId()), C = (0, l.default)([d.default], () => d.default.getMember(m, O), [m, O]), A = (0, l.default)([c.default], () => c.default.getGuild(m), [m]), M = null !== (e = null == A ? void 0 : A.name) && void 0 !== e ? e : "", L = (0, E.getAutomodQuarantinedGuildMemberFlags)(C), {
                    analyticsLocations: U
                } = (0, s.default)(u.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [D, R] = (0, p.useOpenFixQuarantinedProfileModal)({
                    guildId: m,
                    analyticsLocations: U,
                    openWithoutBackstack: !0
                }), y = L.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? g.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : g.default.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                !R && (y = g.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                let w = R ? g.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : g.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                return (i.useEffect(() => {
                    _.default.track(S.AnalyticEvents.OPEN_MODAL, {
                        type: I.QUARANTINE_USER_ALERT_KEY,
                        guild_id: m,
                        other_user_id: O
                    })
                }, []), i.useEffect(() => {
                    if (null == A) {
                        n();
                        return
                    }
                }, [A, n]), null == A) ? null : (0, r.jsxs)(o.ModalRoot, {
                    transitionState: v,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: N.headerContainer,
                            children: [(0, r.jsxs)("div", {
                                className: N.guildIconContainer,
                                children: [(0, r.jsx)(f.default, {
                                    guild: A,
                                    size: f.default.Sizes.LARGER
                                }), (0, r.jsx)("div", {
                                    className: N.statusContainer,
                                    children: (0, r.jsx)(h.default, {
                                        className: N.statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, r.jsx)(o.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: g.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: M
                                })
                            })]
                        })
                    }), (0, r.jsx)(o.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: N.descriptionContainer,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: y
                            })
                        })
                    }), (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            onClick: () => {
                                D(), n()
                            },
                            color: o.Button.Colors.BRAND_NEW,
                            look: o.Button.Looks.FILLED,
                            children: w
                        }), (0, r.jsx)(o.Button, {
                            onClick: n,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: g.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return a
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return h
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return E
                },
                setPendingNickname: function() {
                    return p
                },
                setPendingThemeColors: function() {
                    return I
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                resetAllPending: function() {
                    return g
                },
                clearErrors: function() {
                    return N
                },
                setDisableSubmit: function() {
                    return v
                }
            }), n("70102");
            var r = n("872717"),
                i = n("913144"),
                l = n("54239"),
                o = n("49111");
            async function u(t, e) {
                let {
                    nick: n,
                    avatar: l
                } = e;
                if (null == t) throw Error("Need guildId");
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await r.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function s(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function a(t, e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function d() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function c() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function h(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function _(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function E(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function p(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function I(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function S() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function T() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function g() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function N() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        191349: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return u
                }
            });
            var r, i, l = n("773336");
            let o = null;

            function u() {
                return (0, l.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        211895: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("913144"),
                i = n("54239"),
                l = n("49111");

            function o() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: t,
                    subsection: e,
                    ...n
                }), (0, i.pushLayer)(l.Layers.USER_SETTINGS)
            }
        },
        26092: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return U
                }
            });
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                o = n("913144"),
                u = n("697218"),
                s = n("49111");
            let a = s.FormStates.CLOSED,
                d = null,
                c = null,
                f = {},
                h = {},
                _ = {},
                E = null,
                p = null,
                I = !1,
                S = !1,
                T = null,
                g = null,
                N = null,
                v = [],
                m = null,
                O = null;

            function C(t) {
                var e, n, r, i, l, o;
                let d = u.default.getCurrentUser();
                if (null == d) return A();
                c = null !== (e = t.section) && void 0 !== e ? e : c, m = null !== (n = t.section) && void 0 !== n ? n : c, null != t.subsection && null != c && (f[c] = t.subsection), null != t.scrollPosition && null != c && (h[c] = t.scrollPosition), S = !!t.openWithoutBackstack, a = s.FormStates.OPEN, _ = {}, p = {
                    ...E = {
                        [s.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, g = null !== (r = t.onClose) && void 0 !== r ? r : null, N = null !== (i = t.analyticsLocation) && void 0 !== i ? i : null, v = null !== (l = t.analyticsLocations) && void 0 !== l ? l : [], O = null !== (o = t.impressionSource) && void 0 !== o ? o : null
            }

            function A() {
                a = s.FormStates.CLOSED, I = !1, E = null, m = null, p = null, d = null, c = null, f = {}, h = {}, g = null, N = null, v = [], O = null
            }

            function M() {
                a = s.FormStates.OPEN, _ = {}
            }
            class L extends l.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                hasChanges() {
                    return null != p && null != E && (!!this.isOpen() || T === s.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(p, E)
                }
                isOpen() {
                    return I
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? f[c] : null
                }
                getScrollPosition() {
                    return null != c ? h[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return S
                }
                getProps() {
                    return {
                        submitting: a === s.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? f[c] : null,
                        scrollPosition: null != c ? h[c] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: S,
                        analyticsLocation: N,
                        analyticsLocations: v,
                        initialSection: m,
                        impressionSource: O
                    }
                }
                get onClose() {
                    return g
                }
            }
            L.displayName = "UserSettingsModalStore";
            var U = new L(o.default, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    I = !0, C(t)
                },
                USER_SETTINGS_MODAL_INIT: C,
                USER_SETTINGS_MODAL_CLOSE: A,
                LOGOUT: A,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    a = s.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (a !== s.FormStates.SUBMITTING) return !1;
                    a = s.FormStates.OPEN, c = s.UserSettingsSections.ACCOUNT, _ = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    var e;
                    d = c, c = t.section, N = null, v = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [], null != t.subsection && (f[c] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    let {
                        forSection: e
                    } = t;
                    null != e ? delete f[e] : null != c && delete f[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    let {
                        forSection: e
                    } = t;
                    null != e ? delete h[e] : null != c && delete h[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    let {
                        settings: e
                    } = t;
                    null == p && (p = {});
                    let n = p[s.UserSettingsSections.ACCOUNT];
                    p[s.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...e
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
                USER_SETTINGS_MODAL_RESET: function() {
                    let t = u.default.getCurrentUser();
                    M(), null != t && (p = {
                        ...E = {
                            [s.UserSettingsSections.ACCOUNT]: {
                                userId: t.id,
                                username: t.username,
                                discriminator: t.discriminator,
                                email: t.email,
                                avatar: t.avatar,
                                password: "",
                                newPassword: null,
                                claimed: t.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(t) {
                    return T = t.tab, null == c && T === s.DrawerTabTypes.USER_SETTINGS && C({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("627445"),
                i = n.n(r),
                l = n("446674"),
                o = n("913144"),
                u = n("816454");
            let s = new Map;

            function a(t) {
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
            class d extends l.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return a(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return s.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return a(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return a(t).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(o.default, {
                WINDOW_INIT: function(t) {
                    i(!s.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: r,
                        focused: l
                    } = t;
                    return s.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = a(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (s.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = a(t.windowId);
                    return e.focused !== t.focused && (s.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = a(t.windowId);
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
                    t.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = c
        },
        931138: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("77078"),
                s = n("760607"),
                a = n("89976");

            function d(t) {
                let {
                    children: e,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: d,
                    ...c
                } = t, f = i.Children.only(e), h = (0, u.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: o(a.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(s.default, {
                        ...c,
                        className: o(d, a.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: o(a.childContainer, {
                            [a.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        533930: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("646074"),
                o = n("75196"),
                u = (0, i.replaceIcon)(function(t) {
                    let {
                        color: e = "currentColor",
                        height: n = 24,
                        width: i = 24,
                        ...l
                    } = t;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(l),
                        width: i,
                        height: n,
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
                    })
                }, l.ChatXIcon)
        },
        760607: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196"),
                l = function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: o,
                        ...u
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(u),
                        width: e,
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
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("276825"),
                o = n("75196"),
                u = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...l
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, l.CheckmarkSmallIcon)
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return a
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
                    return h
                },
                getPalette: function() {
                    return E
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return S
                },
                dataUriFileSize: function() {
                    return T
                },
                dataUrlToFile: function() {
                    return g
                },
                isPNGAnimated: function() {
                    return N
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                l = n("917351"),
                o = n.n(l),
                u = n("48648"),
                s = n.n(u);

            function a(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: l = 0,
                    minHeight: o = 0
                } = t;
                if (e !== r || n !== i) {
                    let t = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * t), l), n = Math.max(Math.round(n * t), o);
                    let u = n > i ? i / n : 1;
                    e = Math.max(Math.round(e * u), l), n = Math.max(Math.round(n * u), o)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function d(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return a({
                    width: t,
                    height: e,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function c(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t, l = 1;
                e > r && (l = r / e), e = Math.round(e * l);
                let o = 1;
                return (n = Math.round(n * l)) > i && (o = i / n), Math.min(l * o, 1)
            }

            function f(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t;
                return e === n ? 1 : Math.min(Math.max(r / e, i / n), 1)
            }

            function h(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function E(t, e, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return _;
                let l = r.width = 0 === t.width ? 128 : t.width,
                    o = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, l, o);
                let u = i.getImageData(0, 0, l, o).data,
                    a = function(t, e, n) {
                        let r = [];
                        for (let i = 0, l, o, u, s, a; i < e; i += n) o = t[(l = 4 * i) + 0], u = t[l + 1], s = t[l + 2], (void 0 === (a = t[l + 3]) || a >= 125) && !(o > 250 && u > 250 && s > 250) && r.push([o, u, s]);
                        return r
                    }(u, l * o, n),
                    d = s(a, e);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let p = t => I(t),
                I = o.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(E(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function S(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function T(t) {
                let e = t.split(";base64,");
                return i(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function g(t, e, n) {
                let r = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(e.length);
                        for (var i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(t),
                    i = await r.arrayBuffer();
                return new File([i], e, {
                    type: n
                })
            }
            async function N(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await t.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                resolveThunk: function() {
                    return l
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let l = t => "function" == typeof t ? t() : t;
            i.curry((t, e, n) => l(e) ? t(n) : n({}))
        },
        730622: function(t, e, n) {
            "use strict";
            let r, i;
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            }), n("70102");
            var l = n("697218"),
                o = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let t = n("670924");
                r = t.showModal, u = t.updateModalProps, i = n("551042").closeModal
            }

            function s(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: l,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: s
                    } = {}
                } = t;
                if (null == r) {
                    null == s || s();
                    return
                }
                let d = r(_, c, o);

                function c() {
                    null == s || s()
                }

                function f(t) {
                    i(d), n(t)
                }

                function h(t) {
                    i(d), l(t)
                }

                function _(t) {
                    return u(d, _, c, {
                        ...o,
                        isLoading: !0
                    }), a({
                        promiseFn: e,
                        resolve: f,
                        reject: h,
                        code: t,
                        mfaCodeHandler: E,
                        isModalOpen: !0
                    })
                }

                function E(t) {
                    let {
                        res: e
                    } = t;
                    u(d, _, c, {
                        ...o,
                        error: e.body.message
                    })
                }
            }

            function a(t) {
                let {
                    promiseFn: e,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: l = s,
                    isModalOpen: o = !1,
                    ...u
                } = t;
                return e(null != i ? {
                    code: i
                } : {}).then(n, t => {
                    var i, s;
                    if (i = t, s = o, i.body && 60008 === i.body.code || s && 429 === i.status) return l({
                        promiseFn: e,
                        resolve: n,
                        reject: r,
                        res: t,
                        ...u
                    });
                    r(t)
                })
            }

            function d(t, e) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...u
                } = null != e ? e : {};
                return new Promise((e, n) => {
                    ((0, o.resolveThunk)(i) ? s : a)({
                        promiseFn: t,
                        resolve: e,
                        reject: n,
                        ...u
                    })
                })
            }
        },
        670924: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("920636");
            let o = (t, e, n) => function(i) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: t,
                    handleEarlyClose: e,
                    ...n,
                    ...i
                })
            };

            function u(t, e, n) {
                return (0, i.openModal)(o(t, e, n), {
                    onCloseCallback: e
                })
            }

            function s(t, e, n, r) {
                return (0, i.updateModal)(t, o(e, n, r))
            }
        }
    }
]);