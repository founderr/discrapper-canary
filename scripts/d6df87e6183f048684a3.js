(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76188], {
        148114: (e, t, r) => {
            e.exports = r.p + "bb5595916df24bd8cbb6d55ffee02ff9.svg"
        },
        346712: (e, t, r) => {
            e.exports = r.p + "8a7e2e357f5e4ba425acb8cb55727b92.svg"
        },
        34947: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => s
            });
            var n = r(281110),
                o = r(744564),
                i = r(2590);

            function l(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            l(i, n, o, c, a, "next", e)
                        }

                        function a(e) {
                            l(i, n, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var a = function(e, t) {
                var r, n, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1,
                                    n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                        n = i[1];
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
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function s(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = c((function(e) {
                    var t;
                    return a(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "GUILD_POPOUT_FETCH_START",
                                    guildId: e
                                });
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: i.ANM.GUILD_PREVIEW(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = r.sent();
                                o.Z.dispatch({
                                    type: "GUILD_POPOUT_FETCH_SUCCESS",
                                    guildId: e,
                                    guild: t.body
                                });
                                return [3, 4];
                            case 3:
                                r.sent();
                                o.Z.dispatch({
                                    type: "GUILD_POPOUT_FETCH_FAILURE",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        250384: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => m
            });
            var n = r(202351),
                o = r(744564),
                i = r(664625),
                l = r(709992);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function u(e) {
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
            }

            function f(e, t) {
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

            function d(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
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
            var b, h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                    var r, n = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }! function(e) {
                e.UNSET = "unset";
                e.FETCHING = "fetching";
                e.FAILED = "failed";
                e.SUCCEEDED = "succeeded"
            }(b || (b = {}));
            var g = {
                guilds: {}
            };
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
                }(r, e);
                var t = y(r);

                function r() {
                    c(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function() {
                    this.waitFor(i.default)
                };
                n.isFetchingGuild = function(e) {
                    var t = g.guilds[e];
                    return null != t && t.fetchState === b.FETCHING
                };
                n.getGuild = function(e) {
                    var t = g.guilds[e];
                    return null != t ? t.guild : null
                };
                n.hasFetchFailed = function(e) {
                    var t = g.guilds[e];
                    return null != t && t.fetchState === b.FAILED
                };
                return r
            }(n.ZP.Store);
            O.displayName = "GuildPopoutStore";
            const m = new O(o.Z, {
                GUILD_POPOUT_FETCH_START: function(e) {
                    var t = e.guildId;
                    g.guilds[t] = f(u({}, g.guilds[t]), {
                        fetchState: b.FETCHING
                    })
                },
                GUILD_POPOUT_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        r = e.guild,
                        n = (0, l.PP)(r);
                    g.guilds[t] = f(u({}, g.guilds[t]), {
                        guild: n,
                        fetchState: b.SUCCEEDED
                    })
                },
                GUILD_POPOUT_FETCH_FAILURE: function(e) {
                    var t = e.guildId;
                    g.guilds[t] = f(u({}, g.guilds[t]), {
                        fetchState: b.FAILED
                    })
                }
            })
        },
        38836: (e, t, r) => {
            "use strict";
            r.d(t, {
                SK: () => A,
                sK: () => k,
                ZP: () => R
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                c = r(202351),
                a = r(795308),
                s = r(575945),
                u = r(882723),
                f = r(74535),
                d = r(874049),
                p = r(784426),
                b = r(664625),
                h = r(21372),
                y = r(206986),
                g = r(211482),
                O = r(775173),
                m = r(709992),
                j = r(34947),
                v = r(250384),
                P = r(2590),
                w = r(473708),
                x = r(609561),
                I = r.n(x),
                S = r(148114),
                E = r.n(S),
                N = r(346712),
                D = r.n(N);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function C(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e, t) {
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

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = 80;

            function U() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: I().splashPlaceholder
                    }), (0, n.jsxs)("div", {
                        className: l()(I().body, I().hasSplash),
                        children: [(0, n.jsx)("div", {
                            className: I().iconPlaceholder
                        }), (0, n.jsx)("div", {
                            className: I().headerText,
                            children: (0, n.jsx)("div", {
                                className: I().namePlaceholder
                            })
                        }), (0, n.jsxs)("div", {
                            className: I().memberInfo,
                            children: [(0, n.jsx)("div", {
                                className: I().memberCount,
                                children: (0, n.jsx)("div", {
                                    className: I().memberInfoPlaceholder
                                })
                            }), (0, n.jsx)("div", {
                                className: I().memberCount,
                                children: (0, n.jsx)("div", {
                                    className: I().memberInfoPlaceholder
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: I().viewButtonPlaceholder
                        })]
                    })]
                })
            }

            function A() {
                var e = (0, f.ZP)();
                return (0, n.jsx)(u.Dialog, {
                    "aria-label": w.Z.Messages.GUILD_UNAVAILABLE_HEADER,
                    className: I().guildPopout,
                    children: (0, n.jsxs)("div", {
                        className: I().body,
                        children: [(0, n.jsx)("img", {
                            src: (0, s.wj)(e) ? E() : D(),
                            className: I().unavailableIcon,
                            width: Z,
                            height: Z,
                            alt: ""
                        }), (0, n.jsx)(u.Heading, {
                            className: I().unavailableHeader,
                            variant: "heading-md/semibold",
                            children: w.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: w.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
                        })]
                    })
                })
            }

            function k(e) {
                var t, r = e.guild,
                    i = e.channelId,
                    s = e.messageId,
                    f = r.name,
                    j = r.id,
                    v = r.discoverySplash,
                    x = r.icon,
                    S = r.description,
                    E = r.presenceCount,
                    N = r.memberCount,
                    D = r.emojis,
                    _ = j,
                    U = (0, c.e7)([b.default], (function() {
                        return b.default.getId()
                    })),
                    A = (0, c.e7)([h.ZP], (function() {
                        return h.ZP.isMember(_, U)
                    }), [_, U]),
                    k = L(o.useState(!1), 2),
                    R = k[0],
                    F = k[1],
                    M = function(e) {
                        e.stopPropagation();
                        if (A)(0, p.XU)(_, i, s);
                        else {
                            var t = {
                                page: P.ZY5.GUILD_CHANNEL,
                                section: P.jXE.GUILD_POPOUT,
                                object: P.qAy.CARD
                            };
                            (0, m.Ub)(_, t)
                        }
                        F(!0)
                    },
                    G = O.ZP.getGuildDiscoverySplashURL({
                        id: j,
                        splash: v,
                        size: 250 * (0, d.x_)()
                    }),
                    H = null !== (t = O.ZP.getGuildIconURL({
                        id: j,
                        icon: x,
                        size: Z
                    })) && void 0 !== t ? t : void 0,
                    B = D,
                    V = null;
                if (null != B && B.length > 6 && null != D) {
                    var z;
                    B = null !== (z = null == D ? void 0 : D.slice(Math.max((null == D ? void 0 : D.length) - 6, 0))) && void 0 !== z ? z : [];
                    V = D.length - 6
                }
                return (0, n.jsxs)(u.Dialog, {
                    "aria-label": f,
                    className: I().guildPopout,
                    children: [null != G ? (0, n.jsx)("img", {
                        src: G,
                        alt: "",
                        className: I().splashImage
                    }) : null, (0, n.jsxs)("div", {
                        className: l()(I().body, C({}, I().hasSplash, null != G)),
                        children: [(0, n.jsx)("div", {
                            className: l()(C({}, I().iconWithSplash, null != G)),
                            children: (0, n.jsx)(u.Clickable, {
                                onClick: M,
                                children: (0, n.jsx)(g.ZP, {
                                    mask: g.ZP.Masks.SQUIRCLE,
                                    width: 88,
                                    height: 88,
                                    children: (0, n.jsx)("div", {
                                        className: I().iconMask,
                                        children: (0, n.jsx)(g.ZP, {
                                            mask: g.ZP.Masks.SQUIRCLE,
                                            width: Z,
                                            height: Z,
                                            children: (0, n.jsx)("img", {
                                                src: H,
                                                alt: "",
                                                className: I().avatar
                                            })
                                        })
                                    })
                                })
                            })
                        }), null != f ? (0, n.jsxs)("div", {
                            className: I().guildNameWrapper,
                            children: [(0, n.jsx)(y.Z, {
                                className: I().badge,
                                guild: r,
                                tooltipPosition: "top",
                                tooltipColor: u.Tooltip.Colors.PRIMARY,
                                badgeColor: a.Z.unsafe_rawColors.PRIMARY_500.css
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: I().guildName,
                                children: f
                            })]
                        }) : null, null != S ? (0, n.jsx)(u.Text, {
                            color: "header-secondary",
                            className: I().description,
                            variant: "text-sm/normal",
                            children: S
                        }) : null, (0, n.jsxs)("div", {
                            className: I().memberInfo,
                            children: [null != E ? (0, n.jsxs)("div", {
                                className: I().memberCount,
                                children: [(0, n.jsx)("div", {
                                    className: I().dotOnline
                                }), (0, n.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: I().memberText,
                                    children: w.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                        membersOnline: E
                                    })
                                })]
                            }) : null, null != N ? (0, n.jsxs)("div", {
                                className: I().memberCount,
                                children: [(0, n.jsx)("div", {
                                    className: I().dotOffline
                                }), (0, n.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    className: I().memberText,
                                    children: w.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: N
                                    })
                                })]
                            }) : null]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: I().footer,
                        children: [null != B && B.length > 0 ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(u.Heading, {
                                variant: "heading-deprecated-12/semibold",
                                className: I().emojiHeader,
                                color: "header-secondary",
                                children: w.Z.Messages.SERVER_EMOJI
                            }), (0, n.jsxs)("div", {
                                className: l()(I().emojiContainer, C({}, I().withCounter, null != V)),
                                children: [B.map((function(e) {
                                    var t = O.ZP.getEmojiURL({
                                        id: e.id,
                                        animated: !1,
                                        size: 24
                                    });
                                    return (0, n.jsx)(u.Tooltip, {
                                        text: ":".concat(e.name, ":"),
                                        children: function(e) {
                                            return (0, n.jsx)("img", T(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))));
                                                    n.forEach((function(t) {
                                                        C(e, t, r[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                width: 24,
                                                height: 24,
                                                src: t,
                                                className: l()(C({}, I().emoji, null == V)),
                                                alt: ""
                                            }))
                                        }
                                    }, e.id)
                                })), null != V ? (0, n.jsx)(u.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: I().emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(V)
                                }) : null]
                            })]
                        }) : null, (0, n.jsx)(u.Button, {
                            look: u.Button.Looks.FILLED,
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.SMALL,
                            onClick: M,
                            submitting: R,
                            autoFocus: !0,
                            children: w.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
                        })]
                    })]
                })
            }

            function R(e) {
                var t = e.guildId,
                    r = e.channelId,
                    i = e.messageId,
                    l = (0, c.cj)([v.Z], (function() {
                        return {
                            guild: v.Z.getGuild(t),
                            loading: v.Z.isFetchingGuild(t),
                            unavailable: v.Z.hasFetchFailed(t)
                        }
                    }), [t]),
                    a = l.loading,
                    s = l.unavailable,
                    f = l.guild;
                o.useEffect((function() {
                    null != f || a || s || (0, j.P)(t)
                }), [f, t, a, s]);
                return a ? (0, n.jsx)(u.Dialog, {
                    "aria-label": w.Z.Messages.LOADING,
                    className: I().guildPopout,
                    children: (0, n.jsx)(U, {})
                }) : null == f || s ? (0, n.jsx)(A, {}) : (0, n.jsx)(k, {
                    guild: f,
                    channelId: r,
                    messageId: i
                })
            }
        },
        796399: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => g
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                l = r(882723),
                c = r(34947),
                a = r(250384),
                s = r(38836);

            function u(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            u(i, n, o, l, c, "next", e)
                        }

                        function c(e) {
                            u(i, n, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        d(e, t, r[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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

            function h(e, t) {
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
            var y = function(e, t) {
                var r, n, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                        n = i[1];
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
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function g(e) {
                var t = e.guildId,
                    r = e.channelId,
                    u = e.messageId,
                    d = h(e, ["guildId", "channelId", "messageId"]),
                    g = (0, i.cj)([a.Z], (function() {
                        return {
                            guild: a.Z.getGuild(t),
                            unavailable: a.Z.hasFetchFailed(t)
                        }
                    }), [t]),
                    O = g.unavailable,
                    m = g.guild,
                    j = null != m,
                    v = o.useCallback(f((function() {
                        return y(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    e.trys.push([0, 3, , 4]);
                                    return j ? [3, 2] : [4, (0, c.P)(t)];
                                case 1:
                                    e.sent();
                                    e.label = 2;
                                case 2:
                                    return [3, 4];
                                case 3:
                                    e.sent();
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), [j, t]);
                return O ? (0, n.jsx)(l.Popout, p({
                    position: "right",
                    renderPopout: function(e) {
                        return (0, n.jsx)(s.SK, {})
                    }
                }, d)) : (0, n.jsx)(l.Popout, p({
                    position: "right",
                    preload: v,
                    renderPopout: function(e) {
                        return null == m ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsx)(s.sK, b(p({}, e), {
                            guild: m,
                            channelId: r,
                            messageId: u
                        }))
                    }
                }, d))
            }
        },
        560560: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
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

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    s = e.className,
                    p = e.foreground,
                    b = d(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(b)), {
                    className: s,
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: p,
                        fill: a,
                        d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    h = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM7.739 9.307A2 2 0 0 1 9.307 7.74l7.222-1.445a1 1 0 0 1 1.177 1.177l-1.444 7.222a2 2 0 0 1-1.57 1.569l-7.221 1.444a1 1 0 0 1-1.177-1.177L7.74 9.307ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);