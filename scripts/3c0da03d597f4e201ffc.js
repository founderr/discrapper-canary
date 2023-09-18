"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [25895, 96043, 71402], {
        971402: (t, e, n) => {
            n.d(e, {
                Zy: () => f,
                vq: () => d,
                jW: () => p
            });
            var r = n(744564),
                o = n(26468),
                i = n(120415),
                u = n(73105),
                a = n(2590);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function c(t) {
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

            function s(t) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: t
                })
            }

            function f(t) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(t)
                    }))
                }))
            }

            function d(t, e, n, r) {
                t.stopPropagation();
                if (null == t.currentTarget.contains || t.currentTarget.contains(t.target)) {
                    var l, f, d = 0,
                        p = 0;
                    if ("pageX" in t) {
                        d = t.pageX;
                        p = t.pageY
                    }
                    if (0 === d && 0 === p) {
                        var h, y = null === (h = t.target) || void 0 === h ? void 0 : h.getBoundingClientRect(),
                            v = null != y ? y : {},
                            g = v.left,
                            b = void 0 === g ? 0 : g,
                            _ = v.top,
                            O = void 0 === _ ? 0 : _,
                            S = v.width,
                            m = void 0 === S ? 0 : S,
                            E = v.height;
                        d = b + m / 2;
                        p = O + (void 0 === E ? 0 : E) / 2
                    }
                    var I = {
                        render: e,
                        renderLazy: r,
                        target: null !== (l = t.target) && void 0 !== l ? l : t.currentTarget,
                        rect: new DOMRect(d, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.nI)()) var T = (0, u.RD)((function() {
                        T();
                        s(I)
                    }));
                    else {
                        t.preventDefault();
                        s(I)
                    }
                }
            }

            function p(t, e, n) {
                d(t, void 0, n, e)
            }
        },
        735885: (t, e, n) => {
            n.d(e, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
            });
            var r = n(744564);

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
        810978: (t, e, n) => {
            n.d(e, {
                GZ: () => h,
                Gn: () => v,
                Y2: () => g,
                mE: () => b
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                u = n(615796),
                a = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function f(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function d(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            f(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            f(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(t, e) {
                var n, r, o, i, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = e.call(t, u)
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
                        }([i, a])
                    }
                }
            };

            function h(t, e, n, r, o) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = d((function(t, e, n, s, f) {
                    var d, h, y, v;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: t
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(t),
                                    oldFormErrors: !0
                                };
                                h = {};
                                null != e && (h.country_code = e);
                                null != n && (h.payment_source_id = n);
                                null != s && (h.include_unpublished = s);
                                null != f && (h.revenue_surface = f);
                                d.query = h;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                y = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: t,
                                    subscriptionPlans: y.body
                                });
                                return [3, 6];
                            case 5:
                                v = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: t
                                });
                                (0, a.q2)(v);
                                throw new i.Z(v);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(t, e) {
                return Promise.all(t.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(t) {
                    return h(t, e)
                })))
            }

            function g(t, e, n) {
                return Promise.all(s.YQ.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(r) {
                    return h(r, t, e, void 0, n)
                })))
            }

            function b() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        919244: (t, e, n) => {
            n.d(e, {
                Z: () => b
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
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
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var g = function(t) {
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
                        c = e.children,
                        f = e.error,
                        d = e.isLoading,
                        p = e.maxLength,
                        h = e.transitionState,
                        y = e.helpMessage,
                        v = e.retryPrompt,
                        g = e.retrySuccessMessage,
                        b = this.state,
                        _ = b.code,
                        O = b.errorMessage,
                        S = b.retrySuccess,
                        m = o.Children.count(c) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        E = null != v ? (0, r.jsxs)(a.Text, {
                            className: u()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0,
                                r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: u()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: v
                                })
                            })]
                        }) : null,
                        I = S ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: g
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
                                }) : null, m, I, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: _,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0,
                                        r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : O
                                    }) : null, E]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === _.length,
                                    children: null != i ? i : l.Z.Messages.CONFIRM
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
            }(o.PureComponent);
            g.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const b = g
        },
        973889: (t, e, n) => {
            n.d(e, {
                Z: () => f
            });
            var r = n(281110),
                o = n(2590),
                i = n(473708);

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
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
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
                    return e.call(this, t, r, i.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        83797: (t, e, n) => {
            n.d(e, {
                Z: () => o
            });
            var r = n(2590);

            function o(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            n.d(e, {
                v_: () => L,
                JS: () => A,
                hH: () => N,
                AB: () => C,
                ZP: () => k,
                oG: () => F,
                kO: () => j,
                yw: () => M
            });
            var r = n(496486),
                o = n.n(r),
                i = n(940060),
                u = n(382060),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(525077),
                h = n(682776),
                y = n(491260),
                v = n(563367),
                g = n(715107),
                b = n(464187),
                _ = n(407561),
                O = n(652591),
                S = n(563135),
                m = n(671723);
            var E = n(2590),
                I = n(897196);

            function T(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        T(t, e, n[e])
                    }))
                }
                return t
            }

            function w(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function N(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = a.default.getId(),
                    o = f.ZP.getMember(t, r),
                    i = c.ZP.getChannels(t),
                    u = i[c.sH].length,
                    l = i[c.Zb].length,
                    p = _.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: w(e.roles),
                    guild_member_num_roles: null != o ? o.roles.length : 0,
                    guild_member_perms: String(null !== (n = h.Z.getGuildPermissions(e)) && void 0 !== n ? n : S.ZP.NONE),
                    guild_is_vip: e.hasFeature(E.oNc.VIP_REGIONS),
                    is_member: null != o,
                    num_voice_channels_active: w(p)
                }
            }

            function R(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function A(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var o = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && i.Z.has(e.deny, E.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(t.type) && null != t.parent_id ? o(l.Z.getChannel(t.parent_id)) : o(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = h.Z.getChannelPermissions(t)) && void 0 !== e ? e : S.ZP.NONE),
                    channel_hidden: n
                }
            }

            function C(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    o = v.Z.getMediaSessionId();
                return P({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: o
                }, j(e.getGuildId(), e.id, r), {
                    game_name: null != (n = m.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function U(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function M(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!O.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== E.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        o = "guild_id" in e ? e.guild_id : r ? b.Z.getGuildId() : null,
                        i = "channel_id" in e ? e.channel_id : r ? g.Z.getChannelId(o) : null,
                        u = l.Z.getChannel(i),
                        a = U(u, o),
                        c = P({}, e, N(a), null != o && null != i && (0, I.AB)(i) ? R(0, i) : L(u));
                    O.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function j(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                o()(_.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== a.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function F(t, e) {
                var n = {
                    custom_status_count: 0
                };
                o()(_.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != y.Z.findActivity(t.userId, (function(t) {
                        return t.type === E.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const k = {
                trackWithMetadata: M,
                getVoiceStateMetadata: j
            }
        },
        272200: (t, e, n) => {
            n.d(e, {
                Qi: () => r,
                iw: () => o,
                Kw: () => i,
                Vh: () => u,
                bB: () => a
            });
            var r, o, i, u, a;
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                t[t.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                t[t.BOT = 3] = "BOT";
                t[t.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(o || (o = {}));
            ! function(t) {
                t[t.ROLE = 1] = "ROLE";
                t[t.USER = 2] = "USER";
                t[t.CHANNEL = 3] = "CHANNEL"
            }(i || (i = {}));
            ! function(t) {
                t.DISCOVERY = "discovery";
                t.SUGGESTION = "suggestion";
                t.MENTION = "mention";
                t.PASTE = "paste";
                t.RECALL = "recall";
                t.POPULAR_COMMANDS = "popular_commands";
                t.MJ_CHAT_BAR = "mj_chat_bar"
            }(u || (u = {}));
            ! function(t) {
                t[t.CHAT = 0] = "CHAT";
                t[t.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(a || (a = {}))
        },
        757518: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(318715),
                u = n(882723),
                a = n(716239),
                l = n(703790),
                c = n(61209),
                s = n(202351),
                f = n(486826),
                d = n(82863);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function h(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = n(2590),
                v = n(473708),
                g = n(376937),
                b = n.n(g);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function O(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(t) {
                var e = t.channelId,
                    n = t.messageId,
                    p = t.transitionState,
                    g = t.onClose,
                    _ = (0, i.ZP)([c.Z], (function() {
                        return c.Z.getChannel(e)
                    })),
                    S = O(function(t) {
                        var e = h(o.useState(!1), 2),
                            n = e[0],
                            r = e[1],
                            i = (0, s.e7)([d.Z], (function() {
                                return d.Z.getFollowerStatsForChannel(t)
                            }), [t]);
                        o.useEffect((function() {
                            if ((null == i || Date.now() - i.lastFetched > 36e5) && !n) {
                                r(!0);
                                f.Z.fetchChannelFollowerStats(t)
                            } else null != i && n && r(!1)
                        }), [t, i, n]);
                        return [i, n]
                    }(e), 2),
                    m = S[0],
                    E = S[1],
                    I = null == _ ? void 0 : _.guild_id;
                return (0, r.jsx)(u.ConfirmModal, {
                    header: v.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                    confirmText: v.Z.Messages.CONFIRM,
                    cancelText: v.Z.Messages.CANCEL,
                    confirmButtonColor: u.Button.Colors.BRAND,
                    onConfirm: function() {
                        return a.Z.crosspostMessage(e, n)
                    },
                    transitionState: p,
                    onClose: g,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: b().spacing,
                        children: E ? (0, r.jsx)(u.Spinner, {}) : null != m && null != m.guildsFollowing && m.guildsFollowing > 0 ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.Text, {
                                className: b().spacing,
                                variant: "text-sm/normal",
                                children: v.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({
                                    numGuildsFollowing: m.guildsFollowing
                                })
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: v.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format({
                                    onClick: function() {
                                        if (null != I && null != g) {
                                            g();
                                            l.Z.open(I, y.pNK.ANALYTICS)
                                        }
                                    }
                                })
                            })]
                        }) : v.Z.Messages.PUBLISH_FOLLOWED_NEWS_BODY
                    })
                })
            }
        },
        165586: (t, e, n) => {
            n.d(e, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => d,
                no: () => p,
                ND: () => h,
                WC: () => v,
                z8: () => g,
                km: () => _,
                k0: () => O,
                af: () => S
            });
            var r, o, i, u, a = n(2590),
                l = n(203600),
                c = n(473708);

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }! function(t) {
                t[t.RESOLUTION_480 = 480] = "RESOLUTION_480";
                t[t.RESOLUTION_720 = 720] = "RESOLUTION_720";
                t[t.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                t[t.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                t[t.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(t) {
                switch (t) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(t))
                }
            }! function(t) {
                t[t.FPS_5 = 5] = "FPS_5";
                t[t.FPS_15 = 15] = "FPS_15";
                t[t.FPS_30 = 30] = "FPS_30";
                t[t.FPS_60 = 60] = "FPS_60"
            }(o || (o = {}));
            ! function(t) {
                t[t.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                t[t.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                t[t.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function d(t) {
                switch (t) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(t))
                }
            }
            var p = (s(u = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), s(u, i.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }]), s(u, i.PRESET_CUSTOM, []), u),
                h = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function y(t, e) {
                return {
                    value: t,
                    get label() {
                        return null != e ? e() : t
                    }
                }
            }
            var v = [y(r.RESOLUTION_720), y(r.RESOLUTION_1080), y(r.RESOLUTION_1440), y(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [y(r.RESOLUTION_720), y(r.RESOLUTION_1080), y(r.RESOLUTION_1440)],
                b = function(t) {
                    return "".concat(t, "p")
                },
                _ = [y(r.RESOLUTION_480, (function() {
                    return b(r.RESOLUTION_480)
                })), y(r.RESOLUTION_720, (function() {
                    return b(r.RESOLUTION_720)
                })), y(r.RESOLUTION_1080, (function() {
                    return b(r.RESOLUTION_1080)
                })), y(r.RESOLUTION_1440, (function() {
                    return b(r.RESOLUTION_1440)
                })), y(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                O = [y(o.FPS_15), y(o.FPS_30), y(o.FPS_60)],
                S = [y(o.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), y(o.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), y(o.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        189651: (t, e, n) => {
            n.d(e, {
                iD: () => E,
                Zm: () => I,
                mL: () => T,
                zS: () => w,
                og: () => N,
                aq: () => R
            });
            var r = n(744564),
                o = n(396043),
                i = n(784426),
                u = n(61209),
                a = n(5544),
                l = n(21372),
                c = n(567403),
                s = n(682776),
                f = n(715107),
                d = n(9430),
                p = n(652591),
                h = n(861426),
                y = n(557177),
                v = n(2590),
                g = n(897196);

            function b(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
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

            function O(t) {
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

            function m(t) {
                return function(t) {
                    if (Array.isArray(t)) return b(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return b(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(t, e) {
                p.default.track(v.rMx.VIEW_AS_ROLES_SELECTED, S(O({
                    num_roles: Object.keys(e.roles).length
                }, (0, o.hH)(t)), {
                    is_viewing_as_member: e.type === y.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                });
                P(t)
            }

            function I(t, e) {
                var n = h.Z.getData(t);
                if (null != n && n.type === e.type) {
                    p.default.track(v.rMx.VIEW_AS_ROLES_SELECTED, S(O({
                        num_roles: Object.keys(n.roles).length
                    }, (0, o.hH)(t)), {
                        is_viewing_as_member: n.type === y.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: t,
                        data: O({}, n, e)
                    });
                    P(t)
                }
            }

            function T(t) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function P(t) {
                var e = f.Z.getChannelId(t),
                    n = u.Z.getChannel(e);
                if (!(null != e && (0, g.AB)(e)) && !s.Z.can(v.Plq.VIEW_CHANNEL, n)) {
                    var r = a.ZP.getDefaultChannel(t);
                    null != r && (0, i.uL)(v.Z5c.CHANNEL(t, r.id))
                }
            }

            function w(t, e, n) {
                var r = new Set(d.Z.getOptedInChannels(t));
                e.forEach((function(t) {
                    return r.add(t)
                }));
                n.forEach((function(t) {
                    return r.delete(t)
                }));
                I(t, {
                    type: y.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function N(t, e) {
                var n = c.Z.getGuild(t);
                if (null != n) {
                    ! function(t, e) {
                        var n = m(a.ZP.getSelectableChannelIds(t)).concat(m(a.ZP.getVocalChannelIds(t))),
                            r = Array.from(e);
                        a.ZP.addConditionalChangeListener((function() {
                            var e = l.ZP.getSelfMember(t);
                            if (null == e) return !1;
                            if (r.some((function(t) {
                                    return !e.roles.includes(t)
                                }))) return !0;
                            var o = m(a.ZP.getSelectableChannelIds(t)).concat(m(a.ZP.getVocalChannelIds(t))).filter((function(t) {
                                return !n.includes(t)
                            }));
                            o.length > 0 && w(t, o, []);
                            return !1
                        }))
                    }(t, e);
                    var r = {};
                    e.forEach((function(t) {
                        return r[t] = n.roles[t]
                    }));
                    I(t, {
                        type: y.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function R(t, e) {
                I(t, O({
                    type: y.z.NEW_MEMBER
                }, e))
            }
        },
        424158: (t, e, n) => {
            n.d(e, {
                Z: () => p
            });
            var r = n(730381),
                o = n.n(r),
                i = n(169376);

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
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
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
                return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function s(t, e) {
                s = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return s(t, e)
            }
            var f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function d(t) {
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
                    var n, r = a(t);
                    if (e) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && s(t, e)
                }(n, t);
                var e = d(n);

                function n(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = e.call(this)).code = t.code || "";
                    r.temporary = t.temporary || !1;
                    r.revoked = t.revoked || !1;
                    r.uses = t.uses || 0;
                    r.maxUses = t.maxUses || 0;
                    r.maxAge = t.maxAge || 0;
                    r.createdAt = t.createdAt || new Date;
                    r.channel = t.channel;
                    r.guild = t.guild;
                    r.inviter = t.inviter || null;
                    r.targetType = t.targetType || null;
                    r.targetUser = t.targetUser || null;
                    r.targetApplication = t.targetApplication || null;
                    r.type = t.type || null;
                    r.flags = t.flags || 0;
                    return r
                }
                var r = n.prototype;
                r.isExpired = function() {
                    var t = this.maxAge;
                    if (t > 0) {
                        if (o()(this.createdAt).add(t, "seconds").isBefore(Date.now())) return !0
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
                n.createFromServer = function(t) {
                    var e;
                    return new n(l(function(t) {
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
                    }({}, t), {
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: o()(null !== (e = t.created_at) && void 0 !== e ? e : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    }))
                };
                return n
            }(i.Z)
        },
        82863: (t, e, n) => {
            n.d(e, {
                Z: () => h
            });
            var r = n(202351),
                o = n(744564);

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function a(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
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
            var c, s = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function f(t) {
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
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }! function(t) {
                t.FAILED = "failed";
                t.SUCCEEDED = "succeeded"
            }(c || (c = {}));
            var d = {};
            var p = function(t) {
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
                var e = f(n);

                function n() {
                    i(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.getFollowerStatsForChannel = function(t) {
                    return d[t]
                };
                r.__getLocalVars = function() {
                    return {
                        ChannelFollowerStatsFetchStates: c,
                        channelIdToFollowerStats: d
                    }
                };
                return n
            }(r.ZP.Store);
            p.displayName = "ChannelFollowerStatsStore";
            const h = new p(o.Z, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(t) {
                    var e = t.channelId,
                        n = t.stats;
                    n = null != n ? n : {};
                    d[e] = {
                        loadingStatus: c.SUCCEEDED,
                        lastFetched: Date.now(),
                        channelsFollowing: n.channels_following,
                        guildMembers: n.guild_members,
                        guildsFollowing: n.guilds_following,
                        usersSeenEver: n.users_seen_ever,
                        subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
                        subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
                    }
                },
                CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(t) {
                    var e = t.channelId;
                    d[e] = {
                        loadingStatus: c.FAILED,
                        lastFetched: Date.now(),
                        channelsFollowing: 0,
                        guildMembers: 0,
                        guildsFollowing: 0,
                        usersSeenEver: 0,
                        subscribersGainedSinceLastPost: 0,
                        subscribersLostSinceLastPost: 0
                    }
                }
            })
        },
        491260: (t, e, n) => {
            n.d(e, {
                Z: () => B
            });
            var r = n(110251),
                o = n.n(r),
                i = n(496486),
                u = n.n(i),
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

            function g(t, e) {
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

            function _(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || m(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || m(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function m(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function E(t) {
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
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var I = Object.freeze([]),
                T = {},
                P = {},
                w = {},
                N = {},
                R = {};

            function A(t, e) {
                var n = T[t];
                return null != n ? n[e] : null
            }
            var L = function(t) {
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
            var C = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function U(t, e) {
                return function(t, e) {
                    return L(e) - L(t)
                }(t, e) || function(t, e) {
                    return C(e) - C(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function M(t) {
                delete P[t];
                delete w[t];
                delete N[t];
                if (null != T[t]) {
                    var e = _(u().sortBy(T[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        P[t] = n.status;
                        w[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    } else u().every(T[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete T[t]
                }
            }

            function j(t) {
                var e = T[t];
                if (null != e) {
                    var n = u().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        P[t] = n.status;
                        w[t] = n.activities;
                        null != n.clientStatus && (N[t] = n.clientStatus)
                    }
                }
            }

            function F(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    u = t.activities;
                if (n === s.default.getId()) return !1;
                var a = T[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = T[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: i,
                    activities: I,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? O(u).sort(U) : u,
                        c = a[e];
                    u = null != c && o()(c.activities, l) ? c.activities : l;
                    a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete R[n];
                M(n);
                return !0
            }

            function k(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    o = t.clientStatus,
                    i = t.activities,
                    u = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = T[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = T[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: o,
                        activities: I,
                        timestamp: Date.now()
                    };
                    else {
                        var l = i.length > 1 ? O(i).sort(U) : i;
                        a[e] = {
                            status: r,
                            clientStatus: o,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function x(t, e) {
                if (e === s.default.getId()) return !1;
                var n = T[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete T[e];
                M(e)
            }

            function Z(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(T)[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                        x(t, o.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (n) throw r
                    }
                }
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
                    e && b(t, e)
                }(n, t);
                var e = E(n);

                function n() {
                    h(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    P[s.default.getId()] = t;
                    w[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var o;
                        return null !== (o = P[t]) && void 0 !== o ? o : n
                    }
                    var i, u = A(t, e);
                    return null !== (i = null == u ? void 0 : u.status) && void 0 !== i ? i : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = w[t]) && void 0 !== n ? n : I
                    }
                    var r = A(t, e);
                    return null == r || null == r.activities ? I : r.activities
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
                        o = void 0;
                    try {
                        for (var i, u = Object.keys(w)[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            var a = i.value,
                                l = w[a],
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
                        o = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw o
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
                    return R[t]
                };
                r.getUserIds = function() {
                    return Object.keys(w)
                };
                r.isMobileOnline = function(t) {
                    var e = N[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: T,
                        statuses: P,
                        activities: w,
                        activityMetadata: R,
                        clientStatuses: N
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: I,
                        presencesForGuilds: T,
                        statuses: P,
                        activities: w,
                        clientStatuses: N,
                        activityMetadata: R,
                        typeScore: L,
                        richnessScore: C
                    }
                };
                return n
            }(a.ZP.Store);
            D.displayName = "PresenceStore";
            const B = new D(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    T = {};
                    R = {};
                    P = y({}, r, P[r]);
                    w = y({}, r, w[r]);
                    N = y({}, r, {});
                    var o = new Set,
                        i = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                u = e.clientStatus,
                                a = e.activities;
                            k({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: i
                            });
                            o.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            u = t.activities;
                        if (null != e) {
                            k({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: i
                            });
                            o.add(e.id)
                        }
                    }));
                    o.delete(r);
                    o.forEach(j)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    T = e.presencesForGuilds;
                    P = e.statuses;
                    w = e.activities;
                    R = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            o = t.clientStatus,
                            i = t.activities;
                        F({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    Z(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return x(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            o = t.clientStatus,
                            i = t.activities;
                        return F({
                            guildId: null != e ? e : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    Z(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            o = t.activities;
                        null != e && F({
                            guildId: d.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: o
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    R[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && F({
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
                        null != t.presence && F({
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
                    if (P[e] === t.status && w[e] === t.activities) return !1;
                    P[e] = t.status;
                    w[e] = t.activities;
                    delete R[e]
                }
            })
        },
        347117: (t, e, n) => {
            n.d(e, {
                Tj: () => d,
                zp: () => p,
                Dc: () => h,
                rn: () => y,
                rv: () => v,
                XN: () => b,
                OF: () => _,
                fD: () => S,
                QB: () => m,
                Bo: () => E,
                c0: () => P
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                u = n.n(i),
                a = n(16243),
                l = n.n(a);

            function c(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function s(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

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
            var f = function(t, e) {
                var n, r, o, i, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = e.call(t, u)
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
                        }([i, a])
                    }
                }
            };
            0;

            function d(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight,
                    i = t.minWidth,
                    u = void 0 === i ? 0 : i,
                    a = t.minHeight,
                    l = void 0 === a ? 0 : a;
                if (e !== r || n !== o) {
                    var c = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * c), u);
                    var s = (n = Math.max(Math.round(n * c), l)) > o ? o / n : 1;
                    e = Math.max(Math.round(e * s), u);
                    n = Math.max(Math.round(n * s), l)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function p(t, e) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return d({
                    width: t,
                    height: e,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function h(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight,
                    i = 1;
                e > r && (i = r / e);
                e = Math.round(e * i);
                var u = 1;
                (n = Math.round(n * i)) > o && (u = o / n);
                return Math.min(i * u, 1)
            }

            function y(t) {
                var e = t.width,
                    n = t.height,
                    r = t.maxWidth,
                    o = t.maxHeight;
                if (e === n) return 1;
                var i = Math.max(r / e, o / n);
                return Math.min(i, 1)
            }

            function v(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            var g = [
                [0, 0, 0]
            ];

            function b(t, e, n) {
                var r = document.createElement("canvas"),
                    o = r.getContext("2d");
                if (null == o) return g;
                var i = r.width = 0 === t.width ? 128 : t.width,
                    u = r.height = 0 === t.height ? 128 : t.height;
                o.drawImage(t, 0, 0, i, u);
                var a = function(t, e, n) {
                        for (var r, o, i, u, a, l = [], c = 0; c < e; c += n) {
                            o = t[0 + (r = 4 * c)];
                            i = t[r + 1];
                            u = t[r + 2];
                            (void 0 === (a = t[r + 3]) || a >= 125) && (o > 250 && i > 250 && u > 250 || l.push([o, i, u]))
                        }
                        return l
                    }(o.getImageData(0, 0, i, u).data, i * u, n),
                    c = l()(a, e);
                return "boolean" == typeof c ? g : c.palette()
            }
            var _ = function(t) {
                    return O(t)
                },
                O = u().memoize((function(t) {
                    return new Promise((function(e, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(t) {
                            n(t);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            e(b(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = t
                    }))
                }));

            function S(t) {
                return new Promise((function(e, n) {
                    var r = new FileReader;
                    r.readAsDataURL(t);
                    r.onload = function() {
                        o()("string" == typeof r.result, "Result must be a string");
                        e(r.result)
                    };
                    r.onerror = function(t) {
                        return n(t)
                    }
                }))
            }

            function m(t) {
                var e = t.split(";base64,");
                o()(2 === e.length, "Input data is not a valid image.");
                return atob(e[1]).length
            }

            function E(t, e, n) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = s((function(t, e, n) {
                    var r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, T(t).arrayBuffer()];
                            case 1:
                                r = o.sent();
                                return [2, new File([r], e, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function T(t) {
                var e;
                e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                for (var n = t.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(e.length), o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
                return new Blob([r], {
                    type: n
                })
            }

            function P(t) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = s((function(t) {
                    var e, n, r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if ("image/png" !== (null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, t.text()];
                            case 1:
                                n = o.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        488110: (t, e, n) => {
            n.d(e, {
                Z: () => v
            });
            var r = n(473903),
                o = n(496486),
                i = function(t) {
                    return "function" == typeof t ? t() : t
                };
            n.n(o)().curry((function(t, e, n) {
                return i(e) ? t(n) : n({})
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
                    o = t.modalProps,
                    i = void 0 === o ? {} : o,
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
                    g = function(t) {
                        var e = t.res;
                        d(b, _, p, l(a({}, i), {
                            error: e.body.message
                        }))
                    };
                if (null != s) var b = s(_, p, i);
                else null == c || c();

                function _(t) {
                    d(b, _, p, l(a({}, i), {
                        isLoading: !0
                    }));
                    return y({
                        promiseFn: e,
                        resolve: h,
                        reject: v,
                        code: t,
                        mfaCodeHandler: g,
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
                    u = void 0 === i ? h : i,
                    l = t.isModalOpen,
                    s = void 0 !== l && l,
                    f = c(t, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return e(null != o ? {
                    code: o
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
                var n, o, u = null != e ? e : {},
                    l = u.checkEnabled,
                    s = void 0 === l ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : l,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(e, n) {
                    (i(s) ? h : y)(a({
                        promiseFn: t,
                        resolve: e,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (t, e, n) => {
            n.d(e, {
                RD: () => z,
                WA: () => B,
                f5: () => Z,
                Gb: () => U,
                Rs: () => H,
                _2: () => V,
                gL: () => j,
                fG: () => k
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                u = n.n(i),
                a = n(809784),
                l = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }
            var p = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = e;
                    this._languageHint = e;
                    this._onChange = n;
                    n(e)
                }
                var e = t.prototype;
                e.process = function(t) {
                    var e = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= e._minimumTimeRemaining) e._processEnd();
                            else {
                                t.length > 256 && (t = t.slice(0, 256));
                                (function(t, e) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, o) {
                                            n.detect(t, {
                                                httpHint: e,
                                                encodingHint: "UTF8"
                                            }, (function(t, e) {
                                                null != t ? o(new Error(t.message)) : !e.reliable || e.languages[0].percent < 90 || e.languages[0].score < 500 ? o(new Error("Not enough reliable text.")) : r(e.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(t, e._languageHint).then((function(t) {
                                    e.language = t;
                                    e._processEnd(n.didTimeout)
                                }), (function() {
                                    e._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                e._processEnd = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    t && this._minimumTimeRemaining++
                };
                ! function(t, e, n) {
                    e && d(t.prototype, e);
                    n && d(t, n)
                }(t, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(t) {
                        if (this._language !== t) {
                            this._language = t;
                            this._onChange(t)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(t) {
                        this._languageHint = t
                    }
                }]);
                return t
            }();
            const h = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function v(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function g(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            v(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            v(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function b(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function _(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
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
            var O = function(t, e) {
                    var n, r, o, i, u = {
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
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0,
                                        o) && (i = [2 & i[0], o.value]);
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
                                    i = e.call(t, u)
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
                            }([i, a])
                        }
                    }
                },
                S = new l.Z("Spellchecker"),
                m = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function E(t) {
                var e;
                t = null !== (e = h[t]) && void 0 !== e ? e : t;
                var n = (0, o.Q)(t.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        u = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                S.error("".concat(t, " is not a valid locale."))
            }
            var I = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = _(c.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var u = this.getAvailableLanguages(e);
                        this.languageDetector = new p(o, (function(t) {
                            var r = "".concat(t, "-").concat(n.regionPreference);
                            if (-1 !== e.indexOf(r)) n.setLocale(r);
                            else {
                                var i, a = null !== (i = u[t]) && void 0 !== i ? i : h[o];
                                null != a && n.setLocale(a)
                            }
                        }));
                        m.on("spellcheck-result", (function(t, e) {
                            n.misspelledWord = null != t ? t : "";
                            n.corrections = null != e ? e : []
                        }))
                    }
                    var e = t.prototype;
                    e.setLearnedWords = function(t) {
                        m.setLearnedWords(t)
                    };
                    e.setLocale = function(t) {
                        var e;
                        null === (e = m.setLocale(t)) || void 0 === e || e.then((function(e) {
                            S.info("Switching to ".concat(t), e ? "(available)" : "(unavailable)")
                        }))
                    };
                    e.setAppLocale = function(t) {
                        this.regionPreference = t.split("-")[1]
                    };
                    e.detectLanguage = function(t) {
                        this.enabled && this.languageDetector.process(t)
                    };
                    e.getAvailableLanguages = function(t) {
                        var e = {};
                        t.forEach((function(t) {
                            var n, r = _(t.split("-"), 1)[0];
                            e[r] = null !== (n = e[r]) && void 0 !== n ? n : t
                        }));
                        return e
                    };
                    e.isMisspelled = function(t, e) {
                        return "" !== this.misspelledWord && t === this.misspelledWord
                    };
                    e.getCorrectionsForMisspelling = function(t, e) {
                        return this.isMisspelled(t, e) ? this.corrections : []
                    };
                    e.replaceMisspelling = function(t) {
                        m.replaceMisspelling(t)
                    };
                    ! function(t, e, n) {
                        e && b(t.prototype, e);
                        n && b(t, n)
                    }(t, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(t) {
                            this._enabled = t
                        }
                    }]);
                    return t
                }(),
                T = u().debounce((function(t, e) {
                    var n = function(t) {
                        if (null == t) return null;
                        if ((0, a.k)(t, HTMLInputElement) || (0, a.k)(t, HTMLTextAreaElement)) return t.value;
                        if ((0, a.k)(t) && t.hasAttribute("contenteditable")) return t.textContent
                    }(e);
                    null != n && t.detectLanguage(n)
                }), 250);

            function P(t) {
                null != document.body && document.body.addEventListener("beforeinput", (function(e) {
                    return T(t, e.target)
                }), !0)
            }

            function w() {
                return (w = g((function() {
                    var t, e, n, r;
                    return O(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, m.getAvailableDictionaries()];
                            case 1:
                                e = null !== (t = o.sent()) && void 0 !== t ? t : [];
                                n = e.map(E).filter(s.lm);
                                P(r = new I(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var N = n(120415);

            function R(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function A(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            R(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            R(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var L = function(t, e) {
                var n, r, o, i, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0,
                                    o) && (i = [2 & i[0], o.value]);
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
                                i = e.call(t, u)
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
                        }([i, a])
                    }
                }
            };

            function C() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function U() {
                return (0, N.nI)() && C()
            }
            var M = U() ? function() {
                return w.apply(this, arguments)
            }() : null;

            function j(t) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = A((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.enabled = t;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(t) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = A((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setLearnedWords(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(t) {
                return D.apply(this, arguments)
            }

            function D() {
                D = A((function(t) {
                    var e, n, r = arguments;
                    return L(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, M];
                            case 1:
                                return null == (n = o.sent()) ? [2, !1] : [2, n.isMisspelled(t, e)]
                        }
                    }))
                }));
                return D.apply(this, arguments)
            }

            function B(t) {
                return G.apply(this, arguments)
            }

            function G() {
                G = A((function(t) {
                    var e, n, r, o = arguments;
                    return L(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                e = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, M];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(t, e).slice(0, n)]
                        }
                    }))
                }));
                return G.apply(this, arguments)
            }

            function H(t) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = A((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.replaceMisspelling(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(t) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = A((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, M];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setAppLocale(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function z(t) {
                if (!C()) return function() {};
                var e = r.Z.spellCheck.on("spellcheck-result", t);
                return null != e ? e : function() {}
            }
        },
        391438: (t, e, n) => {
            n.d(e, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function i(t, e, n) {
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
                        i(t, e, n[e])
                    }))
                }
                return t
            }

            function a(t, e) {
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

            function l(t, e, n) {
                var r = e.trackedActionData,
                    i = a(e, ["trackedActionData"]),
                    l = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(i).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status
                        }, l, n));
                        e(t)
                    })).catch((function(t) {
                        var e, i, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (i = t.body) || void 0 === i ? void 0 : i.message
                        }, l, a));
                        n(t)
                    }))
                }))
            }
            const c = {
                get: function(t) {
                    return l(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return l(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return l(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return l(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return l(r.ZP.delete, t, "del")
                }
            }
        },
        322500: (t, e, n) => {
            n.d(e, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                o = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                u = /^(.*)#[0-9]{1,5}$/,
                a = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                l = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const c = {
                isEmail: function(t) {
                    return r.test(t)
                },
                isInvite: function(t) {
                    return o.test(t)
                },
                isPhoneNumber: function(t) {
                    return i.test(t)
                },
                isUserTagLike: function(t) {
                    var e = u.exec(t);
                    if (null != e && e.length > 1) {
                        var n = e[1],
                            r = a.some((function(t) {
                                return n.includes(t)
                            })),
                            o = l.includes(n);
                        return !r && !o
                    }
                    return !1
                }
            }
        },
        680918: (t, e, n) => {
            n.r(e);
            n.d(e, {
                showModal: () => l,
                updateModalProps: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

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
                return function(o) {
                    return (0, r.jsx)(i.Z, function(t) {
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
                    }, n, o))
                }
            };

            function l(t, e, n) {
                return (0, o.h7)(a(t, e, n), {
                    onCloseCallback: e
                })
            }

            function c(t, e, n, r) {
                return (0, o.o)(t, a(e, n, r))
            }
        }
    }
]);
//# sourceMappingURL=3c0da03d597f4e201ffc.js.map