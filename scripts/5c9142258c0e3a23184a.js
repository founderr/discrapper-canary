"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [15550, 58635, 76156], {
        372956: (e, t, n) => {
            n.d(t, {
                x: () => i,
                C: () => a
            });
            var r = n(744564),
                o = n(758635);

            function i(e) {
                var t = e.omitUserIds,
                    n = e.guild,
                    i = e.channel,
                    a = e.applicationId,
                    u = e.inviteTargetType;
                return (0, o.W)().then((function() {
                    r.Z.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: i,
                        applicationId: a,
                        inviteTargetType: u
                    })
                }))
            }

            function a(e) {
                r.Z.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        758635: (e, t, n) => {
            n.d(t, {
                W: () => u
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                a = n(2590);

            function u() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: a.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => s
            });
            var r = n(473903),
                o = n(775173),
                i = n(72580),
                a = n(2590);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case a.d4z.DM:
                        var u = c(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            s = u[0];
                        return null == s ? null : s.getAvatarURL(void 0, t, n);
                    case a.d4z.GROUP_DM:
                        return o.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        548144: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => B
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(304548),
                u = n(761953),
                c = n(372956),
                s = n(720419),
                l = n(153686),
                f = n(621647),
                d = n(773011),
                p = n(567403),
                y = n(537335),
                h = n(840922),
                v = n(473903),
                b = n(282898),
                m = n(169649),
                g = n(316388),
                E = n(652591),
                O = n(775173),
                I = n(691797),
                S = n(786502),
                _ = n(421281),
                w = n(749565),
                A = n(702264),
                C = n(2590),
                R = n(473708),
                j = n(232060),
                P = n.n(j);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function x(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            T(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            T(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Z(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function D(e, t) {
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

            function L(e, t) {
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

            function F(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || M(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || M(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                if (e) {
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(e, t) : void 0
                }
            }
            var k = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                        0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
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
                        }([i, u])
                    }
                }
            };

            function B(e) {
                var t = e.guildId,
                    n = L(e, ["guildId"]),
                    f = F(o.useState(""), 2),
                    d = f[0],
                    p = f[1],
                    h = F(o.useState([]), 2),
                    v = h[0],
                    m = h[1],
                    g = F(o.useState(""), 2),
                    O = g[0],
                    I = g[1],
                    _ = n.onClose,
                    w = "".concat(window.location.origin).concat(C.ANM.CLYDE_PROFILES(O)),
                    j = (0, i.Wu)([y.Z], (function() {
                        return y.Z.getInviteSuggestionRows()
                    }));
                o.useEffect((function() {
                    (0, c.x)({
                        omitUserIds: new Set
                    })
                }), []);
                o.useEffect((function() {
                    (0, A.JO)(t).then((function(e) {
                        if (null != e) I(null == e ? void 0 : e.clyde_profile_id);
                        else {
                            (0, a.showToast)((0, a.createToast)(R.Z.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, a.ToastType.FAILURE));
                            _()
                        }
                    }))
                }), [t, _]);
                o.useEffect((function() {
                    return (0, c.C)(d)
                }), [d]);
                var N = o.useCallback(x((function() {
                    var e, r, o, i;
                    return k(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                e = function(e, t) {
                                    switch (e.type) {
                                        case S.bm.DM:
                                        case S.bm.FRIEND:
                                            r++;
                                            break;
                                        case S.bm.GROUP_DM:
                                            o++;
                                            break;
                                        case S.bm.CHANNEL:
                                            i++
                                    }
                                    return e.type === S.bm.GROUP_DM || e.type === S.bm.CHANNEL ? s.Z.sendClydeProfileOverride(e.item.id, t, l.Z.CLYDE_PROFILE_SHARE_MODAL, null) : e.type === S.bm.DM || e.type === S.bm.FRIEND ? u.Z.ensurePrivateChannel(e.item.id).then((function(e) {
                                        return s.Z.sendClydeProfileOverride(e, w, l.Z.CLYDE_PROFILE_SHARE_MODAL, null)
                                    })) : Promise.resolve()
                                };
                                r = 0;
                                o = 0;
                                i = 0;
                                return [4, y.Z.getInviteSuggestionRows().filter((function(e) {
                                    return v.includes(e.item.id)
                                })).map((function(t) {
                                    return e(t, w)
                                }))];
                            case 1:
                                a.sent();
                                E.default.track(C.rMx.CLYDE_AI_SHARE_LINK_SENT, {
                                    guild_id: t,
                                    clyde_profile_id: O,
                                    num_users: r,
                                    num_gdms: o,
                                    num_channels: i
                                });
                                n.onClose();
                                return [2]
                        }
                    }))
                })), [v, n, w, t, O]);
                return (0, r.jsxs)(a.ModalRoot, D(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Z(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    className: P().modalRoot,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        className: P().header,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: R.Z.Messages.CLYDE_PROFILE_SHARE_HEADER
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            onClick: n.onClose
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: P().modalContent,
                        children: [(0, r.jsx)(b.Z, {
                            className: P().searchBar,
                            placeholder: R.Z.Messages.SEARCH,
                            label: R.Z.Messages.SEARCH,
                            searchTerm: d,
                            onChange: function(e) {
                                return p(e)
                            },
                            onClear: function() {
                                return p("")
                            }
                        }), j.map((function(e, t) {
                            return (0, r.jsxs)(o.Fragment, {
                                children: [0 === t ? null : (0, r.jsx)("div", {
                                    className: P().rowDivider
                                }), (0, r.jsx)(G, {
                                    row: e,
                                    onClick: function() {
                                        var t = U(v);
                                        t.includes(e.item.id) ? t = t.filter((function(t) {
                                            return t !== e.item.id
                                        })) : t.push(e.item.id);
                                        m(t)
                                    },
                                    checked: v.includes(e.item.id)
                                })]
                            }, e.item.id)
                        }))]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        className: P().footer,
                        children: [(0, r.jsx)("div", {
                            className: P().footerDivider
                        }), (0, r.jsxs)("div", {
                            className: P().copySendBar,
                            children: [(0, r.jsx)(H, {
                                link: w,
                                clydeProfileId: O,
                                guildId: t
                            }), (0, r.jsx)(a.Button, {
                                onClick: N,
                                disabled: v.length <= 0 || "" === O,
                                children: R.Z.Messages.SEND
                            })]
                        })]
                    })]
                }))
            }

            function G(e) {
                var t = e.row,
                    n = e.onClick,
                    o = e.checked,
                    i = null,
                    u = null,
                    c = null;
                switch (t.type) {
                    case S.bm.DM:
                    case S.bm.FRIEND:
                        i = (0, r.jsx)(a.Avatar, {
                            size: a.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        });
                        u = w.ZP.getName(t.item);
                        c = w.ZP.getUserTag(t.item);
                        break;
                    case S.bm.GROUP_DM:
                        var s = (0, f.x)(t.item),
                            l = (0, d.F6)(t.item, v.default, h.Z);
                        i = (0,
                            r.jsx)(a.Avatar, {
                            src: s,
                            "aria-label": l,
                            size: a.AvatarSizes.SIZE_40
                        });
                        u = (0, d.F6)(t.item, v.default, h.Z);
                        break;
                    case S.bm.CHANNEL:
                        var y = t.item,
                            b = p.Z.getGuild(y.guild_id);
                        if (null == b) return null;
                        u = "#".concat((0, d.F6)(y, v.default, h.Z));
                        c = b.name;
                        if (null != b.icon) {
                            var m = O.ZP.getGuildIconURL({
                                id: y.guild_id,
                                icon: b.icon,
                                size: 40
                            });
                            i = (0, r.jsx)(a.Avatar, {
                                src: m,
                                "aria-label": u,
                                size: a.AvatarSizes.SIZE_40
                            })
                        } else {
                            var g = (0, _.Zg)(b.name);
                            i = (0, r.jsx)("div", {
                                className: P().acronym,
                                "aria-hidden": !0,
                                children: g
                            })
                        }
                }
                return (0, r.jsxs)(a.Clickable, {
                    onClick: n,
                    className: P().rowContainer,
                    children: [(0, r.jsxs)("div", {
                        className: P().rowLeft,
                        children: [(0, r.jsx)("div", {
                            className: P().rowAvatar,
                            children: i
                        }), (0, r.jsxs)("div", {
                            className: P().rowNameContainer,
                            children: [(0, r.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: P().rowName,
                                children: u
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                className: P().rowSubName,
                                children: c
                            })]
                        })]
                    }), (0, r.jsx)(a.Checkbox, {
                        value: o,
                        type: a.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: P().rowRight
                    })]
                })
            }

            function H(e) {
                var t = e.link,
                    n = e.guildId,
                    i = e.clydeProfileId,
                    u = F(o.useState(!1), 2),
                    c = u[0],
                    s = u[1];
                o.useEffect((function() {
                    var e;
                    c && (e = setTimeout((function() {
                        s(!1)
                    }), 1e3));
                    return function() {
                        null != e && clearTimeout(e)
                    }
                }), [c]);
                return (0, r.jsxs)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.LINK,
                    onClick: function() {
                        (0, I.JG)(t);
                        s(!0);
                        E.default.track(C.rMx.CLYDE_AI_SHARE_LINK_COPIED, {
                            guild_id: n,
                            clyde_profile_id: i
                        })
                    },
                    innerClassName: P().copyButton,
                    children: [c ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(g.Z, {}), c ? R.Z.Messages.COPIED : R.Z.Messages.COPY_LINK]
                })
            }
        },
        537335: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(202351),
                o = n(744564),
                i = n(980604),
                a = n(72580),
                u = n(786502),
                c = n(61209),
                s = n(840922),
                l = n(239734),
                f = n(2590),
                d = n(718634);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function v(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var O, I, S, _, w, A, C, R = new Set,
                j = [],
                P = new Map;

            function N(e) {
                var t = new Set,
                    n = null == _ || C === d.Iq.EMBEDDED_APPLICATION ? void 0 : _.id,
                    r = (0, u.rh)(R, n);
                null == r || s.Z.isBlocked(r.id) || t.add(r.id);
                var o = !0,
                    p = !1,
                    y = void 0;
                try {
                    for (var h, v = l.Z.getUserAffinitiesUserIds()[Symbol.iterator](); !(o = (h = v.next()).done); o = !0) {
                        var b = h.value;
                        t.add(b)
                    }
                } catch (e) {
                    p = !0;
                    y = e
                } finally {
                    try {
                        o || null == v.return || v.return()
                    } finally {
                        if (p) throw y
                    }
                }
                var m = new Set;
                if (C === d.Iq.EMBEDDED_APPLICATION) {
                    i.Z.getChannelHistory().map((function(e) {
                        return c.Z.getChannel(e)
                    })).filter(a.lm).filter((function(e) {
                        return e.type === f.d4z.GUILD_TEXT
                    })).slice(0, 3).forEach((function(e) {
                        return m.add(e.id)
                    }))
                }
                return (0, u.an)({
                    query: e,
                    omitUserIds: R,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: m,
                    inviteTargetType: C
                })
            }

            function T(e) {
                j = e;
                P = new Map;
                e.forEach((function(e, t) {
                    P.set(e, {
                        index: t
                    })
                }))
            }
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.Z, l.Z)
                };
                r.getInviteSuggestionRows = function() {
                    return j
                };
                r.getTotalSuggestionsCount = function() {
                    return I
                };
                r.getInitialCounts = function() {
                    return O
                };
                r.getSelectedInviteMetadata = function(e) {
                    var t = P.get(e),
                        n = l.Z.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: j.length,
                        numAffinityConnections: n.size,
                        isFiltered: S
                    } : null
                };
                return n
            }(r.ZP.Store);
            x.displayName = "InviteSuggestionsStore";
            const Z = new x(o.Z, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    var t = e.omitUserIds,
                        n = e.guild,
                        r = e.channel,
                        o = e.applicationId,
                        i = e.inviteTargetType;
                    _ = null != r ? n : null;
                    w = r;
                    A = o;
                    C = i;
                    var a = s.Z.getRelationships(),
                        c = Object.keys(a).filter((function(e) {
                            return a[e] === f.OGo.BLOCKED
                        })),
                        l = (0, u.Sz)({
                            channel: w,
                            applicationId: A,
                            inviteTargetType: i
                        });
                    R = new Set(m(t).concat(m(c), m(l)));
                    S = !1;
                    var d = N(""),
                        p = d.rows,
                        y = d.counts;
                    T(p);
                    O = y;
                    I = j.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    var t = e.query;
                    S = "" !== t;
                    T(N(t).rows)
                }
            })
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e) {
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
            }

            function l(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = !1,
                h = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                v = s({}, h);

            function b() {
                v.affinityUserIds = new Set(v.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        v.userAffinities = e.userAffinities;
                        v.affinityUserIds = new Set(e.affinityUserIds);
                        v.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], b)
                };
                r.needsRefresh = function() {
                    return Date.now() - v.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return y
                };
                r.getState = function() {
                    return v
                };
                r.getUserAffinities = function() {
                    return v.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return v.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            m.displayName = "UserAffinitiesStore";
            m.persistKey = "UserAffinitiesStore";
            m.migrations = [function(e) {
                return null
            }];
            const g = new m(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    v.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    v.lastFetched = Date.now();
                    b();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    v = s({}, h)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => F
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                a = n(575626),
                u = n(744564),
                c = n(621696),
                s = n(624325),
                l = n(996344),
                f = n(48315),
                d = n(382060),
                p = n(61209),
                y = n(567403),
                h = n(179913),
                v = n(9430),
                b = n(473903),
                m = n(102921),
                g = n(897196);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function I(e, t) {
                return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var _, w = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(_ || (_ = {}));
            var C = new a.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? _.FAVORITE : _.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function R(e) {
                var t, n, r = null !== (n = null !== (t = h.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var a = o()(i).valueOf(),
                        u = m.Z.fromTimestamp(a);
                    return m.Z.compare(r, u) > 0 ? r : u
                }
                return r
            }

            function j(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: v.Z.isMessagesFavorite(e.id) && (0, c.cn)(),
                    isRequest: l.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function P() {
                C.clear();
                Object.values(p.Z.getMutablePrivateChannels()).forEach((function(e) {
                    C.set(e.id, j(e))
                }));
                (0, c.cn)() && (0, s.x7)() && v.Z.getAddedToMessages().forEach((function(e) {
                    var t = p.Z.getChannel(e);
                    null != t && (0, d.zi)(t.type) && C.set(t.id, j(t))
                }))
            }

            function N() {
                var e = p.Z.getMutablePrivateChannels();
                for (var t in e) C.set(t, j(e[t]))
            }
            var T, x, Z, D = (T = [], x = [], Z = [], function() {
                    var e = C.values(_.FAVORITE),
                        t = C.values(_.DEFAULT);
                    if (T !== e || x !== t) {
                        Z = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return Z.push(t)
                        }));
                        T = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return Z.push(t)
                        }));
                        x = t
                    }
                    return Z
                }),
                L = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = A(n);

                    function n() {
                        E(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(p.Z, y.Z, b.default, l.Z, v.Z);
                        this.syncWith([v.Z, l.Z], P)
                    };
                    r.getPrivateChannelIds = function() {
                        return D()
                    };
                    r.getSortedChannels = function() {
                        return [C.values(_.FAVORITE), C.values(_.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        C.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    return n
                }(i.ZP.Store);
            L.displayName = "PrivateChannelSortStore";
            const F = new L(u.Z, {
                CONNECTION_OPEN: P,
                CONNECTION_OPEN_SUPPLEMENTAL: P,
                OVERLAY_INITIALIZE: P,
                CACHE_LOADED: N,
                CACHE_LOADED_LAZY: N,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, d.hv)(e.type) || C.has(e.id)) && C.set(e.id, j(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, d.hv)(t.type)) return !1;
                    if (t.id === g.V) return !1;
                    C.set(t.id, j(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return C.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!C.has(t)) return !1;
                    var r = p.Z.getChannel(t);
                    return null != r && C.set(t, j(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return C.delete(t)
                }
            })
        },
        282898: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(304548),
                c = n(559968),
                s = n(926054),
                l = n(473708),
                f = n(415030),
                d = n.n(f);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function v(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments))._textInputRef = o.createRef();
                    e._containerRef = o.createRef();
                    e.handleClear = function() {
                        var t = e.props,
                            n = t.onClear,
                            r = t.forwardedRef,
                            o = (null != r ? r : e._textInputRef).current;
                        null != o && o.focus();
                        null != n && n()
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.autoFocus,
                        n = e.label,
                        o = e.placeholder,
                        i = e.searchTerm,
                        f = e.inputClassName,
                        p = e.className,
                        y = e.onChange,
                        h = e.onFocus,
                        v = e.onBlur,
                        b = e.onKeyPress,
                        m = e.autoComplete,
                        g = e.forwardedRef,
                        E = e.closeIconClassName,
                        O = e.searchIconClassName,
                        I = e.cta,
                        S = null != i && i.length > 0,
                        _ = null != g ? g : this._textInputRef;
                    return (0, r.jsx)(u.FocusRing, {
                        focusTarget: _,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: a()(d().searchBox, p),
                            ref: this._containerRef,
                            children: [(0,
                                r.jsx)(u.TextInput, {
                                inputRef: _,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d().searchBoxInputWrapper,
                                inputClassName: a()(d().searchBoxInput, f),
                                onChange: y,
                                onFocus: h,
                                onBlur: v,
                                onKeyPress: b,
                                value: S ? i : "",
                                placeholder: o,
                                autoFocus: t,
                                "aria-label": n,
                                autoComplete: m ? "on" : "off"
                            }), null != I ? (0, r.jsx)(u.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d().cta,
                                children: I
                            }) : null, S ? (0, r.jsx)(u.Clickable, {
                                onClick: this.handleClear,
                                className: d().clear,
                                "aria-label": l.Z.Messages.SEARCH_CLEAR,
                                children: (0, r.jsx)(c.Z, {
                                    className: a()(d().clearIcon, E)
                                })
                            }) : (0, r.jsx)(s.Z, {
                                className: a()(d().searchIcon, O),
                                "aria-label": l.Z.Messages.SEARCH
                            })]
                        })
                    })
                };
                return n
            }(o.Component);
            E.defaultProps = {
                autoComplete: !1
            };
            const O = o.forwardRef((function(e, t) {
                return (0, r.jsx)(E, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            y(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    forwardedRef: t
                }, e))
            }))
        }
    }
]);