(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [65278], {
        103468: (e, t, n) => {
            e.exports = n.p + "2b439d31cec19aa2bb1b48efeb30c9ab.png"
        },
        238823: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => s
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
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

            function c(e, t) {
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

            function a(e, t) {
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
            var s = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    m = void 0 === p ? "" : p,
                    b = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, i.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: m
                    })
                }))
            }
        },
        872017: (e, t, n) => {
            "use strict";
            n.d(t, {
                AB: () => c,
                ZP: () => u,
                s5: () => d
            });
            var r = n(202351),
                o = n(21372),
                i = n(473903),
                l = n(309945);

            function c(e) {
                var t = (0, r.e7)([i.default], (function() {
                    return i.default.getCurrentUser()
                }));
                return u(null == t ? void 0 : t.id, e)
            }

            function a(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, l.b)(e)]
            }

            function u(e, t) {
                return s((0, r.e7)([o.ZP], (function() {
                    return a(e, t, o.ZP)
                }), [t, e]))
            }

            function d(e, t) {
                return s(a(e, t, o.ZP))
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
                ZP: () => s,
                k$: () => d
            });
            n(940007);
            var r = n(883064),
                o = n(473291),
                i = n(2590);
            var l = new Set([i.hBH.IMAGE, i.hBH.GIFV]),
                c = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function a(e, t, n) {
                n.toAST;
                var r = n.hideSimpleEmbedContent,
                    i = void 0 === r || r,
                    c = n.formatInline,
                    a = void 0 !== c && c,
                    s = n.postProcessor,
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
                            if ("link" === n.type && l.has(r.type) && (0, o.dY)(r)) return [];
                            return e
                        }(e, t.embeds));
                        a || (e = function(e, t) {
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
                        a && (e = m(e));
                        null != s && (e = s(e, n));
                        return e
                    }));
                return {
                    hasSpoilerEmbeds: u,
                    content: d
                }
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? r.Z.parseInlineReply : r.Z.parse;
                return a(n, e, t)
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
                    c.has(e.type) && null != e.content && (Array.isArray(e.content) ? m(e.content) : e.content = e.content.replace(/\n/g, " "))
                }));
                return e
            }
        },
        834876: (e, t, n) => {
            "use strict";
            n.d(t, {
                ut: () => l,
                Gq: () => c,
                XX: () => a,
                Dv: () => s,
                bY: () => u,
                bX: () => d,
                iG: () => f,
                Gx: () => p
            });
            var r = n(344485),
                o = n(791707),
                i = n(2590);

            function l(e) {
                return "message-content-".concat(e.id)
            }

            function c(e) {
                return "message-reply-context-".concat(e.id)
            }

            function a(e, t) {
                var n = null != t ? t : e.id;
                return "message-username-".concat(n)
            }

            function s(e) {
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
                    b = e.codedLinks.length > 0,
                    g = e.hasFlag(i.iLy.HAS_THREAD),
                    O = f || p || m || b || g || e.type === i.uaV.THREAD_CREATED,
                    y = f && e.content === e.embeds[0].url && e.embeds[0].type === i.hBH.GIFV,
                    h = e.type !== i.uaV.DEFAULT || !y && "" !== e.content,
                    v = (0, o.Z)(e),
                    j = !v && !1 !== (null == n ? void 0 : n.hasTimestamp),
                    P = !v,
                    E = a(e, t),
                    w = c(e),
                    S = P ? "".concat(u ? w : E, " ").concat(r.Z0) : "";
                if (h) {
                    var C = l(e);
                    S += " ".concat(C)
                }
                if (O) {
                    var x = d(e);
                    S += " ".concat(x)
                }
                if (j) {
                    var A = s(e);
                    S += " ".concat(r.fy, " ").concat(A)
                }
                return S.trim()
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
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(694278)),
                i = n(185759),
                l = n(550131);

            function c(e, t, n) {
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

            function s(e) {
                var t, n, s = (0, l.ZP)(e.message),
                    u = (0, o.x)({
                        message: e.message,
                        channel: e.channel,
                        user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
                        compact: !!e.compact,
                        isRepliedMessage: !!e.isRepliedMessage
                    }),
                    d = {};
                null != u && (d[i.a.SYSTEM_TAG] = u);
                return (0, r.jsx)(i.Z, a(function(e) {
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
                }({}, e), {
                    author: s,
                    decorations: d
                }))
            }
        },
        593499: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(927570),
                o = n.n(r),
                i = {
                    LATIN12: o().latin12CompactTimeStamp,
                    LATIN24: o().latin24CompactTimeStamp,
                    ASIAN: o().asianCompactTimeStamp
                },
                l = /(AM|PM)$/;

            function c(e) {
                return null != e.match(l) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
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
                l = n(940455),
                c = n(2590),
                a = n(103468),
                s = n.n(a);

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
                return (0, o.Z)(e) && e.messageReference.guild_id === l.M_ || null != e.author && e.author.id === l.c9
            }

            function f() {
                return s()
            }
            var p = function(e) {
                i.default.track(c.rMx.USER_FLOW_TRANSITION, function(e) {
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
                    flow_type: l.tA,
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
        674168: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                l = n(633878);

            function c(e, t, n) {
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

            function s(e, t) {
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
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    m = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm12 13h1.73a2.998 2.998 0 0 1-.609.879L16.88 20.12a2.998 2.998 0 0 1-.879.61V19a3 3 0 0 1 3-3ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.911 2.944a1 1 0 0 0-1.662 1.112A5.496 5.496 0 0 0 12 15a5.496 5.496 0 0 0 4.573-2.444 1 1 0 0 0-1.662-1.112A3.496 3.496 0 0 1 12 13a3.496 3.496 0 0 1-2.911-1.556Z",
                        clipRule: "evenodd",
                        className: m
                    })
                }))
            };

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
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

            function m(e, t) {
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
            const b = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    s = m(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", p(f({
                    width: n,
                    height: i
                }, (0, l.Z)(s)), {
                    viewBox: "0 0 16 16",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.20038 2.39762V5.24178C9.20038 6.10455 9.89673 6.80072 10.7597 6.80072H13.6046C13.9558 6.80072 14.1343 6.37826 13.8844 6.12835L9.87292 2.11796C9.62295 1.86806 9.20038 2.04061 9.20038 2.39762ZM10.7461 8.01794C9.22044 8.01794 7.98197 6.77947 7.98197 5.25382V2.03499H3.19561C2.53749 2.03499 1.99902 2.57346 1.99902 3.23158V12.8043C1.99902 13.4624 2.53749 14.0009 3.19561 14.0009H12.7683C13.4265 14.0009 13.9649 13.4624 13.9649 12.8043V8.01794H10.7461ZM9.80015 9C9.80015 9.99411 8.99427 10.8 8.00015 10.8C7.00604 10.8 6.20015 9.99411 6.20015 9H5.00015C5.00015 10.6569 6.3433 12 8.00015 12C9.65701 12 11.0002 10.6569 11.0002 9H9.80015Z",
                        fill: a
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = m(e, ["width", "height"]);
                return (0, r.jsx)(u, f({
                    width: n,
                    height: i
                }, l))
            }))
        },
        723876: (e, t, n) => {
            "use strict";
            n.d(t, {
                L5: () => h,
                HR: () => j,
                ZP: () => P
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                c = n(506907),
                a = n.n(c),
                s = n(199731),
                u = n(834876),
                d = n(42028),
                f = n(2590),
                p = n(473708),
                m = n(169595),
                b = n.n(m),
                g = n(927570),
                O = n.n(g);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e, t) {
                return e.type === f.uaV.POLL ? "" : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED) ? p.Z.Messages.SOURCE_MESSAGE_DELETED : t
            }

            function v(e) {
                var t, n, i = e.className,
                    c = e.message,
                    s = e.children,
                    m = e.content,
                    g = e.onUpdate,
                    v = e.contentRef,
                    j = c.isEdited(),
                    P = c.state === f.yb.SEND_FAILED,
                    E = c.state === f.yb.SENDING,
                    w = c.isCommandType(),
                    S = null === (t = c.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
                    C = o.useRef(!1);
                o.useLayoutEffect((function() {
                    C.current ? null != g && g() : C.current = !0
                }), [g, c.content, m, S, s]);
                return (0, r.jsxs)("div", {
                    id: (0, u.ut)(c),
                    ref: v,
                    className: l()(i, b().markup, (n = {}, y(n, O().messageContent, !0), y(n, O().isSending, E && !w), y(n, O().markupRtl, "rtl" === a()(c.content)), y(n, O().isFailed, P), n)),
                    children: [null != s ? s : h(c, m), j && null != c.editedTimestamp && (0, r.jsxs)(r.Fragment, {
                        children: [" ", (0, r.jsx)(d.Z, {
                            timestamp: c.editedTimestamp,
                            isEdited: !0,
                            isInline: !1,
                            children: (0, r.jsxs)("span", {
                                className: O().edited,
                                children: ["(", p.Z.Messages.MESSAGE_EDITED, ")"]
                            })
                        })]
                    })]
                })
            }

            function j(e, t) {
                var n, r, o = t.message,
                    i = e.message;
                return (0, s.Z)(e, t, ["message"]) && o.content === i.content && o.state === i.state && (null === (n = o.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (r = i.editedTimestamp) || void 0 === r ? void 0 : r.toString())
            }
            const P = o.memo(v, j)
        },
        42028: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                l = n(304548),
                c = n(593499),
                a = n(70145),
                s = n(473708),
                u = n(927570),
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
                    b = e.timestamp,
                    g = e.isVisibleOnlyOnHover,
                    O = void 0 !== g && g,
                    y = e.cozyAlt,
                    h = void 0 !== y && y,
                    v = e.isInline,
                    j = void 0 === v || v,
                    P = e.id,
                    E = e.isEdited,
                    w = void 0 !== E && E,
                    S = (0, a.Hg)(b),
                    C = m ? (0, a.vc)(b, "LT") : (0, a.Y4)(b),
                    x = m ? (0, c.Z)(C) : null,
                    A = w ? s.Z.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                        timeFormatted: S
                    }) : S;
                return (0, r.jsx)("span", {
                    className: i()(o, x, (t = {}, f(t, d().timestamp, !0), f(t, d().timestampVisibleOnHover, O), f(t, d().timestampInline, j), f(t, d().alt, h), t)),
                    children: (0, r.jsx)(l.Tooltip, {
                        text: (0, a.vc)(b, "LLLL"),
                        "aria-label": A,
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
                                id: P,
                                dateTime: b.toISOString(),
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
                Z: () => U,
                f: () => G
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                l = n.n(i),
                c = n(730381),
                a = n.n(c),
                s = n(304548),
                u = n(908741),
                d = n(834876),
                f = n(350296),
                p = n(593499),
                m = n(490355);

            function b(e, t) {
                return null != t && !!e.mentions.includes(t.author.id)
            }
            var g = n(513586),
                O = n(223175),
                y = n(816240),
                h = n(168075),
                v = n(238823),
                j = n(633878);

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function w(e, t) {
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
            const S = (0, h.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 19 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    a = e.foreground,
                    s = w(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", E(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            P(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, j.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 19 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.7036 11C12.7036 12.66 11.2786 14 9.5 14C7.72143 14 6.28571 12.66 6.28571 11V5C6.28571 3.34 7.72143 2 9.5 2C11.2786 2 12.7143 3.34 12.7143 5L12.7036 11ZM9.5 16.1C12.4571 16.1 15.1786 14 15.1786 11H17C17 14.42 14.0857 17.24 10.5714 17.72V22H8.42857V17.72C4.91429 17.23 2 14.41 2 11H3.82143C3.82143 14 6.54286 16.1 9.5 16.1Z",
                        fill: c,
                        className: a
                    })
                }))
            }), v.S);
            var C = n(674168),
                x = n(163992),
                A = n(775173),
                T = n(70145),
                I = n(72580),
                N = n(723876),
                M = n(939198),
                R = n(2590),
                D = n(473708),
                _ = n(927570),
                L = n.n(_);

            function k(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Z(e) {
                var t = e.width,
                    n = void 0 === t ? 12 : t,
                    o = e.height,
                    i = void 0 === o ? 8 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    a = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: a,
                    width: n,
                    height: i,
                    viewBox: "0 0 12 8",
                    children: (0, r.jsx)("path", {
                        d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
                        className: s,
                        fill: c
                    })
                })
            }

            function B(e) {
                var t = e.width,
                    n = void 0 === t ? 18 : t,
                    o = e.height,
                    i = void 0 === o ? 18 : o,
                    l = e.className,
                    c = e.foreground;
                return (0, r.jsx)("svg", {
                    className: l,
                    width: n,
                    height: i,
                    viewBox: "0 0 18 18",
                    children: (0, r.jsx)("path", {
                        fill: "#3ba55c",
                        d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
                        className: c
                    })
                })
            }

            function V(e, t, n) {
                var o = e.referencedMessage,
                    i = e.compact,
                    c = e.isReplyAuthorBlocked,
                    a = e.repliedAuthor,
                    u = e.showAvatarPopout,
                    d = e.onClickAvatar,
                    f = e.onContextMenu,
                    p = e.onPopoutRequestClose;
                if (i || o.state !== m.Y.LOADED || c) return (0, r.jsx)("div", {
                    className: L().replyBadge,
                    children: (0, r.jsx)(Z, {
                        className: L().replyIcon
                    })
                });
                if (o.message.type === R.uaV.USER_JOIN || o.message.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || o.message.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || o.message.type === R.uaV.GUILD_GAMING_STATS_PROMPT) return (0, r.jsx)(B, {
                    className: L().userJoinSystemMessageIcon
                });
                if (o.message.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, r.jsx)(x.Z, {
                    className: L().ticketIcon
                });
                var b = function() {
                    return function(e, t, n, o, i) {
                        var c;
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: null != (null == t ? void 0 : t.guildMemberAvatar) && null != n ? (0, A.JM)({
                                guildId: n,
                                userId: e.id,
                                avatar: t.guildMemberAvatar
                            }) : e.getAvatarURL(n, 16),
                            onClick: o,
                            onContextMenu: i,
                            className: l()((c = {}, k(c, L().replyAvatar, !0), k(c, L().clickable, null != o), c))
                        })
                    }(o.message.author, a, t, d, f)
                };
                return null != n && null != u ? (0, r.jsx)(s.Popout, {
                    renderPopout: n,
                    shouldShow: u,
                    position: "right",
                    onRequestClose: p,
                    children: b
                }) : b()
            }

            function G(e, t, n, o, i) {
                var l, c, a, s = i.iconClass,
                    u = i.iconSize,
                    d = null == t || "" === t || Array.isArray(t) && 0 === t.length,
                    f = (0, g.cv)(e).length > 0,
                    p = null != e.interaction,
                    m = e.hasFlag(R.iLy.IS_VOICE_MESSAGE);
                if (n) l = D.Z.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
                else if (e.type === R.uaV.CHANNEL_PINNED_MESSAGE) l = D.Z.Messages.MESSAGE_PINNED;
                else if (d)
                    if (f) l = D.Z.Messages.REPLY_QUOTE_STICKER;
                    else if (p) l = D.Z.Messages.REPLY_QUOTE_COMMAND;
                else if (m) l = D.Z.Messages.REPLY_QUOTE_VOICE_MESSAGE;
                else {
                    l = D.Z.Messages.REPLY_QUOTE_NO_TEXT_CONTENT;
                    a = (0, r.jsx)(y.Z, {
                        className: s,
                        width: u,
                        height: u
                    })
                } else c = (0,
                    r.jsx)(N.ZP, {
                    message: e,
                    content: t,
                    className: o
                });
                f ? a = (0, r.jsx)(C.Z, {
                    className: s,
                    width: u,
                    height: u
                }) : p ? a = (0, r.jsx)(O.Z, {
                    className: s,
                    width: u,
                    height: u
                }) : m ? a = (0, r.jsx)(S, {
                    className: s,
                    width: u * (19 / 24),
                    height: u
                }) : (e.attachments.length > 0 || e.embeds.length > 0) && (a = (0, r.jsx)(y.Z, {
                    className: s,
                    width: u,
                    height: u
                }));
                return {
                    contentPlaceholder: l,
                    renderedContent: c,
                    icon: a
                }
            }

            function U(e) {
                var t, n = e.repliedAuthor,
                    i = e.baseAuthor,
                    c = e.baseMessage,
                    g = e.referencedMessage,
                    O = e.renderPopout,
                    y = o.useMemo((function() {
                        return null != O && g.state === m.Y.LOADED ? function(e) {
                            return O(e, g.message)
                        } : void 0
                    }), [g, O]),
                    h = o.useContext(u.Z),
                    v = V(e, h, y),
                    j = function(e, t) {
                        var n = e.baseMessage,
                            o = e.channel,
                            i = e.referencedMessage,
                            l = e.showUsernamePopout,
                            c = e.onClickUsername,
                            a = e.onContextMenu,
                            s = e.onPopoutRequestClose,
                            u = (null == i ? void 0 : i.state) === m.Y.LOADED ? i.message : void 0;
                        return null == u || u.type === R.uaV.USER_JOIN || u.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === R.uaV.GUILD_GAMING_STATS_PROMPT ? null : (0, r.jsx)(f.Z, {
                            message: u,
                            channel: o,
                            compact: !0,
                            withMentionPrefix: b(n, u),
                            showPopout: l,
                            renderPopout: t,
                            onClick: c,
                            onContextMenu: a,
                            onPopoutRequestClose: s,
                            isRepliedMessage: !0
                        })
                    }(e, y),
                    P = function(e) {
                        var t = e.content,
                            n = e.referencedMessage,
                            o = e.isReplyAuthorBlocked,
                            i = n.state !== m.Y.DELETED ? e.onClickReply : void 0;
                        switch (n.state) {
                            case m.Y.LOADED:
                                var c = G(n.message, t, o, L().repliedTextContent, {
                                        iconClass: L().repliedTextContentIcon,
                                        iconSize: M.WW
                                    }),
                                    a = c.contentPlaceholder,
                                    u = c.renderedContent,
                                    d = c.icon;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(s.Clickable, {
                                        className: l()(L().repliedTextPreview, L().clickable),
                                        onClick: i,
                                        children: (0, r.jsx)(s.BlockInteractions, {
                                            children: null != u ? u : (0, r.jsx)("span", {
                                                className: L().repliedTextPlaceholder,
                                                children: a
                                            })
                                        })
                                    }), d]
                                });
                            case m.Y.NOT_LOADED:
                                return (0, r.jsx)(s.Clickable, {
                                    className: l()(L().repliedTextPreview, L().clickable),
                                    onClick: i,
                                    children: (0, r.jsx)("span", {
                                        className: L().repliedTextPlaceholder,
                                        children: D.Z.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                                    })
                                });
                            case m.Y.DELETED:
                                return (0, r.jsx)("div", {
                                    className: L().repliedTextPreview,
                                    children: (0, r.jsx)("span", {
                                        className: L().repliedTextPlaceholder,
                                        children: D.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
                                    })
                                });
                            default:
                                (0, I.vE)(n)
                        }
                    }(e),
                    E = o.useMemo((function() {
                        return e.compact ? (0, p.Z)((0, T.vc)(a()(), "LT")) : null
                    }), [e.compact]);
                null != n && null != i && (t = D.Z.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
                    author: null == i ? void 0 : i.nick,
                    repliedAuthor: null == n ? void 0 : n.nick
                }));
                return (0, r.jsxs)("div", {
                    id: (0, d.Gq)(c),
                    className: l()(L().repliedMessage, E),
                    "aria-label": t,
                    children: [v, j, P]
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
                l = n(609853),
                c = n(876986),
                a = n(927570),
                s = n.n(a);

            function u(e) {
                var t, n = e.message,
                    a = e.channel,
                    u = e.user,
                    d = e.compact,
                    f = e.isRepliedMessage,
                    p = e.hideIcon,
                    m = void 0 !== p && p,
                    b = e.children;
                (null == n ? void 0 : n.isSystemDM()) ? t = l.Z.Types.SYSTEM_DM: null != n && (0, o.Z)(n) ? t = (0, i.cp)(n) ? l.Z.Types.OFFICIAL : l.Z.Types.SERVER : (null == u ? void 0 : u.id) === c.fL ? t = l.Z.Types.AI : (null == u ? void 0 : u.bot) ? t = l.Z.Types.BOT : null != a && a.isForumPost() && a.ownerId === (null == u ? void 0 : u.id) && !f && (t = l.Z.Types.ORIGINAL_POSTER);
                return null == t ? null : (0, r.jsx)(l.Z, {
                    className: d ? s().botTagCompact : s().botTagCozy,
                    type: t,
                    verified: null == u ? void 0 : u.isVerifiedBot(),
                    hideIcon: m,
                    useRemSizes: !0,
                    children: b
                })
            }
        },
        185759: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => r,
                Z: () => S
            });
            var r, o = n(785893),
                i = n(667294),
                l = n(294184),
                c = n.n(l),
                a = n(289283),
                s = n(202351),
                u = n(304548),
                d = n(316878),
                f = n(908741),
                p = n(928066),
                m = n(35012),
                b = n(736626),
                g = n(609853),
                O = n(775173),
                y = n(927570),
                h = n.n(y);

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

            function P(e, t) {
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
            }! function(e) {
                e[e.SYSTEM_TAG = 0] = "SYSTEM_TAG";
                e[e.BADGES = 1] = "BADGES"
            }(r || (r = {}));

            function w(e) {
                var t = e.compact;
                return (0, o.jsx)(g.Z, {
                    className: t ? h().botTagCompact : h().botTagCozy,
                    type: g.Z.Types.REMIX,
                    useRemSizes: !0
                })
            }

            function S(e) {
                var t, n = e.author,
                    l = e.message,
                    g = e.userOverride,
                    y = e.compact,
                    v = void 0 !== y && y,
                    S = e.withMentionPrefix,
                    C = void 0 !== S && S,
                    x = e.showPopout,
                    A = void 0 !== x && x,
                    T = e.className,
                    I = e.onClick,
                    N = e.onContextMenu,
                    M = e.onPopoutRequestClose,
                    R = e.renderPopout,
                    D = e.renderRemixTag,
                    _ = void 0 !== D && D,
                    L = e.decorations,
                    k = i.useContext(f.Z),
                    Z = C ? "@" : "",
                    B = n.nick,
                    V = n.colorString,
                    G = n.colorRoleName,
                    U = null != l.messageReference && null != l.webhookId,
                    H = (0, s.e7)([d.Z], (function() {
                        return d.Z.roleStyle
                    })),
                    Y = "username" === H,
                    F = "dot" === H,
                    q = (0, m.X$)(),
                    z = {
                        className: h().username,
                        style: Y && null != V ? {
                            color: V
                        } : void 0,
                        onClick: I,
                        onContextMenu: N,
                        children: Z + B
                    };
                if (null != R && null != A) {
                    t = (0, o.jsx)(u.Popout, {
                        preload: U ? void 0 : function() {
                            var e = null != g ? g : l.author;
                            return (0, b.Z)(e.id, null != n.guildMemberAvatar && null != k ? (0, O.JM)({
                                guildId: k,
                                userId: e.id,
                                avatar: n.guildMemberAvatar,
                                size: 80
                            }) : e.getAvatarURL(k, 80), {
                                guildId: k,
                                channelId: l.channel_id
                            })
                        },
                        renderPopout: R,
                        shouldShow: A,
                        position: a.tq ? "window_center" : "right",
                        onRequestClose: M,
                        children: function(e) {
                            e.onClick;
                            var t = E(e, ["onClick"]);
                            return (0, o.jsx)(u.Clickable, P(j({
                                tag: "span"
                            }, t, z), {
                                className: c()(z.className, h().clickable, T)
                            }))
                        }
                    })
                } else t = (0, o.jsx)(u.Clickable, P(j({}, z), {
                    className: c()(z.className, T)
                }));
                var Q = null != L ? L[r.SYSTEM_TAG] : null,
                    X = null != L ? L[r.BADGES] : null;
                return (0, o.jsxs)(o.Fragment, {
                    children: [null != Q && v ? (0, o.jsxs)(o.Fragment, {
                        children: [" ", Q, " "]
                    }) : null, F ? (0, o.jsx)(u.RoleDot, {
                        color: V,
                        name: G,
                        className: h().roleDot
                    }) : null, t, null != X ? (0, o.jsx)(o.Fragment, {
                        children: X
                    }) : null, null == Q || v ? null : Q, null != l && (0, p.Z)(l) && q && _ ? (0, o.jsx)(w, {}) : null]
                })
            }
        }
    }
]);