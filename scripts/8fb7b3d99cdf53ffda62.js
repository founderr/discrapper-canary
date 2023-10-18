"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47311, 38657], {
        947311: (e, n, t) => {
            t.r(n);
            t.d(n, {
                Steps: () => de,
                default: () => pe
            });
            var r = t(785893),
                o = t(667294),
                i = t(441143),
                l = t.n(i),
                s = t(202351),
                a = t(70418),
                u = t(653224),
                c = t(985801),
                d = t(567403),
                f = t(775506),
                p = t(637330),
                m = t(652591),
                S = t(930865),
                I = t(294184),
                _ = t.n(I),
                C = t(443660),
                y = t(859917),
                E = t(124251),
                v = t(784648),
                h = t(102981),
                g = t(459289),
                b = t.n(g);

            function O(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function U(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && N(e, n)
            }

            function M(e, n) {
                return !n || "object" !== P(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function N(e, n) {
                N = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return N(e, n)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function x(e) {
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
                        var o = R(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return M(this, t)
                }
            }
            var T = function(e) {
                    U(t, e);
                    var n = x(t);

                    function t() {
                        O(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props.tier;
                        return (0, r.jsxs)("div", {
                            className: b().tierPill,
                            children: [(0, r.jsx)(y.Z, {
                                className: b().tierPillStar,
                                children: (0, r.jsx)(v.Z, {
                                    tier: e,
                                    className: b().tierPillGem
                                })
                            }), (0, S.nW)(e)]
                        })
                    };
                    return t
                }(o.PureComponent),
                L = function(e) {
                    var n = e.subscriptionChange,
                        t = e.guild;
                    if (0 === n) return null;
                    var o = Math.max(t.premiumSubscriberCount + n, 0),
                        i = (0, S.rF)(o, t.id),
                        l = i - (0, S.rF)(t.premiumSubscriberCount, t.id);
                    return 0 === l ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h.Z, {
                            className: l > 0 ? b().levelUpIcon : b().levelDownIcon
                        }), (0, r.jsx)(T, {
                            tier: i
                        })]
                    })
                },
                j = function(e) {
                    U(t, e);
                    var n = x(t);

                    function t() {
                        O(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.guild,
                            t = e.className,
                            o = e.subscriptionChange;
                        return (0, r.jsxs)("div", {
                            className: _()(b().subscription, t),
                            children: [(0, r.jsx)(E.Z, {
                                guild: n,
                                size: E.Z.Sizes.LARGE
                            }), (0, r.jsxs)("div", {
                                className: b().subscriptionInfo,
                                children: [(0, r.jsx)("div", {
                                    className: b().guildName,
                                    children: n.name
                                }), (0, r.jsxs)("div", {
                                    className: b().tierInfo,
                                    children: [(0, r.jsx)(T, {
                                        tier: n.premiumTier
                                    }), (0, r.jsx)(L, {
                                        guild: n,
                                        subscriptionChange: null != o ? o : 0
                                    })]
                                })]
                            })]
                        })
                    };
                    return t
                }(o.PureComponent),
                D = t(536392),
                A = t(107364),
                B = t(698011),
                G = t(818417),
                Z = t(473708),
                w = t(865029),
                F = t.n(w);

            function H(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function k(e) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return k(e)
            }

            function W(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && V(e, n)
            }

            function Y(e, n) {
                return !n || "object" !== q(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function V(e, n) {
                V = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return V(e, n)
            }
            var q = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function K(e) {
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
                    var t, r = k(e);
                    if (n) {
                        var o = k(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return Y(this, t)
                }
            }
            var Q = function(e) {
                W(t, e);
                var n = K(t);

                function t() {
                    H(this, t);
                    return n.apply(this, arguments)
                }
                t.prototype.render = function() {
                    var e = this.props.onClose;
                    return (0, r.jsxs)(a.ModalHeader, {
                        separator: !1,
                        justify: A.Z.Justify.BETWEEN,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, r.jsx)(a.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                };
                return t
            }(o.PureComponent);

            function X(e) {
                var n = e.imageClass,
                    t = e.children,
                    o = e.error,
                    i = e.onDismissError;
                return (0, r.jsxs)("div", {
                    className: F().content,
                    children: [(0, r.jsx)("div", {
                        className: _()(F().image, n)
                    }), t, (0, r.jsx)(C.Z, {
                        children: null != o ? (0,
                            r.jsx)(B.Z, {
                            className: F().error,
                            children: (0, r.jsx)(a.FormErrorBlock, {
                                onDismiss: i,
                                children: o.message
                            })
                        }) : null
                    })]
                })
            }
            var z = function(e) {
                var n = e.canceledCount,
                    t = (0, s.e7)([D.Z], (function() {
                        return D.Z.getPremiumTypeSubscription()
                    }));
                return null == t ? null : (0, r.jsxs)("div", {
                    className: F().pendingCancellation,
                    children: [(0, r.jsx)(G.Z, {
                        className: F().pendingCancellationIcon
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: F().pendingCancellationMessage,
                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: t.currentPeriodEnd,
                            canceledCount: n
                        })
                    })]
                })
            };

            function J(e) {
                var n = e.imageClass,
                    t = e.blurb,
                    o = e.guild,
                    i = e.warning,
                    l = e.error,
                    s = e.onDismissError,
                    u = e.slotCount,
                    c = void 0 === u ? 1 : u,
                    d = e.canceledCount,
                    f = void 0 === d ? 0 : d;
                return (0, r.jsxs)(X, {
                    imageClass: n,
                    error: l,
                    onDismissError: s,
                    children: [(0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: t
                    }), (0, r.jsx)(j, {
                        className: F().guildCard,
                        guild: o,
                        subscriptionChange: c
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: i
                    }), f > 0 ? (0, r.jsx)(z, {
                        canceledCount: f
                    }) : null]
                })
            }
            var $ = function(e) {
                    W(t, e);
                    var n = K(t);

                    function t() {
                        H(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.confirmation,
                            t = e.confirmationLabel,
                            o = e.isModifyingSubscription,
                            i = e.onConfirm,
                            l = e.onCancel;
                        return (0, r.jsxs)(a.ModalFooter, {
                            children: [(0, r.jsx)(a.Button, {
                                onClick: i,
                                submitting: o,
                                "aria-label": t,
                                children: n
                            }), (0, r.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                onClick: l,
                                disabled: o,
                                children: Z.Z.Messages.CANCEL
                            })]
                        })
                    };
                    return t
                }(o.PureComponent),
                ee = function(e) {
                    W(t, e);
                    var n = K(t);

                    function t() {
                        H(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.guild,
                            t = e.header,
                            i = e.blurb,
                            l = e.warning,
                            s = e.confirmation,
                            u = e.confirmationLabel,
                            c = e.imageClass,
                            d = e.error,
                            f = e.isModifyingSubscription,
                            p = e.onConfirm,
                            m = e.onCancel,
                            S = e.onDismissError,
                            I = e.canceledCount;
                        return (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(Q, {
                                text: t
                            }), (0, r.jsx)(a.ModalContent, {
                                children: (0, r.jsx)(J, {
                                    guild: n,
                                    blurb: i,
                                    warning: l,
                                    imageClass: c,
                                    error: d,
                                    onDismissError: S,
                                    canceledCount: I
                                })
                            }), (0, r.jsx)($, {
                                confirmation: s,
                                confirmationLabel: u,
                                isModifyingSubscription: f,
                                onConfirm: p,
                                onCancel: m
                            })]
                        })
                    };
                    return t
                }(o.PureComponent);
            ee.Header = Q;
            ee.ApplyBody = J;
            ee.TransferBody = function(e) {
                var n, t, i = e.imageClass,
                    l = e.blurb,
                    s = e.fromGuilds,
                    u = e.toGuild,
                    c = e.error,
                    d = e.onDismissError,
                    f = e.slotCount,
                    p = void 0 === f ? 1 : f,
                    m = e.canceledCount,
                    S = void 0 === m ? 0 : m,
                    I = o.useRef(s),
                    _ = null === (n = I.current) || void 0 === n ? void 0 : n.length,
                    C = null === (t = I.current) || void 0 === t ? void 0 : t.reduce((function(e, n) {
                        e.hasOwnProperty(n.id) || (e[n.id] = []);
                        e[n.id].push(n);
                        return e
                    }), {});
                return (0, r.jsxs)(X, {
                    imageClass: i,
                    error: c,
                    onDismissError: d,
                    children: [(0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-xs/bold",
                        className: F().transferGuildCardHeader,
                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: _
                        })
                    }), null != C ? Object.keys(C).map((function(e) {
                        return (0, r.jsx)(j, {
                            className: F().transferFromGuildCard,
                            guild: C[e][0],
                            subscriptionChange: -1 * C[e].length
                        }, e)
                    })) : null, (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        className: F().transferGuildCardHeader,
                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: p
                        })
                    }), (0, r.jsx)("div", {
                        className: F().activeTransferGuildCardBorder,
                        children: (0, r.jsx)(j, {
                            className: F().transferToGuildCard,
                            guild: u,
                            subscriptionChange: null != s ? s.length : 1
                        })
                    }), S > 0 ? (0, r.jsx)(z, {
                        canceledCount: S
                    }) : null]
                })
            };
            ee.Footer = $;
            const ne = ee;
            var te = t(138657),
                re = t(655052),
                oe = t(2590),
                ie = t(21501),
                le = t.n(ie);

            function se(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ae(e, n, t, r, o, i, l) {
                try {
                    var s = e[i](l),
                        a = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function ue(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ce(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return se(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return se(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var de, fe = function(e, n) {
                var t, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = n.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };
            ! function(e) {
                e.UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT";
                e.GUILD_SELECT = "GUILD_SELECT";
                e.CONFIRM = "CONFIRM";
                e.SUCCESS = "SUCCESS"
            }(de || (de = {}));
            const pe = function(e) {
                var n, t, i = e.guildBoostSlots,
                    I = e.selectedGuild,
                    _ = e.locationSection,
                    C = e.transitionState,
                    y = e.onClose,
                    E = (0, S.vx)(f.Z.boostSlots);
                l()(null != i || null != I, "Must either provide slots or an initial selected guild");
                l()(!(null == i ? void 0 : i.some((function(e) {
                    return e.isOnCooldown()
                }))), "If slots are provided, they must not be on cooldown");
                var v, h = [null == i ? de.UNUSED_QUANTITY_SELECT : null, null == I ? de.GUILD_SELECT : null, de.CONFIRM, de.SUCCESS].filter((function(e) {
                        return null != e
                    })),
                    g = ce((0, s.Wu)([c.Z], (function() {
                        return [c.Z.isModifyingAppliedBoost, c.Z.applyBoostError]
                    })), 2),
                    b = g[0],
                    O = g[1],
                    R = ce(o.useState(""), 2),
                    U = R[0],
                    M = R[1],
                    N = ce(o.useState(h[0]), 2),
                    P = N[0],
                    x = N[1],
                    T = ce(o.useState(!1), 2),
                    L = T[0],
                    j = T[1],
                    D = ce(o.useState(I), 2),
                    A = D[0],
                    B = D[1],
                    G = ce(o.useState(null != i ? i : E.slice(0, 1)), 2),
                    w = G[0],
                    F = G[1],
                    H = o.useMemo((function() {
                        return null == w ? [] : w.map((function(e) {
                            var n = e.premiumGuildSubscription;
                            return d.Z.getGuild(null == n ? void 0 : n.guildId)
                        })).filter((function(e) {
                            return null != e
                        }))
                    }), [w]),
                    k = o.useMemo((function() {
                        var e;
                        return null != (null == w || null === (e = w[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription)
                    }), [w]),
                    W = function() {
                        y(P === de.SUCCESS);
                        m.default.track(oe.rMx.MODAL_DISMISSED, {
                            type: oe.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: _
                        })
                    },
                    Y = (ue(v = {}, de.UNUSED_QUANTITY_SELECT, {
                            body: function() {
                                l()(!(null == i && 0 === E.length), "Cannot provide no slots if there are no other available slots");
                                return (0, r.jsxs)("div", {
                                    className: le().quantitySelectorBody,
                                    children: [(0, r.jsx)(a.Heading, {
                                        variant: "heading-md/semibold",
                                        className: le().quantitySelectorHeader,
                                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                    }), (0, r.jsx)(a.Text, {
                                        variant: "text-md/normal",
                                        className: le().quantitySelectorDescription,
                                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                    }), (0, r.jsxs)("div", {
                                        className: le().quantitySelectorWrapper,
                                        children: [(0, r.jsx)(p.Z, {
                                            value: w.length,
                                            onChange: function(e) {
                                                return F(E.slice(0, e))
                                            },
                                            minValue: 1,
                                            maxValue: E.length
                                        }), (0, r.jsx)(a.Text, {
                                            className: le().quantitySelectorLabel,
                                            variant: "text-md/normal",
                                            children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                        })]
                                    })]
                                })
                            },
                            footer: function() {
                                return (0, r.jsxs)(a.ModalFooter, {
                                    children: [(0, r.jsx)(a.Button, {
                                        onClick: function() {
                                            return x(de.CONFIRM)
                                        },
                                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                    }), (0, r.jsx)(a.Button, {
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        onClick: W,
                                        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                    })]
                                })
                            }
                        }), ue(v, de.GUILD_SELECT, {
                            header: function() {
                                return (0, r.jsx)(te.GuildSelectModalHeader, {
                                    isTransfer: k,
                                    query: U,
                                    setQuery: M
                                })
                            },
                            bodyClass: le().selectContent,
                            body: function() {
                                return (0, r.jsx)(te.GuildSelectModalBody, {
                                    onClose: W,
                                    onSelectGuild: function(e) {
                                        B(e);
                                        x(de.CONFIRM)
                                    },
                                    isTransfer: k,
                                    selectedSlotGuilds: H,
                                    query: U
                                })
                            }
                        }), ue(v, de.CONFIRM, {
                            body: function() {
                                if (null == A) return null;
                                var e = w.filter((function(e) {
                                        return (0, S.tl)(e)
                                    })).length,
                                    n = w.length,
                                    t = H.length;
                                return k ? (0, r.jsx)(ne.TransferBody, {
                                    fromGuilds: H,
                                    toGuild: A,
                                    blurb: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: n,
                                        guildCount: t
                                    }),
                                    imageClass: le().transferConfirmImage,
                                    error: L ? O : null,
                                    onDismissError: function() {
                                        return j(!1)
                                    },
                                    slotCount: n,
                                    canceledCount: e
                                }) : (0, r.jsx)(ne.ApplyBody, {
                                    guild: A,
                                    blurb: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: oe.o3l,
                                        slotCount: n
                                    }),
                                    imageClass: le().confirmImage,
                                    error: L ? O : null,
                                    onDismissError: function() {
                                        return j(!1)
                                    },
                                    slotCount: n,
                                    canceledCount: e
                                })
                            },
                            footer: function() {
                                var e, n, t = w.length,
                                    o = h[0] === de.CONFIRM ? W : function() {
                                        return x(h[h.indexOf(P) - 1])
                                    },
                                    i = (n = (e = function() {
                                        return fe(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    if (null == A || 0 === (null == w ? void 0 : w.length)) return [2];
                                                    l()(!w.some((function(e) {
                                                        return e.isOnCooldown()
                                                    })), "Cannot use a premium guild subscription slot while on cooldown");
                                                    e.label = 1;
                                                case 1:
                                                    e.trys.push([1, 4, , 5]);
                                                    return [4, Promise.all(w.map((function(e) {
                                                        var n = e.premiumGuildSubscription;
                                                        return null != n ? (0, u.dG)(n.guildId, n.id) : Promise.resolve()
                                                    })))];
                                                case 2:
                                                    e.sent();
                                                    return [4, (0, u.W3)(A.id, w.map((function(e) {
                                                        return e.id
                                                    })))];
                                                case 3:
                                                    e.sent();
                                                    x(de.SUCCESS);
                                                    return [3, 5];
                                                case 4:
                                                    e.sent();
                                                    j(!0);
                                                    return [3, 5];
                                                case 5:
                                                    return [2]
                                            }
                                        }))
                                    }, function() {
                                        var n = this,
                                            t = arguments;
                                        return new Promise((function(r, o) {
                                            var i = e.apply(n, t);

                                            function l(e) {
                                                ae(i, r, o, l, s, "next", e)
                                            }

                                            function s(e) {
                                                ae(i, r, o, l, s, "throw", e)
                                            }
                                            l(void 0)
                                        }))
                                    }), function() {
                                        return n.apply(this, arguments)
                                    });
                                return (0, r.jsx)(ne.Footer, {
                                    confirmation: k ? Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: t
                                    }) : Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: t
                                    }),
                                    confirmationLabel: k ? Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: t
                                    }) : Z.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: t
                                    }),
                                    onConfirm: i,
                                    onCancel: o,
                                    isModifyingSubscription: b
                                })
                            }
                        }),
                        ue(v, de.SUCCESS, {
                            body: function() {
                                return (0, r.jsx)(re.R7, {
                                    guild: A,
                                    isTransfer: k,
                                    guildBoostQuantity: w.length,
                                    onClose: W
                                })
                            }
                        }), v);
                o.useEffect((function() {
                    m.default.track(oe.rMx.OPEN_MODAL, {
                        type: oe.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: _
                    })
                }), [_]);
                var V = Y[P];
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: C,
                    className: le().modal,
                    size: a.ModalSize.SMALL,
                    children: [null === (n = V.header) || void 0 === n ? void 0 : n.call(V), (0, r.jsx)(a.ModalContent, {
                        className: V.bodyClass,
                        children: (0, r.jsx)(a.Sequencer, {
                            step: P,
                            steps: h,
                            children: V.body()
                        })
                    }), null === (t = V.footer) || void 0 === t ? void 0 : t.call(V), (0, r.jsx)(a.ModalCloseButton, {
                        className: le().modalCloseButton,
                        onClick: W
                    })]
                })
            }
        },
        138657: (e, n, t) => {
            t.r(n);
            t.d(n, {
                GuildSelectModalBody: () => b,
                GuildSelectModalHeader: () => g,
                default: () => O
            });
            var r = t(785893),
                o = t(667294),
                i = t(824390),
                l = t.n(i),
                s = t(202351),
                a = t(70418),
                u = t(735885),
                c = t(784426),
                d = t(741338),
                f = t(567403),
                p = t(107218),
                m = t(124251),
                S = t(190186),
                I = t(930865),
                _ = t(2590),
                C = t(473708),
                y = t(276203),
                E = t.n(y);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
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

            function g(e) {
                var n = e.isTransfer,
                    t = void 0 !== n && n,
                    o = e.setQuery,
                    i = e.query;
                return (0, r.jsxs)(a.ModalHeader, {
                    className: E().selectHeaderContainer,
                    children: [(0, r.jsx)(a.Heading, {
                        className: E().selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? C.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : C.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, r.jsx)(S.Z, {
                        size: S.Z.Sizes.MEDIUM,
                        placeholder: C.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": C.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: E().selectSearch,
                        query: i,
                        onChange: o,
                        onClear: function() {
                            return o("")
                        }
                    })]
                })
            }

            function b(e) {
                var n = function() {
                        S();
                        (0, u.xf)();
                        (0, c.uL)(_.Z5c.GUILD_DISCOVERY)
                    },
                    t = e.isTransfer,
                    o = void 0 !== t && t,
                    i = e.selectedSlotGuilds,
                    S = e.onClose,
                    y = e.onSelectGuild,
                    v = e.query,
                    h = (0, s.e7)([p.Z], (function() {
                        return p.Z.getFlattenedGuildIds()
                    })),
                    g = (0, s.Wu)([f.Z], (function() {
                        return h.reduce((function(e, n) {
                            var t = f.Z.getGuild(n);
                            if (null == t) return e;
                            if (null != i && i.some((function(e) {
                                    return e.id === n
                                }))) return e;
                            (v.length <= 0 || l()(v.toLowerCase(), null == t ? void 0 : t.name.toLowerCase())) && e.push(t);
                            return e
                        }), new Array)
                    })),
                    b = d.Z.useExperiment({
                        location: "5f417c_1"
                    }, {
                        autoTrackExposure: !0
                    }).enabled;
                return (0, r.jsxs)(r.Fragment, {
                    children: [0 === g.length && (0, r.jsx)("div", {
                        className: E().emptyStateWrapper,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: 0 === h.length ? C.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: function(e, t) {
                                    return (0, r.jsx)(a.Clickable, {
                                        onClick: n,
                                        tag: "a",
                                        children: e
                                    }, t)
                                }
                            }) : C.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), g.map((function(e) {
                        return (0, r.jsxs)(a.Clickable, {
                            className: E().selectGuild,
                            onClick: function() {
                                y(e)
                            },
                            children: [(0, r.jsx)(m.Z, {
                                className: E().selectGuildIcon,
                                guild: e,
                                size: m.Z.Sizes.SMALL
                            }), (0, r.jsxs)("div", {
                                className: E().selectGuildCopy,
                                children: [(0, r.jsx)(a.Text, {
                                    className: E().selectGuildName,
                                    variant: "text-md/normal",
                                    children: e.name
                                }), b && (0, r.jsx)(a.Text, {
                                    className: E().selectGuildLevel,
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: (0, I.nW)(e.premiumTier)
                                })]
                            }), b && (0, r.jsx)(a.Text, {
                                className: E().selectGuildPseudoCta,
                                color: "always-white",
                                variant: "text-sm/medium",
                                children: o ? C.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : C.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }, e.id)
                    }))]
                })
            }

            function O(e) {
                var n = e.onClose,
                    t = e.onSelectGuild,
                    i = e.transitionState,
                    l = h(o.useState(""), 2),
                    s = l[0],
                    u = l[1];
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: i,
                    className: E().modal,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsx)(g, {
                        query: s,
                        setQuery: u
                    }), (0, r.jsx)(a.ModalContent, {
                        className: E().modalContent,
                        children: (0, r.jsx)(b, {
                            onClose: n,
                            onSelectGuild: t,
                            query: s
                        })
                    }), (0, r.jsx)(a.ModalCloseButton, {
                        className: E().modalCloseButton,
                        onClick: n
                    })]
                })
            }
        },
        655052: (e, n, t) => {
            t.d(n, {
                R7: () => fe,
                CP: () => ue,
                Gq: () => de
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                s = t(441143),
                a = t.n(s),
                u = t(197597),
                c = t(202351),
                d = t(795308),
                f = t(70418),
                p = t(152042),
                m = t(929400),
                S = t(700812),
                I = t(536713),
                _ = t(153686),
                C = t(19585),
                y = t(100749),
                E = t(71103),
                v = t(165666),
                h = t(717035),
                g = t(902954),
                b = t(16703),
                O = t(367095),
                R = t(671687),
                U = t(900547),
                M = t(646875),
                N = t(406493),
                P = t(48400),
                x = t.n(P);

            function T(e) {
                var n = e.text,
                    t = e.color;
                return (0, r.jsxs)("div", {
                    className: x().upsellFooter,
                    children: [(0, r.jsx)(N.Z, {
                        className: x().upsellFooterIcon,
                        color: t
                    }), (0, r.jsx)("div", {
                        children: n
                    })]
                })
            }
            var L = t(384411),
                j = t(567403),
                D = t(793461),
                A = t(473903),
                B = t(615796),
                G = t(711531),
                Z = t(551778),
                w = t(366007),
                F = t(637330),
                H = t(630689),
                k = t(217674),
                W = t(818417),
                Y = t(930865),
                V = t(348592),
                q = t(116094),
                K = t(575641);
            const Q = (0, t(260561).B)({
                kind: "user",
                id: "2023-06_guild_boosting_legacy_pricing_fix_experiment",
                label: "Guild Boosting Legacy Pricing Fix Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use Invoice Preview for Boost Pricing",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var X = t(2590),
                z = t(203600),
                J = t(520453),
                $ = t(473708),
                ee = t(338250),
                ne = t.n(ee);

            function te(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function re(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function oe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        re(e, n, t[n])
                    }))
                }
                return e
            }

            function ie(e, n) {
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

            function le(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return te(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return te(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e) {
                var n = e.amount,
                    t = e.currency,
                    r = e.intervalType,
                    o = e.intervalCount,
                    i = void 0 === o ? 1 : o,
                    l = (0, K.T4)(n, t);
                return r === z.rV.YEAR ? $.Z.Messages.BILLING_PRICE_PER_YEAR_EACH.format({
                    price: l
                }) : r === z.rV.MONTH && 1 === i ? $.Z.Messages.BILLING_PRICE_PER_MONTH_EACH.format({
                    price: l
                }) : r === z.rV.MONTH && i > 1 ? $.Z.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format({
                    price: l
                }) : null
            }

            function ae(e) {
                var n = e.intervalType,
                    t = e.intervalCount,
                    r = void 0 === t ? 1 : t;
                return n === z.rV.YEAR ? $.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : n === z.rV.MONTH && 1 === r ? $.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : null
            }

            function ue(e) {
                var n, t, o = e.guildId,
                    i = e.premiumSubscriptionPlan,
                    s = e.numGuildBoosts,
                    u = e.setNumGuildBoosts,
                    p = e.setForceDisableSubmitButton,
                    S = e.premiumSubscription,
                    I = e.onClickPremiumSubscriptionLink,
                    E = e.existingAvailableSlots,
                    b = void 0 === E ? [] : E,
                    R = e.priceOptions,
                    U = (0, g.Z)(),
                    M = i.interval,
                    N = i.intervalCount,
                    P = (0, c.e7)([Z.Z], (function() {
                        return Z.Z.getForSkuAndInterval(z.Si.GUILD, M, N)
                    })),
                    x = (0, c.e7)([A.default], (function() {
                        return A.default.getCurrentUser()
                    })),
                    D = (0, c.e7)([j.Z], (function() {
                        return j.Z.getGuild(o)
                    }), [o]);
                a()(null != P, "Missing guildBoostingSubscriptionPlan");
                a()(null != D, "Unknown guild: ".concat(o));
                var B = [{
                        planId: P.id,
                        quantity: 1
                    }],
                    G = null == S ? void 0 : S.items.find((function(e) {
                        return e.planId === z.Xh.PREMIUM_MONTH_TIER_2 || e.planId === z.Xh.PREMIUM_YEAR_TIER_2
                    }));
                null != G && B.push(G);
                var H = null == S ? void 0 : S.items.find((function(e) {
                        return e.planId === z.Xh.PREMIUM_MONTH_GUILD || e.planId === z.Xh.PREMIUM_YEAR_GUILD
                    })),
                    ee = !Q.useExperiment({
                        location: "32b64a_1"
                    }).enabled || null == U || !z.Tp.has(U) || null == H,
                    te = (0, C.Z)().analyticsLocations,
                    ue = le((0, y.ED)({
                        subscriptionId: null == S ? void 0 : S.id,
                        items: B,
                        renewal: !0,
                        paymentSourceId: null == S ? void 0 : S.paymentSourceId,
                        currency: R.currency,
                        preventFetch: ee,
                        analyticsLocations: te,
                        analyticsLocation: _.Z.GUILD_BOOSTING_PLAN_SELECT
                    }), 2),
                    ce = ue[0],
                    de = ue[1],
                    fe = !ee && null == ce && null == de,
                    pe = (null === (n = (0,
                        h.N)()) || void 0 === n || null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === z.Si.TIER_2,
                    me = q.ZP.hasBoostDiscount(x) && null != P.premiumUserPrice,
                    Se = null == ce ? void 0 : ce.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === P.id
                    })),
                    Ie = null != Se ? {
                        amount: Se.amount,
                        tax: 0,
                        taxInclusive: !0,
                        currency: R.currency
                    } : q.ZP.getPrice(P.id, me, !1, R),
                    _e = s * Ie.amount,
                    Ce = q.ZP.hasBoostDiscount(x) && null != S ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format({
                        planName: q.ZP.getDisplayPremiumType(S.planId)
                    }) : (pe ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL).format({
                        onPremiumSubscriptionClick: I,
                        discountPercentage: (0, K.T3)(L.default.locale, z.Rr / 100),
                        freeSubscriptionCount: z.cb
                    }),
                    ye = b.filter((function(e) {
                        return (0, Y.tl)(e)
                    })).length,
                    Ee = (0, q.Ap)(R.paymentSourceId),
                    ve = "HR" === (0, v.Z)().ipCountryCode && Ie.currency === J.pK.EUR;
                p(fe);
                return (0, r.jsxs)("div", {
                    className: ne().planSelectStep,
                    children: [(0,
                        r.jsx)("div", {
                        className: l()(ne().planSelectText, ne().bodyText),
                        children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION
                    }), b.length > 0 ? (0, r.jsxs)("div", {
                        className: ne().existingSlotNotice,
                        children: [(0, r.jsx)(k.Z, {
                            className: ne().existingSlotIcon,
                            color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                        }), (0, r.jsxs)("div", {
                            children: [$.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format({
                                slotCount: b.length
                            }), ye > 0 && null != S ? (0, r.jsx)(f.Tooltip, {
                                text: $.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                                    canceledCount: ye,
                                    date: S.currentPeriodEnd
                                }),
                                children: function(e) {
                                    return (0, r.jsx)(W.Z, ie(oe({}, e), {
                                        className: ne().existingSlotTooltipWarningIcon,
                                        color: d.Z.unsafe_rawColors.YELLOW_300.css
                                    }))
                                }
                            }) : null]
                        })]
                    }) : null, (0, r.jsxs)("div", {
                        className: ne().planSelectRow,
                        children: [(0, r.jsxs)("div", {
                            className: ne().planSelectorWrapper,
                            children: [(0, r.jsx)(F.Z, {
                                value: s,
                                onChange: function(e) {
                                    return u(e)
                                },
                                className: ne().planSelector,
                                minValue: 1,
                                maxValue: 30
                            }), (0,
                                r.jsx)("div", {
                                className: ne().planSelectorLabel,
                                children: Ee ? ae({
                                    intervalType: M,
                                    intervalCount: N
                                }) : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER
                            })]
                        }), (0, r.jsx)("div", {
                            className: l()(ne().planSelectorPreviewPrice, re({}, ne().loadingSpinner, fe)),
                            children: fe ? (0, r.jsx)(f.Spinner, {}) : Ee ? (0, K.T4)(Ie.amount, Ie.currency) : se({
                                intervalType: M,
                                intervalCount: N,
                                amount: Ie.amount,
                                currency: Ie.currency
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: ne().planSelectDivider
                    }), (0, r.jsxs)("div", {
                        className: ne().planSelectRow,
                        children: [(0, r.jsx)("div", {
                            className: ne().planSelectorSubtotal,
                            children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL
                        }), (0, r.jsx)("div", {
                            className: l()(ne().planSelectorSubtotalPrice, re({}, ne().loadingSpinner, fe)),
                            children: fe ? (0, r.jsx)(f.Spinner, {}) : (0, r.jsx)(O.Z, {
                                price: _e,
                                currency: Ie.currency,
                                intervalType: M,
                                intervalCount: N,
                                isPrepaidPaymentSource: Ee
                            })
                        })]
                    }), ve && (0, r.jsx)(m.Z, {
                        message: $.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                            kunaPriceWithCurrency: (0, K.T4)(7.5345 * _e, J.pK.HRK)
                        })
                    }), (0, r.jsx)(m.Z, {
                        message: $.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                            documentationLink: V.Z.getArticleURL(X.BhN.LOCALIZED_PRICING)
                        })
                    }), (0, r.jsx)(T, {
                        text: Ce,
                        color: w.JX.PREMIUM_TIER_2
                    })]
                })
            }

            function ce(e) {
                var n = e.premiumSubscription,
                    t = e.premiumSubscriptionPlan,
                    o = e.proratedInvoicePreview,
                    i = e.renewalInvoicePreview,
                    l = e.priceOptions,
                    s = t.interval,
                    u = t.intervalCount,
                    d = (0, c.e7)([Z.Z], (function() {
                        return Z.Z.getForSkuAndInterval(z.Si.GUILD, s, u)
                    }));
                a()(null != d, "Missing guildBoostingSubscriptionPlan");
                var f = function(e) {
                        return (0, E.j)(o.invoiceItems).find((function(n) {
                            return z.Z1.has(n.subscriptionPlanId) && e(n)
                        }))
                    },
                    p = f((function(e) {
                        return e.amount >= 0
                    }));
                a()(null != p, "Missing guild boosting invoice item");
                var m = f((function(e) {
                        return e.amount < 0
                    })),
                    S = null != m ? p.quantity - m.quantity : p.quantity,
                    I = o.invoiceItems.filter((function(e) {
                        return (0, q.uZ)(e.subscriptionPlanId)
                    })),
                    _ = I.reduce((function(e, n) {
                        return e + n.amount
                    }), 0),
                    C = (0, y.pV)(p) * S,
                    v = (0, K.T4)(C, o.currency),
                    h = (0, K.og)(v, s, u),
                    g = (0,
                        K.T4)(o.total, o.currency) + (o.currency !== J.pK.USD ? "*" : ""),
                    O = o.total - C - _,
                    R = p.discounts.map((function(e) {
                        var n = e.amount / p.quantity;
                        return ie(oe({}, e), {
                            amount: n * S
                        })
                    })),
                    U = (0, q.Ap)(l.paymentSourceId);
                return (0, r.jsxs)(r.Fragment, {
                    children: [U ? null : (0, r.jsx)(M.hG, {
                        proratedInvoice: o,
                        renewalInvoice: i
                    }), (0, r.jsxs)(b.PO, {
                        children: [(0, r.jsx)(b.q9, {
                            children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER
                        }), (0, r.jsx)(b.i$, {
                            label: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                                numGuildSubscriptions: S,
                                planName: (0, q.Gf)(d.id, !1, U)
                            }),
                            value: U ? v : h,
                            discounts: R,
                            originalAmount: p.subscriptionPlanPrice * S,
                            currency: o.currency,
                            interval: d.interval,
                            intervalCount: d.intervalCount
                        }), 0 !== _ ? (0, r.jsx)(b.R$, {
                            label: (0, r.jsx)(M.As, {
                                label: $.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                    planName: (0, q.aq)(I[0].subscriptionPlanId)
                                }),
                                tooltipText: $.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                            }),
                            value: (0, K.T4)(_, o.currency)
                        }) : null, 0 !== O ? (0, r.jsx)(b.R$, {
                            label: (0,
                                r.jsx)(M.As, {
                                label: $.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                                tooltipText: $.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                            }),
                            value: (0, K.T4)(O, o.currency)
                        }) : null, (0, r.jsx)(b.KU, {}), (0, r.jsx)(b.Ji, {
                            label: (o.taxInclusive ? U ? $.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : $.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : $.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                            value: g
                        }), null != n ? (0, r.jsx)(M.nd, {
                            premiumSubscription: n,
                            proratedInvoice: o,
                            renewalInvoice: i,
                            isUpdate: !0,
                            isPrepaidPaymentSource: U
                        }) : (0, r.jsx)(M.nd, {
                            renewalInvoice: i,
                            priceOptions: l,
                            isPrepaidPaymentSource: U
                        })]
                    })]
                })
            }

            function de(e) {
                var n, t, o = e.paymentSources,
                    i = e.priceOptions,
                    l = e.currentPremiumSubscription,
                    s = e.premiumSubscriptionPaymentSourceId,
                    a = e.premiumSubscriptionPlan,
                    d = e.newAdditionalPlans,
                    m = e.onPaymentSourceChange,
                    E = e.onPaymentSourceAdd,
                    v = e.onPurchaseTermsChange,
                    h = e.legalTermsNodeRef,
                    g = e.hasLegalTermsFlash,
                    b = i.paymentSourceId,
                    O = (0, c.e7)([G.Z], (function() {
                        return null != s ? G.Z.getPaymentSource(s) : null
                    })),
                    R = (0, c.e7)([D.Z], (function() {
                        return D.Z.hidePersonalInformation
                    }));
                t = null != l ? (0, q.Zx)(l, d[0].quantity, d[0].planId) : d;
                var M, N = (0, C.Z)().analyticsLocations,
                    P = le((0, y.ED)({
                        subscriptionId: null == l ? void 0 : l.id,
                        items: t,
                        renewal: !1,
                        applyEntitlements: !0,
                        paymentSourceId: b,
                        currency: i.currency,
                        analyticsLocations: N,
                        analyticsLocation: _.Z.GUILD_BOOSTING_REVIEW_PRORATED
                    }), 1)[0],
                    x = le((0, y.ED)({
                        subscriptionId: null == l ? void 0 : l.id,
                        items: t,
                        renewal: !0,
                        paymentSourceId: b,
                        currency: i.currency,
                        analyticsLocations: N,
                        analyticsLocation: _.Z.GUILD_BOOSTING_REVIEW_RENEWAL
                    }), 1)[0];
                null != x && (M = {
                    amount: x.total,
                    currency: x.currency,
                    tax: x.tax,
                    taxInclusive: x.taxInclusive
                });
                var T, L = u.M.EEA_COUNTRIES.has(B.Z.ipCountryCodeWithFallback);
                return (0, r.jsxs)("div", {
                    className: ne().reviewStep,
                    children: [null != P && null != x ? (0, r.jsx)(ce, {
                        premiumSubscription: l,
                        premiumSubscriptionPlan: a,
                        proratedInvoicePreview: P,
                        renewalInvoicePreview: x,
                        priceOptions: i
                    }) : null, (0, r.jsxs)("div", {
                        className: ne().paymentSourceWrapper,
                        children: [(0, r.jsx)(f.FormTitle, {
                            tag: f.FormTitleTags.H5,
                            children: $.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), null != s ? null != O ? (0, r.jsx)(f.TooltipContainer, {
                            text: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
                            children: (0, r.jsx)(S.Z, {
                                paymentSources: [O],
                                selectedPaymentSourceId: O.id,
                                hidePersonalInformation: R,
                                disabled: !0
                            })
                        }) : (0, r.jsx)("div", {
                            children: (0, r.jsx)(f.Spinner, {})
                        }) : (0, r.jsx)(S.Z, {
                            paymentSources: Object.values(o),
                            selectedPaymentSourceId: b,
                            onChange: m,
                            onPaymentSourceAdd: E,
                            hidePersonalInformation: R
                        })]
                    }), (0, r.jsx)(U.Z, {
                        isActive: g,
                        ref: h,
                        children: null != M && (0, r.jsx)(I.Z, {
                            onChange: v,
                            forceShow: !0,
                            finePrint: (0, r.jsx)(p.Z, {
                                subscriptionPlan: a,
                                paymentSourceType: null === (n = o[null != b ? b : ""]) || void 0 === n ? void 0 : n.type,
                                basePrice: M
                            }),
                            showPricingLink: (null !== (T = null == P ? void 0 : P.currency) && void 0 !== T ? T : J.pK.USD) !== J.pK.USD,
                            showWithdrawalWaiver: L,
                            subscriptionPlan: a
                        })
                    })]
                })
            }

            function fe(e) {
                var n, t = e.onClose,
                    i = e.guild,
                    l = e.guildBoostQuantity,
                    s = e.isTransfer,
                    a = void 0 !== s && s,
                    u = e.withAnimation,
                    c = void 0 === u || u,
                    d = e.paymentSourceType,
                    p = (0, f.useThemeContext)().theme,
                    m = le(o.useState(H.fe.Scenes.ENTRY), 2),
                    S = m[0],
                    I = m[1],
                    _ = le(o.useState(!1), 2),
                    C = _[0],
                    y = _[1];
                n = a ? null == i ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format() : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format({
                    guildName: i.name
                }) : null == i ? $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format({
                    guildSubscriptionQuantity: l
                }) : $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format({
                    guildName: i.name,
                    guildSubscriptionQuantity: l
                });
                return (0, r.jsxs)("div", {
                    className: ne().confirmationContainer,
                    children: [c ? (0, r.jsx)(H.fe, {
                        className: ne().confirmationAnimation,
                        nextScene: S,
                        onScenePlay: function(e) {
                            if (!C) switch (e) {
                                case H.fe.Scenes.ENTRY:
                                    return I(H.fe.Scenes.IDLE);
                                case H.fe.Scenes.IDLE:
                                    return I(H.fe.Scenes.SUCCESS);
                                case H.fe.Scenes.SUCCESS:
                                    y(!0);
                                    return I(H.fe.Scenes.IDLE)
                            }
                        },
                        pauseWhileUnfocused: !1
                    }) : null, (0, r.jsx)(R.C, {
                        className: ne().confirmationUpgradedBanner,
                        theme: p,
                        premiumType: z.p9.TIER_2,
                        type: J.X7.has(null != d ? d : J.He.UNKNOWN) ? R.C.Types.PREMIUM_PAYMENT_STARTED : R.C.Types.GUILD_BOOST_APPLIED
                    }), (0, r.jsx)("div", {
                        className: ne().confirmationText,
                        children: n
                    }), (0, r.jsx)(f.Button, {
                        onClick: t,
                        children: $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON
                    })]
                })
            }
        },
        102981: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function s(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function a(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    c = e.color,
                    d = void 0 === c ? "currentColor" : c,
                    f = s(e, ["width", "height", "color"]);
                return (0, r.jsxs)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0,
                    o.Z)(f)), {
                    width: t,
                    height: u,
                    viewBox: "0 0 16 16",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
                        fill: d
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
                        fill: d
                    })]
                }))
            }
        }
    }
]);