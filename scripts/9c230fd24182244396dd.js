"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [98936, 51775], {
        985462: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(571657),
                o = n(165695),
                i = n(744564),
                l = n(10390),
                a = n(9430),
                u = n(391438),
                c = n(201459),
                s = n(2590),
                d = n(131559);
            const f = {
                createChannel: function(e) {
                    var t = e.guildId,
                        n = e.type,
                        f = e.name,
                        p = e.permissionOverwrites,
                        y = void 0 === p ? [] : p,
                        b = e.bitrate,
                        h = e.userLimit,
                        m = e.parentId,
                        v = e.skuId,
                        g = e.branchId;
                    i.Z.dispatch({
                        type: "CREATE_CHANNEL_MODAL_SUBMIT"
                    });
                    var O = {
                        type: n,
                        name: f,
                        permission_overwrites: y
                    };
                    null != b && b !== s.epw && (O.bitrate = b);
                    null != h && h > 0 && (O.user_limit = h);
                    null != m && (O.parent_id = m);
                    if (n === s.d4z.GUILD_STORE) {
                        if (null == v) throw new Error("Unexpected missing SKU");
                        O.sku_id = v;
                        O.branch_id = g
                    }
                    return u.Z.post({
                        url: s.ANM.GUILD_CHANNELS(t),
                        body: O,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.CHANNEL_CREATE,
                            properties: function(e) {
                                var t, n;
                                return (0, o.iG)({
                                    is_private: y.length > 0,
                                    channel_id: null == e || null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e || null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    }).then((function(e) {
                        a.Z.isOptInEnabled(t) && c.Z.updateChannelOverrideSettings(t, e.body.id, {
                            flags: d.ic.OPT_IN_ENABLED
                        });
                        l.Z.checkGuildTemplateDirty(t);
                        return e
                    }), (function(e) {
                        i.Z.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        throw e
                    }))
                },
                createRoleSubscriptionTemplateChannel: function(e, t, n, i) {
                    return u.Z.post({
                        url: s.ANM.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: i
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.CHANNEL_CREATE,
                            properties: function(e) {
                                var t, n;
                                return (0, o.iG)({
                                    is_private: !0,
                                    channel_id: null == e || null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e || null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }
            }
        },
        911486: (e, t, n) => {
            n.d(t, {
                l: () => c
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
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
            var c = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    b = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
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
                        className: y
                    })
                }))
            }
        },
        276190: (e, t, n) => {
            n.r(t);
            n.d(t, {
                AddMembersBody: () => B,
                MemberRoleSelector: () => H,
                default: () => G
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                l = n(70418),
                a = n(442368),
                u = n(650332),
                c = n(382060),
                s = n(61209),
                d = n(21372),
                f = n(567403),
                p = n(107364),
                y = n(443812),
                b = n(823975),
                h = n(407558),
                m = n(652591),
                v = n(176758),
                g = n(607556),
                O = n(968696),
                E = n(1477),
                w = n(118442),
                A = n(449518),
                j = n(2590),
                S = n(473708),
                I = n(618719),
                R = n.n(I);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function x(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            P(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            P(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e, t) {
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

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e) {
                var t = function(e, t) {
                    if ("object" !== L(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== L(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === L(t) ? t : String(t)
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
            var k = function(e, t) {
                    var n, r, o, i, l = {
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
                                for (; l;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                    i = t.call(e, l)
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
                Z = (0, y.hQ)();

            function D(e, t) {
                return t ? e.slice(1) : e
            }

            function B(e) {
                var t, n = e.guild,
                    l = e.channel,
                    a = e.permission,
                    c = e.pendingAdditions,
                    s = e.setPendingAdditions,
                    f = e.isStageChannel,
                    p = void 0 === f ? null != l && l.isGuildStageVoice() : f,
                    y = e.description,
                    b = function(e) {
                        var t = D(I.trim(), m);
                        return new RegExp("".concat(O.Z.escape(t)), "i").test(e)
                    },
                    h = C(o.useState(!1), 2),
                    m = h[0],
                    v = h[1],
                    j = C(o.useState(""), 2),
                    I = j[0],
                    R = j[1],
                    N = (0, i.e7)([d.ZP], (function() {
                        return d.ZP.getMemberIds(n.id)
                    }));
                m ? t = [] : p ? t = E.Wx(n, l, a, b) : 0 === (t = E.ik(n, l, a, b)).length && ("" !== I.trim() || E.RD(n) || (t = E.aq()));
                var P = E.iI(N, l, n, a, b),
                    x = {
                        placeholderText: S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_PLACEHOLDER,
                        hintText: S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SUBTITLE,
                        renderEmptyText: function(e) {
                            return S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                query: e
                            })
                        }
                    },
                    L = x.placeholderText,
                    k = x.hintText,
                    Z = x.renderEmptyText;
                return (0, r.jsx)(H, {
                    pendingAdditions: c,
                    query: I,
                    onQueryChange: function(e) {
                        var t = e.trim(),
                            r = "@" === t.charAt(0);
                        g.Z.requestMembers(n.id, D(t, r), A.EQ);
                        R(e);
                        v(r)
                    },
                    onClickRow: function(e) {
                        var t = (0, w.G)(e);
                        s((function(n) {
                            var r = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        _(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, n);
                            if (t in r) delete r[t];
                            else {
                                var o;
                                e.rowType === A.aC.ROLE || e.rowType === A.aC.ADMINISTRATOR ? o = {
                                    type: u.Fj.ROLE,
                                    label: e.name,
                                    color: e.colorString
                                } : e.rowType !== A.aC.MEMBER && e.rowType !== A.aC.OWNER || (o = {
                                    type: u.Fj.MEMBER,
                                    label: e.name,
                                    avatar: e.avatarURL
                                });
                                null != o && (r[t] = {
                                    display: o,
                                    row: e
                                })
                            }
                            return r
                        }))
                    },
                    onRemovePendingAddition: function(e) {
                        s((function(t) {
                            t[e];
                            return M(t, [e].map(T))
                        }))
                    },
                    roles: t,
                    members: P,
                    placeholderText: L,
                    hintText: k,
                    renderEmptyText: Z,
                    isStageChannel: p,
                    description: y
                })
            }

            function H(e) {
                var t = e.listClassName,
                    n = e.pendingAdditions,
                    o = e.query,
                    i = e.onQueryChange,
                    a = e.onClickRow,
                    u = e.onRemovePendingAddition,
                    c = e.roles,
                    s = e.members,
                    d = e.placeholderText,
                    f = e.hintText,
                    p = e.renderEmptyText,
                    y = e.isStageChannel,
                    b = e.focusSearchAfterReady,
                    h = e.isReady,
                    m = e.description;
                return (0, r.jsxs)("div", {
                    className: R().content,
                    children: [function() {
                        var e = m;
                        null == e && y && (e = S.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION);
                        return null == e || "" === e ? null : (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            className: R().description,
                            variant: "text-sm/normal",
                            children: e
                        })
                    }(), (0, r.jsx)(w.Z, {
                        listClassName: t,
                        pendingAdditions: n,
                        query: o,
                        onQueryChange: i,
                        onClickRow: a,
                        onRemovePendingAddition: u,
                        roles: c,
                        members: s,
                        placeholderText: d,
                        hintText: f,
                        renderEmptyText: p,
                        disabledText: y ? S.Z.Messages.CHANNEL_PERMISSIONS_ROLE_ALREADY_HAS_PERMISSIONS : null,
                        focusSearchAfterReady: b,
                        isReady: h
                    })]
                })
            }

            function G(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    a = e.channelId,
                    u = e.newChannel,
                    d = e.inSettings,
                    y = C(o.useState(!1), 2),
                    v = y[0],
                    g = y[1],
                    O = C(o.useState({}), 2),
                    E = O[0],
                    w = O[1],
                    A = (0, i.e7)([s.Z], (function() {
                        return s.Z.getChannel(a)
                    }), [a]),
                    I = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuild(null == A ? void 0 : A.getGuildId())
                    }));
                o.useEffect((function() {
                    m.default.track(j.rMx.OPEN_MODAL, {
                        type: "Grant Channel Access"
                    })
                }), []);
                if (null == A || null == I) return null;
                var N = u && 0 === Object.keys(E).length;

                function P() {
                    return (P = x((function() {
                        return k(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    if (null == A || 0 === Object.keys(E).length) {
                                        n();
                                        return [2]
                                    }
                                    g(!0);
                                    e.label = 1;
                                case 1:
                                    e.trys.push([1, 3, , 4]);
                                    return [4, U(A, E, d)];
                                case 2:
                                    e.sent();
                                    n();
                                    g(!1);
                                    return [3, 4];
                                case 3:
                                    e.sent();
                                    g(!1);
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                var _ = (0, c.zi)(A.type) ? b.Z : h.Z;
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.SMALL,
                    "aria-labelledby": Z,
                    className: R().modalRoot,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        direction: p.Z.Direction.VERTICAL,
                        align: p.Z.Align.CENTER,
                        className: R().header,
                        children: [(0, r.jsx)(l.Heading, {
                            id: Z,
                            variant: "heading-xl/semibold",
                            children: S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
                        }), (0, r.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: R().headerSubtitle,
                            children: [(0, r.jsx)(_, {
                                height: 16,
                                width: 16,
                                className: R().headerSubtitleIcon
                            }), A.name]
                        })]
                    }), (0, r.jsx)(B, {
                        guild: I,
                        channel: A,
                        permission: A.accessPermissions,
                        pendingAdditions: E,
                        setPendingAdditions: w
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [!N && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Button, {
                                onClick: function() {
                                    return P.apply(this, arguments)
                                },
                                look: l.Button.Looks.FILLED,
                                size: l.Button.Sizes.SMALL,
                                className: R().button,
                                submitting: v,
                                children: S.Z.Messages.DONE
                            }), (0, r.jsx)(l.Button, {
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.TRANSPARENT,
                                onClick: n,
                                size: l.Button.Sizes.SMALL,
                                children: S.Z.Messages.CANCEL
                            })]
                        }), N && (0, r.jsx)(l.Button, {
                            look: l.Button.Looks.FILLED,
                            color: l.Button.Colors.PRIMARY,
                            onClick: n,
                            size: l.Button.Sizes.SMALL,
                            children: S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SKIP
                        })]
                    })]
                })
            }

            function U(e, t, n) {
                var r = [];
                Object.values(t).forEach((function(t) {
                    var n = t.row;
                    null != n.id && "" !== n.id && (n.rowType === A.aC.ROLE ? r.push((0, v.rX)(n.id, e.type)) : n.rowType === A.aC.MEMBER && r.push((0, v.jZ)(n.id, e.type)))
                }));
                return (0, a.hw)(e.id, r, n)
            }
        },
        974771: (e, t, n) => {
            n.d(t, {
                Ui: () => i,
                p$: () => a
            });
            var r = n(260561),
                o = (0, r.B)({
                    kind: "guild",
                    id: "2023-03_guild_media_channel",
                    label: "Media Channel",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables guild to create a media channel",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function i(e) {
                var t, n = o.useExperiment({
                    guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    location: "96e84c_1"
                }, {
                    autoTrackExposure: !0
                }).enabled;
                return null != (null == e ? void 0 : e.id) && n
            }
            var l = (0, r.B)({
                kind: "user",
                id: "2023-04_guild_media_channel_post_preview_embed_users",
                label: "Guild Role Subscription Users",
                defaultConfig: {
                    enabledForUser: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables for users Guild Media Post Preview Embeds",
                    config: {
                        enabledForUser: !0
                    }
                }]
            });

            function a() {
                return l.useExperiment({
                    location: "96e84c_2"
                }, {
                    autoTrackExposure: !0
                }).enabledForUser
            }
        },
        804808: (e, t, n) => {
            n.d(t, {
                ZP: () => c,
                k$: () => d
            });
            n(940007);
            var r = n(883064),
                o = n(188775),
                i = n(2590);
            var l = new Set([i.hBH.IMAGE, i.hBH.GIFV]),
                a = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function u(e, t, n) {
                n.toAST;
                var r = n.hideSimpleEmbedContent,
                    i = void 0 === r || r,
                    a = n.formatInline,
                    u = void 0 !== a && a,
                    c = n.postProcessor,
                    s = !1,
                    d = e(t.content, !0, function(e, t) {
                        return {
                            allowLinks: null != e.webhookId || Boolean(t.allowLinks),
                            allowEmojiLinks: null != e.webhookId,
                            channelId: e.channel_id,
                            messageId: e.id,
                            mentionChannels: e.mentionChannels,
                            isInteracting: !!t.isInteracting,
                            formatInline: Boolean(t.formatInline),
                            noStyleAndInteraction: Boolean(t.noStyleAndInteraction),
                            allowHeading: Boolean(t.allowHeading),
                            allowList: Boolean(t.allowList),
                            previewLinkTarget: Boolean(t.previewLinkTarget),
                            disableAnimatedEmoji: Boolean(t.disableAnimatedEmoji),
                            disableAutoBlockNewlines: !0,
                            muted: !1
                        }
                    }(t, n), (function(e, n) {
                        Array.isArray(e) || (e = [e]);
                        i && (e = function(e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            var n = e[0],
                                r = t[0];
                            if ("link" === n.type && l.has(r.type) && (0, o.dY)(r)) return [];
                            return e
                        }(e, t.embeds));
                        u || (e = function(e, t) {
                            if (t) return f(e);
                            "paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = f(e[0].content));
                            return e
                        }(e, n));
                        0;
                        s = function(e, t) {
                            if (t) return p(e);
                            if ("paragraph" === e[0].type && e[0].content instanceof Array) return p(e[0].content);
                            return !1
                        }(e, n);
                        u && (e = y(e));
                        null != c && (e = c(e, n));
                        return e
                    }));
                return {
                    hasSpoilerEmbeds: s,
                    content: d
                }
            }

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? r.Z.parseInlineReply : r.Z.parse;
                return u(n, e, t)
            }

            function s(e, t, n, r) {
                return e(t, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: n,
                    disableAnimatedEmoji: !1,
                    channelId: r,
                    muted: !1
                }, (function(e) {
                    Array.isArray(e) || (e = [e]);
                    return e
                }))
            }

            function d(e, t, n) {
                return s(r.Z.parseAutoModerationSystemMessage, e, t, n)
            }

            function f(e) {
                if (e.some((function(e) {
                        return "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim())
                    }))) return e;
                var t = 0;
                e.forEach((function(e) {
                    "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type || (t += 1);
                    if (t > 30) return !1
                }));
                if (t > 30) return e;
                e.forEach((function(e) {
                    e.jumboable = !0
                }));
                return e
            }

            function p(e) {
                return e.some((function(e) {
                    return "spoiler" === e.type && Array.isArray(e.content) && e.content.some((function(e) {
                        return "link" === e.type
                    }))
                }))
            }

            function y(e) {
                e.forEach((function(e) {
                    a.has(e.type) && null != e.content && (Array.isArray(e.content) ? y(e.content) : e.content = e.content.replace(/\n/g, " "))
                }));
                return e
            }
        },
        148318: (e, t, n) => {
            n.d(t, {
                A: () => u,
                m: () => c
            });
            var r = n(202351),
                o = n(567403),
                i = n(2590);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e) {
                var t, n = a(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z], 1),
                    r = n[0];
                return Boolean(null === (t = r.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(i.oNc.COMMUNITY))
            }

            function c(e) {
                return (0, r.e7)([o.Z], (function() {
                    return u(e, [o.Z])
                }), [e])
            }
        },
        879116: (e, t, n) => {
            n.d(t, {
                WE: () => u,
                lE: () => l
            });
            var r = n(102921),
                o = n(379364),
                i = n(473708),
                l = function(e, t) {
                    if (null == e || e < 0) return "0";
                    var n = function(e) {
                        return r.Z.compare("992549565104128000", e) > -1
                    }(t);
                    return (null == t || n) && e >= o.vw ? "50+" : e >= o.M3 ? "100k+" : "".concat(e)
                },
                a = function(e, t, n) {
                    var r = l(e, n);
                    return "0" === r ? i.Z.Messages.SEE_THREAD : t.format({
                        count: r
                    })
                },
                u = function(e, t) {
                    return a(e, i.Z.Messages.THREAD_MESSAGE_COUNT, t)
                }
        },
        613677: (e, t, n) => {
            n.d(t, {
                Q: () => r,
                Z: () => y
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                l = n.n(i),
                a = n(70418),
                u = n(621329),
                c = n(559968),
                s = n(386991),
                d = n(818417),
                f = n(153954),
                p = n.n(f);
            ! function(e) {
                e[e.WARNING = 0] = "WARNING";
                e[e.INFO = 1] = "INFO";
                e[e.ERROR = 2] = "ERROR";
                e[e.POSITIVE = 3] = "POSITIVE"
            }(r || (r = {}));
            const y = function(e) {
                var t = e.children,
                    n = e.messageType,
                    i = e.className,
                    f = e.textColor,
                    y = void 0 === f ? "text-normal" : f,
                    b = e.textVariant,
                    h = void 0 === b ? "text-sm/medium" : b,
                    m = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return d.Z;
                            case r.INFO:
                                return s.Z;
                            case r.ERROR:
                                return c.Z;
                            case r.POSITIVE:
                                return u.Z
                        }
                    }(n),
                    v = function(e) {
                        switch (e) {
                            case r.WARNING:
                                return p().warning;
                            case r.INFO:
                                return p().info;
                            case r.ERROR:
                                return p().error;
                            case r.POSITIVE:
                                return p().positive
                        }
                    }(n);
                return (0, o.jsxs)("div", {
                    className: l()(p().container, v, i),
                    children: [(0, o.jsx)("div", {
                        className: p().iconDiv,
                        children: (0, o.jsx)(m, {
                            className: p().icon
                        })
                    }), (0, o.jsx)(a.Text, {
                        className: p().text,
                        color: y,
                        variant: h,
                        children: t
                    })]
                })
            }
        },
        843508: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                l = n(633878);

            function a(e, t, n) {
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

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
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

            function f(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    c = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
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
                }({}, (0, l.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: u,
                        className: c,
                        d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    b = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M21.414 5.414a2 2 0 1 0-2.828-2.828l-2 2-4 4-1.749 1.748a.528.528 0 0 1-.574.108 6 6 0 1 0 3.29 3.285.51.51 0 0 1 .105-.556c.189-.19.495-.19.684 0l1.244 1.243a2 2 0 1 0 2.828-2.828l-1.232-1.232a.5.5 0 0 1 0-.708l.464-.464a.5.5 0 0 1 .708 0l1.232 1.232a2 2 0 1 0 2.828-2.828l-1.232-1.232a.5.5 0 0 1 0-.708l.232-.232ZM10 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        }
    }
]);