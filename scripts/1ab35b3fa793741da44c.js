"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35657], {
        238823: (e, r, t) => {
            t.d(r, {
                S: () => a
            });
            var n = t(785893),
                o = (t(667294), t(795308)),
                c = t(633878);

            function i(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function s(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function l(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var a = function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    f = e.color,
                    O = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    b = e.colorClass,
                    p = void 0 === b ? "" : b,
                    d = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            i(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof O ? O : O.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }
        },
        800455: (e, r, t) => {
            t.d(r, {
                Xd: () => v,
                mv: () => m
            });
            var n = t(785893),
                o = (t(667294), t(202351)),
                c = t(795308),
                i = t(70418),
                s = t(971402),
                l = t(742257),
                a = t(961241),
                u = t(98265),
                f = t(661782),
                O = t(749565),
                b = t(933022),
                p = t(426404),
                d = t(473708),
                j = t(858003),
                y = t.n(j);

            function g(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function h(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var m = function(e) {
                    var r = e.channelId,
                        t = (0, p._d)(r);
                    if (0 === t) return null;
                    return (0, n.jsxs)("div", {
                        className: y().blockedNotice,
                        children: [(0, n.jsx)(l.Z, {
                            className: y().blockedIcon,
                            color: c.Z.unsafe_rawColors.RED_400.css
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: d.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: t
                            })
                        }), (0, n.jsx)(i.Clickable, {
                            className: y().blockedButton,
                            onClick: function(e) {
                                (0, s.vq)(e, (function(e) {
                                    return (0, n.jsx)(w, h(function(e) {
                                        for (var r = 1; r < arguments.length; r++) {
                                            var t = null != arguments[r] ? arguments[r] : {},
                                                n = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            n.forEach((function(r) {
                                                g(e, r, t[r])
                                            }))
                                        }
                                        return e
                                    }({}, e), {
                                        channelId: r
                                    }))
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: d.Z.Messages.VIEW_ALL
                        })]
                    })
                },
                v = function(e) {
                    var r = e.user,
                        t = e.showStatus,
                        c = e.speaker,
                        s = e.channelId,
                        l = (0, o.e7)([b.ZP], (function() {
                            return b.ZP.isModerator(r.id, s)
                        })),
                        p = null;
                    t && (p = c ? d.Z.Messages.STAGE_SPEAKER : l ? d.Z.Messages.STAGE_MODERATOR_TOOLTIP : d.Z.Messages.STAGE_AUDIENCE);
                    return (0, n.jsxs)("div", {
                        className: y().user,
                        children: [(0, n.jsx)(f.Z, {
                            src: r.getAvatarURL(null, 32),
                            size: i.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: c ? function() {
                                return (0, n.jsx)(a.Z, {
                                    className: y().icon
                                })
                            } : null
                        }, r.id), (0, n.jsxs)("div", {
                            className: y().userInfo,
                            children: [(0, n.jsxs)("div", {
                                className: y().username,
                                children: [(0, n.jsx)(u.Z, {
                                    size: t ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    children: O.ZP.getName(r)
                                }), (0, n.jsx)(u.Z, {
                                    size: t ? u.Z.Sizes.SIZE_16 : u.Z.Sizes.SIZE_14,
                                    color: u.Z.Colors.HEADER_SECONDARY,
                                    children: "#".concat(r.discriminator)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: y().username,
                                children: [(0, n.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: d.Z.Messages.BLOCKED
                                }), (0, n.jsxs)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", p]
                                })]
                            })]
                        })]
                    })
                },
                w = function(e) {
                    var r = e.channelId,
                        t = (0, p.z)(r);
                    return (0, n.jsx)(i.Scroller, {
                        className: y().container,
                        children: t.map((function(e) {
                            var t = e.user;
                            return (0, n.jsx)(v, {
                                user: t,
                                channelId: r
                            }, t.id)
                        }))
                    })
                }
        },
        135657: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => p
            });
            var n = t(785893),
                o = (t(667294), t(70418)),
                c = t(443812),
                i = t(426404),
                s = t(800455),
                l = t(473708),
                a = t(980214),
                u = t.n(a);

            function f(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function O(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function b(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function p(e) {
                var r = e.channel,
                    t = e.onAccept,
                    a = e.transitionState,
                    p = e.onClose,
                    d = b(e, ["channel", "onAccept", "transitionState", "onClose"]),
                    j = (0, c.Dt)(),
                    y = (0, i.z)(r.id);
                return (0, n.jsxs)(o.ModalRoot, O(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            f(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    transitionState: a,
                    "aria-labelledby": j
                }, d), {
                    size: o.ModalSize.SMALL,
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        className: u().header,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            children: l.Z.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
                                number: y.length
                            })
                        }), (0, n.jsx)(o.Text, {
                            color: "header-secondary",
                            className: u().description,
                            variant: "text-sm/normal",
                            children: l.Z.Messages.STAGE_BLOCKED_USERS_BODY.format({
                                number: y.length
                            })
                        })]
                    }), (0, n.jsx)(o.ModalContent, {
                        className: u().content,
                        children: y.map((function(e) {
                            var t = e.user,
                                o = e.id,
                                c = e.speaker;
                            return (0, n.jsx)(s.Xd, {
                                user: t,
                                speaker: c,
                                showStatus: !0,
                                channelId: r.id
                            }, o)
                        }))
                    }), (0, n.jsxs)(o.ModalFooter, {
                        className: u().footer,
                        children: [(0, n.jsx)(o.Button, {
                            onClick: function() {
                                t(r);
                                p()
                            },
                            color: o.Button.Colors.BRAND,
                            children: l.Z.Messages.STAGE_BLOCKED_USERS_ACCEPT
                        }), (0, n.jsx)(o.Button, {
                            onClick: function() {
                                p()
                            },
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: l.Z.Messages.STAGE_BLOCKED_USERS_CANCEL
                        })]
                    })]
                }))
            }
        },
        961241: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(168075)),
                c = t(238823),
                i = t(633878);

            function s(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function l(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    O = e.foreground,
                    b = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", l(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            s(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    width: t,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                        className: O,
                        fill: f
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                        className: O,
                        fill: f
                    })]
                }))
            }), c.S)
        }
    }
]);