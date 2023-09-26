"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75442], {
        630203: (B, e, t) => {
            t.d(e, {
                _: () => _,
                Z: () => L
            });
            var n = t(785893),
                r = t(667294),
                C = t(294184),
                E = t.n(C),
                F = t(457217),
                o = t(202351),
                i = t(882723),
                l = t(77413),
                D = t(218190),
                c = t(621647),
                u = t(773011),
                a = t(344832),
                s = t(201521),
                f = t(725095),
                A = t(491260),
                d = t(788169),
                p = t(473903),
                y = t(319086),
                b = t(971611),
                h = t(310126),
                m = t(2590),
                v = t(887630),
                O = t.n(v);

            function j(B, e) {
                (null == e || e > B.length) && (e = B.length);
                for (var t = 0, n = new Array(e); t < e; t++) n[t] = B[t];
                return n
            }

            function g(B, e, t) {
                e in B ? Object.defineProperty(B, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : B[e] = t;
                return B
            }

            function w(B) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(B) {
                        return Object.getOwnPropertyDescriptor(t, B).enumerable
                    }))));
                    n.forEach((function(e) {
                        g(B, e, t[e])
                    }))
                }
                return B
            }

            function P(B, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(e)) : function(B, e) {
                    var t = Object.keys(B);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(B);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(B, e).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(B, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return B
            }

            function x(B, e) {
                if (null == B) return {};
                var t, n, r = function(B, e) {
                    if (null == B) return {};
                    var t, n, r = {},
                        C = Object.keys(B);
                    for (n = 0; n < C.length; n++) {
                        t = C[n];
                        e.indexOf(t) >= 0 || (r[t] = B[t])
                    }
                    return r
                }(B, e);
                if (Object.getOwnPropertySymbols) {
                    var C = Object.getOwnPropertySymbols(B);
                    for (n = 0; n < C.length; n++) {
                        t = C[n];
                        e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(B, t) && (r[t] = B[t])
                    }
                }
                return r
            }

            function T(B, e) {
                return function(B) {
                    if (Array.isArray(B)) return B
                }(B) || function(B, e) {
                    var t = null == B ? null : "undefined" != typeof Symbol && B[Symbol.iterator] || B["@@iterator"];
                    if (null != t) {
                        var n, r, C = [],
                            E = !0,
                            F = !1;
                        try {
                            for (t = t.call(B); !(E = (n = t.next()).done); E = !0) {
                                C.push(n.value);
                                if (e && C.length === e) break
                            }
                        } catch (B) {
                            F = !0;
                            r = B
                        } finally {
                            try {
                                E || null == t.return || t.return()
                            } finally {
                                if (F) throw r
                            }
                        }
                        return C
                    }
                }(B, e) || S(B, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(B) {
                return function(B) {
                    if (Array.isArray(B)) return j(B)
                }(B) || function(B) {
                    if ("undefined" != typeof Symbol && null != B[Symbol.iterator] || null != B["@@iterator"]) return Array.from(B)
                }(B) || S(B) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(B, e) {
                if (B) {
                    if ("string" == typeof B) return j(B, e);
                    var t = Object.prototype.toString.call(B).slice(8, -1);
                    "Object" === t && B.constructor && (t = B.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? j(B, e) : void 0
                }
            }
            var k = {
                SELECTED: O().modeSelected,
                CONNECTED: O().modeConnected,
                UNREAD_HIGHLIGHT: O().modeUnread,
                UNREAD: O().modeUnreadNormal,
                MUTED: O().modeMuted,
                LOCKED: O().modeLocked
            };

            function I(B) {
                B.preventDefault();
                B.stopPropagation()
            }

            function R(B) {
                switch (B) {
                    case m.d4z.GUILD_STAGE_VOICE:
                    case m.d4z.GUILD_VOICE:
                        return O().typeVoice;
                    case m.d4z.ANNOUNCEMENT_THREAD:
                    case m.d4z.PUBLIC_THREAD:
                    case m.d4z.PRIVATE_THREAD:
                        return O().typeThread;
                    case m.d4z.GUILD_ANNOUNCEMENT:
                    case m.d4z.GUILD_TEXT:
                    case m.d4z.GUILD_STORE:
                    case m.d4z.GUILD_FORUM:
                    case m.d4z.GUILD_MEDIA:
                    default:
                        return O().typeDefault
                }
            }
            var M = h.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

            function Z(B) {
                var e = B.channel;
                return (0, n.jsx)(M, {
                    src: (0, c.x)(e),
                    "aria-hidden": !0,
                    size: i.AvatarSizes.SIZE_20
                })
            }

            function U(B) {
                var e = B.channel,
                    t = (0, o.e7)([p.default], (function() {
                        return p.default.getUser(null == e ? void 0 : e.recipients[0])
                    })),
                    r = (0, o.e7)([d.Z], (function() {
                        return null != t && null != e && !e.isMultiUserDM() && null != d.Z.getTypingUsers(null == e ? void 0 : e.id)[null == t ? void 0 : t.id]
                    })),
                    C = (0, o.cj)([A.Z], (function() {
                        return null == t || null == e || e.isMultiUserDM() ? {
                            status: null,
                            isMobile: !1
                        } : {
                            status: A.Z.getStatus(t.id),
                            isMobile: A.Z.isMobileOnline(t.id)
                        }
                    })),
                    E = C.status,
                    F = C.isMobile;
                return (0, n.jsx)(M, {
                    size: i.AvatarSizes.SIZE_20,
                    src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
                    status: E,
                    isMobile: F,
                    isTyping: r,
                    "aria-label": null == t ? void 0 : t.username,
                    statusTooltip: !0
                })
            }
            var _ = function(B) {
                var e = B.className,
                    t = B.channel,
                    r = B.guild,
                    C = B.locked,
                    F = B.hasActiveThreads,
                    o = function(B, e, t) {
                        switch (B.type) {
                            case m.d4z.DM:
                                return function() {
                                    return (0, n.jsx)(U, {
                                        channel: B
                                    })
                                };
                            case m.d4z.GROUP_DM:
                                return function() {
                                    return (0, n.jsx)(Z, {
                                        channel: B
                                    })
                                };
                            default:
                                return (0, a.KS)(B, e, t)
                        }
                    }(t, r, {
                        locked: C,
                        hasActiveThreads: F
                    });
                if (null == o) return null;
                var l = (0, a.bT)(t, r, C, F);
                return (0, n.jsx)(i.Tooltip, {
                    text: l,
                    delay: 500,
                    children: function(B) {
                        return (0, n.jsx)("div", P(w({}, B), {
                            role: "img",
                            className: O().iconContainer,
                            children: (0, n.jsx)(o, {
                                className: E()(O().icon, e)
                            })
                        }))
                    }
                })
            };

            function L(B) {
                var e, t, C, o, c = B.channel,
                    a = B.name,
                    A = B.muted,
                    d = B.selected,
                    p = B.connected,
                    h = B.unread,
                    v = B.canHaveDot,
                    j = B.mentionCount,
                    S = B.relevant,
                    M = B.locked,
                    Z = B.hasActiveThreads,
                    U = B.onClick,
                    L = B.onMouseDown,
                    z = B.onMouseUp,
                    G = B.onContextMenu,
                    H = B.connectDragPreview,
                    K = B.className,
                    V = B.iconClassName,
                    X = B.subtitle,
                    J = B.subtitleColor,
                    Y = B.channel.type,
                    W = B.onMouseEnter,
                    $ = B.onMouseLeave,
                    q = B["aria-label"],
                    Q = B.children,
                    BB = B.guild,
                    eB = B.channelTypeOverride,
                    tB = B.forceInteractable,
                    nB = B.isFavoriteSuggestion,
                    rB = (0, F.JA)(c.id),
                    CB = (rB.role, x(rB, ["role"])),
                    EB = r.useRef(null),
                    FB = r.useRef(null),
                    oB = (0, s.Z)(c),
                    iB = m.Z5c.CHANNEL(oB, c.id),
                    lB = (0, u.ZP)(c),
                    DB = c.isGuildVocal(),
                    cB = DB && !p,
                    uB = D.G.useExperiment({
                        location: "337985_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    aB = uB.enabled,
                    sB = uB.left,
                    fB = r.useContext(i.AccessibilityPreferencesContext).reducedMotion.enabled,
                    AB = T(r.useState([]), 2),
                    dB = AB[0],
                    pB = AB[1];
                t = dB.length, C = 500, o = function() {
                        pB([])
                    },
                    r.useLayoutEffect((function() {
                        var B = null;
                        if (t > 0) {
                            clearTimeout(B);
                            B = setTimeout((function() {
                                o();
                                clearTimeout(B)
                            }), 4 * C)
                        }
                        return function() {
                            return clearTimeout(B)
                        }
                    }), [t, C, o]);
                var yB, bB, hB = null === (e = (0, f.Z)(c.id, !aB)) || void 0 === e ? void 0 : e.name,
                    mB = null != hB ? (0, n.jsx)(l.Z, {
                        emojiName: hB,
                        className: O().twemoji
                    }) : null,
                    vB = (0, f.s)(hB, c.id),
                    OB = null != U || null != z || null != L || tB,
                    jB = (0, n.jsx)("div", {
                        className: E()(g({}, O().favoritesSuggestion, nB)),
                        children: (0, n.jsxs)(y.Z, P(w({
                            role: cB ? "button" : "link",
                            href: DB ? void 0 : iB,
                            ref: EB,
                            className: E()(O().link, g({}, O().linkWithChannelEmoji, null != mB)),
                            onMouseDown: function(B) {
                                aB && 0 === B.button && function(B) {
                                    if (!fB) {
                                        var e = B.currentTarget.getBoundingClientRect(),
                                            t = e.width > e.height ? e.width : e.height,
                                            n = {
                                                x: B.pageX - e.x - t / 2,
                                                y: B.pageY - e.y - t / 2,
                                                size: t
                                            };
                                        pB(N(dB).concat([n]))
                                    }
                                }(B)
                            },
                            onClick: function() {
                                return null == U ? void 0 : U(c)
                            }
                        }, CB), {
                            "aria-label": q,
                            focusProps: {
                                enabled: !1
                            },
                            children: [aB && (0, n.jsx)("div", {
                                className: O().emojiColorFill,
                                style: {
                                    backgroundColor: vB,
                                    opacity: d ? 1 : 0
                                }
                            }), (0,
                                n.jsxs)("div", {
                                className: O().linkTop,
                                children: [null != mB && sB && (0, n.jsx)("div", {
                                    className: E()(O().channelEmoji, O().channelEmojiLeftOfIcon),
                                    style: {
                                        backgroundColor: vB
                                    },
                                    children: mB
                                }), (0, n.jsx)(_, {
                                    className: V,
                                    channel: c,
                                    guild: BB,
                                    hasActiveThreads: Z,
                                    locked: M
                                }), null != mB && !sB && (0, n.jsx)("div", {
                                    className: E()(O().channelEmoji, O().channelEmojiRightOfIcon),
                                    style: {
                                        backgroundColor: vB
                                    },
                                    children: mB
                                }), (0, n.jsx)(b.Z, {
                                    className: E()(O().name),
                                    "aria-hidden": !0,
                                    children: null == a ? lB : a
                                }), r.Children.count(Q) > 0 ? (0, n.jsx)("div", {
                                    onClick: I,
                                    className: O().children,
                                    children: Q
                                }) : null]
                            }), null != X ? (0, n.jsx)("div", {
                                className: O().linkBottom,
                                children: (0, n.jsx)(i.Text, {
                                    color: null != J ? J : "text-muted",
                                    variant: "text-xs/medium",
                                    className: O().subtitle,
                                    children: X
                                })
                            }) : null, aB && dB.length > 0 && dB.map((function(B, e) {
                                return (0, n.jsx)("span", {
                                    className: O().ripple,
                                    style: {
                                        top: B.y,
                                        left: B.x,
                                        width: B.size,
                                        height: B.size,
                                        backgroundColor: vB,
                                        animationDuration: "".concat(500, "ms"),
                                        opacity: .36
                                    }
                                }, "ripple-".concat(e))
                            }))]
                        }))
                    });
                return (0, n.jsx)(i.FocusRing, {
                    focusTarget: EB,
                    ringTarget: FB,
                    offset: {
                        top: 2,
                        bottom: 2,
                        right: 4
                    },
                    children: (0, n.jsxs)("div", {
                        className: E()(K, OB ? O().wrapper : O().notInteractive, (bB = null != hB, d && !bB ? k.SELECTED : p ? k.CONNECTED : M ? k.LOCKED : A ? k.MUTED : h ? S || null != j && j > 0 ? k.UNREAD_HIGHLIGHT : k.UNREAD : null), R(null != eB ? eB : Y)),
                        onMouseUp: function(B) {
                            return null == z ? void 0 : z(B, c)
                        },
                        onMouseDown: function(B) {
                            return null == L ? void 0 : L(B, c)
                        },
                        onContextMenu: function(B) {
                            return null == G ? void 0 : G(B, c)
                        },
                        onMouseEnter: W,
                        onMouseLeave: $,
                        children: [A || !v || !h || d && !DB ? null : (0, n.jsx)("div", {
                            className: E()(O().unread, (S || (null != j ? j : 0) > 0) && O().unreadRelevant)
                        }), null !== (yB = null == H ? void 0 : H(jB)) && void 0 !== yB ? yB : jB]
                    })
                })
            }
        },
        725095: (B, e, t) => {
            t.d(e, {
                Z: () => l,
                s: () => D
            });
            var n = t(667294),
                r = t(202351),
                C = t(74535),
                E = t(61209),
                F = t(362660);
            const o = Object.freeze({
                "😀": "#E67E22",
                "😃": "#E67E22",
                "😄": "#E67E22",
                "😁": "#E67E22",
                "😆": "#E67E22",
                "😅": "#E67E22",
                "🤣": "#F1C40F",
                "😂": "#E67E22",
                "🙂": "#F1C40F",
                "🙃": "#F1C40F",
                "🫠": "#F1C40F",
                "😉": "#F1C40F",
                "😊": "#F1C40F",
                "😇": "#3498DB",
                "🥰": "#F1C40F",
                "😍": "#E67E22",
                "🤩": "#E67E22",
                "😘": "#F1C40F",
                "😗": "#F1C40F",
                "☺️": "#607D8B",
                "😚": "#F1C40F",
                "😙": "#F1C40F",
                "🥲": "#F1C40F",
                "😋": "#F1C40F",
                "😛": "#F1C40F",
                "😜": "#F1C40F",
                "🤪": "#E67E22",
                "😝": "#F1C40F",
                "🤑": "#F1C40F",
                "🤗": "#E67E22",
                "🤭": "#F1C40F",
                "🫢": "#F1C40F",
                "🫣": "#F1C40F",
                "🤫": "#F1C40F",
                "🤔": "#F1C40F",
                "🫡": "#F1C40F",
                "🤐": "#F1C40F",
                "🤨": "#F1C40F",
                "😐": "#F1C40F",
                "😑": "#F1C40F",
                "😶": "#F1C40F",
                "🫥": "#F1C40F",
                "😶‍🌫️": "#9B59B6",
                "😏": "#F1C40F",
                "😒": "#F1C40F",
                "🙄": "#E67E22",
                "😬": "#9B59B6",
                "😮‍💨": "#F1C40F",
                "🤥": "#F1C40F",
                "😌": "#F1C40F",
                "😔": "#F1C40F",
                "😪": "#F1C40F",
                "🤤": "#F1C40F",
                "😴": "#F1C40F",
                "😷": "#9B59B6",
                "🤒": "#E67E22",
                "🤕": "#9B59B6",
                "🤢": "#E67E22",
                "🤮": "#11806A",
                "🤧": "#9B59B6",
                "🥵": "#E67E22",
                "🥶": "#3498DB",
                "🥴": "#F1C40F",
                "😵": "#F1C40F",
                "😵‍💫": "#F1C40F",
                "🤯": "#E67E22",
                "🤠": "#E67E22",
                "🥳": "#F1C40F",
                "🥸": "#E67E22",
                "😎": "#11806A",
                "🤓": "#E67E22",
                "🧐": "#F1C40F",
                "😕": "#F1C40F",
                "🫤": "#F1C40F",
                "😟": "#F1C40F",
                "🙁": "#F1C40F",
                "☹️": "#F1C40F",
                "😮": "#F1C40F",
                "😯": "#F1C40F",
                "😲": "#F1C40F",
                "😳": "#E67E22",
                "🥺": "#F1C40F",
                "🥹": "#F1C40F",
                "😦": "#F1C40F",
                "😧": "#F1C40F",
                "😨": "#5865F2",
                "😰": "#E67E22",
                "😥": "#F1C40F",
                "😢": "#F1C40F",
                "😭": "#F1C40F",
                "😱": "#9B59B6",
                "😖": "#F1C40F",
                "😣": "#F1C40F",
                "😞": "#F1C40F",
                "😓": "#F1C40F",
                "😩": "#F1C40F",
                "😫": "#F1C40F",
                "🥱": "#F1C40F",
                "😤": "#F1C40F",
                "😡": "#E67E22",
                "😠": "#F1C40F",
                "🤬": "#992D22",
                "😈": "#9B59B6",
                "👿": "#9B59B6",
                "💀": "#9B59B6",
                "☠️": "#9B59B6",
                "💩": "#992D22",
                "🤡": "#9B59B6",
                "👹": "#E74C3C",
                "👺": "#E74C3C",
                "👻": "#9B59B6",
                "👽": "#9B59B6",
                "👾": "#9B59B6",
                "🤖": "#607D8B",
                "😺": "#E67E22",
                "😸": "#E67E22",
                "😹": "#E67E22",
                "😻": "#E67E22",
                "😼": "#E67E22",
                "😽": "#E67E22",
                "🙀": "#E67E22",
                "😿": "#E67E22",
                "😾": "#E67E22",
                "🙈": "#E67E22",
                "🙉": "#E67E22",
                "🙊": "#E67E22",
                "💋": "#992D22",
                "💌": "#9B59B6",
                "💘": "#3498DB",
                "💝": "#E91E63",
                "💖": "#E91E63",
                "💗": "#E91E63",
                "💓": "#E91E63",
                "💞": "#E91E63",
                "💕": "#E91E63",
                "💟": "#9B59B6",
                "❣️": "#E74C3C",
                "💔": "#E74C3C",
                "❤️‍🔥": "#E74C3C",
                "❤️‍🩹": "#9B59B6",
                "❤️": "#E74C3C",
                "🧡": "#E67E22",
                "💛": "#F1C40F",
                "💚": "#11806A",
                "💙": "#3498DB",
                "💜": "#9B59B6",
                "🤎": "#992D22",
                "🖤": "#607D8B",
                "🤍": "#9B59B6",
                "💯": "#992D22",
                "💢": "#E74C3C",
                "💥": "#E74C3C",
                "💫": "#F1C40F",
                "💦": "#9B59B6",
                "💨": "#9B59B6",
                "🕳️": "#9B59B6",
                "💣": "#11806A",
                "💬": "#9B59B6",
                "👁️‍🗨️": "#11806A",
                "🗨️": "#206694",
                "🗯️": "#9B59B6",
                "💭": "#9B59B6",
                "💤": "#206694",
                "👋": "#F1C40F",
                "🤚": "#F1C40F",
                "🖐️": "#F1C40F",
                "✋": "#F1C40F",
                "🖖": "#F1C40F",
                "🫱": "#F1C40F",
                "🫲": "#F1C40F",
                "🫳": "#F1C40F",
                "🫴": "#F1C40F",
                "👌": "#F1C40F",
                "🤌": "#F1C40F",
                "🤏": "#E67E22",
                "✌️": "#F1C40F",
                "🤞": "#F1C40F",
                "🫰": "#F1C40F",
                "🤟": "#F1C40F",
                "🤘": "#F1C40F",
                "🤙": "#F1C40F",
                "👈": "#F1C40F",
                "👉": "#F1C40F",
                "👆": "#F1C40F",
                "🖕": "#F1C40F",
                "👇": "#E67E22",
                "☝️": "#F1C40F",
                "🫵": "#F1C40F",
                "👍": "#F1C40F",
                "👎": "#F1C40F",
                "✊": "#F1C40F",
                "👊": "#E67E22",
                "🤛": "#F1C40F",
                "🤜": "#E67E22",
                "👏": "#F1C40F",
                "🙌": "#F1C40F",
                "🫶": "#E67E22",
                "👐": "#F1C40F",
                "🤲": "#F1C40F",
                "🤝": "#F1C40F",
                "🙏": "#F1C40F",
                "✍️": "#607D8B",
                "💅": "#F1C40F",
                "🤳": "#9B59B6",
                "💪": "#F1C40F",
                "🦾": "#11806A",
                "🦿": "#9B59B6",
                "🦵": "#E67E22",
                "🦶": "#F1C40F",
                "👂": "#F1C40F",
                "🦻": "#F1C40F",
                "👃": "#F1C40F",
                "🧠": "#9B59B6",
                "🫀": "#E74C3C",
                "🫁": "#E74C3C",
                "🦷": "#9B59B6",
                "🦴": "#9B59B6",
                "👀": "#9B59B6",
                "👁️": "#9B59B6",
                "👅": "#9B59B6",
                "👄": "#E74C3C",
                "🫦": "#E74C3C",
                "👶": "#F1C40F",
                "🧒": "#F1C40F",
                "👦": "#F1C40F",
                "👧": "#F1C40F",
                "🧑": "#F1C40F",
                "👱": "#F1C40F",
                "👨": "#F1C40F",
                "🧔": "#F1C40F",
                "🧔‍♂️": "#F1C40F",
                "🧔‍♀️": "#E67E22",
                "👨‍🦰": "#F1C40F",
                "👨‍🦱": "#F1C40F",
                "👨‍🦳": "#F1C40F",
                "👨‍🦲": "#F1C40F",
                "👩": "#F1C40F",
                "👩‍🦰": "#E67E22",
                "🧑‍🦰": "#F1C40F",
                "👩‍🦱": "#F1C40F",
                "🧑‍🦱": "#F1C40F",
                "👩‍🦳": "#F1C40F",
                "🧑‍🦳": "#F1C40F",
                "👩‍🦲": "#F1C40F",
                "🧑‍🦲": "#F1C40F",
                "👱‍♀️": "#F1C40F",
                "👱‍♂️": "#F1C40F",
                "🧓": "#F1C40F",
                "👴": "#F1C40F",
                "👵": "#F1C40F",
                "🙍": "#F1C40F",
                "🙍‍♂️": "#206694",
                "🙍‍♀️": "#F1C40F",
                "🙎": "#F1C40F",
                "🙎‍♂️": "#F1C40F",
                "🙎‍♀️": "#E67E22",
                "🙅": "#9B59B6",
                "🙅‍♂️": "#3498DB",
                "🙅‍♀️": "#992D22",
                "🙆": "#9B59B6",
                "🙆‍♂️": "#206694",
                "🙆‍♀️": "#992D22",
                "💁": "#F1C40F",
                "💁‍♂️": "#F1C40F",
                "💁‍♀️": "#F1C40F",
                "🙋": "#F1C40F",
                "🙋‍♂️": "#F1C40F",
                "🙋‍♀️": "#9B59B6",
                "🧏": "#F1C40F",
                "🧏‍♂️": "#206694",
                "🧏‍♀️": "#E67E22",
                "🙇": "#F1C40F",
                "🙇‍♂️": "#206694",
                "🙇‍♀️": "#992D22",
                "🤦": "#9B59B6",
                "🤦‍♂️": "#206694",
                "🤦‍♀️": "#992D22",
                "🤷": "#E67E22",
                "🤷‍♂️": "#F1C40F",
                "🤷‍♀️": "#992D22",
                "🧑‍⚕️": "#9B59B6",
                "👨‍⚕️": "#F1C40F",
                "👩‍⚕️": "#9B59B6",
                "🧑‍🎓": "#F1C40F",
                "👨‍🎓": "#F1C40F",
                "👩‍🎓": "#E67E22",
                "🧑‍🏫": "#E67E22",
                "👨‍🏫": "#E67E22",
                "👩‍🏫": "#E67E22",
                "🧑‍⚖️": "#F1C40F",
                "👨‍⚖️": "#F1C40F",
                "👩‍⚖️": "#E67E22",
                "🧑‍🌾": "#992D22",
                "👨‍🌾": "#E67E22",
                "👩‍🌾": "#992D22",
                "🧑‍🍳": "#E67E22",
                "👨‍🍳": "#E67E22",
                "👩‍🍳": "#E67E22",
                "🧑‍🔧": "#5865F2",
                "👨‍🔧": "#206694",
                "👩‍🔧": "#5865F2",
                "🧑‍🏭": "#F1C40F",
                "👨‍🏭": "#F1C40F",
                "👩‍🏭": "#F1C40F",
                "🧑‍💼": "#F1C40F",
                "👨‍💼": "#F1C40F",
                "👩‍💼": "#F1C40F",
                "🧑‍🔬": "#9B59B6",
                "👨‍🔬": "#9B59B6",
                "👩‍🔬": "#9B59B6",
                "🧑‍💻": "#9B59B6",
                "👨‍💻": "#9B59B6",
                "👩‍💻": "#9B59B6",
                "🧑‍🎤": "#1ABC9C",
                "👨‍🎤": "#206694",
                "👩‍🎤": "#9B59B6",
                "🧑‍🎨": "#E67E22",
                "👨‍🎨": "#E67E22",
                "👩‍🎨": "#E67E22",
                "🧑‍✈️": "#992D22",
                "👨‍✈️": "#F1C40F",
                "👩‍✈️": "#992D22",
                "🧑‍🚀": "#9B59B6",
                "👨‍🚀": "#9B59B6",
                "👩‍🚀": "#9B59B6",
                "🧑‍🚒": "#992D22",
                "👨‍🚒": "#992D22",
                "👩‍🚒": "#992D22",
                "👮": "#F1C40F",
                "👮‍♂️": "#F1C40F",
                "👮‍♀️": "#F1C40F",
                "🕵️": "#992D22",
                "🕵️‍♂️": "#992D22",
                "🕵️‍♀️": "#992D22",
                "💂": "#E67E22",
                "💂‍♂️": "#E67E22",
                "💂‍♀️": "#E67E22",
                "🥷": "#11806A",
                "👷": "#F1C40F",
                "👷‍♂️": "#F1C40F",
                "👷‍♀️": "#F1C40F",
                "🫅": "#E67E22",
                "🤴": "#F1C40F",
                "👸": "#F1C40F",
                "👳": "#F1C40F",
                "👳‍♂️": "#9B59B6",
                "👳‍♀️": "#F1C40F",
                "👲": "#992D22",
                "🧕": "#206694",
                "🤵": "#F1C40F",
                "🤵‍♂️": "#992D22",
                "🤵‍♀️": "#E67E22",
                "👰": "#F1C40F",
                "👰‍♂️": "#F1C40F",
                "👰‍♀️": "#F1C40F",
                "🤰": "#9B59B6",
                "🫃": "#E67E22",
                "🫄": "#9B59B6",
                "🤱": "#992D22",
                "👩‍🍼": "#992D22",
                "👨‍🍼": "#E67E22",
                "🧑‍🍼": "#E67E22",
                "👼": "#F1C40F",
                "🎅": "#9B59B6",
                "🤶": "#9B59B6",
                "🧑‍🎄": "#E67E22",
                "🦸": "#E67E22",
                "🦸‍♂️": "#E67E22",
                "🦸‍♀️": "#E67E22",
                "🦹": "#F1C40F",
                "🦹‍♂️": "#F1C40F",
                "🦹‍♀️": "#E67E22",
                "🧙": "#992D22",
                "🧙‍♂️": "#992D22",
                "🧙‍♀️": "#992D22",
                "🧚": "#E67E22",
                "🧚‍♂️": "#E67E22",
                "🧚‍♀️": "#3498DB",
                "🧛": "#F1C40F",
                "🧛‍♂️": "#607D8B",
                "🧛‍♀️": "#E67E22",
                "🧜": "#206694",
                "🧜‍♂️": "#E67E22",
                "🧜‍♀️": "#9B59B6",
                "🧝": "#11806A",
                "🧝‍♂️": "#F1C40F",
                "🧝‍♀️": "#9B59B6",
                "🧞": "#206694",
                "🧞‍♂️": "#3498DB",
                "🧞‍♀️": "#9B59B6",
                "🧟": "#11806A",
                "🧟‍♂️": "#11806A",
                "🧟‍♀️": "#11806A",
                "🧌": "#992D22",
                "💆": "#F1C40F",
                "💆‍♂️": "#F1C40F",
                "💆‍♀️": "#F1C40F",
                "💇": "#F1C40F",
                "💇‍♂️": "#F1C40F",
                "💇‍♀️": "#F1C40F",
                "🚶": "#206694",
                "🚶‍♂️": "#206694",
                "🚶‍♀️": "#206694",
                "🧍": "#9B59B6",
                "🧍‍♂️": "#992D22",
                "🧍‍♀️": "#F1C40F",
                "🧎": "#E67E22",
                "🧎‍♂️": "#F1C40F",
                "🧎‍♀️": "#E67E22",
                "🧑‍🦯": "#206694",
                "👨‍🦯": "#206694",
                "👩‍🦯": "#206694",
                "🧑‍🦼": "#11806A",
                "👨‍🦼": "#992D22",
                "👩‍🦼": "#992D22",
                "🧑‍🦽": "#11806A",
                "👨‍🦽": "#11806A",
                "👩‍🦽": "#206694",
                "🏃": "#F1C40F",
                "🏃‍♂️": "#206694",
                "🏃‍♀️": "#3498DB",
                "💃": "#F1C40F",
                "🕺": "#992D22",
                "🕴️": "#607D8B",
                "👯": "#E67E22",
                "👯‍♂️": "#992D22",
                "👯‍♀️": "#E67E22",
                "🧖": "#9B59B6",
                "🧖‍♂️": "#9B59B6",
                "🧖‍♀️": "#F1C40F",
                "🧗": "#9B59B6",
                "🧗‍♂️": "#9B59B6",
                "🧗‍♀️": "#9B59B6",
                "🤺": "#9B59B6",
                "🏇": "#992D22",
                "⛷️": "#992D22",
                "🏂": "#206694",
                "🏌️": "#9B59B6",
                "🏌️‍♂️": "#607D8B",
                "🏌️‍♀️": "#E67E22",
                "🏄": "#E67E22",
                "🏄‍♂️": "#F1C40F",
                "🏄‍♀️": "#9B59B6",
                "🚣": "#E74C3C",
                "🚣‍♂️": "#E74C3C",
                "🚣‍♀️": "#E74C3C",
                "🏊": "#9B59B6",
                "🏊‍♂️": "#9B59B6",
                "🏊‍♀️": "#9B59B6",
                "⛹️": "#E67E22",
                "⛹️‍♂️": "#206694",
                "⛹️‍♀️": "#E67E22",
                "🏋️": "#E67E22",
                "🏋️‍♂️": "#E67E22",
                "🏋️‍♀️": "#992D22",
                "🚴": "#11806A",
                "🚴‍♂️": "#11806A",
                "🚴‍♀️": "#992D22",
                "🚵": "#9B59B6",
                "🚵‍♂️": "#9B59B6",
                "🚵‍♀️": "#992D22",
                "🤸": "#F1C40F",
                "🤸‍♂️": "#206694",
                "🤸‍♀️": "#F1C40F",
                "🤼": "#E67E22",
                "🤼‍♂️": "#E67E22",
                "🤼‍♀️": "#E67E22",
                "🤽": "#E67E22",
                "🤽‍♂️": "#E67E22",
                "🤽‍♀️": "#E67E22",
                "🤾": "#9B59B6",
                "🤾‍♂️": "#E67E22",
                "🤾‍♀️": "#E67E22",
                "🤹": "#E67E22",
                "🤹‍♂️": "#F1C40F",
                "🤹‍♀️": "#E67E22",
                "🧘": "#F1C40F",
                "🧘‍♂️": "#E67E22",
                "🧘‍♀️": "#F1C40F",
                "🛀": "#9B59B6",
                "🛌": "#9B59B6",
                "🧑‍🤝‍🧑": "#9B59B6",
                "👭": "#F1C40F",
                "👫": "#F1C40F",
                "👬": "#E67E22",
                "💏": "#9B59B6",
                "👩‍❤️‍💋‍👨": "#9B59B6",
                "👨‍❤️‍💋‍👨": "#9B59B6",
                "👩‍❤️‍💋‍👩": "#9B59B6",
                "💑": "#9B59B6",
                "👩‍❤️‍👨": "#9B59B6",
                "👨‍❤️‍👨": "#9B59B6",
                "👩‍❤️‍👩": "#9B59B6",
                "👪": "#F1C40F",
                "👨‍👩‍👦": "#206694",
                "👨‍👩‍👧": "#F1C40F",
                "👨‍👩‍👧‍👦": "#F1C40F",
                "👨‍👩‍👦‍👦": "#F1C40F",
                "👨‍👩‍👧‍👧": "#F1C40F",
                "👨‍👨‍👦": "#206694",
                "👨‍👨‍👧": "#F1C40F",
                "👨‍👨‍👧‍👦": "#206694",
                "👨‍👨‍👦‍👦": "#206694",
                "👨‍👨‍👧‍👧": "#F1C40F",
                "👩‍👩‍👦": "#E67E22",
                "👩‍👩‍👧": "#E67E22",
                "👩‍👩‍👧‍👦": "#E67E22",
                "👩‍👩‍👦‍👦": "#F1C40F",
                "👩‍👩‍👧‍👧": "#E67E22",
                "👨‍👦": "#F1C40F",
                "👨‍👦‍👦": "#206694",
                "👨‍👧": "#206694",
                "👨‍👧‍👦": "#F1C40F",
                "👨‍👧‍👧": "#F1C40F",
                "👩‍👦": "#F1C40F",
                "👩‍👦‍👦": "#F1C40F",
                "👩‍👧": "#F1C40F",
                "👩‍👧‍👦": "#F1C40F",
                "👩‍👧‍👧": "#F1C40F",
                "🗣️": "#607D8B",
                "👤": "#607D8B",
                "👥": "#607D8B",
                "🫂": "#607D8B",
                "👣": "#11806A",
                "🐵": "#E67E22",
                "🐒": "#E67E22",
                "🦍": "#206694",
                "🦧": "#992D22",
                "🐶": "#9B59B6",
                "🐕": "#E67E22",
                "🦮": "#E67E22",
                "🐕‍🦺": "#992D22",
                "🐩": "#9B59B6",
                "🐺": "#9B59B6",
                "🦊": "#E67E22",
                "🦝": "#992D22",
                "🐱": "#F1C40F",
                "🐈": "#9B59B6",
                "🐈‍⬛": "#11806A",
                "🦁": "#E67E22",
                "🐯": "#F1C40F",
                "🐅": "#992D22",
                "🐆": "#E67E22",
                "🐴": "#992D22",
                "🐎": "#992D22",
                "🦄": "#9B59B6",
                "🦓": "#206694",
                "🦌": "#E67E22",
                "🦬": "#992D22",
                "🐮": "#9B59B6",
                "🐂": "#E74C3C",
                "🐃": "#992D22",
                "🐄": "#9B59B6",
                "🐷": "#9B59B6",
                "🐖": "#9B59B6",
                "🐗": "#992D22",
                "🐽": "#9B59B6",
                "🐏": "#9B59B6",
                "🐑": "#9B59B6",
                "🐐": "#9B59B6",
                "🐪": "#E67E22",
                "🐫": "#E67E22",
                "🦙": "#9B59B6",
                "🦒": "#E67E22",
                "🐘": "#9B59B6",
                "🦣": "#992D22",
                "🦏": "#9B59B6",
                "🦛": "#9B59B6",
                "🐭": "#9B59B6",
                "🐁": "#9B59B6",
                "🐀": "#9B59B6",
                "🐹": "#9B59B6",
                "🐰": "#9B59B6",
                "🐇": "#9B59B6",
                "🐿️": "#992D22",
                "🦫": "#992D22",
                "🦔": "#992D22",
                "🦇": "#992D22",
                "🐻": "#992D22",
                "🐻‍❄️": "#9B59B6",
                "🐨": "#9B59B6",
                "🐼": "#11806A",
                "🦥": "#992D22",
                "🦦": "#992D22",
                "🦨": "#9B59B6",
                "🦘": "#E67E22",
                "🦡": "#9B59B6",
                "🐾": "#11806A",
                "🦃": "#992D22",
                "🐔": "#E74C3C",
                "🐓": "#9B59B6",
                "🐣": "#F1C40F",
                "🐤": "#F1C40F",
                "🐥": "#F1C40F",
                "🐦": "#9B59B6",
                "🐧": "#E67E22",
                "🕊️": "#9B59B6",
                "🦅": "#992D22",
                "🦆": "#9B59B6",
                "🦢": "#9B59B6",
                "🦉": "#992D22",
                "🦤": "#E67E22",
                "🪶": "#992D22",
                "🦩": "#E74C3C",
                "🦚": "#11806A",
                "🦜": "#11806A",
                "🐸": "#11806A",
                "🐊": "#11806A",
                "🐢": "#11806A",
                "🦎": "#11806A",
                "🐍": "#992D22",
                "🐲": "#F1C40F",
                "🐉": "#992D22",
                "🦕": "#206694",
                "🦖": "#11806A",
                "🐳": "#3498DB",
                "🐋": "#9B59B6",
                "🐬": "#3498DB",
                "🦭": "#9B59B6",
                "🐟": "#3498DB",
                "🐠": "#F1C40F",
                "🐡": "#E67E22",
                "🦈": "#9B59B6",
                "🐙": "#992D22",
                "🐚": "#9B59B6",
                "🪸": "#E74C3C",
                "🐌": "#E67E22",
                "🦋": "#11806A",
                "🐛": "#992D22",
                "🐜": "#992D22",
                "🐝": "#607D8B",
                "🪲": "#11806A",
                "🐞": "#992D22",
                "🦗": "#992D22",
                "🪳": "#992D22",
                "🕷️": "#11806A",
                "🕸️": "#9B59B6",
                "🦂": "#992D22",
                "🦟": "#992D22",
                "🪰": "#E67E22",
                "🪱": "#E74C3C",
                "🦠": "#11806A",
                "💐": "#F1C40F",
                "🌸": "#9B59B6",
                "💮": "#9B59B6",
                "🪷": "#9B59B6",
                "🏵️": "#E67E22",
                "🌹": "#992D22",
                "🥀": "#9B59B6",
                "🌺": "#E91E63",
                "🌻": "#F1C40F",
                "🌼": "#F1C40F",
                "🌷": "#E74C3C",
                "🌱": "#11806A",
                "🪴": "#11806A",
                "🌲": "#11806A",
                "🌳": "#11806A",
                "🌴": "#11806A",
                "🌵": "#11806A",
                "🌾": "#E67E22",
                "🌿": "#11806A",
                "☘️": "#11806A",
                "🍀": "#11806A",
                "🍁": "#992D22",
                "🍂": "#992D22",
                "🍃": "#11806A",
                "🪹": "#992D22",
                "🪺": "#3498DB",
                "🍇": "#992D22",
                "🍈": "#9B59B6",
                "🍉": "#E74C3C",
                "🍊": "#E67E22",
                "🍋": "#F1C40F",
                "🍌": "#9B59B6",
                "🍍": "#992D22",
                "🥭": "#E67E22",
                "🍎": "#E74C3C",
                "🍏": "#11806A",
                "🍐": "#E67E22",
                "🍑": "#E74C3C",
                "🍒": "#E74C3C",
                "🍓": "#992D22",
                "🫐": "#206694",
                "🥝": "#F1C40F",
                "🍅": "#E74C3C",
                "🫒": "#992D22",
                "🥥": "#9B59B6",
                "🥑": "#F1C40F",
                "🍆": "#992D22",
                "🥔": "#992D22",
                "🥕": "#E67E22",
                "🌽": "#992D22",
                "🌶️": "#E74C3C",
                "🫑": "#11806A",
                "🥒": "#F1C40F",
                "🥬": "#11806A",
                "🥦": "#11806A",
                "🧄": "#9B59B6",
                "🧅": "#E67E22",
                "🍄": "#E74C3C",
                "🥜": "#E67E22",
                "🫘": "#992D22",
                "🌰": "#992D22",
                "🍞": "#E67E22",
                "🥐": "#E67E22",
                "🥖": "#F1C40F",
                "🫓": "#9B59B6",
                "🥨": "#E74C3C",
                "🥯": "#E67E22",
                "🥞": "#F1C40F",
                "🧇": "#E67E22",
                "🧀": "#F1C40F",
                "🍖": "#992D22",
                "🍗": "#992D22",
                "🥩": "#992D22",
                "🥓": "#E74C3C",
                "🍔": "#E67E22",
                "🍟": "#F1C40F",
                "🍕": "#E67E22",
                "🌭": "#E67E22",
                "🥪": "#F1C40F",
                "🌮": "#F1C40F",
                "🌯": "#9B59B6",
                "🫔": "#E67E22",
                "🥙": "#E67E22",
                "🧆": "#992D22",
                "🥚": "#9B59B6",
                "🍳": "#11806A",
                "🥘": "#E67E22",
                "🍲": "#9B59B6",
                "🫕": "#992D22",
                "🥣": "#3498DB",
                "🥗": "#11806A",
                "🍿": "#E74C3C",
                "🧈": "#F1C40F",
                "🧂": "#9B59B6",
                "🥫": "#E74C3C",
                "🍱": "#992D22",
                "🍘": "#992D22",
                "🍙": "#9B59B6",
                "🍚": "#9B59B6",
                "🍛": "#9B59B6",
                "🍜": "#9B59B6",
                "🍝": "#F1C40F",
                "🍠": "#E74C3C",
                "🍢": "#E67E22",
                "🍣": "#E74C3C",
                "🍤": "#E67E22",
                "🍥": "#9B59B6",
                "🥮": "#992D22",
                "🍡": "#9B59B6",
                "🥟": "#F1C40F",
                "🥠": "#E67E22",
                "🥡": "#9B59B6",
                "🦀": "#E74C3C",
                "🦞": "#992D22",
                "🦐": "#E74C3C",
                "🦑": "#E74C3C",
                "🦪": "#9B59B6",
                "🍦": "#E67E22",
                "🍧": "#9B59B6",
                "🍨": "#9B59B6",
                "🍩": "#992D22",
                "🍪": "#E67E22",
                "🎂": "#9B59B6",
                "🍰": "#9B59B6",
                "🧁": "#E67E22",
                "🥧": "#E67E22",
                "🍫": "#E74C3C",
                "🍬": "#9B59B6",
                "🍭": "#9B59B6",
                "🍮": "#9B59B6",
                "🍯": "#F1C40F",
                "🍼": "#9B59B6",
                "🥛": "#9B59B6",
                "☕": "#9B59B6",
                "🫖": "#9B59B6",
                "🍵": "#9B59B6",
                "🍶": "#9B59B6",
                "🍾": "#992D22",
                "🍷": "#9B59B6",
                "🍸": "#9B59B6",
                "🍹": "#F1C40F",
                "🍺": "#E67E22",
                "🍻": "#E67E22",
                "🥂": "#9B59B6",
                "🥃": "#9B59B6",
                "🫗": "#9B59B6",
                "🥤": "#E74C3C",
                "🧋": "#E67E22",
                "🧃": "#9B59B6",
                "🧉": "#992D22",
                "🧊": "#3498DB",
                "🥢": "#992D22",
                "🍽️": "#9B59B6",
                "🍴": "#9B59B6",
                "🥄": "#607D8B",
                "🔪": "#9B59B6",
                "🫙": "#9B59B6",
                "🏺": "#992D22",
                "🌍": "#F1C40F",
                "🌎": "#206694",
                "🌏": "#F1C40F",
                "🌐": "#3498DB",
                "🗺️": "#3498DB",
                "🗾": "#3498DB",
                "🧭": "#9B59B6",
                "🏔️": "#11806A",
                "⛰️": "#11806A",
                "🌋": "#11806A",
                "🗻": "#9B59B6",
                "🏕️": "#992D22",
                "🏖️": "#E67E22",
                "🏜️": "#992D22",
                "🏝️": "#3498DB",
                "🏞️": "#3498DB",
                "🏟️": "#9B59B6",
                "🏛️": "#9B59B6",
                "🏗️": "#F1C40F",
                "🧱": "#992D22",
                "🪨": "#11806A",
                "🪵": "#992D22",
                "🛖": "#992D22",
                "🏘️": "#9B59B6",
                "🏚️": "#9B59B6",
                "🏠": "#9B59B6",
                "🏡": "#11806A",
                "🏢": "#9B59B6",
                "🏣": "#9B59B6",
                "🏤": "#9B59B6",
                "🏥": "#9B59B6",
                "🏦": "#9B59B6",
                "🏨": "#9B59B6",
                "🏩": "#9B59B6",
                "🏪": "#607D8B",
                "🏫": "#9B59B6",
                "🏬": "#607D8B",
                "🏭": "#9B59B6",
                "🏯": "#206694",
                "🏰": "#9B59B6",
                "💒": "#9B59B6",
                "🗼": "#992D22",
                "🗽": "#607D8B",
                "⛪": "#9B59B6",
                "🕌": "#E67E22",
                "🛕": "#E67E22",
                "🕍": "#E67E22",
                "⛩️": "#992D22",
                "🕋": "#992D22",
                "⛲": "#9B59B6",
                "⛺": "#E74C3C",
                "🌁": "#9B59B6",
                "🌃": "#206694",
                "🏙️": "#206694",
                "🌄": "#9B59B6",
                "🌅": "#E67E22",
                "🌆": "#E67E22",
                "🌇": "#E67E22",
                "🌉": "#206694",
                "♨️": "#992D22",
                "🎠": "#9B59B6",
                "🛝": "#206694",
                "🎡": "#992D22",
                "🎢": "#E67E22",
                "💈": "#9B59B6",
                "🎪": "#9B59B6",
                "🚂": "#992D22",
                "🚃": "#607D8B",
                "🚄": "#9B59B6",
                "🚅": "#206694",
                "🚆": "#607D8B",
                "🚇": "#11806A",
                "🚈": "#206694",
                "🚉": "#206694",
                "🚊": "#11806A",
                "🚝": "#206694",
                "🚞": "#9B59B6",
                "🚋": "#11806A",
                "🚌": "#3498DB",
                "🚍": "#607D8B",
                "🚎": "#206694",
                "🚐": "#9B59B6",
                "🚑": "#11806A",
                "🚒": "#11806A",
                "🚓": "#11806A",
                "🚔": "#11806A",
                "🚕": "#E67E22",
                "🚖": "#992D22",
                "🚗": "#9B59B6",
                "🚘": "#E74C3C",
                "🚙": "#3498DB",
                "🛻": "#206694",
                "🚚": "#E67E22",
                "🚛": "#11806A",
                "🚜": "#F1C40F",
                "🏎️": "#E74C3C",
                "🏍️": "#11806A",
                "🛵": "#E67E22",
                "🦽": "#11806A",
                "🦼": "#992D22",
                "🛺": "#F1C40F",
                "🚲": "#11806A",
                "🛴": "#607D8B",
                "🛹": "#11806A",
                "🛼": "#3498DB",
                "🚏": "#9B59B6",
                "🛣️": "#11806A",
                "🛤️": "#992D22",
                "🛢️": "#992D22",
                "⛽": "#E74C3C",
                "🛞": "#11806A",
                "🚨": "#E74C3C",
                "🚥": "#9B59B6",
                "🚦": "#11806A",
                "🛑": "#9B59B6",
                "🚧": "#607D8B",
                "⚓": "#206694",
                "🛟": "#9B59B6",
                "⛵": "#992D22",
                "🛶": "#992D22",
                "🚤": "#9B59B6",
                "🛳️": "#9B59B6",
                "⛴️": "#206694",
                "🛥️": "#9B59B6",
                "🚢": "#9B59B6",
                "✈️": "#3498DB",
                "🛩️": "#9B59B6",
                "🛫": "#206694",
                "🛬": "#206694",
                "🪂": "#992D22",
                "💺": "#607D8B",
                "🚁": "#E74C3C",
                "🚟": "#9B59B6",
                "🚠": "#992D22",
                "🚡": "#F1C40F",
                "🛰️": "#206694",
                "🚀": "#9B59B6",
                "🛸": "#206694",
                "🛎️": "#992D22",
                "🧳": "#992D22",
                "⌛": "#9B59B6",
                "⏳": "#9B59B6",
                "⌚": "#992D22",
                "⏰": "#9B59B6",
                "⏱️": "#9B59B6",
                "⏲️": "#9B59B6",
                "🕰️": "#9B59B6",
                "🕛": "#9B59B6",
                "🕧": "#9B59B6",
                "🕐": "#9B59B6",
                "🕜": "#9B59B6",
                "🕑": "#9B59B6",
                "🕝": "#9B59B6",
                "🕒": "#9B59B6",
                "🕞": "#9B59B6",
                "🕓": "#9B59B6",
                "🕟": "#9B59B6",
                "🕔": "#9B59B6",
                "🕠": "#9B59B6",
                "🕕": "#9B59B6",
                "🕡": "#9B59B6",
                "🕖": "#9B59B6",
                "🕢": "#9B59B6",
                "🕗": "#9B59B6",
                "🕣": "#9B59B6",
                "🕘": "#9B59B6",
                "🕤": "#9B59B6",
                "🕙": "#9B59B6",
                "🕥": "#9B59B6",
                "🕚": "#9B59B6",
                "🕦": "#9B59B6",
                "🌑": "#11806A",
                "🌒": "#11806A",
                "🌓": "#11806A",
                "🌔": "#11806A",
                "🌕": "#F1C40F",
                "🌖": "#11806A",
                "🌗": "#11806A",
                "🌘": "#11806A",
                "🌙": "#F1C40F",
                "🌚": "#206694",
                "🌛": "#F1C40F",
                "🌜": "#F1C40F",
                "🌡️": "#9B59B6",
                "☀️": "#F1C40F",
                "🌝": "#F1C40F",
                "🌞": "#F1C40F",
                "🪐": "#E67E22",
                "⭐": "#9B59B6",
                "🌟": "#9B59B6",
                "🌠": "#206694",
                "🌌": "#9B59B6",
                "☁️": "#9B59B6",
                "⛅": "#9B59B6",
                "⛈️": "#9B59B6",
                "🌤️": "#9B59B6",
                "🌥️": "#9B59B6",
                "🌦️": "#F1C40F",
                "🌧️": "#9B59B6",
                "🌨️": "#9B59B6",
                "🌩️": "#9B59B6",
                "🌪️": "#607D8B",
                "🌫️": "#9B59B6",
                "🌬️": "#9B59B6",
                "🌀": "#206694",
                "🌈": "#1ABC9C",
                "🌂": "#206694",
                "☂️": "#9B59B6",
                "☔": "#5865F2",
                "⛱️": "#F1C40F",
                "⚡": "#F1C40F",
                "❄️": "#3498DB",
                "☃️": "#9B59B6",
                "⛄": "#9B59B6",
                "☄️": "#E67E22",
                "🔥": "#E67E22",
                "💧": "#3498DB",
                "🌊": "#9B59B6",
                "🎃": "#E67E22",
                "🎄": "#11806A",
                "🎆": "#9B59B6",
                "🎇": "#992D22",
                "🧨": "#992D22",
                "✨": "#F1C40F",
                "🎈": "#E74C3C",
                "🎉": "#E67E22",
                "🎊": "#E67E22",
                "🎋": "#E67E22",
                "🎍": "#E67E22",
                "🎎": "#206694",
                "🎏": "#E67E22",
                "🎐": "#9B59B6",
                "🎑": "#11806A",
                "🧧": "#E74C3C",
                "🎀": "#9B59B6",
                "🎁": "#E67E22",
                "🎗️": "#F1C40F",
                "🎟️": "#E74C3C",
                "🎫": "#F1C40F",
                "🎖️": "#F1C40F",
                "🏆": "#E67E22",
                "🏅": "#F1C40F",
                "🥇": "#F1C40F",
                "🥈": "#9B59B6",
                "🥉": "#992D22",
                "⚽": "#9B59B6",
                "⚾": "#9B59B6",
                "🥎": "#F1C40F",
                "🏀": "#E67E22",
                "🏐": "#9B59B6",
                "🏈": "#E74C3C",
                "🏉": "#E67E22",
                "🎾": "#F1C40F",
                "🥏": "#3498DB",
                "🎳": "#9B59B6",
                "🏏": "#F1C40F",
                "🏑": "#9B59B6",
                "🏒": "#E67E22",
                "🥍": "#206694",
                "🏓": "#E74C3C",
                "🏸": "#E67E22",
                "🥊": "#E74C3C",
                "🥋": "#9B59B6",
                "🥅": "#992D22",
                "⛳": "#11806A",
                "⛸️": "#9B59B6",
                "🎣": "#607D8B",
                "🤿": "#11806A",
                "🎽": "#3498DB",
                "🎿": "#3498DB",
                "🛷": "#992D22",
                "🥌": "#11806A",
                "🎯": "#9B59B6",
                "🪀": "#11806A",
                "🪁": "#206694",
                "🎱": "#11806A",
                "🔮": "#9B59B6",
                "🪄": "#9B59B6",
                "🧿": "#206694",
                "🪬": "#206694",
                "🎮": "#11806A",
                "🕹️": "#11806A",
                "🎰": "#9B59B6",
                "🎲": "#9B59B6",
                "🧩": "#1ABC9C",
                "🧸": "#E67E22",
                "🪅": "#9B59B6",
                "🪩": "#9B59B6",
                "🪆": "#E67E22",
                "♠️": "#607D8B",
                "♥️": "#607D8B",
                "♦️": "#607D8B",
                "♣️": "#607D8B",
                "♟️": "#607D8B",
                "🃏": "#9B59B6",
                "🀄": "#9B59B6",
                "🎴": "#992D22",
                "🎭": "#992D22",
                "🖼️": "#F1C40F",
                "🎨": "#E67E22",
                "🧵": "#E67E22",
                "🪡": "#206694",
                "🧶": "#E67E22",
                "🪢": "#206694",
                "👓": "#9B59B6",
                "🕶️": "#607D8B",
                "🥽": "#9B59B6",
                "🥼": "#9B59B6",
                "🦺": "#E74C3C",
                "👔": "#3498DB",
                "👕": "#3498DB",
                "👖": "#206694",
                "🧣": "#992D22",
                "🧤": "#1ABC9C",
                "🧥": "#E67E22",
                "🧦": "#9B59B6",
                "👗": "#1ABC9C",
                "👘": "#E67E22",
                "🥻": "#E67E22",
                "🩱": "#11806A",
                "🩲": "#11806A",
                "🩳": "#E67E22",
                "👙": "#9B59B6",
                "👚": "#9B59B6",
                "👛": "#9B59B6",
                "👜": "#E74C3C",
                "👝": "#992D22",
                "🛍️": "#9B59B6",
                "🎒": "#E74C3C",
                "🩴": "#3498DB",
                "👞": "#992D22",
                "👟": "#9B59B6",
                "🥾": "#992D22",
                "🥿": "#206694",
                "👠": "#E74C3C",
                "👡": "#9B59B6",
                "🩰": "#9B59B6",
                "👢": "#E67E22",
                "👑": "#E67E22",
                "👒": "#E67E22",
                "🎩": "#11806A",
                "🎓": "#992D22",
                "🧢": "#3498DB",
                "🪖": "#11806A",
                "⛑️": "#992D22",
                "📿": "#992D22",
                "💄": "#E74C3C",
                "💍": "#9B59B6",
                "💎": "#3498DB",
                "🔇": "#11806A",
                "🔈": "#11806A",
                "🔉": "#607D8B",
                "🔊": "#11806A",
                "📢": "#9B59B6",
                "📣": "#992D22",
                "📯": "#E74C3C",
                "🔔": "#992D22",
                "🔕": "#992D22",
                "🎼": "#9B59B6",
                "🎵": "#11806A",
                "🎶": "#11806A",
                "🎙️": "#11806A",
                "🎚️": "#9B59B6",
                "🎛️": "#9B59B6",
                "🎤": "#9B59B6",
                "🎧": "#9B59B6",
                "📻": "#E67E22",
                "🎷": "#E67E22",
                "🪗": "#992D22",
                "🎸": "#E74C3C",
                "🎹": "#607D8B",
                "🎺": "#E67E22",
                "🎻": "#992D22",
                "🪕": "#9B59B6",
                "🥁": "#E74C3C",
                "🪘": "#992D22",
                "📱": "#607D8B",
                "📲": "#607D8B",
                "☎️": "#E74C3C",
                "📞": "#11806A",
                "📟": "#11806A",
                "📠": "#9B59B6",
                "🔋": "#11806A",
                "🪫": "#9B59B6",
                "🔌": "#11806A",
                "💻": "#607D8B",
                "🖥️": "#11806A",
                "🖨️": "#607D8B",
                "⌨️": "#9B59B6",
                "🖱️": "#9B59B6",
                "🖲️": "#11806A",
                "💽": "#9B59B6",
                "💾": "#11806A",
                "💿": "#9B59B6",
                "📀": "#9B59B6",
                "🧮": "#992D22",
                "🎥": "#11806A",
                "🎞️": "#9B59B6",
                "📽️": "#206694",
                "🎬": "#11806A",
                "📺": "#992D22",
                "📷": "#11806A",
                "📸": "#11806A",
                "📹": "#607D8B",
                "📼": "#11806A",
                "🔍": "#11806A",
                "🔎": "#11806A",
                "🕯️": "#9B59B6",
                "💡": "#9B59B6",
                "🔦": "#607D8B",
                "🏮": "#E74C3C",
                "🪔": "#992D22",
                "📔": "#F1C40F",
                "📕": "#992D22",
                "📖": "#206694",
                "📗": "#E67E22",
                "📘": "#206694",
                "📙": "#E67E22",
                "📚": "#11806A",
                "📓": "#9B59B6",
                "📒": "#F1C40F",
                "📃": "#9B59B6",
                "📜": "#9B59B6",
                "📄": "#9B59B6",
                "📰": "#9B59B6",
                "🗞️": "#9B59B6",
                "📑": "#9B59B6",
                "🔖": "#9B59B6",
                "🏷️": "#F1C40F",
                "💰": "#E67E22",
                "🪙": "#206694",
                "💴": "#9B59B6",
                "💵": "#9B59B6",
                "💶": "#9B59B6",
                "💷": "#9B59B6",
                "💸": "#9B59B6",
                "💳": "#9B59B6",
                "🧾": "#9B59B6",
                "💹": "#9B59B6",
                "✉️": "#9B59B6",
                "📧": "#9B59B6",
                "📨": "#9B59B6",
                "📩": "#9B59B6",
                "📤": "#3498DB",
                "📥": "#3498DB",
                "📦": "#E67E22",
                "📫": "#206694",
                "📪": "#3498DB",
                "📬": "#607D8B",
                "📭": "#11806A",
                "📮": "#E74C3C",
                "🗳️": "#3498DB",
                "✏️": "#E67E22",
                "✒️": "#11806A",
                "🖋️": "#11806A",
                "🖊️": "#11806A",
                "🖌️": "#206694",
                "🖍️": "#E74C3C",
                "📝": "#9B59B6",
                "💼": "#992D22",
                "📁": "#9B59B6",
                "📂": "#9B59B6",
                "🗂️": "#E67E22",
                "📅": "#E74C3C",
                "📆": "#9B59B6",
                "🗒️": "#9B59B6",
                "🗓️": "#9B59B6",
                "📇": "#9B59B6",
                "📈": "#9B59B6",
                "📉": "#9B59B6",
                "📊": "#9B59B6",
                "📋": "#9B59B6",
                "📌": "#E74C3C",
                "📍": "#E74C3C",
                "📎": "#9B59B6",
                "🖇️": "#9B59B6",
                "📏": "#9B59B6",
                "📐": "#9B59B6",
                "✂️": "#9B59B6",
                "🗃️": "#11806A",
                "🗄️": "#206694",
                "🗑️": "#9B59B6",
                "🔒": "#E67E22",
                "🔓": "#E67E22",
                "🔏": "#9B59B6",
                "🔐": "#E67E22",
                "🔑": "#F1C40F",
                "🗝️": "#11806A",
                "🔨": "#9B59B6",
                "🪓": "#992D22",
                "⛏️": "#9B59B6",
                "⚒️": "#11806A",
                "🛠️": "#11806A",
                "🗡️": "#9B59B6",
                "⚔️": "#11806A",
                "🔫": "#1ABC9C",
                "🪃": "#E74C3C",
                "🏹": "#9B59B6",
                "🛡️": "#9B59B6",
                "🪚": "#9B59B6",
                "🔧": "#206694",
                "🪛": "#1ABC9C",
                "🔩": "#9B59B6",
                "⚙️": "#9B59B6",
                "🗜️": "#607D8B",
                "⚖️": "#607D8B",
                "🦯": "#9B59B6",
                "🔗": "#206694",
                "⛓️": "#9B59B6",
                "🪝": "#E67E22",
                "🧰": "#E74C3C",
                "🧲": "#E74C3C",
                "🪜": "#992D22",
                "⚗️": "#9B59B6",
                "🧪": "#11806A",
                "🧫": "#9B59B6",
                "🧬": "#3498DB",
                "🔬": "#9B59B6",
                "🔭": "#9B59B6",
                "📡": "#9B59B6",
                "💉": "#9B59B6",
                "🩸": "#E74C3C",
                "💊": "#F1C40F",
                "🩹": "#9B59B6",
                "🩼": "#9B59B6",
                "🩺": "#11806A",
                "🩻": "#3498DB",
                "🚪": "#992D22",
                "🛗": "#3498DB",
                "🪞": "#E67E22",
                "🪟": "#992D22",
                "🛏️": "#992D22",
                "🛋️": "#3498DB",
                "🪑": "#E74C3C",
                "🚽": "#9B59B6",
                "🪠": "#E74C3C",
                "🚿": "#9B59B6",
                "🛁": "#9B59B6",
                "🪤": "#F1C40F",
                "🪒": "#9B59B6",
                "🧴": "#9B59B6",
                "🧷": "#9B59B6",
                "🧹": "#992D22",
                "🧺": "#992D22",
                "🧻": "#9B59B6",
                "🪣": "#206694",
                "🧼": "#1ABC9C",
                "🫧": "#9B59B6",
                "🪥": "#9B59B6",
                "🧽": "#F1C40F",
                "🧯": "#E74C3C",
                "🛒": "#9B59B6",
                "🚬": "#9B59B6",
                "⚰️": "#992D22",
                "🪦": "#9B59B6",
                "⚱️": "#E67E22",
                "🗿": "#206694",
                "🪧": "#9B59B6",
                "🪪": "#9B59B6",
                "🏧": "#3498DB",
                "🚮": "#9B59B6",
                "🚰": "#9B59B6",
                "♿": "#9B59B6",
                "🚹": "#3498DB",
                "🚺": "#9B59B6",
                "🚻": "#607D8B",
                "🚼": "#E67E22",
                "🚾": "#9B59B6",
                "🛂": "#9B59B6",
                "🛃": "#9B59B6",
                "🛄": "#9B59B6",
                "🛅": "#9B59B6",
                "⚠️": "#F1C40F",
                "🚸": "#F1C40F",
                "⛔": "#9B59B6",
                "🚫": "#E74C3C",
                "🚳": "#11806A",
                "🚭": "#E74C3C",
                "🚯": "#E74C3C",
                "🚱": "#E74C3C",
                "🚷": "#E74C3C",
                "📵": "#E74C3C",
                "🔞": "#607D8B",
                "☢️": "#E67E22",
                "☣️": "#E67E22",
                "⬆️": "#607D8B",
                "↗️": "#607D8B",
                "➡️": "#607D8B",
                "↘️": "#607D8B",
                "⬇️": "#607D8B",
                "↙️": "#607D8B",
                "⬅️": "#607D8B",
                "↖️": "#607D8B",
                "↕️": "#607D8B",
                "↔️": "#607D8B",
                "↩️": "#607D8B",
                "↪️": "#607D8B",
                "⤴️": "#607D8B",
                "⤵️": "#607D8B",
                "🔃": "#607D8B",
                "🔄": "#607D8B",
                "🔙": "#11806A",
                "🔚": "#11806A",
                "🔛": "#11806A",
                "🔜": "#206694",
                "🔝": "#11806A",
                "🛐": "#9B59B6",
                "⚛️": "#9B59B6",
                "🕉️": "#9B59B6",
                "✡️": "#9B59B6",
                "☸️": "#9B59B6",
                "☯️": "#9B59B6",
                "✝️": "#9B59B6",
                "☦️": "#9B59B6",
                "☪️": "#9B59B6",
                "☮️": "#9B59B6",
                "🕎": "#9B59B6",
                "🔯": "#9B59B6",
                "♈": "#9B59B6",
                "♉": "#9B59B6",
                "♊": "#9B59B6",
                "♋": "#9B59B6",
                "♌": "#9B59B6",
                "♍": "#9B59B6",
                "♎": "#9B59B6",
                "♏": "#9B59B6",
                "♐": "#9B59B6",
                "♑": "#9B59B6",
                "♒": "#9B59B6",
                "♓": "#9B59B6",
                "⛎": "#9B59B6",
                "🔀": "#607D8B",
                "🔁": "#607D8B",
                "🔂": "#607D8B",
                "▶️": "#607D8B",
                "⏩": "#607D8B",
                "⏭️": "#607D8B",
                "⏯️": "#607D8B",
                "◀️": "#607D8B",
                "⏪": "#607D8B",
                "⏮️": "#607D8B",
                "🔼": "#607D8B",
                "⏫": "#607D8B",
                "🔽": "#607D8B",
                "⏬": "#607D8B",
                "⏸️": "#607D8B",
                "⏹️": "#607D8B",
                "⏺️": "#607D8B",
                "⏏️": "#607D8B",
                "🎦": "#607D8B",
                "🔅": "#F1C40F",
                "🔆": "#F1C40F",
                "📶": "#9B59B6",
                "📳": "#F1C40F",
                "📴": "#9B59B6",
                "♀️": "#607D8B",
                "♂️": "#607D8B",
                "⚧️": "#607D8B",
                "✖️": "#11806A",
                "➕": "#11806A",
                "➖": "#11806A",
                "➗": "#11806A",
                "🟰": "#9B59B6",
                "♾️": "#607D8B",
                "‼️": "#607D8B",
                "⁉️": "#E74C3C",
                "❓": "#992D22",
                "❔": "#9B59B6",
                "❕": "#9B59B6",
                "❗": "#992D22",
                "〰️": "#11806A",
                "💱": "#206694",
                "💲": "#206694",
                "⚕️": "#607D8B",
                "♻️": "#11806A",
                "⚜️": "#992D22",
                "🔱": "#E67E22",
                "📛": "#9B59B6",
                "🔰": "#F1C40F",
                "⭕": "#992D22",
                "✅": "#11806A",
                "☑️": "#206694",
                "✔️": "#11806A",
                "❌": "#E74C3C",
                "❎": "#11806A",
                "➰": "#11806A",
                "➿": "#206694",
                "〽️": "#F1C40F",
                "✳️": "#11806A",
                "✴️": "#9B59B6",
                "❇️": "#11806A",
                "©️": "#607D8B",
                "®️": "#607D8B",
                "™️": "#607D8B",
                "#️⃣": "#607D8B",
                "*️⃣": "#607D8B",
                "0️⃣": "#607D8B",
                "1️⃣": "#607D8B",
                "2️⃣": "#607D8B",
                "3️⃣": "#607D8B",
                "4️⃣": "#607D8B",
                "5️⃣": "#607D8B",
                "6️⃣": "#607D8B",
                "7️⃣": "#607D8B",
                "8️⃣": "#607D8B",
                "9️⃣": "#607D8B",
                "🔟": "#607D8B",
                "🔠": "#607D8B",
                "🔡": "#607D8B",
                "🔢": "#607D8B",
                "🔣": "#607D8B",
                "🔤": "#607D8B",
                "🅰️": "#E74C3C",
                "🆎": "#E74C3C",
                "🅱️": "#9B59B6",
                "🆑": "#E74C3C",
                "🆒": "#607D8B",
                "🆓": "#607D8B",
                ℹ️: "#9B59B6",
                "🆔": "#9B59B6",
                "Ⓜ️": "#9B59B6",
                "🆕": "#607D8B",
                "🆖": "#607D8B",
                "🅾️": "#E74C3C",
                "🆗": "#607D8B",
                "🅿️": "#3498DB",
                "🆘": "#9B59B6",
                "🆙": "#607D8B",
                "🆚": "#9B59B6",
                "🈁": "#607D8B",
                "🈂️": "#3498DB",
                "🈷️": "#9B59B6",
                "🈶": "#9B59B6",
                "🈯": "#9B59B6",
                "🉐": "#9B59B6",
                "🈹": "#9B59B6",
                "🈚": "#9B59B6",
                "🈲": "#9B59B6",
                "🉑": "#9B59B6",
                "🈸": "#9B59B6",
                "🈴": "#E74C3C",
                "🈳": "#9B59B6",
                "㊗️": "#9B59B6",
                "㊙️": "#9B59B6",
                "🈺": "#9B59B6",
                "🈵": "#9B59B6",
                "🔴": "#992D22",
                "🟠": "#F1C40F",
                "🟡": "#F1C40F",
                "🟢": "#11806A",
                "🔵": "#206694",
                "🟣": "#9B59B6",
                "🟤": "#992D22",
                "⚫": "#607D8B",
                "⚪": "#9B59B6",
                "🟥": "#E74C3C",
                "🟧": "#E67E22",
                "🟨": "#F1C40F",
                "🟩": "#11806A",
                "🟦": "#3498DB",
                "🟪": "#9B59B6",
                "🟫": "#9B59B6",
                "⬛": "#11806A",
                "⬜": "#9B59B6",
                "◼️": "#607D8B",
                "◻️": "#9B59B6",
                "◾": "#607D8B",
                "◽": "#9B59B6",
                "▪️": "#607D8B",
                "▫️": "#607D8B",
                "🔶": "#F1C40F",
                "🔷": "#206694",
                "🔸": "#E67E22",
                "🔹": "#206694",
                "🔺": "#E74C3C",
                "🔻": "#E74C3C",
                "💠": "#3498DB",
                "🔘": "#206694",
                "🔳": "#9B59B6",
                "🔲": "#607D8B",
                "🏁": "#9B59B6",
                "🚩": "#992D22",
                "🎌": "#9B59B6",
                "🏴": "#11806A",
                "🏳️": "#9B59B6",
                "🏳️‍🌈": "#E67E22",
                "🏳️‍⚧️": "#9B59B6",
                "🏴‍☠️": "#11806A",
                "🇦🇨": "#206694",
                "🇦🇩": "#206694",
                "🇦🇪": "#E74C3C",
                "🇦🇫": "#E74C3C",
                "🇦🇬": "#992D22",
                "🇦🇮": "#206694",
                "🇦🇱": "#992D22",
                "🇦🇲": "#E74C3C",
                "🇦🇴": "#607D8B",
                "🇦🇶": "#206694",
                "🇦🇷": "#3498DB",
                "🇦🇸": "#9B59B6",
                "🇦🇹": "#9B59B6",
                "🇦🇺": "#206694",
                "🇦🇼": "#3498DB",
                "🇦🇽": "#206694",
                "🇦🇿": "#E91E63",
                "🇧🇦": "#F1C40F",
                "🇧🇧": "#206694",
                "🇧🇩": "#E74C3C",
                "🇧🇪": "#F1C40F",
                "🇧🇫": "#11806A",
                "🇧🇬": "#992D22",
                "🇧🇭": "#9B59B6",
                "🇧🇮": "#11806A",
                "🇧🇯": "#E74C3C",
                "🇧🇱": "#9B59B6",
                "🇧🇲": "#992D22",
                "🇧🇳": "#F1C40F",
                "🇧🇴": "#11806A",
                "🇧🇶": "#206694",
                "🇧🇷": "#F1C40F",
                "🇧🇸": "#3498DB",
                "🇧🇹": "#E67E22",
                "🇧🇻": "#E74C3C",
                "🇧🇼": "#3498DB",
                "🇧🇾": "#11806A",
                "🇧🇿": "#206694",
                "🇨🇦": "#992D22",
                "🇨🇨": "#11806A",
                "🇨🇩": "#E74C3C",
                "🇨🇫": "#11806A",
                "🇨🇬": "#F1C40F",
                "🇨🇭": "#9B59B6",
                "🇨🇮": "#E67E22",
                "🇨🇰": "#206694",
                "🇨🇱": "#E74C3C",
                "🇨🇲": "#E74C3C",
                "🇨🇳": "#992D22",
                "🇨🇴": "#206694",
                "🇨🇵": "#206694",
                "🇨🇷": "#206694",
                "🇨🇺": "#206694",
                "🇨🇻": "#206694",
                "🇨🇼": "#206694",
                "🇨🇽": "#11806A",
                "🇨🇾": "#9B59B6",
                "🇨🇿": "#992D22",
                "🇩🇪": "#E74C3C",
                "🇩🇬": "#9B59B6",
                "🇩🇯": "#11806A",
                "🇩🇰": "#992D22",
                "🇩🇲": "#E67E22",
                "🇩🇴": "#206694",
                "🇩🇿": "#11806A",
                "🇪🇦": "#F1C40F",
                "🇪🇨": "#F1C40F",
                "🇪🇪": "#9B59B6",
                "🇪🇬": "#9B59B6",
                "🇪🇭": "#9B59B6",
                "🇪🇷": "#11806A",
                "🇪🇸": "#F1C40F",
                "🇪🇹": "#11806A",
                "🇪🇺": "#206694",
                "🇫🇮": "#206694",
                "🇫🇯": "#3498DB",
                "🇫🇰": "#206694",
                "🇫🇲": "#3498DB",
                "🇫🇴": "#3498DB",
                "🇫🇷": "#206694",
                "🇬🇦": "#11806A",
                "🇬🇧": "#206694",
                "🇬🇩": "#11806A",
                "🇬🇪": "#E74C3C",
                "🇬🇫": "#11806A",
                "🇬🇬": "#9B59B6",
                "🇬🇭": "#11806A",
                "🇬🇮": "#9B59B6",
                "🇬🇱": "#992D22",
                "🇬🇲": "#11806A",
                "🇬🇳": "#F1C40F",
                "🇬🇵": "#F1C40F",
                "🇬🇶": "#11806A",
                "🇬🇷": "#9B59B6",
                "🇬🇸": "#206694",
                "🇬🇹": "#3498DB",
                "🇬🇺": "#206694",
                "🇬🇼": "#F1C40F",
                "🇬🇾": "#E67E22",
                "🇭🇰": "#992D22",
                "🇭🇲": "#206694",
                "🇭🇳": "#9B59B6",
                "🇭🇷": "#206694",
                "🇭🇹": "#E91E63",
                "🇭🇺": "#11806A",
                "🇮🇨": "#206694",
                "🇮🇩": "#992D22",
                "🇮🇪": "#11806A",
                "🇮🇱": "#206694",
                "🇮🇲": "#992D22",
                "🇮🇳": "#9B59B6",
                "🇮🇴": "#9B59B6",
                "🇮🇶": "#607D8B",
                "🇮🇷": "#992D22",
                "🇮🇸": "#9B59B6",
                "🇮🇹": "#992D22",
                "🇯🇪": "#9B59B6",
                "🇯🇲": "#11806A",
                "🇯🇴": "#E74C3C",
                "🇯🇵": "#9B59B6",
                "🇰🇪": "#E74C3C",
                "🇰🇬": "#E74C3C",
                "🇰🇭": "#992D22",
                "🇰🇮": "#E74C3C",
                "🇰🇲": "#11806A",
                "🇰🇳": "#E74C3C",
                "🇰🇵": "#206694",
                "🇰🇷": "#9B59B6",
                "🇰🇼": "#1ABC9C",
                "🇰🇾": "#206694",
                "🇰🇿": "#1ABC9C",
                "🇱🇦": "#E74C3C",
                "🇱🇧": "#9B59B6",
                "🇱🇨": "#3498DB",
                "🇱🇮": "#206694",
                "🇱🇰": "#E74C3C",
                "🇱🇷": "#E74C3C",
                "🇱🇸": "#9B59B6",
                "🇱🇹": "#11806A",
                "🇱🇺": "#E74C3C",
                "🇱🇻": "#992D22",
                "🇱🇾": "#E74C3C",
                "🇲🇦": "#992D22",
                "🇲🇨": "#9B59B6",
                "🇲🇩": "#206694",
                "🇲🇪": "#992D22",
                "🇲🇫": "#206694",
                "🇲🇬": "#E74C3C",
                "🇲🇭": "#206694",
                "🇲🇰": "#992D22",
                "🇲🇱": "#F1C40F",
                "🇲🇲": "#F1C40F",
                "🇲🇳": "#206694",
                "🇲🇴": "#11806A",
                "🇲🇵": "#9B59B6",
                "🇲🇶": "#206694",
                "🇲🇷": "#E74C3C",
                "🇲🇸": "#206694",
                "🇲🇹": "#9B59B6",
                "🇲🇺": "#E74C3C",
                "🇲🇻": "#11806A",
                "🇲🇼": "#992D22",
                "🇲🇽": "#9B59B6",
                "🇲🇾": "#9B59B6",
                "🇲🇿": "#E67E22",
                "🇳🇦": "#E74C3C",
                "🇳🇨": "#E67E22",
                "🇳🇪": "#11806A",
                "🇳🇫": "#9B59B6",
                "🇳🇬": "#9B59B6",
                "🇳🇮": "#5865F2",
                "🇳🇱": "#206694",
                "🇳🇴": "#E74C3C",
                "🇳🇵": "#992D22",
                "🇳🇷": "#206694",
                "🇳🇺": "#F1C40F",
                "🇳🇿": "#206694",
                "🇴🇲": "#11806A",
                "🇵🇦": "#206694",
                "🇵🇪": "#9B59B6",
                "🇵🇫": "#992D22",
                "🇵🇬": "#E74C3C",
                "🇵🇭": "#992D22",
                "🇵🇰": "#11806A",
                "🇵🇱": "#E74C3C",
                "🇵🇲": "#206694",
                "🇵🇳": "#206694",
                "🇵🇷": "#992D22",
                "🇵🇸": "#9B59B6",
                "🇵🇹": "#E74C3C",
                "🇵🇼": "#F1C40F",
                "🇵🇾": "#9B59B6",
                "🇶🇦": "#9B59B6",
                "🇷🇪": "#E74C3C",
                "🇷🇴": "#F1C40F",
                "🇷🇸": "#206694",
                "🇷🇺": "#992D22",
                "🇷🇼": "#F1C40F",
                "🇸🇦": "#11806A",
                "🇸🇧": "#11806A",
                "🇸🇨": "#11806A",
                "🇸🇩": "#9B59B6",
                "🇸🇪": "#F1C40F",
                "🇸🇬": "#E74C3C",
                "🇸🇭": "#206694",
                "🇸🇮": "#E74C3C",
                "🇸🇯": "#E74C3C",
                "🇸🇰": "#992D22",
                "🇸🇱": "#9B59B6",
                "🇸🇲": "#9B59B6",
                "🇸🇳": "#F1C40F",
                "🇸🇴": "#3498DB",
                "🇸🇷": "#11806A",
                "🇸🇸": "#E74C3C",
                "🇸🇹": "#E67E22",
                "🇸🇻": "#9B59B6",
                "🇸🇽": "#E74C3C",
                "🇸🇾": "#992D22",
                "🇸🇿": "#992D22",
                "🇹🇦": "#206694",
                "🇹🇨": "#206694",
                "🇹🇩": "#F1C40F",
                "🇹🇫": "#206694",
                "🇹🇬": "#11806A",
                "🇹🇭": "#992D22",
                "🇹🇯": "#E91E63",
                "🇹🇰": "#F1C40F",
                "🇹🇱": "#E74C3C",
                "🇹🇲": "#11806A",
                "🇹🇳": "#992D22",
                "🇹🇴": "#992D22",
                "🇹🇷": "#E74C3C",
                "🇹🇹": "#992D22",
                "🇹🇻": "#607D8B",
                "🇹🇼": "#3498DB",
                "🇹🇿": "#11806A",
                "🇺🇦": "#F1C40F",
                "🇺🇬": "#607D8B",
                "🇺🇲": "#E74C3C",
                "🇺🇳": "#3498DB",
                "🇺🇸": "#E74C3C",
                "🇺🇾": "#9B59B6",
                "🇺🇿": "#1ABC9C",
                "🇻🇦": "#9B59B6",
                "🇻🇨": "#F1C40F",
                "🇻🇪": "#206694",
                "🇻🇬": "#206694",
                "🇻🇮": "#9B59B6",
                "🇻🇳": "#992D22",
                "🇻🇺": "#11806A",
                "🇼🇫": "#E74C3C",
                "🇼🇸": "#E74C3C",
                "🇽🇰": "#206694",
                "🇾🇪": "#E74C3C",
                "🇾🇹": "#9B59B6",
                "🇿🇦": "#E67E22",
                "🇿🇲": "#11806A",
                "🇿🇼": "#11806A",
                "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "#992D22",
                "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "#206694",
                "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "#11806A"
            });
            var i = "#607D8B";

            function l(B) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = (0, r.cj)([E.Z], (function() {
                        var t;
                        return {
                            iconEmoji: e ? null : null === (t = E.Z.getChannel(B)) || void 0 === t ? void 0 : t.iconEmoji
                        }
                    })).iconEmoji;
                if (!e) return null != t ? t : void 0
            }

            function D(B, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = (0, C.ZP)(),
                    D = (0, r.cj)([E.Z], (function() {
                        var B;
                        return {
                            themeColor: null === (B = E.Z.getChannel(e)) || void 0 === B ? void 0 : B.themeColor
                        }
                    })).themeColor;
                return n.useMemo((function() {
                    var e = null != D ? "#".concat(D.toString(16)) : null;
                    null == e && (e = null != B && null != o[B] ? o[B] : i);
                    return t ? e : (0, F.Cj)(e, "dark" === l ? .2 : .16)
                }), [D, l, B, t])
            }
        },
        327860: (B, e, t) => {
            t.d(e, {
                ox: () => w,
                OZ: () => P,
                ZP: () => x
            });
            var n = t(785893),
                r = t(667294),
                C = t(294184),
                E = t.n(C),
                F = t(575945),
                o = t(882723),
                i = t(107364),
                l = t(2590),
                D = t(643193),
                c = t.n(D),
                u = t(380203),
                a = t.n(u);

            function s(B, e) {
                if (!(B instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(B, e, t) {
                e in B ? Object.defineProperty(B, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : B[e] = t;
                return B
            }

            function A(B) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
                    return B.__proto__ || Object.getPrototypeOf(B)
                };
                return A(B)
            }

            function d(B, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                B.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: B,
                        writable: !0,
                        configurable: !0
                    }
                });
                e && h(B, e)
            }

            function p(B) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(B) {
                        return Object.getOwnPropertyDescriptor(t, B).enumerable
                    }))));
                    n.forEach((function(e) {
                        f(B, e, t[e])
                    }))
                }
                return B
            }

            function y(B, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(e)) : function(B, e) {
                    var t = Object.keys(B);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(B);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(B, e).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(B, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return B
            }

            function b(B, e) {
                return !e || "object" !== m(e) && "function" != typeof e ? function(B) {
                    if (void 0 === B) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return B
                }(B) : e
            }

            function h(B, e) {
                h = Object.setPrototypeOf || function(B, e) {
                    B.__proto__ = e;
                    return B
                };
                return h(B, e)
            }
            var m = function(B) {
                return B && "undefined" != typeof Symbol && B.constructor === Symbol ? "symbol" : typeof B
            };

            function v(B) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (B) {
                        return !1
                    }
                }();
                return function() {
                    var t, n = A(B);
                    if (e) {
                        var r = A(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return b(this, t)
                }
            }
            var O = r.createContext(l.BRd.DARK),
                j = O.Provider,
                g = O.Consumer,
                w = function(B) {
                    d(t, B);
                    var e = v(t);

                    function t() {
                        s(this, t);
                        return e.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var B = this.props,
                            e = B.lightSrc,
                            t = B.darkSrc,
                            r = B.width,
                            C = B.height,
                            o = B.offsetX,
                            l = B.offsetY,
                            D = B.style;
                        return (0, n.jsx)(g, {
                            children: function(B) {
                                return (0, n.jsx)(i.Z.Child, {
                                    grow: 0,
                                    className: E()(c().image, a().marginBottom40),
                                    style: y(p({}, D), {
                                        width: r,
                                        height: C,
                                        marginLeft: o,
                                        marginTop: l,
                                        backgroundImage: "url(".concat((0, F.wj)(B) ? t : e, ")")
                                    })
                                })
                            }
                        })
                    };
                    return t
                }(r.PureComponent),
                P = function(B) {
                    var e = B.children,
                        t = B.className,
                        r = B.noteClassName,
                        C = B.note,
                        F = B.style;
                    return (0, n.jsxs)(i.Z.Child, {
                        grow: 0,
                        direction: i.Z.Direction.VERTICAL,
                        style: F,
                        children: [null != e && (0, n.jsx)(o.H, {
                            className: E()(t, c().title),
                            children: e
                        }), null != C ? (0, n.jsx)("div", {
                            className: E()(r, c().text, a().marginTop8),
                            children: C
                        }) : null]
                    })
                },
                x = function(B) {
                    d(t, B);
                    var e = v(t);

                    function t() {
                        s(this, t);
                        return e.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var B = this.props,
                            e = B.children,
                            t = B.theme,
                            r = B.className,
                            C = B.style;
                        return (0, n.jsx)(j, {
                            value: t,
                            children: (0, n.jsx)(i.Z, {
                                direction: i.Z.Direction.VERTICAL,
                                align: i.Z.Align.CENTER,
                                justify: i.Z.Justify.CENTER,
                                className: E()(c().wrapper, r),
                                style: C,
                                children: e
                            })
                        })
                    };
                    return t
                }(r.PureComponent);
            x.Text = P;
            x.Image = w
        },
        319086: (B, e, t) => {
            t.d(e, {
                Z: () => c
            });
            var n = t(785893),
                r = t(667294),
                C = t(882723),
                E = t(784426),
                F = t(2590);

            function o(B, e, t) {
                e in B ? Object.defineProperty(B, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : B[e] = t;
                return B
            }

            function i(B) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(B) {
                        return Object.getOwnPropertyDescriptor(t, B).enumerable
                    }))));
                    n.forEach((function(e) {
                        o(B, e, t[e])
                    }))
                }
                return B
            }

            function l(B, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(e)) : function(B, e) {
                    var t = Object.keys(B);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(B);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(B, e).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(B, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return B
            }

            function D(B, e) {
                if (null == B) return {};
                var t, n, r = function(B, e) {
                    if (null == B) return {};
                    var t, n, r = {},
                        C = Object.keys(B);
                    for (n = 0; n < C.length; n++) {
                        t = C[n];
                        e.indexOf(t) >= 0 || (r[t] = B[t])
                    }
                    return r
                }(B, e);
                if (Object.getOwnPropertySymbols) {
                    var C = Object.getOwnPropertySymbols(B);
                    for (n = 0; n < C.length; n++) {
                        t = C[n];
                        e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(B, t) && (r[t] = B[t])
                    }
                }
                return r
            }
            const c = r.forwardRef((function(B, e) {
                var t = B.href,
                    o = B.children,
                    c = B.onClick,
                    u = B.onKeyPress,
                    a = B.focusProps,
                    s = D(B, ["href", "children", "onClick", "onKeyPress", "focusProps"]),
                    f = r.useCallback((function(B) {
                        if (!B.repeat) {
                            if (B.charCode === F.yXg.SPACE || B.charCode === F.yXg.ENTER) {
                                B.preventDefault();
                                null != t && (0, E.uL)(t);
                                null == c || c()
                            }
                            null == u || u(B)
                        }
                    }), [t, u, c]),
                    A = r.useCallback((function(B) {
                        if (!B.metaKey && !B.shiftKey && 0 === B.button) {
                            B.preventDefault();
                            B.stopPropagation();
                            null != t && (0, E.uL)(t);
                            null == c || c()
                        }
                    }), [t, c]),
                    d = (0, n.jsx)("a", l(i({
                        ref: e,
                        href: t,
                        onClick: A,
                        onKeyPress: f
                    }, s), {
                        children: o
                    }));
                return (0, n.jsx)(C.FocusRing, l(i({}, a), {
                    children: d
                }))
            }))
        }
    }
]);