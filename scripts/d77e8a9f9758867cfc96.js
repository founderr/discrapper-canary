(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [87947], {
        489893: (e, t, n) => {
            e.exports = n.p + "dea5252276408a8bfca6dda585ca5216.svg"
        },
        794649: (e, t, n) => {
            e.exports = n.p + "d759f3acc6286c964cc8118d7f68b374.svg"
        },
        638657: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                openCreateGuildModal: () => q,
                updateCreateGuildModal: () => Q
            });
            var r = n(785893),
                o = n(667294),
                i = n(304548),
                a = n(415879),
                l = n(652591),
                s = n(441143),
                c = n.n(s),
                u = n(993231),
                f = n(634698),
                _ = n(463473),
                d = n(241811),
                I = n(497279),
                p = n(88100),
                E = n(837201),
                S = n(294184),
                N = n.n(S),
                m = n(667569),
                T = n(347365),
                O = n(784426),
                v = n(107364),
                A = n(443812),
                C = n(308921),
                D = n(2590),
                L = n(473708),
                y = n(274962),
                g = n.n(y),
                b = n(489893),
                M = n.n(b),
                h = n(794649),
                R = n.n(h);

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function w(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return U(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = "hTKzmak",
                P = (0, A.hQ)();
            var x = function() {
                    var e = window.GLOBAL_ENV.INVITE_HOST,
                        t = "";
                    if (null == e) {
                        e = location.host;
                        t = D.Z5c.INVITE("")
                    }
                    return "".concat(location.protocol, "//").concat(e).concat(t, "/")
                }(),
                Z = [j, "".concat(x).concat(j), "".concat(x).concat("cool-people")],
                k = function(e) {
                    var t = e.onClick;
                    return (0, r.jsxs)(i.Clickable, {
                        className: g().rowContainer,
                        onClick: function() {
                            t();
                            (0, O.uL)(D.Z5c.GUILD_DISCOVERY)
                        },
                        children: [(0, r.jsx)("img", {
                            width: 40,
                            height: 40,
                            className: g().rowIcon,
                            alt: "",
                            src: R()
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(i.Heading, {
                                className: g().rowText,
                                variant: "heading-md/semibold",
                                children: L.Z.Messages.DISCOVERY_UPSELL_HEADER
                            }), (0, r.jsx)(i.Text, {
                                className: g().rowText,
                                variant: "text-xs/normal",
                                children: L.Z.Messages.DISCOVERY_UPSELL_DESCRIPTION
                            })]
                        }), (0, r.jsx)("img", {
                            className: g().rowArrow,
                            alt: "",
                            src: M()
                        })]
                    })
                };

            function F(e) {
                var t = e.onBack,
                    n = e.onClose,
                    a = e.isSlideReady,
                    l = G(o.useState(""), 2),
                    s = l[0],
                    c = l[1],
                    u = G(o.useState(!1), 2),
                    f = u[0],
                    _ = u[1],
                    d = G(o.useState(null), 2),
                    I = d[0],
                    p = d[1],
                    E = o.useRef(null);
                o.useEffect((function() {
                    var e;
                    a && (null === (e = E.current) || void 0 === e || e.focus())
                }), [a]);
                var S = function(e) {
                    e.preventDefault();
                    var t = s.trim();
                    if ("" !== t) {
                        p(null);
                        _(!0);
                        var r = t.split("/"),
                            o = r[r.length - 1];
                        m.Z.resolveInvite(o, "Join Guild", {
                            inputValue: t
                        }).then((function(e) {
                            var t = e.invite;
                            _(!1);
                            if (null != t) {
                                if (null != t.channel) {
                                    var r = m.Z.getInviteContext("Join Guild", t);
                                    m.Z.acceptInvite({
                                        inviteKey: t.code,
                                        context: r,
                                        callback: function(e) {
                                            n();
                                            m.Z.transitionToInvite(e)
                                        }
                                    }).then((function() {}), (function(e) {
                                        if (e instanceof T.yZ || e instanceof T.Hx) {
                                            var t = (0, C.O)(e.code);
                                            p(t)
                                        } else p(L.Z.Messages.INVITE_MODAL_ERROR_DEFAULT)
                                    }))
                                }
                            } else p(L.Z.Messages.INSTANT_INVITE_EXPIRED)
                        }), (function(e) {
                            _(!1);
                            var t = new T.yZ(e),
                                n = (0, C.O)(t.code);
                            p(n)
                        }))
                    } else p(L.Z.Messages.INVALID_INVITE_LINK_ERROR)
                };
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        className: g().header,
                        direction: v.Z.Direction.VERTICAL,
                        separator: !1,
                        children: [(0, r.jsx)(i.Heading, {
                            className: g().title,
                            variant: "heading-xl/semibold",
                            children: L.Z.Messages.JOIN_SERVER_TITLE
                        }), (0, r.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: L.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
                        }), (0,
                            r.jsx)(i.ModalCloseButton, {
                            className: g().closeButton,
                            onClick: n
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: g().content,
                        children: [(0, r.jsx)("form", {
                            onSubmit: S,
                            className: g().inputForm,
                            children: (0, r.jsxs)(i.FormItem, {
                                children: [(0, r.jsx)(i.FormTitle, {
                                    id: P,
                                    error: I,
                                    className: N()(g().formTitle, w({}, g().error, null != I)),
                                    required: !0,
                                    children: L.Z.Messages.FORM_LABEL_INVITE_LINK
                                }), (0, r.jsx)(i.TextInput, {
                                    value: s,
                                    onChange: c,
                                    className: g().input,
                                    inputClassName: g().inputInner,
                                    placeholder: "".concat(x).concat(j),
                                    inputRef: E,
                                    required: !0,
                                    "aria-labelledby": P
                                })]
                            })
                        }), (0, r.jsx)(i.FormItem, {
                            title: L.Z.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                            titleClassName: g().formTitle,
                            className: g().examplesForm,
                            children: Z.map((function(e) {
                                return (0, r.jsx)(i.Clickable, {
                                    className: g().sampleLink,
                                    onClick: function() {
                                        return c(e)
                                    },
                                    children: e
                                }, e)
                            }))
                        }), (0, r.jsx)(k, {
                            onClick: n
                        })]
                    }), (0, r.jsxs)(i.ModalFooter, {
                        className: g().footer,
                        children: [(0, r.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            submitting: f,
                            onClick: S,
                            children: L.Z.Messages.NUF_JOIN_SERVER_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            size: i.Button.Sizes.MIN,
                            onClick: t,
                            children: L.Z.Messages.BACK
                        })]
                    })]
                })
            }
            var V = n(416625),
                B = n(814148),
                J = n.n(B);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                var t = e.transitionState,
                    n = e.initialSlide,
                    a = void 0 === n ? V._.GUILD_TEMPLATES : n,
                    s = e.onSuccess,
                    S = e.onClose,
                    N = e.onSlideChange,
                    m = e.hasJoinButton,
                    T = Y(o.useState(a), 2),
                    O = T[0],
                    v = T[1],
                    A = (0, f.Z)(O),
                    C = Y(o.useState(null), 2),
                    L = C[0],
                    y = C[1],
                    g = Y(o.useState(null), 2),
                    b = g[0],
                    M = g[1],
                    h = Y(o.useState(null), 2),
                    R = h[0],
                    U = h[1],
                    w = Y(o.useState(!1), 2),
                    G = w[0],
                    j = w[1];
                o.useEffect((function() {
                    v(a)
                }), [v, a]);
                o.useEffect((function() {
                    O !== A && N(O)
                }), [N, O, A]);
                var P = o.useCallback((function(e) {
                        v(V._.CREATION_INTENT);
                        M(e);
                        l.default.track(D.rMx.GUILD_TEMPLATE_SELECTED, {
                            template_name: e.id,
                            template_code: e.code
                        })
                    }), []),
                    x = o.useCallback((function(e) {
                        j(e);
                        v(V._.CUSTOMIZE_GUILD)
                    }), []),
                    Z = o.useCallback((function() {
                        return v(V._.JOIN_GUILD)
                    }), [v]),
                    k = o.useCallback((function() {
                        if (O !== V._.CUSTOMIZE_GUILD) {
                            v(V._.GUILD_TEMPLATES);
                            M(null)
                        } else v(V._.CREATION_INTENT)
                    }), [O]),
                    B = o.useCallback((function(e) {
                        U(e);
                        s(e)
                    }), [s, U]),
                    K = o.useCallback((function() {
                        c()(null != R, "handleSuccess called before onGuildCreated");
                        s(R)
                    }), [s, R]),
                    H = {
                        impression_group: u.AG.GUILD_ADD_FLOW
                    };
                return (0, r.jsx)("div", {
                    className: (0, _.Q)(D.BRd.LIGHT),
                    children: (0, r.jsx)(i.ModalRoot, {
                        transitionState: t,
                        disableTrack: !0,
                        children: (0, r.jsx)("div", {
                            className: J().container,
                            children: (0, r.jsxs)(i.Slides, {
                                activeSlide: O,
                                width: 440,
                                onSlideReady: function(e) {
                                    return y(e)
                                },
                                children: [(0, r.jsx)(i.Slide, {
                                    id: V._.GUILD_TEMPLATES,
                                    impressionName: u.zs.GUILD_ADD_LANDING,
                                    impressionProperties: H,
                                    children: (0, r.jsx)(E.Z, {
                                        isNewUser: !1,
                                        onJoin: m ? Z : void 0,
                                        onChooseTemplate: P,
                                        onClose: S
                                    })
                                }), (0, r.jsx)(i.Slide, {
                                    id: V._.CREATION_INTENT,
                                    impressionName: u.zs.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: H,
                                    children: (0, r.jsx)(I.Z, {
                                        onClose: S,
                                        onBack: k,
                                        onCreationIntentChosen: x
                                    })
                                }), (0, r.jsx)(i.Slide, {
                                    id: V._.CUSTOMIZE_GUILD,
                                    impressionName: u.zs.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: H,
                                    children: (0, r.jsx)(p.Z, {
                                        guildTemplate: b,
                                        onGuildCreated: B,
                                        onClose: S,
                                        onBack: k,
                                        isSlideReady: L === V._.CUSTOMIZE_GUILD,
                                        isCommunity: G
                                    })
                                }), (0, r.jsx)(i.Slide, {
                                    id: V._.CHANNEL_PROMPT,
                                    impressionName: u.zs.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: H,
                                    children: (0, r.jsx)(d.Z, {
                                        createdGuildId: R,
                                        onClose: S,
                                        onChannelPromptCompleted: K,
                                        isSlideReady: L === V._.CHANNEL_PROMPT
                                    })
                                }), (0, r.jsx)(i.Slide, {
                                    id: V._.JOIN_GUILD,
                                    impressionName: u.zs.GUILD_ADD_JOIN,
                                    impressionProperties: H,
                                    children: (0, r.jsx)(F, {
                                        onBack: k,
                                        onClose: S,
                                        isSlideReady: L === V._.JOIN_GUILD
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            var z = n(571680);

            function X(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function W(e, t, n, o) {
                return (0, r.jsx)(H, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            X(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    onSuccess: function(t) {
                        a.Z.flowStep(z.MK.CREATE_GUILD, z.X2.SUCCESS);
                        e.onClose();
                        null == o || o(t)
                    },
                    onSlideChange: function(e) {
                        return function(e, t) {
                            switch (e) {
                                case V._.GUILD_TEMPLATES:
                                    a.Z.flowStepOrStart(z.MK.CREATE_GUILD, z.X2.GUILD_TEMPLATES);
                                    l.default.track(D.rMx.OPEN_MODAL, {
                                        type: "Create Guild Templates",
                                        location: t
                                    });
                                    break;
                                case V._.CUSTOMIZE_GUILD:
                                    a.Z.flowStep(z.MK.CREATE_GUILD, z.X2.GUILD_CREATE);
                                    l.default.track(D.rMx.OPEN_MODAL, {
                                        type: "Create Guild Step 2",
                                        location: t
                                    });
                                    break;
                                case V._.CREATION_INTENT:
                                    l.default.track(D.rMx.OPEN_MODAL, {
                                        type: "Server Intent Discovery",
                                        location: t
                                    });
                                    break;
                                case V._.JOIN_GUILD:
                                    a.Z.flowStep(z.MK.CREATE_GUILD, z.X2.JOIN_GUILD);
                                    l.default.track(D.rMx.OPEN_MODAL, {
                                        type: "Join Guild",
                                        location: t
                                    })
                            }
                        }(e, n)
                    },
                    initialSlide: t,
                    hasJoinButton: !0
                }, e))
            }
            var q = function(e) {
                    var t = e.initialSlide,
                        n = e.location,
                        r = e.onSuccess;
                    (0, i.openModal)((function(e) {
                        return W(e, t, n, r)
                    }), {
                        modalKey: V.P
                    })
                },
                Q = function(e) {
                    var t = e.slide,
                        n = e.location;
                    (0, i.updateModal)(V.P, (function(e) {
                        return W(e, t, n)
                    }))
                }
        },
        571680: (e, t, n) => {
            "use strict";
            n.d(t, {
                MK: () => r,
                FF: () => o,
                mx: () => i,
                X2: () => a,
                EW: () => l
            });
            var r, o, i, a, l;
            ! function(e) {
                e.UNKNOWN = "unknown";
                e.ANY = "any";
                e.INVITE = "invite";
                e.ORGANIC = "organic_registration";
                e.ORGANIC_MARKETING = "organic_marketing";
                e.ORGANIC_GUILD_TEMPLATES = "organic_guild_template";
                e.CREATE_GUILD = "create_guild"
            }(r || (r = {}));
            ! function(e) {
                e.AGE_GATE = "age_gate";
                e.AGE_GATE_UNDERAGE = "age_gate_underage"
            }(o || (o = {}));
            ! function(e) {
                e.CLAIM_ACCOUNT = "claim_account";
                e.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"
            }(i || (i = {}));
            ! function(e) {
                e.GUILD_TEMPLATES = "guild_templates";
                e.GUILD_CREATE = "guild_create";
                e.CREATION_INTENT = "creation_intent";
                e.CHANNEL_PROMPT = "channel_prompt";
                e.JOIN_GUILD = "join_guild";
                e.SUCCESS = "create_success"
            }(a || (a = {}));
            ! function(e) {
                e.NUF_STARTED = "nuf_started";
                e.AGE_GATE = "age_gate";
                e.NUF_COMPLETE = "nuf_complete";
                e.HUB_CONNECTION = "hub_connection"
            }(l || (l = {}))
        },
        415879: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(38736),
                o = n(630631),
                i = n(296602),
                a = n(652591),
                l = n(571680),
                s = n(2590);

            function c(e, t, n) {
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
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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

            function _(e, t) {
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

            function d(e) {
                var t = function(e, t) {
                    if ("object" !== I(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== I(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === I(t) ? t : String(t)
            }
            var I = function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                },
                p = "UserFlowAnalyticsStore_current",
                E = "UserFlowAnalyticsStore";
            new i.Z("UserFlowAnalytics");

            function S(e) {
                if (e === l.MK.UNKNOWN) return null;
                var t = o.Z.get("".concat(E, "-").concat(e));
                if (null == t) return null;
                var n = t.version,
                    r = _(t, ["version"]);
                return 1 !== n ? null : r
            }
            var N = (0, r.Z)((function(e, t) {
                return c({
                    flows: {},
                    currentFlow: null
                }, "activeFlow", (function() {
                    var e, n = null !== (e = t().currentFlow) && void 0 !== e ? e : o.Z.get(p);
                    if (null == n) return null;
                    var r = t().flows[n],
                        i = null != r ? r : S(n);
                    return null != (null == i ? void 0 : i.currentStep) ? n : null
                }))
            }));
            N.subscribe((function(e) {
                var t;
                if (null != e) {
                    ! function(e) {
                        if (e.type !== l.MK.UNKNOWN) {
                            var t = "".concat(E, "-").concat(e.type);
                            if (e.ended) {
                                o.Z.remove(t);
                                o.Z.remove(p)
                            } else {
                                o.Z.set("".concat(E, "-").concat(e.type), f(u({}, e), {
                                    version: 1
                                }));
                                o.Z.set(p, e.type)
                            }
                        }
                    }(e);
                    a.default.track(s.rMx.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    });
                    if (e.ended) {
                        var n = u({}, N.getState().flows);
                        delete n[e.type];
                        N.setState({
                            flows: n,
                            currentFlow: null
                        })
                    }
                }
            }), (function(e) {
                return null != e.currentFlow ? e.flows[e.currentFlow] : void 0
            }));

            function m(e, t) {
                var n = N.getState().flows,
                    r = n[e],
                    o = _(n, [e].map(d)),
                    i = null != r ? r : S(e);
                if (null != (null == i ? void 0 : i.currentStep)) {
                    if (i.currentStep === t) return;
                    0
                }
                N.setState({
                    flows: f(u({}, o), c({}, e, {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date,
                        skipped: !1
                    })),
                    currentFlow: e
                })
            }

            function T(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e;
                if (e === l.MK.ANY) {
                    var o;
                    r = null !== (o = N.getState().activeFlow()) && void 0 !== o ? o : l.MK.UNKNOWN
                }
                var i = N.getState().flows,
                    a = i[r],
                    s = _(i, [r].map(d)),
                    I = null != a ? a : S(r);
                null != I && null != I.currentStep && I.currentStep !== t && N.setState({
                    flows: f(u({}, s), c({}, r, f(u({}, I), {
                        lastStep: I.currentStep,
                        lastTimestamp: I.currentTimestamp,
                        currentStep: t,
                        currentTimestamp: new Date,
                        ended: n
                    }))),
                    currentFlow: r
                })
            }

            function O() {
                return null != N.getState().activeFlow()
            }
            const v = {
                flowStart: m,
                flowStepOrStart: function(e, t) {
                    O() ? T(e, t) : m(e, t)
                },
                flowStep: T,
                hasActiveFlow: O
            }
        },
        308921: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => s,
                O: () => c
            });
            var r = n(473903),
                o = n(348592),
                i = n(694329),
                a = n(2590),
                l = n(473708);

            function s(e) {
                switch (e) {
                    case a.evJ.TOO_MANY_USER_GUILDS:
                        var t = r.default.getCurrentUser(),
                            n = i.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
                        return {
                            title: l.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                                quantity: n
                            }), description: l.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
                        };
                    case a.evJ.GUILD_AT_CAPACITY:
                        return {
                            title: l.Z.Messages.SERVER_IS_CURRENTLY_FULL, description: l.Z.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
                        return {
                            title: l.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: l.Z.Messages.PLEASE_TRY_AGAIN_LATER
                        };
                    default:
                        return null
                }
            }

            function c(e) {
                switch (e) {
                    case a.evJ.TOO_MANY_USER_GUILDS:
                        return l.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
                    case a.evJ.GUILD_AT_CAPACITY:
                        return l.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
                    case a.evJ.INVALID_COUNTRY_CODE:
                        return l.Z.Messages.INVALID_COUNTRY_CODE;
                    case a.evJ.INVALID_CANNOT_FRIEND_SELF:
                        return l.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
                    case a.evJ.INVITES_DISABLED:
                        return l.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
                            articleLink: o.Z.getArticleURL(a.BhN.INVITE_DISABLED)
                        });
                    default:
                        return l.Z.Messages.INVITE_MODAL_ERROR_DEFAULT
                }
            }
        }
    }
]);