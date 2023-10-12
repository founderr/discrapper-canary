"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [68906], {
        287194: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = t(667294),
                i = t(441394),
                a = t(516945),
                l = t.n(a);

            function s(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function u(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                var n = e.hasSetEmoji,
                    t = e.onClick,
                    a = e.children,
                    s = u(o.useState(!1), 2),
                    c = s[0],
                    d = s[1];
                return (0, r.jsxs)("div", {
                    className: l().container,
                    onMouseEnter: function() {
                        d(!!n)
                    },
                    onMouseLeave: function() {
                        d(!1)
                    },
                    children: [a, n && c && (0, r.jsx)(i.Z, {
                        onClick: t,
                        className: l().removeButton
                    })]
                })
            }
        },
        468906: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Ie
            });
            var r = t(785893),
                o = t(667294),
                i = t(496486),
                a = t.n(i),
                l = t(202351),
                s = t(304548),
                u = t(5544),
                c = t(443812),
                d = t(818417),
                f = t(34225),
                m = t(72580),
                h = t(907223),
                v = t(11648),
                p = t(986855),
                O = t(77413),
                g = t(739770),
                b = t(287194),
                y = t(470643),
                N = t(213424);

            function j(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function x(e, n) {
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

            function E(e) {
                var n = e.className,
                    t = e.emojiClassName,
                    o = e.emoji,
                    i = e.setEmoji,
                    a = e.channel,
                    l = function(e) {
                        return function(n, t) {
                            if (null != n) {
                                if (null == n.id) {
                                    var r;
                                    i({
                                        name: null !== (r = n.optionallyDiverseSequence) && void 0 !== r ? r : ""
                                    })
                                } else {
                                    var o;
                                    i({
                                        id: n.id,
                                        name: null !== (o = n.originalName) && void 0 !== o ? o : n.name,
                                        animated: n.animated
                                    })
                                }
                                t && e()
                            }
                        }
                    },
                    u = null == o || null == o.name ? null : function() {
                        var e;
                        return (0, r.jsx)(O.Z, {
                            className: t,
                            animated: null !== (e = o.animated) && void 0 !== e && e,
                            emojiId: o.id,
                            emojiName: o.name
                        })
                    };
                return (0, r.jsx)(b.Z, {
                    hasSetEmoji: null != o && null != o.name,
                    onClick: function() {
                        i(null)
                    },
                    children: (0, r.jsx)(s.Popout, {
                        position: "bottom",
                        renderPopout: function(e) {
                            var n = e.closePopout;
                            return (0, r.jsx)(g.Z, {
                                closePopout: n,
                                onSelectEmoji: l(n),
                                pickerIntention: N.Hz.COMMUNITY_CONTENT,
                                channel: a
                            })
                        },
                        children: function(e, t) {
                            var o = t.isShown;
                            return (0, r.jsx)(y.Z, x(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        j(e, n, t[n])
                                    }))
                                }
                                return e
                            }({}, e), {
                                tabIndex: 0,
                                active: o,
                                className: n,
                                renderButtonContents: u
                            }))
                        }
                    })
                })
            }
            var I = t(294184),
                P = t.n(I),
                C = t(110251),
                R = t.n(C),
                S = t(824390),
                w = t.n(S),
                T = t(650332),
                L = t(296916),
                A = t(773011),
                _ = t(344832),
                M = t(837162),
                Z = t(381186),
                D = t(61209),
                H = t(567403),
                B = t(840922),
                k = t(473903),
                U = t(380652),
                G = t(563135),
                F = t(2590),
                z = t(473708),
                Q = t(980281),
                V = t.n(Q);

            function q(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function K(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function X(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        K(e, n, t[n])
                    }))
                }
                return e
            }

            function Y(e, n) {
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

            function $(e, n) {
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

            function J(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || te(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e) {
                return function(e) {
                    if (Array.isArray(e)) return q(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || te(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ee(e) {
                var n = function(e, n) {
                    if ("object" !== ne(e) || null === e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, n || "default");
                        if ("object" !== ne(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(e)
                }(e, "string");
                return "symbol" === ne(n) ? n : String(n)
            }
            var ne = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function te(e, n) {
                if (e) {
                    if ("string" == typeof e) return q(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? q(e, n) : void 0
                }
            }
            var re, oe = (0, c.hQ)(),
                ie = (0, c.hQ)(),
                ae = (0, c.hQ)(),
                le = (0, c.hQ)();
            ! function(e) {
                e.CHANNEL = "CHANNEL";
                e.ROLE = "ROLE"
            }(re || (re = {}));

            function se(e) {
                return e.type === re.ROLE
            }

            function ue(e) {
                return e.type === re.CHANNEL
            }

            function ce(e) {
                var n = "".concat(e.name.includes(Z.CR) ? "" : "@").concat(e.name);
                return {
                    tag: {
                        type: T.Fj.ROLE,
                        label: n
                    },
                    row: {
                        id: e.id,
                        display: n,
                        type: re.ROLE,
                        record: e
                    }
                }
            }

            function de(e) {
                var n = (0, A.F6)(e, k.default, B.Z);
                return {
                    tag: {
                        type: T.Fj.CHANNEL,
                        label: n
                    },
                    row: {
                        id: e.id,
                        display: n,
                        type: re.CHANNEL,
                        record: e
                    }
                }
            }
            var fe, me, he = o.memo((function(e) {
                var n = e.row,
                    t = e.guildId,
                    o = n.record,
                    i = o.id,
                    a = o.name,
                    l = (0, M.p9)({
                        guildId: t,
                        roleId: i,
                        size: 16
                    }),
                    u = a.includes(Z.CR) ? "" : "@";
                return (0, r.jsx)("div", {
                    className: V().roleTagContainer,
                    children: (0, r.jsxs)("div", {
                        className: V().roleTag,
                        children: [null != l ? (0, r.jsx)(U.Z, Y(X({
                            className: V().roleTagIcon
                        }, l), {
                            enableTooltip: !1
                        })) : u, (0, r.jsx)(s.Text, {
                            className: V().roleTagLabel,
                            variant: "text-xs/medium",
                            children: a
                        })]
                    })
                }, i)
            }));

            function ve(e, n) {
                return se(e) ? (0, r.jsx)(he, {
                    row: e,
                    guildId: n
                }) : ue(e) ? (0, r.jsx)(Oe, {
                    channel: e.record,
                    className: V().noIndent,
                    children: e.display
                }, e.record.id) : null
            }

            function pe(e, n) {
                return Y(X({}, e.tag), {
                    label: ve(e.row, n)
                })
            }

            function Oe(e) {
                var n = e.channel,
                    t = e.children,
                    o = e.className,
                    i = null != n.parent_id,
                    a = (0, _.KS)(n),
                    l = (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        children: t
                    });
                n.isCategory() && (l = (0, r.jsx)(s.Text, {
                    variant: "eyebrow",
                    children: t
                }));
                return (0, r.jsxs)("div", {
                    className: P()(V().rowLabel, V().channelLabel, K({}, V().hasParent, i), o),
                    children: [null != a && (0, r.jsx)(a, {
                        width: 16,
                        height: 16,
                        className: V().channelIcon
                    }), l]
                })
            }! function(e) {
                e[e.CHANNELS = 0] = "CHANNELS";
                e[e.ROLES = 1] = "ROLES"
            }(fe || (fe = {}));
            ! function(e) {
                e.NONE = "NONE";
                e.LIST = "LIST";
                e.INPUT = "INPUT"
            }(me || (me = {}));

            function ge(e) {
                var n, t = e.guildId,
                    i = e.selectedChannelIds,
                    a = e.selectedRoleIds,
                    u = e.roleRows,
                    c = e.channelRows,
                    d = e.onChannelChange,
                    f = e.onRoleChange,
                    m = (0, l.e7)([H.Z], (function() {
                        var e;
                        return null !== (n = null === (e = H.Z.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== n ? n : {}
                    }), [t]),
                    h = o.useMemo((function() {
                        return function(e) {
                            if (null == e) return {};
                            var n = {};
                            e.forEach((function(e) {
                                var t = D.Z.getChannel(e);
                                null != t && (n[e] = de(t))
                            }));
                            return n
                        }(i)
                    }), [i]),
                    v = o.useMemo((function() {
                        return Object.keys(h)
                    }), [h]),
                    p = o.useMemo((function() {
                        return function(e, n) {
                            var t = {};
                            e.forEach((function(e) {
                                e in n && (t[e] = ce(n[e]))
                            }));
                            return t
                        }(a, m)
                    }), [a, m]),
                    O = o.useMemo((function() {
                        return Object.keys(p)
                    }), [p]),
                    g = J(o.useState(""), 2),
                    b = g[0],
                    y = g[1],
                    N = J(o.useState(""), 2),
                    j = N[0],
                    x = N[1],
                    E = J(o.useState(!1), 2),
                    I = E[0],
                    C = E[1],
                    R = J(o.useState(!1), 2),
                    S = R[0],
                    L = R[1],
                    A = J(o.useState(!1), 2),
                    _ = A[0],
                    M = A[1],
                    Z = J(o.useState(!1), 2),
                    B = Z[0],
                    k = Z[1],
                    U = J(o.useState(!1), 2),
                    G = U[0],
                    F = U[1],
                    Q = J(o.useState(!1), 2),
                    q = Q[0],
                    K = Q[1],
                    Y = o.useMemo((function() {
                        var e = "" !== b ? c.filter((function(e) {
                                return w()(b, e.display.toLocaleLowerCase())
                            })) : c,
                            n = [],
                            t = [];
                        n[fe.CHANNELS] = e;
                        t[fe.CHANNELS] = e.length;
                        return {
                            sections: n,
                            sectionCounts: t
                        }
                    }), [b, c]),
                    W = Y.sections,
                    ne = Y.sectionCounts,
                    te = o.useMemo((function() {
                        var e = "" !== j ? u.filter((function(e) {
                                return w()(j, e.display.toLocaleLowerCase())
                            })) : u,
                            n = [],
                            t = [];
                        n[fe.ROLES] = e;
                        t[fe.ROLES] = e.length;
                        return {
                            sections: n,
                            sectionCounts: t
                        }
                    }), [j, u]),
                    re = te.sections,
                    he = te.sectionCounts,
                    ge = o.useCallback((function(e) {
                        var n = Object.values(e).filter((function(e) {
                            return ue(e.row)
                        })).map((function(e) {
                            return e.row.record.id
                        }));
                        d(new Set(n))
                    }), [d]),
                    be = o.useCallback((function(e) {
                        var n = Object.values(e).filter((function(e) {
                            return se(e.row)
                        })).map((function(e) {
                            return e.row.record.id
                        }));
                        f(new Set(n))
                    }), [f]),
                    ye = function(e) {
                        if (e) {
                            C(!1);
                            L(!1)
                        } else {
                            M(!1);
                            k(!1)
                        }
                    };
                o.useEffect((function() {
                    var e = setTimeout((function() {
                        F(I || S)
                    }), 32);
                    return function() {
                        clearTimeout(e)
                    }
                }), [I, S]);
                o.useEffect((function() {
                    var e = setTimeout((function() {
                        K(_ || B)
                    }), 32);
                    return function() {
                        clearTimeout(e)
                    }
                }), [_, B]);
                var Ne = function(e, n, t, r) {
                        t.stopPropagation();
                        t.preventDefault();
                        if (n === me.INPUT) r ? C(e) : M(e);
                        else if (n === me.LIST) r ? L(e) : k(e);
                        else if (r) {
                            C(e);
                            L(e)
                        } else {
                            M(e);
                            k(e)
                        }
                    },
                    je = o.useCallback((function(e) {
                        var n = X({}, h);
                        n[e.id] = de(e.record);
                        ge(n);
                        y("")
                    }), [ge, h]),
                    xe = o.useCallback((function(e) {
                        var n = X({}, p);
                        n[e.id] = ce(e.record);
                        be(n);
                        x("")
                    }), [be, p]),
                    Ee = o.useRef(null),
                    Ie = o.useRef(null),
                    Pe = o.useCallback((function(e) {
                        var n = e.section,
                            t = e.row,
                            o = W[n][t];
                        return (0, r.jsx)(s.Clickable, {
                            className: P()(V().selectableSearchRow, V().rowHeight),
                            onClick: function(e) {
                                var n;
                                e.stopPropagation();
                                je(o);
                                null === (n = Ee.current) || void 0 === n || n.focus()
                            },
                            children: (0, r.jsx)("div", {
                                className: V().rowContainer,
                                children: (0, r.jsx)(Oe, {
                                    channel: o.record,
                                    className: V().channelRowLabel,
                                    children: o.display
                                }, o.record.id)
                            })
                        }, o.id)
                    }), [je, W]),
                    Ce = o.useCallback((function(e) {
                        var n = e.section,
                            o = e.row,
                            i = re[n][o];
                        return (0, r.jsx)(s.Clickable, {
                            className: P()(V().selectableSearchRow, V().rowHeight),
                            onClick: function(e) {
                                var n;
                                e.stopPropagation();
                                xe(i);
                                null === (n = Ie.current) || void 0 === n || n.focus()
                            },
                            children: (0, r.jsx)("div", {
                                className: V().rowContainer,
                                children: (0, r.jsx)(s.Text, {
                                    className: P()(V().rowLabel, V().roleLabel),
                                    variant: "text-xs/medium",
                                    children: ve(i, t)
                                })
                            })
                        }, i.id)
                    }), [t, xe, re]),
                    Re = o.useMemo((function() {
                        return v.map((function(e) {
                            return pe(h[e], t)
                        }))
                    }), [h, v, t]),
                    Se = o.useMemo((function() {
                        return O.map((function(e) {
                            return pe(p[e], t)
                        }))
                    }), [p, O, t]);
                return (0, r.jsxs)("div", {
                    className: V().channelAndRoleContainer,
                    children: [(0, r.jsx)("div", {
                        className: V().searchContainer,
                        children: (0, r.jsxs)("div", {
                            className: V().searchBox,
                            children: [(0, r.jsx)(T.ZP, {
                                tags: Re,
                                maxHeight: 98,
                                size: T.ZP.Sizes.MEDIUM,
                                query: b,
                                onRemoveTag: function(e) {
                                    var n = v[e],
                                        t = (h[n], $(h, [n].map(ee)));
                                    ge(t);
                                    y("");
                                    ye(!0)
                                },
                                onQueryChange: function(e) {
                                    y(e.trim().toLocaleLowerCase())
                                },
                                placeholder: z.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
                                sections: [v.length],
                                inputProps: {
                                    "aria-labelledby": oe,
                                    "aria-controls": ie,
                                    "aria-expanded": G,
                                    onFocus: function(e) {
                                        return Ne(!0, me.INPUT, e, !0)
                                    },
                                    onBlur: function(e) {
                                        return Ne(!1, me.INPUT, e, !0)
                                    }
                                }
                            }), G && (0, r.jsx)("div", {
                                ref: Ee,
                                className: V().resultsListParent,
                                onFocus: function(e) {
                                    return Ne(!0, me.LIST, e, !0)
                                },
                                onBlur: function(e) {
                                    return Ne(!1, me.LIST, e, !0)
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)(s.ListAuto, {
                                    className: V().resultsList,
                                    sections: ne,
                                    renderRow: Pe,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: ie,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, r.jsx)(s.Text, {
                        className: V().helperText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: z.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS
                    }), (0, r.jsx)("div", {
                        className: V().searchContainer,
                        children: (0, r.jsxs)("div", {
                            className: V().searchBox,
                            children: [(0, r.jsx)(T.ZP, {
                                tags: Se,
                                maxHeight: 98,
                                size: T.ZP.Sizes.MEDIUM,
                                query: j,
                                onRemoveTag: function(e) {
                                    var n = O[e],
                                        t = (p[n], $(p, [n].map(ee)));
                                    be(t);
                                    x("");
                                    ye(!1)
                                },
                                onQueryChange: function(e) {
                                    x(e.trim().toLocaleLowerCase())
                                },
                                placeholder: z.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                                sections: [O.length],
                                inputProps: {
                                    "aria-labelledby": ae,
                                    "aria-controls": le,
                                    "aria-expanded": q,
                                    onFocus: function(e) {
                                        return Ne(!0, me.INPUT, e, !1)
                                    },
                                    onBlur: function(e) {
                                        return Ne(!1, me.INPUT, e, !1)
                                    }
                                }
                            }), q && (0, r.jsx)("div", {
                                ref: Ie,
                                className: V().resultsListParent,
                                onFocus: function(e) {
                                    return Ne(!0, me.LIST, e, !1)
                                },
                                onBlur: function(e) {
                                    return Ne(!1, me.LIST, e, !1)
                                },
                                tabIndex: -1,
                                children: (0, r.jsx)(s.ListAuto, {
                                    className: V().resultsList,
                                    sections: he,
                                    renderRow: Ce,
                                    rowHeight: 24,
                                    sectionHeight: 0,
                                    role: void 0,
                                    innerRole: "listbox",
                                    innerId: le,
                                    innerAriaOrientation: "vertical"
                                })
                            })]
                        })
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: z.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT
                    })]
                })
            }

            function be(e) {
                var n = e.guildId,
                    t = e.selectedChannelIds,
                    o = e.selectedRoleIds,
                    i = e.onChannelChange,
                    a = e.onRoleChange,
                    s = e.disableEveryoneRole,
                    c = e.includeRoleRestrictedPrivateChannels,
                    d = void 0 !== c && c,
                    f = (0, l.e7)([H.Z, k.default, u.ZP], (function() {
                        var e, r = u.ZP.getChannels(n)[F.d4z.GUILD_CATEGORY],
                            i = W(u.ZP.getChannels(n)[u.sH]).concat(W(u.ZP.getChannels(n)[u.Zb])),
                            a = [],
                            l = {};
                        r.forEach((function(e) {
                            var n = e.channel,
                                t = e.comparator;
                            if ("null" !== n.id) {
                                l[n.id] = [];
                                a.push({
                                    channel: n,
                                    comparator: t
                                })
                            }
                        }));
                        i.forEach((function(e) {
                            var n = e.channel,
                                r = e.comparator;
                            if (!n.isThread() && !t.has(n.id) && (d || !(0, L.Z)(n)))
                                if (null == n.parent_id) a.push({
                                    channel: n,
                                    comparator: r
                                });
                                else {
                                    null == l[n.parent_id] && (l[n.parent_id] = []);
                                    l[n.parent_id].push({
                                        channel: n,
                                        comparator: r
                                    })
                                }
                        }));
                        var c = a.sort((function(e, n) {
                                var t = e.comparator,
                                    r = e.channel,
                                    o = n.comparator,
                                    i = n.channel;
                                return r.isCategory() && !i.isCategory() ? 1 : !r.isCategory() && i.isCategory() ? -1 : o - t
                            })).reduce((function(e, n) {
                                var r = n.channel;
                                if (r.isGuildStageVoice() || r.isThread() || t.has(r.id)) return e;
                                e.push(de(r).row);
                                var o = l[r.id];
                                null != o && o.length > 0 && o.forEach((function(n) {
                                    var t = n.channel;
                                    e.push(de(t).row)
                                }));
                                return e
                            }), []),
                            f = H.Z.getGuild(n),
                            m = k.default.getCurrentUser();
                        if (null == f || null == m) return {
                            channelRows: [],
                            roleRows: []
                        };
                        var h, v = G.ZP.getHighestRole(f, m.id);
                        return {
                            channelRows: c,
                            roleRows: Object.values(null !== (h = null === (e = H.Z.getGuild(n)) || void 0 === e ? void 0 : e.roles) && void 0 !== h ? h : {}).filter((function(e) {
                                return !e.managed
                            })).filter((function(e) {
                                return !o.has(e.id)
                            })).filter((function(e) {
                                return !s || e.id !== n
                            })).filter((function(e) {
                                return G.ZP.isRoleHigher(f, m.id, v, e)
                            })).map((function(e) {
                                return ce(e).row
                            }))
                        }
                    }), [s, n, d, t, o], R()),
                    m = f.channelRows,
                    h = f.roleRows;
                return (0, r.jsx)(ge, {
                    channelRows: m,
                    roleRows: h,
                    guildId: n,
                    selectedChannelIds: t,
                    selectedRoleIds: o,
                    onChannelChange: i,
                    onRoleChange: a
                })
            }
            var ye = t(322008),
                Ne = t(951536),
                je = t.n(Ne);

            function xe(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ee(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return xe(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return xe(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ie(e) {
                var n, t, i, d, m, h = e.transitionState,
                    O = e.onClose,
                    g = e.onSave,
                    b = e.onDelete,
                    y = e.option,
                    N = e.guild,
                    j = e.prompt,
                    x = e.index,
                    I = (0, c.Dt)(),
                    P = (0, l.e7)([u.ZP], (function() {
                        return u.ZP.getDefaultChannel(N.id)
                    })),
                    C = Ee(o.useState((function() {
                        return null !== (n = null == y ? void 0 : y.emoji) && void 0 !== n ? n : null
                    })), 2),
                    R = C[0],
                    S = C[1],
                    w = Ee(o.useState((function() {
                        return null !== (t = null == y ? void 0 : y.title) && void 0 !== t ? t : ""
                    })), 2),
                    T = w[0],
                    L = w[1],
                    A = Ee(o.useState((function() {
                        return null !== (i = null == y ? void 0 : y.description) && void 0 !== i ? i : ""
                    })), 2),
                    _ = A[0],
                    M = A[1],
                    Z = Ee(o.useState((function() {
                        return new Set(null !== (d = null == y ? void 0 : y.channelIds) && void 0 !== d ? d : [])
                    })), 2),
                    D = Z[0],
                    H = Z[1],
                    B = Ee(o.useState((function() {
                        return new Set(null !== (m = null == y ? void 0 : y.roleIds) && void 0 !== m ? m : [])
                    })), 2),
                    k = B[0],
                    U = B[1],
                    G = Ee(o.useState({}), 2),
                    F = G[0],
                    Q = G[1],
                    V = o.useRef(null);
                o.useLayoutEffect((function() {
                    var e;
                    return null === (e = V.current) || void 0 === e ? void 0 : e.focus()
                }), []);
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: h,
                    "aria-labelledby": I,
                    children: [(0, r.jsxs)("div", {
                        className: je().container,
                        children: [(0, r.jsx)(s.ModalCloseButton, {
                            className: je().closeButton,
                            onClick: O
                        }), (0, r.jsx)(s.Text, {
                            className: je().questionNumber,
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: z.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
                                index: x + 1
                            })
                        }), (0, r.jsx)(s.Heading, {
                            id: I,
                            className: je().header,
                            variant: "heading-lg/semibold",
                            children: null != j.title && j.title.length > 0 ? j.title : z.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
                        }), (0, r.jsx)(s.Heading, {
                            className: je().nameHeader,
                            variant: "heading-md/semibold",
                            children: z.Z.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
                        }), (0, r.jsx)(s.TextInput, {
                            inputRef: V,
                            placeholder: z.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
                            value: T,
                            onChange: function(e) {
                                return L(e)
                            },
                            maxLength: ye.NE,
                            autoFocus: !0
                        }), (0, r.jsx)(s.InputError, {
                            error: F.title
                        }), (0, r.jsx)(s.TextInput, {
                            className: je().descriptionInput,
                            placeholder: z.Z.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
                            value: _,
                            onChange: function(e) {
                                return M(e)
                            },
                            maxLength: ye.NO
                        }), (0, r.jsx)(f.Z, {
                            className: je().divider
                        }), (0, r.jsx)(s.Heading, {
                            className: je().rolesHeader,
                            variant: "heading-md/semibold",
                            children: z.Z.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
                        }), (0, r.jsx)(be, {
                            guildId: N.id,
                            selectedChannelIds: D,
                            selectedRoleIds: k,
                            disableEveryoneRole: !0,
                            placeholder: z.Z.Messages.ONBOARDING_PROMPT_OPTION_CHANNEL_ROLES_PLACEHOLDER,
                            onChannelChange: function(e) {
                                return H(e)
                            },
                            onRoleChange: function(e) {
                                return U(e)
                            }
                        }), null == F.roles ? null : (0, r.jsx)(s.InputError, {
                            error: F.roles
                        }), (0, r.jsx)(Pe, {
                            guild: N,
                            roleIds: k
                        }), (0, r.jsx)(f.Z, {
                            className: je().divider
                        }), (0, r.jsxs)("div", {
                            className: je().emojiQuestionContainer,
                            children: [(0, r.jsxs)("div", {
                                className: je().emojiQuestionText,
                                children: [(0, r.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    children: z.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
                                }), (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: z.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
                                })]
                            }), (0, r.jsx)(E, {
                                emoji: R,
                                setEmoji: S,
                                channel: P
                            })]
                        })]
                    }), (0, r.jsx)(s.ModalFooter, {
                        children: (0, r.jsxs)("div", {
                            className: je().footerButtons,
                            children: [(0, r.jsx)("div", {
                                className: je().removeButton,
                                children: (0, r.jsx)(s.Button, {
                                    size: s.Button.Sizes.SMALL,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.RED,
                                    onClick: function() {
                                        b();
                                        O()
                                    },
                                    children: z.Z.Messages.REMOVE
                                })
                            }), (0, r.jsxs)("div", {
                                className: je().rightButtons,
                                children: [(0, r.jsx)(s.Button, {
                                    onClick: O,
                                    size: s.Button.Sizes.SMALL,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: z.Z.Messages.CANCEL
                                }), (0, r.jsx)(s.Button, {
                                    onClick: function() {
                                        var e, n = {
                                                id: null !== (e = null == y ? void 0 : y.id) && void 0 !== e ? e : "".concat(Date.now()),
                                                title: T,
                                                description: _,
                                                channelIds: Array.from(D).sort(),
                                                roleIds: Array.from(k).sort(),
                                                emoji: null == R ? void 0 : R
                                            },
                                            t = p.Z.editedOnboardingPrompts,
                                            r = function(e, n, t, r) {
                                                var o = {};
                                                r.title.length <= 0 && (o.title = z.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                                                var i = (0, v.en)(e, n, t, r);
                                                null != i && (o.roles = i);
                                                return o
                                            }(N, t, j, n);
                                        Q(r);
                                        if (a().isEmpty(r)) {
                                            g(n);
                                            O()
                                        }
                                    },
                                    children: z.Z.Messages.SAVE
                                })]
                            })]
                        })
                    })]
                })
            }

            function Pe(e) {
                var n = e.guild,
                    t = e.roleIds,
                    o = Array.from(t).map((function(e) {
                        return n.getRole(e)
                    })).filter(m.lm).find(h.F);
                return null == o ? null : (0, r.jsx)("div", {
                    className: je().notice,
                    children: (0, r.jsxs)("div", {
                        className: je().noticeMessage,
                        children: [(0, r.jsx)(d.Z, {
                            className: je().noticeIcon
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: z.Z.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
                                permissions: (0, h.i)(n, o).join(", ")
                            })
                        })]
                    })
                })
            }
        }
    }
]);