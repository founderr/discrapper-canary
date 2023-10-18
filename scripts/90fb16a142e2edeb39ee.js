"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [13659], {
        959898: (e, t, r) => {
            r.d(t, {
                i: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    O = e.color,
                    f = void 0 === O ? o.Z.colors.INTERACTIVE_NORMAL : O,
                    d = e.colorClass,
                    p = void 0 === d ? "" : d,
                    g = c(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M15.293 15.293a1 1 0 0 1 1.414 0L19 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414L20.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414L19 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Zm3.353-.89-.525-.524a3 3 0 1 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .707l-.525.526c-.46.46-.74 1.032-.838 1.628-.042.25-.231.464-.485.478-.184.01-.37.015-.556.015H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.985 2.985 0 0 0-1.628.838l-.525.525a.5.5 0 0 1-.708 0Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }
        },
        614948: (e, t, r) => {
            r.d(t, {
                Ux: () => h,
                gS: () => _,
                ww: () => I
            });
            var n = r(667294),
                o = r(318715),
                i = r(396179),
                l = r(19585),
                a = r(482139),
                c = r(664625),
                s = r(21372),
                u = r(567403),
                O = r(682776),
                f = r(464187),
                d = r(36058),
                p = r(2590),
                g = r(589677),
                b = r(131559),
                y = r(473708);

            function h(e) {
                return (0, o.ZP)([c.default, s.ZP], (function() {
                    if (null == e) return !1;
                    var t = c.default.getId();
                    return (0,
                        d.EY)(s.ZP.getMember(e, t))
                }), [e])
            }

            function _(e) {
                return (0, o.cj)([c.default, s.ZP, f.Z, u.Z], (function() {
                    var t = {
                            nick: void 0,
                            bio: void 0
                        },
                        r = f.Z.getGuildId(),
                        n = null != e ? e : r,
                        o = u.Z.getGuild(n);
                    if (null == o || null == n) return t;
                    var i = c.default.getId(),
                        l = s.ZP.getMember(n, i),
                        a = (0, d.Ow)(null == l ? void 0 : l.flags);
                    if (0 === a.size) return t;
                    if (a.has(g.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
                        if (null == e) {
                            var O;
                            t.nick = [y.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (O = o.name) && void 0 !== O ? O : ""
                            })]
                        } else t.nick = [y.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
                    a.has(g.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [y.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]);
                    return t
                }), [e])
            }

            function I(e) {
                var t = e.guildId,
                    r = e.scrollPosition,
                    c = e.analyticsLocation,
                    s = e.analyticsLocations,
                    f = e.openWithoutBackstack,
                    d = (0, l.Z)().analyticsLocations,
                    g = (0, o.ZP)([u.Z], (function() {
                        return u.Z.getGuild(t)
                    }), [t]),
                    y = (0, o.ZP)([O.Z], (function() {
                        return null != g && O.Z.can(p.Plq.CHANGE_NICKNAME, g)
                    }), [g]);
                return [n.useCallback((function() {
                    if (null != g) {
                        var e = p.oAB.PROFILE_CUSTOMIZATION,
                            t = b.NB.GUILD;
                        y ? (0, a.Fq)(g, null != s ? s : d) : t = b.NB.USER_PROFILE;
                        i.Z.open(e, t, {
                            scrollPosition: r,
                            analyticsLocation: c,
                            analyticsLocations: s,
                            openWithoutBackstack: f
                        })
                    }
                }), [y, r, c, s, f, g, d]), y]
            }
        },
        813659: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => j
            });
            var n = r(785893),
                o = r(667294),
                i = r(318715),
                l = r(70418),
                a = r(153686),
                c = r(19585),
                s = r(664625),
                u = r(21372),
                O = r(567403),
                f = r(124251),
                d = r(914563),
                p = r(652591),
                g = r(36058),
                b = r(614948),
                y = r(292327),
                h = r(2590),
                _ = r(589677),
                I = r(473708),
                A = r(747475),
                L = r.n(A);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e) {
                var t, r = e.onClose,
                    A = e.transitionState,
                    v = e.guildId,
                    j = (0, i.ZP)([s.default], (function() {
                        return s.default.getId()
                    })),
                    M = (0, i.ZP)([u.ZP], (function() {
                        return u.ZP.getMember(v, j)
                    }), [v, j]),
                    P = (0, i.ZP)([O.Z], (function() {
                        return O.Z.getGuild(v)
                    }), [v]),
                    N = null !== (t = null == P ? void 0 : P.name) && void 0 !== t ? t : "",
                    D = (0, g.no)(M),
                    m = (0, c.Z)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT).analyticsLocations,
                    w = E((0, b.ww)({
                        guildId: v,
                        analyticsLocations: m,
                        openWithoutBackstack: !0
                    }), 2),
                    C = w[0],
                    R = w[1],
                    Z = D.has(_.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? I.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : I.Z.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                R || (Z = I.Z.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                var U = R ? I.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : I.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                o.useEffect((function() {
                    p.default.track(h.rMx.OPEN_MODAL, {
                        type: y.dc,
                        guild_id: v,
                        other_user_id: j
                    })
                }), []);
                o.useEffect((function() {
                    null != P || r()
                }), [P, r]);
                return null == P ? null : (0, n.jsxs)(l.ModalRoot, {
                    transitionState: A,
                    size: l.ModalSize.SMALL,
                    children: [(0, n.jsx)(l.ModalHeader, {
                        separator: !1,
                        children: (0, n.jsxs)("div", {
                            className: L().headerContainer,
                            children: [(0, n.jsxs)("div", {
                                className: L().guildIconContainer,
                                children: [(0, n.jsx)(f.Z, {
                                    guild: P,
                                    size: f.Z.Sizes.LARGER
                                }), (0, n.jsx)("div", {
                                    className: L().statusContainer,
                                    children: (0, n.jsx)(d.Z, {
                                        className: L().statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, n.jsx)(l.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: I.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: N
                                })
                            })]
                        })
                    }), (0, n.jsx)(l.ModalContent, {
                        children: (0, n.jsx)("div", {
                            className: L().descriptionContainer,
                            children: (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: Z
                            })
                        })
                    }), (0, n.jsxs)(l.ModalFooter, {
                        children: [(0, n.jsx)(l.Button, {
                            onClick: function() {
                                C();
                                r()
                            },
                            color: l.Button.Colors.BRAND_NEW,
                            look: l.Button.Looks.FILLED,
                            children: U
                        }), (0, n.jsx)(l.Button, {
                            onClick: r,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: I.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        914563: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(959898),
                l = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var t = e.color,
                    r = void 0 === t ? "currentColor" : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.width,
                    O = void 0 === u ? 24 : u,
                    f = s(e, ["color", "height", "width"]);
                return (0,
                    n.jsxs)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(f)), {
                    width: O,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                        stroke: r,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                        fill: r
                    })]
                }))
            }), i.i)
        }
    }
]);