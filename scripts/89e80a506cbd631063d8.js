(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6343"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), i.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                a = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                i = RegExp("^[^" + a + "]*[" + r + "]"),
                l = RegExp("^[^" + r + "]*[" + a + "]")
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return d
                }
            }), n("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                a = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                s = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                o = (e, t) => {
                    for (var n in t || (t = {})) i.call(t, n) && s(e, n, t[n]);
                    if (a)
                        for (var n of a(t)) l.call(t, n) && s(e, n, t[n]);
                    return e
                };
            let u = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => u(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => u(t)(e)
                        }
                    }
                },
                d = (e, t) => (n, r, a) => {
                    let i, l, s = o({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => o(o({}, t), e)
                    }, t);
                    (s.blacklist || s.whitelist) && console.warn("The ".concat(s.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        f = new Set;
                    try {
                        i = s.getStorage()
                    } catch (e) {}
                    if (!i) return e(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(s.name, "', the given storage is currently unavailable.")), n(...t)
                    }, r, a);
                    !i.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(s.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let g = u(s.serialize),
                        h = () => {
                            let e;
                            let t = s.partialize(o({}, r()));
                            s.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = s.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), s.blacklist && s.blacklist.forEach(e => delete t[e]);
                            let n = g({
                                state: t,
                                version: s.version
                            }).then(e => i.setItem(s.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        p = a.setState;
                    a.setState = (e, t) => {
                        p(e, t), h()
                    };
                    let m = e(function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            n(...t), h()
                        }, r, a),
                        v = () => {
                            var e;
                            if (!i) return;
                            d = !1, c.forEach(e => e(r()));
                            let t = (null == (e = s.onRehydrateStorage) ? void 0 : e.call(s, r())) || void 0;
                            return u(i.getItem.bind(i))(s.name).then(e => {
                                if (e) return s.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === s.version) return e.state;
                                    if (s.migrate) return s.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(l = s.merge(e, null != (t = r()) ? t : m), !0), h()
                            }).then(() => {
                                null == t || t(l, void 0), d = !0, f.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return a.persist = {
                        setOptions: e => {
                            s = o(o({}, s), e), e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == i ? void 0 : i.removeItem) || e.call(i, s.name)
                        },
                        rehydrate: () => v(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, v(), l || m
                }
        },
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        942055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("759843"),
                i = n("872717"),
                l = n("77078"),
                s = n("363396"),
                o = n("79798"),
                u = n("145131"),
                d = n("701909"),
                c = n("49111"),
                f = n("988268"),
                g = n("782340"),
                h = n("25170"),
                p = n("348044");

            function m(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    channel: m,
                    message: v
                } = e;
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": "clyde-authorize-modal",
                    size: l.ModalSize.DYNAMIC,
                    impression: {
                        impressionName: a.ImpressionNames.USER_CLYDE_AI_CONSENT_MODAL
                    },
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        direction: u.default.Direction.HORIZONTAL,
                        className: h.header,
                        separator: !1,
                        children: [(0, r.jsx)("img", {
                            src: p,
                            className: h.clydeIcon,
                            alt: ""
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-lg/bold",
                            children: g.default.Messages.CLYDE_MODAL_TITLE
                        }), (0, r.jsx)(o.default, {
                            type: f.BotTagTypes.AI
                        })]
                    }), (0, r.jsxs)(l.ModalContent, {
                        className: h.container,
                        children: [(0, r.jsx)("div", {
                            className: h.divider
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-xs/bold",
                            className: h.subheading,
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SUBHEADING
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SECTION
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-xs/bold",
                            className: h.subheading,
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SUBHEADING
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SECTION.format({
                                guidelinesURL: c.MarketingURLs.GUIDELINES,
                                privacyPolicyURL: c.MarketingURLs.PRIVACY
                            })
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-xs/bold",
                            className: h.subheading,
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SUBHEADING
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SECTION
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            className: h.subheading,
                            children: g.default.Messages.CLYDE_MODAL_LEARN_MORE.format({
                                learnMoreURL: d.default.getArticleURL(c.HelpdeskArticles.CLYDE_AI)
                            })
                        })]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        direction: u.default.Direction.HORIZONTAL,
                        className: h.footer,
                        children: [(0, r.jsx)(l.Button, {
                            size: l.ButtonSizes.MEDIUM,
                            look: l.ButtonLooks.BLANK,
                            className: h.cancelButton,
                            onClick: n,
                            children: g.default.Messages.CANCEL
                        }), (0, r.jsx)(l.Button, {
                            size: l.ButtonSizes.MEDIUM,
                            onClick: () => {
                                i.default.put({
                                    url: c.Endpoints.USER_CLYDE_CONSENT,
                                    body: {
                                        consent: !0
                                    }
                                }).then(() => {
                                    (0, s.retrySendMessage)(m, v), n()
                                }).catch(() => {
                                    n()
                                })
                            },
                            children: g.default.Messages.CONTINUE
                        })]
                    })]
                })
            }
        },
        613387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("446674"),
                a = n("913144");
            let i = {};
            class l extends r.default.Store {
                getOptions(e) {
                    return i[e]
                }
            }
            l.displayName = "SendMessageOptionsStore";
            var s = new l(a.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (i[t.id] = n), null != t.nonce && t.nonce in i && delete i[t.nonce]
                }
            })
        },
        409058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("702976");
            var r = n("819689"),
                a = n("916565");

            function i(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (r.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != i.applicationId && (0, a.retryCommandMessage)(t, e, i.applicationId);
                    return
                }
                let {
                    content: l,
                    tts: s,
                    flags: o,
                    nonce: u,
                    poll: d
                } = t;
                r.default.sendMessage(e.id, {
                    content: l,
                    tts: s,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: u,
                    flags: o,
                    ...i,
                    poll: d
                })
            }
        },
        363396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return I
                },
                copyId: function() {
                    return S
                },
                copyLink: function() {
                    return C
                },
                deleteMessage: function() {
                    return O
                },
                editMessage: function() {
                    return A
                },
                markMessageUnread: function() {
                    return L
                },
                pinMessage: function() {
                    return N
                },
                publishMessage: function() {
                    return R
                },
                retrySendMessage: function() {
                    return _
                },
                replyToMessage: function() {
                    return y
                },
                createThread: function() {
                    return b
                },
                goToThread: function() {
                    return D
                },
                markMessageAsReminder: function() {
                    return T
                },
                markMessageRemindersAsComplete: function() {
                    return w
                }
            }), n("37983"), n("884691"), n("77078");
            var r = n("828986"),
                a = n("819689"),
                i = n("249561"),
                l = n("550762"),
                s = n("592407");
            n("377114");
            var o = n("931318"),
                u = n("529805"),
                d = n("967241"),
                c = n("271938"),
                f = n("42203"),
                g = n("599110"),
                h = n("404008"),
                p = n("306160"),
                m = n("659500"),
                v = n("613387"),
                M = n("456936"),
                E = n("409058"),
                x = n("49111");

            function I(e) {
                let t = e.getGuildId();
                null != t && s.default.open(t, x.GuildSettingsSections.OVERVIEW)
            }

            function S(e, t, n) {
                (0, p.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function C(e, t) {
                g.default.track(x.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, p.copy)((0, h.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function O(e, t, n) {
                t.state === x.MessageStates.SEND_FAILED || n.shiftKey ? a.default.deleteMessage(e.id, t.id, t.state === x.MessageStates.SEND_FAILED) : i.default.confirmDelete(e, t)
            }

            function A(e, t) {
                a.default.startEditMessage(e.id, t.id, t.content)
            }

            function L(e, t) {
                (0, M.default)(e.id, t.id)
            }

            function N(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? r.default.pinMessage(e, t.id) : i.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? r.default.unpinMessage(e, t.id) : i.default.confirmUnpin(e, t)
            }

            function R(e, t) {
                (0, l.default)(e.id, t.id)
            }

            function _(e, t) {
                (0, E.default)(e, t, void 0, v.default.getOptions(t.id))
            }

            function y(e, t, n) {
                let r = e.isPrivate(),
                    a = t.author.id === c.default.getId();
                (0, u.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !a,
                    showMentionToggle: !r && !a
                }), m.ComponentDispatch.dispatchToLastSubscribed(x.ComponentActions.TEXTAREA_FOCUS)
            }

            function b(e, t) {
                (0, d.openThreadSidebarForCreating)(e, t, "Message")
            }

            function D(e, t) {
                let n = f.default.getChannel(t.id);
                null != n && (0, d.openThreadSidebarForViewing)(n)
            }

            function T(e, t) {
                (0, o.addMessageReminders)(t)
            }

            function w(e, t) {
                (0, o.completeMessageReminders)(t.id)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("65597"),
                i = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, a.default)([i.default], () => i.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                a = n("65597"),
                i = n("526887"),
                l = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(i.ConfettiCannonContext), t = (0, a.default)([l.default], () => l.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = r.useMemo(() => ({
                    fire: (r, a, i) => {
                        var l, s;
                        let o = (null == i ? void 0 : i.settings) != null ? {
                                ...t,
                                ...i.settings
                            } : t,
                            u = n(o);
                        e(r, a, u, (null !== (l = null == i ? void 0 : i.count) && void 0 !== l ? l : o.confettiCount) * (null !== (s = null == i ? void 0 : i.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == i ? void 0 : i.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("803182"),
                a = n("308503"),
                i = n("49111");

            function l(e) {
                let t = (0, r.matchPath)(null != e ? e : "", {
                    path: i.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === i.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, r.matchPath)(null != e ? e : "", {
                    path: i.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var s = (0, a.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = l(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: r
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: r,
                        basePath: t
                    })
                }
            }))
        },
        69890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return s
                },
                formatMessageCountLabel: function() {
                    return u
                }
            });
            var r = n("299039"),
                a = n("648564"),
                i = n("782340");
            let l = e => r.default.compare("992549565104128000", e) > -1,
                s = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = l(t);
                        return (null == t || n) && e >= a.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= a.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                o = (e, t, n) => {
                    let r = s(e, n);
                    return "0" === r ? i.default.Messages.SEE_THREAD : t.format({
                        count: r
                    })
                },
                u = (e, t) => o(e, i.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return h
                }
            });
            var r, a, i = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                o = n("77078"),
                u = n("36694"),
                d = n("381546"),
                c = n("68238"),
                f = n("423487"),
                g = n("557296");
            (r = a || (a = {}))[r.WARNING = 0] = "WARNING", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.POSITIVE = 3] = "POSITIVE";
            var h = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: r,
                    textColor: a = "text-normal",
                    textVariant: l = "text-sm/medium"
                } = e, h = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return c.default;
                        case 2:
                            return d.default;
                        case 3:
                            return u.default
                    }
                }(n), p = function(e) {
                    switch (e) {
                        case 0:
                            return g.warning;
                        case 1:
                            return g.info;
                        case 2:
                            return g.error;
                        case 3:
                            return g.positive
                    }
                }(n);
                return (0, i.jsxs)("div", {
                    className: s(g.container, p, r),
                    children: [(0, i.jsx)("div", {
                        className: g.iconDiv,
                        children: (0, i.jsx)(h, {
                            className: g.icon
                        })
                    }), (0, i.jsx)(o.Text, {
                        className: g.text,
                        color: a,
                        variant: l,
                        children: t
                    })]
                })
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("926001"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, i.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                i = n("578478"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, i.ImageIcon, void 0, {
                    size: 24
                })
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return g
                }
            });
            var r = n("597755"),
                a = n.n(r),
                i = n("815157"),
                l = n("271938"),
                s = n("49111");
            let o = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(s.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d();
                return u(e, !1, e === o ? "tar.gz" : null)
            }

            function g(e, t, n) {
                let r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, i.default)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    case "Android":
                        return (0, i.default)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        }
    }
]);