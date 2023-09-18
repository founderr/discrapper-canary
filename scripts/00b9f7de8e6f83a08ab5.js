(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [65278], {
        936023: (e, t, n) => {
            e.exports = n.p + "4c22bea607083fd1b4da0108f6bce9ee.png"
        },
        872017: (e, t, n) => {
            "use strict";
            n.d(t, {
                AB: () => l,
                ZP: () => u,
                s5: () => d
            });
            var r = n(202351),
                o = n(21372),
                i = n(473903),
                a = n(309945);

            function l(e) {
                var t = (0, r.e7)([i.default], (function() {
                    return i.default.getCurrentUser()
                }));
                return u(null == t ? void 0 : t.id, e)
            }

            function s(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function c(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, a.b)(e)]
            }

            function u(e, t) {
                return c((0, r.e7)([o.ZP], (function() {
                    return s(e, t, o.ZP)
                }), [t, e]))
            }

            function d(e, t) {
                return c(s(e, t, o.ZP))
            }
        },
        979264: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(2590);

            function o(e) {
                return e.type === r.uaV.DEFAULT && null != e.messageReference
            }
        },
        928066: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(661123),
                o = n(2590);
            const i = function(e) {
                return !(null == e || null == e.attachments || e.attachments.length < 1) && e.attachments.some((function(e) {
                    return null != e.flags && (0, r.yE)(e.flags, o.J0y.IS_REMIX)
                }))
            }
        },
        804808: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => c,
                k$: () => d
            });
            n(940007);
            var r = n(883064),
                o = n(473291),
                i = n(2590);
            var a = new Set([i.hBH.IMAGE, i.hBH.GIFV]),
                l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function s(e, t, n) {
                n.toAST;
                var r = n.hideSimpleEmbedContent,
                    i = void 0 === r || r,
                    l = n.formatInline,
                    s = void 0 !== l && l,
                    c = n.postProcessor,
                    u = !1,
                    d = e(t.content, !0, function(e, t) {
                        return {
                            allowLinks: null != e.webhookId || Boolean(t.allowLinks),
                            allowEmojiLinks: null != e.webhookId,
                            channelId: e.channel_id,
                            messageId: e.id,
                            mentionChannels: e.mentionChannels,
                            isInteracting: !!t.isInteracting,
                            formatInline: Boolean(t.formatInline),
                            noStyleAndInteraction: Boolean(t.noStyleAndInteraction),
                            allowHeading: Boolean(t.allowHeading),
                            allowList: Boolean(t.allowList),
                            previewLinkTarget: Boolean(t.previewLinkTarget),
                            disableAnimatedEmoji: Boolean(t.disableAnimatedEmoji),
                            disableAutoBlockNewlines: !0,
                            muted: !1
                        }
                    }(t, n), (function(e, n) {
                        Array.isArray(e) || (e = [e]);
                        i && (e = function(e, t) {
                            if (1 !== e.length || 1 !== t.length) return e;
                            var n = e[0],
                                r = t[0];
                            if ("link" === n.type && a.has(r.type) && (0, o.dY)(r)) return [];
                            return e
                        }(e, t.embeds));
                        s || (e = function(e, t) {
                            if (t) return f(e);
                            "paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = f(e[0].content));
                            return e
                        }(e, n));
                        0;
                        u = function(e, t) {
                            if (t) return p(e);
                            if ("paragraph" === e[0].type && e[0].content instanceof Array) return p(e[0].content);
                            return !1
                        }(e, n);
                        s && (e = m(e));
                        null != c && (e = c(e, n));
                        return e
                    }));
                return {
                    hasSpoilerEmbeds: u,
                    content: d
                }
            }

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? r.Z.parseInlineReply : r.Z.parse;
                return s(n, e, t)
            }

            function u(e, t, n, r) {
                return e(t, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: n,
                    disableAnimatedEmoji: !1,
                    channelId: r,
                    muted: !1
                }, (function(e) {
                    Array.isArray(e) || (e = [e]);
                    return e
                }))
            }

            function d(e, t, n) {
                return u(r.Z.parseAutoModerationSystemMessage, e, t, n)
            }

            function f(e) {
                if (e.some((function(e) {
                        return "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim())
                    }))) return e;
                var t = 0;
                e.forEach((function(e) {
                    "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type || (t += 1);
                    if (t > 30) return !1
                }));
                if (t > 30) return e;
                e.forEach((function(e) {
                    e.jumboable = !0
                }));
                return e
            }

            function p(e) {
                return e.some((function(e) {
                    return "spoiler" === e.type && Array.isArray(e.content) && e.content.some((function(e) {
                        return "link" === e.type
                    }))
                }))
            }

            function m(e) {
                e.forEach((function(e) {
                    l.has(e.type) && null != e.content && (Array.isArray(e.content) ? m(e.content) : e.content = e.content.replace(/\n/g, " "))
                }));
                return e
            }
        },
        834876: (e, t, n) => {
            "use strict";
            n.d(t, {
                ut: () => a,
                Gq: () => l,
                XX: () => s,
                Dv: () => c,
                bY: () => u,
                bX: () => d,
                iG: () => f,
                Gx: () => p
            });
            var r = n(344485),
                o = n(791707),
                i = n(2590);

            function a(e) {
                return "message-content-".concat(e.id)
            }

            function l(e) {
                return "message-reply-context-".concat(e.id)
            }

            function s(e, t) {
                var n = null != t ? t : e.id;
                return "message-username-".concat(n)
            }

            function c(e) {
                return "message-timestamp-".concat(e.id)
            }

            function u(e) {
                return "message-reactions-".concat(e.id)
            }

            function d(e) {
                return "message-accessories-".concat(e.id)
            }

            function f(e, t, n) {
                var u = e.type === i.uaV.REPLY && null != e.messageReference,
                    f = e.embeds.length > 0,
                    p = e.attachments.length > 0,
                    m = e.stickerItems.length > 0,
                    g = e.codedLinks.length > 0,
                    b = e.hasFlag(i.iLy.HAS_THREAD),
                    y = f || p || m || g || b || e.type === i.uaV.THREAD_CREATED,
                    h = f && e.content === e.embeds[0].url && e.embeds[0].type === i.hBH.GIFV,
                    O = e.type !== i.uaV.DEFAULT || !h && "" !== e.content,
                    v = (0, o.Z)(e),
                    j = !v && !1 !== (null == n ? void 0 : n.hasTimestamp),
                    E = !v,
                    P = s(e, t),
                    S = l(e),
                    w = E ? "".concat(u ? S : P, " ").concat(r.Z0) : "";
                if (O) {
                    var C = a(e);
                    w += " ".concat(C)
                }
                if (y) {
                    var A = d(e);
                    w += " ".concat(A)
                }
                if (j) {
                    var x = c(e);
                    w += " ".concat(r.fy, " ").concat(x)
                }
                return w.trim()
            }

            function p(e) {
                if (0 !== e.reactions.length) {
                    var t = u(e);
                    return "".concat(r.Mb, " ").concat(t)
                }
            }
        },
        350296: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(694278)),
                i = n(185759),
                a = n(550131);

            function l(e, t, n) {
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

            function c(e) {
                var t, n, c = (0, a.ZP)(e.message),
                    u = (0, o.x)({
                        message: e.message,
                        channel: e.channel,
                        user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
                        compact: !!e.compact,
                        isRepliedMessage: !!e.isRepliedMessage
                    }),
                    d = {};
                null != u && (d[i.a.SYSTEM_TAG] = u);
                return (0,
                    r.jsx)(i.Z, s(function(e) {
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
                }({}, e), {
                    author: c,
                    decorations: d
                }))
            }
        },
        593499: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(468482),
                o = n.n(r),
                i = {
                    LATIN12: o().latin12CompactTimeStamp,
                    LATIN24: o().latin24CompactTimeStamp,
                    ASIAN: o().asianCompactTimeStamp
                },
                a = /(AM|PM)$/;

            function l(e) {
                return null != e.match(a) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
            }
        },
        589591: (e, t, n) => {
            "use strict";
            n.d(t, {
                cp: () => d,
                QA: () => f,
                BF: () => p
            });
            var r = n(396043),
                o = n(979264),
                i = n(652591),
                a = n(940455),
                l = n(2590),
                s = n(936023),
                c = n.n(s);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                return (0,
                    o.Z)(e) && e.messageReference.guild_id === a.M_ || null != e.author && e.author.id === a.c9
            }

            function f() {
                return c()
            }
            var p = function(e) {
                i.default.track(l.rMx.USER_FLOW_TRANSITION, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    flow_type: a.tA,
                    from_step: e.fromStep,
                    to_step: e.toStep
                }, (0, r.hH)(e.guildId)))
            }
        },
        35012: (e, t, n) => {
            "use strict";
            n.d(t, {
                X$: () => o,
                _f: () => i
            });
            n(19585);
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_remix_ga",
                label: "Remix General Available",
                defaultConfig: {
                    canSeeRemixBadge: !1,
                    canRemix: !1,
                    isNitroPerk: !1
                },
                treatments: [{
                    id: 1,
                    label: "Remix for Nitro Subscribers",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !0,
                        isNitroPerk: !0
                    }
                }, {
                    id: 3,
                    label: "Upsell Remix for Non-Nitro Users",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !1,
                        isNitroPerk: !0
                    }
                }, {
                    id: 5,
                    label: "Remix GA for everyone",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !0,
                        isNitroPerk: !1
                    }
                }]
            });

            function o() {
                return r.useExperiment({
                    location: "canSeeRemixBadge"
                }, {
                    autoTrackExposure: !0
                }).canSeeRemixBadge
            }

            function i() {
                return Boolean(r.useExperiment({
                    location: "isRemixANitroPerkHook"
                }, {
                    autoTrackExposure: !0
                }).isNitroPerk)
            }
        },
        571724: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function l(e, t) {
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

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    s = e.height,
                    c = void 0 === s ? 16 : s,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = l(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: n,
                    height: c
                }, (0, o.Z)(f)), {
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.20038 2.39762V5.24178C9.20038 6.10455 9.89673 6.80072 10.7597 6.80072H13.6046C13.9558 6.80072 14.1343 6.37826 13.8844 6.12835L9.87292 2.11796C9.62295 1.86806 9.20038 2.04061 9.20038 2.39762ZM10.7461 8.01794C9.22044 8.01794 7.98197 6.77947 7.98197 5.25382V2.03499H3.19561C2.53749 2.03499 1.99902 2.57346 1.99902 3.23158V12.8043C1.99902 13.4624 2.53749 14.0009 3.19561 14.0009H12.7683C13.4265 14.0009 13.9649 13.4624 13.9649 12.8043V8.01794H10.7461ZM9.80015 9C9.80015 9.99411 8.99427 10.8 8.00015 10.8C7.00604 10.8 6.20015 9.99411 6.20015 9H5.00015C5.00015 10.6569 6.3433 12 8.00015 12C9.65701 12 11.0002 10.6569 11.0002 9H9.80015Z",
                        fill: d
                    })
                }))
            }
        },
        723876: (e, t, n) => {
            "use strict";
            n.d(t, {
                L5: () => O,
                HR: () => j,
                ZP: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(506907),
                s = n.n(l),
                c = n(199731),
                u = n(834876),
                d = n(42028),
                f = n(2590),
                p = n(473708),
                m = n(913198),
                g = n.n(m),
                b = n(468482),
                y = n.n(b);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e, t) {
                return e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED) ? p.Z.Messages.SOURCE_MESSAGE_DELETED : t
            }

            function v(e) {
                var t, n, i = e.className,
                    l = e.message,
                    c = e.children,
                    m = e.content,
                    b = e.onUpdate,
                    v = e.contentRef,
                    j = l.isEdited(),
                    E = l.state === f.yb.SEND_FAILED,
                    P = l.state === f.yb.SENDING,
                    S = l.isCommandType(),
                    w = null === (t = l.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
                    C = o.useRef(!1);
                o.useLayoutEffect((function() {
                    C.current ? null != b && b() : C.current = !0
                }), [b, l.content, m, w, c]);
                return (0, r.jsxs)("div", {
                    id: (0, u.ut)(l),
                    ref: v,
                    className: a()(i, g().markup, (n = {}, h(n, y().messageContent, !0), h(n, y().isSending, P && !S), h(n, y().markupRtl, "rtl" === s()(l.content)), h(n, y().isFailed, E), n)),
                    children: [null != c ? c : O(l, m), j && null != l.editedTimestamp && (0, r.jsxs)(r.Fragment, {
                        children: [" ", (0, r.jsx)(d.Z, {
                            timestamp: l.editedTimestamp,
                            isEdited: !0,
                            isInline: !1,
                            children: (0, r.jsxs)("span", {
                                className: y().edited,
                                children: ["(", p.Z.Messages.MESSAGE_EDITED, ")"]
                            })
                        })]
                    })]
                })
            }

            function j(e, t) {
                var n, r, o = t.message,
                    i = e.message;
                return (0,
                    c.Z)(e, t, ["message"]) && o.content === i.content && o.state === i.state && (null === (n = o.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (r = i.editedTimestamp) || void 0 === r ? void 0 : r.toString())
            }
            const E = o.memo(v, j)
        },
        42028: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(882723),
                l = n(593499),
                s = n(70145),
                c = n(473708),
                u = n(468482),
                d = n.n(u);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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
            const m = function(e) {
                var t, n = e.children,
                    o = e.className,
                    u = e.compact,
                    m = void 0 !== u && u,
                    g = e.timestamp,
                    b = e.isVisibleOnlyOnHover,
                    y = void 0 !== b && b,
                    h = e.cozyAlt,
                    O = void 0 !== h && h,
                    v = e.isInline,
                    j = void 0 === v || v,
                    E = e.id,
                    P = e.isEdited,
                    S = void 0 !== P && P,
                    w = (0, s.Hg)(g),
                    C = m ? (0, s.vc)(g, "LT") : (0, s.Y4)(g),
                    A = m ? (0, l.Z)(C) : null,
                    x = S ? c.Z.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                        timeFormatted: w
                    }) : w;
                return (0, r.jsx)("span", {
                    className: i()(o, A, (t = {}, f(t, d().timestamp, !0), f(t, d().timestampVisibleOnHover, y), f(t, d().timestampInline, j), f(t, d().alt, O), t)),
                    children: (0, r.jsx)(a.Tooltip, {
                        text: (0, s.vc)(g, "LLLL"),
                        "aria-label": x,
                        tooltipClassName: d().timestampTooltip,
                        delay: 750,
                        children: function(e) {
                            return (0, r.jsx)("time", p(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        f(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                id: E,
                                dateTime: g.toISOString(),
                                children: null != n ? n : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("i", {
                                        className: d().separator,
                                        "aria-hidden": !0,
                                        children: m ? "[" : " — "
                                    }), C, m && (0, r.jsxs)("i", {
                                        className: d().separator,
                                        "aria-hidden": !0,
                                        children: ["]", " "]
                                    })]
                                })
                            }))
                        }
                    })
                })
            }
        },
        763536: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => G,
                f: () => B
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(730381),
                s = n.n(l),
                c = n(882723),
                u = n(908741),
                d = n(834876),
                f = n(350296),
                p = n(593499),
                m = n(490355);

            function g(e, t) {
                return null != t && !!e.mentions.includes(t.author.id)
            }
            var b = n(513586),
                y = n(318313),
                h = n(816240),
                O = n(633878);

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e, t) {
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

            function E(e, t) {
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

            function P(e) {
                var t = e.width,
                    n = void 0 === t ? 19 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    s = e.foreground,
                    c = E(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", j(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            v(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, O.Z)(c)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 19 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.7036 11C12.7036 12.66 11.2786 14 9.5 14C7.72143 14 6.28571 12.66 6.28571 11V5C6.28571 3.34 7.72143 2 9.5 2C11.2786 2 12.7143 3.34 12.7143 5L12.7036 11ZM9.5 16.1C12.4571 16.1 15.1786 14 15.1786 11H17C17 14.42 14.0857 17.24 10.5714 17.72V22H8.42857V17.72C4.91429 17.23 2 14.41 2 11H3.82143C3.82143 14 6.54286 16.1 9.5 16.1Z",
                        fill: l,
                        className: s
                    })
                }))
            }
            var S = n(571724),
                w = n(325198),
                C = n(775173),
                A = n(70145),
                x = n(72580),
                T = n(723876),
                I = n(939198),
                M = n(2590),
                N = n(473708),
                R = n(468482),
                _ = n.n(R);

            function D(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e) {
                var t = e.width,
                    n = void 0 === t ? 12 : t,
                    o = e.height,
                    i = void 0 === o ? 8 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    s = e.className,
                    c = e.foreground;
                return (0,
                    r.jsx)("svg", {
                    className: s,
                    width: n,
                    height: i,
                    viewBox: "0 0 12 8",
                    children: (0, r.jsx)("path", {
                        d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
                        className: c,
                        fill: l
                    })
                })
            }

            function k(e) {
                var t = e.width,
                    n = void 0 === t ? 18 : t,
                    o = e.height,
                    i = void 0 === o ? 18 : o,
                    a = e.className,
                    l = e.foreground;
                return (0, r.jsx)("svg", {
                    className: a,
                    width: n,
                    height: i,
                    viewBox: "0 0 18 18",
                    children: (0, r.jsx)("path", {
                        fill: "#3ba55c",
                        d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
                        className: l
                    })
                })
            }

            function Z(e, t, n) {
                var o = e.referencedMessage,
                    i = e.compact,
                    l = e.isReplyAuthorBlocked,
                    s = e.repliedAuthor,
                    u = e.showAvatarPopout,
                    d = e.onClickAvatar,
                    f = e.onContextMenu,
                    p = e.onPopoutRequestClose;
                if (i || o.state !== m.Y.LOADED || l) return (0, r.jsx)("div", {
                    className: _().replyBadge,
                    children: (0, r.jsx)(L, {
                        className: _().replyIcon
                    })
                });
                if (o.message.type === M.uaV.USER_JOIN || o.message.type === M.uaV.ROLE_SUBSCRIPTION_PURCHASE || o.message.type === M.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || o.message.type === M.uaV.GUILD_GAMING_STATS_PROMPT) return (0, r.jsx)(k, {
                    className: _().userJoinSystemMessageIcon
                });
                if (o.message.type === M.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, r.jsx)(w.Z, {
                    className: _().ticketIcon
                });
                var g = function() {
                    return function(e, t, n, o, i) {
                        var l;
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: null != (null == t ? void 0 : t.guildMemberAvatar) && null != n ? (0, C.JM)({
                                guildId: n,
                                userId: e.id,
                                avatar: t.guildMemberAvatar
                            }) : e.getAvatarURL(n, 16),
                            onClick: o,
                            onContextMenu: i,
                            className: a()((l = {}, D(l, _().replyAvatar, !0), D(l, _().clickable, null != o), l))
                        })
                    }(o.message.author, s, t, d, f)
                };
                return null != n && null != u ? (0, r.jsx)(c.Popout, {
                    renderPopout: n,
                    shouldShow: u,
                    position: "right",
                    onRequestClose: p,
                    children: g
                }) : g()
            }

            function B(e, t, n, o, i) {
                var a, l, s, c = i.iconClass,
                    u = i.iconSize,
                    d = null == t || "" === t || Array.isArray(t) && 0 === t.length,
                    f = (0, b.cv)(e).length > 0,
                    p = null != e.interaction,
                    m = e.hasFlag(M.iLy.IS_VOICE_MESSAGE);
                if (n) a = N.Z.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
                else if (e.type === M.uaV.CHANNEL_PINNED_MESSAGE) a = N.Z.Messages.MESSAGE_PINNED;
                else if (d)
                    if (f) a = N.Z.Messages.REPLY_QUOTE_STICKER;
                    else if (p) a = N.Z.Messages.REPLY_QUOTE_COMMAND;
                else if (m) a = N.Z.Messages.REPLY_QUOTE_VOICE_MESSAGE;
                else {
                    a = N.Z.Messages.REPLY_QUOTE_NO_TEXT_CONTENT;
                    s = (0, r.jsx)(h.Z, {
                        className: c,
                        width: u,
                        height: u
                    })
                } else l = (0,
                    r.jsx)(T.ZP, {
                    message: e,
                    content: t,
                    className: o
                });
                f ? s = (0, r.jsx)(S.Z, {
                    className: c,
                    width: u,
                    height: u
                }) : p ? s = (0, r.jsx)(y.Z, {
                    className: c,
                    width: u,
                    height: u
                }) : m ? s = (0, r.jsx)(P, {
                    className: c,
                    width: u * (19 / 24),
                    height: u
                }) : (e.attachments.length > 0 || e.embeds.length > 0) && (s = (0, r.jsx)(h.Z, {
                    className: c,
                    width: u,
                    height: u
                }));
                return {
                    contentPlaceholder: a,
                    renderedContent: l,
                    icon: s
                }
            }

            function G(e) {
                var t, n = e.repliedAuthor,
                    i = e.baseAuthor,
                    l = e.baseMessage,
                    b = e.referencedMessage,
                    y = e.renderPopout,
                    h = o.useMemo((function() {
                        return null != y && b.state === m.Y.LOADED ? function(e) {
                            return y(e, b.message)
                        } : void 0
                    }), [b, y]),
                    O = o.useContext(u.Z),
                    v = Z(e, O, h),
                    j = function(e, t) {
                        var n = e.baseMessage,
                            o = e.channel,
                            i = e.referencedMessage,
                            a = e.showUsernamePopout,
                            l = e.onClickUsername,
                            s = e.onContextMenu,
                            c = e.onPopoutRequestClose,
                            u = (null == i ? void 0 : i.state) === m.Y.LOADED ? i.message : void 0;
                        return null == u || u.type === M.uaV.USER_JOIN || u.type === M.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === M.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === M.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === M.uaV.GUILD_GAMING_STATS_PROMPT ? null : (0, r.jsx)(f.Z, {
                            message: u,
                            channel: o,
                            compact: !0,
                            withMentionPrefix: g(n, u),
                            showPopout: a,
                            renderPopout: t,
                            onClick: l,
                            onContextMenu: s,
                            onPopoutRequestClose: c,
                            isRepliedMessage: !0
                        })
                    }(e, h),
                    E = function(e) {
                        var t = e.content,
                            n = e.referencedMessage,
                            o = e.isReplyAuthorBlocked,
                            i = n.state !== m.Y.DELETED ? e.onClickReply : void 0;
                        switch (n.state) {
                            case m.Y.LOADED:
                                var l = B(n.message, t, o, _().repliedTextContent, {
                                        iconClass: _().repliedTextContentIcon,
                                        iconSize: I.WW
                                    }),
                                    s = l.contentPlaceholder,
                                    u = l.renderedContent,
                                    d = l.icon;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(c.Clickable, {
                                        className: a()(_().repliedTextPreview, _().clickable),
                                        onClick: i,
                                        children: (0, r.jsx)(c.BlockInteractions, {
                                            children: null != u ? u : (0, r.jsx)("span", {
                                                className: _().repliedTextPlaceholder,
                                                children: s
                                            })
                                        })
                                    }), d]
                                });
                            case m.Y.NOT_LOADED:
                                return (0, r.jsx)(c.Clickable, {
                                    className: a()(_().repliedTextPreview, _().clickable),
                                    onClick: i,
                                    children: (0, r.jsx)("span", {
                                        className: _().repliedTextPlaceholder,
                                        children: N.Z.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                                    })
                                });
                            case m.Y.DELETED:
                                return (0, r.jsx)("div", {
                                    className: _().repliedTextPreview,
                                    children: (0, r.jsx)("span", {
                                        className: _().repliedTextPlaceholder,
                                        children: N.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
                                    })
                                });
                            default:
                                (0, x.vE)(n)
                        }
                    }(e),
                    P = o.useMemo((function() {
                        return e.compact ? (0, p.Z)((0, A.vc)(s()(), "LT")) : null
                    }), [e.compact]);
                null != n && null != i && (t = N.Z.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
                    author: null == i ? void 0 : i.nick,
                    repliedAuthor: null == n ? void 0 : n.nick
                }));
                return (0, r.jsxs)("div", {
                    id: (0, d.Gq)(l),
                    className: a()(_().repliedMessage, P),
                    "aria-label": t,
                    children: [v, j, E]
                })
            }
        },
        694278: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => u
            });
            var r = n(785893),
                o = (n(667294), n(979264)),
                i = n(589591),
                a = n(609853),
                l = n(876986),
                s = n(468482),
                c = n.n(s);

            function u(e) {
                var t, n = e.message,
                    s = e.channel,
                    u = e.user,
                    d = e.compact,
                    f = e.isRepliedMessage;
                (null == n ? void 0 : n.isSystemDM()) ? t = a.Z.Types.SYSTEM_DM: null != n && (0, o.Z)(n) ? t = (0, i.cp)(n) ? a.Z.Types.OFFICIAL : a.Z.Types.SERVER : (null == u ? void 0 : u.id) === l.fL ? t = a.Z.Types.AI : (null == u ? void 0 : u.bot) ? t = a.Z.Types.BOT : null != s && s.isForumPost() && s.ownerId === (null == u ? void 0 : u.id) && !f && (t = a.Z.Types.ORIGINAL_POSTER);
                return null == t ? null : (0, r.jsx)(a.Z, {
                    className: d ? c().botTagCompact : c().botTagCozy,
                    type: t,
                    verified: null == u ? void 0 : u.isVerifiedBot(),
                    useRemSizes: !0
                })
            }
        },
        185759: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => r,
                Z: () => w
            });
            var r, o = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                s = n(289283),
                c = n(202351),
                u = n(882723),
                d = n(316878),
                f = n(908741),
                p = n(928066),
                m = n(35012),
                g = n(736626),
                b = n(609853),
                y = n(775173),
                h = n(468482),
                O = n.n(h);

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
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

            function P(e, t) {
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
            }! function(e) {
                e[e.SYSTEM_TAG = 0] = "SYSTEM_TAG";
                e[e.BADGES = 1] = "BADGES"
            }(r || (r = {}));

            function S(e) {
                var t = e.compact;
                return (0, o.jsx)(b.Z, {
                    className: t ? O().botTagCompact : O().botTagCozy,
                    type: b.Z.Types.REMIX,
                    useRemSizes: !0
                })
            }

            function w(e) {
                var t, n = e.author,
                    a = e.message,
                    b = e.userOverride,
                    h = e.compact,
                    v = void 0 !== h && h,
                    w = e.withMentionPrefix,
                    C = void 0 !== w && w,
                    A = e.showPopout,
                    x = void 0 !== A && A,
                    T = e.className,
                    I = e.onClick,
                    M = e.onContextMenu,
                    N = e.onPopoutRequestClose,
                    R = e.renderPopout,
                    _ = e.renderRemixTag,
                    D = void 0 !== _ && _,
                    L = e.decorations,
                    k = i.useContext(f.Z),
                    Z = C ? "@" : "",
                    B = n.nick,
                    G = n.colorString,
                    U = n.colorRoleName,
                    V = null != a.messageReference && null != a.webhookId,
                    H = (0, c.e7)([d.Z], (function() {
                        return d.Z.roleStyle
                    })),
                    Y = "username" === H,
                    F = "dot" === H,
                    q = (0, m.X$)(),
                    z = {
                        className: O().username,
                        style: Y && null != G ? {
                            color: G
                        } : void 0,
                        onClick: I,
                        onContextMenu: M,
                        children: Z + B
                    };
                if (null != R && null != x) {
                    t = (0, o.jsx)(u.Popout, {
                        preload: V ? void 0 : function() {
                            var e = null != b ? b : a.author;
                            return (0, g.Z)(e.id, null != n.guildMemberAvatar && null != k ? (0, y.JM)({
                                guildId: k,
                                userId: e.id,
                                avatar: n.guildMemberAvatar,
                                size: 80
                            }) : e.getAvatarURL(k, 80), {
                                guildId: k,
                                channelId: a.channel_id
                            })
                        },
                        renderPopout: R,
                        shouldShow: x,
                        position: s.tq ? "window_center" : "right",
                        onRequestClose: N,
                        children: function(e) {
                            e.onClick;
                            var t = P(e, ["onClick"]);
                            return (0, o.jsx)(u.Clickable, E(j({
                                tag: "span"
                            }, t, z), {
                                className: l()(z.className, O().clickable, T)
                            }))
                        }
                    })
                } else t = (0, o.jsx)(u.Clickable, E(j({}, z), {
                    className: l()(z.className, T)
                }));
                var Q = null != L ? L[r.SYSTEM_TAG] : null,
                    X = null != L ? L[r.BADGES] : null;
                return (0, o.jsxs)(o.Fragment, {
                    children: [null != Q && v ? (0, o.jsxs)(o.Fragment, {
                        children: [" ", Q, " "]
                    }) : null, F ? (0, o.jsx)(u.RoleDot, {
                        color: G,
                        name: U,
                        className: O().roleDot
                    }) : null, t, null != X ? (0, o.jsx)(o.Fragment, {
                        children: X
                    }) : null, null == Q || v ? null : Q, null != a && (0, p.Z)(a) && q && D ? (0, o.jsx)(S, {}) : null]
                })
            }
        }
    }
]);
//# sourceMappingURL=00b9f7de8e6f83a08ab5.js.map