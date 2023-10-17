"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [57645, 88352], {
        957645: (e, n, t) => {
            t.r(n);
            t.d(n, {
                AddMembers: () => en,
                ChannelTypeBadge: () => Je,
                default: () => rn
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                s = t.n(o),
                i = t(441143),
                l = t.n(i),
                c = t(496486),
                u = t.n(c),
                d = t(571657),
                h = t(517586),
                p = t(202351),
                f = t(304548),
                E = t(985462),
                C = t(327499),
                N = t(9941),
                m = t(744564);

            function g(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function _(e, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function v(e, n) {
                v = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return v(e, n)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var n = function() {
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
                    var t, r = y(e);
                    if (n) {
                        var a = y(this).constructor;
                        t = Reflect.construct(r, arguments, a)
                    } else t = r.apply(this, arguments);
                    return _(this, t)
                }
            }
            var A = {};
            var T = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && v(e, n)
                }(t, e);
                var n = b(t);

                function t() {
                    g(this, t);
                    return n.apply(this, arguments)
                }
                t.prototype.getBranches = function(e) {
                    var n;
                    return null !== (n = A[e]) && void 0 !== n ? n : []
                };
                return t
            }(p.ZP.Store);
            T.displayName = "ApplicationBranchStore";
            const I = new T(m.Z, {
                OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
                    var n = e.applicationId,
                        t = e.branches;
                    A[n] = t
                },
                LOGOUT: function() {
                    A = {}
                }
            });
            var S = t(473708);

            function M(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function L(e, n) {
                return !n || "object" !== j(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function x(e, n) {
                x = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return x(e, n)
            }
            var j = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
                var n = function() {
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
                    var t, r = R(e);
                    if (n) {
                        var a = R(this).constructor;
                        t = Reflect.construct(r, arguments, a)
                    } else t = r.apply(this, arguments);
                    return L(this, t)
                }
            }
            var w = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && x(e, n)
                }(t, e);
                var n = P(t);

                function t() {
                    M(this, t);
                    var e;
                    (e = n.apply(this, arguments)).handleChange = function(n) {
                        e.props.onChange(n)
                    };
                    return e
                }
                var a = t.prototype;
                a.componentDidMount = function() {
                    var e = this.props,
                        n = e.applicationId,
                        t = e.branches,
                        r = e.onHasBranchesChange;
                    (0, N.Z)(n);
                    null == r || r(t.length > 0)
                };
                a.componentDidUpdate = function(e) {
                    var n = this.props,
                        t = n.onHasBranchesChange,
                        r = n.branches.length > 0;
                    null != t && r !== e.branches.length > 0 && t(r)
                };
                a.render = function() {
                    var e = this.props,
                        n = e.branches,
                        t = e.selectedBranchId,
                        a = e.applicationId,
                        o = e.includeMaster,
                        s = e.hide,
                        i = e.className;
                    if (0 === n.length || s) return null;
                    var l = o ? n : n.filter((function(e) {
                        return e.id !== a
                    }));
                    return (0, r.jsx)(f.SingleSelect, {
                        options: l.map((function(e) {
                            return {
                                label: e.getName(a),
                                value: e.id
                            }
                        })),
                        placeholder: S.Z.Messages.CREATE_STORE_CHANNEL_SELECT_BRANCH,
                        value: t,
                        onChange: this.handleChange,
                        className: i
                    })
                };
                return t
            }(a.Component);
            w.defaultProps = {
                includeMaster: !1
            };
            const Z = p.ZP.connectStores([I], (function(e) {
                var n = e.applicationId;
                return {
                    branches: I.getBranches(n)
                }
            }))(w);
            var D = t(315804),
                G = t(746974);

            function B(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function H(e, n) {
                return !n || "object" !== k(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function F(e, n) {
                F = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return F(e, n)
            }
            var k = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function z(e) {
                var n = function() {
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
                    var t, r = U(e);
                    if (n) {
                        var a = U(this).constructor;
                        t = Reflect.construct(r, arguments, a)
                    } else t = r.apply(this, arguments);
                    return H(this, t)
                }
            }
            var Y = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && F(e, n)
                }(t, e);
                var n = z(t);

                function t() {
                    B(this, t);
                    var e;
                    (e = n.apply(this, arguments)).handleChange = function(n) {
                        e.props.onChange(n)
                    };
                    return e
                }
                var a = t.prototype;
                a.componentDidMount = function() {
                    var e = this.props,
                        n = e.applicationId,
                        t = e.skus,
                        r = e.selectedSkuId,
                        a = e.onChange;
                    null == t || 0 === t.length ? (0, D.Kr)(n, !1) : 1 === t.length && null == r && a(t[0].id)
                };
                a.componentDidUpdate = function() {
                    var e = this.props,
                        n = e.skus,
                        t = e.selectedSkuId,
                        r = e.onChange;
                    null != n && 1 === n.length && null == t && r(n[0].id)
                };
                a.render = function() {
                    var e = this.props,
                        n = e.skus,
                        t = e.selectedSkuId,
                        a = e.className,
                        o = null != n && 0 === n.length;
                    return (0, r.jsx)(f.SingleSelect, {
                        options: null != n ? n.map((function(e) {
                            return {
                                label: e.name,
                                value: e.id
                            }
                        })) : [],
                        placeholder: o ? S.Z.Messages.CREATE_STORE_CHANNEL_NO_SKUS : S.Z.Messages.CREATE_STORE_CHANNEL_SELECT_SKU,
                        value: t,
                        onChange: this.handleChange,
                        className: a,
                        isDisabled: o
                    })
                };
                return t
            }(a.Component);
            const V = p.ZP.connectStores([G.Z], (function(e) {
                var n = e.applicationId;
                return {
                    skus: G.Z.getForApplication(n)
                }
            }))(Y);
            var K = t(73904),
                W = t(396043),
                X = t(773011),
                q = t(1477),
                Q = t(276190),
                $ = t(270946),
                J = t(358969),
                ee = t(974771),
                ne = t(784426),
                te = t(227202),
                re = t(148318),
                ae = t(388352),
                oe = t(382060),
                se = t(61209),
                ie = t(959207),
                le = t(21372),
                ce = t(567403),
                ue = t(682776),
                de = t(840922),
                he = t(473903),
                pe = t(613677),
                fe = t(443812),
                Ee = t(436622),
                Ce = t(823975),
                Ne = t(513430),
                me = t(107134),
                ge = t(843508),
                ye = t(349491),
                _e = t(296047),
                ve = t(172295),
                Oe = t(777203),
                be = t(755914),
                Ae = t(407558),
                Te = t(565571),
                Ie = t(584620),
                Se = t(531441),
                Me = t(176758),
                Re = t(348592),
                Le = t(2590),
                xe = t(449518),
                je = t(508778),
                Pe = t(520453),
                we = t(740998),
                Ze = t.n(we);

            function De(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ge(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Be(e, n, t, r, a, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(l) : Promise.resolve(l).then(r, a)
            }

            function Ue(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function s(e) {
                            Be(o, r, a, s, i, "next", e)
                        }

                        function i(e) {
                            Be(o, r, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function He(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Fe(e) {
                Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Fe(e)
            }

            function ke(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        He(e, n, t[n])
                    }))
                }
                return e
            }

            function ze(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function Ye(e, n) {
                return !n || "object" !== We(n) && "function" != typeof n ? Ge(e) : n
            }

            function Ve(e, n) {
                Ve = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return Ve(e, n)
            }

            function Ke(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            s = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return De(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return De(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var We = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Xe(e) {
                var n = function() {
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
                    var t, r = Fe(e);
                    if (n) {
                        var a = Fe(this).constructor;
                        t = Reflect.construct(r, arguments, a)
                    } else t = r.apply(this, arguments);
                    return Ye(this, t)
                }
            }
            var qe, Qe = function(e, n) {
                var t, r, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };

            function $e(e) {
                var n = e.isPrivate,
                    t = e.showStoreChannelOption,
                    a = e.showAnnouncementChannelOption,
                    o = e.canCreateStageChannel,
                    s = e.canCreateForumChannel,
                    i = e.canCreateMediaChannel,
                    l = [{
                        icon: n ? Ce.Z : Ee.Z,
                        label: S.Z.Messages.TEXT_CHANNEL_TYPE,
                        value: Le.d4z.GUILD_TEXT,
                        description: S.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
                    }];
                l.push({
                    icon: n ? Ae.Z : be.Z,
                    label: S.Z.Messages.VOICE_CHANNEL_TYPE,
                    value: Le.d4z.GUILD_VOICE,
                    description: S.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
                });
                if (s) {
                    l.push({
                        icon: n ? me.Z : Ne.Z,
                        label: S.Z.Messages.FORUM_CHANNEL_TYPE,
                        value: Le.d4z.GUILD_FORUM,
                        description: (0, r.jsxs)(f.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Ze().radioLabelDescription,
                            children: [S.Z.Messages.FORUM_CHANNEL_DESCRIPTION, (0, r.jsx)("br", {}), S.Z.Messages.LEARN_MORE_CLICK.format({
                                onClick: function() {
                                    open(je.V8)
                                }
                            })]
                        })
                    })
                }
                if (i) {
                    l.push({
                        icon: n ? ve.Z : _e.Z,
                        label: S.Z.Messages.MEDIA_CHANNEL_TYPE,
                        value: Le.d4z.GUILD_MEDIA,
                        description: (0, r.jsxs)(f.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Ze().radioLabelDescription,
                            children: [S.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION, (0, r.jsx)("br", {}), S.Z.Messages.LEARN_MORE_CLICK.format({
                                onClick: function() {
                                    open(Re.Z.getCreatorSupportArticleURL(Le.BhN.MEDIA_CHANNEL))
                                }
                            })]
                        }),
                        isBeta: !0
                    })
                }
                a && l.push({
                    icon: Oe.Z,
                    iconSize: 24,
                    label: S.Z.Messages.NEWS_CHANNEL_TYPE,
                    value: Le.d4z.GUILD_ANNOUNCEMENT,
                    description: S.Z.Messages.CREATE_NEWS_CHANNEL_DESCRIPTION
                });
                t && l.push({
                    icon: Ie.Z,
                    iconSize: 24,
                    label: S.Z.Messages.STORE_CHANNEL_TYPE,
                    value: Le.d4z.GUILD_STORE,
                    description: S.Z.Messages.CREATE_STORE_CHANNEL_DESCRIPTION
                });
                o && l.push({
                    icon: Te.Z,
                    iconSize: 24,
                    label: S.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                    value: Le.d4z.GUILD_STAGE_VOICE,
                    description: S.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
                });
                return l.map((function(e) {
                    var n = e.icon,
                        t = e.iconSize,
                        a = e.label,
                        o = e.value,
                        s = e.description,
                        i = e.isNew,
                        l = e.isBeta;
                    return {
                        name: (0, r.jsxs)("div", {
                            className: Ze().radioItemName,
                            children: [(0, r.jsx)(n, ze(ke({}, null != t ? {
                                width: t,
                                height: t
                            } : null), {
                                className: Ze().icon,
                                background: Ze().background,
                                foreground: Ze().foreground
                            })), (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)(f.Text, {
                                    variant: "text-md/medium",
                                    className: Ze().radioLabelName,
                                    children: [a, (0, r.jsx)(Je, {
                                        isNew: i,
                                        isBeta: l
                                    })]
                                }), "string" == typeof s ? (0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: Ze().radioLabelDescription,
                                    children: s
                                }) : s]
                            })]
                        }),
                        value: o,
                        radioBarClassName: Ze().radioBar,
                        radioItemIconClassName: Ze().radioBarIcon
                    }
                }))
            }

            function Je(e) {
                var n = e.isNew,
                    t = e.isBeta,
                    a = null;
                !0 === n ? a = (0, r.jsx)(Se.IG, {
                    text: S.Z.Messages.CHANNEL_TYPE_NEW,
                    className: Ze().newBadge,
                    color: h.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
                }) : !0 === t && (a = (0, r.jsx)($.Z, {
                    className: Ze().newBadge
                }));
                return a
            }! function(e) {
                e.CHANNEL_INFO = "CHANNEL_INFO";
                e.ADD_MEMBERS = "ADD_MEMBERS"
            }(qe || (qe = {}));

            function en(e) {
                var n = e.onChange,
                    t = e.guildId,
                    o = e.channelType,
                    s = e.description,
                    i = Ke(a.useState({}), 2),
                    l = i[0],
                    c = i[1],
                    u = (0, p.e7)([ce.Z], (function() {
                        return ce.Z.getGuild(t)
                    })),
                    d = o === Le.d4z.GUILD_STAGE_VOICE;
                a.useEffect((function() {
                    n(l)
                }), [l, n]);
                return null == u ? null : (0, r.jsx)(f.ModalContent, {
                    className: Ze().addMembersContainer,
                    children: (0, r.jsx)(Q.AddMembersBody, {
                        guild: u,
                        channel: null,
                        permission: d ? te.yP : (0, oe.CG)(o),
                        pendingAdditions: l,
                        setPendingAdditions: c,
                        isStageChannel: d,
                        description: s
                    })
                })
            }

            function nn(e) {
                switch (e) {
                    case Le.d4z.GUILD_CATEGORY:
                        return S.Z.Messages.CATEGORY_NAME_PLACEHOLDER;
                    case Le.d4z.GUILD_FORUM:
                        return S.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER;
                    default:
                        return S.Z.Messages.CHANNEL_NAME_PLACEHOLDER
                }
            }
            var tn = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && Ve(e, n)
                }(o, e);
                var n = Xe(o);

                function o(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var t;
                    (t = n.call(this, e)).headerId = (0, fe.hQ)();
                    t.setInputRef = function(e) {
                        t._input = e
                    };
                    t.handleNameChange = function(e) {
                        var n = t.state.channelType;
                        oe.xL.has(n) && (e = (0, Me.Nj)(e));
                        t.setState({
                            name: e
                        })
                    };
                    t.handleTypeChange = function(e) {
                        var n = e.value,
                            r = t.state.name;
                        oe.xL.has(n) && (r = (0, Me.Nj)(r));
                        n === Le.d4z.GUILD_STAGE_VOICE && t.setState({
                            isPrivate: !1
                        });
                        t.setState({
                            channelType: n,
                            name: r
                        })
                    };
                    t.handlePrivacyChange = function(e) {
                        t.setState({
                            isPrivate: e
                        })
                    };
                    t.handleApplicationChange = function(e) {
                        t.setState({
                            applicationId: e
                        })
                    };
                    t.handleSKUChange = function(e) {
                        t.setState({
                            skuId: e
                        })
                    };
                    t.handleShowBranchesToggle = function(e) {
                        t.setState({
                            showBranches: e,
                            branchId: null
                        })
                    };
                    t.handleBranchChange = function(e) {
                        t.setState({
                            branchId: e
                        })
                    };
                    t.handleHasBranchesChange = function(e) {
                        t.setState({
                            hasBranches: e
                        })
                    };
                    var r, a = Ge(t);
                    t.handleSubmit = (r = Ue((function(e) {
                        var n, t, r, o, s, i, l, c, d, h, p, f, C, N, m, g, y, _, v, O, b, A, T, I;
                        return Qe(this, (function(M) {
                            switch (M.label) {
                                case 0:
                                    e.preventDefault();
                                    n = a.props, t = n.cloneChannel, r = n.categoryId, o = n.user, s = n.memberRoleIds, i = n.isAdmin, l = n.onClose, c = n.owner;
                                    d = a.state, h = d.name, p = d.pendingPermissionOverwrites, f = d.channelType,
                                        C = d.skuId, N = d.branchId, m = d.isPrivate;
                                    if (null == (g = a.getGuildId())) return [2];
                                    if (null != t) {
                                        y = u().values(t.permissionOverwrites);
                                        _ = t.bitrate;
                                        v = t.userLimit
                                    } else if (f === Le.d4z.GUILD_ANNOUNCEMENT) y = (0, Me.rt)(g);
                                    else {
                                        if (m) {
                                            y = (0, Me.oQ)(g, f, [], !0);
                                            (O = (0, q.Tj)(p, f)).length > 0 && (y = y.concat(O));
                                            b = null != c && o.id === c.id;
                                            y.some((function(e) {
                                                return s.has(e.id)
                                            })) || i || b || y.push((0, Me.jZ)(o.id, f))
                                        }
                                        if (f === Le.d4z.GUILD_STAGE_VOICE) {
                                            y = [];
                                            Object.values(p).forEach((function(e) {
                                                var n = e.row;
                                                null != n.id && "" !== n.id && (n.rowType === xe.aC.ROLE ? y.push((0, ae.createModeratorOverwrite)(n.id, K.BN.ROLE)) : n.rowType === xe.aC.MEMBER && y.push((0, ae.createModeratorOverwrite)(n.id, K.BN.MEMBER)))
                                            }))
                                        }
                                    }
                                    a.setState({
                                        errors: {}
                                    });
                                    M.label = 1;
                                case 1:
                                    M.trys.push([1, 3, , 4]);
                                    return [4, E.Z.createChannel({
                                        guildId: g,
                                        type: f,
                                        name: h,
                                        permissionOverwrites: y,
                                        bitrate: _,
                                        userLimit: v,
                                        parentId: f !== Le.d4z.GUILD_CATEGORY ? r : null,
                                        skuId: C,
                                        branchId: N
                                    })];
                                case 2:
                                    if (null == (A = M.sent()) || 201 !== A.status) return [2];
                                    T = A.body;
                                    oe.xL.has(f) && (0, ne.XU)(T.guild_id, T.id);
                                    l();
                                    return [3, 4];
                                case 3:
                                    null != (I = M.sent()).body && "object" == typeof I.body ? a.setState({
                                        errors: I.body
                                    }) : a.setState({
                                        errors: {
                                            message: S.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
                                        }
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return r.apply(this, arguments)
                    });
                    var s = e.channelType,
                        i = e.cloneChannel,
                        l = e.prefillChannelName;
                    t.state = {
                        channelType: null != s ? s : Le.d4z.GUILD_TEXT,
                        name: null != i ? (0, X.F6)(i, he.default, de.Z) : null != l ? l : "",
                        pendingPermissionOverwrites: {},
                        isPrivate: !1,
                        prevGuildId: e.guildId,
                        applicationId: null,
                        skuId: null,
                        branchId: null,
                        showBranches: !1,
                        hasBranches: !1,
                        slide: qe.CHANNEL_INFO,
                        errors: {}
                    };
                    t.handlePermissionOverwriteChange = t.handlePermissionOverwriteChange.bind(Ge(t));
                    return t
                }
                var i = o.prototype;
                i.componentDidMount = function() {
                    var e = this._input;
                    null != e && e.select();
                    var n = this.props,
                        t = n.guildId,
                        r = n.applications;
                    n.canCreateStoreChannel && null == r && C.Z.fetchApplications(t);
                    W.ZP.trackWithMetadata(Le.rMx.OPEN_MODAL, {
                        type: "Create Channel"
                    });
                    J.O2.trackExposure({
                        guildId: t,
                        location: "45d324_1"
                    })
                };
                i.componentDidUpdate = function(e, n) {
                    !n.isPrivate && this.state.isPrivate && this.state.channelType === Le.d4z.GUILD_ANNOUNCEMENT && this.setState({
                        channelType: Le.d4z.GUILD_TEXT
                    });
                    !n.isPrivate && this.state.isPrivate && W.ZP.trackWithMetadata(Le.rMx.OPEN_MODAL, {
                        type: "Create Private Channel"
                    })
                };
                i.getGuildId = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return e.guildId
                };
                i.canSubmit = function() {
                    var e = this.props,
                        n = e.canViewChannels,
                        t = e.canConnect,
                        r = this.state,
                        a = r.isPrivate,
                        o = r.channelType,
                        s = r.skuId,
                        i = r.name;
                    return "" !== i && "" !== i.trim() && (!(a && !(0, q.nT)(o, n, t)) && (o !== Le.d4z.GUILD_STORE || null != s))
                };
                i.getIconComponent = function() {
                    var e = this.state,
                        n = e.isPrivate,
                        t = e.channelType;
                    switch (t) {
                        case Le.d4z.GUILD_TEXT:
                            return n ? Ce.Z : Ee.Z;
                        case Le.d4z.GUILD_FORUM:
                            return Ne.Z;
                        case Le.d4z.GUILD_MEDIA:
                            return _e.Z;
                        case Le.d4z.GUILD_VOICE:
                            return n ? Ae.Z : be.Z;
                        case Le.d4z.GUILD_STORE:
                            return Ie.Z;
                        case Le.d4z.GUILD_ANNOUNCEMENT:
                            return Oe.Z;
                        case Le.d4z.GUILD_STAGE_VOICE:
                            return Te.Z;
                        default:
                            return (0, oe.zi)(t) ? Ee.Z : Pe.Vq
                    }
                };
                i.renderHeader = function() {
                    var e, n = this.props,
                        t = n.cloneChannel,
                        a = n.categoryId,
                        o = n.onClose,
                        s = function(e, n) {
                            return null != e ? S.Z.Messages.CLONE_CHANNEL : n === Le.d4z.GUILD_CATEGORY ? S.Z.Messages.CREATE_CATEGORY : S.Z.Messages.CREATE_CHANNEL
                        }(t, this.state.channelType);
                    if (null != a) {
                        var i, l = se.Z.getChannel(a);
                        e = (0, r.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: Ze().subtitle,
                            children: S.Z.Messages.IN_CATEGORY.format({
                                categoryName: null !== (i = null == l ? void 0 : l.name) && void 0 !== i ? i : ""
                            })
                        })
                    }
                    return (0, r.jsxs)(f.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsxs)("div", {
                            className: Ze().header,
                            children: [(0, r.jsx)(f.Heading, {
                                id: this.headerId,
                                variant: "heading-lg/semibold",
                                className: Ze().title,
                                children: s
                            }), e]
                        }), (0, r.jsx)(f.ModalCloseButton, {
                            onClick: o,
                            className: Ze().closeButton
                        })]
                    })
                };
                i.renderName = function() {
                    var e, n = this,
                        a = this.props,
                        o = a.cloneChannel,
                        s = a.guildId,
                        i = this.state,
                        l = i.errors,
                        c = i.channelType;
                    null != (null == l ? void 0 : l.name) && (e = (0, r.jsx)(f.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: Ze().error,
                        children: l.name
                    }));
                    var u = c === Le.d4z.GUILD_CATEGORY,
                        d = u ? S.Z.Messages.CATEGORY_NAME : S.Z.Messages.FORM_LABEL_CHANNEL_NAME,
                        h = null != o ? (0, r.jsx)(f.FormText, {
                            className: Ze().channelNameNote,
                            type: f.FormText.Types.DESCRIPTION,
                            children: S.Z.Messages.CLONE_CHANNEL_HELP.format({
                                name: (0, X.F6)(o, he.default, de.Z, !0)
                            })
                        }) : c === Le.d4z.GUILD_FORUM ? (0, r.jsx)(f.FormText, {
                            className: Ze().channelNameNote,
                            type: f.FormText.Types.DESCRIPTION,
                            children: S.Z.Messages.FORUM_CHANNEL_NAME_NOTE.format({
                                forumUpsellHook: function(e, n) {
                                    return (0, r.jsx)(f.Anchor, {
                                        onClick: function() {
                                            return (0, f.openModalLazy)(Ue((function() {
                                                var e, n;
                                                return Qe(this, (function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [4, Promise.all([t.e(40532), t.e(64572), t.e(79913), t.e(73727), t.e(10675), t.e(54602), t.e(74562), t.e(77754)]).then(t.bind(t, 274562))];
                                                        case 1:
                                                            e = a.sent(), n = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(n, ze(ke({}, e), {
                                                                    guildId: s
                                                                }))
                                                            }]
                                                    }
                                                }))
                                            })))
                                        },
                                        children: e
                                    }, n)
                                }
                            })
                        }) : null,
                        p = this.getIconComponent();
                    return (0, r.jsx)(fe.FG, {
                        children: function(t) {
                            return (0, r.jsxs)(f.FormItem, {
                                title: d,
                                tag: "label",
                                htmlFor: t,
                                titleClassName: Ze().sectionTitle,
                                className: Ze().name,
                                children: [(0, r.jsx)(f.TextInput, {
                                    value: n.state.name,
                                    onChange: n.handleNameChange,
                                    id: t,
                                    inputRef: n.setInputRef,
                                    maxLength: 100,
                                    placeholder: nn(c),
                                    className: Ze().inputWrapper,
                                    inputClassName: u ? void 0 : Ze().inputInner,
                                    prefixElement: u ? null : (0, r.jsx)(p, {
                                        className: Ze().inputPrefix,
                                        width: 16,
                                        height: 16
                                    }),
                                    autoFocus: !0
                                }), e, h]
                            })
                        }
                    })
                };
                i.renderType = function() {
                    var e = this.props,
                        n = e.cloneChannel,
                        t = e.applications,
                        a = e.canCreateStoreChannel,
                        o = e.canCreateAnnouncementChannel,
                        s = e.canCreateStageChannel,
                        i = e.canCreateForumChannel,
                        l = e.canCreateMediaChannel,
                        c = this.state,
                        u = c.channelType,
                        d = c.isPrivate;
                    if (null == n && u !== Le.d4z.GUILD_CATEGORY) {
                        var h = null != t && t.length > 0;
                        return (0, r.jsx)(f.FormItem, {
                            className: Ze().type,
                            title: S.Z.Messages.CHANNEL_TYPE,
                            children: (0, r.jsx)(f.RadioGroup, {
                                options: $e({
                                    isPrivate: d,
                                    showStoreChannelOption: a && h,
                                    showAnnouncementChannelOption: o,
                                    canCreateStageChannel: s,
                                    canCreateForumChannel: i,
                                    canCreateMediaChannel: l
                                }),
                                value: u,
                                size: f.RadioGroup.Sizes.NOT_SET,
                                onChange: this.handleTypeChange,
                                itemInfoClassName: Ze().radioBarLabel
                            })
                        })
                    }
                };
                i.renderChannelTypeDescription = function(e) {
                    var n;
                    e === Le.d4z.GUILD_ANNOUNCEMENT && (n = S.Z.Messages.FORM_HELP_NEWS.format({
                        documentationLink: Re.Z.getArticleURL(Le.BhN.ANNOUNCEMENT_CHANNELS)
                    }));
                    return null == n ? null : (0, r.jsx)(f.FormText, {
                        className: Ze().channelTypeDescription,
                        type: f.FormText.Types.DESCRIPTION,
                        children: n
                    })
                };
                i.renderStoreOptions = function() {
                    var e = this.props.applications,
                        n = this.state,
                        t = n.applicationId,
                        o = n.skuId,
                        s = n.branchId,
                        i = n.showBranches,
                        l = n.hasBranches;
                    if (null == e || 0 === e.length) throw new Error("Unexpected empty applications");
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(f.FormTitle, {
                            tag: "h5",
                            children: S.Z.Messages.CREATE_STORE_CHANNEL_APPLICATION
                        }), (0, r.jsx)(f.SingleSelect, {
                            options: e.map((function(e) {
                                return {
                                    label: e.name,
                                    value: e.id
                                }
                            })),
                            placeholder: S.Z.Messages.CREATE_STORE_CHANNEL_SELECT_APPLICATION,
                            value: t,
                            onChange: this.handleApplicationChange,
                            className: Ze().storeChannelOptionSelector
                        }), null != t ? (0, r.jsxs)(a.Fragment, {
                            children: [(0, r.jsx)(f.FormTitle, {
                                tag: "h5",
                                children: S.Z.Messages.CREATE_STORE_CHANNEL_SKU
                            }), (0, r.jsx)(V, {
                                applicationId: t,
                                onChange: this.handleSKUChange,
                                selectedSkuId: o,
                                className: Ze().storeChannelOptionSelector
                            }, t)]
                        }) : null, null != t && l ? (0, r.jsxs)(f.FormSwitch, {
                            hideBorder: !0,
                            onChange: this.handleShowBranchesToggle,
                            value: i,
                            note: S.Z.Messages.CREATE_STORE_CHANNEL_BETA_NOTE.format({
                                devPortalUrl: Le.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT
                            }),
                            children: [(0, r.jsx)(ge.Z, {
                                className: Ze().switchIcon
                            }), S.Z.Messages.CREATE_STORE_CHANNEL_BETA_TITLE]
                        }) : null, null != t ? (0, r.jsxs)(a.Fragment, {
                            children: [i ? (0, r.jsx)(f.FormTitle, {
                                tag: "h5",
                                children: S.Z.Messages.CREATE_STORE_CHANNEL_BRANCH
                            }) : null, (0, r.jsx)(Z, {
                                applicationId: t,
                                onChange: this.handleBranchChange,
                                selectedBranchId: s,
                                hide: !i,
                                onHasBranchesChange: this.handleHasBranchesChange,
                                className: Ze().storeChannelOptionSelector
                            }, t)]
                        }) : null]
                    })
                };
                i.renderPrivacyOptions = function() {
                    var e = this.props.cloneChannel,
                        n = this.state,
                        t = n.channelType,
                        a = n.isPrivate;
                    if (null != e || t === Le.d4z.GUILD_ANNOUNCEMENT) return null;
                    var o = t === Le.d4z.GUILD_CATEGORY ? S.Z.Messages.PRIVATE_CATEGORY : S.Z.Messages.PRIVATE_CHANNEL,
                        s = t === Le.d4z.GUILD_CATEGORY ? S.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION : S.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_NEW;
                    return (0, r.jsx)(f.FormItem, {
                        children: (0, r.jsxs)(f.FormSwitch, {
                            hideBorder: !0,
                            onChange: this.handlePrivacyChange,
                            value: a,
                            note: s,
                            children: [(0, r.jsx)(ye.Z, {
                                className: Ze().switchIcon
                            }), o]
                        })
                    }, "privacy-switch")
                };
                i.renderError = function(e) {
                    var n, t = this.state,
                        a = t.channelType,
                        o = t.isPrivate,
                        i = t.errors,
                        l = this.props,
                        c = l.canConnect,
                        u = l.canViewChannels;
                    if (Object.values(i).length > 0) {
                        if (null != i.message && "" !== i.message) n = i.message;
                        else if (e || null == i.name) {
                            var d = Object.values(i)[0];
                            d.length > 0 && (n = d)
                        }
                    } else o && !(0, q.nT)(a, u, c) && (n = (0, q.$7)(a));
                    if (null != n) return (0, r.jsx)("div", {
                        className: s()(Ze().createError, He({}, Ze().addMemberError, e)),
                        children: (0, r.jsx)(pe.Z, {
                            messageType: pe.Q.ERROR,
                            children: n
                        })
                    })
                };
                i.renderFooter = function() {
                    var e, n = this,
                        t = this.props,
                        a = t.channelType,
                        o = t.onClose,
                        s = this.state.channelType,
                        i = this.state.isPrivate;
                    e = a === Le.d4z.GUILD_CATEGORY ? S.Z.Messages.CREATE_CATEGORY : S.Z.Messages.CREATE_CHANNEL;
                    var l = i || s === Le.d4z.GUILD_STAGE_VOICE;
                    return (0, r.jsxs)(f.ModalFooter, {
                        className: Ze().modalFooter,
                        children: [l ? (0, r.jsx)(f.Button, {
                            type: "button",
                            onClick: function() {
                                n.setState({
                                    slide: qe.ADD_MEMBERS,
                                    errors: {}
                                })
                            },
                            disabled: !this.canSubmit(),
                            children: S.Z.Messages.NEXT
                        }) : (0, r.jsx)(f.Button, {
                            type: "submit",
                            disabled: !this.canSubmit(),
                            children: e
                        }), (0, r.jsx)(f.Button, {
                            onClick: o,
                            look: f.Button.Looks.LINK,
                            color: f.Button.Colors.PRIMARY,
                            children: S.Z.Messages.CANCEL
                        })]
                    })
                };
                i.renderAddMemberFooter = function() {
                    var e, n = this,
                        t = this.props.channelType,
                        a = this.state.pendingPermissionOverwrites;
                    e = 0 === Object.keys(a).length ? S.Z.Messages.SKIP : t === Le.d4z.GUILD_CATEGORY ? S.Z.Messages.CREATE_CATEGORY : S.Z.Messages.CREATE_CHANNEL;
                    return (0, r.jsxs)(f.ModalFooter, {
                        children: [(0, r.jsx)(f.Button, {
                            type: "submit",
                            disabled: !this.canSubmit(),
                            children: e
                        }), (0, r.jsx)(f.Button, {
                            onClick: function() {
                                n.setState({
                                    slide: qe.CHANNEL_INFO
                                })
                            },
                            look: f.Button.Looks.LINK,
                            color: f.Button.Colors.PRIMARY,
                            children: S.Z.Messages.BACK
                        })]
                    })
                };
                i.handlePermissionOverwriteChange = function(e) {
                    this.setState({
                        pendingPermissionOverwrites: e
                    })
                };
                i.renderCreateChannelContent = function() {
                    var e = this.state.channelType;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [this.renderHeader(), (0, r.jsxs)(f.ModalContent, {
                            className: Ze().modalContent,
                            children: [this.renderType(), this.renderName(), e === Le.d4z.GUILD_STORE ? this.renderStoreOptions() : null, this.renderChannelTypeDescription(e), e === Le.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
                        }), this.renderError(), this.renderFooter()]
                    })
                };
                i.renderAddMemberSlideContent = function() {
                    var e = this.state,
                        n = e.name,
                        t = e.channelType,
                        a = this.props,
                        o = a.guildId,
                        s = a.onClose,
                        i = this.getIconComponent(),
                        l = t === Le.d4z.GUILD_STAGE_VOICE;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(f.ModalHeader, {
                            separator: !1,
                            children: [(0, r.jsxs)("div", {
                                className: Ze().header,
                                children: [(0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: Ze().title,
                                    children: l ? S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MODERATOR_TITLE : S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                                }), (0, r.jsxs)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: Ze().subtitle,
                                    children: [(0, r.jsx)(i, {
                                        height: 16,
                                        width: 16,
                                        className: Ze().subtitleIcon
                                    }), n]
                                })]
                            }), (0, r.jsx)(f.ModalCloseButton, {
                                onClick: s,
                                className: Ze().closeButton
                            })]
                        }), this.renderError(!0), (0, r.jsx)(en, {
                            onChange: this.handlePermissionOverwriteChange,
                            guildId: o,
                            channelType: t
                        }), this.renderAddMemberFooter()]
                    })
                };
                i.renderSlides = function() {
                    var e = this.state.slide,
                        n = {
                            impression_group: d.AG.CHANNEL_ADD_FLOW
                        };
                    return (0, r.jsx)("div", {
                        children: (0, r.jsxs)(f.Slides, {
                            activeSlide: e,
                            width: 460,
                            children: [(0, r.jsx)(f.Slide, {
                                id: qe.CHANNEL_INFO,
                                impressionName: d.zs.CHANNEL_ADD_INFO,
                                impressionProperties: n,
                                children: this.renderCreateChannelContent()
                            }), (0, r.jsx)(f.Slide, {
                                id: qe.ADD_MEMBERS,
                                impressionName: d.zs.CHANNEL_ADD_MEMBERS,
                                impressionProperties: n,
                                children: this.renderAddMemberSlideContent()
                            })]
                        })
                    })
                };
                i.render = function() {
                    var e = this.props.transitionState;
                    return (0, r.jsx)(f.ModalRoot, {
                        transitionState: e,
                        className: Ze().modal,
                        "aria-labelledby": this.headerId,
                        size: f.ModalSize.DYNAMIC,
                        children: (0, r.jsx)("form", {
                            onSubmit: this.handleSubmit,
                            children: this.renderSlides()
                        })
                    })
                };
                return o
            }(a.PureComponent);
            const rn = a.forwardRef((function(e, n) {
                var t = e.channelType,
                    a = e.guildId,
                    o = e.cloneChannelId,
                    s = (0, p.cj)([ce.Z, he.default, ue.Z, se.Z, ie.Z, le.ZP], (function() {
                        var e, n = ce.Z.getGuild(a),
                            r = he.default.getCurrentUser();
                        l()(null != r, "CreateChannel: user cannot be undefined");
                        var s, i, c = null != n && null != n.ownerId ? he.default.getUser(n.ownerId) : null,
                            u = new Set(null !== (s = null === (e = le.ZP.getMember(a, r.id)) || void 0 === e ? void 0 : e.roles) && void 0 !== s ? s : []),
                            d = ue.Z.can(Le.Plq.ADMINISTRATOR, n),
                            h = se.Z.getChannel(o);
                        return {
                            guild: n,
                            applications: ie.Z.getApplicationsForGuild(a),
                            canCreateStoreChannel: null != n && n.hasFeature(Le.oNc.COMMERCE),
                            canCreateAnnouncementChannel: null != n && n.hasFeature(Le.oNc.NEWS),
                            user: r,
                            owner: c,
                            memberRoleIds: u,
                            canViewChannels: ue.Z.can(Le.Plq.VIEW_CHANNEL, n),
                            canConnect: ue.Z.can(Le.Plq.CONNECT, n),
                            isAdmin: d,
                            cloneChannel: h,
                            channelType: null !== (i = null == h ? void 0 : h.type) && void 0 !== i ? i : t,
                            canManageRoles: ue.Z.can(Le.Plq.MANAGE_ROLES, n),
                            canManageChannels: ue.Z.can(Le.Plq.MANAGE_CHANNELS, n)
                        }
                    })),
                    i = s.canManageRoles,
                    c = s.canManageChannels,
                    u = (0, re.m)(a) && i && c,
                    d = (0, J.W3)(a),
                    h = (0, ee.Ui)(null == s ? void 0 : s.guild);
                return (0, r.jsx)(tn, ze(ke({}, e, s), {
                    canCreateStageChannel: u,
                    canCreateForumChannel: d,
                    canCreateMediaChannel: h,
                    ref: n
                }))
            }))
        },
        388352: (e, n, t) => {
            t.r(n);
            t.d(n, {
                createModeratorOverwrite: () => T,
                default: () => S
            });
            var r = t(785893),
                a = t(667294),
                o = t(202351),
                s = t(304548),
                i = t(442368),
                l = t(347365),
                c = t(73904),
                u = t(276190),
                d = t(61209),
                h = t(567403),
                p = t(107364),
                f = t(443812),
                E = t(565571),
                C = t(563135),
                N = t(227202),
                m = t(449518),
                g = t(473708),
                y = t(102437),
                _ = t.n(y);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function O(e, n, t, r, a, o, s) {
                try {
                    var i = e[o](s),
                        l = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(l) : Promise.resolve(l).then(r, a)
            }

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            s = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(e, n) {
                var t, r, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };

            function T(e, n) {
                return {
                    id: e,
                    type: n,
                    deny: C.ZP.NONE,
                    allow: N.yP
                }
            }

            function I(e, n) {
                var t = Object.values(n).filter((function(e) {
                    return null != e.row.id
                })).map((function(e) {
                    var n = e.row;
                    return n.rowType === m.aC.ROLE ? T(n.id, c.BN.ROLE) : T(n.id, c.BN.MEMBER)
                }));
                return (0, i.hw)(e.id, t, !0)
            }

            function S(e) {
                var n = e.transitionState,
                    t = e.onClose,
                    i = e.channelId,
                    c = (0, f.Dt)(),
                    C = (0, o.e7)([d.Z], (function() {
                        return d.Z.getChannel(i)
                    })),
                    m = (0, o.e7)([h.Z], (function() {
                        return h.Z.getGuild(null == C ? void 0 : C.getGuildId())
                    })),
                    y = b(a.useState({}), 2),
                    v = y[0],
                    T = y[1],
                    S = b(a.useState(!1), 2),
                    M = S[0],
                    R = S[1],
                    L = b(a.useState(null), 2),
                    x = L[0],
                    j = L[1];
                if (null == C || null == m) return null;
                var P, w, Z = (w = (P = function() {
                    var e, n;
                    return A(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                R(!0);
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, I(C, v)];
                            case 2:
                                r.sent();
                                t();
                                return [3, 4];
                            case 3:
                                e = r.sent();
                                n = new l.Hx(e);
                                R(!1);
                                j(n);
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(t, r) {
                        var a = P.apply(e, n);

                        function o(e) {
                            O(a, t, r, o, s, "next", e)
                        }

                        function s(e) {
                            O(a, t, r, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }), function() {
                    return w.apply(this, arguments)
                });
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": c,
                    size: s.ModalSize.SMALL,
                    className: _().modalRoot,
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        separator: !1,
                        direction: p.Z.Direction.VERTICAL,
                        align: p.Z.Align.CENTER,
                        className: _().header,
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: g.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                        }), (0,
                            r.jsxs)(s.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: _().headerSubtitle,
                            children: [(0, r.jsx)(E.Z, {
                                height: 16,
                                width: 16,
                                className: _().headerSubtitleIcon
                            }), C.name]
                        })]
                    }), (0, r.jsx)(u.AddMembersBody, {
                        guild: m,
                        channel: C,
                        permission: N.yP,
                        pendingAdditions: v,
                        setPendingAdditions: T
                    }), null != x ? (0, r.jsx)(s.Text, {
                        className: _().error,
                        variant: "text-xs/normal",
                        color: "text-danger",
                        children: x.getAnyErrorMessage()
                    }) : null, (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            onClick: Z,
                            submitting: M,
                            children: g.Z.Messages.ADD
                        }), (0, r.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            onClick: t,
                            children: g.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);