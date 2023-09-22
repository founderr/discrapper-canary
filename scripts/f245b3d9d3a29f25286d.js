"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [32027], {
        632027: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => M
            });
            var n = r(785893),
                o = r(667294),
                i = r(418705),
                l = r(882723),
                s = r(316878),
                a = r(896490),
                c = r(776009),
                u = r(901644),
                d = r(296289),
                O = r(450520),
                f = r(795308),
                p = r(633878);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e, t) {
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

            function b(e, t) {
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

            function j(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
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

            function y(e, t) {
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
            const P = (0, O.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    s = void 0 === l ? "currentColor" : l,
                    a = e.foreground,
                    c = y(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", g(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            j(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, p.Z)(c)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        className: a,
                        fill: s,
                        d: "M4.4147 21.7996L3.0005 20.3854L11.485 11.9009L12.8992 13.3151L4.4147 21.7996Z"
                    }), (0, n.jsx)("path", {
                        className: a,
                        fill: s,
                        d: "M19.088 8.19L21.384 3.414L16.609 5.71L12.899 2L13.721 7.064L8.72 9.586L14.325 10.474L15.212 16.078L17.734 11.077L22.798 11.899L19.088 8.19Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    s = void 0 === l ? f.Z.colors.INTERACTIVE_NORMAL : l,
                    a = e.colorClass,
                    c = void 0 === a ? "" : a,
                    u = b(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", h(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            m(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, p.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "m21.182 2.818-.448-1.194a.25.25 0 0 0-.468 0l-.448 1.194-1.194.448a.25.25 0 0 0 0 .468l1.194.448.448 1.194a.25.25 0 0 0 .468 0l.448-1.194 1.194-.448a.25.25 0 0 0 0-.468l-1.194-.448ZM6.968 4.248l.76 2.025 2.024.759a.5.5 0 0 1 0 .936l-2.025.76-.759 2.024a.5.5 0 0 1-.936 0l-.76-2.025-2.024-.759a.5.5 0 0 1 0-.936l2.025-.76.759-2.024a.5.5 0 0 1 .936 0ZM18.53 7.591a.75.75 0 0 0 0-1.06L17.47 5.47a.75.75 0 0 0-1.061 0l-1.94 1.939a.75.75 0 0 0 0 1.06L15.53 9.53a.75.75 0 0 0 1.061 0l1.94-1.939Zm-4 4a.75.75 0 0 0 0-1.06L13.47 9.47a.75.75 0 0 0-1.061 0l-9.94 9.939a.75.75 0 0 0 0 1.06L3.53 21.53a.75.75 0 0 0 1.061 0l9.94-9.939Zm6.197 1.682-.759-2.025a.5.5 0 0 0-.936 0l-.76 2.025-2.024.759a.5.5 0 0 0 0 .936l2.024.76.76 2.024a.5.5 0 0 0 .936 0l.76-2.025 2.024-.759a.5.5 0 0 0 0-.936l-2.025-.76ZM10.734 1.624l.448 1.194 1.194.448a.25.25 0 0 1 0 .468l-1.194.448-.448 1.194a.25.25 0 0 1-.468 0l-.448-1.194-1.194-.448a.25.25 0 0 1 0-.468l1.194-.448.448-1.194a.25.25 0 0 1 .468 0Z",
                        clipRule: "evenodd",
                        className: c
                    })
                }))
            }));
            var x = r(34225),
                v = r(652591),
                w = r(177179),
                I = r(2590),
                L = r(458947),
                N = r(473708),
                _ = r(708989),
                E = r.n(_);

            function M(e) {
                var t = e.guildId,
                    O = e.transitionState,
                    f = e.onClose,
                    p = e.analyticsType,
                    m = void 0 === p ? i.z$.APP_DIRECTORY_UPSELL_MODAL : p;
                o.useEffect((function() {
                    v.default.track(I.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.z$[m],
                        guild_id: t
                    })
                }), [t, m]);
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: O,
                    className: E().modal,
                    size: l.ModalSize.SMALL,
                    children: [(0, n.jsxs)(l.ModalContent, {
                        className: E().modalContent,
                        children: [(0, n.jsx)(c.Z, {
                            autoplay: !0,
                            shouldAnimate: !s.Z.useReducedMotion,
                            importData: function() {
                                return r.e(51459).then(r.t.bind(r, 251459, 19))
                            },
                            className: E().animation
                        }), (0, n.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: N.Z.Messages.APP_DIRECTORY_IPP_HEADER
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            className: E().subheader,
                            color: "text-muted",
                            children: N.Z.Messages.APP_DIRECTORY_IPP_SECONDARY_HEADER
                        }), (0, n.jsxs)("ul", {
                            className: E().listContainer,
                            children: [(0, n.jsxs)("li", {
                                className: E().listItem,
                                children: [(0, n.jsx)(P, {
                                    className: E().wandIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, n.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: N.Z.Messages.APP_DIRECTORY_IPP_CUSTOMIZATION
                                })]
                            }), (0, n.jsx)(x.Z, {
                                className: E().divider
                            }), (0, n.jsxs)("li", {
                                className: E().listItem,
                                children: [(0, n.jsx)(d.Z, {
                                    className: E().robotIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, n.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: N.Z.Messages.APP_DIRECTORY_IPP_AUTOMATION
                                })]
                            }), (0, n.jsx)(x.Z, {
                                className: E().divider
                            }), (0, n.jsxs)("li", {
                                className: E().listItem,
                                children: [(0, n.jsx)(u.Z, {
                                    className: E().smileIcon,
                                    height: "24",
                                    width: "24"
                                }), (0, n.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: N.Z.Messages.APP_DIRECTORY_IPP_FUN
                                })]
                            })]
                        })]
                    }), (0, n.jsxs)(l.ModalFooter, {
                        className: E().modalFooter,
                        children: [(0, n.jsx)(l.Button, {
                            onClick: function() {
                                f();
                                (0, a.EW)(m, {
                                    forceTrack: !0,
                                    dismissAction: L.L.PRIMARY,
                                    guildId: t
                                });
                                (0, w.goToAppDirectory)({
                                    guildId: t,
                                    entrypoint: "Application Directory Upsell Modal"
                                })
                            },
                            children: N.Z.Messages.GUILD_EVENT_UPSELL_PRIMARY_CTA
                        }), (0, n.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            onClick: function() {
                                f();
                                (0, a.EW)(m, {
                                    forceTrack: !0,
                                    dismissAction: L.L.SECONDARY,
                                    guildId: t
                                })
                            },
                            color: l.Button.Colors.PRIMARY,
                            children: N.Z.Messages.NOT_NOW
                        })]
                    })]
                })
            }
        }
    }
]);