"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19031], {
        911486: (e, t, n) => {
            n.d(t, {
                l: () => c
            });
            var r = n(785893),
                a = (n(667294), n(795308)),
                o = n(633878);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (a[n] = e[n])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    d = e.color,
                    f = void 0 === d ? a.Z.colors.INTERACTIVE_NORMAL : d,
                    g = e.colorClass,
                    v = void 0 === g ? "" : g,
                    h = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, o.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M3.468 5.19a2.825 2.825 0 0 1 1.095-.972l6.095-3.047a3 3 0 0 1 2.684 0l6.095 3.047A2.828 2.828 0 0 1 21 6.748V9.78a14.167 14.167 0 0 1-1.831 6.972 14.176 14.176 0 0 1-6.593 5.99 1.419 1.419 0 0 1-1.152 0 14.176 14.176 0 0 1-8.422-12.728A14.307 14.307 0 0 1 3 9.781V6.748a2.826 2.826 0 0 1 .468-1.558Zm2.95 10.297A12.179 12.179 0 0 0 12 20.808a12.179 12.179 0 0 0 5.582-5.321A9.49 9.49 0 0 0 12.467 14h-.934a9.489 9.489 0 0 0-5.115 1.487ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: v
                    })
                }))
            }
        },
        673646: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                a = n(202351),
                o = n(61209),
                i = n(473903),
                u = n(983512),
                l = n(717037);

            function c(e) {
                var t, n, c = (0, a.e7)([i.default], (function() {
                        return i.default.getCurrentUser()
                    })),
                    s = (0, a.e7)([o.Z], (function() {
                        return o.Z.getChannel(e)
                    })),
                    d = (0, a.e7)([u.Z], (function() {
                        return null != e ? u.Z.getBroadcastByChannel(e) : null
                    })),
                    f = (0, l.ZP)(),
                    g = r.useMemo((function() {
                        var e;
                        return null !== (t = null == s || null === (e = s.recipients) || void 0 === e ? void 0 : e.map((function(e) {
                            return i.default.getUser(e)
                        })).filter((function(e) {
                            return null != e && e.id !== (null == d ? void 0 : d.userId)
                        }))) && void 0 !== t ? t : []
                    }), [null == d ? void 0 : d.userId, null == s ? void 0 : s.recipients]);
                return null == c ? [] : f ? g : null !== (n = g.length > 0 ? [c].concat(g) : null == d ? void 0 : d.viewers) && void 0 !== n ? n : []
            }
        },
        871042: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => ne
            });
            var r = n(785893),
                a = n(667294),
                o = n(496486),
                i = n(202351),
                u = n(970168),
                l = n(70418),
                c = n(396043),
                s = n(118442),
                d = n(968449),
                f = n(917019),
                g = n(567403),
                v = n(607556),
                h = n(968696),
                m = n(673646),
                S = n(717037),
                p = n(441143),
                b = n.n(p),
                T = n(842227),
                y = n(650332),
                O = n(664625),
                C = n(61209),
                A = n(27851),
                _ = n(21372),
                I = n(840922),
                E = n(107218),
                x = n(473903),
                D = n(749565),
                M = 200,
                j = n(449518);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Z(e) {
                return function(e) {
                    if (Array.isArray(e)) return w(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                var t;
                e.rowType === j.aC.USER ? t = {
                    type: y.Fj.USER,
                    label: e.name,
                    avatar: e.avatarURL
                } : e.rowType === j.aC.GUILD && (t = {
                    type: y.Fj.GUILD,
                    label: e.name,
                    guild: e.guild
                });
                b()(null != t, "RowData must be a guild or a user");
                return {
                    display: t,
                    row: e
                }
            }

            function U(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return !0
                    },
                    n = (0, i.Wu)([g.Z, A.Z], (function() {
                        var n = [];
                        e.forEach((function(e) {
                            var r, a = g.Z.getGuild(e),
                                o = null !== (r = A.Z.getMemberCount(e)) && void 0 !== r ? r : M;
                            null != a && o < M && (null == t ? void 0 : t(a.name)) && n.push(a)
                        }));
                        return n
                    }), [e, t]);
                return n
            }

            function G(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return !0
                    },
                    n = U(e, t),
                    r = a.useMemo((function() {
                        return n.map((function(e) {
                            return {
                                rowType: j.aC.GUILD,
                                name: e.name,
                                id: e.id,
                                disabled: !1,
                                guild: e,
                                key: "".concat(j.aC.GUILD, ":").concat(e.id)
                            }
                        }))
                    }), [n]);
                return r
            }

            function L(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return !0
                    },
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.filter((function(e) {
                    return null != e && (null == t ? void 0 : t(e.username))
                })).map((function(e) {
                    return {
                        rowType: j.aC.USER,
                        name: D.ZP.getUserTag(e),
                        id: e.id,
                        disabled: n && I.Z.isFriend(e.id),
                        avatarURL: e.getAvatarURL(null, 24),
                        key: "".concat(j.aC.USER, ":").concat(e.id)
                    }
                }))
            }

            function P() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                        return !0
                    },
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = (0, i.Wu)([I.Z], (function() {
                        return I.Z.getFriendIDs()
                    })),
                    o = U(t),
                    u = (0, i.e7)([O.default], (function() {
                        return O.default.getId()
                    })),
                    l = (0, i.e7)([_.ZP], (function() {
                        return _.ZP.getMemberVersion()
                    })),
                    c = a.useMemo((function() {
                        var e = new Set(r);
                        o.forEach((function(t) {
                            _.ZP.getMemberIds(t.id).forEach((function(t) {
                                e.has(t) || I.Z.isBlocked(t) || e.add(t)
                            }))
                        }));
                        return e
                    }), [o, r, l]),
                    s = (0, i.Wu)([x.default], (function() {
                        return Z(c).map((function(e) {
                            return x.default.getUser(e)
                        }))
                    }), [c]),
                    d = s.filter((function(e) {
                        return null != e && !e.bot && e.id !== u
                    })).sort((function(e, t) {
                        var n = C.Z.getChannel(C.Z.getDMFromUserId(null == e ? void 0 : e.id)),
                            r = C.Z.getChannel(C.Z.getDMFromUserId(null == t ? void 0 : t.id));
                        return T.default.compare(null == n ? void 0 : n.lastMessageId, null == r ? void 0 : r.lastMessageId) > 0 ? -1 : 1
                    }));
                return L(d, e, n)
            }
            var k = n(294184),
                B = n.n(k),
                F = n(377463),
                H = n(58838),
                q = n(473708),
                V = n(36545),
                W = n.n(V);

            function Q(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $(e) {
                var t = e.selectedTags,
                    n = e.title,
                    a = e.hintText,
                    o = e.placeholderText,
                    i = e.expanded,
                    u = e.setExpanded,
                    c = e.users,
                    d = e.guilds,
                    f = e.query,
                    g = e.maxCount,
                    v = e.onQueryChange,
                    h = e.onClickRow,
                    m = e.onRemoveTag;
                return (0, r.jsx)(l.Collapsible, {
                    className: W().collapsible,
                    isExpanded: i,
                    collapsibleContent: (0, r.jsx)("div", {
                        className: B()(W().collapsibleContent, Q({}, W().visible, i)),
                        children: (0, r.jsx)(s.Z, {
                            listClassName: W().list,
                            pendingAdditions: t,
                            query: f,
                            onQueryChange: v,
                            onClickRow: h,
                            onRemovePendingAddition: m,
                            users: c,
                            guilds: d,
                            renderEmptyText: function(e) {
                                return q.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                    query: e
                                })
                            },
                            hintText: a,
                            placeholderText: o,
                            disabledText: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
                            maxCount: g,
                            hideRowLabel: !0
                        })
                    }),
                    children: function(e) {
                        var t = e.onClick;
                        return (0, r.jsxs)(l.Clickable, {
                            className: W().content,
                            onClick: function(e) {
                                u(!i);
                                t(e)
                            },
                            children: [(0, r.jsx)(l.Heading, {
                                variant: "text-sm/normal",
                                children: n
                            }), i ? (0, r.jsx)(H.Z, {}) : (0, r.jsx)(F.Z, {})]
                        })
                    }
                })
            }
            var z = n(2590),
                J = n(582634),
                K = n.n(J);

            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Y(e, t, n[t])
                    }))
                }
                return e
            }

            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return X(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ne(e) {
                var t = e.headerText,
                    n = void 0 === t ? q.Z.Messages.BROADCASTING_SETTINGS : t,
                    p = e.buttonCTA,
                    b = void 0 === p ? q.Z.Messages.BROADCAST_SETTINGS_SAVE : p,
                    T = e.transitionState,
                    y = e.onClose,
                    C = e.onSave,
                    I = function() {
                        null == C || C();
                        var e, t = te(k(), 2),
                            n = t[0],
                            r = t[1];
                        c.ZP.trackWithMetadata(z.rMx.BROADCAST_SETTINGS_UPDATED, {
                            auto_broadcast: ie,
                            broadcast_to_all_friends: ne,
                            num_allowed_users_in_broadcast: r.length,
                            allowed_users: r,
                            num_guilds_in_broadcast: n.length,
                            guilds: n,
                            num_viewers_in_broadcast: he.length,
                            current_viewers: null !== (e = he.map((function(e) {
                                return e.id
                            }))) && void 0 !== e ? e : [],
                            started_broadcast: pe
                        })
                    },
                    D = function(e) {
                        J(e)
                    },
                    w = function(e, t) {
                        var n = (0, s.G)(t);
                        V((function(r) {
                            var a = ee({}, r);
                            a[e] = ee({}, a[e]);
                            n in a[e] ? delete a[e][n] : a[e][n] = N(t);
                            return a
                        }))
                    },
                    Z = function(e, t) {
                        V((function(n) {
                            var r = ee({}, n);
                            r[e] = ee({}, r[e]);
                            delete r[e][t];
                            return r
                        }))
                    },
                    k = function() {
                        var e = new Set,
                            t = new Set;
                        Object.values(H[j.aC.USER]).forEach((function(e) {
                            var n = e.row;
                            return t.add(n.id)
                        }));
                        Object.values(H[j.aC.GUILD]).forEach((function(t) {
                            var n = t.row;
                            return e.add(n.id)
                        }));
                        var n = function(e) {
                            var t, n = O.default.getId(),
                                r = e;
                            r.length > 10 && (r = r.slice(0, 10));
                            return r.filter((function(e) {
                                return _.ZP.isMember(e, n) && (null !== (t = A.Z.getMemberCount(e)) && void 0 !== t ? t : M) < M
                            }))
                        }(Array.from(e));
                        return [n, function(e) {
                            var t = e;
                            t.length > 10 && (t = t.slice(0, 10));
                            return t
                        }(Array.from(t))]
                    },
                    B = function() {
                        var e, t = d.MI.useSetting(),
                            n = d.GA.useSetting(),
                            r = {},
                            a = {};
                        G(t).forEach((function(e) {
                            var t = (0, s.G)(e);
                            r[t] = N(e)
                        }));
                        n.length > 0 && L(n.map((function(e) {
                            return x.default.getUser(e)
                        })).filter((function(e) {
                            return null != e
                        }))).map((function(e) {
                            var t = (0, s.G)(e);
                            a[t] = N(e)
                        }));
                        return R(e = {}, j.aC.GUILD, r), R(e, j.aC.USER, a), e
                    }(),
                    F = te(a.useState(B), 2),
                    H = F[0],
                    V = F[1],
                    W = te(a.useState(""), 2),
                    Q = W[0],
                    J = W[1],
                    X = d.Uc.useSetting(),
                    Y = te(a.useState(null == X || X), 2),
                    ne = Y[0],
                    re = Y[1],
                    ae = d.xd.useSetting(),
                    oe = te(a.useState(ae), 2),
                    ie = oe[0],
                    ue = oe[1],
                    le = te(a.useState(!1), 2),
                    ce = le[0],
                    se = le[1],
                    de = te(a.useState(!1), 2),
                    fe = de[0],
                    ge = de[1],
                    ve = (0, S._n)(),
                    he = (0, m.Z)(null == ve ? void 0 : ve.channelId),
                    me = null != ve,
                    Se = a.useMemo((function() {
                        return X !== ne || !(0, o.isEqual)(B, H) || ae !== ie
                    }), [X, ne, B, H, ae, ie]),
                    pe = null != C,
                    be = a.useMemo((function() {
                        return ne || Object.keys(H[j.aC.USER]).length > 0 || Object.keys(H[j.aC.GUILD]).length > 0
                    }), [ne, H]),
                    Te = !be && me || !be && pe || !Se && !pe,
                    ye = a.useMemo((function() {
                        return "@" === Q.trim().charAt(0)
                    }), [Q]),
                    Oe = U((0, i.Wu)([g.Z], (function() {
                        return g.Z.getGuildIds()
                    }))),
                    Ce = a.useMemo((function() {
                        return Oe.map((function(e) {
                            return e.id
                        }))
                    }), [Oe]),
                    Ae = te(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                                return !0
                            },
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = (0, i.e7)([E.Z], (function() {
                                return E.Z.getFlattenedGuildIds()
                            })),
                            a = G(r, t);
                        return [P(t, r, n), e ? [] : a]
                    }(ye, (function(e) {
                        var t = function(e, t) {
                            return t ? e.slice(1) : e
                        }(Q.trim(), ye);
                        return new RegExp("".concat(h.Z.escape(t)), "i").test(e)
                    }), ne), 2),
                    _e = Ae[0],
                    Ie = Ae[1];
                a.useEffect((function() {
                    c.ZP.trackWithMetadata(z.rMx.OPEN_MODAL, {
                        type: pe ? "Start Broadcast" : "Update Broadcast"
                    })
                }), [pe]);
                a.useEffect((function() {
                    (0, o.chunk)(Ce, 100).forEach((function(e) {
                        v.Z.requestMembers(e, Q.trim())
                    }))
                }), [Ce, Q]);
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: T,
                    children: [(0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        className: K().header,
                        children: n
                    }), (0, r.jsx)(l.ModalCloseButton, {
                        onClick: y,
                        className: K().close
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: K().content,
                        paddingFix: !1,
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: K().description,
                            children: q.Z.Messages.BROADCASTING_DESCRIPTION
                        }), (0, r.jsx)(l.FormTitle, {
                            tag: l.FormTitleTags.H5,
                            className: K().title,
                            children: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
                        }), (0, r.jsxs)("div", {
                            className: K().switch,
                            children: [(0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
                            }), (0, r.jsx)(l.Switch, {
                                checked: ne,
                                onChange: function(e) {
                                    re(e)
                                }
                            })]
                        }), (0, r.jsx)($, {
                            selectedTags: H[j.aC.USER],
                            query: Q,
                            onQueryChange: D,
                            onClickRow: function(e) {
                                return w(j.aC.USER, e)
                            },
                            onRemoveTag: function(e) {
                                return Z(j.aC.USER, e)
                            },
                            title: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                            hintText: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
                                count: 10
                            }),
                            placeholderText: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                            users: _e,
                            expanded: ce,
                            setExpanded: function(e) {
                                D("");
                                se(e);
                                ge(!1)
                            },
                            maxCount: 10
                        }), (0, r.jsx)($, {
                            selectedTags: H[j.aC.GUILD],
                            query: Q,
                            onQueryChange: D,
                            onClickRow: function(e) {
                                return w(j.aC.GUILD, e)
                            },
                            onRemoveTag: function(e) {
                                return Z(j.aC.GUILD, e)
                            },
                            title: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                            hintText: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
                                count: 10
                            }),
                            placeholderText: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                            guilds: Ie,
                            expanded: fe,
                            setExpanded: function(e) {
                                D("");
                                ge(e);
                                se(!1)
                            },
                            maxCount: 10
                        }), (0, r.jsx)(l.FormTitle, {
                            tag: l.FormTitleTags.H5,
                            className: K().title,
                            children: q.Z.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
                        }), (0, r.jsxs)("div", {
                            className: K().switch,
                            children: [(0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: q.Z.Messages.AUTO_BROADCAST_TOGGLE
                            }), (0, r.jsx)(l.Switch, {
                                checked: ie,
                                onChange: ue
                            })]
                        })]
                    }), (0, r.jsx)(l.ModalFooter, {
                        children: (0, r.jsx)(l.Button, {
                            disabled: Te,
                            onClick: function() {
                                if (!Te)
                                    if (Se) {
                                        var e = te(k(), 2),
                                            t = e[0],
                                            n = e[1];
                                        f.hW.updateAsync("broadcast", (function(e) {
                                            e.allowedGuildIds = t;
                                            e.allowedUserIds = n;
                                            e.allowFriends = u.D5.create({
                                                value: ne
                                            });
                                            e.autoBroadcast = u.D5.create({
                                                value: ie
                                            });
                                            I();
                                            y()
                                        }), f.fy.INFREQUENT_USER_ACTION)
                                    } else {
                                        I();
                                        y()
                                    }
                            },
                            children: b
                        })
                    })]
                })
            }
        }
    }
]);