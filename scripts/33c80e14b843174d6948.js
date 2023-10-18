"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [62746], {
        627379: (e, t, n) => {
            n.d(t, {
                O: () => l
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
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
            var l = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    a = void 0 === l ? 24 : l,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    O = void 0 === p ? "" : p,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        821: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function u(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var a, f, d = function(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }

            function O() {
                a = !1;
                f = null
            }
            O();
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }! function(e, t, n) {
                    t && c(e.prototype, t);
                    n && c(e, n)
                }(n, [{
                    key: "hasCompletedStepDuringSession",
                    get: function() {
                        return a
                    }
                }, {
                    key: "activeSubstep",
                    get: function() {
                        return f
                    }
                }]);
                return n
            }(r.ZP.Store);
            _.displayName = "PremiumTutorialSessionStore";
            const h = new _(o.Z, {
                SET_HAS_COMPLETED_STEP: function() {
                    a = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    a = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    var t = e.substep;
                    f = t
                },
                LOGOUT: function() {
                    O()
                }
            })
        },
        518197: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => b
            });
            var r = n(785893),
                o = (n(667294),
                    n(70418)),
                i = n(591406),
                c = n(567403),
                s = n(682776),
                u = n(107364),
                l = n(709189),
                a = n(652591),
                f = n(82274),
                d = n(808194),
                p = n(227202),
                O = n(2590),
                _ = n(203600),
                h = n(473708),
                y = n(663474),
                S = n.n(y);

            function b(e) {
                var t, n, y = e.channel,
                    b = e.transitionState,
                    g = e.onClose,
                    v = c.Z.getGuild(y.guild_id),
                    E = null !== (t = null == v ? void 0 : v.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    T = Boolean(null == v ? void 0 : v.isCommunity()),
                    m = h.Z.Messages.STAGE_FULL_TITLE,
                    j = T ? E < O.TU7 : (null == v ? void 0 : v.premiumTier) !== O.Eu4.TIER_3 && E <= O.eez,
                    L = s.Z.can(p.yP, y);
                n = T && (null == v ? void 0 : v.premiumTier) === O.Eu4.TIER_3 ? E <= O.TU7 ? h.Z.Messages.STAGE_FULL_BOOST_MORE_BODY : h.Z.Messages.STAGE_FULL_MAX_BODY : j ? h.Z.Messages.STAGE_FULL_BODY : h.Z.Messages.STAGE_FULL_MAX_BODY;
                var M = function() {
                        g();
                        a.default.track(O.rMx.BOOSTING_UPSELL_CLICKED, {
                            guild_id: y.guild_id,
                            type: _.cd.VIDEO_STAGE_LIMIT,
                            is_moderator: L,
                            action: _.T7.DISMISS
                        })
                    },
                    I = f.Z.getMutableParticipants(y.id, d.pV.SPEAKER).filter((function(e) {
                        return e.type === d.Ui.VOICE
                    })).length,
                    P = f.Z.getParticipantCount(y.id, d.pV.AUDIENCE);
                a.default.track(O.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: y.guild_id,
                    type: _.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: L,
                    listener_count: I + P
                });
                return (0, r.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.SMALL,
                    transitionState: b,
                    "aria-label": m,
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        justify: u.Z.Justify.END,
                        separator: !1,
                        className: S().header,
                        children: [(0, r.jsx)("div", {
                            className: S().fullArt
                        }), (0, r.jsx)(o.ModalCloseButton, {
                            onClick: g
                        })]
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: S().content,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-xl/bold",
                            children: m
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            children: n
                        })]
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: S().footer,
                        children: j ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                className: S().noThanksButton,
                                color: o.ButtonColors.CUSTOM,
                                size: o.ButtonSizes.SMALL,
                                onClick: M,
                                children: h.Z.Messages.NO_THANKS
                            }), (0, r.jsx)(l.C, {
                                onClick: function() {
                                    g();
                                    (0, i.f)({
                                        guildId: y.guild_id,
                                        location: {
                                            section: O.jXE.STAGE_VIDEO_LIMIT
                                        }
                                    });
                                    a.default.track(O.rMx.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: y.guild_id,
                                        type: _.cd.VIDEO_STAGE_LIMIT,
                                        is_moderator: L,
                                        action: _.T7.BOOST
                                    })
                                },
                                size: o.ButtonSizes.SMALL,
                                className: S().boostButton,
                                children: h.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, r.jsx)(o.Button, {
                            onClick: M,
                            size: o.ButtonSizes.SMALL,
                            color: o.ButtonColors.CUSTOM,
                            className: S().boostButton,
                            children: h.Z.Messages.GOT_IT
                        })
                    })]
                })
            }
        }
    }
]);