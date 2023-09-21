"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53685], {
        628177: (e, r, t) => {
            t.d(r, {
                c: () => S
            });
            var n = t(773011),
                o = t(61209),
                l = t(840922),
                i = t(473903),
                c = t(436622),
                u = t(785893),
                a = (t(667294), t(633878));

            function s(e, r, t) {
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

            function f(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function d(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    n = e.height,
                    o = void 0 === n ? 24 : n,
                    l = e.color,
                    i = void 0 === l ? "currentColor" : l,
                    c = f(e, ["width", "height", "color"]);
                return (0, u.jsxs)("svg", O(function(e) {
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
                }({}, (0, a.Z)(c)), {
                    width: t,
                    height: o,
                    fill: "None",
                    viewBox: "0 0 24 24",
                    children: [(0, u.jsx)("path", {
                        d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                        stroke: i,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, u.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                        fill: i
                    })]
                }))
            }
            var j = t(357566),
                b = t(127661),
                p = t(292327),
                _ = t(515222),
                C = t(473708),
                L = function(e) {
                    return e !== p.jj.QUARANTINE_USER
                },
                h = function(e) {
                    switch (e) {
                        case p.jj.BLOCK_MESSAGE:
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case p.jj.FLAG_TO_CHANNEL:
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case p.jj.USER_COMMUNICATION_DISABLED:
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case p.jj.QUARANTINE_USER:
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                y = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.fX.KEYWORD;
                    switch (e) {
                        case p.jj.BLOCK_MESSAGE:
                            switch (r) {
                                case p.fX.MENTION_SPAM:
                                    return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case p.fX.ML_SPAM:
                                    return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case p.jj.FLAG_TO_CHANNEL:
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case p.jj.USER_COMMUNICATION_DISABLED:
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case p.jj.QUARANTINE_USER:
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                A = function(e, r) {
                    switch (e) {
                        case p.jj.QUARANTINE_USER:
                        case p.jj.BLOCK_MESSAGE:
                            return null;
                        case p.jj.FLAG_TO_CHANNEL:
                            var t, c = null == r || null === (t = r.metadata) || void 0 === t ? void 0 : t.channelId;
                            if (null == c) return null;
                            var u = o.Z.getChannel(c);
                            if (null == u) return null;
                            var a = (0, n.F6)(u, i.default, l.Z);
                            return C.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: a
                            });
                        case p.jj.USER_COMMUNICATION_DISABLED:
                            var s, O, f = null !== (O = null == r || null === (s = r.metadata) || void 0 === s ? void 0 : s.durationSeconds) && void 0 !== O ? O : 0,
                                d = (0, _.L9)(f);
                            return null == d ? null : C.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: d
                            })
                    }
                },
                g = function(e) {
                    switch (e) {
                        case p.jj.BLOCK_MESSAGE:
                            return b.Z;
                        case p.jj.FLAG_TO_CHANNEL:
                            return c.Z;
                        case p.jj.USER_COMMUNICATION_DISABLED:
                            return j.Z;
                        case p.jj.QUARANTINE_USER:
                            return d
                    }
                };

            function S(e, r, t) {
                return function(e) {
                    switch (e) {
                        case p.jj.BLOCK_MESSAGE:
                        case p.jj.FLAG_TO_CHANNEL:
                        case p.jj.USER_COMMUNICATION_DISABLED:
                        case p.jj.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                }(e) ? {
                    headerText: null !== (n = h(e)) && void 0 !== n ? n : "",
                    descriptionText: null !== (o = y(e, t)) && void 0 !== o ? o : "",
                    helperText: null !== (l = A(e, r)) && void 0 !== l ? l : null,
                    icon: null !== (i = g(e)) && void 0 !== i ? i : b.Z,
                    isEditable: L(e)
                } : null;
                var n, o, l, i
            }
        },
        953685: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => h
            });
            var n = t(785893),
                o = t(667294),
                l = t(202351),
                i = t(882723),
                c = t(773011),
                u = t(61209),
                a = t(5544),
                s = t(840922),
                O = t(473903),
                f = t(443812),
                d = t(628177),
                j = t(473708),
                b = t(415876),
                p = t.n(b);

            function _(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function C(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, o, l = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                l.push(n.value);
                                if (r && l.length === r) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return l
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = function(e) {
                var r = e.guildId,
                    t = e.channel,
                    o = e.onSelectChannel,
                    u = (0, l.Wu)([a.ZP], (function() {
                        return a.ZP.getChannels(r)[a.sH].filter((function(e) {
                            var r = e.channel;
                            return !r.isGuildVocal() && !r.isThread() && !r.isForumLikeChannel()
                        })).map((function(e) {
                            return e.channel
                        }))
                    }), [r]);
                return (0, n.jsx)(i.FormItem, {
                    className: p().channelSelector,
                    required: !0,
                    children: (0, n.jsx)(i.SearchableSelect, {
                        value: null == t ? void 0 : t.id,
                        options: u.map((function(e) {
                            return {
                                value: e.id,
                                label: (0, c.F6)(e, O.default, s.Z, !0)
                            }
                        })),
                        onChange: function(e) {
                            var r = u.find((function(r) {
                                return r.id === e
                            }));
                            o(null != r ? r : void 0)
                        },
                        placeholder: j.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
                    })
                })
            };

            function h(e) {
                var r = e.action,
                    t = e.triggerType,
                    c = e.guildId,
                    a = e.isEdit,
                    s = e.onEditChannel,
                    O = e.onClose,
                    b = e.transitionState,
                    _ = (0, f.Dt)(),
                    h = C(o.useState(r.metadata.channelId), 2),
                    y = h[0],
                    A = h[1],
                    g = C(o.useState(null), 2),
                    S = g[0],
                    v = g[1],
                    N = (0, l.e7)([u.Z], (function() {
                        return u.Z.getChannel(y)
                    }), [y]),
                    E = (0, d.c)(r.type, r, t);
                if (null == E) return null;
                var I = E.headerText;
                return (0, n.jsxs)(i.ModalRoot, {
                    transitionState: b,
                    "aria-labelledby": _,
                    size: i.ModalSize.SMALL,
                    children: [(0, n.jsxs)(i.ModalContent, {
                        className: p().actionContentContainer,
                        children: [(0, n.jsx)(i.Heading, {
                            id: _,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: p().header,
                            children: I
                        }), (0, n.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: j.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
                        }), (0, n.jsx)(L, {
                            guildId: c,
                            channel: N,
                            onSelectChannel: function(e) {
                                null != e && A(e.id)
                            }
                        }), null != S ? (0, n.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: S
                        }) : (0, n.jsx)(i.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: j.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
                        })]
                    }), (0, n.jsxs)(i.ModalFooter, {
                        children: [(0, n.jsx)(i.Button, {
                            onClick: function() {
                                null != y ? s(y) : v(j.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL)
                            },
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.SMALL,
                            children: a ? j.Z.Messages.EDIT : j.Z.Messages.SAVE
                        }), (0, n.jsx)(i.Button, {
                            onClick: function() {
                                O()
                            },
                            color: i.Button.Colors.TRANSPARENT,
                            look: i.Button.Looks.LINK,
                            children: j.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        443812: (e, r, t) => {
            t.d(r, {
                hQ: () => i,
                Dt: () => c,
                FG: () => u
            });
            var n = t(873955),
                o = t.n(n),
                l = t(989824),
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                c = function() {
                    return (0, l.Z)((function() {
                        return i()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(c())
                }
        },
        436622: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(633878));

            function l(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function i(e, r) {
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

            function c(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function u(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    s = e.color,
                    O = void 0 === s ? "currentColor" : s,
                    f = e.className,
                    d = e.foreground,
                    j = c(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", i(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    className: f
                }, (0, o.Z)(j)), {
                    children: (0, n.jsx)("path", {
                        className: d,
                        fill: O,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                    })
                }))
            }
        },
        357566: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(633878));

            function l(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function i(e, r) {
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

            function c(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function u(e) {
                var r = e.color,
                    t = void 0 === r ? "currentColor" : r,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    s = e.width,
                    O = void 0 === s ? 24 : s,
                    f = c(e, ["color", "height", "width"]);
                return (0, n.jsxs)("svg", i(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(f)), {
                    width: O,
                    height: a,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                        fill: t
                    }), (0, n.jsx)("path", {
                        d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                        fill: t
                    })]
                }))
            }
        },
        127661: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(633878));

            function l(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function i(e, r) {
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

            function c(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function u(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    s = e.color,
                    O = void 0 === s ? "currentColor" : s,
                    f = e.foreground,
                    d = e.backgroundColor,
                    j = c(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, n.jsxs)("svg", i(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(j)), {
                    width: t,
                    height: a,
                    viewBox: "0 0 14 14",
                    children: [null != d ? (0, n.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: d
                    }) : null, (0, n.jsx)("path", {
                        fill: O,
                        className: f,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }
        },
        989824: (e, r, t) => {
            t.d(r, {
                Z: () => l
            });
            var n = t(667294),
                o = {};

            function l(e) {
                var r = (0, n.useRef)(o);
                r.current === o && (r.current = e());
                return r.current
            }
        }
    }
]);