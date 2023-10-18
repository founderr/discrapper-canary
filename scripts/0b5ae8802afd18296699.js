"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [87468], {
        87468: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => a
            });
            var r = n(785893),
                o = (n(667294), n(70418)),
                c = n(971402),
                i = n(112897),
                l = n(482507),
                u = n(422906),
                s = n(473708);

            function a(e) {
                var t = e.channel,
                    n = e.channelId,
                    a = e.originalLink,
                    f = e.messageId,
                    p = e.onSelect,
                    O = function(e, t, n) {
                        return null != e ? (0, u.Z)(e, n, t) : (0, r.jsx)(o.MenuItem, {
                            id: "channel-copy-link",
                            label: s.Z.Messages.COPY_LINK,
                            action: function() {
                                (0, l.J)(null != t ? t : "")
                            }
                        })
                    }(t, a, f),
                    b = (0, i.Z)({
                        id: n,
                        label: s.Z.Messages.COPY_ID_CHANNEL
                    });
                return (0, r.jsxs)(o.Menu, {
                    navId: "channel-mention-context",
                    onClose: c.Zy,
                    onSelect: p,
                    "aria-label": s.Z.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
                    children: [(0, r.jsx)(o.MenuGroup, {
                        children: O
                    }, "channel-mention-actions"), (0, r.jsx)(o.MenuGroup, {
                        children: b
                    }, "developer-actions")]
                })
            }
        },
        422906: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(482507)),
                c = n(318715),
                i = n(70418),
                l = n(854602),
                u = n(61209),
                s = n(176758),
                a = n(2590),
                f = n(473708);

            function p(e, t, n) {
                var p = (0, c.ZP)([u.Z], (function() {
                    return u.Z.getChannel(e.parent_id)
                }));
                return (0, r.jsx)(i.MenuItem, {
                    id: "channel-copy-link",
                    label: f.Z.Messages.COPY_LINK,
                    action: function() {
                        e.isForumPost() && (0, l.B)({
                            postId: e.id,
                            location: {
                                section: a.jXE.CONTEXT_MENU
                            }
                        });
                        (0, o.J)((0, s.EO)(e, p, t, n))
                    }
                })
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(70418)),
                c = n(968449),
                i = n(416644),
                l = n(691797);

            function u(e) {
                var t = e.id,
                    n = e.label,
                    u = e.onSuccess,
                    s = e.shiftId,
                    a = e.showIconFirst,
                    f = c.Sb.useSetting();
                if (__OVERLAY__ || !f || !l.wS) return null;
                var p = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: p,
                    label: n,
                    action: function(e) {
                        var n = null != s && e.shiftKey ? s : t;
                        (0, l.JG)(n);
                        null == u || u()
                    },
                    icon: i.Z,
                    showIconFirst: a
                }, p)
            }
        },
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                c = n(795308),
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

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) {
                        n = c[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < c.length; r++) {
                        n = c[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) {
                        n = c[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < c.length; r++) {
                        n = c[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    s = e.foreground,
                    O = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, i.Z)(O)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? c.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    d = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, i.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);