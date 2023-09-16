"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [26546], {
        437060: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => F
            });
            var r = t(785893),
                i = t(667294),
                a = t(751615),
                l = t(242847),
                s = t(882723),
                o = t(153686),
                c = t(19585),
                u = t(784426),
                d = t(249697),
                f = t(279309),
                v = t(363582),
                m = t(108206),
                h = t(723729),
                p = t(373438),
                y = t(786170),
                x = t(661123),
                b = t(456826),
                g = t(706148),
                j = t(663772),
                I = t(398441),
                E = t(77147),
                S = t(798981),
                N = t(9018),
                O = t(483535),
                w = t(92585),
                C = t(595258),
                T = t(968257),
                _ = t(779099),
                A = t(638273),
                M = t(2590),
                D = t(473708),
                Z = t(65748),
                P = t.n(Z);

            function k(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function B(e, n, t, r, i, a, l) {
                try {
                    var s = e[a](l),
                        o = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(o) : Promise.resolve(o).then(r, i)
            }

            function L(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function l(e) {
                            B(a, r, i, l, s, "next", e)
                        }

                        function s(e) {
                            B(a, r, i, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function R(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function V(e, n) {
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

            function H(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            l = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || G(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return k(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(e, n) {
                if (e) {
                    if ("string" == typeof e) return k(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? k(e, n) : void 0
                }
            }
            var z = function(e, n) {
                var t, r, i, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = n.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };

            function F(e) {
                var n, t = e.match,
                    g = null !== (n = (0, u.DR)()) && void 0 !== n ? n : [],
                    E = (0,
                        c.Z)(U(g).concat([o.Z.ACTIVITY_DETAIL_PAGE])).AnalyticsLocationProvider,
                    S = t.params.applicationId;
                (0, I.g)();
                i.useEffect((function() {
                    (0, b.w1)({
                        guildId: null
                    })
                }), []);
                var O = (0, w.Z)({
                        applicationId: null != S ? S : "",
                        size: 2048
                    }),
                    C = (0, j.T)(null, null != S && "" !== S ? S : null);
                if (null == S || null == C) return null;
                if (!(0, x.yE)(C.application.flags, M.udG.EMBEDDED)) return (0, r.jsx)(a.l_, {
                    to: M.Z5c.ACTIVITIES
                });
                var T, _ = null != C.activity.activity_preview_video_asset_id ? (0, N.Z)(S, C.activity.activity_preview_video_asset_id) : null,
                    Z = A.o[S],
                    k = null != (null == Z ? void 0 : Z.playersSuggestionMin) && null != (null == Z ? void 0 : Z.playersSuggestionMax) ? "".concat(Z.playersSuggestionMin, " - ").concat(Z.playersSuggestionMax) : void 0;
                return (0, r.jsx)(E, {
                    children: (0, r.jsxs)("div", {
                        className: P().outerContainer,
                        children: [(0, r.jsxs)(p.ZP, {
                            children: [(0, r.jsxs)("div", {
                                className: P().titleContainer,
                                children: [(0, r.jsx)(m.Z, {
                                    className: P().rocketIcon
                                }), (0, r.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    children: C.application.name
                                })]
                            }), (0, r.jsx)("div", {
                                className: P().headerBarRightSideFiller
                            })]
                        }), (0, r.jsx)(s.Scroller, {
                            className: P().scroller,
                            children: (0, r.jsxs)("div", {
                                className: P().innerContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: P().header,
                                    children: [(0, r.jsx)("img", {
                                        src: O.url,
                                        className: P().headerImage,
                                        alt: C.application.name
                                    }), (0, r.jsx)("div", {
                                        className: P().headerImageOverlay
                                    }), (0, r.jsxs)(s.Clickable, {
                                        onClick: function() {
                                            (0, u.op)()
                                        },
                                        className: P().backButtonContainer,
                                        children: [(0, r.jsx)(d.Z, {
                                            color: l.ZP.unsafe_rawColors.WHITE_100,
                                            className: P().backButtonIcon
                                        }), (0, r.jsx)(s.Heading, {
                                            color: "always-white",
                                            variant: "heading-lg/semibold",
                                            children: D.Z.Messages.BACK
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: P().detailsOuterContainer,
                                    children: (0, r.jsx)("div", {
                                        className: P().detailsInnerContainer,
                                        children: (0, r.jsxs)("div", {
                                            className: P().detailsInnerInnerContainer,
                                            children: [(0, r.jsxs)("div", {
                                                className: P().activityDetailsContainer,
                                                children: [(0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("div", {
                                                        className: P().detailsTitle,
                                                        children: (0, r.jsx)(s.Heading, {
                                                            variant: "heading-xxl/bold",
                                                            children: C.application.name
                                                        })
                                                    }), (0, r.jsxs)("div", {
                                                        className: P().detailsDetails,
                                                        children: [null != k ? (0, r.jsxs)("div", {
                                                            className: P().detailItem,
                                                            children: [(0, r.jsx)(v.Z, {
                                                                width: 16,
                                                                height: 16
                                                            }), (0, r.jsx)(s.Text, {
                                                                variant: "text-xs/semibold",
                                                                className: P().detailItemText,
                                                                children: D.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                                                                    nPlayers: k
                                                                })
                                                            })]
                                                        }) : null, null != (null == Z ? void 0 : Z.timeSuggestionMinutes) ? (0, r.jsxs)("div", {
                                                            className: P().detailItem,
                                                            children: [(0, r.jsx)(f.Z, {
                                                                width: 16,
                                                                height: 16
                                                            }), (0, r.jsx)(s.Text, {
                                                                variant: "text-xs/semibold",
                                                                className: P().detailItemText,
                                                                children: D.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                                                                    nMinutes: Z.timeSuggestionMinutes
                                                                })
                                                            })]
                                                        }) : null, (0, r.jsxs)("div", {
                                                            className: P().detailItem,
                                                            children: [(0, r.jsx)(h.Z, {
                                                                width: 16,
                                                                height: 16
                                                            }), (0, r.jsx)(s.Text, {
                                                                variant: "text-xs/semibold",
                                                                className: P().detailItemText,
                                                                children: C.application.tags.slice(0, 3).join(", ")
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, r.jsx)(s.Heading, {
                                                    variant: "heading-lg/medium",
                                                    className: P().detailsDescription,
                                                    children: C.application.description
                                                }), (0, r.jsx)("div", {
                                                    className: P().divider
                                                }), (0, r.jsxs)("div", {
                                                    className: P().imagesContainer,
                                                    children: [(null !== (T = null == Z ? void 0 : Z.gameplayImageUrls) && void 0 !== T ? T : []).map((function(e) {
                                                        return (0, r.jsx)("img", {
                                                            src: e,
                                                            alt: D.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                                                                activityName: C.application.name
                                                            }),
                                                            className: P().activityImage
                                                        }, e)
                                                    })), (0, r.jsx)(y.Z, {
                                                        loop: !0,
                                                        autoPlay: !0,
                                                        muted: !0,
                                                        className: P().activityImage,
                                                        src: _,
                                                        poster: O.url
                                                    })]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: P().launcherOuterContainer,
                                                children: (0, r.jsx)(W, {
                                                    activityItem: C
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }

            function W(e) {
                var n, a, l = e.activityItem,
                    o = (0, c.Z)().analyticsLocations,
                    u = (0, O.Z)(),
                    d = H(i.useState(null !== (n = (0, E.$)()) && void 0 !== n ? n : void 0), 2),
                    f = d[0],
                    v = d[1],
                    m = H(i.useState(null !== (a = (0, S.d)({
                        guildId: f
                    })) && void 0 !== a ? a : void 0), 2),
                    h = m[0],
                    p = m[1],
                    y = (0, E.W)(),
                    x = (0, S.F)(f),
                    b = i.useCallback((function() {
                        null != h && null != f && (0, g.Z)({
                            activityItem: l,
                            currentActivity: u,
                            channelId: h,
                            guildId: f,
                            embeddedActivitiesManager: C.Z,
                            analyticsLocations: o
                        })
                    }), [l, o, u, h, f]),
                    j = i.useCallback((function() {
                        (0, s.openModalLazy)(L((function() {
                            var e, n;
                            return z(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(35521)]).then(t.bind(t, 135521))];
                                    case 1:
                                        e = i.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, V(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        R(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({
                                                activityItem: l
                                            }, e), {
                                                analyticsLocations: o
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [l, o]);
                return (0, r.jsxs)("div", {
                    className: P().launcherInnerContainer,
                    children: [(0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: D.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
                    }), (0, r.jsx)(s.Select, {
                        placeholder: D.Z.Messages.GUILD_SELECT,
                        optionClassName: P().option,
                        options: y,
                        renderOptionValue: function(e) {
                            var n = e.find((function(e) {
                                return e.value === f
                            }));
                            return null == n ? null : (0, r.jsx)(_.m, {
                                guildId: n.value
                            })
                        },
                        renderOptionLabel: function(e) {
                            var n = e.value;
                            return (0, r.jsx)(_.m, {
                                guildId: n
                            })
                        },
                        isSelected: function(e) {
                            return e === f
                        },
                        select: function(e) {
                            v(e);
                            var n;
                            p(null !== (n = (0, S.d)({
                                guildId: e
                            })) && void 0 !== n ? n : void 0)
                        },
                        serialize: function(e) {
                            return e
                        }
                    }), (0, r.jsx)(s.Select, {
                        placeholder: D.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                        optionClassName: P().option,
                        options: x,
                        isSelected: function(e) {
                            return e.channel.id === h
                        },
                        select: function(e) {
                            var n = e.channel;
                            return p(n.id)
                        },
                        serialize: function(e) {
                            return e.channel.id
                        },
                        renderOptionValue: function() {
                            var e = x.find((function(e) {
                                return e.value.channel.id === h
                            }));
                            return null == e ? null : (0, r.jsx)(T.O, {
                                channel: e.value.channel,
                                users: e.value.users
                            })
                        },
                        renderOptionLabel: function(e) {
                            var n = e.value,
                                t = n.channel,
                                i = n.users;
                            return (0, r.jsx)(T.O, {
                                channel: t,
                                users: i
                            })
                        }
                    }), (0, r.jsx)(s.Button, {
                        fullWidth: !0,
                        disabled: null == f || null == h || !y.some((function(e) {
                            return e.value === f
                        })) || !x.some((function(e) {
                            return e.value.channel.id === h
                        })),
                        onClick: b,
                        children: D.Z.Messages.START
                    }), (0, r.jsx)("div", {
                        className: P().divider
                    }), (0, r.jsx)(s.Button, {
                        fullWidth: !0,
                        color: s.Button.Colors.PRIMARY,
                        onClick: j,
                        children: D.Z.Messages.SHARE
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=61862bb84a0e5b67bc2f.js.map