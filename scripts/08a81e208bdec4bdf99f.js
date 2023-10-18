"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [42193], {
        959898: (e, t, r) => {
            r.d(t, {
                i: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                l = r(633878);

            function i(e, t, r) {
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

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    O = e.color,
                    f = void 0 === O ? o.Z.colors.INTERACTIVE_NORMAL : O,
                    d = e.colorClass,
                    p = void 0 === d ? "" : d,
                    j = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(j)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
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
        628177: (e, t, r) => {
            r.d(t, {
                c: () => I
            });
            var n = r(773011),
                o = r(61209),
                l = r(840922),
                i = r(473903),
                c = r(436622),
                a = r(785893),
                u = (r(667294), r(168075)),
                s = r(959898),
                O = r(633878);

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t) {
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
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const j = (0, u.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    n = e.height,
                    o = void 0 === n ? 24 : n,
                    l = e.color,
                    i = void 0 === l ? "currentColor" : l,
                    c = p(e, ["width", "height", "color"]);
                return (0,
                    a.jsxs)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            f(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, O.Z)(c)), {
                    width: r,
                    height: o,
                    fill: "None",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                        stroke: i,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }), (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                        fill: i
                    })]
                }))
            }), s.i);
            var b = r(64875),
                y = r(559968),
                _ = r(292327),
                h = r(515222),
                A = r(473708),
                S = function(e) {
                    return e !== _.jj.QUARANTINE_USER
                },
                g = function(e) {
                    switch (e) {
                        case _.jj.BLOCK_MESSAGE:
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case _.jj.FLAG_TO_CHANNEL:
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case _.jj.USER_COMMUNICATION_DISABLED:
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case _.jj.QUARANTINE_USER:
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                C = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.fX.KEYWORD;
                    switch (e) {
                        case _.jj.BLOCK_MESSAGE:
                            switch (t) {
                                case _.fX.MENTION_SPAM:
                                    return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case _.fX.ML_SPAM:
                                    return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case _.jj.FLAG_TO_CHANNEL:
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case _.jj.USER_COMMUNICATION_DISABLED:
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case _.jj.QUARANTINE_USER:
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                v = function(e, t) {
                    switch (e) {
                        case _.jj.QUARANTINE_USER:
                        case _.jj.BLOCK_MESSAGE:
                            return null;
                        case _.jj.FLAG_TO_CHANNEL:
                            var r, c = null == t || null === (r = t.metadata) || void 0 === r ? void 0 : r.channelId;
                            if (null == c) return null;
                            var a = o.Z.getChannel(c);
                            if (null == a) return null;
                            var u = (0, n.F6)(a, i.default, l.Z);
                            return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: u
                            });
                        case _.jj.USER_COMMUNICATION_DISABLED:
                            var s, O, f = null !== (O = null == t || null === (s = t.metadata) || void 0 === s ? void 0 : s.durationSeconds) && void 0 !== O ? O : 0,
                                d = (0, h.L9)(f);
                            return null == d ? null : A.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: d
                            })
                    }
                },
                E = function(e) {
                    switch (e) {
                        case _.jj.BLOCK_MESSAGE:
                            return y.Z;
                        case _.jj.FLAG_TO_CHANNEL:
                            return c.Z;
                        case _.jj.USER_COMMUNICATION_DISABLED:
                            return b.Z;
                        case _.jj.QUARANTINE_USER:
                            return j
                    }
                };

            function I(e, t, r) {
                return function(e) {
                    switch (e) {
                        case _.jj.BLOCK_MESSAGE:
                        case _.jj.FLAG_TO_CHANNEL:
                        case _.jj.USER_COMMUNICATION_DISABLED:
                        case _.jj.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                }(e) ? {
                    headerText: null !== (n = g(e)) && void 0 !== n ? n : "",
                    descriptionText: null !== (o = C(e, r)) && void 0 !== o ? o : "",
                    helperText: null !== (l = v(e, t)) && void 0 !== l ? l : null,
                    icon: null !== (i = E(e)) && void 0 !== i ? i : y.Z,
                    isEditable: S(e)
                } : null;
                var n, o, l, i
            }
        },
        242193: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => j
            });
            var n = r(785893),
                o = r(667294),
                l = r(70418),
                i = r(443812),
                c = r(628177),
                a = r(515222),
                u = r(473708),
                s = r(659673),
                O = r.n(s);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, l = [],
                            i = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e) {
                var t, r = e.duration,
                    o = e.onSelectDuration,
                    i = (0, a.tr)(),
                    c = i.find((function(e) {
                        return e.value === r
                    }));
                return (0, n.jsx)(l.FormItem, {
                    className: O().durationSelector,
                    required: !0,
                    children: (0, n.jsx)(l.SearchableSelect, {
                        value: null !== (t = null == c ? void 0 : c.value) && void 0 !== t ? t : a.UK.DURATION_60_SEC,
                        options: i,
                        onChange: function(e) {
                            var t = i.find((function(t) {
                                return t.value === e
                            }));
                            null != t && o(t.value)
                        },
                        placeholder: u.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
                    })
                })
            };

            function j(e) {
                var t = e.action,
                    r = e.triggerType,
                    s = e.isEdit,
                    f = e.onUpdateDuration,
                    j = e.onClose,
                    b = e.transitionState,
                    y = (0, i.Dt)(),
                    _ = d(o.useState((function() {
                        return null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : a.UK.DURATION_60_SEC
                    })), 2),
                    h = _[0],
                    A = _[1],
                    S = (0, c.c)(t.type, t, r);
                if (null == S) return null;
                var g = S.headerText;
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: b,
                    "aria-labelledby": y,
                    size: l.ModalSize.SMALL,
                    children: [(0, n.jsxs)(l.ModalContent, {
                        className: O().actionContentContainer,
                        children: [(0, n.jsx)(l.Heading, {
                            id: y,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: O().header,
                            children: g
                        }), (0, n.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: u.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
                        }), (0, n.jsx)(p, {
                            duration: h,
                            onSelectDuration: function(e) {
                                A(e)
                            }
                        })]
                    }), (0, n.jsxs)(l.ModalFooter, {
                        children: [(0, n.jsx)(l.Button, {
                            onClick: function() {
                                f(h)
                            },
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.SMALL,
                            children: s ? u.Z.Messages.EDIT : u.Z.Messages.SAVE
                        }), (0, n.jsx)(l.Button, {
                            onClick: function() {
                                j()
                            },
                            color: l.Button.Colors.TRANSPARENT,
                            look: l.Button.Looks.LINK,
                            children: u.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        64875: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                l = r(795308),
                i = r(633878);

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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e, t) {
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

            function f(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.color,
                    r = void 0 === t ? "currentColor" : t,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    c = e.width,
                    a = void 0 === c ? 24 : c,
                    u = f(e, ["color", "height", "width"]);
                return (0, n.jsxs)("svg", O(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(u)), {
                    width: a,
                    height: l,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                        fill: r
                    }), (0, n.jsx)("path", {
                        d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                        fill: r
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    O = e.color,
                    f = void 0 === O ? l.Z.colors.INTERACTIVE_NORMAL : O,
                    d = e.colorClass,
                    p = void 0 === d ? "" : d,
                    j = u(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, i.Z)(j)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M12 23c.08 0 .135-.08.111-.157-.22-.715-.166-1.53.285-2.315l2.21-3.851c.174-.302-.067-.724-.313-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.379a.5.5 0 0 0 .146.353l2.561 2.56c.08.08.223.078.28-.02l.368-.64c1.163-2.028 4.127-2.028 5.29 0l.311.54c.218.381.771.311.853-.12.125-.665.191-1.35.191-2.052 0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11Zm6.09-8.373c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        }
    }
]);