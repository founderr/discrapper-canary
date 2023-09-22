"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1025], {
        101025: (e, t, r) => {
            r.r(t);
            r.d(t, {
                useGuildFeedHideItem: () => v,
                useGuildFeedRemoveItem: () => P,
                targetToContext: () => M,
                default: () => S
            });
            var n = r(785893),
                o = (r(667294), r(809784)),
                c = r(318715),
                i = r(882723),
                l = r(971402),
                u = r(112897),
                s = r(274903),
                a = r(979498),
                f = r(893516),
                p = r(480657),
                O = r(664625),
                b = r(682776),
                d = r(813784),
                g = r(378974),
                y = r(571105),
                h = r(2590),
                j = r(473708);

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e, t) {
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

            function v(e, t) {
                return (0, n.jsx)(i.MenuItem, {
                    id: "hide-feed-message",
                    label: j.Z.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
                    action: function(r) {
                        r.stopPropagation();
                        return (0, y.NO)(e, t)
                    },
                    icon: d.Z,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function w(e, t) {
                t ? (0, i.openModal)((function(t) {
                    return (0, n.jsx)(i.ConfirmModal, m(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                E(e, t, r[t])
                            }))
                        }
                        return e
                    }({
                        header: j.Z.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                        confirmText: j.Z.Messages.GUILD_FEED_REMOVE_CONFIRM,
                        cancelText: j.Z.Messages.CANCEL,
                        onConfirm: function() {
                            return (0, y.AT)(e)
                        }
                    }, t), {
                        children: (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: j.Z.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
                        })
                    }))
                })) : (0, y.AT)(e)
            }

            function P(e, t, r) {
                var o = (0,
                        c.ZP)([O.default], (function() {
                        return O.default.getId()
                    })),
                    l = (0, c.ZP)([b.Z], (function() {
                        return b.Z.can(h.Plq.MANAGE_MESSAGES, r)
                    }), [r]);
                if (!(t.author.id === o || l)) return null;
                return (0, n.jsx)(i.MenuItem, {
                    id: "remove-feed-message",
                    label: j.Z.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
                    action: function(t) {
                        t.stopPropagation();
                        var r = !0;
                        t.shiftKey && (r = !1);
                        return w(e, r)
                    },
                    icon: g.Z,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function M(e) {
                for (var t, r, n, c = e;
                    (0, o.k)(c, Node);) {
                    (0, o.k)(c, HTMLImageElement) && null != c.src && (r = c.src);
                    if ((0, o.k)(c, HTMLAnchorElement) && null != c.href) {
                        t = c.href;
                        n = c.textContent
                    }
                    c = c.parentNode
                }
                return {
                    href: t,
                    src: r,
                    textContent: n
                }
            }

            function S(e) {
                var t = e.channel,
                    r = e.message,
                    o = e.messageItem,
                    c = e.target,
                    O = e.onSelect,
                    b = M(c),
                    d = b.href,
                    g = b.src,
                    y = b.textContent,
                    h = (0, a.Z)(r, t),
                    E = (0, p.Z)(null != d ? d : g, y),
                    m = (0, f.Z)(g),
                    w = (0, u.Z)({
                        id: r.id,
                        label: j.Z.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(r.channel_id, "-").concat(r.id)
                    }),
                    S = v(o, t.guild_id),
                    _ = P(o, o.message, t),
                    Z = (0, s.Z)(r, t, {
                        hoist: !1
                    });
                return (0,
                    n.jsxs)(i.Menu, {
                    navId: "message",
                    onClose: l.Zy,
                    "aria-label": j.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: O,
                    children: [(0, n.jsxs)(i.MenuGroup, {
                        children: [S, _, Z]
                    }), (0, n.jsxs)(i.MenuGroup, {
                        children: [h, m, E, w]
                    })]
                })
            }
        },
        378974: (e, t, r) => {
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                c = r(795308),
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

            function u(e, t) {
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
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    s = e.foreground,
                    O = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", f(function(e) {
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
                }({}, (0, i.Z)(O)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("rect", {
                        className: s,
                        x: "2.10049",
                        y: "20.4853",
                        width: "26",
                        height: "2",
                        transform: "rotate(-45 2.10049 20.4853)",
                        fill: u
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                        fill: u
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? c.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    d = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, i.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20Zm-7.202.99a.5.5 0 0 1 .049.75L4.655 15.344a.5.5 0 0 1-.85-.304l-.272-2.712a.457.457 0 0 0-.355-.4C1.52 11.56 1.047 9.425 2.392 8.39l8.389-6.453a2 2 0 0 1 2.438 0l2.286 1.758ZM6.31 22c-.12 0-.169-.141-.084-.226l1.92-1.92a.5.5 0 0 1 .854.353V21a1 1 0 0 1-1 1H6.31Zm8.165-8.475c-.195.195-.191.51-.031.735.35.49.556 1.091.556 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.8l.787-7.871a.457.457 0 0 1 .355-.4c1.657-.369 2.131-2.503.786-3.538l-.782-.602a.5.5 0 0 0-.658.043l-5.693 5.693Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);