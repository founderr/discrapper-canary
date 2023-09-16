(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30796], {
        864244: (e, t, n) => {
            e.exports = n.p + "1f58110010129cdf4ea06a1d6e497590.svg"
        },
        936023: (e, t, n) => {
            e.exports = n.p + "4c22bea607083fd1b4da0108f6bce9ee.png"
        },
        191696: (e, t, n) => {
            e.exports = n.p + "d8a03b9985d824edc78c6eb4785dc949.svg"
        },
        78205: (e, t, n) => {
            e.exports = n.p + "7e09d40fdac796955aae9fbe0eaba1f9.svg"
        },
        901182: (e, t, n) => {
            e.exports = n.p + "b6193b9564ca0ecbbd1ed6b80f47646d.svg"
        },
        277329: (e, t, n) => {
            e.exports = n.p + "148f1855747994b4d58b685f8a36c591.svg"
        },
        99846: (e, t, n) => {
            e.exports = n.p + "070f1b98adc8ce07c7823021133efed5.svg"
        },
        277292: (e, t, n) => {
            e.exports = n.p + "447512eae624cde892775ce45dfb53ab.svg"
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => s
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

            function s() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                a = n(882723),
                l = n(473708),
                c = n(775823),
                u = n.n(c);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function d(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
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
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    return d(this, n)
                }
            }
            var O = function(e) {
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
                var t = S(n);

                function n() {
                    f(this, n);
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
                        f = t.error,
                        E = t.isLoading,
                        d = t.maxLength,
                        p = t.transitionState,
                        _ = t.helpMessage,
                        S = t.retryPrompt,
                        O = t.retrySuccessMessage,
                        h = this.state,
                        N = h.code,
                        b = h.errorMessage,
                        g = h.retrySuccess,
                        I = o.Children.count(c) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: u().card,
                            children: (0,
                                r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        y = null != S ? (0, r.jsxs)(a.Text, {
                            className: s()(u().submitText, u().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: s()(u().spacing, u().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: S
                                })
                            })]
                        }) : null,
                        T = g ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: u().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: O
                            })
                        }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: p,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u().spacing,
                                    children: _
                                }) : null, I, T, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: N,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u().error,
                                        children: null != f ? f : b
                                    }) : null, y]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: E || 0 === N.length,
                                    children: null != i ? i : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            O.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const h = O
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                o = n(2590),
                i = n(473708);

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
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
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
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
                    return a(this, n)
                }
            }
            var f = function(e) {
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
                var t = u(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, i.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        342147: (e, t, n) => {
            "use strict";
            n.d(t, {
                D2: () => l,
                SE: () => c
            });
            var r = n(202351),
                o = n(260561),
                i = n(682776),
                s = n(2590),
                a = (0, o.B)({
                    kind: "guild",
                    id: "2022-11_default_disable_mass_mention",
                    label: "Disable mass mentions for communities by default",
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
                });

            function l(e) {
                return a.useExperiment({
                    guildId: e,
                    location: "dd4beb_1"
                }, {
                    autoTrackExposure: !0
                })
            }

            function c(e) {
                var t, n = (0, r.e7)([i.Z], (function() {
                        return i.Z.can(s.Plq.MANAGE_GUILD, e)
                    })),
                    o = a.useExperiment({
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                        location: "dd4beb_3"
                    }, {
                        autoTrackExposure: !0
                    }).enabled;
                if (null == e) return !1;
                var l = e.hasFeature(s.oNc.COMMUNITY);
                return n && l && o
            }
        },
        461557: (e, t, n) => {
            "use strict";
            n.d(t, {
                sE: () => u,
                L_: () => f,
                nj: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(302685),
                s = n(2590);

            function a(e, t, n, r, o, i, s) {
                try {
                    var a = e[i](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            a(i, r, o, s, l, "next", e)
                        }

                        function l(e) {
                            a(i, r, o, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
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
                        }([i, a])
                    }
                }
            };

            function u(e, t) {
                r.ZP.get({
                    url: s.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
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
                return E.apply(this, arguments)
            }

            function E() {
                return (E = l((function(e, t, n) {
                    var a, l, u;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                a = n.map((function(e) {
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
                                    url: s.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                                    body: 0 === a.length ? [] : a,
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
                                l = c.sent();
                                return [4, (0, i.H)(e, t, !1)];
                            case 2:
                                null != (u = c.sent()) && o.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                                    guildId: e,
                                    roleId: t,
                                    count: u
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
                return p.apply(this, arguments)
            }

            function p() {
                return (p = l((function() {
                    return c(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: s.ANM.APPLICATION_USER_ROLE_CONNECTIONS
                                })];
                            case 1:
                                return [2, e.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        243399: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => o
            });
            var r = (0, n(260561).B)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                return r.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        302685: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => _,
                H: () => N
            });
            var r = n(5387),
                o = n.n(r),
                i = n(281110),
                s = n(744564),
                a = n(327499),
                l = n(664731),
                c = n(2590);

            function u(e, t, n, r, o, i, s) {
                try {
                    var a = e[i](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            u(i, r, o, s, a, "next", e)
                        }

                        function a(e) {
                            u(i, r, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var E = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
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
                        }([i, a])
                    }
                }
            };

            function d(e) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = f((function(e) {
                    var t, n;
                    return E(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                s.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                                    guildId: e
                                });
                                return [4, i.ZP.get({
                                    url: c.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
                                })];
                            case 1:
                                t = r.sent();
                                n = t.body;
                                s.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                                    guildId: e,
                                    roleMemberCount: n
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                s.Z.dispatch({
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

            function _(e) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = f((function(e) {
                    return E(this, (function(t) {
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
            var O = new(o())({
                maxAge: 1e4
            });

            function h(e, t) {
                return i.ZP.get({
                    url: c.ANM.GUILD_ROLE_MEMBER_IDS(e, t)
                }).then((function(t) {
                    a.Z.requestMembersById(e, t.body, !1);
                    return t.body.length
                }))
            }

            function N(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = "".concat(e, "-").concat(t);
                if (!n || null == O.get(r)) {
                    O.set(r, !0);
                    return h(e, t)
                }
                return Promise.resolve(null)
            }
        },
        664731: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
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
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
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
                    return a(this, n)
                }
            }
            var f = 12e4,
                E = {},
                d = {};
            var p = function(e) {
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
                var t = u(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getRoleMemberCount = function(e) {
                    return null != e ? E[e] : null
                };
                r.shouldFetch = function(e) {
                    if (null == e) return !1;
                    var t = d[e];
                    return null == t || Date.now() - t > f
                };
                r.__getLocalVars = function() {
                    return {
                        CACHE_TIME: f,
                        guildRoleMemberCounts: E,
                        guildLastFetchedAt: d
                    }
                };
                return n
            }(r.ZP.Store);
            p.displayName = "GuildRoleMemberCountStore";
            const _ = new p(o.Z, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.roleMemberCount;
                    E[t] = n;
                    d[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.count,
                        o = E[t];
                    if (null == o) return !1;
                    o[n] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.added,
                        o = E[t];
                    if (null == o) return !1;
                    if (null == o[n]) return !1;
                    var i = Object.keys(r).length;
                    o[n] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = E[t];
                    if (null == r) return !1;
                    if (null == r[n]) return !1;
                    r[n] = r[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = E[t];
                    if (null == r) return !1;
                    if (null == r[n]) return !1;
                    r[n] = Math.max(r[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    var t = e.guildId,
                        n = e.role;
                    null == E[t] && (E[t] = {});
                    E[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    delete E[t.id];
                    delete d[t.id]
                }
            })
        },
        193694: (e, t, n) => {
            "use strict";
            n.d(t, {
                sI: () => f,
                S1: () => E,
                lO: () => d,
                TY: () => p,
                Uv: () => _,
                OW: () => S,
                we: () => O,
                _l: () => h,
                d_: () => N,
                Gf: () => b
            });
            var r = n(744564),
                o = n(327499),
                i = n(461557);

            function s(e) {
                var t, n, r, o = 2;
                for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); o--;) {
                    if (n && null != (t = e[n])) return t.call(e);
                    if (r && null != (t = e[r])) return new a(t.call(e));
                    n = "@@asyncIterator", r = "@@iterator"
                }
                throw new TypeError("Object is not async iterable")
            }

            function a(e) {
                function t(e) {
                    if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
                    var t = e.done;
                    return Promise.resolve(e.value).then((function(e) {
                        return {
                            value: e,
                            done: t
                        }
                    }))
                }
                return a = function(e) {
                    this.s = e, this.n = e.next
                }, a.prototype = {
                    s: null,
                    n: null,
                    next: function() {
                        return t(this.n.apply(this.s, arguments))
                    },
                    return: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.resolve({
                            value: e,
                            done: !0
                        }) : t(n.apply(this.s, arguments))
                    },
                    throw: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments))
                    }
                }, new a(e)
            }

            function l(e, t, n, r, o, i, s) {
                try {
                    var a = e[i](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            l(i, r, o, s, a, "next", e)
                        }

                        function a(e) {
                            l(i, r, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
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
                        }([i, a])
                    }
                }
            };

            function f(e) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
                    roles: e
                })
            }

            function E() {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_INIT"
                })
            }

            function d(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
                    id: e,
                    flag: t,
                    allow: n
                })
            }

            function p(e) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
                    id: e
                })
            }

            function _(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
                    id: e,
                    name: t
                })
            }

            function S(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
                    id: e,
                    color: t
                })
            }

            function O(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
                    id: e,
                    hoist: t,
                    mentionable: n
                })
            }

            function h(e, t, n) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
                    id: e,
                    icon: t,
                    unicodeEmoji: n
                })
            }

            function N(e, t) {
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                    roleId: e,
                    roleConnectionConfigurations: t
                })
            }

            function b(e, t, n, r, o) {
                return g.apply(this, arguments)
            }

            function g() {
                g = c((function(e, t, n, a, l) {
                    var f, E, d, p, _, S, O, h, N, b, g, I, y;
                    return u(this, (function(T) {
                        switch (T.label) {
                            case 0:
                                r.Z.dispatch({
                                    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
                                });
                                T.label = 1;
                            case 1:
                                T.trys.push([1, 19, , 20]);
                                f = (M = c((function() {
                                    var n;
                                    return u(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return null == t || 0 === t.length ? [2] : null == (n = t.pop()) || "" === n.name ? [2, f()] : [4, o.Z.updateRole(e, n.id, {
                                                    name: n.name,
                                                    description: n.description,
                                                    permissions: n.permissions,
                                                    color: n.color,
                                                    hoist: n.hoist,
                                                    mentionable: n.mentionable,
                                                    icon: n.icon,
                                                    unicodeEmoji: n.unicodeEmoji
                                                }).then(f, f)];
                                            case 1:
                                                r.sent();
                                                return [2]
                                        }
                                    }))
                                })), function() {
                                    return M.apply(this, arguments)
                                });
                                return null != n && n.length > 0 ? [4, o.Z.batchRoleUpdate(e, n).then(f, f)] : [3, 3];
                            case 2:
                                T.sent();
                                return [3, 5];
                            case 3:
                                return [4, f()];
                            case 4:
                                T.sent();
                                T.label = 5;
                            case 5:
                                if (null == l || null == a) return [3, 18];
                                E = !1, d = !1;
                                T.label = 6;
                            case 6:
                                T.trys.push([6, 12, 13, 18]);
                                _ = s(a);
                                T.label = 7;
                            case 7:
                                return [4, _.next()];
                            case 8:
                                if (!(E = !(S = T.sent()).done)) return [3, 11];
                                O = S.value;
                                h = O;
                                N = l.get(h);
                                return [4, (0, i.L_)(e, h, null != N ? N : [])];
                            case 9:
                                T.sent();
                                T.label = 10;
                            case 10:
                                E = !1;
                                return [3, 7];
                            case 11:
                                return [3, 18];
                            case 12:
                                b = T.sent();
                                d = !0;
                                p = b;
                                return [3, 18];
                            case 13:
                                T.trys.push([13, , 16, 17]);
                                return E && null != _.return ? [4, _.return()] : [3, 15];
                            case 14:
                                T.sent();
                                T.label = 15;
                            case 15:
                                return [3, 17];
                            case 16:
                                if (d) throw p;
                                return [7];
                            case 17:
                                return [7];
                            case 18:
                                return [3, 20];
                            case 19:
                                g = T.sent();
                                r.Z.dispatch({
                                    type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                                    message: null !== (y = null === (I = g.body) || void 0 === I ? void 0 : I.message) && void 0 !== y ? y : Object.values(g.body)[0]
                                });
                                return [2];
                            case 20:
                                r.Z.dispatch({
                                    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
                                });
                                return [2]
                        }
                        var M
                    }))
                }));
                return g.apply(this, arguments)
            }
        },
        189651: (e, t, n) => {
            "use strict";
            n.d(t, {
                iD: () => y,
                Zm: () => T,
                mL: () => M,
                zS: () => A,
                og: () => v,
                aq: () => P
            });
            var r = n(744564),
                o = n(396043),
                i = n(784426),
                s = n(61209),
                a = n(5544),
                l = n(21372),
                c = n(567403),
                u = n(682776),
                f = n(715107),
                E = n(9430),
                d = n(652591),
                p = n(861426),
                _ = n(557177),
                S = n(2590),
                O = n(897196);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
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

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                d.default.track(S.rMx.VIEW_AS_ROLES_SELECTED, g(b({
                    num_roles: Object.keys(t.roles).length
                }, (0, o.hH)(e)), {
                    is_viewing_as_member: t.type === _.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                });
                m(e)
            }

            function T(e, t) {
                var n = p.Z.getData(e);
                if (null != n && n.type === t.type) {
                    d.default.track(S.rMx.VIEW_AS_ROLES_SELECTED, g(b({
                        num_roles: Object.keys(n.roles).length
                    }, (0, o.hH)(e)), {
                        is_viewing_as_member: n.type === _.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: b({}, n, t)
                    });
                    m(e)
                }
            }

            function M(e) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function m(e) {
                var t = f.Z.getChannelId(e),
                    n = s.Z.getChannel(t);
                if (!(null != t && (0, O.AB)(t)) && !u.Z.can(S.Plq.VIEW_CHANNEL, n)) {
                    var r = a.ZP.getDefaultChannel(e);
                    null != r && (0, i.uL)(S.Z5c.CHANNEL(e, r.id))
                }
            }

            function A(e, t, n) {
                var r = new Set(E.Z.getOptedInChannels(e));
                t.forEach((function(e) {
                    return r.add(e)
                }));
                n.forEach((function(e) {
                    return r.delete(e)
                }));
                T(e, {
                    type: _.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function v(e, t) {
                var n = c.Z.getGuild(e);
                if (null != n) {
                    ! function(e, t) {
                        var n = I(a.ZP.getSelectableChannelIds(e)).concat(I(a.ZP.getVocalChannelIds(e))),
                            r = Array.from(t);
                        a.ZP.addConditionalChangeListener((function() {
                            var t = l.ZP.getSelfMember(e);
                            if (null == t) return !1;
                            if (r.some((function(e) {
                                    return !t.roles.includes(e)
                                }))) return !0;
                            var o = I(a.ZP.getSelectableChannelIds(e)).concat(I(a.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !n.includes(e)
                            }));
                            o.length > 0 && A(e, o, []);
                            return !1
                        }))
                    }(e, t);
                    var r = {};
                    t.forEach((function(e) {
                        return r[e] = n.roles[e]
                    }));
                    T(e, {
                        type: _.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function P(e, t) {
                T(e, b({
                    type: _.z.NEW_MEMBER
                }, t))
            }
        },
        979264: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(2590);

            function o(e) {
                return e.type === r.uaV.DEFAULT && null != e.messageReference
            }
        },
        361557: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                a = n(882723),
                l = n(443812),
                c = n(473708),
                u = n(263390),
                f = n.n(u);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || S(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || S(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
                }
            }
            var O = function(e) {
                var t = e.index,
                    n = e.title,
                    o = e.selected;
                return (0, r.jsxs)("div", {
                    className: s()(f().overviewStep, d({}, f().selected, o)),
                    children: [(0, r.jsx)(a.Text, {
                        className: f().stepIndex,
                        variant: "text-sm/normal",
                        children: t + 1
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: f().stepTitle,
                        children: n
                    })]
                })
            };
            const h = function(e) {
                var t = e.className,
                    n = e.title,
                    i = e.stepData,
                    u = e.transitionState,
                    E = e.onClose,
                    d = e.completeButtonText,
                    S = e.overviewFooter,
                    h = e.onNextPressed,
                    N = e.onPrevPressed,
                    b = e.onComplete,
                    g = e.sequencerClassName,
                    I = e.initialStep,
                    y = void 0 === I ? 0 : I,
                    T = e.forceStep,
                    M = e.submitting,
                    m = void 0 !== M && M,
                    A = e.autoCloseOnComplete,
                    v = void 0 === A || A,
                    P = p(o.useState([]), 2),
                    C = P[0],
                    L = P[1],
                    R = p(o.useState(y), 2),
                    x = R[0],
                    j = R[1],
                    D = (0, l.Dt)();
                o.useEffect((function() {
                    L(_(Array(i.length).keys()))
                }), [i.length]);
                var U = null != T ? T : x,
                    w = i[U],
                    Z = 0 === U,
                    B = U === i.length - 1,
                    G = null != d ? d : c.Z.Messages.DONE,
                    F = o.useCallback((function() {
                        null == N || N();
                        j(U - 1)
                    }), [N, U, j]);
                return (0, r.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    className: s()(f().container, t),
                    transitionState: u,
                    "aria-labelledby": D,
                    children: [(0, r.jsxs)("div", {
                        className: f().overviewSidebar,
                        children: [(0, r.jsx)(a.Heading, {
                            id: D,
                            variant: "heading-xl/semibold",
                            className: f().header,
                            children: n
                        }), (0, r.jsx)("div", {
                            className: f().overviewSteps,
                            children: i.map((function(e, t) {
                                return (0, r.jsx)(O, {
                                    index: t,
                                    title: e.overviewTitle,
                                    selected: t === U
                                }, t)
                            }))
                        }), S]
                    }), (0, r.jsxs)("div", {
                        className: f().modal,
                        children: [(0, r.jsxs)(a.ModalContent, {
                            children: [(0, r.jsx)(a.ModalCloseButton, {
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        right: 4,
                                        left: 4
                                    }
                                },
                                onClick: E,
                                className: f().closeButton
                            }), (0, r.jsx)(a.Sequencer, {
                                step: U,
                                steps: C,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: s()(f().sequencer, g),
                                innerClassName: f().innerSequencer,
                                children: w.modalContent
                            })]
                        }), (0, r.jsxs)(a.ModalFooter, {
                            className: f().footer,
                            children: [(0, r.jsx)(a.Button, {
                                type: "submit",
                                submitting: m,
                                onClick: function() {
                                    if (B) {
                                        b();
                                        v && E()
                                    } else {
                                        null == h || h();
                                        j(U + 1)
                                    }
                                },
                                color: a.Button.Colors.GREEN,
                                disabled: w.disableNextStep,
                                children: B ? G : c.Z.Messages.NEXT
                            }), Z ? null : (0, r.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                size: a.Button.Sizes.MIN,
                                onClick: F,
                                children: c.Z.Messages.BACK
                            })]
                        })]
                    })]
                })
            }
        },
        721160: (e, t, n) => {
            "use strict";
            n.d(t, {
                VY: () => l,
                _$: () => c,
                wt: () => f
            });
            var r = n(940060),
                o = n(2590),
                i = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a, l = [o.Plq.ADMINISTRATOR, o.Plq.MANAGE_GUILD, o.Plq.MANAGE_ROLES, o.Plq.MANAGE_CHANNELS, o.Plq.KICK_MEMBERS, o.Plq.BAN_MEMBERS, o.Plq.CREATE_INSTANT_INVITE, o.Plq.MANAGE_NICKNAMES, o.Plq.CHANGE_NICKNAME, o.Plq.MANAGE_GUILD_EXPRESSIONS, o.Plq.CREATE_GUILD_EXPRESSIONS, o.Plq.MANAGE_WEBHOOKS, o.Plq.VIEW_AUDIT_LOG, o.Plq.VIEW_CHANNEL, o.Plq.MANAGE_EVENTS, o.Plq.CREATE_EVENTS, o.Plq.MODERATE_MEMBERS, o.Plq.VIEW_GUILD_ANALYTICS, o.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS, o.Plq.SEND_MESSAGES, o.Plq.SEND_MESSAGES_IN_THREADS, o.Plq.CREATE_PUBLIC_THREADS, o.Plq.CREATE_PRIVATE_THREADS, o.Plq.SEND_TTS_MESSAGES, o.Plq.MANAGE_MESSAGES, o.Plq.MANAGE_THREADS, o.Plq.EMBED_LINKS, o.Plq.ATTACH_FILES, o.Plq.READ_MESSAGE_HISTORY, o.Plq.MENTION_EVERYONE, o.Plq.ADD_REACTIONS, o.Plq.USE_EXTERNAL_EMOJIS, o.Plq.USE_EXTERNAL_STICKERS, o.Plq.USE_APPLICATION_COMMANDS, o.Plq.SEND_VOICE_MESSAGES, o.Plq.USE_CLYDE_AI, o.Plq.CONNECT, o.Plq.SPEAK, o.Plq.MUTE_MEMBERS, o.Plq.DEAFEN_MEMBERS, o.Plq.MOVE_MEMBERS, o.Plq.USE_VAD, o.Plq.PRIORITY_SPEAKER, o.Plq.REQUEST_TO_SPEAK, o.Plq.STREAM, o.Plq.USE_EMBEDDED_ACTIVITIES, o.Plq.USE_SOUNDBOARD, o.Plq.USE_EXTERNAL_SOUNDS, o.Plq.SET_VOICE_CHANNEL_STATUS];

            function c(e) {
                return Object.values(o.Plq).some((function(t) {
                    return r.Z.has(e, t) && !l.includes(t)
                }))
            }
            var u = (s(a = {}, o.Plq.ADMINISTRATOR.toString(), (function() {
                    return i.Z.Messages.ADMINISTRATOR
                })), s(a, o.Plq.MANAGE_GUILD.toString(), (function() {
                    return i.Z.Messages.MANAGE_SERVER
                })), s(a, o.Plq.MANAGE_ROLES.toString(), (function() {
                    return i.Z.Messages.MANAGE_ROLES
                })), s(a, o.Plq.MANAGE_CHANNELS.toString(), (function() {
                    return i.Z.Messages.MANAGE_CHANNELS
                })), s(a, o.Plq.KICK_MEMBERS.toString(), (function() {
                    return i.Z.Messages.KICK_MEMBERS
                })), s(a, o.Plq.BAN_MEMBERS.toString(), (function() {
                    return i.Z.Messages.BAN_MEMBERS
                })), s(a, o.Plq.CREATE_INSTANT_INVITE.toString(), (function() {
                    return i.Z.Messages.CREATE_INSTANT_INVITE
                })), s(a, o.Plq.MANAGE_NICKNAMES.toString(), (function() {
                    return i.Z.Messages.MANAGE_NICKNAMES
                })), s(a, o.Plq.CHANGE_NICKNAME.toString(), (function() {
                    return i.Z.Messages.CHANGE_NICKNAME
                })), s(a, o.Plq.MANAGE_GUILD_EXPRESSIONS.toString(), (function() {
                    return i.Z.Messages.MANAGE_EXPRESSIONS
                })),
                s(a, o.Plq.CREATE_GUILD_EXPRESSIONS.toString(), (function() {
                    return i.Z.Messages.CREATE_EXPRESSIONS
                })), s(a, o.Plq.MANAGE_WEBHOOKS.toString(), (function() {
                    return i.Z.Messages.MANAGE_WEBHOOKS
                })), s(a, o.Plq.VIEW_AUDIT_LOG.toString(), (function() {
                    return i.Z.Messages.VIEW_AUDIT_LOG
                })), s(a, o.Plq.VIEW_CHANNEL.toString(), (function() {
                    return i.Z.Messages.READ_MESSAGES
                })), s(a, o.Plq.SEND_MESSAGES.toString(), (function() {
                    return i.Z.Messages.SEND_MESSAGES
                })), s(a, o.Plq.SEND_TTS_MESSAGES.toString(), (function() {
                    return i.Z.Messages.SEND_TTS_MESSAGES
                })), s(a, o.Plq.MANAGE_MESSAGES.toString(), (function() {
                    return i.Z.Messages.MANAGE_MESSAGES
                })), s(a, o.Plq.EMBED_LINKS.toString(), (function() {
                    return i.Z.Messages.EMBED_LINKS
                })), s(a, o.Plq.ATTACH_FILES.toString(), (function() {
                    return i.Z.Messages.ATTACH_FILES
                })), s(a, o.Plq.READ_MESSAGE_HISTORY.toString(), (function() {
                    return i.Z.Messages.READ_MESSAGE_HISTORY
                })), s(a, o.Plq.MENTION_EVERYONE.toString(), (function() {
                    return i.Z.Messages.MENTION_EVERYONE
                })),
                s(a, o.Plq.ADD_REACTIONS.toString(), (function() {
                    return i.Z.Messages.ADD_REACTIONS
                })), s(a, o.Plq.USE_EXTERNAL_EMOJIS.toString(), (function() {
                    return i.Z.Messages.USE_EXTERNAL_EMOJIS
                })), s(a, o.Plq.USE_EXTERNAL_STICKERS.toString(), (function() {
                    return i.Z.Messages.USE_EXTERNAL_STICKERS
                })), s(a, o.Plq.USE_APPLICATION_COMMANDS.toString(), (function() {
                    return i.Z.Messages.USE_APPLICATION_COMMANDS
                })), s(a, o.Plq.SEND_VOICE_MESSAGES.toString(), (function() {
                    return i.Z.Messages.SEND_VOICE_MESSAGE
                })), s(a, o.Plq.CONNECT.toString(), (function() {
                    return i.Z.Messages.CONNECT
                })), s(a, o.Plq.SPEAK.toString(), (function() {
                    return i.Z.Messages.SPEAK
                })), s(a, o.Plq.MUTE_MEMBERS.toString(), (function() {
                    return i.Z.Messages.MUTE_MEMBERS
                })), s(a, o.Plq.DEAFEN_MEMBERS.toString(), (function() {
                    return i.Z.Messages.DEAFEN_MEMBERS
                })), s(a, o.Plq.MOVE_MEMBERS.toString(), (function() {
                    return i.Z.Messages.MOVE_MEMBERS
                })), s(a, o.Plq.USE_VAD.toString(), (function() {
                    return i.Z.Messages.USE_VAD
                })), s(a, o.Plq.PRIORITY_SPEAKER.toString(), (function() {
                    return i.Z.Messages.PRIORITY_SPEAKER
                })), s(a, o.Plq.CREATE_PUBLIC_THREADS.toString(), (function() {
                    return i.Z.Messages.CREATE_PUBLIC_THREADS
                })), s(a, o.Plq.CREATE_PRIVATE_THREADS.toString(), (function() {
                    return i.Z.Messages.CREATE_PRIVATE_THREADS
                })), s(a, o.Plq.SEND_MESSAGES_IN_THREADS.toString(), (function() {
                    return i.Z.Messages.SEND_MESSAGES_IN_THREADS
                })), s(a, o.Plq.MANAGE_THREADS.toString(), (function() {
                    return i.Z.Messages.MANAGE_THREADS
                })), s(a, o.Plq.MANAGE_EVENTS.toString(), (function() {
                    return i.Z.Messages.MANAGE_EVENTS
                })), s(a, o.Plq.CREATE_EVENTS.toString(), (function() {
                    return i.Z.Messages.CREATE_EVENTS
                })), s(a, o.Plq.MODERATE_MEMBERS.toString(), (function() {
                    return i.Z.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL
                })), s(a, o.Plq.REQUEST_TO_SPEAK.toString(), (function() {
                    return i.Z.Messages.REQUEST_TO_SPEAK
                })), s(a, o.Plq.VIEW_GUILD_ANALYTICS.toString(), (function() {
                    return i.Z.Messages.VIEW_GUILD_ANALYTICS
                })), s(a, o.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString(), (function() {
                    return i.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS
                })), s(a, o.Plq.STREAM.toString(), (function() {
                    return i.Z.Messages.VIDEO
                })), s(a, o.Plq.USE_EMBEDDED_ACTIVITIES.toString(), (function() {
                    return i.Z.Messages.USE_EMBEDDED_ACTIVITIES
                })), s(a, o.Plq.USE_SOUNDBOARD.toString(), (function() {
                    return i.Z.Messages.USE_SOUNDBOARD
                })), s(a, o.Plq.USE_EXTERNAL_SOUNDS.toString(), (function() {
                    return i.Z.Messages.USE_EXTERNAL_SOUNDS
                })), s(a, o.Plq.USE_CLYDE_AI.toString(), (function() {
                    return i.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI
                })), s(a, o.Plq.SET_VOICE_CHANNEL_STATUS.toString(), (function() {
                    return i.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
                })), a);

            function f(e) {
                var t = e.toString(),
                    n = u[t];
                if (null == n) throw new Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
                return n()
            }
        },
        589591: (e, t, n) => {
            "use strict";
            n.d(t, {
                cp: () => f,
                QA: () => E,
                BF: () => d
            });
            var r = n(396043),
                o = n(979264),
                i = n(652591),
                s = n(940455),
                a = n(2590),
                l = n(936023),
                c = n.n(l);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                return (0, o.Z)(e) && e.messageReference.guild_id === s.M_ || null != e.author && e.author.id === s.c9
            }

            function E() {
                return c()
            }
            var d = function(e) {
                i.default.track(a.rMx.USER_FLOW_TRANSITION, function(e) {
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
                    flow_type: s.tA,
                    from_step: e.fromStep,
                    to_step: e.toStep
                }, (0, r.hH)(e.guildId)))
            }
        },
        834883: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => de
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                a = n(940060),
                l = n(202351),
                c = n(795308),
                u = n(575945),
                f = n(882723),
                E = n(342147),
                d = n(773011),
                p = n(243399),
                _ = n(348592),
                S = n(2590),
                O = n(473708);

            function h(e) {
                var t = (0,
                        p.E)(null != e ? e : ""),
                    n = O.Z.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
                        communityGuidelines: _.Z.getArticleURL(S.BhN.PUBLIC_GUILD_GUILDLINES),
                        typesOfGuilds: _.Z.getArticleURL(S.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                    }),
                    r = O.Z.Messages.COMMUNITY_POLICY_HELP.format({
                        helpdeskArticle: _.Z.getArticleURL(S.BhN.PUBLIC_GUILD_GUILDLINES)
                    });
                return t && null != e ? n : r
            }
            var N = n(703790),
                b = n(193694),
                g = n(424127),
                I = n(361557),
                y = n(721160),
                T = n(64234),
                M = n(5544),
                m = n(567403),
                A = n(840922),
                v = n(473903),
                P = n(443812),
                C = n(83623),
                L = n(386991),
                R = n(652591),
                x = n(563135),
                j = n(589591),
                D = n(940455),
                U = n(879645),
                w = n.n(U),
                Z = n(191696),
                B = n.n(Z),
                G = n(78205),
                F = n.n(G),
                q = n(901182),
                k = n.n(q),
                Y = n(277329),
                H = n.n(Y),
                V = n(99846),
                K = n.n(V),
                W = n(277292),
                X = n.n(W),
                z = n(864244),
                Q = n.n(z);

            function $(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function J(e, t, n, r, o, i, s) {
                try {
                    var a = e[i](s),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function ee(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ee(e, t, n[t])
                    }))
                }
                return e
            }

            function ne(e, t) {
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

            function re(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return $(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var oe = function(e, t) {
                    var n, r, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
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
                            }([i, a])
                        }
                    }
                },
                ie = function(e) {
                    var t = e.guild,
                        n = e.onAcceptVerificationLevel,
                        o = e.onAcceptContentFilter,
                        i = e.disableContentFilter,
                        s = e.disableVerificationLevel,
                        a = e.headerId,
                        c = e.theme,
                        E = (0, l.e7)([m.Z], (function() {
                            return m.Z.getGuild(t.id)
                        }), [t.id]),
                        d = null != E && E.verificationLevel > S.sFg.NONE,
                        p = (null == E ? void 0 : E.explicitContentFilter) === S.lxg.ALL_MEMBERS,
                        _ = (0, u.wj)(c) ? K() : X();
                    return (0, r.jsxs)("div", {
                        className: w().container,
                        children: [(0, r.jsxs)("div", {
                            className: w().content,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: _,
                                width: 80
                            }), (0, r.jsx)(f.Heading, {
                                variant: "heading-xl/semibold",
                                className: w().header,
                                id: a,
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
                            }), (0, r.jsx)(f.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: w().headerCaption,
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
                            })]
                        }), (0, r.jsxs)("div", {
                            className: w().form,
                            children: [(0, r.jsx)(f.FormTitle, {
                                children: O.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
                            }), (0, r.jsx)(f.FormText, {
                                type: f.FormTextTypes.DESCRIPTION,
                                className: w().description,
                                children: d ? O.Z.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : O.Z.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
                            }), (0, r.jsx)(f.Checkbox, {
                                type: f.Checkbox.Types.ROW,
                                disabled: s,
                                value: t.verificationLevel > S.sFg.NONE,
                                onChange: n,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    children: O.Z.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: w().form,
                            children: [(0, r.jsx)(f.FormTitle, {
                                children: O.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
                            }), (0, r.jsx)(f.FormText, {
                                type: f.FormTextTypes.DESCRIPTION,
                                className: w().description,
                                children: p ? O.Z.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : O.Z.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
                            }), (0, r.jsx)(f.Checkbox, {
                                type: f.Checkbox.Types.ROW,
                                disabled: i,
                                value: t.explicitContentFilter === S.lxg.ALL_MEMBERS,
                                onChange: o,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    children: O.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH
                                })
                            })]
                        })]
                    })
                },
                se = function(e) {
                    var t = e.selectableChannels,
                        n = e.onRuleChannelChange,
                        i = e.ruleChannel,
                        s = e.onPublicUpdatesChannelChange,
                        a = e.publicUpdatesChannel,
                        l = e.headerId,
                        c = e.theme,
                        E = e.guildId;
                    o.useEffect((function() {
                        (0, j.BF)({
                            fromStep: D.IO.SAFETY_CHECK,
                            toStep: D.IO.BASICS,
                            guildId: E
                        })
                    }), [E]);
                    var d = (0, u.wj)(c) ? B() : F();
                    return (0, r.jsxs)("div", {
                        className: w().container,
                        children: [(0, r.jsxs)("div", {
                            className: w().content,
                            children: [(0, r.jsx)("img", {
                                alt: "",
                                src: d,
                                width: 80
                            }), (0, r.jsx)(f.Heading, {
                                variant: "heading-xl/semibold",
                                className: w().header,
                                id: l,
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
                            }), (0, r.jsx)(f.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: w().headerCaption,
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
                            })]
                        }), (0, r.jsxs)("div", {
                            className: w().form,
                            children: [(0, r.jsx)(f.FormTitle, {
                                children: O.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
                            }), (0, r.jsx)(f.FormText, {
                                type: f.FormTextTypes.DESCRIPTION,
                                className: w().description,
                                children: O.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
                            }), (0,
                                r.jsx)(f.SearchableSelect, {
                                options: t,
                                onChange: n,
                                value: i,
                                maxVisibleItems: 4
                            })]
                        }), (0, r.jsxs)("div", {
                            className: w().form,
                            children: [(0, r.jsx)(f.FormTitle, {
                                children: O.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
                            }), (0, r.jsx)(f.FormText, {
                                type: f.FormTextTypes.DESCRIPTION,
                                className: w().description,
                                children: O.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
                            }), (0, r.jsx)(f.SearchableSelect, {
                                options: t,
                                onChange: s,
                                value: a,
                                popoutPosition: "top",
                                maxVisibleItems: 4
                            })]
                        })]
                    })
                },
                ae = function(e) {
                    var t = e.guild,
                        n = e.policyAccepted,
                        i = e.everyoneRolePermissionsAccepted,
                        a = e.onAcceptPolicy,
                        l = e.onAcceptDefaultNotifications,
                        c = e.onAcceptEveryoneRolePermissions,
                        E = e.disableDefaultNotifications,
                        d = e.disableEveryoneRolePermissions,
                        p = e.headerId,
                        _ = e.theme,
                        N = (0, u.wj)(_) ? k() : H();
                    o.useEffect((function() {
                        (0, j.BF)({
                            fromStep: D.IO.BASICS,
                            toStep: D.IO.FINISH,
                            guildId: t.id
                        })
                    }), [t.id]);
                    var b = h(null == t ? void 0 : t.id);
                    return (0, r.jsxs)("div", {
                        className: w().container,
                        children: [(0, r.jsxs)("div", {
                            className: w().content,
                            children: [(0,
                                r.jsx)("img", {
                                alt: "",
                                src: N,
                                width: 80
                            }), (0, r.jsx)(f.Heading, {
                                variant: "heading-xl/semibold",
                                className: w().header,
                                id: p,
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                            }), (0, r.jsx)(f.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: w().headerCaption,
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
                            })]
                        }), (0, r.jsx)("div", {
                            className: w().form,
                            children: (0, r.jsx)(f.Tooltip, {
                                text: E ? O.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                                "aria-label": !!E && O.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                                children: function(e) {
                                    return (0, r.jsx)("div", ne(te({}, e), {
                                        children: (0, r.jsx)(f.Checkbox, {
                                            type: f.Checkbox.Types.ROW,
                                            disabled: E,
                                            value: t.defaultMessageNotifications === S.bL.ONLY_MENTIONS,
                                            onChange: l,
                                            className: s()(ee({}, w().disabled, E)),
                                            children: (0, r.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                                    infoHook: function() {
                                                        return (0, r.jsx)(f.Tooltip, {
                                                            text: O.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                            "aria-label": O.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                            children: function(e) {
                                                                return (0, r.jsx)(L.Z, te({
                                                                    className: w().icon
                                                                }, e))
                                                            }
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }))
                                }
                            })
                        }), (0, r.jsx)(f.Tooltip, {
                            text: d ? O.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                            "aria-label": !!d && O.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                            children: function(e) {
                                return (0, r.jsx)("div", ne(te({}, e), {
                                    className: w().checkboxOption,
                                    children: (0, r.jsx)(f.Checkbox, {
                                        type: f.Checkbox.Types.ROW,
                                        disabled: d,
                                        value: i,
                                        onChange: c,
                                        className: s()(ee({}, w().disabled, d)),
                                        children: (0, r.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                                                infoHook: function() {
                                                    return (0, r.jsx)(f.Tooltip, {
                                                        text: O.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                        "aria-label": O.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                        children: function(e) {
                                                            return (0,
                                                                r.jsx)(L.Z, te({
                                                                className: w().icon
                                                            }, e))
                                                        }
                                                    })
                                                }
                                            })
                                        })
                                    })
                                }))
                            }
                        }), (0, r.jsxs)("div", {
                            className: w().form,
                            children: [(0, r.jsx)(f.FormTitle, {
                                children: O.Z.Messages.PUBLIC_GUILD_POLICY_TITLE
                            }), (0, r.jsx)(f.FormText, {
                                type: f.FormTextTypes.DESCRIPTION,
                                className: w().description,
                                children: b
                            }), (0, r.jsx)(f.Checkbox, {
                                type: f.Checkbox.Types.ROW,
                                value: n,
                                onChange: a,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    children: O.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                                })
                            })]
                        })]
                    })
                };

            function le(e) {
                var t = e.guild,
                    n = t.getRole(t.id);
                if (null == n) return null;
                var o = n.name,
                    i = n.color;
                return (0, r.jsx)("div", {
                    className: w().role,
                    children: (0, r.jsxs)("span", {
                        className: w().roleRow,
                        children: [(0, r.jsx)(f.RoleDot, {
                            className: w().roleDot,
                            color: i.toString(),
                            background: !1,
                            tooltip: !1
                        }), (0, r.jsx)(f.Text, {
                            className: w().roleName,
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            children: o
                        })]
                    })
                })
            }

            function ce(e) {
                var t = e.enabledPermissions,
                    n = e.onGetPermisisonName;
                return (0, r.jsxs)("div", {
                    className: w().tableContainer,
                    children: [(0, r.jsx)(f.Text, {
                        className: w().tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: O.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, r.jsx)("div", {
                        className: w().permissionsTable,
                        children: t.map((function(e, t) {
                            return (0, r.jsxs)("div", {
                                className: w().permissionRow,
                                children: [(0, r.jsx)("div", {
                                    className: w().bulletWarning
                                }), (0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-normal",
                                    children: n(e)
                                })]
                            }, t)
                        }))
                    })]
                })
            }

            function ue(e) {
                var t = e.disabledPermissions,
                    n = e.onGetPermisisonName,
                    o = O.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
                t.length === D.$X.length && (o = O.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED);
                return (0, r.jsxs)("div", {
                    className: w().tableContainer,
                    children: [(0, r.jsx)(f.Text, {
                        className: w().tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: o
                    }), (0, r.jsx)("div", {
                        className: w().permissionsTable,
                        children: t.map((function(e, t) {
                            return (0, r.jsxs)("div", {
                                className: w().permissionRow,
                                children: [(0, r.jsx)("div", {
                                    className: w().bullet
                                }), (0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: n(e)
                                })]
                            }, t)
                        }))
                    })]
                })
            }

            function fe(e) {
                var t = e.permissions,
                    n = function(e) {
                        switch (e.toString()) {
                            case S.Plq.MENTION_EVERYONE.toString():
                                return O.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                            case S.Plq.CREATE_GUILD_EXPRESSIONS.toString():
                                return O.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
                            case S.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
                                return O.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
                            default:
                                return (0, y.wt)(e)
                        }
                    },
                    o = t.enabledPermissions,
                    i = t.disabledPermissions;
                return (0, r.jsxs)("div", {
                    className: w().table,
                    children: [0 !== o.length ? (0, r.jsx)(ce, {
                        enabledPermissions: o,
                        onGetPermisisonName: n
                    }) : null, (0, r.jsx)(ue, {
                        disabledPermissions: i,
                        onGetPermisisonName: n
                    })]
                })
            }
            var Ee = function(e) {
                var t = e.guild,
                    n = e.policyAccepted,
                    i = e.onAcceptPolicy,
                    s = e.headerId,
                    a = e.theme,
                    l = (0, u.wj)(a) ? k() : H(),
                    E = h(null == t ? void 0 : t.id);
                o.useEffect((function() {
                    (0, j.BF)({
                        fromStep: D.IO.BASICS,
                        toStep: D.IO.FINISH,
                        guildId: t.id
                    })
                }), [t.id]);
                var d = o.useMemo((function() {
                    var e = [],
                        n = [];
                    D.$X.map((function(r) {
                        x.ZP.canEveryone(r, t) ? e.push(r) : n.push(r)
                    }));
                    return {
                        enabledPermissions: e,
                        disabledPermissions: n
                    }
                }), [t]);
                return (0, r.jsxs)("div", {
                    className: w().container,
                    children: [(0, r.jsxs)("div", {
                        className: w().content,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: l,
                            width: 80
                        }), (0, r.jsx)(f.Heading, {
                            variant: "heading-xl/semibold",
                            className: w().updatedHeader,
                            id: s,
                            children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                        })]
                    }), (0, r.jsxs)("div", {
                        className: w().updatedForm,
                        children: [(0, r.jsx)(f.FormTitle, {
                            className: w().formTitle,
                            children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
                        }), (0, r.jsxs)("div", {
                            className: w().checklistRow,
                            children: [(0, r.jsx)(C.Z, {
                                className: w().checklistIcon,
                                color: c.Z.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.Z.unsafe_rawColors.WHITE_500.css
                            }), (0, r.jsx)(f.Text, {
                                variant: "text-md/normal",
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: function() {
                                        return (0, r.jsx)(f.Tooltip, {
                                            text: O.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                            "aria-label": O.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                            children: function(e) {
                                                return (0, r.jsx)(L.Z, te({
                                                    className: w().icon
                                                }, e))
                                            }
                                        })
                                    }
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: w().checklistRow,
                            children: [(0, r.jsx)(C.Z, {
                                className: w().checklistIcon,
                                color: c.Z.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.Z.unsafe_rawColors.WHITE_500.css
                            }), (0, r.jsx)(f.Text, {
                                variant: "text-md/normal",
                                children: O.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, r.jsx)(le, {
                                guild: t
                            })]
                        }), (0, r.jsx)(fe, {
                            permissions: d
                        })]
                    }), (0, r.jsxs)("div", {
                        className: w().updatedForm,
                        children: [(0, r.jsx)(f.FormTitle, {
                            className: w().formTitle,
                            children: O.Z.Messages.PUBLIC_GUILD_POLICY_TITLE
                        }), (0, r.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: w().description,
                            children: E
                        }), (0,
                            r.jsx)(f.Checkbox, {
                            type: f.Checkbox.Types.ROW,
                            value: n,
                            onChange: i,
                            children: (0, r.jsx)(f.Text, {
                                className: w().acceptText,
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: O.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                            })
                        })]
                    })]
                })
            };
            const de = function(e) {
                var t = e.transitionState,
                    n = e.onClose;
                o.useEffect((function() {
                    R.default.track(S.rMx.OPEN_MODAL, {
                        type: D.tA
                    })
                }), []);
                var i, s = (0, l.cj)([g.Z], (function() {
                        return g.Z.getProps()
                    })).guild,
                    c = (0, l.e7)([T.Z], (function() {
                        return T.Z.theme
                    })),
                    u = re(o.useState(!1), 2),
                    f = u[0],
                    p = u[1],
                    _ = re(o.useState(!D.$X.some((function(e) {
                        return x.ZP.canEveryone(e, s)
                    }))), 2),
                    h = _[0],
                    y = _[1],
                    m = re(o.useState(D.b4), 2),
                    C = m[0],
                    L = m[1],
                    j = re(o.useState(D.b4), 2),
                    U = j[0],
                    Z = j[1],
                    B = re(o.useState(null == s ? void 0 : s.defaultMessageNotifications), 1)[0],
                    G = re(o.useState(null == s ? void 0 : s.verificationLevel), 1)[0],
                    F = re(o.useState(null == s ? void 0 : s.explicitContentFilter), 1)[0],
                    q = re(o.useState(h), 1)[0],
                    k = null == s ? void 0 : s.getRole(null == s ? void 0 : s.id),
                    Y = (0, l.e7)([M.ZP], (function() {
                        return null != s ? M.ZP.getChannels(s.id) : null
                    }), [s]),
                    H = (0, P.Dt)(),
                    V = (0, E.D2)(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : "").enabled;
                if (null == s) return null;
                var K = [{
                    value: D.b4,
                    label: O.Z.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
                }];
                Y[M.sH].forEach((function(e) {
                    var t = e.channel;
                    t.type === S.d4z.GUILD_TEXT && K.push({
                        value: t.id,
                        label: (0, d.F6)(t, v.default, A.Z, !0)
                    })
                }));
                var W, X, z = G !== S.sFg.NONE,
                    $ = F === S.lxg.ALL_MEMBERS,
                    ee = B === S.bL.ONLY_MENTIONS,
                    le = q,
                    ce = (X = (W = function() {
                        var e, t, r;
                        return oe(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (null == k || !f) return [2];
                                    (e = new Set(s.features)).add(S.oNc.COMMUNITY);
                                    t = h ? a.Z.remove(k.permissions, D.mu) : k.permissions;
                                    r = ne(te({}, k), {
                                        permissions: t
                                    });
                                    return t === k.permissions ? [3, 2] : [4, (0, b.Gf)(s.id, [r])];
                                case 1:
                                    o.sent();
                                    o.label = 2;
                                case 2:
                                    N.Z.updateGuild({
                                        features: e,
                                        rulesChannelId: C,
                                        publicUpdatesChannelId: U
                                    });
                                    return [4, N.Z.saveGuild(s.id, {
                                        features: e,
                                        rulesChannelId: C,
                                        verificationLevel: s.verificationLevel,
                                        explicitContentFilter: s.explicitContentFilter,
                                        publicUpdatesChannelId: U,
                                        defaultMessageNotifications: s.defaultMessageNotifications
                                    })];
                                case 3:
                                    o.sent();
                                    setTimeout((function() {
                                        n()
                                    }), 0);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var o = W.apply(e, t);

                            function i(e) {
                                J(o, n, r, i, s, "next", e)
                            }

                            function s(e) {
                                J(o, n, r, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function() {
                        return X.apply(this, arguments)
                    }),
                    ue = (0, r.jsx)(ie, {
                        guild: s,
                        disableVerificationLevel: z,
                        disableContentFilter: $,
                        onAcceptVerificationLevel: function(e, t) {
                            t ? t && N.Z.updateGuild({
                                verificationLevel: S.sFg.LOW
                            }) : N.Z.updateGuild({
                                verificationLevel: G
                            })
                        },
                        onAcceptContentFilter: function(e, t) {
                            t ? N.Z.updateGuild({
                                explicitContentFilter: S.lxg.ALL_MEMBERS
                            }) : N.Z.updateGuild({
                                explicitContentFilter: F
                            })
                        },
                        headerId: H,
                        theme: c
                    }),
                    fe = (0, r.jsx)(se, {
                        selectableChannels: K,
                        onRuleChannelChange: function(e) {
                            L(e)
                        },
                        onPublicUpdatesChannelChange: function(e) {
                            Z(e)
                        },
                        ruleChannel: C,
                        publicUpdatesChannel: U,
                        headerId: H,
                        theme: c,
                        guildId: s.id
                    }),
                    de = V ? (0, r.jsx)(Ee, {
                        guild: s,
                        policyAccepted: f,
                        onAcceptPolicy: function(e, t) {
                            if (t) {
                                p(!0);
                                ee || N.Z.updateGuild({
                                    defaultMessageNotifications: S.bL.ONLY_MENTIONS
                                });
                                h || null == k || y(!0)
                            } else {
                                p(!1);
                                ee && N.Z.updateGuild({
                                    defaultMessageNotifications: B
                                });
                                h && null != k && y(!1)
                            }
                        },
                        headerId: H,
                        theme: c
                    }) : (0, r.jsx)(ae, {
                        guild: s,
                        disableDefaultNotifications: ee,
                        disableEveryoneRolePermissions: le,
                        policyAccepted: f,
                        everyoneRolePermissionsAccepted: h,
                        onAcceptPolicy: function(e, t) {
                            p(!!t)
                        },
                        onAcceptDefaultNotifications: function(e, t) {
                            t ? N.Z.updateGuild({
                                defaultMessageNotifications: S.bL.ONLY_MENTIONS
                            }) : N.Z.updateGuild({
                                defaultMessageNotifications: B
                            })
                        },
                        onAcceptEveryoneRolePermissions: function(e, t) {
                            null != k && y(!!t)
                        },
                        headerId: H,
                        theme: c
                    }),
                    pe = (0, r.jsx)("img", {
                        alt: "",
                        src: Q(),
                        className: w().footerImage,
                        width: 240
                    }),
                    _e = [{
                        modalContent: ue,
                        disableNextStep: s.explicitContentFilter !== S.lxg.ALL_MEMBERS || s.verificationLevel === S.sFg.NONE,
                        overviewTitle: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
                    }, {
                        modalContent: fe,
                        disableNextStep: null == C || null == U,
                        overviewTitle: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
                    }, {
                        modalContent: de,
                        disableNextStep: !f,
                        overviewTitle: O.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
                    }];
                return (0, r.jsx)(I.Z, {
                    stepData: _e,
                    title: O.Z.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
                    transitionState: t,
                    onClose: function() {
                        n();
                        R.default.track(S.rMx.MODAL_DISMISSED, {
                            type: D.tA
                        })
                    },
                    completeButtonText: O.Z.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
                    onComplete: ce,
                    overviewFooter: pe,
                    sequencerClassName: w().container,
                    autoCloseOnComplete: !1
                })
            }
        },
        424158: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(730381),
                o = n.n(r),
                i = n(169376);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
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
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
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
                    t && u(e, t)
                }(n, e);
                var t = E(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).code = e.code || "";
                    r.temporary = e.temporary || !1;
                    r.revoked = e.revoked || !1;
                    r.uses = e.uses || 0;
                    r.maxUses = e.maxUses || 0;
                    r.maxAge = e.maxAge || 0;
                    r.createdAt = e.createdAt || new Date;
                    r.channel = e.channel;
                    r.guild = e.guild;
                    r.inviter = e.inviter || null;
                    r.targetType = e.targetType || null;
                    r.targetUser = e.targetUser || null;
                    r.targetApplication = e.targetApplication || null;
                    r.type = e.type || null;
                    r.flags = e.flags || 0;
                    return r
                }
                var r = n.prototype;
                r.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (o()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                r.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return o()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                r.toString = function() {
                    return this.code
                };
                n.createFromServer = function(e) {
                    var t;
                    return new n(l(function(e) {
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
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: o()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return n
            }(i.Z)
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => s,
                Dt: () => a,
                FG: () => l
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                a = function() {
                    return (0, i.Z)((function() {
                        return s()
                    }))
                },
                l = function(e) {
                    return (0, e.children)(a())
                }
        },
        386991: (e, t, n) => {
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

            function s(e, t) {
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

            function l(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    l = e.height,
                    c = void 0 === l ? 16 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    E = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 12 12",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: E,
                        d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                    })
                }))
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
            }));

            function s(e, t, n) {
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
                        s(e, t, n[t])
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
            var u, f, E = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                d = n(680918);
            u = d.showModal;
            E = d.updateModalProps;
            f = n(264817).Mr;

            function p(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    s = e.hooks,
                    c = (void 0 === s ? {} : s).onEarlyClose,
                    d = function() {
                        null == c || c()
                    },
                    p = function(e) {
                        f(h);
                        n(e)
                    },
                    S = function(e) {
                        f(h);
                        r(e)
                    },
                    O = function(e) {
                        var t = e.res;
                        E(h, N, d, l(a({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != u) var h = u(N, d, i);
                else null == c || c();

                function N(e) {
                    E(h, N, d, l(a({}, i), {
                        isLoading: !0
                    }));
                    return _({
                        promiseFn: t,
                        resolve: p,
                        reject: S,
                        code: e,
                        mfaCodeHandler: O,
                        isModalOpen: !0
                    })
                }
            }

            function _(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    s = void 0 === i ? p : i,
                    l = e.isModalOpen,
                    u = void 0 !== l && l,
                    f = c(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, u)) return s(a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function S(e, t) {
                var n, o, s = null != t ? t : {},
                    l = s.checkEnabled,
                    u = void 0 === l ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : l,
                    f = c(s, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(u) ? p : _)(a({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
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

            function l(e, t, n) {
                var r = t.trackedActionData,
                    i = a(t, ["trackedActionData"]),
                    l = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, s({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e));
                        (0,
                            o.trackNetworkAction)(r.event, s({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, l, a));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return l(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return l(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return l(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return l(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.ZP.delete, e, "del")
                }
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

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
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
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function l(e, t, n) {
                return (0, o.h7)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function c(e, t, n, r) {
                return (0, o.o)(e, a(t, n, r))
            }
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(e) {
                var t = (0, r.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        }
    }
]);
//# sourceMappingURL=164a87ad77e2b2023d14.js.map